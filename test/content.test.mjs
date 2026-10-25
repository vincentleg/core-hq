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
    .join(" ");
  for (const claim of [
    /millions of (current )?users/i,
    /paying customers/i,
    /proven real-world improvements/i,
  ])
    assert.equal(claim.test(text), false, String(claim));
  assert.match(text, /uncalibrated/i);
  assert.match(text, /Long-term vision/i);
});
