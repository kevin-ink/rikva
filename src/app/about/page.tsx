"use client";
import SimpleProfile from "./components/simpleProfile";
import AnimatedHeader from "./animatedHeader";
import { profiles, Profile } from "./profiles";
import Milestones from "./components/milestones";
import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="flex flex-col h-auto w-screen items-center max-w-screen min-h-screen">
      <div className="bg-flight-pattern bg-bottom bg-fixed bg-cover h-screen w-screen">
        <motion.div
          initial={{ scaleX: 1 }}
          animate={{
            scaleX: 0,
          }}
          transition={{
            duration: 3.5,
            ease: "linear",
            times: [0, 0.857, 1],
          }}
          style={{
            originX: 1,
          }}
          className="w-full h-full bg-sky-100 absolute t-0"
        ></motion.div>
        <AnimatedHeader />
      </div>
      <div className="flex pl-32 pr-32 flex-row w-full justify-between bg-sky-100 pt-32 pb-32 h-fit">
        {profiles.map((profile: Profile, index: number) => (
          <SimpleProfile
            key={index}
            name={profile.name}
            role={profile.role}
            pos={index}
          />
        ))}
      </div>
      <Milestones />
      <div className="p-10 bg-white grid grid-rows-3 grid-cols-3 w-full h-screen">
        {/* <FAQ />
        <Acknowledgements />
        <BibFooter /> */}
      </div>
    </div>
  );
}
