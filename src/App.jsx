import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import "./App.css";
import "./theme.css";

const REVEAL_SELECTOR = [
  ".section-heading",
  ".ab-text",
  ".ab-code",
  ".sk-card",
  ".project-card",
  ".edu-item",
  ".cf-card",
  ".ct-item",
  ".ct-form",
].join(",");

function useScrollReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(REVEAL_SELECTOR);
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    els.forEach((el) => {
      // stagger siblings inside the same grid/container
      const index = Array.prototype.indexOf.call(el.parentElement.children, el);
      el.style.setProperty("--d", `${Math.min(index, 5) * 90}ms`);
      el.classList.add("reveal");
      io.observe(el);
    });

    return () => io.disconnect();
  }, []);
}

function BackToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      className={"back-to-top" + (show ? " show" : "")}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Back to top"
    >
      ↑
    </button>
  );
}

function App() {
  useScrollReveal();

  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Certifications />
        <Contact />
      </main>

      <footer className="site-footer">
        © {new Date().getFullYear()} Tejashri Patil · Built with React & Vite
      </footer>

      <BackToTop />
    </>
  );
}

export default App;