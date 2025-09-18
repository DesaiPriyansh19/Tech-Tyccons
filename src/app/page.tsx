'use client'
import Image from "next/image";
import Typewriter from 'typewriter-effect';
import { useState, useRef, useEffect } from "react";
import { FaInstagram, FaFacebookF, FaLinkedinIn } from 'react-icons/fa'
import { HiLocationMarker } from 'react-icons/hi'
import { MdEmail, MdPhone } from 'react-icons/md'
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";

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
 const cards = [
    { bg: "#7DBB42", text: "01. IT Infrastructure & Networking" },
    { bg: "#2DA0D9", text: "02. AI Based Automation" },
    { bg: "#F04F24", text: "03. Cloud Solutions" },
    { bg: "#464646", text: "04. Cybersecurity & Compliance" },
  ];
  // Define this at the top of your component or import from a file
const technologiesMobile = [
  {
    title: "IT Infrastructure & Networking",
    desc: "Reliable, secure, and high-performing IT setups.",
    bg: "#7DBB42",
    number: "01"
  },
  {
    title: "AI Based Automation",
    desc: "Optimizing business processes with AI-driven automation.",
    bg: "#2DA0D9",
    number: "02"
  },
  {
    title: "Cloud Solutions",
    desc: "Migration, deployment, and cloud management on AWS, Azure, and hybrid platforms.",
    bg: "#F04F24",
    number: "03"
  },
  {
    title: "Cybersecurity & Compliance",
    desc: "Advanced firewall security, data protection, and threat detection.",
    bg: "#2DA0D9",
    number: "04"
  },
  {
    title: "IT Consulting & Support",
    desc: "Strategic IT guidance and 24/7 enterprise support.",
    bg: "#F04F24",
    number: "05"
  },
  {
    title: "Software Development & Integration",
    desc: "Custom-built business applications & seamless software integration.",
    bg: "#2DA0D9",
    number: "06"
  },
  {
    title: "Branding Design",
    desc: "Extraordinary Branding design for an extraordinary Brand value.",
    bg: "#7DBB42",
    number: "07"
  },
];

export default function Home() {
 const [showMore, setShowMore] = useState(false);
  const contentRef = useRef<HTMLParagraphElement | null>(null);
  const [maxHeight, setMaxHeight] = useState<string>("0rem"); // ~3 lines

  const content = `At Tech Tycoons, we are more than just an IT solutions agency—we are technology innovators,
problem solvers, and digital transformation partners. With a passion for cutting-edge technology, 
we empower businesses with scalable, secure, and future-ready IT solutions that drive growth and efficiency. 
Founded with the vision to redefine IT excellence, Tech Tycoons is a team of technology enthusiasts, IT experts, 
and cybersecurity specialists committed to delivering high-performance IT infrastructure, 
cloud solutions, cybersecurity, and digital transformation services.
We help businesses adapt, evolve, and thrive in the ever-changing digital landscape.`;
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration in ms
     once: false,  // Allow repeated animations on scroll    // whether animation should happen only once
    });
  }, []);
  // Update maxHeight dynamically when showMore toggles
  useEffect(() => {
    if (contentRef.current) {
      setMaxHeight(showMore ? `${contentRef.current.scrollHeight}px` : "8.5rem");
    }
  }, [showMore]);
const [currentIndex, setCurrentIndex] = useState(0);

  const totalSlides = Math.ceil(technologies.length / 2);

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
    <div className="  w-full pb-2 sm:pb-0">

{/* Hero Section */}
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
        className="relative flex items-center pl-5 pr-5 py-2 border border-black rounded-3xl hover:rounded-sm transition-all duration-500 text-black font-medium group overflow-hidden"
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


{/* technologies we use */}

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

{/* This Is What We Do */}
<div className="w-full  hidden gap-0 lg:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mt-14 sm:mt-12  text-white">

  <div className="h-auto sm:h-[25vh] md:h-[30vh] lg:h-[45vh] text-[#464646] rounded-br-3xl text-center font-bold sm:font-semibold text-[2rem] sm:text-6xl flex items-center justify-center p-6">
    This is What we do?
  </div>

  <div className="bg-[#464646] h-auto sm:h-[25vh] md:h-[30vh] lg:h-[50vh] xl:h-[45vh] pl-3.5 pr-2 py-4 rounded-tl-2xl font-semibold text-start relative">
    <div className="bg-[#7DBB42] rounded-3xl p-4 h-full flex flex-col justify-between">
      <h3 className="text-2xl sm:text-3xl xl:text-4xl font-bold">01.</h3>
      <div>
        <p className=" text-lg md:text-3xl lg:text-lg xl:text-3xl font-semibold mt-3.5">IT Infrastructure & Networking</p>
        <p className="text-sm xl:text-lg md:text-2xl lg:text-sm font-normal mt-1.5 mb-3">Reliable, secure, and high-performing IT setups.</p>
      </div>
       {/* Small "Know More" btn */}
      <a
        href="#"
        className="absolute bottom-6 right-8 flex items-center group text-[.8rem] font-light hover:font-extrabold "
      >
        <span className="absolute -left-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
          →
        </span>
        <span className="transition-all duration-300 group-hover:translate-x-2">
          Know More
        </span>
      </a>
    </div>
  </div>

  <div className="bg-[#464646] h-auto sm:h-[25vh] md:h-[30vh] lg:h-[50vh] xl:h-[45vh] px-2 py-4 font-semibold text-start relative">
    <div className="bg-[#2DA0D9] rounded-3xl p-4 h-full flex flex-col justify-between">
      <h3 className="text-2xl sm:text-3xl xl:text-4xl  font-bold">02.</h3>
      <div>
        <p className="text-lg md:text-3xl lg:text-lg xl:text-3xl font-semibold mt-3.5">AI Based Automation</p>
        <p className="text-sm xl:text-lg font-normal mt-1.5 mb-4">Optimizing business processes with AI-driven automation.</p>
      </div>
          {/* Small "Know More" btn */}
      <a
        href="#"
        className="absolute bottom-6 right-8 flex items-center group text-[.8rem] font-light hover:font-extrabold "
      >
        <span className="absolute -left-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
          →
        </span>
        <span className="transition-all duration-300 group-hover:translate-x-2">
          Know More
        </span>
      </a>
    </div>
  </div>

  <div className="bg-[#464646] h-auto sm:h-[25vh] md:h-[30vh] lg:h-[50vh] xl:h-[45vh] px-2 py-4 rounded-tr-2xl font-semibold text-start relative">
    <div className="bg-[#F04F24] rounded-3xl p-4 h-full flex flex-col justify-between">
      <h3 className="text-2xl sm:text-3xl xl:text-4xl  font-bold">03.</h3>
      <div>
        <p className="text-lg md:text-3xl lg:text-lg xl:text-3xl font-semibold mt-3.5">Cloud Solutions</p>
        <p className="text-sm xl:text-lg font-normal mt-1.5 mb-4">Migration, deployment, and cloud management on AWS, Azure, and hybrid platforms.</p>
      </div>
          {/* Small "Know More" btn */}
      <a
        href="#"
        className="absolute bottom-6 right-8 flex items-center group text-[.8rem] font-light hover:font-extrabold "
      >
        <span className="absolute -left-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
          →
        </span>
        <span className="transition-all duration-300 group-hover:translate-x-2">
          Know More
        </span>
      </a>
    </div>
  </div>

  <div className="bg-[#464646] h-auto sm:h-[25vh] md:h-[30vh] lg:h-[50vh] xl:h-[45vh] px-2 py-4 rounded-tl-2xl rounded-bl-2xl  font-semibold text-start relative">
    <div className="bg-[#2DA0D9] rounded-3xl p-4 h-full flex flex-col justify-between">
      <h3 className="text-2xl sm:text-3xl xl:text-4xl  font-bold">04.</h3>
      <div>
        <p className="text-lg md:text-3xl lg:text-lg xl:text-3xl font-semibold mt-2.5">Cybersecurity & Compliance</p>
        <p className="text-sm xl:text-lg font-normal mt-1 mb-2">Advanced firewall security, data protection, and threat detection.</p>
      </div>
          {/* Small "Know More" btn */}
      <a
        href="#"
        className="absolute bottom-6 right-8 flex items-center group text-[.8rem] font-light hover:font-extrabold "
      >
        <span className="absolute -left-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
          →
        </span>
        <span className="transition-all duration-300 group-hover:translate-x-2">
          Know More
        </span>
      </a>
    </div>
  </div>

  <div className="bg-[#464646] h-auto sm:h-[25vh] md:h-[30vh] lg:h-[50vh] xl:h-[45vh] px-2 py-4 font-semibold text-start relative">
    <div className="bg-[#F04F24] rounded-3xl p-4 h-full flex flex-col justify-between">
      <h3 className="text-2xl sm:text-3xl xl:text-4xl  font-bold">05.</h3>
      <div>
        <p className="text-lg md:text-3xl lg:text-lg xl:text-3xl font-semibold mt-3.5">IT Consulting & Support</p>
        <p className="text-sm xl:text-lg font-normal mt-1.5 mb-2">Strategic IT guidance and 24/7 enterprise support.</p>
      </div>
          {/* Small "Know More" btn */}
      <a
        href="#"
        className="absolute bottom-6 right-8 flex items-center group text-[.8rem] font-light hover:font-extrabold "
      >
        <span className="absolute -left-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
          →
        </span>
        <span className="transition-all duration-300 group-hover:translate-x-2">
          Know More
        </span>
      </a>
    </div>
  </div>

  <div className="bg-[#464646] h-auto sm:h-[25vh] md:h-[30vh] lg:h-[50vh] xl:h-[45vh] px-2 py-4 font-semibold text-start relative">
    <div className="bg-[#2DA0D9] rounded-3xl p-4 h-full flex flex-col justify-between">
      <h3 className="text-2xl sm:text-3xl xl:text-4xl  font-bold">06.</h3>
      <div>
        <p className="text-lg md:text-3xl lg:text-lg xl:text-3xl font-semibold mt-3.5">Software Development & Integration</p>
        <p className="text-sm xl:text-lg font-normal relative bottom-0 mb-2">Custom-built business applications & seamless software integration.</p>
      </div>
          {/* Small "Know More" btn */}
      <a
        href="#"
        className="absolute bottom-6 right-8 flex items-center group text-[.8rem] font-light hover:font-extrabold "
      >
        <span className="absolute -left-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
          →
        </span>
        <span className="transition-all duration-300 group-hover:translate-x-2">
          Know More
        </span>
      </a>
    </div>
  </div>

  <div className="bg-[#464646] h-auto sm:h-[25vh] lg:rounded-br-2xl md:h-[30vh] lg:h-[50vh] xl:h-[45vh] px-2 py-4 font-semibold text-start relative">
    <div className="bg-[#7DBB42] rounded-3xl p-4 h-full flex flex-col justify-between">
      <h3 className="text-2xl sm:text-3xl xl:text-4xl  font-bold">07.</h3>
      <div>
        <p className="text-lg md:text-3xl lg:text-lg xl:text-3xl font-semibold mt-3.5">Branding Design</p>
        <p className="text-sm xl:text-lg font-normal relative bottom-0 mb-3">Extraordinary Branding design for an extraordinary Brand value.</p>
      </div>
          {/* Small "Know More" btn */}
      <a
        href="#"
        className="absolute bottom-6 right-8 flex items-center group text-[.8rem] font-light hover:font-extrabold "
      >
        <span className="absolute -left-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
          →
        </span>
        <span className="transition-all duration-300 group-hover:translate-x-2">
          Know More
        </span>
      </a>
    </div>
  </div>

</div>
{/* Mobile Layout Carousel */}
<div className="w-full mt-24 lg:hidden">
  {/* Heading */}
  <div className="text-3xl font-bold text-[#464646] text-center mb-6">
    This is What we do?
  </div>

  {/* Horizontal scroll container */}
  <div className="flex overflow-x-auto space-x-4 pr-4  snap-x snap-mandatory scroll-smooth">
    {technologiesMobile.map((tech, idx) => (
      <div
        key={idx}
        className="flex-shrink-0 w-[80%] sm:w-[70%] sm:min-h-[25vh] lg:hidden bg-[#464646] text-white rounded-3xl p-4 snap-start"
      >
        <div className={`rounded-3xl p-4 h-full flex flex-col justify-between bg-[${tech.bg}]`}>
          <h3 className="text-2xl font-bold">{`0${idx + 1}.`}</h3>
          <div>
            <p className="text-lg font-semibold mt-3.5">{tech.title}</p>
            <p className="text-sm font-normal mt-1.5">{tech.desc}</p>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>



{/* footer section */}
<div className="w-full grid grid-cols-12 gap-5 mt-16 p-5 mb-8">


{/* 1️⃣ Left Contact Info Column */}
<div className="col-span-12 md:col-span-4 bg-[#464646] text-center rounded-3xl text-white p-5 flex flex-col items-center justify-center gap-6">

  <Image 
    src="/footer-tech-tycoons-logo.webp" 
    alt="Logo" 
    width={128}
    height={128}
    className="mx-auto"
  />

  {/* Address with underline hover */}
  <div className="relative flex items-start gap-3 text-sm leading-relaxed cursor-pointer group">
    <HiLocationMarker size={24} />
    <div className="text-lg font-normal group-hover:text-[#F04F24] transition-colors duration-300">
      Basement, Ankru Complex,<br />
      Naranpura, Ahmedabad,<br />
      Gujarat, India.
    </div>
    <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-[#F04F24] transition-all duration-500 group-hover:w-full"></span>
  </div>

  {/* Phone with underline hover */}
  <div className="relative flex items-center gap-3 text-lg font-normal cursor-pointer group">
    <MdPhone size={24} />
    <span className="hover:text-[#F04F24] transition-colors duration-300">
      +91 99130 86449
    </span>
    <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-[#F04F24] transition-all duration-500 group-hover:w-full"></span>
  </div>

  {/* Email with underline hover */}
  <div className="relative flex items-center gap-3 text-lg font-normal cursor-pointer group">
    <MdEmail size={24} />
    <span className="hover:text-[#F04F24] transition-colors duration-300">
      sales@techtycoons.in
    </span>
    <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-[#F04F24] transition-all duration-500 group-hover:w-full"></span>
  </div>

  {/* Social Icons */}
  <div className="flex justify-center space-x-4 mt-3">
    <div className="bg-white p-3 rounded-full text-[#464646] cursor-pointer transition-all duration-300 transform hover:bg-[#F04F24] hover:text-white hover:scale-110 hover:shadow-lg">
      <FaInstagram size={20} />
    </div>
    <div className="bg-white p-3 rounded-full text-[#464646] cursor-pointer transition-all duration-300 transform hover:bg-[#F04F24] hover:text-white hover:scale-110 hover:shadow-lg">
      <FaFacebookF size={20} />
    </div>
    <div className="bg-white p-3 rounded-full text-[#464646] cursor-pointer transition-all duration-300 transform hover:bg-[#F04F24] hover:text-white hover:scale-110 hover:shadow-lg">
      <FaLinkedinIn size={20} />
    </div>
  </div>

</div>


  {/* <!-- 2️⃣ Middle Contact Form Column --> */}
  <div className="col-span-12 md:col-span-4 bg-white rounded-3xl border-black border-[1px] p-4 flex flex-col gap-6">
    <input type="text" placeholder="Name" className="border border-gray-500 rounded-2xl p-3 focus:outline-none" />
    <input type="text" placeholder="Company Name" className=" border border-gray-500 rounded-2xl  p-3 focus:outline-none" />
    <input type="text" placeholder="Contact Number" className=" border border-gray-500 rounded-2xl  p-3 focus:outline-none" />
    <input type="text" placeholder="What are you looking for?" className=" border border-gray-500 rounded-2xl  p-3 focus:outline-none" />

<div className="flex space-x-4 text-sm lg:text-[1rem] text-center">

  {/* Submit Button */}
  <button className="group bg-[#7DBB42] text-center  hover:rounded-sm text-white rounded-full px-4 py-2 font-semibold flex items-center gap-2 transform transition-transform duration-500 hover:scale-105 overflow-hidden">
    Submit
    <span className="inline-block opacity-0 transform translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200">
      →
    </span>
  </button>

  {/* Reset Button */}
  <button className="group bg-[#329FD9]  text-center hover:rounded-sm text-white rounded-full px-4 py-2 font-semibold flex items-center gap-2 transform transition-transform duration-300 hover:scale-105 overflow-hidden">
    Reset
    <span className="inline-block opacity-0 transform translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
      ✕
    </span>
  </button>

</div>


  </div>
{/* 
  <!-- 3️⃣ Right Map Iframe Column --> */}
  <div className="col-span-12 md:col-span-4 bg-white rounded-3xl  ">
 <iframe
  src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3671.0521422648158!2d72.5533866753149!3d23.05854987914861!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjPCsDAzJzMwLjgiTiA3MsKwMzMnMjEuNSJF!5e0!3m2!1sen!2sin!4v1758009591347!5m2!1sen!2sin"
  width="100%"
  height="100%"
  className="rounded-lg"
  style={{ border: 0 }}
  allowFullScreen
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade">
</iframe>

  </div>

</div>
<div className="flex flex-col sm:flex-row sm:flex-wrap text-start pl-10 sm:p-0 sm:items-center justify-center gap-3 lg:gap-10 text-black">
  {[
    "IT Infrastructure & Networking",
    "AI Based Automation",
    "Cloud Solutions",
    "Cybersecurity & Compliance",
    "IT Consulting & Support",
    "Software Development & Integration",
    "Branding Design",
  ].map((text, idx) => (
    <p
      key={idx}
      className="text-sm sm:text-lg font-medium  relative cursor-pointer after:content-[''] after:block after:w-0 after:h-[2px] after:bg-black after:transition-all after:duration-300 after:mt-1 hover:after:w-full"
    >
      {text}
    </p>
  ))}
</div>

<div className="flex justify-center items-center mt-5  ">
  <p className="bg-[#464646] inline-block px-5 py-1 text-sm mb-8 text-white font-extralight rounded-full">
     © 2025 Tech Tycoons. All rights reserved</p></div>
     
    </div>
  );
}
