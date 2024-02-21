import {
  motion,
  LayoutGroup,
  useScroll,
  useMotionValueEvent,
  AnimatePresence,
} from "framer-motion";
import { useState } from "react";

export default function Milestones() {
  const { scrollY } = useScroll();
  const [activeMilestone, setActiveMilestone] = useState(0);
  const [progress, setProgress] = useState(0);

  useMotionValueEvent(scrollY, "change", (latest) => {
    console.log(latest);
    setProgress(((latest - 630) / 570) * 100);
    const milestones = [
      { limit: 1550, milestone: 1 },
      { limit: 2140, milestone: 2 },
      { limit: 2730, milestone: 3 },
      { limit: 3320, milestone: 4 },
      { limit: 3910, milestone: 5 },
      { limit: Infinity, milestone: 6 },
    ];

    const activeMilestone = milestones.find(
      (milestone) => latest <= milestone.limit
    )?.milestone;
    if (activeMilestone !== undefined) {
      setActiveMilestone(activeMilestone);
    }
  });

  return (
    <div className="h-600vh pt-10 pb-10 font-dm_sans bg-gradient-to-r from-sky-100 to-sky-200">
      <h1 className="m-auto flex flex-col pt-32 pb-32 font-roboto_mono font-bold w-fit text-3xl">
        From start to finish:
        <motion.div
          style={{ width: `${progress}%` }}
          className="h-2 bg-black w-0 max-w-full"
        ></motion.div>
      </h1>
      <div className="sticky top-1/4 w-screen h-96">
        <div className="flex flex-row  items-center h-96 justify-around w-full p-5">
          <LayoutGroup>
            <ul className={`space-y-2 text-1xl text-center`}>
              {milestoneIDs.map((i) => (
                <motion.li
                  layout
                  initial={{ fontSize: "1.5rem" }}
                  transition={{
                    duration: 0.5,
                  }}
                  animate={{
                    fontSize: activeMilestone === i ? "3rem" : "1.5rem",
                  }}
                  key={i}
                  className={`${
                    activeMilestone === i ? "text-sky-500" : "text-sky-black"
                  } ${activeMilestone === i ? "drop-shadow-sm" : ""}`}
                >{`Milestone ${i}`}</motion.li>
              ))}
            </ul>
          </LayoutGroup>
          <div className="w-7/12 h-full bg-white border-white border-2 shadow-sm rounded p-2">
            <AnimatePresence mode={"wait"}>
              {milestoneIDs
                .filter((i) => activeMilestone === i)
                .map((i) => (
                  <motion.div key={i} className="flex flex-col h-full">
                    <h1 className="text-3xl text-sky-500 font-bold mb-4">
                      {milestoneContent[i]["header"]}
                    </h1>
                    <p className="h-4/6">{milestoneContent[i]["content"]}</p>
                    <button className="text-neutral-500 hover:text-white font-bold hover:bg-sky-500 font-inter mt-4 m-auto shadow-md w-fit pl-2 pr-2 bg-sky-200 rounded">
                      READ THE DOC
                    </button>
                  </motion.div>
                ))}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}

interface MilestoneContent {
  [key: number]: {
    header: string;
    content: string;
  };
}

const milestoneIDs = [1, 2, 3, 4, 5, 6];
const milestoneContent: MilestoneContent = {
  1: {
    header: "Top Dataset Choices",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ultricies tincidunt venenatis. Pellentesque ac semper nulla. Pellentesque eleifend orci non dolor vestibulum, dignissim porttitor orci sollicitudin. Duis maximus sodales pharetra. Maecenas eget tincidunt mauris. Praesent ultrices ipsum sed velit blandit, vitae blandit nunc venenatis. Donec at ex ac purus pharetra placerat. Praesent vitae magna rhoncus, scelerisque risus vitae, consequat ipsum. In hendrerit odio a velit elementum, sed commodo augue mollis. Donec varius interdum ex non condimentum. Quisque quis nisi et mauris fermentum maximus id iaculis sapien.",
  },
  2: {
    header: "Project Charter",
    content:
      "Praesent ultricies tincidunt venenatis. Pellentesque ac semper nulla. Pellentesque eleifend orci non dolor vestibulum, dignissim porttitor orci sollicitudin. Duis maximus sodales pharetra. Maecenas eget tincidunt mauris. Praesent ultrices ipsum sed velit blandit, vitae blandit nunc venenatis. Donec at ex ac purus pharetra placerat. Praesent vitae magna rhoncus, scelerisque risus vitae, consequat ipsum. In hendrerit odio a velit elementum, sed commodo augue mollis. Donec varius interdum ex non condimentum. Quisque quis nisi et mauris fermentum maximus id iaculis sapien.",
  },
  3: {
    header: "Draft Research Questions",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ultricies tincidunt venenatis. Pellentesque ac semper nulla. Pellentesque eleifend orci non dolor vestibulum, dignissim porttitor orci sollicitudin. Duis maximus sodales pharetra. Maecenas eget tincidunt mauris. Praesent ultrices ipsum sed velit blandit, vitae blandit nunc venenatis. Donec at ex ac purus pharetra placerat. Praesent vitae magna rhoncus, scelerisque risus vitae, consequat ipsum. In hendrerit odio a velit elementum, sed commodo augue mollis. Donec varius interdum ex non condimentum. Quisque quis nisi et mauris fermentum maximus id iaculis sapien.",
  },
  4: {
    header: "Data Critique",
    content:
      "Pellentesque ac semper nulla. Pellentesque eleifend orci non dolor vestibulum, dignissim porttitor orci sollicitudin. Duis maximus sodales pharetra. Maecenas eget tincidunt mauris. Praesent ultrices ipsum sed velit blandit, vitae blandit nunc venenatis. Donec at ex ac purus pharetra placerat. Praesent vitae magna rhoncus, scelerisque risus vitae, consequat ipsum. In hendrerit odio a velit elementum, sed commodo augue mollis. Donec varius interdum ex non condimentum. Quisque quis nisi et mauris fermentum maximus id iaculis sapien.",
  },
  5: {
    header: "Annotated Bilbliography",
    content:
      "Pellentesque eleifend orci non dolor vestibulum, dignissim porttitor orci sollicitudin. Duis maximus sodales pharetra. Maecenas eget tincidunt mauris. Praesent ultrices ipsum sed velit blandit, vitae blandit nunc venenatis. Donec at ex ac purus pharetra placerat. Praesent vitae magna rhoncus, scelerisque risus vitae, consequat ipsum. In hendrerit odio a velit elementum, sed commodo augue mollis. Donec varius interdum ex non condimentum. Quisque quis nisi et mauris fermentum maximus id iaculis sapien.",
  },
  6: {
    header: "Sample Data Visualizations",
    content:
      "Duis maximus sodales pharetra. Maecenas eget tincidunt mauris. Praesent ultrices ipsum sed velit blandit, vitae blandit nunc venenatis. Donec at ex ac purus pharetra placerat. Praesent vitae magna rhoncus, scelerisque risus vitae, consequat ipsum. In hendrerit odio a velit elementum, sed commodo augue mollis. Donec varius interdum ex non condimentum. Quisque quis nisi et mauris fermentum maximus id iaculis sapien.",
  },
};
