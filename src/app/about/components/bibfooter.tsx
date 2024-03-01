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
      className="p-10 text-lg font-dm_sans row-start-3 row-end-4 border-2 border-white col-start-1 drop-shadow-lg col-end-4 bg-sky-200"
    >
      Looking for the annotated bibliography?
      <button className="hover:text-teal-600 pl-2">
        <u>click here!</u>
      </button>
    </motion.h1>
  );
}
