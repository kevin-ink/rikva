"use client";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import classNames from "classnames";
import Link from "next/link";
import { Url } from "next/dist/shared/lib/router/router";

export default function NavBar() {
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const handleMouseLeave = () => {
    setDropdownVisible(false);
  };

  const handleMouseEnter = () => {
    setDropdownVisible(true);
  };

  type NavLinkProps = {
    text?: string;
    onHover?: () => void;
    colStart?: number;
    rowStart?: number;
    href?: Url;
  };

  function NavLink({
    text,
    onHover,
    colStart,
    rowStart,
    href = "",
  }: NavLinkProps) {
    let cn = classNames("w-fit h-9 flex text-sm justify-center items-center", {
      "text-xs": rowStart || colStart,
      "text-sm": !(rowStart || colStart),
    });
    return (
      <div className={classNames('w-full', {
      [`row-start-${rowStart}`]: rowStart,
      [`col-start-${colStart}`]: colStart,})}> 
        <Link href={href} className={cn}>
        <button
          onMouseEnter={onHover}
          className={`text-slate-700 hover:text-sky-50`}
        >
          {text}
        </button>
      </Link>
      </div>
    );
  }

  function Dropdown() {
    return (
      <motion.div
        initial={{ scaleY: 0, backgroundColor: "rgba(2, 132, 199, 0.75)" }}
        animate={{ scaleY: 1, backgroundColor: "rgba(2, 132, 199, 1)" }}
        style={{ transformOrigin: "top" }}
        exit={{ scaleY: 0, opacity: 0.75 }}
        className={`grid grid-cols-3 bg-sky-600 shadow-[0_8px_6px_-6px_rgba(0,0,0,0.25)]`}
      >
        <div className={`grid col-start-2 col-end-3 grid-cols-4 grid-rows-3`}>
          {/*Data*/}
          <NavLink text="Analysis" colStart={1} rowStart={1} />

          {/* Narrative */}
          <NavLink text="Background" colStart={2} rowStart={1} />
          <NavLink text="Story" colStart={2} rowStart={2} />

          {/* Timeline */}
          <NavLink text="Gallery" colStart={3} rowStart={1} />

          {/*About*/}
          <NavLink text="Team" colStart={4} rowStart={1} />
          <NavLink text="Resources" colStart={4} rowStart={2} />
          <NavLink text="Bibliography" colStart={4} rowStart={3} />
        </div>
      </motion.div>
    );
  }

  return (
    <div
      onMouseLeave={handleMouseLeave}
      className={`fixed flex flex-col w-screen h-auto z-10`}
    >
      <motion.div
        initial={false}
        animate={{
          backgroundColor: isDropdownVisible
            ? "rgba(2, 132, 199, 1)"
            : "rgba(2, 132, 199, 0.75)",
        }}
        className={`grid grid-cols-3 w-full h-fit bg-sky-600/75 shadow-[0_8px_6px_-6px_rgba(0,0,0,0.25)]`}
      >
        <div className="flex items-center col-start-1 col-end-2 pl-10 font-bold text-xl">
          <Link href={"/"}>
            <h1 className="w-fit h-fit hover:cursor-pointer">RIKVA</h1>
          </Link>
        </div>
        <div className={`flex flex-row col-start-2 col-end-3 flex-grow-1 w-full`}>
          <NavLink text="Data" onHover={handleMouseEnter} />
          <NavLink text="Narrative" onHover={handleMouseEnter} />
          <NavLink text="Timeline" onHover={handleMouseEnter} />
          <NavLink text="About" onHover={handleMouseEnter} />
        </div>
      </motion.div>
      <AnimatePresence>
        {isDropdownVisible && <Dropdown key="drop" />}
      </AnimatePresence>
    </div>
  );
}
