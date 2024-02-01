import NavButton from "./button";
import Image from "next/image";

export default function NavBar() {
  return (
    <div className="fixed flex flex-col group">
        <div className="flex w-screen bg-sky-600/75 justify-center min-h-9 z-10 group-hover:bg-sky-600">
            <NavButton text="Dataset"></NavButton>
            <NavButton text="Narrative"></NavButton>
            <NavButton text="Timeline"></NavButton>
            <NavButton text="Bibliography"></NavButton>
        </div>
        <div className="justify-center min-h-9 group-hover:flex group-hover:bg-sky-600 group-hover:animate-fade-down group-hover:animate-duration-100 group-hover:animate-ease-linear bg-sky-600/75 w-screen hidden">
            <NavButton text="Analysis"></NavButton>
            <NavButton text=""></NavButton>
            <NavButton text="About"></NavButton>
            <NavButton text="Resources"></NavButton>
        </div>
    </div>
  );
}

