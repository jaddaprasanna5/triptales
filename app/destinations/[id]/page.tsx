import { prisma } from "@/app/lib/prisma";
import BookingForm from "./BookingForm";
import { notFound } from "next/navigation";
export const dynamic = "force-dynamic";

export default async function DestinationPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  const destination = await prisma.destination.findUnique({
    where: { id: Number(id) },
  });

  if (!destination) return notFound();

  return (
    <div className="max-w-4xl mx-auto p-6">
      <img src={destination.image} alt={destination.title} className="w-full h-[400px] object-cover rounded-2xl" />
      <h1 className="text-3xl font-bold mt-6">{destination.title}</h1>
      <p className="text-gray-500 mt-1">{destination.location}</p>
      <p className="text-gray-700 mt-4">{destination.description}</p>
      <p className="text-xl font-bold mt-4">${destination.price}</p>
      <BookingForm destinationId={destination.id} />
    </div>
  );
}