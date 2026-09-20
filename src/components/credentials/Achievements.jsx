import { motion } from "framer-motion";
import { achievementsData } from "../../data/aboutData";
import { FaTrophy, FaCode } from "react-icons/fa6";

const Achievements = () => {
  const getIcon = (title) => {
    if (title.includes("Hackathon")) return <FaTrophy className="text-yellow-500" size={20} />;
    return <FaCode className="text-blue-500" size={20} />;
  };

  return (
    <div className="mt-16 text-left mb-16">
      <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6">
        Achievements
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {achievementsData.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-slate-50 dark:bg-neutral-900/50 rounded-2xl p-5 md:p-6 border border-slate-200 dark:border-slate-700 flex flex-col gap-3"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white dark:bg-slate-800 flex items-center justify-center shadow-sm border border-slate-100 dark:border-slate-700">
                {getIcon(item.title)}
              </div>
              <h4 className="text-lg font-bold text-gray-900 dark:text-white leading-tight">
                {item.title}
              </h4>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Achievements;
