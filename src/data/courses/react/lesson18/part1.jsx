// src/data/courses/react/lesson18/part1.jsx
import React from 'react';
import {CheckCircle ,  ShoppingCart, BookOpen, Search, PlusCircle, Palette, Route, Layers, Zap, FileText, Filter } from 'lucide-react';

const Part1 = () => {
  return (
    <div className="space-y-8 text-gray-200">
      {/* Вступление */}
      <div className="bg-gradient-to-r from-purple-900/30 to-indigo-900/30 backdrop-blur-sm border border-purple-700/30 rounded-2xl p-6 shadow-lg">
        <div className="flex items-start gap-4">
          <div className="bg-purple-500/20 p-3 rounded-lg">
            <Zap className="w-6 h-6 text-purple-400" />
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">⚡ Урок 18: Мини-проект - Блог или Магазин</h1>
            <h2 className="text-xl font-semibold text-purple-300 mb-3">Практикуем React на реальном примере</h2>
            <p className="text-gray-300">
              <span className="font-medium text-yellow-400">🎯 Цель урока:</span> Создать полноценное React-приложение (блог или интернет-магазин) самостоятельно, применяя все изученные концепции. Выберите один из вариантов (блог или магазин) и реализуйте все необходимые функции: список элементов, детальная страница, форма добавления, поиск/фильтрация и смена темы. Используйте компоненты, состояние (<code className="bg-gray-700 px-1.5 py-0.5 rounded text-green-300">useState</code>), эффекты (<code className="bg-gray-700 px-1.5 py-0.5 rounded text-green-300">useEffect</code>), роутинг (<code className="bg-gray-700 px-1.5 py-0.5 rounded text-green-300">React Router</code>) и работу с API. Этот проект станет отличной практикой и добавит веса вашему портфолио.
            </p>
          </div>
        </div>
      </div>

      {/* Выбор проекта */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Layers className="w-5 h-5 text-cyan-400" />
          Выбор проекта: Блог или Магазин
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Для этого урока вы можете выбрать один из двух вариантов проекта. Оба варианта имеют схожую структуру, но разный контент и акценты.
          </p>
        </div>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-900/50 p-5 rounded-xl border border-blue-700/30 hover:border-blue-500/50 transition-colors">
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-blue-500/20 p-2 rounded-lg">
                <BookOpen className="w-5 h-5 text-blue-400" />
              </div>
              <h3 className="text-lg font-bold text-blue-300">📝 Блог</h3>
            </div>
            <p className="text-gray-400 text-sm mb-3">
              Создайте приложение для ведения блога с возможностью просмотра статей, чтения полных текстов и добавления новых записей.
            </p>
            <ul className="list-disc pl-5 space-y-1 text-gray-300 text-sm">
              <li>Список статей с заголовками и кратким описанием</li>
              <li>Страница отдельной статьи с полным текстом</li>
              <li>Форма для создания новой статьи</li>
              <li>Поиск по заголовкам и содержимому статей</li>
              <li>Переключение между светлой и темной темой</li>
            </ul>
            <div className="mt-3 p-2 bg-blue-900/20 rounded">
              <p className="text-blue-300 text-xs">
                <span className="font-medium">Подходит для:</span> Тех, кто хочет сосредоточиться на текстовом контенте и навигации.
              </p>
            </div>
          </div>

          <div className="bg-gray-900/50 p-5 rounded-xl border border-green-700/30 hover:border-green-500/50 transition-colors">
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-green-500/20 p-2 rounded-lg">
                <ShoppingCart className="w-5 h-5 text-green-400" />
              </div>
              <h3 className="text-lg font-bold text-green-300">🛍️ Магазин</h3>
            </div>
            <p className="text-gray-400 text-sm mb-3">
              Создайте простой интернет-магазин с каталогом товаров, карточками продуктов и возможностью добавления новых позиций.
            </p>
            <ul className="list-disc pl-5 space-y-1 text-gray-300 text-sm">
              <li>Каталог товаров с изображениями, названиями и ценами</li>
              <li>Страница отдельного товара с подробным описанием</li>
              <li>Форма для добавления нового товара</li>
              <li>Фильтрация товаров по категории или цене</li>
              <li>Переключение между светлой и темной темой</li>
            </ul>
            <div className="mt-3 p-2 bg-green-900/20 rounded">
              <p className="text-green-300 text-xs">
                <span className="font-medium">Подходит для:</span> Тех, кто хочет работать с изображениями и числовыми данными.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Требуемый функционал */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <FileText className="w-5 h-5 text-yellow-400" />
          Обязательный функционал проекта
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Независимо от выбранного варианта, ваш проект должен включать следующие ключевые элементы:
          </p>
        </div>

        <div className="mt-6 space-y-4">
          {/* Список элементов */}
          <div className="bg-gray-900/50 p-4 rounded-xl border border-cyan-700/30">
            <div className="flex items-center gap-2 mb-2">
              <Layers className="w-4 h-4 text-cyan-400" />
              <h3 className="font-bold text-cyan-300">1. Список элементов</h3>
            </div>
            <ul className="list-disc pl-5 space-y-1 text-gray-300 text-sm">
              <li>Отображение всех элементов (статей/товаров) на главной странице</li>
              <li>Каждый элемент должен быть представлен карточкой с основной информацией</li>
              <li>Карточки должны быть кликабельными и вести на детальную страницу</li>
              <li>Реализуйте базовую стилизацию для карточек</li>
            </ul>
          </div>

          {/* Детальная страница */}
          <div className="bg-gray-900/50 p-4 rounded-xl border border-blue-700/30">
            <div className="flex items-center gap-2 mb-2">
              <FileText className="w-4 h-4 text-blue-400" />
              <h3 className="font-bold text-blue-300">2. Детальная страница (по ID)</h3>
            </div>
            <ul className="list-disc pl-5 space-y-1 text-gray-300 text-sm">
              <li>Создайте отдельный маршрут для каждой страницы элемента</li>
              <li>Используйте параметры URL для определения ID элемента</li>
              <li>Отображайте полную информацию об элементе</li>
              <li>Реализуйте кнопку "Назад" или навигацию к списку</li>
            </ul>
          </div>

          {/* Форма добавления */}
          <div className="bg-gray-900/50 p-4 rounded-xl border border-green-700/30">
            <div className="flex items-center gap-2 mb-2">
              <PlusCircle className="w-4 h-4 text-green-400" />
              <h3 className="font-bold text-green-300">3. Форма добавления</h3>
            </div>
            <ul className="list-disc pl-5 space-y-1 text-gray-300 text-sm">
              <li>Создайте отдельную страницу или модальное окно для формы</li>
              <li>Реализуйте управление состоянием полей формы</li>
              <li>Добавьте валидацию обязательных полей</li>
              <li>Обработайте отправку формы и добавление нового элемента</li>
              <li>После успешного добавления перенаправляйте пользователя</li>
            </ul>
          </div>

          {/* Поиск или фильтрация */}
          <div className="bg-gray-900/50 p-4 rounded-xl border border-orange-700/30">
            <div className="flex items-center gap-2 mb-2">
              <Search className="w-4 h-4 text-orange-400" />
              <h3 className="font-bold text-orange-300">4. Поиск или фильтрация</h3>
            </div>
            <ul className="list-disc pl-5 space-y-1 text-gray-300 text-sm">
              <li>Добавьте поле ввода для поиска (для блога) или фильтры (для магазина)</li>
              <li>Реализуйте динамическую фильтрацию списка элементов</li>
              <li>Поиск может быть по заголовку/названию или по всем полям</li>
              <li>Фильтрация может быть по категории, диапазону цен и т.д.</li>
            </ul>
          </div>

          {/* Тема (через контекст) */}
          <div className="bg-gray-900/50 p-4 rounded-xl border border-purple-700/30">
            <div className="flex items-center gap-2 mb-2">
              <Palette className="w-4 h-4 text-purple-400" />
              <h3 className="font-bold text-purple-300">5. Тема (через Context)</h3>
            </div>
            <ul className="list-disc pl-5 space-y-1 text-gray-300 text-sm">
              <li>Создайте React Context для управления темой приложения</li>
              <li>Реализуйте светлую и темную темы</li>
              <li>Добавьте переключатель темы в интерфейс</li>
              <li>Сохраняйте выбранную тему в localStorage</li>
              <li>Применяйте тему ко всем компонентам приложения</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Технические требования */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Zap className="w-5 h-5 text-red-400" />
          Технические требования и инструменты
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Ваш проект должен использовать следующие технологии и концепции React:
          </p>
        </div>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-900/50 p-4 rounded-xl border border-cyan-700/30">
            <h3 className="font-bold text-cyan-300 mb-3 flex items-center gap-2">
              <Layers className="w-4 h-4" />
              Основные технологии
            </h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-300 text-sm">
              <li>
                <span className="font-medium">React Router</span> для навигации между страницами
              </li>
              <li>
                <span className="font-medium">useState</span> для управления локальным состоянием
              </li>
              <li>
                <span className="font-medium">useEffect</span> для побочных эффектов (например, загрузка данных)
              </li>
              <li>
                <span className="font-medium">Context API</span> для управления глобальным состоянием (тема)
              </li>
              <li>
                <span className="font-medium">Компоненты</span> для структурирования интерфейса
              </li>
            </ul>
          </div>

          <div className="bg-gray-900/50 p-4 rounded-xl border border-green-700/30">
            <h3 className="font-bold text-green-300 mb-3 flex items-center gap-2">
              <Route className="w-4 h-4" />
              Работа с данными
            </h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-300 text-sm">
              <li>
                <span className="font-medium">Моковые данные</span> или интеграция с API (например, JSONPlaceholder)
              </li>
              <li>
                <span className="font-medium">CRUD-операции</span> (Create, Read, возможно Update/Delete)
              </li>
              <li>
                <span className="font-medium">localStorage</span> для сохранения данных между сессиями
              </li>
              <li>
                <span className="font-medium">Обработка форм</span> с валидацией
              </li>
              <li>
                <span className="font-medium">Асинхронные операции</span> (если используете реальное API)
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-6 p-4 bg-gray-900/50 rounded-xl border border-blue-700/30">
          <p className="text-sm text-gray-400 mb-2">🔧 Рекомендуемая структура проекта:</p>
          <pre className="text-gray-300 text-xs bg-gray-800 p-3 rounded-lg overflow-x-auto">
            {`src/
├── components/
│   ├── common/
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   └── ThemeToggle.jsx
│   ├── blog/ или shop/
│   │   ├── PostCard.jsx или ProductCard.jsx
│   │   ├── PostList.jsx или ProductList.jsx
│   │   └── PostForm.jsx или ProductForm.jsx
├── pages/
│   ├── HomePage.jsx
│   ├── PostPage.jsx или ProductPage.jsx
│   └── AddPostPage.jsx или AddProductPage.jsx
├── context/
│   └── ThemeContext.jsx
├── hooks/
│   └── useTheme.js (опционально)
├── data/
│   └── mockData.js или api.js
├── utils/
│   └── helpers.js
├── App.jsx
└── main.jsx`}
          </pre>
        </div>
      </div>

      {/* Этапы реализации */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Filter className="w-5 h-5 text-green-400" />
          Пошаговый план реализации
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Следуйте этому плану для успешного завершения проекта:
          </p>
        </div>

        <div className="mt-6 space-y-4">
          <div className="bg-gray-900/50 p-4 rounded-xl border border-blue-700/30">
            <div className="flex items-center gap-3 mb-2">
              <div className="bg-blue-500/20 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold text-blue-400">1</div>
              <h3 className="font-bold text-blue-300">Настройка проекта и структуры</h3>
            </div>
            <ul className="list-disc pl-11 space-y-1 text-gray-300 text-sm">
              <li>Создайте новый React-проект с помощью Vite или Create React App</li>
              <li>Установите необходимые зависимости (React Router, иконки и т.д.)</li>
              <li>Создайте базовую структуру папок</li>
              <li>Настройте маршрутизацию с главной страницей</li>
            </ul>
          </div>

          <div className="bg-gray-900/50 p-4 rounded-xl border border-cyan-700/30">
            <div className="flex items-center gap-3 mb-2">
              <div className="bg-cyan-500/20 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold text-cyan-400">2</div>
              <h3 className="font-bold text-cyan-300">Реализация списка и детальной страницы</h3>
            </div>
            <ul className="list-disc pl-11 space-y-1 text-gray-300 text-sm">
              <li>Создайте моковые данные для вашего проекта</li>
              <li>Реализуйте компонент списка элементов</li>
              <li>Создайте страницу детального просмотра с параметризированным роутом</li>
              <li>Добавьте навигацию между страницами</li>
            </ul>
          </div>

          <div className="bg-gray-900/50 p-4 rounded-xl border border-green-700/30">
            <div className="flex items-center gap-3 mb-2">
              <div className="bg-green-500/20 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold text-green-400">3</div>
              <h3 className="font-bold text-green-300">Форма добавления и управление данными</h3>
            </div>
            <ul className="list-disc pl-11 space-y-1 text-gray-300 text-sm">
              <li>Создайте компонент формы с управляемыми полями</li>
              <li>Реализуйте валидацию полей формы</li>
              <li>Обработайте отправку формы и добавление новых элементов</li>
              <li>Подумайте о сохранении данных (localStorage или API)</li>
            </ul>
          </div>

          <div className="bg-gray-900/50 p-4 rounded-xl border border-orange-700/30">
            <div className="flex items-center gap-3 mb-2">
              <div className="bg-orange-500/20 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold text-orange-400">4</div>
              <h3 className="font-bold text-orange-300">Поиск/фильтрация и улучшения</h3>
            </div>
            <ul className="list-disc pl-11 space-y-1 text-gray-300 text-sm">
              <li>Добавьте компонент поиска или фильтров</li>
              <li>Реализуйте логику фильтрации данных в реальном времени</li>
              <li>Оптимизируйте производительность при необходимости</li>
              <li>Добавьте базовую стилизацию и улучшите UX</li>
            </ul>
          </div>

          <div className="bg-gray-900/50 p-4 rounded-xl border border-purple-700/30">
            <div className="flex items-center gap-3 mb-2">
              <div className="bg-purple-500/20 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold text-purple-400">5</div>
              <h3 className="font-bold text-purple-300">Темизация и финальные штрихи</h3>
            </div>
            <ul className="list-disc pl-11 space-y-1 text-gray-300 text-sm">
              <li>Создайте ThemeContext для управления темой</li>
              <li>Реализуйте переключатель темы</li>
              <li>Сохраните выбранную тему в localStorage</li>
              <li>Протестируйте все функции проекта</li>
              <li>Добавьте README с описанием проекта</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Полезные советы */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Zap className="w-5 h-5 text-yellow-400" />
          Полезные советы и рекомендации
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-900/50 p-4 rounded-xl border border-green-700/30">
            <h3 className="font-bold text-green-300 mb-3">✅ Что делать</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-300 text-sm">
              <li>Начинайте с простого — сначала базовая функциональность</li>
              <li>Разбивайте задачи на маленькие шаги</li>
              <li>Тестируйте каждую часть по мере реализации</li>
              <li>Используйте React DevTools для отладки</li>
              <li>Пишите чистый и понятный код с комментариями</li>
              <li>Следуйте принципам компонентного подхода</li>
            </ul>
          </div>
          <div className="bg-gray-900/50 p-4 rounded-xl border border-red-700/30">
            <h3 className="font-bold text-red-300 mb-3">❌ Чего избегать</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-300 text-sm">
              <li>Не пытайтесь сделать всё сразу — шаг за шагом</li>
              <li>Не игнорируйте обработку ошибок</li>
              <li>Не забывайте про доступность (a11y)</li>
              <li>Не копируйте код без понимания</li>
              <li>Не оставляйте "мертвый" код</li>
              <li>Не забывайте про стилизацию и пользовательский опыт</li>
            </ul>
          </div>
        </div>
        <div className="mt-6 p-4 bg-blue-900/20 border border-blue-700/30 rounded-lg">
          <p className="text-blue-300 text-sm">
            <span className="font-medium">💡 Совет от ментора:</span> Если застряли на какой-то задаче — сделайте перерыв, посмотрите документацию или попробуйте объяснить проблему вслух. Часто решение приходит, когда вы меняете угол зрения. И помните, что идеальный код — это не цель, а процесс постоянного улучшения.
          </p>
        </div>
      </div>

      {/* Критерии оценки */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <FileText className="w-5 h-5 text-cyan-400" />
          Критерии успешного завершения
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Ваш проект будет считаться успешно завершенным, если он соответствует следующим критериям:
          </p>
        </div>

        <div className="mt-6 space-y-4">
          <div className="flex items-start gap-3 p-4 bg-gray-900/50 rounded-xl border border-green-700/30">
            <div className="bg-green-500/20 p-2 rounded-lg flex-shrink-0">
              <CheckCircle className="w-5 h-5 text-green-400" />
            </div>
            <div>
              <h3 className="font-bold text-green-300 mb-1">Функциональность</h3>
              <ul className="list-disc pl-5 space-y-1 text-gray-300 text-sm">
                <li>Все обязательные функции реализованы и работают корректно</li>
                <li>Навигация между страницами работает без ошибок</li>
                <li>Форма добавления корректно валидирует и сохраняет данные</li>
                <li>Поиск/фильтрация работает динамически</li>
                <li>Переключение темы сохраняется между сессиями</li>
              </ul>
            </div>
          </div>

          <div className="flex items-start gap-3 p-4 bg-gray-900/50 rounded-xl border border-blue-700/30">
            <div className="bg-blue-500/20 p-2 rounded-lg flex-shrink-0">
              <Layers className="w-5 h-5 text-blue-400" />
            </div>
            <div>
              <h3 className="font-bold text-blue-300 mb-1">Код и архитектура</h3>
              <ul className="list-disc pl-5 space-y-1 text-gray-300 text-sm">
                <li>Код структурирован и читаем</li>
                <li>Используются подходящие React-хуки и паттерны</li>
                <li>Компоненты разумно разделены и переиспользуемы</li>
                <li>Состояние управляется правильно</li>
                <li>Есть обработка ошибок и пограничных случаев</li>
              </ul>
            </div>
          </div>

          <div className="flex items-start gap-3 p-4 bg-gray-900/50 rounded-xl border border-purple-700/30">
            <div className="bg-purple-500/20 p-2 rounded-lg flex-shrink-0">
              <Palette className="w-5 h-5 text-purple-400" />
            </div>
            <div>
              <h3 className="font-bold text-purple-300 mb-1">Интерфейс и UX</h3>
              <ul className="list-disc pl-5 space-y-1 text-gray-300 text-sm">
                <li>Интерфейс интуитивно понятен</li>
                <li>Есть базовая стилизация и визуальная привлекательность</li>
                <li>Проект адаптирован для разных размеров экранов</li>
                <li>Темизация реализована и работает корректно</li>
                <li>Есть обратная связь для пользователя (загрузка, ошибки)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Part1;
