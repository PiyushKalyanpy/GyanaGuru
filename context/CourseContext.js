import React, { useState, useContext, useEffect } from "react";
import { db, rtdb } from "../database/firebase";
import {
  collection,
  addDoc,
  getDoc,
  getDocs,
  deleteDoc,
  doc,
  updateDoc,
  arrayUnion,
  serverTimestamp,
} from "firebase/firestore";
import { update, ref, push, onValue, get, set, remove } from "firebase/database";
import { useRouter } from "next/router";
import { showToast } from "@/components/util/Toast";
import { useAuth } from "./AuthContext";

export const CourseContext = React.createContext();

export function useCourse() {
  return useContext(CourseContext);
}

export function CourseProvider({ children }) {
  const [categories, setCategories] = useState([]);
  const [playlist, setPlaylist] = useState([]);
  const [videos, setVideos] = useState([]);
  const [comments, setComments] = useState([]);
  const [notes, setNotes] = useState([]);
  const router = useRouter();
  const { currentUser } = useAuth();

  const stopDBCalls = 1;
  const getData =
    currentUser &&
    1 &&
    stopDBCalls &&
    (router.pathname.startsWith("/courses") ||
      router.pathname.startsWith("/admin"));
  const getRData =
    currentUser && 1 && router.pathname.startsWith("/courses") && stopDBCalls;

  // Category CRUD ----------------------------------------------

  function addCategory(category) {
    addDoc(collection(db, "categories"), category)
      .then(() => {
        showToast("Category added successfully", "success");
      })
      .catch((error) => {
        showToast(error.message, "error");
      });
  }

  function deleteCategory(id) {
    deleteDoc(doc(db, "categories", id));
  }

  function updateCategory(id, course) {
    updateDoc(doc(db, "categories", id), course);
  }

  useEffect(() => {
    if (categories.length === 0 && getData) {
      getDocs(collection(db, "categories")).then((querySnapshot) => {
        const data = querySnapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setCategories(data);
        console.log("🧑 Category data downloaded");
      });
    }
  }, [categories, getData]);

  // Playlist CRUD ----------------------------------------------

  function addPlaylist(playlist) {
    addDoc(collection(db, "playlists"), playlist)
      .then(() => {
        showToast("Playlist added successfully", "success");
      })
      .catch((error) => {
        showToast(error.message, "error");
      });
  }

  function deletePlaylist(id) {
    deleteDoc(doc(db, "playlists", id));
  }

  function updatePlaylist(id, playlist) {
    updateDoc(doc(db, "playlists", id), playlist);
  }

  useEffect(() => {
    if (playlist.length === 0 && getData) {
      getDocs(collection(db, "playlists")).then((querySnapshot) => {
        const data = querySnapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setPlaylist(data);
        console.log("🧑 Playlist data downloaded");
      });
    }
  }, [playlist, getData]);

  // Video CRUD ----------------------------------------------

  function addVideo(video) {
    addDoc(collection(db, "videos"), video)
      .then(() => {
        showToast("Video added successfully", "success");
      })
      .catch((error) => {
        showToast(error.message, "error");
      });
  }

  function deleteVideo(id) {
    deleteDoc(doc(db, "videos", id));
  }

  useEffect(() => {
    if (videos.length === 0 && getData) {
      getDocs(collection(db, "videos")).then((querySnapshot) => {
        const data = querySnapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setVideos(data);
        console.log("🧑 Video data downloaded");
      });
    }
  }, [videos, getData]);

  const updateVideoLike = async (id, likes) => {
    if (likes) {
      // logic that one user can like only once

      const docRef = doc(db, "videos", id);
      await updateDoc(docRef, {
        likes: likes,
      })
        .then(() => {
          showToast("Video liked successfully", "success");
          // update the like in video state

          updateDoc(doc(db, "videos", id), {
            // add user id in likedBy array
            likedBy: arrayUnion(currentUser.uid),
          });
          setVideos((prev) => {
            const index = prev.findIndex((item) => item.id === id);
            const updated = [...prev];
            updated[index].likes = likes;
            return updated;
          });
        })
        .catch((error) => {
          showToast(error.message, "error");
        });
    }
  };

  const addComment = (videoId, comment) => {
    console.log(videoId, comment);
    if (videoId) {
      push(ref(rtdb, `comments/${videoId}`), {
        comment: comment,
      })
        .then(() => {
          showToast("Comment added successfully", "success");
        })
        .catch((error) => {
          showToast(error.message, "error");
        });
    }
  };

  const getComments = (videoId) => {
    if (videoId && getRData) {
      onValue(ref(rtdb, `comments/${videoId}`), (snapshot) => {
        const data = snapshot.val();
        console.log("🧑 Comment data downloaded");
        setComments(data);
      });
    }
  };

  const addReactionOnComment = (videoId, commentId, reaction) => {
    if (videoId && commentId) {
      const commentRef = ref(rtdb, `comments/${videoId}/${commentId}/comment`);

      // Retrieve the current reaction object from the comment
      get(commentRef)
        .then((snapshot) => {
          const currentReaction = snapshot.val()?.reaction || {};
          console.log(currentReaction, "from db");

          // Increment the count if the emoji is already present
          if (currentReaction[reaction]) {
            currentReaction[reaction].reactionCount += 1;
          } else {
            // Add a new emoji with count 1 if it doesn't exist
            currentReaction[reaction] = {
              reactionIcon: reaction,
              reactionCount: 1,
              uid: currentUser?.uid,
            };
          }

          // Update the reaction field in the comment with the modified reaction object
          update(commentRef, {
            reaction: currentReaction,
          })
            .then(() => {
              showToast("Reaction added successfully", "success");
            })
            .catch((error) => {
              showToast(error.message, "error");
            });
        })
        .catch((error) => {
          showToast(error.message, "error");
        });
    }
  };

  // user notes (set note, get note ) --------------------------

  const setNote = (userId, videoId, note) => {
    if (userId && note && videoId) {
      const notesRef = ref(rtdb, `notes/${userId}/${videoId}`);
      push(notesRef, {
        note: note,
      });
    }
  };

  const getNote = (userId, videoId) => {
    if (userId && videoId && getRData ) {
      const notesRef = ref(rtdb, `notes/${userId}/${videoId}`);
      onValue(notesRef, (snapshot) => {
        console.log("called 📞")
        const data = snapshot.val();
        setNotes(data);
        console.log("🧑 Note data downloaded");
      });
    }
  };

  const deleteNote = (userId, videoId, noteId) => {
    if (userId && videoId && noteId) {
      const notesRef = ref(rtdb, `notes/${userId}/${videoId}/${noteId}`);
      remove(notesRef);
    }
  }

  const value = {
    categories,
    addCategory,
    getNote,
    setNote,
    addPlaylist,
    addComment,
    deleteCategory,
    notes,
    comments,
    deleteNote,
    updateCategory,
    playlist,
    updatePlaylist,
    getComments,
    videos,
    deletePlaylist,
    addVideo,
    addReactionOnComment,
    updateVideoLike,
    deleteVideo,
  };

  return (
    <CourseContext.Provider value={value}>{children}</CourseContext.Provider>
  );
}
