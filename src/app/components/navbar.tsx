"use client";
import classNames from "classnames";
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
    colStart?: number;
    rowStart?: number;
  };

  function NavButton({ text, onHover, colStart, rowStart}: NavButtonProps) {
    return (
      <div className={`row-start-${rowStart} col-start-${colStart}`}>
        <button
        className="flex justify-center items-center text-sm w-fit text-slate-700 hover:text-sky-50"
        onMouseEnter={onHover}
      >
        {text}
      </button>
      </div>
    );
  }

  function Dropdown() {
    return (
      isDropdownVisible && (
        <div className={`grid grid-cols-3 h-auto w-full ${
            isDropdownVisible ? "bg-sky-600" : "bg-sky-600/75"
          }`}>
          <motion.div
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          style={{ transformOrigin: "top" }}
          className={`grid col-start-2 col-end-3 grid-cols-4 grid-rows-3`}
          >
            {/*Data*/}
            <NavButton text="Analysis" colStart={1} rowStart={1}/>
            <NavButton text="Lorem" colStart={1} rowStart={3}/>
            {/*Narrative*/}
            <NavButton text="Story" colStart={2} rowStart={1}/>
            <NavButton text="Report"/>
            {/*Data*/}
          </motion.div>
        </div>
      )
    );
  }

  return (
    <div
      onMouseLeave={handleMouseLeave}
      className={`fixed flex flex-col w-screen
      }`}
    >
      <div
        className={`grid grid-cols-3 h-10 ${
          isDropdownVisible ? "bg-sky-600" : "bg-sky-600/75"
        }`}
      >
        <h1 className="flex items-center col-start-1 col-end-2 pl-10 font-bold text-xl">
          RIKVA
        </h1>
        <div className={`flex justify-around items-center col-start-2 col-end-3`}>
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
