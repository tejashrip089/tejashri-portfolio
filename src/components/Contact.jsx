import { useState } from "react";
import { Mail, MapPin, FileText, Send } from "lucide-react";

/* Put your email here to switch on the email card and the contact form */
const EMAIL = "";
const GITHUB = "https://github.com/tejashrip089";
const LINKEDIN = "https://www.linkedin.com/in/tejashri-patil-b816b6375/";

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const update = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio enquiry from ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
  };

  const items = [
    EMAIL && { icon: Mail, label: "Email", value: EMAIL, href: `mailto:${EMAIL}` },
    { icon: MapPin, label: "Location", value: "Kolhapur, Maharashtra" },
    { label: "GitHub", value: "github.com/tejashrip089", href: GITHUB, brand: "GH" },
    { label: "LinkedIn", value: "Tejashri Patil", href: LINKEDIN, brand: "in" },
    { icon: FileText, label: "Resume", value: "Download PDF", href: "/resume.pdf", download: true },
  ].filter(Boolean);

  return (
    <section className="contact section" id="contact">
      <div className="section-heading">
        <p className="section-label">GET IN TOUCH</p>
        <h2>
          Let's <span>Work Together</span>
        </h2>
        <p className="contact-subtitle">
          I'm open to internships and opportunities. Feel free to reach out.
        </p>
      </div>

      <div className={"ct-layout" + (EMAIL ? "" : " single")}>
        <div className="ct-info">
          {items.map(({ icon: Icon, label, value, href, brand, download }) => {
            const inner = (
              <>
                <span className="ct-icon">{Icon ? <Icon size={20} /> : brand}</span>
                <div>
                  <small>{label}</small>
                  <strong>{value}</strong>
                </div>
              </>
            );
            return href ? (
              <a
                className="ct-item"
                key={label}
                href={href}
                download={download || undefined}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
              >
                {inner}
              </a>
            ) : (
              <div className="ct-item" key={label}>{inner}</div>
            );
          })}
        </div>

        {EMAIL && (
          <form className="ct-form" onSubmit={submit}>
            <h3>Send me a message</h3>
            <input name="name" placeholder="Your name" value={form.name} onChange={update} required />
            <input name="email" type="email" placeholder="Your email" value={form.email} onChange={update} required />
            <textarea name="message" rows="5" placeholder="Your message" value={form.message} onChange={update} required />
            <button type="submit" className="primary-btn">
              Send Message <Send size={16} />
            </button>
          </form>
        )}
      </div>
    </section>
  );
}

export default Contact;