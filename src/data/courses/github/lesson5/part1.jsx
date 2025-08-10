// src/data/courses/git/lesson5/part1.jsx
import React from 'react';
import { Eye, FileText, History, GitBranch, GitCommit, FileDiff } from 'lucide-react';

const Part1 = () => {
  return (
    <div className="space-y-8 text-gray-200">
      {/* Вступление */}
      <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 backdrop-blur-sm border border-blue-700/30 rounded-2xl p-6 shadow-lg">
        <div className="flex items-start gap-4">
          <div className="bg-blue-500/20 p-3 rounded-lg">
            <Eye className="w-6 h-6 text-blue-400" />
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">🔍 Урок 5: Просмотр изменений</h1>
            <h2 className="text-xl font-semibold text-blue-300 mb-3">Инспектирование репозитория</h2>
            <p className="text-gray-300">
              <span className="font-medium text-yellow-400">🎯 Цель урока:</span> Освоить команды <code className="bg-gray-700 px-1.5 py-0.5 rounded">git status</code>, <code className="bg-gray-700 px-1.5 py-0.5 rounded">git log</code> и <code className="bg-gray-700 px-1.5 py-0.5 rounded">git diff</code> для просмотра текущего состояния, истории и различий в репозитории.
            </p>
          </div>
        </div>
      </div>

      {/* Команда git status */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <FileText className="w-5 h-5 text-green-400" />
          Команда git status
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Команда <code className="bg-gray-700 px-1.5 py-0.5 rounded">git status</code> показывает текущее состояние репозитория — какие файлы изменены, какие подготовлены к коммиту, а какие нет.
          </p>
          
          <div className="mt-4 bg-gray-900 p-4 rounded-lg">
            <p className="font-medium text-white mb-2">Синтаксис команды:</p>
            <pre className="whitespace-pre-wrap text-green-300"><code>git status</code></pre>
          </div>

          <div className="space-y-6 mt-6">
            <div className="bg-gray-900/50 p-5 rounded-xl border border-green-700/30">
              <div className="flex items-center gap-3 mb-3">
                <FileText className="w-5 h-5 text-green-400" />
                <h3 className="text-lg font-bold text-green-300">Обычный вывод</h3>
              </div>
              <p className="text-gray-300 mb-3">
                Стандартный вывод показывает детальную информацию о состоянии репозитория:
              </p>
              <div className="bg-gray-800 p-4 rounded-lg">
                <pre className="whitespace-pre-wrap text-gray-300">
{`On branch main
Your branch is up to date with 'origin/main'.

Changes to be committed:
  (use "git reset HEAD <file>..." to unstage)
        new file:   new-feature.js

Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git checkout -- <file>..." to discard changes in working directory)
        modified:   README.md

Untracked files:
  (use "git add <file>..." to include in what will be committed)
        documentation.txt`}
                </pre>
              </div>
            </div>

            <div className="bg-gray-900/50 p-5 rounded-xl border border-blue-700/30">
              <div className="flex items-center gap-3 mb-3">
                <Eye className="w-5 h-5 text-blue-400" />
                <h3 className="text-lg font-bold text-blue-300">Краткий вывод</h3>
              </div>
              <p className="text-gray-300 mb-3">
                Флаг <code className="bg-gray-700 px-1.5 py-0.5 rounded text-xs">--short</code> или <code className="bg-gray-700 px-1.5 py-0.5 rounded text-xs">-s</code> показывает сокращенный формат:
              </p>
              <div className="bg-gray-800 p-4 rounded-lg">
                <pre className="whitespace-pre-wrap text-gray-300">
{`git status -s

A  new-feature.js
M  README.md
?? documentation.txt`}
                </pre>
              </div>
              <ul className="list-disc pl-6 space-y-1 text-gray-300 text-sm mt-3">
                <li><code className="bg-gray-700 px-1.5 py-0.5 rounded text-xs">A</code> — файл добавлен (Added)</li>
                <li><code className="bg-gray-700 px-1.5 py-0.5 rounded text-xs">M</code> — файл изменен (Modified)</li>
                <li><code className="bg-gray-700 px-1.5 py-0.5 rounded text-xs">??</code> — неотслеживаемый файл (Untracked)</li>
              </ul>
            </div>
          </div>

          <div className="mt-4 p-3 bg-purple-900/20 border border-purple-700/30 rounded-lg flex items-start gap-2">
            <Eye className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
            <p className="text-purple-300 text-sm">
              💡 <code className="text-purple-200">git status</code> — одна из самых часто используемых команд. Ее стоит запускать регулярно для понимания текущего состояния репозитория.
            </p>
          </div>
        </div>
      </div>

      {/* Команда git log */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <History className="w-5 h-5 text-cyan-400" />
          Команда git log
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Команда <code className="bg-gray-700 px-1.5 py-0.5 rounded">git log</code> отображает историю коммитов в репозитории в обратном хронологическом порядке.
          </p>
          
          <div className="mt-4 bg-gray-900 p-4 rounded-lg">
            <p className="font-medium text-white mb-2">Синтаксис команды:</p>
            <pre className="whitespace-pre-wrap text-green-300"><code>git log</code></pre>
          </div>

          <div className="space-y-6 mt-6">
            <div className="bg-gray-900/50 p-5 rounded-xl border border-green-700/30">
              <div className="flex items-center gap-3 mb-3">
                <GitCommit className="w-5 h-5 text-green-400" />
                <h3 className="text-lg font-bold text-green-300">Стандартный вывод</h3>
              </div>
              <p className="text-gray-300 mb-3">
                По умолчанию показывает полную информацию о каждом коммите:
              </p>
              <div className="bg-gray-800 p-4 rounded-lg">
                <pre className="whitespace-pre-wrap text-gray-300">
{`commit a1b2c3d4e5f6789012345678901234567890abcd (HEAD -> main)
Author: Ivan Petrov <ivan@example.com>
Date:   Mon Jan 1 12:00:00 2024 +0300

    Добавить новую функциональность

commit 0z9y8x7w6v5u4t3s2r1q0p9o8n7m6l5k4j3i2h1g
Author: Maria Smirnova <maria@example.com>
Date:   Sun Dec 31 15:30:00 2023 +0300

    Исправить баг в авторизации`}
                </pre>
              </div>
            </div>

            <div className="bg-gray-900/50 p-5 rounded-xl border border-blue-700/30">
              <div className="flex items-center gap-3 mb-3">
                <GitBranch className="w-5 h-5 text-blue-400" />
                <h3 className="text-lg font-bold text-blue-300">Сокращенный вывод (--oneline)</h3>
              </div>
              <p className="text-gray-300 mb-3">
                Флаг <code className="bg-gray-700 px-1.5 py-0.5 rounded text-xs">--oneline</code> показывает каждый коммит в одну строку:
              </p>
              <div className="bg-gray-800 p-4 rounded-lg">
                <pre className="whitespace-pre-wrap text-gray-300">
{`git log --oneline

a1b2c3d Добавить новую функциональность
0z9y8x7 Исправить баг в авторизации
5t4s3r2 Обновить документацию
8n7m6l5 Добавить файл README`}
                </pre>
              </div>
            </div>

            <div className="bg-gray-900/50 p-5 rounded-xl border border-purple-700/30">
              <div className="flex items-center gap-3 mb-3">
                <GitBranch className="w-5 h-5 text-purple-400" />
                <h3 className="text-lg font-bold text-purple-300">Графический вывод (--graph)</h3>
              </div>
              <p className="text-gray-300 mb-3">
                Флаг <code className="bg-gray-700 px-1.5 py-0.5 rounded text-xs">--graph</code> визуализирует историю ветвлений:
              </p>
              <div className="bg-gray-800 p-4 rounded-lg">
                <pre className="whitespace-pre-wrap text-gray-300">
{`git log --oneline --graph

* a1b2c3d (HEAD -> main) Добавить новую функциональность
*   0z9y8x7 Слияние ветки feature-login
|\  
| * 5t4s3r2 (feature-login) Добавить форму входа
| * 8n7m6l5 Реализовать аутентификацию
|/  
* 9k8j7h6 Исправить стили на главной странице`}
                </pre>
              </div>
            </div>

            <div className="bg-gray-900/50 p-5 rounded-xl border border-yellow-700/30">
              <div className="flex items-center gap-3 mb-3">
                <History className="w-5 h-5 text-yellow-400" />
                <h3 className="text-lg font-bold text-yellow-300">Ограниченный вывод (-n)</h3>
              </div>
              <p className="text-gray-300 mb-3">
                Флаг <code className="bg-gray-700 px-1.5 py-0.5 rounded text-xs">-n</code> ограничивает количество показываемых коммитов:
              </p>
              <div className="bg-gray-800 p-4 rounded-lg">
                <pre className="whitespace-pre-wrap text-gray-300">
{`git log -n 3 --oneline

a1b2c3d Добавить новую функциональность
0z9y8x7 Исправить баг в авторизации
5t4s3r2 Обновить документацию`}
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Команда git diff */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <FileDiff className="w-5 h-5 text-orange-400" />
          Команда git diff
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Команда <code className="bg-gray-700 px-1.5 py-0.5 rounded">git diff</code> показывает различия между различными состояниями файлов в репозитории.
          </p>
          
          <div className="mt-4 bg-gray-900 p-4 rounded-lg">
            <p className="font-medium text-white mb-2">Синтаксис команды:</p>
            <pre className="whitespace-pre-wrap text-green-300"><code>git diff</code></pre>
          </div>

          <div className="space-y-6 mt-6">
            <div className="bg-gray-900/50 p-5 rounded-xl border border-green-700/30">
              <div className="flex items-center gap-3 mb-3">
                <FileDiff className="w-5 h-5 text-green-400" />
                <h3 className="text-lg font-bold text-green-300">Различия в рабочей директории</h3>
              </div>
              <p className="text-gray-300 mb-3">
                Без параметров показывает различия между рабочей директорией и последним коммитом:
              </p>
              <div className="bg-gray-800 p-4 rounded-lg">
                <pre className="whitespace-pre-wrap text-gray-300">
{`git diff

diff --git a/README.md b/README.md
index 8ab6c78..3de9f01 100644
--- a/README.md
+++ b/README.md
@@ -1,3 +1,4 @@
 # Мой проект
+## Новая секция
 
 Это описание проекта.
+Обновленная информация.`}
                </pre>
              </div>
              <ul className="list-disc pl-6 space-y-1 text-gray-300 text-sm mt-3">
                <li><code className="bg-gray-700 px-1.5 py-0.5 rounded text-xs text-red-300">-</code> — удаленные строки</li>
                <li><code className="bg-gray-700 px-1.5 py-0.5 rounded text-xs text-green-300">+</code> — добавленные строки</li>
              </ul>
            </div>

            <div className="bg-gray-900/50 p-5 rounded-xl border border-blue-700/30">
              <div className="flex items-center gap-3 mb-3">
                <FileText className="w-5 h-5 text-blue-400" />
                <h3 className="text-lg font-bold text-blue-300">Различия в staging area</h3>
              </div>
              <p className="text-gray-300 mb-3">
                Флаг <code className="bg-gray-700 px-1.5 py-0.5 rounded text-xs">--staged</code> или <code className="bg-gray-700 px-1.5 py-0.5 rounded text-xs">--cached</code> показывает различия между staging area и последним коммитом:
              </p>
              <div className="bg-gray-800 p-4 rounded-lg">
                <pre className="whitespace-pre-wrap text-gray-300">
{`git diff --staged

diff --git a/index.html b/index.html
index 1f2e3d4..5a6b7c8 100644
--- a/index.html
+++ b/index.html
@@ -5,6 +5,7 @@
     <title>Мой сайт</title>
+    <meta name="description" content="Описание сайта">
 </head>
 <body>
+    <h1>Добро пожаловать!</h1>`}
                </pre>
              </div>
            </div>

            <div className="bg-gray-900/50 p-5 rounded-xl border border-purple-700/30">
              <div className="flex items-center gap-3 mb-3">
                <History className="w-5 h-5 text-purple-400" />
                <h3 className="text-lg font-bold text-purple-300">Сравнение коммитов</h3>
              </div>
              <p className="text-gray-300 mb-3">
                Можно сравнивать два конкретных коммита:
              </p>
              <div className="bg-gray-800 p-4 rounded-lg">
                <pre className="whitespace-pre-wrap text-gray-300">
{`git diff HEAD~1 HEAD

# Или по ID коммитов
git diff a1b2c3d..0z9y8x7`}
                </pre>
              </div>
              <p className="text-gray-300 text-sm mt-3">
                <code className="bg-gray-700 px-1.5 py-0.5 rounded text-xs">HEAD~1</code> — предыдущий коммит относительно текущего
              </p>
            </div>
          </div>

          <div className="mt-4 p-3 bg-orange-900/20 border border-orange-700/30 rounded-lg">
            <p className="text-orange-300 text-sm">
              ⚠️ <code className="text-orange-200">git diff</code> показывает различия только в файлах, которые еще не добавлены в staging area. Для просмотра различий подготовленных файлов используйте <code className="text-orange-200">git diff --staged</code>
            </p>
          </div>
        </div>
      </div>

      {/* Практическое применение команд */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Eye className="w-5 h-5 text-yellow-400" />
          Практическое применение команд
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Эти команды часто используются вместе для эффективной работы с репозиторием:
          </p>

          <div className="space-y-4 mt-6">
            <div className="bg-gray-900/50 p-4 rounded-xl border border-green-700/30">
              <h3 className="font-bold text-green-300 mb-2 flex items-center gap-2">
                <FileText className="w-4 h-4" />
                Рабочий процесс разработчика
              </h3>
              <ol className="list-decimal pl-6 space-y-2 text-gray-300 text-sm">
                <li>Проверить текущее состояние: <code className="bg-gray-700 px-1.5 py-0.5 rounded text-xs">git status</code></li>
                <li>Просмотреть изменения: <code className="bg-gray-700 px-1.5 py-0.5 rounded text-xs">git diff</code></li>
                <li>Добавить нужные файлы: <code className="bg-gray-700 px-1.5 py-0.5 rounded text-xs">{`git add <файлы>`}</code></li>
                <li>Проверить подготовленные изменения: <code className="bg-gray-700 px-1.5 py-0.5 rounded text-xs">git diff --staged</code></li>
                <li>Создать коммит: <code className="bg-gray-700 px-1.5 py-0.5 rounded text-xs">git commit -m "Сообщение"</code></li>
                <li>Проверить историю: <code className="bg-gray-700 px-1.5 py-0.5 rounded text-xs">git log --oneline</code></li>
              </ol>
            </div>

            <div className="bg-gray-900/50 p-4 rounded-xl border border-blue-700/30">
              <h3 className="font-bold text-blue-300 mb-2 flex items-center gap-2">
                <History className="w-4 h-4" />
                Анализ истории изменений
              </h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-300 text-sm">
                <li>Просмотр последних 10 коммитов: <code className="bg-gray-700 px-1.5 py-0.5 rounded text-xs">git log -10 --oneline</code></li>
                <li>Просмотр коммитов с графом: <code className="bg-gray-700 px-1.5 py-0.5 rounded text-xs">git log --oneline --graph</code></li>
                <li>Поиск коммитов по автору: <code className="bg-gray-700 px-1.5 py-0.5 rounded text-xs">git log --author="Ivan"</code></li>
                <li>Поиск коммитов по сообщению: <code className="bg-gray-700 px-1.5 py-0.5 rounded text-xs">git log --grep="bug"</code></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Заключение */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <div className="flex items-start gap-3">
          <div className="bg-green-500/20 p-2 rounded-lg flex-shrink-0">
            <Eye className="w-5 h-5 text-green-400" />
          </div>
          <div>
            <h3 className="font-bold text-white mb-2">Отлично! 🎉</h3>
            <p className="text-gray-300">
              Теперь вы знаете, как использовать <code className="bg-gray-700 px-1.5 py-0.5 rounded">git status</code> для проверки текущего состояния, <code className="bg-gray-700 px-1.5 py-0.5 rounded">git log</code> для просмотра истории коммитов и <code className="bg-gray-700 px-1.5 py-0.5 rounded">git diff</code> для анализа различий между версиями.
              В следующем уроке мы научимся отменять изменения и работать с предыдущими версиями файлов!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Part1;