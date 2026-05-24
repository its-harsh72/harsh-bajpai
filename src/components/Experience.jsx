import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { experience } from "../data/portfolioData";

const Experience = () => {
  return (
    <section id="experience" className="section-spacing scroll-mt-24">
      <SectionHeading
        eyebrow="Experience"
        title="Professional Journey"
        description="Backend engineering roles focused on secure architecture, modular services, and production-ready execution."
      />

      <div className="relative space-y-8 before:absolute before:left-[17px] before:top-2 before:h-[calc(100%-16px)] before:w-px before:bg-gradient-to-b before:from-cyan-300/60 before:to-transparent md:before:left-1/2">
        {experience.map((item, index) => (
          <motion.article
            key={`${item.role}-${item.company}`}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, delay: index * 0.08 }}
            className="relative md:grid md:grid-cols-2 md:gap-8"
          >
            <div className="absolute left-2.5 top-4 h-4 w-4 rounded-full border border-cyan-200/60 bg-cyan-300/30 shadow-[0_0_18px_rgba(56,189,248,0.7)] md:left-1/2 md:-ml-2" />

            <div className={`mb-4 pl-10 md:pl-0 ${index % 2 === 0 ? "md:pr-12" : "md:order-2 md:pl-12"}`}>
              <p className="text-xs uppercase tracking-[0.18em] text-cyan-200/75">{item.period}</p>
              <h3 className="mt-2 font-outfit text-2xl font-semibold text-slate-50">
                {item.role}
              </h3>
              <p className="text-sm text-slate-400">{item.company}</p>
            </div>

            <div className={`${index % 2 === 0 ? "md:pl-12" : "md:order-1 md:pr-12"}`}>
              <div className="glow-card rounded-2xl p-5">
                <ul className="space-y-2 text-sm leading-relaxed text-slate-300/85">
                  {item.responsibilities.map((responsibility) => (
                    <li key={responsibility} className="flex gap-2">
                      <span className="mt-[7px] h-1.5 w-1.5 rounded-full bg-cyan-300/70" />
                      <span>{responsibility}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-4 flex flex-wrap gap-2 border-t border-white/10 pt-4">
                  {item.tech.map((tech) => (
                    <span key={tech} className="skill-badge">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
};

export default Experience;
