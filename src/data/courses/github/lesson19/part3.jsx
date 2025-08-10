// src/data/courses/git/lesson19/part3.jsx
import React, { useState } from 'react';
import { GitBranch, Play, CheckCircle, Terminal, GitMerge, GitPullRequest, Code, Shield } from 'lucide-react';

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
            <GitBranch className="w-6 h-6 text-blue-400" />
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">💻 Практическое задание: Rebase vs Merge</h1>
            <p className="text-gray-300">
              <span className="font-medium text-yellow-400">🎯 Цель:</span> Практически освоить различия между rebase и merge, научиться использовать интерактивный rebase.
            </p>
          </div>
        </div>
      </div>

      {/* Задание 1: Создание тестового репозитория и вилки истории */}
      <div className={`bg-gray-800/40 backdrop-blur-sm border rounded-2xl p-6 shadow-xl ${completedTasks.task1 ? 'border-green-700/50' : 'border-gray-700/50'}`}>
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Play className="w-5 h-5 text-green-400" />
          Задание 1: Создайте вилку истории и протестируйте Merge
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Создайте тестовый репозиторий с вилкой истории и протестируйте стратегию merge.
          </p>
        </div>
        <div className="mt-6 space-y-6">
          <div className="bg-gray-900/50 p-5 rounded-xl border border-green-700/30">
            <h3 className="font-bold text-green-300 mb-3 flex items-center gap-2">
              <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">1</span>
              Создайте тестовый репозиторий
            </h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>Создайте новую директорию: <code className="bg-gray-700 px-1.5 py-0.5 rounded">mkdir rebase-merge-test</code></li>
              <li>Перейдите в директорию: <code className="bg-gray-700 px-1.5 py-0.5 rounded">cd rebase-merge-test</code></li>
              <li>Инициализируйте Git: <code className="bg-gray-700 px-1.5 py-0.5 rounded">git init</code></li>
              <li>Создайте начальный коммит:</li>
            </ul>
            
            <div className="mt-3 bg-gray-800 p-4 rounded-lg">
              <pre className="whitespace-pre-wrap text-gray-300 text-sm">
{`echo "# Тестовый проект" > README.md
git add README.md
git commit -m "Начальный коммит"`}</pre>
            </div>
          </div>
          
          <div className="bg-gray-900/50 p-5 rounded-xl border border-blue-700/30">
            <h3 className="font-bold text-blue-300 mb-3 flex items-center gap-2">
              <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">2</span>
              Создайте вилку истории
            </h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>Создайте и переключитесь на feature-ветку:</li>
              <div className="ml-6 bg-gray-800 p-3 rounded my-2">
                <code className="text-sm text-green-300">git checkout -b feature-auth</code>
              </div>
              <li>Создайте несколько коммитов в feature-ветке:</li>
            </ul>
            
            <div className="mt-3 bg-gray-800 p-4 rounded-lg">
              <pre className="whitespace-pre-wrap text-gray-300 text-sm">
{`echo "Функция аутентификации" > auth.md
git add auth.md
git commit -m "Добавил модуль аутентификации"

echo "Логин и пароль" > login.md
git add login.md
git commit -m "Реализовал форму логина"

echo "Регистрация пользователей" > register.md
git add register.md
git commit -m "Добавил регистрацию пользователей"`}</pre>
            </div>
            
            <ul className="list-disc pl-6 space-y-2 text-gray-300 mt-3">
              <li>Переключитесь обратно на main: <code className="bg-gray-700 px-1.5 py-0.5 rounded">git checkout main</code></li>
              <li>Создайте коммит в main для создания вилки:</li>
            </ul>
            
            <div className="mt-3 bg-gray-800 p-3 rounded">
              <pre className="whitespace-pre-wrap text-gray-300 text-sm">
{`echo "Обновленная документация" > docs.md
git add docs.md
git commit -m "Обновил документацию"`}</pre>
            </div>
          </div>
          
          <div className="bg-gray-900/50 p-5 rounded-xl border border-purple-700/30">
            <h3 className="font-bold text-purple-300 mb-3 flex items-center gap-2">
              <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">3</span>
              Выполните Merge
            </h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>Убедитесь, что вы находитесь в main ветке</li>
              <li>Выполните merge feature-ветки:</li>
              <div className="ml-6 bg-gray-800 p-3 rounded my-2">
                <code className="text-sm text-blue-300">git merge feature-auth</code>
              </div>
              <li>Просмотрите историю коммитов:</li>
              <div className="ml-6 bg-gray-800 p-3 rounded my-2">
                <code className="text-sm text-green-300">git log --oneline --graph</code>
              </div>
              <li>Обратите внимание на структуру вилки и merge commit</li>
              <li>Запишите наблюдения в README.md</li>
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
            Я создал вилку истории и протестировал Merge
          </label>
          {completedTasks.task1 && <CheckCircle className="ml-2 w-5 h-5 text-green-400" />}
        </div>
      </div>

      {/* Задание 2: Практика с Rebase */}
      <div className={`bg-gray-800/40 backdrop-blur-sm border rounded-2xl p-6 shadow-xl ${completedTasks.task2 ? 'border-green-700/50' : 'border-gray-700/50'}`}>
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <GitPullRequest className="w-5 h-5 text-purple-400" />
          Задание 2: Практика с Rebase и интерактивным Rebase
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Создайте новую вилку и протестируйте различные варианты rebase.
          </p>
        </div>
        <div className="mt-6 space-y-6">
          <div className="bg-gray-900/50 p-5 rounded-xl border border-purple-700/30">
            <h3 className="font-bold text-purple-300 mb-3 flex items-center gap-2">
              <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">1</span>
              Создайте новую вилку для тестирования rebase
            </h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>Создайте новую feature-ветку:</li>
              <div className="ml-6 bg-gray-800 p-3 rounded my-2">
                <code className="text-sm text-green-300">git checkout -b feature-api</code>
              </div>
              <li>Создайте коммиты в feature-ветке:</li>
            </ul>
            
            <div className="mt-3 bg-gray-800 p-4 rounded-lg">
              <pre className="whitespace-pre-wrap text-gray-300 text-sm">
{`echo "REST API endpoints" > api.md
git add api.md
git commit -m "Создал API endpoints"

echo "User endpoints" > user-api.md
git add user-api.md
git commit -m "Добавил user endpoints"

echo "Fix: исправил ошибку в user endpoints" > fix-user-api.md
git add fix-user-api.md
git commit -m "Исправил ошибку в user endpoints"

echo "Temp file" > temp.txt
git add temp.txt
git commit -m "Временный файл - удалить позже"

git rm temp.txt
git commit -m "Удалил временный файл"`}</pre>
            </div>
          </div>
          
          <div className="bg-gray-900/50 p-5 rounded-xl border border-blue-700/30">
            <h3 className="font-bold text-blue-300 mb-3 flex items-center gap-2">
              <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">2</span>
              Выполните обычный Rebase
            </h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>Переключитесь на main и добавьте коммит для создания вилки:</li>
              <div className="ml-6 bg-gray-800 p-3 rounded my-2">
                <code className="text-sm text-green-300">git checkout main</code>
              </div>
              <div className="ml-6 bg-gray-800 p-3 rounded my-2">
                <code className="text-sm text-blue-300">{`echo "Configuration files" > config.md && git add config.md && git commit -m "Добавил конфигурационные файлы"`}</code>
              </div>
              <li>Переключитесь обратно на feature-ветку:</li>
              <div className="ml-6 bg-gray-800 p-3 rounded my-2">
                <code className="text-sm text-purple-300">git checkout feature-api</code>
              </div>
              <li>Выполните rebase на main:</li>
              <div className="ml-6 bg-gray-800 p-3 rounded my-2">
                <code className="text-sm text-orange-300">git rebase main</code>
              </div>
              <li>Просмотрите историю:</li>
              <div className="ml-6 bg-gray-800 p-3 rounded my-2">
                <code className="text-sm text-yellow-300">git log --oneline --graph</code>
              </div>
              <li>Обратите внимание на линейную историю без вилки</li>
            </ul>
          </div>
          
          <div className="bg-gray-900/50 p-5 rounded-xl border border-orange-700/30">
            <h3 className="font-bold text-orange-300 mb-3 flex items-center gap-2">
              <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">3</span>
              Используйте интерактивный Rebase
            </h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>Создайте новую feature-ветку для интерактивного rebase:</li>
              <div className="ml-6 bg-gray-800 p-3 rounded my-2">
                <code className="text-sm text-green-300">git checkout -b feature-clean</code>
              </div>
              <li>Создайте "грязную" историю коммитов:</li>
            </ul>
            
            <div className="mt-3 bg-gray-800 p-4 rounded-lg">
              <pre className="whitespace-pre-wrap text-gray-300 text-sm">
{`echo "Функция 1" > func1.md
git add func1.md
git commit -m "добавил функцию 1"

echo "исправление" > fix1.md
git add fix1.md
git commit -m "фикс"

echo "еще один фикс" > fix2.md
git add fix2.md
git commit -m "fix"

echo "Функция 2" > func2.md
git add func2.md
git commit -m "Функция2 реализована"`}</pre>
            </div>
            
            <ul className="list-disc pl-6 space-y-2 text-gray-300 mt-3">
              <li>Выполните интерактивный rebase последних 4 коммитов:</li>
              <div className="ml-6 bg-gray-800 p-3 rounded my-2">
                <code className="text-sm text-blue-300">git rebase -i HEAD~4</code>
              </div>
              <li>В открывшемся редакторе:</li>
              <ul className="list-disc pl-6 mt-2 space-y-1 text-gray-400 text-sm">
                <li>Измените первый коммит с "pick" на "reword" для улучшения сообщения</li>
                <li>Объедините ("squash") коммиты с исправлениями с предыдущим</li>
                <li>Измените сообщения коммитов на более описательные</li>
              </ul>
              <li>Сохраните изменения и завершите rebase</li>
              <li>Проверьте результат:</li>
              <div className="ml-6 bg-gray-800 p-3 rounded my-2">
                <code className="text-sm text-purple-300">git log --oneline</code>
              </div>
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
            Я протестировал Rebase и интерактивный Rebase
          </label>
          {completedTasks.task2 && <CheckCircle className="ml-2 w-5 h-5 text-green-400" />}
        </div>
      </div>

      {/* Задание 3: Сравнение стратегий и работа с конфликтами */}
      <div className={`bg-gray-800/40 backdrop-blur-sm border rounded-2xl p-6 shadow-xl ${completedTasks.task3 ? 'border-green-700/50' : 'border-gray-700/50'}`}>
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Shield className="w-5 h-5 text-red-400" />
          Задание 3: Сравнение стратегий и разрешение конфликтов
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Сравните поведение merge и rebase при конфликтах и изучите команды управления.
          </p>
        </div>
        <div className="mt-6 space-y-6">
          <div className="bg-gray-900/50 p-5 rounded-xl border border-red-700/30">
            <h3 className="font-bold text-red-300 mb-3">Создание конфликта для тестирования:</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>Создайте новую ветку для тестирования конфликтов:</li>
              <div className="ml-6 bg-gray-800 p-3 rounded my-2">
                <code className="text-sm text-green-300">git checkout -b conflict-test</code>
              </div>
              <li>Измените файл в feature-ветке:</li>
              <div className="ml-6 bg-gray-800 p-3 rounded my-2">
                <code className="text-sm text-blue-300">{`echo "Версия из feature" > conflict-file.md && git add conflict-file.md && git commit -m "Изменения в feature"`}</code>
              </div>
              <li>Переключитесь на main и измените тот же файл:</li>
              <div className="ml-6 bg-gray-800 p-3 rounded my-2">
                <code className="text-sm text-purple-300">git checkout main</code>
              </div>
              <div className="ml-6 bg-gray-800 p-3 rounded my-2">
                <code className="text-sm text-orange-300">{`echo "Версия из main" > conflict-file.md && git add conflict-file.md && git commit -m "Изменения в main"`}</code>
              </div>
            </ul>
          </div>
          
          <div className="bg-gray-900/50 p-5 rounded-xl border border-green-700/30">
            <h3 className="font-bold text-green-300 mb-3">Тестирование Merge с конфликтами:</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>Попробуйте выполнить merge:</li>
              <div className="ml-6 bg-gray-800 p-3 rounded my-2">
                <code className="text-sm text-green-300">git merge conflict-test</code>
              </div>
              <li>Git сообщит о конфликте. Откройте конфликтный файл и изучите разметку:</li>
              <div className="ml-6 bg-gray-800 p-3 rounded my-2">
                <pre className="whitespace-pre-wrap text-gray-300 text-sm">
{`<<<<<<< HEAD
Версия из main
=======
Версия из feature
>>>>>>> conflict-test`}</pre>
              </div>
              <li>Разрешите конфликт, оставив обе строки:</li>
              <div className="ml-6 bg-gray-800 p-3 rounded my-2">
                <code className="text-sm text-blue-300">{`echo -e "Версия из main\nВерсия из feature" > conflict-file.md`}</code>
              </div>
              <li>Зафиксируйте разрешение конфликта:</li>
              <div className="ml-6 bg-gray-800 p-3 rounded my-2">
                <code className="text-sm text-purple-300">git add conflict-file.md && git commit -m "Разрешил конфликт при merge"</code>
              </div>
              <li>Просмотрите историю:</li>
              <div className="ml-6 bg-gray-800 p-3 rounded my-2">
                <code className="text-sm text-orange-300">git log --oneline --graph</code>
              </div>
            </ul>
          </div>
          
          <div className="bg-gray-900/50 p-5 rounded-xl border border-blue-700/30">
            <h3 className="font-bold text-blue-300 mb-3">Тестирование Rebase с конфликтами:</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>Отмените последний merge и создайте новую ветку:</li>
              <div className="ml-6 bg-gray-800 p-3 rounded my-2">
                <code className="text-sm text-green-300">git reset --hard HEAD~1</code>
              </div>
              <div className="ml-6 bg-gray-800 p-3 rounded my-2">
                <code className="text-sm text-blue-300">git checkout -b rebase-conflict-test</code>
              </div>
              <li>Повторите те же изменения, что и в предыдущем шаге</li>
              <li>Попробуйте выполнить rebase:</li>
              <div className="ml-6 bg-gray-800 p-3 rounded my-2">
                <code className="text-sm text-purple-300">git rebase main</code>
              </div>
              <li>Git остановится на конфликте. Разрешите его аналогично предыдущему примеру</li>
              <li>Продолжите rebase:</li>
              <div className="ml-6 bg-gray-800 p-3 rounded my-2">
                <code className="text-sm text-orange-300">git add conflict-file.md && git rebase --continue</code>
              </div>
              <li>Переключитесь на main и выполните fast-forward merge:</li>
              <div className="ml-6 bg-gray-800 p-3 rounded my-2">
                <code className="text-sm text-yellow-300">git checkout main && git merge rebase-conflict-test</code>
              </div>
            </ul>
          </div>
          
          <div className="bg-gray-900/50 p-5 rounded-xl border border-orange-700/30">
            <h3 className="font-bold text-orange-300 mb-3">Полезные команды для управления rebase:</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="bg-gray-800 p-3 rounded">
                <code className="text-sm text-green-300">git rebase --abort</code>
                <div className="text-xs text-gray-400 mt-1">Полная отмена rebase</div>
              </div>
              <div className="bg-gray-800 p-3 rounded">
                <code className="text-sm text-blue-300">git rebase --skip</code>
                <div className="text-xs text-gray-400 mt-1">Пропустить текущий коммит</div>
              </div>
              <div className="bg-gray-800 p-3 rounded">
                <code className="text-sm text-purple-300">git rebase -i --autosquash</code>
                <div className="text-xs text-gray-400 mt-1">Автоматическое объединение fixup коммитов</div>
              </div>
              <div className="bg-gray-800 p-3 rounded">
                <code className="text-sm text-orange-300">git reflog</code>
                <div className="text-xs text-gray-400 mt-1">Просмотр истории операций</div>
              </div>
            </div>
            
            <div className="mt-4 p-3 bg-yellow-900/20 border border-yellow-700/30 rounded text-yellow-300 text-sm">
              ⚡ <span className="font-medium">Финальное задание:</span> Создайте в README.md таблицу сравнения merge и rebase с примерами из ваших тестов.
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
            Я протестировал конфликты и изучил команды управления
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
            <h3 className="font-bold text-white mb-2">Отличная работа! 🔄</h3>
            <p className="text-gray-300">
              Теперь вы умеете использовать как merge, так и rebase, понимаете их различия и умеете разрешать конфликты. Вы научились работать с интерактивным rebase и знаете, когда безопасно использовать каждую стратегию.
              В следующем уроке мы рассмотрим работу с подмодулями и subtrees.
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