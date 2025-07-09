import { useTranslation } from 'react-i18next';

function Projects({ triggerAnimation }) {
  const { t } = useTranslation();
  const projects = t('projects.items', { returnObjects: true });

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex items-center justify-center px-4 py-10">
      <div
        className={`w-full max-w-6xl bg-white dark:bg-gray-800 p-6 sm:p-10 rounded-2xl shadow-xl transition-all duration-700 ${
          triggerAnimation ? 'animate-slide-up' : ''
        }`}
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-800 dark:text-white mb-10">
          {t('projects.title')}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {projects.map((proj, i) => (
            <div
              key={i}
              className={`bg-gray-50 dark:bg-gray-700 p-5 rounded-xl shadow-md transform transition duration-500 hover:scale-105 ${
                triggerAnimation ? 'animate-fade-in animation-delay-200' : ''
              }`}
            >
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                {proj.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base mb-3">
                {proj.description}
              </p>
              <p className="text-gray-500 dark:text-gray-400 italic text-xs sm:text-sm mb-3">
                {proj.tech}
              </p>
              <div className="flex flex-wrap gap-4">
                {proj.links.map((link, idx) => (
                  <a
                    key={idx}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 dark:text-blue-400 hover:underline text-sm"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;