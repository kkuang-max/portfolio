import type { Metadata } from "next";
import SectionHead from "../components/SectionHead";
import { resume, site } from "../content";

export const metadata: Metadata = { title: "Resume — Katherine Kuang" };

type Entry = (typeof resume.experience)[number];

function Entries({ items }: { items: Entry[] }) {
  return (
    <div className="entries">
      {items.map((e) => (
        <article key={e.role + e.org + e.date} className="entry">
          <div className="entry-head">
            <h3>
              {e.role} <span className="entry-org">/ {e.org}</span>
            </h3>
            <span className="mono">
              {e.date} · {e.place}
            </span>
          </div>
          <ul>
            {e.points.map((pt) => (
              <li key={pt}>{pt}</li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  );
}

function Tags({ label, items }: { label: string; items: string[] }) {
  return (
    <div className="resume-block">
      <h2 className="resume-label mono">{label}</h2>
      <ul className="tags">
        {items.map((t) => (
          <li key={t}>{t}</li>
        ))}
      </ul>
    </div>
  );
}

export default function ResumePage() {
  return (
    <section className="section page-top wrap">
      <SectionHead title="Resume" as="h1" />
      <div className="resume-actions">
        <a className="pill" href={site.resumePdf} download>
          Download PDF
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" aria-hidden="true">
            <path d="M12 5v14M6 13l6 6 6-6" />
          </svg>
        </a>
      </div>

      <div className="resume-grid">
        <aside className="resume-side">
          <div className="resume-block">
            <h2 className="resume-label mono">Education</h2>
            {resume.education.map((ed) => (
              <div key={ed.school} className="edu">
                <strong>{ed.school}</strong>
                <span>{ed.degree}</span>
                <span className="mono">
                  {ed.date} · {ed.place}
                </span>
              </div>
            ))}
          </div>
          <Tags label="Skills" items={resume.skills} />
          <Tags label="Tools" items={resume.tools} />
          <Tags label="Languages" items={resume.languages} />
        </aside>

        <div className="resume-main">
          <div className="resume-block">
            <h2 className="resume-label mono">Professional experience</h2>
            <Entries items={resume.experience} />
          </div>
          <div className="resume-block">
            <h2 className="resume-label mono">Projects</h2>
            <Entries items={resume.projects} />
          </div>
        </div>
      </div>
    </section>
  );
}
