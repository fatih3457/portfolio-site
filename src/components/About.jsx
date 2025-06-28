function About({ triggerAnimation }) {
    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
            <div
                className={`mt-10 max-w-4xl mx-auto flex items-center bg-white p-6 rounded-lg shadow-lg ${triggerAnimation ? 'animate-slide-up' : ''
                    }`}
            >
                <img
                    src="/src/assets/about2.jpeg"
                    alt="Hakkımda Resmi"
                    className="w-96 h-96 rounded-lg object-cover"
                />
                <div
                    className={`ml-6 text-left ${triggerAnimation ? 'animate-slide-left' : ''}`}
                >
                    <div className="ml-6 text-left animate-slide-left">

                        <div className="bg-gradient-to-r from-blue-50 to-gray-100 p-6 rounded-lg shadow-md space-y-3">
                            <p className="text-lg font-semibold italic text-blue-700">
                                Bilgisayar Programcılığı ve Yönetim Bilişim Sistemleri mezunuyum.
                            </p>
                            <p className="text-lg font-semibold italic text-blue-700">
                                Yeni teknolojileri öğrenmeye istekli, analitik düşünme becerilerine sahip bir Yazılım Geliştiricisisi
                                olmayı hedefliyorum.
                            </p>
                            <p className="text-lg font-semibold italic text-blue-700">
                                Java, Spring Boot ve ReactJS konularında kendimi sürekli geliştiriyorum.
                            </p>
                            <p className="text-lg font-semibold italic text-blue-700">
                                Takım çalışmasına uygun, güçlü iletişim becerilerine sahip, sürekli öğrenmeye açık ve 
                                gelişime odaklanmış biri olarak yazılım sektöründe değer katmayı hedefliyorum.
                            </p>
                        </div>
                    </div>






                    {/* 
          Bilgisayar Programcılığı ve Yönetim Bilişim Sistemleri mezunuyum. Yeni teknolojileri öğrenmeye istekli,
          analitik düşünme becerilerine sahip ve problem çözmeye odaklanmış bir Yazılım Geliştiricisi olmayı hedefliyorum.
          Java, Spring Boot ve ReactJS konularında kendimi sürekli geliştiriyorum. Takım çalışmasına uygun, 
          güçlü iletişim becerilerine sahip, sürekli öğrenmeye açık ve gelişime odaklanmış biri olarak
          yazılım sektöründe değer katmayı hedefliyorum.
            </p> */}
                </div>
            </div>
        </div>
    );
}

export default About;