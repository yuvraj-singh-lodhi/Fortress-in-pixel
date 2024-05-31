"use client";
import React, { useState } from "react";
import Navbar from "../(home)/_components/Navbar";

export default function page() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Email:", email);
    console.log("Password:", password);
  };
  return (
    <div className="min-h-screen bg-black overflow-hidden">
      <div className=" dark:bg-black bg-white  dark:bg-grid-white/[0.05] bg-grid-black/[0.2]">
        <div className="max-w-7xl mx-auto p-5">
          <Navbar isFooter={false} />
        </div>
        <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-md rounded-md">
          <h2 className="text-2xl font-semibold mb-6 text-black ml-36 mr-32">
            Login
          </h2>
          <form>
            <div className="mb-6">
              <label htmlFor="email" className="block text-gray-700">
                Email:
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block text-gray-700">
                Password:
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
              />
            </div>
            <button
              type="submit"
              onClick={handleSubmit}
              className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
