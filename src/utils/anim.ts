export type FrameOptions = {
  top?: string | number;
  bottom?: string | number;
  left?: string | number;
  right?: string | number;
  y?: number;
  opacity?: number;
  scale?: number;
  height?: string | number;
  transition?: {
    duration?: number;
    ease?: number[];
    delay?: number;
  };
  transitionEnd?: {
    height?: number;
    top?: number;
  };
};

export type FrameStates = {
  initial?: FrameOptions | ((i: number) => FrameOptions);
  animate?: FrameOptions | ((i: number) => FrameOptions);
  enter?: FrameOptions | ((i: number) => FrameOptions);
  exit?: FrameOptions | ((i: number) => FrameOptions);
};

export const anim = (variants: FrameStates, custom?: number) => {
  return {
    initial: "initial",
    animate: "enter",
    exit: "exit",
    variants,
    custom,
  };
};
