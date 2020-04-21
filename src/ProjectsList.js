import SimpleIntervalIcon from "./Res/SimpleIntervalIcon.png";
import CrowdFlowIcon from "./Res/CrowdFlowIcon.jpg";
import PortfolioV1Icon from "./Res/ResumeV1Icon.PNG";
import PortfolioV2Icon from "./Res/ResumeV2Icon.PNG";
import HeavenlyAstrologyIcon from "./Res/HeavenlyAstrologyIcon.ico";
import AndroidStudioIcon from "./Res/AndroidStudioLogo.png";
import ReactIcon from "./Res/ReactIcon.png";
import GoogleCloudIcon from "./Res/googleCloudIcon.png";
import JavaIcon from "./Res/JavaLogo.png";
import mongodbIcon from "./Res/mongodbIcon.png";
import expressIcon from "./Res/expressIcon.png";
import nodeIcon from "./Res/nodeIcon.png";
export default [
  {
    key: "1",
    title: "Simple Interval",
    description:
      "An interval timer inspired by my friend's workout routine. My first project using Android Studio",
    repoLink: "https://github.com/mdrewry/IntervalTimer",
    optionalLink: "",
    projectIcon: SimpleIntervalIcon,
    techStack: [
      {
        key: "1",
        path: AndroidStudioIcon,
        name: "Android Studio",
      },
      {
        key: "2",
        path: JavaIcon,
        name: "Java",
      },
    ],
  },
  {
    key: "2",
    title: "Portfolio V1",
    description:
      "My first portfolio website. This project was a design learning experience and made me more comfortable creating frontend websites",
    repoLink: "https://github.com/mdrewry/Portfolio",
    optionalLink: "",
    projectIcon: PortfolioV1Icon,
    techStack: [
      {
        key: "1",
        path: ReactIcon,
        name: "React",
      },
    ],
  },
  {
    key: "3",
    title: "Portfolio V2",
    description:
      "A second attempt at creating a portfolio website with a different design in mind.",
    repoLink: "https://github.com/mdrewry/Portfolio-V2",
    optionalLink: "",
    projectIcon: PortfolioV2Icon,
    techStack: [
      {
        key: "1",
        path: ReactIcon,
        name: "React",
      },
    ],
  },
  {
    key: "4",
    title: "Crowd Flow",
    description:
      "Crowd Flow was a project made at Swamphacks VI, in 2019. It is a webapp developed using React, and Google Cloud services. The app was intended to be a tool used for event planning that would give organizers information on movement patterns, which would allow them to create a better experience. This is my first web project and was an amazing experience.",
    repoLink: "https://github.com/manthi4/SwampHack2020",
    optionalLink: "",
    projectIcon: CrowdFlowIcon,
    techStack: [
      {
        key: "1",
        path: ReactIcon,
        name: "React",
      },
      {
        key: "2",
        path: GoogleCloudIcon,
        name: "Google Cloud",
      },
    ],
  },
  {
    key: "5",
    title: "Heavenly Writing - UF Internship",
    description:
      "As part of my Software Engineering class, CEN3031 at UF, the University requested small buisness owners to offer internships in order to gain experience working on a full stack webapp. This webapp allows you to sign up to recieve a new horoscope via calendar or email every moon phase. This project gave me lots of experience using Github in group settings, and allowed me to work on the MERN stack",
    repoLink: "https://github.com/6XAM/MVP",
    optionalLink: "",
    projectIcon: HeavenlyAstrologyIcon,
    techStack: [
      {
        key: "1",
        path: mongodbIcon,
        name: "Mongo Databases",
      },
      {
        key: "2",
        path: expressIcon,
        name: "Express JS",
      },
      {
        key: "3",
        path: ReactIcon,
        name: "React",
      },
      {
        key: "4",
        path: nodeIcon,
        name: "Node JS",
      },
    ],
  },
];
