import { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
//import CV from './components/CV';
import Contact from './components/Contact';

function App() {
  const [triggerAnimation, setTriggerAnimation] = useState({
    home: false,
    about: false,
    projects: false,
    //cv: false,
    contact: false,
  });

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setTriggerAnimation((prev) => ({
        ...prev,
        [sectionId]: !prev[sectionId],
      }));
    }
  };

  return (
    <div className="bg-gray-100">
      <Navbar scrollToSection={scrollToSection} />
      <div id="home" className="min-h-screen">
        <Home scrollToSection={scrollToSection} triggerAnimation={triggerAnimation.home} />
      </div>
      <div id="about" className="min-h-screen">
        <About triggerAnimation={triggerAnimation.about} />
      </div>
      <div id="projects" className="min-h-screen">
        <Projects triggerAnimation={triggerAnimation.projects} />
      </div>
      {/* <div id="cv" className="min-h-screen">
        <CV triggerAnimation={triggerAnimation.cv} />
      </div> */}
      <div id="contact" className="min-h-screen">
        <Contact triggerAnimation={triggerAnimation.contact} />
      </div>
    </div>
  );
}

export default App;