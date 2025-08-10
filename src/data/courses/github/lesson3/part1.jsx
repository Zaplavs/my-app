// src/data/courses/git/lesson3/part1.jsx
import React from 'react';
import { FolderPlus, Database, GitBranch, Archive, FileText, Settings } from 'lucide-react';

const Part1 = () => {
  return (
    <div className="space-y-8 text-gray-200">
      {/* Вступление */}
      <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 backdrop-blur-sm border border-blue-700/30 rounded-2xl p-6 shadow-lg">
        <div className="flex items-start gap-4">
          <div className="bg-blue-500/20 p-3 rounded-lg">
            <FolderPlus className="w-6 h-6 text-blue-400" />
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">📂 Урок 3: Создание репозитория</h1>
            <h2 className="text-xl font-semibold text-blue-300 mb-3">Первые шаги в Git</h2>
            <p className="text-gray-300">
              <span className="font-medium text-yellow-400">🎯 Цель урока:</span> Понять, что такое Git-репозиторий, научиться создавать его с помощью команды <code className="bg-gray-700 px-1.5 py-0.5 rounded">git init</code> и разобраться в структуре репозитория.
            </p>
          </div>
        </div>
      </div>

      {/* Что такое репозиторий */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Database className="w-5 h-5 text-green-400" />
          Что такое Git-репозиторий?
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            <span className="font-medium text-green-300">Git-репозиторий</span> — это папка на вашем компьютере, в которой Git отслеживает изменения файлов и сохраняет их историю.
          </p>
          <p>
            Это центральное понятие в Git. Репозиторий содержит:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Все файлы проекта</li>
            <li>Историю изменений (коммиты)</li>
            <li>Служебные файлы Git (в скрытой папке <code className="bg-gray-700 px-1.5 py-0.5 rounded">.git</code>)</li>
            <li>Информацию о ветках и тегах</li>
          </ul>
          <div className="mt-4 p-3 bg-blue-900/20 border border-blue-700/30 rounded-lg flex items-start gap-2">
            <GitBranch className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
            <p className="text-blue-300 text-sm">
              <span className="font-medium">💡 Примечание:</span> Репозиторий может быть локальным (на вашем компьютере) или удаленным (на сервере, например GitHub).
            </p>
          </div>
        </div>
      </div>

      {/* Команда git init */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <FolderPlus className="w-5 h-5 text-purple-400" />
          Команда git init
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Команда <code className="bg-gray-700 px-1.5 py-0.5 rounded">git init</code> используется для создания нового Git-репозитория.
          </p>
          
          <div className="mt-4 bg-gray-900 p-4 rounded-lg">
            <p className="font-medium text-white mb-2">Синтаксис команды:</p>
            <pre className="whitespace-pre-wrap text-green-300"><code>git init [название-проекта]</code></pre>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
            <div className="bg-gray-900/50 p-4 rounded-xl border border-green-700/30">
              <h3 className="font-bold text-green-300 mb-2">Создание в текущей папке</h3>
              <p className="text-sm text-gray-300">
                Если выполнить команду без параметров, Git инициализирует репозиторий в текущей директории:
              </p>
              <pre className="whitespace-pre-wrap text-gray-300 bg-gray-800 p-2 rounded text-xs mt-2"><code>git init</code></pre>
            </div>
            
            <div className="bg-gray-900/50 p-4 rounded-xl border border-blue-700/30">
              <h3 className="font-bold text-blue-300 mb-2">Создание новой папки</h3>
              <p className="text-sm text-gray-300">
                Если указать название, Git создаст новую папку и инициализирует в ней репозиторий:
              </p>
              <pre className="whitespace-pre-wrap text-gray-300 bg-gray-800 p-2 rounded text-xs mt-2"><code>git init my-project</code></pre>
            </div>
          </div>

          <div className="mt-4 p-3 bg-green-900/20 border border-green-700/30 rounded-lg">
            <p className="text-green-300 text-sm">
              ✅ После выполнения команды вы увидите сообщение вроде: <code className="text-green-200">Initialized empty Git repository in /path/to/your/project/.git/</code>
            </p>
          </div>
        </div>
      </div>

      {/* Структура репозитория */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Settings className="w-5 h-5 text-yellow-400" />
          Структура Git-репозитория
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Git-репозиторий состоит из трех основных частей:
          </p>

          <div className="space-y-6 mt-6">
            {/* Рабочая директория */}
            <div className="bg-gray-900/50 p-5 rounded-xl border border-green-700/30">
              <div className="flex items-center gap-3 mb-3">
                <FolderPlus className="w-5 h-5 text-green-400" />
                <h3 className="text-lg font-bold text-green-300">1. Рабочая директория (Working Directory)</h3>
              </div>
              <p className="text-gray-300 mb-3">
                Это папка на вашем компьютере, где вы создаете и редактируете файлы проекта.
              </p>
              <ul className="list-disc pl-6 space-y-1 text-gray-300 text-sm">
                <li>Здесь находятся все файлы проекта в их текущем состоянии</li>
                <li>Вы работаете с файлами именно здесь</li>
                <li>Git отслеживает изменения в этой директории</li>
              </ul>
            </div>

            {/* Область подготовки */}
            <div className="bg-gray-900/50 p-5 rounded-xl border border-blue-700/30">
              <div className="flex items-center gap-3 mb-3">
                <Archive className="w-5 h-5 text-blue-400" />
                <h3 className="text-lg font-bold text-blue-300">2. Область подготовки (Staging Area)</h3>
              </div>
              <p className="text-gray-300 mb-3">
                Это промежуточное хранилище, куда вы добавляете изменения перед коммитом.
              </p>
              <ul className="list-disc pl-6 space-y-1 text-gray-300 text-sm">
                <li>Используется команда <code className="bg-gray-700 px-1.5 py-0.5 rounded text-xs">git add</code> для добавления файлов</li>
                <li>Позволяет выбрать, какие изменения попадут в следующий коммит</li>
                <li>Находится в файле <code className="bg-gray-700 px-1.5 py-0.5 rounded text-xs">.git/index</code></li>
              </ul>
            </div>

            {/* Папка .git */}
            <div className="bg-gray-900/50 p-5 rounded-xl border border-purple-700/30">
              <div className="flex items-center gap-3 mb-3">
                <Settings className="w-5 h-5 text-purple-400" />
                <h3 className="text-lg font-bold text-purple-300">3. Папка .git</h3>
              </div>
              <p className="text-gray-300 mb-3">
                Это "мозг" Git-репозитория — здесь хранится вся история проекта и служебные данные.
              </p>
              <ul className="list-disc pl-6 space-y-1 text-gray-300 text-sm">
                <li>Содержит историю коммитов</li>
                <li>Хранит объекты Git (blobs, trees, commits)</li>
                <li>Содержит информацию о ветках и тегах</li>
                <li>Хранит конфигурацию репозитория</li>
                <li>Не видна в обычном режиме (скрытая папка)</li>
              </ul>
              <div className="mt-3 p-2 bg-purple-900/20 border border-purple-700/30 rounded text-purple-300 text-xs">
                ⚠️ Никогда не удаляйте и не редактируйте файлы в папке .git вручную!
              </div>
            </div>
          </div>

          <div className="mt-6 p-4 bg-gray-900/50 rounded-lg border border-yellow-700/30">
            <h4 className="font-bold text-white mb-2 flex items-center gap-2">
              <GitBranch className="w-5 h-5 text-yellow-400" />
              Как это работает вместе
            </h4>
            <ol className="list-decimal pl-6 space-y-2 text-gray-300 text-sm">
              <li>Вы редактируете файлы в рабочей директории</li>
              <li>Используете <code className="bg-gray-700 px-1.5 py-0.5 rounded text-xs">git add</code> для добавления изменений в staging area</li>
              <li>Используете <code className="bg-gray-700 px-1.5 py-0.5 rounded text-xs">git commit</code> для сохранения изменений из staging area в историю (.git)</li>
            </ol>
          </div>
        </div>
      </div>

      {/* Инициализация проекта */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <FileText className="w-5 h-5 text-cyan-400" />
          Пошаговая инициализация проекта
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Давайте посмотрим, как создать новый Git-репозиторий на практике:
          </p>

          <div className="space-y-4 mt-6">
            <div className="bg-gray-900/50 p-4 rounded-lg">
              <h3 className="font-bold text-white mb-2 flex items-center gap-2">
                <span className="bg-gray-700 w-5 h-5 rounded-full flex items-center justify-center text-xs">1</span>
                Создание папки проекта
              </h3>
              <pre className="whitespace-pre-wrap text-gray-300 bg-gray-800 p-3 rounded"><code>mkdir my-git-project
cd my-git-project</code></pre>
            </div>

            <div className="bg-gray-900/50 p-4 rounded-lg">
              <h3 className="font-bold text-white mb-2 flex items-center gap-2">
                <span className="bg-gray-700 w-5 h-5 rounded-full flex items-center justify-center text-xs">2</span>
                Инициализация репозитория
              </h3>
              <pre className="whitespace-pre-wrap text-gray-300 bg-gray-800 p-3 rounded"><code>git init</code></pre>
              <p className="text-gray-300 text-sm mt-2">
                После выполнения команды вы увидите:
              </p>
              <pre className="whitespace-pre-wrap text-gray-300 bg-gray-800 p-2 rounded text-xs mt-1"><code>Initialized empty Git repository in /path/to/my-git-project/.git/</code></pre>
            </div>

            <div className="bg-gray-900/50 p-4 rounded-lg">
              <h3 className="font-bold text-white mb-2 flex items-center gap-2">
                <span className="bg-gray-700 w-5 h-5 rounded-full flex items-center justify-center text-xs">3</span>
                Проверка структуры
              </h3>
              <p className="text-gray-300 text-sm mb-2">
                Посмотрите содержимое папки:
              </p>
              <pre className="whitespace-pre-wrap text-gray-300 bg-gray-800 p-3 rounded"><code># Linux/macOS
ls -la

# Windows
dir /a</code></pre>
              <p className="text-gray-300 text-sm mt-2">
                Вы должны увидеть скрытую папку <code className="bg-gray-700 px-1.5 py-0.5 rounded">.git</code>.
              </p>
            </div>

            <div className="bg-gray-900/50 p-4 rounded-lg">
              <h3 className="font-bold text-white mb-2 flex items-center gap-2">
                <span className="bg-gray-700 w-5 h-5 rounded-full flex items-center justify-center text-xs">4</span>
                Создание первого файла
              </h3>
              <pre className="whitespace-pre-wrap text-gray-300 bg-gray-800 p-3 rounded"><code>{`echo "# Мой первый проект" > README.md`}</code></pre>
            </div>
          </div>

          <div className="mt-4 p-3 bg-green-900/20 border border-green-700/30 rounded-lg flex items-start gap-2">
            <Settings className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
            <p className="text-green-300 text-sm">
              <span className="font-medium">✅ Поздравляем!</span> Теперь у вас есть полностью функциональный Git-репозиторий, готовый к работе.
            </p>
          </div>
        </div>
      </div>

      {/* Заключение */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <div className="flex items-start gap-3">
          <div className="bg-green-500/20 p-2 rounded-lg flex-shrink-0">
            <FolderPlus className="w-5 h-5 text-green-400" />
          </div>
          <div>
            <h3 className="font-bold text-white mb-2">Отлично! 🎉</h3>
            <p className="text-gray-300">
              Теперь вы знаете, что такое Git-репозиторий, как его создать с помощью команды <code className="bg-gray-700 px-1.5 py-0.5 rounded">git init</code>, и понимаете структуру репозитория.
              В следующем уроке мы узнаем, как добавлять файлы в репозиторий и делать первые коммиты!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Part1;