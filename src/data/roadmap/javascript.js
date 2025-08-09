const javascript = {
  id: 'javascript',
  title: 'JavaScript',
  colorFrom: 'from-yellow-500',
  colorTo: 'to-orange-500',
  // Краткие пункты для карточки на главной
  points: [
    'Синтаксис, типы и DOM',
    'Асинхронность, Fetch и современный JS',
    'Модули, инструменты и практика',
  ],
  // Подробная структура модулей
  modules: [
    {
      id: 'onboarding',
      stage: 'start',
      title: 'Первые шаги: Hello, World! в браузере',
      hours: 3,
      topics: [
        {
          title: 'Что такое JavaScript и где он работает',
          hours: 0.5,
          subtopics: [
            'В браузере, на сервере (Node.js), в приложениях',
            'Разница между HTML, CSS и JS'
          ]
        },
        {
          title: 'Первый код: alert, console.log, prompt',
          hours: 1,
          subtopics: [
            'console.log("Привет, мир!")',
            'prompt("Как тебя зовут?")',
            'alert — вывод сообщения',
            'Открытие DevTools в браузере'
          ]
        },
        {
          title: 'Подключение JS к HTML',
          hours: 1.5,
          subtopics: [
            '<script src="script.js"></script>',
            'Место в <head> vs <body>',
            'Проверка: когда код выполняется'
          ]
        },
      ],
    },
    {
      id: 'basics',
      stage: 'foundation',
      title: 'Основы JavaScript',
      hours: 10,
      topics: [
        {
          title: 'Переменные и типы данных',
          hours: 2,
          subtopics: [
            'let, const, var — чем отличаются',
            'Типы: string, number, boolean, null, undefined, symbol, bigint',
            'Динамическая типизация'
          ]
        },
        {
          title: 'Операции и преобразования',
          hours: 1.5,
          subtopics: [
            'Математика: +, -, *, /, %, **',
            'Конкатенация строк',
            'Явное и неявное приведение типов'
          ]
        },
        {
          title: 'Условия и ветвление',
          hours: 1.5,
          subtopics: [
            'if, else if, else',
            'Логические операторы: &&, ||, !',
            'Троичный оператор: condition ? a : b'
          ]
        },
        {
          title: 'Циклы',
          hours: 1.5,
          subtopics: [
            'for, while, do...while',
            'break, continue',
            'for...of, for...in'
          ]
        },
        {
          title: 'Функции',
          hours: 2,
          subtopics: [
            'function greet() {}',
            'Параметры и возврат: return',
            'Функциональные выражения и стрелочные функции (=>)'
          ]
        },
        {
          title: 'Массивы и объекты',
          hours: 1.5,
          subtopics: [
            'Массивы: методы push, pop, slice, map, filter',
            'Объекты: ключ-значение, доступ через точку и скобки',
            'Деструктуризация: const {name} = user'
          ]
        },
      ],
    },
    {
      id: 'dom',
      stage: 'foundation',
      title: 'Работа с DOM (Document Object Model)',
      hours: 6,
      topics: [
        {
          title: 'Что такое DOM',
          hours: 1,
          subtopics: [
            'HTML → дерево узлов',
            'document — главный объект'
          ]
        },
        {
          title: 'Поиск и изменение элементов',
          hours: 2,
          subtopics: [
            'querySelector, querySelectorAll',
            'getElementById, getElementsByClassName',
            'Изменение текста: innerText, textContent, innerHTML'
          ]
        },
        {
          title: 'Работа с атрибутами и стилями',
          hours: 1.5,
          subtopics: [
            'setAttribute, getAttribute',
            'style.color, classList.add/remove/toggle'
          ]
        },
        {
          title: 'События',
          hours: 1.5,
          subtopics: [
            'addEventListener("click", handler)',
            'event.target, event.preventDefault()',
            'Всплытие и делегирование событий'
          ]
        },
      ],
    },
    {
      id: 'modern-js',
      stage: 'core',
      title: 'Современный JavaScript (ES6+)',
      hours: 8,
      topics: [
        {
          title: 'Стрелочные функции и лексическое this',
          hours: 2,
          subtopics: [
            '() => {} — короткий синтаксис',
            'Отсутствие своего this'
          ]
        },
        {
          title: 'Модули (import/export)',
          hours: 2,
          subtopics: [
            'export default, export const',
            'import from "./module.js"',
            'type="module" в теге script'
          ]
        },
        {
          title: 'Работа с объектами и массивами',
          hours: 2,
          subtopics: [
            'Spread-оператор: ...array',
            'Оператор rest: function(...args)',
            'Computed properties, optional chaining (?.), nullish coalescing (??)'
          ]
        },
        {
          title: 'Классы',
          hours: 2,
          subtopics: [
            'class User { constructor() {} }',
            'Наследование: extends, super()',
            'Геттеры и сеттеры: get name() {}'
          ]
        },
      ],
    },
    {
      id: 'async',
      stage: 'core',
      title: 'Асинхронность: Callback, Promise, async/await',
      hours: 8,
      topics: [
        {
          title: 'Асинхронная природа JS',
          hours: 1.5,
          subtopics: [
            'Event Loop, Call Stack, Web APIs',
            'Неблокирующий ввод-вывод'
          ]
        },
        {
          title: 'Promise: промисы и цепочки',
          hours: 2.5,
          subtopics: [
            'new Promise(), resolve, reject',
            '.then(), .catch(), .finally()',
            'Цепочки промисов'
          ]
        },
        {
          title: 'async/await',
          hours: 2,
          subtopics: [
            'async function, await',
            'Обработка ошибок: try/catch',
            'Параллельное выполнение: Promise.all, Promise.allSettled'
          ]
        },
        {
          title: 'Fetch API',
          hours: 2,
          subtopics: [
            'fetch(url).then().then()',
            'async/await с fetch',
            'POST-запросы, заголовки, авторизация'
          ]
        },
      ],
    },
    {
      id: 'node-npm',
      stage: 'core',
      title: 'Node.js и npm',
      hours: 6,
      topics: [
        {
          title: 'Что такое Node.js',
          hours: 1,
          subtopics: [
            'JavaScript за пределами браузера',
            'Глобальные объекты: global, __dirname, process'
          ]
        },
        {
          title: 'npm и пакеты',
          hours: 2,
          subtopics: [
            'npm init, package.json',
            'npm install пакет',
            'devDependencies vs dependencies'
          ]
        },
        {
          title: 'Модули в Node.js',
          hours: 1.5,
          subtopics: [
            'CommonJS: require, module.exports',
            'ES Modules в Node.js: .mjs, type: "module"'
          ]
        },
        {
          title: 'Простой сервер на Node.js',
          hours: 1.5,
          subtopics: [
            'http.createServer()',
            'Отдача HTML, JSON',
            'Чтение файлов: fs.readFile'
          ]
        },
      ],
    },
    {
      id: 'tooling',
      stage: 'advanced',
      title: 'Инструменты и сборка',
      hours: 6,
      topics: [
        {
          title: 'Bundler: Vite или Webpack (обзор)',
          hours: 2,
          subtopics: [
            'Зачем нужен сборщик',
            'Запуск dev-сервера: npm run dev',
            'Сборка для продакшена: npm run build'
          ]
        },
        {
          title: 'ESLint и Prettier',
          hours: 2,
          subtopics: [
            'ESLint — проверка кода',
            'Prettier — автоматическое форматирование',
            'Настройка .eslintrc, .prettierrc'
          ]
        },
        {
          title: 'Git и pre-commit',
          hours: 2,
          subtopics: [
            'husky + lint-staged',
            'Запуск линтеров перед коммитом',
            'Проверка кода до публикации'
          ]
        },
      ],
    },
    {
      id: 'testing',
      stage: 'advanced',
      title: 'Тестирование кода',
      hours: 5,
      topics: [
        {
          title: 'Jest: модульные тесты',
          hours: 2.5,
          subtopics: [
            'test(), expect().toBe()',
            'mocking функций и модулей',
            'Тестирование утилит и функций'
          ]
        },
        {
          title: 'Тестирование DOM (обзор)',
          hours: 2.5,
          subtopics: [
            'Testing Library (например, @testing-library/dom)',
            'Симуляция кликов, проверка рендеринга',
            'Интеграционные тесты'
          ]
        },
      ],
    },
    {
      id: 'practice-todo',
      stage: 'practice',
      title: 'Практика: TODO-приложение на чистом JS',
      hours: 4,
      topics: [
        {
          title: 'Верстка и структура',
          hours: 1,
          subtopics: [
            'HTML + CSS',
            'input, кнопки, список задач'
          ]
        },
        {
          title: 'Логика приложения',
          hours: 2,
          subtopics: [
            'Добавление, удаление, отметка выполнения',
            'Хранение в localStorage'
          ]
        },
        {
          title: 'Сборка и деплой',
          hours: 1,
          subtopics: [
            'Сборка через Vite',
            'Деплой на GitHub Pages'
          ]
        },
      ],
    },
    {
      id: 'practice-api',
      stage: 'practice',
      title: 'Практика: приложение с API (погода, котировки)',
      hours: 4,
      topics: [
        {
          title: 'Запрос к публичному API',
          hours: 1.5,
          subtopics: [
            'fetch с async/await',
            'API ключ, заголовки'
          ]
        },
        {
          title: 'Отображение данных',
          hours: 1.5,
          subtopics: [
            'Динамическое обновление DOM',
            'Обработка ошибок сети'
          ]
        },
        {
          title: 'Поиск и фильтрация',
          hours: 1,
          subtopics: [
            'Инпут для поиска',
            'Фильтрация результатов'
          ]
        },
      ],
    },
    {
      id: 'practice-cli',
      stage: 'practice',
      title: 'Практика: CLI-утилита на Node.js',
      hours: 3,
      topics: [
        {
          title: 'Чтение аргументов: process.argv',
          hours: 1,
          subtopics: [
            'Разбор команд: mycli --file data.txt'
          ]
        },
        {
          title: 'Работа с файлами: fs',
          hours: 1,
          subtopics: [
            'Чтение, запись, проверка существования'
          ]
        },
        {
          title: 'Публикация на npm (опционально)',
          hours: 1,
          subtopics: [
            'npm publish',
            'Создание CLI-команды: #!/usr/bin/env node'
          ]
        },
      ],
    },
  ],
  links: [
    { label: 'Официальная документация MDN', url: 'https://developer.mozilla.org/ru/docs/Web/JavaScript' },
    { label: 'JavaScript.info — современный учебник', url: 'https://javascript.info' },
  ],
};

export default javascript;