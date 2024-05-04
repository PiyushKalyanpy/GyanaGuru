import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import { verify } from "jsonwebtoken";

export function middleware(request: NextRequest) {
  // const JWT_SECRET = process.env.JWT_SECRET || "";
  const path = request.nextUrl.pathname;
  if (
    [
      "/admin",
      "/my-courses",
      "/profile",
      "/settings",
      "/brain-booster",
    ].includes(path)
  ) {
    return NextResponse.rewrite(new URL("/dashboard" + path, request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/about",
    "/dashboard/:path*",
    "/my-courses",
    "/login",
    "/signup",
    "/admin",
    "/profile",
    "/settings",
    "/brain-booster",
  ],
};
