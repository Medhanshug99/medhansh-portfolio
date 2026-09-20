export const ExperienceData = [
    {
        id: '1',
        role: "Freelance – Full Stack Developer",
        company: "Self Employed",
        type: "Remote",
        date: "Dec 2025 – Present",
        location: "Remote",
        client: "Zidio Development",
        clientPeriod: "June 2026 – Aug 2026",
        project: "IntellMeet",
        githubUrl: "https://github.com/Medhanshug99/intellmeet-v1",
        liveUrl: "https://intellmeet-v2-nu.vercel.app",
        bullets: [
            "Gathered requirements directly with the client and translated them into a technical specification.",
            "JWT auth with rotating refresh tokens, OTP login, and a server-enforced 4-tier RBAC approval flow (Guest/Member/Host/Admin); REST endpoints averaging under 200ms p95.",
            "Real-time chat and presence over WebSockets with sub-100ms latency; video join flow under 3 seconds from \"Join Now\" to first frame.",
            "Async LLM pipeline (BullMQ, Redis, Llama 3 via Groq) generating summaries, decisions and action items for a 60-minute meeting in under 2 minutes, with retry-with-backoff and graceful fallback on API failure."
        ],
        technologies: ["Node.js", "TypeScript", "WebSockets", "Redis", "BullMQ", "Groq / Llama 3", "JWT", "RBAC"]
    },
];