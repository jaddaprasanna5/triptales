import Link from 'next/link'
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import DestinationCard from "./components/DestinationCard";
import { destinations } from '@/data/destination';

export default function Home() {
  return (
    <main className="min-h-screen">

      {/* Reusable Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="px-8 py-24 text-center bg-green-50">
        <p className="text-green-700 font-semibold mb-4"> YOUR NEXT ADVENTURE STARTS HERE</p>
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 max-w-4xl mx-auto">Explore the world.<span className="text-green-700">{" "}Create your stories.</span></h1>
        <p className="text-gray-600 mt-6 max-w-2xl mx-auto">Discover amazing destinations, explore travel guides and share your unforgettable experiences with the world.</p>
        <LinkForHero />
      </section>

      {/* Popular Destinations */}
      <section className="px-8 py-16 max-w-7xl mx-auto">

        <div className="flex justify-between items-center mb-8">

          <div>
            <p className="text-green-700 font-semibold">EXPLORE THE WORLD</p>
            <h2 className="text-3xl font-bold mt-2">Popular Destinations</h2>
          </div>

          <Link href="/destinations" className="text-green-800 font-semibold hover:underline">View All →</Link>
          </div>

        {/* Display Destination Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {destinations.map((place) => (
            <DestinationCard
              key={place.id}
              id={place.id}
              name={place.name}
              description={place.description}
              image={place.image}
              category={place.category}
              country ={place.country}
            />
          ))}

        </div>

      </section>

      {/* Reusable Footer */}
      <Footer />

    </main>
  );
}

function LinkForHero() {
  return (
    <Link href="/destinations"className="inline-block mt-8 bg-white-800 border text-white px-8 py-3 rounded-lg hover:bg-green-400 transition">Explore Destinations</Link>
  );
}
