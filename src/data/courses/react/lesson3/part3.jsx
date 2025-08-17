// src/data/courses/react/lesson3/part3.jsx
import React from 'react';
import { Code, Puzzle, Settings, Play, FileText, Terminal } from 'lucide-react';

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
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">✏️ Практика: Компоненты и пропсы</h1>
            <p className="text-gray-300">
              <span className="font-medium text-yellow-400">🎯 Цель:</span> Закрепить знания по созданию компонентов и работе с пропсами в React через практические задания.
            </p>
          </div>
        </div>
      </div>

      {/* Задание 1 */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
          <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">1</span>
          Создание простого компонента приветствия
        </h3>
        <p className="text-gray-300 mb-3">
          Создайте функциональный компонент <code className="bg-gray-700 px-1.5 py-0.5 rounded text-green-300">WelcomeMessage</code>, который:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-gray-300 mb-3">
          <li>Принимает пропс <code className="bg-gray-700 px-1 rounded">name</code> (строка).</li>
          <li>Возвращает JSX с заголовком <code className="bg-gray-700 px-1 rounded">{'<h1>'}</code>, содержащим текст "Добро пожаловать, [имя]!", где [имя] — значение пропса.</li>
          <li>Используйте деструктуризацию для получения пропса <code className="bg-gray-700 px-1 rounded">name</code>.</li>
          <li>Создайте ещё один компонент <code className="bg-gray-700 px-1 rounded">App</code>, который использует <code className="bg-gray-700 px-1 rounded">WelcomeMessage</code> и передаёт в него ваше имя.</li>
        </ul>
        <details className="group">
          <summary className="cursor-pointer text-sm text-gray-400 hover:text-gray-300 flex items-center gap-1">
            <span>Подсказка</span>
            <svg className="w-4 h-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </summary>
          <div className="mt-2 p-3 bg-gray-900/50 rounded text-sm text-gray-300">
            <p>Синтаксис деструктуризации: <code className="bg-gray-700 px-1 rounded">function WelcomeMessage({ name }) {'{'}</code>. Для передачи пропса: <code className="bg-gray-700 px-1 rounded">{'<WelcomeMessage name="Ваше имя" />'}</code>.</p>
          </div>
        </details>
      </div>

      {/* Задание 2 */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
          <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">2</span>
          Компонент карточки пользователя
        </h3>
        <p className="text-gray-300 mb-3">
          Создайте компонент <code className="bg-gray-700 px-1 rounded">UserCard</code>, который отображает информацию о пользователе:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-gray-300 mb-3">
          <li>Принимает пропсы: <code className="bg-gray-700 px-1 rounded">name</code> (строка), <code className="bg-gray-700 px-1 rounded">age</code> (число), <code className="bg-gray-700 px-1 rounded">email</code> (строка), <code className="bg-gray-700 px-1 rounded">isActive</code> (булево значение).</li>
          <li>Используйте деструктуризацию для получения всех пропсов.</li>
          <li>Отобразите имя в заголовке <code className="bg-gray-700 px-1 rounded">{'<h2>'}</code>.</li>
          <li>Отобразите возраст и email в абзацах <code className="bg-gray-700 px-1 rounded">{'<p>'}</code>.</li>
          <li>Используйте условный рендеринг для отображения статуса пользователя:
            <ul className="list-circle pl-5 mt-1">
              <li>Если <code className="bg-gray-700 px-1 rounded">isActive</code> равно <code className="bg-gray-700 px-1 rounded">true</code>: <code className="bg-gray-700 px-1 rounded">{'<span style={{ color: "green" }}>Активен</span>'}</code></li>
              <li>Если <code className="bg-gray-700 px-1 rounded">isActive</code> равно <code className="bg-gray-700 px-1 rounded">false</code>: <code className="bg-gray-700 px-1 rounded">{'<span style={{ color: "red" }}>Неактивен</span>'}</code></li>
            </ul>
          </li>
          <li>Создайте компонент <code className="bg-gray-700 px-1 rounded">App</code>, который отображает несколько <code className="bg-gray-700 px-1 rounded">UserCard</code> с разными данными.</li>
        </ul>
        <details className="group">
          <summary className="cursor-pointer text-sm text-gray-400 hover:text-gray-300 flex items-center gap-1">
            <span>Подсказка</span>
            <svg className="w-4 h-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </summary>
          <div className="mt-2 p-3 bg-gray-900/50 rounded text-sm text-gray-300">
            <p>Для условного рендеринга можно использовать тернарный оператор: <code className="bg-gray-700 px-1 rounded">{'{isActive ? <span>Активен</span> : <span>Неактивен</span>}'}</code>.</p>
          </div>
        </details>
      </div>

      {/* Задание 3 */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
          <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">3</span>
          Компонент кнопки с настройками
        </h3>
        <p className="text-gray-300 mb-3">
          Создайте универсальный компонент <code className="bg-gray-700 px-1 rounded">CustomButton</code>:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-gray-300 mb-3">
          <li>Принимает пропсы: <code className="bg-gray-700 px-1 rounded">text</code> (строка), <code className="bg-gray-700 px-1 rounded">variant</code> (строка: "primary" или "secondary"), <code className="bg-gray-700 px-1 rounded">onClick</code> (функция), <code className="bg-gray-700 px-1 rounded">disabled</code> (булево значение, по умолчанию <code className="bg-gray-700 px-1 rounded">false</code>).</li>
          <li>Используйте деструктуризацию с значениями по умолчанию для <code className="bg-gray-700 px-1 rounded">disabled</code>.</li>
          <li>Стилизуйте кнопку в зависимости от <code className="bg-gray-700 px-1 rounded">variant</code>:
            <ul className="list-circle pl-5 mt-1">
              <li>"primary": синий фон, белый текст</li>
              <li>"secondary": серый фон, белый текст</li>
            </ul>
          </li>
          <li>Если <code className="bg-gray-700 px-1 rounded">disabled</code> равно <code className="bg-gray-700 px-1 rounded">true</code>, добавьте стиль <code className="bg-gray-700 px-1 rounded">opacity: 0.5</code> и не передавайте <code className="bg-gray-700 px-1 rounded">onClick</code>.</li>
          <li>Создайте компонент <code className="bg-gray-700 px-1 rounded">App</code>, демонстрирующий использование <code className="bg-gray-700 px-1 rounded">CustomButton</code> с разными вариантами и состояниями.</li>
        </ul>
        <details className="group">
          <summary className="cursor-pointer text-sm text-gray-400 hover:text-gray-300 flex items-center gap-1">
            <span>Подсказка</span>
            <svg className="w-4 h-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </summary>
          <div className="mt-2 p-3 bg-gray-900/50 rounded text-sm text-gray-300">
            <p>Значения по умолчанию: <code className="bg-gray-700 px-1 rounded">{`function CustomButton({ disabled = false, ... }) {'{'}`}</code>. Для условных стилей можно использовать шаблонные строки или объекты.</p>
          </div>
        </details>
      </div>

      {/* Задание 4 */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
          <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">4</span>
          Компонент списка задач
        </h3>
        <p className="text-gray-300 mb-3">
          Создайте компонент <code className="bg-gray-700 px-1 rounded">TodoList</code>, который отображает список задач:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-gray-300 mb-3">
          <li>Принимает пропс <code className="bg-gray-700 px-1 rounded">todos</code> — массив объектов задач, где каждый объект имеет свойства <code className="bg-gray-700 px-1 rounded">id</code>, <code className="bg-gray-700 px-1 rounded">text</code>, <code className="bg-gray-700 px-1 rounded">completed</code>.</li>
          <li>Используйте деструктуризацию для получения пропса <code className="bg-gray-700 px-1 rounded">todos</code>.</li>
          <li>Отобразите заголовок "Список задач".</li>
          <li>Используйте метод <code className="bg-gray-700 px-1 rounded">.map()</code> для рендеринга списка задач.</li>
          <li>Каждая задача должна отображаться в <code className="bg-gray-700 px-1 rounded">{'<li>'}</code> с уникальным ключом <code className="bg-gray-700 px-1 rounded">key={'{todo.id}'}</code>.</li>
          <li>Текст задачи должен быть зачёркнут, если <code className="bg-gray-700 px-1 rounded">completed</code> равно <code className="bg-gray-700 px-1 rounded">true</code> (используйте inline-стиль <code className="bg-gray-700 px-1 rounded">textDecoration: 'line-through'</code>).</li>
          <li>Создайте компонент <code className="bg-gray-700 px-1 rounded">App</code> с массивом задач и передайте его в <code className="bg-gray-700 px-1 rounded">TodoList</code>.</li>
        </ul>
        <details className="group">
          <summary className="cursor-pointer text-sm text-gray-400 hover:text-gray-300 flex items-center gap-1">
            <span>Подсказка</span>
            <svg className="w-4 h-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </summary>
          <div className="mt-2 p-3 bg-gray-900/50 rounded text-sm text-gray-300">
            <p>Условные стили: <code className="bg-gray-700 px-1 rounded">{'style={{ textDecoration: completed ? "line-through" : "none" }}'}</code>.</p>
          </div>
        </details>
      </div>

      {/* Задание 5 */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
          <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">5</span>
          Комплексный компонент профиля
        </h3>
        <p className="text-gray-300 mb-3">
          Создайте компонент <code className="bg-gray-700 px-1 rounded">UserProfile</code>, объединяющий все изученные концепции:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-gray-300 mb-3">
          <li>Принимает пропсы: <code className="bg-gray-700 px-1 rounded">userData</code> (объект с информацией о пользователе), <code className="bg-gray-700 px-1 rounded">onFollow</code> (функция), <code className="bg-gray-700 px-1 rounded">isFollowing</code> (булево значение).</li>
          <li>Объект <code className="bg-gray-700 px-1 rounded">userData</code> должен содержать: <code className="bg-gray-700 px-1 rounded">name</code>, <code className="bg-gray-700 px-1 rounded">username</code>, <code className="bg-gray-700 px-1 rounded">bio</code>, <code className="bg-gray-700 px-1 rounded">avatarUrl</code>, <code className="bg-gray-700 px-1 rounded">posts</code> (число), <code className="bg-gray-700 px-1 rounded">followers</code> (число), <code className="bg-gray-700 px-1 rounded">following</code> (число).</li>
          <li>Используйте деструктуризацию для получения всех пропсов.</li>
          <li>Отобразите аватар пользователя (используйте <code className="bg-gray-700 px-1 rounded">{'<img>'}</code>).</li>
          <li>Отобразите имя и username в заголовках.</li>
          <li>Отобразите биографию в абзаце.</li>
          <li>Отобразите статистику (посты, подписчики, подписки) в виде списка или отдельных блоков.</li>
          <li>Отобразите кнопку "Подписаться" или "Отписаться" в зависимости от значения <code className="bg-gray-700 px-1 rounded">isFollowing</code>, используя компонент <code className="bg-gray-700 px-1 rounded">CustomButton</code> из предыдущего задания.</li>
          <li>Создайте компонент <code className="bg-gray-700 px-1 rounded">App</code> с тестовыми данными и продемонстрируйте работу <code className="bg-gray-700 px-1 rounded">UserProfile</code>.</li>
        </ul>
        <details className="group">
          <summary className="cursor-pointer text-sm text-gray-400 hover:text-gray-300 flex items-center gap-1">
            <span>Подсказка</span>
            <svg className="w-4 h-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </summary>
          <div className="mt-2 p-3 bg-gray-900/50 rounded text-sm text-gray-300">
            <p>Для доступа к данным пользователя используйте точечную нотацию: <code className="bg-gray-700 px-1 rounded">{'{userData.name}'}</code>. Не забудьте импортировать созданный ранее компонент <code className="bg-gray-700 px-1 rounded">CustomButton</code>.</p>
          </div>
        </details>
      </div>

      {/* Заключение */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <div className="flex items-start gap-3">
          <div className="bg-green-500/20 p-2 rounded-lg flex-shrink-0">
            <Code className="w-5 h-5 text-green-400" />
          </div>
          <div>
            <h3 className="font-bold text-white mb-2">Отличная работа! 🎉</h3>
            <p className="text-gray-300">
              Эти задания помогли вам закрепить навыки создания компонентов и работы с пропсами в React. Вы научились создавать функциональные компоненты, передавать в них данные через пропсы, использовать деструктуризацию для более чистого кода, задавать значения по умолчанию, реализовывать условный рендеринг и рендерить списки с использованием ключей. Эти фундаментальные навыки являются основой для создания любых React-приложений. Теперь вы можете создавать переиспользуемые и гибкие компоненты, которые могут адаптироваться под разные данные и сценарии использования.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Part3;