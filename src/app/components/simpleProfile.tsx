import Image from "next/image";

export default function SimpleProfile() {
  return (
    <div className="flex flex-col h-fit">
      <Image
        src="https://placehold.co/200x250.png"
        className="w-full h-5/6 border-2 rounded"
        alt="Profile image of member"
        width={200}
        height={250}
      />
      <p className="text-xs text-left">
        Firstname Lastname, MemberRole
      </p>
    </div>
  );
}
