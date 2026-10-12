
import Image from "next/image";

export default function SiteHeader() {
  return (
    <nav
      className="nav"
      aria-label="Main navigation"
    >
      <a
        className="brand-lockup"
        href="#top"
        aria-label="Yaashab Cosmetics home"
      >
        <Image
          className="brand-logo"
          src="/images/yaasha_logo.png"
          alt="Yaashab Drop Glow Slay logo"
          width={72}
          height={72}
          priority
        />

        <span className="brand-name">
          <span className="brand-wordmark">yaashab<sup>®</sup></span>
          <small>SKINCARE, WITH A SOFTER TOUCH</small>
        </span>
      </a>

      <div className="nav-links">
        <a href="#ritual">The ritual</a>
        <a href="#ingredients">Ingredients</a>
        <a href="#packaging">Packaging</a>
        <a href="#reviews">Reviews</a>
        <a href="#questions">FAQs</a>
      </div>

      <a
        className="nav-cta"
        href="/order"
      >
        Shop now
      </a>
    </nav>
  );
}
