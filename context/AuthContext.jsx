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

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

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

  const loginWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        const userRef = doc(db, "users", result.user.uid);
        getDoc(userRef)
          .then((docSnap) => {
            if (docSnap.exists()) {
              setCurrentUser(docSnap.data());
              setCookie(null, "user", JSON.stringify(result.user), {
                path: "/",
              });
              setCookie("login", true);
              router.push("/profile");
            } else {
              showToast("User not found, please enter details", "info");
              setCookie(null, "user", JSON.stringify(result.user), {
                path: "/",
              });
              router.push("/profile");
            }
          })
          .catch((error) => {
            showToast(error.message, "error");
          });
      })
      .catch((error) => {
        showToast(error.message, "error");
      });
  };

  function addUserToDatabase(user) {
    if (user) {
      const userRef = doc(db, "users", user.uid);
      setDoc(userRef, user)
        .then(() => {
          showToast("User added successfully", "success");
          router.push("/dashboard");
        })
        .catch((error) => {
          showToast(error.message, "error");
        });

      setCookie(null, "user", JSON.stringify(user), { path: "/" });
    }
  }

  useEffect(() => {
    const fetchCurrentUser = async () => {
      const user = currentUser || auth.currentUser;
      if (user) {
        const userRef = doc(db, "users", user.uid);
        try {
          console.log("📞 Call...");
          const docSnap = await getDoc(userRef);
          if (docSnap.exists()) {
            setCurrentUser(docSnap.data());
          } else {
            showToast("User not found, please Sign Up", "error");
            setCurrentUser(null);
          }
        } catch (error) {
          showToast(error.message, "error");
        }
      }
      setLoading(false);
    };

    fetchCurrentUser();
  }, []);

  const value = {
    currentUser,
    signup,
    login,
    logout,
    loginWithGoogle,
    addUserToDatabase,
    };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
