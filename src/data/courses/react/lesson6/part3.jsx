// src/data/courses/react/lesson6/part3.jsx
import React from 'react';
import { List, Key, Hash, Play, Terminal } from 'lucide-react';

const Part3 = () => {
  return (
    <div className="space-y-8 text-gray-200">
      {/* Вступление */}
      <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 backdrop-blur-sm border border-blue-700/30 rounded-2xl p-6 shadow-lg">
        <div className="flex items-start gap-4">
          <div className="bg-blue-500/20 p-3 rounded-lg">
            <Terminal className="w-6 h-6 text-blue-400" />
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">✏️ Практика: Работа со списками и ключи</h1>
            <p className="text-gray-300">
              <span className="font-medium text-yellow-400">🎯 Цель:</span> Закрепить знания по рендерингу списков в React и правильному использованию ключей через практические задания различной сложности.
            </p>
          </div>
        </div>
      </div>

      {/* Задание 1 */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
          <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">1</span>
          Список покупок с уникальными ключами
        </h3>
        <p className="text-gray-300 mb-3">
          Создайте компонент <code className="bg-gray-700 px-1.5 py-0.5 rounded text-green-300">ShoppingList</code>, который отображает список покупок:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-gray-300 mb-3">
          <li>Используйте массив объектов с полями <code className="bg-gray-700 px-1 rounded">id</code>, <code className="bg-gray-700 px-1 rounded">name</code>, <code className="bg-gray-700 px-1 rounded">quantity</code>.</li>
          <li>Создайте начальный массив из 5-7 элементов (например, "Молоко", "Хлеб", "Яйца" и т.д.).</li>
          <li>Отобразите список с использованием <code className="bg-gray-700 px-1 rounded">.map()</code> и уникальных <code className="bg-gray-700 px-1 rounded">id</code> в качестве ключей.</li>
          <li>Для каждого элемента отобразите название и количество.</li>
          <li>Добавьте кнопку "Удалить" для каждого элемента списка, которая удаляет элемент из массива.</li>
          <li>Реализуйте добавление новых элементов через форму ввода.</li>
        </ul>
        <details className="group">
          <summary className="cursor-pointer text-sm text-gray-400 hover:text-gray-300 flex items-center gap-1">
            <span>Подсказка</span>
            <svg className="w-4 h-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </summary>
          <div className="mt-2 p-3 bg-gray-900/50 rounded text-sm text-gray-300">
            <p>Для генерации уникальных ID можно использовать <code className="bg-gray-700 px-1 rounded">Date.now()</code> или библиотеку <code className="bg-gray-700 px-1 rounded">uuid</code>. Для удаления: <code className="bg-gray-700 px-1 rounded">{`setItems(items.filter(item => item.id !== id))`}</code>.</p>
          </div>
        </details>
      </div>

      {/* Задание 2 */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
          <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">2</span>
          Список пользователей с фильтрацией и сортировкой
        </h3>
        <p className="text-gray-300 mb-3">
          Создайте компонент <code className="bg-gray-700 px-1 rounded">UserDirectory</code>, который отображает список пользователей с возможностью фильтрации и сортировки:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-gray-300 mb-3">
          <li>Используйте массив объектов пользователей с полями: <code className="bg-gray-700 px-1 rounded">id</code>, <code className="bg-gray-700 px-1 rounded">name</code>, <code className="bg-gray-700 px-1 rounded">email</code>, <code className="bg-gray-700 px-1 rounded">role</code> ("admin", "user", "moderator").</li>
          <li>Создайте начальный массив из 8-10 пользователей.</li>
          <li>Отобразите список пользователей с использованием <code className="bg-gray-700 px-1 rounded">.map()</code> и <code className="bg-gray-700 px-1 rounded">id</code> в качестве ключей.</li>
          <li>Добавьте выпадающий список (select) для фильтрации по роли.</li>
          <li>Добавьте кнопки для сортировки по имени (по возрастанию/убыванию).</li>
          <li>Добавьте поле поиска, которое фильтрует пользователей по имени или email.</li>
          <li>Отобразите общее количество отфильтрованных пользователей.</li>
        </ul>
        <details className="group">
          <summary className="cursor-pointer text-sm text-gray-400 hover:text-gray-300 flex items-center gap-1">
            <span>Подсказка</span>
            <svg className="w-4 h-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </summary>
          <div className="mt-2 p-3 bg-gray-900/50 rounded text-sm text-gray-300">
            <p>Применяйте фильтрацию и сортировку до рендеринга: <code className="bg-gray-700 px-1 rounded">const filteredAndSortedUsers = users.filter(...).sort(...);</code> Затем используйте <code className="bg-gray-700 px-1 rounded">.map()</code> на результате.</p>
          </div>
        </details>
      </div>

      {/* Задание 3 */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
          <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">3</span>
          Динамический список с различными типами элементов
        </h3>
        <p className="text-gray-300 mb-3">
          Создайте компонент <code className="bg-gray-700 px-1 rounded">DynamicContentList</code>, который отображает список элементов разных типов:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-gray-300 mb-3">
          <li>Используйте массив объектов с полями <code className="bg-gray-700 px-1 rounded">id</code>, <code className="bg-gray-700 px-1 rounded">type</code>, <code className="bg-gray-700 px-1 rounded">content</code>.</li>
          <li>Поддерживаемые типы: "text" (простой текст), "header" (заголовок h3), "image" (изображение с URL), "link" (ссылка с URL и текстом).</li>
          <li>Создайте начальный массив из 6-8 элементов разных типов.</li>
          <li>Реализуйте функцию <code className="bg-gray-700 px-1 rounded">renderItem</code>, которая возвращает соответствующий JSX-элемент в зависимости от типа.</li>
          <li>Используйте <code className="bg-gray-700 px-1 rounded">.map()</code> с вызовом <code className="bg-gray-700 px-1 rounded">renderItem</code> и уникальными <code className="bg-gray-700 px-1 rounded">id</code> в качестве ключей.</li>
          <li>Добавьте возможность добавления новых элементов каждого типа через форму.</li>
          <li>Добавьте кнопку "Удалить" для каждого элемента.</li>
        </ul>
        <details className="group">
          <summary className="cursor-pointer text-sm text-gray-400 hover:text-gray-300 flex items-center gap-1">
            <span>Подсказка</span>
            <svg className="w-4 h-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </summary>
          <div className="mt-2 p-3 bg-gray-900/50 rounded text-sm text-gray-300">
            <p>В <code className="bg-gray-700 px-1 rounded">renderItem</code> используйте <code className="bg-gray-700 px-1 rounded">switch</code> для определения типа элемента. Для ссылок объект может содержать <code className="bg-gray-700 px-1 rounded">{'{ type: "link", content: { url: "...", text: "..." } }'}</code>.</p>
          </div>
        </details>
      </div>

      {/* Задание 4 */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
          <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">4</span>
          Список задач с вложенными подзадачами
        </h3>
        <p className="text-gray-300 mb-3">
          Создайте компонент <code className="bg-gray-700 px-1 rounded">NestedTodoList</code>, который отображает список задач с возможностью добавления подзадач:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-gray-300 mb-3">
          <li>Используйте массив объектов задач с полями: <code className="bg-gray-700 px-1 rounded">id</code>, <code className="bg-gray-700 px-1 rounded">text</code>, <code className="bg-gray-700 px-1 rounded">completed</code>, <code className="bg-gray-700 px-1 rounded">subtasks</code> (массив подзадач).</li>
          <li>Каждая подзадача также имеет поля: <code className="bg-gray-700 px-1 rounded">id</code>, <code className="bg-gray-700 px-1 rounded">text</code>, <code className="bg-gray-700 px-1 rounded">completed</code>.</li>
          <li>Создайте начальный массив из 3-5 задач, каждая с 2-4 подзадачами.</li>
          <li>Отобразите задачи и их подзадачи с правильной вложенностью.</li>
          <li>Используйте уникальные ключи для всех элементов (и задач, и подзадач).</li>
          <li>Реализуйте переключение статуса выполнения для задач и подзадач.</li>
          <li>Добавьте возможность добавления новых задач и подзадач.</li>
          <li>Добавьте кнопку удаления для задач (удаляет и все подзадачи) и подзадач.</li>
        </ul>
        <details className="group">
          <summary className="cursor-pointer text-sm text-gray-400 hover:text-gray-300 flex items-center gap-1">
            <span>Подсказка</span>
            <svg className="w-4 h-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </summary>
          <div className="mt-2 p-3 bg-gray-900/50 rounded text-sm text-gray-300">
            <p>Для подзадач используйте вложенный <code className="bg-gray-700 px-1 rounded">.map()</code>. Ключи должны быть уникальны в пределах своего уровня вложенности. Для добавления подзадачи: <code className="bg-gray-700 px-1 rounded">{`setTasks(tasks.map(task => task.id === taskId ? {'{'}...task, subtasks: [...task.subtasks, newSubtask]{'}'} : task))`}</code>.</p>
          </div>
        </details>
      </div>

      {/* Задание 5 */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
          <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">5</span>
          Комплексный список с_drag and drop и анимациями
        </h3>
        <p className="text-gray-300 mb-3">
          Создайте компонент <code className="bg-gray-700 px-1 rounded">AdvancedList</code>, который реализует продвинутый список с возможностью перетаскивания и анимациями:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-gray-300 mb-3">
          <li>Используйте массив объектов с полями: <code className="bg-gray-700 px-1 rounded">id</code>, <code className="bg-gray-700 px-1 rounded">title</code>, <code className="bg-gray-700 px-1 rounded">description</code>, <code className="bg-gray-700 px-1 rounded">priority</code> ("low", "medium", "high").</li>
          <li>Создайте начальный массив из 6-8 элементов.</li>
          <li>Отобразите список с использованием <code className="bg-gray-700 px-1 rounded">.map()</code> и уникальных <code className="bg-gray-700 px-1 rounded">id</code> в качестве ключей.</li>
          <li>Реализуйте базовую функциональность drag and drop для изменения порядка элементов (можно использовать библиотеку <code className="bg-gray-700 px-1 rounded">react-beautiful-dnd</code> или реализовать вручную).</li>
          <li>Добавьте цветовую индикацию приоритета (например, красный для высокого, желтый для среднего, зеленый для низкого).</li>
          <li>Реализуйте анимации при добавлении/удалении элементов (например, с помощью CSS transitions).</li>
          <li>Добавьте возможность редактирования элементов по клику (перевод в режим редактирования).</li>
          <li>Реализуйте пагинацию или виртуальный скролл для списков с большим количеством элементов (опционально).</li>
        </ul>
        <details className="group">
          <summary className="cursor-pointer text-sm text-gray-400 hover:text-gray-300 flex items-center gap-1">
            <span>Подсказка</span>
            <svg className="w-4 h-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </summary>
          <div className="mt-2 p-3 bg-gray-900/50 rounded text-sm text-gray-300">
            <p>Для анимаций можно использовать CSS-классы с <code className="bg-gray-700 px-1 rounded">transition</code> или библиотеки типа <code className="bg-gray-700 px-1 rounded">framer-motion</code>. Для drag and drop изучите HTML5 Drag and Drop API или используйте готовые решения.</p>
          </div>
        </details>
      </div>

      {/* Заключение */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <div className="flex items-start gap-3">
          <div className="bg-green-500/20 p-2 rounded-lg flex-shrink-0">
            <List className="w-5 h-5 text-green-400" />
          </div>
          <div>
            <h3 className="font-bold text-white mb-2">Отличная работа! 🎉</h3>
            <p className="text-gray-300">
              Эти задания помогли вам закрепить навыки рендеринга списков в React и правильного использования ключей. Вы научились работать с массивами данных, применять метод <code className="bg-gray-700 px-1 rounded">.map()</code> для создания списков элементов, выбирать правильные значения для ключей (предпочтительно уникальные ID), реализовывать фильтрацию, сортировку и поиск по спискам, создавать вложенные списки с правильной структурой ключей, а также добавлять интерактивные функции как удаление, редактирование и перетаскивание элементов. Понимание и правильное применение концепции ключей является критически важным для производительности и корректной работы списков в React-приложениях.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Part3;