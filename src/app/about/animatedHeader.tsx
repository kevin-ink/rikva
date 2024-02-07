"use client";
import { motion } from "framer-motion";
import { mdiTransferDown } from "@mdi/js";
import Icon from '@mdi/react';

const getRandomValue = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

export default function AnimatedHeader() {
  const phrase = ["Meet", "the", "Team"];

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: 1,
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

  const arrowVariants = {
    hidden : {
      y: '-20%',
      opacity: 0,
    },
    visible : {
      y: '0%',
      opacity: 1,
      originY: 0,
      transition: {
        duration: 1,
        delay: 2,
      }
    }
  }

  return (
    <motion.div
      className="flex flex-col mt-32 mb-32 h-fit w-full items-center"
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {phrase.map((word, index) => (
        <motion.span
          className="text-9xl bg-gradient-to-b bg-clip-text text-transparent from-blue-600 to-green-400"
          variants={randomChildVariants()}
          key={index}
        >
          {word}
        </motion.span>
      ))}
      <motion.div initial="hidden" animate="visible" variants={arrowVariants}>
          <Icon path={mdiTransferDown} className="mt-32 w-screen mb-32 " size={10} />
      </motion.div>
    </motion.div>
  );
}

// export default function AnimatedHeader() {
//   const phrase = ["Meet", "the", "Team"];
//   const variants = {
//     hidden: { opacity: 0 },
//     visible: (i = 1) => ({
//       opacity: 1,
//       transition: { staggerChildren: 0.12, delayChildren: 0.04 * i },
//     }),
//   };
//   const childVariants = {
//     hidden: {
//       opacity: 0,
//       y: 20,
//       transition: {
//         type: "spring",
//         damping: 12,
//         stiffness: 100,
//       },
//     },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         type: "spring",
//         damping: 12,
//         stiffness: 100,
//       },
//     },
//   };
//   return (
//     <motion.div
//       className="w-full text-9xl bg-gradient-to-r pt-20 bg-clip-text flex-col flex text-transparent from-blue-600 to-green-400 h-auto"
//       initial="hidden"
//       animate="visible"
//       variants={variants}
//     >
//       {phrase.map((word, index) => (
//         <motion.span variants={childVariants} key={index}>
//           {word}
//         </motion.span>
//       ))}
//     </motion.div>
//   );
// }
