function Projects({ triggerAnimation }) {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div
        className={`max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg ${
          triggerAnimation ? 'animate-slide-up' : ''
        }`}
      >
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Projeler, Çalışmalar, Pratikler</h2>
        <div className="space-y-6">
          <div className="bg-gray-50 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-700 mb-2">
              Portföy Sitesi
            </h3>
            <p className="text-gray-600 mb-2">
              ReactJS ve Tailwind CSS ile geliştirdiğim tek sayfa bir portföy sitesi. Bu proje, frontend becerilerimi sergilemek için tasarlandı.
            </p>
            <p className="text-gray-500 italic">
              Teknolojiler: ReactJS, Vite, Tailwind CSS, JavaScript
            </p>
            <a
              href="https://github.com/fatih3457/portfolio-site"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-block text-blue-600 hover:underline"
            >
              GitHub’da Gör
            </a>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-700 mb-2">
              Java Pratikleri
            </h3>
            <p className="text-gray-600 mb-2">
              Java öğrenirken yaptığım projeler
            </p>
            <p className="text-gray-500 italic">
              Teknolojiler: Java
            </p>
            <a
              href="https://github.com/fatih3457/java-practices"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-block text-blue-600 hover:underline"
            >
              GitHub’da Gör
            </a>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-700 mb-2">
              JavaScript Pratikleri
            </h3>
            <p className="text-gray-600 mb-2">
              JavaScript öğrenirken yaptığım projeler
            </p>
            <p className="text-gray-500 italic">
              Teknolojiler: Javascript, CSS, HTML
            </p>
            <a
              href="https://github.com/fatih3457/js-projects"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-block text-blue-600 hover:underline"
            >
              GitHub’da Gör
            </a>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-700 mb-2">
              ReactJS Pratikleri
            </h3>
            <p className="text-gray-600 mb-2">
              ReactJS öğrenirken yaptığım projeler
            </p>
            <p className="text-gray-500 italic">
              Teknolojiler: Javascript, CSS, HTML
            </p>
            <a
              href="https://github.com/fatih3457/react-Projects"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-block text-blue-600 hover:underline"
            >
              GitHub’da Gör
            </a>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-700 mb-2">
              Bootstrap Medium Clone
            </h3>
            <p className="text-gray-600 mb-2">
              Bootstrap öğrenirken yaptığım proje-clone
            </p>
            <p className="text-gray-500 italic">
              Teknolojiler: Javascript, CSS, HTML
            </p>
            <a
              href="https://github.com/fatih3457/bootstrap-medium-clone"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-block text-blue-600 hover:underline"
            >
              GitHub’da Gör
            </a>
          </div>
          {/* Daha fazla proje eklemek için burayı kopyala-yapıştır */}
        </div>
      </div>
    </div>
  );
}

export default Projects;