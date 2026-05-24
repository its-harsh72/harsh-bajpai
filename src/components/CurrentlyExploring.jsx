import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { currentlyExploring } from "../data/portfolioData";

const CurrentlyExploring = () => {
  return (
    <section className="section-spacing">
      <SectionHeading
        eyebrow="Currently Exploring"
        title="What I’m Deepening Next"
        description="Current backend topics I’m actively studying for higher-scale, distributed production systems."
      />

      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        {currentlyExploring.map((item, index) => (
          <motion.div
            key={item}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.35, delay: index * 0.05 }}
            className="glass-card rounded-xl p-4 text-center text-sm font-medium text-slate-200"
          >
            {item}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default CurrentlyExploring;
