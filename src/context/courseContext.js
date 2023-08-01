'use client';
import { useContext, createContext, useState } from 'react';
import { db } from '../data/online/firebase';
import { getDocs, collection } from 'firebase/firestore';

const CourseContext = createContext();

export const CourseContextProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getCategories = async () => {
    if (categories.length === 0) {
      await getDocs(collection(db, 'categories'))
        .then(doc => {
          console.log(
            'Document data:',
            doc.docs.map(doc => doc.data()),
          );
          const data = doc.docs.map(doc => doc.data());
          setCategories(data);
        })
        .catch(error => {
          console.log('Error getting document:', error);
        });
      setIsLoading(false);
    }
  };

  return (
    <CourseContext.Provider
      value={{
        categories,
        isLoading,
        getCategories,
        setIsLoading,
      }}
    >
      {children}
    </CourseContext.Provider>
  );
};

export const useCourse = () => useContext(CourseContext);
