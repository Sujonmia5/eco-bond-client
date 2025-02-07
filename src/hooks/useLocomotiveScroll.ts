"use client";
import { useEffect, useRef, useState } from "react";
import LocomotiveScroll from "locomotive-scroll";

export const useLocomotiveScroll = () => {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [scroll, setScroll] = useState<LocomotiveScroll | null>(null);

  useEffect(() => {
    if (typeof window === "undefined" || !scrollRef.current) return;

    const locomotiveScroll = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
    });

    setScroll(locomotiveScroll);

    // Update scroll on window resize
    window.addEventListener("resize", () => locomotiveScroll.update());

    return () => {
      locomotiveScroll.destroy();
      window.removeEventListener("resize", () => locomotiveScroll.update());
    };
  }, []);

  return { scrollRef, scroll };
};
