import { motion } from "framer-motion";

export default function AnimatedHeader() {
  const phrase = ["Meet", "the", "Team."];

  const container = {
    hidden: {},
    visible: {
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
      className="flex flex-col bg-flight-pattern bg-center bg-fixed bg-cover pt-32 pb-16 h-fit w-full items-center"
      variants={container}
      id="team"
      initial="hidden"
      animate="visible"
    >
      {phrase.map((word, index) => (
        <motion.h1
          className="text-9xl drop-shadow-xl text-sky-600"
          variants={randomChildVariants()}
          key={index}
        >
          {word}
        </motion.h1>
      ))}
    </motion.div>
  );
}
