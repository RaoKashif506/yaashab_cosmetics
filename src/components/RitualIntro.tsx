
import Arrow from "./Arrow";
import ReviewForm from "./ReviewForm";

export default function ReviewsSection() {
  return (
    <section
      className="reviews section-pad"
      id="reviews"
    >
      <div className="reviews-summary">
        <p className="eyebrow">YOUR GLOW STORY</p>

        <h2>Reviews</h2>

        <div className="review-score">
          <strong>0.0</strong>

          <span>
            <span
              className="review-stars"
              aria-label="No ratings yet"
            >
              ☆☆☆☆☆
            </span>

            <small>No reviews yet</small>
          </span>
        </div>

        <p>
          Love Drop Glow Slay? Share your rating with us or leave
          a review on Google.
        </p>

        <a
          className="button review-google"
          href="https://g.page/r/CWcpHePa2jASEBM/review"
          target="_blank"
          rel="noreferrer"
        >
          Review us on Google <Arrow />
        </a>
      </div>

      <ReviewForm />
    </section>
  );
}