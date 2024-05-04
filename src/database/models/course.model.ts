import mongoose from "mongoose";

const courseSchema = new mongoose.Schema({
  courseId: {
    type: String,
    required: [true, "Please enter a cid"],
    unique: true,
  },
  title: {
    type: String,
    required: [true, "Please enter a title"],
  },
  headline: {
    type: String,
    required: [true, "Please enter a headline"],
  },
  description: {
    type: String,
    required: [true, "Please enter a description"],
    maxlength: [1000, "Description must be less than 100 characters"],
    minlength: [50, "Description must be more than 10 characters"],
    trim: true,
    default: "No description provided",
  },
  logo_url: {
    type: String,
    required: [true, "Please enter a logo_url"],
  },
  thumbnail: {
    type: String,
    required: [true, "Please enter a thumbnail"],
  },
  is_paid: {
    type: Boolean,
    default: false,
  },
  price: {
    type: String,
    required: [true, "Please enter a price"],
    default: "0",
  },
  price_detail: {
    amount: Number,
    currency: String,
    price_string: String,
    currency_symbol: String,
  },
  language: {
    type: [String],
    required: [true, "Please enter a language"],
  },
  instructor: {
    name: String,
    designation: String,
    image: String,
  },
  total_modules: {
    type: Number,
    default: 0,
  },
  total_time: {
    type: Number,
    default: 0,
  },

  ratings: {
    rating_count: {
      type: Number,
      default: 0,
    },
    average_rating: {
      type: Number,
      default: 0,
    },
  },
  categories: {
    type: [String],
    required: [true, "Please enter a categories"],
    default: [],
  },
  requirements: {
    type: [String],
    required: [true, "Please enter a requirements"],
    default: [],
  },
  skills: {
    type: [String],
    required: [true, "Please enter a skills"],
    default: [],
  },
  course_content_id: {
    type: String,
    default: "",
  },
  createtAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

const Course = mongoose.models.course || mongoose.model("course", courseSchema);
export default Course;
