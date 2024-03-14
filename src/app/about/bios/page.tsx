import { profiles, Profile } from "../profiles";
import FullProfile from "./components/fullProfile";
import Link from "next/link";

export default function Bios() {
  return (
    <div>
      <div className="w-screen h-fit flex pt-12 flex-wrap m-auto">
        {profiles.map((profile: Profile, index: number) => (
          <FullProfile key={index} name={profile.name} bio={profile.bio} />
        ))}
        <button></button>
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
