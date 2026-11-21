// ============================================================
//  All portfolio content lives here — edit this file to update
//  text, links, projects or numbers. Components only render it.
// ============================================================
import deskPhoto from "./assets/ayush-desk.webp";
import aivoraImg from "./assets/aivora.png";
import cravelyImg from "./assets/cravely.webp";
import movieMindImg from "./assets/moviemind.webp";
import cinebookImg from "./assets/cinebook.webp";
import assistantImg from "./assets/assistant.webp";
import projectFlowImg from "./assets/projectflow.webp";

export const profile = {
  firstName: "Ayush",
  lastName: "Kumar",
  name: "Ayush Kumar",
  designation: "Software Developer · Full Stack · GenAI & ML",
  email: "aksrivastav0825@gmail.com",
  phone: "+91 80830 72553",
  location: "Greater Noida, India",
  deskPhoto,
  resume: "/resume.pdf",
  // cycles under the name with a decoding effect
  roles: [
    "Software Developer",
    "Full Stack Developer",
    "GenAI & ML Enthusiast",
    "Front-End Developer @ TechoraTech",
    "Open to SDE & AI Roles",
  ],
  intro:
    "3rd-year B.Tech CSE (AI) student and full-time Front-End Developer at TechoraTech. I build end-to-end web apps with React, Next.js and Node.js — and engineer AI systems with LangChain, GraphRAG and Gemini.",
  highlights: [
    { value: "TechoraTech", label: "Full-Time Front-End Dev" },
    { value: "300+ DSA", label: "Solved in C++ on LeetCode" },
    { value: "5+ Live Apps", label: "Full-Stack & GenAI Systems" },
    { value: "B.Tech CSE (AI)", label: "GL Bajaj · 2024–2028" },
  ],
};

// Lit word by word while the hero scrolls (About Me narrative)
export const statement =
  "I'm a third-year B.Tech Computer Science (AI) student who already ships production code for clients. By day I build responsive React and React Native frontends full-time at TechoraTech. Beyond work I engineer real-time full-stack platforms, a GraphRAG movie recommendation engine, and study Machine Learning and Deep Learning.";

export const links = [
  { label: "GitHub", href: "https://github.com/Ayush8292006" },
  { label: "LinkedIn", href: "https://linkedin.com/in/ayush-kumar-35499a32b" },
  { label: "LeetCode", href: "https://leetcode.com/u/ayush825/" },
];

export const projects = [
  {
    title: "Aivora AI",
    subtitle: "Autonomous Multi-Model SaaS Workspace",
    accent: "#10b981",
    what: "An autonomous multi-model AI platform unifying full-stack web app generation with live code sandboxes, executive slide decks, publication-ready PDFs, and cinematic visuals.",
    detail:
      "Architected a distributed microservices gateway with an adaptive LangGraph agent graph, Redis-backed session token accounting, Groq/Gemini routing, dynamic credit wallet, and speech-to-text.",
    highlights: [
      "Adaptive LangGraph multi-agent orchestration",
      "Live Monaco code sandbox with interactive runner",
      "Token & credit accounting with Razorpay integration",
      "Speech-to-text voice input & dynamic CORS gateway",
    ],
    stack: "React, Node.js, Express, LangGraph, MongoDB, Redis, Groq, Gemini API, Tailwind CSS",
    image: aivoraImg,
    live: "https://aivora-ai-omega.vercel.app/",
    code: "https://github.com/Ayush8292006/Aivora-AI",
  },
  {
    title: "Cravely",
    subtitle: "Multi-Role Food Delivery Platform",
    accent: "#ff7a1a",
    what: "A full-stack food delivery platform with four role-based dashboards: Customer, Restaurant Owner, Delivery Partner and Admin.",
    detail:
      "Orders and rider locations update live over Socket.io and React Leaflet with Geoapify geocoding. Payments run through Razorpay with Google OAuth and OTP-based delivery verification.",
    highlights: [
      "4 role-based dashboards",
      "Real-time order & live rider tracking",
      "Razorpay payments & Google OAuth",
      "OTP delivery verification & Firebase",
    ],
    stack: "React, Node.js, Express, MongoDB, Socket.io, Razorpay, Firebase, Cloudinary, Geoapify",
    image: cravelyImg,
    live: "https://cravely-food-delivery-website.vercel.app/",
    code: "https://github.com/Ayush8292006/cravely-food-delivery",
  },
  {
    title: "MovieMind",
    subtitle: "GraphRAG Recommendation Engine",
    accent: "#8b5cf6",
    what: "A movie recommendation engine that answers questions by walking a Neo4j knowledge graph combined with Pinecone vector search.",
    detail:
      "Built entity extraction, graph construction and hybrid retrieval (graph traversal + semantic search) over 1,000+ movies and 10,000+ relationships, orchestrated with LangChain and Gemini.",
    highlights: [
      "GraphRAG pipeline with LangChain",
      "Neo4j knowledge graph + Pinecone",
      "Hybrid graph & semantic retrieval",
      "1,000+ movies & 10,000+ relationships",
    ],
    stack: "React, Node.js, LangChain, Neo4j, Pinecone, Gemini API",
    image: movieMindImg,
    live: "https://moviemind-xi.vercel.app/",
    code: "https://github.com/Ayush8292006/MovieMind---GraphRAG",
  },
  {
    title: "CineBook",
    subtitle: "Movie Ticket Booking Platform",
    accent: "#14b8a6",
    what: "A cinema ticket booking platform where two people can never double-book the same seat under simultaneous requests.",
    detail:
      "Engineered real-time seat locking and concurrency control during checkout, paired with Stripe payment processing and Clerk authentication (Google OAuth) across protected routes.",
    highlights: [
      "Real-time seat locking",
      "Concurrency control (no double booking)",
      "Stripe checkout integration",
      "Clerk auth & protected routes",
    ],
    stack: "React, Node.js, MongoDB, Stripe, Clerk",
    image: cinebookImg,
    live: "https://cinebook-omega.vercel.app/",
    code: "https://github.com/Ayush8292006/CineBook-TicketBooking",
  },
  {
    title: "AI Assistant",
    subtitle: "Voice-Enabled Chatbot",
    accent: "#3b82f6",
    what: "A voice-first AI virtual assistant you can talk to directly in the browser.",
    detail:
      "Built with the Web Speech API for speech recognition and synthesis and Google Gemini for conversational intelligence, secured with JWT auth and persistent per-user chat history in MongoDB.",
    highlights: [
      "Voice-first Web Speech API interface",
      "Google Gemini LLM integration",
      "JWT authentication & protected routes",
      "Persistent MongoDB chat history",
    ],
    stack: "React, Node.js, MongoDB, Gemini API, Web Speech API, JWT",
    image: assistantImg,
    live: "https://virtual-chatbot-sandy.vercel.app/",
    code: "https://github.com/Ayush8292006/Virtual-Chatbot",
  },
  {
    title: "ProjectFlow",
    subtitle: "Kanban & Timeline Workspace",
    accent: "#a855f7",
    what: "A task board with drag-and-drop columns and a timeline view.",
    detail:
      "Tasks move smoothly between To do, In progress and Done, and the whole board is saved locally with Zustand and animated with Framer Motion.",
    highlights: [
      "Drag-and-drop Kanban columns",
      "Interactive timeline schedule view",
      "Persistent local state via Zustand",
      "Smooth Framer Motion transitions",
    ],
    stack: "React, TypeScript, Tailwind CSS, Zustand, Framer Motion",
    image: projectFlowImg,
    live: "https://kanban-timeline-website.vercel.app/",
    code: "https://github.com/Ayush8292006/kanban-timeline-website",
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
  { group: "Generative AI", items: ["LangGraph", "LangChain", "Multi-Agent Systems", "RAG", "GraphRAG", "Gemini API", "Groq"] },
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
