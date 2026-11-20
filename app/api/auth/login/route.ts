import { NextResponse } from "next/server";
import { prisma } from "@/app/lib/prisma";
import bcrypt from "bcryptjs";
import { createToken } from "@/app/lib/auth";

export async function POST(req: Request) {
  const { email, password } = await req.json();

  // Check user is there or not
  const user = await prisma.user.findUnique({
    where: { email: email },
  });

  if (!user) {
    return NextResponse.json({ error: "User Not found" }, { status: 404 });
  }

  // Compare password
  const isOk = await bcrypt.compare(password, user.password);
  if (!isOk) {
    return NextResponse.json({ error: "Wrong Password" }, { status: 401 });
  }

  // --Create Cookie Session ---
  const token = createToken(user);

  const response = NextResponse.json({
    message: "Login success",
    user: {
      id: user.id,
      name: user.name,
      email: user.email,
    },
  });

  response.cookies.set("token", token, {
    httpOnly: true,
    path: "/",
    maxAge: 60 * 60 * 24 * 7, // 7 days
  });

  return response;
}