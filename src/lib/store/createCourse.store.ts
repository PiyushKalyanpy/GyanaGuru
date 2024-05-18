import { create } from "zustand";
import { ICourse } from "../database/models/course.model";

interface ICreateCourseStore {
  courseDetails: any;
  totalSteps?: number;
  currentStep?: number;
  getFormDetails: () => void;
  setTotalSteps?: (totalSteps: number) => void;
  setcurrentStep?: (currentStep: number) => void;
  setDetails?: (details: any) => void;
  setCourseContent?: (details: any) => void;
  setPublishDetails?: (details: any) => void;
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
  totalSteps: 0,
  currentStep: 0,
  getFormDetails: () => {},
  setTotalSteps: (totalSteps: number) => set({ totalSteps }),
  setcurrentStep: (currentStep: number) => set({ currentStep }),
  setDetails: (details: any) => {
    set((prevCourseDetails) => ({
      courseDetails: {
        ...prevCourseDetails.courseDetails,
        ...details,
      },
    }));
    
  },
  setCourseContent: (details: any) => set(details),
  setPublishDetails: (details: any) => set(details),
  onPublish: () => {},
}));
