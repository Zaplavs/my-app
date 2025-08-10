// src/data/courses/git/lesson21/part1.jsx
import React from 'react';
import {CheckCircle, Globe, Zap, Play, Shield, Code, Download, FileText, Settings } from 'lucide-react';

const Part1 = () => {
  return (
    <div className="space-y-8 text-gray-200">
      {/* Вступление */}
      <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 backdrop-blur-sm border border-blue-700/30 rounded-2xl p-6 shadow-lg">
        <div className="flex items-start gap-4">
          <div className="bg-blue-500/20 p-3 rounded-lg">
            <Globe className="w-6 h-6 text-blue-400" />
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">🌐 Урок 21: GitHub Pages и Actions</h1>
            <h2 className="text-xl font-semibold text-blue-300 mb-3">Хостинг статики и автоматизация CI/CD</h2>
            <p className="text-gray-300">
              <span className="font-medium text-yellow-400">🎯 Цель урока:</span> Освоить использование GitHub Pages для хостинга статических сайтов и GitHub Actions для автоматизации CI/CD.
            </p>
          </div>
        </div>
      </div>

      {/* Что такое GitHub Pages */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Globe className="w-5 h-5 text-green-400" />
          Что такое GitHub Pages?
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            <span className="font-medium text-green-300">GitHub Pages</span> — это бесплатный сервис хостинга статических сайтов, предоставляемый GitHub.
          </p>
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-gray-900/50 p-4 rounded-xl border border-green-700/30">
              <h3 className="font-bold text-green-300 mb-2 flex items-center gap-2">
                <Globe className="w-5 h-5" />
                Основные возможности
              </h3>
              <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-400 text-sm">
                <li>Бесплатный хостинг статических сайтов</li>
                <li>HTTPS поддержка (автоматически)</li>
                <li>Пользовательские домены</li>
                <li>Автоматическое обновление при пуше</li>
                <li>Поддержка Jekyll для блогов</li>
                <li>Интеграция с GitHub Actions</li>
              </ul>
            </div>
            <div className="bg-gray-900/50 p-4 rounded-xl border border-purple-700/30">
              <h3 className="font-bold text-purple-300 mb-2 flex items-center gap-2">
                <Settings className="w-5 h-5" />
                Типы сайтов Pages
              </h3>
              <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-400 text-sm">
                <li><span className="font-medium">User/Organization site:</span> username.github.io</li>
                <li><span className="font-medium">Project site:</span> username.github.io/project</li>
                <li><span className="font-medium">Custom domain:</span> yourdomain.com</li>
                <li>Поддержка поддиректорий</li>
                <li>Статические файлы HTML/CSS/JS</li>
                <li>Файлы документации</li>
              </ul>
            </div>
          </div>
          <div className="mt-4 p-3 bg-blue-900/20 border border-blue-700/30 rounded-lg flex items-start gap-2">
            <Zap className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
            <p className="text-blue-300 text-sm">
              <span className="font-medium">💡 Пример:</span> Документация проекта, портфолио, лендинг, блог или демонстрационное приложение.
            </p>
          </div>
        </div>
      </div>

      {/* Настройка GitHub Pages */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Settings className="w-5 h-5 text-purple-400" />
          Настройка GitHub Pages
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed mb-4">
          <p>
            GitHub Pages можно настроить несколькими способами в зависимости от типа проекта.
          </p>
        </div>

        <div className="space-y-6 mt-6">
          <div className="bg-gray-900/50 p-5 rounded-xl border border-green-700/30">
            <div className="flex items-center gap-3 mb-3">
              <Globe className="w-5 h-5 text-green-400" />
              <h3 className="text-lg font-bold text-green-300">1. Базовая настройка через интерфейс</h3>
            </div>
            <p className="text-gray-300 mb-3">
              Настройка GitHub Pages через веб-интерфейс репозитория:
            </p>
            <ol className="list-decimal pl-5 mt-2 space-y-2 text-gray-300">
              <li>Откройте репозиторий на GitHub</li>
              <li>Перейдите в Settings → Pages</li>
              <li>Выберите ветку (обычно main или gh-pages)</li>
              <li>Выберите директорию (/root или /docs)</li>
              <li>Нажмите "Save"</li>
              <li>Дождитесь сборки и получения URL</li>
            </ol>
            
            <div className="mt-4 bg-gray-800 p-4 rounded-lg">
              <h4 className="font-bold text-blue-300 mb-2">Варианты источников:</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <div className="bg-gray-700 p-3 rounded text-center">
                  <div className="font-medium text-white">main /root</div>
                  <div className="text-xs text-gray-400 mt-1">Файлы в корне main</div>
                </div>
                <div className="bg-gray-700 p-3 rounded text-center">
                  <div className="font-medium text-white">main /docs</div>
                  <div className="text-xs text-gray-400 mt-1">Файлы в папке docs</div>
                </div>
                <div className="bg-gray-700 p-3 rounded text-center">
                  <div className="font-medium text-white">gh-pages</div>
                  <div className="text-xs text-gray-400 mt-1">Отдельная ветка</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-900/50 p-5 rounded-xl border border-blue-700/30">
            <div className="flex items-center gap-3 mb-3">
              <Code className="w-5 h-5 text-blue-400" />
              <h3 className="text-lg font-bold text-blue-300">2. Структура проекта для Pages</h3>
            </div>
            <p className="text-gray-300 mb-3">
              Примеры структур проектов, подходящих для GitHub Pages:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gray-800 p-4 rounded-lg">
                <h4 className="font-bold text-green-300 mb-2">Простой сайт в корне:</h4>
                <pre className="whitespace-pre-wrap text-gray-300 text-sm">
{`my-project/
├── index.html
├── styles.css
├── script.js
└── images/
    └── logo.png`}</pre>
              </div>
              
              <div className="bg-gray-800 p-4 rounded-lg">
                <h4 className="font-bold text-purple-300 mb-2">Сайт в директории docs:</h4>
                <pre className="whitespace-pre-wrap text-gray-300 text-sm">
{`my-project/
├── src/
├── docs/
│   ├── index.html
│   ├── css/
│   └── js/
└── README.md`}</pre>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-900/50 p-5 rounded-xl border border-orange-700/30">
            <div className="flex items-center gap-3 mb-3">
              <Shield className="w-5 h-5 text-orange-400" />
              <h3 className="text-lg font-bold text-orange-300">3. Настройка кастомного домена</h3>
            </div>
            <p className="text-gray-300 mb-3">
              Использование собственного домена с GitHub Pages:
            </p>
            
            <div className="bg-gray-800 p-4 rounded-lg">
              <h4 className="font-bold text-white mb-2">Шаги настройки:</h4>
              <ol className="list-decimal pl-5 space-y-2 text-gray-300 text-sm">
                <li>Добавьте файл CNAME в корень проекта с вашим доменом</li>
                <li>Настройте DNS записи у вашего регистратора</li>
                <li>Обновите настройки Pages в Settings</li>
                <li>Дождитесь SSL сертификата (автоматически)</li>
              </ol>
            </div>
            
            <div className="mt-4 bg-gray-800 p-4 rounded-lg">
              <h4 className="font-bold text-yellow-300 mb-2">Пример файла CNAME:</h4>
              <div className="bg-gray-700 p-3 rounded">
                <code className="text-green-300">mysite.com</code>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Введение в GitHub Actions */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Play className="w-5 h-5 text-cyan-400" />
          Введение в GitHub Actions
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            GitHub Actions — это мощная платформа для автоматизации CI/CD процессов прямо в репозитории.
          </p>
        </div>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-gray-900/50 p-4 rounded-xl border border-green-700/30">
            <h3 className="font-bold text-green-300 mb-3 flex items-center gap-2">
              <Play className="w-5 h-5" />
              Основные концепции Actions
            </h3>
            <ul class="space-y-2 text-gray-300 text-sm">
              <li class="flex items-start gap-2">
                <span class="text-green-400">⚡</span>
                <span><span class="font-medium">Workflows:</span> YAML файлы в .github/workflows</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-green-400">🏃</span>
                <span><span class="font-medium">Events:</span> Триггеры запуска (push, pull_request)</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-green-400">⚙️</span>
                <span><span class="font-medium">Jobs:</span> Наборы задач, выполняемых на раннерах</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-green-400">🔧</span>
                <span><span class="font-medium">Steps:</span> Отдельные шаги внутри jobs</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-green-400">📦</span>
                <span><span class="font-medium">Actions:</span> Переиспользуемые компоненты</span>
              </li>
            </ul>
          </div>
          
          <div class="bg-gray-900/50 p-4 rounded-xl border border-blue-700/30">
            <h3 class="font-bold text-blue-300 mb-3 flex items-center gap-2">
              <Zap class="w-5 h-5" />
              Распространенные use cases
            </h3>
            <ul class="space-y-2 text-gray-300 text-sm">
              <li class="flex items-start gap-2">
                <span class="text-blue-400">🧪</span>
                <span>Автоматическое тестирование</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-blue-400">🚀</span>
                <span>CI/CD и деплой</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-blue-400">📝</span>
                <span>Генерация документации</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-blue-400">🔍</span>
                <span>Линтинг и форматирование кода</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-blue-400">🏷️</span>
                <span>Автоматическое создание тегов</span>
              </li>
            </ul>
          </div>
        </div>

        <div class="mt-6 bg-gray-900/50 p-5 rounded-xl border border-purple-700/30">
          <h3 class="font-bold text-purple-300 mb-3">Структура workflow файла:</h3>
          
          <div class="bg-gray-800 p-4 rounded-lg">
            <pre class="whitespace-pre-wrap text-gray-300 text-sm">
{`name: Название workflow
on: # Триггеры
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs: # Задачи
  build: # Название job
    runs-on: ubuntu-latest # Раннер
    steps: # Шаги
      - uses: actions/checkout@v3 # Action
      - name: Установка зависимостей
        run: npm install
      - name: Запуск тестов
        run: npm test`}</pre>
          </div>
        </div>
      </div>

      {/* Деплой сайта с помощью Actions */}
      <div class="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 class="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Download class="w-5 h-5 text-yellow-400" />
          Деплой сайта с помощью GitHub Actions
        </h2>
        <div class="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Автоматический деплой статического сайта на GitHub Pages с помощью GitHub Actions.
          </p>
        </div>

        <div class="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div class="bg-gray-900/50 p-4 rounded-xl border border-green-700/30">
            <h3 class="font-bold text-green-300 mb-3 flex items-center gap-2">
              <Globe class="w-5 h-5" />
              Базовый деплой workflow
            </h3>
            <div class="bg-gray-800 p-4 rounded-lg">
              <pre class="whitespace-pre-wrap text-gray-300 text-xs">
{`name: Deploy to GitHub Pages
on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
          
      - name: Install dependencies
        run: npm install
        
      - name: Build project
        run: npm run build
        
      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: $\{{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist`}</pre>
            </div>
          </div>
          
          <div class="bg-gray-900/50 p-4 rounded-xl border border-blue-700/30">
            <h3 class="font-bold text-blue-300 mb-3 flex items-center gap-2">
              <Shield class="w-5 h-5" />
              Безопасный деплой с персональным токеном
            </h3>
            <div class="bg-gray-800 p-4 rounded-lg">
              <pre class="whitespace-pre-wrap text-gray-300 text-xs">
{`name: Secure Deploy
on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          deploy_key: $\{{ secrets.ACTIONS_DEPLOY_KEY }}
          publish_dir: ./public
          publish_branch: gh-pages`}</pre>
            </div>
            
            <div class="mt-3 p-3 bg-blue-900/20 border border-blue-700/30 rounded text-blue-300 text-xs">
              ⚡ Требуется создание SSH ключа и добавление в Secrets
            </div>
          </div>
        </div>

        <div class="mt-6 bg-gray-900/50 p-4 rounded-lg border border-orange-700/30">
          <h4 class="font-bold text-orange-300 mb-3 flex items-center gap-2">
            <Settings class="w-5 h-5" />
            Расширенный пример с тестированием
          </h4>
          <div class="bg-gray-800 p-4 rounded">
            <pre class="whitespace-pre-wrap text-gray-300 text-xs">
{`name: CI/CD Pipeline
on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
      - name: Install dependencies
        run: npm install
      - name: Run tests
        run: npm test
      - name: Run linter
        run: npm run lint

  deploy:
    needs: test
    if: github.ref == 'refs/heads/main'
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Build site
        run: |
          npm install
          npm run build
      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: $\{{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist`}</pre>
          </div>
        </div>
      </div>

      {/* Практические примеры и лучшие практики */}
      <div class="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 class="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Zap class="w-5 h-5 text-green-400" />
          Практические примеры и лучшие практики
        </h2>
        <div class="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Реальные сценарии использования GitHub Pages и Actions с лучшими практиками.
          </p>
        </div>

        <div class="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div class="bg-gray-900/50 p-4 rounded-xl border border-green-700/30">
            <h3 class="font-bold text-green-300 mb-3">Примеры проектов для Pages:</h3>
            <ul class="space-y-3 text-gray-300 text-sm">
              <li class="flex items-start gap-2">
                <span class="text-green-400">📄</span>
                <div>
                  <div class="font-medium">Документация проекта</div>
                  <div class="text-gray-400 text-xs">Сгенерированная Jekyll или другой системой</div>
                </div>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-green-400">🎨</span>
                <div>
                  <div class="font-medium">Портфолио разработчика</div>
                  <div class="text-gray-400 text-xs">Статический сайт с проектами и навыками</div>
                </div>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-green-400">📊</span>
                <div>
                  <div class="font-medium">Демонстрационные приложения</div>
                  <div class="text-gray-400 text-xs">React, Vue, или vanilla JS приложения</div>
                </div>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-green-400">📝</span>
                <div>
                  <div class="font-medium">Блог или статьи</div>
                  <div class="text-gray-400 text-xs">С использованием Jekyll, Hugo или других генераторов</div>
                </div>
              </li>
            </ul>
          </div>
          
          <div class="bg-gray-900/50 p-4 rounded-xl border border-blue-700/30">
            <h3 class="font-bold text-blue-300 mb-3">Лучшие практики Actions:</h3>
            <ul class="space-y-2 text-gray-300 text-sm">
              <li class="flex items-start gap-2">
                <span class="text-blue-400">✅</span>
                <span>Используйте кэширование зависимостей</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-blue-400">✅</span>
                <span>Разделяйте jobs для параллельного выполнения</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-blue-400">✅</span>
                <span>Используйте матричные стратегии для тестирования</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-blue-400">✅</span>
                <span>Храните секреты в GitHub Secrets</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-blue-400">✅</span>
                <span>Добавляйте осмысленные названия шагов</span>
              </li>
            </ul>
          </div>
        </div>

        <div class="mt-6 bg-gray-900/50 p-5 rounded-xl border border-purple-700/30">
          <h3 class="font-bold text-purple-300 mb-3">Полезные Actions для веб-проектов:</h3>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div class="bg-gray-800 p-3 rounded">
              <div class="font-medium text-green-300">actions/checkout@v3</div>
              <div class="text-xs text-gray-400 mt-1">Получение кода репозитория</div>
            </div>
            <div class="bg-gray-800 p-3 rounded">
              <div class="font-medium text-blue-300">actions/setup-node@v3</div>
              <div class="text-xs text-gray-400 mt-1">Установка Node.js</div>
            </div>
            <div class="bg-gray-800 p-3 rounded">
              <div class="font-medium text-purple-300">peaceiris/actions-gh-pages@v3</div>
              <div class="text-xs text-gray-400 mt-1">Деплой на GitHub Pages</div>
            </div>
            <div class="bg-gray-800 p-3 rounded">
              <div class="font-medium text-orange-300">actions/cache@v3</div>
              <div class="text-xs text-gray-400 mt-1">Кэширование зависимостей</div>
            </div>
          </div>
          
          <div class="mt-4 p-3 bg-yellow-900/20 border border-yellow-700/30 rounded text-yellow-300 text-sm">
            ⚡ <span class="font-medium">Совет:</span> Используйте environment variables для конфигурации разных сред (dev, staging, prod).
          </div>
        </div>
      </div>

      {/* Заключение */}
      <div class="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <div class="flex items-start gap-3">
          <div class="bg-green-500/20 p-2 rounded-lg flex-shrink-0">
            <CheckCircle class="w-5 h-5 text-green-400" />
          </div>
          <div>
            <h3 class="font-bold text-white mb-2">Отлично! 🌐</h3>
            <p class="text-gray-300">
              Теперь вы знаете, как использовать GitHub Pages для хостинга статических сайтов и GitHub Actions для автоматизации CI/CD процессов. Вы научились настраивать Pages, создавать workflow для автоматического деплоя и следовать лучшим практикам.
              В следующем уроке мы рассмотрим работу с Git hooks и локальной автоматизацией.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Part1;