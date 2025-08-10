// src/data/courses/git/lesson7/part1.jsx
import React from 'react';
import { GitBranch, Shuffle, CornerUpLeft, CornerUpRight, GitCommit, Zap } from 'lucide-react';

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
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">🌿 Урок 7: Создание и переключение веток</h1>
            <h2 className="text-xl font-semibold text-blue-300 mb-3">Работа с ветвями в Git</h2>
            <p className="text-gray-300">
              <span className="font-medium text-yellow-400">🎯 Цель урока:</span> Понять, что такое ветки в Git, научиться создавать и переключаться между ними с помощью команд <code className="bg-gray-700 px-1.5 py-0.5 rounded">git branch</code>, <code className="bg-gray-700 px-1.5 py-0.5 rounded">git checkout</code> и <code className="bg-gray-700 px-1.5 py-0.5 rounded">git switch</code>.
            </p>
          </div>
        </div>
      </div>

      {/* Что такое ветка */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <GitBranch className="w-5 h-5 text-green-400" />
          Что такое ветка в Git?
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            <span className="font-medium text-green-300">Ветка (branch)</span> в Git — это легковесный подвижный указатель на один из коммитов. По умолчанию, при создании репозитория, Git создает ветку <code className="bg-gray-700 px-1.5 py-0.5 rounded">main</code> (ранее <code className="bg-gray-700 px-1.5 py-0.5 rounded">master</code>), которая указывает на последний коммит.
          </p>
          
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-900/50 p-5 rounded-xl border border-blue-700/30">
              <h3 className="font-bold text-blue-300 mb-3 flex items-center gap-2">
                <Zap className="w-5 h-5" />
                Преимущества ветвления
              </h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-300">
                <li>Параллельная разработка нескольких функций</li>
                <li>Изоляция экспериментального кода</li>
                <li>Безопасное тестирование изменений</li>
                <li>Удобное управление релизами</li>
              </ul>
            </div>
            
            <div className="bg-gray-900/50 p-5 rounded-xl border border-purple-700/30">
              <h3 className="font-bold text-purple-300 mb-3 flex items-center gap-2">
                <GitCommit className="w-5 h-5" />
                Как работают ветки
              </h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-300">
                <li>Каждая ветка указывает на определенный коммит</li>
                <li>Ветки легко создаются и удаляются</li>
                <li>Переключение между ветками мгновенное</li>
                <li>Git сохраняет историю всех ветвлений</li>
              </ul>
            </div>
          </div>

          <div className="mt-6 p-4 bg-gray-900/50 rounded-lg border border-yellow-700/30">
            <h4 className="font-bold text-white mb-2 flex items-center gap-2">
              <GitBranch className="w-5 h-5 text-yellow-400" />
              Визуализация ветвления
            </h4>
            <div className="bg-gray-800 p-4 rounded text-sm font-mono">
              <pre className="whitespace-pre-wrap text-gray-300">
{`main     feature-login
  ↓           ↓
* commit C    * commit E
|             |
* commit B ----*
|
* commit A`}
              </pre>
            </div>
            <p className="text-gray-300 text-sm mt-2">
              Каждая ветка развивается независимо, но может быть объединена позже.
            </p>
          </div>

          <div className="mt-4 p-3 bg-blue-900/20 border border-blue-700/30 rounded-lg flex items-start gap-2">
            <GitBranch className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
            <p className="text-blue-300 text-sm">
              💡 Современный стандарт: вместо <code className="text-blue-200">master</code> используется <code className="text-blue-200">main</code> как имя основной ветки по умолчанию.
            </p>
          </div>
        </div>
      </div>

      {/* Команда git branch */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <GitBranch className="w-5 h-5 text-purple-400" />
          Команда git branch
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Команда <code className="bg-gray-700 px-1.5 py-0.5 rounded">git branch</code> используется для создания, просмотра и удаления веток.
          </p>
          
          <div className="mt-4 bg-gray-900 p-4 rounded-lg">
            <p className="font-medium text-white mb-2">Синтаксис команды:</p>
            <pre className="whitespace-pre-wrap text-green-300"><code>{`git branch [<опции>] [<имя-ветки>] [<начальный-коммит>]`}</code></pre>
          </div>

          <div className="space-y-6 mt-6">
            <div className="bg-gray-900/50 p-5 rounded-xl border border-green-700/30">
              <div className="flex items-center gap-3 mb-3">
                <GitBranch className="w-5 h-5 text-green-400" />
                <h3 className="text-lg font-bold text-green-300">Просмотр существующих веток</h3>
              </div>
              <p className="text-gray-300 mb-3">
                Без параметров команда показывает список всех веток:
              </p>
              <div className="bg-gray-800 p-4 rounded-lg">
                <pre className="whitespace-pre-wrap text-gray-300">
{`git branch

* main
  feature-auth
  bugfix-header`}
                </pre>
              </div>
              <p className="text-gray-300 text-sm mt-3">
                Звездочка <code className="bg-gray-700 px-1.5 py-0.5 rounded text-xs">*</code> указывает на текущую активную ветку.
              </p>
            </div>

            <div className="bg-gray-900/50 p-5 rounded-xl border border-blue-700/30">
              <div className="flex items-center gap-3 mb-3">
                <Zap className="w-5 h-5 text-blue-400" />
                <h3 className="text-lg font-bold text-blue-300">Создание новой ветки</h3>
              </div>
              <p className="text-gray-300 mb-3">
                Создание новой ветки без переключения на нее:
              </p>
              <div className="bg-gray-800 p-4 rounded-lg">
                <pre className="whitespace-pre-wrap text-gray-300">
{`# Создать ветку от текущего коммита
git branch feature-new-ui

# Создать ветку от конкретного коммита
git branch hotfix-bug a1b2c3d`}
                </pre>
              </div>
              <p className="text-gray-300 text-sm mt-3">
                Новая ветка будет указывать на тот же коммит, что и текущая ветка (или указанный коммит).
              </p>
            </div>

            <div className="bg-gray-900/50 p-5 rounded-xl border border-red-700/30">
              <div className="flex items-center gap-3 mb-3">
                <CornerUpLeft className="w-5 h-5 text-red-400" />
                <h3 className="text-lg font-bold text-red-300">Удаление ветки</h3>
              </div>
              <p className="text-gray-300 mb-3">
                Удаление ветки (если она полностью объединена):
              </p>
              <div className="bg-gray-800 p-4 rounded-lg">
                <pre className="whitespace-pre-wrap text-gray-300">
{`# Удалить локальную ветку
git branch -d feature-old

# Принудительное удаление (даже если не объединена)
git branch -D feature-experimental`}
                </pre>
              </div>
              <div className="mt-3 p-2 bg-red-900/20 border border-red-700/30 rounded text-red-300 text-xs">
                ⚠️ Будьте осторожны при удалении веток — это может привести к потере работы.
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Переключение между ветками */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Shuffle className="w-5 h-5 text-cyan-400" />
          Переключение между ветками
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Для переключения между ветками используются команды <code className="bg-gray-700 px-1.5 py-0.5 rounded">git checkout</code> и <code className="bg-gray-700 px-1.5 py-0.5 rounded">git switch</code> (более современная альтернатива).
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
            {/* git checkout */}
            <div className="bg-gray-900/50 p-5 rounded-xl border border-blue-700/30">
              <div className="flex items-center gap-3 mb-4">
                <CornerUpRight className="w-5 h-5 text-blue-400" />
                <h3 className="text-lg font-bold text-blue-300">git checkout</h3>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-bold text-white text-sm mb-2">Переключение на существующую ветку:</h4>
                  <div className="bg-gray-800 p-3 rounded">
                    <pre className="whitespace-pre-wrap text-gray-300 text-xs">
{`git checkout feature-login`}
                    </pre>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-bold text-white text-sm mb-2">Создание и переключение одной командой:</h4>
                  <div className="bg-gray-800 p-3 rounded">
                    <pre className="whitespace-pre-wrap text-gray-300 text-xs">
{`git checkout -b feature-new-ui`}
                    </pre>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-bold text-white text-sm mb-2">Переключение на конкретный коммит:</h4>
                  <div className="bg-gray-800 p-3 rounded">
                    <pre className="whitespace-pre-wrap text-gray-300 text-xs">
{`git checkout a1b2c3d`}
                    </pre>
                  </div>
                </div>
                
                <div className="p-2 bg-blue-900/20 border border-blue-700/30 rounded">
                  <p className="text-blue-300 text-xs">
                    💡 Универсальная команда, но может быть запутанной из-за множества функций.
                  </p>
                </div>
              </div>
            </div>

            {/* git switch */}
            <div className="bg-gray-900/50 p-5 rounded-xl border border-green-700/30">
              <div className="flex items-center gap-3 mb-4">
                <Shuffle className="w-5 h-5 text-green-400" />
                <h3 className="text-lg font-bold text-green-300">git switch</h3>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-bold text-white text-sm mb-2">Переключение на существующую ветку:</h4>
                  <div className="bg-gray-800 p-3 rounded">
                    <pre className="whitespace-pre-wrap text-gray-300 text-xs">
{`git switch feature-login`}
                    </pre>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-bold text-white text-sm mb-2">Создание и переключение одной командой:</h4>
                  <div className="bg-gray-800 p-3 rounded">
                    <pre className="whitespace-pre-wrap text-gray-300 text-xs">
{`git switch -c feature-new-ui
# или новая версия:
git switch -C feature-new-ui`}
                    </pre>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-bold text-white text-sm mb-2">Возврат к предыдущей ветке:</h4>
                  <div className="bg-gray-800 p-3 rounded">
                    <pre className="whitespace-pre-wrap text-gray-300 text-xs">
{`git switch -`}
                    </pre>
                  </div>
                </div>
                
                <div className="p-2 bg-green-900/20 border border-green-700/30 rounded">
                  <p className="text-green-300 text-xs">
                    ✅ Современная команда, предназначенная только для переключения веток.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 p-4 bg-gray-900/50 rounded-lg border border-yellow-700/30">
            <h4 className="font-bold text-white mb-2 flex items-center gap-2">
              <Shuffle className="w-5 h-5 text-yellow-400" />
              Важные замечания при переключении веток
            </h4>
            <ul className="list-disc pl-6 space-y-2 text-gray-300 text-sm">
              <li>Перед переключением убедитесь, что все изменения закоммичены или сохранены</li>
              <li>Git автоматически обновит файлы в рабочей директории до состояния целевой ветки</li>
              <li>Если есть конфликты, Git предупредит о них</li>
              <li>Используйте <code className="bg-gray-700 px-1.5 py-0.5 rounded text-xs">git stash</code> для временного сохранения незавершенной работы</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Современные стандарты и лучшие практики */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Zap className="w-5 h-5 text-yellow-400" />
          Современные стандарты и лучшие практики
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Современные подходы к работе с ветками в Git.
          </p>

          <div className="space-y-6 mt-6">
            <div className="bg-gray-900/50 p-5 rounded-xl border border-green-700/30">
              <div className="flex items-center gap-3 mb-3">
                <GitBranch className="w-5 h-5 text-green-400" />
                <h3 className="text-lg font-bold text-green-300">main вместо master</h3>
              </div>
              <p className="text-gray-300 mb-3">
                Современный стандарт именования основной ветки:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-300">
                <li>Новые репозитории создаются с веткой <code className="bg-gray-700 px-1.5 py-0.5 rounded text-xs">main</code> вместо <code className="bg-gray-700 px-1.5 py-0.5 rounded text-xs">master</code></li>
                <li>GitHub, GitLab и другие платформы перешли на это именование</li>
                <li>Более инклюзивный и понятный термин</li>
              </ul>
              <div className="mt-3 bg-gray-800 p-3 rounded">
                <pre className="whitespace-pre-wrap text-gray-300 text-sm">
{`# Проверьте имя основной ветки
git branch

# Если у вас еще master, можно переименовать:
git branch -m master main`}
                </pre>
              </div>
            </div>

            <div className="bg-gray-900/50 p-5 rounded-xl border border-blue-700/30">
              <div className="flex items-center gap-3 mb-3">
                <Zap className="w-5 h-5 text-blue-400" />
                <h3 className="text-lg font-bold text-blue-300">Создание веток с переходом</h3>
              </div>
              <p className="text-gray-300 mb-3">
                Эффективные способы создания и переключения на новую ветку:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gray-800 p-4 rounded">
                  <p className="text-white text-sm font-medium mb-2">С git checkout:</p>
                  <pre className="whitespace-pre-wrap text-gray-300 text-xs">
{`# Создать и переключиться
git checkout -b feature-auth

# Создать от конкретного коммита
git checkout -b hotfix a1b2c3d`}
                  </pre>
                </div>
                
                <div className="bg-gray-800 p-4 rounded">
                  <p className="text-white text-sm font-medium mb-2">С git switch:</p>
                  <pre className="whitespace-pre-wrap text-gray-300 text-xs">
{`# Создать и переключиться
git switch -c feature-auth

# Создать от конкретного коммита
git switch -c hotfix a1b2c3d`}
                  </pre>
                </div>
              </div>
              
              <div className="mt-3 p-2 bg-blue-900/20 border border-blue-700/30 rounded text-blue-300 text-xs">
                💡 Рекомендуется использовать <code className="text-blue-200">git switch -c</code> как современную альтернативу
              </div>
            </div>

            <div className="bg-gray-900/50 p-5 rounded-xl border border-purple-700/30">
              <div className="flex items-center gap-3 mb-3">
                <GitBranch className="w-5 h-5 text-purple-400" />
                <h3 className="text-lg font-bold text-purple-300">Соглашения об именовании веток</h3>
              </div>
              <p className="text-gray-300 mb-3">
                Хорошие практики именования веток:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-300">
                <li><code className="bg-gray-700 px-1.5 py-0.5 rounded text-xs">feature/название-функции</code> — для новых функций</li>
                <li><code className="bg-gray-700 px-1.5 py-0.5 rounded text-xs">bugfix/описание-бага</code> — для исправления багов</li>
                <li><code className="bg-gray-700 px-1.5 py-0.5 rounded text-xs">hotfix/срочное-исправление</code> — для срочных исправлений</li>
                <li><code className="bg-gray-700 px-1.5 py-0.5 rounded text-xs">release/v1.2.0</code> — для подготовки релизов</li>
              </ul>
              <div className="mt-3 bg-gray-800 p-3 rounded">
                <pre className="whitespace-pre-wrap text-gray-300 text-sm">
{`# Примеры хороших имен веток
git switch -c feature/user-authentication
git switch -c bugfix/login-error-handling
git switch -c hotfix/security-patch`}
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
            <GitBranch className="w-5 h-5 text-green-400" />
          </div>
          <div>
            <h3 className="font-bold text-white mb-2">Отлично! 🎉</h3>
            <p className="text-gray-300">
              Теперь вы знаете, что такое ветки в Git, как их создавать и переключаться между ними. Вы освоили команды <code className="bg-gray-700 px-1.5 py-0.5 rounded">git branch</code>, <code className="bg-gray-700 px-1.5 py-0.5 rounded">git checkout</code> и <code className="bg-gray-700 px-1.5 py-0.5 rounded">git switch</code>, а также современные стандарты именования веток.
              В следующем уроке мы научимся объединять ветки с помощью слияния (merge) и перебазирования (rebase)!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Part1;