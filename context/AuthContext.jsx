'use client'

import React, { useState, useContext, useEffect } from "react";
import { auth, db } from "../database/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendEmailVerification,
  signOut,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { setCookie } from "cookies-next";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import { showToast } from "@/components/util/Toast";

export const AuthContext = React.createContext();

// export function useAuth() {
//   return useContext(AuthContext);
// }

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  const loginWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider).then((result) => {
      // if user is new then create a new user in database
      const isNewUser = result.additionalUserInfo.isNewUser;
      console.log(isNewUser);
      if (isNewUser) {
        const user = result.user;
        const userRef = doc(db, "users", user.uid);
        setDoc(userRef, {
          name: user.displayName,
          email: user.email,
          photoURL: user.photoURL,
          uid: user.uid,
          createdAt: new Date(),
        });
      }
    });
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoading(false);
      if (user) {
        setCookie("uid", user.uid);
      }
    });
  }, []);

  const value = {
    loginWithGoogle,
    currentUser,
  };

  return (
    <AuthContext.Provider value={{ value }}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
