import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import {
  Button,
  Closing,
  Eyebrow,
  PageIntro,
  SectionHeading,
} from "@/components/ui";
import { founder } from "@/content/founder";
import { manifesto } from "@/content/manifesto";
import { capabilities } from "@/content/product";
import { pageMeta, site } from "@/content/site";

export function generateStaticParams() {
  return Object.keys(pageMeta).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const meta = pageMeta[slug];
  return meta
    ? {
        title: meta.title,
        description: meta.description,
        alternates: { canonical: `/${slug}` },
        openGraph: {
          title: `${meta.title} | CORE`,
          description: meta.description,
        },
        twitter: {
          title: `${meta.title} | CORE`,
          description: meta.description,
        },
      }
    : {};
}

export default async function Subpage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  if (!pageMeta[slug]) notFound();
  switch (slug) {
    case "world":
      return (
        <>
          <PageIntro
            index="02"
            eyebrow="THE FIRST PRODUCT"
            title="CORE World"
            lead="An interactive Earth for understanding real-world challenges. CORE World is the first practical expression of CORE’s broader vision."
          />
          <section className="section panel-section">
            <div className="wrap world-hero-grid">
              <div>
                <Eyebrow>EXPLORE THE WORLD AS IT IS</Eyebrow>
                <h2>A place to connect what we know with what we might do.</h2>
                <p>
                  CORE World brings geographic context, public information,
                  investigations, and exploratory scenarios into a single
                  spatial experience. It begins with urban questions in San
                  Francisco. The product is real and evolving; many parts of the
                  larger vision remain ahead.
                </p>
                <Button href={site.productUrl} external>
                  Launch CORE World
                </Button>
              </div>
              <figure className="world-image">
                <Image
                  src="/images/core-product.png"
                  width={1440}
                  height={900}
                  alt="Actual CORE World prototype homepage and its digital Earth introduction"
                  unoptimized
                />
                <figcaption>
                  Actual public prototype, captured October 24, 2026. Interface
                  shown in French.
                </figcaption>
              </figure>
            </div>
          </section>
          <section className="section">
            <div className="wrap">
              <SectionHeading
                eyebrow="THE EXPERIENCE"
                title="From exploration to informed judgment."
              />
              <div className="world-steps">
                {[
                  [
                    "01",
                    "Explore",
                    "Navigate a digital representation of the physical world and understand a place in context.",
                  ],
                  [
                    "02",
                    "Investigate",
                    "Connect authorized public datasets, contextual information, and bounded analysis around a question.",
                  ],
                  [
                    "03",
                    "Simulate",
                    "Compare possible interventions through exploratory models with declared assumptions.",
                  ],
                  [
                    "04",
                    "Review",
                    "Examine the methods, evidence, limitations, and uncertainty before drawing conclusions.",
                  ],
                  [
                    "05",
                    "Participate",
                    "The long-term direction invites local knowledge, ideas, evidence, and criticism through transparent human review.",
                  ],
                ].map(([n, title, text]) => (
                  <article key={n}>
                    <span>{n}</span>
                    <h3>{title}</h3>
                    <p>{text}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>
          <section className="section panel-section">
            <div className="wrap">
              <SectionHeading
                eyebrow="WHAT EXISTS TODAY"
                title="Useful beginnings. Visible limits."
                text="The current prototype demonstrates parts of the approach. It is not a calibrated digital twin or a deployed decision system."
              />
              <div className="capability-grid">
                {capabilities.map((item) => (
                  <div className="capability" key={item.title}>
                    <span className="status">{item.status}</span>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>
                ))}
              </div>
              <p className="status-note">
                Recorded traffic scenarios use synthetic demand and uncalibrated
                models. Modeled improvements have not been verified in the real
                world. Human review remains essential, and CORE World does not
                authorize changes to physical infrastructure.
              </p>
            </div>
          </section>
          <Closing
            title="Explore CORE World as it exists today."
            text="See the prototype, follow the evidence, and judge its limits for yourself."
            href={site.productUrl}
            label="Launch CORE World"
          />
        </>
      );

    case "vision":
      return (
        <>
          <PageIntro
            index="03"
            eyebrow="VISION & MANIFESTO"
            title="A shared intelligence for a shared planet."
            lead="CORE exists because our ability to collect information has outpaced our ability to connect it, question it, and use it together."
          />
          <section className="manifesto-opening wrap">
            <p>
              Humanity has extraordinary tools for observing and measuring the
              world. Yet knowledge about cities, infrastructure, energy,
              communities, and the environment remains divided across systems
              and institutions.
            </p>
            <p>
              The challenges themselves are interconnected. We need better ways
              to see those connections, explore possibilities, and bring more
              people into the work of understanding them.
            </p>
          </section>
          <section className="section panel-section">
            <div className="wrap split">
              <SectionHeading
                eyebrow="THE LONG VIEW"
                title="Infrastructure for understanding, not authority over the future."
              />
              <div className="body-copy">
                <p>
                  CORE aims to become a shared intelligence layer for the
                  physical world: a place to connect evidence, investigate
                  alternatives, and make complex questions more accessible.
                </p>
                <p>
                  It is not an algorithm that should dictate humanity’s future
                  or replace human judgment. In the long term, millions of
                  people could participate by contributing observations,
                  proposals, local experience, and criticism. That is an
                  ambition, not a current user count.
                </p>
                <p>
                  CORE World is the practical first step. A global
                  collective-intelligence platform has not yet been built.
                </p>
              </div>
            </div>
          </section>
          <section className="section">
            <div className="wrap">
              <SectionHeading
                eyebrow="THE MANIFESTO"
                title="Twelve principles for what comes next."
              />
              <div className="manifesto-list">
                {manifesto.map(([title, text], i) => (
                  <article key={title}>
                    <span>{String(i + 1).padStart(2, "0")}</span>
                    <div>
                      <h2>{title}</h2>
                      <p>{text}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>
          <section className="section panel-section">
            <div className="wrap split">
              <SectionHeading
                eyebrow="WHAT SUCCESS WOULD MEAN"
                title="From a local question to shared progress."
              />
              <div className="body-copy">
                <p>
                  Imagine someone identifying a challenge in their neighborhood,
                  adding what they know, examining the available evidence,
                  comparing possible responses, and seeing how ideas are
                  reviewed.
                </p>
                <p>
                  Imagine researchers, communities, organizations, and public
                  institutions working from better-connected information. The
                  measure of success would be what improves in the real world —
                  not how persuasive a simulation looks.
                </p>
                <p>
                  These are future objectives. They are not claims of present
                  deployment or impact.
                </p>
              </div>
            </div>
          </section>
          <section className="section">
            <div className="wrap split">
              <SectionHeading
                eyebrow="RESPONSIBILITY"
                title="Intelligence needs boundaries."
              />
              <div className="body-copy">
                <p>
                  CORE’s approach starts with authorized data, traceable
                  sources, transparent methods, and visible scientific
                  uncertainty. AI-assisted workflows should remain bounded and
                  reviewable. No model result should masquerade as observed
                  fact.
                </p>
                <p>
                  As participation grows, privacy and safeguards against
                  manipulation must grow with it. CORE World does not
                  autonomously intervene in the physical world; actions
                  affecting people require appropriate authorization and human
                  oversight.
                </p>
              </div>
            </div>
          </section>
          <Closing
            title="A better future begins with better understanding."
            href={site.productUrl}
            label="Explore CORE World"
          />
        </>
      );

    case "founder":
      return (
        <>
          <section className="founder-hero wrap">
            <div>
              <div className="page-index">04 / CORE</div>
              <Eyebrow>VINCENT LEGUIDE · FOUNDER OF CORE</Eyebrow>
              <h1>
                From the infrastructure behind computing to intelligence for the
                world around us.
              </h1>
              <p className="lead">{founder.intro}</p>
              <div className="founder-location">
                BASED IN THE SAN FRANCISCO BAY AREA
              </div>
            </div>
            <div className="portrait-frame portrait-founder">
              <Image
                src="/images/vincent-leguide.jpg"
                width={1122}
                height={1402}
                alt="Vincent Leguide, founder of CORE"
                unoptimized
                priority
              />
              <span>VINCENT LEGUIDE / FOUNDER OF CORE</span>
            </div>
          </section>
          <section className="section panel-section">
            <div className="wrap founder-story">
              <Eyebrow>THE STORY</Eyebrow>
              <h2>Technology meets the physical world.</h2>
              <p>
                Vincent’s professional path began in France, where technology
                was never only software. His work touched product design,
                marketing, data centers, cooling, heat recovery, and the energy
                demands of computing. It showed him how even the most advanced
                digital systems depend on materials, infrastructure, and
                real-world constraints.
              </p>
              <p>
                Since moving to the Bay Area in August 2025, he has continued to
                work where technology and practical operations meet. Living in
                Silicon Valley brought a wider question into focus: why are we
                building such powerful computational tools while so many
                physical systems remain difficult to understand as a whole?
              </p>
            </div>
          </section>
          <section className="section">
            <div className="wrap chapter-list">
              {founder.chapters.map(([title, text], i) => (
                <article key={title}>
                  <span>{String(i + 3).padStart(2, "0")}</span>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              ))}
            </div>
          </section>
          <section className="section panel-section">
            <div className="wrap founder-statement">
              <Eyebrow>A PERSONAL NOTE</Eyebrow>
              <blockquote>
                “I started CORE because I believe the next generation of
                technology should help us understand not only what happens on
                our screens, but what happens in the world around us.”
              </blockquote>
              <p>Vincent Leguide · Founder of CORE</p>
            </div>
          </section>
          <Closing
            title="The work begins with a world we can explore."
            href={site.productUrl}
            label="Explore CORE World"
          />
        </>
      );

    case "contact":
      return (
        <>
          <PageIntro
            index="05"
            eyebrow="CONTACT"
            title="Start with the work."
            lead="A public contact address has not yet been verified. Until one is published, explore CORE World and the public project repository."
          />
          <section className="section">
            <div className="wrap contact-grid">
              <div>
                <h2>Explore and examine.</h2>
                <p>
                  CORE welcomes thoughtful research feedback, local knowledge,
                  technical ideas, and criticism. This page has no message form
                  because there is no approved destination; it does not discard
                  submissions.
                </p>
                <div className="actions">
                  <Button href={site.productUrl} external>
                    Explore CORE World
                  </Button>
                  <Button
                    href="https://github.com/vincentleg/core-hq"
                    external
                    secondary
                  >
                    View repository
                  </Button>
                </div>
              </div>
              <div className="note-box">
                <strong>Direct contact pending</strong>
                <p>
                  A verified public address can be added when Vincent approves
                  it.
                </p>
              </div>
            </div>
          </section>
        </>
      );

    case "privacy":
      return (
        <>
          <PageIntro
            index="06"
            eyebrow="PRIVACY"
            title="A quiet website by design."
            lead="This notice describes the CORE website as implemented. It is a practical draft for founder review, not a substitute for legal advice."
          />
          <section className="section">
            <div className="wrap legal-copy">
              <h2>What this site collects</h2>
              <p>
                This static site has no user accounts, analytics scripts,
                advertising pixels, tracking cookies, or contact form. It does
                not ask you to submit personal information.
              </p>
              <h2>Hosting and server logs</h2>
              <p>
                This site is hosted on Vercel. Vercel may process your IP
                address, browser details, and request logs to deliver and secure
                pages. Its retention and privacy practices are governed by
                Vercel’s published policies.
              </p>
              <h2>External links</h2>
              <p>
                Links to CORE World and GitHub take you to separate services
                with their own privacy practices. Opening those links is your
                choice.
              </p>
              <h2>Updates</h2>
              <p>
                A public contact destination and responsible legal identity are
                pending founder verification. This notice should be updated if
                hosting, analytics, forms, or other data processing changes.
              </p>
            </div>
          </section>
        </>
      );

    case "terms":
      return (
        <>
          <PageIntro
            index="07"
            eyebrow="WEBSITE USE — DRAFT"
            title="A straightforward note about this website."
            lead="This page is a plain-language draft for founder and legal review. It is not represented as a legally reviewed agreement."
          />
          <section className="section">
            <div className="wrap legal-copy">
              <h2>Purpose</h2>
              <p>
                This website introduces CORE and links to CORE World.
                Descriptions of future capabilities are intentions, not offers
                of a deployed service.
              </p>
              <h2>Accuracy and limits</h2>
              <p>
                We aim to describe the prototype accurately, but information may
                change. Exploratory analyses and simulations are not
                professional advice or predictions of real-world outcomes.
              </p>
              <h2>Content and links</h2>
              <p>
                CORE names and original visual materials are presented for
                identification. Third-party sources and linked websites retain
                their own rights and terms. Public visibility does not grant a
                software license.
              </p>
              <h2>Review pending</h2>
              <p>
                The founder should verify legal identity, contact details,
                applicable law, intellectual property wording, and any required
                notices. No jurisdiction or registered company status is
                asserted here.
              </p>
            </div>
          </section>
        </>
      );
  }
}
