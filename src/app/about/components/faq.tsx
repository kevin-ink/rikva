import { useEffect } from "react";
import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { getRandomValue } from "@/app/components/random";
import { motion } from "framer-motion";

const variants = {
  hidden: {
    y: getRandomValue(-100, 100),
    x: getRandomValue(-100, 100),
    opacity: 0,
  },
  visible: {
    y: 0,
    x: 0,
    opacity: 1,
  },
};

export default function FAQ() {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);
  return (
    <motion.div
      variants={variants}
      initial={"hidden"}
      animate={controls}
      ref={ref}
      className="row-start-1 p-6 row-end-3 bg-sky-300/50 shadow-md rounded-lg"
    >
      <h1 className="font-dm_sans text-3xl text-center font-bold">SOURCES</h1>
    </motion.div>
  );
}
