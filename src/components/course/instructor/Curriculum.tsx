"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { uploadVideo } from "@/lib/actions/videos.actions";
import { FileIcon, VideoIcon } from "@radix-ui/react-icons";
import { useState } from "react";

const Curriculum = () => {
  const [curriculum, setCurriculum] = useState([]);
  const handleUpload = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const target = event.target as HTMLFormElement;
    const fileInput = target.elements.namedItem("video") as HTMLInputElement;

    if (fileInput.files && fileInput.files.length > 0) {
      const file = fileInput.files[0];
      const videoUrl = await uploadVideo(file);
      console.log(videoUrl);
    } else {
      console.error("No file selected");
    }
  };

  return (
    <div className="w-full border  flex place-content-center flex-col items-center">
      <form onSubmit={handleUpload}>
        <input type="file" name="video" />
        <button type="submit">Upload Video</button>
      </form>
      <ul className="flex flex-col gap-4 w-3/4">
        {sample.map((section, index) => (
          <li className="bg-zinc-100 rounded-xl flex flex-col gap-4  p-4 ">
            <h3 className="  font-semibold">
              Section {index + 1} : {section.title}
            </h3>
            <ul className="flex flex-col gap-4 transition ">
              {section.subsections.map((subsection, index) => {
                const [openVideoPannel, setOpenVideoPannel] = useState(false);
                return (
                  <li className="border p-4  bg-white rounded-xl flex flex-col gap-2  transition-all duration-300">
                    <div className="flex gap-2 items-center justify-between ">
                      <div className="flex gap-2 items-center">
                        Lectur {index + 1} : <VideoIcon /> {subsection.title}
                      </div>
                      <input
                        type="file"
                        name="file"
                        className="opacity-0 w-0"
                      />

                      <Button
                        variant={"outline"}
                        onClick={() => setOpenVideoPannel(!openVideoPannel)}
                      >
                        {" "}
                        Add content
                      </Button>
                    </div>
                    <div className={`${openVideoPannel ? "block" : "hidden"} border-t py-4`}>
                      <Input type="file"/>
                    </div>
                  </li>
                );
              })}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};
const sample = [
  {
    section: 1,
    title: "Introduction to Design Systems",
    subsections: [
      {
        title: "Basic Terms in Design Systems",
      },
      {
        title: "Overview of Design",
      },
    ],
  },
  {
    section: 2,
    title: "Design Systems",
    subsections: [
      {
        title: "What is a Design System?",
      },
      {
        title: "Components of Design Systems",
      },
    ],
  },
  {
    section: 3,
    title: "Design Principles",
    subsections: [
      {
        title: "Hierarchy",
      },
      {
        title: "Consistency",
      },
    ],
  },
  {
    section: 4,
    title: "UI Patterns",
    subsections: [
      {
        title: "Button Design",
      },
      {
        title: "Navigation Patterns",
      },
    ],
  },
];

export default Curriculum;
