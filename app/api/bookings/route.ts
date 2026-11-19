import { NextResponse } from "next/server";
import { prisma } from "@/app/lib/prisma";

export async function GET() {
  const bookings = await prisma.booking.findMany({
    include: { destination: true },
    orderBy: { createdAt: "desc" },
  });
  return NextResponse.json(bookings);
}

export async function POST(req: Request) {
  try {
    const { destinationId, date, guests } = await req.json();
    const booking = await prisma.booking.create({
      data: {
        userId: "guest-user",
        destinationId: Number(destinationId),
        date: String(date),
        guests: Number(guests),
        status: "confirmed",
      },
    });
    return NextResponse.json(booking, { status: 201 });
  } catch (e: any) {
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
}