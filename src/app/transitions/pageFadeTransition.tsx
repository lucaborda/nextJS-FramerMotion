import { motion } from "framer-motion";
import { anim } from "@/utils/anim";

const opacity = {
  initial: { opacity: 0 },
  enter: { opacity: 1 },
  exit: { opacity: 1 },
};

const slide = {
  initial: { top: "100vh" },
  enter: { top: "100vh" },
  exit: {
    top: "0",
    transition: {
      duration: 1,
      ease: [0.76, 0, 0.24, 1],
    },
  },
};

const perspective = {
  initial: {
    y: 0,
    scale: 1,
    opacity: 1,
  },
  enter: {
    y: 0,
    scale: 1,
    opacity: 1,
  },
  exit: {
    y: -100,
    opacity: 0.5,
    scale: 0.9,
    transition: {
      duration: 1.2,
      ease: [0.76, 0, 0.24, 1],
    },
  },
};

export const pageFadeTransition = (children: React.JSX.Element) => {
  return (
    <div className="bg-[#AFA18F]">
      <motion.div
        {...anim(slide)}
        className="fixed top-0 left-0 w-screen h-screen bg-[hsl(0,0,6%)] z-10"
      />
      <motion.div {...anim(perspective)}>
        <motion.div className="z-10" {...anim(opacity)}>
          {children}
        </motion.div>
      </motion.div>
    </div>
  );
};
