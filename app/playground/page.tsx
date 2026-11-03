import type { Metadata } from "next";
import SectionHead from "../components/SectionHead";
import { playground } from "../content";

export const metadata: Metadata = { title: "Playground — Katherine Kuang" };

export default function PlaygroundPage() {
  return (
    <section className="section page-top wrap">
      <SectionHead title="Playground" as="h1" />
      <p className="page-intro">{playground.intro}</p>
      <div className="gallery">
        {playground.items.map((it) => (
          <figure key={it.src} className="gallery-item">
            {/* eslint-disable-next-line @next/next/no-img-element -- hotlinked from the current site */}
            <img src={it.src} alt={it.alt} width={it.width} height={it.height} loading="lazy" />
          </figure>
        ))}
      </div>
    </section>
  );
}
