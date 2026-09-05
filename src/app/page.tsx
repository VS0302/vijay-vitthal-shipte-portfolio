import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";
import Services from "./components/Services";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Education />
        <Projects />
        <Certifications />
        <Services />
        <Contact />
      </main>

      <footer className="border-t border-white/10 bg-black px-6 py-8 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Vijay Shipte. All rights reserved.
      </footer>
    </>
  );
}