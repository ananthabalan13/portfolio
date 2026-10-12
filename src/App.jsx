import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Skills from "./components/Skills.jsx";
import Experience from "./components/Experience.jsx";
import ProjectSection from "./components/ProjectSection.jsx";
import Education from "./components/Education.jsx";
import DocumentsSection from "./components/DocumentsSection.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return <>
    <Header />
    <main>
      <Hero />
      <About />
      <Skills />
      <Experience />
      <ProjectSection />
      <Education />
      <DocumentsSection />
      <Contact />
    </main>
    <Footer />
  </>;
}
