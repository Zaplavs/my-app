import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { courseLessons } from '../data/courses/index';

export default function LessonPage() {
  const { slug, lessonId } = useParams();
  const [lesson, setLesson] = useState(null);
  const [userCode, setUserCode] = useState('');
  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    async function loadLesson() {
      try {
        const lessonLoader = courseLessons[slug]?.[lessonId];
        if (!lessonLoader) throw new Error('Урок не найден');

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
      <div className="bg-black text-white min-h-screen flex items-center justify-center p-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-6">Урок не найден</h2>
          <a href="/courses" className="text-yellow-400 underline text-lg">← Вернуться к курсу</a>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-black text-white min-h-screen py-10 px-6">
      <div className="container mx-auto max-w-3xl">
        <a href={`/course/${slug}/learn`} className="text-yellow-400 text-base mb-6 inline-block">← К плану курса</a>
        <h1 className="text-4xl font-bold mb-8 text-yellow-400">{lesson.title}</h1>

        <div className="bg-gray-800 border border-red-700 rounded p-8 shadow-md mb-8">
          {lesson.contentBlocks.map((block, index) => {
            if (block.type === 'text') {
              return (
                <div
                  key={index}
                  className="mb-6"
                  dangerouslySetInnerHTML={{ __html: block.text }}
                />
              );
            }

            if (block.type === 'code') {
              return (
                <pre key={index} className="bg-gray-900 p-4 rounded text-yellow-300 mb-6 overflow-x-auto text-base">
                  <code>{block.code}</code>
                </pre>
              );
            }

            return null;
          })}
        </div>

        <div className="bg-gray-800 border border-red-700 rounded p-8 shadow-md mb-10">
          <h3 className="font-bold text-xl mb-3">Задание:</h3>
          <p className="mb-4 text-lg">{lesson.task}</p>
          <textarea
            value={userCode}
            onChange={(e) => setUserCode(e.target.value)}
            placeholder="Введите ваш HTML/CSS здесь..."
            rows="6"
            className="w-full bg-gray-700 border border-red-700 rounded p-4 mt-2 text-white placeholder-gray-400 text-lg"
          />
          <button
            onClick={() => setCompleted(true)}
            className={`mt-6 px-5 py-3 rounded text-lg font-medium ${completed ? 'bg-green-700' : 'bg-red-700'} hover:opacity-90 transition`}
          >
            {completed ? 'Выполнено ✅' : 'Пометить как выполненное'}
          </button>
        </div>

        <div className="flex justify-between gap-4">
          {parseInt(lessonId) > 1 && (
            <a
              href={`/course/${slug}/learn/${parseInt(lessonId) - 1}`}
              className="bg-gray-700 hover:bg-gray-600 text-white px-5 py-3 rounded text-lg transition"
            >
              ← Предыдущий
            </a>
          )}
          {parseInt(lessonId) < Object.keys(courseLessons[slug]).length && (
            <a
              href={`/course/${slug}/learn/${parseInt(lessonId) + 1}`}
              className="bg-blue-700 hover:bg-blue-600 text-white px-5 py-3 rounded text-lg transition"
            >
              Следующий →
            </a>
          )}
        </div>
      </div>
    </div>
  );
}