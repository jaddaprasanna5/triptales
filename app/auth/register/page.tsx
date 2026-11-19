"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const router = useRouter(); 
  const [name, setName] = useState("");
  const [email, setEmail] = useState(""); 
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");

  async function handleRegister(e: any) {
    e.preventDefault();
    setMsg("wait...");

    const res = await fetch("/api/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, password }),
    });

    const data = await res.json();

    if (res.ok) {
  setMsg("Registered! Now go to login");
  router.push("/auth/login"); // <-- GO TO LOGIN PAGE
}
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold text-center">Register</h1>
        <p className="text-gray-500 text-center mt-1 mb-6">Create your TripTales account</p>

        <form onSubmit={handleRegister} className="flex flex-col gap-3">
          <input
            placeholder="Your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border p-3 rounded-lg outline-none focus:border-green-600"
          />
          <input
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border p-3 rounded-lg outline-none focus:border-green-600"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border p-3 rounded-lg outline-none focus:border-green-600"
          />
          <button type="submit" className="bg-green-700 text-white p-3 rounded-lg hover:bg-green-600">
            Register
          </button>
        </form>

        <p className="text-center mt-3 text-sm">{msg}</p>
        <a href="/auth/login" className="block text-center mt-2 text-green-700 text-sm">
          Already have account? Login
        </a>
      </div>
    </div>
  );
}