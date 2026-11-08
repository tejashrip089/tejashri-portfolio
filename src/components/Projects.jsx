function Projects() {
  const projects = [
    {
      number: "1",
      title: "AI SHIELD",
      category: "AI-Based Threat Detection and Intelligent Decision Support System",
      description:
        "An AI-powered cybersecurity application that uses Machine Learning to analyze network traffic, identify potential security threats, and support intelligent security decision-making.",
      features: [
        "Classifies network traffic as normal or suspicious.",
        "Responsive React dashboard with Python FastAPI backend.",
        "Displays threat analysis, risk scores and recommendations.",
        "CSV-based traffic analysis and sample testing.",
        "Interactive charts and downloadable PDF reports.",
      ],
      technologies: [
        "Python", "Machine Learning", "FastAPI",
        "React.js", "JavaScript", "HTML", "CSS", "Recharts",
      ],
      featured: true,
    },
    {
      number: "2",
      title: "Shri Trimurti Jilha Nagari Sahakari Pathsanstha",
      category: "Financial Institution Website",
      description:
        "Developed a responsive website for a financial institution with organized information, service sections and user-friendly navigation.",
      features: [
        "Responsive website design.",
        "Financial services and information pages.",
        "Interactive navigation and UI components.",
        "Contact section with location information.",
      ],
      technologies: ["React.js", "HTML", "CSS", "JavaScript"],
    },
    {
      number: "3",
      title: "Sai Abhyasika",
      category: "Smart Study Room Management System",
      description:
        "Developed a study room management application to organize student information and support efficient management of study room activities.",
      features: [
        "Student information management.",
        "Study room management interface.",
        "Backend API integration.",
        "Database connectivity.",
      ],
      technologies: ["React.js", "Node.js", "Express.js", "MongoDB"],
    },
  ];

  return (
    <section className="projects section" id="projects">
      <div className="section-heading">
        <p className="section-label">MY RECENT WORK</p>
        <h2>
          Featured <span>Projects</span>
        </h2>
        <p className="projects-subtitle">
          Practical projects where I apply my technical knowledge
          and build meaningful solutions.
        </p>
      </div>

      <div className="projects-grid">
        {projects.map((project) => (
          <div className="project-item" key={project.number}>
            <div className="project-marker">
              <span className="project-badge">{project.number}</span>
              <span className="project-line" />
            </div>

          <article
            className={`project-card ${
              project.featured ? "featured-project" : ""
            }`}
          >
            <div className="project-number">
              <span className="project-icon">{project.featured ? "✦" : "</>"}</span>
            </div>

            {project.featured && (
              <span className="featured-label">
                FEATURED PROJECT
              </span>
            )}

            <p className="project-category">{project.category}</p>

            <h3>{project.title}</h3>

            <p className="project-description">
              {project.description}
            </p>

            {project.impact && (
              <p className="project-impact">
                <strong>Impact:</strong> {project.impact}
              </p>
            )}

            <div className="project-features">
              <h4>Key Features</h4>
              <ul>
                {project.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
            </div>

            <div className="project-technologies">
              {project.technologies.map((technology) => (
                <span key={technology}>{technology}</span>
              ))}
            </div>

            <div className="project-links">
              <a href={project.github} target="_blank" rel="noreferrer">
                GitHub ↗
              </a>
              {project.demo && (
                <a href={project.demo} target="_blank" rel="noreferrer">
                  Live Demo ↗
                </a>
              )}
            </div>
          </article>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;