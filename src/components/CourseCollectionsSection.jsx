// src/components/CourseCollectionsSection.jsx

import { Link } from 'react-router-dom';

export default function CourseCollectionsSection() {
  const collections = [
    { id: 1, title: 'Python', description: 'Курс для тех, кто хочет стать программистом нового поколения.', image: 'https://placehold.co/300x200?text=Python' },
    { id: 2, title: 'SQL', description: 'Манипуляции с данными для эффективной работы в системах.', image: ' https://placehold.co/300x200?text=SQL' },
    { id: 3, title: 'JavaScript', description: 'Фундамент современной веб-революции.', image: ' https://placehold.co/300x200?text=JS' },
    { id: 4, title: 'React', description: 'Путь к созданию интерфейсов для массового использования.', image: ' https://placehold.co/300x200?text=React' },
    { id: 5, title: 'Data Science', description: 'Анализ данных для планирования экономики будущего.', image: ' https://placehold.co/300x200?text=DS' },
    { id: 6, title: 'DevOps', description: 'Автоматизация процессов ради повышения производительности труда.', image: ' https://placehold.co/300x200?text=DevOps' },
  ];

  return (
    <section id="collections" className="py-20 bg-black text-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-extrabold mb-16 text-center tracking-wide text-red-600">
          Подборки бесплатных курсов
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {collections.map((item) => (
            <div
              key={item.id}
              className="bg-red-950 border border-red-800 rounded-lg overflow-hidden shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              <img src={item.image} alt={item.title} className="w-full h-48 object-cover" />
              <div className="p-6 bg-black">
                <h3 className="text-2xl font-bold mb-3 text-red-500">{item.title}</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">{item.description}</p>
                <Link
                  to={`/courses/${item.id}`}
                  className="inline-flex items-center text-red-400 hover:text-white font-medium group"
                >
                  Перейти к курсам
                  <span className="ml-2 transform transition-transform group-hover:translate-x-1">→</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}