import sortingSimulator from "../assets/projects/sortingSimulator.png";
import digitalPersona from "../assets/projects/digitalPersona.png";
import interactionTracker from "../assets/projects/interactionTracker.png";
import focusFlowTimer from "../assets/projects/focusFlowTimer.png";
import currencyConverter from "../assets/projects/currencyConverter.png";
import chessCraft from "../assets/projects/Chess.png";
import miniCrm from "../assets/projects/MiniCrm.png";
import urbanRoastCafe from "../assets/projects/UrbanRoastCafe.webp";
import docuparseAi from "../assets/projects/docuparseAi.webp";
import propPredict from "../assets/projects/propPredict.png";
import intellmeetCover from "../assets/projects/intellmeet.webp";
import redlineCover from "../assets/projects/redline.webp";

export const projectsData = [
  {
    title: "IntellMeet",
    description: "Real-time meeting collaboration platform built for a client, with live video, chat and presence, role-based access, and an AI pipeline that turns a 60-minute meeting into a summary, decisions and action items in under 2 minutes.",
    image: intellmeetCover,
    tags: ["Node.js", "TypeScript", "WebSockets", "Redis", "BullMQ", "Groq / Llama 3", "JWT"],
    liveUrl: "https://intellmeet-v2-nu.vercel.app",
    githubUrl: "https://github.com/Medhanshug99/intellmeet-v1",
    category: "full-stack",
    features: [
      "JWT auth with rotating refresh tokens, OTP login, 4-tier RBAC (Guest, Member, Host, Admin)",
      "Chat and presence latency under 100ms; video join under 3 seconds",
      "REST endpoints under 200ms p95",
      "60-minute meeting summarized in under 2 minutes; retry-with-backoff and graceful fallback on API failure"
    ],
    whatILearned: [
      "Integrating real-time WebRTC video with a Node.js/TypeScript backend",
      "Building low-latency AI pipelines with BullMQ, Redis and Groq",
      "Scaling WebSocket connections and implementing 4-tier RBAC"
    ]
  },
  {
    title: "REDLINE",
    subtitle: "AI Co-Driver for Driver Stress Detection",
    description: "Built in a 48-hour hackathon as ML and backend lead of a 2-person team: a Python pipeline that transcribes live audio with Whisper and cross-checks vocal-stress classification (wav2vec2) against transcript sentiment to detect driver state in real time.",
    image: redlineCover,
    tags: ["Python", "FastAPI", "HuggingFace", "Whisper", "wav2vec2", "React"],
    githubUrl: "https://github.com/Medhanshug99/redline-ai-codriver",
    category: "full-stack",
    features: [
      "Live audio transcription with OpenAI Whisper",
      "Vocal-stress classification via wav2vec2",
      "Cross-checking transcript sentiment against vocal stress for driver state detection",
      "FastAPI backend with React frontend for real-time display"
    ],
    whatILearned: [
      "Combining speech-to-text and audio classification in a real-time pipeline",
      "Working effectively in a 2-person team under 48-hour hackathon constraints",
      "Integrating HuggingFace models into a FastAPI service"
    ]
  },
  {
    title: "DocuParse AI",
    description: "DocuParse AI is a full-stack intelligent document processing platform. Users upload invoice images, and the system uses a fine-tuned LayoutLMv3 transformer model backed by EasyOCR to automatically extract structured fields. In testing on a set of 80 invoice images, the system achieved over 90% field extraction accuracy with zero manual re-entry required. Features include confidence scoring, a human-in-the-loop review interface, and export to JSON/Excel.",
    image: docuparseAi,
    tags: ["React", "Tailwind CSS", "Node.js", "PostgreSQL", "FastAPI", "PyTorch", "BullMQ"],
    liveUrl: "https://docuparse-ai.vercel.app/",
    githubUrl: "https://github.com/Medhanshug99/docuparse-ai",
    category: "full-stack",
    features: [
      "Automated invoice data extraction using LayoutLMv3 and EasyOCR",
      "Asynchronous background job queue with BullMQ and Redis",
      "Human-in-the-loop review interface with confidence scoring",
      "Export extracted data to JSON and Excel formats"
    ],
    whatILearned: [
      "Decoupling heavy ML workloads from web servers using a microservice architecture",
      "Managing asynchronous job queues using BullMQ and Redis",
      "Implementing strict type-safety with Zod across frontend and backend"
    ]
  },
  {
    title: "PropPredict - Real Estate Predictor",
    description: "A full-stack web application that predicts real estate prices and recommends properties based on user preferences. The Random Forest model trained on a cleaned dataset of 13,000+ property records achieves an R\u00b2 score of 0.87 on the test set. Features a modern dashboard, a custom machine learning pipeline, and smart property recommendations.",
    image: propPredict,
    tags: ["React", "TypeScript", "Tailwind CSS", "FastAPI", "Scikit-Learn", "PostgreSQL", "Docker"],
    liveUrl: "https://repropprice.vercel.app/",
    githubUrl: "https://github.com/Medhanshug99/Real-Estate-Price-Predictor",
    category: "full-stack",
    features: [
      "Instant ML-driven real estate price estimation",
      "Smart property recommendations based on budget and location",
      "Automated ML pipeline for data cleaning and model training",
      "Secure backend with JWT-based role management"
    ],
    whatILearned: [
      "Building and integrating a custom machine learning pipeline into a web application",
      "Containerizing full-stack applications with Docker and Docker Compose",
      "Developing a modular REST API using FastAPI and SQLAlchemy"
    ]
  },
  {
    title: "ChessCraft",
    description: "A clean, modern web-based chess application built with React and TypeScript. The computer opponent runs a custom chess engine directly in your browser using a standard Minimax algorithm with Alpha-Beta pruning. The engine searches to a depth of 4, reducing the search space by ~60% compared to naive Minimax.",
    image: chessCraft,
    tags: ["TypeScript", "C++", "CSS", "CMake", "HTML", "JavaScript"],
    liveUrl: "https://vite-chess.vercel.app/",
    githubUrl: "https://github.com/Medhanshug99/chess-web",
    category: "frontend",
    hidden: true,
    features: [
      "Custom browser-based chess engine",
      "Piece-Square Tables (PSTs) for positional evaluation",
      "Move Ordering (MVV-LVA)",
      "Quiescence Search"
    ],
    whatILearned: [
      "Implementing complex game logic and AI algorithms in TypeScript",
      "Optimizing search trees using Alpha-Beta pruning",
      "Preparing architecture for future WebAssembly (WASM) integration"
    ]
  },
  {
    title: "Urban Roast Café",
    description: "A full-stack (MERN) web application built for a boutique café. This project features a completely custom, recruiter-grade React frontend and a secure Node.js/Express backend.",
    image: urbanRoastCafe,
    tags: ["React", "Vite", "Node.js", "Express", "MongoDB", "Framer Motion"],
    liveUrl: "https://urban-roast-cafe-liart.vercel.app/",
    githubUrl: "https://github.com/Medhanshug99/urban-roast-cafe",
    category: "full-stack",
    hidden: true,
    features: [
      "Modern, editorial, mobile-first responsive design",
      "Dynamic Menu fetched from MongoDB with instant client-side category filtering",
      "Working Contact Form that saves messages and emails the admin",
      "Secure Admin Panel with JWT authentication",
      "Menu Manager to toggle item availability"
    ],
    whatILearned: [
      "Building a custom React frontend without generic UI frameworks",
      "Integrating Framer Motion for custom animations",
      "Setting up Nodemailer for backend email functionality"
    ]
  },
  {
    title: "Mini CRM",
    description: "A lightweight, modern Client Relationship Management (CRM) system built to handle lead generation and tracking. Includes a public lead form, admin dashboard, lead tracking capabilities, dark mode support, and high-level analytics.",
    image: miniCrm,
    tags: ["React", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "JWT"],
    liveUrl: "https://mini-crm-mern-theta.vercel.app/",
    githubUrl: "https://github.com/Medhanshug99/FUTURE_FS_02",
    category: "full-stack",
    hidden: true,
    features: [
      "Public lead generation form",
      "Secure admin dashboard with JWT authentication",
      "Lead tracking with status updates and internal notes",
      "Analytics dashboard for tracking conversion metrics"
    ],
    whatILearned: [
      "Building a full-stack MERN application",
      "Implementing secure authentication using JWT and bcrypt",
      "Designing responsive interfaces with dark mode support"
    ]
  },
  {
    title: "Digital Persona Simulator",
    description: "An interactive digital persona simulator allowing users to engage with customizable simulated personalities. Focuses on conversational UI and dynamic state management.",
    image: digitalPersona,
    tags: ["React", "Tailwind CSS", "Context API"],
    liveUrl: "https://digital-persona-simulator-01.vercel.app/",
    githubUrl: "https://github.com/Medhanshug99/digital-persona-simulator",
    category: "frontend",
    hidden: true,
    features: [
      "Dynamic persona interaction",
      "Customizable personality traits",
      "Responsive conversational UI",
      "Real-time feedback and state tracking"
    ],
    whatILearned: [
      "Building complex conversational interfaces",
      "Managing dynamic state across different persona contexts",
      "Designing responsive and accessible UI components"
    ]
  },
  {
    title: "User Interaction Tracker",
    description: "A comprehensive tool to track and visualize user interactions across applications to analyze behavior and improve UX.",
    image: interactionTracker,
    tags: ["React", "JavaScript", "Tailwind CSS"],
    liveUrl: "https://user-interaction-tracker-1.vercel.app/",
    githubUrl: "https://github.com/Medhanshug99/user-interaction-tracker",
    category: "frontend",
    hidden: true,
    features: [
      "Real-time interaction tracking",
      "Event logging and categorization",
      "Data visualization of user journeys",
      "Clean dashboard interface for metrics"
    ],
    whatILearned: [
      "Handling and debouncing DOM events efficiently",
      "Data aggregation and visualization techniques",
      "Building analytical dashboards"
    ]
  },
  {
    title: "Focus Flow Timer",
    description: "A productivity timer application designed to help users maintain deep focus and manage work sessions using structured intervals like the Pomodoro technique.",
    image: focusFlowTimer,
    tags: ["React", "Tailwind CSS", "LocalStorage"],
    liveUrl: "https://focusflow-timer-09.vercel.app/",
    githubUrl: "https://github.com/Medhanshug99/focusflow-timer",
    category: "frontend",
    hidden: true,
    features: [
      "Customizable focus and break intervals",
      "Audio notifications for session transitions",
      "Task tracking integration",
      "Progress and session history"
    ],
    whatILearned: [
      "Managing accurate intervals and timers in React",
      "Handling audio playback and notifications",
      "Persisting user preferences and history with LocalStorage"
    ]
  },
  {
    title: "Sort Simulator",
    description: "Sort Simulator is a web application that helps users understand different sorting algorithms by visualizing their execution. It supports multiple sorting algorithms including Bubble Sort, Selection Sort, Insertion Sort, Merge Sort, and Quick Sort. Users can customize array size, generation speed, and view step-by-step visualizations along with performance metrics.",
    image: sortingSimulator,
    tags: [
      "React",
      "TypeScript",
      "Tailwind CSS",
    ],
    liveUrl: "https://sort-matrix-opal.vercel.app/",
    githubUrl: "https://github.com/Medhanshug99/sort-simulator",
    category: "frontend",
    hidden: true,
    features: [
      "Algorithm visualization techniques",
      "Customizable array size and sorting speed",
      "Step-by-step execution view",
      "Performance metrics and comparison"
    ],
    whatILearned: [
      "Managing complex React state for visualizations",
      "Deep understanding of sorting algorithms (Bubble, Merge, Quick, etc.)",
      "Optimizing rendering performance during fast animations"
    ]
  },
  {
    title: "Simple Currency Converter",
    description: "A simple and intuitive currency converter that utilizes live exchange rates to provide accurate and up-to-date conversions across multiple global currencies.",
    image: currencyConverter,
    tags: ["React", "Tailwind CSS", "API Integration"],
    liveUrl: "https://simple-currency-converter-1.vercel.app/",
    githubUrl: "https://github.com/Medhanshug99/simple-currency-converter",
    category: "frontend",
    hidden: true,
    features: [
      "Live exchange rate fetching",
      "Support for multiple global currencies",
      "Instant conversion calculation",
      "Responsive and minimal design"
    ],
    whatILearned: [
      "Integrating and handling third-party REST APIs",
      "Safely managing floating-point math for currencies",
      "Debouncing user inputs for API efficiency"
    ]
  }
];