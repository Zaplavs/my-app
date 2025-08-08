// src/data/courses/markdown/lesson18/part1.jsx
import React from 'react';
import { Github, FileText, Users, GitPullRequest, ListTodo, AtSign, Hash } from 'lucide-react';

const Part1 = () => {
  return (
    <div className="space-y-8 text-gray-200">
      {/* Вступление */}
      <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 backdrop-blur-sm border border-blue-700/30 rounded-2xl p-6 shadow-lg">
        <div className="flex items-start gap-4">
          <div className="bg-blue-500/20 p-3 rounded-lg">
            <Github className="w-6 h-6 text-blue-400" />
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">🐙 Урок 18: Markdown в GitHub</h1>
            <h2 className="text-xl font-semibold text-blue-300 mb-3">README, Issues, Pull Requests и особенности GitHub Flavored Markdown</h2>
            <p className="text-gray-300">
              <span className="font-medium text-yellow-400">🎯 Цель урока:</span> Освоить использование Markdown в экосистеме GitHub, понять особенности GitHub Flavored Markdown и научиться эффективно использовать его в README, Issues и Pull Requests.
            </p>
          </div>
        </div>
      </div>

      {/* Что такое GitHub Flavored Markdown */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Github className="w-5 h-5 text-green-400" />
          Что такое GitHub Flavored Markdown (GFM)?
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            <span className="font-medium text-green-300">GitHub Flavored Markdown (GFM)</span> — это расширенная версия стандартного Markdown, 
            разработанная GitHub для улучшения совместной работы и документации в репозиториях.
          </p>
          <p>
            GFM добавляет дополнительные функции, которые делают Markdown более мощным и удобным для технической документации и общения в GitHub:
          </p>
        </div>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-900/50 p-5 rounded-xl border border-blue-700/30">
            <h3 className="font-bold text-blue-300 mb-3">Расширения GFM:</h3>
            <ul className="space-y-3 text-gray-300 text-sm">
              <li className="flex items-start gap-2">
                <span className="font-bold text-blue-400 mt-1">•</span>
                <span><span className="font-medium">Таблицы</span> — структурированное представление данных</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold text-blue-400 mt-1">•</span>
                <span><span className="font-medium">Зачеркнутый текст</span> — <code className="bg-gray-700 px-1.5 py-0.5 rounded">~~зачеркнуто~~</code></span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold text-blue-400 mt-1">•</span>
                <span><span className="font-medium">Автоматические ссылки</span> — URL преобразуются в кликабельные ссылки</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold text-blue-400 mt-1">•</span>
                <span><span className="font-medium">Emoji</span> — использование эмодзи в тексте</span>
              </li>
            </ul>
          </div>
          <div className="bg-gray-900/50 p-5 rounded-xl border border-green-700/30">
            <h3 className="font-bold text-green-300 mb-3">Интеграции GitHub:</h3>
            <ul className="space-y-3 text-gray-300 text-sm">
              <li className="flex items-start gap-2">
                <span className="font-bold text-green-400 mt-1">•</span>
                <span><span className="font-medium">@Упоминания</span> — уведомление пользователей</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold text-green-400 mt-1">•</span>
                <span><span className="font-medium">#Ссылки на задачи</span> — автоматические ссылки на Issues</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold text-green-400 mt-1">•</span>
                <span><span className="font-medium">Ссылки на коммиты</span> — SHA хэши преобразуются в ссылки</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold text-green-400 mt-1">•</span>
                <span><span className="font-medium">Todo-списки</span> — интерактивные чекбоксы</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-6 bg-gray-900/30 p-4 rounded-lg border border-gray-700">
          <h4 className="font-bold text-white mb-2">Преимущества GFM:</h4>
          <ul className="list-disc pl-5 space-y-2 text-gray-300 text-sm">
            <li>Улучшенная читаемость и структура документации</li>
            <li>Интеграция с системой управления проектами GitHub</li>
            <li>Удобное взаимодействие между участниками проекта</li>
            <li>Поддержка технической документации и кода</li>
          </ul>
        </div>
      </div>

      {/* README.md - лицо проекта */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <FileText className="w-5 h-5 text-purple-400" />
          README.md - лицо проекта
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Файл <code className="bg-gray-700 px-2 py-1 rounded">README.md</code> — это основной файл документации любого репозитория на GitHub. 
            Он автоматически отображается на главной странице репозитория и служит визитной карточкой проекта.
          </p>
        </div>

        <div className="mt-6 bg-gray-900/50 p-5 rounded-xl border border-purple-700/30">
          <h3 className="font-bold text-purple-300 mb-3">Структура хорошего README:</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div>
              <p className="text-gray-400 text-sm mb-2">Обязательные элементы:</p>
              <ul className="space-y-3 text-gray-300 text-sm">
                <li className="flex items-start gap-2">
                  <span className="font-bold text-purple-400 mt-1">1.</span>
                  <span><span className="font-medium">Название проекта</span> — заголовок 1 уровня</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold text-purple-400 mt-1">2.</span>
                  <span><span className="font-medium">Краткое описание</span> — что делает проект</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold text-purple-400 mt-1">3.</span>
                  <span><span className="font-medium">Установка</span> — как начать использовать</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold text-purple-400 mt-1">4.</span>
                  <span><span className="font-medium">Использование</span> — примеры применения</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold text-purple-400 mt-1">5.</span>
                  <span><span className="font-medium">Лицензия</span> — условия использования</span>
                </li>
              </ul>
            </div>
            <div>
              <p className="text-gray-400 text-sm mb-2">Дополнительные элементы:</p>
              <ul className="space-y-3 text-gray-300 text-sm">
                <li className="flex items-start gap-2">
                  <span className="font-bold text-purple-400 mt-1">•</span>
                  <span><span className="font-medium">Бейджи</span> — статус сборки, покрытие тестами</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold text-purple-400 mt-1">•</span>
                  <span><span className="font-medium">Оглавление</span> — для больших README</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold text-purple-400 mt-1">•</span>
                  <span><span className="font-medium">Вклад в проект</span> — как принять участие</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold text-purple-400 mt-1">•</span>
                  <span><span className="font-medium">Авторы</span> — список разработчиков</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold text-purple-400 mt-1">•</span>
                  <span><span className="font-medium">Благодарности</span> — ссылки на использованные ресурсы</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-gray-900/50 p-4 rounded-xl border border-blue-700/30">
            <h3 className="font-bold text-blue-300 mb-3">Пример структуры README:</h3>
            <pre className="bg-gray-800 p-3 rounded text-sm text-gray-300"><code>{`# Название проекта

Краткое описание проекта и его возможностей.

## Установка

\`\`\`bash
npm install my-project
\`\`\`

## Использование

\`\`\`javascript
import myProject from 'my-project';

myProject.doSomething();
\`\`\`

## Лицензия

[MIT](LICENSE)`}</code></pre>
          </div>
          <div className="bg-gray-900/50 p-4 rounded-xl border border-green-700/30">
            <h3 className="font-bold text-green-300 mb-3">Продвинутый README:</h3>
            <pre className="bg-gray-800 p-3 rounded text-sm text-gray-300"><code>{`# ![Logo](logo.png) Project Name

[![Build Status](https://travis-ci.org/user/repo.svg?branch=master)](https://travis-ci.org/user/repo)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Описание

Подробное описание проекта с таблицей возможностей:

| Возможность | Поддержка |
|------------|-----------|
| Функция 1  | ✅        |
| Функция 2  | ⏳        |

## Авторы

[@username](https://github.com/username)`}</code></pre>
          </div>
        </div>
      </div>

      {/* Форматирование в Issues и PR */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <ListTodo className="w-5 h-5 text-cyan-400" />
          Форматирование в Issues и Pull Requests
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Issues и Pull Requests — ключевые элементы совместной работы на GitHub. 
            Markdown в них поддерживает все возможности GFM, что позволяет создавать структурированные и информативные сообщения.
          </p>
        </div>

        <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-gray-900/50 p-5 rounded-xl border border-cyan-700/30">
            <h3 className="font-bold text-cyan-300 mb-3 flex items-center gap-2">
              <Users className="w-5 h-5" />
              Issues (Задачи)
            </h3>
            <div className="space-y-4 text-gray-300 text-sm">
              <div>
                <p className="font-medium text-gray-400 mb-2">Todo-списки:</p>
                <pre className="bg-gray-800 p-3 rounded"><code>{`- [x] Исследовать проблему
- [ ] Написать тесты
- [ ] Исправить баг
- [ ] Документировать изменения`}</code></pre>
              </div>
              <div>
                <p className="font-medium text-gray-400 mb-2">Цитаты и код:</p>
                <pre className="bg-gray-800 p-3 rounded"><code>{`> Пользователь сообщает об ошибке:

\`\`\`javascript
TypeError: Cannot read property 'name' of undefined
\`\`\``}</code></pre>
              </div>
            </div>
          </div>
          <div className="bg-gray-900/50 p-5 rounded-xl border border-orange-700/30">
            <h3 className="font-bold text-orange-300 mb-3 flex items-center gap-2">
              <GitPullRequest className="w-5 h-5" />
              Pull Requests (Запросы на слияние)
            </h3>
            <div className="space-y-4 text-gray-300 text-sm">
              <div>
                <p className="font-medium text-gray-400 mb-2">Сравнение изменений:</p>
                <pre className="bg-gray-800 p-3 rounded"><code>{`## Что изменилось

- Добавлена новая функция \`getUserInfo()\`
- Исправлена ошибка #123
- Обновлена документация

### Пример использования

\`\`\`javascript
const user = getUserInfo(userId);
console.log(user.name);
\`\`\``}</code></pre>
              </div>
              <div>
                <p className="font-medium text-gray-400 mb-2">Checklist:</p>
                <pre className="bg-gray-800 p-3 rounded"><code>{`## Перед слиянием:
- [x] Код протестирован
- [x] Документация обновлена
- [ ] Code review пройден`}</code></pre>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 bg-gray-900/30 p-4 rounded-lg border border-gray-700">
          <h4 className="font-bold text-white mb-2">Советы по оформлению:</h4>
          <ul className="list-disc pl-5 space-y-2 text-gray-300 text-sm">
            <li>Используйте заголовки для структурирования больших Issues/PR</li>
            <li>Добавляйте кодовые блоки для примеров и ошибок</li>
            <li>Используйте todo-списки для отслеживания прогресса</li>
            <li>Цитируйте релевантные комментарии и сообщения</li>
            <li>Добавляйте скриншоты для визуальных объяснений</li>
          </ul>
        </div>
      </div>

      {/* Интеграции GitHub */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <AtSign className="w-5 h-5 text-pink-400" />
          Интеграции и специальные возможности GitHub
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            GitHub добавляет уникальные возможности в Markdown, которые улучшают взаимодействие и навигацию:
          </p>
        </div>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-gray-900/50 p-4 rounded-xl border border-pink-700/30">
            <h3 className="font-bold text-pink-300 mb-3 flex items-center gap-2">
              <AtSign className="w-5 h-5" />
              @Упоминания
            </h3>
            <div className="space-y-3 text-gray-300 text-sm">
              <p>
                Упоминание пользователя: <code className="bg-gray-700 px-1.5 py-0.5 rounded">@username</code>
              </p>
              <p>
                Упоминание команды: <code className="bg-gray-700 px-1.5 py-0.5 rounded">@organization/team</code>
              </p>
              <div className="bg-gray-800 p-3 rounded">
                <p className="text-gray-400 text-xs mb-1">Пример:</p>
                <p className="text-gray-300">
                  Пожалуйста, @maintainer, проверь этот PR.
                </p>
              </div>
            </div>
          </div>
          <div className="bg-gray-900/50 p-4 rounded-xl border border-yellow-700/30">
            <h3 className="font-bold text-yellow-300 mb-3 flex items-center gap-2">
              <Hash className="w-5 h-5" />
              #Ссылки на задачи
            </h3>
            <div className="space-y-3 text-gray-300 text-sm">
              <p>
                Ссылка на Issue: <code className="bg-gray-700 px-1.5 py-0.5 rounded">#123</code>
              </p>
              <p>
                Ссылка на Issue в другом репозитории: <code className="bg-gray-700 px-1.5 py-0.5 rounded">user/repo#456</code>
              </p>
              <div className="bg-gray-800 p-3 rounded">
                <p className="text-gray-400 text-xs mb-1">Пример:</p>
                <p className="text-gray-300">
                  Исправляет проблему #789 и реализует функцию #101.
                </p>
              </div>
            </div>
          </div>
          <div className="bg-gray-900/50 p-4 rounded-xl border border-green-700/30">
            <h3 className="font-bold text-green-300 mb-3 flex items-center gap-2">
              <span className="bg-green-500/20 w-5 h-5 rounded-full flex items-center justify-center text-xs">✨</span>
              Эмодзи
            </h3>
            <div className="space-y-3 text-gray-300 text-sm">
              <p>
                Стандартные эмодзи: <code className="bg-gray-700 px-1.5 py-0.5 rounded">:smile:</code> 😄
              </p>
              <p>
                Короткие коды: <code className="bg-gray-700 px-1.5 py-0.5 rounded">:+1:</code> 👍
              </p>
              <div className="bg-gray-800 p-3 rounded">
                <p className="text-gray-400 text-xs mb-1">Пример:</p>
                <p className="text-gray-300">
                  Отличная работа! :tada: :rocket:
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-gray-900/50 p-4 rounded-xl border border-blue-700/30">
            <h3 className="font-bold text-blue-300 mb-3">Автоматические ссылки:</h3>
            <div className="space-y-3 text-gray-300 text-sm">
              <p>
                Ссылки на коммиты: <code className="bg-gray-700 px-1.5 py-0.5 rounded">a1b2c3d</code>
              </p>
              <p>
                Ссылки на пользователей: <code className="bg-gray-700 px-1.5 py-0.5 rounded">mojombo</code>
              </p>
              <p>
                URL преобразуются в ссылки автоматически
              </p>
              <div className="bg-gray-800 p-3 rounded">
                <p className="text-gray-400 text-xs mb-1">Пример:</p>
                <p className="text-gray-300">
                  Исправлено в коммите a1b2c3d. Спасибо @contributor!
                </p>
              </div>
            </div>
          </div>
          <div className="bg-gray-900/50 p-4 rounded-xl border border-purple-700/30">
            <h3 className="font-bold text-purple-300 mb-3">Todo-списки:</h3>
            <div className="space-y-3 text-gray-300 text-sm">
              <p>
                Интерактивные чекбоксы в Issues и PR
              </p>
              <div className="bg-gray-800 p-3 rounded">
                <p className="text-gray-400 text-xs mb-1">Синтаксис:</p>
                <pre className="text-gray-300"><code>{`- [ ] Невыполненная задача
- [x] Выполненная задача`}</code></pre>
              </div>
              <div className="bg-gray-800 p-3 rounded">
                <p className="text-gray-400 text-xs mb-1">Пример:</p>
                <p className="text-gray-300">
                  <input type="checkbox" disabled /> Добавить документацию<br />
                  <input type="checkbox" checked disabled /> Написать тесты
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Практические примеры */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Github className="w-5 h-5 text-orange-400" />
          Практические примеры использования GFM
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Вот как можно использовать возможности GFM в реальных сценариях GitHub:
          </p>
        </div>

        <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-gray-900/50 p-4 rounded-xl border border-blue-700/30">
            <h3 className="font-bold text-blue-300 mb-3">Issue Template:</h3>
            <pre className="bg-gray-800 p-3 rounded text-sm text-gray-300"><code>{`## Описание бага

Краткое описание проблемы.

### Шаги для воспроизведения

1. [ ]
2. [ ]
3. [ ]

### Ожидаемое поведение

Что должно происходить.

### Фактическое поведение

Что происходит на самом деле.

### Скриншоты

Если возможно, прикрепите скриншоты.

### Информация о системе

- OS: [например, Windows 10]
- Браузер: [например, Chrome, Safari]
- Версия: [например, 22]`}</code></pre>
          </div>
          <div className="bg-gray-900/50 p-4 rounded-xl border border-green-700/30">
            <h3 className="font-bold text-green-300 mb-3">PR Description:</h3>
            <pre className="bg-gray-800 p-3 rounded text-sm text-gray-300"><code>{`## Что сделано

- Исправлена ошибка #123
- Добавлена новая функция
- Обновлена документация

## Как протестировать

1. Запустить \`npm test\`
2. Проверить работу новой функции

## Скриншоты (если применимо)

![Демонстрация](url/to/image.png)

Cc: @maintainer`}</code></pre>
          </div>
        </div>

        <div className="mt-6 bg-gray-900/30 p-4 rounded-lg border border-gray-700">
          <h4 className="font-bold text-white mb-2">Best Practices:</h4>
          <ul className="list-disc pl-5 space-y-2 text-gray-300 text-sm">
            <li>Используйте эмодзи для визуального выделения важной информации</li>
            <li>Ссылайтесь на связанные Issues и PR для лучшей навигации</li>
            <li>Упоминайте ответственных людей для ускорения процесса</li>
            <li>Используйте таблицы для структурирования сравнений и данных</li>
            <li>Добавляйте todo-списки для отслеживания прогресса</li>
          </ul>
        </div>
      </div>

      {/* Заключение */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <div className="flex items-start gap-3">
          <div className="bg-green-500/20 p-2 rounded-lg flex-shrink-0">
            <Github className="w-5 h-5 text-green-400" />
          </div>
          <div>
            <h3 className="font-bold text-white mb-2">Поздравляем! 🎉</h3>
            <p className="text-gray-300">
              Теперь вы знаете, как использовать Markdown в экосистеме GitHub. Вы научились создавать эффективные README-файлы, 
              использовать расширенные возможности форматирования в Issues и Pull Requests, а также применять интеграции GitHub 
              (упоминания, ссылки на задачи, эмодзи). Эти навыки помогут вам создавать профессиональную документацию и эффективно 
              взаимодействовать с другими разработчиками на GitHub. В следующем уроке мы рассмотрим дополнительные возможности 
              и лучшие практики Markdown.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Part1;
