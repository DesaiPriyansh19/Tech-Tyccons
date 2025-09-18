'use client'

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "./components/Footer";
import AbutUsSection from "./components/home/AbutUsSection";
import ThisIsWhatWeDo from "./components/home/ThisIsWhatWeDo";
import HeroSection from "./components/home/HeroSection";
import TechnologiesWeUse from "./components/home/TechnologiesWeUse";





export default function Home() {


  

  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration in ms
     once: false,  // Allow repeated animations on scroll    // whether animation should happen only once
    });
  }, []);


  return (
    <div className="  w-full pb-2 sm:pb-0 " >

{/* Hero Section */}
<section id="">
<HeroSection />
</section>

{/* technologies we use */}
<section id="">
<TechnologiesWeUse/>
</section> 

{/* About US */}
<section id="" >
<AbutUsSection/>
</section>



{/* This Is What We Do */}
<section id="" >
<ThisIsWhatWeDo/>
</section>

{/* Footer */}
<section id="" >
<Footer/>
     </section>
    </div>
  );
}
