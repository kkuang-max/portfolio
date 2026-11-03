import Hero from "./components/Hero";
import ProjectIcon from "./components/ProjectIcon";
import SectionHead from "./components/SectionHead";
import { projects } from "./content";

export default function Home() {
  return (
    <>
      <Hero />

      <section id="work" className="section wrap">
        <SectionHead title="Selected work" />
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
    </>
  );
}
