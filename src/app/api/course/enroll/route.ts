import { NextRequest, NextResponse } from "next/server";
import EnrolledCourse from "@/database/models/enrolled_course.model";
import { connectToMongo } from "@/database/mongo";

connectToMongo();
export async function POST(request: NextRequest, response: NextResponse) {
  try {
    const reqBody = await request.json();
    const { course_id, user_id } = reqBody;
    const enrolledCourse = await EnrolledCourse.findOne({ course_id, user_id });
    if (enrolledCourse) {
      return NextResponse.json({ error: "Already enrolled" }, { status: 400 });
    }
    const newEnrolledCourse = new EnrolledCourse({ course_id, user_id });
    await newEnrolledCourse.save();
    return NextResponse.json(
      { message: "Enrolled successfully" },
      { status: 200 },
    );
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
