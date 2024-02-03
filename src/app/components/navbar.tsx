"use client";
import { useState } from "react";
import { motion } from "framer-motion";

export default function NavBar() {
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const handleMouseLeave = () => {
    setDropdownVisible(false);
  };

  type NavButtonProps = {
    text?: string;
    onHover?: () => void;
  };

  function NavButton({ text, onHover }: NavButtonProps) {
    return (
      <button
        className="text-xs w-12 w-12 text-slate-700 mx-10 hover:text-sky-50"
        onMouseEnter={onHover}
      >
        {text}
      </button>
    );
  }

  function Dropdown() {
    return (
      isDropdownVisible && (
        <motion.div
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          style={{ transformOrigin: "top" }}
          className={`h-auto flex flex-col w-screen ${
            isDropdownVisible ? "bg-sky-600" : "bg-sky-600/75"
          }`}
        >
          <div className={`flex min-h-10 items-center justify-center`}>
            <NavButton text="Method" />
            <NavButton text="Analysis" />
            <NavButton />
            <NavButton />
          </div>
          <div className={`flex min-h-10 items-center justify-center`}>
            <NavButton text="Story" />
            <NavButton text="" />
            <NavButton />
            <NavButton />
          </div>
        </motion.div>
      )
    );
  }

  return (
    <div
      onMouseLeave={handleMouseLeave}
      className={`fixed flex flex-col
      }`}
    >
      <div
        className={`grid grid-cols-3 max-w-screen min-h-10 ${
          isDropdownVisible ? "bg-sky-600" : "bg-sky-600/75"
        }`}
      >
        <h1 className="flex items-center col-start-1 ml-10 col-end-2 text-lg">
          RIKVA
        </h1>
        <div className={`flex items-center col-start-2 col-end-3`}>
          <NavButton text="Data" onHover={() => setDropdownVisible(true)} />
          <NavButton
            text="Narrative"
            onHover={() => setDropdownVisible(true)}
          />
          <NavButton text="Timeline" onHover={() => setDropdownVisible(true)} />
          <NavButton
            text="Bibliography"
            onHover={() => setDropdownVisible(true)}
          />
        </div>
      </div>
      <Dropdown />
    </div>
  );
}
