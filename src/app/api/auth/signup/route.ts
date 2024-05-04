import { connectToMongo } from "@/database/mongo";
import User from "@/database/models/user.model";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { sendMail } from "@/lib/mailers";

connectToMongo();
export async function POST(request: NextRequest, response: NextResponse) {
  try {
    const reqBody = await request.json();
    const { name, email, password, confirm_password } = reqBody;
    if (password != confirm_password) {
      console.log(password, confirm_password);
      return NextResponse.json(
        { error: "Passwords did not match" },
        { status: 201 },
      );
    }
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      console.log("sdvcx");
      return NextResponse.json(
        { error: "User already present" },
        { status: 201 },
      );
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    let newUser = new User({
      username: name,
      email,
      password: hashedPassword,
    });
    newUser = await newUser.save();

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
