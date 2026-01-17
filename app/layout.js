import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CartProvider } from "@/context/CartContext";
import { Outfit, Lora } from "next/font/google";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-outfit",
  display: "swap",
});
const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-lora",
  display: "swap",
});

export const metadata = {
  title: "HealWithGeeta",
  description: "Holistic Vedic consultations, healing, and learning experiences.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${outfit.variable} ${outfit.className} ${lora.variable} ${lora.className}  antialiased bg-beige text-charcoal`}
      >
        <CartProvider>
          <div className="site-shell">
            <div className="site-glow site-glow-top" />
            <div className="site-glow site-glow-bottom" />
            <Navbar />
            <main className="site-content">{children}</main>
            <Footer />
          </div>
        </CartProvider>
      </body>
    </html>
  );
}
