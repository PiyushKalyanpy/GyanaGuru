'use client';
import { useContext, createContext, useState, useEffect } from 'react';
import { CategoryServiceImpl } from './services/categoryService';

const CourseContext = createContext();

export const CourseContextProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const categoryService = new CategoryServiceImpl();

  const getCategories = async () => {
    if (categories.length === 0) {
      const data = await categoryService.getCategories();
      setCategories(data);
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
