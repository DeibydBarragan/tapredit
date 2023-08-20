import Footer from "@/components/containers/footer/Footer";
import Navbar from "@/components/containers/navbar/Navbar";
import Description from "@/components/sections/Description/Description";
import Features from "@/components/sections/Features/Features";
import Hero from "@/components/sections/Hero/Hero";
import Gallery from "@/components/sections/gallery/Gallery";
import Process from "@/components/sections/process/Process";
import ProductData from "@/components/sections/productData/ProductData";
import Who from "@/components/sections/who/Who";
import Head from "next/head";
import Contact from "@/components/sections/Contact/Contact";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export default function Home() {
  return (
    <main className="relative">
      <Head>
        <title>TAPREDIT | Tabla periódica didáctica en forma de maletín</title>
      </Head>
      <Navbar />
      <Hero />
      <Description />
      <Features />
      <Who />
      <Process />
      <ProductData />
      <Contact />
      <Gallery />
      <Footer />
      <ToastContainer
        position="bottom-right"
        autoClose={7000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        style={{
          zIndex: 99999,
          borderRadius: '2rem',
        }}
      />
    </main>
  )
}
