"use client";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { uploadVideo } from "@/lib/actions/videos.actions";
import {
  CheckCircledIcon,
  CircleIcon,
  MinusCircledIcon,
  VideoIcon,
} from "@radix-ui/react-icons";
import { courseStore } from "@/lib/store/course.store";
import { calculateVideoDuration } from "@/lib/utils";

const Subsection = ({ lecture, sectionIndex }: any) => {
  const [openVideoPanel, setOpenVideoPanel] = useState(false);
  const [progress, setProgress] = useState(0);
  const { title, lectureIndex, url, contentLength } = lecture;
  const setContent = courseStore((state) => state.setContent);
  const deleteLecture = courseStore((state) => state.deleteLecture);

  const fileUpload = async (event: any) => {
    const file = event.target.files[0];
    if (file.type.includes("video")) {
      const contentLength: any = await calculateVideoDuration(file);
      setContent(sectionIndex, lectureIndex, {
        contentLength: contentLength.toString(),
      });
    }
    const videoUrl = await uploadVideo(file, setProgress);
    setContent(sectionIndex, lectureIndex, { url: videoUrl });
  };

  return (
    <li className="border p-4  bg-white rounded-xl flex flex-col gap-2  transition-all duration-300">
      <div className="flex gap-2 items-center justify-between ">
        <div className="flex gap-2 items-center">
          Lecture {lectureIndex} : <VideoIcon /> {title}
        </div>
        <input type="file" name="file" className="opacity-0 w-0" />
        <div className="flex gap-2 items-center ">
          <p className="bg-gray-100  px-2 py-1 rounded-xl">
            {contentLength && contentLength}
          </p>
          <Button
            onClick={() => setOpenVideoPanel(!openVideoPanel)}
            variant={"outline"}
            className="flex gap-2 items-center "
          >
            <span>
              {url || contentLength ? (
                <CheckCircledIcon className="bg-green-600 rounded-full text-white w-fit  h-fit " />
              ) : (
                <CircleIcon className=" " />
              )}
            </span>
            <span>Add content</span>
          </Button>
          <Button
            onClick={() => deleteLecture(sectionIndex, lectureIndex)}
            variant={"ghost"}
          >
            <MinusCircledIcon />
          </Button>
        </div>
      </div>

      <div
        className={`${openVideoPanel ? "block" : "hidden"} border-t py-4 flex gap-4 w-full items-center`}
      >
        <Input type="file" onChange={fileUpload} className="w-fit" />
        <div className="w-1/2 bg-gray-300 rounded-full h-fit ">
          <Progress value={progress} className={`h-2  rounded-full`} />
        </div>
      </div>
    </li>
  );
};

export default Subsection;
