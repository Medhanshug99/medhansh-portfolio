import { FiGithub, FiTwitter, FiLinkedin } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="py-8 flex flex-col items-center justify-center gap-4">
      <div className="flex items-center gap-6 text-neutral-600 dark:text-neutral-400">
        <a href="https://github.com/Medhanshug99" target="_blank" rel="noopener noreferrer" className="hover:text-black dark:hover:text-white transition-colors">
          <FiGithub size={20} />
        </a>
        <a href="https://x.com/Medhansh91303" target="_blank" rel="noopener noreferrer" className="hover:text-black dark:hover:text-white transition-colors">
          <FiTwitter size={20} />
        </a>
        <a href="https://linkedin.com/in/medhanshpoojari" target="_blank" rel="noopener noreferrer" className="hover:text-black dark:hover:text-white transition-colors">
          <FiLinkedin size={20} />
        </a>
      </div>
      <p className="text-neutral-500 dark:text-neutral-500 text-sm text-center">
        &copy; {new Date().getFullYear()} Medhansh Poojari. All rights reserved.
      </p>
    </footer>
  );
}
