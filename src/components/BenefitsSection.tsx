
import { benefits } from "../lib/storefront";

export default function BenefitsSection() {
  return (
    <section
      className="benefits"
      aria-label="Serum benefits">
      {benefits.map((item) => (
        <article
          className="benefit"
          key={item.number}>
          <span className="benefit-number">
            {item.number}
          </span>

          <span className="benefit-icon">
            ✳
          </span>

          <h3>{item.title}</h3>

          <p>{item.text}</p>
        </article>
      ))}
    </section>
  );
}
