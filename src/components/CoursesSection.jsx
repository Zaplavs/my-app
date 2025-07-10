import React from 'react';
import { Link } from 'react-router-dom';
import CourseCard from './CourseCard';

export default function CoursesSection() {
  const courses = [
    {
      id: 1,
      title: "HTML",
      description: "Основы создания сайтов для пролетариата.",
      level: "Начальный",
      slug: "html",
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M4 7V4m0 3h16M4 7l3 9h10l3-9" strokeLinecap="round" />
          <path d="M5 17h14" />
        </svg>
      )
    },
    {
      id: 2,
      title: "CSS",
      description: "Изучи язык для динамических интерфейсов.",
      level: "Средний",
      slug: "css",
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="2" y="6" width="20" height="12" rx="2" />
          <path d="M8 12h8" />
        </svg>
      )
    },
    {
      id: 3,
      title: "GITHUB",
      description: "Фронтенд-революция начинается здесь.",
      level: "Продвинутый",
      slug: "github",
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.387.6.113.795-.26.795-.577v-2.234c-3.338.724-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-.926-.63.07-.617.07-.617 1.03.07 1.582 1.054 1.582 1.054.906 1.552 2.36 1.105 2.93.845.09-.65.35-1.105.63-1.355-2.22-.253-4.555-1.113-4.555-4.943 0-1.09.39-1.983 1.03-2.683-.1-.253-.45-1.27.1-2.647 0 0 .84-.267 2.75 1.026A9.58 9.58 0 0112 6.82a9.53 9.53 0 012.547.337c1.91-1.293 2.75-1.027 2.75-1.027.55 1.377.2 2.393.1 2.646.64.7 1.03 1.593 1.03 2.683 0 3.84-2.34 4.69-4.56 4.937.36.31.69.93.69 1.875v2.8c0 .316.195.69.795.577C20.562 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z" />
        </svg>
      )
    },
    {
      id: 4,
      title: "MARKDOWN",
      description: "Научись делать красивые README.md.",
      level: "Продвинутый",
      slug: "markdown",
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M4 7H20M4 12H20M4 17H20M8 20L12 16 16 20" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    }
  ];

  return (
    <section id="courses" className="py-20 bg-red-950 text-white relative overflow-hidden">
      {/* Фоновые эффекты */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-black via-red-900 to-black"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h3 className="text-4xl font-extrabold mb-4 uppercase tracking-wider">Наши курсы</h3>
          <p className="text-lg opacity-80 max-w-2xl mx-auto">
            Бесплатные курсы для программистов нового мира. Обучайся без буржуазных заморочек.
          </p>
        </div>

        <div className="flex justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {courses.map(course => (
              <CourseCard key={course.id} {...course} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}