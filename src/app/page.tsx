"use client";
import useMousePosition from "@/utils/useMousePosition";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Home() {
  const [isHovered, setIsHovered] = useState(false);
  const { x, y } = useMousePosition();
  const size = isHovered ? 400 : 40;

  return (
    <main className="h-screen">
      <motion.div
        animate={{
          WebkitMaskPosition: `${x - size / 2}px ${y - size / 2}px`,
          WebkitMaskSize: `${size}px`,
        }}
        transition={{ type: "tween", ease: "backOut" }}
        className="mask  h-full w-full flex items-center justify-center text-[#AFA18F] text-[64px] leading-[66px] cursor-default bg-[hsl(0,0,6%)] m-0 absolute [mask-image: url('../../public/circle.svg')]"
      >
        <p
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="w-[1000px]"
        >
          This is me, <span className="text-[#a139ec]">LUCA</span>, glad to meet
          you bro.
        </p>
      </motion.div>
      <div className="h-full w-full flex items-center justify-center text-[#AFA18F] text-[64px] leading-[66px] cursor-default bg-[hsl(0,0,6%)]">
        <p className="w-[1000px]">
          Im hiding myself in my deeper emotions, for maybe
          <span className="text-[#EC4E39]"> some curious</span> go through those
          walls with his unleashed, circular hands.
        </p>
      </div>
    </main>
  );
}
