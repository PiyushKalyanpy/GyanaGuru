import { NextRequest, NextResponse } from "next/server";
import { connectToMongo } from "@/database/mongo";
import CourseContent from "@/database/models/course_content.model";

connectToMongo();

export async function GET(request: NextRequest, response: NextResponse) {
  try {
    const pathNameArray = request.nextUrl.pathname.split("/");
    const courseId = pathNameArray[pathNameArray.length - 1];
    const course = await CourseContent.findOne({ course_id: courseId });

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
