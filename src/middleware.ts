import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const token = request.cookies.get("userToken")?.value;

  if ("/question".includes(request.nextUrl.pathname) && !token) {
    request.cookies.delete("userToken");
    const response = NextResponse.redirect(new URL("/login", request.url));
    response.cookies.delete("userToken");

    return response;
  }

  if ("/login".includes(request.nextUrl.pathname) && token) {
    return NextResponse.redirect(new URL("/question", request.url));
  }
}