"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { site } from "@/content/site";

export function Header() {
  const [open, setOpen] = useState(false);
  const path = usePathname();
  return (
    <header className="site-header">
      <div className="header-inner wrap">
        <Link
          className="brand"
          href="/"
          onClick={() => setOpen(false)}
          aria-label="CORE HQ home"
        >
          <Image
            src="/brand/core-mark.svg"
            width={34}
            height={34}
            alt=""
            unoptimized
          />
          <span>
            CORE <b>HQ</b>
          </span>
        </Link>
        <nav className="desktop-nav" aria-label="Main navigation">
          {site.navigation.map(([label, href]) => (
            <Link
              className={path === href ? "active" : ""}
              key={href}
              href={href}
            >
              {label}
            </Link>
          ))}
        </nav>
        <a
          className="header-cta"
          href={site.productUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          Explore CORE <ArrowUpRight size={15} aria-hidden="true" />
        </a>
        <button
          className="menu-toggle"
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
      <nav
        id="mobile-nav"
        className={`mobile-nav ${open ? "open" : ""}`}
        aria-label="Mobile navigation"
        inert={!open}
      >
        {site.navigation.map(([label, href]) => (
          <Link key={href} href={href} onClick={() => setOpen(false)}>
            {label}
          </Link>
        ))}
        <Link href="/contact" onClick={() => setOpen(false)}>
          Contact
        </Link>
        <a
          href={site.productUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => setOpen(false)}
        >
          Explore CORE ↗
        </a>
      </nav>
    </header>
  );
}
