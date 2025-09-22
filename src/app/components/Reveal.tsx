"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Reveal({ children }: { children: React.ReactNode }) {
  const revealRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (revealRef.current) {
      gsap.fromTo(
        revealRef.current,
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: revealRef.current,
            scroller: "[data-scroll-container]", // important for locomotive
            start: "top 85%",
            toggleActions: "play none none reverse", 
          },
        }
      );
    }
  }, []);

  return <div ref={revealRef}>{children}</div>;
}
