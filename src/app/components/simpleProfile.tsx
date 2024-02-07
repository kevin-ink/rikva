import Image from "next/image";

export default function SimpleProfile() {
  return (
    <div className="flex flex-col w-1/5 h-48">
      <Image
        src="https://placehold.co/200x300.png"
        className="w-full h-5/6 rounded"
        alt="Profile image of member"
        width={200}
        height={300}
      />
      <p className="h-auto w-full text-sm text-left">
        Firstname Lastname, MemberRole
      </p>
    </div>
  );
}
