import Image from "next/image";

type FullProfileProps = {
  name: string;
  bio: string;
};

export default function FullProfile({ name, bio }: FullProfileProps) {
  return (
    <div className="flex flex-row w-1/2 h-fit">
      <Image
        src="https://placehold.co/200x250.png"
        className="border-2 rounded shadow-sm m-1"
        alt="Profile image of member"
        width={200}
        height={250}
      />
      <div className="flex flex-col m-1 w-3/4">
        <p className="text-xl font-comfortaa">{name}</p>
        <p className="text-md font-inter">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Pellentesque id nibh tortor id aliquet lectus proin. Sed augue lacus
          viverra vitae. Nulla facilisi cras fermentum odio eu feugiat pretium.
          Phasellus vestibulum lorem sed risus ultricies.
        </p>
      </div>
    </div>
  );
}
