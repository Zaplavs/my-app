// src/data/courses/react/lesson4/part3.jsx
import React from 'react';
import { Database, Edit3, ToggleLeft, Hash, Play, Terminal } from 'lucide-react';

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
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">✏️ Практика: Хук useState — управление состоянием</h1>
            <p className="text-gray-300">
              <span className="font-medium text-yellow-400">🎯 Цель:</span> Закрепить знания по использованию хука <code className="bg-gray-700 px-1.5 py-0.5 rounded text-green-300">useState</code> для управления состоянием в React через практические задания.
            </p>
          </div>
        </div>
      </div>

      {/* Задание 1 */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
          <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">1</span>
          Счетчик с различными операциями
        </h3>
        <p className="text-gray-300 mb-3">
          Создайте компонент <code className="bg-gray-700 px-1.5 py-0.5 rounded text-green-300">Counter</code>, который реализует счетчик с различными операциями:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-gray-300 mb-3">
          <li>Используйте <code className="bg-gray-700 px-1 rounded">useState</code> для хранения значения счетчика (начальное значение 0).</li>
          <li>Отобразите текущее значение счетчика в <code className="bg-gray-700 px-1 rounded">{'<p>'}</code>.</li>
          <li>Добавьте кнопки для выполнения операций:
            <ul className="list-circle pl-5 mt-1">
              <li>Увеличить на 1</li>
              <li>Уменьшить на 1</li>
              <li>Увеличить на 5</li>
              <li>Уменьшить на 5</li>
              <li>Сбросить (установить в 0)</li>
              <li>Удвоить значение</li>
              <li>Разделить на 2 (целочисленное деление)</li>
            </ul>
          </li>
          <li>Используйте функциональное обновление состояния там, где это уместно.</li>
        </ul>
        <details className="group">
          <summary className="cursor-pointer text-sm text-gray-400 hover:text-gray-300 flex items-center gap-1">
            <span>Подсказка</span>
            <svg className="w-4 h-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </summary>
          <div className="mt-2 p-3 bg-gray-900/50 rounded text-sm text-gray-300">
            <p>Для удвоения: <code className="bg-gray-700 px-1 rounded">{`setCount(prev => prev * 2)`}</code>. Для деления: <code className="bg-gray-700 px-1 rounded">{`setCount(prev => Math.floor(prev / 2))`}</code>.</p>
          </div>
        </details>
      </div>

      {/* Задание 2 */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
          <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">2</span>
          Форма ввода с валидацией
        </h3>
        <p className="text-gray-300 mb-3">
          Создайте компонент <code className="bg-gray-700 px-1 rounded">LoginForm</code>, который реализует простую форму входа:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-gray-300 mb-3">
          <li>Используйте <code className="bg-gray-700 px-1 rounded">useState</code> для хранения значений полей email и password.</li>
          <li>Добавьте два поля ввода: email и password.</li>
          <li>Свяжите значения полей ввода с состоянием (контролируемые компоненты).</li>
          <li>Отобразите текущие значения полей под формой.</li>
          <li>Добавьте кнопку "Войти", которая при клике:
            <ul className="list-circle pl-5 mt-1">
              <li>Проверяет, что оба поля не пустые</li>
              <li>Если поля пустые, отображает сообщение об ошибке</li>
              <li>Если поля заполнены, отображает сообщение "Вход выполнен успешно!"</li>
            </ul>
          </li>
          <li>Используйте дополнительное состояние для хранения сообщения (ошибка или успех).</li>
        </ul>
        <details className="group">
          <summary className="cursor-pointer text-sm text-gray-400 hover:text-gray-300 flex items-center gap-1">
            <span>Подсказка</span>
            <svg className="w-4 h-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </summary>
          <div className="mt-2 p-3 bg-gray-900/50 rounded text-sm text-gray-300">
            <p>Используйте несколько <code className="bg-gray-700 px-1 rounded">useState</code> для разных частей состояния: <code className="bg-gray-700 px-1 rounded">const [email, setEmail] = useState('');</code>, <code className="bg-gray-700 px-1 rounded">const [password, setPassword] = useState('');</code>, <code className="bg-gray-700 px-1 rounded">const [message, setMessage] = useState('');</code>.</p>
          </div>
        </details>
      </div>

      {/* Задание 3 */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
          <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">3</span>
          Переключатель темы и цвета
        </h3>
        <p className="text-gray-300 mb-3">
          Создайте компонент <code className="bg-gray-700 px-1 rounded">ThemeSwitcher</code>, который позволяет переключать тему и цвет:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-gray-300 mb-3">
          <li>Используйте <code className="bg-gray-700 px-1 rounded">useState</code> для хранения текущей темы ("light" или "dark") и цвета ("blue", "green", "purple").</li>
          <li>Отобразите заголовок, который меняет цвет в зависимости от выбранной темы и цвета.</li>
          <li>Добавьте переключатель (кнопку), который меняет тему с "light" на "dark" и наоборот.</li>
          <li>Добавьте выпадающий список (select) с вариантами цветов.</li>
          <li>Отобразите текущую тему и цвет под элементами управления.</li>
          <li>Используйте inline-стили для изменения внешнего вида заголовка в зависимости от состояния.</li>
        </ul>
        <details className="group">
          <summary className="cursor-pointer text-sm text-gray-400 hover:text-gray-300 flex items-center gap-1">
            <span>Подсказка</span>
            <svg className="w-4 h-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </summary>
          <div className="mt-2 p-3 bg-gray-900/50 rounded text-sm text-gray-300">
            <p>Для вычисления стилей можно создать объект: <code className="bg-gray-700 px-1 rounded">const headerStyle = {'{'}</code><br />
            <code className="bg-gray-700 px-1 rounded">color: theme === 'light' ? 'black' : 'white',</code><br />
            <code className="bg-gray-700 px-1 rounded">backgroundColor: color</code><br />
            <code className="bg-gray-700 px-1 rounded">{'}'}</code></p>
          </div>
        </details>
      </div>

      {/* Задание 4 */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
          <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">4</span>
          Список задач с фильтрацией
        </h3>
        <p className="text-gray-300 mb-3">
          Создайте компонент <code className="bg-gray-700 px-1 rounded">TodoListWithFilter</code>, который реализует список задач с возможностью фильтрации:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-gray-300 mb-3">
          <li>Используйте <code className="bg-gray-700 px-1 rounded">useState</code> для хранения массива задач (каждая задача - объект с id, text, completed).</li>
          <li>Используйте <code className="bg-gray-700 px-1 rounded">useState</code> для хранения текста новой задачи.</li>
          <li>Используйте <code className="bg-gray-700 px-1 rounded">useState</code> для хранения фильтра ("all", "active", "completed").</li>
          <li>Реализуйте функции:
            <ul className="list-circle pl-5 mt-1">
              <li>Добавление новой задачи (если текст не пустой)</li>
              <li>Переключение статуса задачи (выполнена/не выполнена)</li>
              <li>Удаление задачи</li>
              <li>Фильтрация задач по статусу</li>
            </ul>
          </li>
          <li>Отобразите список задач с учетом выбранного фильтра.</li>
          <li>Отобразите количество активных задач.</li>
          <li>Добавьте кнопки фильтрации: "Все", "Активные", "Выполненные".</li>
        </ul>
        <details className="group">
          <summary className="cursor-pointer text-sm text-gray-400 hover:text-gray-300 flex items-center gap-1">
            <span>Подсказка</span>
            <svg className="w-4 h-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </summary>
          <div className="mt-2 p-3 bg-gray-900/50 rounded text-sm text-gray-300">
            <p>Для генерации уникального id можно использовать <code className="bg-gray-700 px-1 rounded">Date.now()</code> или <code className="bg-gray-700 px-1 rounded">Math.random()</code>. Для фильтрации: <code className="bg-gray-700 px-1 rounded">{`tasks.filter(task => ...)`}</code>.</p>
          </div>
        </details>
      </div>

      {/* Задание 5 */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
          <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">5</span>
          Комплексный компонент профиля пользователя
        </h3>
        <p className="text-gray-300 mb-3">
          Создайте компонент <code className="bg-gray-700 px-1 rounded">UserProfile</code>, объединяющий все изученные концепции управления состоянием:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-gray-300 mb-3">
          <li>Используйте <code className="bg-gray-700 px-1 rounded">useState</code> для хранения данных пользователя (имя, email, био, аватар URL).</li>
          <li>Используйте <code className="bg-gray-700 px-1 rounded">useState</code> для хранения режима редактирования (true/false).</li>
          <li>Используйте <code className="bg-gray-700 px-1 rounded">useState</code> для хранения состояния подписки (подписан/не подписан).</li>
          <li>Отобразите профиль пользователя с аватаром, именем, email и био.</li>
          <li>Реализуйте возможность редактирования профиля:
            <ul className="list-circle pl-5 mt-1">
              <li>Кнопка "Редактировать" переключает режим редактирования</li>
              <li>В режиме редактирования отображаются поля ввода для всех данных</li>
              <li>Кнопки "Сохранить" и "Отмена"</li>
            </ul>
          </li>
          <li>Реализуйте кнопку подписки/отписки, которая меняет состояние подписки.</li>
          <li>Отобразите статус подписки (подписан/не подписан) под профилем.</li>
          <li>Добавьте возможность загрузки нового аватара (имитация через URL).</li>
        </ul>
        <details className="group">
          <summary className="cursor-pointer text-sm text-gray-400 hover:text-gray-300 flex items-center gap-1">
            <span>Подсказка</span>
            <svg className="w-4 h-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </summary>
          <div className="mt-2 p-3 bg-gray-900/50 rounded text-sm text-gray-300">
            <p>Для хранения данных пользователя используйте объект состояния: <code className="bg-gray-700 px-1 rounded">const [user, setUser] = useState({'{'}</code><br />
            <code className="bg-gray-700 px-1 rounded">name: 'Имя', email: 'email@example.com', bio: 'Био', avatar: 'url'</code><br />
            <code className="bg-gray-700 px-1 rounded">{'}'});</code></p>
          </div>
        </details>
      </div>

      {/* Заключение */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <div className="flex items-start gap-3">
          <div className="bg-green-500/20 p-2 rounded-lg flex-shrink-0">
            <Database className="w-5 h-5 text-green-400" />
          </div>
          <div>
            <h3 className="font-bold text-white mb-2">Отличная работа! 🎉</h3>
            <p className="text-gray-300">
              Эти задания помогли вам закрепить навыки использования хука <code className="bg-gray-700 px-1 rounded">useState</code> для управления состоянием в React. Вы научились создавать и обновлять различные типы состояния (числа, строки, булевы значения, объекты, массивы), работать с контролируемыми компонентами, реализовывать формы с валидацией, создавать интерактивные элементы управления и сложные компоненты с множественными состояниями. Понимание и умение применять <code className="bg-gray-700 px-1 rounded">useState</code> является фундаментом для создания интерактивных React-приложений. Теперь вы можете создавать компоненты, которые реагируют на действия пользователя и динамически обновляют свой интерфейс.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Part3;