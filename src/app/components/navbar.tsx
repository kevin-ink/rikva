"use client";
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import classNames from "classnames";
import Link from "next/link";
import { Url } from "next/dist/shared/lib/router/router";
import { usePathname } from "next/navigation";

export default function NavBar() {
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const [ignoreHover, setIgnoreHover] = useState(false);
  const pathname: string = usePathname();

  const handleMouseLeave = () => {
    setDropdownVisible(false);
  };

  const handleMouseEnter = () => {
    if (!ignoreHover) {
      setDropdownVisible(true);
    }
  };

  const disableHover = () => {
    setDropdownVisible(false);
    setIgnoreHover(true);
  };

  const enableHover = () => {
    setIgnoreHover(false);
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
    href = "/",
  }: NavLinkProps) {
    let cn = classNames("w-fit h-9 flex text-sm items-center", {
      "text-xs": rowStart || colStart,
      "text-sm": !(rowStart || colStart),
    });
    return (
      <div
        className={classNames("w-full flex justify-center", {
          [`row-start-${rowStart}`]: rowStart,
          [`col-start-${colStart}`]: colStart,
        })}
      >
        <Link href={href} className={cn}>
          <button
            onMouseEnter={onHover}
            onClick={disableHover}
            onMouseLeave={enableHover}
            className={`h-fit w-fit text-slate-700 hover:text-sky-50 hover:cursor-pointer
            ${
              pathname === href && href !== `/` && href !== "/WIP"
                ? `text-white`
                : ``
            }`}
          >
            {text}
          </button>
        </Link>
      </div>
    );
  }

  // const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  // useEffect(() => {
  //   function handleResize() {
  //     setIsMobile(window.innerWidth < 768);
  //   }
  //   window.addEventListener("resize", handleResize);
  //   return () => window.removeEventListener("resize", handleResize);
  // }, []);

  function Dropdown() {
    return (
      <motion.div
        initial={{ scaleY: 0, backgroundColor: "rgba(2, 132, 199, 0.75)" }}
        animate={{ scaleY: 1, backgroundColor: "rgba(2, 132, 199, 1)" }}
        style={{ transformOrigin: "top" }}
        exit={{ scaleY: 0, opacity: 0.75 }}
        className={`grid grid-cols-3 bg-sky-600 shadow-[0_8px_6px_-6px_rgba(0,0,0,0.25)]`}
      >
        <div className={`grid col-start-2 col-end-3 grid-cols-3 grid-rows-3`}>
          {/*Data*/}
          <NavLink
            text="Timeline"
            href={"/timeline"}
            colStart={1}
            rowStart={1}
          />

          {/*Narrative*/}
          <NavLink
            text="RQ1"
            href={"/narrative/RQ1"}
            colStart={2}
            rowStart={1}
          />
          <NavLink
            text="RQ2"
            href={"/narrative/RQ2"}
            colStart={2}
            rowStart={2}
          />

          {/*About*/}
          <NavLink
            text="The Team"
            href={"/about/bios"}
            colStart={3}
            rowStart={1}
          />
          <NavLink
            text="Bibliography"
            href={"/WIP"}
            colStart={3}
            rowStart={2}
          />
        </div>
      </motion.div>
    );
  }
  return (
    <div
      onMouseLeave={handleMouseLeave}
      className={`fixed flex flex-col w-screen h-auto z-20`}
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
        <div className={`flex flex-row col-start-2 col-end-3 w-full`}>
          <NavLink text="Data" href={"/WIP"} onHover={handleMouseEnter} />
          <NavLink
            text="Narrative"
            href={"/narrative"}
            onHover={handleMouseEnter}
          />
          <NavLink text="About" href={"/about"} onHover={handleMouseEnter} />
        </div>
      </motion.div>
      <AnimatePresence>
        {isDropdownVisible && <Dropdown key="drop" />}
      </AnimatePresence>
    </div>
  );
}
