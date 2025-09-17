"use client";

import { useEffect, useRef, ReactNode } from "react";
import "locomotive-scroll/dist/locomotive-scroll.css";
import LocomotiveScroll from "locomotive-scroll"; // Import class for typing

interface SmoothScrollProps {
  children: ReactNode;
}

export default function SmoothScroll({ children }: SmoothScrollProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let scroll: InstanceType<typeof LocomotiveScroll> | null = null;

    const initScroll = async () => {
      const LocomotiveScrollModule = (await import("locomotive-scroll")).default;

      if (scrollRef.current) {
        scroll = new LocomotiveScrollModule({
          el: scrollRef.current,
          smooth: true,
          multiplier: 1,
        });
      }
    };

    initScroll();

    return () => {
      if (scroll) scroll.destroy();
    };
  }, []);

  return (
    <div ref={scrollRef} data-scroll-container>
      {children}
    </div>
  );
}
