import { site } from "../content";
import SectionHead from "./SectionHead";

export default function SiteFooter() {
  return (
    <footer>
      <section id="contact" className="section wrap contact">
        <SectionHead title="Contact" />
        <div className="contact-links">
          <a className="pill" href={`mailto:${site.email}`}>
            {site.email}
          </a>
          <a className="pill" href={site.linkedin} target="_blank" rel="noreferrer">
            LinkedIn ↗
          </a>
        </div>
      </section>
      <div className="wrap">
        <div className="site-footer">
          <span>
            © {new Date().getFullYear()} {site.name}
          </span>
          <a href="#top-of-page">Back to top ↑</a>
        </div>
      </div>
    </footer>
  );
}
