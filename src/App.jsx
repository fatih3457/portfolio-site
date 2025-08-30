import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';
import './index.css';

function App() {
  const [activeSection, setActiveSection] = useState('');
  const [triggerAnimation, setTriggerAnimation] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'contact'];
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (let id of sections) {
        const section = document.getElementById(id);
        if (section) {
          const offsetTop = section.offsetTop;
          const offsetHeight = section.offsetHeight;

          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(id);
            setTriggerAnimation(true);
            return;
          }
        }
      }

      setActiveSection('');
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="bg-white dark:bg-gray-900 transition-colors duration-300 text-gray-900 dark:text-white">
        <Navbar
          scrollToSection={scrollToSection}
          darkMode={darkMode}
          setDarkMode={setDarkMode}
        />

        <section id="home" className="mt-4">
          <Home
            scrollToSection={scrollToSection}
            triggerAnimation={activeSection === 'home' && triggerAnimation}
          />
        </section>
        <section id="about">
          <About
            triggerAnimation={activeSection === 'about' && triggerAnimation}
          />
        </section>
        <section id="projects">
          <Projects
            triggerAnimation={activeSection === 'projects' && triggerAnimation}
          />
        </section>
        <section id="contact" className="mt-0">
          <Contact
            triggerAnimation={activeSection === 'contact' && triggerAnimation}
          />
        </section>
        <Footer />
      </div>
    </div>
  );
}

export default App;