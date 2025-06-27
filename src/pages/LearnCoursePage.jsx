import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';

// Темы для курса HTML & CSS
const htmlCssLessons = [
  {
    id: 1,
    title: "Что такое HTML?",
    content: "HTML — это язык разметки документов. Он используется для создания структуры веб-страниц. Основные теги: <html>, <head>, <body>, <h1>–<h6>, <p>, <a>, <img>.",
    task: "Создайте простой HTML-документ с заголовком и абзацем."
  },
  {
    id: 2,
    title: "Таблицы и списки",
    content: "В HTML можно создавать списки (<ul>, <ol>, <li>) и таблицы (<table>, <tr>, <td>, <th>).",
    task: "Создайте список продуктов и таблицу с данными о товарах."
  },
  {
    id: 3,
    title: "CSS: стилизация страницы",
    content: "CSS позволяет оформлять внешний вид HTML-элементов: цвет, шрифт, размеры, расположение.",
    task: "Добавьте CSS к вашему HTML-файлу, чтобы изменить цвет фона и текста."
  }
];

export default function LearnCoursePage() {
  const { slug } = useParams();
  const [completed, setCompleted] = useState({});

  const lessons = htmlCssLessons;

  return (
    <div className="bg-black text-white min-h-screen py-8 px-4">
      <div className="container mx-auto max-w-3xl">
        <Link to={`/course/${slug}`} className="text-yellow-400 text-sm mb-4 inline-block">← К курсу</Link>
        <h1 className="text-3xl font-bold mb-6 text-yellow-400">Обучение: HTML & CSS</h1>

        <div className="space-y-6">
          {lessons.map((lesson) => (
            <div key={lesson.id} className="bg-gray-800 border border-red-700 rounded p-6 shadow-md">
              <h2 className="text-xl font-bold mb-2">{lesson.title}</h2>
              <p className="mb-4 text-gray-300">{lesson.content}</p>
              <div className="border-t border-gray-700 pt-4">
                <h3 className="font-semibold mb-2">Задание:</h3>
                <p className="mb-4">{lesson.task}</p>
                <button
                  onClick={() => setCompleted(prev => ({ ...prev, [lesson.id]: !prev[lesson.id] }))}
                  className={`px-4 py-2 rounded ${completed[lesson.id] ? 'bg-green-700' : 'bg-red-700'} hover:opacity-90 transition`}
                >
                  {completed[lesson.id] ? 'Выполнено ✅' : 'Пометить как выполненное'}
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link
            to={`/course/${slug}`}
            className="inline-block bg-red-700 hover:bg-red-600 text-white px-6 py-2 rounded uppercase font-semibold transition"
          >
            Завершить курс
          </Link>
        </div>
      </div>
    </div>
  );
}