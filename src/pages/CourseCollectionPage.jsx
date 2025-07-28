// src/pages/CourseCollectionPage.jsx
import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { fetchAllCoursesWithCategories } from '../services/courseService';

// Константы
const CACHE_KEY = 'courseCollectionPage_data';
const CACHE_DURATION = 5 * 60 * 1000; // 5 минут
const YANDEX_RTB_BLOCK_ID = "R-A-16179039-1";
const YANDEX_RTB_CONTAINER_ID = "yandex_rtb_R-A-16179039-1";

// Утилиты для работы с кэшем
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
function CourseCard({ course }) {
  const handleImageError = useCallback((e) => {
    e.target.onerror = null;
    e.target.style.display = 'none';
    e.target.nextSibling.style.display = 'flex';
  }, []);

  return (
    <div className="bg-gradient-to-br from-red-950 to-red-900 border border-red-800 rounded-xl overflow-hidden shadow-lg transform transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:border-red-600">
      <div className="relative">
        {course.image ? (
          <>
            <img
              src={course.image.trim()}
              alt={course.name}
              className="w-full h-48 object-cover"
              onError={handleImageError}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
              <span className="text-white text-sm font-medium truncate">
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
      
      <div className="p-6 bg-black/80 backdrop-blur-sm">
        <h3 className="text-xl font-bold mb-3 line-clamp-2 text-white group-hover:text-red-400 transition-colors">
          {course.name}
        </h3>
        <p className="text-gray-300 mb-5 text-sm line-clamp-3 leading-relaxed">
          {course.description || 'Описание отсутствует'}
        </p>
        <a
          href={course.link.trim()}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-red-400 hover:text-red-300 font-medium group transition-colors"
        >
          Перейти к курсу
          <span className="ml-2 transform transition-transform group-hover:translate-x-1">→</span>
        </a>
      </div>
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

// Компонент пустого состояния
function EmptyState({ id }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white p-6">
      <div className="text-center max-w-lg">
        <div className="w-24 h-24 bg-red-900/20 rounded-full flex items-center justify-center mx-auto mb-8">
          <svg className="w-12 h-12 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
          </svg>
        </div>
        <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
          Категория курсов не найдена
        </h2>
        <p className="text-gray-400 mb-8 text-lg leading-relaxed">
          Категория с ID <span className="font-mono bg-gray-800 px-2 py-1 rounded">{id}</span> не существует или пока пуста.
        </p>
        <Link 
          to="/#collections" 
          className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-red-700 to-red-800 text-white rounded-lg hover:from-red-600 hover:to-red-700 transition-all transform hover:scale-105 font-medium shadow-lg group"
        >
          <svg className="w-5 h-5 mr-2 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Назад к подборкам
        </Link>
      </div>
    </div>
  );
}

// Основной компонент
export default function CourseCollectionPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [allCategoriesWithCourses, setAllCategoriesWithCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Мемоизированный поиск категории
  const collection = useMemo(() => {
    if (!id || !allCategoriesWithCourses.length) return null;
    return allCategoriesWithCourses.find(cat => cat.id === parseInt(id, 10));
  }, [id, allCategoriesWithCourses]);

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

  // Инициализация рекламы
  useEffect(() => {
    if (!collection) return;

    const initYandexRTB = () => {
      if (typeof Ya === 'undefined' || !Ya.Context?.AdvManager) {
        console.warn('Яндекс.РТБ не загружен или API не доступно');
        return;
      }

      Ya.Context.AdvManager.render({
        blockId: YANDEX_RTB_BLOCK_ID,
        renderTo: YANDEX_RTB_CONTAINER_ID
      });
    };

    window.yaContextCb = window.yaContextCb || [];
    window.yaContextCb.push(initYandexRTB);

    return () => {
      const container = document.getElementById(YANDEX_RTB_CONTAINER_ID);
      if (container) {
        container.innerHTML = '';
      }
    };
  }, [collection]);

  // Обработчики
  const handleRetry = useCallback(() => loadData(false), [loadData]);
  const handleBackToCollections = useCallback(() => navigate('/#collections'), [navigate]);

  // Рендер состояний
  if (loading) return <LoadingSpinner />;
  if (error) return <ErrorDisplay error={error} onRetry={handleRetry} />;
  if (!collection) return <EmptyState id={id} />;

  return (
    <section className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-red-600 via-red-500 to-orange-500 bg-clip-text text-transparent">
            {collection.title}
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-red-600 to-orange-500 mx-auto rounded-full"></div>
        </div>

        {collection.courses?.length > 0 ? (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {collection.courses.map((course) => (
                <CourseCard key={course.id} course={course} />
              ))}
            </div>
            
            <div className="mt-12 text-center">
              <p className="text-gray-400 text-lg">
                Всего курсов в категории: <span className="font-bold text-red-400">{collection.courses.length}</span>
              </p>
            </div>
          </>
        ) : (
          <div className="text-center py-20 bg-gradient-to-br from-gray-900/50 to-black rounded-2xl border border-gray-800">
            <div className="w-20 h-20 bg-red-900/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-300 mb-4">В этой категории пока нет курсов</h3>
            <p className="text-gray-500 max-w-md mx-auto">
              Следите за обновлениями — новые курсы появятся совсем скоро!
            </p>
          </div>
        )}

        {/* Рекламный блок Яндекс.РТБ */}
        <div className="my-20 flex justify-center">
          <div 
            id={YANDEX_RTB_CONTAINER_ID} 
            className="max-w-2xl w-full bg-gradient-to-br from-gray-900/50 to-black rounded-xl border border-gray-800 p-8 min-h-[280px] flex items-center justify-center"
          >
            <div className="text-center text-gray-600">
              <div className="animate-pulse mb-4">
                <div className="w-16 h-16 bg-gray-800 rounded-lg mx-auto"></div>
              </div>
              <p className="text-sm">Рекламный блок загружается...</p>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <button
            onClick={handleBackToCollections}
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-red-700 to-red-800 text-white rounded-xl hover:from-red-600 hover:to-red-700 transition-all transform hover:scale-105 font-medium shadow-xl group text-lg"
          >
            <svg className="w-5 h-5 mr-3 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Назад к подборкам
          </button>
        </div>
      </div>
    </section>
  );
}