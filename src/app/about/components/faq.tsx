import { useEffect, useState } from "react";
import { useAnimation, AnimatePresence, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

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
  const [expanded, setExpanded] = useState<false | number>(false);
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
      className="row-start-1 border-2 border-white p-6 row-end-3 col-start-1 col-end-3 bg-sky-200 drop-shadow-md"
    >
      <h1 className="font-comfortaa text-2xl text-center text-sky-700 font-bold">
        FAQ
      </h1>
      {accordionIds.map((i) => (
        <Accordion
          i={i}
          key={i}
          expanded={expanded}
          setExpanded={setExpanded}
        />
      ))}
    </motion.div>
  );
}

type AccordionProps = {
  i: number;
  expanded: false | number;
  setExpanded: React.Dispatch<React.SetStateAction<false | number>>;
};

const Accordion = ({ i, expanded, setExpanded }: AccordionProps) => {
  const isOpen = i === expanded;
  return (
    <>
      <motion.div
        className="h-fit p-2 my-4 bg-white rounded shadow"
        initial={false}
        onClick={() => setExpanded(isOpen ? false : i)}
      >
        {accordionIdsToFAQ[i].Q}
      </motion.div>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.section
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: "auto" },
              collapsed: { opacity: 0, height: 0 },
            }}
            transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
          >
            {accordionIdsToFAQ[i].A}
          </motion.section>
        )}
      </AnimatePresence>
    </>
  );
};

const accordionIds = [0, 1, 2];
const accordionIdsToFAQ: FAQContent = {
  0: {
    Q: "Where are the member bios and individual contributions?",
    A: (
      <p>
        You can find the member bios and their contributions&nbsp;
        <a href="/about/bios" className="font-bold underline text-sky-500">
          here
        </a>
        .
      </p>
    ),
  },
  1: {
    Q: "Where is the annotated bibliography?",
    A: (
      <p>
        You can find the annotated bilbiography&nbsp;
        <a href="/about/bib" className="font-bold underline text-sky-500">
          here
        </a>
        .
      </p>
    ),
  },
  2: {
    Q: "Where is the works cited?",
    A: (
      <p>
        You can find the works cited page in the same page as the annotated
        bibiliography,&nbsp;
        <a href="/about/bib" className="font-bold underline text-sky-500">
          here
        </a>
        .
      </p>
    ),
  },
};

interface FAQContent {
  [key: number]: {
    Q: string;
    A: React.ReactNode;
  };
}
