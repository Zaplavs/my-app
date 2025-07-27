// src/components/CourseCollectionsSection.jsx

import { useState } from 'react';
import { ChevronRight, Code, Database, Globe, BarChart3, Server, BookOpen, Cpu } from 'lucide-react';

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

  return (
    <section id="collections" className="py-24 bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white relative overflow-hidden">
      {/* Анимированные фоновые элементы */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-500/20 via-transparent to-purple-500/20"></div>
      </div>
      
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Заголовок секции */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-900/30 to-purple-900/30 backdrop-blur-sm border border-blue-800/30 rounded-full px-6 py-2 mb-6">
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
            <span className="text-blue-300 font-medium uppercase tracking-wider">Наши подборки</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-black mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
            Подборки курсов
          </h2>
          
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Выберите интересующее направление и начните обучение уже сегодня.
          </p>
        </div>

        {/* Сетка коллекций */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {collections.map((item, index) => (
            <div 
              key={item.id}
              className="group relative"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Градиентный фон при наведении */}
              <div className={`absolute -inset-1 bg-gradient-to-r ${item.color} rounded-2xl blur opacity-0 group-hover:opacity-20 transition-all duration-500`}></div>
              
              <CollectionCard item={item} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CollectionCard({ item }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative overflow-hidden rounded-2xl bg-gray-800/60 backdrop-blur-lg border border-gray-700/50 shadow-xl transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Изображение */}
      <div className="overflow-hidden h-48 sm:h-44 md:h-52 relative">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover transition-transform duration-700 ease-in-out transform group-hover:scale-110"
        />
        <div
          className={`absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 transition-opacity duration-300 ${
            hovered ? 'opacity-100' : ''
          }`}
        ></div>
        
        {/* Иконка в углу */}
        <div className={`absolute top-4 right-4 p-3 rounded-xl bg-gradient-to-r ${item.color} backdrop-blur-sm shadow-lg transform transition-all duration-300 ${hovered ? 'scale-110' : ''}`}>
          {item.icon}
        </div>
      </div>
      
      {/* Контент */}
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
          {item.title}
        </h3>
        <p className="text-gray-300 mb-6 leading-relaxed">
          {item.description}
        </p>
        
        {/* Кнопка действия */}
        <a
          href={`/courses/${item.id}`}
          className="group inline-flex items-center font-bold text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-6 py-3 rounded-xl transition-all duration-300 shadow-lg hover:shadow-blue-500/20"
        >
          <span>Перейти к курсам</span>
          <ChevronRight className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
        </a>
      </div>
      
      {/* Градиентная рамка при наведении */}
      <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${item.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300 -z-10`}></div>
    </div>
  );
}