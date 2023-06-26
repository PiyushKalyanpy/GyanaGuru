import React, { useState, useContext } from 'react';
import { db } from '../database/firebase';
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
} from 'firebase/firestore';
import { useRouter } from 'next/router';
import useSWR from 'swr';
import { getCookie } from 'cookies-next';

export const CourseContext = React.createContext();

export function useCourse() {
  return useContext(CourseContext);
}

export function CourseProvider({ children }) {
  const [categories, setCategories] = useState([]);
  const [playlist, setPlaylist] = useState([]);
  const [videos, setVideos] = useState([]);
  const router = useRouter();
  const getData = false;

  // Category CRUD ----------------------------------------------

  function addCategory(category) {
    addDoc(collection(db, 'categories'), category);
  }

  function deleteCategory(id) {
    deleteDoc(doc(db, 'categories', id));
  }

  function updateCategory(id, course) {
    updateDoc(doc(db, 'categories', id), course);
  }

  const { data: category, error: categoryError } = useSWR('categories', () => {
    if (categories.length === 0 && getData) {
      getDocs(collection(db, 'categories')).then((querySnapshot) => {
        const data = querySnapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setCategories(data);
        console.log('🧑 Category data downloaded');
        return data;
      }),
        null;
    }
  });

  // Playlist CRUD ----------------------------------------------

  function addPlaylist(playlist) {
    addDoc(collection(db, 'playlists'), playlist);
  }

  function deletePlaylist(id) {
    deleteDoc(doc(db, 'playlists', id));
  }

  function updatePlaylist(id, playlist) {
    updateDoc(doc(db, 'playlists', id), playlist);
  }

  const { data: playlists, error: playlistError } = useSWR('playlists', () => {
    if (playlist.length === 0 && getData) {
      getDocs(query(collection(db, 'playlists'), limit(4))).then(
        (querySnapshot) => {
          const data = querySnapshot.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id,
          }));
          setPlaylist(data);
          console.log('🧑 Playlist data downloaded');
          return data;
        }
      ),
        null;
    }
  });

  // Video CRUD ----------------------------------------------

  function addVideo(video) {
    addDoc(collection(db, 'videos'), video);
  }

  function deleteVideo(id) {
    deleteDoc(doc(db, 'videos', id));
  }

  const getVideos = (id) => {
    onSnapshot(
      query(collection(db, 'videos'), where('playlistId', '==', id)),
      (querySnapshot) => {
        const data = querySnapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setVideos(data);
        console.log('🧑 Video data downloaded');
        return data;
      }
    );
  };

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
    getVideos,
  };

  return (
    <CourseContext.Provider value={value}>{children}</CourseContext.Provider>
  );
}
