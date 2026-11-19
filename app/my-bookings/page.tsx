"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import CancelButton from "./CancelButton";

export default function MyBookingsPage() {
  const [list, setList] = useState<any[]>([]);

  async function loadData() {
    const res = await fetch("/api/bookings");
    const data = await res.json();
    setList(data);
  }

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold">My Bookings</h1>
      <p className="text-gray-500 mt-1 mb-6">All trips you booked from TripTales</p>

      {list.length === 0 ? (
        <div>
          <p className="text-gray-400">No bookings yet.</p>
          <Link href="/destinations" className="text-green-700 underline">
            Explore Destinations →
          </Link>
        </div>
      ) : (
        <div className="space-y-4">
          {list.map((b) => (
            <div key={b.id} className="bg-white rounded-xl shadow p-4 flex gap-4">
              <img
                src={b.destination?.image}
                alt={b.destination?.title}
                className="w-28 h-28 object-cover rounded-lg"
              />
              <div>
                <h2 className="text-xl font-bold">{b.destination?.title}</h2>
                <p className="text-gray-500 text-sm">{b.destination?.location}</p>
                <p className="text-sm mt-2">Date: {b.date} | Guests: {b.guests}</p>
                <p className="text-sm text-green-700 font-bold mt-1">{b.status}</p>
                <p className="text-sm text-gray-400">Price: ₹{b.destination.price * b.guests}</p>
                <CancelButton id={b.id} />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}