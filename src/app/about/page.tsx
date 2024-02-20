"use client";
import SimpleProfile from "./components/simpleProfile";
import AnimatedHeader from "./animatedHeader";
import { profiles, Profile } from "./profiles";
import FAQ from "./components/faq";
import Milestones from "./components/milestones";

export default function About() {
  return (
    <div className="flex flex-col h-auto items-center max-w-screen min-h-screen">
      <AnimatedHeader />
      <div className="flex pl-32 pr-32 flex-row w-full justify-between pt-10 pb-10 h-fit">
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
      <div className="p-10 grid grid-rows-3 grid-cols-3 w-full h-screen">
        <FAQ />
      </div>
    </div>
  );
}
