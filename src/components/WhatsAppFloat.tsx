
import Arrow from "./Arrow";
import { orderUrl } from "../lib/storefront";

export default function WhatsAppFloat() {
  return (
    <a
      className="floating-whatsapp"
      href={orderUrl}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with Yaashab on WhatsApp"
    >
      <span>✳</span>
      <span className="text-[15px] font-semibold">Chat with us</span>
      <Arrow />
    </a>
  );
}
