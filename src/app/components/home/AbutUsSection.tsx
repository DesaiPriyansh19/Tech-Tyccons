"use client";

import React from 'react'
import Image from "next/image";
function AbutUsSection() {
    
      const content = `At Tech Tycoons, we are more than just an IT solutions agency—we are technology innovators,
    problem solvers, and digital transformation partners. With a passion for cutting-edge technology, 
    we empower businesses with scalable, secure, and future-ready IT solutions that drive growth and efficiency. 
    Founded with the vision to redefine IT excellence, Tech Tycoons is a team of technology enthusiasts, IT experts, 
    and cybersecurity specialists committed to delivering high-performance IT infrastructure, 
    cloud solutions, cybersecurity, and digital transformation services.
    We help businesses adapt, evolve, and thrive in the ever-changing digital landscape.`;
  return (
  <>
  {/* About Us */}
  <div className="mt-8 sm:mt-12 bg-white rounded-2xl flex flex-col md:flex-row gap-5 justify-center sm:justify-start px-3 py-1 sm:py-3 w-full border-[1.1px] border-black">
    {/* Small Screen Heading */}
    <h2 className="text-[#7DBB42] flex sm:hidden text-[2rem] sm:text-4xl lg:text-6xl font-bold text-center">
      Something About Us
    </h2>
  
    {/* Image */}
    <div className="rounded-2xl h-64 w-full md:h-[30vh] lg:h-[50vh] lg:w-[25vw] xl:w-[30vw] bg-amber-600 relative overflow-hidden">
      <Image
        src="/about-us-man-img.webp"
        alt="Background"
        fill
        className="object-cover"
      />
    </div>
  
    {/* Text + Button */}
    <div className="w-full pb-6 md:w-[75vw] xl:w-[70vw] flex flex-col relative">
      {/* Large Screen Heading */}
      <h2 className="text-[#7DBB42] hidden sm:flex text-3xl sm:text-5xl md:text-5xl lg:text-6xl font-semibold text-start mb-2">
        Something About Us
      </h2>
  
      {/* Text container */}
      <div className="relative overflow-hidden transition-all duration-500 ease-in-out">
        <p className="text-sm sm:text-lg lg:text-lg xl:text-xl text-black transition-opacity duration-500">
          {content}
        </p>
      </div>
  
      {/* Button (bottom right) */}
      <div className="absolute bottom-0 right-0">
        <a
          href="#"
          className="relative flex items-center pl-5 pr-4 py-1 border border-black rounded-3xl hover:rounded-sm transition-all duration-500 text-black font-medium group overflow-hidden"
        >
          {/* Arrow */}
          <span className="absolute left-2 opacity-0 group-hover:opacity-100 transition-all duration-300 text-[#F04F24]">
            →
          </span>
  
          {/* Text */}
          <span className="transition-all text-sm font-semibold duration-300 group-hover:translate-x-2 group-hover:text-[#F04F24] ">
            know More
          </span>
        </a>
      </div>
    </div>
  </div>
  </>
  )
}

export default AbutUsSection