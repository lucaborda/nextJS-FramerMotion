"use client";
import React, { useRef } from "react";
import { useScroll, motion, useTransform, MotionValue } from "framer-motion";
import { RefObject } from "react";

type ParagraphProps = {
  container: RefObject<null>;
  par: string;
  arrayVals?: number[];
};

const Paragraph = ({ container, par }: ParagraphProps) => {
  const element = useRef(null);
  const { scrollYProgress } = useScroll({
    layoutEffect: false,
    target: element,
    container: container,
    offset: ["start 0.95", "end 0.9"],
  });

  const words = par.split(" ");
  return (
    <p
      ref={element}
      className="flex flex-wrap bg-transparent px-[10rem] text-[2rem] leading-4 text-center mb-[1rem]"
    >
      {words.map((word, i) => {
        const start = i / words.length;
        const end = start + 1 / words.length;
        return (
          <Word key={i} range={[start, end + start]} progress={scrollYProgress}>
            {word}
          </Word>
        );
      })}
    </p>
  );
};

export type WordProps = {
  children: string;
  range: number[];
  progress: MotionValue<number>;
};

const Word = ({ children, range, progress }: WordProps) => {
  const opacity = useTransform(progress, range, [0, 1]);
  return (
    <span className="mr-[0.8rem] mt-[0.8rem] relative text-white">
      <span className="absolute opacity-5">{children}</span>
      <motion.span style={{ opacity }}>{children}</motion.span>
    </span>
  );
};

export default Paragraph;
