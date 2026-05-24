import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { backendExpertise } from "../data/portfolioData";

const BackendExpertise = () => {
  return (
    <section id="expertise" className="section-spacing scroll-mt-24">
      <SectionHeading
        eyebrow="Backend Expertise"
        title="Production-Focused Core Capabilities"
        description="Specialized backend pillars I use to deliver secure, maintainable, and scalable systems."
      />

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {backendExpertise.map((item, index) => (
          <motion.article
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            className="glow-card rounded-2xl p-5"
          >
            <h3 className="font-outfit text-xl font-medium text-slate-100">{item.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-300/85">{item.description}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
};

export default BackendExpertise;
