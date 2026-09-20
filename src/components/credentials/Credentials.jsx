import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { credentialsData } from "../../data/credentialsData";

const CredentialCard = ({ item, index }) => {
  const [isOpen, setIsOpen] = useState(false);
  const hasExpandable = !!item.expandable;

  return (
    <motion.div
      className="bg-slate-50 dark:bg-neutral-900/50 rounded-2xl border border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 transition-all duration-200 overflow-hidden h-fit"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.8, type: "spring" }}
      viewport={{ once: true }}
    >
      <div
        onClick={() => hasExpandable && setIsOpen(!isOpen)}
        className={`p-5 md:p-6 flex flex-col gap-4 ${hasExpandable ? "cursor-pointer select-none" : ""}`}
      >
        <div className="flex justify-between items-start">
          <div className="flex gap-4 items-center">
            <div className="w-10 h-10 rounded-lg bg-white dark:bg-slate-900 shadow-sm border border-slate-100 dark:border-slate-700 flex items-center justify-center flex-shrink-0 text-slate-700 dark:text-slate-300">
              <item.icon size={22} />
            </div>
            <div>
              <h3 className="text-lg md:text-xl font-bold text-slate-900 dark:text-white leading-tight">
                {item.title}
              </h3>
              <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 mt-1">
                <span className="font-medium">{item.organization}</span>
                {item.instructor && (
                  <>
                    <span>•</span>
                    <span>Instructor: {item.instructor}</span>
                  </>
                )}
              </div>
            </div>
          </div>
          {hasExpandable && (
            <div
              className={`text-slate-400 transition-transform duration-300 ${
                isOpen ? "rotate-180" : ""
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </div>
          )}
        </div>

        <div className="flex flex-wrap gap-2">
          {item.pills.map((pill, idx) => (
            <span
              key={idx}
              className="bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 px-2.5 py-1 rounded-md text-xs font-semibold"
            >
              {pill}
            </span>
          ))}
        </div>

        {item.summary && (
          <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            {item.summary}
          </p>
        )}

        <div className="flex flex-col gap-2 mt-1">
          {item.links.map((link, idx) => (
            <a
              key={idx}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => hasExpandable && e.stopPropagation()}
              className="text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline w-fit"
            >
              {link.text}
            </a>
          ))}
        </div>
      </div>

      <AnimatePresence initial={false}>
        {isOpen && hasExpandable && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="px-5 md:px-6 pb-6 pt-0">
              <div className="h-px w-full bg-slate-200 dark:bg-slate-700 mb-4"></div>

              {item.expandable.topics && (
                <div className="mb-5">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-3">
                    Topics Covered
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {item.expandable.topics.map((topic, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 rounded-md bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 text-xs shadow-sm"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {item.expandable.takeaways && (
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-3">
                    Key Takeaways
                  </h4>
                  <ul className="space-y-2 ml-1">
                    {item.expandable.takeaways.map((takeaway, idx) => (
                      <li
                        key={idx}
                        className="flex gap-3 items-start text-sm text-slate-600 dark:text-slate-300 leading-relaxed"
                      >
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-slate-400 dark:bg-slate-500 flex-shrink-0" />
                        <span>{takeaway}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const Credentials = () => {
  return (
    <div className="mt-20">
      <h3 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-2">
        Certifications & Programs
      </h3>
      <p className="text-slate-600 dark:text-slate-400 mb-8 max-w-2xl">
        Selected professional programs and coursework.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
        {credentialsData.map((item, index) => (
          <CredentialCard key={item.id} item={item} index={index} />
        ))}
      </div>
    </div>
  );
};

export default Credentials;
