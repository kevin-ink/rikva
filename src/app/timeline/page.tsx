"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

export default function Timeline() {
  const [popupVisible, setpopupVisbility] = useState(true);
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center">
      <iframe
        className="w-screen h-screen"
        src="https://cdn.knightlab.com/libs/timeline3/latest/embed/index.html?source=1nwmi5zy0zMPoONwv4q43zDyE37_mfzIw2O9jhtooYAc&font=Default&lang=en&initial_zoom=2&height=650"
      ></iframe>
      <AnimatePresence>
        {popupVisible && (
          <motion.div
            exit={{ opacity: 0 }}
            className="absolute w-screen h-screen flex flex-col justify-center items-center bg-white"
          >
            <h1 className="text-4xl font-roboto_mono">TIMELINE</h1>
            <p className="font-inter w-10/12 mt-10 text-lg text-center">
              The following is a timeline regarding the evolution of airplane
              policy. Some important facts to take note of is that the airplane
              was first invented in 1903 yet the first major policy to be put in
              place wasn’t until 1932, where flight inspections became a
              necessary part of everyday flight travel. It would take a while
              for many more policies to be enacted, with the biggest one being
              the implementation of the Transportation Security Administration
              (TSA) after the attacks of 9/11. For social change in the airline
              industry specifically, the National Air and Space Museum writes,
              “African Americans could choose to fly, but few did. Many airport
              facilities were segregated and discrimination was widespread.
              While the airlines themselves were not legally segregated,
              airports often were. Throughout the South, inferior airport
              accommodations discouraged African Americans from flying.
              Complaints to the airlines about discrimination proved fruitless.
              The airlines didn’t control the municipally owned airports they
              served and did not wish to get involved for fear of losing white
              customers. Until the Civil Rights movement began to bring about
              change, air travel remained mostly for white people.” The social
              change specific to African Americans was coupled with the Civil
              Rights Movement. While not directly stated, it is important to
              mention that with escalating prices - where the average flight is
              no longer $5 - flight becomes increasingly exclusive, transforming
              air transportation into a luxury privilege.
            </p>
            <button
              onClick={() => setpopupVisbility(false)}
              className="w-auto h-auto text-sky-700 text-2xl mt-10 hover:underline hover:text-sky-800 hover:font-bold font-comfortaa "
            >
              Explore Timeline
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
