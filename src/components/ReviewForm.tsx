
"use client";

import type { FormEvent } from "react";

const whatsappNumber = "923134268125";

const ratingNames = [
  "Far from better",
  "Not much better",
  "Okay, a little better",
  "Better",
  "Far better than expected!",
];

export default function ReviewForm() {
  function submitReview(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const data = new FormData(form);

    const rating = Number(data.get("rating"));
    const name = String(data.get("name") ?? "").trim();
    const city = String(data.get("city") ?? "").trim();
    const review = String(data.get("review") ?? "").trim();

    const message = [
      `⭐ New review for Drop Glow Slay`,
      `Rating: ${rating}/5 (${ratingNames[rating - 1]})`,
      `Name: ${name}`,
      city ? `City: ${city}` : "",
      `Review: ${review}`,
      "I agree this review can be shown publicly on the website.",
    ]
      .filter(Boolean)
      .join("\n");

    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer"
    );

    form.reset();
  }

  return (
    <form className="review-form" onSubmit={submitReview}>
      <h3>Write a review</h3>

      <fieldset className="rating-field">
        <legend>Your rating</legend>

        <div className="rating-options">
          {ratingNames.map((label, index) => {
            const value = 5 - index;

            return (
              <label key={value} title={`${value} stars`}>
                <input
                  type="radio"
                  name="rating"
                  value={value}
                  required
                />

                <span aria-hidden="true">★</span>

                <span className="rating-sr">
                  {value} stars — {label}
                </span>
              </label>
            );
          })}
        </div>
      </fieldset>

      <label className="review-label">
        Your name
        <input
          name="name"
          autoComplete="name"
          required
          maxLength={80}
        />
      </label>

      <label className="review-label">
        City <span>(optional)</span>
        <input
          name="city"
          autoComplete="address-level2"
          maxLength={80}
        />
      </label>

      <label className="review-label">
        Your review
        <textarea
          name="review"
          required
          minLength={10}
          maxLength={1000}
          rows={4}
        />
      </label>

      <label className="review-consent">
        <input
          type="checkbox"
          name="consent"
          required
        />

        <span>
          I agree my name, city and review may be shown publicly
          on this website.
        </span>
      </label>

      <button
        className="rounded-4xl button review-submit"
        type="submit"
      >
        Send my review 
      </button>

      <p className="review-note">
        Your review opens in WhatsApp so you can send it to us.
        We check each review before it appears here.
      </p>
    </form>
  );
}