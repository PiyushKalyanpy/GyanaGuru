"use client";
import React, { useEffect, useRef, useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@radix-ui/react-separator";
import { Button } from "@/components/ui/button";

const UseKey = (key: any, cb: any) => {
  const callbackRef = useRef(cb);

  useEffect(() => {
    callbackRef.current = cb;
  });
  useEffect(() => {
    function handle(event: any) {
      if (event.code === key) {
        callbackRef.current(event);
      }
    }
    document.addEventListener("keypress", handle);
    return () => document.removeEventListener("keypress", handle);
  }, [key]);
};

const LearnPage = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const video: any = videoRef.current;
  UseKey("Enter", () => {
    video && video!.paused ? video && video.play() : video && video.pause();
  });
  UseKey("KeyK", () => {
    video && video!.paused ? video && video.play() : video && video.pause();
  });

  useEffect(() => {
    const updateTime = () => {
      setCurrentTime(video?.currentTime);
    };
    video && video?.addEventListener("timeupdate", updateTime);
    return () => {
      video && video?.removeEventListener("timeupdate", updateTime);
    };
  }, [isPlaying]);

  return (
    <div className="flex w-screen h-screen ">
      {/* right sidebar */}
      <div className="flex w-1/4 h-full px-4 overflow-y-scroll bg-white">
        <Accordion type="single" collapsible className="w-full">
          {courseItems &&
            courseItems.videos.map((item: any) => (
              <AccordionItem key={item.title} value={item.subtitle}>
                <AccordionTrigger>{item.subtitle}</AccordionTrigger>
                <AccordionContent>
                  <div className="flex flex-col gap-4">
                    {item.videos.map((item: any, index: any) => (
                      <li
                        key={index}
                        className="flex justify-between gap-2 list-none cursor-pointer hover:text-zinc-600"
                      >
                        <div className="flex gap-2 ">
                          <span className="flex items-center w-6 h-6 p-1 border rounded-full place-content-center border-zinc-600">
                            {index + 1}
                          </span>
                          <span>{item.title}</span>
                        </div>
                        <span className="px-1 rounded-lg w-fit h-fit bg-zinc-100 text-zinc-800"></span>
                      </li>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
        </Accordion>
      </div>
      {/* main video player */}
      <div className="flex flex-col w-full h-full overflow-y-scroll bg-gray-100 ">
        <LearnPageHeader />
        <div className="flex flex-col w-3/4 ">
          <AspectRatio ratio={16 / 9} className="">
            <div className="flex flex-col gap-2 px-4 py-2 video-player">
              <video ref={videoRef} className="rounded-3xl" controls>
                <source
                  src="https://videos.pexels.com/video-files/5359969/5359969-uhd_3840_2160_24fps.mp4"
                  type="video/mp4"
                />
              </video>
            </div>
          </AspectRatio>
          {/* Notes */}
          <section className="p-4 m-4 bg-white rounded-2xl">
            <Tabs defaultValue="notes" className="w-full">
              <TabsList>
                <TabsTrigger value="notes">Notes</TabsTrigger>
                <TabsTrigger value="discussion">Discussion</TabsTrigger>
                <TabsTrigger value="resources">Resources</TabsTrigger>
                <TabsTrigger value="reminder">Reminder</TabsTrigger>
                <TabsTrigger value="about">About</TabsTrigger>
              </TabsList>
              <Separator className="my-4" />
              <Separator orientation="vertical" />

              <TabsContent value="notes">
                <NotesTab />
              </TabsContent>
              <TabsContent value="discussion">
                Change your password here.
              </TabsContent>
              <TabsContent value="resources">
                There are no resources 🙅‍♂️
              </TabsContent>
              <TabsContent value="reminder">
                Change your reminder here.
              </TabsContent>
              <TabsContent value="about">Change your about here.</TabsContent>
            </Tabs>
          </section>
        </div>
      </div>
    </div>
  );
};

const NotesTab = () => {
  return (
    <div className="flex flex-col w-full gap-2 video-player">
      <div className="flex w-full gap-4 ">
        <Input className="w-full" placeholder="Title" />
        <Button className="text-white bg-black">Update</Button>
      </div>
      <Textarea placeholder="description" />
    </div>
  );
};

const LearnPageHeader = () => {
  return (
    <div className="flex flex-row items-center justify-between w-full p-4 bg-white h-fit">
      sdf
    </div>
  );
};

const courseItems = {
  title: "UI UX Designing",
  videos: [
    {
      subtitle: "Overview",
      videos: [
        {
          title: "Course Outcome",
          duration: 4530,
        },
        {
          title: "Introduction",
          duration: 300,
        },
        {
          title: "What is UI UX Design?",
          duration: 600,
        },
        {
          title: "Understanding User Needs",
          duration: 800,
        },
      ],
    },
    {
      subtitle: "Module 1: Basics",
      videos: [
        {
          title: "Module 1: Basics",
          duration: 300,
        },
        {
          title: "Design Principles",
          duration: 900,
        },
        {
          title: "Color Theory",
          duration: 700,
        },
      ],
    },
    {
      subtitle: "Module 2: User Research",
      videos: [
        {
          title: "Introduction to User Research",
          duration: 600,
        },
        {
          title: "Surveys and Questionnaires",
          duration: 900,
        },
        {
          title: "User Interviews",
          duration: 1200,
        },
      ],
    },
    {
      subtitle: "Module 3: Wireframing",
      videos: [
        {
          title: "What is Wireframing?",
          duration: 400,
        },
        {
          title: "Tools for Wireframing",
          duration: 800,
        },
        {
          title: "Creating Effective Wireframes",
          duration: 1100,
        },
      ],
    },
  ],
};

export default LearnPage;
