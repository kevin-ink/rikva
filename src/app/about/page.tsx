import SimpleProfile from "../components/simpleProfile";
import AnimatedHeader from "./animatedHeader";

export default function About() {
  return (
    <div className="flex flex-col h-screen items-center w-screen">
      <AnimatedHeader />
      <div className="h-48"></div>
      <div className="flex flex-row justify-center w-10/12 h-fit border-2 rounded ">
        <SimpleProfile />
        <SimpleProfile />
        <SimpleProfile />
        <SimpleProfile />
        <SimpleProfile />
      </div>
    </div>
  );
}
