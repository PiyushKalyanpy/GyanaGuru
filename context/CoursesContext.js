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

const CoursesContext = createContext({});

const CoursesProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);

  const db = getFirestore(app);

  const coursesCollection = useMemo(() => collection(db, "courses"), [db]);
  const usersCollection = useMemo(() => collection(db, "users"), [db]);
  const [currentUser, setCurrentUser] = useState(null);
  const [users, setUsers] = useState([]);
  const [categories, setCategories] = useState([]);

  const categoriesCollection = useMemo(
    () => collection(db, "categories"),
    [db]
  );

  const [courses, setCourses] = useState([]);

  const addUserToFirebase = async (user) => {
    await setDoc(doc(db, "users", user && user.email), {
      name: user && user.displayName,
      email: user && user.email,
      photo: user && user.photoURL,
    });
  };

  const handleUserAuth = async () => {
    const userData = await signInWithPopup(auth, provider);
    const user = userData.user;
    console.log(user, "🚀");
    setCurrentUser(user);
    addUserToFirebase(currentUser);
  };

  return (
    <CoursesContext.Provider
      value={{
        courses,
        users,
        categories,
        loading,
        handleUserAuth,
        currentUser,
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
