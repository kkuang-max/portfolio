import Image from "next/image";
import type { Block, Col, TextItem } from "../work/caseStudies";

/** Content comes from our own converted JSON (only strong/em/a/br tags). */
const html = (s: string) => ({ __html: s });

function Text({ item }: { item: TextItem }) {
  switch (item.t) {
    case "ul":
    case "ol": {
      const List = item.t;
      return (
        <List className="cs-list">
          {item.items.map((li, i) => (
            <li key={i} dangerouslySetInnerHTML={html(li)} />
          ))}
        </List>
      );
    }
    case "h3":
      return <p className="cs-eyebrow" dangerouslySetInnerHTML={html(item.html)} />;
    case "h1":
      return <h2 className="cs-headline" dangerouslySetInnerHTML={html(item.html)} />;
    case "h2":
      return <h3 className="cs-subhead" dangerouslySetInnerHTML={html(item.html)} />;
    case "h4":
      return <h4 className="cs-subhead" dangerouslySetInnerHTML={html(item.html)} />;
    case "blockquote":
      return <blockquote className="cs-quote" dangerouslySetInnerHTML={html(item.html)} />;
    default:
      return <p className="cs-text" dangerouslySetInnerHTML={html(item.html)} />;
  }
}

function hasContent(b: Block): boolean {
  if (b.t === "row") return b.cols.some((c) => c.kids.some(hasContent));
  return true;
}

function ColView({ col }: { col: Col }) {
  const empty = !col.kids.some(hasContent);
  return (
    <div className={empty ? "cs-col cs-col-empty" : "cs-col"} style={{ gridColumn: `span ${col.span}` }}>
      {col.kids.map((k, i) => (
        <BlockView key={i} block={k} />
      ))}
    </div>
  );
}

export function BlockView({ block }: { block: Block }) {
  switch (block.t) {
    case "row": {
      if (!hasContent(block)) return null;
      const total = block.cols.reduce((n, c) => n + c.span, 0) || 12;
      return (
        <div className="cs-row" style={{ gridTemplateColumns: `repeat(${total}, minmax(0, 1fr))` }}>
          {block.cols.map((c, i) => (
            <ColView key={i} col={c} />
          ))}
        </div>
      );
    }
    case "hr":
      return <hr className="cs-rule" />;
    case "html":
      return (
        <div className="cs-html">
          {block.items.map((it, i) => (
            <Text key={i} item={it} />
          ))}
        </div>
      );
    case "image": {
      const gif = block.src.endsWith(".gif");
      return (
        <figure className={block.dark ? "cs-figure cs-figure-dark" : "cs-figure"}>
          <Image
            src={block.src}
            alt={block.alt}
            width={block.w}
            height={block.h}
            unoptimized={gif}
            sizes="(max-width: 768px) 100vw, 1200px"
            className="cs-img"
          />
          {block.caption && <figcaption>{block.caption}</figcaption>}
        </figure>
      );
    }
    case "embed":
      return (
        <div className="cs-embed">
          <iframe src={block.src} title="Interactive Figma prototype" loading="lazy" allowFullScreen />
        </div>
      );
    case "video":
      return (
        <div className="cs-video" style={{ aspectRatio: `${block.w} / ${block.h}` }}>
          <video src={block.src} poster={block.poster} controls playsInline preload="none" />
        </div>
      );
  }
}
