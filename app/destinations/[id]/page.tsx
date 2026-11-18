
import Link from "next/link";
import { notFound } from "next/navigation";

import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import { destinations } from "@/data/destination";

// Revalidate the generated pages every 60 seconds.
//export const revalidate = 60;

// Generate a page for every destination during the build.
export function generateStaticParams() {
  return destinations.map((place) => ({
    id: String(place.id),
  }));
}

type DestinationDetailsPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function DestinationDetailsPage({
  params,
}: DestinationDetailsPageProps) {
  // Get the ID from the URL.
  const { id } = await params;

  // Convert the ID from string to number.
  const destinationId = Number(id);

  // Find the destination using its ID.
  const destination = destinations.find(
    (place) => place.id === destinationId
  );

  // Show the not-found page if the destination doesn't exist.
  if (!destination) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#faf9f6]">
      <Navbar />

      <section className="max-w-6xl mx-auto px-6 py-12">

        <Link
          href="/destinations"
          className="text-green-800 font-semibold hover:underline"
        >
          ← Back to Destinations
        </Link>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

          <div>
            <img
              src={destination.image}
              alt={destination.name}
              className="w-full h-[400px] object-cover rounded-2xl shadow-md"
            />
          </div>

          <div>
            <span className="inline-block bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold">
              {destination.category}
            </span>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mt-5">
              {destination.name}
            </h1>

            <p className="text-lg text-gray-500 mt-3">
              {destination.country}
            </p>

            <p className="text-gray-700 leading-8 mt-6">
              {destination.description}
            </p>

            <div className="mt-8 border-t border-gray-200 pt-6">
              <h2 className="text-xl font-bold text-gray-900">
                About this destination
              </h2>

              <p className="text-gray-600 mt-3 leading-7">
                Explore the beauty of {destination.name}.
                Discover its attractions, experience the local
                culture and create unforgettable travel memories.
              </p>
            </div>

            <Link
              href="/register"
              className="inline-block mt-8 bg-green-800 text-white px-7 py-3 rounded-lg font-semibold hover:bg-green-900 transition"
            >
              Join TripTales
            </Link>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}
