import React, { useState, useEffect } from 'react';
import FeatureCard from './FeatureCard';
import { Clock, Users, Zap, Award, Globe, Heart } from 'lucide-react';

export default function FeaturesSection() {
  const features = [
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
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % features.length);
    }, 3000); // Меняем каждые 3 секунды

    return () => clearInterval(interval);
  }, [features.length]);

  return (
    <section id="features" className="py-20 bg-gradient-to-br from-gray-900 to-black relative overflow-hidden">
      {/* Фоновые декоративные элементы */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-yellow-500/20 via-transparent to-red-500/20"></div>
      </div>
      
      <div className="absolute top-1/4 right-10 w-64 h-64 bg-yellow-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-10 w-64 h-64 bg-red-500/10 rounded-full blur-3xl"></div>

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
        <div className="relative overflow-hidden py-8">
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {[...features, ...features].map((feature, index) => (
              <div 
                key={index}
                className="flex-shrink-0 w-full md:w-1/2 lg:w-1/3 px-4"
              >
                <div className="group relative h-full">
                  <div className={`absolute inset-0 bg-gradient-to-r ${feature.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-all duration-500`}></div>
                  <FeatureCard
                    icon={feature.icon}
                    title={feature.title}
                    description={feature.description}
                    className="relative bg-gray-800/40 backdrop-blur-lg border border-gray-700/50 rounded-2xl p-8 transition-all duration-300 hover:border-transparent hover:bg-gray-800/60 hover:-translate-y-2 shadow-xl hover:shadow-2xl h-full"
                    iconClassName={`p-3 rounded-xl bg-gradient-to-r ${feature.color} mb-6`}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Индикаторы */}
        <div className="flex justify-center mt-8 space-x-2">
          {features.map((_, index) => (
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