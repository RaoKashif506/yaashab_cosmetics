
import { ingredients } from "../lib/storefront";

export default function IngredientsSection() {
  return (
    <section
      className="ingredients section-pad"
      id="ingredients">
      <div className="ingredients-top">
        <div>
          <p className="eyebrow" style={{ fontSize: "15px", fontWeight: 600 }}>
            THE GOOD STUFF
          </p>

          <h2>
            Little drops.
            <br />
            <em>Lovely ingredients.</em>
          </h2>
        </div>

        <p>
          Thoughtful ingredients, picked to help your skin look fresh,
          feel comfortable and find its everyday glow.
        </p>
      </div>

      <div className="ingredient-grid">
        {ingredients.map((item, index) => (
          <article
            className="ingredient-card rounded-4xl"
            key={item.name}
          >
            <span className="ingredient-count">
              0{index + 1}
            </span>

            <span className="ingredient-spark">✳</span>

            <h3>{item.name}</h3>

            <strong>{item.amount}</strong>

            <p>{item.copy}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
