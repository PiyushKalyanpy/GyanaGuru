import { connectToMongo } from "@/database/mongo";
import User from "@/database/models/user.model";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { sendMail } from "@/utils/mailers";

connectToMongo();
export async function POST(request: NextRequest, response: NextResponse) {
  try {
    const reqBody = await request.json();
    const { username, email, password } = reqBody;
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return NextResponse.json(
        { error: "User already exists" },
        { status: 400 },
      );
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
    });
    await newUser.save();

    // sending verification email
    await sendMail({
      email,
      emailType: "verify",
      userId: newUser._id.toString(),
    });

    return NextResponse.json(
      { message: "User created successfully" },
      { status: 201 },
    );
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
