'use client';
import { useContext, createContext, useState, useEffect } from 'react';
import {
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
} from 'firebase/auth';
import { auth, db } from '../data/online/firebase';
import { getDoc, doc, setDoc, updateDoc } from 'firebase/firestore';
import { useRouter } from 'next/navigation';

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const authStateChanged = async user => {
    if (!user) {
      setCurrentUser(null);
      setIsLoading(false);
      return;
    }

    // check user in database if not create one
    const userDoc = await getDoc(doc(db, 'users', user.uid));
    if (!userDoc.exists()) {
      await setDoc(doc(db, 'users', user.uid), {
        uid: user.uid,
        email: user.email,
        name: user.displayName,
        photoURL: user.photoURL,
        role: 'user',
        createdAt: new Date(),
        lastSignIn: new Date(),
      });
    }
    // get user from database
    const newUserDoc = await getDoc(doc(db, 'users', user.uid));
    setCurrentUser(newUserDoc.data());
    setIsLoading(false);
    return;
  };

  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
  };

  const logout = () => {
    signOut(auth);
  };

  const updateCurrentUser = async() => {
    const userRef = doc(db, 'users', currentUser.uid);
    const newUserDoc = await getDoc(userRef);
    setCurrentUser(newUserDoc.data());
  };


  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, authStateChanged);
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <AuthContext.Provider value={{ currentUser, googleSignIn, logout, isLoading, updateCurrentUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(AuthContext);
};
