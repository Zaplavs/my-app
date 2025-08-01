// src/pages/LearnCoursePage.jsx

import { useParams, Link } from 'react-router-dom';
import { coursesData } from '../data/courses';
import { ArrowLeft, BookOpen, Clock, User, CheckCircle, ChevronDown, ChevronRight, BookText } from 'lucide-react';
import { useState } from 'react';

export default function LearnCoursePage() {
  const { slug } = useParams();
  const course = coursesData[slug];
  const [expandedModule, setExpandedModule] = useState(null);

  if (!course) {
    return (
      <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white min-h-screen flex items-center justify-center p-4 sm:p-6">
        <div className="text-center max-w-md bg-gray-800/50 backdrop-blur-lg border border-gray-700 rounded-2xl p-8 shadow-2xl">
          <div className="w-24 h-24 bg-gradient-to-br from-red-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-red-500/20">
            <BookOpen className="w-12 h-12 text-white" />
          </div>
          <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-orange-400">Курс не найден</h2>
          <p className="text-gray-300 mb-8">Запрашиваемый курс недоступен или был удален</p>
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 bg-gradient-to-r from-red-600 to-orange-500 hover:from-red-700 hover:to-orange-600 text-white px-6 py-3 rounded-xl font-medium transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-red-500/30 transform hover:-translate-y-0.5"
          >
            <ArrowLeft className="w-4 h-4" />
            Вернуться к курсам
          </Link>
        </div>
      </div>
    );
  }

  // Проверяем, есть ли модули в данных курса
  const hasModules = course.lessons && course.lessons.length > 0 && course.lessons[0].lessons;

  // Подсчитываем общее количество уроков
  let totalLessons = 0;
  if (hasModules) {
    totalLessons = course.lessons.reduce((total, module) => total + (module.lessons?.length || 0), 0);
  } else {
    totalLessons = course.lessons?.length || 0;
  }

  // Функция для переключения модуля
  const toggleModule = (moduleId) => {
    setExpandedModule(expandedModule === moduleId ? null : moduleId);
  };

  return (
    <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white min-h-screen py-8 px-4">
      <div className="container mx-auto max-w-4xl">
        {/* Навигация */}
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 text-sm mb-8 transition-colors duration-200 group"
        >
          <ArrowLeft className="w-4 h-4 transition-transform duration-200 group-hover:-translate-x-1" />
          Все курсы
        </Link>

        {/* Заголовок курса */}
        <div className="bg-gradient-to-r from-gray-800/50 to-gray-800/30 backdrop-blur-lg border border-gray-700 rounded-2xl p-6 mb-8 shadow-2xl hover:shadow-cyan-500/10 transition-all duration-300">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 mb-2">
                {course.title}
              </h1>
              <p className="text-gray-300 text-lg leading-relaxed">{course.description}</p>
            </div>
            <div className="flex items-center gap-4 text-sm bg-gray-800/50 px-4 py-2 rounded-xl border border-gray-700">
              <div className="flex items-center gap-1.5 text-cyan-400">
                <BookOpen className="w-4 h-4" />
                <span>{totalLessons} уроков</span>
              </div>
              <div className="h-4 w-px bg-gray-600"></div>
              <div className="flex items-center gap-1.5 text-amber-400">
                <Clock className="w-4 h-4" />
                <span>12 часов</span>
              </div>
            </div>
          </div>
          
          <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-gray-700/50">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-orange-500 rounded-full flex items-center justify-center shadow shadow-amber-500/30">
                <User className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="text-xs text-gray-400">Инструктор</div>
                <div className="font-medium">Иван Петров</div>
              </div>
            </div>
            <div className="h-8 w-px bg-gray-600 hidden sm:block"></div>
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-full flex items-center justify-center shadow shadow-emerald-500/30">
                <CheckCircle className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="text-xs text-gray-400">Прогресс</div>
                <div className="font-medium">0%</div>
              </div>
            </div>
          </div>
        </div>

        {/* Содержание курса */}
        <div className="space-y-6 mb-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-indigo-600 rounded-lg flex items-center justify-center">
              <BookText className="w-5 h-5 text-white" />
            </div>
            <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-indigo-400">
              Содержание курса
            </h2>
          </div>
          
          {hasModules ? (
            // Отображаем модули и уроки внутри них
            <div className="space-y-4">
              {course.lessons.map((module, moduleIndex) => (
                <div key={module.id} className="bg-gradient-to-br from-gray-800/40 to-gray-800/20 border border-gray-700 rounded-2xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-purple-500/10 hover:border-purple-500/30">
                  {/* Заголовок модуля - кликабельный */}
                  <button
                    onClick={() => toggleModule(module.id)}
                    className="w-full bg-gradient-to-r from-gray-700/50 to-gray-700/30 px-6 py-5 border-b border-gray-600 text-left hover:from-gray-700/70 hover:to-gray-700/50 transition-all duration-300 flex items-center justify-between group"
                  >
                    <div>
                      <div className="text-xs font-semibold text-purple-400 uppercase tracking-wider mb-1">Модуль {moduleIndex + 1}</div>
                      <h3 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors duration-200">
                        {module.title}
                      </h3>
                    </div>
                    <div className="text-purple-400 transition-transform duration-300">
                      {expandedModule === module.id ? 
                        <ChevronDown className="w-6 h-6 transition-transform duration-300 rotate-180" /> : 
                        <ChevronRight className="w-6 h-6 transition-transform duration-300 group-hover:translate-x-1" />
                      }
                    </div>
                  </button>

                  {/* Уроки модуля - отображаются при раскрытии */}
                  {expandedModule === module.id && (
                    <div className="p-5 space-y-4 bg-gray-800/10">
                      {module.lessons && module.lessons.map((lesson, lessonIndex) => (
                        <div
                          key={lesson.id}
                          className="group bg-gradient-to-r from-gray-800/30 to-gray-800/10 hover:from-gray-800/50 hover:to-gray-800/30 border border-gray-700 hover:border-cyan-500/30 rounded-xl p-5 transition-all duration-300 shadow-sm hover:shadow-lg"
                        >
                          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                            <div className="flex-1">
                              <div className="flex items-start gap-3 mb-2">
                                <div className="w-7 h-7 bg-gradient-to-br from-cyan-600 to-blue-600 rounded-lg flex items-center justify-center text-xs font-bold text-white flex-shrink-0 mt-0.5">
                                  {lessonIndex + 1}
                                </div>
                                <h4 className="text-lg font-semibold text-white group-hover:text-cyan-300 transition-colors duration-200">
                                  {lesson.title}
                                </h4>
                              </div>
                              <p className="text-gray-400 text-sm ml-10 mb-3">{lesson.content}</p>
                              {lesson.task && (
                                <div className="bg-gradient-to-r from-blue-900/30 to-cyan-900/20 border border-blue-700/20 hover:border-blue-600/30 rounded-xl p-4 mt-2 transition-all duration-300">
                                  <div className="flex items-start gap-2">
                                    <div className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5">
                                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
                                      </svg>
                                    </div>
                                    <p className="text-blue-300 text-sm">
                                      <span className="font-semibold text-blue-400">Задание:</span> {lesson.task}
                                    </p>
                                  </div>
                                </div>
                              )}
                            </div>

                            <Link
                              to={`/course/${slug}/learn/${lesson.id}`}
                              className="inline-flex items-center justify-center bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 whitespace-nowrap shadow-md hover:shadow-lg hover:shadow-cyan-500/30 transform hover:-translate-y-0.5 flex-shrink-0"
                            >
                              Изучить
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1.5" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                              </svg>
                            </Link>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          ) : course.lessons ? (
            // Отображаем уроки напрямую (старый формат для обратной совместимости)
            <div className="space-y-4">
              {course.lessons.map((lesson, index) => (
                <div 
                  key={lesson.id} 
                  className="group bg-gradient-to-br from-gray-800/40 to-gray-800/20 hover:from-gray-800/60 hover:to-gray-800/40 backdrop-blur-sm border border-gray-700 hover:border-cyan-500/30 rounded-2xl p-6 transition-all duration-300 shadow-lg hover:shadow-cyan-500/20"
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-start gap-3 mb-3">
                        <div className="w-9 h-9 bg-gradient-to-br from-cyan-600 to-blue-600 rounded-xl flex items-center justify-center text-sm font-bold text-white flex-shrink-0">
                          {index + 1}
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-white group-hover:text-cyan-300 transition-colors duration-200 mb-2">
                            {lesson.title}
                          </h3>
                          <p className="text-gray-400 ml-0.5">{lesson.content}</p>
                        </div>
                      </div>
                      {lesson.task && (
                        <div className="bg-gradient-to-r from-blue-900/30 to-cyan-900/20 border border-blue-700/20 hover:border-blue-600/30 rounded-xl p-4 mt-4 transition-all duration-300">
                          <div className="flex items-start gap-2">
                            <div className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5">
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
                              </svg>
                            </div>
                            <p className="text-blue-300">
                              <span className="font-semibold text-blue-400">Задание:</span> {lesson.task}
                            </p>
                          </div>
                        </div>
                      )}
                    </div>
                    <Link
                      to={`/course/${slug}/learn/${lesson.id}`}
                      className="inline-flex items-center justify-center bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white px-6 py-3 rounded-xl font-medium transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-cyan-500/30 transform hover:-translate-y-0.5 whitespace-nowrap flex-shrink-0 mt-2 md:mt-0"
                    >
                      Изучить
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1.5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            // Если нет ни модулей, ни уроков
            <div className="text-center py-12 bg-gray-800/30 rounded-2xl border border-gray-700">
              <BookOpen className="w-16 h-16 mx-auto mb-6 text-gray-600" />
              <p className="text-gray-500 text-lg">Содержание курса пока недоступно</p>
            </div>
          )}
        </div>

        {/* Кнопка завершения */}
        <div className="text-center pt-8 border-t border-gray-800">
          <Link
            to="/"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-rose-600 to-pink-600 hover:from-rose-700 hover:to-pink-700 text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-rose-500/30 hover:scale-105 transform"
          >
            <CheckCircle className="w-6 h-6" />
            Завершить курс
          </Link>
        </div>
      </div>
    </div>
  );
}