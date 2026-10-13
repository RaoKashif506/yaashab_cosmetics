import type { Metadata } from "next";
import ShaderBackground from "../components/ShaderBackground";
import "./globals.css";

export const metadata: Metadata = {
  title: "Yaashab Cosmetics | Drop Glow Slay Serum",
  description:
    "Meet Drop Glow Slay, a lightweight brightening serum with niacinamide, alpha arbutin and skin-loving hydrators for your everyday glow.",
  openGraph: {
    title: "Yaashab Cosmetics | Drop Glow Slay Serum",
    description:
      "A little care. A lot of glow. Discover the Drop Glow Slay brightening serum.",
    type: "website",
  },
  icons: {
    icon: [{ url: "/icon.png?v=yaasha-logo", type: "image/png" }],
    shortcut: [{ url: "/icon.png?v=yaasha-logo", type: "image/png" }],
    apple: [{ url: "/images/yaasha_logo.png", type: "image/png" }],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>
        <ShaderBackground />
        <div className="site-content">{children}</div>
      </body>
    </html>
  );
}
