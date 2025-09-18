"use client";
import { useState } from "react";
import Image from "next/image";
import { HiMenu, HiX } from "react-icons/hi";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Section names and their IDs
  const navItems = [
    { name: "Know Us", id: "know-us" },
    // { name: "Products", id: "products" },
    { name: "Services", id: "services" },
    // { name: "Projects", id: "projects" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <nav className="bg-white border-[1.1px] border-black rounded-full py-3 sm:py-2 lg:py-3 mt-3.5 md:mt-4 px-4 flex items-center justify-between relative w-full mx-auto">
      {/* Logo */}
      <div>
        <Image src="/nav-logo.webp" width={150} height={40} alt="Logo" />
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex  mr-6 space-x-8 font-medium">
        {navItems.map((item, index) => (
          <li key={index} className="relative group">
            <a
              href={`#${item.id}`}
              className="relative flex items-center text-black pl-3"
            >
              <span className="absolute left-0 opacity-0 group-hover:opacity-100 transition-all duration-50 text-[#F04F24]">
                →
              </span>
              <span className="transition-all duration-300 group-hover:translate-x-2 group-hover:text-[#F04F24]">
                {item.name}
              </span>
            </a>
          </li>
        ))}
      </ul>

      {/* Hamburger Toggle Button */}
      <button className="md:hidden text-2xl" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <HiX /> : <HiMenu />}
      </button>

      {/* Mobile Sidebar Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-500 z-20 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-4 border-b border-gray-200">
          <Image src="/nav-logo.webp" width={160} height={30} alt="Logo" />
        </div>

        <ul className="flex flex-col p-4 space-y-10 font-medium text-2xl">
          {navItems.map((item, index) => (
            <li key={index}>
              <a
                href={`#${item.id}`}
                onClick={() => setIsOpen(false)} // Close menu on click
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-10 backdrop-blur-[4px] bg-[rgba(0,0,0,0.2)] opacity-100"
          onClick={() => setIsOpen(false)}
        />
      )}
    </nav>
  );
}
