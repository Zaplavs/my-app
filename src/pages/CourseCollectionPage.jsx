// src/pages/CourseCollectionPage.jsx или аналогичный путь

import { useParams } from 'react-router-dom';
import React, { useEffect } from 'react';
import courseData from '../data/courseData'; // Импорт данных

export default function CourseCollectionPage() {
  const { id } = useParams();
  const collection = courseData[id];

  if (!collection) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black text-white p-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Курсы не найдены</h2>
          <p>Попробуйте вернуться назад и выбрать другой раздел.</p>
          <a href="/#collections" className="mt-4 inline-block text-red-400 hover:text-red-300 underline">
            Назад к подборкам
          </a>
        </div>
      </div>
    );
  }

  // Используем useEffect для корректной инициализации рекламного блока
  useEffect(() => {
    window.yaContextCb = window.yaContextCb || [];

    window.yaContextCb.push(() => {
      if (typeof Ya === 'undefined' || !Ya.Context || !Ya.Context.AdvManager) {
        console.warn('Яндекс.РТБ не загружен');
        return;
      }

      Ya.Context.AdvManager.render({
        blockId: "R-A-16179039-1",
        renderTo: "yandex_rtb_R-A-16179039-1"
      });
    });

    // Очистка при размонтировании
    return () => {
      window.yaContextCb = [];
    };
  }, []);

  return (
    <section className="min-h-screen bg-black text-white py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-extrabold mb-12 text-center text-red-600">{collection.title}</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {collection.courses.map((course, index) => (
            <div
              key={index}
              className="bg-red-950 border border-red-800 rounded-lg overflow-hidden shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              <img
                src={course.image}
                alt={course.name}
                className="w-full h-40 object-cover"
              />
              <div className="p-6 bg-black">
                <h3 className="text-xl font-bold mb-2">{course.name}</h3>
                <p className="text-gray-300 mb-4 text-sm">{course.description}</p>
                <a
                  href={course.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-red-400 hover:text-red-300 font-medium group"
                >
                  Перейти к курсу
                  <span className="ml-2 transform transition-transform group-hover:translate-x-1">→</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Рекламный блок Яндекс.РТБ */}
        <div className="my-12">
          <div id="yandex_rtb_R-A-16179039-1"></div>
        </div>

        <div className="mt-12 text-center">
          <a
            href="/#collections"
            className="text-white bg-red-700 px-6 py-3 rounded hover:bg-red-800 inline-block transition"
          >
            Назад к подборкам
          </a>
        </div>
      </div>
    </section>
  );
}