import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import BackendExpertise from "./components/BackendExpertise";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import CurrentlyExploring from "./components/CurrentlyExploring";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-slate-950 text-slate-200 antialiased">
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(56,189,248,0.12),transparent_35%),radial-gradient(circle_at_80%_30%,rgba(148,163,184,0.12),transparent_28%),linear-gradient(135deg,#020617_10%,#04070f_45%,#050816_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(148,163,184,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.05)_1px,transparent_1px)] bg-[size:52px_52px] [mask-image:radial-gradient(circle_at_center,black_15%,transparent_75%)]" />
      </div>

      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <Navbar />
        <main>
          <Hero />
          <About />
          <BackendExpertise />
          <Skills />
          <Projects />
          <Experience />
          <CurrentlyExploring />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default App;
