function Projects({ triggerAnimation }) {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-2">
      <div
        className={`w-full max-w-4xl bg-white p-4 md:p-8 rounded-lg shadow-lg ${
          triggerAnimation ? 'animate-slide-up' : ''
        }`}
      >
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 text-center">
          Projeler, Çalışmalar, Pratikler
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-50 p-4 md:p-6 rounded-lg shadow-md">
            <h3 className="text-lg md:text-xl font-semibold text-gray-700 mb-2">
              Java & Spring Boot ile Basit REST API 
            </h3>
            <p className="text-gray-600 mb-2 text-sm md:text-base">
              Bu projede Java ve Spring Boot kullanarak temel CRUD işlemlerini gerçekleştiren bir REST API geliştirdim
            </p>
            <p className="text-gray-500 italic text-xs md:text-sm">
              Teknolojiler: Java 17, Spring Boot, H2 Database, Maven
            </p>
            <a
              href="https://github.com/fatih3457/springboot-person-api"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-block text-blue-600 hover:underline"
            >
              GitHub’da Gör
            </a>
          </div>
          <div className="bg-gray-50 p-4 md:p-6 rounded-lg shadow-md">
            <h3 className="text-lg md:text-xl font-semibold text-gray-700 mb-2">
              Portföy Sitesi
            </h3>
            <p className="text-gray-600 mb-2 text-sm md:text-base">
              ReactJS ve Tailwind CSS ile geliştirdiğim tek sayfa bir portföy sitesi. Bu proje, frontend becerilerimi sergilemek için tasarlandı.
            </p>
            <p className="text-gray-500 italic text-xs md:text-sm">
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
          <div className="bg-gray-50 p-4 md:p-6 rounded-lg shadow-md">
            <h3 className="text-lg md:text-xl font-semibold text-gray-700 mb-2">
              Java Pratikleri
            </h3>
            <p className="text-gray-600 mb-2 text-sm md:text-base">
              Java öğrenirken yaptığım projeler
            </p>
            <p className="text-gray-500 italic text-xs md:text-sm">
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
          <div className="bg-gray-50 p-4 md:p-6 rounded-lg shadow-md">
            <h3 className="text-lg md:text-xl font-semibold text-gray-700 mb-2">
              JavaScript Pratikleri
            </h3>
            <p className="text-gray-600 mb-2 text-sm md:text-base">
              JavaScript öğrenirken yaptığım projeler
            </p>
            <p className="text-gray-500 italic text-xs md:text-sm">
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
          <div className="bg-gray-50 p-4 md:p-6 rounded-lg shadow-md">
            <h3 className="text-lg md:text-xl font-semibold text-gray-700 mb-2">
              ReactJS Pratikleri
            </h3>
            <p className="text-gray-600 mb-2 text-sm md:text-base">
              ReactJS öğrenirken yaptığım projeler
            </p>
            <p className="text-gray-500 italic text-xs md:text-sm">
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
          <div className="bg-gray-50 p-4 md:p-6 rounded-lg shadow-md">
            <h3 className="text-lg md:text-xl font-semibold text-gray-700 mb-2">
              Bootstrap Medium Clone
            </h3>
            <p className="text-gray-600 mb-2 text-sm md:text-base">
              Bootstrap öğrenirken yaptığım proje-clone
            </p>
            <p className="text-gray-500 italic text-xs md:text-sm">
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