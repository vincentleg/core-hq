import { chromium } from "playwright-core";
import assert from "node:assert/strict";
import { mkdir } from "node:fs/promises";

const base = process.env.SMOKE_URL || "http://127.0.0.1:3000";
const chrome = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
const routes = [
  "/",
  "/company",
  "/core",
  "/manifesto",
  "/founder",
  "/technology",
  "/responsibility",
  "/contact",
  "/privacy",
  "/terms",
];
const browser = await chromium.launch({
  executablePath: chrome,
  headless: true,
  args: ["--no-sandbox"],
});
const errors = [];
await mkdir("screenshots", { recursive: true });
try {
  for (const width of [320, 375, 768, 1024, 1440]) {
    const page = await browser.newPage({
      viewport: { width, height: 900 },
      deviceScaleFactor: 1,
    });
    page.on("pageerror", (error) =>
      errors.push(`${width}px: ${error.message}`),
    );
    page.on("console", (message) => {
      if (message.type() === "error")
        errors.push(`${width}px console: ${message.text()}`);
    });
    for (const route of routes) {
      const response = await page.goto(`${base}${route}`, {
        waitUntil: "networkidle",
      });
      assert.equal(response?.status(), 200, `${route} status at ${width}px`);
      assert.equal(
        await page.locator("h1").count(),
        1,
        `${route} must have one h1`,
      );
      assert.ok(await page.title(), `${route} title`);
      assert.ok(
        await page.locator('meta[name="description"]').getAttribute("content"),
        `${route} description`,
      );
      const overflow = await page.evaluate(
        () => document.documentElement.scrollWidth - innerWidth,
      );
      assert.ok(
        overflow <= 1,
        `${route} overflows by ${overflow}px at ${width}px`,
      );
      const brokenImages = await page
        .locator("img")
        .evaluateAll((images) =>
          images
            .filter((image) => image.complete && image.naturalWidth === 0)
            .map((image) => image.src),
        );
      assert.deepEqual(brokenImages, [], `${route} broken images`);
      const localLinks = await page
        .locator('a[href^="/"]')
        .evaluateAll((links) => links.map((link) => link.getAttribute("href")));
      assert.ok(
        localLinks.every(
          (href) => href === "/" || routes.includes(href?.replace(/\/$/, "")),
        ),
        `${route} unexpected local link: ${localLinks}`,
      );
      if (route === "/" && [375, 1440].includes(width))
        await page.screenshot({
          path: `screenshots/home-${width}.png`,
          fullPage: true,
        });
    }
    if (width === 375) {
      await page.goto(base);
      await page.getByRole("button", { name: "Open menu" }).click();
      assert.equal(
        await page
          .getByRole("navigation", { name: "Mobile navigation" })
          .isVisible(),
        true,
      );
      await page
        .getByRole("navigation", { name: "Mobile navigation" })
        .getByRole("link", { name: "About" })
        .click();
      await page.waitForURL(/\/company\/?$/);
      assert.match(page.url(), /\/company\/?$/);
    }
    await page.close();
  }
  const page = await browser.newPage();
  await page.goto(base);
  assert.equal(
    await page
      .getByRole("link", { name: /Explore CORE/ })
      .first()
      .getAttribute("href"),
    "https://creationofrebornearth.com",
  );
  assert.deepEqual(errors, [], "browser errors");
  await page.close();
  console.log(
    `PASS: ${routes.length} routes × 5 widths, links, metadata, images, mobile menu, product CTA, console`,
  );
} finally {
  await browser.close();
}
