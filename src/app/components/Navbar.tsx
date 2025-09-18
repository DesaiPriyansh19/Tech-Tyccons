"use client";
import { useState } from "react";
import Image from "next/image";
import { HiMenu, HiX } from "react-icons/hi";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white border-[1.1px] border-black rounded-full py-2 lg:py-3 mt-3.5 md:mt-4 px-4 flex items-center justify-between relative  w-full mx-auto ">
      {/* Logo */}
      <div>
        <Image src="/nav-logo.webp" width={150} height={40} alt="Logo" />
      </div>
<ul className="hidden md:flex space-x-8 font-medium">
  {["Know Us", "Products", "Services", "Projects", "Contact"].map(
    (item, index) => (
      <li key={index} className="relative group">
        <a
          href="#"
          className="relative flex items-center text-black pl-3" // 👈 reserve space for arrow
        >
          {/* Arrow - absolute, uses that reserved space */}
          <span
            className="absolute  left-0 opacity-0 group-hover:opacity-100 transition-all duration-50 text-[#F04F24]"
          >
            →
          </span>

          {/* Text - slides right only */}
          <span className="transition-all duration-300 group-hover:translate-x-2 group-hover:text-[#F04F24]">
            {item}
          </span>
        </a>
      </li>
    )
  )}
</ul>





      {/* Hamburger Toggle Button */}
      <button
        className="md:hidden text-2xl"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <HiX /> : <HiMenu />}
      </button>

      {/* Mobile Sidebar Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-900 z-20 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-4 border-b border-gray-200">
          <Image src="/nav-logo.webp" width={160} height={30} alt="Logo" />
        
        </div>

        <ul className="flex flex-col p-4 space-y-10 font-medium text-2xl">
          <li><a href="">Know Us</a></li>
          <li><a href="/about">Products</a></li>
          <li><a href="/contact">Services</a></li>
          <li><a href="/contact">Projects</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </div>

      {/* Overlay when sidebar is open */}
{isOpen && (
<div
  className={`fixed inset-0 z-10 transition-all duration-100 ${
    isOpen
      ? "backdrop-blur-[4px] bg-[rgba(0,0,0,0.2)] opacity-100"
      : "backdrop-blur-none bg-[rgba(0,0,0,0)] opacity-0 pointer-events-none"
  }`}
  onClick={() => setIsOpen(false)}
>
  <button
    className="text-4xl text-white shadow-2xl font-medium mt-4 ml-4"
    onClick={() => setIsOpen(false)}
  >
    <HiX />
  </button>
</div>

)}


    </nav>
  );
}
