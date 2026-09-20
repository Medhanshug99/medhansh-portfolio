import { motion } from "framer-motion";
import { skills, mlAiSkills, supportingSkills } from "../../data/skillsData";
import SkillCard from "./SkillCard";

// Main Skills Component
const Skills = () => {
  return (
    <section
      id="skills"
      className="w-full pt-16 pb-8 px-4 md:px-8 scroll-mt-24 border-y border-slate-200 dark:border-neutral-900"
    >
      <div className="container mx-auto text-start">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Skills
        </motion.h2>

        <motion.p
          className="text-lg text-gray-800 dark:text-gray-300 font-semibold mb-4 max-w-2xl"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          From frontend frameworks to backend databases, dev tools, machine learning, and LLM orchestration.
        </motion.p>

        {/* Skills Categories */}
        <div className="flex flex-col gap-10 mt-10">
          {[
            {
              title: "Languages",
              items: [
                ...skills.filter((s) => ["JavaScript", "Typescript"].includes(s.name)),
                ...supportingSkills.filter((s) => ["Python"].includes(s.name)),
              ],
            },
            {
              title: "Frontend",
              items: skills.filter((s) =>
                ["HTML", "CSS", "React", "NextJs", "Tailwind CSS", "Bootstrap", "Framer Motion", "React Router"].includes(s.name)
              ),
            },
            {
              title: "Backend and Data",
              items: [
                ...skills.filter((s) =>
                  ["Node.js", "Express.js", "MongoDB", "PostgreSQL", "Mongoose", "Prisma", "Firebase"].includes(s.name)
                ),
                ...supportingSkills.filter((s) => ["FastAPI", "Redis", "BullMQ", "WebSockets"].includes(s.name)),
              ],
            },
            {
              title: "ML and AI",
              items: mlAiSkills,
            },
            {
              title: "Tools and DevOps",
              items: [
                ...skills.filter((s) => ["Git", "GitHub", "Postman", "Shadcn UI", "VsCode"].includes(s.name)),
                ...supportingSkills.filter((s) => ["Docker", "Docker Compose", "GitHub Actions"].includes(s.name)),
              ],
            },
          ].map((category, idx) => (
            <div key={idx} className="flex flex-col gap-4">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                {category.title}
              </h3>
              <div className="w-full flex items-start justify-start flex-wrap gap-3">
                {category.items.map((skill, index) => {
                  if (!skill) return null;
                  return (
                    <SkillCard
                      key={skill.name}
                      src={skill.icon}
                      IconComponent={skill.iconComponent}
                      name={skill.name}
                      index={index}
                      id={skill.name}
                    />
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
