// src/pages/AllCoursesPage.jsx
import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { fetchAllCoursesWithCategories } from '../services/courseService';
import { ChevronRight } from 'lucide-react';

// Утилиты для работы с кэшем
const CACHE_KEY = 'allCoursesPage_data';
const CACHE_DURATION = 5 * 60 * 1000; // 5 минут

const cacheUtils = {
  get: () => {
    try {
      const cachedItem = localStorage.getItem(CACHE_KEY);
      if (!cachedItem) return null;
      const { data, timestamp } = JSON.parse(cachedItem);
      if (Date.now() - timestamp < CACHE_DURATION) {
        console.log("Данные загружены из кэша localStorage");
        return data;
      }
      console.log("Кэш устарел");
      localStorage.removeItem(CACHE_KEY);
      return null;
    } catch (e) {
      console.error("Ошибка при чтении кэша:", e);
      localStorage.removeItem(CACHE_KEY);
      return null;
    }
  },
  set: (data) => {
    try {
      const item = { data, timestamp: Date.now() };
      localStorage.setItem(CACHE_KEY, JSON.stringify(item));
      console.log("Данные сохранены в кэш localStorage");
    } catch (e) {
      console.error("Ошибка при записи в кэш:", e);
    }
  }
};

// Компонент курса
function CourseCard({ course, category }) {
  const handleImageError = useCallback((e) => {
    e.target.onerror = null;
    e.target.style.display = 'none';
    // Более надежный способ показать заглушку
    const placeholder = e.target.parentNode.querySelector('.image-placeholder');
    if (placeholder) placeholder.style.display = 'flex';
  }, []);

  return (
    <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl overflow-hidden shadow-xl transform transition-all duration-500 hover:scale-[1.03] hover:shadow-2xl hover:border-red-500/30 group">
      <div className="relative">
        {course.image ? (
          <>
            <div className="relative">
              <img
                src={course.image.trim()}
                alt={course.name}
                className="w-full h-48 object-cover"
                onError={handleImageError}
              />
              <div className="image-placeholder absolute inset-0 w-full h-48 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center" style={{ display: 'none' }}>
                <div className="text-center">
                  <svg className="w-12 h-12 text-gray-600 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span className="text-gray-500 text-sm">Изображение недоступно</span>
                </div>
              </div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-4">
              <span className="text-white text-sm font-semibold truncate bg-black/50 backdrop-blur-sm px-3 py-1.5 rounded-lg">
                {course.name}
              </span>
            </div>
          </>
        ) : (
          <div className="w-full h-48 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
            <div className="text-center">
              <svg className="w-12 h-12 text-gray-600 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span className="text-gray-500 text-sm">Нет изображения</span>
            </div>
          </div>
        )}
      </div>
      <div className="p-6 bg-gradient-to-b from-gray-900/50 to-black backdrop-blur-sm">
        <div className="flex items-center mb-3">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r from-blue-900/30 to-purple-900/30 backdrop-blur-sm border border-blue-800/30 text-blue-300">
            {category.title}
          </span>
        </div>
        <h3 className="text-xl font-bold mb-3 line-clamp-2 text-white group-hover:text-red-400 transition-colors duration-300">
          {course.name}
        </h3>
        <p className="text-gray-400 mb-5 text-sm line-clamp-3 leading-relaxed">
          {course.description || 'Описание отсутствует'}
        </p>
        <a
          href={course.link.trim()}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-red-500 hover:text-red-400 font-semibold group/link transition-colors duration-300"
        >
          Перейти к курсу
          <span className="ml-2 text-lg transform transition-transform duration-300 group-hover/link:translate-x-1">→</span>
        </a>
      </div>
      {/* Декоративный элемент */}
      <div className="absolute top-0 right-0 w-24 h-24 bg-red-500/10 rounded-full -translate-y-12 translate-x-12 group-hover:bg-red-500/20 transition-colors duration-500"></div>
    </div>
  );
}

// Компонент загрузки
function LoadingSpinner() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white p-6">
      <div className="text-center">
        <div className="relative">
          <div className="w-16 h-16 border-4 border-red-900 rounded-full animate-spin border-t-red-500 mx-auto"></div>
          <div className="absolute inset-0 w-16 h-16 border-4 border-transparent rounded-full animate-ping border-t-red-500 mx-auto opacity-20"></div>
        </div>
        <p className="mt-6 text-gray-400 font-medium">Загрузка курсов...</p>
      </div>
    </div>
  );
}

// Компонент ошибки
function ErrorDisplay({ error, onRetry }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white p-6">
      <div className="text-center bg-gradient-to-br from-gray-900 to-black p-8 rounded-2xl border border-red-800 max-w-md shadow-2xl">
        <div className="w-16 h-16 bg-red-900/20 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-8 h-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
        </div>
        <h2 className="text-2xl font-bold text-red-500 mb-3">Ошибка загрузки</h2>
        <p className="text-gray-300 mb-6 leading-relaxed">{error}</p>
        <button
          onClick={onRetry}
          className="px-6 py-3 bg-gradient-to-r from-red-700 to-red-800 text-white rounded-lg hover:from-red-600 hover:to-red-700 transition-all transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 font-medium shadow-lg"
        >
          Повторить попытку
        </button>
      </div>
    </div>
  );
}

// Основной компонент
export default function AllCoursesPage() {
  const [allCategoriesWithCourses, setAllCategoriesWithCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Загрузка данных
  const loadData = useCallback(async (useCache = true) => {
    try {
      setLoading(true);
      setError(null);
      // Проверяем кэш
      if (useCache) {
        const cachedData = cacheUtils.get();
        if (cachedData) {
          setAllCategoriesWithCourses(cachedData);
          setLoading(false);
          return;
        }
      }
      // Загружаем с API
      const data = await fetchAllCoursesWithCategories();
      setAllCategoriesWithCourses(data);
      cacheUtils.set(data);
    } catch (err) {
      console.error("Ошибка загрузки данных курсов:", err);
      setError(err.message || "Не удалось загрузить данные. Пожалуйста, попробуйте позже.");
    } finally {
      setLoading(false);
    }
  }, []);

  // Инициализация данных
  useEffect(() => {
    loadData();
  }, [loadData]);

  // Обработчики
  const handleRetry = useCallback(() => loadData(false), [loadData]);

  // Рендер состояний
  if (loading) return <LoadingSpinner />;
  if (error) return <ErrorDisplay error={error} onRetry={handleRetry} />;

  return (
    <section className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-red-600 via-red-500 to-orange-500 bg-clip-text text-transparent">
            Все курсы
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-red-600 to-orange-500 mx-auto rounded-full"></div>
        </div>
        
        {allCategoriesWithCourses.length > 0 ? (
          <div className="space-y-16">
            {allCategoriesWithCourses.map((category) => (
              <div key={category.id}>
                <div className="flex items-center justify-between mb-8">
                  <h2 className="text-3xl font-bold text-white">
                    {category.title}
                  </h2>
                  <Link 
                    to={`/courses/${category.id}`}
                    className="inline-flex items-center text-blue-400 hover:text-blue-300 font-medium group"
                  >
                    Посмотреть категорию
                    <ChevronRight className="ml-1 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </div>
                
                {category.courses?.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {category.courses.map((course) => (
                      <CourseCard key={`${category.id}-${course.id}`} course={course} category={category} />
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12 bg-gradient-to-br from-gray-900/50 to-black rounded-2xl border border-gray-800">
                    <div className="w-16 h-16 bg-red-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-gray-300 mb-2">В этой категории пока нет курсов</h3>
                    <p className="text-gray-500">
                      Следите за обновлениями — новые курсы появятся совсем скоро!
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-gradient-to-br from-gray-900/50 to-black rounded-2xl border border-gray-800">
            <div className="w-20 h-20 bg-red-900/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-300 mb-4">Курсы не найдены</h3>
            <p className="text-gray-500 max-w-md mx-auto">
              К сожалению, пока нет доступных курсов. Следите за обновлениями!
            </p>
          </div>
        )}
        
        <div className="mt-16 text-center">
          <Link
            to="/#collections"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-red-700 to-red-800 text-white rounded-xl hover:from-red-600 hover:to-red-700 transition-all transform hover:scale-105 font-medium shadow-xl group text-lg"
          >
            <svg className="w-5 h-5 mr-3 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Назад к подборкам
          </Link>
        </div>
      </div>
    </section>
  );
}