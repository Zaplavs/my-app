import React, { useState, useEffect, useRef } from 'react';
import FeatureCard from './FeatureCard';
import { Clock, Users, Zap, Award, Globe, Heart, Book, Code, BarChart2 } from 'lucide-react';

export default function FeaturesSection() {
  const allFeatures = [
    {
      icon: <Zap className="w-12 h-12" />,
      title: "Бесплатно",
      description: "Все курсы доступны бесплатно для всех желающих обучаться.",
      color: "from-yellow-400 to-orange-500"
    },
    {
      icon: <Award className="w-12 h-12" />,
      title: "Практика",
      description: "Учись решать задачи и создавать реальные приложения.",
      color: "from-blue-400 to-cyan-500"
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: "Сообщество",
      description: "Объединяйся с другими студентами для обмена знаниями и опытом.",
      color: "from-green-400 to-emerald-500"
    },
    {
      icon: <Clock className="w-12 h-12" />,
      title: "Гибкость",
      description: "Учись в удобное время, в удобном для вас темпе.",
      color: "from-purple-400 to-pink-500"
    },
    {
      icon: <Globe className="w-12 h-12" />,
      title: "Доступность",
      description: "Образование для всех, независимо от возраста и уровня подготовки.",
      color: "from-red-400 to-rose-500"
    },
    {
      icon: <Heart className="w-12 h-12" />,
      title: "Поддержка",
      description: "Получай помощь от преподавателей и сообщества студентов.",
      color: "from-amber-400 to-yellow-500"
    },
    {
      icon: <Book className="w-12 h-12" />,
      title: "Актуальность",
      description: "Самые современные технологии и подходы в обучении.",
      color: "from-indigo-400 to-violet-500"
    },
    {
      icon: <Code className="w-12 h-12" />,
      title: "Проекты",
      description: "Создавай портфолио реальных проектов во время обучения.",
      color: "from-teal-400 to-emerald-500"
    },
    {
      icon: <BarChart2 className="w-12 h-12" />,
      title: "Прогресс",
      description: "Отслеживай свой прогресс и достижения.",
      color: "from-sky-400 to-blue-500"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleCount = 3; // Количество одновременно видимых карточек

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % allFeatures.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [allFeatures.length]);

  const getVisibleFeatures = () => {
    const features = [];
    for (let i = 0; i < visibleCount; i++) {
      const index = (currentIndex + i) % allFeatures.length;
      features.push(allFeatures[index]);
    }
    return features;
  };

  const sectionRef = useRef(null);
  const bgBlob1Ref = useRef(null);
  const bgBlob2Ref = useRef(null);
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
      if (bgBlob1Ref.current) bgBlob1Ref.current.style.transform = `translate3d(${px * 30}px, ${py * 30}px, 0)`;
      if (bgBlob2Ref.current) bgBlob2Ref.current.style.transform = `translate3d(${px * -40}px, ${py * -40}px, 0)`;
    };
    cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(animate);
  };

  const handleMouseLeave = () => {
    if (bgBlob1Ref.current) bgBlob1Ref.current.style.transform = '';
    if (bgBlob2Ref.current) bgBlob2Ref.current.style.transform = '';
  };

  return (
    <section
      id="features"
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="py-20 bg-gradient-to-br from-gray-950 to-black relative overflow-hidden"
      style={{ perspective: '900px' }}
    >
      {/* Фоновые декоративные элементы */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-yellow-500/20 via-transparent to-red-500/20"></div>
      </div>
      
      <div ref={bgBlob1Ref} className="absolute top-1/4 right-10 w-64 h-64 bg-yellow-500/10 rounded-full blur-3xl" aria-hidden></div>
      <div ref={bgBlob2Ref} className="absolute bottom-1/4 left-10 w-64 h-64 bg-red-500/10 rounded-full blur-3xl" aria-hidden></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Заголовок секции */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-red-900/30 to-yellow-900/30 backdrop-blur-sm border border-red-800/30 rounded-full px-6 py-2 mb-6">
            <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
            <span className="text-red-300 font-medium uppercase tracking-wider">Наши принципы</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-black mb-6 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-amber-500 to-orange-500">
            Почему мы?
          </h2>
          
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Наши преимущества, которые помогут вам освоить современные технологии.
          </p>
        </div>

        {/* Карусель преимуществ */}
        <div className="relative py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {getVisibleFeatures().map((feature, index) => (
              <div key={index} className="group relative h-full">
                <div className={`absolute inset-0 bg-gradient-to-r ${feature.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-all duration-500`}></div>
                <FeatureCard
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                  className="relative rounded-2xl p-8 h-full"
                  iconClassName={`p-3 rounded-xl bg-gradient-to-r ${feature.color} mb-6`}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Индикаторы */}
        <div className="flex justify-center mt-8 space-x-2">
          {allFeatures.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'bg-gradient-to-r from-yellow-400 to-orange-500 w-8'
                  : 'bg-gray-600'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}