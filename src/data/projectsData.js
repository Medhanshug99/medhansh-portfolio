import sortingSimulator from "../assets/projects/sortingSimulator.png";
import digitalPersona from "../assets/projects/digitalPersona.png";
import interactionTracker from "../assets/projects/interactionTracker.png";
import focusFlowTimer from "../assets/projects/focusFlowTimer.png";
import currencyConverter from "../assets/projects/currencyConverter.png";

export const projectsData = [
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