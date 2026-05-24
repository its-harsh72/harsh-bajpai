import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { aboutText } from "../data/portfolioData";

const About = () => {
  return (
    <section id="about" className="section-spacing scroll-mt-24">
      <SectionHeading
        eyebrow="About"
        title="Engineering with Architecture, Security, and Scale"
        description="Building backend systems that stay reliable under growth while shipping polished user-facing experiences."
      />

      <div className="grid gap-4">
        {aboutText.map((paragraph, index) => (
          <motion.p
            key={paragraph}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.45, delay: index * 0.08 }}
            className="glass-card px-5 py-5 text-sm leading-relaxed text-slate-300 md:text-base"
          >
            {paragraph}
          </motion.p>
        ))}
      </div>
    </section>
  );
};

export default About;
