import { AnimatePresence } from "framer-motion";
import Image from "next/image";
import { motion } from "framer-motion";
import images from "../../images";

type FullProfileProps = {
  name: string;
  bio: string;
  contribution: string;
  isCon: boolean;
};

export default function FullProfile({
  name,
  bio,
  contribution,
  isCon,
}: FullProfileProps) {
  const variants = {
    hidden: {
      opacity: 0,
      y: 10,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  };
  return (
    <div className="flex flex-row w-1/2 h-fit">
      <Image
        src={images[name.split(" ")[0]]}
        className="border-2 rounded shadow-sm"
        alt="Profile image of member"
        width={200}
        height={250}
        style={{ objectFit: "cover", width: "200px", height: "250px" }}
      />
      <div className="flex flex-col m-1 w-3/4">
        <p className="text-xl font-comfortaa">{name}</p>
        <AnimatePresence mode="popLayout">
          {isCon ? (
            <motion.p
              key="contribution"
              initial="hidden"
              animate="visible"
              variants={variants}
              exit={{
                opacity: 0,
              }}
              className="text-md font-inter"
            >
              {contribution}
            </motion.p>
          ) : (
            <motion.p
              key="bio"
              initial="hidden"
              animate="visible"
              variants={variants}
              exit={{
                opacity: 0,
              }}
              className="text-md font-inter"
            >
              {bio}
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
