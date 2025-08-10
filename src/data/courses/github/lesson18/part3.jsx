// src/data/courses/git/lesson18/part3.jsx
import React, { useState } from 'react';
import { FileText, Play, CheckCircle, Terminal, Eye, Code, Shield, Folder } from 'lucide-react';

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
            <FileText className="w-6 h-6 text-blue-400" />
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">💻 Практическое задание: Работа с .gitignore</h1>
            <p className="text-gray-300">
              <span className="font-medium text-yellow-400">🎯 Цель:</span> Практически освоить создание и использование файла .gitignore в реальных проектах.
            </p>
          </div>
        </div>
      </div>

      {/* Задание 1: Создание тестового проекта и .gitignore */}
      <div className={`bg-gray-800/40 backdrop-blur-sm border rounded-2xl p-6 shadow-xl ${completedTasks.task1 ? 'border-green-700/50' : 'border-gray-700/50'}`}>
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Play className="w-5 h-5 text-green-400" />
          Задание 1: Создайте тестовый проект с .gitignore
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Создайте новый проект и настройте в нем файл .gitignore с основными правилами игнорирования.
          </p>
        </div>
        <div className="mt-6 space-y-6">
          <div className="bg-gray-900/50 p-5 rounded-xl border border-green-700/30">
            <h3 className="font-bold text-green-300 mb-3 flex items-center gap-2">
              <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">1</span>
              Создайте структуру проекта
            </h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>Создайте новую директорию для проекта: <code className="bg-gray-700 px-1.5 py-0.5 rounded">mkdir gitignore-practice</code></li>
              <li>Перейдите в директорию: <code className="bg-gray-700 px-1.5 py-0.5 rounded">cd gitignore-practice</code></li>
              <li>Инициализируйте Git репозиторий: <code className="bg-gray-700 px-1.5 py-0.5 rounded">git init</code></li>
              <li>Создайте следующую структуру файлов и директорий:</li>
            </ul>
            
            <div className="mt-3 bg-gray-800 p-4 rounded-lg">
              <pre className="whitespace-pre-wrap text-gray-300 text-sm">
{`gitignore-practice/
├── src/
│   ├── index.js
│   └── utils.js
├── node_modules/
│   ├── express/
│   └── lodash/
├── config/
│   ├── .env
│   └── database.json
├── logs/
│   ├── app.log
│   └── error.log
├── dist/
│   ├── bundle.js
│   └── styles.css
├── temp/
│   ├── cache.tmp
│   └── session.tmp
├── README.md
└── package.json`}</pre>
            </div>
            
            <div className="mt-3 p-3 bg-blue-900/20 border border-blue-700/30 rounded text-blue-300 text-sm">
              ⚡ <span className="font-medium">Совет:</span> Создайте файлы с минимальным содержимым для демонстрации (например, package.json с пустыми фигурными скобками).
            </div>
          </div>
          
          <div className="bg-gray-900/50 p-5 rounded-xl border border-blue-700/30">
            <h3 className="font-bold text-blue-300 mb-3 flex items-center gap-2">
              <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">2</span>
              Создайте базовый .gitignore
            </h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>Создайте файл <code className="bg-gray-700 px-1.5 py-0.5 rounded">.gitignore</code> в корне проекта</li>
              <li>Добавьте следующие правила игнорирования:</li>
            </ul>
            
            <div className="mt-3 bg-gray-800 p-4 rounded-lg">
              <pre className="whitespace-pre-wrap text-gray-300 text-sm">
{`# Зависимости
node_modules/

# Конфигурационные файлы
config/.env

# Логи
logs/
*.log

# Сгенерированные файлы
dist/
*.min.js
bundle.js

# Временные файлы
temp/
*.tmp

# Системные файлы
.DS_Store
Thumbs.db`}</pre>
            </div>
            
            <ul className="list-disc pl-6 space-y-2 text-gray-300 mt-3">
              <li>Добавьте комментарии к каждой группе правил</li>
              <li>Убедитесь, что файл сохранен с правильным именем (.gitignore)</li>
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
            Я создал тестовый проект и базовый .gitignore файл
          </label>
          {completedTasks.task1 && <CheckCircle className="ml-2 w-5 h-5 text-green-400" />}
        </div>
      </div>

      {/* Задание 2: Тестирование и отладка .gitignore */}
      <div className={`bg-gray-800/40 backdrop-blur-sm border rounded-2xl p-6 shadow-xl ${completedTasks.task2 ? 'border-green-700/50' : 'border-gray-700/50'}`}>
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Terminal className="w-5 h-5 text-purple-400" />
          Задание 2: Протестируйте и отладьте .gitignore
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Проверьте правильность работы .gitignore и научитесь отлаживать проблемы с игнорированием.
          </p>
        </div>
        <div className="mt-6 space-y-6">
          <div className="bg-gray-900/50 p-5 rounded-xl border border-purple-700/30">
            <h3 className="font-bold text-purple-300 mb-3 flex items-center gap-2">
              <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">1</span>
              Проверьте статус файлов
            </h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>Выполните команду: <code className="bg-gray-700 px-1.5 py-0.5 rounded">git status</code></li>
              <li>Обратите внимание, какие файлы отображаются как неотслеживаемые</li>
              <li>Убедитесь, что файлы из .gitignore не отображаются</li>
              <li>Запишите в README.md результаты наблюдений:</li>
            </ul>
            
            <div className="mt-3 bg-gray-800 p-4 rounded-lg">
              <pre className="whitespace-pre-wrap text-gray-300 text-sm">
{`## Результаты проверки .gitignore

### Файлы, которые должны игнорироваться:
- [x] node_modules/
- [x] config/.env
- [x] logs/
- [x] dist/
- [x] temp/

### Файлы, которые должны отслеживаться:
- [x] src/
- [x] README.md
- [x] package.json`}</pre>
            </div>
          </div>
          
          <div className="bg-gray-900/50 p-5 rounded-xl border border-blue-700/30">
            <h3 className="font-bold text-blue-300 mb-3 flex items-center gap-2">
              <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">2</span>
              Отладка проблем с игнорированием
            </h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>Проверьте, почему конкретный файл игнорируется:</li>
              <div className="ml-6 bg-gray-800 p-3 rounded my-2">
                <code className="text-sm text-green-300">git check-ignore -v config/.env</code>
              </div>
              <li>Проверьте все игнорируемые файлы:</li>
              <div className="ml-6 bg-gray-800 p-3 rounded my-2">
                <code className="text-sm text-blue-300">git ls-files --others --ignored --exclude-standard</code>
              </div>
              <li>Создайте файл, который должен игнорироваться, но не игнорируется:</li>
              <div className="ml-6 bg-gray-800 p-3 rounded my-2">
                <code className="text-sm text-purple-300">touch debug.log</code>
              </div>
              <li>Проверьте, почему он не игнорируется, и исправьте .gitignore при необходимости</li>
            </ul>
          </div>
          
          <div className="bg-gray-900/50 p-5 rounded-xl border border-orange-700/30">
            <h3 className="font-bold text-orange-300 mb-3 flex items-center gap-2">
              <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">3</span>
              Работа с уже отслеживаемыми файлами
            </h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>Добавьте все файлы в индекс: <code className="bg-gray-700 px-1.5 py-0.5 rounded">git add .</code></li>
              <li>Создайте коммит: <code className="bg-gray-700 px-1.5 py-0.5 rounded">git commit -m "Initial commit"</code></li>
              <li>Теперь добавьте в .gitignore файл, который уже отслеживается (например, database.json):</li>
              <div className="ml-6 bg-gray-800 p-3 rounded my-2">
                <pre className="whitespace-pre-wrap text-gray-300 text-sm">config/database.json</pre>
              </div>
              <li>Проверьте статус: <code className="bg-gray-700 px-1.5 py-0.5 rounded">git status</code></li>
              <li>Убедитесь, что файл все еще отслеживается</li>
              <li>Удалите файл из индекса, но оставьте в рабочей директории:</li>
              <div className="ml-6 bg-gray-800 p-3 rounded my-2">
                <code className="text-sm text-yellow-300">git rm --cached config/database.json</code>
              </div>
              <li>Теперь файл больше не отслеживается</li>
            </ul>
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
            Я протестировал .gitignore и научился отлаживать проблемы
          </label>
          {completedTasks.task2 && <CheckCircle className="ml-2 w-5 h-5 text-green-400" />}
        </div>
      </div>

      {/* Задание 3: Использование генераторов и продвинутые правила */}
      <div className={`bg-gray-800/40 backdrop-blur-sm border rounded-2xl p-6 shadow-xl ${completedTasks.task3 ? 'border-green-700/50' : 'border-gray-700/50'}`}>
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Code className="w-5 h-5 text-cyan-400" />
          Задание 3: Используйте генераторы и создайте продвинутые правила
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Используйте онлайн-генераторы и создайте сложные правила игнорирования для реального сценария.
          </p>
        </div>
        <div className="mt-6 space-y-6">
          <div className="bg-gray-900/50 p-5 rounded-xl border border-cyan-700/30">
            <h3 className="font-bold text-cyan-300 mb-3">Использование gitignore.io:</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>Откройте в браузере https://www.toptal.com/developers/gitignore</li>
              <li>Выберите следующие технологии:</li>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Node</li>
                <li>React</li>
                <li>Python</li>
                <li>VisualStudioCode</li>
                <li>macOS</li>
                <li>Windows</li>
              </ul>
              <li>Нажмите "Create" для генерации файла</li>
              <li>Скопируйте содержимое и замените им ваш текущий .gitignore</li>
              <li>Изучите сгенерированные правила и добавьте свои комментарии</li>
            </ul>
          </div>
          
          <div className="bg-gray-900/50 p-5 rounded-xl border border-green-700/30">
            <h3 className="font-bold text-green-300 mb-3">Создайте продвинутые правила:</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>Добавьте в .gitignore следующие продвинутые правила:</li>
            </ul>
            
            <div className="mt-3 bg-gray-800 p-4 rounded-lg">
              <pre className="whitespace-pre-wrap text-gray-300 text-sm">
{`# Игнорировать все файлы в директории build, кроме файла .gitkeep
build/*
!important.gitkeep

# Игнорировать все файлы с расширением .log, но не в директории important-logs
*.log
!important-logs/*.log

# Игнорировать все директории с именем tmp на любом уровне
**/tmp/

# Игнорировать файлы с именами вида file1.txt, file2.txt, но не file10.txt
file[0-9].txt

# Игнорировать все файлы в корневой директории docs, но не в поддиректориях
/docs/*
!/docs/*/

# Игнорировать все файлы .env в любом месте, кроме корневой директории
**/.env
!/.env`}</pre>
            </div>
            
            <ul className="list-disc pl-6 space-y-2 text-gray-300 mt-3">
              <li>Создайте соответствующие файлы и директории для тестирования этих правил</li>
              <li>Проверьте, что правила работают корректно</li>
            </ul>
          </div>
          
          <div className="bg-gray-900/50 p-5 rounded-xl border border-blue-700/30">
            <h3 className="font-bold text-blue-300 mb-3">Тестирование сложных сценариев:</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>Создайте следующую структуру для тестирования:</li>
            </ul>
            
            <div className="mt-3 bg-gray-800 p-4 rounded-lg">
              <pre className="whitespace-pre-wrap text-gray-300 text-sm">
{`test-project/
├── build/
│   ├── app.js
│   ├── styles.css
│   └── .gitkeep
├── logs/
│   ├── app.log
│   └── debug.log
├── important-logs/
│   └── critical.log
├── temp/
│   └── tmp/
│       └── cache.data
├── docs/
│   ├── guide.md
│   ├── api/
│   │   └── reference.md
│   └── tutorials/
│       └── intro.md
├── .env
├── config/
│   └── .env
└── file1.txt`}</pre>
            </div>
            
            <ul className="list-disc pl-6 space-y-2 text-gray-300 mt-3">
              <li>Выполните <code className="bg-gray-700 px-1.5 py-0.5 rounded">git status</code> и проверьте, что игнорируются правильные файлы</li>
              <li>Используйте <code className="bg-gray-700 px-1.5 py-0.5 rounded">git check-ignore -v</code> для проверки конкретных файлов</li>
              <li>Документируйте результаты в README.md</li>
            </ul>
          </div>
          
          <div className="bg-gray-900/50 p-5 rounded-xl border border-orange-700/30">
            <h3 className="font-bold text-orange-300 mb-3">Оптимизация и лучшие практики:</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>Организуйте .gitignore по секциям с понятными комментариями</li>
              <li>Убедитесь, что в репозитории есть файлы, которые должны отслеживаться</li>
              <li>Проверьте, что конфиденциальные данные не попали в историю коммитов</li>
              <li>Добавьте в README.md раздел о правилах игнорирования в проекте</li>
              <li>Создайте финальный коммит с обновленным .gitignore</li>
            </ul>
            
            <div className="mt-3 p-3 bg-green-900/20 border border-green-700/30 rounded text-green-300 text-sm">
              ⚡ <span className="font-medium">Финальная проверка:</span> Выполните <code className="bg-gray-700 px-1.5 py-0.5 rounded">git status --ignored</code> для просмотра всех игнорируемых файлов.
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
            Я использовал генераторы, создал продвинутые правила и протестировал их
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
            <h3 className="font-bold text-white mb-2">Отличная работа! 🙈</h3>
            <p className="text-gray-300">
              Теперь вы умеете эффективно использовать файл .gitignore для управления файлами в репозитории. Вы научились создавать базовые и продвинутые правила, тестировать их работу, отлаживать проблемы и использовать генераторы.
              В следующем уроке мы рассмотрим работу с GitHub Actions для автоматизации CI/CD.
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