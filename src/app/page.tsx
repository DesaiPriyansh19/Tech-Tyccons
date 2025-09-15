'use client'
import Image from "next/image";
import Typewriter from 'typewriter-effect';
import { useState, useRef, useEffect } from "react";
export default function Home() {
 const [showMore, setShowMore] = useState(false);
  const contentRef = useRef<HTMLParagraphElement | null>(null);
  const [maxHeight, setMaxHeight] = useState<string>("5rem"); // ~3 lines

  const content = `At Tech Tycoons, we are more than just an IT solutions agency—we are technology innovators,
problem solvers, and digital transformation partners. With a passion for cutting-edge technology, 
we empower businesses with scalable, secure, and future-ready IT solutions that drive growth and efficiency. 
Founded with the vision to redefine IT excellence, Tech Tycoons is a team of technology enthusiasts, IT experts, 
and cybersecurity specialists committed to delivering high-performance IT infrastructure, 
cloud solutions, cybersecurity, and digital transformation services.
We help businesses adapt, evolve, and thrive in the ever-changing digital landscape.`;

  // Update maxHeight dynamically when showMore toggles
  useEffect(() => {
    if (contentRef.current) {
      setMaxHeight(showMore ? `${contentRef.current.scrollHeight}px` : "8.5rem");
    }
  }, [showMore]);


  return (
    <div className="  w-full">


<div className="mt-2 w-full  rounded-2xl h-[35vh] sm:h-[80vh] relative overflow-hidden">
  <Image
    src="/Banner.webp"
    alt="Background"
    fill
    className="object-cover"
  />
    <h1 className="text-4xl md:text-6xl font-light text-white absolute left-5 md:left-10 top-3 md:top-5">
    <span className="text-3xl md:text-5xl">making things possible for</span>  
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
<div className="mt-3.5 bg-white rounded-2xl flex flex-col md:flex-row gap-5 justify-start px-3 py-3 w-full border-[1.1px] border-black">
  {/* Image */}
  <div className="rounded-2xl h-64 sm:h-[50vh] w-full md:w-[25vw] xl:w-[30vw] bg-amber-600 relative overflow-hidden">
    <Image
      src="/about-us-man-img.webp"
      alt="Background"
      fill
      className="object-cover"
    />
  </div>

  {/* Text */}
  <div className="w-full md:w-[75vw] xl:w-[70vw] flex flex-col relative">
    <h2 className="text-[#7DBB42] text-3xl sm:text-4xl lg:text-6xl font-semibold text-start mb-2">
      Something About Us
    </h2>

    {/* Text container */}
    <div
      className="relative overflow-hidden transition-all duration-500 ease-in-out"
      style={{ maxHeight }}
    >
      <p
        ref={contentRef}
        className="text-sm sm:text-md lg:text-lg text-black transition-opacity duration-500"
      >
        {content}
      </p>

      {/* Fade overlay at bottom */}
      {!showMore && (
        <div className="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-t from-white to-transparent pointer-events-none"></div>
      )}
    </div>

    <button
      className="mt-2 text-black font-bold hover:underline self-start"
      onClick={() => setShowMore(!showMore)}
    >
      {showMore ? "Show Less" : "Read More"}
    </button>
  </div>
</div>



      {/* You can add components here */}
    </div>
  );
}
