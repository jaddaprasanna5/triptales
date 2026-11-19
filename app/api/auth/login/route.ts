import { NextResponse } from "next/server";
import { prisma } from "@/app/lib/prisma";
import bcrypt from "bcryptjs";

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

  // If everything is ok, then send login success
  return NextResponse.json({
    message: "Login success",
    user: {
      id: user.id,
      name: user.name,
      email: user.email,
    },
  });
}