// src/data/courses/git/lesson13/part1.jsx
import React from 'react';
import { Download, GitMerge, Eye, GitBranch, Zap, Server } from 'lucide-react';

const Part1 = () => {
  return (
    <div className="space-y-8 text-gray-200">
      {/* Вступление */}
      <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 backdrop-blur-sm border border-blue-700/30 rounded-2xl p-6 shadow-lg">
        <div className="flex items-start gap-4">
          <div className="bg-blue-500/20 p-3 rounded-lg">
            <Download className="w-6 h-6 text-blue-400" />
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">📥 Урок 13: Получение изменений из удаленного репозитория</h1>
            <h2 className="text-xl font-semibold text-blue-300 mb-3">Команды git fetch и git pull</h2>
            <p className="text-gray-300">
              <span className="font-medium text-yellow-400">🎯 Цель урока:</span> Понять разницу между командами git fetch и git pull, и научиться безопасно получать изменения из удаленного репозитория.
            </p>
          </div>
        </div>
      </div>

      {/* Основы получения изменений */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Download className="w-5 h-5 text-green-400" />
          Основы получения изменений
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            При совместной работе с Git часто возникает необходимость получать изменения, сделанные другими разработчиками:
          </p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>Синхронизация с последними изменениями в команде</li>
            <li>Получение новых функций и исправлений</li>
            <li>Интеграция изменений перед отправкой своих коммитов</li>
          </ul>
          <div className="mt-4 p-3 bg-blue-900/20 border border-blue-700/30 rounded-lg flex items-start gap-2">
            <Zap className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
            <p className="text-blue-300 text-sm">
              <span className="font-medium">💡 Две основные команды:</span> <code className="bg-gray-700 px-1.5 py-0.5 rounded">git fetch</code> и <code className="bg-gray-700 px-1.5 py-0.5 rounded">git pull</code>
            </p>
          </div>
        </div>
      </div>

      {/* Команда git fetch */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Eye className="w-5 h-5 text-purple-400" />
          Команда git fetch — безопасное получение
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed mb-4">
          <p>
            Команда <code className="bg-gray-700 px-1.5 py-0.5 rounded">git fetch</code> скачивает изменения из удаленного репозитория, но <span className="font-medium text-purple-300">не сливает</span> их с вашей рабочей веткой:
          </p>
        </div>

        <div className="space-y-6 mt-6">
          {/* Как работает fetch */}
          <div className="bg-gray-900/50 p-5 rounded-xl border border-purple-700/30">
            <div className="flex items-center gap-3 mb-3">
              <Download className="w-5 h-5 text-purple-400" />
              <h3 className="text-lg font-bold text-purple-300">Как работает git fetch</h3>
            </div>
            <div className="bg-gray-800 p-4 rounded text-sm">
              <pre className="whitespace-pre-wrap text-gray-300"><code>{`# Получение всех изменений из всех remote'ов
git fetch --all

# Получение изменений из конкретного remote
git fetch origin

# Получение изменений из конкретной ветки
git fetch origin main

# Получение и удаление удаленных веток, которых больше нет
git fetch --prune`}</code></pre>
            </div>
            <ul className="list-disc pl-5 mt-3 space-y-1 text-gray-300">
              <li>Скачивает новые коммиты в локальные tracking ветки (например, <code className="bg-gray-700 px-1.5 py-0.5 rounded">origin/main</code>)</li>
              <li>Не изменяет вашу рабочую ветку</li>
              <li>Не создает конфликтов слияния</li>
              <li>Позволяет осмотреться перед интеграцией изменений</li>
            </ul>
            <div className="mt-4 p-3 bg-purple-900/20 border border-purple-700/30 rounded">
              <p className="text-purple-300 text-sm">
                ⚡ <span className="font-medium">Преимущества:</span> Полный контроль над процессом интеграции, безопасность, возможность просмотра изменений перед слиянием
              </p>
            </div>
          </div>

          {/* Просмотр изменений после fetch */}
          <div className="bg-gray-900/50 p-5 rounded-xl border border-green-700/30">
            <div className="flex items-center gap-3 mb-3">
              <Server className="w-5 h-5 text-green-400" />
              <h3 className="text-lg font-bold text-green-300">Просмотр изменений после fetch</h3>
            </div>
            <div className="bg-gray-800 p-4 rounded text-sm">
              <pre className="whitespace-pre-wrap text-gray-300"><code>{`# Просмотр различий между локальной и удаленной веткой
git log ..origin/main

# Просмотр файлов, которые изменились
git diff main origin/main

# Просмотр статуса веток
git status

# Просмотр всех remote tracking веток
git branch -r`}</code></pre>
            </div>
            <ul className="list-disc pl-5 mt-3 space-y-1 text-gray-300">
              <li>Используйте <code className="bg-gray-700 px-1.5 py-0.5 rounded">git diff</code> для просмотра различий</li>
              <li>Используйте <code className="bg-gray-700 px-1.5 py-0.5 rounded">git log</code> для просмотра новых коммитов</li>
              <li>Tracking ветки обновляются без изменения вашей рабочей ветки</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Команда git pull */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <GitMerge className="w-5 h-5 text-orange-400" />
          Команда git pull — автоматическое получение и слияние
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Команда <code className="bg-gray-700 px-1.5 py-0.5 rounded">git pull</code> — это комбинация <code className="bg-gray-700 px-1.5 py-0.5 rounded">git fetch</code> и <code className="bg-gray-700 px-1.5 py-0.5 rounded">git merge</code>:
          </p>
        </div>

        <div className="mt-6 space-y-6">
          {/* Как работает pull */}
          <div className="bg-gray-900/50 p-5 rounded-xl border border-orange-700/30">
            <div className="flex items-center gap-3 mb-3">
              <GitMerge className="w-5 h-5 text-orange-400" />
              <h3 className="text-lg font-bold text-orange-300">Как работает git pull</h3>
            </div>
            <div className="bg-gray-800 p-4 rounded text-sm">
              <pre className="whitespace-pre-wrap text-gray-300"><code>{`# Простой pull из upstream ветки
git pull

# Pull с указанием remote и ветки
git pull origin main

# Pull с rebase вместо merge
git pull --rebase

# Pull с автоскрытием (auto-stash)
git pull --autostash`}</code></pre>
            </div>
            <ul className="list-disc pl-5 mt-3 space-y-1 text-gray-300">
              <li><code className="bg-gray-700 px-1.5 py-0.5 rounded">git pull</code> = <code className="bg-gray-700 px-1.5 py-0.5 rounded">git fetch</code> + <code className="bg-gray-700 px-1.5 py-0.5 rounded">git merge</code></li>
              <li>Автоматически сливает изменения с вашей текущей веткой</li>
              <li>Может вызвать конфликты слияния</li>
              <li>Быстрее, но менее безопасно, чем fetch + ручное слияние</li>
            </ul>
          </div>

          {/* Опции pull */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-gray-900/50 p-4 rounded-xl border border-blue-700/30">
              <h4 className="font-bold text-blue-300 mb-2 flex items-center gap-2">
                <GitMerge className="w-4 h-4" />
                --rebase
              </h4>
              <p className="text-gray-300 text-sm">
                Вместо merge использует rebase для интеграции изменений, создавая линейную историю.
              </p>
              <div className="bg-gray-800 p-2 rounded text-xs mt-2">
                <pre className="whitespace-pre-wrap text-gray-300">git pull --rebase</pre>
              </div>
            </div>
            <div className="bg-gray-900/50 p-4 rounded-xl border border-green-700/30">
              <h4 className="font-bold text-green-300 mb-2 flex items-center gap-2">
                <Eye className="w-4 h-4" />
                --autostash
              </h4>
              <p className="text-gray-300 text-sm">
                Автоматически прячет незакоммиченные изменения перед pull и восстанавливает после.
              </p>
              <div className="bg-gray-800 p-2 rounded text-xs mt-2">
                <pre className="whitespace-pre-wrap text-gray-300">git pull --autostash</pre>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Fetch vs Pull сравнение */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <GitBranch className="w-5 h-5 text-cyan-400" />
          Fetch vs Pull: сравнение подходов
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Выбор между <code className="bg-gray-700 px-1.5 py-0.5 rounded">git fetch</code> и <code className="bg-gray-700 px-1.5 py-0.5 rounded">git pull</code> зависит от ваших потребностей:
          </p>
        </div>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-900/50 p-5 rounded-xl border border-purple-700/30">
            <h3 className="font-bold text-purple-300 mb-3 flex items-center gap-2">
              <Eye className="w-4 h-4" />
              Git Fetch (Рекомендуемый подход)
            </h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start gap-2">
                <span className="text-purple-400">🔒</span>
                <span><span className="font-medium">Безопасно:</span> Не изменяет рабочую ветку</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-400">👁️</span>
                <span><span className="font-medium">Контроль:</span> Можно осмотреть изменения перед слиянием</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-400">🔍</span>
                <span><span className="font-medium">Прозрачно:</span> Явно видно, что и когда скачано</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-400">⚙️</span>
                <span><span className="font-medium">Гибкость:</span> Можно выбрать способ интеграции (merge/rebase)</span>
              </li>
            </ul>
            <div className="mt-3 p-2 bg-purple-900/20 rounded text-xs">
              <p className="text-purple-300">
                💡 <span className="font-medium">Рекомендуется:</span> Для командной разработки и критических изменений
              </p>
            </div>
          </div>
          <div className="bg-gray-900/50 p-5 rounded-xl border border-orange-700/30">
            <h3 className="font-bold text-orange-300 mb-3 flex items-center gap-2">
              <GitMerge className="w-4 h-4" />
              Git Pull (Быстрый подход)
            </h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start gap-2">
                <span className="text-orange-400">⚡</span>
                <span><span className="font-medium">Быстро:</span> Один шаг вместо двух</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-400">🔄</span>
                <span><span className="font-medium">Удобно:</span> Автоматическое слияние</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-400">⚠️</span>
                <span><span className="font-medium">Риски:</span> Возможны неожиданные конфликты</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-400">📦</span>
                <span><span className="font-medium">Простота:</span> Подходит для личных проектов</span>
              </li>
            </ul>
            <div className="mt-3 p-2 bg-orange-900/20 rounded text-xs">
              <p className="text-orange-300">
                💡 <span className="font-medium">Подходит:</span> Для личных проектов и быстрых обновлений
              </p>
            </div>
          </div>
        </div>

        <div className="mt-6 bg-gray-900/50 p-4 rounded-xl border border-green-700/30">
          <h3 className="font-bold text-green-300 mb-3">Рекомендуемый рабочий процесс</h3>
          <div className="bg-gray-800 p-3 rounded text-sm">
            <pre className="whitespace-pre-wrap text-gray-300"><code>{`# 1. Получаем изменения
git fetch origin

# 2. Просматриваем новые коммиты
git log ..origin/main --oneline

# 3. Просматриваем изменения в файлах
git diff main origin/main

# 4. Выбираем способ интеграции
git merge origin/main
# или
git rebase origin/main`}</code></pre>
          </div>
        </div>
      </div>

      {/* Распространенные ошибки и решения */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Zap className="w-5 h-5 text-red-400" />
          Распространенные ошибки и их решения
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            При работе с <code className="bg-gray-700 px-1.5 py-0.5 rounded">git fetch</code> и <code className="bg-gray-700 px-1.5 py-0.5 rounded">git pull</code> могут возникать различные ситуации:
          </p>
        </div>

        <div className="mt-6 space-y-4">
          <div className="flex items-start gap-3 p-3 bg-gray-900/50 rounded-lg">
            <div className="bg-red-500/20 p-2 rounded-lg flex-shrink-0">
              <span className="font-bold text-red-400">1</span>
            </div>
            <div>
              <h4 className="font-bold text-red-300">Конфликты при pull</h4>
              <p className="text-gray-400 text-sm">
                Решение: Используйте <code className="bg-gray-700 px-1.5 py-0.5 rounded">git fetch</code> + ручное слияние или <code className="bg-gray-700 px-1.5 py-0.5 rounded">git pull --rebase</code>
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3 p-3 bg-gray-900/50 rounded-lg">
            <div className="bg-orange-500/20 p-2 rounded-lg flex-shrink-0">
              <span className="font-bold text-orange-400">2</span>
            </div>
            <div>
              <h4 className="font-bold text-orange-300">"fatal: refusing to merge unrelated histories"</h4>
              <p className="text-gray-400 text-sm">
                Решение: <code className="bg-gray-700 px-1.5 py-0.5 rounded">git pull --allow-unrelated-histories</code> (только если уверены в необходимости)
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3 p-3 bg-gray-900/50 rounded-lg">
            <div className="bg-yellow-500/20 p-2 rounded-lg flex-shrink-0">
              <span className="font-bold text-yellow-400">3</span>
            </div>
            <div>
              <h4 className="font-bold text-yellow-300">Незакоммиченные изменения при pull</h4>
              <p className="text-gray-400 text-sm">
                Решение: Закоммитьте изменения, спрячьте (<code className="bg-gray-700 px-1.5 py-0.5 rounded">git stash</code>) или используйте <code className="bg-gray-700 px-1.5 py-0.5 rounded">git pull --autostash</code>
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3 p-3 bg-gray-900/50 rounded-lg">
            <div className="bg-purple-500/20 p-2 rounded-lg flex-shrink-0">
              <span className="font-bold text-purple-400">4</span>
            </div>
            <div>
              <h4 className="font-bold text-purple-300">"You have not concluded your merge"</h4>
              <p className="text-gray-400 text-sm">
                Решение: Завершите предыдущий merge или отмените его: <code className="bg-gray-700 px-1.5 py-0.5 rounded">git merge --abort</code>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Продвинутые техники */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Server className="w-5 h-5 text-blue-400" />
          Продвинутые техники получения изменений
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Дополнительные полезные команды и техники:
          </p>
        </div>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-gray-900/50 p-4 rounded-xl border border-blue-700/30">
            <h3 className="font-bold text-blue-300 mb-2">Полезные опции fetch</h3>
            <ul className="list-disc pl-5 text-sm space-y-1 text-gray-300">
              <li><code className="bg-gray-700 px-1.5 py-0.5 rounded">git fetch --prune</code> — удаляет локальные tracking ветки удаленных веток</li>
              <li><code className="bg-gray-700 px-1.5 py-0.5 rounded">git fetch --tags</code> — получает все теги</li>
              <li><code className="bg-gray-700 px-1.5 py-0.5 rounded">git fetch --depth=1</code> — shallow fetch для больших репозиториев</li>
            </ul>
          </div>
          <div className="bg-gray-900/50 p-4 rounded-xl border border-green-700/30">
            <h3 className="font-bold text-green-300 mb-2">Анализ полученных изменений</h3>
            <ul className="list-disc pl-5 text-sm space-y-1 text-gray-300">
              <li><code className="bg-gray-700 px-1.5 py-0.5 rounded">git log ..origin/main</code> — новые коммиты</li>
              <li><code className="bg-gray-700 px-1.5 py-0.5 rounded">git diff HEAD origin/main</code> — различия в файлах</li>
              <li><code className="bg-gray-700 px-1.5 py-0.5 rounded">git shortlog ..origin/main</code> — краткий список изменений</li>
            </ul>
          </div>
        </div>

        <div className="mt-6 bg-gray-900/50 p-4 rounded-xl border border-cyan-700/30">
          <h3 className="font-bold text-cyan-300 mb-3">Настройка поведения по умолчанию</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="bg-gray-800 p-3 rounded text-sm">
              <p className="text-cyan-300 font-medium">Rebase по умолчанию</p>
              <pre className="whitespace-pre-wrap text-gray-300 text-xs mt-1"><code>{`git config --global pull.rebase true`}</code></pre>
            </div>
            <div className="bg-gray-800 p-3 rounded text-sm">
              <p className="text-cyan-300 font-medium">Автоскрытие по умолчанию</p>
              <pre className="whitespace-pre-wrap text-gray-300 text-xs mt-1"><code>{`git config --global rebase.autoStash true`}</code></pre>
            </div>
          </div>
        </div>
      </div>

      {/* Заключение */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <div className="flex items-start gap-3">
          <div className="bg-green-500/20 p-2 rounded-lg flex-shrink-0">
            <Download className="w-5 h-5 text-green-400" />
          </div>
          <div>
            <h3 className="font-bold text-white mb-2">Отлично! 🎯</h3>
            <p className="text-gray-300">
              Теперь вы понимаете разницу между <code className="bg-gray-700 px-1.5 py-0.5 rounded">git fetch</code> и <code className="bg-gray-700 px-1.5 py-0.5 rounded">git pull</code>! Вы научились безопасно получать изменения, анализировать их перед интеграцией и разобрались с типичными ошибками. В следующем уроке мы рассмотрим работу с тегами в Git.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Part1;