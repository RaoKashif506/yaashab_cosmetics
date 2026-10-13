
import { faqs, orderUrl } from "../lib/storefront";
import Image from "next/image";

export default function FaqSection() {
  return (
    <section className="faq section-pad" id="questions">
      <div className="faq-intro">
        <p className="eyebrow" style={{ fontSize: "15px", fontWeight: 700 }}>
          A FEW THINGS YOU MIGHT BE WONDERING
        </p>

        <h2>
          Good questions.
          <br />
          <em>Honest answers.</em>
        </h2>

        <a
          className="button button-dark product-action-button rounded-4xl"
          href={orderUrl}
          target="_blank"
          rel="noreferrer"
        >
          Still curious? Chat with us
        </a>

        <div className="faq-image-frame rounded-4xl">
          <Image
            className="faq-image"
            src="/images/p6.jpeg"
            alt="Drop Glow Slay serum and box surrounded by water droplets"
            width={1024}
            height={1536}
            loading="lazy"
          />
        </div>
      </div>

      <div className="faq-list">
        {faqs.map(([question, answer]) => (
          <details key={question}>
            <summary>{question}</summary>
            <p>{answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
