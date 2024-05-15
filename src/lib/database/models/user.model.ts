import { Schema, model, models } from "mongoose";

const UserSchema = new Schema({
  clerkId: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  username: { type: String, required: true },
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  imageUrl: { type: String, required: true },
  isVerified: { type: Boolean, required: true, default: false },
  isBlocked: { type: Boolean, required: true, default: false },
  isAdmin: { type: Boolean, required: true, default: false },
  createdAt: { type: Date, required: true, default: Date.now },
  updatedAt: { type: Date, required: true, default: Date.now },
});

const User = models.User || model("User", UserSchema);
export default User;
