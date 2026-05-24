import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { navItems, profile } from "../data/portfolioData";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-35% 0px -55% 0px",
        threshold: 0.15,
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
      observer.disconnect();
    };
  }, []);

  const onNavigate = () => setIsMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 pt-4">
      <div className="mx-auto max-w-6xl rounded-2xl border border-white/10 bg-slate-950/65 px-4 py-3 shadow-[0_10px_40px_rgba(0,0,0,0.35)] backdrop-blur-xl md:px-6">
        <div className="flex items-center justify-between gap-4">
          <a href="#home" className="group flex items-center gap-3">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-cyan-300/30 bg-cyan-300/10 font-outfit text-sm font-semibold text-cyan-200">
              HB
            </span>
            <div className="leading-tight">
              <p className="text-sm font-semibold text-slate-100">{profile.name}</p>
              <p className="text-[11px] uppercase tracking-[0.18em] text-slate-400">
                Backend Engineer
              </p>
            </div>
          </a>

          <nav className="hidden items-center gap-1 lg:flex">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className={`rounded-lg px-3 py-2 text-sm transition ${
                    isActive
                      ? "bg-cyan-400/15 text-cyan-200"
                      : "text-slate-300 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          <div className="hidden items-center gap-2 md:flex">
            <a
              href={profile.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="icon-btn"
              aria-label="GitHub"
            >
              GH
            </a>
            <a
              href={profile.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="icon-btn"
              aria-label="LinkedIn"
            >
              IN
            </a>
            <a
              href="#contact"
              className="rounded-lg border border-cyan-300/30 bg-cyan-300/10 px-3 py-2 text-sm text-cyan-100 transition hover:bg-cyan-300/20"
            >
              Let&apos;s Build
            </a>
          </div>

          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-slate-200 lg:hidden"
            onClick={() => setIsMenuOpen((value) => !value)}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            <span className="text-lg">{isMenuOpen ? "×" : "≡"}</span>
          </button>
        </div>

        <AnimatePresence>
          {isMenuOpen ? (
            <motion.nav
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="mt-4 grid gap-1 border-t border-white/10 pt-4 lg:hidden"
            >
              {navItems.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    onClick={onNavigate}
                    className={`rounded-lg px-3 py-2 text-sm transition ${
                      isActive
                        ? "bg-cyan-400/15 text-cyan-200"
                        : "text-slate-200 hover:bg-white/5"
                    }`}
                  >
                    {item.label}
                  </a>
                );
              })}
              <div className="mt-2 flex items-center gap-2 border-t border-white/10 pt-3">
                <a
                  href={profile.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="icon-btn"
                >
                  GitHub
                </a>
                <a
                  href={profile.links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="icon-btn"
                >
                  LinkedIn
                </a>
              </div>
            </motion.nav>
          ) : null}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Navbar;
