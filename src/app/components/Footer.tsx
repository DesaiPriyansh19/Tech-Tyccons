"use client";

import React from 'react'
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { FaInstagram, FaFacebookF, FaLinkedinIn } from 'react-icons/fa'
import { HiLocationMarker } from 'react-icons/hi'
import { MdEmail, MdPhone } from 'react-icons/md'
function Footer() {
    const [formData, setFormData] = useState({
    name: "",
    company: "",
    contact: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        alert("Message sent successfully!");
        setFormData({ name: "", company: "", contact: "", message: "" }); // reset
      } else {
        alert("Something went wrong. Try again later.");
      }
    } catch (err) {
      console.error(err);
      alert("Error sending message");
    }
  };

  const [showMap, setShowMap] = useState(false);

useEffect(() => {
  setShowMap(true);
}, []);

  return (
   <>
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
<form className="col-span-12 md:col-span-4 bg-white  p-4 flex flex-col gap-6" onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} className="border border-gray-500 rounded-2xl p-3 focus:outline-none" />
      <input type="text" name="company" placeholder="Company Name" value={formData.company} onChange={handleChange} className="border border-gray-500 rounded-2xl p-3 focus:outline-none" />
      <input type="text" name="contact" placeholder="Contact Number" value={formData.contact} onChange={handleChange} className="border border-gray-500 rounded-2xl p-3 focus:outline-none" />
      <input type="text" name="message" placeholder="What are you looking for?" value={formData.message} onChange={handleChange} className="border border-gray-500 rounded-2xl p-3 focus:outline-none" />

      <div className="flex space-x-4 text-sm lg:text-[1rem] text-center">
        <button type="submit" className="group bg-[#7DBB42] text-center text-white rounded-full px-4 py-2 font-semibold flex items-center gap-2 transform transition-transform duration-500 hover:scale-105 overflow-hidden">
          Submit
          <span className="inline-block opacity-0 transform translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200">→</span>
        </button>

        <button  type="button" // NOT "reset"
  onClick={() =>
    setFormData({ name: "", company: "", contact: "", message: "" })
  } className="group bg-[#329FD9] text-center text-white rounded-full px-4 py-2 font-semibold flex items-center gap-2 transform transition-transform duration-300 hover:scale-105 overflow-hidden">
          Reset
          <span className="inline-block opacity-0 transform translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">✕</span>
        </button>
      </div>
    </form>

  </div>
{/* 
  <!-- 3️⃣ Right Map Iframe Column --> */}
  <div className="col-span-12 md:col-span-4 bg-white rounded-3xl  ">
    {showMap && (
 <iframe
  src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3671.0521422648158!2d72.5533866753149!3d23.05854987914861!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjPCsDAzJzMwLjgiTiA3MsKwMzMnMjEuNSJF!5e0!3m2!1sen!2sin!4v1758009591347!5m2!1sen!2sin"
  width="100%"
  height="100%"
  className="rounded-lg"
  style={{ border: 0 }}
  allowFullScreen
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade">
</iframe>)}

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
   </>
  )
}

export default Footer