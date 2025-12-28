import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.png";

export const HERO_CONTENT = `I am a passionate full-stack developer with a strong focus on building scalable and high-performing web applications. Proficient in both front-end and back-end technologies, I strive to create seamless user experiences and innovative digital solutions.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full-stack developer with hands-on experience in building scalable, responsive, and user-friendly web applications. Proficient in both the MERN stack (MongoDB, Express.js, React, Node.js) and PHP backend development, I bring strong problem-solving skills and a deep understanding of modern web technologies. I am a quick learner who adapts seamlessly to new tools and frameworks, always eager to explore and master emerging technologies. My journey in web development began with curiosity and has evolved into a passion for continuous growth, innovation, and collaboration. I thrive in team environments and enjoy transforming ideas into impactful digital solutions.`;

export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "Senior Full Stack Developer",
    company: "Google Inc.",
    description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
  },
  {
    year: "2022 - 2023",
    role: "Frontend Developer",
    company: "Adobe",
    description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["HTML", "CSS", "Vue.js", "mySQL"],
  },
  {
    year: "2021 - 2022",
    role: "Full Stack Developer",
    company: "Facebook",
    description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
    technologies: ["Python", "Svelte", "Three.js", "Postgres"],
  },
  {
    year: "2020 - 2021",
    role: "Software Engineer",
    company: "Paypal",
    description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
    technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
  },
];

export const PROJECTS = [
  {
    title: "SmartSupport",
    image: project3,
    description:
      "Developing a scalable customer support system using microservices architecture with secure authentication, role-based access control, and real-time communication features.",
    technologies: ["React.js", "Spring Boot", "Hibernate", "JWT", "MySQL"],
    liveLink: "https://smartsupport.netlify.app/", // add live link when deployed
    githubLink: "https://github.com/tushar0945/smartsupport-backend.git", // update if repo is public
  },
  {
    title: "BreezeBnB",
    image: project1,
    description:
      "Developed a full-stack Airbnb-like web application using the MERN stack with user authentication, property listings, and an admin panel for managing listings and users.",
    technologies: ["React.js", "Bootstrap", "Express.js", "Node.js", "MongoDB"],
    liveLink: "https://breezebnb-r4nk.onrender.com",
    githubLink: "https://github.com/tushar0945/BreezeBnB", // GitHub repo link
  },
  {
    title: "Personal Portfolio",
    image: project2,
    description:
      "Developed a fully responsive portfolio website using React.js and Tailwind CSS to showcase skills, projects, and experience with a modern UI/UX.",
    technologies: ["React.js", "Tailwind CSS", "JavaScript", "Vite"],
    liveLink: "https://tushar-patil-portfolio.netlify.app",
    githubLink: "https://github.com/tushar0945/",
  },
];

export const CONTACT = {
  address: "Pune, Maharastra, India",
  phoneNo: "+91 8999197992",
  email: "tp909580@gmail.com",
};
