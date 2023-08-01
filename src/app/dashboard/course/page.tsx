'use client';
import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import { useCourse } from '@/context/courseContext';
const TopBar = dynamic(() => import('./components/TopBar'), { ssr: false });
const AiBanner = dynamic(() => import('./components/AiBanner'), { ssr: false });
const CategoryList = dynamic(() => import('./components/CategoryList'), {
  ssr: false,
});

const Course = () => {
  const { categories, getCategories } = useCourse();

  useEffect(() => {
    document.title = 'Course | AI Tutor';
    getCategories();
    console.log('Course page mounted', categories);
  }, []);

  return (
    <div className="flex flex-col w-full bg-zinc-100 p-4 min-h-screen gap-8">
      <TopBar />
      <AiBanner />
      <CategoryList title="Categories" data={categories} />
    </div>
  );
};

export default Course;
