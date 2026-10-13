"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { whatsappNumber } from "../lib/storefront";

const unitPrice = 2499;

export default function OrderForm() {
  const [complete, setComplete] = useState(false);
  const [quantity, setQuantity] = useState(1);

  function submitOrder(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name"));
    const phone = String(form.get("phone"));
    const address = String(form.get("address"));
    const message = [
      "Hi, I want to order Drop Glow Slay serum.",
      `Name: ${name}`,
      `Contact number: ${phone}`,
      `Delivery address: ${address}`,
      `Quantity: ${quantity}`,
      `Total: PKR ${(quantity * unitPrice).toLocaleString("en-PK")}`,
    ].join("\n");
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
    setComplete(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <main className="order-page">
      <div className="order-navigation">
        <Link className="order-back" href="/">
          <span aria-hidden="true">←</span>
          Back to home
        </Link>
      </div>
      {!complete ? (
        <section className="order-card">
          <p className="eyebrow">YOUR GLOW STARTS HERE</p>
          <h1>Place your <em>order.</em></h1>
          <p className="order-lead">Add your delivery details and we’ll prepare your WhatsApp order.</p>
          <div className="order-product"><div><strong>Drop Glow Slay</strong><span>Whitening &amp; Brightening Serum · 30 ml</span></div><b>PKR 2,499</b></div>
          <form className="checkout-form" onSubmit={submitOrder}>
            <label>Full name<input name="name" autoComplete="name" required placeholder="Your name" /></label>
            <label>Contact number<input name="phone" type="tel" autoComplete="tel" required placeholder="03XX XXXXXXX" /></label>
            <label>Delivery address<textarea name="address" autoComplete="street-address" required rows={3} placeholder="House, street, area and city" /></label>
            <div className="quantity-row"><label htmlFor="quantity">Quantity</label><div className="quantity-control"><button type="button" aria-label="Decrease quantity" onClick={() => setQuantity((n) => Math.max(1, n - 1))}>−</button><output id="quantity">{quantity}</output><button type="button" aria-label="Increase quantity" onClick={() => setQuantity((n) => Math.min(10, n + 1))} disabled={quantity >= 10}>+</button></div></div>
            <div className="order-total"><span>Total</span><strong>PKR {(quantity * unitPrice).toLocaleString("en-PK")}</strong></div>
            <button className="button button-dark buy-button" type="submit">Buy now <span>→</span></button>
          </form>
          <p className="order-secure">Your order details will be sent to Yaashab Cosmetics on WhatsApp.</p>
        </section>
      ) : (
        <section className="order-card order-success" aria-live="polite">
          <span className="success-mark">✓</span>
          <p className="eyebrow">ORDER DETAILS READY</p>
          <h1>Thank <em>you!</em></h1>
          <p className="order-lead">Your order details have been prepared in WhatsApp. Send the message there to confirm your order.</p>
          <div className="success-actions"><Link className="button button-dark" href="/#product">Continue shopping <span>→</span></Link><Link className="button button-outline" href="/">Go to main page</Link><a className="order-whatsapp" href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noreferrer">Open WhatsApp again</a></div>
        </section>
      )}
    </main>
  );
}
