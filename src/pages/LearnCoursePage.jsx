// src/pages/LearnCoursePage.jsx

import { useParams, Link } from 'react-router-dom';
import { coursesData } from '../data/courses';
import { ArrowLeft, BookOpen, Clock, User, CheckCircle } from 'lucide-react';

export default function LearnCoursePage() {
  const { slug } = useParams();
  const course = coursesData[slug];

  if (!course) {
    return (
      <div className="bg-gradient-to-br from-gray-900 to-black text-white min-h-screen flex items-center justify-center p-6">
        <div className="text-center max-w-md">
          <div className="w-24 h-24 bg-red-900/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <BookOpen className="w-12 h-12 text-red-500" />
          </div>
          <h2 className="text-3xl font-bold mb-4">Курс не найден</h2>
          <p className="text-gray-400 mb-8">Запрашиваемый курс недоступен или был удален</p>
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 shadow-lg hover:shadow-red-500/20"
          >
            <ArrowLeft className="w-4 h-4" />
            Вернуться к курсам
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-br from-gray-900 to-black text-white min-h-screen py-8 px-4">
      <div className="container mx-auto max-w-4xl">
        {/* Навигация */}
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-yellow-400 hover:text-yellow-300 text-sm mb-8 transition-colors duration-200"
        >
          <ArrowLeft className="w-4 h-4" />
          Все курсы
        </Link>

        {/* Заголовок курса */}
        <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 mb-8 shadow-2xl">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
            <h1 className="text-3xl md:text-4xl font-bold text-yellow-400">{course.title}</h1>
            <div className="flex items-center gap-4 text-sm text-gray-400">
              <div className="flex items-center gap-1">
                <BookOpen className="w-4 h-4" />
                {course.lessons.length} уроков
              </div>
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                12 часов
              </div>
            </div>
          </div>
          
          <p className="text-gray-300 text-lg leading-relaxed mb-6">{course.description}</p>
          
          <div className="flex flex-wrap items-center gap-4 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-yellow-500/20 rounded-full flex items-center justify-center">
                <User className="w-4 h-4 text-yellow-400" />
              </div>
              <span>Иван Петров</span>
            </div>
            <div className="h-4 w-px bg-gray-600"></div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center">
                <CheckCircle className="w-4 h-4 text-green-400" />
              </div>
              <span>Прогресс: 0%</span>
            </div>
          </div>
        </div>

        {/* Список уроков */}
        <div className="space-y-4 mb-8">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <BookOpen className="w-6 h-6 text-yellow-400" />
            Содержание курса
          </h2>
          
          {course.lessons.map((lesson, index) => (
            <div 
              key={lesson.id} 
              className="group bg-gray-800/30 hover:bg-gray-800/50 backdrop-blur-sm border border-gray-700 hover:border-yellow-500/30 rounded-xl p-6 transition-all duration-300 shadow-lg hover:shadow-yellow-500/10"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center text-sm font-bold text-yellow-400">
                      {index + 1}
                    </div>
                    <h3 className="text-xl font-semibold group-hover:text-yellow-400 transition-colors duration-200">
                      {lesson.title}
                    </h3>
                  </div>
                  <p className="text-gray-400 ml-11">{lesson.content}</p>
                </div>
                
                <Link
                  to={`/course/${slug}/learn/${lesson.id}`}
                  className="inline-flex items-center justify-center bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 shadow-lg hover:shadow-blue-500/20 whitespace-nowrap"
                >
                  Изучить
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Кнопка завершения */}
        <div className="text-center pt-8 border-t border-gray-800">
          <Link
            to="/"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-red-500/30 hover:scale-105"
          >
            <CheckCircle className="w-5 h-5" />
            Завершить курс
          </Link>
        </div>
      </div>
    </div>
  );
}