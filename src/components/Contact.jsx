import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { profile } from "../data/portfolioData";

const Contact = () => {
  return (
    <section id="contact" className="section-spacing scroll-mt-24">
      <SectionHeading
        eyebrow="Contact"
        title="Let’s Build Reliable Products"
        description="Open to backend, full-stack, and product engineering opportunities focused on scalable architecture."
      />

      <motion.div
        initial={{ opacity: 0, y: 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.45 }}
        className="glow-card rounded-2xl p-6"
      >
        <div className="grid gap-5 md:grid-cols-3">
          <div>
            <p className="text-xs uppercase tracking-[0.16em] text-slate-400">Email</p>
            <a href={`mailto:${profile.email}`} className="mt-2 block text-sm text-slate-100 hover:text-cyan-200">
              {profile.email}
            </a>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.16em] text-slate-400">Location</p>
            <p className="mt-2 text-sm text-slate-100">{profile.location}</p>
          </div>
          <div className="flex gap-2 md:justify-end">
            <a
              href={profile.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              GitHub
            </a>
            <a
              href={profile.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
