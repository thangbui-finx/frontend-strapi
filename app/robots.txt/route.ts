import { NextResponse } from "next/server";

export function GET() {
  const env = process.env.NEXT_PUBLIC_ENV;
  if (env === "prod") {
    return new NextResponse(
      `User-agent: * 
        Allow: /`,
      {
        headers: { "Content-Type": "text/plain" },
      },
    );
  }
  return new NextResponse(
    `User-agent: *
    Disallow:/`,
    { headers: { "Content-Type": "text/plain" } },
  );
}
