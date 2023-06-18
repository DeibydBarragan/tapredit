import Footer from "@/components/containers/footer/Footer";
import Navbar from "@/components/containers/navbar/Navbar";
import Description from "@/components/sections/Description/Description";
import Features from "@/components/sections/Features/Features";
import Hero from "@/components/sections/Hero/Hero";
import Gallery from "@/components/sections/gallery/Gallery";
import Process from "@/components/sections/process/Process";
import ProductData from "@/components/sections/productData/ProductData";
import Who from "@/components/sections/who/Who";

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <Description />
      <Features />
      <Who />
      <Process />
      <ProductData />
      <Gallery />
      <Footer />
    </main>
  )
}
