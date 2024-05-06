import mongoose from "mongoose";

const courseContentSchema = new mongoose.Schema({
  course_content_id: {
    type: String,
    default: "",
    unique: true,
  },
  course_id: {
    type: String,
    default: "",
  },
  content: [
    {
      title: {
        type: String,
        default: "",
      },
      content_length: {
        type: String,
        default: "",
      },
      sub_content: [
        {
          title: {
            type: String,
            default: "",
          },
          content_length: {
            type: String,
            default: "",
          },
        },
      ],
    },
  ],
});

const CourseContent =
  mongoose.models.courseContent ||
  mongoose.model("courseContent", courseContentSchema);

export default CourseContent;
