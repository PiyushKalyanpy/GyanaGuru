import { NextRequest, NextResponse } from "next/server";
import { connectToMongo } from "@/database/mongo";
import CourseContent from "@/database/models/course_content.model";

connectToMongo();

export async function POST(request: NextRequest, response: NextResponse) {
  try {
    const { course_content_id, course_id, content } = await request.json();
    const courseContent = await CourseContent.findOne({
      course_content_id: course_content_id,
    });
    if (courseContent) {
      return NextResponse.json(
        { error: "Course content already exists" },
        { status: 400 },
      );
    }
    const newCourseContent = new CourseContent({
      course_content_id: course_content_id,
      course_id: course_id,
      content: content,
    });
    await newCourseContent.save();
    return NextResponse.json(
      { message: "Course content created successfully" },
      { status: 200 },
    );
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

