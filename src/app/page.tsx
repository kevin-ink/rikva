/* eslint-disable @next/next/no-img-element */
"use client";
import {
  motion,
  useScroll,
  useMotionValueEvent,
  AnimatePresence,
} from "framer-motion";
import { useEffect, useState } from "react";
import Icon from "@mdi/react";
import { mdiMouseMoveDown } from "@mdi/js";
import Link from "next/link";

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

  useEffect(() => {
    // Function to preload images
    const preloadImage = (src: string) => {
      const img = new Image();
    };

    // Loop through the range of frame numbers and preload each image
    for (let frame = 1; frame <= 160; frame++) {
      const frameString = frame.toString().padStart(3, "0"); // Assuming you need leading zeros
      const imagePath = `/window_frames/ezgif-frame-${frameString}.jpg`;
      preloadImage(imagePath);
    }
  }, []);

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
          <img
            width={3840}
            height={2160}
            src={currentImage}
            alt="Airplane frames"
            style={{ objectFit: "cover" }}
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
                  In 2018, there were upwards of 1.1 billion scheduled
                  passengers in the U.S. alone.
                </h1>
                <div className="w-10/12 text-right">
                  <p>-Data from the Bureau of Transportation Statistics</p>
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
        <p className="mt-8 w-8/12 text-xl">
          &emsp;Airports are one of the busiest places in the world, bringing
          together people from all over the world and from different
          backgrounds. Most of the hundreds of millions of passengers will
          probably agree that air transportation was a fantastic addition to
          society. Yet, air transportation contributes to significant
          consequences that are impacting the world today and the foreseeable
          future. Our narrative details some of the more significant
          consequences like discrimination and hazardous pollution.
          <br></br>
          <br></br>
          &emsp;The purpose of this website and our narrative is to highlight
          the necessity of campaigning for more responsible airports and air
          travel guidelines to ensure that air travel remains a beneficial mode
          of transportation. Our narrative focuses on analyzing datasets
          gathered from various sources dedicated to tracking air traffic, air
          pollution, air noise complaints, and air travel discrimination. These
          datasets reveal two important issues surrounding air travel, which is
          reflected by the following questions:
        </p>
        <div className="flex flex-row bg-sky-300 h-96 items-center w-full mt-16 justify-around">
          <div className="bg-white w-3/12 h-80 border-2 text-2xl font-inter rounded-lg p-2">
            How does a large, busy airport in the U.S. impact it&apos;s
            surrounding communities?
          </div>
          <div className="bg-white w-3/12 h-80 border-2 text-2xl font-inter rounded-lg p-2">
            In what ways are social dynamics, such as experiences of
            discrimination, affecting air travel decisions of marginalized
            communities (based on race, gender, and/or religious affiliation)?
          </div>
        </div>
        <p className="mt-8 w-8/12 text-xl">
          &emsp;The answers to these questions are the focus of our narrative
          and form the basis of why we argue that airport and air traffic
          guidelines are insufficient today.
        </p>
        <p className="mt-8 w-8/12 text-xl p-2 bg-sky-200 rounded mt-100 mb-100">
          Airports lacks policies to truly guard against discrimination of
          marginalized communities, disincentizing these communities from
          travel. Addiitonally, current airport policies on air and noise
          pollution are insufficient, as surrounding communities are still
          experiencing harmful negative effects from airport pollution.
        </p>
        <p className="mt-8 w-8/12 text-xl">
          We decided to focus our investigation on air travel in 2018 as it is
          the most representative of the air traffic industry at its highest
          traffic, with 2019 and 2020 steadily and steeply dropping in air
          travel numbers respectively due to the COVID-19 pandemic. We recognize
          that as the world recovers from the pandemic, air travel has started
          returning to previous heights but our data is still very applicable as
          air travel guidelines have not changed much in the U.S. post-2018.
          More background information about the history of airline policy can be
          found&nbsp;
          <a href="/timeline" className="font-bold underline text-sky-500">
            here
          </a>
          , in the form of a timeline. This also means that we will focus our
          argument on the U.S., though much of our argument can apply to air
          travel in any other country, focusing on the U.S. allows us a lot more
          meaningful data to work with.
        </p>
        <Link href="/narrative" className="w-fit m-auto mt-10">
          <button className="text-3xl text-sky-500 hover:underline">
            GO TO NARRATIVE
          </button>
        </Link>
      </div>
    </main>
  );
}
