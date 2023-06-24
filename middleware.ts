import { getCookie } from "cookies-next";
import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import { useContext } from "react";

export function middleware(request: NextRequest) {

  let isLoggedIn = request.cookies.get('login')?.value
  console.log(isLoggedIn, "middleware")

  // if login page then check if user is logged in or not and redirect accordingly
  if (request.nextUrl.pathname === '/login') {
    if (isLoggedIn) {
      return NextResponse.redirect('/dashboard')
    }
  }
  
  
}

export const config = {
  matcher: ['/course/:path*', '/dashboard/:path*', '/dashboard', '/login'],
}