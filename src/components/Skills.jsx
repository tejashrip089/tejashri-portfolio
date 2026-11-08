import { Code2, Palette, Server, Brain, Wrench } from "lucide-react";

const SKILL_GROUPS = [
  {
    title: "Programming Languages",
    icon: Code2,
    skills: ["Java", "Python", "C", "C++"],
  },
  {
    title: "Frontend Development",
    icon: Palette,
    skills: ["HTML5", "CSS3", "JavaScript", "React.js", "Bootstrap", "Tailwind CSS"],
  },
  {
    title: "Backend & Database",
    icon: Server,
    skills: ["Node.js", "Express.js", "MySQL", "MongoDB", "SQL"],
  },
  {
    title: "Core Computer Science",
    icon: Brain,
    skills: ["Data Structures", "OOP", "DBMS", "Operating Systems", "Computer Networks"],
  },
  {
    title: "Tools & Technologies",
    icon: Wrench,
    skills: ["Git", "GitHub", "VS Code", "Figma"],
  },
];

const MARQUEE = [
  "React.js", "Node.js", "Express.js", "MongoDB", "JavaScript",
  "Java", "Python", "MySQL", "Tailwind CSS", "Git",
];

function Skills() {
  return (
    <section className="skills section" id="skills">
      <div className="section-heading">
        <p className="section-label">MY TECHNICAL EXPERTISE</p>
        <h2>
          My <span>Skills</span>
        </h2>
        <p className="skills-subtitle">
          Technologies and tools I use to build and develop applications.
        </p>
      </div>

      <div className="sk-marquee" aria-hidden="true">
        <div className="sk-track">
          {[...MARQUEE, ...MARQUEE].map((t, i) => (
            <span key={i}>{t}</span>
          ))}
        </div>
      </div>

      <div className="sk-grid">
        {SKILL_GROUPS.map(({ title, icon: Icon, skills }) => (
          <div className="sk-card" key={title}>
            <div className="sk-head">
              <span className="sk-icon">
                <Icon size={22} />
              </span>
              <div>
                <h3>{title}</h3>
                <small>{skills.length} technologies</small>
              </div>
            </div>

            <div className="sk-tags">
              {skills.map((s) => (
                <span key={s}>{s}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;