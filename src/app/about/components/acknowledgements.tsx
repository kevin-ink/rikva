import { useEffect } from "react";
import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

const variants = {
  hidden: {
    x: 100,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
  },
};

export default function Acknowledgements() {
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
      className="bg-sky-400 row-start-1 p-6 border-2 border-white drop-shadow-lg row-end-3 col-start-3 col-end-4 rounded-lg"
    >
      <h1 className="font-inter text-2xl text-black text-center font-bold">
        Acknowledgements
      </h1>
    </motion.div>
  );
}
