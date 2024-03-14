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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Pellentesque id nibh tortor id aliquet lectus proin. Sed augue
              lacus viverra vitae. Nulla facilisi cras fermentum odio eu feugiat
              pretium. Phasellus vestibulum lorem sed risus ultricies. Turpis
              cursus in hac habitasse platea dictumst quisque. Porta nibh
              venenatis cras sed. Vitae nunc sed velit dignissim sodales. Quis
              auctor elit sed vulputate mi sit. Neque vitae tempus quam
              pellentesque nec nam aliquam sem et. Velit euismod in pellentesque
              massa. Condimentum mattis pellentesque id nibh tortor id aliquet.
              Turpis massa tincidunt dui ut ornare lectus.
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
