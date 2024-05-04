import { NextRequest, NextResponse } from "next/server";
import Course from "@/database/models/course.model";
import { connectToMongo } from "@/database/mongo";

connectToMongo();

export async function GET(request: NextRequest, response: NextResponse) {
  try {
    const pathNameArray = request.nextUrl.pathname.split("/");
    const courseId = pathNameArray[pathNameArray.length - 1];
    const course = await Course.findOne({ _id: courseId });

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

export async function PUT(request: NextRequest, response: NextResponse) {
  try {
    const {
      title,
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

    const pathNameArray = request.nextUrl.pathname.split("/");
    const courseId = pathNameArray[pathNameArray.length - 1];
    const course = await Course.findByIdAndUpdate(courseId, {
      title,
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
    });
    return NextResponse.json(
      { message: "Successfully updated" },
      { status: 200 },
    );
  } catch (err: any) {
    return NextResponse.json(
      {
        error: err.message,
      },
      { status: 500 },
    );
  }
}

export async function DELETE(request: NextRequest, response: NextResponse) {
  try {
    const pathNameArray = request.nextUrl.pathname.split("/");
    const courseId = pathNameArray[pathNameArray.length - 1];
    const course = await Course.findOneAndDelete({ _id: courseId });
    if (!course) {
      return NextResponse.json({ error: "Course not found" }, { status: 201 });
    }
    return NextResponse.json(
      { message: "Course deleted successfully" },
      { status: 201 },
    );
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
