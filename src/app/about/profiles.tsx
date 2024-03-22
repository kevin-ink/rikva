export const profiles = [
  {
    name: "Kevin Li",
    role: "Web Specialist",
    bio: "Kevin is currently a fourth year Computer Science major at the University of California, Los Angeles. His interests lie within web development and game development, and hopes to pursue a career in either field. In his freetime, he enjoys playing badminton, working out, and playing video games with his friends. He loves doing escape rooms, and hopes that he will one day be able to travel the world. Feel free to reach him at kevsl912@g.ucla.edu",
    contribution:
      "As the web specialist, Kevin oversaw the design and structure of the website. He ensured that the website would be up to date with the narrative, and that all visualizations and tools work properly.",
  },
  {
    name: "Isabel Valencia",
    role: "Project Manager",
    bio: "Isabel is currently a third year Cognitive Science major and Digital Humanities Minor at the University of California, Los Angeles. Her keen interests lie within the intersection of design and technology and hopes to pursue a career in UI/UX upon graduation. In her freetime, she thoroughly enjoys any tennis variation, including badminton, pickleball and ping pong. She is also a barista at Upside Down in Westwood, Los Angeles and is an avid hot chocolate connoisseur. Feel free to reach her at isabelvalencia@g.ucla.edu.",
    contribution:
      "As the project manager, Isable paid close attention to the schedule and milestones and alerted the team to possible roadblocks or time crunches. She ensured that communication among team members was efficient and harmonious, kept track of all project documentation, and arranged note taking at meetings.",
  },
  {
    name: "Rahul Verma",
    role: "Content Specialist",
    bio: "Rahul is currently a fourth year Math/Economics major at the University of California, Los Angeles. His keen interests lie within the fields of finance, economics, technology, and renewable energy tech. He hopes to pursue a career in one of the following fields upon graduation. In his freetime, he writes and edits business newsletters, plays tennis, works out, and watches cool shows and videos with his friends. Feel free to reach him at rahulver176@gmail.com.",
    contribution:
      "As the content specialist, Rahul oversaw the authoring of the site’s main narrative and ensured that the data visualizations and maps integrated neatly with the written content. He also wrote section headers and captions and oversaw the creation of the “About” page.",
  },
  {
    name: "Alan Wong",
    role: "Data/Mapping Specialist",
    bio: "Alan is currently a fourth year Statistics and Data Science major at the University of California, Los Angeles. His keen interests lie within the verstatilty that data has in solving modern-day issues and hopes to pursue a career relating to data science upon graduation. In his freetime, he enjoys cafe hopping, listening to music, and going on walks. He loves visiting new places and hopes to one day be able to travel for a living. Feel free to reach him at alanwong11@g.ucla.edu. ",
    contribution:
      "As the data and mapping specialist, Alan oversaw the cleaning, refining, and augmenting of the group’s dataset and ensured that the data is standardized, usable, and well-formatted. He also oversaw the project’s maps, geolocaated data, and fine-tuned the map display.",
  },
  {
    name: "Victoria Wu",
    role: "Visualization Specialist",
    bio: "Victoria is a fourth-year student majoring in economics and statistics & data science at UCLA. Her interests include watching standup comedies and discovering nice food and restaurants. She is currently trying to explore boxing. She likes dogs, especially Samoyed. Feel free to contact her at vicwmw00@g.ucla.edu. ",
    contribution:
      "As the data visualization specialist, Victoria oversaw the project’s data visualization and ensured that the data was in the right format. She learned how to use the appropriate tools regarding making data visualizations and fine-tuned them and added them to the website.",
  },
];

export interface Profile {
  name: string;
  role: string;
  bio: string;
  contribution: string;
}
