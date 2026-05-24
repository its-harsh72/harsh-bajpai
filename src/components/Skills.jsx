import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { skillGroups } from "../data/portfolioData";

const Skills = () => {
  return (
    <section id="skills" className="section-spacing scroll-mt-24">
      <SectionHeading
        eyebrow="Skills"
        title="Technology Stack"
        description="Backend-first engineering stack with full-stack delivery capabilities across architecture, APIs, and deployment."
      />

      <div className="grid gap-5 lg:grid-cols-3">
        {skillGroups.map((group, groupIndex) => (
          <motion.article
            key={group.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.45, delay: groupIndex * 0.07 }}
            className="glass-card rounded-2xl p-5"
          >
            <h3 className="font-outfit text-xl font-semibold text-slate-100">{group.name}</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span key={skill} className="skill-badge">
                  {skill}
                </span>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
};

export default Skills;
