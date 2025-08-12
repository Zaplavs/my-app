// src/components/CourseCollectionsSection.jsx

import { useState, useRef, useEffect } from 'react';
import { ChevronRight, Code, Database, Globe, BarChart3, Server, BookOpen, Cpu } from 'lucide-react';
import CourseCarousel from './CourseCarousel';

export default function CourseCollectionsSection() {
  const collections = [
    {
      id: 1,
      title: 'Python',
      description: 'Курс для тех, кто хочет стать программистом нового поколения.',
      image: 'https://placehold.co/600x400?text=Python',
      icon: <Code className="w-6 h-6" />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      id: 2,
      title: 'SQL',
      description: 'Манипуляции с данными для эффективной работы в системах.',
      image: 'https://placehold.co/600x400?text=SQL',
      icon: <Database className="w-6 h-6" />,
      color: "from-green-500 to-emerald-500"
    },
    {
      id: 3,
      title: 'JavaScript',
      description: 'Фундамент современной веб-разработки.',
      image: 'https://placehold.co/600x400?text=JS',
      icon: <Globe className="w-6 h-6" />,
      color: "from-yellow-500 to-orange-500"
    },
    {
      id: 4,
      title: 'React',
      description: 'Создание современных пользовательских интерфейсов.',
      image: 'https://placehold.co/600x400?text=React',
      icon: <Globe className="w-6 h-6" />,
      color: "from-cyan-500 to-blue-500"
    },
    {
      id: 5,
      title: 'Data Science',
      description: 'Анализ данных для принятия обоснованных решений.',
      image: 'https://placehold.co/600x400?text=DS',
      icon: <BarChart3 className="w-6 h-6" />,
      color: "from-purple-500 to-pink-500"
    },
    {
      id: 6,
      title: 'DevOps',
      description: 'Автоматизация процессов для повышения эффективности.',
      image: 'https://placehold.co/600x400?text=DevOps',
      icon: <Server className="w-6 h-6" />,
      color: "from-red-500 to-orange-500"
    },
    {
      id: 7,
      title: 'Другое',
      description: 'Сайты с полезной информацией в сфере IT',
      image: 'https://placehold.co/600x400?text=ДРУГОЕ',
      icon: <BookOpen className="w-6 h-6" />,
      color: "from-gray-500 to-gray-700"
    },
    {
      id: 8,
      title: 'C++',
      description: 'Подборка бесплатных курсов и материалов по C++',
      image: 'https://placehold.co/600x400?text=С++',
      icon: <Cpu className="w-6 h-6" />,
      color: "from-indigo-500 to-purple-500"
    },
  ];

  // Parallax background for the section
  const sectionRef = useRef(null);
  const blob1Ref = useRef(null);
  const blob2Ref = useRef(null);
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
      if (blob1Ref.current) blob1Ref.current.style.transform = `translate3d(${px * 30}px, ${py * 30}px, 0)`;
      if (blob2Ref.current) blob2Ref.current.style.transform = `translate3d(${px * -35}px, ${py * -35}px, 0)`;
    };
    cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(animate);
  };

  const handleMouseLeave = () => {
    if (blob1Ref.current) blob1Ref.current.style.transform = '';
    if (blob2Ref.current) blob2Ref.current.style.transform = '';
  };

  return (
    <section id="collections" ref={sectionRef} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} className="py-24 bg-gradient-to-br from-gray-950 via-black to-gray-950 text-white relative overflow-hidden" style={{ perspective: '1000px' }}>
      {/* Анимированные фоновые элементы */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-500/20 via-transparent to-purple-500/20"></div>
      </div>
      
      <div ref={blob1Ref} className="absolute top-1/4 left-10 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
      <div ref={blob2Ref} className="absolute bottom-1/4 right-10 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse [animation-delay:1.2s]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Заголовок секции */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-900/30 to-purple-900/30 backdrop-blur-sm border border-blue-800/30 rounded-full px-6 py-2 mb-6">
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
            <span className="text-blue-300 font-medium uppercase tracking-wider">Наши подборки</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-black mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 drop-shadow-[0_10px_30px_rgba(0,0,0,0.35)]" style={{ transform: 'translateZ(60px)' }}>
            Подборки курсов
          </h2>
          
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed" style={{ transform: 'translateZ(40px)' }}>
            Выберите интересующее направление и начните обучение уже сегодня.
          </p>
        </div>

        {/* Карусель коллекций */}
        <CourseCarousel collections={collections} />
        
        {/* Кнопка "Посмотреть все" */}
        <div className="text-center mt-12">
          <a
            href="/all-courses"
            className="inline-flex items-center font-bold text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-8 py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-blue-500/20 text-lg"
          >
            <span>Посмотреть все курсы</span>
            <ChevronRight className="ml-2 w-6 h-6 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
}