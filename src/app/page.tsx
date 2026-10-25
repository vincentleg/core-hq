import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Earth } from "@/components/earth";
import { Button, Eyebrow, SectionHeading } from "@/components/ui";
import { site } from "@/content/site";

export const metadata: Metadata = { alternates: { canonical: "/" } };

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="wrap hero-grid">
          <div className="hero-copy">
            <Eyebrow>
              CORE — BUILDING INTELLIGENCE FOR THE PHYSICAL WORLD
            </Eyebrow>
            <h1>
              Understand our world.
              <br />
              <em>Build a better one.</em>
            </h1>
            <p>
              CORE is building a shared intelligence layer for the physical
              world — connecting real-world data, intelligent analysis,
              simulation, and human collaboration to help us understand complex
              challenges and explore better solutions.
            </p>
            <div className="actions">
              <Button href={site.productUrl} external>
                Explore CORE World
              </Button>
              <Button href="/vision" secondary>
                Our Vision
              </Button>
            </div>
            <div className="hero-proof">
              <span>CORE / THE COMPANY</span>
              <span>CORE WORLD / THE FIRST PRODUCT</span>
            </div>
          </div>
          <Earth />
        </div>
        <div className="hero-baseline wrap">
          <span>01 / A SHARED WORLD</span>
          <span>SCROLL TO EXPLORE ↓</span>
        </div>
      </section>

      <section className="section why">
        <div className="wrap split">
          <SectionHeading
            eyebrow="THE PROBLEM"
            title="We have more information than ever. Understanding remains fragmented."
          />
          <div className="body-copy">
            <p>
              Decisions about cities, infrastructure, energy, and the
              environment cross disciplines. The data behind them rarely does.
              It lives in separate maps, reports, models, institutions, and
              communities.
            </p>
            <p>
              Without a way to connect those perspectives, even well-informed
              people struggle to see the whole problem — or the tradeoffs behind
              a proposed solution.
            </p>
          </div>
        </div>
      </section>

      <section className="section response-section">
        <div className="wrap">
          <SectionHeading
            eyebrow="OUR RESPONSE"
            title="One world. Connected intelligence."
            text="CORE aims to make knowledge about the physical world easier to connect, examine, and use — without handing decisions over to a black box."
          />
          <div className="steps response-steps">
            {[
              [
                "01",
                "Understand",
                "Bring places, evidence, and context into one view.",
              ],
              [
                "02",
                "Explore",
                "Compare possible paths while keeping assumptions and uncertainty visible.",
              ],
              [
                "03",
                "Collaborate",
                "Make room for human expertise, local knowledge, and accountable review.",
              ],
            ].map(([number, title, text]) => (
              <div className="step" key={number}>
                <span>{number}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section product-section">
        <div className="wrap">
          <div className="product-intro">
            <SectionHeading
              eyebrow="INTRODUCING CORE WORLD"
              title="Our first step is already taking shape."
              text="CORE World is the first product developed by CORE: an evolving digital Earth for exploring real places, investigating challenges, and examining evidence and possible futures."
            />
            <div className="product-note">
              PUBLIC PROTOTYPE
              <br />
              SAN FRANCISCO FIRST
            </div>
          </div>
          <div className="world-preview">
            <Image
              src="/images/core-product.png"
              width={1440}
              height={900}
              alt="Actual CORE World prototype homepage showing its digital Earth introduction"
              unoptimized
            />
            <div className="world-preview-copy">
              <span className="status">CORE WORLD / EARLY PROTOTYPE</span>
              <h3>A place to investigate, not just observe.</h3>
              <p>
                Explore geographic context and public records, compare
                exploratory scenarios, and review the evidence and uncertainty
                behind them. The simulations are models, not verified real-world
                outcomes.
              </p>
              <Button href={site.productUrl} external>
                Explore CORE World
              </Button>
            </div>
          </div>
          <p className="image-note">
            Actual CORE World homepage captured October 24, 2026. The interface
            shown is in French; the product is evolving.
          </p>
        </div>
      </section>

      <section className="section trajectory">
        <div className="wrap split">
          <SectionHeading
            eyebrow="FROM SAN FRANCISCO TO THE WORLD"
            title="Start somewhere real. Build toward something global."
          />
          <div className="body-copy">
            <p>
              San Francisco is CORE World’s first environment for developing and
              testing the approach. It is a beginning, not evidence that a
              global platform already exists.
            </p>
            <p>
              The longer ambition extends across cities, infrastructure systems,
              energy, environmental challenges, and eventually a shared
              intelligence layer for the physical world. Each expansion must
              earn its place through evidence and useful outcomes.
            </p>
            <Link className="text-link" href="/vision">
              Read the vision <ArrowRight size={17} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <section className="section founder-tease">
        <div className="wrap founder-grid">
          <div className="portrait-frame portrait-home">
            <Image
              src="/images/vincent-leguide.jpg"
              width={1122}
              height={1402}
              alt="Vincent Leguide, founder of CORE"
              unoptimized
            />
            <span>VINCENT LEGUIDE / FOUNDER OF CORE</span>
          </div>
          <div>
            <Eyebrow>THE FOUNDER</Eyebrow>
            <h2>
              Built from a simple question: what if we could understand the
              world as a connected system?
            </h2>
            <p>
              Vincent Leguide began CORE after work spanning sustainable
              computing infrastructure, product design, and the physical systems
              behind AI. He is building from the San Francisco Bay Area, with a
              long view and a practical first product.
            </p>
            <Link className="text-link" href="/founder">
              Meet Vincent <ArrowRight size={17} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <section className="closing">
        <div className="wrap closing-inner">
          <Eyebrow>WHAT COMES NEXT</Eyebrow>
          <h2>
            The future is not something we simply predict. It&apos;s something
            we can help shape.
          </h2>
          <div className="actions">
            <Button href={site.productUrl} external>
              Explore CORE World
            </Button>
            <Button href="/vision" secondary>
              Read the Manifesto
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
