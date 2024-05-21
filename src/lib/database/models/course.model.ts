import { Schema, model, models, Document } from "mongoose";

export interface ICourse extends Document {
  _id: string;
  title: string;
  description: string;
  headline: string;
  languages: string;
  logo: string;
  thumbnail: string;
  skills: string[];
  learnings: string[];
  price: number;
  priceSymbol: string;
  isPaid: boolean;
  createdAt: Date;
  stripeId: string;
  updatedAt: Date;
  courseContent: { _id: string; name: string };
  testimonials: { _id: string; name: string };
  ratings: { _id: string; name: string };
}

const CourseSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  headline: { type: String },
  languages: { type: String },
  logo: { type: String },
  thumbnail: { type: String },
  skills: { type: [String] },
  learnings: { type: [String] },
  price: { type: Number },
  priceSymbol: { type: String },
  stripeId: { type: String },
  isPaid: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  courseContent: { type: Schema.Types.ObjectId, ref: "CourseContent" },
  testimonials: { type: Schema.Types.ObjectId, ref: "Testimonials" },
  ratings: { type: Schema.Types.ObjectId, ref: "Ratings" },
});

const Course = models.Course || model("Course", CourseSchema);
export default Course;
