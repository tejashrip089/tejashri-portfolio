import { User, GraduationCap, Calendar, MapPin } from "lucide-react";

const FOCUS = [
  "Full-Stack Web Development",
  "Responsive UI",
  "REST APIs",
  "Problem Solving",
];

const DETAILS = [
  { icon: User, label: "Name", value: "Tejashri Patil" },
  { icon: GraduationCap, label: "Degree", value: "B.Tech – CSIT" },
  { icon: Calendar, label: "Graduation", value: "2027" },
  { icon: MapPin, label: "Location", value: "Kolhapur, Maharashtra" },
];

function About() {
  return (
    <section className="about section" id="about">
      <div className="section-heading">
        <p className="section-label">GET TO KNOW ME</p>
        <h2>
          About <span>Me</span>
        </h2>
      </div>

      <div className="ab-layout">
        <div className="ab-text">
          <h3>
            Passionate about technology and <span>building solutions.</span>
          </h3>

          <p>
            I am Tejashri Patil, a Computer Science and Information Technology
            undergraduate interested in software development and modern web
            technologies.
          </p>

          <p>
            I enjoy creating responsive websites, exploring new technologies,
            and developing practical projects that strengthen my technical
            skills. I am always eager to learn, collaborate, and grow as a
            software developer.
          </p>

          <div className="ab-focus">
            {FOCUS.map((f) => (
              <span key={f}>{f}</span>
            ))}
          </div>

          <div className="ab-details">
            {DETAILS.map(({ icon: Icon, label, value }) => (
              <div className="ab-detail" key={label}>
                <span className="ab-detail-icon">
                  <Icon size={18} />
                </span>
                <div>
                  <small>{label}</small>
                  <strong>{value}</strong>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="ab-code">
          <div className="ab-code-bar">
            <i /> <i /> <i />
            <span>developer.js</span>
          </div>

          <pre>
            <code>
              <span className="c-kw">const</span>{" "}
              <span className="c-var">developer</span> = {"{"}
              {"\n  "}name: <span className="c-str">"Tejashri Patil"</span>,
              {"\n  "}role: <span className="c-str">"MERN Stack Developer"</span>,
              {"\n  "}education: <span className="c-str">"B.Tech CSIT, 2027"</span>,
              {"\n  "}stack: [
              <span className="c-str">"React"</span>,{" "}
              <span className="c-str">"Node"</span>,{"\n    "}
              <span className="c-str">"Express"</span>,{" "}
              <span className="c-str">"MongoDB"</span>],
              {"\n  "}openTo: <span className="c-str">"Internships"</span>,
              {"\n  "}learning: <span className="c-kw">true</span>,
              {"\n"}
              {"}"};<span className="c-caret" />
            </code>
          </pre>

          <p className="ab-code-note">Learning. Building. Growing.</p>
        </div>
      </div>
    </section>
  );
}

export default About;