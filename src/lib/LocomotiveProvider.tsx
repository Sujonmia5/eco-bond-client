"use client";
import { useLocomotiveScroll } from "@/hooks/useLocomotiveScroll";
import { TChildren } from "@/interface/PropsTypes";

const Locomotive = ({ children }: TChildren) => {
  const { scrollRef } = useLocomotiveScroll();

  return (
    <div ref={scrollRef} data-scroll-container>
      {children}
    </div>
  );
};

export default Locomotive;
