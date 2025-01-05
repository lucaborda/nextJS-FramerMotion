import { anim, FrameOptions } from "@/utils/anim";
import { motion } from "framer-motion";

const numOfCol = 5;

const expand = {
  initial: {
    top: 0,
  },
  enter: (i: number): FrameOptions => ({
    top: "100%",
    transition: {
      duration: 0.4,
      delay: 0.05 * i,
    },
    transitionEnd: {
      height: 0,
      top: 0,
    },
  }),
  exit: (i: number): FrameOptions => ({
    height: "100%",
    transition: {
      duration: 0.4,
      delay: 0.05 * i,
    },
  }),
};

export const stairsTransitions = (children: React.JSX.Element) => {
  return (
    <div>
      <div className="h-screen w-screen fixed top-0 left-0 pointer-events-none flex">
        {[...Array(numOfCol)].map((_, i) => {
          return (
            <motion.div
              {...anim(expand, numOfCol - i)}
              className="relative h-full w-[20%] bg-[#EC4E39]"
              key={i}
            />
          );
        })}
      </div>
      {children}
    </div>
  );
};
