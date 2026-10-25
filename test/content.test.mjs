import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";

test("published copy avoids unsupported traction and real-world outcome claims", () => {
  const text = [
    "src/app/page.tsx",
    "src/app/[slug]/page.tsx",
    "src/content/product.ts",
  ]
    .map((file) => readFileSync(file, "utf8"))
    .join(" ")
    .replace(/\s+/g, " ");
  for (const claim of [
    /millions of (current )?users/i,
    /paying customers/i,
    /proven real-world improvements/i,
    /CORE HQ/i,
    /CORE Bold/i,
  ])
    assert.equal(claim.test(text), false, String(claim));
  assert.ok(/uncalibrated/i.test(text), "simulation limits are visible");
  assert.ok(/CORE World/.test(text), "first product is named");
  assert.ok(/millions of people could participate/.test(text), "future scale is qualified");
});

test("obsolete marketing routes redirect to the four-page story", () => {
  const { redirects, git } = JSON.parse(readFileSync("vercel.json", "utf8"));
  assert.deepEqual(
    Object.fromEntries(redirects.map(({ source, destination }) => [source, destination])),
    {
      "/company": "/",
      "/core": "/world",
      "/manifesto": "/vision",
      "/technology": "/vision",
      "/responsibility": "/vision",
    },
  );
  assert.equal(git.deploymentEnabled, false);
});
