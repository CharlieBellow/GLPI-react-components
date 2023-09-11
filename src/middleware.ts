import { NextRequest, NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

import { buildPublicRoutesPathMatcher } from "@/Utils/routes";

const publicRoutesPaths = buildPublicRoutesPathMatcher();

export const config = {
  matcher: ["/((?!api|_next/image|_next/static|favicon.ico|images).*)"],
};

export default async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  const isPublicRoute = new RegExp(publicRoutesPaths).test(pathname);
  const session = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });

  if (
    (!session || session.error === "RefreshTokenError") &&
    !isPublicRoute &&
    pathname !== "/login"
  ) {
    const newUrl = new URL("/login", req.nextUrl.origin);
    newUrl.searchParams.set("redirectUrl", pathname);
    return NextResponse.redirect(newUrl);
  }

  return NextResponse.next();
}
