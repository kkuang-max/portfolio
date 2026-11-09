import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BlockView } from "../../components/CaseBlocks";
import { projects } from "../../content";
import { caseStudies } from "../caseStudies";

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const p = projects.find((x) => x.slug === slug);
  return p ? { title: `${p.title} — Katherine Kuang`, description: p.summary } : {};
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const index = projects.findIndex((x) => x.slug === slug);
  const study = caseStudies[slug];
  if (index < 0 || !study) notFound();
  const p = projects[index];
  const next = projects[(index + 1) % projects.length];
  const others = projects.filter((x) => x.slug !== slug);

  return (
    <article className="case-study">
      <header className="cs-header wrap">
        <Link href="/#work" className="cs-back">
          ← All work
        </Link>
        <span className="mono cs-kicker">
          {p.num} — {p.category}
        </span>
        <h1 className="cs-title">{p.title}</h1>
        <p className="cs-summary">{p.summary}</p>
      </header>

      <div className="wrap">
        <figure className="cs-hero">
          <Image src={study.hero.src} alt={study.hero.alt} width={study.hero.w} height={study.hero.h} priority sizes="(max-width: 1360px) 100vw, 1280px" />
        </figure>
      </div>

      <div className="cs-body wrap">
        {study.blocks.map((b, i) => (
          <BlockView key={i} block={b} />
        ))}
      </div>

      <section className="section wrap cs-more">
        <div className="cs-next">
          <span className="mono">Next case study</span>
          <Link href={next.href} className="cs-next-link">
            {next.title} →
          </Link>
        </div>
        <div className="cs-more-grid">
          {others.map((o) => (
            <Link key={o.slug} href={o.href} className="cs-more-card">
              <span className="cs-more-img">
                <Image src={o.image} alt="" width={800} height={600} sizes="(max-width: 768px) 100vw, 420px" />
              </span>
              <span className="mono">{o.category}</span>
              <span className="cs-more-title">{o.title}</span>
            </Link>
          ))}
        </div>
      </section>
    </article>
  );
}
