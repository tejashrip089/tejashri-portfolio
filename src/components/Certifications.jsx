import { Award, Calendar, Smartphone, Globe, Database, BrainCircuit } from "lucide-react";

/* Update the year/period of each certificate here */
const CERTIFICATES = [
  {
    icon: Smartphone,
    title: "Android Developer Virtual Internship",
    organization: "AICTE EduSkills",
    period: "2025",
    category: "Internship",
  },
  {
    icon: Globe,
    title: "Frontend Web Development",
    organization: "Infosys Springboard",
    period: "2025",
    category: "Web Development",
  },
  {
    icon: Database,
    title: "SQL and Database Management",
    organization: "Simplilearn",
    period: "2025",
    category: "Database",
  },
  {
    icon: BrainCircuit,
    title: "Machine Learning & Data Science",
    organization: "EduSkills",
    period: "2025",
    category: "Data Science",
  },
];

function Certifications() {
  return (
    <section className="certifications section" id="certifications">
      <div className="section-heading">
        <p className="section-label">MY ACHIEVEMENTS</p>
        <h2>
          Licenses & <span>Certifications</span>
        </h2>
        <p>Courses and certifications that support my technical growth.</p>
      </div>

      <div className="cf-grid">
        {CERTIFICATES.map(({ icon: Icon, title, organization, period, category }) => (
          <div className="cf-card" key={title}>
            <div className="cf-top">
              <span className="cf-icon">
                <Icon size={24} />
              </span>
              <span className="cf-category">{category}</span>
            </div>

            <h3>{title}</h3>
            <p className="cf-org">{organization}</p>

            <div className="cf-footer">
              <span>
                <Calendar size={14} /> {period}
              </span>
              <Award size={18} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Certifications;