// components/Header.js
"use client";
import { useState } from "react";

export default function MobileResponsiveHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md fixed top-0 left-0 w-full z-50 px-6 py-4 flex items-center justify-between" style={{ fontFamily: "'Poppins', Arial, sans-serif" }}>
      <div className="text-xl font-bold text-gray-800">
        <a href="/">Ahmed Abdullah</a>
      </div>

      {/* Hamburger Button */}
      <button
        className="md:hidden text-2xl text-gray-800 focus:outline-none"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <i className={menuOpen ? "fas fa-times" : "fas fa-bars"}></i>
      </button>

      {/* Navigation Links */}
      <nav className={`flex-col md:flex-row md:flex md:items-center absolute md:static top-full left-0 w-full md:w-auto bg-white md:bg-transparent shadow-md md:shadow-none transition-all duration-300 ease-in-out ${menuOpen ? "flex" : "hidden"}`}>
        {["Home", "About", "Portfolio", "Contact"].map((label) => (
          <a
            key={label}
            href={label === "Home" ? "/" : `/#${label.toLowerCase()}`}
            className="block text-center md:inline-block px-4 py-2 text-base font-bold text-[rgb(45,46,50)] hover:text-blue-600"
          >
            {label}
          </a>
        ))}
      </nav>
    </header>
  );
}
