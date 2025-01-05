"use client";

import { ReactNode } from "react";
import FrozenRoute from "./FrozenRoute";
import { stairsTransitions } from "./transitions/stairsTransition";

export default function Template({ children }: { children: ReactNode }) {
  return stairsTransitions(<FrozenRoute>{children}</FrozenRoute>);
}
