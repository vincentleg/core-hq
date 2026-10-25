import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowUpRight } from "lucide-react";
import {
  Button,
  Closing,
  Eyebrow,
  PageIntro,
  SectionHeading,
} from "@/components/ui";
import { directions, principles } from "@/content/company";
import { founder } from "@/content/founder";
import { manifesto } from "@/content/manifesto";
import { capabilities, productSteps } from "@/content/product";
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
        openGraph: {
          title: `${meta.title} | CORE HQ`,
          description: meta.description,
        },
        twitter: {
          title: `${meta.title} | CORE HQ`,
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
    case "company":
      return (
        <>
          <PageIntro
            index="01"
            eyebrow="THE COMPANY"
            title="A company for a more intelligible world."
            lead="CORE HQ is an early-stage, founder-led technology venture. We build practical tools toward a long-term goal: helping people understand complex physical-world systems and make better-informed decisions."
          />
          <section className="section">
            <div className="wrap editorial-grid">
              <SectionHeading
                eyebrow="OUR MISSION"
                title="Make the world easier to understand — and its future easier to shape responsibly."
              />
              <div className="body-copy">
                <p>
                  Important decisions are often made with fragmented evidence. A
                  street project affects mobility, access, local business,
                  public resources, and the environment. Each perspective may
                  live in a different dataset or organization.
                </p>
                <p>
                  We believe technology can connect these perspectives without
                  flattening their complexity. CORE is our first step: a spatial
                  environment for looking at places, evidence, scenarios, and
                  the human judgment that must follow.
                </p>
              </div>
            </div>
          </section>
          <section className="section panel-section">
            <div className="wrap">
              <div className="two-col">
                <div>
                  <Eyebrow>WHY NOW</Eyebrow>
                  <h2>We have more data than shared context.</h2>
                </div>
                <div className="body-copy">
                  <p>
                    Public data, geospatial interfaces, simulation methods, and
                    AI tools have become more accessible. Their value depends on
                    how carefully we connect them, communicate uncertainty, and
                    keep decisions accountable.
                  </p>
                  <p>
                    The opportunity is to build an interface between knowledge
                    and action — one that invites scrutiny and improves through
                    real use.
                  </p>
                </div>
              </div>
              <div className="feature-list">
                <div>
                  <span>01 / TODAY</span>
                  <h3>Build and test CORE</h3>
                  <p>
                    Start in San Francisco with a real prototype and honest
                    limits. Investigations and scenario tools are experimental;
                    no real-world benefit has been validated.
                  </p>
                </div>
                <div>
                  <span>02 / NEXT</span>
                  <h3>Learn with others</h3>
                  <p>
                    Seek researchers, practitioners, communities, and
                    institutions willing to examine the approach and challenge
                    its assumptions.
                  </p>
                </div>
                <div>
                  <span>03 / LONG TERM</span>
                  <h3>Extend the method</h3>
                  <p>
                    Apply proven methods across more cities and domains, from
                    infrastructure and energy to environmental resilience.
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section className="section">
            <div className="wrap">
              <SectionHeading
                eyebrow="OPERATING PRINCIPLES"
                title="Ambition needs a method."
              />
              <div className="principle-row">
                {principles.map(([n, title, text]) => (
                  <div key={n}>
                    <span>{n}</span>
                    <h3>{title}</h3>
                    <p>{text}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
          <Closing
            title="The company behind CORE is just beginning."
            text="See the product in its current form, and help us make the next steps more rigorous."
            href={site.productUrl}
            label="Explore CORE"
          />
        </>
      );
    case "core":
      return (
        <>
          <PageIntro
            index="02"
            eyebrow="OUR FIRST PRODUCT"
            title="Meet CORE. Our first step toward a more intelligent world."
            lead="CORE — Creation of Reborn Earth — is an early digital Earth prototype for exploring real places, public evidence, bounded investigations, and modeled possibilities."
          />
          <section className="section panel-section">
            <div className="wrap product-detail">
              <div>
                <Eyebrow>THE EXPERIENCE</Eyebrow>
                <h2>Explore the real world. Question a possible one.</h2>
                <p>
                  CORE brings geographic context and city information into one
                  spatial experience. It starts with San Francisco and includes
                  public-data-based investigations, scenario comparisons, and
                  review workflows.
                </p>
                <div className="actions">
                  <Button href={site.productUrl} external>
                    Open CORE
                  </Button>
                </div>
              </div>
              <div className="product-detail-art">
                <Image
                  src="/brand/core-wordmark.svg"
                  width={360}
                  height={100}
                  alt="CORE product wordmark"
                  unoptimized
                />
                <div className="detail-grid">
                  <span>REAL WORLD</span>
                  <span>PARALLEL WORLD</span>
                  <span>HUMAN REVIEW</span>
                </div>
              </div>
            </div>
            <figure className="product-screenshot">
              <Image
                src="/images/core-product.png"
                width={1440}
                height={900}
                alt="Screenshot of the public CORE prototype homepage, showing its navigation and product introduction"
                unoptimized
              />
              <figcaption>
                Actual CORE prototype homepage captured October 24, 2026. The
                interface shown here is in French; product content and status
                may change.
              </figcaption>
            </figure>
          </section>
          <section className="section">
            <div className="wrap">
              <SectionHeading
                eyebrow="HOW IT WORKS"
                title="From a place to a better question."
              />
              <div className="steps">
                {productSteps.map((step) => (
                  <div className="step" key={step.number}>
                    <span>{step.number}</span>
                    <h3>{step.title}</h3>
                    <p>{step.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
          <section className="section panel-section">
            <div className="wrap">
              <SectionHeading
                eyebrow="PRODUCT STATUS"
                title="A clear view of what exists."
                text="This is a prototype, not a calibrated digital twin or a deployed city decision system."
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
            </div>
          </section>
          <section className="section">
            <div className="wrap split">
              <SectionHeading
                eyebrow="WHAT COMES NEXT"
                title="Built for people and institutions."
              />
              <div className="direction-list">
                {directions.map((item) => (
                  <div key={item.name}>
                    <h3>
                      {item.name} <span>{item.status}</span>
                    </h3>
                    <p>{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
          <Closing
            title="See the prototype for yourself."
            text="The real product is the best way to understand what CORE can show today — and where it remains experimental."
            href={site.productUrl}
            label="Open CORE"
          />
        </>
      );
    case "manifesto":
      return (
        <>
          <PageIntro
            index="03"
            eyebrow="A MANIFESTO"
            title="The future of Earth should be something we build together."
            lead="A statement of intent for technology that helps us understand more, decide with care, and remain answerable to one another."
          />
          <section className="manifesto-opening wrap">
            <p>
              Humanity has never known so much about its planet. We can observe
              patterns across cities, oceans, infrastructure, ecosystems, and
              economies. Yet knowing more has not automatically helped us think
              together.
            </p>
            <p>
              CORE HQ begins with a simple belief: the tools we use to
              understand the world should help people act with greater clarity,
              humility, and responsibility.
            </p>
          </section>
          <section className="manifesto-list wrap">
            {manifesto.map(([title, text], i) => (
              <article key={title}>
                <span>{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <h2>{title}</h2>
                  <p>{text}</p>
                </div>
              </article>
            ))}
          </section>
          <section className="manifesto-ending wrap">
            <Eyebrow>OUR COMMITMENT</Eyebrow>
            <h2>
              Build what can be examined. Improve what can be measured. Leave
              decisions with people.
            </h2>
            <p>
              CORE HQ exists to turn this philosophy into practical technology,
              beginning with CORE. The work is early, and the standard should
              remain high.
            </p>
          </section>
          <Closing
            title="The work starts in the real world."
            href={site.productUrl}
            label="Explore CORE"
          />
        </>
      );
    case "founder":
      return (
        <>
          <PageIntro
            index="04"
            eyebrow="THE FOUNDER"
            title="From computing infrastructure to intelligence for the physical world."
            lead="Vincent Leguide founded CORE HQ and created CORE to connect technical possibility with real-world understanding."
          />
          <section className="section">
            <div className="wrap founder-page-grid">
              <div
                className="founder-portrait"
                aria-label="Typographic portrait placeholder for Vincent Leguide"
              >
                <span>VL</span>
                <small>VINCENT LEGUIDE / FOUNDER</small>
              </div>
              <div>
                <Eyebrow>VINCENT LEGUIDE</Eyebrow>
                <h2>Build a better way to see what matters.</h2>
                <p className="large-copy">{founder.intro}</p>
                <div className="founder-facts">
                  <div>
                    <span>ROLE</span>
                    <strong>{founder.role}</strong>
                  </div>
                  <div>
                    <span>BASED IN</span>
                    <strong>{founder.location}</strong>
                  </div>
                  <div>
                    <span>PRODUCT</span>
                    <strong>Creator of CORE</strong>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="section panel-section">
            <div className="wrap">
              <SectionHeading
                eyebrow="THE PATH"
                title="A practical ambition, built step by step."
              />
              <div className="chapter-list">
                {founder.chapters.map(([title, text], i) => (
                  <article key={title}>
                    <span>{String(i + 1).padStart(2, "0")}</span>
                    <h3>{title}</h3>
                    <p>{text}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>
          <section className="section">
            <div className="wrap split">
              <SectionHeading
                eyebrow="PUBLIC WORK"
                title="The work is open to inspection."
              />
              <div className="body-copy">
                <p>
                  Explore the current CORE prototype and its public source
                  repository. A verified founder profile link can be added when
                  approved for publication.
                </p>
                <a
                  className="text-link"
                  href={site.productUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Explore CORE <ArrowUpRight size={17} />
                </a>
                <a
                  className="text-link"
                  href="https://github.com/vincentleg/core"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View CORE on GitHub <ArrowUpRight size={17} />
                </a>
              </div>
            </div>
          </section>
          <Closing
            title="Interested in the work ahead?"
            href="/contact"
            label="Contact CORE HQ"
          />
        </>
      );
    case "technology":
      return (
        <>
          <PageIntro
            index="05"
            eyebrow="TECHNOLOGY"
            title="An intelligence layer grounded in the world as it is."
            lead="Our technical direction brings spatial context, authorized data, bounded computation, and human review into one understandable workflow. The architecture is evolving; the complete vision is not yet delivered."
          />
          <section className="section">
            <div className="wrap tech-list">
              {[
                [
                  "01",
                  "A digital representation of the physical world",
                  "Geographic interfaces help place questions where they actually arise. CORE combines mapped context, public datasets, and spatial exploration, while marking approximations and incomplete coverage.",
                ],
                [
                  "02",
                  "Evidence-based intelligence",
                  "Useful conclusions need provenance. The prototype links investigations to dated sources, records assumptions and uncertainty, and uses reproducible calculations where possible.",
                ],
                [
                  "03",
                  "AI-assisted workflows",
                  "Local model-assisted workflows can use bounded tools and review gates. Public demonstrations may replay recorded work. AI output does not become evidence merely because a model produced it.",
                ],
                [
                  "04",
                  "Scenario exploration",
                  "Simulation can compare possibilities under stated assumptions. The current recorded traffic work uses synthetic demand and uncalibrated models, so its outputs are not predictions or measured benefits.",
                ],
                [
                  "05",
                  "Human decisions",
                  "CORE does not execute changes in the physical world. A person must review evidence, challenge assumptions, and remain accountable for any decision.",
                ],
                [
                  "06",
                  "Collective knowledge",
                  "The long-term design includes ways for people to contribute local knowledge, evidence, proposals, and criticism with privacy and abuse safeguards.",
                ],
                [
                  "07",
                  "An evolving architecture",
                  "The goal is to extend the approach across cities and domains only as methods, data rights, and real-world validation support it.",
                ],
              ].map(([n, title, text]) => (
                <article key={n}>
                  <span>{n}</span>
                  <div>
                    <h2>{title}</h2>
                    <p>{text}</p>
                  </div>
                </article>
              ))}
            </div>
          </section>
          <div className="wrap note-box">
            <strong>Experimental status</strong>
            <p>
              Several features are exploratory or incomplete. No calibrated
              digital twin, autonomous real-world intervention, or validated
              field improvement is claimed.
            </p>
          </div>
          <Closing
            title="See the current technology in context."
            href={site.productUrl}
            label="Open CORE"
          />
        </>
      );
    case "responsibility":
      return (
        <>
          <PageIntro
            index="06"
            eyebrow="RESPONSIBILITY"
            title="The strength of a system includes its limits."
            lead="CORE HQ is developing powerful tools for complex decisions. Their value depends on evidence, accountable people, and clear boundaries — now and as the platform develops."
          />
          <section className="section">
            <div className="wrap">
              <SectionHeading
                eyebrow="CURRENT PRACTICE"
                title="What the prototype is designed to do today."
              />
              <div className="capability-grid">
                {[
                  [
                    "Human oversight",
                    "Review gates require people to inspect conclusions; the system does not authorize real-world interventions.",
                  ],
                  [
                    "Traceable evidence",
                    "Investigations reference public records and distinguish observed facts, hypotheses, model outputs, and replayed work.",
                  ],
                  [
                    "Visible uncertainty",
                    "Uncalibrated simulations and synthetic inputs are labeled. Modeled effects are not presented as real outcomes.",
                  ],
                  [
                    "Bounded AI",
                    "Where model-assisted workflows are used, tools and outputs are constrained and checked. Public replay should not be mistaken for live autonomous work.",
                  ],
                  [
                    "Data and privacy",
                    "This company site collects no account data or analytics. Product data practices require separate, ongoing scrutiny.",
                  ],
                  [
                    "No human scoring",
                    "CORE is not intended to rank human worth, assign civic value to people, or make collective decisions on humanity’s behalf.",
                  ],
                ].map(([title, text]) => (
                  <div className="capability" key={title}>
                    <h3>{title}</h3>
                    <p>{text}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
          <section className="section panel-section">
            <div className="wrap split">
              <SectionHeading
                eyebrow="FUTURE COMMITMENTS"
                title="Participation requires stronger institutions, not just better software."
              />
              <div className="body-copy">
                <p>
                  As contribution tools mature, they will need provenance,
                  moderation, privacy controls, respect for contributor rights,
                  and safeguards against manipulation and misinformation.
                </p>
                <p>
                  Independent review and democratic accountability are goals for
                  any serious public-sector use. CORE HQ does not claim
                  independent audits, certifications, or institutional
                  authorization today.
                </p>
                <p>
                  We will not invent evidence to make a narrative compelling.
                  When a method fails or data is missing, the system should say
                  so.
                </p>
              </div>
            </div>
          </section>
          <Closing
            title="Trust is a practice, not a promise."
            href="/technology"
            label="Explore our approach"
          />
        </>
      );
    case "contact":
      return (
        <>
          <PageIntro
            index="07"
            eyebrow="CONTACT"
            title="Let's work on questions that matter."
            lead="CORE HQ welcomes thoughtful conversations with investors, cities and public institutions, business partners, researchers, builders, and potential collaborators."
          />
          <section className="section">
            <div className="wrap contact-grid">
              <div>
                <h2>Start with the work.</h2>
                <p>
                  Explore CORE, review the public project, and share a specific
                  question or idea. A public contact address has not yet been
                  verified for this site; we will publish one when the founder
                  approves it.
                </p>
                <div className="actions">
                  <Button href={site.productUrl} external>
                    Explore CORE
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
              <div className="contact-list">
                {[
                  "Investors",
                  "Cities & public institutions",
                  "Business partners",
                  "Researchers",
                  "Builders & collaborators",
                  "General inquiries",
                ].map((item) => (
                  <div key={item}>
                    <span>{item}</span>
                    <ArrowUpRight size={16} aria-hidden="true" />
                  </div>
                ))}
              </div>
            </div>
          </section>
          <div className="wrap note-box">
            <strong>Contact destination pending verification</strong>
            <p>
              This page does not include a form because there is no approved
              inbox or message backend. No message entered here is discarded.
            </p>
          </div>
        </>
      );
    case "privacy":
      return (
        <>
          <PageIntro
            index="08"
            eyebrow="PRIVACY"
            title="A quiet website by design."
            lead="This notice describes the CORE HQ company website as implemented. It is a practical draft for founder review, not a substitute for legal advice."
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
                When hosted, the hosting provider may process your IP address,
                browser details, and request logs to deliver and secure pages.
                The exact provider, retention period, and applicable terms must
                be added once deployment is chosen.
              </p>
              <h2>External links</h2>
              <p>
                Links to CORE and GitHub take you to separate services with
                their own privacy practices. Opening those links is your choice.
              </p>
              <h2>Contact and updates</h2>
              <p>
                A public contact destination and responsible legal identity are
                pending founder verification. This notice should be updated
                before public launch if hosting, analytics, forms, or other data
                processing changes.
              </p>
            </div>
          </section>
        </>
      );
    case "terms":
      return (
        <>
          <PageIntro
            index="09"
            eyebrow="WEBSITE USE — DRAFT"
            title="A straightforward note about this website."
            lead="This page is a plain-language draft for founder and legal review. It is not represented as a legally reviewed agreement."
          />
          <section className="section">
            <div className="wrap legal-copy">
              <h2>Purpose</h2>
              <p>
                This website introduces CORE HQ and links to the separate CORE
                product. Descriptions of future products are intentions, not
                offers of a deployed service.
              </p>
              <h2>Accuracy and limits</h2>
              <p>
                We aim to describe the prototype accurately, but information may
                change. Exploratory analyses and simulations are not
                professional advice or predictions of real-world outcomes.
              </p>
              <h2>Content and links</h2>
              <p>
                CORE HQ and CORE names and original visual materials are
                presented for identification. Third-party sources and linked
                websites retain their own rights and terms. Do not treat public
                visibility as a grant of a software license.
              </p>
              <h2>Before public launch</h2>
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
