import about2Img from '/src/assets/about2.jpeg';

function About({ triggerAnimation }) {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-2">
      <div
        className={`mt-10 max-w-4xl mx-auto flex flex-col md:flex-row items-center bg-white p-4 sm:p-6 rounded-lg shadow-lg ${
          triggerAnimation ? 'animate-slide-up' : ''
        }`}
      >
        <img
          src={about2Img}
          alt="Hakkımda Resmi"
          className="w-40 h-40 sm:w-60 sm:h-60 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-lg object-cover mb-6 md:mb-0"
        />
        <div
          className={`md:ml-6 w-full text-left ${triggerAnimation ? 'animate-slide-left' : ''}`}
        >
          <div className="bg-gradient-to-r from-blue-50 to-gray-100 p-4 sm:p-6 rounded-lg shadow-md space-y-3">
            <p className="text-base sm:text-lg font-semibold italic text-blue-700">
              Bilgisayar Programcılığı ve Yönetim Bilişim Sistemleri mezunuyum.
            </p>
            <p className="text-base sm:text-lg font-semibold italic text-blue-700">
              Yeni teknolojileri öğrenmeye istekli, analitik düşünme becerilerine sahip bir Yazılım Geliştiricisisi olmayı hedefliyorum.
            </p>
            <p className="text-base sm:text-lg font-semibold italic text-blue-700">
              Java, Spring Boot ve ReactJS konularında kendimi sürekli geliştiriyorum.
            </p>
            <p className="text-base sm:text-lg font-semibold italic text-blue-700">
              Takım çalışmasına uygun, güçlü iletişim becerilerine sahip, sürekli öğrenmeye açık ve gelişime odaklanmış biri olarak yazılım sektöründe değer katmayı hedefliyorum.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;