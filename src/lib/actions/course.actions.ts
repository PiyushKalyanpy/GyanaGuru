"use server";

import { connectToMongoDB } from "../database/mongo";
import Category from "../database/models/category.model";
import { CategoryParams } from "@/types";

export async function addCourseContent() {
  try {
    await connectToMongoDB();
    const category = await Category.find();
    return category;
  } catch (error) {
    throw error;
  }
}
