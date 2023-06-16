import Navbar from "@/components/containers/navbar/Navbar";
import Description from "@/components/sections/Description/Description";
import Features from "@/components/sections/Features/Features";
import Hero from "@/components/sections/Hero/Hero";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Description />
      <Features />
    </main>
  )
}
