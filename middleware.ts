import { NextRequest, NextResponse } from "next/server";

 

export function middleware(req : NextRequest){
    const cookie = req.cookies
    return NextResponse.next();
}