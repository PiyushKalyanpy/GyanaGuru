// this defines the rating of a particular course
import { Schema, model, models, Document } from "mongoose";

export interface IRating extends Document {
  _id: string;
  courseId: string;
  rating: number;
  comments: [string];
  createdAt: Date;
  updatedAt: Date;
}

const RatingSchema = new Schema({
  courseId: { type: Schema.Types.ObjectId, ref: "Course" },
  rating: { type: Number },
  comments: { type: Schema.Types.ObjectId, ref: "Comments", default: [] },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const Rating = models.Rating || model("Rating", RatingSchema);
export default Rating;
