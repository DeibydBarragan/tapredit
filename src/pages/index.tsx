import Navbar from "@/components/containers/navbar/Navbar";
import Description from "@/components/sections/description/Description";
import Features from "@/components/sections/features/Features";
import Hero from "@/components/sections/Hero/Hero";
import Who from "@/components/sections/who/Who";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Description />
      <Features />
      <Who />
    </main>
  )
}
