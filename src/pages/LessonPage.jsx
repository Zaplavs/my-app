import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { courseLessons } from '../data/courses/index'; // Обновленный путь к courseLessons

export default function LessonPage() {
  const { slug, lessonId } = useParams();
  const [lesson, setLesson] = useState(null);
  const [userCode, setUserCode] = useState('');
  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    async function loadLesson() {
      try {
        const lessonLoader = courseLessons[slug]?.[lessonId]; // Теперь используем courseLessons вместо coursesData
        if (!lessonLoader) {
          throw new Error('Урок не найден');
        }

        const module = await lessonLoader();
        setLesson(module.default);
      } catch (err) {
        console.error('Ошибка загрузки урока:', err);
        setLesson(null);
      }
    }

    loadLesson();
  }, [slug, lessonId]);

  if (!lesson) {
    return (
      <div className="bg-black text-white min-h-screen flex items-center justify-center p-6">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Урок не найден</h2>
          <a href="/courses" className="text-yellow-400 underline">← Вернуться к курсу</a>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-black text-white min-h-screen py-8 px-4">
      <div className="container mx-auto max-w-3xl">
        <a href={`/course/${slug}/learn`} className="text-yellow-400 text-sm mb-4 inline-block">← К плану курса</a>
        <h1 className="text-3xl font-bold mb-6 text-yellow-400">{lesson.title}</h1>

        <div className="bg-gray-800 border border-red-700 rounded p-6 shadow-md mb-6">
          <div dangerouslySetInnerHTML={{ __html: lesson.content }} />
        </div>

        <div className="bg-gray-800 border border-red-700 rounded p-6 shadow-md mb-6">
          <h3 className="font-bold mb-2">Задание:</h3>
          <p>{lesson.task}</p>
          <textarea
            value={userCode}
            onChange={(e) => setUserCode(e.target.value)}
            placeholder="Введите ваш HTML/CSS здесь..."
            rows="6"
            className="w-full bg-gray-700 border border-red-700 rounded p-3 mt-2 text-white placeholder-gray-400"
          />
          <button
            onClick={() => setCompleted(true)}
            className={`mt-4 px-4 py-2 rounded ${completed ? 'bg-green-700' : 'bg-red-700'} hover:opacity-90 transition`}
          >
            {completed ? 'Выполнено ✅' : 'Пометить как выполненное'}
          </button>
        </div>

        <div className="flex justify-between">
          {parseInt(lessonId) > 1 && (
            <a
              href={`/course/${slug}/learn/${parseInt(lessonId) - 1}`}
              className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded transition"
            >
              ← Предыдущий
            </a>
          )}
          {/* Динамическое ограничение на количество уроков в курсе */}
          {parseInt(lessonId) < Object.keys(courseLessons[slug]).length && (
            <a
              href={`/course/${slug}/learn/${parseInt(lessonId) + 1}`}
              className="bg-blue-700 hover:bg-blue-600 text-white px-4 py-2 rounded transition"
            >
              Следующий →
            </a>
          )}
        </div>
      </div>
    </div>
  );
}