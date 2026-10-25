import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { site } from "@/content/site";

export function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer-top">
        <div>
          <Link className="brand" href="/">
            <Image
              src="/brand/core-mark.svg"
              width={38}
              height={38}
              alt=""
              unoptimized
            />
            <span>CORE</span>
          </Link>
          <p>Building intelligence for the physical world.</p>
        </div>
        <div className="footer-links">
          <span>Explore</span>
          <Link href="/">Home</Link>
          <Link href="/world">CORE World</Link>
          <Link href="/vision">Vision</Link>
        </div>
        <div className="footer-links">
          <span>Connect</span>
          <Link href="/founder">Founder</Link>
          <Link href="/contact">Contact</Link>
          <a href={site.productUrl} target="_blank" rel="noopener noreferrer">
            Explore CORE World <ArrowUpRight size={14} aria-hidden="true" />
          </a>
        </div>
      </div>
      <div className="wrap footer-bottom">
        <span>© {new Date().getFullYear()} CORE</span>
        <span>San Francisco Bay Area · Built with care for the real world</span>
        <div>
          <Link href="/privacy">Privacy</Link>
          <Link href="/terms">Website use</Link>
        </div>
      </div>
    </footer>
  );
}
