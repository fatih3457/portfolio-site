import { useState } from 'react';

function Navbar({ scrollToSection }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-blue-600 p-4 shadow-lg fixed w-full top-0 z-10">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="text-white font-bold text-xl">Fatih Özcan</div>
        {/* Hamburger icon */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menüyü Aç/Kapat"
        >
          <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 8h16M4 16h16"} />
          </svg>
        </button>
        {/* Menü */}
        <ul className={`flex-col md:flex-row md:flex space-y-4 md:space-y-0 md:space-x-8 text-white font-medium absolute md:static bg-blue-600 left-0 w-full md:w-auto top-16 md:top-0 transition-all duration-300 ease-in ${menuOpen ? 'flex' : 'hidden md:flex'}`}>
          <li>
            <button
              onClick={() => { scrollToSection('home'); setMenuOpen(false); }}
              className="hover:text-blue-200 transition duration-300 w-full text-left md:text-center px-4 py-2 md:p-0"
            >
              Ana Sayfa
            </button>
          </li>
          <li>
            <button
              onClick={() => { scrollToSection('about'); setMenuOpen(false); }}
              className="hover:text-blue-200 transition duration-300 w-full text-left md:text-center px-4 py-2 md:p-0"
            >
              Hakkımda
            </button>
          </li>
          <li>
            <button
              onClick={() => { scrollToSection('projects'); setMenuOpen(false); }}
              className="hover:text-blue-200 transition duration-300 w-full text-left md:text-center px-4 py-2 md:p-0"
            >
              Projeler
            </button>
          </li>
          <li>
            <button
              onClick={() => { scrollToSection('contact'); setMenuOpen(false); }}
              className="hover:text-blue-200 transition duration-300 w-full text-left md:text-center px-4 py-2 md:p-0"
            >
              İletişim
            </button>
          </li>
          <li>
            <a
              href="/portfolio-site/cvFatih.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-200 transition duration-300 w-full text-left md:text-center px-4 py-2 md:p-0"
              onClick={() => setMenuOpen(false)}
            >
              CV
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;