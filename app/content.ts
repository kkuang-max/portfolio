/**
 * All portfolio copy lives here so it can be edited without touching layout.
 * Copy is taken from katherinekuang.com.
 *
 * Images are hotlinked from the current Squarespace site. To self-host,
 * drop the files in /public (e.g. /public/work/dish.png) and point
 * `image` at "/work/dish.png".
 */

export type Surface = "kiosk" | "car" | "pin" | "web";

export type Project = {
  num: string;
  title: string;
  surface: string;
  short: string;
  icon: Surface;
  summary: string;
  /** Role and context, e.g. "UX Research & Design · ITD Design Challenge". */
  meta: string;
  href: string;
  image: string;
};

export const site = {
  name: "Katherine Kuang",
  role: "UX designer",
  intro:
    "I’m a UX designer who bridges physical and digital interaction — from kiosks you walk up to, to the apps you carry — and I stay with a problem until the solution feels effortless.",
  email: "kxk813@miami.edu",
  linkedin: "https://www.linkedin.com/in/katherine-kuang",
  resume: "https://www.katherinekuang.com/s/Resume-Katherine-Kuang.pdf",
  playground: "https://www.katherinekuang.com/playground",
  photo: "https://images.squarespace-cdn.com/content/v1/6463d7e6cd09c91a8698b92c/9de57da0-13c1-4e38-83f6-e93c1a0f8546/20230416_140057_A7BE56.JPEG?format=1000w",
};

export const projects: Project[] = [
  {
    num: "01",
    title: "D.I.S.H",
    surface: "Kiosk",
    short: "dining-hall feedback kiosk",
    icon: "kiosk",
    meta: "UX Research & Design · ITD Design Challenge",
    summary:
      "Implementing a kiosk-based feedback system for dining halls to increase feedback submissions and resolution efficiency.",
    href: "https://www.katherinekuang.com/dish",
    image: "https://images.squarespace-cdn.com/content/v1/6463d7e6cd09c91a8698b92c/647ea5b6-f4c2-44b9-8f47-04b7929db075/Kiosk+mockup3.png?format=1000w",
  },
  {
    num: "02",
    title: "General Motors Digital Marketplace",
    surface: "Website",
    short: "internal finance marketplace",
    icon: "car",
    meta: "UX Design & Front-End Development · Internship",
    summary:
      "Enhancing visibility and access to products/services on GM’s internal finance community website, driving user engagement.",
    href: "https://www.katherinekuang.com/general-motors-internship",
    image: "https://images.squarespace-cdn.com/content/v1/6463d7e6cd09c91a8698b92c/0bed2384-4272-4bc9-b989-b0d1a4eab887/coverrrr.png?format=1000w",
  },
  {
    num: "03",
    title: "Local Lens",
    surface: "Mobile app",
    short: "travel app for unwritten rules abroad",
    icon: "pin",
    meta: "UX Research, UX/UI Design, App Development · ITD Capstone Project",
    summary:
      "Providing travelers with clear, concise, and practical insights to navigate unwritten rules for trips abroad.",
    href: "https://www.katherinekuang.com/local-lens",
    image: "https://images.squarespace-cdn.com/content/v1/6463d7e6cd09c91a8698b92c/d0170ca4-a36a-4bbf-853f-9d3c52c13f6f/BigPic2.png?format=1000w",
  },
  {
    num: "04",
    title: "EchoKids Redesign",
    surface: "Mobile & desktop web",
    short: "membership journey redesign",
    icon: "web",
    meta: "UX/UI Design · Internship",
    summary:
      "Redesigning the EchoKids mobile and desktop website to improve the user journey from business discovery to purchasing a membership.",
    href: "https://www.katherinekuang.com/echokids-inc",
    image: "https://images.squarespace-cdn.com/content/v1/6463d7e6cd09c91a8698b92c/967e5969-d1dc-46a6-aed9-d594bbde8a07/cover3.png?format=1000w",
  },
];

export const about = {
  paragraphs: [
    "Hi, I’m Katherine — a UX designer from San Jose, California, constantly innovating or enjoying a swim in the ocean.",
    "Thriving in ambiguity and rapid change, I recently graduated from the Innovation, Technology, and Design program at the University of Miami, where I explored the intersection of human-centered design, disruptive innovation, and emerging technology. I’m now continuing my education in the MHCI program at Carnegie Mellon University, deepening my practice in human-centered design and technology.",
    "With a passion for problem-solving, a keen eye for detail, and a love for intuitive design, I strive to create seamless, meaningful experiences that bring ease and joy to people’s digital lives.",
  ],
  facts: [
    { label: "Now", value: "MHCI · Carnegie Mellon University", href: "https://hcii.cmu.edu/academics/mhci" },
    { label: "Studied", value: "Innovation, Technology & Design · University of Miami", href: "https://itd.miami.edu/" },
    { label: "Interned", value: "General Motors — Digital Marketplace" },
    { label: "Interned", value: "EchoKids — website redesign" },
  ],
  offScreen: [
    "Ramen enthusiast — always on the hunt for the best bowl",
    "Ocean swimmer & VP of Club Swim @ UMiami",
    "Scuba certified — exploring the depths multiple times a year",
    "Hiking addict — always up for an adventure",
    "Dog lover — proud human to Ramen & Zeus",
    "Former architecture student with a love for design in all forms",
  ],
};

// Process steps — edit to describe your own process. to describe your own process.
export const process = [
  {
    num: "01",
    title: "Make it my problem",
    body: "Get close to the people and the place — interviews, observation, and time spent where the problem actually happens.",
  },
  {
    num: "02",
    title: "Frame what matters",
    body: "Turn research into a sharp problem statement and a few principles the team can use to say yes or no.",
  },
  {
    num: "03",
    title: "Sketch, build, test",
    body: "Move quickly from paper to prototype — physical or digital — and put it in front of people early and often.",
  },
  {
    num: "04",
    title: "Refine until effortless",
    body: "Iterate on the details until the interaction disappears and only the outcome is left.",
  },
];
