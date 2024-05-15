import { Schema, model, models, Document } from "mongoose";

export interface ITestimonial extends Document {
  _id: string;
  userId: string;
  resourceId: string;
  rating: number;
}

const TestimonialSchema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: "User" },
  resourceId: { type: Schema.Types.ObjectId },
  rating: { type: Number },
});

const Testimonial =
  models.Testimonial || model("Testimonial", TestimonialSchema);

export default Testimonial;
