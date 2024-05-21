"use server";

import { connectToMongoDB } from "../database/mongo";
import Category from "../database/models/category.model";
import { CategoryParams } from "@/types";

export async function getAllCategories() {
  try {
    await connectToMongoDB();
    const category = await Category.find();
    return category;
  } catch (error) {
    throw error;
  }
}

export async function createCategory(data: CategoryParams) {
  try {
    await connectToMongoDB();
    const newCategory = await Category.create(data);
    return JSON.parse(JSON.stringify(newCategory));
  } catch (e) {
    throw e;
  }
}

export async function getCategoryByName(name: string) {
  try {
    await connectToMongoDB();
    const category = await Category.findOne({ name });
    return category;
  } catch (error) {
    throw error;
  }
}

export async function deleteCategory(categoryId: any) {
  try {
    await connectToMongoDB();
    const category = await Category.findByIdAndDelete(categoryId);
    return category;
  } catch (error) {
    throw error;
  }
}
