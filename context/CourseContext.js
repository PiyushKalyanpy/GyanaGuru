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
} from "firebase/firestore";
import { serverTimestamp, ref, push, set, get } from "firebase/database";
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
  const router = useRouter();
  const { currentUser } = useAuth();
  const stopDBCalls = 1;
  const getData =
    currentUser &&
    1 && stopDBCalls &&
    (router.pathname.startsWith("/courses") ||
      router.pathname.startsWith("/admin"));
  const getRData = currentUser && 1 && router.pathname.startsWith("/courses") && stopDBCalls;

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

  // video updation functions, (likes, views, dislike, rating, comment)

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

  // comment on video with realtime database ----------------------
  const addComment = (videoId, comment) => {
    console.log(videoId, comment);
    if (videoId) {
      push(ref(rtdb, `comments/${videoId}/${currentUser.uid}`), {
        comment: comment,
        createdAt: serverTimestamp(),
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
      get(ref(rtdb, `comments/${videoId}`))
        .then((snapshot) => {
          if (snapshot.exists()) {
            setComments(snapshot.val());
            console.log("🧑 Comment data downloaded",comments );
          } else {
            console.log("No data available");
          }
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };

  const value = {
    categories,
    addCategory,
    addPlaylist,
    addComment,
    deleteCategory,
    comments,
    updateCategory,
    playlist,
    updatePlaylist,
    getComments,
    videos,
    deletePlaylist,
    addVideo,
    updateVideoLike,
    deleteVideo,
  };

  return (
    <CourseContext.Provider value={value}>{children}</CourseContext.Provider>
  );
}
