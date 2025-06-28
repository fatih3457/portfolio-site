import { useForm, ValidationError } from '@formspree/react';

function Contact({ triggerAnimation }) {
  const [state, handleSubmit] = useForm('xnnjklnp'); 

  if (state.succeeded) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div
          className={`max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg text-center ${
            triggerAnimation ? 'animate-slide-up' : ''
          }`}
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Mesaj Gönderildi!</h2>
          <p className="text-gray-600">
            Mesajınızı aldım, en kısa sürede size geri döneceğim. Teşekkürler!
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div
        className={`w-[900px] h-[650px] mx-auto bg-white p-8 pt-6 rounded-lg shadow-lg ${
          triggerAnimation ? 'animate-slide-up' : ''
        }`}
      >
        <h2 className="text-3xl font-bold text-gray-800 mb-6">İletişim</h2>
        <p className="text-gray-600 mb-4">
          Benimle iletişime geçmek isterseniz, aşağıdaki bilgileri kullanabilirsiniz:
        </p>
        <div className="space-y-4 mb-6">
          <p className="text-gray-700">
            <span className="font-semibold">E-posta:</span> fatihozcan90@outlook.com
          </p>
          {/* <p className="text-gray-700">
            <span className="font-semibold">Telefon:</span> 
          </p> */}
          <p className="text-gray-700">
            Veya sosyal medya üzerinden bana ulaşabilirsiniz:
          </p>
          <div className="flex space-x-4">
            <a
              href="https://github.com/fatih3457"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/fatihozc"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              LinkedIn
            </a>
            <a
              href="https://twitter.com/fatihzcan"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Twitter
            </a>
          </div>
        </div>
        <h3 className="text-xl font-semibold text-gray-700 mb-4">
          Bana Mesaj Gönderin
        </h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              id="name"
              type="text"
              name="name"
              placeholder="Adınız"
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              required
            />
            <ValidationError prefix="Name" field="name" errors={state.errors} />
          </div>
          <div>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="E-posta Adresiniz"
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              required
            />
            <ValidationError prefix="Email" field="email" errors={state.errors} />
          </div>
          <div>
            <textarea
              id="message"
              name="message"
              placeholder="Mesajınız"
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 h-32"
              required
            />
            <ValidationError prefix="Message" field="message" errors={state.errors} />
          </div>
          <button
            type="submit"
            disabled={state.submitting}
            className="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Gönder
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;