import { useEffect, useState } from "react";

const ROLES = [
  "MERN Stack Developer",
  "React.js Frontend Developer",
  "Aspiring Software Engineer",
  "Problem Solver",
];

function useTypewriter(words, typeSpeed = 70, deleteSpeed = 35, pause = 1400) {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[index % words.length];
    let delay = deleting ? deleteSpeed : typeSpeed;

    if (!deleting && text === word) delay = pause;

    const t = setTimeout(() => {
      if (!deleting && text === word) {
        setDeleting(true);
      } else if (deleting && text === "") {
        setDeleting(false);
        setIndex((i) => i + 1);
      } else {
        setText(
          deleting ? word.slice(0, text.length - 1) : word.slice(0, text.length + 1)
        );
      }
    }, delay);

    return () => clearTimeout(t);
  }, [text, deleting, index, words, typeSpeed, deleteSpeed, pause]);

  return text;
}

function Hero() {
  const typed = useTypewriter(ROLES);

  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <p className="hero-label">
          <span className="status-dot"></span>
          COMPUTER SCIENCE & IT STUDENT · OPEN TO INTERNSHIPS
        </p>

        <p className="hero-greeting">Hello, I'm</p>

        <h1>
          Tejashri <span>Patil.</span>
        </h1>

        <h2 className="hero-role">
          <span className="typed">{typed}</span>
          <span className="caret" />
        </h2>

        <p className="hero-description">
          I build responsive, performance-focused web applications with the
          MERN stack. From REST APIs to polished React interfaces, I enjoy
          turning ideas into reliable, user-friendly software.
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="primary-btn">
            Explore My Work →
          </a>

          <a href="/resume.pdf" download className="secondary-btn">
            Download Resume ↓
          </a>
        </div>
      </div>

      <div className="hero-image">
        <div className="image-frame">
          <img src="/profile.jpg" alt="Tejashri Patil" />
        </div>

        <div className="floating-card">✦ Developer Portfolio</div>
      </div>
    </section>
  );
}

export default Hero;