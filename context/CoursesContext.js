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

const CoursesContext = createContext({});

const CoursesProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);

  const db = getFirestore(app);

  const coursesCollection = useMemo(() => collection(db, "courses"), [db]);
  const usersCollection = useMemo(() => collection(db, "users"), [db]);
  const categoriesCollection = useMemo(
    () => collection(db, "categories"),
    [db]
  );

  const [courses, setCourses] = useState([]);
  useEffect(() => {
    const getCourses = async () => {
      const coursesSnapshot = await getDocs(coursesCollection);
      const coursesList = coursesSnapshot.docs.map((doc) => {
        return { id: doc.id, ...doc.data() };
      });
      setCourses(coursesList);
      setLoading(false);
    };
    getCourses();
  }, [coursesCollection]);

  const [users, setUsers] = useState([]);
  useEffect(() => {
    const getUsers = async () => {
      const usersSnapshot = await getDocs(usersCollection);
      const usersList = usersSnapshot.docs.map((doc) => {
        return { id: doc.id, ...doc.data() };
      });
      setUsers(usersList);
      setLoading(false);
    };
    getUsers();
  }, [usersCollection]);

  const [categories, setCategories] = useState([]);
  useEffect(() => {
    const getCategories = async () => {
      const categoriesSnapshot = await getDocs(categoriesCollection);
      const categoriesList = categoriesSnapshot.docs.map((doc) => {
        return { id: doc.id, ...doc.data() };
      });
      setCategories(categoriesList);
      setLoading(false);
    };
    getCategories();
  }, [categoriesCollection]);

  return (
    <CoursesContext.Provider value={{ courses, users, categories, loading }}>
      {children}
    </CoursesContext.Provider>
  );
};

export { CoursesContext, CoursesProvider };
