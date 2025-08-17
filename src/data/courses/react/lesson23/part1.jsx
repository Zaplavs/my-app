// src/data/courses/react/lesson23/part1.jsx
import React from 'react';
import { Github, FileText, Monitor, Users, Zap, BookOpen, Target, Trophy } from 'lucide-react';

const Part1 = () => {
  return (
    <div className="space-y-8 text-gray-200">
      {/* Вступление */}
      <div className="bg-gradient-to-r from-green-900/30 to-teal-900/30 backdrop-blur-sm border border-green-700/30 rounded-2xl p-6 shadow-lg">
        <div className="flex items-start gap-4">
          <div className="bg-green-500/20 p-3 rounded-lg">
            <Trophy className="w-6 h-6 text-green-400" />
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">🏆 Урок 23: Портфолио и следующие шаги</h1>
            <h2 className="text-xl font-semibold text-green-300 mb-3">Подготовка к карьере и продолжение роста</h2>
            <p className="text-gray-300">
              <span className="font-medium text-yellow-400">🎯 Цель урока:</span> Научиться создавать профессиональное портфолио React-разработчика. Понять, как правильно оформить проекты на GitHub с описанием, скриншотами и ссылками на деплой. Подготовиться к техническим собеседованиям: объяснить работу <code className="bg-gray-700 px-1.5 py-0.5 rounded text-green-300">useState</code>, рассказать про виртуальный DOM, продемонстрировать свои проекты. Осознать важность постоянной практики и дальнейшего развития в сфере React.
            </p>
          </div>
        </div>
      </div>

      {/* Создание портфолио */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Github className="w-5 h-5 text-purple-400" />
          Создание портфолио и публикация на GitHub
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            <span className="font-medium">Портфолио</span> — это <span className="font-medium">визитная карточка</span> разработчика. Оно показывает ваш <span className="font-medium">уровень навыков</span>, <span className="font-medium">подход к работе</span> и <span className="font-medium">умение доводить проекты до конца</span>. GitHub — идеальная платформа для размещения портфолио.
          </p>
          <p>
            Хорошо оформленный репозиторий с проектом может <span className="font-medium">произвести впечатление</span> на работодателей и <span className="font-medium">открыть двери</span> к новым возможностям.
          </p>
        </div>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Что включать в проект */}
          <div className="bg-gray-900/50 p-4 rounded-xl border border-blue-700/30">
            <h3 className="font-bold text-blue-300 mb-3 flex items-center gap-2">
              <FileText className="w-4 h-4" />
              Что должно быть в проекте
            </h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-300 text-sm">
              <li>
                <span className="font-medium">Чистый и понятный код</span> с соблюдением best practices
              </li>
              <li>
                <span className="font-medium">README.md</span> с полным описанием проекта
              </li>
              <li>
                <span className="font-medium">Скриншоты</span> или GIF-демонстрации интерфейса
              </li>
              <li>
                <span className="font-medium">Ссылка на деплой</span> (Vercel, Netlify, GitHub Pages)
              </li>
              <li>
                <span className="font-medium">Инструкция по запуску</span> проекта локально
              </li>
              <li>
                <span className="font-medium">Список используемых технологий</span>
              </li>
            </ul>
          </div>

          {/* Как оформить README */}
          <div className="bg-gray-900/50 p-4 rounded-xl border border-green-700/30">
            <h3 className="font-bold text-green-300 mb-3 flex items-center gap-2">
              <FileText className="w-4 h-4" />
              Как оформить README.md
            </h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-300 text-sm">
              <li>
                <span className="font-medium">Заголовок</span> с названием проекта
              </li>
              <li>
                <span className="font-medium">Краткое описание</span> — в чем суть проекта
              </li>
              <li>
                <span className="font-medium">Демонстрация</span> — скриншоты, GIF или ссылка
              </li>
              <li>
                <span className="font-medium">Функциональность</span> — что может проект
              </li>
              <li>
                <span className="font-medium">Технологии</span> — React, библиотеки, API
              </li>
              <li>
                <span className="font-medium">Установка и запуск</span> — пошаговая инструкция
              </li>
              <li>
                <span className="font-medium">Ссылки</span> — на деплой и ваш профиль
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-6 bg-gray-900/50 p-5 rounded-xl border border-cyan-700/30">
          <div className="flex items-center gap-3 mb-3">
            <div className="bg-cyan-500/20 p-2 rounded-lg">
              <FileText className="w-5 h-5 text-cyan-400" />
            </div>
            <h3 className="text-lg font-bold text-cyan-300">Пример структуры README.md</h3>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg">
            <pre className="text-cyan-300 text-xs overflow-x-auto">
              {`# Weather Dashboard

A beautiful and functional weather application built with React.

## 🌟 Demo

![Weather Dashboard Screenshot](./screenshot.png)
[Live Demo](https://my-weather-app.vercel.app)

## 📋 Features

- Real-time weather data
- 5-day forecast
- Search by city
- Responsive design
- Dark/Light mode

## 🛠️ Technologies

- React 18
- React Router
- Tailwind CSS
- OpenWeatherMap API
- React Query

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repo
   \`\`\`bash
   git clone https://github.com/yourusername/weather-dashboard.git
   \`\`\`

2. Navigate to the project directory
   \`\`\`bash
   cd weather-dashboard
   \`\`\`

3. Install dependencies
   \`\`\`bash
   npm install
   \`\`\`

4. Create a \`.env\` file in the root directory and add your API key:
   \`\`\`env
   VITE_API_KEY=your_openweathermap_api_key
   \`\`\`

5. Start the development server
   \`\`\`bash
   npm run dev
   \`\`\`

## 📬 Contact

Your Name - [@your_twitter](https://twitter.com/your_twitter) - email@example.com

Project Link: [https://github.com/yourusername/weather-dashboard](https://github.com/yourusername/weather-dashboard)`}
            </pre>
          </div>
        </div>
      </div>

      {/* Подготовка к собеседованиям */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Users className="w-5 h-5 text-blue-400" />
          Подготовка к техническим собеседованиям
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Техническое собеседование — это <span className="font-medium">ваш шанс показать</span> свои знания и навыки. Важно не только <span className="font-medium">знать технологии</span>, но и <span className="font-medium">уметь их объяснять</span>.
          </p>
          <p>
            Ниже приведены ключевые темы и вопросы, которые часто задают на собеседованиях React-разработчикам.
          </p>
        </div>

        {/* useState */}
        <div className="mt-6 bg-gray-900/50 p-5 rounded-xl border border-green-700/30">
          <div className="flex items-center gap-3 mb-3">
            <div className="bg-green-500/20 p-2 rounded-lg">
              <Zap className="w-5 h-5 text-green-400" />
            </div>
            <h3 className="text-lg font-bold text-green-300">Объясните, как работает useState</h3>
          </div>
          <div className="prose prose-invert max-w-none text-gray-300 text-sm">
            <p>
              <code className="bg-gray-700 px-1 rounded">useState</code> — это <span className="font-medium">React Hook</span>, который позволяет <span className="font-medium">добавлять состояние</span> в функциональные компоненты.
            </p>
            <p>
              Он возвращает <span className="font-medium">массив</span> из двух элементов:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li><span className="font-medium">Первый элемент</span> — текущее значение состояния</li>
              <li><span className="font-medium">Второй элемент</span> — функция для обновления этого состояния</li>
            </ul>
            <div className="bg-gray-800 p-3 rounded-lg mt-2">
              <pre className="text-green-300 text-xs"><code>{`import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
};`}</code></pre>
            </div>
            <p className="mt-2">
              <span className="font-medium">Важные особенности:</span>
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Состояние <span className="font-medium">сохраняется</span> между рендерами</li>
              <li>Вызов функции обновления <span className="font-medium">вызывает повторный рендер</span></li>
              <li>Состояние <span className="font-medium">изолировано</span> внутри компонента</li>
              <li>Функция обновления <span className="font-medium">асинхронна</span> — новое значение не доступно сразу после вызова</li>
            </ul>
          </div>
        </div>

        {/* Virtual DOM */}
        <div className="mt-6 bg-gray-900/50 p-5 rounded-xl border border-blue-700/30">
          <div className="flex items-center gap-3 mb-3">
            <div className="bg-blue-500/20 p-2 rounded-lg">
              <Monitor className="w-5 h-5 text-blue-400" />
            </div>
            <h3 className="text-lg font-bold text-blue-300">Что такое Virtual DOM и как он работает?</h3>
          </div>
          <div className="prose prose-invert max-w-none text-gray-300 text-sm">
            <p>
              <span className="font-medium">Virtual DOM (VDOM)</span> — это <span className="font-medium">виртуальное представление</span> реального DOM в памяти. Это <span className="font-medium">концепция</span>, используемая в React для <span className="font-medium">оптимизации</span> обновлений интерфейса.
            </p>
            <p>
              <span className="font-medium">Как это работает:</span>
            </p>
            <ol className="list-decimal pl-5 space-y-1">
              <li>При изменении состояния React <span className="font-medium">создает новое VDOM-дерево</span></li>
              <li>React <span className="font-medium">сравнивает</span> новое VDOM с предыдущим (это называется "reconciliation")</li>
              <li>Определяется <span className="font-medium">минимальный набор изменений</span>, необходимых для обновления реального DOM</li>
              <li>React <span className="font-medium">применяет только эти изменения</span> к реальному DOM (это называется "diffing")</li>
            </ol>
            <p className="mt-2">
              <span className="font-medium">Преимущества:</span>
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li><span className="font-medium">Производительность</span> — минимизация обращений к реальному DOM</li>
              <li><span className="font-medium">Абстракция</span> — разработчик работает с компонентами, а не с DOM напрямую</li>
              <li><span className="font-medium">Предсказуемость</span> — React управляет обновлениями интерфейса</li>
            </ul>
            <div className="mt-3 p-3 bg-gray-800/50 rounded-lg">
              <p className="text-gray-400 text-xs">
                <span className="font-medium">💡 Примечание:</span> В React 18 механизм работы с VDOM стал еще более оптимизированным, особенно с появлением автоматического пакетирования (automatic batching) и Concurrent Features.
              </p>
            </div>
          </div>
        </div>

        {/* Демонстрация проектов */}
        <div className="mt-6 bg-gray-900/50 p-5 rounded-xl border border-purple-700/30">
          <div className="flex items-center gap-3 mb-3">
            <div className="bg-purple-500/20 p-2 rounded-lg">
              <Monitor className="w-5 h-5 text-purple-400" />
            </div>
            <h3 className="text-lg font-bold text-purple-300">Как демонстрировать свои проекты</h3>
          </div>
          <div className="prose prose-invert max-w-none text-gray-300 text-sm">
            <p>
              На собеседовании важно <span className="font-medium">не просто показать</span> проект, а <span className="font-medium">рассказать о нем</span> и <span className="font-medium">показать свое мышление</span>.
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <span className="font-medium">Расскажите историю проекта:</span> Какую проблему он решает? Почему вы его выбрали?
              </li>
              <li>
                <span className="font-medium">Объясните архитектуру:</span> Как вы организовали код? Почему выбрали те или иные библиотеки?
              </li>
              <li>
                <span className="font-medium">Покажите сложные части:</span> Какие задачи были самыми сложными? Как вы их решали?
              </li>
              <li>
                <span className="font-medium">Будьте готовы к вопросам:</span> Почему не использовали Context вмест of Redux? Как обрабатывали ошибки? Как обеспечили доступность?
              </li>
              <li>
                <span className="font-medium">Покажите код:</span> Будьте готовы показать и объяснить ключевые части кода.
              </li>
            </ul>
            <div className="mt-3 p-3 bg-gray-800/50 rounded-lg">
              <p className="text-gray-400 text-xs">
                <span className="font-medium">🎯 Совет:</span> Подготовьте 2-3 проекта, которыми вы особенно гордитесь. Для каждого подготовьте краткое объяснение (1-2 минуты) и будьте готовы углубиться в детали по запросу интервьюера.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Следующие шаги */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Target className="w-5 h-5 text-yellow-400" />
          Следующие шаги в развитии
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Завершение этого курса — это <span className="font-medium">важная веха</span>, но <span className="font-medium">не конец</span> пути. Экосистема React <span className="font-medium">постоянно развивается</span>, и важно <span className="font-medium">продолжать учиться</span> и <span className="font-medium">практиковаться</span>.
          </p>
        </div>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-900/50 p-4 rounded-xl border border-cyan-700/30">
            <h3 className="font-bold text-cyan-300 mb-3 flex items-center gap-2">
              <BookOpen className="w-4 h-4" />
              Что изучать дальше
            </h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-300 text-sm">
              <li>
                <span className="font-medium">React Server Components</span> и Server-Side Rendering (Next.js)
              </li>
              <li>
                <span className="font-medium">TypeScript</span> для более строгой типизации
              </li>
              <li>
                <span className="font-medium">Тестирование</span> — углубленное изучение Jest, React Testing Library, Cypress
              </li>
              <li>
                <span className="font-medium">Производительность</span> — оптимизация, ленивая загрузка, Web Vitals
              </li>
              <li>
                <span className="font-medium">Доступность (Accessibility)</span> — создание инклюзивных интерфейсов
              </li>
              <li>
                <span className="font-medium">State Management</span> — углубленное изучение Redux, Zustand, Jotai
              </li>
            </ul>
          </div>

          <div className="bg-gray-900/50 p-4 rounded-xl border border-green-700/30">
            <h3 className="font-bold text-green-300 mb-3 flex items-center gap-2">
              <Zap className="w-4 h-4" />
              Как продолжать практиковаться
            </h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-300 text-sm">
              <li>
                <span className="font-medium">Создавайте pet-проекты</span> на интересные темы
              </li>
              <li>
                <span className="font-medium">Участвуйте в open-source</span> проектах на GitHub
              </li>
              <li>
                <span className="font-medium">Решайте задачи</span> на платформах типа LeetCode, Codewars
              </li>
              <li>
                <span className="font-medium">Читайте код</span> популярных библиотек
              </li>
              <li>
                <span className="font-medium">Пишите статьи</span> или ведите блог о своих находках
              </li>
              <li>
                <span className="font-medium">Посещайте митапы</span> и конференции
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-6 bg-gray-900/50 p-5 rounded-xl border border-blue-700/30">
          <div className="flex items-center gap-3 mb-3">
            <div className="bg-blue-500/20 p-2 rounded-lg">
              <Target className="w-5 h-5 text-blue-400" />
            </div>
            <h3 className="text-lg font-bold text-blue-300">План на ближайшие 3 месяца</h3>
          </div>
          <div className="prose prose-invert max-w-none text-gray-300 text-sm">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-gray-800/50 p-3 rounded-lg">
                <h4 className="font-bold text-cyan-300 mb-2">Месяц 1: Углубление</h4>
                <ul className="list-disc pl-5 space-y-1 text-gray-300">
                  <li>Изучить TypeScript</li>
                  <li>Добавить типизацию в 1-2 проекта</li>
                  <li>Написать unit-тесты</li>
                  <li>Опубликовать статью</li>
                </ul>
              </div>
              <div className="bg-gray-800/50 p-3 rounded-lg">
                <h4 className="font-bold text-green-300 mb-2">Месяц 2: Расширение</h4>
                <ul className="list-disc pl-5 space-y-1 text-gray-300">
                  <li>Изучить Next.js</li>
                  <li>Создать fullstack приложение</li>
                  <li>Участвовать в open-source</li>
                  <li>Пройти курс по доступности</li>
                </ul>
              </div>
              <div className="bg-gray-800/50 p-3 rounded-lg">
                <h4 className="font-bold text-purple-300 mb-2">Месяц 3: Профессионализм</h4>
                <ul className="list-disc pl-5 space-y-1 text-gray-300">
                  <li>Оптимизировать портфолио</li>
                  <li>Подготовиться к собеседованиям</li>
                  <li>Создать 1 большой проект</li>
                  <li>Начать искать работу/фриланс</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Заключение */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <div className="flex items-start gap-3">
          <div className="bg-green-500/20 p-2 rounded-lg flex-shrink-0">
            <Trophy className="w-5 h-5 text-green-400" />
          </div>
          <div>
            <h3 className="font-bold text-white mb-2">Поздравляем! 🎉</h3>
            <p className="text-gray-300">
              Вы завершили курс по React! Теперь вы знаете, как создать профессиональное портфолио и опубликовать свои проекты на GitHub с качественным README, скриншотами и ссылками на деплой. Вы подготовлены к техническим собеседованиям: можете объяснить, как работает <code className="bg-gray-700 px-1 rounded">useState</code>, рассказать про виртуальный DOM и продемонстрировать свои проекты. Главное — не останавливаться на достигнутом. Продолжайте практиковаться, изучайте новые технологии и создавайте крутые проекты. Ваши знания и навыки — это инвестиция в ваше будущее как разработчика. Удачи на вашем пути в мир React и веб-разработки! 🚀
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Part1;
