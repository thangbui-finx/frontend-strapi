import { revalidateTag } from "next/cache";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const secret = req.headers.get("x-secret");
  if (secret !== process.env.REVALIDATE_SECRET) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const { tag } = await req.json();
  if (!tag) {
    return NextResponse.json({ error: "Tag required" }, { status: 400 });
  }
  revalidateTag(tag, "default");
  return NextResponse.json({ revalidated: true, tag });
}
