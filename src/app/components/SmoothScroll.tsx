"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP plugin
gsap.registerPlugin(ScrollTrigger);

interface SmoothScrollProps {
  children: React.ReactNode;
}

export default function SmoothScroll({ children }: SmoothScrollProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // ✅ Properly typed: either a LocomotiveScroll instance or null
    let locoScroll: InstanceType<typeof import("locomotive-scroll").default> | null = null;

    const initScroll = async () => {
      // Import only on client
      const LocomotiveScroll = (await import("locomotive-scroll")).default;

      if (scrollRef.current) {
        locoScroll = new LocomotiveScroll({
          el: scrollRef.current,
          smooth: true,
          multiplier: 1,
        });

        // Sync Locomotive with GSAP
        locoScroll.on("scroll", ScrollTrigger.update);

        ScrollTrigger.scrollerProxy(scrollRef.current, {
          scrollTop(value) {
            return arguments.length
              ? locoScroll!.scrollTo(value, 0, 0)
              : locoScroll!.scroll.instance.scroll.y;
          },
          getBoundingClientRect() {
            return {
              top: 0,
              left: 0,
              width: window.innerWidth,
              height: window.innerHeight,
            };
          },
          pinType: scrollRef.current!.style.transform ? "transform" : "fixed",
        });

        ScrollTrigger.addEventListener("refresh", () => locoScroll!.update());
        ScrollTrigger.refresh();
      }
    };

    initScroll();

    return () => {
      if (locoScroll) locoScroll.destroy();
    };
  }, []);

  return (
    <div ref={scrollRef} data-scroll-container>
      {children}
    </div>
  );
}
