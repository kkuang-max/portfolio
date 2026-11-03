import type { Metadata } from "next";
import SectionHead from "../components/SectionHead";
import { about, site } from "../content";

export const metadata: Metadata = { title: "About — Katherine Kuang" };

export default function AboutPage() {
  return (
    <section className="section page-top wrap">
      <SectionHead title="About me" as="h1" />
      <div className="about-grid">
        <div className="about-copy">
          {about.paragraphs.map((t) => (
            <p key={t}>{t}</p>
          ))}
        </div>
        <div className="about-side">
          <figure className="photo">
            {/* eslint-disable-next-line @next/next/no-img-element -- hotlinked from the current site */}
            <img src={site.photo} alt="Katherine Kuang" />
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
  );
}
