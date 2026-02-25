import { NextRequest, NextResponse } from "next/server";

export default function proxy(req: NextRequest) {
  const USER = process.env.BASIC_AUTH_USER;
  const PASS = process.env.BASIC_AUTH_PASS;

  const { pathname } = req.nextUrl;
  /*  if (
    process.env.NODE_ENV === "production" &&
    process.env.NEXT_PUBLIC_ENV === "prod"
  ) {
    return NextResponse.next();
  } */
  if (pathname.startsWith("/api/revalidate")) {
    return NextResponse.next();
  }
  const authHeader = req.headers.get("authorization");
  if (authHeader) {
    const base64Credentials = authHeader.split(" ")[1];
    const credentials = atob(base64Credentials);
    const [user, pass] = credentials.split(":");
    if (user === USER && pass === PASS) {
      return NextResponse.next();
    }
  }
  return new NextResponse("Authentication required", {
    status: 401,
    headers: {
      "WWW-Authenticate": 'Basic realm="Secure Area"',
    },
  });
}
export const config = {
  matcher: "/:path*",
};
