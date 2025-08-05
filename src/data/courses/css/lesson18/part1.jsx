// src/data/courses/html/lesson18/part1.jsx
import React from 'react';
import { Trophy, Target, Layout, Smartphone, Menu, MessageCircle, Star, Send } from 'lucide-react';

const Part1 = () => {
  return (
    <div className="space-y-8 text-gray-200">
      {/* Вступление */}
      <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 backdrop-blur-sm border border-blue-700/30 rounded-2xl p-6 shadow-lg">
        <div className="flex items-start gap-4">
          <div className="bg-blue-500/20 p-3 rounded-lg">
            <Trophy className="w-6 h-6 text-blue-400" />
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">🏆 Урок 18: Итоговый проект - Адаптивный лендинг</h1>
            <h2 className="text-xl font-semibold text-blue-300 mb-3">Создаем полноценный сайт, применяя все полученные знания</h2>
            <p className="text-gray-300">
              <span className="font-medium text-yellow-400">🎯 Цель урока:</span> Применить все изученные технологии HTML, CSS и основы JavaScript для создания современного адаптивного одностраничного сайта.
            </p>
          </div>
        </div>
      </div>

      {/* Что такое лендинг? */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Target className="w-5 h-5 text-green-400" />
          Что такое лендинг?
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            <span className="font-medium text-green-300">Лендинг (landing page)</span> — это одностраничный сайт, созданный для достижения конкретной цели: привлечения внимания, презентации продукта, сбора контактов или продажи услуги.
          </p>
          <p>
            В этом проекте вы создадите современный лендинг для вымышленной компании, применив все полученные знания.
          </p>
        </div>
      </div>

      {/* Требования к проекту */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Layout className="w-5 h-5 text-purple-400" />
          Требования к итоговому проекту
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Ваш лендинг должен включать следующие обязательные элементы:
          </p>
        </div>

        <div className="mt-6 space-y-6">
          {/* Адаптивное меню */}
          <div className="bg-gray-900/50 p-5 rounded-xl border border-blue-700/30">
            <h3 className="text-lg font-bold text-blue-300 mb-3 flex items-center gap-2">
              <Menu className="w-5 h-5 text-blue-400" />
              1. Адаптивное меню навигации
            </h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-300">
              <li>Фиксированное или статичное меню в шапке сайта</li>
              <li>Плавный переход по якорям к секциям страницы</li>
              <li>Гамбургер-меню для мобильных устройств</li>
              <li>Изменение стилей при прокрутке (например, изменение фона)</li>
            </ul>
          </div>

          {/* Секции сайта */}
          <div className="bg-gray-900/50 p-5 rounded-xl border border-green-700/30">
            <h3 className="text-lg font-bold text-green-300 mb-3 flex items-center gap-2">
              <Layout className="w-5 h-5 text-green-400" />
              2. Обязательные секции
            </h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium text-white mb-1">Приветствие (Hero Section)</h4>
                <ul className="list-disc pl-5 space-y-1 text-gray-300 text-sm">
                  <li>Заголовок, подзаголовок и призыв к действию (CTA)</li>
                  <li>Фоновое изображение или градиент</li>
                  <li>Центрированный или асимметричный макет</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-white mb-1">Услуги (Services)</h4>
                <ul className="list-disc pl-5 space-y-1 text-gray-300 text-sm">
                  <li>Сетка из карточек услуг (3-4 элемента)</li>
                  <li>Иконки или изображения для каждой услуги</li>
                  <li>Краткое описание каждой услуги</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-white mb-1">Отзывы (Testimonials)</h4>
                <ul className="list-disc pl-5 space-y-1 text-gray-300 text-sm">
                  <li>Карточки с отзывами клиентов</li>
                  <li>Имена, фото (или аватарки) и текст отзывов</li>
                  <li>Рейтинг звездами (опционально)</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-white mb-1">Контактная форма</h4>
                <ul className="list-disc pl-5 space-y-1 text-gray-300 text-sm">
                  <li>Поля для имени, email и сообщения</li>
                  <li>Кнопка отправки формы</li>
                  <li>Стилизация полей ввода и кнопки</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Адаптивность */}
          <div className="bg-gray-900/50 p-5 rounded-xl border border-purple-700/30">
            <h3 className="text-lg font-bold text-purple-300 mb-3 flex items-center gap-2">
              <Smartphone className="w-5 h-5 text-purple-400" />
              3. Адаптивный дизайн
            </h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-300">
              <li>Корректное отображение на мобильных устройствах, планшетах и десктопах</li>
              <li>Использование медиазапросов для разных брейкпоинтов</li>
              <li>Гибкие сетки (Flexbox/Grid) для адаптации контента</li>
              <li>Относительные единицы измерения (%, rem, em, vw/vh)</li>
            </ul>
          </div>

          {/* Анимации и интерактивность */}
          <div className="bg-gray-900/50 p-5 rounded-xl border border-orange-700/30">
            <h3 className="text-lg font-bold text-orange-300 mb-3 flex items-center gap-2">
              <Star className="w-5 h-5 text-orange-400" />
              4. Анимации и интерактивность
            </h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-300">
              <li>Плавные переходы (transitions) при наведении на элементы</li>
              <li>Анимации появления элементов при прокрутке страницы</li>
              <li>Интерактивные кнопки с эффектами</li>
              <li>Ховер-эффекты для карточек и ссылок</li>
            </ul>
          </div>
        </div>
      </div>

      {/* План реализации проекта */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Target className="w-5 h-5 text-cyan-400" />
          Пошаговый план реализации
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Следуйте этому плану для успешного завершения проекта:
          </p>
        </div>

        <div className="mt-6 space-y-4">
          <div className="bg-gray-900/50 p-4 rounded-xl border border-cyan-700/30">
            <h3 className="font-bold text-cyan-300 mb-2 flex items-center gap-2">
              <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">1</span>
              Подготовка структуры проекта
            </h3>
            <ul className="list-disc pl-6 space-y-1 text-gray-300 text-sm">
              <li>Создайте папку для проекта (например, <code className="bg-gray-700 px-1 rounded">my-landing-page</code>)</li>
              <li>Создайте файлы: <code className="bg-gray-700 px-1 rounded">index.html</code>, <code className="bg-gray-700 px-1 rounded">styles.css</code>, <code className="bg-gray-700 px-1 rounded">script.js</code> (опционально)</li>
              <li>Организуйте папки для изображений и других ресурсов</li>
            </ul>
          </div>

          <div className="bg-gray-900/50 p-4 rounded-xl border border-indigo-700/30">
            <h3 className="font-bold text-indigo-300 mb-2 flex items-center gap-2">
              <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">2</span>
              Создание HTML-структуры
            </h3>
            <ul className="list-disc pl-6 space-y-1 text-gray-300 text-sm">
              <li>Напишите базовую HTML-структуру с doctype, head и body</li>
              <li>Создайте семантическую разметку с тегами <code className="bg-gray-700 px-1 rounded">{'<header>'}</code>, <code className="bg-gray-700 px-1 rounded">{'<main>'}</code>, <code className="bg-gray-700 px-1 rounded">{'<section>'}</code>, <code className="bg-gray-700 px-1 rounded">{'<footer>'}</code></li>
              <li>Добавьте все обязательные секции с контентом</li>
              <li>Подключите CSS и JavaScript файлы</li>
            </ul>
          </div>

          <div className="bg-gray-900/50 p-4 rounded-xl border border-pink-700/30">
            <h3 className="font-bold text-pink-300 mb-2 flex items-center gap-2">
              <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">3</span>
              Стилизация с CSS
            </h3>
            <ul className="list-disc pl-6 space-y-1 text-gray-300 text-sm">
              <li>Создайте базовые стили (типографика, цвета, сброс стилей)</li>
              <li>Стилизуйте каждую секцию по отдельности</li>
              <li>Добавьте Flexbox или Grid для создания макетов</li>
              <li>Реализуйте адаптивность с помощью медиазапросов</li>
              <li>Добавьте плавные переходы и анимации</li>
            </ul>
          </div>

          <div className="bg-gray-900/50 p-4 rounded-xl border border-yellow-700/30">
            <h3 className="font-bold text-yellow-300 mb-2 flex items-center gap-2">
              <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">4</span>
              Добавление интерактивности (опционально)
            </h3>
            <ul className="list-disc pl-6 space-y-1 text-gray-300 text-sm">
              <li>Добавьте JavaScript для мобильного меню (гамбургер)</li>
              <li>Реализуйте плавную прокрутку к якорям</li>
              <li>Добавьте анимации при прокрутке (если знаете JavaScript)</li>
              <li>Создайте обработчики событий для формы</li>
            </ul>
          </div>

          <div className="bg-gray-900/50 p-4 rounded-xl border border-red-700/30">
            <h3 className="font-bold text-red-300 mb-2 flex items-center gap-2">
              <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">5</span>
              Тестирование и доработка
            </h3>
            <ul className="list-disc pl-6 space-y-1 text-gray-300 text-sm">
              <li>Протестируйте сайт на разных устройствах и браузерах</li>
              <li>Проверьте корректность работы всех ссылок и форм</li>
              <li>Оптимизируйте изображения и код</li>
              <li>Добавьте финальные штрихи и улучшения</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Полезные советы */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <MessageCircle className="w-5 h-5 text-green-400" />
          Полезные советы для успешного проекта
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <ul className="space-y-3">
            <li className="flex items-start gap-2">
              <Trophy className="w-5 h-5 text-yellow-400 mt-0.5 flex-shrink-0" />
              <div>
                <span className="font-medium text-yellow-300">Начните с мобильной версии:</span> Примените подход Mobile First для более простой адаптации.
              </div>
            </li>
            <li className="flex items-start gap-2">
              <Layout className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
              <div>
                <span className="font-medium text-blue-300">Используйте CSS Grid и Flexbox:</span> Эти технологии отлично подходят для создания адаптивных макетов.
              </div>
            </li>
            <li className="flex items-start gap-2">
              <Send className="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0" />
              <div>
                <span className="font-medium text-purple-300">Организуйте CSS-код:</span> Используйте комментарии и логическую структуру для удобства поддержки.
              </div>
            </li>
            <li className="flex items-start gap-2">
              <Star className="w-5 h-5 text-orange-400 mt-0.5 flex-shrink-0" />
              <div>
                <span className="font-medium text-orange-300">Не бойтесь экспериментировать:</span> Применяйте изученные анимации и эффекты для придания сайту индивидуальности.
              </div>
            </li>
            <li className="flex items-start gap-2">
              <Smartphone className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
              <div>
                <span className="font-medium text-cyan-300">Тестируйте на реальных устройствах:</span> Используйте инструменты разработчика в браузере для проверки адаптивности.
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* Заключение */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <div className="flex items-start gap-3">
          <div className="bg-green-500/20 p-2 rounded-lg flex-shrink-0">
            <Trophy className="w-5 h-5 text-green-400" />
          </div>
          <div>
            <h3 className="font-bold text-white mb-2">Поздравляем! 🏆</h3>
            <p className="text-gray-300">
              Этот проект станет вашим первым полноценным сайтом, демонстрирующим все полученные знания. Не бойтесь начинать, экспериментировать и довести работу до конца. Удачи в создании вашего потрясающего лендинга!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Part1;