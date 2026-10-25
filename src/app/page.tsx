import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Earth } from "@/components/earth";
import { Button, Closing, Eyebrow, SectionHeading } from "@/components/ui";
import { directions, principles } from "@/content/company";
import { productSteps } from "@/content/product";
import { site } from "@/content/site";

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="wrap hero-grid">
          <div className="hero-copy">
            <Eyebrow>CORE HQ — BUILDING THE NEXT INTELLIGENCE LAYER</Eyebrow>
            <h1>
              Understand the world.
              <br />
              <em>Shape what comes next.</em>
            </h1>
            <p>
              CORE HQ is building technology that connects real-world data,
              intelligent analysis, simulation, and human participation to help
              us understand complex challenges and make better decisions.
            </p>
            <div className="actions">
              <Button href={site.productUrl} external>
                Explore CORE
              </Button>
              <Button href="/company" secondary>
                Discover Our Mission
              </Button>
            </div>
            <div className="hero-proof">
              <span>FOUNDER-LED · EARLY STAGE</span>
              <span>SAN FRANCISCO, FIRST</span>
            </div>
          </div>
          <Earth />
        </div>
        <div className="hero-baseline wrap">
          <span>01 / THE COMPANY</span>
          <span>SCROLL TO EXPLORE ↓</span>
        </div>
      </section>

      <section className="section why">
        <div className="wrap split">
          <SectionHeading
            eyebrow="WHY WE EXIST"
            title="The world is connected. Our understanding is fragmented."
          />
          <div className="body-copy">
            <p>
              Housing, mobility, infrastructure, energy, and the environment
              shape one another. Yet the information needed to understand them
              is scattered across maps, reports, institutions, and disciplines.
            </p>
            <p>
              CORE HQ exists to make these relationships easier to explore —
              turning disconnected evidence into context people can question,
              compare, and use.
            </p>
            <Link className="text-link" href="/company">
              Meet the company <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>

      <section className="section product-section">
        <div className="wrap">
          <div className="product-intro">
            <SectionHeading
              eyebrow="OUR FIRST PRODUCT"
              title="Meet CORE. A new lens on the physical world."
              text="CORE — Creation of Reborn Earth — is an early digital Earth prototype. It brings real geographic context, public data, investigations, and exploratory scenarios into one experience."
            />
            <div className="product-note">
              PUBLIC PROTOTYPE
              <br />
              SAN FRANCISCO FOCUS
            </div>
          </div>
          <div className="product-showcase">
            <div className="product-visual">
              <div className="product-topbar">
                <span className="mini-mark">◉</span> CORE / WORLD{" "}
                <span>EARTH VIEW — SAN FRANCISCO</span>
              </div>
              <div className="map-visual">
                <span className="map-orbit orbit-a" />
                <span className="map-orbit orbit-b" />
                <span className="map-center">SF</span>
                <span className="map-label map-label-a">REAL GEOGRAPHY</span>
                <span className="map-label map-label-b">PUBLIC DATA</span>
                <span className="map-point point-a" />
                <span className="map-point point-b" />
                <span className="map-point point-c" />
              </div>
              <div className="product-caption">
                Conceptual visual of the product’s spatial approach. Open CORE
                for the live prototype.
              </div>
            </div>
            <div className="product-side">
              <p className="small-label">A PRACTICAL START</p>
              <h3>From place to perspective.</h3>
              <p>
                Explore an actual location. Follow the evidence. Compare what a
                model suggests. Keep people responsible for the decision.
              </p>
              <a
                className="text-link"
                href={site.productUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Open the real CORE prototype <ArrowUpRight size={17} />
              </a>
            </div>
          </div>
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

      <section className="section trajectory">
        <div className="wrap">
          <SectionHeading
            eyebrow="A LONG HORIZON"
            title="Start with one city. Learn what can scale."
            text="San Francisco is an initial implementation, not proof of a global system. Each next step depends on evidence, partnerships, and responsible development."
          />
          <div className="trajectory-line">
            {[
              ["01", "San Francisco", "INITIAL IMPLEMENTATION"],
              ["02", "More cities", "FUTURE AMBITION"],
              ["03", "More domains", "FUTURE AMBITION"],
              ["04", "Global intelligence layer", "LONG-TERM VISION"],
            ].map(([n, name, status]) => (
              <div key={n}>
                <span>{n}</span>
                <h3>{name}</h3>
                <small>{status}</small>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section responsibility-home">
        <div className="wrap split">
          <SectionHeading
            eyebrow="TECHNOLOGY WITH RESPONSIBILITY"
            title="Useful intelligence must be accountable."
          />
          <div className="body-copy">
            <p>
              Evidence must be traceable. Uncertainty must be visible. AI
              workflows should operate within boundaries, and simulation should
              be understood as a tool for inquiry — never a substitute for
              real-world validation.
            </p>
            <p>
              Human review and public participation are part of the direction.
              Safeguards have to grow with the system.
            </p>
            <Link className="text-link" href="/responsibility">
              Our principles <ArrowRight size={17} />
            </Link>
          </div>
        </div>
        <div className="wrap principle-row">
          {principles.map(([n, title, text]) => (
            <div key={n}>
              <span>{n}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section audiences">
        <div className="wrap">
          <SectionHeading
            eyebrow="FOR PEOPLE AND INSTITUTIONS"
            title="One mission. Different ways to participate."
          />
          <div className="audience-grid">
            {directions.map((item) => (
              <div className="audience" key={item.name}>
                <span className="status">{item.status}</span>
                <h3>{item.name}</h3>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section founder-tease">
        <div className="wrap founder-grid">
          <div className="founder-monogram" aria-hidden="true">
            VL<span>FOUNDER / CORE HQ</span>
          </div>
          <div>
            <Eyebrow>FOUNDER-LED</Eyebrow>
            <h2>
              Built by someone who believes the physical world deserves better
              tools.
            </h2>
            <p>
              Vincent Leguide founded CORE HQ and created CORE after work
              spanning sustainable AI infrastructure, product development, and
              the operational systems behind computing.
            </p>
            <Link className="text-link" href="/founder">
              Meet Vincent <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>

      <Closing
        title="A better future starts with understanding the world we share."
        text="Explore what exists today, and the principles behind what comes next."
        href="/manifesto"
        label="Read our manifesto"
      />
    </>
  );
}
