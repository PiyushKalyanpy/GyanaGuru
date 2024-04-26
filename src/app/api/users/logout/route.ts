import { connectToMongo } from "@/database/mongo";
import { NextRequest, NextResponse } from "next/server";

connectToMongo();

export async function GET(request: NextRequest, response: NextResponse) {
  try {
    const response = NextResponse.json(
      { message: "Logout successful" },
      { status: 200 },
    );
    response.cookies.set("token", "", {
      httpOnly: true,
      expires: new Date(0),
    });
    return response;
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
