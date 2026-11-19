import { NextResponse } from "next/server";
import { prisma } from "@/app/lib/prisma";

export async function GET(_req: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const destination = await prisma.destination.findUnique({
    where: { id: Number(id) },
  });
  if (!destination) return NextResponse.json({ error: "Not found" }, { status: 404 });
  return NextResponse.json(destination);
}