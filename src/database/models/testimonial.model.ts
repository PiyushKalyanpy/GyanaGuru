import mongoose from "mongoose";

const testimonialSchema = new mongoose.Schema({
  testimonalId: String,
  courseId: {
    type: String,
    default: "",
  },
  user: {
    name: String,
    uid: String,
    image: String,
    designation: String,
    company: {
      type: String,
      default: "",
    },
    rating: {
      type: Number,
      default: 0,
    },
    content: String,
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
});

const Testimonial =
  mongoose.models.testimonial ||
  mongoose.model("testimonial", testimonialSchema);
export default Testimonial;
