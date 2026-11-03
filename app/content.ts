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
  email: "katherinekuang8@gmail.com",
  linkedin: "https://www.linkedin.com/in/katherine-kuang",
  resumePdf: "/KatherineKuang_resume.pdf",
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
    surface: "Responsive web",
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
    { label: "Studying", value: "MHCI · Carnegie Mellon University", href: "https://hcii.cmu.edu/academics/mhci" },
    { label: "Working", value: "UX Designer · Rajant Corporation" },
    { label: "Studied", value: "B.S. Innovation, Technology & Design · University of Miami", href: "https://itd.miami.edu/" },
    { label: "Interned", value: "UX Design Intern · General Motors" },
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

export const playground = {
  intro: "Other creative projects I’ve worked on 😊",
  // Hotlinked from the current site; alt text is based on the original file names.
  items: [
    { src: "https://images.squarespace-cdn.com/content/v1/6463d7e6cd09c91a8698b92c/1740719075023-XT3TJH1X12XU72L7FT3K/gif.gif", alt: "Animated piece", width: 426, height: 240 },
    { src: "https://images.squarespace-cdn.com/content/v1/6463d7e6cd09c91a8698b92c/1740719723122-K6JUBBAFVQJXCT3PJOEV/Lifeline+Prototype+2+Day.png?format=1500w", alt: "Lifeline prototype, day", width: 2100, height: 1500 },
    { src: "https://images.squarespace-cdn.com/content/v1/6463d7e6cd09c91a8698b92c/1740719717153-OLRPMREQBDE3J2MYOZO0/Lifeline+Prototype+Night.png?format=1500w", alt: "Lifeline prototype, night", width: 2100, height: 1500 },
    { src: "https://images.squarespace-cdn.com/content/v1/6463d7e6cd09c91a8698b92c/1740719826519-8X9UOKS32UP3S74017VC/postcarddark.jpg?format=1500w", alt: "Postcard", width: 2700, height: 1800 },
    { src: "https://images.squarespace-cdn.com/content/v1/6463d7e6cd09c91a8698b92c/1740719831138-4QGOQXBDE7IQ013I6N7V/finalpainting.jpg?format=1500w", alt: "Painting", width: 7200, height: 5400 },
    { src: "https://images.squarespace-cdn.com/content/v1/6463d7e6cd09c91a8698b92c/1740760961313-UKTX3H8RB7IQOFUXG4LV/tileillustrator%2B-%2BCopy.jpg?format=1500w", alt: "Tile illustration", width: 3757, height: 2500 },
    { src: "https://images.squarespace-cdn.com/content/v1/6463d7e6cd09c91a8698b92c/1740720033498-3E8ZVHQB45FY51BJY5ZE/DEST3568+-+Copy.jpg?format=1500w", alt: "Creative project", width: 5103, height: 3364 },
    { src: "https://images.squarespace-cdn.com/content/v1/6463d7e6cd09c91a8698b92c/1740720717054-GTUFYXZQNPX42D1VU51Z/still%2Blife%2B-%2BCopy.jpg?format=1500w", alt: "Still life", width: 2500, height: 1666 },
    { src: "https://images.squarespace-cdn.com/content/v1/6463d7e6cd09c91a8698b92c/1740761015811-N3MAMSA4IC4TSGEX90L8/space+station2+-+Copy.jpg?format=1500w", alt: "Space station", width: 5100, height: 3300 },
  ],
};

export const resume = {
  education: [
    { school: "Carnegie Mellon University", place: "Pittsburgh, PA", degree: "Master of Human-Computer Interaction", date: "August 2027" },
    { school: "University of Miami", place: "Coral Gables, FL", degree: "B.S. Innovation, Technology, & Design · Minor in Architecture", date: "May 2025" },
  ],
  experience: [
    {
      role: "UX Designer",
      org: "Rajant Corporation",
      date: "September 2025 – Present",
      place: "Malvern, PA",
      points: [
        "Optimized company-issued BreadCrumb device monitoring apps (mobile/web)",
        "Reduced access to key data from 5 clicks to 1 click with updated workflow",
        "Reduced device troubleshooting time by 20 minutes with improved data visibility",
      ],
    },
    {
      role: "UX Intern",
      org: "Rajant Corporation",
      date: "June 2025 – September 2025",
      place: "Malvern, PA",
      points: [
        "Designed operations management software, enabling customers to monitor and manage company-issued hardware (“BreadCrumbs”)",
        "Developed 5 interactive dashboards and 5 pages to drive adoption of new tools",
        "Gathered feedback from stakeholders across industries (mining, oil & gas)",
      ],
    },
    {
      role: "UX Design Intern",
      org: "General Motors",
      date: "May 2024 – August 2024",
      place: "Detroit, MI",
      points: [
        "Built a feature directing internal finance teams to a new product offering, boosting visibility and enabling easier access to company solutions",
        "Redesigned a webpage to surface upskilling resources and increase awareness",
        "Developed 6+ screens with HTML, JavaScript, and CSS to support adoption",
      ],
    },
  ],
  projects: [
    {
      role: "UX Researcher, Designer, & Developer",
      org: "Local Lens",
      date: "August 2024 – May 2025",
      place: "University of Miami",
      points: [
        "Identified a gap in resources for unwritten rules when traveling abroad",
        "Interviewed 25 experienced travelers across 18+ countries and 6 continents",
        "Developed a mobile app solution using n8n and Anthropic that was recognized as best department project",
      ],
    },
    {
      role: "UX Researcher & Designer",
      org: "Clarifai (Horizon AI Hackathon)",
      date: "February 2025",
      place: "University of Miami",
      points: [
        "Designed the MVP’s front-end interface, creating 7 high-fidelity screens and all interactive elements",
        "Collaborated across disciplines to develop an AI-driven platform, providing content creators with personalized insights",
        "Secured 2nd place in our track at an event with 70+ teams",
      ],
    },
    {
      role: "UX Researcher & Designer",
      org: "D.I.S.H",
      date: "August 2022 – December 2022",
      place: "University of Miami",
      points: [
        "Redesigned the feedback system for dining halls on campus",
        "Conducted in-depth research with 70+ students and the auxiliary department to ideate an innovative solution",
        "Pitched to judges and awarded “Best Presentation Style”",
      ],
    },
  ],
  skills: [
    "UI/UX Design", "Interaction Design", "Design Systems", "Product Strategy", "UX Research", "Wireframing",
    "AI Feature Development", "Market Analysis", "Community Engagement", "User-Centered Design", "Product Roadmapping",
    "User Story Writing", "Data-Driven Decision Making", "Cross-Functional Collaboration", "Storytelling",
    "Agile Workflows", "Public Speaking",
  ],
  tools: [
    "Figma", "FigJam", "Design Systems", "Adobe Creative Suite (XD, InDesign, Photoshop, Illustrator)",
    "Visual Studio Code", "AI & APIs", "Survey Tools (Google Forms, Qualtrics)", "Google Analytics", "Miro", "Jira", "Slack", "n8n",
  ],
  languages: ["HTML", "CSS", "JavaScript", "C#"],
};
