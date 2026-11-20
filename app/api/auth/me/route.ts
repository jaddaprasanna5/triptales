import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { verifyToken } from "@/app/lib/auth";

export async function GET() {
  const token = (await cookies()).get("token")?.value;
  if (!token) return NextResponse.json({ user: null });

  const user: any = verifyToken(token);
  if (!user) return NextResponse.json({ user: null });

  return NextResponse.json({ user });
}