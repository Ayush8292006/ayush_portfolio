// ============================================================
//  All portfolio content lives here — edit this file to update
//  text, links, projects or numbers. Components only render it.
// ============================================================
import deskPhoto from "./assets/ayush-desk.webp";
import cravelyImg from "./assets/cravely.webp";
import movieMindImg from "./assets/moviemind.webp";
import cinebookImg from "./assets/cinebook.webp";
import assistantImg from "./assets/assistant.webp";
import projectFlowImg from "./assets/projectflow.webp";

export const profile = {
  firstName: "Ayush",
  lastName: "Kumar",
  name: "Ayush Kumar",
  email: "aksrivastav0825@gmail.com",
  phone: "+91 80830 72553",
  location: "Greater Noida, India",
  deskPhoto,
  resume: "/resume.pdf",
  // cycles under the name with a decoding effect
  roles: ["MERN stack developer", "GenAI developer", "Building with LLMs and RAG", "Learning ML and deep learning", "Open to SDE and AI roles"],
  intro:
    "MERN stack and AI developer. I build web apps end to end with MongoDB, Express, React and Node.js — and put AI inside them with LangChain, RAG and Gemini.",
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
    accent: "#ff7a1a",
    what: "A food delivery platform with four separate apps in one: customers, restaurants, delivery partners and an admin.",
    detail: "Orders and rider locations update live over Socket.io. Payments run through Razorpay, and each hand-off is confirmed with a one-time code.",
    stack: "React, Node.js, MongoDB, Socket.io, Razorpay, Firebase",
    image: cravelyImg,
    live: "https://cravely-food-delivery-website.vercel.app/",
    code: "https://github.com/Ayush8292006/cravely-food-delivery",
  },
  {
    title: "MovieMind",
    accent: "#8b5cf6",
    what: "A movie recommender that answers questions by walking a knowledge graph instead of guessing.",
    detail: "1,000+ films and 10,000+ relationships in Neo4j, combined with Pinecone vector search and Gemini through LangChain.",
    stack: "React, Node.js, LangChain, Neo4j, Pinecone, Gemini",
    image: movieMindImg,
    live: "https://moviemind-xi.vercel.app/",
    code: "https://github.com/Ayush8292006/MovieMind---GraphRAG",
  },
  {
    title: "CineBook",
    accent: "#14b8a6",
    what: "Cinema ticket booking where two people can never buy the same seat.",
    detail: "Seats lock in real time while someone checks out. Stripe handles payment and Clerk handles sign-in.",
    stack: "React, Node.js, MongoDB, Stripe, Clerk",
    image: cinebookImg,
    live: "https://cinebook-omega.vercel.app/",
    code: "https://github.com/Ayush8292006/CineBook-TicketBooking",
  },
  {
    title: "AI Assistant",
    accent: "#3b82f6",
    what: "A voice assistant you can talk to in the browser.",
    detail: "Speech in and out with the Web Speech API, answers from Gemini, and a chat history that stays with your account.",
    stack: "React, Node.js, MongoDB, Gemini API, JWT",
    image: assistantImg,
    live: "https://virtual-chatbot-sandy.vercel.app/",
    code: "https://github.com/Ayush8292006/Virtual-Chatbot",
  },
  {
    title: "ProjectFlow",
    accent: "#a855f7",
    what: "A task board with drag-and-drop columns and a timeline view.",
    detail: "Tasks move between To do, In progress and Done, and the whole board is saved locally with Zustand.",
    stack: "React, TypeScript, Tailwind CSS, Zustand, Framer Motion",
    image: projectFlowImg,
    live: "https://kanban-timeline-website.vercel.app/",
    code: "https://github.com/Ayush8292006/kanban-timeline-website",
  },
];

export const experience = [
  {
    period: "Oct 2026 – now",
    role: "Front-end developer",
    org: "TechoraTech",
    note: "Full-time",
    points: [
      "Build React frontends for client products: online stores, a multi-vendor marketplace, education platforms and brand sites.",
      "Build admin, vendor and student dashboards and connect them to the backend team's Node.js APIs.",
      "Build mobile screens in React Native and animated prototypes that clients sign off on.",
    ],
  },
  {
    period: "Dec 2025 – Jan 2026",
    role: "Web development intern",
    org: "SkillCraft Technology",
    note: "Internship",
    points: [
      "Shipped three responsive React and Tailwind web apps built from reusable components.",
    ],
  },
];

// The GenAI scene walks through MovieMind's retrieval pipeline, step by step
export const aiDemo = {
  question: "Movies like Interstellar, but less sad?",
  answer:
    "Try The Martian and Arrival — the same hard sci-fi and space themes as Interstellar, with hopeful endings. Gravity is a shorter, tense pick.",
  steps: [
    { title: "Understand the question", text: "The question becomes an embedding: a list of numbers that captures what it means, not just the words used." },
    { title: "Find similar ideas", text: "Pinecone searches thousands of film embeddings and returns the ones closest in meaning." },
    { title: "Follow real relationships", text: "Neo4j walks the knowledge graph from those films — directors, genres, themes — to find connections a vector search misses." },
    { title: "Write a grounded answer", text: "Gemini answers using only what was retrieved, so every suggestion traces back to the graph." },
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
  ["React", "Node.js", "TypeScript", "MongoDB", "Socket.io", "Next.js", "Express"],
  ["LangChain", "RAG", "Neo4j", "Pinecone", "Gemini", "Machine learning", "Deep learning"],
];

export const toolkit = [
  { group: "Languages", items: "C++, JavaScript, TypeScript, Python" },
  { group: "Frontend", items: "React, Next.js, React Native, Tailwind CSS, HTML, CSS" },
  { group: "Backend & data", items: "Node.js, Express, REST APIs, Socket.io, JWT, OAuth, MongoDB, MySQL" },
  { group: "Generative AI", items: "LangChain, RAG, GraphRAG, Neo4j, Pinecone, Gemini API, prompt design" },
  { group: "ML & deep learning", items: "Learning now: supervised learning, neural networks, deep learning" },
  { group: "Shipping", items: "Git, Postman, Vercel, Render, Firebase, Cloudinary, Stripe, Razorpay" },
];

export const leetcode = {
  url: "https://leetcode.com/u/ayush825/",
  solved: "300+",
  easy: 107,
  medium: 163,
  hard: 23,
};

export const education = [
  { period: "2024 – 2028", school: "GL Bajaj Institute of Technology and Management", detail: "B.Tech, Computer Science (AI). Third year." },
  { period: "2023", school: "B.D. College, Patna", detail: "Class XII, Science. 81.2%" },
  { period: "2021", school: "S.R. Public School, Patna", detail: "Class X" },
];
