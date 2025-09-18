'use client'
import React from 'react'
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
function TechnologiesWeUse() {
    const technologies = [
        {
        src: "/Next-JS.webp",
        alt: "Next.js",
    
        width: 170,
        height: 170,
      },
      {
        
        src: "/Mern-Stack-Logo.webp",
        alt: "MERN Stack",
     
        width: 170,
        height: 170,
      },
      {
        src: "/React-Native-Logo.webp",
        alt: "React Native",
    
        width: 170,
        height: 170,
      },
      {
        src: "/Strapi.webp",
        alt: "Strapi CMS",
    
        width: 170,
        height: 170,
      },
    
    ];
    const [currentIndex, setCurrentIndex] = useState(0);
      const contentRef = useRef<HTMLParagraphElement | null>(null);
      const totalSlides = Math.ceil(technologies.length / 2);
     const [showMore, setShowMore] = useState(false);
      useEffect(() => {
        const interval = setInterval(() => {
          setCurrentIndex((prev) =>
            prev + 1 >= totalSlides ? 0 : prev + 1
          );
        }, 5000);
    
        return () => clearInterval(interval);
      }, [totalSlides]);
    
    const handleDotClick = (idx: number) => {
      setCurrentIndex(idx);
    };
    
    const [mounted, setMounted] = useState(false);


useEffect(() => {
  setMounted(true);
}, []);

  return (
<>

 {/* Desktop Layout */}
      <div className="w-full mt-2 lg:mt-12 hidden sm:flex flex-col items-center">
        <div className="flex flex-col lg:flex-row items-center justify-center lg:gap-6 w-full text-start">
          {/* Left Static Heading for small screens */}
          <div className="rounded-3xl py-2.5 px-4 min-w-[25%] h-[20vh] flex lg:hidden items-center justify-center ">
            <h2 className="text-5xl font-semibold text-[#464646] ">
              Technologies <br /> We Use
            </h2>
          </div>

          {/* Slides */}
          <div className="relative flex-1 overflow-hidden">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {Array.from({ length: totalSlides }).map((_, slideIdx) => {
                const start = slideIdx * 2;
                const items = technologies.slice(start, start + 2);

                return (
                  <div
                    key={slideIdx}
                    className="flex min-w-full justify-center gap-6"
                  >
                    {items.map((tech, idx) => (
                      <div
                        key={idx}
                        className="rounded-2xl py-4 px-3 min-w-[40%] h-[40vh] bg-white  border-black border-[1px] transition"
                      >
                        <Image
                          src={tech.src}
                          alt={tech.alt}
                          width={tech.width}
                          height={tech.height}
                          className="mx-auto"
                        />
                      </div>
                    ))}
                  </div>
                );
              })}
            </div>

            {/* Dots */}
            {mounted && (
              <div className="flex justify-center lg:mt-6 gap-2">
                {Array.from({ length: totalSlides }).map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleDotClick(idx)}
                    className={`w-3 h-3 rounded-full transition ${
                      idx === currentIndex ? "bg-[#464646]" : "bg-gray-400"
                    }`}
                  />
                ))}
              </div>
            )}
          </div>

          {/* Right Static Heading for large screens */}
          <div className="rounded-3xl py-2.5 px-4 min-w-[25%] h-[40vh] hidden lg:flex items-center justify-center">
            <h2 className="text-5xl font-semibold text-[#464646] text-start">
              Technologies <br /> We Use
            </h2>
          </div>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="w-full mt-0 flex flex-col items-center md:hidden">
        <div className="rounded-3xl py-2.5 px-4 w-full h-[10vh] mt-12 flex items-center justify-center">
          <h2 className="text-3xl font-semibold text-[#464646] text-center">
            Technologies <br /> We Use
          </h2>
        </div>

{/* Mobile Slider (1 per slide) */}
<div className="relative w-full overflow-hidden mt-3.5 sm:hidden">
  <div
    className="flex transition-transform duration-700 ease-in-out"
    style={{ transform: `translateX(-${currentIndex * 100}%)` }}
  >
    {Array.from({ length: technologies.length }).map((_, slideIdx) => (
      <div
        key={slideIdx}
        className="flex min-w-full justify-center gap-4"
      >
        <div className="flex w-full justify-around">
          {technologies
            .slice(slideIdx, slideIdx + 1) // 1 item per slide
            .map((tech, idx) => (
              <div
                key={idx}
                className="rounded-3xl py-4 px-3 w-[80%] bg-white  border-black border-[1px] transition"
              >
                <Image
                  src={tech.src}
                  alt={tech.alt}
                  width={tech.width}
                  height={tech.height}
                  className="mx-auto"
                />
              </div>
            ))}
        </div>
      </div>
    ))}
  </div>

  {/* Mobile Dots */}
  {mounted && (
    <div className="flex justify-center mt-6 gap-2">
      {technologies.map((_, idx) => (
        <button
          key={idx}
          onClick={() => handleDotClick(idx)}
          className={`w-3 h-3 rounded-full transition ${
            idx === currentIndex ? "bg-[#464646]" : "bg-gray-400"
          }`}
        />
      ))}
    </div>
  )}
</div>

{/* Desktop Slider (2 per slide) */}
<div className="relative w-full overflow-hidden mt-3.5 hidden sm:block">
  <div
    className="flex transition-transform duration-700 ease-in-out"
    style={{ transform: `translateX(-${currentIndex * 100}%)` }}
  >
    {Array.from({ length: Math.ceil(technologies.length / 2) }).map(
      (_, slideIdx) => (
        <div
          key={slideIdx}
          className="flex min-w-full justify-center gap-4"
        >
          <div className="flex w-full justify-around">
            {technologies
              .slice(slideIdx * 2, slideIdx * 2 + 2) // 2 items per slide
              .map((tech, idx) => (
                <div
                  key={idx}
                  className="border rounded-3xl py-4 px-3 w-[45%] bg-white border-gray-300 shadow-md hover:shadow-xl transition"
                >
                  <Image
                    src={tech.src}
                    alt={tech.alt}
                    width={tech.width}
                    height={tech.height}
                    className="mx-auto"
                  />
                </div>
              ))}
          </div>
        </div>
      )
    )}
  </div>

  {/* Desktop Dots */}
  {mounted && (
    <div className="flex justify-center mt-6 gap-2">
      {Array.from({ length: Math.ceil(technologies.length / 2) }).map(
        (_, idx) => (
          <button
            key={idx}
            onClick={() => handleDotClick(idx)}
            className={`w-3 h-3 rounded-full transition ${
              idx === currentIndex ? "bg-[#464646]" : "bg-gray-400"
            }`}
          />
        )
      )}
    </div>
  )}
</div>


      </div>
</>
  )
}

export default TechnologiesWeUse