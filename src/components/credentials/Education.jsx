import { motion } from "framer-motion";
import { educationData } from "../../data/aboutData";

const Education = () => {
  return (
    <div className="mt-16 text-left">
      <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6">
        Education
      </h3>
      <div className="flex flex-col gap-6">
        {educationData.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col gap-1 border-l-2 border-slate-300 dark:border-slate-700 pl-4"
          >
            <h4 className="text-xl font-bold text-gray-900 dark:text-white">
              {item.degree}
            </h4>
            <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-4 text-slate-600 dark:text-slate-400 font-medium text-sm">
              <span>{item.institution}</span>
              <span className="hidden md:inline-block text-slate-400">•</span>
              <span>{item.period}</span>
            </div>
            <span className="text-sm font-semibold text-slate-700 dark:text-slate-300 mt-1">
              {item.gpa}
            </span>
            <p className="text-sm text-slate-600 dark:text-slate-400 mt-2 max-w-3xl leading-relaxed">
              {item.coursework}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Education;
