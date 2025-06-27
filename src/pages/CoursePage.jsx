import React from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

// База данных курсов
const courseData = {
  'html-css': {
    title: 'HTML & CSS',
    description: 'Изучите основы веб-разработки: структура сайта, таблицы стилей и адаптивный дизайн.',
    content: 'В этом курсе вы узнаете, как создавать валидные HTML-документы, применять CSS-стили, работать с Flexbox и Grid, использовать медиа-запросы для мобильных устройств.',
    duration: '4 недели',
    level: 'Начальный'
  },
  'javascript': {
    title: 'JavaScript',
    description: 'Изучите язык программирования JavaScript и научитесь создавать динамические веб-приложения.',
    content: 'Вы освоите переменные, циклы, функции, работу с DOM, события, асинхронность и многое другое.',
    duration: '5 недель',
    level: 'Средний'
  },
  'react': {
    title: 'React',
    description: 'Создание интерфейсов с помощью популярной библиотеки React.',
    content: 'Компоненты, хуки, управление состоянием, маршрутизация, работа с API и другие продвинутые темы.',
    duration: '6 недель',
    level: 'Продвинутый'
  },
  'node-js': {
    title: 'Node.js',
    description: 'Серверное программирование на JavaScript.',
    content: 'Вы научитесь создавать серверы, работать с базами данных, использовать Express, JWT, REST API и многое другое.',
    duration: '6 недель',
    level: 'Продвинутый'
  }
};

export default function CoursePage() {
  const { slug } = useParams();
  const course = courseData[slug];

  if (!course) {
    return (
      <div className="bg-black text-white min-h-screen flex items-center justify-center p-6">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Курс не найден</h2>
          <Link to="/" className="text-yellow-400 underline">← Вернуться к списку курсов</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-black text-white min-h-screen py-12 px-6">
      <div className="container mx-auto max-w-3xl">
        <Link to="/" className="text-yellow-400 text-sm mb-4 inline-block">← К списку курсов</Link>
        <h1 className="text-4xl font-bold mb-4 text-yellow-400">{course.title}</h1>
        <p className="text-lg mb-6 text-gray-300">{course.description}</p>

        <div className="bg-gray-800 border border-red-700 p-6 rounded-lg mb-6">
          <h2 className="text-xl font-bold mb-2">О курсе</h2>
          <p className="mb-4">{course.content}</p>
          <div className="flex space-x-6 text-sm text-gray-400">
            <div>
              <div className="font-semibold text-white">Уровень:</div>
              <div>{course.level}</div>
            </div>
            <div>
              <div className="font-semibold text-white">Длительность:</div>
              <div>{course.duration}</div>
            </div>
          </div>
        </div>

        <Link
            to={`/course/${slug}/learn`}
            className="bg-red-700 hover:bg-red-600 text-white px-6 py-2 rounded uppercase font-semibold transition"
            >
            Начать обучение
        </Link>
      </div>
    </div>
  );
}