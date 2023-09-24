import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import Footer from "./components/Footer/Footer";
import Contact from "./components/Contact/Contact";

const App = () => {
  return (
    <div className="font-mons text-neutral-600">
      {/*  Home   */}

      <section id="#" className="h-screen overflow-hidden">
        <div className="h-full w-full bg-blue-50 relative">
          <Navbar />
          <Hero />
        </div>
      </section>

      <section
        id="about"
        className="h-screen bg-white flex flex-col gap-2 px-4"
      >
        <About />
      </section>

      <section
        id="projects"
        className="py-12"
        style={{
          background: `url("data:image/jpeg;base64,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")`,
        }}
      >
        <Projects />
      </section>

      <section id="contact" className="p-4">
        <Contact />
      </section>
      <section
        id="footer"
        className="p-4 bg-gradient-to-r from-blue-50 to-blue-950"
      >
        <Footer />
      </section>
    </div>
  );
};

export default App;
