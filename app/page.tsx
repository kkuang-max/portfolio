import Hero from "./components/Hero";
import ProjectIcon from "./components/ProjectIcon";
import { about, process, projects, site } from "./content";

export default function Home() {
  return (
    <div className="page">
      <header className="site-header wrap">
        <a href="#top" className="brand">
          <span className="dot dot-lg" />
          {site.name}
        </a>
        <nav aria-label="Primary" className="nav">
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="#process">Process</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main>
        <Hero />

        <section id="work" className="section wrap">
          <SectionHead index="A" title="Selected work" note={`${projects.length} case studies`} />
          <div className="work-grid">
            {projects.map((p) => (
              <a key={p.num} id={`project-${p.num}`} className="work-card" href={p.href} target="_blank" rel="noreferrer">
                <div className="card-tile work-tile">
                  {/* eslint-disable-next-line @next/next/no-img-element -- hotlinked from the current site */}
                  <img src={p.image} alt={`${p.title} cover`} loading="lazy" />
                  <span className="work-icon">
                    <ProjectIcon icon={p.icon} />
                  </span>
                </div>
                <div className="work-body">
                  <span className="mono">
                    {p.num} — {p.surface}
                  </span>
                  <h3>{p.title}</h3>
                  <p>{p.summary}</p>
                  <span className="mono work-meta">{p.meta}</span>
                  <span className="work-link">Read case study ↗</span>
                </div>
              </a>
            ))}
          </div>
        </section>

        <section id="about" className="section wrap">
          <SectionHead index="B" title="About" />
          <div className="about-grid">
            <div className="about-copy">
              {about.paragraphs.map((t) => (
                <p key={t}>{t}</p>
              ))}
            </div>
            <div className="about-side">
              <figure className="photo">
                {/* eslint-disable-next-line @next/next/no-img-element -- hotlinked from the current site */}
                <img src={site.photo} alt="Katherine Kuang" loading="lazy" />
              </figure>
              <dl className="facts">
                {about.facts.map((f) => (
                  <div key={f.value} className="fact">
                    <dt className="mono">{f.label}</dt>
                    <dd>
                      {f.href ? (
                        <a href={f.href} target="_blank" rel="noreferrer">
                          {f.value} ↗
                        </a>
                      ) : (
                        f.value
                      )}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <div className="offscreen">
            <span className="mono">Off-screen</span>
            <ul>
              {about.offScreen.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </div>
        </section>

        <section id="process" className="section wrap">
          <SectionHead index="C" title="Process" />
          <ol className="process">
            {process.map((s) => (
              <li key={s.num}>
                <span className="mono">{s.num}</span>
                <h3>{s.title}</h3>
                <p>{s.body}</p>
              </li>
            ))}
          </ol>
        </section>

        <section id="contact" className="section wrap contact">
          <SectionHead index="D" title="Contact" />
          <p className="contact-line">
            Have a problem worth making <em>mine</em>? Let’s talk.
          </p>
          <div className="contact-links">
            <a className="pill" href={`mailto:${site.email}`}>
              {site.email}
            </a>
            <a className="pill" href={site.linkedin} target="_blank" rel="noreferrer">
              LinkedIn ↗
            </a>
            <a className="pill" href={site.resume} target="_blank" rel="noreferrer">
              Resume ↗
            </a>
            <a className="pill" href={site.playground} target="_blank" rel="noreferrer">
              Playground ↗
            </a>
          </div>
        </section>
      </main>

      <footer className="wrap">
        <div className="site-footer">
        <span>
          © {new Date().getFullYear()} {site.name}
        </span>
        <a href="#top">Back to top ↑</a>
        </div>
      </footer>
    </div>
  );
}

function SectionHead({ index, title, note }: { index: string; title: string; note?: string }) {
  return (
    <div className="section-head">
      <span className="mono">{index}</span>
      <h2>{title}</h2>
      {note && <span className="mono section-note">{note}</span>}
    </div>
  );
}
