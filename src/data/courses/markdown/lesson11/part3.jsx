// src/data/courses/markdown/lesson11/part3.jsx
import React from 'react';
import { CheckSquare, Square, ListChecks, Target, Calendar, Edit3 } from 'lucide-react';

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
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">✏️ Практика: Todo-списки в Markdown</h1>
            <p className="text-gray-300">
              <span className="font-medium text-yellow-400">🎯 Цель:</span> Закрепить знания по созданию todo-списков в Markdown, освоить комбинирование их с другими элементами и применять для планирования.
            </p>
          </div>
        </div>
      </div>

      {/* Задание 1 */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
          <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">1</span>
          План изучения Markdown
        </h3>
        <p className="text-gray-300 mb-3">
          Создайте Markdown-документ <code className="bg-gray-700 px-2 py-1 rounded">markdown-learning-plan.md</code> с планом изучения Markdown. Структура:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-gray-300 mb-3">
          <li>Заголовок 1 уровня "План изучения Markdown"</li>
          <li>Раздел "Основы" с заголовком 2 уровня и todo-списком базовых тем</li>
          <li>Раздел "Продвинутые возможности" с заголовком 2 уровня и todo-списком сложных тем</li>
          <li>Раздел "Практика" с заголовком 2 уровня и todo-списком практических заданий</li>
          <li>Используйте комбинацию выполненных и невыполненных задач</li>
          <li>Создайте вложенные задачи для детализации некоторых пунктов</li>
        </ul>
        <details className="group">
          <summary className="cursor-pointer text-sm text-gray-400 hover:text-gray-300 flex items-center gap-1">
            <span>Подсказка</span>
            <svg className="w-4 h-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </summary>
          <div className="mt-2 p-3 bg-gray-900/50 rounded text-sm text-gray-300">
            <p>Пример вложенной задачи: - [ ] Изучить списки, - [ ] Маркированные списки, - [ ] Нумерованные списки</p>
          </div>
        </details>
      </div>

      {/* Задание 2 */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
          <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">2</span>
          Управление проектом разработки
        </h3>
        <p className="text-gray-300 mb-3">
          Создайте файл <code className="bg-gray-700 px-2 py-1 rounded">project-todo.md</code> - список задач для вымышленного проекта разработки веб-приложения. Включите:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-gray-300 mb-3">
          <li>Заголовок 1 уровня "Проект: Веб-приложение 'TaskMaster'"</li>
          <li>Разделы для разных ролей: "Frontend разработка", "Backend разработка", "Тестирование", "Документация"</li>
          <li>Каждый раздел должен иметь заголовок 2 уровня и соответствующий todo-список задач</li>
          <li>Используйте вложенные задачи для подзадач</li>
          <li>Отметьте выполненные задачи реалистично (примерно 30-50%)</li>
          <li>Добавьте горизонтальные разделители между разделами ролей</li>
        </ul>
        <details className="group">
          <summary className="cursor-pointer text-sm text-gray-400 hover:text-gray-300 flex items-center gap-1">
            <span>Подсказка</span>
            <svg className="w-4 h-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </summary>
          <div className="mt-2 p-3 bg-gray-900/50 rounded text-sm text-gray-300">
            <p>Используйте --- для горизонтальных разделителей. Для вложенных задач используйте отступ из 2 пробелов.</p>
          </div>
        </details>
      </div>

      {/* Задание 3 */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
          <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">3</span>
          Анализ и исправление todo-списков
        </h3>
        <p className="text-gray-300 mb-3">
          Ниже приведен Markdown-документ с ошибками в todo-списках. Найдите и исправьте все ошибки:
        </p>
        <div className="bg-gray-900 p-4 rounded-lg my-3">
          <pre className="text-red-300 text-sm">
            <code>{`# Список задач на спринт

## Обязательные задачи
- [ ] Реализовать авторизацию
- [x] Создать базу данных
- [ ] Разработать API
- [-] Написать тесты
- [ ] Задеплоить приложение

## Дополнительные задачи
- [g] Провести код-ревью
  - [x] Проверить фронтенд
  - [ ] Проверить бэкенд
- [ ] Подготовить документацию
  - [x] API документация
  - [ ] Руководство пользователя`}</code>
          </pre>
        </div>
        <p className="text-gray-300 mb-3">
          Создайте исправленную версию документа в новом файле <code className="bg-gray-700 px-2 py-1 rounded">corrected-todo.md</code> и объясните найденные ошибки.
        </p>
        <details className="group">
          <summary className="cursor-pointer text-sm text-gray-400 hover:text-gray-300 flex items-center gap-1">
            <span>Подсказка</span>
            <svg className="w-4 h-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </summary>
          <div className="mt-2 p-3 bg-gray-900/50 rounded text-sm text-gray-300">
            <p>Обратите внимание на: неправильные символы в квадратных скобках, отсутствие пробелов, правильность вложенных списков.</p>
          </div>
        </details>
      </div>

      {/* Задание 4 */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
          <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">4</span>
          Личный ежедневник задач
        </h3>
        <p className="text-gray-300 mb-3">
          Создайте документ <code className="bg-gray-700 px-2 py-1 rounded">daily-planner.md</code> - ежедневный план на неделю с todo-списками. Требования:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-gray-300 mb-3">
          <li>Заголовок 1 уровня "Ежедневный план на неделю"</li>
          <li>Для каждого дня недели создайте заголовок 2 уровня</li>
          <li>В каждом дне создайте todo-список задач на этот день</li>
          <li>Используйте комбинацию выполненных и невыполненных задач</li>
          <li>Добавьте категории задач: "Работа", "Личное", "Здоровье"</li>
          <li>Используйте вложенные задачи для разбиения крупных задач</li>
          <li>Добавьте общий прогресс в конце документа (например: "Прогресс: 12/20 задач выполнено")</li>
        </ul>
        <details className="group">
          <summary className="cursor-pointer text-sm text-gray-400 hover:text-gray-300 flex items-center gap-1">
            <span>Подсказка</span>
            <svg className="w-4 h-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </summary>
          <div className="mt-2 p-3 bg-gray-900/50 rounded text-sm text-gray-300">
            <p>Для подсчета прогресса вручную подсчитайте количество выполненных и общих задач. Прогресс можно обновлять вручную.</p>
          </div>
        </details>
      </div>

      {/* Задание 5 */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
          <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">5</span>
          Эксперимент с форматированием todo-списков
        </h3>
        <p className="text-gray-300 mb-3">
          Создайте документ <code className="bg-gray-700 px-2 py-1 rounded">todo-experiment.md</code>, демонстрирующий различные способы использования todo-списков:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-gray-300 mb-3">
          <li>Todo-списки с использованием разных маркеров (* и -)</li>
          <li>Todo-списки с форматированием внутри задач (жирный текст, ссылки, код)</li>
          <li>Комбинированные списки с обычными пунктами и todo-пунктами</li>
          <li>Вложенные todo-списки с разной глубиной вложенности</li>
          <li>Todo-списки с горизонтальными разделителями между секциями</li>
          <li>Примеры todo-списков, которые можно использовать в разных контекстах (работа, учеба, личное)</li>
        </ul>
        <p className="text-gray-300">
          Добавьте пояснения к каждому примеру, объясняя, где и почему вы бы использовали такой подход.
        </p>
      </div>

      {/* Заключение */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <div className="flex items-start gap-3">
          <div className="bg-green-500/20 p-2 rounded-lg flex-shrink-0">
            <CheckSquare className="w-5 h-5 text-green-400" />
          </div>
          <div>
            <h3 className="font-bold text-white mb-2">Отличная работа! 🎉</h3>
            <p className="text-gray-300">
              Эти задания помогли вам закрепить навыки создания todo-списков в Markdown. 
              Вы научились комбинировать их с другими элементами форматирования, создавать сложные структуры задач и использовать для планирования. 
              Todo-списки - отличный инструмент для организации работы, учебы и личных дел, особенно в среде разработки.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Part3;
