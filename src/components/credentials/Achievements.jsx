import { motion } from "framer-motion";
import { achievementsData } from "../../data/aboutData";
import { SiCodeforces, SiLeetcode, SiCodechef } from "react-icons/si";

const platformIcon = {
  Codeforces: <SiCodeforces size={22} className="text-red-500" />,
  LeetCode: <SiLeetcode size={22} className="text-orange-400" />,
  CodeChef: <SiCodechef size={22} className="text-amber-700 dark:text-amber-500" />,
};

const Achievements = () => {
  return (
    <div className="mt-16 text-left mb-16">
      <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-2">
        Competitive Programming
      </h3>
      <p className="text-sm text-slate-600 dark:text-slate-400 mb-6">
        800+ DSA problems solved across platforms
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {achievementsData.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-slate-50 dark:bg-neutral-900/50 rounded-2xl p-5 border border-slate-200 dark:border-slate-700 flex flex-col gap-3"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white dark:bg-slate-800 flex items-center justify-center shadow-sm border border-slate-100 dark:border-slate-700 flex-shrink-0">
                {platformIcon[item.platform]}
              </div>
              <div>
                <h4 className="text-base font-bold text-gray-900 dark:text-white leading-tight">
                  {item.platform}
                </h4>
                <span className="inline-block text-xs font-semibold px-2 py-0.5 rounded-md bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 mt-0.5">
                  {item.badge}
                </span>
              </div>
            </div>
            <ul className="flex flex-col gap-1">
              {item.stats.map((stat, i) => (
                <li key={i} className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {stat}
                </li>
              ))}
            </ul>
            {item.profileUrl ? (
              <a
                href={item.profileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline w-fit mt-auto"
              >
                View profile
              </a>
            ) : null}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Achievements;
