import { useEffect } from "react";
import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

const variants = {
  hidden: {
    x: -100,
    opacity: 0,
  },
  visible: {
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
      id="faq"
      variants={variants}
      initial={"hidden"}
      animate={controls}
      ref={ref}
      className="row-start-1 border-2 border-white p-6 row-end-3 col-start-1 col-end-3 bg-sky-300 drop-shadow-md rounded-lg"
    >
      <h1 className="font-inter text-2xl text-center font-bold">FAQ</h1>
    </motion.div>
  );
}
