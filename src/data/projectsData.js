import sortingSimulator from "../assets/projects/sortingSimulator.png";
import digitalPersona from "../assets/projects/digitalPersona.png";
import interactionTracker from "../assets/projects/interactionTracker.png";
import focusFlowTimer from "../assets/projects/focusFlowTimer.png";
import currencyConverter from "../assets/projects/currencyConverter.png";
import chessCraft from "../assets/projects/Chess.png";
import miniCrm from "../assets/projects/MiniCrm.png";
import urbanRoastCafe from "../assets/projects/UrbanRoastCafe.png";

export const projectsData = [
  {
    title: "ChessCraft",
    description: "A clean, modern web-based chess application built with React and TypeScript. The computer opponent runs a custom chess engine directly in your browser using a standard Minimax algorithm with Alpha-Beta pruning.",
    image: chessCraft,
    tags: ["TypeScript", "C++", "CSS", "CMake", "HTML", "JavaScript"],
    liveUrl: "https://vite-chess.vercel.app/",
    githubUrl: "https://github.com/Medhanshug99/chess-web",
    category: "frontend",
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
    title: "Urban Roast Café",
    description: "A full-stack (MERN) web application built for a boutique café. This project features a completely custom, recruiter-grade React frontend and a secure Node.js/Express backend.",
    image: urbanRoastCafe,
    tags: ["React", "Vite", "Node.js", "Express", "MongoDB", "Framer Motion"],
    liveUrl: "https://urban-roast-cafe-liart.vercel.app/",
    githubUrl: "https://github.com/Medhanshug99",
    category: "full-stack",
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
    title: "Simple Currency Converter",
    description: "A simple and intuitive currency converter that utilizes live exchange rates to provide accurate and up-to-date conversions across multiple global currencies.",
    image: currencyConverter,
    tags: ["React", "Tailwind CSS", "API Integration"],
    liveUrl: "https://simple-currency-converter-1.vercel.app/",
    githubUrl: "https://github.com/Medhanshug99/simple-currency-converter",
    category: "frontend",
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