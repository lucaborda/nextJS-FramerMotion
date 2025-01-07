"use client";
import dynamic from "next/dynamic";
import Paragraph from "./Characters";
import { useRef } from "react";
import { theRavenChosenParagraph } from "@/utils/theRaven";
import TextVideoMask from "./TextVideoMask";

const Scene = dynamic(() => import("./Scene"), {
  ssr: false,
});

export default function Something() {
  const container = useRef(null);

  return (
    <main className="bg-[hsl(0,0,6%)] relative flex h-screen overflow-x-auto w-full z-30">
      <div
        ref={container}
        className="h-screen bg-transparent relative overflow-x-scroll no-scrollbar max-h-screen z-40"
      >
        <div className="bg-transparent h-screen w-full opacity-7">
          <Scene />
        </div>
        <Paragraph container={container} par={theRavenChosenParagraph} />
        <TextVideoMask />
      </div>
    </main>
  );
}
