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
    title: "Cravely",
    subtitle: "Full-Stack Real-Time Food Commerce Platform",
    accent: "#ff7a1a",
    what: "An enterprise-grade, hyper-local food delivery ecosystem engineered with four dedicated role-based portals: Customer Web App, Restaurant Owner Management Suite, Delivery Partner Live Portal, and Super Admin Command Center.",
    detail:
      "Features real-time bi-directional telemetry via Socket.io for live order workflows and GPS rider route tracking on Leaflet maps with Geoapify reverse-geocoding. Secured with Razorpay financial checkout, cryptographic HMAC-SHA256 signature verification, and a 6-digit OTP delivery completion handshake.",
    highlights: [
      "4 Role-Based Portals (Customer, Owner, Rider, Admin)",
      "Real-Time Telemetry (Socket.io live order & GPS rider sync)",
      "Razorpay & Strict Auth (HMAC verification, JWT & OTP auth)",
      "Hyperlocal Engine (Geoapify reverse-geocoding & Leaflet maps)",
    ],
    stack: "React, Node.js, Express, MongoDB, Socket.io, Redux Toolkit, Razorpay, Tailwind CSS, Leaflet Maps, Cloudinary, Geoapify",
    image: cravelyImg,
    live: "https://cravely-food-delivery-website.vercel.app/",
    code: "https://github.com/Ayush8292006/cravely-food-delivery",
  },
  {
    title: "Aivora AI",
    subtitle: "All-in-One AI Workspace for Code, Slides & Docs",
    accent: "#f59e0b",
    what: "An all-in-one AI platform that turns prompts into full-stack web applications, executive slide presentations, printable PDFs, and realistic images.",
    detail:
      "Features a smart multi-model backend combining DeepSeek (via OpenRouter) for complex full-stack coding, Groq for instant reasoning, and Gemini for multimodal vision. Includes in-browser code execution sandboxes, speech-to-text voice input, a credit wallet with Razorpay payments, and Redis session management.",
    highlights: [
      "Generates interactive web apps with live code execution",
      "Creates presentation decks and printable PDF documents",
      "DeepSeek & Groq multi-model AI routing via OpenRouter",
      "Speech-to-text voice input & Razorpay credit wallet",
    ],
    stack: "React, Node.js, Express, LangGraph, DeepSeek, OpenRouter, Groq, Gemini API, Redis, MongoDB, Tailwind CSS",
    image: aivoraImg,
    live: "https://aivora-ai-omega.vercel.app/",
    code: "https://github.com/Ayush8292006/Aivora-AI",
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
