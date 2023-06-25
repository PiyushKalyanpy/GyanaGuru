import { getCookie } from "cookies-next";
import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import { useContext } from "react";

export function middleware(request: NextRequest) {

  let isLoggedIn = request.cookies.get('login')?.value
  if (isLoggedIn === 'true') {
    isLoggedIn = 'true'
    return NextResponse.next()
  }
  if (!isLoggedIn || isLoggedIn === 'false' || isLoggedIn === 'undefined' || isLoggedIn === 'null') {
    const url = request.nextUrl.clone()
    url.pathname = '/login'
    return NextResponse.rewrite(url)
  }
  return NextResponse.next();
}

export const config = {
  matcher: ['/course/:path*', '/dashboard/:path*', '/dashboard', '/login'],
}