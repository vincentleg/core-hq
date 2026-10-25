export const site = {
  name: "CORE",
  product: "CORE World",
  productUrl: "https://creationofrebornearth.com",
  tagline: "Building intelligence for a better world.",
  positioning: "The intelligence layer for the physical world.",
  founder: "Vincent Leguide",
  contactEmail: "", // Add only after the founder verifies an address for public use.
  navigation: [
    ["Home", "/"],
    ["CORE World", "/world"],
    ["Vision", "/vision"],
    ["Founder", "/founder"],
  ],
} as const;

export const pageMeta: Record<string, { title: string; description: string }> =
  {
    world: {
      title: "CORE World",
      description:
        "Explore CORE World, an evolving digital Earth for investigating real places, evidence, and possible futures.",
    },
    vision: {
      title: "Vision & Manifesto",
      description:
        "CORE's vision for a shared intelligence layer for the physical world, grounded in evidence and human agency.",
    },
    founder: {
      title: "Founder",
      description:
        "Meet Vincent Leguide, founder of CORE, and the personal story behind CORE World.",
    },
    contact: {
      title: "Contact",
      description:
        "Explore CORE's work and public project while a direct contact destination is being verified.",
    },
    privacy: {
      title: "Privacy",
      description: "How this static CORE website handles data and privacy.",
    },
    terms: {
      title: "Website Use",
      description:
        "A plain-language draft about using the CORE website and its content.",
    },
  };
