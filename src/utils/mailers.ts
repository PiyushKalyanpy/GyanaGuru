import nodemailer from "nodemailer";
import bcrypt from "bcryptjs";
import User from "@/database/models/user.model";

interface mailOptionsInterface {
  to: string;
  subject: string;
  text?: string;
  html: string;
  from: string;
}

export const sendMail = async ({
  email,
  emailType,
  userId,
}: {
  email: string;
  emailType: string;
  userId: string;
}) => {
  const subject =
    emailType === "verify" ? "Verify your email" : "Reset your password";

  const hashedToken = await bcrypt.hash(userId, 10);

  if (emailType === "verify") {
    await User.findByIdAndUpdate(userId, {
      verifyToken: hashedToken,
      verifyTokenExpiry: new Date(Date.now() + 3600000),
    });
  } else if (emailType === "reset") {
    await User.findByIdAndUpdate(userId, {
      forgotPasswordToken: hashedToken,
      forgotPasswordExpire: new Date(Date.now() + 3600000),
    });
  }

  try {
    const transporter = nodemailer.createTransport({
      host: "sandbox.smtp.mailtrap.io",
      port: 2525,
      auth: {
        user: "8458d2b4c6200d",
        pass: "a2ff70ab77774d",
      },
    });

    const mailOptions: mailOptionsInterface = {
      from: "kalyanpiyushp@gmail.com",
      to: email,
      subject: subject,
      html: `<p>Click  <a href='${process.env.DOMAIN}/verify?token=${hashedToken}'>here</a> </p>`,
    };
    const mailResponse = await transporter.sendMail(mailOptions);
    console.log(mailResponse);
  } catch (err: any) {
    throw new Error(err.message);
  }
};
