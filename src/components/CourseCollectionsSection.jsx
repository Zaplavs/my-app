// src/components/CourseCollectionsSection.jsx

import { useState } from 'react';


export default function CourseCollectionsSection() {
  const collections = [
    {
      id: 1,
      title: 'Python',
      description: 'Курс для тех, кто хочет стать программистом нового поколения.',
      image: 'https://placehold.co/600x400?text=Python',
    },
    {
      id: 2,
      title: 'SQL',
      description: 'Манипуляции с данными для эффективной работы в системах.',
      image: ' https://placehold.co/600x400?text=SQL',
    },
    {
      id: 3,
      title: 'JavaScript',
      description: 'Фундамент современной веб-революции.',
      image: ' https://placehold.co/600x400?text=JS',
    },
    {
      id: 4,
      title: 'React',
      description: 'Путь к созданию интерфейсов для массового использования.',
      image: ' https://placehold.co/600x400?text=React',
    },
    {
      id: 5,
      title: 'Data Science',
      description: 'Анализ данных для планирования экономики будущего.',
      image: ' https://placehold.co/600x400?text=DS',
    },
    {
      id: 6,
      title: 'DevOps',
      description: 'Автоматизация процессов ради повышения производительности труда.',
      image: ' https://placehold.co/600x400?text=DevOps',
    },
    {
      id: 7,
      title: 'Другое',
      description: 'Сайты с полезной информацией в сфере IT',
      image: ' https://placehold.co/600x400?text=ДРУГОЕ',
    },
    {
      id: 8,
      title: 'С++',
      description: 'Подборка бесплатных курсов и материалов по C++',
      image: ' https://placehold.co/600x400?text=С++',
    },
  ];

  return (
    <section id="collections" className="py-24 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-center bg-gradient-to-r from-red-500 via-pink-500 to-purple-500 text-transparent bg-clip-text">
          Подборки бесплатных курсов
        </h2>
        <p className="text-center text-gray-400 max-w-2xl mx-auto mb-16 text-lg md:text-xl">
          Выберите интересующее направление и начните обучение уже сегодня.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {collections.map((item) => (
            <CollectionCard key={item.id} item={item} />
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
      className="relative overflow-hidden rounded-2xl bg-gray-800 shadow-lg transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="overflow-hidden h-64 sm:h-52 md:h-64 relative">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover transition-transform duration-700 ease-in-out transform hover:scale-110"
        />
        <div
          className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 transition-opacity duration-300 ${
            hovered ? 'opacity-100' : ''
          }`}
        ></div>
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-pink-400">
          {item.title}
        </h3>
        <p className="text-gray-300 mb-6 leading-relaxed">{item.description}</p>
        <a
          href={`/courses/${item.id}`}
          className="group inline-flex items-center font-medium text-red-400 hover:text-white transition-colors duration-300"
        >
          Перейти к курсам
          <span className="ml-2 transform transition-transform duration-300 group-hover:translate-x-1">→</span>
        </a>
      </div>
    </div>
  );
}