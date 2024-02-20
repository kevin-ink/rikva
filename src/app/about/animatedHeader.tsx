"use client";
import { motion } from "framer-motion";
import { getRandomValue } from "../components/random";

export default function AnimatedHeader() {
  const phrase = ["Meet", "the", "Team."];

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
      x: getRandomValue(-30, 30),
      y: getRandomValue(-30, 30),
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration: 1 },
    },
  });

  return (
    <motion.div
      className="flex flex-col bg-gradient-to-b from-sky-200 to-white pt-32 pb-32 h-fit w-full items-center"
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {phrase.map((word, index) => (
        <motion.span
          className="text-9xl drop-shadow-lg bg-gradient-to-b bg-clip-text text-transparent from-blue-600 to-green-400"
          variants={randomChildVariants()}
          key={index}
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
}
