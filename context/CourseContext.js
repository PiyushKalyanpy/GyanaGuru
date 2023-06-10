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

export const CourseContext = React.createContext();

export function useCourse() {
  return useContext(CourseContext);
}

export function CourseProvider({ children }) {
  const [categories, setCategories] = useState([]);
  const [playlist, setPlaylist] = useState([]);
  const [videos, setVideos] = useState([]);

  // Category CRUD ----------------------------------------------

  function addCategory(category) {
    addDoc(collection(db, "categories"), category);
  }

  function deleteCategory(id) {
    deleteDoc(doc(db, "categories", id));
  }
  
  function updateCategory(id, course) {
    updateDoc(doc(db, "categories", id), course);
  }

  const getCategory = () => {
    const unsubscribe = () =>
      getDocs(collection(db, "categories")).then((querySnapshot) => {
        const categoryData = [];
        querySnapshot.forEach((doc) => {
          categoryData.push({ ...doc.data(), id: doc.id });
        });
        setCategories(categoryData);
      });
    // if category is empty, get all courses
    if (categories.length === 0) {
      unsubscribe();
    }
  };

  // Playlist CRUD ----------------------------------------------

  function addPlaylist(playlist) {
    addDoc(collection(db, "playlists"), playlist);
  }

  function deletePlaylist(id) {
    deleteDoc(doc(db, "playlists", id));
  }

  function updatePlaylist(id, playlist) {
    updateDoc(doc(db, "playlists", id), playlist);
  }

  const getPlaylist = () => {
    const unsubscribe = () =>
      getDocs(query(collection(db, "playlists"), limit(10))).then(
        (querySnapshot) => {
          const playlistData = [];
          querySnapshot.forEach((doc) => {
            playlistData.push({ ...doc.data(), id: doc.id });
          });
          setPlaylist(playlistData);
        }
      );
    // if playlist is empty, get all playlists
    if (playlist.length === 0) {
      unsubscribe();
    }
  };


  // Video CRUD ----------------------------------------------

  function addVideo(video) {
    addDoc(collection(db, "videos"), video);
  }

  function deleteVideo(id) {
    deleteDoc(doc(db, "videos", id));
  }

  const getVideos = (id) => {
    const unsubscribe = () =>

      getDocs(collection(db, "videos"), where("playlistId"==id)  ).then((querySnapshot) => {
        const videoData = [];
        querySnapshot.forEach((doc) => {
          videoData.push({ ...doc.data(), id: doc.id });
        });
        setVideos(videoData);
      });
    // if video is empty, get all videos
    if (videos.length === 0) {
      unsubscribe();
    }
  };


  React.useEffect(() => {
    getCategory();
    getPlaylist();
  }, []);

  const value = {
    categories,
    addCategory,
    addPlaylist,
    deleteCategory, 
    updateCategory,
    playlist,
    updatePlaylist,
    videos,
    getPlaylist,
    deletePlaylist,
    addVideo,
    deleteVideo,
    getVideos,
    getCategory,
  };

  return (
    <CourseContext.Provider value={value}>{children}</CourseContext.Provider>
  );
}
