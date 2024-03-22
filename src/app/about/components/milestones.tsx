import {
  motion,
  LayoutGroup,
  useScroll,
  useMotionValueEvent,
  AnimatePresence,
} from "framer-motion";
import { useState } from "react";

export default function Milestones() {
  const { scrollYProgress } = useScroll();
  const [activeMilestone, setActiveMilestone] = useState(0);
  const [progress, setProgress] = useState(0);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const progress = ((latest - 0.14) / (0.24 - 0.14)) * 100;
    const clampedProgress = Math.min(Math.max(progress, 0), 100);
    setProgress(clampedProgress);
    const milestones = [
      { limit: 0.33, milestone: 1 },
      { limit: 0.66, milestone: 2 },
      { limit: Infinity, milestone: 3 },
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
        Project Layers:
        <motion.div
          style={{ width: `${progress}%` }}
          className="h-2 bg-black w-0 max-w-full"
        ></motion.div>
      </h1>
      <div className="sticky top-1/4 w-screen h-96">
        <div className="flex flex-row items-center h-96 justify-around w-full p-5">
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
                    fontSize: activeMilestone === i ? "4rem" : "2rem",
                  }}
                  key={i}
                  className={`${
                    activeMilestone === i ? "text-sky-500" : "text-sky-black"
                  } ${activeMilestone === i ? "drop-shadow-sm" : ""}`}
                >
                  {milestoneIDsToName[i - 1]}
                </motion.li>
              ))}
            </ul>
          </LayoutGroup>
          <div className="w-8/12 h-[28rem] bg-white border-white border-2 shadow-sm rounded p-2">
            <AnimatePresence mode={"wait"}>
              {milestoneIDs
                .filter((i) => activeMilestone === i)
                .map((i) => (
                  <motion.div key={i} className="flex flex-col h-full">
                    {/* <h1 className="text-3xl text-sky-500 font-bold mb-4">
                      {milestoneContent[i]["header"]}
                    </h1> */}
                    <p className="h-full whitespace-pre-wrap">
                      {milestoneContent[i]["content"]}
                    </p>
                    {/* <button className="text-neutral-500 hover:text-white font-bold hover:bg-sky-500 font-inter mt-4 m-auto shadow-md w-fit pl-2 pr-2 bg-sky-200 rounded">
                      READ THE DOC
                    </button> */}
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
    content: string;
  };
}

const milestoneIDs = [1, 2, 3];
const milestoneIDsToName = ["Sources", "Process", "Presentation"];
const milestoneContent: MilestoneContent = {
  1: {
    // Sources
    content:
      "   To start, we wanted to begin with materials of digital formats, such as online literature and datasets, that were specifically about or relating to our research question. This process required mediation and the development of metadata so that these materials would be computationally tractable. Our team’s starting point revolved around the Bureau of Transportation’s dataset titled “2018 Traffic Data for U.S. Airlines and Foreign Airlines U.S. Flights,” which included information on the total number of passengers for domestic and international flights, revenue passenger miles, and load factors. The issue with this data though was that it did not help us provide any insight into the humanistic questions that we had relating to the topic. The data provided seemed very business-oriented in that it felt like the comparative statistics given felt more useful to airline companies or the general public. As such, we used this air traffic dataset as a starting point into collecting more data from different sources that helped to contribute to the narrative that we wanted to discuss with our research questions. Our secondary datasets outside of our dataset included the 2018 census and the air pollution scores from the communities of Los Angeles from CalEnviroScreen (a division of the California government focused on environmental data and science), the “Complaints about Discrimination” section in annual air travel consumer reports from 2014 to 2018 from the Bureau of Transportation, and the air travel consumer reports from the U.S. Department of Transportation. We also implemented multiple scholarly journals and articles from a variety of credible new sources, which are displayed in our annotated bibliography. Together, the datasets and reports provided us with a strong background for our research regarding the environmental and societal challenges that airports and air traffics create in a comprehensive manner.",
  },
  2: {
    // Process
    content:
      "   These materials that we would find would then undergo processing, which includes data mining or statistical analysis, as a means of conducting analysis that relates to our research questions. Much of these computational methods and tools may be incomprehensible to the user, and having some understanding of these inner working processes would allow for critical engagement. Our primary dataset from the Bureau of Transportation consisted of 12 tables that had breakdowns in statistics by individual airlines and airports and comparative statistics from previous years highlighting changes and trends in air travel. The dataset provided was very clean given its business-oriented nature, though we did ultimately narrow our dataset down to 2 tables that contained the information we were looking for regarding the amount of enplaned passengers from the top 10 busiest airports and the amount of scheduled enplanements from the years 2016 to 2018. Additional data regarding the population of each of the metropolitan areas with the top 10 busiest airports was also added to the table with the amount of enplaned passengers from the top 10 busiest airports. Usage of Excel and the Pandas software library written for the Python programming language was integral in the processing of our data, and all data files were saved into separate CSV files. Visualizations were created using Tableau Public due to the software being a popular and accessible tool that allows you to publish interactive data visualizations to the web for free. Each visualization dealt with different quantitative and categorical variables that were visualized with the appropriate type of graph, map, or chart.",
  },
  3: {
    // Presentation
    content:
      "   Lastly, the presentation component would consist of us making use of online platforms to customize to display our findings and research. For this class, it was determined ahead of time that an online website would be created to display our work, and my group spent much time figuring out the format of this website in order to enhance the impact of our project and reinforce its argument through elements such as graphic effect, most notably relating to our data visualizations of choice. Our Web Specialist Kevin decided that it was most flexible to build the website from scratch using a front end stack consisting of React, NodeJS, and NextJS. That way, the website can be easily customized to best present the narrative. The repository for the code of the website was hosted on a public git repository, and the website was deployed through Vercel, a web-hosting solution. We decided to present the narrative in a minimalistic way which is reflected through our websites color scheme and design, and our visualizations were linked onto the website through Tableau’s API. All our visualizations were presented through Tableau’s interactive visualization software, viewable straight from the website. We tried our best to make sure the website is accessible and easy to navigate with frequent signals towards the user what kind of interactions are needed (such as a signal to scroll).",
  },
};
