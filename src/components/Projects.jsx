import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { projects } from "../data/portfolioData";

const Projects = () => {
  return (
    <section id="projects" className="section-spacing scroll-mt-24">
      <SectionHeading
        eyebrow="Projects"
        title="Selected Engineering Projects"
        description="Production-inspired builds focused on secure backend architecture, scalability, and end-to-end execution."
      />

      <div className="grid gap-6 xl:grid-cols-2">
        {projects.map((project, index) => (
          <motion.article
            key={project.title}
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.22 }}
            transition={{ duration: 0.45, delay: index * 0.07 }}
            className="project-card group"
          >
            <div className="overflow-hidden rounded-2xl border border-white/10">
              <img
                src={project.image}
                alt={project.title}
                className="h-56 w-full object-cover transition duration-700 group-hover:scale-[1.03]"
              />
            </div>

            <div className="mt-5">
              <p className="text-xs uppercase tracking-[0.18em] text-cyan-200/75">{project.type}</p>
              <h3 className="mt-2 font-outfit text-2xl font-semibold text-slate-50">{project.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-300/90">{project.description}</p>

              <ul className="mt-4 space-y-2 text-sm text-slate-300/80">
                {project.highlights.map((highlight) => (
                  <li key={highlight} className="flex gap-2">
                    <span className="mt-[7px] h-1.5 w-1.5 rounded-full bg-cyan-300/70" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-5 flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <span key={item} className="skill-badge">
                    {item}
                  </span>
                ))}
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                >
                  GitHub
                </a>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  Live Demo
                </a>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
};

export default Projects;
