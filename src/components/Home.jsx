import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import profilImg from '/src/assets/profil.jpeg';

function Home({ scrollToSection, triggerAnimation }) {
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

        {/* Kart */}
        <div
          className={`bg-white dark:bg-gray-800 p-6 sm:p-8 rounded-lg shadow-2xl max-w-lg mx-auto transition-all duration-700 ${
            triggerAnimation ? 'animate-slide-up' : ''
          }`}
        >
          {/* İsim */}
          <h1 className="text-4xl sm:text-5xl font-bold text-blue-900 dark:text-white mb-2 relative inline-block">
            Fatih Özcan
            <span className="block h-1 bg-blue-500 w-1/2 mx-auto mt-2 rounded-full animate-pulse"></span>
          </h1>

          {/* Ünvan */}
          <p className="text-2xl sm:text-3xl font-semibold text-blue-800 dark:text-gray-300 mb-2 animate-fade-in animation-delay-200">
            FullStack Developer
          </p>

          {/* Teknolojiler */}
          <p className="text-xl sm:text-2xl font-medium text-blue-600 dark:text-gray-400 animate-fade-in animation-delay-400">
            JAVA || SPRING BOOT || REACTJS
          </p>
        </div>

        {/* Buton ve Sosyal İkonlar */}
        <div className="mt-6 flex flex-wrap gap-4 justify-center">
          {/* Buton */}
          <button
            onClick={() => scrollToSection('projects')}
            className="bg-blue-600 dark:bg-blue-700 text-white py-2 px-5 rounded-lg hover:scale-105 hover:shadow-lg transform transition-all duration-300"
          >
            Çalışmalarımı Gör
          </button>

          {/* Sosyal Medya */}
          <div className="flex gap-3 mt-2">
            <a
              href="https://github.com/fatih3457"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 dark:bg-gray-700 text-white p-2 rounded-full hover:bg-gray-900 dark:hover:bg-gray-600 transition duration-300 transform hover:scale-110"
            >
              <FaGithub className="w-6 h-6" />
            </a>
            <a
              href="https://linkedin.com/in/fatihozc"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-700 dark:bg-blue-600 text-white p-2 rounded-full hover:bg-blue-800 dark:hover:bg-blue-700 transition duration-300 transform hover:scale-110"
            >
              <FaLinkedin className="w-6 h-6" />
            </a>
            <a
              href="https://twitter.com/fatihzcan"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-sky-500 dark:bg-sky-700 text-white p-2 rounded-full hover:bg-sky-600 dark:hover:bg-sky-800 transition duration-300 transform hover:scale-110"
            >
              <FaTwitter className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;