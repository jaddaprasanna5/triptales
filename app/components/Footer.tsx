import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-green-950 text-white text-center py-8">
    {/* Website Name */}
      <h2 className="text-xl font-bold">TripTales </h2>
    {/* Footer Description */}
      <p className="text-gray-300 mt-2">Discover places. Collect memories. Share stories.</p>
    {/* Footer Navigation */}
      <div className="flex justify-center gap-6 mt-4 text-sm">
            <Link href="/" className="hover:text-green-300">Home</Link>
            <Link href="/destinations"className="hover:text-green-300"> Destinations</Link>
            <Link href="/travel-guides"className="hover:text-green-300">Travel Guides</Link>
        </div>
    {/* Copyright */}
      <p className="text-gray-400 text-sm mt-5">© 2026 TripTales. All rights reserved.</p>
    </footer>
  );
}
