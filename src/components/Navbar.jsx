function Navbar({ scrollToSection }) {
  return (
    <nav className="bg-blue-600 p-4 shadow-lg fixed w-full top-0 z-10">
      <ul className="flex space-x-8 text-white font-medium max-w-7xl mx-auto">
        <li>
          <button
            onClick={() => scrollToSection('home')}
            className="hover:text-blue-200 transition duration-300"
          >
            Ana Sayfa
          </button>
        </li>
        <li>
          <button
            onClick={() => scrollToSection('about')}
            className="hover:text-blue-200 transition duration-300"
          >
            Hakkımda
          </button>
        </li>
        <li>
          <button
            onClick={() => scrollToSection('projects')}
            className="hover:text-blue-200 transition duration-300"
          >
            Projeler
          </button>
        </li>

        <li>
          <button
            onClick={() => scrollToSection('contact')}
            className="hover:text-blue-200 transition duration-300"
          >
            İletişim
          </button>
        </li>

        <li>
          <a
            href="/cvFatih.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-200 transition duration-300"
          >
            CV
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;