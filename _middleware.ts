import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
    const cookiesStore = request.cookies;
    const isLoggedIn = cookiesStore.get("login");
    if (!isLoggedIn) {
        return NextResponse.redirect(new URL("/login"));
    }
}
