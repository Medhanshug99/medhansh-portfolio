import x from "../assets/socials/x.png";
import gmail from "../assets/socials/gmail.png";
import github from "../assets/socials/github.png";
import linkedin from "../assets/socials/linkedin.png";

// SOCIAL ICONS DATA
export const SocialLinks = [
    {
        icon: <img src={linkedin} alt="linkedin" className="w-8 md:w-9" />,
        href: "https://tinyurl.com/ldmedhansh",
        label: "Linkedin",
        hoverColor: "hover:text-blue-700",
    },
    {
        icon: <img src={github} alt="github" className="w-8 md:w-9" />,
        href: "https://github.com/Medhanshug99",
        label: "Github",
        hoverColor: "hover:text-black dark:hover:text-gray-400",
    },
    {
        icon: <img src={gmail} alt="Email" className="w-8 md:w-9" />,
        href: "https://mail.google.com/mail/?view=cm&fs=1&to=medhanshp7@gmail.com",
        label: "Email",
        hoverColor: "hover:text-red-600",
    },
    {
        icon: <img src={x} alt="X" className="w-8 md:w-9" />,
        href: "https://x.com/Medhansh91303",
        label: "Twitter",
        hoverColor: "hover:text-sky-500",
    },
];