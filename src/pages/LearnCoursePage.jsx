// src/pages/LearnCoursePage.jsx

import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { coursesData } from '../data/courses'; // Импорт данных о курсах

export default function LearnCoursePage() {
  const { slug } = useParams();
  const course = coursesData[slug]; // Получаем данные для текущего курса по slug
  console.info(slug)
  console.info(course)
  if (!course) {
    return (
      <div className="bg-black text-white min-h-screen flex items-center justify-center p-6">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Курс не найден</h2>
          <Link to="/courses" className="text-yellow-400 underline">← Вернуться к списку курсов</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-black text-white min-h-screen py-8 px-4">
      <div className="container mx-auto max-w-3xl">
        <Link to="/courses" className="text-yellow-400 text-sm mb-4 inline-block">← К списку курсов</Link>
        <h1 className="text-3xl font-bold mb-6 text-yellow-400">{course.title}</h1>

        <p className="mb-8 text-gray-300">{course.description}</p>

        <div className="space-y-4">
          {course.lessons.map((lesson) => (
            <div key={lesson.id} className="bg-gray-800 border border-red-700 rounded p-5 shadow-md">
              <h2 className="text-xl font-bold mb-1">{lesson.title}</h2>
              <p className="mb-4 text-gray-300">{lesson.content}</p>
              <Link
                to={`/lesson/${lesson.id}`}
                className="inline-block bg-blue-700 hover:bg-blue-600 text-white px-4 py-2 rounded transition"
              >
                Открыть урок
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link
            to="/courses"
            className="inline-block bg-red-700 hover:bg-red-600 text-white px-6 py-2 rounded uppercase font-semibold transition"
          >
            Завершить курс
          </Link>
        </div>
      </div>
    </div>
  );
}