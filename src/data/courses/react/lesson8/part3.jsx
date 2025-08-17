// src/data/courses/react/lesson8/part3.jsx
import React from 'react';
import { Server, Download, RefreshCw, Play, Terminal } from 'lucide-react';

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
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">✏️ Практика: Работа с API и fetch</h1>
            <p className="text-gray-300">
              <span className="font-medium text-yellow-400">🎯 Цель:</span> Закрепить знания по работе с API и использованию <code className="bg-gray-700 px-1.5 py-0.5 rounded text-green-300">fetch</code> для получения данных в React через практические задания различной сложности.
            </p>
          </div>
        </div>
      </div>

      {/* Задание 1 */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
          <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">1</span>
          Список пользователей с базовой обработкой состояний
        </h3>
        <p className="text-gray-300 mb-3">
          Создайте компонент <code className="bg-gray-700 px-1.5 py-0.5 rounded text-green-300">UserList</code>, который получает список пользователей с JSONPlaceholder API:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-gray-300 mb-3">
          <li>Используйте <code className="bg-gray-700 px-1 rounded">useState</code> для хранения массива пользователей, состояния загрузки и ошибки.</li>
          <li>Используйте <code className="bg-gray-700 px-1 rounded">useEffect</code> с пустым массивом зависимостей для загрузки данных при монтировании.</li>
          <li>Загрузите данные с <code className="bg-gray-700 px-1 rounded">https://jsonplaceholder.typicode.com/users</code>.</li>
          <li>Реализуйте три состояния отображения:
            <ul className="list-circle pl-5 mt-1">
              <li>Показ "Загрузка..." во время запроса</li>
              <li>Показ списка пользователей (имя и email) после успешной загрузки</li>
              <li>Показ сообщения об ошибке, если запрос не удался</li>
            </ul>
          </li>
        </ul>
        <details className="group">
          <summary className="cursor-pointer text-sm text-gray-400 hover:text-gray-300 flex items-center gap-1">
            <span>Подсказка</span>
            <svg className="w-4 h-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </summary>
          <div className="mt-2 p-3 bg-gray-900/50 rounded text-sm text-gray-300">
            <p>Используйте <code className="bg-gray-700 px-1 rounded">async/await</code> внутри <code className="bg-gray-700 px-1 rounded">useEffect</code>. Установите <code className="bg-gray-700 px-1 rounded">loading = true</code> перед запросом. В <code className="bg-gray-700 px-1 rounded">try/catch</code> обработайте успешный ответ и ошибки.</p>
          </div>
        </details>
      </div>

      {/* Задание 2 */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
          <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">2</span>
          Детали пользователя с обработкой всех состояний
        </h3>
        <p className="text-gray-300 mb-3">
          Создайте компонент <code className="bg-gray-700 px-1 rounded">UserDetail</code>, который отображает детальную информацию о конкретном пользователе:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-gray-300 mb-3">
          <li>Компонент принимает пропс <code className="bg-gray-700 px-1 rounded">userId</code> (число от 1 до 10).</li>
          <li>Используйте <code className="bg-gray-700 px-1 rounded">useState</code> для хранения данных пользователя, состояний загрузки, ошибки и пустых данных.</li>
          <li>Используйте <code className="bg-gray-700 px-1 rounded">useEffect</code> с зависимостью от <code className="bg-gray-700 px-1 rounded">userId</code> для загрузки данных при изменении ID.</li>
          <li>Загрузите данные с <code className="bg-gray-700 px-1 rounded">{'`https://jsonplaceholder.typicode.com/users/${userId}`'}</code>.</li>
          <li>Отобразите полную информацию о пользователе: имя, username, email, адрес, телефон, вебсайт, компания.</li>
          <li>Реализуйте все четыре состояния:
            <ul className="list-circle pl-5 mt-1">
              <li>Загрузка</li>
              <li>Ошибка (например, при userId = 999)</li>
              <li>Пустые данные (если API вернул пустой объект)</li>
              <li>Успешное отображение данных</li>
            </ul>
          </li>
        </ul>
        <details className="group">
          <summary className="cursor-pointer text-sm text-gray-400 hover:text-gray-300 flex items-center gap-1">
            <span>Подсказка</span>
            <svg className="w-4 h-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </summary>
          <div className="mt-2 p-3 bg-gray-900/50 rounded text-sm text-gray-300">
            <p>Добавьте проверку <code className="bg-gray-700 px-1 rounded">if (!userId) return null;</code> в начале компонента. Используйте условный рендеринг для отображения разных состояний.</p>
          </div>
        </details>
      </div>

      {/* Задание 3 */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
          <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">3</span>
          Список постов с постраничной навигацией
        </h3>
        <p className="text-gray-300 mb-3">
          Создайте компонент <code className="bg-gray-700 px-1 rounded">PostList</code>, который отображает список постов с постраничной навигацией:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-gray-300 mb-3">
          <li>Используйте <code className="bg-gray-700 px-1 rounded">useState</code> для хранения массива постов, текущей страницы, общего количества страниц, состояний загрузки и ошибки.</li>
          <li>Используйте <code className="bg-gray-700 px-1 rounded">useEffect</code> с зависимостью от номера страницы.</li>
          <li>Загрузите данные с <code className="bg-gray-700 px-1 rounded">https://jsonplaceholder.typicode.com/posts</code> с параметрами <code className="bg-gray-700 px-1 rounded">_page</code> и <code className="bg-gray-700 px-1 rounded">_limit</code> (например, 10 постов на страницу).</li>
          <li>Получите общее количество страниц из заголовка <code className="bg-gray-700 px-1 rounded">x-total-count</code> в ответе.</li>
          <li>Отобразите список постов (заголовок и начало текста).</li>
          <li>Добавьте кнопки навигации: "Предыдущая", "Следующая", и номера страниц.</li>
          <li>Реализуйте обработку состояний загрузки и ошибок.</li>
        </ul>
        <details className="group">
          <summary className="cursor-pointer text-sm text-gray-400 hover:text-gray-300 flex items-center gap-1">
            <span>Подсказка</span>
            <svg className="w-4 h-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </summary>
          <div className="mt-2 p-3 bg-gray-900/50 rounded text-sm text-gray-300">
            <p>Для получения заголовков используйте <code className="bg-gray-700 px-1 rounded">response.headers.get('x-total-count')</code>. URL с параметрами: <code className="bg-gray-700 px-1 rounded">{'`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=10`'}</code>.</p>
          </div>
        </details>
      </div>

      {/* Задание 4 */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
          <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">4</span>
          Поиск пользователей с debounce
        </h3>
        <p className="text-gray-300 mb-3">
          Создайте компонент <code className="bg-gray-700 px-1 rounded">UserSearch</code>, который позволяет искать пользователей по имени:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-gray-300 mb-3">
          <li>Используйте <code className="bg-gray-700 px-1 rounded">useState</code> для хранения поискового запроса, результатов поиска, состояний загрузки и ошибки.</li>
          <li>Добавьте поле ввода для поискового запроса.</li>
          <li>Используйте <code className="bg-gray-700 px-1 rounded">useEffect</code> с зависимостью от поискового запроса.</li>
          <li>Реализуйте <span className="font-medium">debounce</span> (задержку 300ms) для запросов, чтобы не отправлять запрос на каждое нажатие клавиши.</li>
          <li>Загрузите данные с <code className="bg-gray-700 px-1 rounded">https://jsonplaceholder.typicode.com/users</code> и отфильтруйте результаты на клиенте по имени.</li>
          <li>Отобразите результаты поиска (имя и email).</li>
          <li>Реализуйте обработку состояний загрузки и ошибок.</li>
          <li>Добавьте функцию очистки для отмены предыдущих запросов при размонтировании.</li>
        </ul>
        <details className="group">
          <summary className="cursor-pointer text-sm text-gray-400 hover:text-gray-300 flex items-center gap-1">
            <span>Подсказка</span>
            <svg className="w-4 h-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </summary>
          <div className="mt-2 p-3 bg-gray-900/50 rounded text-sm text-gray-300">
            <p>Используйте <code className="bg-gray-700 px-1 rounded">setTimeout</code> для реализации debounce. Сохраните ID таймера в useRef и очистите его в функции очистки <code className="bg-gray-700 px-1 rounded">useEffect</code>.</p>
          </div>
        </details>
      </div>

      {/* Задание 5 */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
          <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">5</span>
          Комплексный компонент с несколькими API-запросами
        </h3>
        <p className="text-gray-300 mb-3">
          Создайте компонент <code className="bg-gray-700 px-1 rounded">UserProfileWithPosts</code>, который объединяет несколько API-запросов:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-gray-300 mb-3">
          <li>Компонент принимает пропс <code className="bg-gray-700 px-1 rounded">userId</code>.</li>
          <li>Используйте <code className="bg-gray-700 px-1 rounded">useState</code> для хранения данных пользователя, его постов, состояний загрузки и ошибок для каждого запроса.</li>
          <li>Используйте <code className="bg-gray-700 px-1 rounded">useEffect</code> с зависимостью от <code className="bg-gray-700 px-1 rounded">userId</code>.</li>
          <li>Выполните <span className="font-medium">параллельные</span> запросы:
            <ul className="list-circle pl-5 mt-1">
              <li>Получение данных пользователя: <code className="bg-gray-700 px-1 rounded">https://jsonplaceholder.typicode.com/users/{'{userId}'}</code></li>
              <li>Получение постов пользователя: <code className="bg-gray-700 px-1 rounded">https://jsonplaceholder.typicode.com/posts?userId={'{userId}'}</code></li>
            </ul>
          </li>
          <li>Отобразите информацию о пользователе и список его постов.</li>
          <li>Реализуйте отдельные индикаторы загрузки для пользователя и постов.</li>
          <li>Реализуйте обработку ошибок для каждого запроса отдельно.</li>
          <li>Добавьте кнопку "Обновить данные", которая повторно выполняет оба запроса.</li>
          <li>Реализуйте функцию очистки для предотвращения обновления состояния размонтированного компонента.</li>
        </ul>
        <details className="group">
          <summary className="cursor-pointer text-sm text-gray-400 hover:text-gray-300 flex items-center gap-1">
            <span>Подсказка</span>
            <svg className="w-4 h-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </summary>
          <div className="mt-2 p-3 bg-gray-900/50 rounded text-sm text-gray-300">
            <p>Для параллельных запросов можно использовать <code className="bg-gray-700 px-1 rounded">Promise.all()</code> или выполнить запросы независимо. Используйте флаг <code className="bg-gray-700 px-1 rounded">isMounted</code> в функции очистки <code className="bg-gray-700 px-1 rounded">useEffect</code>.</p>
          </div>
        </details>
      </div>

      {/* Заключение */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <div className="flex items-start gap-3">
          <div className="bg-green-500/20 p-2 rounded-lg flex-shrink-0">
            <Server className="w-5 h-5 text-green-400" />
          </div>
          <div>
            <h3 className="font-bold text-white mb-2">Отличная работа! 🎉</h3>
            <p className="text-gray-300">
              Эти задания помогли вам закрепить навыки работы с API и использования <code className="bg-gray-700 px-1 rounded">fetch</code> в React. Вы научились обрабатывать различные состояния при работе с асинхронными данными (загрузка, ошибки, пустые данные), реализовывать постраничную навигацию, использовать debounce для оптимизации запросов, выполнять параллельные запросы и правильно очищать ресурсы при размонтировании компонентов. Понимание и правильная реализация работы с API является ключевым навыком для создания современных веб-приложений, которые взаимодействуют с серверами и получают динамические данные.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Part3;