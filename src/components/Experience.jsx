import { Briefcase, Calendar } from "lucide-react";

const EXPERIENCE = [
  {
    role: "Android Developer Intern",
    company: "AICTE EduSkills – Google for Developers",
    date: "Jan 2025 – Mar 2025",
    duration: "10 Weeks",
    summary:
      "Completed a virtual internship focused on Android application development and mobile application fundamentals.",
    points: [
      "Worked with Android application layouts and UI design.",
      "Learned Activity lifecycle management.",
      "Practiced application debugging and development.",
      "Explored Android development concepts and workflows.",
    ],
    tags: ["Android Development", "UI Design", "Debugging", "Mobile Applications"],
  },
  {
    role: "MERN Stack Developer Virtual Intern",
    company: "EduSkills",
    date: "Mar 2026 – Jun 2026",
    duration: "4 Months",
    summary:
      "Completed a virtual internship focused on MERN stack development, building responsive web applications and integrating frontend interfaces with backend services.",
    points: [
      "Developed and deployed a MERN stack web application serving 100+ test users.",
      "Built responsive user interfaces using reusable React components.",
      "Integrated REST APIs with secure backend functionality.",
      "Optimized frontend performance, reducing page load time by 30%.",
    ],
    tags: ["MongoDB", "Express.js", "React.js", "Node.js", "REST APIs"],
  },
  {
    role: "Machine Learning & Data Science Intern",
    company: "EduSkills",
    date: "", // add dates here, e.g. "Jul 2025 – Aug 2025"
    duration: "8-Week Program",
    summary:
      "Completed practical training in Machine Learning and Data Science, covering Python-based data analysis, machine learning algorithms, model optimization, and deployment.",
    points: [
      "Worked with NumPy, Pandas, Matplotlib, and Seaborn for data analysis and visualization.",
      "Learned Scikit-learn, supervised and unsupervised learning, feature engineering, preprocessing, and model evaluation.",
      "Explored NLP, Naive Bayes text classification, and integrating Python with SQL.",
      "Practiced Flask deployment, Power BI dashboards, ensemble methods, hyperparameter tuning, and ML pipelines.",
      "Completed a capstone project on Customer Sentiment Analysis and Reporting for E-commerce.",
    ],
    tags: ["Python", "Machine Learning", "Data Science", "Scikit-learn", "SQL", "Flask", "Power BI", "NLP"],
  },
];

function Experience() {
  return (
    <section className="experience section" id="experience">
      <div className="section-heading">
        <p className="section-label">MY PROFESSIONAL JOURNEY</p>
        <h2>
          Experience <span>& Internships</span>
        </h2>
      </div>

      <div className="edu-timeline">
        {EXPERIENCE.map((job) => (
          <div className="edu-item" key={job.role}>
            <div className="edu-marker">
              <span className="edu-dot">
                <Briefcase size={22} />
              </span>
              <span className="edu-line" />
            </div>

            <article className="edu-card">
              <div className="edu-top">
                <span className="edu-level">VIRTUAL INTERNSHIP</span>
                <span className="edu-period">
                  <Calendar size={14} /> {job.date || job.duration}
                </span>
              </div>

              <h3>{job.role}</h3>
              <h4>
                {job.company}
                {job.date && <em className="exp-duration"> · {job.duration}</em>}
              </h4>

              <p className="exp-summary">{job.summary}</p>

              <ul className="exp-points">
                {job.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>

              <div className="exp-tags">
                {job.tags.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>
            </article>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;