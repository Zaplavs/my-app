// src/data/courses/git/lesson6/part1.jsx
import React from 'react';
import { RotateCcw, Undo, History, GitBranch, AlertTriangle, Shield } from 'lucide-react';

const Part1 = () => {
  return (
    <div className="space-y-8 text-gray-200">
      {/* Вступление */}
      <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 backdrop-blur-sm border border-blue-700/30 rounded-2xl p-6 shadow-lg">
        <div className="flex items-start gap-4">
          <div className="bg-blue-500/20 p-3 rounded-lg">
            <RotateCcw className="w-6 h-6 text-blue-400" />
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">↩️ Урок 6: Отмена изменений</h1>
            <h2 className="text-xl font-semibold text-blue-300 mb-3">Восстановление и откат в Git</h2>
            <p className="text-gray-300">
              <span className="font-medium text-yellow-400">🎯 Цель урока:</span> Освоить команды <code className="bg-gray-700 px-1.5 py-0.5 rounded">git restore</code>, <code className="bg-gray-700 px-1.5 py-0.5 rounded">git reset</code> и <code className="bg-gray-700 px-1.5 py-0.5 rounded">git revert</code> для отмены изменений на разных этапах работы.
            </p>
          </div>
        </div>
      </div>

      {/* Отмена в рабочей директории (git restore) */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Undo className="w-5 h-5 text-green-400" />
          Отмена в рабочей директории (git restore)
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Команда <code className="bg-gray-700 px-1.5 py-0.5 rounded">git restore</code> используется для отмены изменений в рабочей директории — возвращения файлов к состоянию последнего коммита.
          </p>
          
          <div className="mt-4 bg-gray-900 p-4 rounded-lg">
            <p className="font-medium text-white mb-2">Синтаксис команды:</p>
            <pre className="whitespace-pre-wrap text-green-300"><code>{`git restore <файл>`}</code></pre>
          </div>

          <div className="space-y-6 mt-6">
            <div className="bg-gray-900/50 p-5 rounded-xl border border-green-700/30">
              <div className="flex items-center gap-3 mb-3">
                <Undo className="w-5 h-5 text-green-400" />
                <h3 className="text-lg font-bold text-green-300">Восстановление конкретного файла</h3>
              </div>
              <p className="text-gray-300 mb-3">
                Отмена изменений в одном файле:
              </p>
              <div className="bg-gray-800 p-4 rounded-lg">
                <pre className="whitespace-pre-wrap text-gray-300">
{`# Внесли изменения в файл
echo "// Новые изменения" >> app.js

# Отменяем изменения в app.js
git restore app.js`}
                </pre>
              </div>
              <p className="text-gray-300 text-sm mt-3">
                Файл вернется к состоянию последнего коммита.
              </p>
            </div>

            <div className="bg-gray-900/50 p-5 rounded-xl border border-blue-700/30">
              <div className="flex items-center gap-3 mb-3">
                <AlertTriangle className="w-5 h-5 text-blue-400" />
                <h3 className="text-lg font-bold text-blue-300">Восстановление всех файлов</h3>
              </div>
              <p className="text-gray-300 mb-3">
                Отмена изменений во всех файлах рабочей директории:
              </p>
              <div className="bg-gray-800 p-4 rounded-lg">
                <pre className="whitespace-pre-wrap text-gray-300">
{`# Отменяем все изменения в рабочей директории
git restore .`}
                </pre>
              </div>
              <div className="mt-3 p-2 bg-yellow-900/20 border border-yellow-700/30 rounded text-yellow-300 text-xs">
                ⚠️ Будьте осторожны! Эта команда удалит все несохраненные изменения.
              </div>
            </div>

            <div className="bg-gray-900/50 p-5 rounded-xl border border-purple-700/30">
              <div className="flex items-center gap-3 mb-3">
                <History className="w-5 h-5 text-purple-400" />
                <h3 className="text-lg font-bold text-purple-300">Восстановление из staging area</h3>
              </div>
              <p className="text-gray-300 mb-3">
                Отмена изменений, которые уже добавлены в staging area:
              </p>
              <div className="bg-gray-800 p-4 rounded-lg">
                <pre className="whitespace-pre-wrap text-gray-300">
{`# Файл в staging area
git add app.js

# Отменяем добавление в staging area (файл остается измененным)
git restore --staged app.js`}
                </pre>
              </div>
              <p className="text-gray-300 text-sm mt-3">
                Файл переместится из staging area обратно в состояние "modified".
              </p>
            </div>
          </div>

          <div className="mt-4 p-3 bg-green-900/20 border border-green-700/30 rounded-lg flex items-start gap-2">
            <Shield className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
            <p className="text-green-300 text-sm">
              💡 <code className="text-green-200">git restore</code> безопасна — она не затрагивает историю коммитов, только локальные изменения.
            </p>
          </div>
        </div>
      </div>

      {/* Сброс staging (git reset HEAD) */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <History className="w-5 h-5 text-cyan-400" />
          Сброс staging area (git reset)
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Команда <code className="bg-gray-700 px-1.5 py-0.5 rounded">git reset</code> используется для перемещения изменений из staging area обратно в рабочую директорию.
          </p>
          
          <div className="mt-4 bg-gray-900 p-4 rounded-lg">
            <p className="font-medium text-white mb-2">Синтаксис команды:</p>
            <pre className="whitespace-pre-wrap text-green-300"><code>{`git reset HEAD <файл>`}</code></pre>
          </div>

          <div className="space-y-6 mt-6">
            <div className="bg-gray-900/50 p-5 rounded-xl border border-green-700/30">
              <div className="flex items-center gap-3 mb-3">
                <Undo className="w-5 h-5 text-green-400" />
                <h3 className="text-lg font-bold text-green-300">Сброс конкретного файла</h3>
              </div>
              <p className="text-gray-300 mb-3">
                Удаление одного файла из staging area:
              </p>
              <div className="bg-gray-800 p-4 rounded-lg">
                <pre className="whitespace-pre-wrap text-gray-300">
{`# Файл добавлен в staging area
git add app.js

# Убираем файл из staging area
git reset HEAD app.js`}
                </pre>
              </div>
              <p className="text-gray-300 text-sm mt-3">
                Файл останется измененным в рабочей директории, но больше не будет готов к коммиту.
              </p>
            </div>

            <div className="bg-gray-900/50 p-5 rounded-xl border border-blue-700/30">
              <div className="flex items-center gap-3 mb-3">
                <AlertTriangle className="w-5 h-5 text-blue-400" />
                <h3 className="text-lg font-bold text-blue-300">Сброс всех файлов из staging</h3>
              </div>
              <p className="text-gray-300 mb-3">
                Удаление всех файлов из staging area:
              </p>
              <div className="bg-gray-800 p-4 rounded-lg">
                <pre className="whitespace-pre-wrap text-gray-300">
{`# Убираем все файлы из staging area
git reset HEAD`}
                </pre>
              </div>
              <p className="text-gray-300 text-sm mt-3">
                Все подготовленные изменения вернутся в состояние "modified".
              </p>
            </div>
          </div>

          <div className="mt-4 p-3 bg-blue-900/20 border border-blue-700/30 rounded-lg">
            <p className="text-blue-300 text-sm">
              💡 Альтернатива <code className="text-blue-200">{`git reset HEAD <файл>`}</code> — команда <code className="text-blue-200">{`git restore --staged <файл>`}</code> (более современный подход).
            </p>
          </div>
        </div>
      </div>

      {/* Откат коммита: reset vs revert */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <GitBranch className="w-5 h-5 text-orange-400" />
          Откат коммита: reset vs revert
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Когда нужно отменить уже сделанный коммит, есть два основных подхода: <code className="bg-gray-700 px-1.5 py-0.5 rounded">git reset</code> и <code className="bg-gray-700 px-1.5 py-0.5 rounded">git revert</code>. Они работают по-разному и имеют разные последствия.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
            {/* git reset */}
            <div className="bg-gray-900/50 p-5 rounded-xl border border-red-700/30">
              <div className="flex items-center gap-3 mb-4">
                <AlertTriangle className="w-5 h-5 text-red-400" />
                <h3 className="text-lg font-bold text-red-300">git reset</h3>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-bold text-white text-sm mb-2">Как работает:</h4>
                  <ul className="list-disc pl-5 space-y-1 text-gray-300 text-xs">
                    <li>Перемещает указатель HEAD на предыдущий коммит</li>
                    <li>Удаляет указанные коммиты из истории</li>
                    <li>Изменения возвращаются в рабочую директорию или staging</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-bold text-white text-sm mb-2">Когда использовать:</h4>
                  <ul className="list-disc pl-5 space-y-1 text-gray-300 text-xs">
                    <li>Локальные коммиты, не отправленные в удаленный репозиторий</li>
                    <li>Когда можно изменить историю коммитов</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-bold text-white text-sm mb-2">Пример:</h4>
                  <div className="bg-gray-800 p-3 rounded">
                    <pre className="whitespace-pre-wrap text-gray-300 text-xs">
{`# Откат на один коммит (изменения возвращаются)
git reset HEAD~1

# Откат с удалением изменений (--hard)
git reset --hard HEAD~1`}
                    </pre>
                  </div>
                </div>
                
                <div className="p-2 bg-red-900/20 border border-red-700/30 rounded">
                  <p className="text-red-300 text-xs">
                    ⚠️ Опасно для общих репозиториев — изменяет историю коммитов
                  </p>
                </div>
              </div>
            </div>

            {/* git revert */}
            <div className="bg-gray-900/50 p-5 rounded-xl border border-green-700/30">
              <div className="flex items-center gap-3 mb-4">
                <Shield className="w-5 h-5 text-green-400" />
                <h3 className="text-lg font-bold text-green-300">git revert</h3>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-bold text-white text-sm mb-2">Как работает:</h4>
                  <ul className="list-disc pl-5 space-y-1 text-gray-300 text-xs">
                    <li>Создает новый коммит, который отменяет изменения указанного коммита</li>
                    <li>История коммитов сохраняется</li>
                    <li>Безопасно для общих репозиториев</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-bold text-white text-sm mb-2">Когда использовать:</h4>
                  <ul className="list-disc pl-5 space-y-1 text-gray-300 text-xs">
                    <li>Коммиты, уже отправленные в удаленный репозиторий</li>
                    <li>Когда нужно сохранить историю изменений</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-bold text-white text-sm mb-2">Пример:</h4>
                  <div className="bg-gray-800 p-3 rounded">
                    <pre className="whitespace-pre-wrap text-gray-300 text-xs">
{`# Отмена последнего коммита (создается новый коммит)
git revert HEAD

# Отмена конкретного коммита по хешу
git revert a1b2c3d`}
                    </pre>
                  </div>
                </div>
                
                <div className="p-2 bg-green-900/20 border border-green-700/30 rounded">
                  <p className="text-green-300 text-xs">
                    ✅ Безопасно — не изменяет существующую историю коммитов
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 p-4 bg-gray-900/50 rounded-lg border border-yellow-700/30">
            <h4 className="font-bold text-white mb-2 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-yellow-400" />
              Важные различия
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div>
                <p className="font-medium text-red-300 mb-1">git reset:</p>
                <ul className="list-disc pl-5 space-y-1 text-gray-300">
                  <li>Изменяет историю</li>
                  <li>Опасно для общих репозиториев</li>
                  <li>Удаляет коммиты</li>
                </ul>
              </div>
              <div>
                <p className="font-medium text-green-300 mb-1">git revert:</p>
                <ul className="list-disc pl-5 space-y-1 text-gray-300">
                  <li>Сохраняет историю</li>
                  <li>Безопасно для всех репозиториев</li>
                  <li>Создает новые коммиты</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Практические примеры */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <RotateCcw className="w-5 h-5 text-purple-400" />
          Практические сценарии отмены изменений
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Различные ситуации и подходящие команды для их решения:
          </p>

          <div className="space-y-6 mt-6">
            <div className="bg-gray-900/50 p-5 rounded-xl border border-blue-700/30">
              <h3 className="font-bold text-blue-300 mb-3 flex items-center gap-2">
                <Undo className="w-4 h-4" />
                Сценарий 1: Случайные изменения в файле
              </h3>
              <p className="text-gray-300 text-sm mb-3">
                Вы случайно изменили файл и хотите вернуть его к последнему коммиту:
              </p>
              <div className="bg-gray-800 p-4 rounded-lg">
                <pre className="whitespace-pre-wrap text-gray-300 text-sm">
{`# Проверяем состояние
git status

# Отменяем изменения в конкретном файле
git restore filename.txt

# Или отменяем все изменения
git restore .`}
                </pre>
              </div>
            </div>

            <div className="bg-gray-900/50 p-5 rounded-xl border border-green-700/30">
              <h3 className="font-bold text-green-300 mb-3 flex items-center gap-2">
                <History className="w-4 h-4" />
                Сценарий 2: Файл случайно добавлен в staging
              </h3>
              <p className="text-gray-300 text-sm mb-3">
                Вы добавили файл в staging area, но передумали:
              </p>
              <div className="bg-gray-800 p-4 rounded-lg">
                <pre className="whitespace-pre-wrap text-gray-300 text-sm">
{`# Проверяем состояние
git status

# Убираем файл из staging area
git restore --staged filename.txt
# или старый способ:
git reset HEAD filename.txt`}
                </pre>
              </div>
            </div>

            <div className="bg-gray-900/50 p-5 rounded-xl border border-orange-700/30">
              <h3 className="font-bold text-orange-300 mb-3 flex items-center gap-2">
                <AlertTriangle className="w-4 h-4" />
                Сценарий 3: Локальный коммит нужно отменить
              </h3>
              <p className="text-gray-300 text-sm mb-3">
                Вы сделали коммит локально и хотите его отменить (коммит не отправлен):
              </p>
              <div className="bg-gray-800 p-4 rounded-lg">
                <pre className="whitespace-pre-wrap text-gray-300 text-sm">
{`# Откат коммита, изменения возвращаются в рабочую директорию
git reset HEAD~1

# Откат коммита с удалением изменений
git reset --hard HEAD~1`}
                </pre>
              </div>
            </div>

            <div className="bg-gray-900/50 p-5 rounded-xl border border-purple-700/30">
              <h3 className="font-bold text-purple-300 mb-3 flex items-center gap-2">
                <Shield className="w-4 h-4" />
                Сценарий 4: Коммит уже в удаленном репозитории
              </h3>
              <p className="text-gray-300 text-sm mb-3">
                Вы сделали коммит и отправили его, теперь нужно безопасно отменить:
              </p>
              <div className="bg-gray-800 p-4 rounded-lg">
                <pre className="whitespace-pre-wrap text-gray-300 text-sm">
{`# Создаем новый коммит, отменяющий предыдущий
git revert HEAD

# Или отменяем конкретный коммит
git revert <commit-hash>

# Отправляем отменяющий коммит
git push`}
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Заключение */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <div className="flex items-start gap-3">
          <div className="bg-green-500/20 p-2 rounded-lg flex-shrink-0">
            <RotateCcw className="w-5 h-5 text-green-400" />
          </div>
          <div>
            <h3 className="font-bold text-white mb-2">Отлично! 🎉</h3>
            <p className="text-gray-300">
              Теперь вы знаете, как отменять изменения на разных этапах работы с Git. Вы освоили <code className="bg-gray-700 px-1.5 py-0.5 rounded">git restore</code> для рабочей директории, <code className="bg-gray-700 px-1.5 py-0.5 rounded">git reset</code> для staging area и понимаете разницу между <code className="bg-gray-700 px-1.5 py-0.5 rounded">git reset</code> и <code className="bg-gray-700 px-1.5 py-0.5 rounded">git revert</code> для отката коммитов.
              В следующем уроке мы изучим работу с ветками в Git!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Part1;