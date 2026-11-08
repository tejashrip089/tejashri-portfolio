import { GraduationCap, BookOpen, School, Calendar, MapPin, Building2 } from "lucide-react";

/*
  Edit your details here. Any field left as "" is hidden automatically,
  so fill in institute / score for 12th and 10th when you are ready.
*/
const EDUCATION = [
  {
    icon: GraduationCap,
    level: "UNDERGRADUATE",
    degree: "Bachelor of Technology",
    field: "Computer Science and Information Technology",
    institute: "Rajarambapu Institute of Technology",
    location: "Rajaramnagar, Maharashtra",
    period: "2023 – 2027",
    scoreLabel: "CGPA",
    score: "9.12",
    current: true,
  },
  {
    icon: BookOpen,
    level: "HIGHER SECONDARY",
    degree: "Higher Secondary Certificate (12th)",
    field: "Science",
    institute: "", // e.g. "ABC Junior College"
    location: "Maharashtra",
    period: "2021 – 2023",
    scoreLabel: "Percentage",
    score: "89%",
    current: false,
  },
  {
    icon: School,
    level: "SECONDARY",
    degree: "Secondary School Certificate (10th)",
    field: "School Education",
    institute: "", // e.g. "XYZ High School"
    location: "Maharashtra",
    period: "2020 – 2021",
    scoreLabel: "Percentage",
    score: "92%",
    current: false,
  },
];

function Education() {
  return (
    <section className="education section" id="education">
      <div className="section-heading">
        <p className="section-label">MY ACADEMICS</p>
        <h2>
          Academic <span>Background</span>
        </h2>
        <p>My academic journey and qualifications.</p>
      </div>

      <div className="edu-timeline">
        {EDUCATION.map((item) => {
          const Icon = item.icon;
          return (
            <div className="edu-item" key={item.degree}>
              <div className="edu-marker">
                <span className="edu-dot">
                  <Icon size={22} />
                </span>
                <span className="edu-line" />
              </div>

              <article className="edu-card">
                <div className="edu-top">
                  <span className="edu-level">{item.level}</span>
                  <span className="edu-period">
                    <Calendar size={14} /> {item.period}
                  </span>
                </div>

                <h3>{item.degree}</h3>
                <h4>{item.field}</h4>

                <ul className="edu-meta">
                  {item.institute && (
                    <li>
                      <Building2 size={16} /> {item.institute}
                    </li>
                  )}
                  {item.location && (
                    <li>
                      <MapPin size={16} /> {item.location}
                    </li>
                  )}
                </ul>

                {(item.score || item.current) && (
                  <div className="edu-footer">
                    {item.score && (
                      <div className="edu-score">
                        <span>{item.scoreLabel}</span>
                        <strong>{item.score}</strong>
                      </div>
                    )}
                    {item.current && (
                      <span className="edu-status">
                        <i /> Currently Pursuing
                      </span>
                    )}
                  </div>
                )}
              </article>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Education;