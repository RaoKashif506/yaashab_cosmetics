import Image from "next/image";
import { orderUrl } from "../lib/storefront";

export default function SiteFooter() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <a className="footer-brand" href="#top" aria-label="Yaashab Cosmetics home">
          <Image className="footer-logo" src="/images/yaasha_logo.png" alt="" width={56} height={56} />
          yaashab<span>®</span>
        </a>

        <p>A little care. A lot of glow.</p>

        <a
          className="footer-cta text-[15px] font-semibold"
          href={orderUrl}
          target="_blank"
          rel="noreferrer "
        >
          Let’s talk skincare
        </a>
      </div>

      <div className="footer-bottom">
        <span className="text-[15px] font-semibold">©2026 Yaashab_Cosmetics</span>

        <span className="text-[15px] font-semibold">Made with care, for your everyday ritual.</span>

        <div>
          <a
            className="button button-dark product-action-button footer-social-button"
            href="https://www.instagram.com/yaashab_cosmetics"
            target="_blank"
            rel="noreferrer"
          >
            Instagram
          </a>

          <a
            className="button button-dark product-action-button footer-social-button"
            href="https://g.page/r/CWcpHePa2jASEBM/review"
            target="_blank"
            rel="noreferrer"
          >
            Google Reviews
          </a>

          <a
            className="button button-dark product-action-button footer-social-button"
            href={orderUrl}
            target="_blank"
            rel="noreferrer"
          >
            WhatsApp
          </a>
        </div>
      </div>

      <p className="disclaimer text-[15px] font-semibold">
        Drop Glow Slay is a cosmetic product. Results vary. Patch test
        before first use and stop if irritation occurs.
      </p>
    </footer>
  );
}
