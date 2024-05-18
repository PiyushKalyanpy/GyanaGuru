"use client";
import {
  SkillAndLearning,
  BasicDetails,
  Publish,
  AddImages,
  AddVideos,
} from "@/components/course/create";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { onNextTab, onPrevTab } from "@/lib/utils";
import { getAuth } from "@clerk/nextjs/server";
import { useState } from "react";

const CreateCourse = () => {
  const tabValues = ["basic", "images", "videos", "skills", "publish"];
  const [tabValue, setTabValue] = useState("basic");

  return (
    <section>
      <div className="h-20 flex w-full items-center  bg-gray-100 p-8  gap-8">
        <h2 className="text-2xl font-medium"> Create course</h2>
        <Button
          onClick={() => {
            onNextTab({ tabValues, setTabValue, tabValue });
          }}
          variant="outline"
        >
          Next
        </Button>

        <Button
          onClick={() => {
            onPrevTab({ tabValues, setTabValue, tabValue });
          }}
          variant="outline"
        >
          Previous
        </Button>
        {tabValue}
      </div>
      <div className="flex flex-col gap-4  p-4 bg-gray-100">
        <BasicDetails />
        <AddImages />
        <AddVideos />
      </div>
    </section>
  );
};

export default CreateCourse;
