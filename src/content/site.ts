export const site = {
  name: "CORE HQ",
  product: "CORE — Creation of Reborn Earth",
  productUrl: "https://creationofrebornearth.com",
  tagline: "Building intelligence for a better world.",
  positioning: "The intelligence layer for the physical world.",
  founder: "Vincent Leguide",
  contactEmail: "", // Add only after the founder verifies an address for public use.
  navigation: [
    ["About", "/company"],
    ["CORE", "/core"],
    ["Manifesto", "/manifesto"],
    ["Technology", "/technology"],
    ["Founder", "/founder"],
    ["Responsibility", "/responsibility"],
  ],
} as const;

export const pageMeta: Record<string, { title: string; description: string }> =
  {
    company: {
      title: "About",
      description:
        "Explore CORE HQ, Vincent Leguide’s independent project to imagine an intelligence layer for the physical world.",
    },
    core: {
      title: "CORE: Our First Product",
      description:
        "Explore CORE, an early digital Earth prototype for investigating cities, evidence, scenarios, and human decisions.",
    },
    manifesto: {
      title: "Manifesto",
      description:
        "A case for collective intelligence, human agency, and evidence-based progress on a shared planet.",
    },
    founder: {
      title: "Founder",
      description:
        "Meet Vincent Leguide, founder of CORE HQ and creator of CORE.",
    },
    technology: {
      title: "Technology",
      description:
        "How CORE HQ approaches spatial data, bounded AI workflows, scenario exploration, and human oversight.",
    },
    responsibility: {
      title: "Responsibility",
      description:
        "Our present safeguards and future commitments for evidence, privacy, participation, and accountable technology.",
    },
    contact: {
      title: "Contact",
      description:
        "Explore CORE HQ’s independent work and ways to contribute research, ideas, or feedback.",
    },
    privacy: {
      title: "Privacy",
      description: "How this static CORE HQ website handles data and privacy.",
    },
    terms: {
      title: "Website Use",
      description:
        "A plain-language draft about using the CORE HQ website and its content.",
    },
  };
