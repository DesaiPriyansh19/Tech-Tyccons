'use client'
import React from 'react'
import Image from "next/image";
import Typewriter from 'typewriter-effect';
function HeroSection() {
  return (
  <>
  <div className="mt-2 w-full   rounded-2xl h-[65vh] sm:h-[40vh] lg:h-[82vh] relative overflow-hidden" >
  <Image
    src="/Banner.webp"
    alt="Background"
    fill
    className="object-cover"
  />
    <h1 className="text-3xl md:text-6xl font-light text-white absolute left-5 md:left-10 top-3 md:top-5">
    <span className="text-2xl md:text-5xl font-semibold">making things possible </span> <br></br> <span className="text-2xl sm:text-3xl md:text-5xl">for </span>
      <Typewriter
        options={{
          strings: ['problem solving.', 'brand building.', 'ease of operations.'],
          autoStart: true,
          loop: true,
          deleteSpeed: 100,
          delay: 95,
        }}
      />
    </h1>

</div>
  </>
  )
}

export default HeroSection