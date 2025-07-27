// src/pages/CourseCollectionPage.jsx
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom'; // Импортируем Link для навигации
import { fetchAllCoursesWithCategories } from '../services/courseService'; // Импортируем сервис

// Простой кэш в памяти модуля
const CACHE_KEY = 'courseCollectionPage_data';
const CACHE_DURATION = 5 * 60 * 1000; // 5 минут в миллисекундах

// Функция для получения данных из кэша
const getCachedData = () => {
  try {
    const cachedItem = localStorage.getItem(CACHE_KEY);
    if (cachedItem) {
      const { data, timestamp } = JSON.parse(cachedItem);
      if (Date.now() - timestamp < CACHE_DURATION) {
        console.log("Данные загружены из кэша localStorage");
        return data;
      } else {
        console.log("Кэш устарел");
        localStorage.removeItem(CACHE_KEY); // Удаляем устаревший кэш
      }
    }
  } catch (e) {
    console.error("Ошибка при чтении кэша:", e);
    localStorage.removeItem(CACHE_KEY); // Очищаем поврежденный кэш
  }
  return null;
};

// Функция для сохранения данных в кэш
const setCachedData = (data) => {
  try {
    const item = {
      data,
      timestamp: Date.now()
    };
    localStorage.setItem(CACHE_KEY, JSON.stringify(item));
    console.log("Данные сохранены в кэш localStorage");
  } catch (e) {
    console.error("Ошибка при записи в кэш:", e);
    // localStorage может быть переполнен, ничего не делаем
  }
};

export default function CourseCollectionPage() {
  const { id } = useParams(); // Получаем ID категории из URL
  const [allCategoriesWithCourses, setAllCategoriesWithCourses] = useState([]); // Все данные
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // 1. Загружаем все данные при монтировании компонента
  useEffect(() => {
    const loadData = async () => {
      // Попробуем получить данные из кэша
      let data = getCachedData();

      if (data) {
        setAllCategoriesWithCourses(data);
        setLoading(false);
        return;
      }

      // Если кэша нет или он устарел, загружаем с API
      try {
        setLoading(true);
        setError(null);
        data = await fetchAllCoursesWithCategories();
        setAllCategoriesWithCourses(data);
        setCachedData(data); // Сохраняем в кэш
      } catch (err) {
        console.error("Ошибка загрузки данных курсов:", err);
        setError(err.message || "Не удалось загрузить данные. Пожалуйста, попробуйте позже.");
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []); // Пустой массив зависимостей - эффект запускается только один раз

  // 2. Находим нужную категорию в загруженных данных
  const collection = allCategoriesWithCourses.find(cat => cat.id === parseInt(id, 10));

  // 3. Использем useEffect для инициализации рекламного блока (как в оригинале)
  useEffect(() => {
    if (!collection) return; // Не инициализируем рекламу, если категория не найдена

    window.yaContextCb = window.yaContextCb || [];

    window.yaContextCb.push(() => {
      if (typeof Ya === 'undefined' || !Ya.Context || !Ya.Context.AdvManager) {
        console.warn('Яндекс.РТБ не загружен или API не доступно');
        return;
      }

      Ya.Context.AdvManager.render({
        blockId: "R-A-16179039-1",
        renderTo: "yandex_rtb_R-A-16179039-1"
      });
    });

    // Очистка при размонтировании или смене категории
    return () => {
      // Очищаем коллбэк, но не весь массив, чтобы другие компоненты не сломались
      // Более точная очистка зависит от реализации Яндекс.РТБ
      const container = document.getElementById("yandex_rtb_R-A-16179039-1");
      if (container) {
        container.innerHTML = ''; // Очищаем содержимое контейнера
      }
    };
  }, [collection]); // Зависимость от collection

  // --- Рендеринг ---

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black text-white p-6">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-600 mx-auto"></div>
          <p className="mt-4 text-gray-400">Загрузка курсов...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black text-white p-6">
        <div className="text-center bg-gray-900 p-6 rounded-lg border border-red-800 max-w-md">
          <h2 className="text-2xl font-bold text-red-500 mb-2">Ошибка загрузки</h2>
          <p className="text-gray-300 mb-4">{error}</p>
          <button
            onClick={() => window.location.reload()} // Простая перезагрузка страницы
            className="mt-2 px-4 py-2 bg-red-700 text-white rounded hover:bg-red-800 transition"
          >
            Повторить попытку
          </button>
        </div>
      </div>
    );
  }

  if (!collection) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black text-white p-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Категория курсов не найдена</h2>
          <p className="text-gray-400 mb-6">Категория с ID {id} не существует или пока пуста.</p>
          <Link to="/#collections" className="mt-4 inline-block text-red-400 hover:text-red-300 underline">
            Назад к подборкам
          </Link>
        </div>
      </div>
    );
  }

  return (
    <section className="min-h-screen bg-black text-white py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-extrabold mb-12 text-center text-red-600">{collection.title}</h2>

        {collection.courses && collection.courses.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {collection.courses.map((course) => (
              <div
                key={course.id} // Используем ID из API
                className="bg-red-950 border border-red-800 rounded-lg overflow-hidden shadow-lg transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
              >
                {/* Обработка изображения: если нет URL, показываем заглушку */}
                {course.image ? (
                  <img
                    src={course.image.trim()} // Убираем лишние пробелы
                    alt={course.name}
                    className="w-full h-48 object-cover"
                    onError={(e) => {
                      e.target.onerror = null; // Предотвращает зацикливание
                      e.target.parentElement.innerHTML = '<div class="w-full h-48 bg-gray-800 flex items-center justify-center text-gray-600 text-sm">Изображение недоступно</div>';
                    }}
                  />
                ) : (
                  <div className="w-full h-48 bg-gray-800 flex items-center justify-center">
                    <span className="text-gray-600 text-sm">Нет изображения</span>
                  </div>
                )}
                <div className="p-6 bg-black">
                  <h3 className="text-xl font-bold mb-2 line-clamp-2">{course.name}</h3>
                  <p className="text-gray-300 mb-4 text-sm line-clamp-3">{course.description}</p>
                  <a
                    href={course.link.trim()} // Убираем лишние пробелы
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-red-400 hover:text-red-300 font-medium group"
                  >
                    Перейти к курсу
                    <span className="ml-2 transform transition-transform group-hover:translate-x-1">→</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-xl text-gray-500">В этой категории пока нет курсов.</p>
          </div>
        )}

        {/* Рекламный блок Яндекс.РТБ */}
        <div className="my-12 flex justify-center">
          <div id="yandex_rtb_R-A-16179039-1" className="max-w-lg w-full"></div>
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/#collections"
            className="text-white bg-red-700 px-6 py-3 rounded hover:bg-red-800 inline-block transition"
          >
            Назад к подборкам
          </Link>
        </div>
      </div>
    </section>
  );
}