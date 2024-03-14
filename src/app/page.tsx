"use client";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";
import Image from "next/image";

export default function Home() {
  let currFrame = 1;
  const { scrollYProgress } = useScroll();
  const [currentImage, setCurrentImage] = useState(getImageUrl(currFrame));
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    currFrame = Math.round(50 * latest);
    if (currFrame < 1) {
      currFrame = 1;
    } else if (currFrame > 50) {
      currFrame = 50;
    }
    setCurrentImage(getImageUrl(currFrame));
  });

  function getImageUrl(frameNumber: number) {
    const frameString = frameNumber.toString().padStart(3, "0");
    return `/airplane_frames/ezgif-frame-${frameString}.jpg`;
  }

  return (
    <main className="flex max-w-screen min-w-screen min-h-screen flex-col items-center justify-center">
      <motion.div className="w-screen h-600vh">
        <img
          src={currentImage}
          alt="airplane frames"
          className="sticky top-0 max-w-screen h-auto"
        />
      </motion.div>
    </main>
  );
}
