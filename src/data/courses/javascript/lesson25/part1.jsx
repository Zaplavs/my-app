// src/data/courses/javascript/lesson25/part1.jsx
import React from 'react';
import { Compass, BookOpen, Youtube, Github, Rocket, Target, Map } from 'lucide-react';

const Part1 = () => {
  return (
    <div className="space-y-8 text-gray-200">
      {/* Вступление */}
      <div className="bg-gradient-to-r from-purple-900/30 to-indigo-900/30 backdrop-blur-sm border border-purple-700/30 rounded-2xl p-6 shadow-lg">
        <div className="flex items-start gap-4">
          <div className="bg-purple-500/20 p-3 rounded-lg">
            <Compass className="w-6 h-6 text-purple-400" />
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">📚 Урок 25: Что дальше? Путь в веб-разработку</h1>
            <h2 className="text-xl font-semibold text-purple-300 mb-3">Следующие шаги на пути к профессиональной разработке</h2>
            <p className="text-gray-300">
              <span className="font-medium text-yellow-400">🎯 Цель урока:</span> Определить направление дальнейшего обучения и изучить ресурсы для профессионального роста в веб-разработке.
            </p>
          </div>
        </div>
      </div>

      {/* Достижение и гордость */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Rocket className="w-5 h-5 text-green-400" />
          Поздравляем с достижением!
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Вы прошли <span className="font-medium text-green-300">большой путь</span> и освоили <span className="font-medium text-yellow-300">фундаментальные концепции JavaScript</span>!
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
            <div className="bg-gray-900/50 p-4 rounded-xl border border-green-700/30 text-center">
              <div className="text-2xl font-bold text-green-400 mb-2">25</div>
              <div className="text-sm text-gray-300">Уроков завершено</div>
            </div>
            <div className="bg-gray-900/50 p-4 rounded-xl border border-blue-700/30 text-center">
              <div className="text-2xl font-bold text-blue-400 mb-2">100+</div>
              <div className="text-sm text-gray-300">Концепций изучено</div>
            </div>
            <div className="bg-gray-900/50 p-4 rounded-xl border border-purple-700/30 text-center">
              <div className="text-2xl font-bold text-purple-400 mb-2">∞</div>
              <div className="text-sm text-gray-300">Возможностей впереди</div>
            </div>
          </div>

          <div className="mt-6 p-4 bg-gradient-to-r from-green-900/30 to-blue-900/30 rounded-xl border border-green-700/30">
            <p className="text-center text-lg">
              <span className="font-bold text-green-300">Теперь вы знаете:</span>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>Основы программирования на JavaScript</li>
                <li>Работу с DOM и событиями</li>
                <li>Создание интерактивных веб-приложений</li>
                <li>Решение практических задач</li>
              </ul>
            </p>
          </div>
        </div>
      </div>

      {/* Карта развития веб-разработчика */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Map className="w-5 h-5 text-blue-400" />
          Карта развития веб-разработчика
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Путь веб-разработчика — это <span className="font-medium text-yellow-300">непрерывное обучение</span> и развитие. Вот основные направления, которые стоит изучить дальше.
          </p>

          <div className="mt-6 space-y-6">
            {/* Frontend Development */}
            <div className="bg-gray-900/50 p-5 rounded-xl border border-cyan-700/30">
              <h3 className="font-bold text-cyan-300 mb-3 flex items-center gap-2">
                <Target className="w-5 h-5" />
                Frontend Development (Клиентская часть)
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-medium text-blue-300 mb-2">Обязательные навыки:</h4>
                  <ul className="list-disc pl-5 space-y-1 text-sm text-gray-300">
                    <li>HTML5 и семантическая верстка</li>
                    <li>CSS3 и современные методы стилизации</li>
                    <li>JavaScript (ES6+)</li>
                    <li>Адаптивный дизайн</li>
                    <li>Доступность (Accessibility)</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-green-300 mb-2">Продвинутые технологии:</h4>
                  <ul className="list-disc pl-5 space-y-1 text-sm text-gray-300">
                    <li>Фреймворки (React, Vue, Angular)</li>
                    <li>Состояние приложения (Redux, Vuex)</li>
                    <li>Сборщики (Webpack, Vite)</li>
                    <li>Тестирование (Jest, Cypress)</li>
                    <li>TypeScript</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Backend Development */}
            <div className="bg-gray-900/50 p-5 rounded-xl border border-orange-700/30">
              <h3 className="font-bold text-orange-300 mb-3 flex items-center gap-2">
                <Target className="w-5 h-5" />
                Backend Development (Серверная часть)
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-medium text-red-300 mb-2">Основы серверной разработки:</h4>
                  <ul className="list-disc pl-5 space-y-1 text-sm text-gray-300">
                    <li>Node.js и npm</li>
                    <li>Работа с базами данных (MongoDB, PostgreSQL)</li>
                    <li>REST API и GraphQL</li>
                    <li>Аутентификация и авторизация</li>
                    <li>Работа с файлами и потоками</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-yellow-300 mb-2">Продвинутые темы:</h4>
                  <ul className="list-disc pl-5 space-y-1 text-sm text-gray-300">
                    <li>Фреймворки (Express, NestJS)</li>
                    <li>Микросервисы</li>
                    <li>Кэширование (Redis)</li>
                    <li>Очереди задач (RabbitMQ, Kafka)</li>
                    <li>Деплой и CI/CD</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Инструменты разработки */}
            <div className="bg-gray-900/50 p-5 rounded-xl border border-purple-700/30">
              <h3 className="font-bold text-purple-300 mb-3 flex items-center gap-2">
                <Target className="w-5 h-5" />
                Инструменты и экосистема
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <h4 className="font-medium text-cyan-300 mb-2">Системы контроля версий:</h4>
                  <ul className="list-disc pl-5 space-y-1 text-sm text-gray-300">
                    <li>Git и GitHub</li>
                    <li>Работа в команде</li>
                    <li>Ветвление и слияние</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-green-300 mb-2">Сборка и автоматизация:</h4>
                  <ul className="list-disc pl-5 space-y-1 text-sm text-gray-300">
                    <li>Webpack, Vite, Parcel</li>
                    <li>npm scripts</li>
                    <li>ESLint, Prettier</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-blue-300 mb-2">Деплой и хостинг:</h4>
                  <ul className="list-disc pl-5 space-y-1 text-sm text-gray-300">
                    <li>Vercel, Netlify</li>
                    <li>Docker</li>
                    <li>Облачные платформы</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Следующие шаги по Frontend */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Target className="w-5 h-5 text-cyan-400" />
          Следующие шаги: Frontend Development
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Как начинающему frontend-разработчику, вот <span className="font-medium text-cyan-300">рекомендуемый путь развития</span>.
          </p>

          <div className="mt-6 space-y-6">
            {/* Этап 1 */}
            <div className="bg-gray-900/50 p-5 rounded-xl border border-blue-700/30">
              <div className="flex items-center gap-3 mb-3">
                <div className="bg-blue-500/20 w-8 h-8 rounded-full flex items-center justify-center">
                  <span className="font-bold text-blue-400">1</span>
                </div>
                <h3 className="font-bold text-blue-300">Освоение CSS</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-medium text-green-300 mb-2">Что изучать:</h4>
                  <ul className="list-disc pl-5 space-y-1 text-sm text-gray-300">
                    <li>Селекторы и каскадность</li>
                    <li>Flexbox и Grid</li>
                    <li>Анимации и переходы</li>
                    <li>Адаптивный дизайн</li>
                    <li>Препроцессоры (Sass/SCSS)</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-yellow-300 mb-2">Практика:</h4>
                  <ul className="list-disc pl-5 space-y-1 text-sm text-gray-300">
                    <li>Создание landing page</li>
                    <li>Клон известных сайтов</li>
                    <li>Адаптивные компоненты</li>
                    <li>CSS-анимации</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Этап 2 */}
            <div className="bg-gray-900/50 p-5 rounded-xl border border-green-700/30">
              <div className="flex items-center gap-3 mb-3">
                <div className="bg-green-500/20 w-8 h-8 rounded-full flex items-center justify-center">
                  <span className="font-bold text-green-400">2</span>
                </div>
                <h3 className="font-bold text-green-300">Изучение React</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-medium text-cyan-300 mb-2">Основы React:</h4>
                  <ul className="list-disc pl-5 space-y-1 text-sm text-gray-300">
                    <li>Компоненты и JSX</li>
                    <li>Состояние (useState)</li>
                    <li>Эффекты (useEffect)</li>
                    <li>Пропсы и children</li>
                    <li>Условный рендеринг</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-purple-300 mb-2">Продвинутые темы:</h4>
                  <ul className="list-disc pl-5 space-y-1 text-sm text-gray-300">
                    <li>Hooks (кастомные хуки)</li>
                    <li>Context API</li>
                    <li>React Router</li>
                    <li>Формы (Formik, React Hook Form)</li>
                    <li>Тестирование (React Testing Library)</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Этап 3 */}
            <div className="bg-gray-900/50 p-5 rounded-xl border border-purple-700/30">
              <div className="flex items-center gap-3 mb-3">
                <div className="bg-purple-500/20 w-8 h-8 rounded-full flex items-center justify-center">
                  <span className="font-bold text-purple-400">3</span>
                </div>
                <h3 className="font-bold text-purple-300">Современные инструменты</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-medium text-orange-300 mb-2">Сборщики и инструменты:</h4>
                  <ul className="list-disc pl-5 space-y-1 text-sm text-gray-300">
                    <li>Vite или Create React App</li>
                    <li>ESLint и Prettier</li>
                    <li>TypeScript</li>
                    <li>Git и GitHub workflows</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-red-300 mb-2">Практические проекты:</h4>
                  <ul className="list-disc pl-5 space-y-1 text-sm text-gray-300">
                    <li>Todo List с React</li>
                    <li>Блог с Markdown</li>
                    <li>E-commerce интерфейс</li>
                    <li>Дашборд с графиками</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Backend Development путь */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Target className="w-5 h-5 text-orange-400" />
          Альтернатива: Backend Development
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Если вас больше интересует <span className="font-medium text-orange-300">серверная разработка</span>, вот путь развития в этом направлении.
          </p>

          <div className="mt-6 space-y-6">
            {/* Node.js */}
            <div className="bg-gray-900/50 p-5 rounded-xl border border-red-700/30">
              <div className="flex items-center gap-3 mb-3">
                <div className="bg-red-500/20 w-8 h-8 rounded-full flex items-center justify-center">
                  <span className="font-bold text-red-400">1</span>
                </div>
                <h3 className="font-bold text-red-300">Node.js и Express</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-medium text-yellow-300 mb-2">Основы Node.js:</h4>
                  <ul className="list-disc pl-5 space-y-1 text-sm text-gray-300">
                    <li>Модули и npm</li>
                    <li>Файловая система</li>
                    <li>HTTP сервер</li>
                    <li>Асинхронное программирование</li>
                    <li>Потоки и буферы</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-green-300 mb-2">Express.js:</h4>
                  <ul className="list-disc pl-5 space-y-1 text-sm text-gray-300">
                    <li>Маршрутизация</li>
                    <li>Middleware</li>
                    <li>REST API</li>
                    <li>Валидация данных</li>
                    <li>Обработка ошибок</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Базы данных */}
            <div className="bg-gray-900/50 p-5 rounded-xl border border-blue-700/30">
              <div className="flex items-center gap-3 mb-3">
                <div className="bg-blue-500/20 w-8 h-8 rounded-full flex items-center justify-center">
                  <span className="font-bold text-blue-400">2</span>
                </div>
                <h3 className="font-bold text-blue-300">Базы данных</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-medium text-cyan-300 mb-2">Реляционные базы данных:</h4>
                  <ul className="list-disc pl-5 space-y-1 text-sm text-gray-300">
                    <li>PostgreSQL или MySQL</li>
                    <li>SQL запросы</li>
                    <li>Индексы и оптимизация</li>
                    <li>Транзакции</li>
                    <li>ORM (Sequelize, TypeORM)</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-purple-300 mb-2">NoSQL базы данных:</h4>
                  <ul className="list-disc pl-5 space-y-1 text-sm text-gray-300">
                    <li>MongoDB и Mongoose</li>
                    <li>Документы и коллекции</li>
                    <li>Агрегации</li>
                    <li>Индексы в MongoDB</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Продвинутые темы */}
            <div className="bg-gray-900/50 p-5 rounded-xl border border-green-700/30">
              <div className="flex items-center gap-3 mb-3">
                <div className="bg-green-500/20 w-8 h-8 rounded-full flex items-center justify-center">
                  <span className="font-bold text-green-400">3</span>
                </div>
                <h3 className="font-bold text-green-300">Продвинутые темы</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <h4 className="font-medium text-orange-300 mb-2">Безопасность:</h4>
                  <ul className="list-disc pl-5 space-y-1 text-sm text-gray-300">
                    <li>JWT и OAuth</li>
                    <li>Защита от атак</li>
                    <li>Валидация входных данных</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-red-300 mb-2">Производительность:</h4>
                  <ul className="list-disc pl-5 space-y-1 text-sm text-gray-300">
                    <li>Кэширование (Redis)</li>
                    <li>Очереди задач</li>
                    <li>Масштабирование</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-blue-300 mb-2">Деплой:</h4>
                  <ul className="list-disc pl-5 space-y-1 text-sm text-gray-300">
                    <li>Docker</li>
                    <li>Heroku, AWS, VPS</li>
                    <li>CI/CD pipelines</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Рекомендуемые ресурсы */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <BookOpen className="w-5 h-5 text-yellow-400" />
          Рекомендуемые ресурсы для обучения
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Вот <span className="font-medium text-yellow-300">лучшие ресурсы</span> для продолжения обучения в веб-разработке.
          </p>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Официальная документация */}
            <div className="bg-gray-900/50 p-5 rounded-xl border border-blue-700/30">
              <h3 className="font-bold text-blue-300 mb-3 flex items-center gap-2">
                <BookOpen className="w-5 h-5" />
                Официальная документация
              </h3>
              <ul className="space-y-3">
                <li>
                  <div className="font-medium text-cyan-300">MDN Web Docs</div>
                  <div className="text-sm text-gray-400">Полное руководство по веб-технологиям</div>
                </li>
                <li>
                  <div className="font-medium text-green-300">React Docs</div>
                  <div className="text-sm text-gray-400">Официальная документация React</div>
                </li>
                <li>
                  <div className="font-medium text-purple-300">Node.js Docs</div>
                  <div className="text-sm text-gray-400">Документация Node.js</div>
                </li>
                <li>
                  <div className="font-medium text-orange-300">Express.js Guide</div>
                  <div className="text-sm text-gray-400">Руководство по Express</div>
                </li>
              </ul>
            </div>

            {/* Обучающие платформы */}
            <div className="bg-gray-900/50 p-5 rounded-xl border border-green-700/30">
              <h3 className="font-bold text-green-300 mb-3 flex items-center gap-2">
                <Target className="w-5 h-5" />
                Обучающие платформы
              </h3>
              <ul className="space-y-3">
                <li>
                  <div className="font-medium text-blue-300">freeCodeCamp</div>
                  <div className="text-sm text-gray-400">Бесплатные курсы и сертификаты</div>
                </li>
                <li>
                  <div className="font-medium text-cyan-300">Codecademy</div>
                  <div className="text-sm text-gray-400">Интерактивные курсы</div>
                </li>
                <li>
                  <div className="font-medium text-purple-300">Udemy</div>
                  <div className="text-sm text-gray-400">Платные курсы высокого качества</div>
                </li>
                <li>
                  <div className="font-medium text-orange-300">Coursera</div>
                  <div className="text-sm text-gray-400">Курсы от университетов</div>
                </li>
              </ul>
            </div>

            {/* YouTube каналы */}
            <div className="bg-gray-900/50 p-5 rounded-xl border border-red-700/30">
              <h3 className="font-bold text-red-300 mb-3 flex items-center gap-2">
                <Youtube className="w-5 h-5" />
                YouTube каналы (EN)
              </h3>
              <ul className="space-y-3">
                <li>
                  <div className="font-medium text-yellow-300">Traversy Media</div>
                  <div className="text-sm text-gray-400">Практические туториалы</div>
                </li>
                <li>
                  <div className="font-medium text-cyan-300">The Net Ninja</div>
                  <div className="text-sm text-gray-400">Полные курсы по фреймворкам</div>
                </li>
                <li>
                  <div className="font-medium text-green-300">Academind</div>
                  <div className="text-sm text-gray-400">Глубокое погружение в технологии</div>
                </li>
                <li>
                  <div className="font-medium text-blue-300">Web Dev Simplified</div>
                  <div className="text-sm text-gray-400">Простые объяснения сложных тем</div>
                </li>
              </ul>
            </div>

            {/* YouTube каналы RU */}
            <div className="bg-gray-900/50 p-5 rounded-xl border border-purple-700/30">
              <h3 className="font-bold text-purple-300 mb-3 flex items-center gap-2">
                <Youtube className="w-5 h-5" />
                YouTube каналы (RU)
              </h3>
              <ul className="space-y-3">
                <li>
                  <div className="font-medium text-orange-300">Владилен Минин</div>
                  <div className="text-sm text-gray-400">React, JavaScript, фреймворки</div>
                </li>
                <li>
                  <div className="font-medium text-red-300">Артем Ткаченко</div>
                  <div className="text-sm text-gray-400">Frontend разработка</div>
                </li>
                <li>
                  <div className="font-medium text-green-300">Гоша Дударь</div>
                  <div className="text-sm text-gray-400">Основы программирования</div>
                </li>
                <li>
                  <div className="font-medium text-blue-300">LoftBlog</div>
                  <div className="text-sm text-gray-400">Веб-разработка и дизайн</div>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-6 bg-gray-900/50 p-5 rounded-xl border border-yellow-700/30">
            <h3 className="font-bold text-yellow-300 mb-3">Практические платформы:</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <div className="font-medium text-cyan-300">Codewars</div>
                <div className="text-sm text-gray-400">Алгоритмические задачи</div>
              </div>
              <div>
                <div className="font-medium text-green-300">HackerRank</div>
                <div className="text-sm text-gray-400">Технические интервью</div>
              </div>
              <div>
                <div className="font-medium text-purple-300">LeetCode</div>
                <div className="text-sm text-gray-400">Подготовка к собеседованиям</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Создание портфолио */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Github className="w-5 h-5 text-green-400" />
          Создание портфолио и практика
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            <span className="font-medium text-green-300">Портфолио проектов</span> — ключ к успешной карьере веб-разработчика.
          </p>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-900/50 p-5 rounded-xl border border-blue-700/30">
              <h3 className="font-bold text-blue-300 mb-3">Проекты для начинающих:</h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-300">
                <li>Персональный сайт/портфолио</li>
                <li>Блог на React или чистом HTML/CSS/JS</li>
                <li>Погодное приложение с API</li>
                <li>Калькулятор (как вы уже сделали)</li>
                <li>To-Do List с сохранением данных</li>
                <li>Галерея изображений</li>
              </ul>
            </div>

            <div className="bg-gray-900/50 p-5 rounded-xl border border-purple-700/30">
              <h3 className="font-bold text-purple-300 mb-3">Продвинутые проекты:</h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-300">
                <li>Социальная сеть (упрощенная)</li>
                <li>E-commerce сайт</li>
                <li>Чат приложение (WebSocket)</li>
                <li>Task менеджер (Trello клон)</li>
                <li>Блог с админкой и CMS</li>
                <li>Приложение для учета финансов</li>
              </ul>
            </div>
          </div>

          <div className="mt-6 bg-gray-900/50 p-5 rounded-xl border border-green-700/30">
            <h3 className="font-bold text-green-300 mb-3">GitHub и открытые источники:</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-300">
              <li>Создайте профиль на GitHub</li>
              <li>Загружайте все проекты в репозитории</li>
              <li>Пишите качественные README файлы</li>
              <li>Используйте Git для управления версиями</li>
              <li>Участвуйте в open-source проектах</li>
              <li>Следите за лучшими практиками</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Сообщество и нетворкинг */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Target className="w-5 h-5 text-cyan-400" />
          Сообщество и профессиональный рост
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Участие в <span className="font-medium text-cyan-300">сообществе разработчиков</span> ускоряет обучение и открывает карьерные возможности.
          </p>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-gray-900/50 p-4 rounded-xl border border-blue-700/30">
              <h3 className="font-bold text-blue-300 mb-2">Онлайн сообщества:</h3>
              <ul className="list-disc pl-5 space-y-1 text-sm text-gray-300">
                <li>Stack Overflow</li>
                <li>Reddit (r/webdev, r/javascript)</li>
                <li>Telegram каналы</li>
              </ul>
            </div>

            <div className="bg-gray-900/50 p-4 rounded-xl border border-green-700/30">
              <h3 className="font-bold text-green-300 mb-2">Офлайн мероприятия:</h3>
              <ul className="list-disc pl-5 space-y-1 text-sm text-gray-300">
                <li>Meetup группы</li>
                <li>Конференции</li>
                <li>Хакатоны</li>
                <li>Митапы разработчиков</li>
              </ul>
            </div>

            <div className="bg-gray-900/50 p-4 rounded-xl border border-purple-700/30">
              <h3 className="font-bold text-purple-300 mb-2">Профессиональный рост:</h3>
              <ul className="list-disc pl-5 space-y-1 text-sm text-gray-300">
                <li>Технические интервью</li>
                <li>Алгоритмы и структуры данных</li>
                <li>Системное проектирование</li>
                <li>Менторство и наставничество</li>
              </ul>
            </div>
          </div>

          <div className="mt-6 bg-gray-900/50 p-5 rounded-xl border border-yellow-700/30">
            <h3 className="font-bold text-yellow-300 mb-3">Советы по карьерному росту:</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <ul className="list-disc pl-5 space-y-2 text-gray-300">
                  <li>Регулярно обновляйте портфолио</li>
                  <li>Участвуйте в open-source</li>
                  <li>Пишите технические статьи</li>
                  <li>Создавайте персональный бренд</li>
                </ul>
              </div>
              <div>
                <ul className="list-disc pl-5 space-y-2 text-gray-300">
                  <li>Сетевой нетворкинг</li>
                  <li>Подготовка к собеседованиям</li>
                  <li>Непрерывное обучение</li>
                  <li>Следите за трендами</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Заключение */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <div className="flex items-start gap-3">
          <div className="bg-purple-500/20 p-2 rounded-lg flex-shrink-0">
            <Compass className="w-5 h-5 text-purple-400" />
          </div>
          <div>
            <h3 className="font-bold text-white mb-2">Путь только начинается! 🚀</h3>
            <p className="text-gray-300">
              Вы прошли важный этап в становлении веб-разработчика. Теперь у вас есть прочный фундамент для дальнейшего роста. 
              Помните, что путь разработчика — это непрерывное обучение, практика и участие в сообществе. 
              Удачи в ваших будущих проектах и достижениях!
            </p>
            <div className="mt-4 p-4 bg-gradient-to-r from-purple-900/30 to-blue-900/30 rounded-lg">
              <p className="text-center text-lg font-medium text-purple-300">
                "Лучший код — это код, который решает реальные проблемы" 🎯
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Part1;