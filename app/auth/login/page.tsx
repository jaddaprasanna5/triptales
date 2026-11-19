"use client";
import {useState} from 'react'
import { useRouter} from 'next/navigation';
export default function LoginPage(){
    const router = useRouter();
    const[email,setEmail] = useState("");
    const[password,setPassword] = useState("");
    const[msg,setMsg] = useState("");
    async function handleLogin(e:any){
        e.preventDefault();
        setMsg("checking...");
        const res = await fetch("/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json().catch(() => ({ error:"Server returned empty response"}))

   if (res.ok) {
  // Save user in browser so Home page knows who logged in
  localStorage.setItem("user", JSON.stringify(data.user));
  setMsg("Login success! Welcome " + data.user.name);
  // Directly go to Home page
  router.push("/");
}
  }

   return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold text-center">Login</h1>
        <p className="text-gray-500 text-center mt-1 mb-6">Welcome back to TripTales</p>

        <form onSubmit={handleLogin} className="flex flex-col gap-3">
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
            Login
          </button>
        </form>

        <p className="text-center mt-3 text-sm">{msg}</p>
        <a href="/auth/register" className="block text-center mt-2 text-green-700 text-sm">
          No account? Register
        </a>
      </div>
    </div>
  );
}

    