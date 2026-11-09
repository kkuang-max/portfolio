import Image from "next/image";
import Link from "next/link";
import Hero from "./components/Hero";
import SectionHead from "./components/SectionHead";
import { projects } from "./content";

export default function Home() {
  return (
    <>
      <Hero />

      <section id="work" className="section wrap">
        <SectionHead title="My work" />
        <div className="work-grid">
          {projects.map((p, i) => (
            <Link key={p.num} id={`project-${p.num}`} className="work-card" href={p.href}>
              <div className="work-tile">
                <Image src={p.image} alt={`${p.title} cover`} fill sizes="(max-width: 768px) 100vw, 640px" priority={i < 2} />
              </div>
              <div className="work-body">
                <span className="mono work-meta">{p.category}</span>
                <h3>{p.title}</h3>
                <p>{p.summary}</p>
                <span className="work-link">View case study →</span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
