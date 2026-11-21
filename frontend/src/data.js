// ============================================================
//  All portfolio content lives here — edit this file to update
//  text, links, projects or numbers. Components only render it.
// ============================================================
import deskPhoto from "./assets/ayush-desk.webp";
import aivoraImg from "./assets/aivora.jpg";
import cravelyImg from "./assets/cravely.webp";
import movieMindImg from "./assets/moviemind.webp";
import cinebookImg from "./assets/cinebook.webp";

export const profile = {
  firstName: "Ayush",
  lastName: "Kumar",
  name: "Ayush Kumar",
  designation: "Software Developer · MERN Stack · GenAI & ML",
  email: "aksrivastav0825@gmail.com",
  phone: "+91 80830 72553",
  location: "Greater Noida, India",
  deskPhoto,
  resume: "/resume.pdf",
  // cycles under the name with a decoding effect
  roles: [
    "Software Developer",
    "MERN Stack Developer",
    "Full Stack Engineer",
    "Front-End Developer @ TechoraTech",
    "GenAI & ML Enthusiast",
    "Open to SDE & AI Roles",
  ],
  intro:
    "3rd-year B.Tech CSE (AI) student and full-time Front-End Developer at TechoraTech. I build scalable web apps with the MERN stack (MongoDB, Express, React, Node.js) and Next.js — and engineer AI systems with LangGraph, LangChain and Gemini.",
  highlights: [
    { value: "TechoraTech", label: "Full-Time Front-End Dev" },
    { value: "300+ DSA", label: "Solved in C++ on LeetCode" },
    { value: "4+ Live Apps", label: "MERN Stack & GenAI Systems" },
    { value: "B.Tech CSE (AI)", label: "GL Bajaj · 2024–2028" },
  ],
};

// Lit word by word while the hero scrolls
export const statement =
  "I'm a third-year computer science student who already ships for clients. By day I build React frontends and dashboards at TechoraTech. By night I build my own real-time apps, payment flows and a movie recommender that reasons over a knowledge graph.";

export const links = [
  { label: "GitHub", href: "https://github.com/Ayush8292006" },
  { label: "LinkedIn", href: "https://linkedin.com/in/ayush-kumar-35499a32b" },
  { label: "LeetCode", href: "https://leetcode.com/u/ayush825/" },
];

export const projects = [
  {
    title: "Cravely",
    subtitle: "Food Delivery Platform with Live Tracking",
    accent: "#ff7a1a",
    what: "A full-stack food delivery platform with separate role-based portals for customers, restaurant owners, delivery riders, and an admin.",
    detail:
      "Engineered live order workflows and GPS rider tracking using Socket.io and Leaflet maps with Geoapify. Integrated online checkout via Razorpay and a 6-digit OTP verification system for secure order handoffs.",
    highlights: [
      "4 Role-based portals (Customer, Owner, Rider, Admin)",
      "Live order updates & GPS rider tracking via Socket.io",
      "Razorpay payments & 6-digit OTP delivery verification",
      "Interactive location maps & address geocoding",
    ],
    stack: "React.js, Node.js, Express, MongoDB, Socket.io, Redux Toolkit, Razorpay, Tailwind CSS",
    image: cravelyImg,
    live: "https://cravely-food-delivery-website.vercel.app/",
    code: "https://github.com/Ayush8292006/cravely-food-delivery",
  },
  {
    title: "Aivora AI",
    subtitle: "Multi-Model AI Workspace for Apps & Docs",
    accent: "#f59e0b",
    what: "An all-in-one AI platform that turns natural language prompts into full-stack web applications, slide presentations, printable PDFs, and images.",
    detail:
      "Routes tasks across specialized AI models: DeepSeek (via OpenRouter) for full-stack coding, Groq for instant chat, and Gemini for vision. Includes an interactive in-browser code runner, voice input, and user credit wallets with Razorpay.",
    highlights: [
      "Generates full-stack web apps with live in-browser execution",
      "Creates presentation decks and printable PDF documents",
      "Multi-model routing across DeepSeek, Groq & Gemini",
      "Speech-to-text voice input & Razorpay credit wallet",
    ],
    stack: "React.js, Node.js, Express, LangGraph, DeepSeek, OpenRouter, Groq, Gemini API, Redis, MongoDB",
    image: aivoraImg,
    live: "https://aivora-ai-omega.vercel.app/",
    code: "https://github.com/Ayush8292006/Aivora-AI",
  },
  {
    title: "CineBook",
    subtitle: "Movie Ticket Booking & Seat Locking",
    accent: "#14b8a6",
    what: "A cinema ticket booking platform designed to prevent simultaneous double-booking of seats during high-traffic checkouts.",
    detail:
      "Features real-time seat locking with temporary checkout holds, secure Stripe payment processing, and Google sign-in via Clerk across protected routes.",
    highlights: [
      "Real-time seat locking to prevent double booking",
      "Interactive theater hall layout & seat selection",
      "Stripe payment processing & automated booking confirmation",
      "Clerk auth with Google sign-in & protected routes",
    ],
    stack: "React.js, Node.js, Express, MongoDB, Stripe, Clerk, Tailwind CSS",
    image: cinebookImg,
    live: "https://cinebook-omega.vercel.app/",
    code: "https://github.com/Ayush8292006/CineBook-TicketBooking",
  },
  {
    title: "MovieMind",
    subtitle: "Knowledge Graph Movie Recommender",
    accent: "#8b5cf6",
    what: "An intelligent movie recommendation app that connects related films, directors, and genres beyond simple keyword searches.",
    detail:
      "Combines a Neo4j knowledge graph with Pinecone vector similarity search, using Gemini to generate clear, grounded explanations for each recommendation.",
    highlights: [
      "Hybrid search: Knowledge graph traversal + semantic vectors",
      "Neo4j graph database modeling 10,000+ film relationships",
      "Pinecone vector search for natural language prompts",
      "Grounded recommendations explained by Gemini LLM",
    ],
    stack: "React.js, Node.js, LangChain, Neo4j, Pinecone, Gemini API, Tailwind CSS",
    image: movieMindImg,
    live: "https://moviemind-xi.vercel.app/",
    code: "https://github.com/Ayush8292006/MovieMind---GraphRAG",
  },
];

export const experience = [
  {
    period: "Oct 2026 – Present",
    role: "Front-End Developer",
    org: "TechoraTech",
    note: "Full-time",
    tags: ["React.js", "React Native", "Node.js", "Express REST APIs", "Role-Based Dashboards"],
    points: [
      "Build responsive, production-grade React.js frontends for multiple client products across e-commerce, multi-vendor marketplace, education and brand websites.",
      "Develop role-based dashboards (admin, vendor, school/student) and integrate them with Node.js and Express REST APIs alongside the backend team.",
      "Build cross-platform mobile UI in React Native and deliver animated, high-fidelity prototypes from client requirements.",
    ],
  },
  {
    period: "Dec 2025 – Jan 2026",
    role: "Web Development Intern",
    org: "SkillCraft Technology",
    note: "Internship",
    tags: ["React.js", "Tailwind CSS", "Reusable Components", "Git"],
    points: [
      "Developed and shipped 3+ responsive, interactive web applications using React.js and Tailwind CSS, built from reusable React components.",
      "Improved UX through animations, responsive layouts and cross-browser testing; managed work through Git version control.",
    ],
  },
];

// The GenAI scene walks through MovieMind's retrieval pipeline, step by step
export const aiDemo = {
  question: "Movies like Interstellar, but less sad?",
  answer:
    "Try The Martian and Arrival — the same hard sci-fi and space themes as Interstellar, with hopeful endings. Gravity is a shorter, tense pick.",
  steps: [
    {
      title: "Understand the question",
      text: "The question becomes an embedding: a list of numbers that captures what it means, not just the words used.",
    },
    {
      title: "Find similar ideas",
      text: "Pinecone searches thousands of film embeddings and returns the ones closest in meaning.",
    },
    {
      title: "Follow real relationships",
      text: "Neo4j walks the knowledge graph from those films — directors, genres, themes — to find connections a vector search misses.",
    },
    {
      title: "Write a grounded answer",
      text: "Gemini answers using only what was retrieved, so every suggestion traces back to the graph.",
    },
  ],
};

// What I'm learning now — edit this list as you go
export const mlLearning = {
  goal: "I'm learning machine learning and deep learning so I can go from calling models to training, evaluating and shipping my own.",
  topics: [
    "Supervised learning: regression and classification",
    "Neural networks, loss functions and backpropagation",
    "Deep learning for images and sequences",
    "Evaluating models and avoiding overfitting",
  ],
};

// Two big lines that slide in opposite directions while scrolling
export const toolLines = [
  ["React.js", "Node.js", "TypeScript", "MongoDB", "Socket.io", "Next.js", "Express.js", "C++"],
  ["LangGraph", "LangChain", "GraphRAG", "Neo4j", "Pinecone", "Gemini API", "Redis", "Groq"],
];

export const toolkit = [
  { group: "Languages", items: ["C++", "JavaScript", "TypeScript", "Python"] },
  { group: "Frontend", items: ["React.js", "Next.js", "React Native", "HTML5", "CSS3", "Tailwind CSS"] },
  { group: "Backend", items: ["Node.js", "Express.js", "REST APIs", "Socket.io", "Redis", "JWT", "OAuth 2.0"] },
  { group: "Databases", items: ["MongoDB", "Redis (Upstash)", "MySQL", "Neo4j (Graph)", "Pinecone (Vector)"] },
  { group: "Generative AI", items: ["LangGraph", "LangChain", "DeepSeek", "OpenRouter", "Multi-Agent Systems", "RAG", "GraphRAG", "Gemini API", "Groq"] },
  {
    group: "ML / Deep Learning",
    badge: "Currently learning",
    items: ["Machine Learning fundamentals", "Neural Networks", "Deep Learning"],
  },
  { group: "Core CS", items: ["Data Structures & Algorithms", "OOP", "DBMS", "Operating Systems", "Computer Networks"] },
  {
    group: "Tools & Cloud",
    items: ["Git", "GitHub", "Postman", "Vercel", "Render", "Firebase", "Cloudinary", "Stripe", "Razorpay", "Clerk"],
  },
];

export const leetcode = {
  url: "https://leetcode.com/u/ayush825/",
  solved: "300+",
  easy: 107,
  medium: 163,
  hard: 23,
  achievements: [
    "Solved 300+ data structures & algorithms problems in C++ on LeetCode across dynamic programming, graphs, trees, heaps and greedy paradigms.",
    "Architected and deployed 5+ live full-stack and GenAI applications on Vercel and cloud platforms.",
  ],
};

export const education = [
  {
    period: "2024 – 2028",
    school: "GL Bajaj Institute of Technology and Management, Greater Noida",
    detail: "B.Tech in Computer Science and Engineering (AI) · 3rd Year (Expected 2028)",
  },
  {
    period: "2023",
    school: "B.D. College, Patna",
    detail: "Class XII, Science (PCM) · 81.2%",
  },
  {
    period: "2021",
    school: "S.R. Public School, Patna",
    detail: "Class X",
  },
];
