import {
  collection,
  getDocs,
  setDoc,
  doc,
  getFirestore,
} from "firebase/firestore";
import { createContext, useContext, useEffect, useMemo, useState } from "react";
import {
  onAuthStateChanged,
  signOut,
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signInWithRedirect,
} from "firebase/auth";
import { app } from "../database/firebase";
import { auth, db, provider } from "../database/firebase";
import { useCollection } from "react-firebase-hooks/firestore";
import { useAuthState } from "react-firebase-hooks/auth";
import { setCookie } from "cookies-next";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { useRouter } from "next/router";

const CoursesContext = createContext({});

const CoursesProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const db = getFirestore(app);
  const [user, loadingUser, errorUser] = useAuthState(auth);
  const router = useRouter();

  const loginUser = () => {
    signInWithPopup(auth, provider).then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      const user = result.user;
      // code to set cookie login to true
      setCookie("login", true);
      console.log("user", user);
      router.push("/dashboard");
    });
  };

  const [categories] = useCollectionData(collection(db, "categories"), {});
  const [courses] = useCollectionData(collection(db, "courses"), {});

  const logoutUser = () => {
    signOut(auth);
  };
  return (
    <CoursesContext.Provider
      value={{
        loginUser,
        logoutUser,
        user,
        courses,
        categories,
      }}
    >
      {children}
    </CoursesContext.Provider>
  );
};

export { CoursesContext, CoursesProvider };

// 🔖 this code should be removed during - code cleaning

// useEffect(() => {
//   const getCourses = async () => {
//     const coursesSnapshot = await getDocs(coursesCollection);
//     const coursesList = coursesSnapshot.docs.map((doc) => {
//       return { id: doc.id, ...doc.data() };
//     });
//     setCourses(coursesList);
//     setLoading(false);
//   };
//   getCourses();
// }, [coursesCollection]);

// useEffect(() => {
//   const getUsers = async () => {
//     const usersSnapshot = await getDocs(usersCollection);
//     const usersList = usersSnapshot.docs.map((doc) => {
//       return { id: doc.id, ...doc.data() };
//     });
//     setUsers(usersList);
//     setLoading(false);
//   };
//   getUsers();
// }, [usersCollection]);

// useEffect(() => {
//   const getCategories = async () => {
//     const categoriesSnapshot = await getDocs(categoriesCollection);
//     const categoriesList = categoriesSnapshot.docs.map((doc) => {
//       return { id: doc.id, ...doc.data() };
//     });
//     setCategories(categoriesList);
//     setLoading(false);
//   };
//   getCategories();
// }, [categoriesCollection]);
