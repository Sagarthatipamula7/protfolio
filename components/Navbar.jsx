"use client";

import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-transparent"
    }`}>
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <a href="#home" className="text-2xl font-bold gradient-text">
            Sagar
          </a>
          <ul className="hidden md:flex space-x-8 items-center">
            <li><a href="#home" className={`hover:text-blue-600 transition-colors ${scrolled ? "text-gray-800" : "text-white"}`}>Home</a></li>
            <li><a href="#about" className={`hover:text-blue-600 transition-colors ${scrolled ? "text-gray-800" : "text-white"}`}>About</a></li>
            <li><a href="#skills" className={`hover:text-blue-600 transition-colors ${scrolled ? "text-gray-800" : "text-white"}`}>Skills</a></li>
            <li><a href="#experience" className={`hover:text-blue-600 transition-colors ${scrolled ? "text-gray-800" : "text-white"}`}>Experience</a></li>
            <li><a href="#projects" className={`hover:text-blue-600 transition-colors ${scrolled ? "text-gray-800" : "text-white"}`}>Projects</a></li>
            <li><a href="#education" className={`hover:text-blue-600 transition-colors ${scrolled ? "text-gray-800" : "text-white"}`}>Education</a></li>
            <li><a href="#certifications" className={`hover:text-blue-600 transition-colors ${scrolled ? "text-gray-800" : "text-white"}`}>Certifications</a></li>
            <li><a href="#contact" className={`px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors`}>Contact</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

