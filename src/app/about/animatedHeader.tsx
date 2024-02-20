import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function AnimatedHeader() {
  const phrase = ["Meet", "the", "Team."];
  const [isMounted, setIsMounted] = useState(false);

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.5,
        staggerChildren: 0.12,
        delayChildren: 1.04,
      },
    },
  };

  const randomChildVariants = () => ({
    hidden: {
      opacity: 0,
      x: -30,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 1 },
    },
  });

  return (
    <motion.div
      className="flex flex-col bg-gradient-to-b from-sky-200 to-white pt-32 pb-16 h-fit w-full items-center"
      variants={container}
      id="team"
      initial="hidden"
      animate="visible"
    >
      {phrase.map((word, index) => (
        <motion.h1
          className="text-9xl drop-shadow-lg bg-gradient-to-b bg-clip-text text-transparent from-blue-600 to-green-400"
          variants={randomChildVariants()}
          key={index}
        >
          {word}
        </motion.h1>
      ))}
    </motion.div>
  );
}
