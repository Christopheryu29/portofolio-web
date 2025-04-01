import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Career from "../components/Career";
import Highlights from "../components/Highlights";
import GetInTouch from "../components/GetInTouch";

const Home = () => (
  <>
    <Navbar />
    <div id="about">
      <Hero />
    </div>
    <div id="certifications">
      <Highlights />
    </div>
    <div id="skills">
      <Skills />
    </div>
    <div id="projects">
      <Projects />
    </div>
    <div id="career">
      <Career />
    </div>
    <div id="contact">
      <GetInTouch />
    </div>
  </>
);

export default Home;
