"use client"
import { useEffect, useState } from "react";
import AiBanner from "./components/AiBanner";
import TopBar from "./components/TopBar";
import CategoryList from "./components/CategoryList";
import { useCourse } from "@/context/courseContext";


const Course = () => {

    const { categories, getCategories } = useCourse();

    useEffect(() => {
        document.title = "Course | AI Tutor";
        getCategories();
        console.log("Course page mounted", categories);
    }, []);

    return (
        <div className="flex flex-col w-full bg-zinc-100 p-4 min-h-screen gap-8">
            <TopBar/>
            <AiBanner />
            <CategoryList title="Categories"  data={categories}  />
        </div>
    );
}

export default Course;