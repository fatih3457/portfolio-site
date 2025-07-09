import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

function Navbar({ scrollToSection, darkMode, setDarkMode }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const toggleTheme = () => {
    setDarkMode((prev) => !prev);
  };

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <nav className="bg-blue-600 dark:bg-gray-800 p-4 shadow-lg fixed w-full top-0 z-10">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4">
        {/* Sol: İsim */}
        <div className="text-white font-bold text-xl">Fatih Özcan</div>

        {/* Orta: Menü */}
        <ul className="hidden md:flex space-x-6 text-white font-medium">
          <li>
            <button onClick={() => scrollToSection('home')} className="hover:text-blue-300 transition duration-300">
              {t('navbar.home')}
            </button>
          </li>
          <li>
            <button onClick={() => scrollToSection('about')} className="hover:text-blue-300 transition duration-300">
              {t('navbar.about')}
            </button>
          </li>
          <li>
            <button onClick={() => scrollToSection('projects')} className="hover:text-blue-300 transition duration-300">
              {t('navbar.projects')}
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                scrollToSection('contact');
                setMenuOpen(false);
              }}
              className="hover:text-blue-200 dark:hover:text-gray-300 transition duration-300 w-full text-left md:text-center px-4 py-2 md:p-0"
            >
              {t('navbar.contact')}
            </button>
          </li>
          <li>
            <a
              href="/portfolio-site/cvFatih.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-300 transition duration-300"
            >
              {t('navbar.cv')}
            </a>
          </li>
        </ul>

        {/* Sağ: Dil ve Tema Butonları */}
        <div className="flex items-center space-x-3">
          <button onClick={() => changeLanguage('tr')} className="text-white text-2xl hover:text-blue-300">🇹🇷</button>
          <button onClick={() => changeLanguage('en')} className="text-white text-2xl hover:text-blue-300">🇬🇧</button>
          <button
            onClick={toggleTheme}
            className="text-white text-2xl hover:text-yellow-400"
            aria-label="Tema Değiştir"
          >
            {darkMode ? '🌞' : '🌙'}
          </button>

          {/* Hamburger menü (mobilde görünür) */}
          <button
            className="md:hidden text-white focus:outline-none ml-2"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d={menuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 8h16M4 16h16'}
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobil Menü */}
      {menuOpen && (
        <div className="md:hidden bg-blue-600 dark:bg-gray-800 px-4 pt-2 pb-4 text-white space-y-2">
          <button onClick={() => { scrollToSection('home'); setMenuOpen(false); }}>{t('navbar.home')}</button>
          <button onClick={() => { scrollToSection('about'); setMenuOpen(false); }}>{t('navbar.about')}</button>
          <button onClick={() => { scrollToSection('projects'); setMenuOpen(false); }}>{t('navbar.projects')}</button>
          <button onClick={() => { scrollToSection('contact'); setMenuOpen(false); }}>{t('navbar.contact')}</button>
          <a
            href="/portfolio-site/cvFatih.pdf"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMenuOpen(false)}
          >
            {t('navbar.cv')}
          </a>
        </div>
      )}
    </nav>
  );
}

export default Navbar;