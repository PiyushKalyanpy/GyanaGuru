import mongoose from "mongoose";
import { NextRequest, NextResponse } from "next/server";
import { connectToMongo } from "@/database/mongo";
import Course from "@/database/models/course.model";

connectToMongo();

export async function GET(request: NextRequest, response: NextResponse) {
  try {
    const course = await Course.find({}).select(
      "title description instructor thumbnail total_modules total_time price is_paid ratings total_enrolled",
    );

    return NextResponse.json(
      {
        data: course,
      },
      { status: 200 },
    );
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

export async function POST(request: NextRequest, response: NextResponse) {
  try {
    const {
      courseId,
      title,
      headline,
      description,
      logo_url,
      thumbnail,
      is_paid,
      price,
      price_detail,
      language,
      instructor,
      total_modules,
      total_time,
      url,
      ratings,
      categories,
      requirements,
      skills,
      course_content_id,
      createdAt,
      updatedAt,
    } = await request.json();

    const course = new Course({
      courseId,
      title,
      headline,
      description,
      logo_url,
      thumbnail,
      is_paid,
      price,
      price_detail,
      language,
      instructor,
      total_modules,
      total_time,
      ratings,
      categories,
      requirements,
      skills,
      course_content_id,
      createdAt,
      updatedAt,
    });

    const savedCourse = await course.save();
    return NextResponse.json(savedCourse, { status: 201 });
  } catch (err: any) {
    return NextResponse.json(
      {
        error: err.message,
      },
      { status: 201 },
    );
  }
}
