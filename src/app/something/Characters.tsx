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
    offset: ["start 0.9", "start 0.2"],
  });

  const words = par.split(" ");
  return (
    <p
      ref={element}
      className="flex flex-wrap bg-transparent px-[10rem] text-[2.5rem] leading-7 text-center mb-[1rem]"
    >
      <span className="text-[#EC4E39] text-[3rem] mr-[1rem] mt-[1rem]">{`"`}</span>
      {words.map((word, i) => {
        const start = i / words.length;
        const end = start + 1 / words.length;
        return (
          <Word key={i} range={[start, end + start]} progress={scrollYProgress}>
            {word}
          </Word>
        );
      })}
      <span className="text-[#EC4E39] text-[3rem] ml-[1rem] mt-[1rem]">{`"`}</span>
    </p>
  );
};

export type WordProps = {
  children: string;
  progress: MotionValue<number>;
  range: number[];
};

const Word = ({ children, progress, range }: WordProps) => {
  const character = children.split("");
  const amount = range[1] - range[0];
  const step = amount / children.length;

  return (
    <span className="mr-[0.8rem] mt-[0.8rem] relative text-white">
      {character.map((char, i) => {
        const start = range[0] + step * 1;
        const end = range[0] * (step * (i + 1));
        return (
          <Character key={i} range={[end, start]} progress={progress}>
            {char}
          </Character>
        );
      })}
    </span>
  );
};

const Character = ({
  children,
  range,
  progress,
}: {
  children: string;
  progress: MotionValue<number>;
  range: number[];
}) => {
  const opacity = useTransform(progress, range, [0, 1]);

  return (
    <span className="relative text-white">
      <span className="absolute opacity-5">{children}</span>
      <motion.span style={{ opacity }} className="relative text-white">
        {children}
      </motion.span>
    </span>
  );
};

export default Paragraph;
