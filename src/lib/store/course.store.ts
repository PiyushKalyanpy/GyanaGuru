import { create } from "zustand";
import { ILecture, ISection } from "../interfaces";
import CourseContent from "../database/models/content.model";

interface ICreateCourseStore {
  courseDetails: any;
  courseContent: ISection[];
  setDetails?: (details: any) => void;
  setCourseContent: (content: ISection[]) => void;
  setContent: (sectionIndex: number, lectureIndex: number, data: any) => void;
  deleteLecture: (sectionIndex: number, lectureIndex: number) => void;
  onPublish?: () => void;
}

export const courseStore = create<ICreateCourseStore>((set) => ({
  courseDetails: {
    _id: "",
    title: "",
    description: "",
    headline: "",
    languages: "",
    logo: "",
    thumbnail: "",
    skills: [],
    learnings: [],
    price: 0,
    priceSymbol: "",
    isPaid: false,
    createdAt: new Date(),
    stripeId: "",
    updatedAt: new Date(),
    courseContent: { _id: "", name: "" },
    testimonials: { _id: "", name: "" },
    ratings: { _id: "", name: "" },
  },
  courseContent: [
    {
      title: "UI UX Designing",
      sectionIndex: 1,
      lectures: [
        {
          title: "Introduction to UI UX designing",
          lectureIndex: 1,
          url: "",
          contentLength: "0:32",
        },
      ],
    },
  ],

  setDetails: (details: any) => {
    set((prevCourseDetails) => ({
      courseDetails: {
        ...prevCourseDetails.courseDetails,
        ...details,
      },
    }));
  },

  setCourseContent: (content: ISection[]) => {
    set((prevCourseDetails) => ({
      courseContent: content,
    }));
  },

  deleteLecture: (sectionIndex: number, lectureIndex: number) => {
    set((prevCourseDetails) => ({
      courseContent: prevCourseDetails.courseContent.map((content, index) => {
        if (index === sectionIndex - 1) {
          return {
            ...content,
            lectures: content.lectures.filter(
              (lecture, lectureIndex) =>
                lectureIndex !== lectureIndex - 1 &&
                lectureIndex !== lectureIndex &&
                lectureIndex !== lectureIndex + 1,
            ),
          };
        }
        return content;
      }),
    }));
  },
  setContent: (sectionIndex, lectureIndex, data) => {
    set((prevData: any) => ({
      courseContent: prevData.courseContent.map(
        (content: ISection, index: number) => {
          if (content.sectionIndex == sectionIndex) {
            return {
              ...content,
              lectures: content.lectures.map(
                (lecture: ILecture, index: number) => {
                  if (lecture.lectureIndex == lectureIndex) {
                    return {
                      ...lecture,
                      ...data,
                    };
                  }
                  return lecture;
                },
              ),
            };
          }
          return content;
        },
      ),
    }));
  },
}));
