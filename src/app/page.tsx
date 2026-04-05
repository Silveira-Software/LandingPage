"use client";

import dynamic from "next/dynamic";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import TechStack from "@/components/TechStack";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import ClientSites from "@/components/ClientSites";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const CustomCursor = dynamic(() => import("@/components/CustomCursor"), {
  ssr: false,
});

export default function Home() {
  return (
    <>
      <CustomCursor />
      <div className="noise-overlay" />
      <Navigation />
      <main>
        <Hero />
        <About />
        <TechStack />
        <Projects />
        <Services />
        <ClientSites />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
