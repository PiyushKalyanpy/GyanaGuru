import mongoose from "mongoose";

const enrolledCourseSchema = new mongoose.Schema({
  enrolledCourseId: String,
  courseId: String,
  userId: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
  progress: {
    type: Number,
    default: 0,
  },
});

const EnrolledCourse =
  mongoose.models.enrolledCourse ||
  mongoose.model("enrolledCourse", enrolledCourseSchema);

export default EnrolledCourse;
