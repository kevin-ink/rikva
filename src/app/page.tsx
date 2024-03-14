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
  const [quote, setQuote] = useState(false);
  const [currentImage, setCurrentImage] = useState(getImageUrl(currFrame));
  const [icon, setIcon] = useState(true);
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    let currFrame;
    if (latest >= 0.7) {
      currFrame = 106;
    } else {
      currFrame = Math.round(latest * (106 / 0.7));
    }
    if (currFrame < 1) {
      currFrame = 1;
    }
    if (currFrame >= 60) {
      setQuote(true);
    } else {
      setQuote(false);
    }
    if (currFrame > 1) {
      setIcon(false);
    } else {
      setIcon(true);
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
      <div className="w-screen h-[800vh]">
        <AnimatePresence>
          {icon ? (
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
            unoptimized
            priority
          />
          <AnimatePresence>
            {quote && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                exit={{ opacity: 0 }}
                animate={{ opacity: 1, y: 0, transition: { duration: 1.5 } }}
                className="bg-slate-300/75 top-0 absolute flex flex-col items-center justify-center h-screen w-screen"
              >
                <h1 className="text-5xl w-10/12">
                  2018, there were upwards of 1,100 million scheduled passengers
                  in the U.S. alone.
                </h1>
                <div className="w-10/12 text-right">
                  <p>-Bureau of Transportation Statistics</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
      <div className="flex flex-col mt-32 w-screen items-center">
        <h1 className="w-full font-inter text-6xl pl-32 mt-16 font-roboto_mono font-bold">
          Introduction
        </h1>
        <p className="mt-8 w-8/12 text-2xl">
          Airports are one of the busiest places in the world, bringing together
          people from all over the world and from different backgrounds.Most of
          the 1,100 million passengers will probably agree that air
          transportation was a fantastic addition to the modes of
          transportation. Yet, air transportation contributes to some
          significant consequences that are impacting the world today and for
          the foreseeable future. The purpose of this narrative is to highlight
          the necessity of campaigning for more responsible airport and air
          travel guidelines to ensure that air travel remains a beneficial mode
          of transportation in the foreseeable future. Datasets gathered from
          various sources dedicated to tracking air traffic, air pollution, air
          noise complaints, and air travel discrimination reveal two important
          issues surrounding air travel.
          <br /> <br />
          More specifically, the investigation of the data sets from these
          different sources inspired the following questions:
        </p>
        <div className="flex flex-row bg-sky-300 h-96 items-center w-full mt-16 justify-around">
          <div className="bg-white w-3/12 h-80 border-2 text-2xl font-inter rounded-lg p-2">
            How does a large, busy airport impact it&apos;s surrounding
            communities?
          </div>
          <div className="bg-white w-3/12 h-80 border-2 text-2xl font-inter rounded-lg p-2">
            In what ways are social dynamics, such as experiences of
            discrimination, affecting air travel decisions of marginalized
            communities (based on race, gender, and/or religious affiliation)?
          </div>
        </div>
        <p className="mt-8 w-8/12 text-2xl">
          The answers to these questions are the focus of our narrative and form
          the basis of why we argue that airport and air traffic guidelines are
          not sufficient today. We decided to focus our investigation on air
          travel in 2018 as it is the most representative of the air traffic
          industry at its highest numbers, with 2019 and 2020 steadily and
          steeply dropping in air travel numbers respectively due to the
          COVID-19 pandemic. We recognize that as the world recovered from the
          pandemic, air travel has returned to previous heights but our data is
          still very applicable as air travel guidelines have not changed much
          in the U.S. post-2018. This also means that we will focus our argument
          on the U.S., though much of our argument can apply to air travel in
          any other country, focusing on the U.S. allows us a lot more
          meaningful data to work with.
        </p>
      </div>
    </main>
  );
}
