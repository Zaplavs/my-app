// src/data/courses/git/lesson16/part1.jsx
import React from 'react';
import { GitBranch, GitPullRequest, MessageSquare, UserCheck, CheckCircle, Code, Users, FileText, Zap, Settings } from 'lucide-react';

const Part1 = () => {
  return (
    <div className="space-y-8 text-gray-200">
      {/* Вступление */}
      <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 backdrop-blur-sm border border-blue-700/30 rounded-2xl p-6 shadow-lg">
        <div className="flex items-start gap-4">
          <div className="bg-blue-500/20 p-3 rounded-lg">
            <GitPullRequest className="w-6 h-6 text-blue-400" />
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">🔄 Урок 16: Pull Request: от идеи до мержа</h1>
            <h2 className="text-xl font-semibold text-blue-300 mb-3">Полный цикл работы с Pull Request в Git</h2>
            <p className="text-gray-300">
              <span className="font-medium text-yellow-400">🎯 Цель урока:</span> Освоить полный процесс создания, обсуждения и мержа Pull Request, включая работу с ревьюерами, правками и лучшими практиками.
            </p>
          </div>
        </div>
      </div>

      {/* Что такое Pull Request */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <GitBranch className="w-5 h-5 text-green-400" />
          Что такое Pull Request?
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            <span className="font-medium text-green-300">Pull Request (PR)</span> — это механизм в системах контроля версий (GitHub, GitLab, Bitbucket), позволяющий предложить изменения в код и обсудить их перед слиянием в основную ветку.
          </p>
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-gray-900/50 p-4 rounded-xl border border-green-700/30">
              <h3 className="font-bold text-green-300 mb-2 flex items-center gap-2">
                <Code className="w-5 h-5" />
                Основные функции PR
              </h3>
              <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-400 text-sm">
                <li>Предложение изменений</li>
                <li>Код-ревью</li>
                <li>Обсуждение и комментарии</li>
                <li>Автоматическое тестирование</li>
                <li>Слияние кода</li>
              </ul>
            </div>
            <div className="bg-gray-900/50 p-4 rounded-xl border border-purple-700/30">
              <h3 className="font-bold text-purple-300 mb-2 flex items-center gap-2">
                <Users className="w-5 h-5" />
                Участники процесса
              </h3>
              <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-400 text-sm">
                <li><span className="font-medium text-blue-300">Автор PR</span> — создатель изменений</li>
                <li><span className="font-medium text-green-300">Ревьюеры</span> — проверяющие код</li>
                <li><span className="font-medium text-yellow-300">Мейнтейнеры</span> — принимающие решения</li>
                <li><span className="font-medium text-purple-300">CI/CD</span> — автоматические проверки</li>
              </ul>
            </div>
          </div>
          <div className="mt-4 p-3 bg-blue-900/20 border border-blue-700/30 rounded-lg flex items-start gap-2">
            <Zap className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
            <p className="text-blue-300 text-sm">
              <span className="font-medium">💡 Пример:</span> Разработчик создает новую функцию в отдельной ветке, после завершения работы создает PR для обсуждения и интеграции изменений в основную кодовую базу.
            </p>
          </div>
        </div>
      </div>

      {/* Создание Pull Request */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <FileText className="w-5 h-5 text-purple-400" />
          Создание Pull Request
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed mb-4">
          <p>
            Процесс создания Pull Request начинается с завершения работы в feature-ветке и заканчивается оформлением запроса на слияние.
          </p>
        </div>

        <div className="space-y-6 mt-6">
          {/* Подготовка ветки */}
          <div className="bg-gray-900/50 p-5 rounded-xl border border-green-700/30">
            <div className="flex items-center gap-3 mb-3">
              <GitBranch className="w-5 h-5 text-green-400" />
              <h3 className="text-lg font-bold text-green-300">1. Подготовка feature-ветки</h3>
            </div>
            <p className="text-gray-300 mb-3">
              Перед созданием PR необходимо завершить работу в feature-ветке:
            </p>
            <div className="bg-gray-800 p-3 rounded text-sm">
              <pre className="whitespace-pre-wrap text-gray-300"><code>{`# Создание и переход в feature-ветку
git checkout -b feature/new-feature

# Работа над функционалом
git add .
git commit -m "Добавил новую функцию"

# Синхронизация с основной веткой
git checkout main
git pull origin main
git checkout feature/new-feature
git rebase main

# Отправка изменений на удаленный репозиторий
git push origin feature/new-feature`}</code></pre>
            </div>
            <ul className="list-disc pl-5 mt-3 space-y-1 text-gray-300 text-xs">
              <li>Создание отдельной ветки для каждой задачи</li>
              <li>Синхронизация с основной веткой перед созданием PR</li>
              <li>Чистая история коммитов</li>
              <li>Актуальное состояние кода</li>
            </ul>
          </div>

          {/* Оформление PR */}
          <div className="bg-gray-900/50 p-5 rounded-xl border border-blue-700/30">
            <div className="flex items-center gap-3 mb-3">
              <FileText className="w-5 h-5 text-blue-400" />
              <h3 className="text-lg font-bold text-blue-300">2. Оформление Pull Request</h3>
            </div>
            <p className="text-gray-300 mb-3">
              Качественное описание PR — ключ к успешному ревью:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <div className="bg-gray-800 p-4 rounded-lg">
                <h4 className="font-bold text-green-300 mb-2">Хорошее описание PR</h4>
                <ul className="list-disc pl-5 space-y-1 text-gray-300 text-sm">
                  <li>Четкий заголовок с описанием изменений</li>
                  <li>Подробное описание задачи и решения</li>
                  <li>Список внесенных изменений</li>
                  <li>Инструкции по тестированию</li>
                  <li>Ссылки на связанные задачи</li>
                </ul>
              </div>
              <div className="bg-gray-800 p-4 rounded-lg">
                <h4 className="font-bold text-purple-300 mb-2">Структура описания</h4>
                <ul className="list-disc pl-5 space-y-1 text-gray-300 text-sm">
                  <li><strong>Задача:</strong> Что нужно было сделать</li>
                  <li><strong>Решение:</strong> Как это реализовано</li>
                  <li><strong>Изменения:</strong> Что конкретно изменено</li>
                  <li><strong>Тестирование:</strong> Как проверить работу</li>
                  <li><strong>Скриншоты:</strong> При необходимости</li>
                </ul>
              </div>
            </div>
            
            <div className="mt-4 bg-blue-900/20 border border-blue-700/30 rounded p-3">
              <h4 className="font-bold text-blue-300 mb-2">Шаблон описания PR:</h4>
              <pre className="whitespace-pre-wrap text-gray-300 text-xs">
{`## Описание задачи
Краткое описание решаемой проблемы

## Что сделано
- Добавлена функция X
- Исправлена ошибка Y
- Обновлена документация

## Как проверить
1. Запустить приложение
2. Перейти к разделу X
3. Проверить работу функции Y

## Связанные задачи
Closes #123
Related to #456`}</pre>
            </div>
          </div>
          
          {/* Назначение ревьюеров */}
          <div className="bg-gray-900/50 p-5 rounded-xl border border-orange-700/30">
            <div className="flex items-center gap-3 mb-3">
              <UserCheck className="w-5 h-5 text-orange-400" />
              <h3 className="text-lg font-bold text-orange-300">3. Назначение ревьюеров и меток</h3>
            </div>
            <p className="text-gray-300 mb-3">
              Правильный выбор ревьюеров и меток ускоряет процесс ревью:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <div className="bg-gray-800 p-4 rounded-lg">
                <h4 className="font-bold text-green-300 mb-2">Выбор ревьюеров</h4>
                <ul className="list-disc pl-5 space-y-1 text-gray-300 text-sm">
                  <li>Разработчики, знакомые с кодом</li>
                  <li>Эксперты по конкретной области</li>
                  <li>Мейнтейнеры проекта</li>
                  <li>Не более 2-3 человек</li>
                </ul>
              </div>
              <div className="bg-gray-800 p-4 rounded-lg">
                <h4 className="font-bold text-purple-300 mb-2">Полезные метки</h4>
                <ul className="list-disc pl-5 space-y-1 text-gray-300 text-sm">
                  <li><span className="bg-blue-500/20 px-2 py-1 rounded">bug</span> — исправление ошибок</li>
                  <li><span className="bg-green-500/20 px-2 py-1 rounded">feature</span> — новая функциональность</li>
                  <li><span className="bg-yellow-500/20 px-2 py-1 rounded">documentation</span> — изменения в документации</li>
                  <li><span className="bg-red-500/20 px-2 py-1 rounded">breaking-change</span> — критические изменения</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Процесс ревью и обсуждения */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <MessageSquare className="w-5 h-5 text-orange-400" />
          Процесс ревью и обсуждения
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Код-ревью — важная часть процесса разработки, обеспечивающая качество кода и обмен знаниями в команде.
          </p>
        </div>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 bg-gray-900/50 rounded-xl border border-green-700/30">
            <h3 className="font-bold text-green-300 mb-3 flex items-center gap-2">
              <CheckCircle className="w-5 h-5" />
              Что проверять в код-ревью
            </h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-green-400">✓</span>
                <span>Соответствие стандартам кодирования</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-400">✓</span>
                <span>Правильность логики и алгоритмов</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-400">✓</span>
                <span>Обработка ошибок и граничных случаев</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-400">✓</span>
                <span>Производительность и оптимизация</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-400">✓</span>
                <span>Безопасность и уязвимости</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-400">✓</span>
                <span>Тестируемость и покрытие тестами</span>
              </li>
            </ul>
          </div>
          
          <div className="p-4 bg-gray-900/50 rounded-xl border border-blue-700/30">
            <h3 className="font-bold text-blue-300 mb-3 flex items-center gap-2">
              <MessageSquare className="w-5 h-5" />
              Эффективное обсуждение
            </h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-blue-400">💬</span>
                <span>Конкретные и конструктивные комментарии</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-400">💬</span>
                <span>Объяснение причины замечаний</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-400">💬</span>
                <span>Предложение альтернативных решений</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-400">💬</span>
                <span>Уважительный тон общения</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-400">💬</span>
                <span>Разрешение конфликтов через диалог</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-6 bg-gray-900/50 p-5 rounded-xl border border-yellow-700/30">
          <h3 className="font-bold text-yellow-300 mb-3 flex items-center gap-2">
            <Zap className="w-5 h-5" />
            Пример взаимодействия в PR
          </h3>
          <div className="space-y-4">
            <div className="bg-gray-800 p-3 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-xs">R</div>
                <span className="font-medium text-blue-300">Reviewer</span>
                <span className="text-gray-500 text-xs">2 мин. назад</span>
              </div>
              <p className="text-gray-300 text-sm">
                Здесь лучше использовать мемоизацию для оптимизации производительности. Можно применить useMemo или useCallback.
              </p>
            </div>
            
            <div className="bg-gray-800 p-3 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-xs">A</div>
                <span className="font-medium text-green-300">Author</span>
                <span className="text-gray-500 text-xs">1 мин. назад</span>
              </div>
              <p className="text-gray-300 text-sm">
                Спасибо за замечание! Добавил useMemo для кэширования вычислений. Проверь, пожалуйста, теперь.
              </p>
            </div>
            
            <div className="bg-gray-800 p-3 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-xs">R</div>
                <span className="font-medium text-blue-300">Reviewer</span>
                <span className="text-gray-500 text-xs">30 сек. назад</span>
              </div>
              <p className="text-gray-300 text-sm">
                Отлично! Теперь код выглядит намного лучше. Approve.
              </p>
              <div className="mt-2 flex items-center gap-2 text-green-400 text-sm">
                <CheckCircle className="w-4 h-4" />
                <span>Approved</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Внесение правок и повторное ревью */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Settings className="w-5 h-5 text-red-400" />
          Внесение правок и повторное ревью
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            После получения комментариев необходимо внести правки и пройти повторное ревью.
          </p>
        </div>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-gray-900/50 p-4 rounded-xl border border-red-700/30">
            <h3 className="font-bold text-red-300 mb-3">Процесс внесения правок</h3>
            <ol className="list-decimal pl-5 space-y-2 text-gray-300 text-sm">
              <li>Анализ всех комментариев ревьюеров</li>
              <li>Внесение необходимых изменений в код</li>
              <li>Добавление поясняющих комментариев к изменениям</li>
              <li>Отправка обновлений в ту же ветку</li>
              <li>Уведомление ревьюеров о правках</li>
            </ol>
          </div>
          
          <div className="bg-gray-900/50 p-4 rounded-xl border border-green-700/30">
            <h3 className="font-bold text-green-300 mb-3">Лучшие практики</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-300 text-sm">
              <li>Отвечать на каждый комментарий</li>
              <li>Объяснять внесенные изменения</li>
              <li>Не игнорировать замечания без обсуждения</li>
              <li>Просить пояснений, если что-то непонятно</li>
              <li>Быть открытым к конструктивной критике</li>
            </ul>
          </div>
        </div>

        <div className="mt-6 bg-gray-900/50 p-4 rounded-lg">
          <h4 className="font-bold text-white mb-3">Пример работы с комментариями:</h4>
          <div className="bg-gray-800 p-3 rounded text-sm">
            <pre className="whitespace-pre-wrap text-gray-300"><code>{`# После внесения правок
git add .
git commit -m "Исправил замечания ревьюера: добавил мемоизацию и обработку ошибок"
git push origin feature/new-feature

# Или если нужно объединить коммиты
git add .
git commit --fixup HEAD~1
git rebase -i HEAD~2 --autosquash
git push --force-with-lease origin feature/new-feature`}</code></pre>
          </div>
        </div>
      </div>

      {/* Мерж Pull Request */}
      <div class="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 class="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <CheckCircle class="w-5 h-5 text-green-400" />
          Мерж Pull Request
        </h2>
        <div class="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            После успешного прохождения всех проверок и получения одобрения можно выполнить слияние изменений.
          </p>
        </div>

        <div class="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div class="bg-gray-900/50 p-4 rounded-xl border border-green-700/30">
            <h3 class="font-bold text-green-300 mb-3">Условия для мержа</h3>
            <ul class="space-y-2 text-gray-300 text-sm">
              <li class="flex items-start gap-2">
                <CheckCircle class="w-4 h-4 text-green-400 mt-0.5" />
                <span>Все обязательные ревьюеры одобрили PR</span>
              </li>
              <li class="flex items-start gap-2">
                <CheckCircle class="w-4 h-4 text-green-400 mt-0.5" />
                <span>Все CI/CD проверки пройдены успешно</span>
              </li>
              <li class="flex items-start gap-2">
                <CheckCircle class="w-4 h-4 text-green-400 mt-0.5" />
                <span>Нет конфликтов с целевой веткой</span>
              </li>
              <li class="flex items-start gap-2">
                <CheckCircle class="w-4 h-4 text-green-400 mt-0.5" />
                <span>Код соответствует стандартам проекта</span>
              </li>
            </ul>
          </div>
          
          <div class="bg-gray-900/50 p-4 rounded-xl border border-blue-700/30">
            <h3 class="font-bold text-blue-300 mb-3">Типы мержа</h3>
            <div class="space-y-3">
              <div>
                <h4 class="font-medium text-yellow-300 flex items-center gap-2">
                  <GitBranch class="w-4 h-4" />
                  Merge commit
                </h4>
                <p class="text-gray-400 text-xs mt-1">
                  Создает новый коммит, объединяющий ветки. Сохраняет всю историю.
                </p>
              </div>
              <div>
                <h4 class="font-medium text-purple-300 flex items-center gap-2">
                  <GitBranch class="w-4 h-4" />
                  Squash and merge
                </h4>
                <p class="text-gray-400 text-xs mt-1">
                  Объединяет все коммиты в один. Чистая история в main.
                </p>
              </div>
              <div>
                <h4 class="font-medium text-green-300 flex items-center gap-2">
                  <GitBranch class="w-4 h-4" />
                  Rebase and merge
                </h4>
                <p class="text-gray-400 text-xs mt-1">
                  Перебазирует коммиты на целевую ветку. Линейная история.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="mt-6 bg-gray-900/50 p-4 rounded-lg border border-yellow-700/30">
          <h3 class="font-bold text-yellow-300 mb-3 flex items-center gap-2">
            <Zap class="w-5 h-5" />
            Процесс мержа
          </h3>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-3">
            <div class="bg-gray-800 p-3 rounded text-center">
              <div class="text-2xl font-bold text-green-400 mb-1">1</div>
              <div class="text-xs text-gray-300">Проверка статуса</div>
              <div class="text-xs text-gray-500 mt-1">Убедиться в готовности</div>
            </div>
            <div class="bg-gray-800 p-3 rounded text-center">
              <div class="text-2xl font-bold text-blue-400 mb-1">2</div>
              <div class="text-xs text-gray-300">Выбор стратегии</div>
              <div class="text-xs text-gray-500 mt-1">Merge/Squash/Rebase</div>
            </div>
            <div class="bg-gray-800 p-3 rounded text-center">
              <div class="text-2xl font-bold text-purple-400 mb-1">3</div>
              <div class="text-xs text-gray-300">Выполнение мержа</div>
              <div class="text-xs text-gray-500 mt-1">Confirm merge</div>
            </div>
          </div>
          
          <div class="mt-4 p-3 bg-green-900/20 border border-green-700/30 rounded text-green-300 text-sm">
            ⚡ <span class="font-medium">Совет:</span> После мержа не забудьте удалить feature-ветку и обновить локальный репозиторий.
          </div>
        </div>
      </div>

      {/* Лучшие практики и анти-паттерны */}
      <div class="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 class="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Zap class="w-5 h-5 text-yellow-400" />
          Лучшие практики и анти-паттерны
        </h2>
        <div class="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Следование лучшим практикам помогает сделать процесс работы с PR более эффективным.
          </p>
        </div>

        <div class="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div class="bg-gray-900/50 p-4 rounded-xl border border-green-700/30">
            <h3 class="font-bold text-green-300 mb-3 flex items-center gap-2">
              <CheckCircle class="w-5 h-5" />
              Лучшие практики
            </h3>
            <ul class="space-y-2 text-gray-300 text-sm">
              <li class="flex items-start gap-2">
                <span class="text-green-400">✓</span>
                <span>Создавать PR как можно раньше для получения обратной связи</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-green-400">✓</span>
                <span>Писать понятные и информативные описания</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-green-400">✓</span>
                <span>Делить большие изменения на несколько маленьких PR</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-green-400">✓</span>
                <span>Отвечать на все комментарии ревьюеров</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-green-400">✓</span>
                <span>Проверять конфликты перед мержем</span>
              </li>
            </ul>
          </div>
          
          <div class="bg-gray-900/50 p-4 rounded-xl border border-red-700/30">
            <h3 class="font-bold text-red-300 mb-3 flex items-center gap-2">
              <MessageSquare class="w-5 h-5" />
              Анти-паттерны
            </h3>
            <ul class="space-y-2 text-gray-300 text-sm">
              <li class="flex items-start gap-2">
                <span class="text-red-400">✗</span>
                <span>Игнорировать комментарии ревьюеров</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-red-400">✗</span>
                <span>Создавать слишком большие PR</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-red-400">✗</span>
                <span>Мержить без одобрения ревьюеров</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-red-400">✗</span>
                <span>Не тестировать изменения перед PR</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-red-400">✗</span>
                <span>Оставлять PR надолго без обновлений</span>
              </li>
            </ul>
          </div>
        </div>

        <div class="mt-6 p-4 bg-gray-900/50 rounded-lg border border-blue-700/30">
          <h4 class="font-bold text-white mb-3 flex items-center gap-2">
            <Code class="w-5 h-5 text-blue-400" />
            Шаблон конфигурации PR
          </h4>
          <div class="bg-gray-800 p-3 rounded text-sm">
            <pre class="whitespace-pre-wrap text-gray-300"><code>{`# .github/PULL_REQUEST_TEMPLATE.md

## Описание изменений
<!-- Опишите, что было сделано и зачем -->

## Тип изменения
- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation update

## Как проверить
<!-- Пошаговая инструкция для тестирования -->

## Скриншоты (если необходимо)
<!-- Визуальные изменения -->

## Чек-лист
- [ ] Код соответствует стандартам
- [ ] Добавлены тесты
- [ ] Обновлена документация
- [ ] Пройдены все CI проверки`}</code></pre>
          </div>
        </div>
      </div>

      {/* Заключение */}
      <div class="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <div class="flex items-start gap-3">
          <div class="bg-green-500/20 p-2 rounded-lg flex-shrink-0">
            <CheckCircle class="w-5 h-5 text-green-400" />
          </div>
          <div>
            <h3 class="font-bold text-white mb-2">Отлично! 🔄</h3>
            <p class="text-gray-300">
              Теперь вы знаете полный цикл работы с Pull Request: от создания feature-ветки до мержа изменений. Вы научились правильно оформлять PR, взаимодействовать с ревьюерами, вносить правки и выполнять слияние. Эти навыки помогут вам эффективно участвовать в командной разработке.
              В следующем уроке мы рассмотрим работу с конфликтами слияния.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Part1;