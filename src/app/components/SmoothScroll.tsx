"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import LocomotiveScroll from "locomotive-scroll";

gsap.registerPlugin(ScrollTrigger);

interface SmoothScrollProps {
  children: React.ReactNode;
}

export default function SmoothScroll({ children }: SmoothScrollProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const locoScrollRef = useRef<LocomotiveScroll | null>(null);

  useEffect(() => {
    const initScroll = async () => {
      if (!scrollRef.current) return;

      // Dynamically import for SSR safety
      const LocomotiveScrollModule = (await import("locomotive-scroll")).default || (await import("locomotive-scroll"));

      locoScrollRef.current = new LocomotiveScrollModule({
        el: scrollRef.current,
        smooth: true,
        multiplier: 1,
      });

      locoScrollRef.current.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy(scrollRef.current!, {
  scrollTop(value?: number | string | HTMLElement) {
    if (value !== undefined) {
      locoScrollRef.current!.scrollTo(value, { duration: 0, offset: 0 });
    }
    return locoScrollRef.current!.scroll.instance.scroll.y;
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



      ScrollTrigger.addEventListener("refresh", () => locoScrollRef.current?.update());
      ScrollTrigger.refresh();
    };

    initScroll();

    return () => {
      locoScrollRef.current?.destroy();
    };
  }, []);

  return (
    <div ref={scrollRef} data-scroll-container>
      {children}
    </div>
  );
}
