import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";

export function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="eyebrow">
      <span className="eyebrow-dot" />
      {children}
    </p>
  );
}
export function Button({
  href,
  children,
  secondary = false,
  external = false,
}: {
  href: string;
  children: React.ReactNode;
  secondary?: boolean;
  external?: boolean;
}) {
  const cls = `button ${secondary ? "button-secondary" : "button-primary"}`;
  return external ? (
    <a className={cls} href={href} target="_blank" rel="noopener noreferrer">
      {children}
      <ArrowUpRight size={17} aria-hidden="true" />
    </a>
  ) : (
    <Link className={cls} href={href}>
      {children}
      <ArrowRight size={17} aria-hidden="true" />
    </Link>
  );
}
export function PageIntro({
  index,
  eyebrow,
  title,
  lead,
}: {
  index: string;
  eyebrow: string;
  title: string;
  lead: string;
}) {
  return (
    <section className="page-intro wrap">
      <div className="page-index">{index} / CORE</div>
      <Eyebrow>{eyebrow}</Eyebrow>
      <h1>{title}</h1>
      <p className="lead">{lead}</p>
    </section>
  );
}
export function SectionHeading({
  eyebrow,
  title,
  text,
}: {
  eyebrow: string;
  title: string;
  text?: string;
}) {
  return (
    <div className="section-heading">
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </div>
  );
}
export function Closing({
  title,
  text,
  href = "/contact",
  label = "Get in touch",
}: {
  title: string;
  text?: string;
  href?: string;
  label?: string;
}) {
  return (
    <section className="closing">
      <div className="wrap closing-inner">
        <Eyebrow>THE WORK AHEAD</Eyebrow>
        <h2>{title}</h2>
        {text && <p>{text}</p>}
        <Button href={href} external={href.startsWith("http")}>
          {label}
        </Button>
      </div>
    </section>
  );
}
