"use client";
import SimpleProfile from "./components/simpleProfile";
import AnimatedHeader from "./animatedHeader";
import { profiles, Profile } from "./profiles";
import FAQ from "./components/faq";
import Milestones from "./components/milestones";
import Acknowledgements from "./components/acknowledgements";
import BibFooter from "./components/bibfooter";

export default function About() {
  return (
    <div className="flex flex-col bg-flight-pattern bg-center bg-fixed bg-cover h-auto w-screen items-center max-w-screen min-h-screen">
      <AnimatedHeader />
      <div className="flex pl-32 bg-sky-100/75 pr-32 flex-row w-full justify-between pt-32 pb-32 h-fit">
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
        <FAQ />
        <Acknowledgements />
        <BibFooter />
      </div>
    </div>
  );
}
