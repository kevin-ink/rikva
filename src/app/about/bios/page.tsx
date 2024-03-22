"use client";
import { profiles, Profile } from "../profiles";
import FullProfile from "./components/fullProfile";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Bios() {
  const [isCon, setIsCon] = useState(false);
  const toggleText = () => setIsCon(!isCon);
  const variants = {
    active: {
      x: isCon ? "100%" : 0,
      transition: { duration: 0.3 },
    },
  };
  return (
    <div className="w-screen h-fit pt-16 flex flex-col justify-center items-center">
      <div
        className="relative flex flex-row justify-between rounded shadow-lg border-1 border-black font-comfortaa text-2xl w-2/6 cursor-pointer"
        onClick={toggleText}
      >
        <motion.div
          variants={variants}
          animate="active"
          className="absolute w-1/2 bg-sky-500 rounded h-full top-0 z-0"
        />
        <div className="w-1/2 z-10 text-center">Bio</div>
        <div className="w-1/2 z-10 text-center">Contribution</div>
      </div>
      <div className="w-screen h-fit flex pt-8 flex-wrap m-auto">
        {profiles.map((profile: Profile, index: number) => (
          <FullProfile
            key={index}
            name={profile.name}
            bio={profile.bio}
            contribution={profile.contribution}
            isCon={isCon}
          />
        ))}
      </div>
      <Link href="/about" passHref>
        <button
          type="button"
          className="mt-8 font-roboto_mono text-center w-full hover:text-sky-700 hover:underline text-2xl"
        >
          Return to About Page &gt;
        </button>
      </Link>
    </div>
  );
}
