// src/components/CoursesSection.jsx
import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import CourseCard from './CourseCard';
import { Code, Palette, GitBranch, FileText, Terminal, Zap } from 'lucide-react';

export default function CoursesSection() {
  const courses = [
    {
      id: 1,
      title: "HTML",
      description: "Основы создания сайтов для пролетариата.",
      level: "Начальный",
      slug: "html",
      icon: <Code className="w-8 h-8" />,
      color: "from-orange-500 to-red-600"
    },
    {
      id: 2,
      title: "CSS",
      description: "Изучи язык для динамических интерфейсов.",
      level: "Средний",
      slug: "css",
      icon: <Palette className="w-8 h-8" />,
      color: "from-blue-500 to-purple-600"
    },
    {
      id: 3,
      title: "GITHUB",
      description: "Фронтенд-революция начинается здесь.",
      level: "Продвинутый",
      slug: "github",
      icon: <GitBranch className="w-8 h-8" />,
      color: "from-gray-700 to-gray-900"
    },
    {
      id: 4,
      title: "MARKDOWN",
      description: "Научись делать красивые README.md.",
      level: "Продвинутый",
      slug: "markdown",
      icon: <FileText className="w-8 h-8" />,
      color: "from-gray-600 to-blue-600"
    },
    {
      id: 5,
      title: "Python",
      description: "Научись основам Python",
      level: "Начинающий ур 1",
      slug: "python",
      icon: <Terminal className="w-8 h-8" />,
      color: "from-yellow-500 to-blue-600"
    },
    {
      id: 6,
      title: "FastAPI",
      description: "Современный фреймворк для создания API на Python",
      level: "Продвинутый",
      slug: "fastapi",
      icon: <Zap className="w-8 h-8" />,
      color: "from-teal-500 to-green-600"
    }
  ];

  // Parallax background blobs
  const sectionRef = useRef(null);
  const blob1Ref = useRef(null);
  const blob2Ref = useRef(null);
  const blob3Ref = useRef(null);
  const rafRef = useRef(null);

  useEffect(() => () => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
  }, []);

  const handleMouseMove = (e) => {
    if (!sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const px = x / rect.width - 0.5;
    const py = y / rect.height - 0.5;
    const animate = () => {
      if (blob1Ref.current) blob1Ref.current.style.transform = `translate3d(${px * -30}px, ${py * 30}px, 0)`;
      if (blob2Ref.current) blob2Ref.current.style.transform = `translate3d(${px * 25}px, ${py * -25}px, 0)`;
      if (blob3Ref.current) blob3Ref.current.style.transform = `translate3d(${px * -20}px, ${py * -20}px, 0)`;
    };
    cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(animate);
  };

  const handleMouseLeave = () => {
    if (blob1Ref.current) blob1Ref.current.style.transform = '';
    if (blob2Ref.current) blob2Ref.current.style.transform = '';
    if (blob3Ref.current) blob3Ref.current.style.transform = '';
  };

  return (
    <section
      id="courses"
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="py-24 md:py-32 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 text-white relative overflow-hidden"
      style={{ perspective: '1000px' }}
    >
      {/* Тёмные анимированные фоновые элементы */}
      <div className="absolute inset-0 opacity-[0.15]">
        <div ref={blob1Ref} className="absolute -top-1/3 -right-1/4 w-96 h-96 bg-red-600 rounded-full mix-blend-overlay filter blur-3xl opacity-30 animate-pulse-slow"></div>
        <div ref={blob2Ref} className="absolute top-1/3 left-1/4 w-80 h-80 bg-amber-500 rounded-full mix-blend-overlay filter blur-3xl opacity-25 animate-pulse-slow animation-delay-3000"></div>
        <div ref={blob3Ref} className="absolute -bottom-1/4 -left-1/4 w-96 h-96 bg-blue-600 rounded-full mix-blend-overlay filter blur-3xl opacity-20 animate-pulse-slow animation-delay-5000"></div>
      </div>

      {/* Дополнительный тёмный радиальный градиент для глубины */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(30,30,30,0.15)_0%,rgba(0,0,0,0)_70%)]"></div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Улучшенный заголовок секции */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 bg-red-900/30 backdrop-blur-sm border border-red-800/40 rounded-full px-6 py-2.5 mb-8 shadow-lg shadow-red-900/10">
            <div className="relative">
              <div className="w-2.5 h-2.5 bg-red-500 rounded-full animate-ping absolute opacity-75 inset-0"></div>
              <div className="w-2.5 h-2.5 bg-red-500 rounded-full relative"></div>
            </div>
            <span className="text-red-300 font-semibold tracking-wide text-sm uppercase">Обучение нового поколения</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight drop-shadow-[0_10px_30px_rgba(0,0,0,0.35)]" style={{ transform: 'translateZ(60px)' }}>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 via-red-400 to-orange-500 drop-shadow-[0_2px_2px_rgba(255,100,0,0.3)]">
              Наши
            </span>{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-gray-400 drop-shadow-[0_2px_2px_rgba(200,200,200,0.2)]">
              курсы
            </span>
          </h2>
          
          <div className="max-w-3xl mx-auto">
            <p className="text-lg sm:text-xl md:text-2xl text-gray-300 leading-relaxed px-4" style={{ transform: 'translateZ(40px)' }}>
              Бесплатные курсы для программистов нового мира. Обучайся без буржуазных заморочек.
            </p>
            <div className="mt-8 flex justify-center">
              <div className="h-1 w-24 bg-gradient-to-r from-transparent via-red-500 to-transparent rounded-full"></div>
            </div>
          </div>
        </div>

        {/* Улучшенная сетка курсов */}
        <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 sm:gap-8 px-2">
          {courses.map((course, index) => (
            <div 
              key={course.id}
              className="group relative"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Динамическая подсветка при наведении */}
              <div className={`absolute -inset-0.5 bg-gradient-to-r ${course.color} rounded-3xl blur opacity-0 group-hover:opacity-30 transition-all duration-500 group-hover:duration-300 ease-out`}></div>
              
              {/* Карточка курса с улучшенным дизайном */}
              <CourseCard 
                {...course} 
                className="relative h-full flex flex-col bg-gradient-to-br from-gray-800/40 via-gray-800/30 to-gray-900/40 backdrop-blur-xl border border-gray-700/50 rounded-3xl p-6 transition-all duration-500 hover:border-white/20 hover:bg-gray-800/50 hover:-translate-y-2 shadow-2xl hover:shadow-3xl"
              >
                {/* Добавляем иконку уровня сложности в углу */}
                <div className="absolute top-4 right-4">
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold ${
                    course.level.includes('Начальный') ? 'bg-green-900/40 text-green-400 border border-green-800/60' :
                    course.level.includes('Средний') ? 'bg-yellow-900/40 text-yellow-400 border border-yellow-800/60' :
                    'bg-red-900/40 text-red-400 border border-red-800/60'
                  }`}>
                    {course.level}
                  </span>
                </div>

                {/* Улучшенный контент карточки */}
                <div className="flex flex-col h-full">
                  {/* Иконка курса с анимацией */}
                  <div className={`flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${course.color} mb-5 p-3 shadow-lg shadow-gray-900/50 group-hover:shadow-xl group-hover:scale-110 transition-transform duration-300`}>
                    <div className="text-white drop-shadow-md">
                      {course.icon}
                    </div>
                  </div>

                  {/* Заголовок и описание */}
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-yellow-300 transition-colors duration-300">
                    {course.title}
                  </h3>
                  <p className="text-gray-400 text-sm flex-grow mb-6 leading-relaxed">
                    {course.description}
                  </p>

                  {/* Кнопка "Изучить" */}
                  <Link
                    to={`/course/${course.slug}/learn`}
                    className={`inline-flex items-center justify-center w-full py-3 px-4 rounded-xl text-sm font-bold bg-gradient-to-r ${course.color} text-white shadow-md shadow-gray-900/30 hover:shadow-lg hover:shadow-gray-900/40 transition-all duration-300 transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-white/20`}
                  >
                    Изучить курс
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                </div>
              </CourseCard>
            </div>
          ))}
        </div>
      </div>

      {/* Стили для анимаций */}
      <style jsx>{`
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.15; transform: scale(1); }
          50% { opacity: 0.25; transform: scale(1.05); }
        }
        .animate-pulse-slow {
          animation: pulse-slow 6s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        .animation-delay-3000 {
          animation-delay: 3s;
        }
        .animation-delay-5000 {
          animation-delay: 5s;
        }
        @media (max-width: 640px) {
          .xs\:grid-cols-2 {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }
      `}</style>
    </section>
  );
}