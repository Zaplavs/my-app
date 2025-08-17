// src/data/courses/react/lesson19/part1.jsx
import React from 'react';
import {Hash , AlertTriangle , Upload, Globe, Code, Rocket, Cloud, Package, Navigation } from 'lucide-react';

const Part1 = () => {
  return (
    <div className="space-y-8 text-gray-200">
      {/* Вступление */}
      <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 backdrop-blur-sm border border-blue-700/30 rounded-2xl p-6 shadow-lg">
        <div className="flex items-start gap-4">
          <div className="bg-blue-500/20 p-3 rounded-lg">
            <Rocket className="w-6 h-6 text-blue-400" />
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">🚀 Урок 19: Деплой приложения</h1>
            <h2 className="text-xl font-semibold text-blue-300 mb-3">Публикация React-приложений в интернете</h2>
            <p className="text-gray-300">
              <span className="font-medium text-yellow-400">🎯 Цель урока:</span> Понять, что такое деплой (развертывание) React-приложений, освоить процесс подготовки приложения к production с помощью <code className="bg-gray-700 px-1.5 py-0.5 rounded text-green-300">npm run build</code>, научиться развертывать приложения на популярных платформах (<code className="bg-gray-700 px-1 rounded">Vercel</code>, <code className="bg-gray-700 px-1 rounded">Netlify</code>, <code className="bg-gray-700 px-1 rounded">GitHub Pages</code>), освоить загрузку статических файлов и подключение репозиториев для автоматического деплоя.
            </p>
          </div>
        </div>
      </div>

      {/* Что такое деплой? */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Upload className="w-5 h-5 text-green-400" />
          Что такое деплой приложения?
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            <span className="font-medium text-green-300">Деплой (развертывание)</span> — это <span className="font-medium">процесс публикации</span> вашего React-приложения в <span className="font-medium">интернете</span>, чтобы <span className="font-medium">другие люди</span> могли <span className="font-medium">использовать</span> его через <span className="font-medium">веб-браузер</span>.
          </p>
          <p>
            Во время разработки вы запускаете приложение <span className="font-medium">локально</span> на своем компьютере с помощью <code className="bg-gray-700 px-1 rounded">npm start</code>. Это отлично подходит для <span className="font-medium">тестирования</span> и <span className="font-medium">разработки</span>, но <span className="font-medium">не позволяет</span> другим людям <span className="font-medium">пользоваться</span> вашим приложением.
          </p>
          <p>
            <span className="font-medium">Деплой</span> — это <span className="font-medium">следующий шаг</span>, когда вы <span className="font-medium">подготавливаете</span> приложение для <span className="font-medium">production-окружения</span> (рабочей среды) и <span className="font-medium">публикуете</span> его на <span className="font-medium">хостинг-платформе</span> или <span className="font-medium">сервере</span>.
          </p>
        </div>
        
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-900/50 p-4 rounded-xl border border-red-700/30">
            <p className="text-sm text-gray-400 mb-2">❌ Локальная разработка:</p>
            <pre className="text-red-300 text-sm overflow-x-auto">
              <code>{`npm start\n# Приложение доступно только на вашем компьютере\n# по адресу http://localhost:3000\n# Другие люди НЕ могут получить к нему доступ`}</code>
            </pre>
          </div>
          <div className="bg-gray-900/50 p-4 rounded-xl border border-green-700/30">
            <p className="text-sm text-gray-400 mb-2">✅ Деплой в production:</p>
            <pre className="text-green-300 text-sm overflow-x-auto">
              <code>{`npm run build\n# Приложение собирается в оптимизированные файлы\n# Файлы загружаются на хостинг-платформу\n# Приложение доступно в интернете по адресу\n# https://your-app.vercel.app или аналогичному`}</code>
            </pre>
          </div>
        </div>
        
        <div className="mt-4 p-3 bg-blue-900/20 border border-blue-700/30 rounded-lg">
          <p className="text-blue-300 text-sm flex items-start gap-2">
            <span className="font-medium">💡 Этапы деплоя:</span>
            <span>
              <ul className="list-disc pl-5 space-y-1">
                <li><span className="font-medium">Подготовка</span> — сборка приложения для production</li>
                <li><span className="font-medium">Оптимизация</span> — минификация кода, сжатие ресурсов</li>
                <li><span className="font-medium">Загрузка</span> — передача файлов на сервер или хостинг</li>
                <li><span className="font-medium">Настройка</span> — конфигурация сервера, домена, SSL-сертификатов</li>
                <li><span className="font-medium">Публикация</span> — активация приложения и получение публичного URL</li>
              </ul>
            </span>
          </p>
        </div>
      </div>

      {/* Подготовка приложения к production */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Package className="w-5 h-5 text-yellow-400" />
          Подготовка приложения к production
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Перед публикацией React-приложения в интернете необходимо <span className="font-medium">подготовить</span> его к <span className="font-medium">production-окружению</span>. Это включает <span className="font-medium">оптимизацию</span> кода, <span className="font-medium">сборку</span> статических файлов и <span className="font-medium">настройку</span> для работы на реальном сервере.
          </p>
        </div>
        
        <div className="mt-6 bg-gray-900/50 p-5 rounded-xl border border-cyan-700/30">
          <div className="flex items-center gap-3 mb-3">
            <div className="bg-cyan-500/20 p-2 rounded-lg">
              <Code className="w-5 h-5 text-cyan-400" />
            </div>
            <h3 className="text-lg font-bold text-cyan-300">Команда сборки npm run build</h3>
          </div>
          <div className="bg-gray-800 p-3 rounded-lg mb-3">
            <pre className="text-cyan-300 text-sm"><code>{`# Сборка приложения для production\nnpm run build`}</code></pre>
          </div>
          <p className="text-gray-400 text-xs">
            Эта команда запускает <span className="font-medium">процесс сборки</span> Create React App, который <span className="font-medium">оптимизирует</span> ваше приложение для <span className="font-medium">production-окружения</span>.
          </p>
        </div>
        
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-900/50 p-5 rounded-xl border border-blue-700/30">
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-blue-500/20 p-2 rounded-lg">
                <Rocket className="w-5 h-5 text-blue-400" />
              </div>
              <h3 className="text-lg font-bold text-blue-300">Что делает npm run build?</h3>
            </div>
            <ul className="list-disc pl-5 space-y-2 text-gray-300 text-sm">
              <li>
                <span className="font-medium">Минифицирует</span> JavaScript и CSS файлы (удаляет пробелы, комментарии, сокращает имена переменных)
              </li>
              <li>
                <span className="font-medium">Оптимизирует</span> изображения и другие ресурсы
              </li>
              <li>
                <span className="font-medium">Создает</span> production-версию всех компонентов
              </li>
              <li>
                <span className="font-medium">Генерирует</span> source maps для отладки (в отдельных файлах)
              </li>
              <li>
                <span className="font-medium">Создает</span> хэшированные имена файлов для кэширования
              </li>
              <li>
                <span className="font-medium">Удаляет</span> development-зависимости и инструменты
              </li>
              <li>
                <span className="font-medium">Проверяет</span> код на наличие ошибок и предупреждений
              </li>
            </ul>
          </div>
          <div className="bg-gray-900/50 p-5 rounded-xl border border-green-700/30">
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-green-500/20 p-2 rounded-lg">
                <Globe className="w-5 h-5 text-green-400" />
              </div>
              <h3 className="text-lg font-bold text-green-300">Результат сборки</h3>
            </div>
            <div className="bg-gray-800 p-3 rounded-lg mb-3">
              <pre className="text-green-300 text-sm"><code>{`build/\n├── static/\n│   ├── css/\n│   │   ├── main.abc123.css\n│   │   └── main.abc123.css.map\n│   ├── js/\n│   │   ├── main.def456.js\n│   │   ├── main.def456.js.map\n│   │   └── 789.chunk.js\n│   └── media/\n│       └── logo.xyz789.png\n├── index.html\n├── favicon.ico\n├── manifest.json\n├── robots.txt\n└── asset-manifest.json`}</code></pre>
            </div>
            <p className="text-gray-400 text-xs">
              <code className="bg-gray-700 px-1 rounded">build/</code> — это <span className="font-medium">готовая к публикации</span> папка со всеми <span className="font-medium">статическими файлами</span> вашего приложения.
            </p>
          </div>
        </div>
        
        <div className="mt-6 bg-gray-900/50 p-5 rounded-xl border border-orange-700/30">
          <div className="flex items-center gap-3 mb-3">
            <div className="bg-orange-500/20 p-2 rounded-lg">
              <Cloud className="w-5 h-5 text-orange-400" />
            </div>
            <h3 className="text-lg font-bold text-orange-300">Особенности production-сборки</h3>
          </div>
          <ul className="list-disc pl-5 space-y-2 text-gray-300 text-sm">
            <li>
              <span className="font-medium">Размер файлов значительно меньше</span> — код минифицирован
            </li>
            <li>
              <span className="font-medium">Производительность выше</span> — оптимизированный код
            </li>
            <li>
              <span className="font-medium">Нет development-инструментов</span> — отладчиков и логов
            </li>
            <li>
              <span className="font-medium">Source maps отделены</span> — для отладки в production
            </li>
            <li>
              <span className="font-medium">Хэшированные имена файлов</span> — для эффективного кэширования
            </li>
            <li>
              <span className="font-medium">Environment variables</span> — только <code className="bg-gray-700 px-1 rounded">REACT_APP_*</code> переменные
            </li>
          </ul>
          <div className="mt-3 bg-gray-800 p-3 rounded-lg">
            <pre className="text-orange-300 text-xs"><code>{`// Пример размеров файлов\n// Development: main.js - 2.5MB\n// Production: main.abc123.js - 300KB (88% меньше!)`}</code></pre>
          </div>
        </div>
      </div>

      {/* Деплой на Vercel */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Cloud className="w-5 h-5 text-purple-400" />
          Деплой на Vercel (рекомендуется)
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            <span className="font-medium text-purple-300">Vercel</span> — это <span className="font-medium">современная платформа</span> для <span className="font-medium">деплоя</span> и <span className="font-medium">хостинга</span> веб-приложений, созданная <span className="font-medium">создателями Next.js</span>. Она предоставляет <span className="font-medium">бесплатный</span> и <span className="font-medium">очень простой</span> способ <span className="font-medium">опубликовать</span> React-приложения.
          </p>
          <p>
            Vercel <span className="font-medium">автоматически</span> обнаруживает React-приложения и <span className="font-medium">настраивает</span> оптимальную среду для их работы. Она поддерживает <span className="font-medium">автоматический деплой</span> из GitHub, <span className="font-medium">глобальную CDN</span>, <span className="font-medium">SSL-сертификаты</span> и <span className="font-medium">множество других</span> продвинутых функций.
          </p>
        </div>
        
        <div className="mt-6 bg-gray-900/50 p-5 rounded-xl border border-blue-700/30">
          <div className="flex items-center gap-3 mb-3">
            <div className="bg-blue-500/20 p-2 rounded-lg">
              <Rocket className="w-5 h-5 text-blue-400" />
            </div>
            <h3 className="text-lg font-bold text-blue-300">Пошаговый деплой на Vercel</h3>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg mb-3">
            <ol className="list-decimal pl-5 space-y-3 text-gray-300 text-sm">
              <li>
                <span className="font-medium">Создайте аккаунт на Vercel:</span>
                <ul className="list-circle pl-5 mt-1 space-y-1">
                  <li>Перейдите на <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">vercel.com</a></li>
                  <li>Зарегистрируйтесь с помощью GitHub, GitLab или Bitbucket</li>
                  <li>Подтвердите ваш email</li>
                </ul>
              </li>
              <li>
                <span className="font-medium">Подготовьте ваше приложение:</span>
                <ul className="list-circle pl-5 mt-1 space-y-1">
                  <li>Убедитесь, что ваше приложение находится в Git-репозитории</li>
                  <li>Выполните <code className="bg-gray-700 px-1 rounded">npm run build</code> локально для проверки</li>
                  <li>Закоммитьте все изменения</li>
                </ul>
              </li>
              <li>
                <span className="font-medium">Импортируйте проект в Vercel:</span>
                <ul className="list-circle pl-5 mt-1 space-y-1">
                  <li>Нажмите "New Project" в dashboard Vercel</li>
                  <li>Выберите ваш Git-репозиторий</li>
                  <li>Vercel автоматически определит настройки для React-приложения</li>
                </ul>
              </li>
              <li>
                <span className="font-medium">Настройте параметры деплоя:</span>
                <ul className="list-circle pl-5 mt-1 space-y-1">
                  <li>Project Name — имя вашего проекта (автоматически)</li>
                  <li>Framework Preset — Create React App (автоматически)</li>
                  <li>Root Directory — корневая папка проекта (обычно "/")</li>
                  <li>Build and Output Settings — автоматически определены</li>
                </ul>
              </li>
              <li>
                <span className="font-medium">Запустите деплой:</span>
                <ul className="list-circle pl-5 mt-1 space-y-1">
                  <li>Нажмите "Deploy"</li>
                  <li>Дождитесь завершения сборки и деплоя</li>
                  <li>Получите публичный URL вашего приложения</li>
                </ul>
              </li>
            </ol>
          </div>
        </div>
        
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-900/50 p-4 rounded-xl border border-green-700/30">
            <p className="text-sm text-gray-400 mb-2">✅ Преимущества Vercel:</p>
            <ul className="list-disc pl-5 space-y-2 text-gray-300 text-sm">
              <li><span className="font-medium">Бесплатный</span> тариф с хорошими лимитами</li>
              <li><span className="font-medium">Автоматический деплой</span> из Git-репозиториев</li>
              <li><span className="font-medium">Глобальная CDN</span> для быстрой загрузки</li>
              <li><span className="font-medium">SSL-сертификаты</span> по умолчанию</li>
              <li><span className="font-medium">Preview deployments</span> для pull requests</li>
              <li><span className="font-medium">Serverless functions</span> для backend-логики</li>
              <li><span className="font-medium">Кастомные домены</span> с автоматической настройкой DNS</li>
              <li><span className="font-medium">Analytics</span> и мониторинг производительности</li>
            </ul>
          </div>
          <div className="bg-gray-900/50 p-4 rounded-xl border border-orange-700/30">
            <p className="text-sm text-gray-400 mb-2">🔧 CLI для Vercel:</p>
            <div className="bg-gray-800 p-3 rounded-lg mb-3">
              <pre className="text-orange-300 text-sm"><code>{`# Установка Vercel CLI\nnpm i -g vercel\n\n# Авторизация\nvercel login\n\n# Деплой текущего проекта\nvercel\n\n# Деплой в production\nvercel --prod\n\n# Деплой с указанием директории\nvercel ./build`}</code></pre>
            </div>
            <p className="text-gray-400 text-xs">
              Vercel CLI позволяет <span className="font-medium">деплоить</span> приложения <span className="font-medium">прямо из терминала</span> и <span className="font-medium">управлять</span> проектами <span className="font-medium">программно</span>.
            </p>
          </div>
        </div>
      </div>

      {/* Деплой на Netlify */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Globe className="w-5 h-5 text-cyan-400" />
          Деплой на Netlify
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            <span className="font-medium text-cyan-300">Netlify</span> — это <span className="font-medium">еще одна популярная</span> платформа для <span className="font-medium">деплоя</span> и <span className="font-medium">хостинга</span> статических сайтов и веб-приложений. Она <span className="font-medium">предлагает</span> множество <span className="font-medium">бесплатных функций</span> и <span className="font-medium">простую интеграцию</span> с Git-репозиториями.
          </p>
        </div>
        
        <div className="mt-6 bg-gray-900/50 p-5 rounded-xl border border-blue-700/30">
          <div className="flex items-center gap-3 mb-3">
            <div className="bg-blue-500/20 p-2 rounded-lg">
              <Upload className="w-5 h-5 text-blue-400" />
            </div>
            <h3 className="text-lg font-bold text-blue-300">Деплой на Netlify через Git</h3>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg mb-3">
            <ol className="list-decimal pl-5 space-y-3 text-gray-300 text-sm">
              <li>
                <span className="font-medium">Создайте аккаунт на Netlify:</span>
                <ul className="list-circle pl-5 mt-1 space-y-1">
                  <li>Перейдите на <a href="https://netlify.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">netlify.com</a></li>
                  <li>Зарегистрируйтесь с помощью GitHub, GitLab, Bitbucket или email</li>
                </ul>
              </li>
              <li>
                <span className="font-medium">Подготовьте ваше приложение:</span>
                <ul className="list-circle pl-5 mt-1 space-y-1">
                  <li>Убедитесь, что ваше приложение в Git-репозитории</li>
                  <li>Добавьте файл <code className="bg-gray-700 px-1 rounded">netlify.toml</code> для настройки билда (опционально)</li>
                </ul>
              </li>
              <li>
                <span className="font-medium">Импортируйте проект в Netlify:</span>
                <ul className="list-circle pl-5 mt-1 space-y-1">
                  <li>Нажмите "New site from Git" в dashboard Netlify</li>
                  <li>Выберите ваш Git-провайдер и репозиторий</li>
                </ul>
              </li>
              <li>
                <span className="font-medium">Настройте параметры билда:</span>
                <ul className="list-circle pl-5 mt-1 space-y-1">
                  <li>Branch to deploy — ветка для деплоя (обычно main/master)</li>
                  <li>Build command — команда сборки (обычно <code className="bg-gray-700 px-1 rounded">npm run build</code>)</li>
                  <li>Publish directory — директория с билдом (обычно <code className="bg-gray-700 px-1 rounded">build</code>)</li>
                </ul>
              </li>
              <li>
                <span className="font-medium">Запустите деплой:</span>
                <ul className="list-circle pl-5 mt-1 space-y-1">
                  <li>Нажмите "Deploy site"</li>
                  <li>Дождитесь завершения билда</li>
                  <li>Получите публичный URL (обычно *.netlify.app)</li>
                </ul>
              </li>
            </ol>
          </div>
        </div>
        
        <div className="mt-6 bg-gray-900/50 p-5 rounded-xl border border-green-700/30">
          <div className="flex items-center gap-3 mb-3">
            <div className="bg-green-500/20 p-2 rounded-lg">
              <Code className="w-5 h-5 text-green-400" />
            </div>
            <h3 className="text-lg font-bold text-green-300">Файл конфигурации netlify.toml</h3>
          </div>
          <div className="bg-gray-800 p-3 rounded-lg mb-3">
            <pre className="text-green-300 text-sm"><code>{`# netlify.toml\n[build]\n  command = "npm run build"\n  publish = "build"\n  \n[[redirects]]\n  from = "/*"\n  to = "/index.html"\n  status = 200\n  \n[functions]\n  directory = "functions"`}</code></pre>
          </div>
          <p className="text-gray-400 text-xs">
            <code className="bg-gray-700 px-1 rounded">netlify.toml</code> позволяет <span className="font-medium">настроить</span> параметры билда, <span className="font-medium">редиректы</span> и <span className="font-medium">serverless functions</span>.
          </p>
        </div>
        
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-900/50 p-4 rounded-xl border border-purple-700/30">
            <p className="text-sm text-gray-400 mb-2">✅ Преимущества Netlify:</p>
            <ul className="list-disc pl-5 space-y-2 text-gray-300 text-sm">
              <li><span className="font-medium">Бесплатный</span> тариф с хорошими лимитами</li>
              <li><span className="font-medium">Простая интеграция</span> с Git-репозиториями</li>
              <li><span className="font-medium">Form handling</span> без backend</li>
              <li><span className="font-medium">Split testing</span> (A/B тестирование)</li>
              <li><span className="font-medium">Identity service</span> для аутентификации</li>
              <li><span className="font-medium">Edge functions</span> для serverless логики</li>
              <li><span className="font-medium">Asset optimization</span> (сжатие изображений)</li>
              <li><span className="font-medium">Кастомные домены</span> с автоматическим SSL</li>
            </ul>
          </div>
          <div className="bg-gray-900/50 p-4 rounded-xl border border-orange-700/30">
            <p className="text-sm text-gray-400 mb-2">🔧 CLI для Netlify:</p>
            <div className="bg-gray-800 p-3 rounded-lg mb-3">
              <pre className="text-orange-300 text-sm"><code>{`# Установка Netlify CLI\nnpm install -g netlify-cli\n\n# Авторизация\nnetlify login\n\n# Деплой текущего проекта\nnetlify deploy\n\n# Деплой в production\nnetlify deploy --prod\n\n# Деплой определенной директории\nnetlify deploy --dir ./build`}</code></pre>
            </div>
            <p className="text-gray-400 text-xs">
              Netlify CLI предоставляет <span className="font-medium">полный контроль</span> над <span className="font-medium">деплоем</span> и <span className="font-medium">управлением</span> проектами <span className="font-medium">из терминала</span>.
            </p>
          </div>
        </div>
      </div>

      {/* Деплой на GitHub Pages */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Globe className="w-5 h-5 text-orange-400" />
          Деплой на GitHub Pages
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            <span className="font-medium text-orange-300">GitHub Pages</span> — это <span className="font-medium">бесплатный</span> сервис хостинга статических сайтов от GitHub. Он <span className="font-medium">позволяет</span> публиковать <span className="font-medium">React-приложения</span> прямо из <span className="font-medium">Git-репозиториев</span> на GitHub.
          </p>
          <p>
            Хотя GitHub Pages <span className="font-medium">проще</span> в настройке, он <span className="font-medium">требует</span> дополнительных <span className="font-medium">настроек</span> для корректной работы React-приложений, особенно <span className="font-medium">SPA</span> с клиентской маршрутизацией.
          </p>
        </div>
        
        <div className="mt-6 bg-gray-900/50 p-5 rounded-xl border border-blue-700/30">
          <div className="flex items-center gap-3 mb-3">
            <div className="bg-blue-500/20 p-2 rounded-lg">
              <Upload className="w-5 h-5 text-blue-400" />
            </div>
            <h3 className="text-lg font-bold text-blue-300">Настройка React-приложения для GitHub Pages</h3>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg mb-3">
            <ol className="list-decimal pl-5 space-y-3 text-gray-300 text-sm">
              <li>
                <span className="font-medium">Установите gh-pages:</span>
                <div className="bg-gray-700 p-2 rounded mt-1">
                  <pre className="text-blue-300 text-xs"><code>{`npm install --save-dev gh-pages`}</code></pre>
                </div>
              </li>
              <li>
                <span className="font-medium">Добавьте homepage в package.json:</span>
                <div className="bg-gray-700 p-2 rounded mt-1">
                  <pre className="text-blue-300 text-xs"><code>{`{\n  "name": "my-app",\n  "homepage": "https://USERNAME.github.io/REPO_NAME",\n  // ... остальные настройки\n}`}</code></pre>
                </div>
                <p className="text-gray-400 text-xs mt-1">
                  Замените <code className="bg-gray-700 px-1 rounded">USERNAME</code> на ваш GitHub username и <code className="bg-gray-700 px-1 rounded">REPO_NAME</code> на имя репозитория.
                </p>
              </li>
              <li>
                <span className="font-medium">Добавьте скрипты в package.json:</span>
                <div className="bg-gray-700 p-2 rounded mt-1">
                  <pre className="text-blue-300 text-xs"><code>{`{\n  "scripts": {\n    "start": "react-scripts start",\n    "build": "react-scripts build",\n    "test": "react-scripts test",\n    "eject": "react-scripts eject",\n    "predeploy": "npm run build",\n    "deploy": "gh-pages -d build"\n  }\n}`}</code></pre>
                </div>
              </li>
              <li>
                <span className="font-medium">Создайте репозиторий на GitHub и запушьте код:</span>
                <div className="bg-gray-700 p-2 rounded mt-1">
                  <pre className="text-blue-300 text-xs"><code>{`git init\ngit add .\ngit commit -m "Initial commit"\ngit remote add origin https://github.com/USERNAME/REPO_NAME.git\ngit push -u origin main`}</code></pre>
                </div>
              </li>
              <li>
                <span className="font-medium">Запустите деплой:</span>
                <div className="bg-gray-700 p-2 rounded mt-1">
                  <pre className="text-blue-300 text-xs"><code>{`npm run deploy`}</code></pre>
                </div>
              </li>
              <li>
                <span className="font-medium">Настройте GitHub Pages в настройках репозитория:</span>
                <ul className="list-circle pl-5 mt-1 space-y-1 text-xs">
                  <li>Перейдите в Settings → Pages</li>
                  <li>Выберите Source: Deploy from a branch</li>
                  <li>Выберите Branch: gh-pages</li>
                  <li>Нажмите Save</li>
                </ul>
              </li>
            </ol>
          </div>
        </div>
        
        <div className="mt-6 bg-gray-900/50 p-5 rounded-xl border border-red-700/30">
          <div className="flex items-center gap-3 mb-3">
            <div className="bg-red-500/20 p-2 rounded-lg">
              <AlertTriangle className="w-5 h-5 text-red-400" />
            </div>
            <h3 className="text-lg font-bold text-red-300">Особенности GitHub Pages для SPA</h3>
          </div>
          <ul className="list-disc pl-5 space-y-2 text-gray-300 text-sm">
            <li>
              <span className="font-medium">Проблема с роутингом:</span> GitHub Pages не поддерживает клиентский роутинг по умолчанию. При прямом переходе по URL <code className="bg-gray-700 px-1 rounded">/about</code> будет ошибка 404.
            </li>
            <li>
              <span className="font-medium">Решение:</span> Создайте файл <code className="bg-gray-700 px-1 rounded">404.html</code> в папке <code className="bg-gray-700 px-1 rounded">public</code>, который перенаправляет на <code className="bg-gray-700 px-1 rounded">index.html</code>:
              <div className="bg-gray-800 p-2 rounded mt-1">
                <pre className="text-red-300 text-xs"><code>{`<!DOCTYPE html>\n<html>\n  <head>\n    <meta charset="utf-8">\n    <title>Redirecting</title>\n    <script>\n      sessionStorage.redirect = location.href;\n    </script>\n    <meta http-equiv="refresh\" content=\"0;URL='/REPO_NAME/'\">\n  </head>\n  <body></body>\n</html>`}</code></pre>
              </div>
            </li>
            <li>
              <span className="font-medium">Альтернативное решение:</span> Используйте хэш-роутинг вместо браузерного роутинга:
              <div className="bg-gray-800 p-2 rounded mt-1">
                <pre className="text-red-300 text-xs"><code>{`// Вместо BrowserRouter используйте HashRouter\nimport { HashRouter as Router } from 'react-router-dom';\n\n<Router>\n  <App />\n</Router>`}</code></pre>
              </div>
            </li>
          </ul>
        </div>
        
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-900/50 p-4 rounded-xl border border-green-700/30">
            <p className="text-sm text-gray-400 mb-2">✅ Преимущества GitHub Pages:</p>
            <ul className="list-disc pl-5 space-y-2 text-gray-300 text-sm">
              <li><span className="font-medium">Полностью бесплатный</span> хостинг</li>
              <li><span className="font-medium">Интеграция</span> с GitHub репозиториями</li>
              <li><span className="font-medium">HTTPS</span> по умолчанию</li>
              <li><span className="font-medium">Кастомные домены</span> с поддержкой</li>
              <li><span className="font-medium">Простая настройка</span> для статических сайтов</li>
              <li><span className="font-medium">Автоматический деплой</span> при пуше в репозиторий</li>
            </ul>
          </div>
          <div className="bg-gray-900/50 p-4 rounded-xl border border-purple-700/30">
            <p className="text-sm text-gray-400 mb-2">❌ Недостатки GitHub Pages:</p>
            <ul className="list-disc pl-5 space-y-2 text-gray-300 text-sm">
              <li><span className="font-medium">Ограничения по трафику</span> (100GB/месяц)</li>
              <li><span className="font-medium">Ограничения по сборкам</span> (10/час)</li>
              <li><span className="font-medium">Нет serverless functions</span> (без дополнительных инструментов)</li>
              <li><span className="font-medium">Проблемы с SPA роутингом</span> (требует настройки)</li>
              <li><span className="font-medium">Медленнее</span>, чем специализированные платформы</li>
              <li><span className="font-medium">Ограничения по размеру</span> (1GB хранилище)</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Сравнение платформ */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Hash className="w-5 h-5 text-yellow-400" />
          Сравнение платформ для деплоя
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Каждая платформа для деплоя <span className="font-medium text-yellow-300">имеет свои особенности</span>, <span className="font-medium">преимущества</span> и <span className="font-medium">недостатки</span>. Выбор <span className="font-medium">зависит</span> от <span className="font-medium">требований</span> вашего проекта, <span className="font-medium">бюджета</span> и <span className="font-medium">предпочтений</span> команды.
          </p>
        </div>
        
        <div className="mt-6 overflow-x-auto">
          <table className="w-full text-sm text-gray-300">
            <thead>
              <tr className="bg-gray-900/50">
                <th className="p-3 text-left border border-gray-700/30">Характеристика</th>
                <th className="p-3 text-left border border-gray-700/30">Vercel</th>
                <th className="p-3 text-left border border-gray-700/30">Netlify</th>
                <th className="p-3 text-left border border-gray-700/30">GitHub Pages</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-gray-800/50">
                <td className="p-3 border border-gray-700/30 font-medium">Бесплатный тариф</td>
                <td className="p-3 border border-gray-700/30 text-green-300">✅ Да (хорошие лимиты)</td>
                <td className="p-3 border border-gray-700/30 text-green-300">✅ Да (хорошие лимиты)</td>
                <td className="p-3 border border-gray-700/30 text-green-300">✅ Да (без ограничений)</td>
              </tr>
              <tr className="bg-gray-800/50">
                <td className="p-3 border border-gray-700/30 font-medium">Автоматический деплой</td>
                <td className="p-3 border border-gray-700/30 text-green-300">✅ Да</td>
                <td className="p-3 border border-gray-700/30 text-green-300">✅ Да</td>
                <td className="p-3 border border-gray-700/30 text-green-300">✅ Да (через GitHub Actions)</td>
              </tr>
              <tr className="bg-gray-800/50">
                <td className="p-3 border border-gray-700/30 font-medium">Кастомные домены</td>
                <td className="p-3 border border-gray-700/30 text-green-300">✅ Да</td>
                <td className="p-3 border border-gray-700/30 text-green-300">✅ Да</td>
                <td className="p-3 border border-gray-700/30 text-green-300">✅ Да</td>
              </tr>
              <tr className="bg-gray-800/50">
                <td className="p-3 border border-gray-700/30 font-medium">SSL-сертификаты</td>
                <td className="p-3 border border-gray-700/30 text-green-300">✅ Да (автоматически)</td>
                <td className="p-3 border border-gray-700/30 text-green-300">✅ Да (автоматически)</td>
                <td className="p-3 border border-gray-700/30 text-green-300">✅ Да (через Cloudflare)</td>
              </tr>
              <tr className="bg-gray-800/50">
                <td className="p-3 border border-gray-700/30 font-medium">Serverless Functions</td>
                <td className="p-3 border border-gray-700/30 text-green-300">✅ Да</td>
                <td className="p-3 border border-gray-700/30 text-green-300">✅ Да</td>
                <td className="p-3 border border-gray-700/30 text-red-300">❌ Нет (без дополнительных инструментов)</td>
              </tr>
              <tr className="bg-gray-800/50">
                <td className="p-3 border border-gray-700/30 font-medium">SPA Routing</td>
                <td className="p-3 border border-gray-700/30 text-green-300">✅ Да (из коробки)</td>
                <td className="p-3 border border-gray-700/30 text-green-300">✅ Да (настраивается)</td>
                <td className="p-3 border border-gray-700/30 text-orange-300">⚠️ Требует настройки</td>
              </tr>
              <tr className="bg-gray-800/50">
                <td className="p-3 border border-gray-700/30 font-medium">Global CDN</td>
                <td className="p-3 border border-gray-700/30 text-green-300">✅ Да</td>
                <td className="p-3 border border-gray-700/30 text-green-300">✅ Да</td>
                <td className="p-3 border border-gray-700/30 text-orange-300">⚠️ Ограниченная</td>
              </tr>
              <tr className="bg-gray-800/50">
                <td className="p-3 border border-gray-700/30 font-medium">Простота настройки</td>
                <td className="p-3 border border-gray-700/30 text-green-300">✅ Очень простая</td>
                <td className="p-3 border border-gray-700/30 text-green-300">✅ Простая</td>
                <td className="p-3 border border-gray-700/30 text-orange-300">⚠️ Требует настройки для SPA</td>
              </tr>
              <tr className="bg-gray-800/50">
                <td className="p-3 border border-gray-700/30 font-medium">Analytics</td>
                <td className="p-3 border border-gray-700/30 text-green-300">✅ Да</td>
                <td className="p-3 border border-gray-700/30 text-green-300">✅ Да</td>
                <td className="p-3 border border-gray-700/30 text-red-300">❌ Нет</td>
              </tr>
              <tr className="bg-gray-800/50">
                <td className="p-3 border border-gray-700/30 font-medium">Preview Deployments</td>
                <td className="p-3 border border-gray-700/30 text-green-300">✅ Да</td>
                <td className="p-3 border border-gray-700/30 text-green-300">✅ Да</td>
                <td className="p-3 border border-gray-700/30 text-red-300">❌ Нет</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <div className="mt-6 p-3 bg-blue-900/20 border border-blue-700/30 rounded-lg">
          <p className="text-blue-300 text-sm flex items-start gap-2">
            <span className="font-medium">💡 Рекомендации по выбору:</span>
            <span>
              <ul className="list-disc pl-5 space-y-1">
                <li><span className="font-medium">Для начинающих:</span> Vercel — самая простая настройка и лучшая поддержка React</li>
                <li><span className="font-medium">Для команд:</span> Netlify — отличные инструменты для совместной работы</li>
                <li><span className="font-medium">Для open-source:</span> GitHub Pages — полностью бесплатный и интегрирован с GitHub</li>
                <li><span className="font-medium">Для production:</span> Vercel или Netlify — лучшая производительность и надежность</li>
              </ul>
            </span>
          </p>
        </div>
      </div>

      {/* Заключение */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <div className="flex items-start gap-3">
          <div className="bg-green-500/20 p-2 rounded-lg flex-shrink-0">
            <Navigation className="w-5 h-5 text-green-400" />
          </div>
          <div>
            <h3 className="font-bold text-white mb-2">Отличная работа! 🎉</h3>
            <p className="text-gray-300">
              Теперь вы понимаете, что такое React Router и как использовать его для создания навигации в React-приложениях. Вы научились устанавливать <code className="bg-gray-700 px-1 rounded">react-router-dom</code>, настраивать <code className="bg-gray-700 px-1 rounded">BrowserRouter</code>, определять маршруты с помощью <code className="bg-gray-700 px-1 rounded">Routes</code> и <code className="bg-gray-700 px-1 rounded">Route</code>, создавать навигацию с <code className="bg-gray-700 px-1 rounded">Link</code> и <code className="bg-gray-700 px-1 rounded">NavLink</code>, работать с динамическими маршрутами и параметрами через <code className="bg-gray-700 px-1 rounded">useParams()</code>, а также использовать программную навигацию с <code className="bg-gray-700 px-1 rounded">useNavigate()</code>. React Router — это мощный инструмент для создания современных одностраничных приложений (SPA) с плавной навигацией и сохранением состояния. В следующих уроках мы рассмотрим продвинутые возможности маршрутизации, защиту маршрутов, ленивую загрузку компонентов и интеграцию с глобальным состоянием приложения.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Part1;