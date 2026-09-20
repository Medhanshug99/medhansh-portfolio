import { SiAmazon } from "react-icons/si";
import { FaAward } from "react-icons/fa6";

export const credentialsData = [
  {
    id: 'amazon-ml-2026',
    title: "Selected Participant",
    organization: "Amazon",
    icon: SiAmazon,
    pills: ["Virtual", "2026"],
    summary: "Free, virtual applied-ML program, every module taught by Amazon Scientists who work on these problems in practice.",
    links: [
      { text: "View certificate", url: "https://cdn.unstop.com/uploads/certificates/azmlss/1253_Poojari_Medhansh.pdf" },
      { text: "View LinkedIn post", url: "https://lnkd.in/p/d52YnFxh" }
    ],
    expandable: {
      topics: [
        "Supervised Learning", "Deep Neural Networks", "Dimensionality Reduction", 
        "Unsupervised Learning", "Sequential Learning", "Reinforcement Learning", 
        "Generative AI & LLMs", "Agentic AI", "Causal Inference"
      ],
      takeaways: [
        "Amazon Scientists teaching problems they work on in practice brought a clarity and real-world relevance that is hard to get from standard coursework.",
        "The live Q&A sessions showed the difference between learning a concept in theory and hearing it explained by someone who has implemented it at scale.",
        "Closing sessions on GenAI, LLMs and Agentic AI felt especially timely given how fast the space is moving.",
        "The biggest gain: a clearer sense of how these concepts apply in real-world use cases, beyond just completing modules."
      ]
    }
  },
  {
    id: 'udemy-web-dev',
    title: "Complete Web Development Course",
    organization: "Udemy",
    instructor: "Hitesh Choudhary",
    icon: FaAward,
    pills: ["100 hours", "Certificate of Completion"],
    links: [
      { text: "Verify certificate", url: "https://ude.my/UC-613747db-b540-4b0a-a000-4e5727c56361" }
    ]
  }
];
