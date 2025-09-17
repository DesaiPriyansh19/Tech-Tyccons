"use client";

import { useEffect, useRef, ReactNode } from "react";
import "locomotive-scroll/dist/locomotive-scroll.css";

interface SmoothScrollProps {
  children: ReactNode;
}

// LocomotiveScroll type
type LocomotiveScrollType = {
  new (options: any): {
    destroy: () => void;
  };
};

export default function SmoothScroll({ children }: SmoothScrollProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let scroll: { destroy: () => void } | null = null;

    const initScroll = async () => {
      const LocomotiveScroll: LocomotiveScrollType = (
        await import("locomotive-scroll")
      ).default;

      if (scrollRef.current) {
        scroll = new LocomotiveScroll({
          el: scrollRef.current,
          smooth: true,
          multiplier: 1, // increase sensitivity
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
