import React, { useState, useContext } from "react";
import { db } from "../database/firebase";
import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
  onSnapshot,
  limit,
  where,
  query,
  updateDoc,
} from "firebase/firestore";
import { useRouter } from "next/router";
import useSWR from "swr";
import { showToast } from "@/components/util/Toast";

export const CourseContext = React.createContext();

export function useCourse() {
  return useContext(CourseContext);
}

export function CourseProvider({ children }) {
  const [categories, setCategories] = useState([]);
  const [playlist, setPlaylist] = useState([]);
  const [videos, setVideos] = useState([]);
  const router = useRouter();
  const getData = 1;

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

  const { data: category, error: categoryError } = useSWR("categories", () => {
    if (categories.length === 0 && getData) {
      getDocs(collection(db, "categories")).then((querySnapshot) => {
        const data = querySnapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setCategories(data);
        console.log("🧑 Category data downloaded");
        return data;
      }),
        null;
    }
  });

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

  const { data: playlists, error: playlistError } = useSWR("playlists", () => {
    if (playlist.length === 0 && getData) {
      getDocs(query(collection(db, "playlists"), limit(4))).then(
        (querySnapshot) => {
          const data = querySnapshot.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id,
          }));
          setPlaylist(data);
          console.log("🧑 Playlist data downloaded");
          return data;
        }
      ),
        null;
    }
  });

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

  const { data: video, error: videoError } = useSWR("videos", () => {
    if (videos.length === 0 && getData) {
      getDocs(collection(db, "videos")).then((querySnapshot) => {
        const data = querySnapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setVideos(data);
        console.log("🧑 Video data downloaded");
        return data;
      }),
        null;
    }
  });

  const value = {
    categories,
    addCategory,
    addPlaylist,
    deleteCategory,
    updateCategory,
    playlist,
    updatePlaylist,
    videos,
    deletePlaylist,
    addVideo,
    deleteVideo,
  };

  return (
    <CourseContext.Provider value={value}>{children}</CourseContext.Provider>
  );
}
