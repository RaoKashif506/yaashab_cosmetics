
import Image from "next/image";


export default function ProductSection() {
  return (
    <section className="product" id="product">
      <div className="product-art">
        <Image
          className="product-photo"
          src="/images/serum-glow.webp"
          alt="Drop Glow Slay serum bottles with pipette in a soft pink glow"
          width="784"
          height="1168"
          loading="lazy"
        />

        <span className="product-sticker">
          YOUR NEW
          <br />
          GLOW THING <b>✳</b>
        </span>
      </div>

      <div className="product-details">
        <p className="eyebrow" style={{ fontSize: "15px", fontWeight: 700 }}>
          THE ONE YOU CAME FOR
        </p>

        <h2>
          Drop Glow
          <br />
          <em>Slay.</em>
        </h2>

        <p className="product-subtitle">
          Whitening &amp; Brightening Serum <span>·</span> 30 ml
        </p>

        <div className="price-row">
          <strong>PKR 2,499</strong>
          <s>PKR 5,000</s>
          <span className="rounded-4xl save-pill">50% OFF</span>
        </div>

        <p className="product-description">
          A lightweight serum with niacinamide and alpha arbutin to
          help fade the look of dark spots, and hydrators that leave
          skin soft, even and radiant.
        </p>

        <div className="product-actions">
          <a
            className="button button-dark order-button"
            href="/order"
          >
            Shop now
          </a>

          <a className="button button-dark social-button" href="https://www.instagram.com/yaashab_cosmetics" target="_blank" rel="noreferrer">
            Instagram
          </a>
          <a className="button button-dark social-button" href="https://www.facebook.com/profile.php?id=61579018379678" target="_blank" rel="noreferrer">
            Facebook
          </a>
        </div>

        <p className="delivery-note">
          Message us to confirm your order and delivery details.
        </p>
      </div>
    </section>
  );
}
