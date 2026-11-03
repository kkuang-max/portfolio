import Image from "next/image";
import Link from "next/link";
import { site } from "../content";

export default function SiteHeader() {
  return (
    <header className="site-header wrap">
      <Link href="/" className="brand">
        <Image src="/logo.png" alt="" width={40} height={40} priority className="brand-logo" />
        {site.name}
      </Link>
      <nav aria-label="Primary" className="nav">
        <Link href="/#work">Work</Link>
        <Link href="/about">About</Link>
        <Link href="/playground">Playground</Link>
        <Link href="/resume">Resume</Link>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}
