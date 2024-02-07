import SimpleProfile from "../components/simpleProfile";
import AnimatedHeader from "./animatedHeader";

export default function About() {
  return (
    <div className="flex flex-col h-auto items-center max-w-screen min-h-screen">
      <AnimatedHeader />
      <div className="flex flex-row w-10/12 justify-between h-fit">
        <SimpleProfile />
        <SimpleProfile />
        <SimpleProfile />
        <SimpleProfile />
        <SimpleProfile />
      </div>
    </div>
  );
}
