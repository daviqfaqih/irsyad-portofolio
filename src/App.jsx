import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-[#050816] text-white overflow-x-hidden min-h-screen">

      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main>

        {/* Hero */}
        <Hero />

        {/* About */}
        <About />

        {/* Skills */}
        <Skills />

        {/* Projects */}
        <Projects />

        {/* Experience */}
        <Experience />

        {/* Contact */}
        <Contact />

      </main>

      {/* Footer */}
      <Footer />

    </div>
  );
}

export default App;