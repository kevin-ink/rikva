"use client";
import {
  motion,
  useScroll,
  useMotionValueEvent,
  AnimatePresence,
} from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import Icon from "@mdi/react";
import { mdiMouseMoveDown } from "@mdi/js";

export default function Home() {
  let currFrame = 1;
  const { scrollYProgress } = useScroll();
  const [opacity, setOpacity] = useState(1);
  const [currentImage, setCurrentImage] = useState(getImageUrl(currFrame));
  const [icon, setIcon] = useState(true);
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    currFrame = Math.round(106 * latest);
    if (currFrame < 1) {
      currFrame = 1;
    } else if (currFrame > 106) {
      currFrame = 106;
    }
    if (currFrame > 1) {
      setIcon(false);
    }
    setCurrentImage(getImageUrl(currFrame));
  });

  function getImageUrl(frameNumber: number) {
    const frameString = frameNumber.toString().padStart(3, "0");
    return `/window_frames/ezgif-frame-${frameString}.jpg`;
  }

  const animation = {
    y: [0, 20],
    opacity: [1, 0],
  };

  const transition = {
    duration: 2,
    ease: "easeInOut",
    repeat: Infinity,
  };

  return (
    <main className="flex max-w-screen min-w-screen min-h-screen flex-col items-center justify-center">
      <div className="w-screen h-600vh">
        <AnimatePresence>
          {scrollYProgress.get() === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={animation}
              transition={transition}
              exit={{ opacity: 0, transition: { duration: 0.01 } }}
              className="absolute top-[80vh] w-full z-10 flex justify-center"
            >
              <Icon path={mdiMouseMoveDown} size={4} />
            </motion.div>
          ) : (
            <></>
          )}
        </AnimatePresence>
        <div className="sticky top-0 w-screen h-screen">
          <Image
            width={3840}
            height={2160}
            src={currentImage}
            alt="Airplane frames"
            style={{ objectFit: "cover" }}
            unoptimized={true}
          />
        </div>
      </div>
      <Image
        alt="airplane window last frame"
        src="/window_frames/ezgif-frame-106.jpg"
        style={{ objectFit: "cover" }}
        unoptimized={true}
        width={3840}
        height={2160}
        className="w-screen h-screen"
      />
    </main>
  );
}
