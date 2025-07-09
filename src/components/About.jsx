import { useTranslation } from 'react-i18next';
import about2Img from '/src/assets/about2.jpeg';

function About({ triggerAnimation }) {
  const { t } = useTranslation();
  const paragraphs = t('about.paragraphs', { returnObjects: true });

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex items-center justify-center px-4">
      <div
        className={`w-full max-w-5xl bg-white dark:bg-gray-800 p-8 md:p-12 rounded-3xl shadow-2xl flex flex-col md:flex-row gap-8 ${
          triggerAnimation ? 'animate-slide-up' : ''
        }`}
      >
        {/* Görsel */}
        <div className="md:w-1/3 flex justify-center items-start">
          <img
            src={about2Img}
            alt="About"
            className="rounded-2xl shadow-lg w-full max-w-sm hover:scale-105 transition duration-500"
          />
        </div>

        {/* Yazılar */}
        <div className="md:w-2/3 space-y-6">
          <div className="space-y-4 bg-blue-50 dark:bg-gray-700 p-6 rounded-2xl shadow-md">
            {paragraphs.map((p, i) => (
              <p
                key={i}
                className={`text-gray-800 dark:text-gray-200 leading-relaxed font-medium ${
                  triggerAnimation ? `animate-fade-in animation-delay-${i * 200}` : ''
                }`}
              >
                {p}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;