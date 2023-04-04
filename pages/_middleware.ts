import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
    if(2==2){
        if(request.nextUrl.pathname.startsWith('/login')) {
    return NextResponse.redirect('/')
  }
    }
  
}
