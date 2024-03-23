import { useEffect } from "react";
import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import Image from "next/image";
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

export default function FooterPic() {
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
    <motion.div
      id="bib"
      variants={variants}
      initial={"hidden"}
      animate={controls}
      ref={ref}
      className="p-10 text-lg font-dm_sans row-start-3 row-end-4 border-2 border-white col-start-1 drop-shadow-lg col-end-4 bg-sky-200"
    >
      <Image
        src="/airport.jpg"
        alt="picture of an airport"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
      />
    </motion.div>
  );
}
