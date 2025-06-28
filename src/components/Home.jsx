import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

function Home({ scrollToSection, triggerAnimation }) {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 to-gray-100 flex items-center justify-center">
      <div className="text-center">
        <img
          src="/src/assets/profil.jpeg"
          alt="Profil Fotoğrafım"
          className={`w-60 h-60 rounded-full mx-auto mb-6 shadow-md ${
            triggerAnimation ? 'animate-bounce' : ''
          }`}
        />
        <div
          className={`bg-white p-6 rounded-lg shadow-lg max-w-lg mx-auto ${
            triggerAnimation ? 'animate-slide-up' : ''
          }`}
        >
          <h1
            className={`text-5xl font-bold text-blue-900 mb-4 ${
              triggerAnimation ? 'animate-slide-up' : ''
            }`}
          >
            Fatih Özcan
          </h1>
          <p
            className={`text-4xl font-semibold text-blue-800 mb-2 ${
              triggerAnimation ? 'animate-slide-up animation-delay-200' : ''
            }`}
          >
            FullStack Developer
          </p>
          <p
            className={`text-3xl font-semibold text-blue-600 mb-2 ${
              triggerAnimation ? 'animate-slide-up animation-delay-700' : ''
            }`}
          >
            JAVA || SPRING BOOT || REACTJS
          </p>
        </div>
        <div className="mt-6 flex space-x-4 justify-center">
          <button
            onClick={() => scrollToSection('projects')}
            className={`bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition duration-300 ${
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