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
      className="bg-sky-300 row-start-1 p-6 border-2 border-white drop-shadow-lg row-end-3 col-start-3 col-end-4"
    >
      <h1 className="font-comfortaa text-3xl text-sky-700 text-center font-bold">
        Acknowledgements
      </h1>
      <p className="text-xl text-black">
        We would like to thank all the team members who put together this DH
        project to the best of our abilities. We would also like to express our
        gratitude towards Dr. Ryan Horne and T.A. Nick Schwieterman for helping
        us with multiple challenges we have encountered during the process.
      </p>
    </motion.div>
  );
}
