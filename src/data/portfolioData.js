import profileImage from "../assets/harsh-profile.jpg";
import resumeFile from "../assets/HarshBajpai-MERN.pdf";
import boardifyImage from "../assets/Notedify.jpeg";
import snapNewsImage from "../assets/SnapNews.png";
import diracImage from "../assets/Dirac.jpeg";
import scanicImage from "../assets/Scanic.jpeg";

export const profile = {
  name: "Harsh Bajpai",
  role: "Backend-Focused Full Stack Engineer",
  subtitle:
    "Building scalable APIs and production-ready web applications with secure architecture, modular backend services, and clean product execution.",
  heroStatement:
    "I design secure backend systems and modern web experiences with performance-first engineering and production reliability.",
  image: profileImage,
  resume: resumeFile,
  email: "harsh.bajpai72@protonmail.com",
  location: "Kanpur, India",
  links: {
    github: "https://github.com/its-harsh72",
    linkedin: "https://www.linkedin.com/in/harshbajpai72",
    hackerrank: "https://www.hackerrank.com/certificates/847ed35112b8",
  },
};

export const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "expertise", label: "Expertise" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

export const aboutText = [
  "Backend-focused MERN Stack Engineer with 3+ years of experience building scalable APIs, authentication systems, SaaS platforms, and production-ready applications using Node.js, Express.js, MongoDB, TypeScript, PostgreSQL, Docker, and Next.js.",
  "Experienced in designing secure backend architectures, REST APIs, RBAC systems, database optimization, modular backend services, and deployment workflows while also delivering responsive frontend experiences with React and Next.js.",
];

export const backendExpertise = [
  {
    title: "Authentication & Authorization",
    description:
      "JWT-based auth, role-driven access control, and secure middleware chains for protected workflows.",
  },
  {
    title: "REST API Architecture",
    description:
      "Modular service layers, consistent API contracts, and validation-first backend design for maintainability.",
  },
  {
    title: "Database Design",
    description:
      "Schema modeling, indexing strategies, aggregation pipelines, and query optimization for high-throughput systems.",
  },
  {
    title: "Scalable Backend Systems",
    description:
      "Production-grade service structure with reusable modules, clean boundaries, and scaling-ready architecture.",
  },
  {
    title: "Dockerized Deployments",
    description:
      "Containerized apps with reproducible environments and efficient deployment workflows across services.",
  },
  {
    title: "Performance Optimization",
    description:
      "Latency reduction, payload optimization, and backend bottleneck analysis for improved runtime performance.",
  },
  {
    title: "Error Handling & Logging",
    description:
      "Centralized error flows, structured response patterns, and robust logging for production observability.",
  },
];

export const skillGroups = [
  {
    name: "Backend",
    skills: [
      "Node.js",
      "Express.js",
      "TypeScript",
      "REST APIs",
      "JWT",
      "RBAC",
      "Middleware Architecture",
      "Prisma ORM",
      "MongoDB",
      "PostgreSQL",
      "Redis",
      "BullMQ",
      "Docker",
    ],
  },
  {
    name: "Frontend",
    skills: ["React.js", "Next.js", "Tailwind CSS", "Redux Toolkit", "Zustand"],
  },
  {
    name: "DevOps & Tools",
    skills: ["Docker", "GitHub", "GitLab", "Postman", "CI/CD", "Vercel", "Render"],
  },
];

export const projects = [
  {
    title: "Boardify",
    type: "SaaS Kanban Platform",
    image: boardifyImage,
    description:
      "Designed and developed a scalable full-stack Kanban management platform using Node.js, Express.js, MongoDB, React, and TypeScript.",
    highlights: [
      "Implemented JWT authentication, role-based authorization, protected routes, and backend validation middleware for secure access control.",
      "Built optimized REST APIs with modular architecture and reusable service layers.",
      "Designed MongoDB schemas and aggregation pipelines for activity tracking, task movement history, and efficient board management.",
      "Integrated drag-and-drop task workflows with persistent backend synchronization.",
      "Deployed production environments using Vercel, Render, and MongoDB Atlas.",
    ],
    stack: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "React",
      "TypeScript",
      "JWT",
      "REST APIs",
      "Docker",
    ],
    github: "https://github.com/its-harsh72",
    live: "https://its-harsh72.github.io/harsh-bajpai/",
  },
  {
    title: "SnapNews",
    type: "Real-Time News Platform",
    image: snapNewsImage,
    description:
      "News delivery platform with category and region-specific feeds, optimized for responsive data-heavy consumption.",
    highlights: [
      "Built client-friendly fetch workflows for external API integrations.",
      "Focused on clean data rendering and responsive content layouts.",
    ],
    stack: ["React.js", "JavaScript", "API Integration", "Responsive UI"],
    github: "https://github.com/its-harsh72",
    live: "https://its-harsh72.github.io/harsh-bajpai/",
  },
  {
    title: "Dirac",
    type: "Voice Automation Assistant",
    image: diracImage,
    description:
      "Python voice assistant built for automated desktop interactions and task execution via command recognition.",
    highlights: [
      "Implemented speech recognition-based control flow.",
      "Automated local tasks with time-aware reminders and app actions.",
    ],
    stack: ["Python", "SpeechRecognition", "Automation", "Desktop APIs"],
    github: "https://github.com/its-harsh72",
    live: "https://its-harsh72.github.io/harsh-bajpai/",
  },
  {
    title: "Scanic",
    type: "QR Workflow Tool",
    image: scanicImage,
    description:
      "QR generation utility for encoding structured information into secure, quick-access workflows.",
    highlights: [
      "Built streamlined encoding flow for dynamic content.",
      "Focused on simple UX and high-speed scan compatibility.",
    ],
    stack: ["JavaScript", "HTML", "CSS", "QR Encoding"],
    github: "https://github.com/its-harsh72",
    live: "https://its-harsh72.github.io/harsh-bajpai/",
  },
];

export const experience = [
  {
    role: "Software Development Engineer — MERN Stack",
    company: "Shri Genesis Software Solutions",
    period: "Jan 2026 - Present",
    responsibilities: [
      "Worked on Success AI, a large-scale B2B campaign automation platform focused on LinkedIn and email outreach systems.",
      "Developed scalable backend services using Node.js, Express.js, MongoDB, Redis, and TypeScript.",
      "Built and optimized asynchronous campaign execution workflows using cron jobs, background workers, and queue-based processing.",
      "Implemented Stripe subscription billing, add-ons, webhook handling, disputes, failed payment recovery, and automated billing workflows.",
      "Designed audience targeting, scheduling systems, and automation pipelines for high-volume outreach campaigns.",
      "Improved backend reliability using modular architecture, validation middleware, structured error handling, and reusable service layers.",
      "Integrated multiple third-party APIs and optimized backend performance for scalable production environments.",
      "Contributed to frontend integration and bug fixing using React.js and TypeScript.",
      "Worked in Agile/Scrum workflows collaborating closely with backend, frontend, QA, and product teams.",
    ],
    tech: [
      "Node.js",
      "Express.js",
      "TypeScript",
      "MongoDB",
      "Redis",
      "Stripe",
      "React.js",
      "Queue Processing",
      "Cron Jobs",
      "REST APIs",
      "Docker",
      "JWT",
      "Webhooks",
    ],
  },
  {
    role: "SDE-1",
    company: "AvikaLabs",
    period: "Apr 2025 - Jan 2026",
    responsibilities: [
      "Developing scalable backend services and REST APIs using Node.js, Express.js, and TypeScript.",
      "Implementing JWT authentication, RBAC, middleware architecture, and secure API workflows.",
      "Working with PostgreSQL, Prisma ORM, and MongoDB for optimized data management.",
      "Improving backend performance, modular architecture, and deployment workflows.",
      "Containerizing applications using Docker.",
      "Collaborating in Agile teams across frontend, backend, and QA.",
    ],
    tech: [
      "Node.js",
      "Express.js",
      "TypeScript",
      "PostgreSQL",
      "MongoDB",
      "Prisma",
      "Docker",
      "JWT",
      "REST APIs",
      "Next.js",
    ],
  },
  {
    role: "Product Engineer",
    company: "Amoga Software Pvt Ltd",
    period: "Jun 2023 - Apr 2025",
    responsibilities: [
      "Built integrations and backend workflows across enterprise platforms.",
      "Developed automation systems using Python and Node.js.",
      "Integrated third-party APIs and optimized application workflows.",
      "Improved maintainability using reusable modular architecture.",
      "Worked with frontend and backend teams to deliver scalable features.",
    ],
    tech: [
      "Node.js",
      "Python",
      "React.js",
      "MongoDB",
      "REST APIs",
      "Postman",
      "JavaScript",
    ],
  },
];

export const currentlyExploring = [
  "Redis Caching",
  "Microservices",
  "Queue Systems",
  "System Design",
  "Scalable Architectures",
];
