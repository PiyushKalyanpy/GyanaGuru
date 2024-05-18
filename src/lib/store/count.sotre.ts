import { ICourseContent } from "./../database/models/content.model";
import { create } from "zustand";

interface ICountStore {
  count: number;
  incrementCount: () => void;
  decrementCount: () => void;
}

export const countStore = create((set: any) => ({
  count: 0,
  incrementCount: () => set((state : any) => ({ count: state.count + 1 })),
  decrementCount: () => set((state : any) => ({ count: state.count - 1 })),
}));
