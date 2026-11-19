import { NextResponse } from "next/server";
import { prisma } from "@/app/lib/prisma";

export async function DELETE(_req: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  await prisma.booking.delete({ where: { id: id } });
  return NextResponse.json({ ok: true });
}