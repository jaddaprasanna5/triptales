import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 py-5 bg-white shadow-sm">

      {/* Website Logo */}
      <Link href="/" className="text-2xl font-bold text-green-800">TripTales</Link>

      {/* Navigation Links */}
      <div className="hidden md:flex gap-8 text-gray-700 font-medium">
        <Link href="/" className="hover:text-green-700">Home</Link>
        <Link href="/destinations"className="hover:text-green-700"> Destinations</Link>
        <Link href="/travel-guides"className="hover:text-green-700">Travel Guides</Link>
        <Link href="/login" className="hover:text-green-700">Login</Link>
      </div>
    {/* Register Button */}
      <Link  href="/register"className="bg-white-800 text-white  border  px-5 py-2 rounded-lg hover:bg-green-400 transition">Get Started</Link>
    </nav>
  );
}
