import Link from "next/link";

export default function DestinationCard({ destination }: { destination: any }) {
  if (!destination?.id) return null;
  return (
    <Link href={`/destinations/${destination.id}`} className="block bg-white rounded-2xl shadow overflow-hidden">
      <img src={destination.image} alt={destination.title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="font-bold text-lg">{destination.title}</h2>
        <p className="text-gray-500">{destination.location}</p>
        <p className="font-bold mt-2">${destination.price}</p>
        <p className="text-[#24745b] font-semibold mt-2">Explore More →</p>
      </div>
    </Link>
  );
}