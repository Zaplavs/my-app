import React from 'react';
import { Link } from 'react-router-dom';
import CourseCard from './CourseCard';
import { Code, Palette, GitBranch, FileText, Terminal } from 'lucide-react';

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
    }
  ];

  return (
    <section id="courses" className="py-20 bg-gradient-to-br from-gray-900 via-red-950 to-black text-white relative overflow-hidden">
      {/* Анимированные фоновые элементы */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-red-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-yellow-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Заголовок секции */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-red-900/30 backdrop-blur-sm border border-red-800/50 rounded-full px-6 py-2 mb-6">
            <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
            <span className="text-red-300 font-medium">Обучение нового поколения</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-black mb-6 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-red-400 to-orange-500">
            Наши курсы
          </h2>
          
          <p className="text-xl opacity-90 max-w-3xl mx-auto leading-relaxed">
            Бесплатные курсы для программистов нового мира. Обучайся без буржуазных заморочек.
          </p>
        </div>

        {/* Сетка курсов */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {courses.map((course, index) => (
            <div 
              key={course.id}
              className="group relative"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-red-600/20 to-yellow-600/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-100"></div>
              
              <CourseCard 
                {...course} 
                className="relative bg-gray-800/40 backdrop-blur-lg border border-gray-700/50 rounded-2xl p-6 transition-all duration-300 hover:border-red-500/30 hover:bg-gray-800/60 hover:-translate-y-2 shadow-xl hover:shadow-2xl hover:shadow-red-500/20"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}