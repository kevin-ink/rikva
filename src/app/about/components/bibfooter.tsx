import { useEffect } from "react";
import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

const variants = {
  hidden: {
    y: 100,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
  },
};

export default function BibFooter() {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.25,
    triggerOnce: true,
  });
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);
  return (
    <motion.h1
      id="bib"
      variants={variants}
      initial={"hidden"}
      animate={controls}
      ref={ref}
      className="p-10 text-lg font-dm_sans row-start-3 row-end-4 border-2 rounded border-white col-start-1 col-end-4 bg-teal-200/50"
    >
      Looking for the annotated bibliography?
      <button className="hover:text-teal-600 pl-2">
        <u>click here!</u>
      </button>
    </motion.h1>
  );
}
