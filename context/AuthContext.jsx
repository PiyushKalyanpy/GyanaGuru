import React, { useState, useContext } from "react";
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
import { doc, getDoc } from "firebase/firestore";
import { toast } from "react-toastify";
import { showToast } from "@/Components/util/Toast";

export const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  function signup(email, password) {
    const result = createUserWithEmailAndPassword(auth, email, password);
    result.then((userCredential) => {
      const user = userCredential.user;
      sendEmailVerification(user);
    });
    return result;
  }

  function login(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  function logout() {
    return signOut(auth);
  }

  function loginWithGoogle() {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider).then((result) => {
      getDoc(doc(db, "users", result.user.uid)).then((docSnap) => {
        if (docSnap.exists()) {
          setCookie(null, "user", JSON.stringify(docSnap.data()), {
            path: "/",
          });
        } else {
          showToast("User not found, please Sign Up", "error");
          setCookie(null, "user", JSON.stringify(result.user), { path: "/" });
        }
      });
    });
  }

  const value = {
    currentUser,
    signup,
    login,
    error,
    logout,
    loginWithGoogle,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
