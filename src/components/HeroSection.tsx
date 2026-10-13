
import Image from "next/image";

export default function HeroSection() {
  return (
    <>
      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow font-bold">
            <span className="eyebrow-line" />
            SKINCARE, WITH A SOFTER TOUCH
          </p>

          <h1>
            Your skin,
            <br />
            <em>in its glow era.</em>
          </h1>

          <p className="hero-description">
            Brighter-looking. Even. Radiant skin.
            <br />
            Brighter, not just lighter. Meet the lightweight serum
            made for your everyday glow.
          </p>

          <div className="hero-actions">
            <a className="rounded-4xl button button-dark" href="#product">
              Meet your new favourite
            </a>

            <a className="text-link" href="#ritual">
              Explore the ritual 
            </a>
          </div>

          <div className="hero-note">
            <span className="note-stars text-[20px]">★★★★★</span>
            <span className="text-[15px]">Thoughtfully made for your everyday glow</span>
          </div>
        </div>

        <div
          className="hero-art"
          aria-label="Drop Glow Slay brightening serum"
        >
          <Image
            className="hero-photo"
            src="/images/p7.jpeg"
            alt="Yaashab Cosmetics Drop Glow Slay serum"
            width={970}
            height={1600}
            priority/>

          <div className="art-sun">✳</div>

        </div>

        <div className="hero-bottom">
          <span className="text-[15px] font-semibold">MADE FOR YOUR SKIN, EVERY DAY</span>
        </div>
      </section>

      <section className="ticker" aria-label="Product highlights">
        <span className="text-[12px] font-semibold">SOFT SKIN</span>
        <b>✳</b>
        <span className="text-[12px] font-semibold">BRIGHTER-LOOKING DAYS</span>
        <b>✳</b>
        <span className="text-[12px] font-semibold">YOUR GLOW, YOUR WAY</span>
        <b>✳</b>
        <span className="text-[12px] font-semibold">SOFT SKIN</span>
      </section>
    </>
  );
}
