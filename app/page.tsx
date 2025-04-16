import type { Metadata } from "next"
import VerticalNav from "@/components/vertical-nav"
import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/sections/about-section"
import ExpertiseSection from "@/components/sections/expertise-section"
import ProductsSection from "@/components/sections/products-section"
import ContactSection from "@/components/sections/contact-section"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: "Taylor Labs | Home",
  description:
    "Taylor Labs creates intuitive, high-performance applications with a focus on beautiful design and exceptional functionality.",
}

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[#FAFAFA]">
      <div className="flex">
        <VerticalNav />

        <main className="flex-1 ml-0 md:ml-64">
          <div id="content-container" className="relative">
            <HeroSection id="hero" />
            <div className="px-6 md:px-12 lg:px-16 max-w-[1600px] mx-auto">
              <AboutSection id="about" />
              <ExpertiseSection id="expertise" />
              <ProductsSection id="products" />
              <ContactSection id="contact" />
              <Footer />
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
