// src/pages/LessonPage.jsx
import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { courseLessons } from '../data/courses/index';
import { ArrowLeft, ArrowRight, BookOpen, Code, CheckCircle, HelpCircle, Play, Save } from 'lucide-react';

export default function LessonPage() {
  const { slug, lessonId, subLessonId } = useParams();
  const navigate = useNavigate();
  const [lesson, setLesson] = useState(null);
  const [userCode, setUserCode] = useState('');
  const [completed, setCompleted] = useState(false);
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    async function loadLesson() {
      try {
        const storageKeySuffix = subLessonId ? `${lessonId}_${subLessonId}` : lessonId;
        const lessonLoader = courseLessons[slug]?.[lessonId];
        if (!lessonLoader) throw new Error('Урок не найден');
        const module = await lessonLoader();

        // Проверяем, является ли экспортированное значение по умолчанию функцией (React-компонентом)
        if (typeof module.default === 'function') {
             setLesson({ Component: module.default }); // Сохраняем компонент
        } else if (typeof module.default === 'object' && module.default !== null) {
             setLesson({ data: module.default }); // Сохраняем объект данных (старый способ)
        } else {
             throw new Error('Неверный формат урока');
        }

        const savedCode = localStorage.getItem(`lesson_${slug}_${storageKeySuffix}_code`);
        if (savedCode !== null) {
          setUserCode(savedCode);
        }

        const savedCompleted = localStorage.getItem(`lesson_${slug}_${storageKeySuffix}_completed`);
        if (savedCompleted === 'true') {
          setCompleted(true);
        }
      } catch (err) {
        console.error('Ошибка загрузки урока:', err);
        setLesson(null);
      }
    }
    loadLesson();
  }, [slug, lessonId, subLessonId]);

  const handleSaveCode = () => {
    const storageKeySuffix = subLessonId ? `${lessonId}_${subLessonId}` : lessonId;
    setIsSaving(true);
    localStorage.setItem(`lesson_${slug}_${storageKeySuffix}_code`, userCode);
    setTimeout(() => setIsSaving(false), 1000); // Имитация сохранения
  };

  const handleComplete = () => {
    const storageKeySuffix = subLessonId ? `${lessonId}_${subLessonId}` : lessonId;
    const newCompleted = !completed;
    setCompleted(newCompleted);
    localStorage.setItem(`lesson_${slug}_${storageKeySuffix}_completed`, newCompleted.toString());
  };

  const lessonIds = courseLessons[slug] ? Object.keys(courseLessons[slug]) : [];
  const currentIndex = lessonIds.indexOf(lessonId);
  const totalLessons = lessonIds.length;
  const progress = totalLessons > 0 ? Math.round(((currentIndex + 1) / totalLessons) * 100) : 0;

  if (!lesson) {
    return (
      <div className="bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white min-h-screen flex items-center justify-center p-8">
        <div className="text-center max-w-md">
          <div className="w-24 h-24 bg-red-900/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <BookOpen className="w-12 h-12 text-red-500" />
          </div>
          <h2 className="text-3xl font-bold mb-4">Урок не найден</h2>
          <p className="text-gray-400 mb-8">Запрашиваемый урок недоступен или был удален</p>
          <Link
            to={`/course/${slug}/learn`}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 shadow-lg hover:shadow-red-500/20"
          >
            <ArrowLeft className="w-4 h-4" />
            Вернуться к курсу
          </Link>
        </div>
      </div>
    );
  }

  // Подготавливаем props для компонента урока
  const lessonProps = {
    userCode,
    setUserCode,
    completed,
    setCompleted,
    handleSaveCode,
    handleComplete,
    isSaving,
    slug,
    lessonId,
    subLessonId,
    navigate,
    currentIndex,
    totalLessons,
    progress
    // Добавьте сюда любые другие данные, которые могут понадобиться уроку
  };

  // Определяем, нужно ли отображать стандартную навигацию
  // Отображаем, если это не компонент урока (т.е. это data) ИЛИ
  // если это компонент, но у него явно указано, что он не управляет навигацией (hasSubLessons !== true)
  const showStandardNavigation = lesson.data || (lesson.Component && !lesson.Component.hasSubLessons);

  return (
    <div className="bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white min-h-screen py-10 px-4 sm:px-6">
      <div className="container mx-auto max-w-4xl">
        {/* Заголовок урока */}
        <div className="mb-8">
          <Link
            to={`/course/${slug}/learn`}
            className="inline-flex items-center gap-2 text-yellow-400 hover:text-yellow-300 text-sm mb-4 transition-colors duration-200"
          >
            <ArrowLeft className="w-4 h-4" />
            К плану курса
          </Link>
          <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
            <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
              {/* Заголовок теперь берется либо из урока, либо из состояния, если урок сам управляет этим (например, для sub-lessons) */}
              {/* Для компонентов урока заголовок можно отображать внутри компонента или передавать как prop */}
              <h1 className="text-3xl md:text-4xl font-bold text-yellow-400">
                {lesson.data?.title || lesson.Component?.title || 'Заголовок урока'}
                 {/* &nbsp; Небольшой хак, чтобы высота была, если заголовок пуст */}
              </h1>
              <div className="flex items-center gap-3">
                <span className="text-sm text-gray-400">Урок {currentIndex + 1} из {totalLessons}</span>
                <div className="w-24 h-2 bg-gray-700 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full transition-all duration-500"
                    style={{ width: `${progress}%` }}
                  ></div>
                </div>
                <span className="text-sm font-bold text-yellow-400">{progress}%</span>
              </div>
            </div>
            {/* Мета-информация тоже может быть внутри компонента урока или в данных */}
            <div className="flex flex-wrap items-center gap-4 text-sm">
              <div className="flex items-center gap-1 text-gray-400">
                <BookOpen className="w-4 h-4" />
                {lesson.data?.duration || lesson.Component?.duration || '15 мин'}
              </div>
              <div className="flex items-center gap-1 text-gray-400">
                <Code className="w-4 h-4" />
                {lesson.data?.difficulty || lesson.Component?.difficulty || 'Средний'}
              </div>
              <div className="flex items-center gap-1">
                {completed ? (
                  <span className="flex items-center gap-1 text-green-400">
                    <CheckCircle className="w-4 h-4" />
                    Выполнено
                  </span>
                ) : (
                  <span className="flex items-center gap-1 text-yellow-400">
                    <Play className="w-4 h-4" />
                    В процессе
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Основной контент урока */}
        {/* Проверяем, есть ли у нас React-компонент */}
        {lesson.Component ? (
          // Если есть, рендерим его, передавая props
          <div className="mb-8">
            <lesson.Component {...lessonProps} />
          </div>
        ) : lesson.data ? (
          // Если есть data (старый формат), отображаем стандартный контент
          <>
             <div className="bg-gray-800/40 backdrop-blur-lg border border-gray-700/50 rounded-2xl p-6 shadow-xl mb-8">
              {lesson.data.contentBlocks?.map((block, index) => {
                if (block.type === 'text') {
                  return (
                    <div
                      key={index}
                      className="prose prose-invert max-w-none mb-8 text-gray-300 leading-relaxed"
                      dangerouslySetInnerHTML={{ __html: block.text }}
                    />
                  );
                }
                if (block.type === 'code') {
                  return (
                    <div key={index} className="mb-8">
                      <div className="flex items-center justify-between bg-gray-900 rounded-t-lg px-4 py-2">
                        <span className="text-sm text-gray-400">Пример кода</span>
                        <button
                          onClick={() => navigator.clipboard.writeText(block.code)}
                          className="text-xs bg-gray-700 hover:bg-gray-600 px-2 py-1 rounded transition-colors duration-200"
                        >
                          Копировать
                        </button>
                      </div>
                      <pre className="bg-gray-900 p-4 rounded-b-lg text-yellow-300 overflow-x-auto text-sm leading-relaxed">
                        <code>{block.code}</code>
                      </pre>
                    </div>
                  );
                }
                return null;
              })}
            </div>
            {/* Задание */}
            {lesson.data.task && (
              <div className="bg-gray-800/40 backdrop-blur-lg border border-gray-700/50 rounded-2xl p-6 shadow-xl mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-red-600/20 rounded-lg flex items-center justify-center">
                    <Play className="w-4 h-4 text-red-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Практическое задание</h3>
                </div>
                <p className="text-gray-300 mb-6 text-lg leading-relaxed">{lesson.data.task}</p>
                {lesson.data.exampleAnswer && ( // Добавлена проверка на exampleAnswer
                 <details className="mb-4 group">
                   <summary className="cursor-pointer text-sm text-gray-400 hover:text-gray-300 flex items-center gap-1">
                     <span>Показать пример ответа</span>
                     <svg className="w-4 h-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                   </summary>
                   <pre className="mt-2 p-3 bg-gray-900/50 border border-gray-700 rounded text-xs text-gray-300 overflow-x-auto">
                     {lesson.data.exampleAnswer}
                   </pre>
                 </details>
                )}
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <label className="text-gray-400">Ваш код:</label>
                    <button
                      onClick={handleSaveCode}
                      disabled={isSaving}
                      className="flex items-center gap-2 text-sm bg-gray-700 hover:bg-gray-600 px-3 py-1 rounded transition-colors duration-200 disabled:opacity-50"
                    >
                      <Save className="w-4 h-4" />
                      {isSaving ? 'Сохранено' : 'Сохранить'}
                    </button>
                  </div>
                  <textarea
                    value={userCode}
                    onChange={(e) => setUserCode(e.target.value)}
                    placeholder="Введите ваш код здесь..."
                    rows="8"
                    className="w-full bg-gray-900 border border-gray-700 rounded-lg p-4 text-white placeholder-gray-500 text-sm font-mono focus:border-red-500 focus:outline-none transition-colors duration-200"
                  />
                </div>
                <button
                  onClick={handleComplete}
                  className={`flex items-center justify-center gap-2 w-full py-4 rounded-lg text-lg font-bold transition-all duration-300 ${
                    completed
                      ? 'bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800'
                      : 'bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800'
                  } shadow-lg hover:shadow-xl transform hover:scale-[1.02]`}
                >
                  {completed ? (
                    <>
                      <CheckCircle className="w-5 h-5" />
                      Задание выполнено
                    </>
                  ) : (
                    <>
                      <Play className="w-5 h-5" />
                      Пометить как выполненное
                    </>
                  )}
                </button>
              </div>
            )}
          </>
        ) : null}

        {/* Навигация по урокам */}
        {/* Отображаем стандартную навигацию только если это обычный урок или компонент без внутренней навигации */}
        {showStandardNavigation && (
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
            {currentIndex > 0 && (
              <Link
                to={`/course/${slug}/learn/${lessonIds[currentIndex - 1]}`}
                className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <ArrowLeft className="w-4 h-4" />
                Предыдущий урок
              </Link>
            )}
            {currentIndex < totalLessons - 1 && (
              <Link
                to={`/course/${slug}/learn/${lessonIds[currentIndex + 1]}`}
                className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 shadow-lg hover:shadow-xl ml-auto"
              >
                Следующий урок
                <ArrowRight className="w-4 h-4" />
              </Link>
            )}
          </div>
        )}

        {/* Кнопка помощи */}
        <div className="text-center">
          <Link
            to="/help"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <HelpCircle className="w-5 h-5" />
            Нужна помощь с уроком?
          </Link>
          <p className="mt-4 text-gray-500 text-sm">
            Присоединяйтесь к нашей <a
              href="https://t.me/+zfZu_RsO_skwMTAy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-400 hover:text-purple-300 underline"
            >
              Telegram группе "Коммунист Этичный Хакер"
            </a> для получения поддержки
          </p>
        </div>
      </div>
    </div>
  );
}