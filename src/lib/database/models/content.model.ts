import { Schema, model, models, Document } from "mongoose";

export interface ICourseContent extends Document {
  _id: string;
  courseId: string;
  title: string;
  createdBy: string;
  content: [
    {
      title: string;
      content_length: number;
      content_type: string;
      content_data: [
        {
          subtitle: string;
          content_length: number;
          content_type: string;
        },
      ];
    },
  ];
}

const CourseContentSchema = new Schema({
  courseId: { type: Schema.Types.ObjectId, ref: "Course" },
  title: { type: String, required: true },
  createdBy: { type: Schema.Types.ObjectId, ref: "User" },
  content: [
    {
      title: { type: String, required: true },
      content_length: { type: Number, required: true },
      content_type: { type: String },
      content_data: [
        {
          subtitle: { type: String },
          content_length: { type: Number, required: true },
          content_type: { type: String },
        },
      ],
    },
  ],
});

const CourseContent =
  models.CourseContent || model("CourseContent", CourseContentSchema);
export default CourseContent;
