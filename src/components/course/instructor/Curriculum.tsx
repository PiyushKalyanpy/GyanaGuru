"use client";
import { ISection } from "@/lib/interfaces";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { courseStore } from "@/lib/store/course.store";
import { startTransition, useState } from "react";
import Subsection from "./Subsection";

const Curriculum = () => {
  const [input, setInput] = useState("");
  const courseContent = courseStore((state) => state.courseContent);
  const setCourseContent = courseStore((state) => state.setCourseContent);

  const handleAddSection: any = async () => {
    await setCourseContent([
      ...courseContent,
      {
        title: input,
        sectionIndex: courseContent.length + 1,
        lectures: [],
      },
    ]);
    setInput("");
  };

  const handleAddLecture: any = async (sectionIndex: number) => {
    const newContent = {
      title: input,
      lectureIndex: courseContent[sectionIndex - 1].lectures.length + 1,
      url: "",
      contentLength: "",
    };
    const updatedContent: ISection[] = courseContent.map((content, index) => {
      if (index === sectionIndex - 1) {
        return {
          ...content,
          lectures: [...content.lectures, newContent],
        };
      }
      return content;
    });

    await setCourseContent(updatedContent);
  };

  return (
    <div className="flex flex-col gap-4 w-full">
      <section>
        <AlertDialog>
          <AlertDialogTrigger className="p-medium-14 flex w-full rounded-sm py-3 pl-8 text-primary-500 hover:bg-primary-50 focus:text-primary-500">
            <Button>Add Section</Button>
          </AlertDialogTrigger>
          <AlertDialogContent className="bg-white">
            <AlertDialogHeader>
              <AlertDialogTitle>New Section</AlertDialogTitle>
              <AlertDialogDescription>
                <Input
                  type="text"
                  placeholder="Section name"
                  className="input-field mt-3"
                  onChange={(e) => setInput(e.target.value)}
                />
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction
                className="bg-black px-4 py-2 rounded-2xl"
                onClick={() => startTransition(handleAddSection)}
              >
                Add
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </section>
      {/* data display */}
      <section className="w-full">
        <div className="flex flex-col gap-4 w-full">
          {courseContent &&
            courseContent.map((item, index) => (
              <div key={index} className="w-full">
                <div
                  className="flex flex-col border p-4  rounded-2xl justify-
              between gap-4 w-full"
                >
                  <div className="flex items-center gap-2 justify-between w-full">
                    <div className="flex flex-col gap-2 ">
                      <p className="flex gap-2 text-zinc-600 text-sm">
                        <span>Section</span> <span>{index + 1}</span>
                      </p>
                      <p className="text-2xl font-semibold">{item.title}</p>
                    </div>
                    <AlertDialog>
                      <AlertDialogTrigger className="outline-none p-medium-14 flex w-fit rounded-sm py-3 pl-8 text-primary-500 hover:bg-primary-50 focus:text-primary-500">
                        <Button>Add Lecture</Button>
                      </AlertDialogTrigger>
                      <AlertDialogContent className="bg-white">
                        <AlertDialogHeader>
                          <AlertDialogTitle>New Lecture</AlertDialogTitle>
                          <AlertDialogDescription>
                            <Input
                              type="text"
                              placeholder="Section name"
                              className="input-field mt-3"
                              onChange={(e) => setInput(e.target.value)}
                            />
                          </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                          <AlertDialogCancel>Cancel</AlertDialogCancel>
                          <AlertDialogAction
                            className="bg-black px-4 py-2 rounded-2xl"
                            onClick={() =>
                              startTransition(() =>
                                handleAddLecture(item.sectionIndex),
                              )
                            }
                          >
                            Add
                          </AlertDialogAction>
                        </AlertDialogFooter>
                      </AlertDialogContent>
                    </AlertDialog>
                  </div>
                  <ul className="flex flex-col gap-2">
                    {item.lectures &&
                      item.lectures.map((lecture, index) => (
                        <Subsection
                          key={index}
                          lecture={lecture}
                          sectionIndex={item.sectionIndex}
                        />
                      ))}
                  </ul>
                </div>
              </div>
            ))}
        </div>
      </section>
    </div>
  );
};

export default Curriculum;
