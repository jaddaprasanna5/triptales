import { prisma } from "@/app/lib/prisma";
import DestinationCard from "@/app/components/DestinationCard";

export const dynamic = "force-dynamic";

export default async function DestinationsPage() {
  const destinations = await prisma.destination.findMany({ orderBy: { id: "asc" } });

  if (destinations.length === 0) {
    return <p className="p-6">No destinations in DB yet. Run the seed below.</p>;
  }

  return (
    <div className="max-w-6xl mx-auto p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
      {destinations.map((d) => (
        <DestinationCard key={d.id} destination={d} />
      ))}
    </div>
  );
}