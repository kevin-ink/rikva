import { profiles, Profile } from "../about/profiles";
import FullProfile from "./components/fullProfile";

export default function Bios() {
  return (
    <div>
      <div className="w-screen h-fit flex pt-12 flex-wrap m-auto">
        {profiles.map((profile: Profile, index: number) => (
          <FullProfile key={index} name={profile.name} bio={profile.bio} />
        ))}
        <button></button>
      </div>
      <button className="mt-8 font-roboto_mono text-center w-full hover:text-sky-700 hover:underline text-2xl">
        Return to About Page
      </button>
    </div>
  );
}
