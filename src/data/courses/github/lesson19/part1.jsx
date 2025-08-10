// src/data/courses/git/lesson19/part1.jsx
import React from 'react';
import {CheckCircle, GitBranch, GitMerge, GitPullRequest, Zap, Shield, Code, RotateCcw, ArrowRight } from 'lucide-react';

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
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">🔄 Урок 19: Rebase vs Merge</h1>
            <h2 className="text-xl font-semibold text-blue-300 mb-3">Стратегии объединения веток в Git</h2>
            <p className="text-gray-300">
              <span className="font-medium text-yellow-400">🎯 Цель урока:</span> Понять различия между rebase и merge, научиться выбирать подходящую стратегию объединения веток.
            </p>
          </div>
        </div>
      </div>

      {/* Основные понятия */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <GitMerge className="w-5 h-5 text-green-400" />
          Основные понятия: Rebase и Merge
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            <span className="font-medium text-green-300">Merge</span> и <span className="font-medium text-purple-300">Rebase</span> — это две основные стратегии объединения веток в Git.
          </p>
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-gray-900/50 p-4 rounded-xl border border-green-700/30">
              <h3 className="font-bold text-green-300 mb-2 flex items-center gap-2">
                <GitMerge className="w-5 h-5" />
                Merge (Слияние)
              </h3>
              <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-400 text-sm">
                <li>Создает новый коммит объединения</li>
                <li>Сохраняет всю историю коммитов</li>
                <li>Показывает точное время и место слияния</li>
                <li>Безопасен и не переписывает историю</li>
              </ul>
            </div>
            <div className="bg-gray-900/50 p-4 rounded-xl border border-purple-700/30">
              <h3 className="font-bold text-purple-300 mb-2 flex items-center gap-2">
                <GitPullRequest className="w-5 h-5" />
                Rebase (Перебазирование)
              </h3>
              <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-400 text-sm">
                <li>Переписывает историю коммитов</li>
                <li>Создает линейную историю</li>
                <li>Перемещает коммиты на новую базу</li>
                <li>Позволяет чистую историю проекта</li>
              </ul>
            </div>
          </div>
          <div className="mt-4 p-3 bg-blue-900/20 border border-blue-700/30 rounded-lg flex items-start gap-2">
            <Zap className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
            <p className="text-blue-300 text-sm">
              <span className="font-medium">💡 Пример:</span> Merge показывает "как было объединено", Rebase показывает "как если бы это было сделано последовательно".
            </p>
          </div>
        </div>
      </div>

      {/* Как работает Merge */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <GitMerge className="w-5 h-5 text-blue-400" />
          Как работает Merge
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed mb-4">
          <p>
            Merge создает новый коммит, который объединяет изменения из двух веток.
          </p>
        </div>

        <div className="space-y-6 mt-6">
          <div className="bg-gray-900/50 p-5 rounded-xl border border-green-700/30">
            <div className="flex items-center gap-3 mb-3">
              <GitMerge className="w-5 h-5 text-green-400" />
              <h3 className="text-lg font-bold text-green-300">1. Процесс Merge</h3>
            </div>
            <p className="text-gray-300 mb-3">
              Шаги при выполнении merge:
            </p>
            <ol className="list-decimal pl-5 mt-2 space-y-2 text-gray-300">
              <li>Переключиться на целевую ветку: <code className="bg-gray-700 px-1.5 py-0.5 rounded">git checkout main</code></li>
              <li>Выполнить merge: <code className="bg-gray-700 px-1.5 py-0.5 rounded">git merge feature-branch</code></li>
              <li>Git автоматически создает merge commit</li>
              <li>История сохраняет вилку и объединение</li>
            </ol>
            
            <div className="mt-4 bg-gray-800 p-4 rounded-lg">
              <h4 className="font-bold text-blue-300 mb-2">Пример истории коммитов после merge:</h4>
              <pre className="whitespace-pre-wrap text-gray-300 text-sm">
{`*   9a3f1e2 (HEAD -> main) Merge branch 'feature'
|\  
| * 7b4c8d9 (feature) Добавил новую функцию
| * 3d2a1f5 Исправил баг в функции
* | 5c6d7e8 Обновил документацию
|/  
*   1a2b3c4 Начальный коммит`}</pre>
            </div>
          </div>

          <div className="bg-gray-900/50 p-5 rounded-xl border border-blue-700/30">
            <div className="flex items-center gap-3 mb-3">
              <Shield className="w-5 h-5 text-blue-400" />
              <h3 className="text-lg font-bold text-blue-300">2. Преимущества Merge</h3>
            </div>
            <ul className="list-disc pl-5 space-y-2 text-gray-300">
              <li><span className="font-medium text-green-300"> безопасноть:</span> Не переписывает существующую историю</li>
              <li><span className="font-medium text-green-300">прозрачность:</span> Ясно показывает, когда и как происходило объединение</li>
              <li><span className="font-medium text-green-300">простота:</span> Прост в использовании и понимании</li>
              <li><span className="font-medium text-green-300">надежность:</span> Работает даже при конфликтах</li>
            </ul>
            
            <div className="mt-4 p-3 bg-green-900/20 border border-green-700/30 rounded text-green-300 text-sm">
              ⚡ <span className="font-medium">Когда использовать Merge:</span> В shared ветках (main, develop), при работе в команде, когда важна точная история.
            </div>
          </div>
        </div>
      </div>

      {/* Как работает Rebase */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <GitPullRequest className="w-5 h-5 text-purple-400" />
          Как работает Rebase
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Rebase перемещает коммиты из одной ветки на вершину другой, создавая линейную историю.
          </p>
        </div>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-gray-900/50 p-4 rounded-xl border border-purple-700/30">
            <h3 className="font-bold text-purple-300 mb-3 flex items-center gap-2">
              <RotateCcw className="w-5 h-5" />
              Процесс Rebase
            </h3>
            <ol className="list-decimal pl-5 space-y-2 text-gray-300 text-sm">
              <li>Находясь в feature-ветке: <code className="bg-gray-700 px-1.5 py-0.5 rounded">git checkout feature</code></li>
              <li>Выполнить rebase: <code className="bg-gray-700 px-1.5 py-0.5 rounded">git rebase main</code></li>
              <li>Git перемещает коммиты на новую базу</li>
              <li>Переключиться на main и выполнить fast-forward merge</li>
            </ol>
          </div>
          
          <div className="bg-gray-900/50 p-4 rounded-xl border border-blue-700/30">
            <h3 className="font-bold text-blue-300 mb-3 flex items-center gap-2">
              <ArrowRight className="w-5 h-5" />
              Результат Rebase
            </h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-300 text-sm">
              <li>Линейная история коммитов</li>
              <li>Новые хеши коммитов</li>
              <li>Отсутствие merge commit</li>
              <li>Чистая и понятная история</li>
            </ul>
          </div>
        </div>

        <div className="mt-6 bg-gray-900/50 p-5 rounded-xl border border-orange-700/30">
          <h3 className="font-bold text-orange-300 mb-3">Пример истории до и после rebase:</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-gray-800 p-4 rounded-lg">
              <h4 className="font-bold text-red-300 mb-2">До Rebase (с вилкой):</h4>
              <pre className="whitespace-pre-wrap text-gray-300 text-xs">
{`* 5c6d7e8 (main) Обновил документацию
| * 7b4c8d9 (feature) Добавил новую функцию
| * 3d2a1f5 Исправил баг в функции
|/  
* 1a2b3c4 Начальный коммит`}</pre>
            </div>
            
            <div className="bg-gray-800 p-4 rounded-lg">
              <h4 className="font-bold text-green-300 mb-2">После Rebase (линейная):</h4>
              <pre className="whitespace-pre-wrap text-gray-300 text-xs">
{`* 9f8e7d6 (feature) Исправил баг в функции
* 8d7c6b5 Добавил новую функцию
* 5c6d7e8 (main) Обновил документацию
* 1a2b3c4 Начальный коммит`}</pre>
            </div>
          </div>
          
          <div className="mt-4 p-3 bg-purple-900/20 border border-purple-700/30 rounded text-purple-300 text-sm">
            ⚡ <span className="font-medium">Когда использовать Rebase:</span> В feature-ветках перед merge, для локальной разработки, при подготовке PR.
          </div>
        </div>
      </div>

      {/* Интерактивный Rebase */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Code className="w-5 h-5 text-cyan-400" />
          Интерактивный Rebase
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Интерактивный rebase позволяет редактировать коммиты во время перебазирования.
          </p>
        </div>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-gray-900/50 p-4 rounded-xl border border-green-700/30">
            <h3 className="font-bold text-green-300 mb-3 flex items-center gap-2">
              <Code className="w-5 h-5" />
              Команды интерактивного rebase
            </h3>
            <ul className="space-y-3 text-gray-300 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-green-400">pick</span>
                <div>
                  <div>Использовать коммит без изменений</div>
                  <div className="text-gray-400 text-xs">p 7b4c8d9 Добавил функцию</div>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-400">reword</span>
                <div>
                  <div>Изменить сообщение коммита</div>
                  <div className="text-gray-400 text-xs">r 3d2a1f5 Исправил опечатку</div>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-400">squash</span>
                <div>
                  <div>Объединить с предыдущим коммитом</div>
                  <div className="text-gray-400 text-xs">s 9f8e7d6 Мелкие правки</div>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-400">edit</span>
                <div>
                  <div>Остановиться для редактирования</div>
                  <div className="text-gray-400 text-xs">e 5c6d7e8 Добавил тесты</div>
                </div>
              </li>
            </ul>
          </div>
          
          <div className="bg-gray-900/50 p-4 rounded-xl border border-blue-700/30">
            <h3 className="font-bold text-blue-300 mb-3 flex items-center gap-2">
              <Zap className="w-5 h-5" />
              Пример использования
            </h3>
            <div className="space-y-3">
              <div>
                <h4 className="font-medium text-white text-sm">Запуск интерактивного rebase:</h4>
                <div className="bg-gray-800 p-2 rounded mt-1">
                  <code className="text-green-300 text-xs">git rebase -i HEAD~3</code>
                </div>
              </div>
              
              <div>
                <h4 className="font-medium text-white text-sm">Редактирование списка коммитов:</h4>
                <div className="bg-gray-800 p-2 rounded mt-1">
                  <pre className="whitespace-pre-wrap text-gray-300 text-xs">
{`pick 7b4c8d9 Добавил новую функцию
squash 3d2a1f5 Мелкие правки
reword 9f8e7d6 Исправил баг
# Rebase 1a2b3c4..9f8e7d6 onto 1a2b3c4`}</pre>
                </div>
              </div>
              
              <div>
                <h4 className="font-medium text-white text-sm">Результат:</h4>
                <div className="text-gray-400 text-xs">
                  Один чистый коммит вместо трех с улучшенным сообщением
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 bg-gray-900/50 p-4 rounded-lg border border-yellow-700/30">
          <h4 className="font-bold text-yellow-300 mb-3 flex items-center gap-2">
            <Shield className="w-5 h-5" />
            Полезные команды интерактивного rebase
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="bg-gray-800 p-3 rounded">
              <code className="text-sm text-green-300">git rebase -i HEAD~n</code>
              <div className="text-xs text-gray-400 mt-1">Интерактивный rebase последних n коммитов</div>
            </div>
            <div className="bg-gray-800 p-3 rounded">
              <code className="text-sm text-blue-300">{`git rebase -i <commit>`}</code>
              <div className="text-xs text-gray-400 mt-1">Rebase от конкретного коммита</div>
            </div>
            <div className="bg-gray-800 p-3 rounded">
              <code className="text-sm text-purple-300">git rebase --abort</code>
              <div className="text-xs text-gray-400 mt-1">Отменить текущий rebase</div>
            </div>
            <div className="bg-gray-800 p-3 rounded">
              <code className="text-sm text-orange-300">git rebase --continue</code>
              <div className="text-xs text-gray-400 mt-1">Продолжить rebase после разрешения конфликтов</div>
            </div>
          </div>
        </div>
      </div>

      {/* Опасности и лучшие практики */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Shield className="w-5 h-5 text-red-400" />
          Опасности Rebase и лучшие практики
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Rebase мощный, но потенциально опасный инструмент, требующий осторожного использования.
          </p>
        </div>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-gray-900/50 p-4 rounded-xl border border-red-700/30">
            <h3 className="font-bold text-red-300 mb-3 flex items-center gap-2">
              <Shield className="w-5 h-5" />
              Опасности Rebase
            </h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-red-400">⚠️</span>
                <span>Переписывает историю коммитов</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-400">⚠️</span>
                <span>Создает новые хеши коммитов</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-400">⚠️</span>
                <span>Может сломать работу других разработчиков</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-400">⚠️</span>
                <span>Сложнее отменить изменения</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-400">⚠️</span>
                <span>Проблемы с уже запушенными коммитами</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-gray-900/50 p-4 rounded-xl border border-green-700/30">
            <h3 className="font-bold text-green-300 mb-3 flex items-center gap-2">
              <CheckCircle className="w-5 h-5" />
              Когда безопасно использовать Rebase
            </h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-green-400">✅</span>
                <span>В локальных feature-ветках</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-400">✅</span>
                <span>Перед созданием Pull Request</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-400">✅</span>
                <span>Когда никто не работает с этими коммитами</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-400">✅</span>
                <span>Для очистки истории перед merge</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-400">✅</span>
                <span>В персональных проектах</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-6 p-4 bg-gray-900/50 rounded-lg border border-blue-700/30">
          <h4 className="font-bold text-blue-300 mb-3">Золотое правило Rebase:</h4>
          <div className="bg-gray-800 p-4 rounded">
            <p className="text-center text-lg font-medium text-white">
              "Никогда не делайте rebase общих (shared) веток!"
            </p>
            <p className="text-center text-gray-400 text-sm mt-2">
              Не применяйте rebase к веткам, которые используют другие разработчики
            </p>
          </div>
        </div>
      </div>

      {/* Сравнение и выбор стратегии */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Zap className="w-5 h-5 text-yellow-400" />
          Сравнение и выбор стратегии
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Выбор между rebase и merge зависит от контекста, команды и целей проекта.
          </p>
        </div>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-gray-900/50 p-4 rounded-xl border border-green-700/30">
            <h3 className="font-bold text-green-300 mb-3">Когда выбирать Merge:</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-green-400">🔄</span>
                <span>Объединение в shared ветки (main, develop)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-400">👥</span>
                <span>Командная разработка с несколькими участниками</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-400">📜</span>
                <span>Когда важна точная история объединений</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-400">🛡️</span>
                <span>Консервативный подход к истории</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-400">🔧</span>
                <span>При наличии сложных конфликтов</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-gray-900/50 p-4 rounded-xl border border-purple-700/30">
            <h3 className="font-bold text-purple-300 mb-3">Когда выбирать Rebase:</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-purple-400">🧹</span>
                <span>Очистка истории feature-веток</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-400">🔗</span>
                <span>Подготовка Pull Request</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-400">📏</span>
                <span>Желание линейной истории</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-400">⚡</span>
                <span>Локальная разработка</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-400">🎯</span>
                <span>Интеграция с upstream</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-6 bg-gray-900/50 p-5 rounded-xl border border-blue-700/30">
          <h3 className="font-bold text-blue-300 mb-3">Рекомендации для команд:</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <div className="bg-gray-800 p-3 rounded text-center">
              <div className="text-xl font-bold text-green-400">1</div>
              <div className="text-xs text-gray-300 mt-1">Согласуйте стратегию в команде</div>
            </div>
            <div className="bg-gray-800 p-3 rounded text-center">
              <div className="text-xl font-bold text-blue-400">2</div>
              <div className="text-xs text-gray-300 mt-1">Документируйте правила</div>
            </div>
            <div className="bg-gray-800 p-3 rounded text-center">
              <div className="text-xl font-bold text-purple-400">3</div>
              <div className="text-xs text-gray-300 mt-1">Используйте инструменты автоматизации</div>
            </div>
          </div>
          
          <div className="mt-4 p-3 bg-yellow-900/20 border border-yellow-700/30 rounded text-yellow-300 text-sm">
            ⚡ <span className="font-medium">Совет:</span> Многие команды используют rebase для локальной разработки и merge для объединения в main.
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
            <h3 className="font-bold text-white mb-2">Отлично! 🔄</h3>
            <p className="text-gray-300">
              Теперь вы понимаете различия между rebase и merge, знаете, когда и как их использовать. Вы научились работать с интерактивным rebase и понимаете связанные риски.
              В следующем уроке мы рассмотрим работу с подмодулями и subtrees.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Part1;