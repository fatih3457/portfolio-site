import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import profilImg from '/src/assets/profil.jpeg';

function Home({ scrollToSection, triggerAnimation }) {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 to-gray-100 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center px-4">
      <div className="text-center w-full">
        {/* Profil Görseli */}
        <img
          src={profilImg}
          alt="Profil Fotoğrafım"
          className={`w-40 h-40 sm:w-52 sm:h-52 md:w-60 md:h-60 rounded-full mx-auto mb-4 sm:mb-6 shadow-md transform transition-transform duration-500 hover:rotate-6 hover:scale-105 ${
            triggerAnimation ? 'animate-bounce' : ''
          }`}
        />

        {/* Bilgi Kartı */}
        <div
          className={`bg-white dark:bg-gray-800 p-4 sm:p-6 rounded-lg shadow-lg max-w-xs sm:max-w-md md:max-w-lg mx-auto ${
            triggerAnimation ? 'animate-slide-up' : ''
          }`}
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-900 dark:text-white mb-2 sm:mb-4">
            {t('home.name')}
          </h1>
          <p className="text-xl sm:text-2xl md:text-4xl font-semibold text-blue-800 dark:text-gray-300 mb-1 sm:mb-2">
            {t('home.title')}
          </p>
          <p className="text-lg sm:text-2xl md:text-3xl font-semibold text-blue-600 dark:text-gray-400 mb-1 sm:mb-2">
            {t('home.skills')}
          </p>
        </div>

        {/* Butonlar */}
        <div className="mt-4 sm:mt-6 flex flex-wrap gap-3 sm:gap-4 justify-center">
          <button
            onClick={() => scrollToSection('projects')}
            className={`bg-blue-600 dark:bg-blue-700 text-white py-2 px-4 sm:px-6 rounded-lg hover:bg-blue-700 dark:hover:bg-blue-800 transition duration-300 ${
              triggerAnimation ? 'animate-fade-in' : ''
            }`}
          >
            {t('home.button')}
          </button>
          {/* İkonlar */}
          <a
            href="https://github.com/fatih3457"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-800 dark:bg-gray-700 text-white p-2 rounded-full hover:bg-gray-900 dark:hover:bg-gray-600 transition duration-300"
          >
            <FaGithub className="w-6 h-6" />
          </a>
          <a
            href="https://linkedin.com/in/fatihozc"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-700 dark:bg-blue-600 text-white p-2 rounded-full hover:bg-blue-800 dark:hover:bg-blue-700 transition duration-300"
          >
            <FaLinkedin className="w-6 h-6" />
          </a>
          <a
            href="https://twitter.com/fatihzcan"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-sky-500 dark:bg-sky-700 text-white p-2 rounded-full hover:bg-sky-600 dark:hover:bg-sky-800 transition duration-300"
          >
            <FaTwitter className="w-6 h-6" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;