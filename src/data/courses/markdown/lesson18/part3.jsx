// src/data/courses/markdown/lesson18/part3.jsx
import React from 'react';
import { Github, FileText, Users, GitPullRequest, Edit3 } from 'lucide-react';

const Part3 = () => {
  return (
    <div className="space-y-8 text-gray-200">
      {/* Вступление */}
      <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 backdrop-blur-sm border border-blue-700/30 rounded-2xl p-6 shadow-lg">
        <div className="flex items-start gap-4">
          <div className="bg-blue-500/20 p-3 rounded-lg">
            <Edit3 className="w-6 h-6 text-blue-400" />
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">✏️ Практика: Markdown в GitHub</h1>
            <p className="text-gray-300">
              <span className="font-medium text-yellow-400">🎯 Цель:</span> Закрепить знания по использованию Markdown в экосистеме GitHub, создавая README, Issues и Pull Requests с использованием расширенных возможностей GFM.
            </p>
          </div>
        </div>
      </div>

      {/* Задание 1 */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
          <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">1</span>
          Создание профессионального README.md
        </h3>
        <p className="text-gray-300 mb-3">
          Создайте Markdown-файл <code className="bg-gray-700 px-2 py-1 rounded">README.md</code> для вымышленного проекта "TaskMaster" - приложения для управления задачами. Включите:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-gray-300 mb-3">
          <li>Заголовок 1 уровня с названием проекта и эмодзи</li>
          <li>Краткое описание проекта с упоминанием ключевых функций</li>
          <li>Бейджи статуса (используйте фиктивные ссылки в формате изображений)</li>
          <li>Оглавление с ссылками на разделы</li>
          <li>Раздел "Возможности" с таблицей возможностей и статусом (✅, ⏳, ❌)</li>
          <li>Раздел "Установка" с пошаговыми инструкциями в кодовых блоках</li>
          <li>Раздел "Использование" с примерами кода</li>
          <li>Раздел "Вклад в проект" с инструкциями для контрибьюторов</li>
          <li>Раздел "Лицензия" с упоминанием лицензии MIT</li>
          <li>Раздел "Авторы" с упоминаниями пользователей GitHub (@username)</li>
        </ul>
        <details className="group">
          <summary className="cursor-pointer text-sm text-gray-400 hover:text-gray-300 flex items-center gap-1">
            <span>Подсказка</span>
            <svg className="w-4 h-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </summary>
          <div className="mt-2 p-3 bg-gray-900/50 rounded text-sm text-gray-300">
            <p>Используйте эмодзи для визуального выделения: 🚀, ✨, 🔧, 📝. Для бейджей используйте синтаксис изображений: <code className="bg-gray-700 px-1 py-0.5 rounded">![alt](url)</code></p>
          </div>
        </details>
      </div>

      {/* Задание 2 */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
          <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">2</span>
          Шаблон Issue для баг-репорта
        </h3>
        <p className="text-gray-300 mb-3">
          Создайте файл <code className="bg-gray-700 px-2 py-1 rounded">ISSUE_TEMPLATE.md</code> - шаблон для создания новых Issues в репозитории. Шаблон должен включать:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-gray-300 mb-3">
          <li>Заголовок 1 уровня "🐛 Баг-репорт"</li>
          <li>Краткое описание шаблона</li>
          <li>Раздел "Описание бага" с заголовком 2 уровня</li>
          <li>Пояснение, что нужно описать в этом разделе</li>
          <li>Раздел "Шаги для воспроизведения" с заголовком 2 уровня</li>
          <li>Todo-список с пунктами для заполнения</li>
          <li>Раздел "Ожидаемое поведение" с заголовком 2 уровня</li>
          <li>Пояснение, что должно происходить</li>
          <li>Раздел "Фактическое поведение" с заголовком 2 уровня</li>
          <li>Пояснение, что происходит на самом деле</li>
          <li>Раздел "Скриншоты" с заголовком 2 уровня</li>
          <li>Инструкцию по прикреплению скриншотов</li>
          <li>Раздел "Информация о системе" с заголовком 2 уровня</li>
          <li>Список параметров системы для заполнения</li>
          <li>Упоминание мейнтейнера проекта (@maintainer)</li>
        </ul>
        <details className="group">
          <summary className="cursor-pointer text-sm text-gray-400 hover:text-gray-300 flex items-center gap-1">
            <span>Подсказка</span>
            <svg className="w-4 h-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </summary>
          <div className="mt-2 p-3 bg-gray-900/50 rounded text-sm text-gray-300">
            <p>Используйте todo-списки для шагов воспроизведения: <code className="bg-gray-700 px-1 py-0.5 rounded">- [ ] Шаг 1</code>. Добавьте эмодзи 🐛 для визуального выделения.</p>
          </div>
        </details>
      </div>

      {/* Задание 3 */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
          <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">3</span>
          Описание Pull Request
        </h3>
        <p className="text-gray-300 mb-3">
          Создайте файл <code className="bg-gray-700 px-2 py-1 rounded">pull-request.md</code> - пример описания Pull Request для исправления бага и добавления новой функции. Включите:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-gray-300 mb-3">
          <li>Заголовок 1 уровня "🔧 Исправление бага #123 и добавление функции поиска"</li>
          <li>Раздел "Что сделано" с заголовком 2 уровня</li>
          <li>Маркированный список выполненных изменений</li>
          <li>Todo-список с оставшимися задачами</li>
          <li>Раздел "Как протестировать" с заголовком 2 уровня</li>
          <li>Нумерованный список шагов для тестирования</li>
          <li>Раздел "Скриншоты (если применимо)" с заголовком 2 уровня</li>
          <li>Пояснение о необходимости скриншотов</li>
          <li>Раздел "Связанные задачи" с заголовком 2 уровня</li>
          <li>Ссылки на связанные Issues с использованием #номер</li>
          <li>Упоминание ревьюера (@reviewer) и мейнтейнера (@maintainer)</li>
        </ul>
        <details className="group">
          <summary className="cursor-pointer text-sm text-gray-400 hover:text-gray-300 flex items-center gap-1">
            <span>Подсказка</span>
            <svg className="w-4 h-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </summary>
          <div className="mt-2 p-3 bg-gray-900/50 rounded text-sm text-gray-300">
            <p>Используйте ссылки на Issues: <code className="bg-gray-700 px-1 py-0.5 rounded">#123</code>. Добавьте эмодзи 🔧 и ✨ для визуального выделения разделов.</p>
          </div>
        </details>
      </div>

      {/* Задание 4 */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
          <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">4</span>
          Комплексный проект с документацией
        </h3>
        <p className="text-gray-300 mb-3">
          Создайте структуру документации для вымышленного проекта "WeatherApp" в директории <code className="bg-gray-700 px-2 py-1 rounded">weather-app-docs/</code>. Структура:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-gray-300 mb-3">
          <li>Файл <code className="bg-gray-700 px-2 py-1 rounded">README.md</code> - основная документация проекта</li>
          <li>Директория <code className="bg-gray-700 px-2 py-1 rounded">docs/</code> с дополнительными документами</li>
          <li>Файл <code className="bg-gray-700 px-2 py-1 rounded">docs/CONTRIBUTING.md</code> - руководство для контрибьюторов</li>
          <li>Файл <code className="bg-gray-700 px-2 py-1 rounded">docs/CODE_OF_CONDUCT.md</code> - кодекс поведения</li>
          <li>Файл <code className="bg-gray-700 px-2 py-1 rounded">.github/ISSUE_TEMPLATE/bug_report.md</code> - шаблон баг-репорта</li>
          <li>Файл <code className="bg-gray-700 px-2 py-1 rounded">.github/ISSUE_TEMPLATE/feature_request.md</code> - шаблон запроса функции</li>
        </ul>
        <p className="text-gray-300 mb-3">
          Каждый файл должен использовать расширенные возможности GFM:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-gray-300 mb-3">
          <li>Таблицы для структурирования информации</li>
          <li>Todo-списки для отслеживания прогресса</li>
          <li>Кодовые блоки с подсветкой синтаксиса</li>
          <li>Упоминания пользователей (@username)</li>
          <li>Ссылки на Issues и Pull Requests (#номер)</li>
          <li>Эмодзи для визуального оформления</li>
          <li>Цитаты для важной информации</li>
        </ul>
        <details className="group">
          <summary className="cursor-pointer text-sm text-gray-400 hover:text-gray-300 flex items-center gap-1">
            <span>Подсказка</span>
            <svg className="w-4 h-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </summary>
          <div className="mt-2 p-3 bg-gray-900/50 rounded text-sm text-gray-300">
            <p>Используйте разные уровни заголовков для создания иерархии. Добавьте горизонтальные линии для разделения секций: <code className="bg-gray-700 px-1 py-0.5 rounded">---</code></p>
          </div>
        </details>
      </div>

      {/* Задание 5 */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
          <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">5</span>
          Эксперимент с расширенными возможностями GFM
        </h3>
        <p className="text-gray-300 mb-3">
          Создайте файл <code className="bg-gray-700 px-2 py-1 rounded">gfm-experiment.md</code>, демонстрирующий все изученные возможности GitHub Flavored Markdown:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-gray-300 mb-3">
          <li>Таблицы с разными типами данных</li>
          <li>Зачеркнутый текст</li>
          <li>Автоматические ссылки</li>
          <li>Эмодзи в разных контекстах</li>
          <li>Упоминания пользователей и команд</li>
          <li>Ссылки на Issues и Pull Requests</li>
          <li>Todo-списки с разными состояниями</li>
          <li>Цитаты с вложенными элементами</li>
          <li>Кодовые блоки с разными языками</li>
          <li>Списки с вложенными элементами</li>
        </ul>
        <p className="text-gray-300">
          Добавьте пояснения к каждому примеру, объясняя, где и почему вы использовали ту или иную возможность GFM.
        </p>
      </div>

      {/* Заключение */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <div className="flex items-start gap-3">
          <div className="bg-green-500/20 p-2 rounded-lg flex-shrink-0">
            <Github className="w-5 h-5 text-green-400" />
          </div>
          <div>
            <h3 className="font-bold text-white mb-2">Отличная работа! 🎉</h3>
            <p className="text-gray-300">
              Эти задания помогли вам закрепить навыки использования Markdown в экосистеме GitHub. 
              Вы научились создавать профессиональные README-файлы, шаблоны Issues и описания Pull Requests с использованием расширенных возможностей GFM. 
              Вы освоили упоминания пользователей, ссылки на задачи, эмодзи и todo-списки. 
              Эти навыки важны для эффективной работы в команде разработчиков и создания качественной документации на GitHub.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Part3;
