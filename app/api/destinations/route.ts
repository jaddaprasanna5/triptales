import { NextResponse } from "next/server";
import { prisma } from "@/app/lib/prisma";

export async function GET() {
  const destinations = await prisma.destination.findMany({
    orderBy: { id: "asc" },
  });
  return NextResponse.json(destinations);
}