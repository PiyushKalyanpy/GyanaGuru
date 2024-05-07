import bcrypt from "bcryptjs";
import { connectToMongo } from "@/database/mongo";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import User from "@/database/models/user.model";

const authOptions: any = {
  providers: [
    CredentialsProvider({
      id: "credentials",
      name: "credentials",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "Enter your email",
        },
        password: {
          label: "Password",
          type: "password",
          placeholder: "Enter your password",
        },
      },

      async authorize(credentials: any) {
        await connectToMongo();
        try {
          const user = await User.findOne({ email: credentials.email });
          if (user) {
            const isPassworedCorrect = await bcrypt.compare(
              credentials.password,
              user.password,
            );
            if (isPassworedCorrect) {
              return user;
            } else {
              return null;
            }
          }
        } catch (err: any) {
          throw new Error(err.message);
        }
      },
    }),
  ],
  session: {
    strategy: "jwt" as const,
  },
  secret: process.env.JWT_SECRET,
  pages: {
    signIn: "/signup",
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
