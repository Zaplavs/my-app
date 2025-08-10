// src/data/courses/git/lesson9/part1.jsx
import React from 'react';
import { AlertTriangle, Edit3, FileText, CheckCircle, GitMerge, GitBranch, Zap } from 'lucide-react';

const Part1 = () => {
  return (
    <div className="space-y-8 text-gray-200">
      {/* Вступление */}
      <div className="bg-gradient-to-r from-red-900/30 to-orange-900/30 backdrop-blur-sm border border-red-700/30 rounded-2xl p-6 shadow-lg">
        <div className="flex items-start gap-4">
          <div className="bg-red-500/20 p-3 rounded-lg">
            <AlertTriangle className="w-6 h-6 text-red-400" />
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">⚠️ Урок 9: Разрешение конфликтов слияния</h1>
            <h2 className="text-xl font-semibold text-red-300 mb-3">Работа с конфликтами в Git</h2>
            <p className="text-gray-300">
              <span className="font-medium text-yellow-400">🎯 Цель урока:</span> Понять причины возникновения конфликтов слияния и научиться их эффективно разрешать.
            </p>
          </div>
        </div>
      </div>

      {/* Когда возникают конфликты */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <AlertTriangle className="w-5 h-5 text-orange-400" />
          Когда возникают конфликты слияния?
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Конфликты слияния (<span className="font-medium text-orange-300">merge conflicts</span>) возникают, когда Git не может автоматически объединить изменения из разных веток:
          </p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>Один и тот же участок кода был изменен в обеих ветках по-разному</li>
            <li>Файл был удален в одной ветке и изменен в другой</li>
            <li>Файл был создан с разным содержимым в обеих ветках</li>
          </ul>
          <div className="mt-4 p-3 bg-orange-900/20 border border-orange-700/30 rounded-lg flex items-start gap-2">
            <Zap className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
            <p className="text-orange-300 text-sm">
              <span className="font-medium">💡 Важно:</span> Конфликты — это нормальная часть работы в Git, а не ошибка. Они указывают на то, что требуется человеческое вмешательство для принятия решений.
            </p>
          </div>
        </div>
      </div>

      {/* Метки конфликтов */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <FileText className="w-5 h-5 text-red-400" />
          Метки конфликтов в файлах
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed mb-4">
          <p>
            При возникновении конфликта Git добавляет специальные маркеры в файлы:
          </p>
        </div>

        <div className="space-y-6 mt-6">
          {/* Структура меток */}
          <div className="bg-gray-900/50 p-5 rounded-xl border border-red-700/30">
            <div className="flex items-center gap-3 mb-3">
              <Edit3 className="w-5 h-5 text-red-400" />
              <h3 className="text-lg font-bold text-red-300">Структура маркеров конфликта</h3>
            </div>
            <div className="bg-gray-800 p-4 rounded text-sm">
              <pre className="whitespace-pre-wrap text-gray-300"><code>{`<<<<<<< HEAD
Ваша текущая версия (из текущей ветки)
=======
Версия из ветки, которую вы сливаете
>>>>>>> feature-branch`}</code></pre>
            </div>
            <ul className="list-disc pl-5 mt-3 space-y-1 text-gray-300">
              <li><code className="bg-gray-700 px-1.5 py-0.5 rounded">{'<<<<<<< HEAD'}</code> — начало вашего текущего варианта</li>
              <li><code className="bg-gray-700 px-1.5 py-0.5 rounded">{'======='}</code> — разделитель между вариантами</li>
              <li><code className="bg-gray-700 px-1.5 py-0.5 rounded">{'>>>>>>> feature-branch'}</code> — конец варианта из сливаемой ветки</li>
            </ul>
          </div>

          {/* Пример реального конфликта */}
          <div className="bg-gray-900/50 p-5 rounded-xl border border-orange-700/30">
            <div className="flex items-center gap-3 mb-3">
              <GitMerge className="w-5 h-5 text-orange-400" />
              <h3 className="text-lg font-bold text-orange-300">Пример реального конфликта</h3>
            </div>
            <p className="text-gray-300 mb-3">
              Представим, что в двух ветках был изменен один и тот же файл:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-bold text-blue-300 mb-2">Ветка main:</h4>
                <div className="bg-gray-800 p-3 rounded text-sm">
                  <pre className="whitespace-pre-wrap text-gray-300"><code>{`def calculate_total(items):
    # Оптимизированная версия
    return sum(item.price for item in items)`}</code></pre>
                </div>
              </div>
              <div>
                <h4 className="font-bold text-green-300 mb-2">Ветка feature:</h4>
                <div className="bg-gray-800 p-3 rounded text-sm">
                  <pre className="whitespace-pre-wrap text-gray-300"><code>{`def calculate_total(items):
    # Добавлена проверка на пустой список
    if not items:
        return 0
    total = 0
    for item in items:
        total += item.price
    return total`}</code></pre>
                </div>
              </div>
            </div>
            <p className="text-gray-300 mt-3">
              После попытки слияния файл будет содержать:
            </p>
            <div className="bg-gray-800 p-4 rounded text-sm mt-2">
              <pre className="whitespace-pre-wrap text-gray-300"><code>{`def calculate_total(items):
<<<<<<< HEAD
    # Оптимизированная версия
    return sum(item.price for item in items)
=======
    # Добавлена проверка на пустой список
    if not items:
        return 0
    total = 0
    for item in items:
        total += item.price
    return total
>>>>>>> feature`}</code></pre>
            </div>
          </div>
        </div>
      </div>

      {/* Пошаговое разрешение конфликтов */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <CheckCircle className="w-5 h-5 text-green-400" />
          Пошаговое разрешение конфликтов
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Разрешение конфликта слияния состоит из трех основных шагов:
          </p>
        </div>

        <div className="mt-6 space-y-6">
          {/* Шаг 1: Правка файла */}
          <div className="flex items-start gap-3 p-4 bg-gray-900/50 rounded-lg border border-blue-700/30">
            <div className="bg-blue-500/20 p-2 rounded-lg flex-shrink-0">
              <span className="font-bold text-blue-400">1</span>
            </div>
            <div>
              <h3 className="font-bold text-blue-300 mb-2">Правка файла с конфликтом</h3>
              <ul className="list-disc pl-5 space-y-1 text-gray-300">
                <li>Откройте файл с конфликтом в текстовом редакторе</li>
                <li>Найдите разделы с маркерами <code className="bg-gray-700 px-1.5 py-0.5 rounded">{'<<<<<<<'}</code>, <code className="bg-gray-700 px-1.5 py-0.5 rounded">{'======='}</code>, <code className="bg-gray-700 px-1.5 py-0.5 rounded">{'>>>>>>>'}</code></li>
                <li>Примите решение: оставить один вариант, другой или объединить оба</li>
                <li>Удалите все маркеры конфликта</li>
              </ul>
              <div className="mt-3 p-3 bg-gray-800 rounded text-sm">
                <p className="text-gray-300 mb-2">Пример разрешения конфликта:</p>
                <pre className="whitespace-pre-wrap text-gray-300"><code>{`def calculate_total(items):
    # Добавлена проверка на пустой список + оптимизация
    if not items:
        return 0
    return sum(item.price for item in items)`}</code></pre>
              </div>
            </div>
          </div>

          {/* Шаг 2: git add */}
          <div className="flex items-start gap-3 p-4 bg-gray-900/50 rounded-lg border border-green-700/30">
            <div className="bg-green-500/20 p-2 rounded-lg flex-shrink-0">
              <span className="font-bold text-green-400">2</span>
            </div>
            <div>
              <h3 className="font-bold text-green-300 mb-2">Добавление файла в индекс</h3>
              <p className="text-gray-300 mb-3">
                После разрешения конфликта в файле нужно добавить его в индекс:
              </p>
              <div className="bg-gray-800 p-3 rounded text-sm">
                <pre className="whitespace-pre-wrap text-gray-300"><code>{`git add filename.py`}</code></pre>
              </div>
              <ul className="list-disc pl-5 mt-3 space-y-1 text-gray-300">
                <li>Это указывает Git, что конфликт в этом файле разрешен</li>
                <li>Можно добавлять несколько файлов по одному или все сразу</li>
                <li>Проверить статус можно командой <code className="bg-gray-700 px-1.5 py-0.5 rounded">git status</code></li>
              </ul>
            </div>
          </div>

          {/* Шаг 3: Коммит */}
          <div className="flex items-start gap-3 p-4 bg-gray-900/50 rounded-lg border border-purple-700/30">
            <div className="bg-purple-500/20 p-2 rounded-lg flex-shrink-0">
              <span className="font-bold text-purple-400">3</span>
            </div>
            <div>
              <h3 className="font-bold text-purple-300 mb-2">Завершение слияния коммитом</h3>
              <p className="text-gray-300 mb-3">
                Завершите процесс слияния коммитом:
              </p>
              <div className="bg-gray-800 p-3 rounded text-sm">
                <pre className="whitespace-pre-wrap text-gray-300"><code>{`git commit`}</code></pre>
              </div>
              <p className="text-gray-300 mt-3">
                Git автоматически создаст сообщение коммита с указанием сливаемых веток. Вы можете отредактировать его или оставить как есть.
              </p>
              <div className="mt-3 bg-purple-900/20 p-3 rounded text-sm">
                <p className="text-purple-300">
                  <span className="font-medium">Пример сообщения:</span> Merge branch 'feature' into main
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Инструменты для разрешения конфликтов */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Edit3 className="w-5 h-5 text-cyan-400" />
          Инструменты для разрешения конфликтов
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Помимо ручного редактирования, существуют специализированные инструменты:
          </p>
        </div>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-gray-900/50 p-4 rounded-xl border border-blue-700/30">
            <h3 className="font-bold text-blue-300 mb-2">Встроенные инструменты Git</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li><code className="bg-gray-700 px-1.5 py-0.5 rounded">git mergetool</code> - запуск графического инструмента</li>
              <li><code className="bg-gray-700 px-1.5 py-0.5 rounded">git diff</code> - просмотр различий</li>
              <li><code className="bg-gray-700 px-1.5 py-0.5 rounded">git status</code> - список конфликтных файлов</li>
            </ul>
          </div>
          <div className="bg-gray-900/50 p-4 rounded-xl border border-green-700/30">
            <h3 className="font-bold text-green-300 mb-2">Внешние инструменты</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>VS Code - встроенный конфликтный редактор</li>
              <li>Meld, KDiff3 - специализированные merge-тулы</li>
              <li>IntelliJ IDEA, Sublime Merge - интеграция с IDE</li>
            </ul>
          </div>
        </div>

        <div className="mt-6 bg-gray-900/50 p-4 rounded-xl border border-orange-700/30">
          <h3 className="font-bold text-orange-300 mb-3">Полезные команды при работе с конфликтами</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="bg-gray-800 p-3 rounded">
              <code className="text-sm text-gray-300">git status</code>
              <p className="text-gray-400 text-xs mt-1">Показать конфликтные файлы</p>
            </div>
            <div className="bg-gray-800 p-3 rounded">
              <code className="text-sm text-gray-300">git diff</code>
              <p className="text-gray-400 text-xs mt-1">Просмотр неразрешенных конфликтов</p>
            </div>
            <div className="bg-gray-800 p-3 rounded">
              <code className="text-sm text-gray-300">git merge --abort</code>
              <p className="text-gray-400 text-xs mt-1">Отмена слияния</p>
            </div>
            <div className="bg-gray-800 p-3 rounded">
              <code className="text-sm text-gray-300">git checkout --ours filename</code>
              <p className="text-gray-400 text-xs mt-1">Взять версию из текущей ветки</p>
            </div>
          </div>
        </div>
      </div>

      {/* Предотвращение конфликтов */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <GitBranch className="w-5 h-5 text-yellow-400" />
          Предотвращение конфликтов
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Хотя конфликты неизбежны в командной разработке, их можно минимизировать:
          </p>
        </div>

        <div className="mt-6 space-y-4">
          <div className="flex items-start gap-3 p-3 bg-gray-900/50 rounded-lg">
            <div className="bg-green-500/20 p-2 rounded-lg flex-shrink-0">
              <span className="font-bold text-green-400">1</span>
            </div>
            <div>
              <h4 className="font-bold text-green-300">Регулярное обновление веток</h4>
              <p className="text-gray-400 text-sm">Периодически сливайте изменения из main в вашу feature ветку</p>
            </div>
          </div>
          <div className="flex items-start gap-3 p-3 bg-gray-900/50 rounded-lg">
            <div className="bg-blue-500/20 p-2 rounded-lg flex-shrink-0">
              <span className="font-bold text-blue-400">2</span>
            </div>
            <div>
              <h4 className="font-bold text-blue-300">Маленькие и частые коммиты</h4>
              <p className="text-gray-400 text-sm">Чем меньше изменения, тем меньше вероятность конфликтов</p>
            </div>
          </div>
          <div className="flex items-start gap-3 p-3 bg-gray-900/50 rounded-lg">
            <div className="bg-purple-500/20 p-2 rounded-lg flex-shrink-0">
              <span className="font-bold text-purple-400">3</span>
            </div>
            <div>
              <h4 className="font-bold text-purple-300">Коммуникация в команде</h4>
              <p className="text-gray-400 text-sm">Согласовывайте работу над пересекающимися участками кода</p>
            </div>
          </div>
        </div>
      </div>

      {/* Заключение */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <div className="flex items-start gap-3">
          <div className="bg-green-500/20 p-2 rounded-lg flex-shrink-0">
            <CheckCircle className="w-5 h-5 text-green-400" />
          </div>
          <div>
            <h3 className="font-bold text-white mb-2">Отлично! 🎯</h3>
            <p className="text-gray-300">
              Теперь вы знаете, как возникают конфликты слияния, как их распознавать и эффективно разрешать. Умение работать с конфликтами — важный навык для любого разработчика. В следующем уроке мы рассмотрим перебазирование (rebase) как альтернативный подход к интеграции изменений.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Part1;