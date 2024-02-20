"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";
import { useEffect } from "react";

type SimpleProfileProps = {
  name: string;
  role: string;
  pos: number;
};

const offset: number[] = [500, 250, 0, -250, -500];

const variants = (pos: number) => ({
  hidden: {
    opacity: 0,
    y: 0,
    x: offset[pos],
  },
  visible: {
    opacity: 1,
    y: pos === 2 ? [100, 0] : 0,
    x: 0,
    transition: {
      duration: 0.5,
      delay: pos === 2 ? 0 : 0.5,
    },
  },
});

export default function SimpleProfile({ name, role, pos }: SimpleProfileProps) {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 1,
    triggerOnce: true,
  });
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);
  return (
    <motion.div
      initial={"hidden"}
      animate={controls}
      ref={ref}
      key={name}
      variants={variants(pos)}
      className="flex flex-col justify-between w-fit h-fit"
    >
      <Image
        src="https://placehold.co/200x250.png"
        className="border-2 rounded shadow-sm"
        alt="Profile image of member"
        width={200}
        height={250}
      />
      <div className="flex flex-col">
        <span className="text-sm font-comfortaa text-left">{name}</span>
        <span className="text-xs font-roboto_mono text-right">{role}</span>
      </div>
    </motion.div>
  );
}
