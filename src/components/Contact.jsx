
import { useForm, ValidationError } from '@formspree/react';
import { useTranslation } from 'react-i18next';

function Contact({ triggerAnimation }) {
  const { t } = useTranslation();
  const [state, handleSubmit] = useForm('xnnjklnp');

  if (state.succeeded) {
    return (
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex items-center justify-center px-2">
        <div
          className={`w-full max-w-lg md:max-w-2xl lg:max-w-3xl mx-auto bg-white dark:bg-gray-800 p-4 sm:p-6 md:p-8 rounded-lg shadow-lg text-center ${
            triggerAnimation ? 'animate-slide-up' : ''
          }`}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-6">
            {t('contact.successTitle')}
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            {t('contact.successMessage')}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex items-center justify-center px-2">
      <div
        className={`w-full max-w-lg md:max-w-2xl lg:max-w-3xl mx-auto bg-white dark:bg-gray-800 p-4 sm:p-6 md:p-8 pt-6 rounded-lg shadow-lg ${
          triggerAnimation ? 'animate-slide-up' : ''
        }`}
      >
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-6">
          {t('contact.title')}
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          {t('contact.description')}
        </p>
        <div className="space-y-4 mb-6 text-gray-700 dark:text-gray-200">
          <p>
            <span className="font-semibold">{t('contact.email')}:</span> fatihozcan90@outlook.com
          </p>
          <p>{t('contact.socialMessage')}</p>
          <div className="flex flex-wrap gap-4">
            <a href="https://github.com/fatih3457" className="text-blue-600 hover:underline">
              GitHub
            </a>
            <a href="https://linkedin.com/in/fatihozc" className="text-blue-600 hover:underline">
              LinkedIn
            </a>
            <a href="https://twitter.com/fatihzcan" className="text-blue-600 hover:underline">
              Twitter
            </a>
          </div>
        </div>
        <h3 className="text-lg md:text-xl font-semibold text-gray-700 dark:text-white mb-4">
          {t('contact.formTitle')}
        </h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              id="name"
              type="text"
              name="name"
              placeholder={t('contact.namePlaceholder')}
              required
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            />
            <ValidationError prefix="Name" field="name" errors={state.errors} />
          </div>
          <div>
            <input
              id="email"
              type="email"
              name="email"
              placeholder={t('contact.emailPlaceholder')}
              required
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            />
            <ValidationError prefix="Email" field="email" errors={state.errors} />
          </div>
          <div>
            <textarea
              id="message"
              name="message"
              placeholder={t('contact.messagePlaceholder')}
              required
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 h-32"
            />
            <ValidationError prefix="Message" field="message" errors={state.errors} />
          </div>
          <button
            type="submit"
            disabled={state.submitting}
            className="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition duration-300 w-full sm:w-auto"
          >
            {t('contact.send')}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;