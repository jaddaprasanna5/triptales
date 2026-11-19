"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const router = useRouter();
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const saved = localStorage.getItem("user");
    if (saved) setUser(JSON.parse(saved));
  }, []);

  function handleLogout() {
    localStorage.removeItem("user");
    setUser(null);
    router.push("/auth/login");
  }

  return (
    <nav className="flex items-center justify-between px-8 py-5 bg-white shadow-sm">

      {/* Website Logo */}
      <Link href="/" className="text-2xl font-bold text-green-800">TripTales</Link>

      {/* Navigation Links */}
      <div className="hidden md:flex gap-8 text-gray-700 font-medium">
        <Link href="/" className="hover:text-green-700">Home</Link>
        <Link href="/destinations"className="hover:text-green-700"> Destinations</Link>
        <Link href="/travel-guides"className="hover:text-green-700">Travel Guides</Link>
         <Link href="/my-bookings" className="hover;text-green-700">My Bookings</Link>

        {/* Login / Hi + Logout - Only this part changed */}
        {user ? (
          <>
            <span className="hover:text-green-700">Hi, {user.name}</span>
            <button onClick={handleLogout} className="hover:text-green-700">Logout</button>
          </>
        ) : (
          <Link href="/auth/login" className="hover:text-green-700">Login</Link>
        )}
      </div>
    {/* Register Button */}
      <Link  href="/auth/register"className="bg-white-800 text-white  border  px-5 py-2 rounded-lg hover:bg-green-400 transition">Get Started</Link>
    </nav>
  );
}