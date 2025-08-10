// src/data/courses/github/lesson8/part1.jsx
import React from 'react';
import { GitBranch, GitMerge, Zap, FileText, GitCommit, Filter, GitGraph } from 'lucide-react';

const Part1 = () => {
  return (
    <div className="space-y-8 text-gray-200">
      {/* Вступление */}
      <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 backdrop-blur-sm border border-blue-700/30 rounded-2xl p-6 shadow-lg">
        <div className="flex items-start gap-4">
          <div className="bg-blue-500/20 p-3 rounded-lg">
            <GitBranch className="w-6 h-6 text-blue-400" />
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">🔗 Урок 8: Слияние веток в Git</h1>
            <h2 className="text-xl font-semibold text-blue-300 mb-3">Объединение изменений и стратегии слияния</h2>
            <p className="text-gray-300">
              <span className="font-medium text-yellow-400">🎯 Цель урока:</span> Понять, как объединять ветки в Git, различать стратегии слияния и эффективно управлять историей проекта.
            </p>
          </div>
        </div>
      </div>

      {/* Основы слияния */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <GitMerge className="w-5 h-5 text-green-400" />
          Основы слияния веток
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Слияние веток (<span className="font-medium text-green-300">merge</span>) — это процесс объединения изменений из одной ветки в другую. Это ключевая операция в Git для интеграции работы нескольких разработчиков.
          </p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li><span className="font-medium">git merge</span> — основная команда для слияния веток</li>
            <li>Целевая ветка — та, в которую происходит слияние (текущая ветка)</li>
            <li>Исходная ветка — та, из которой берутся изменения</li>
          </ul>
          <div className="mt-4 p-3 bg-blue-900/20 border border-blue-700/30 rounded-lg flex items-start gap-2">
            <Zap className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
            <p className="text-blue-300 text-sm">
              <span className="font-medium">💡 Пример:</span> При выполнении <code className="bg-gray-700 px-1.5 py-0.5 rounded">git merge feature</code> находясь в ветке <code className="bg-gray-700 px-1.5 py-0.5 rounded">main</code>, изменения из ветки <code className="bg-gray-700 px-1.5 py-0.5 rounded">feature</code> будут объединены в <code className="bg-gray-700 px-1.5 py-0.5 rounded">main</code>.
            </p>
          </div>
        </div>
      </div>

      {/* Стратегии слияния */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <GitCommit className="w-5 h-5 text-purple-400" />
          Стратегии слияния в Git
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed mb-4">
          <p>
            Git использует разные стратегии слияния в зависимости от истории веток:
          </p>
        </div>

        <div className="space-y-6 mt-6">
          {/* Fast-forward */}
          <div className="bg-gray-900/50 p-5 rounded-xl border border-green-700/30">
            <div className="flex items-center gap-3 mb-3">
              <Zap className="w-5 h-5 text-green-400" />
              <h3 className="text-lg font-bold text-green-300">1. Fast-forward слияние</h3>
            </div>
            <p className="text-gray-300 mb-3">
              Происходит, когда целевая ветка является прямым предком исходной ветки:
            </p>
            <div className="bg-gray-800 p-3 rounded text-sm">
              <pre className="whitespace-pre-wrap text-gray-300"><code>{`# Переключаемся на целевую ветку
git checkout main

# Выполняем слияние
git merge feature

# Результат: указатель main перемещается вперед без создания нового коммита`}</code></pre>
            </div>
            <ul className="list-disc pl-5 mt-3 space-y-1 text-gray-300">
              <li>История остается линейной</li>
              <li>Новый коммит слияния не создается</li>
              <li>Git просто перемещает указатель ветки вперед</li>
            </ul>
          </div>

          {/* True merge */}
          <div className="bg-gray-900/50 p-5 rounded-xl border border-blue-700/30">
            <div className="flex items-center gap-3 mb-3">
              <GitMerge className="w-5 h-5 text-blue-400" />
              <h3 className="text-lg font-bold text-blue-300">2. True merge (Three-way merge)</h3>
            </div>
            <p className="text-gray-300 mb-3">
              Происходит, когда ветки имеют разошедшуюся историю:
            </p>
            <div className="bg-gray-800 p-3 rounded text-sm">
              <pre className="whitespace-pre-wrap text-gray-300"><code>{`# Переключаемся на целевую ветку
git checkout main

# Выполняем слияние
git merge feature

# Результат: создается коммит слияния с двумя родителями`}</code></pre>
            </div>
            <ul className="list-disc pl-5 mt-3 space-y-1 text-gray-300">
              <li>Создается коммит слияния с двумя родителями</li>
              <li>История становится нелинейной</li>
              <li>Git объединяет изменения из обеих веток</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Коммит слияния */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <GitCommit className="w-5 h-5 text-orange-400" />
          Коммит слияния
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Коммит слияния (<span className="font-medium text-orange-300">merge commit</span>) — это специальный коммит, который объединяет историю двух веток:
          </p>
        </div>

        <div className="mt-6 bg-gray-900/50 p-5 rounded-xl border border-orange-700/30">
          <div className="bg-gray-800 p-4 rounded-lg">
            <pre className="whitespace-pre-wrap text-gray-300 text-sm">
{`# При true merge Git создает коммит слияния
Merge: a1b2c3d e4f5g6h
Author: John Doe {'<'}john@example.com{'>'}
Date:   Mon Jan 1 12:00:00 2024 +0300

    Merge branch 'feature'

# Особенности коммита слияния:
# - Имеет двух родителей (или более)
# - Содержит изменения из обеих веток
# - Создается автоматически при true merge`}
            </pre>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-3 bg-green-900/20 border border-green-700/30 rounded">
            <p className="font-medium text-green-300">Особенности merge commit:</p>
            <ul className="list-disc pl-5 mt-2 text-gray-300 text-sm">
              <li>Два или более родительских коммита</li>
              <li>Служит точкой объединения истории</li>
              <li>Показывает, какие ветки были объединены</li>
            </ul>
          </div>
          <div className="p-3 bg-blue-900/20 border border-blue-700/30 rounded">
            <p className="font-medium text-blue-300">Параметры слияния:</p>
            <ul className="list-disc pl-5 mt-2 text-gray-300 text-sm">
              <li><code className="bg-gray-700 px-1.5 py-0.5 rounded">--no-ff</code> - принудительный merge commit</li>
              <li><code className="bg-gray-700 px-1.5 py-0.5 rounded">--ff-only</code> - только fast-forward</li>
              <li><code className="bg-gray-700 px-1.5 py-0.5 rounded">--squash</code> - объединение без merge commit</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Просмотр графа */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <GitGraph className="w-5 h-5 text-purple-400" />
          Просмотр графа истории
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Команда <span className="font-medium text-purple-300">git log --graph</span> позволяет визуализировать историю ветвлений и слияний:
          </p>
        </div>

        <div className="mt-6 space-y-4">
          <div className="flex items-start gap-3 p-3 bg-gray-900/50 rounded-lg">
            <div className="bg-green-500/20 p-2 rounded-lg flex-shrink-0">
              <span className="font-bold text-green-400">1</span>
            </div>
            <div>
              <h4 className="font-bold text-green-300">Базовый просмотр графа</h4>
              <div className="bg-gray-800 p-3 rounded text-sm mt-2">
                <pre className="whitespace-pre-wrap text-gray-300"><code>{`git log --graph --oneline --all

*   abc1234 (HEAD -> main) Merge branch 'feature'
|\\
| * def5678 (feature) Add new feature
| * ghi9012 Update feature
* | jkl3456 Fix bug in main
|/
* mno7890 Initial commit`}</code></pre>
              </div>
            </div>
          </div>
          <div className="flex items-start gap-3 p-3 bg-gray-900/50 rounded-lg">
            <div className="bg-blue-500/20 p-2 rounded-lg flex-shrink-0">
              <span className="font-bold text-blue-400">2</span>
            </div>
            <div>
              <h4 className="font-bold text-blue-300">Расширенные опции просмотра</h4>
              <div className="bg-gray-800 p-3 rounded text-sm mt-2">
                <pre className="whitespace-pre-wrap text-gray-300"><code>{`# С декорациями (ветки, теги)
git log --graph --oneline --decorate --all

# С авторами и датами
git log --graph --pretty=format:"%h -%d %s (%cr) {'<'}%an{'>'}" --abbrev-commit

# В цвете
git log --graph --oneline --all --color`}</code></pre>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 p-4 bg-gray-900/50 rounded-lg border border-yellow-700/30">
          <h4 className="font-bold text-white mb-2 flex items-center gap-2">
            <Zap className="w-5 h-5 text-yellow-400" />
            Полезные алиасы для git log
          </h4>
          <div className="bg-gray-800 p-3 rounded text-sm">
            <pre className="whitespace-pre-wrap text-gray-300"><code>{`# Добавить в .gitconfig
[alias]
  lg = log --graph --pretty=format:'%Cred%h%Creset -%C(yellow)%d%Creset %s %Cgreen(%cr) %C(bold blue){'<'}%an{'>'}%Creset' --abbrev-commit
  lg2 = log --graph --oneline --decorate --all

# Использование
git lg
git lg2`}</code></pre>
          </div>
        </div>
      </div>

      {/* Конфликты слияния */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Filter className="w-5 h-5 text-red-400" />
          Конфликты при слиянии
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Конфликты возникают, когда Git не может автоматически объединить изменения:
          </p>
        </div>

        <div className="mt-6 space-y-4">
          <div className="flex items-start gap-3 p-3 bg-gray-900/50 rounded-lg">
            <div className="bg-red-500/20 p-2 rounded-lg flex-shrink-0">
              <span className="font-bold text-red-400">!</span>
            </div>
            <div>
              <h4 className="font-bold text-red-300">Признаки конфликта</h4>
              <ul className="list-disc pl-5 mt-2 text-gray-300 text-sm">
                <li>Сообщение "Auto-merging filename"</li>
                <li>Сообщение "CONFLICT (content): Merge conflict in filename"</li>
                <li>Статус файла "UU" в <code className="bg-gray-700 px-1.5 py-0.5 rounded">git status</code></li>
              </ul>
            </div>
          </div>
          <div className="flex items-start gap-3 p-3 bg-gray-900/50 rounded-lg">
            <div className="bg-yellow-500/20 p-2 rounded-lg flex-shrink-0">
              <span className="font-bold text-yellow-400">2</span>
            </div>
            <div>
              <h4 className="font-bold text-yellow-300">Разрешение конфликта</h4>
              <ol className="list-decimal pl-5 mt-2 text-gray-300 text-sm">
                <li>Открыть файл с конфликтом</li>
                <li>Найти разделы с маркерами конфликта:
                  <div className="bg-gray-800 p-2 rounded text-xs my-2">
                    <pre className="whitespace-pre-wrap text-gray-300"><code>{`<<<<<<< HEAD
Ваша версия
=======
Версия из другой ветки
>>>>>>> feature`}</code></pre>
                  </div>
                </li>
                <li>Удалить маркеры и оставить нужный вариант</li>
                <li>Добавить файл в индекс: <code className="bg-gray-700 px-1.5 py-0.5 rounded">git add filename</code></li>
                <li>Завершить слияние: <code className="bg-gray-700 px-1.5 py-0.5 rounded">git commit</code></li>
              </ol>
            </div>
          </div>
        </div>
      </div>

      {/* Распространенные паттерны использования */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <FileText className="w-5 h-5 text-cyan-400" />
          Распространенные паттерны слияния
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Вот несколько распространенных сценариев использования слияния:
          </p>
        </div>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-gray-900/50 p-4 rounded-xl border border-green-700/30">
            <h3 className="font-bold text-green-300 mb-2">Feature branch workflow</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>Создание ветки для фичи: <code className="bg-gray-700 px-1.5 py-0.5 rounded">git checkout -b feature/new-ui</code></li>
              <li>Работа в ветке feature</li>
              <li>Слияние в main: <code className="bg-gray-700 px-1.5 py-0.5 rounded">git checkout main {'&&'} git merge feature/new-ui</code></li>
            </ul>
          </div>
          <div className="bg-gray-900/50 p-4 rounded-xl border border-blue-700/30">
            <h3 className="font-bold text-blue-300 mb-2">Hotfix workflow</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>Создание hotfix ветки: <code className="bg-gray-700 px-1.5 py-0.5 rounded">git checkout -b hotfix/critical-bug</code></li>
              <li>Исправление бага</li>
              <li>Слияние в main и develop: <code className="bg-gray-700 px-1.5 py-0.5 rounded">git checkout main {'&&'} git merge hotfix/critical-bug</code></li>
            </ul>
          </div>
          <div className="bg-gray-900/50 p-4 rounded-xl border border-purple-700/30">
            <h3 className="font-bold text-purple-300 mb-2">Release workflow</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>Создание release ветки: <code className="bg-gray-700 px-1.5 py-0.5 rounded">git checkout -b release/v1.2.0</code></li>
              <li>Финальные доработки и тестирование</li>
              <li>Слияние в main и develop: <code className="bg-gray-700 px-1.5 py-0.5 rounded">git checkout main {'&&'} git merge release/v1.2.0</code></li>
            </ul>
          </div>
          <div className="bg-gray-900/50 p-4 rounded-xl border border-orange-700/30">
            <h3 className="font-bold text-orange-300 mb-2">Pull request workflow</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>Push feature ветки в удаленный репозиторий</li>
              <li>Создание pull request через интерфейс GitHub/GitLab</li>
              <li>Code review и обсуждение изменений</li>
              <li>Merge через интерфейс (squash, rebase или merge)</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Заключение */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <div className="flex items-start gap-3">
          <div className="bg-green-500/20 p-2 rounded-lg flex-shrink-0">
            <GitBranch className="w-5 h-5 text-green-400" />
          </div>
          <div>
            <h3 className="font-bold text-white mb-2">Отлично! 🔗</h3>
            <p className="text-gray-300">
              Теперь вы понимаете, как объединять ветки в Git, различать стратегии слияния и просматривать историю проекта. В следующем уроке мы рассмотрим перебазирование (rebase) как альтернативу слиянию.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Part1;