import { motion } from "framer-motion";

const SectionHeading = ({ eyebrow, title, description }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="mb-10"
    >
      {eyebrow ? (
        <p className="mb-3 inline-flex rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[11px] uppercase tracking-[0.24em] text-cyan-200/80">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="font-outfit text-3xl font-semibold tracking-tight text-white md:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-3 max-w-3xl text-sm leading-relaxed text-slate-300/80 md:text-base">
          {description}
        </p>
      ) : null}
    </motion.div>
  );
};

export default SectionHeading;
