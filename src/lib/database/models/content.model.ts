import { Schema, model, models } from "mongoose";
import { ISection } from "@/lib/interfaces";

const courseContentSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  sectionIndex: {
    type: Number,
    required: true,
    unique: true,
  },
  lectures: [
    {
      title: {
        type: String,
        required: true,
      },
      lectureIndex: {
        type: Number,
        required: true,
        unique: true,
      },
      url: {
        type: String,
        required: true,
      },
      contentLength: {
        type: String,
        required: true,
      },
    },
  ],
});

const CourseContent =
  models.CourseContent || model("CourseContent", courseContentSchema);
export default CourseContent;
