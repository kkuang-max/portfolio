import dish from "./content/dish.json";
import echokids from "./content/echokids.json";
import gm from "./content/gm-digital-marketplace.json";
import localLens from "./content/local-lens.json";

/**
 * Case study layouts, converted from the original Squarespace pages.
 * Rows and columns mirror the original 12-column grid; `span` is the
 * number of grid columns a column takes up within its row.
 */
export type TextItem =
  | { t: "h1" | "h2" | "h3" | "h4" | "p" | "blockquote"; html: string }
  | { t: "ul" | "ol"; items: string[] };

export type Block =
  | { t: "row"; cols: Col[] }
  | { t: "hr" }
  | { t: "html"; items: TextItem[] }
  | { t: "image"; src: string; w: number; h: number; alt: string; caption?: string; dark?: boolean }
  | { t: "embed"; src: string }
  | { t: "video"; src: string; poster: string; w: number; h: number };

export type Col = { t: "col"; span: number; kids: Block[] };

export type CaseStudy = {
  hero: { src: string; w: number; h: number; alt: string };
  blocks: Block[];
};

export const caseStudies: Record<string, CaseStudy> = {
  dish: dish as CaseStudy,
  "gm-digital-marketplace": gm as CaseStudy,
  "local-lens": localLens as CaseStudy,
  echokids: echokids as CaseStudy,
};
