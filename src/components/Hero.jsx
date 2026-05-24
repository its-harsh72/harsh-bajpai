import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { profile } from "../data/portfolioData";

const Hero = () => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start end", "end start"] });
  const imageY = useTransform(scrollYProgress, [0, 1], [0, -40]);

  return (
    <section id="home" ref={heroRef} className="section-spacing scroll-mt-28">
      <div className="grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <p className="mb-4 inline-flex rounded-full border border-cyan-300/30 bg-cyan-300/10 px-3 py-1 text-xs uppercase tracking-[0.2em] text-cyan-200/90">
            Production-Grade Engineering
          </p>

          <h1 className="font-outfit text-4xl font-semibold leading-tight tracking-tight text-white md:text-6xl lg:text-7xl">
            {profile.role}
          </h1>

          <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-300/85 md:text-lg">
            {profile.subtitle}
          </p>

          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-slate-400 md:text-base">
            {profile.heroStatement}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#projects" className="btn-primary">
              View Engineering Work
            </a>
            <a
              href={profile.resume}
              download="HarshBajpai-MERN.pdf"
              className="btn-secondary"
            >
              Download Resume
            </a>
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {[
              "Scalable API Design",
              "Secure Backend Systems",
              "Cloud-Ready Delivery",
            ].map((item) => (
              <div key={item} className="glass-card px-4 py-3 text-sm text-slate-300">
                {item}
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          style={{ y: imageY }}
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="relative mx-auto w-full max-w-sm"
        >
          <div className="absolute -inset-0.5 -z-10 rounded-[2rem] bg-gradient-to-b from-cyan-400/30 via-slate-700/20 to-transparent blur-xl" />
          <div className="glass-card overflow-hidden rounded-[2rem] p-2">
            <img
              src={profile.image}
              alt="Harsh Bajpai"
              className="h-[420px] w-full rounded-[1.5rem] object-cover object-center"
            />
          </div>
          <div className="absolute -bottom-5 -left-4 rounded-xl border border-cyan-300/20 bg-slate-900/85 px-4 py-2 text-xs text-cyan-100 shadow-[0_0_25px_rgba(34,211,238,0.2)] backdrop-blur-md">
            Backend Reliability + Product Craft
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
