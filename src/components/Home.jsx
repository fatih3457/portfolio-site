import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import profilImg from '/src/assets/profil.jpeg';

function Home({ scrollToSection, triggerAnimation }) {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 to-gray-100 flex items-center justify-center px-2">
      <div className="text-center w-full">
        <img
          src={profilImg}
          alt="Profil Fotoğrafım"
          className={`w-40 h-40 sm:w-52 sm:h-52 md:w-60 md:h-60 rounded-full mx-auto mb-4 sm:mb-6 shadow-md ${
            triggerAnimation ? 'animate-bounce' : ''
          }`}
        />
        <div
          className={`bg-white p-4 sm:p-6 rounded-lg shadow-lg max-w-xs sm:max-w-md md:max-w-lg mx-auto ${
            triggerAnimation ? 'animate-slide-up' : ''
          }`}
        >
          <h1
            className={`text-3xl sm:text-4xl md:text-5xl font-bold text-blue-900 mb-2 sm:mb-4 ${
              triggerAnimation ? 'animate-slide-up' : ''
            }`}
          >
            Fatih Özcan
          </h1>
          <p
            className={`text-xl sm:text-2xl md:text-4xl font-semibold text-blue-800 mb-1 sm:mb-2 ${
              triggerAnimation ? 'animate-slide-up animation-delay-200' : ''
            }`}
          >
            FullStack Developer
          </p>
          <p
            className={`text-lg sm:text-2xl md:text-3xl font-semibold text-blue-600 mb-1 sm:mb-2 ${
              triggerAnimation ? 'animate-slide-up animation-delay-700' : ''
            }`}
          >
            JAVA || SPRING BOOT || REACTJS
          </p>
        </div>
        <div className="mt-4 sm:mt-6 flex flex-wrap gap-3 sm:gap-4 justify-center">
          <button
            onClick={() => scrollToSection('projects')}
            className={`bg-blue-600 text-white py-2 px-4 sm:px-6 rounded-lg hover:bg-blue-700 transition duration-300 ${
              triggerAnimation ? 'animate-fade-in' : ''
            }`}
          >
            Çalışmalarımı Gör
          </button>
          <a
            href="https://github.com/fatih3457"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-800 text-white p-2 rounded-full hover:bg-gray-900 transition duration-300"
          >
            <FaGithub className="w-6 h-6" />
          </a>
          <a
            href="https://linkedin.com/in/fatihozc"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-700 text-white p-2 rounded-full hover:bg-blue-800 transition duration-300"
          >
            <FaLinkedin className="w-6 h-6" />
          </a>
          <a
            href="https://twitter.com/fatihzcan"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-sky-500 text-white p-2 rounded-full hover:bg-sky-600 transition duration-300"
          >
            <FaTwitter className="w-6 h-6" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;