import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProductSection from "@/components/ProductSection";
import Features from "@/components/Features";
import PromoBoard from "@/components/PromoBoard";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import HowToOrder from "@/components/HowToOrder";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <div id="features"><Features /></div>
      <div id="promo"><PromoBoard /></div>
      <div id="products"><ProductSection /></div>
      {/* <div id="testimoni"><Testimonials /></div> */}
      <div id="faq"><FAQ /></div>
      <div id="how-to-order"><HowToOrder /></div>
      <Footer />
    </main>
  );
}
