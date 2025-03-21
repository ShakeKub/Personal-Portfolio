import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero name="Jakub Ch." />
      <About />
      <Skills />
      <Projects />
    </main>
  );
}
