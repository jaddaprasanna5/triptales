"use client";
import { useState } from "react";

export default function BookForm({ destinationId }: { destinationId: number }) {
  const [date, setDate] = useState("");
  const [guests, setGuests] = useState(1);
  const [msg, setMsg] = useState("");

  async function bookNow() {
    if (!date) {
      setMsg("Please pick a date");
      return;
    }

    const res = await fetch("/api/bookings", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ destinationId, date, guests }),
    });

    if (res.ok) {
      setMsg("Booking confirmed! Check My Bookings page.");
    } else {
      setMsg("Booking failed, try again");
    }
  }

  return (
    <div className="bg-white p-4 rounded-xl shadow mt-6">
      <h3 className="font-bold text-lg mb-3">Book this trip</h3>
      <label className="text-sm text-gray-500">Travel Date</label>
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        className="w-full border rounded p-2 mt-1 mb-3"
      />
      <label className="text-sm text-gray-500">Guests</label>
      <input
        type="number"
        min={1}
        value={guests}
        onChange={(e) => setGuests(Number(e.target.value))}
        className="w-full border rounded p-2 mt-1 mb-3"
      />
      <button
        onClick={bookNow}
        className="w-full bg-green-600 text-white py-2 rounded-lg font-bold"
      >
        Book Now
      </button>
      {msg && <p className="text-sm mt-2 text-green-700">{msg}</p>}
    </div>
  );
}