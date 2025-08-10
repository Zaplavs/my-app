// src/data/courses/git/lesson21/part3.jsx
import React, { useState } from 'react';
import { Globe, Play, CheckCircle, Terminal, Download, Code, Settings } from 'lucide-react';

const Part3 = () => {
  const [completedTasks, setCompletedTasks] = useState({
    task1: false,
    task2: false,
    task3: false
  });

  const handleTaskComplete = (task) => {
    setCompletedTasks(prev => ({
      ...prev,
      [task]: !prev[task]
    }));
  };

  return (
    <div className="space-y-8 text-gray-200">
      {/* Вступление */}
      <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 backdrop-blur-sm border border-blue-700/30 rounded-2xl p-6 shadow-lg">
        <div className="flex items-start gap-4">
          <div className="bg-blue-500/20 p-3 rounded-lg">
            <Globe className="w-6 h-6 text-blue-400" />
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">💻 Практическое задание: GitHub Pages и Actions</h1>
            <p className="text-gray-300">
              <span className="font-medium text-yellow-400">🎯 Цель:</span> Практически освоить настройку GitHub Pages и создание автоматических workflow с GitHub Actions.
            </p>
          </div>
        </div>
      </div>

      {/* Задание 1: Создание и настройка GitHub Pages */}
      <div className={`bg-gray-800/40 backdrop-blur-sm border rounded-2xl p-6 shadow-xl ${completedTasks.task1 ? 'border-green-700/50' : 'border-gray-700/50'}`}>
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Play className="w-5 h-5 text-green-400" />
          Задание 1: Создание и настройка GitHub Pages
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Создайте статический сайт и настройте его публикацию через GitHub Pages.
          </p>
        </div>
        <div className="mt-6 space-y-6">
          <div className="bg-gray-900/50 p-5 rounded-xl border border-green-700/30">
            <h3 className="font-bold text-green-300 mb-3 flex items-center gap-2">
              <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">1</span>
              Создание статического сайта
            </h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>Создайте новую директорию: <code className="bg-gray-700 px-1.5 py-0.5 rounded">mkdir github-pages-demo</code></li>
              <li>Перейдите в директорию: <code className="bg-gray-700 px-1.5 py-0.5 rounded">cd github-pages-demo</code></li>
              <li>Инициализируйте Git: <code className="bg-gray-700 px-1.5 py-0.5 rounded">git init</code></li>
              <li>Создайте базовую структуру сайта:</li>
            </ul>
            
            <div className="mt-3 bg-gray-800 p-4 rounded-lg">
              <pre className="whitespace-pre-wrap text-gray-300 text-sm">
{`# Создайте index.html
cat > index.html << 'EOF'
<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Мой сайт на GitHub Pages</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <header>
        <h1>Добро пожаловать на мой сайт!</h1>
    </header>
    <main>
        <p>Этот сайт создан в рамках обучения GitHub Pages.</p>
        <div class="features">
            <div class="feature">
                <h3>Функция 1</h3>
                <p>Описание первой функции</p>
            </div>
            <div class="feature">
                <h3>Функция 2</h3>
                <p>Описание второй функции</p>
            </div>
        </div>
    </main>
    <footer>
        <p>&copy; 2024 Мой сайт</p>
    </footer>
    <script src="script.js"></script>
</body>
</html>
EOF`}</pre>
            </div>
          </div>
          
          <div className="bg-gray-900/50 p-5 rounded-xl border border-blue-700/30">
            <h3 className="font-bold text-blue-300 mb-3 flex items-center gap-2">
              <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">2</span>
              Добавление стилей и скриптов
            </h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>Создайте файл стилей <code className="bg-gray-700 px-1.5 py-0.5 rounded">styles.css</code>:</li>
            </ul>
            
            <div className="mt-3 bg-gray-800 p-4 rounded-lg">
              <pre className="whitespace-pre-wrap text-gray-300 text-sm">
{`/* styles.css */
body {
    font-family: Arial, sans-serif;
    line-height: 1.6;
    margin: 0;
    padding: 0;
    background-color: #f4f4f4;
}

header {
    background-color: #333;
    color: white;
    text-align: center;
    padding: 1rem;
}

main {
    max-width: 800px;
    margin: 2rem auto;
    padding: 0 1rem;
}

.features {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 1rem;
    margin-top: 2rem;
}

.feature {
    background-color: white;
    padding: 1rem;
    border-radius: 5px;
    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
}

footer {
    background-color: #333;
    color: white;
    text-align: center;
    padding: 1rem;
    margin-top: 2rem;
}`}</pre>
            </div>
            
            <ul className="list-disc pl-6 space-y-2 text-gray-300 mt-3">
              <li>Создайте файл скриптов <code className="bg-gray-700 px-1.5 py-0.5 rounded">script.js</code>:</li>
            </ul>
            
            <div className="mt-3 bg-gray-800 p-4 rounded-lg">
              <pre className="whitespace-pre-wrap text-gray-300 text-sm">
{`// script.js
console.log('Сайт загружен!');

// Простая анимация при загрузке
document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('header');
    header.style.opacity = '0';
    header.style.transition = 'opacity 1s';
    
    setTimeout(() => {
        header.style.opacity = '1';
    }, 100);
});`}</pre>
            </div>
          </div>
          
          <div className="bg-gray-900/50 p-5 rounded-xl border border-purple-700/30">
            <h3 className="font-bold text-purple-300 mb-3 flex items-center gap-2">
              <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">3</span>
              Публикация на GitHub Pages
            </h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>Создайте репозиторий на GitHub с именем <code className="bg-gray-700 px-1.5 py-0.5 rounded">username.github.io</code></li>
              <li>Свяжите локальный репозиторий с удаленным:</li>
              <div className="ml-6 bg-gray-800 p-3 rounded my-2">
                <code className="text-sm text-green-300">git remote add origin https://github.com/ваш_логин/ваш_логин.github.io.git</code>
              </div>
              <li>Добавьте и закоммитьте файлы:</li>
              <div className="ml-6 bg-gray-800 p-3 rounded my-2">
                <code className="text-sm text-blue-300">git add . && git commit -m "Initial commit"</code>
              </div>
              <li>Отправьте в main ветку:</li>
              <div className="ml-6 bg-gray-800 p-3 rounded my-2">
                <code className="text-sm text-purple-300">git push -u origin main</code>
              </div>
              <li>Настройте GitHub Pages через Settings → Pages → Source: main branch</li>
              <li>Дождитесь публикации и проверьте сайт по адресу: https://ваш_логин.github.io</li>
            </ul>
          </div>
        </div>
        <div className="mt-6 flex items-center">
          <input
            type="checkbox"
            id="task1"
            checked={completedTasks.task1}
            onChange={() => handleTaskComplete('task1')}
            className="w-5 h-5 text-blue-600 rounded focus:ring-blue-500"
          />
          <label htmlFor="task1" className="ml-2 text-gray-300">
            Я создал и опубликовал сайт на GitHub Pages
          </label>
          {completedTasks.task1 && <CheckCircle className="ml-2 w-5 h-5 text-green-400" />}
        </div>
      </div>

      {/* Задание 2: Создание GitHub Actions workflow */}
      <div className={`bg-gray-800/40 backdrop-blur-sm border rounded-2xl p-6 shadow-xl ${completedTasks.task2 ? 'border-green-700/50' : 'border-gray-700/50'}`}>
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Download className="w-5 h-5 text-purple-400" />
          Задание 2: Создание GitHub Actions workflow
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Создайте автоматический workflow для тестирования и деплоя сайта.
          </p>
        </div>
        <div className="mt-6 space-y-6">
          <div className="bg-gray-900/50 p-5 rounded-xl border border-purple-700/30">
            <h3 className="font-bold text-purple-300 mb-3 flex items-center gap-2">
              <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">1</span>
              Подготовка проекта для автоматизации
            </h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>Создайте файл <code className="bg-gray-700 px-1.5 py-0.5 rounded">package.json</code> для управления зависимостями:</li>
            </ul>
            
            <div className="mt-3 bg-gray-800 p-4 rounded-lg">
              <pre className="whitespace-pre-wrap text-gray-300 text-sm">
{`{
  "name": "github-pages-demo",
  "version": "1.0.0",
  "description": "Демонстрационный сайт для GitHub Pages",
  "main": "index.html",
  "scripts": {
    "test": "echo 'Тесты прошли успешно'",
    "lint": "echo 'Линтинг завершен'",
    "build": "echo 'Сборка завершена'"
  },
  "devDependencies": {
    "prettier": "^2.8.0"
  }
}`}</pre>
            </div>
            
            <ul className="list-disc pl-6 space-y-2 text-gray-300 mt-3">
              <li>Создайте директорию для workflow: <code className="bg-gray-700 px-1.5 py-0.5 rounded">mkdir -p .github/workflows</code></li>
              <li>Создайте файл <code className="bg-gray-700 px-1.5 py-0.5 rounded">.github/workflows/test.yml</code>:</li>
            </ul>
          </div>
          
          <div className="bg-gray-900/50 p-5 rounded-xl border border-blue-700/30">
            <h3 className="font-bold text-blue-300 mb-3 flex items-center gap-2">
              <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">2</span>
              Базовый тестовый workflow
            </h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>Добавьте следующий код в <code className="bg-gray-700 px-1.5 py-0.5 rounded">test.yml</code>:</li>
            </ul>
            
            <div className="mt-3 bg-gray-800 p-4 rounded-lg">
              <pre className="whitespace-pre-wrap text-gray-300 text-sm">
{`name: Test Workflow
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
        
      - name: Run linter
        run: npm run lint
        
      - name: Run tests
        run: npm test`}</pre>
            </div>
            
            <ul className="list-disc pl-6 space-y-2 text-gray-300 mt-3">
              <li>Зафиксируйте изменения:</li>
              <div className="ml-6 bg-gray-800 p-3 rounded my-2">
                <code className="text-sm text-green-300">git add . && git commit -m "Добавил тестовый workflow"</code>
              </div>
              <li>Отправьте в репозиторий:</li>
              <div className="ml-6 bg-gray-800 p-3 rounded my-2">
                <code className="text-sm text-blue-300">git push origin main</code>
              </div>
              <li>Проверьте выполнение workflow во вкладке Actions на GitHub</li>
            </ul>
          </div>
          
          <div className="bg-gray-900/50 p-5 rounded-xl border border-orange-700/30">
            <h3 className="font-bold text-orange-300 mb-3 flex items-center gap-2">
              <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">3</span>
              Расширенный workflow с деплоем
            </h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>Создайте файл <code className="bg-gray-700 px-1.5 py-0.5 rounded">.github/workflows/deploy.yml</code>:</li>
            </ul>
            
            <div className="mt-3 bg-gray-800 p-4 rounded-lg">
              <pre className="whitespace-pre-wrap text-gray-300 text-sm">
{`name: Deploy to GitHub Pages
on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
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
        
      - name: Build project
        run: npm run build
        
      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: $\{{ secrets.GITHUB_TOKEN }}
          publish_dir: .`}</pre>
            </div>
            
            <ul className="list-disc pl-6 space-y-2 text-gray-300 mt-3">
              <li>Добавьте файл <code className="bg-gray-700 px-1.5 py-0.5 rounded">README.md</code> с описанием проекта:</li>
            </ul>
            
            <div className="mt-3 bg-gray-800 p-4 rounded-lg">
              <pre className="whitespace-pre-wrap text-gray-300 text-sm">
{`# Мой сайт на GitHub Pages

Этот сайт создан в рамках обучения GitHub Pages и Actions.

## Функции
- Адаптивный дизайн
- Простая анимация
- Автоматический деплой

## Технологии
- HTML5
- CSS3
- JavaScript
- GitHub Actions

## Деплой
Сайт автоматически деплоится при пуше в main ветку.`}</pre>
            </div>
          </div>
        </div>
        <div className="mt-6 flex items-center">
          <input
            type="checkbox"
            id="task2"
            checked={completedTasks.task2}
            onChange={() => handleTaskComplete('task2')}
            className="w-5 h-5 text-blue-600 rounded focus:ring-blue-500"
          />
          <label htmlFor="task2" className="ml-2 text-gray-300">
            Я создал и протестировал GitHub Actions workflow
          </label>
          {completedTasks.task2 && <CheckCircle className="ml-2 w-5 h-5 text-green-400" />}
        </div>
      </div>

      {/* Задание 3: Расширенная автоматизация и мониторинг */}
      <div className={`bg-gray-800/40 backdrop-blur-sm border rounded-2xl p-6 shadow-xl ${completedTasks.task3 ? 'border-green-700/50' : 'border-gray-700/50'}`}>
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Settings className="w-5 h-5 text-cyan-400" />
          Задание 3: Расширенная автоматизация и мониторинг
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Создайте сложный workflow с кэшированием, матричным тестированием и уведомлениями.
          </p>
        </div>
        <div className="mt-6 space-y-6">
          <div className="bg-gray-900/50 p-5 rounded-xl border border-cyan-700/30">
            <h3 className="font-bold text-cyan-300 mb-3">Workflow с кэшированием зависимостей:</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>Обновите файл <code className="bg-gray-700 px-1.5 py-0.5 rounded">.github/workflows/advanced.yml</code>:</li>
            </ul>
            
            <div className="mt-3 bg-gray-800 p-4 rounded-lg">
              <pre className="whitespace-pre-wrap text-gray-300 text-xs">
{`name: Advanced CI/CD Pipeline
on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  test:
    runs-on: ubuntu-latest
    strategy:
      matrix:
        node-version: [16, 18, 20]
    steps:
      - uses: actions/checkout@v3
      
      - name: Use Node.js $\{{ matrix.node-version }}
        uses: actions/setup-node@v3
        with:
          node-version: $\{{ matrix.node-version }}
          
      - name: Cache node modules
        uses: actions/cache@v3
        with:
          path: ~/.npm
          key: $\{{ runner.os }}-node-$\{{ hashFiles('**/package-lock.json') }}
          restore-keys: |
            $\{{ runner.os }}-node-
            
      - name: Install dependencies
        run: npm ci
        
      - name: Run tests
        run: npm test
        
      - name: Run linter
        run: npm run lint

  build:
    needs: test
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
          
      - name: Cache node modules
        uses: actions/cache@v3
        with:
          path: ~/.npm
          key: $\{{ runner.os }}-node-$\{{ hashFiles('**/package-lock.json') }}
          
      - name: Install dependencies
        run: npm ci
        
      - name: Build project
        run: npm run build
        
      - name: Archive build artifacts
        uses: actions/upload-artifact@v3
        with:
          name: build-files
          path: |
            index.html
            styles.css
            script.js
            README.md

  deploy:
    needs: build
    if: github.ref == 'refs/heads/main'
    runs-on: ubuntu-latest
    steps:
      - name: Download build artifacts
        uses: actions/download-artifact@v3
        with:
          name: build-files
          
      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: $\{{ secrets.GITHUB_TOKEN }}
          publish_dir: .`}</pre>
            </div>
          </div>
          
          <div className="bg-gray-900/50 p-5 rounded-xl border border-green-700/30">
            <h3 className="font-bold text-green-300 mb-3">Добавление уведомлений и статуса:</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>Создайте файл <code className="bg-gray-700 px-1.5 py-0.5 rounded">.github/workflows/notifications.yml</code>:</li>
            </ul>
            
            <div className="mt-3 bg-gray-800 p-4 rounded-lg">
              <pre className="whitespace-pre-wrap text-gray-300 text-xs">
{`name: Build Status Notifications
on:
  workflow_run:
    workflows: ["Advanced CI/CD Pipeline"]
    types: [completed]

jobs:
  notify:
    runs-on: ubuntu-latest
    if: $\{{ github.event.workflow_run.conclusion == 'success' || github.event.workflow_run.conclusion == 'failure' }}
    steps:
      - name: Send status notification
        uses: dawidd6/action-send-mail@v3
        if: $\{{ github.event.workflow_run.conclusion == 'failure' }}
        with:
          server_address: smtp.gmail.com
          server_port: 465
          username: $\{{ secrets.EMAIL_USERNAME }}
          password: $\{{ secrets.EMAIL_PASSWORD }}
          subject: Build Failed - $\{{ github.repository }}
          body: Build $\{{ github.event.workflow_run.conclusion }} for $\{{ github.repository }}
          to: your-email@example.com
          from: GitHub Actions`}</pre>
            </div>
            
            <ul className="list-disc pl-6 space-y-2 text-gray-300 mt-3">
              <li>Добавьте файл конфигурации для Prettier <code className="bg-gray-700 px-1.5 py-0.5 rounded">.prettierrc</code>:</li>
            </ul>
            
            <div className="mt-3 bg-gray-800 p-4 rounded-lg">
              <pre className="whitespace-pre-wrap text-gray-300 text-sm">
{`{
  "semi": true,
  "trailingComma": "es5",
  "singleQuote": true,
  "printWidth": 80,
  "tabWidth": 2
}`}</pre>
            </div>
          </div>
          
          <div className="bg-gray-900/50 p-5 rounded-xl border border-blue-700/30">
            <h3 className="font-bold text-blue-300 mb-3">Тестирование и финальная настройка:</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>Обновите <code className="bg-gray-700 px-1.5 py-0.5 rounded">package.json</code> с новыми скриптами:</li>
            </ul>
            
            <div className="mt-3 bg-gray-800 p-4 rounded-lg">
              <pre className="whitespace-pre-wrap text-gray-300 text-sm">
{`{
  "name": "github-pages-demo",
  "version": "1.0.0",
  "description": "Демонстрационный сайт для GitHub Pages",
  "main": "index.html",
  "scripts": {
    "test": "echo 'Тесты прошли успешно'",
    "lint": "npx prettier --check .",
    "format": "npx prettier --write .",
    "build": "echo 'Сборка завершена'",
    "deploy": "echo 'Деплой завершен'"
  },
  "devDependencies": {
    "prettier": "^2.8.0"
  }
}`}</pre>
            </div>
            
            <ul className="list-disc pl-6 space-y-2 text-gray-300 mt-3">
              <li>Создайте файл <code className="bg-gray-700 px-1.5 py-0.5 rounded">.gitignore</code>:</li>
            </ul>
            
            <div className="mt-3 bg-gray-800 p-4 rounded-lg">
              <pre className="whitespace-pre-wrap text-gray-300 text-sm">
{`node_modules/
npm-debug.log*
.DS_Store
Thumbs.db
*.tmp`}</pre>
            </div>
            
            <ul className="list-disc pl-6 space-y-2 text-gray-300 mt-3">
              <li>Проверьте все workflow и убедитесь в их корректной работе</li>
              <li>Добавьте бейджи статуса в README.md:</li>
            </ul>
            
            <div className="mt-3 bg-gray-800 p-4 rounded-lg">
              <pre className="whitespace-pre-wrap text-gray-300 text-sm">
{`![CI](https://github.com/ваш_логин/репозиторий/actions/workflows/advanced.yml/badge.svg)
![Deploy](https://github.com/ваш_логин/репозиторий/actions/workflows/deploy.yml/badge.svg)`}</pre>
            </div>
          </div>
          
          <div className="bg-gray-900/50 p-5 rounded-xl border border-orange-700/30">
            <h3 className="font-bold text-orange-300 mb-3">Дополнительные задания:</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>Настройте кастомный домен для вашего сайта</li>
              <li>Добавьте автоматическое создание тегов при успешном деплое</li>
              <li>Создайте отдельный workflow для preview деплоев из PR</li>
              <li>Интегрируйте автоматическое тестирование с помощью Jest</li>
              <li>Добавьте автоматическую генерацию документации</li>
            </ul>
            
            <div className="mt-4 p-3 bg-yellow-900/20 border border-yellow-700/30 rounded text-yellow-300 text-sm">
              ⚡ <span className="font-medium">Финальное задание:</span> Создайте в README.md документацию по всем созданным workflow.
            </div>
          </div>
        </div>
        <div className="mt-6 flex items-center">
          <input
            type="checkbox"
            id="task3"
            checked={completedTasks.task3}
            onChange={() => handleTaskComplete('task3')}
            className="w-5 h-5 text-blue-600 rounded focus:ring-blue-500"
          />
          <label htmlFor="task3" className="ml-2 text-gray-300">
            Я создал расширенные workflow и настроил автоматизацию
          </label>
          {completedTasks.task3 && <CheckCircle className="ml-2 w-5 h-5 text-green-400" />}
        </div>
      </div>

      {/* Заключение */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <div className="flex items-start gap-3">
          <div className="bg-green-500/20 p-2 rounded-lg flex-shrink-0">
            <CheckCircle className="w-5 h-5 text-green-400" />
          </div>
          <div>
            <h3 className="font-bold text-white mb-2">Отличная работа! 🌐</h3>
            <p className="text-gray-300">
              Теперь вы умеете настраивать GitHub Pages для хостинга статических сайтов и создавать мощные автоматизированные workflow с помощью GitHub Actions. Вы научились работать с кэшированием, матричным тестированием, артефактами и уведомлениями.
              В следующем уроке мы рассмотрим работу с Git hooks и локальную автоматизацию.
            </p>
            {Object.values(completedTasks).every(task => task) && (
              <div className="mt-3 p-3 bg-green-900/20 border border-green-700/30 rounded-lg flex items-center">
                <CheckCircle className="w-5 h-5 text-green-400 mr-2 flex-shrink-0" />
                <span className="text-green-300">Все задания выполнены! Вы готовы к следующему уроку.</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Part3;