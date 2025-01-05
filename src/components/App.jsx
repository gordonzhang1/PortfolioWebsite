import Name from "./Name";
import "../App.css";
import About from "./About";
import Experience from "./Experience";
import Projects from "./Projects";
import Skills from "./Skills";
import Contact from "./Contact";
import Nav from "./Nav";
import Footer from "./Footer";
import { ThreeDCardDemo } from "./ThreeDCard";
import { TracingBeamDemo } from "./TracingBeamDemo";
import { TypewriterEffectSmoothDemo } from "./TypewriterEffectSmoothDemo";
import { NavbarDemo } from "./NavbarDemo";
function App() {
  return (
    <>
      <div className="app-container">
        <NavbarDemo />
        <TypewriterEffectSmoothDemo />

        <div className="outer-everything">
          <div className="everything-container">
            <section id="about" className="about-section">
              <div className="about">
                <About />
              </div>
            </section>
            <section id="skills" className="skills-app">
              <div>
                <Skills />
              </div>
            </section>
            <section id="experience" className="experience-section">
              <div className="experience-app">
                <Experience />
              </div>
            </section>
            <section id="projects" className="projects-section">
              <div>
                <Projects />
              </div>
            </section>
            <section id="contact" className="contact-app">
              <div>
                <Contact />
              </div>
            </section>
            <div>
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
