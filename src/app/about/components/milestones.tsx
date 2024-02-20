import {
  motion,
  LayoutGroup,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { useState } from "react";

const calculateProgress = (currentScroll: number) => {
  const start = 959;
  const end = 4000;
  const progress = (currentScroll - start) / (end - start);
  return Math.min(Math.max(progress, 0), 1);
};

export default function Milestones() {
  const { scrollY } = useScroll();
  const [activeMilestone, setActiveMilestone] = useState(0);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest >= 959 && latest < 1400) {
      setActiveMilestone(0);
    } else if (latest >= 1400 && latest <= 2000) {
      setActiveMilestone(1);
    } else {
      setActiveMilestone(2);
    }
  });

  return (
    <div className="h-500vh pt-10 pb-10 font-dm_sans">
      <div className="sticky top-1/4 w-screen h-fit">
        <div className="flex flex-row justify-around w-full pl-5 pr-5">
          <LayoutGroup>
            <ul className={`space-y-2 pt-16 text-1xl text-center`}>
              {milestoneIDs.map((i, index) => (
                <motion.li
                  layout
                  initial={{ fontSize: "1rem" }}
                  animate={{
                    fontSize: activeMilestone === index ? "3rem" : "1.5rem",
                  }}
                  key={i}
                >{`Milestone ${i}`}</motion.li>
              ))}
            </ul>
          </LayoutGroup>
          <div className="w-6/12 h-fit border-2 border-black">
            <h1>Placeholder Header</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

const milestoneIDs = [1, 2, 3, 4, 5, 6];
