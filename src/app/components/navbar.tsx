"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import classNames from "classnames";

export default function NavBar() {
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const handleMouseLeave = () => {
    setDropdownVisible(false);
  };

  type NavButtonProps = {
    text?: string;
    onHover?: () => void;
    colStart?: number;
    rowStart?: number;
  };

  function NavButton({ text, onHover, colStart, rowStart }: NavButtonProps) {
    let cn = classNames("w-full h-8 flex text-sm justify-center items-center", {
      [`row-start-${rowStart}`]: rowStart,
      [`col-start-${colStart}`]: colStart,
      "text-xs": rowStart || colStart,
      "text-sm": !(rowStart || colStart),
    });
    return (
      <div className={cn}>
        <button
          className={`h-fit w-fit text-slate-700 hover:text-sky-50`}
          onMouseEnter={onHover}
        >
          {text}
        </button>
      </div>
    );
  }

  function Dropdown() {
    return (
      <motion.div
        key="modal"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        style={{ transformOrigin: "top" }}
        exit={{ scaleY: 0, backgroundColor: "#0284c7", opacity: "0.75" }}
        transition={{ duration: 0.3 }}
        className={`grid grid-cols-3 ${
          isDropdownVisible ? "bg-sky-600" : "bg-sky-600/75"
        }`}
      >
        <div className={`grid col-start-2 col-end-3 grid-cols-4 grid-rows-3`}>
          {/*Data*/}
          <NavButton text="Analysis" colStart={1} rowStart={1} />

          {/* Narrative */}
          <NavButton text="Background" colStart={2} rowStart={1} />
          <NavButton text="Story" colStart={2} rowStart={2} />

          {/* Timeline */}
          <NavButton text="Gallery" colStart={3} rowStart={1} />

          {/*About*/}
          <NavButton text="Team" colStart={4} rowStart={1} />
          <NavButton text="Resources" colStart={4} rowStart={2} />
          <NavButton text="Bibliography" colStart={4} rowStart={3} />
        </div>
      </motion.div>
    );
  }

  return (
    <div
      onMouseLeave={handleMouseLeave}
      className={`fixed flex flex-col w-screen h-auto
      }`}
    >
      <div
        className={`grid grid-cols-3 w-full h-full ${
          isDropdownVisible ? "bg-sky-600" : "bg-sky-600/75"
        }`}
      >
        <h1 className="flex items-center col-start-1 col-end-2 pl-10 font-bold text-xl">
          RIKVA
        </h1>
        <div className={`flex flex-row col-start-2 col-end-3`}>
          <NavButton text="Data" onHover={() => setDropdownVisible(true)} />
          <NavButton
            text="Narrative"
            onHover={() => setDropdownVisible(true)}
          />
          <NavButton text="Timeline" onHover={() => setDropdownVisible(true)} />
          <NavButton text="About" onHover={() => setDropdownVisible(true)} />
        </div>
      </div>
      <AnimatePresence>{isDropdownVisible && <Dropdown />}</AnimatePresence>
    </div>
  );
}
