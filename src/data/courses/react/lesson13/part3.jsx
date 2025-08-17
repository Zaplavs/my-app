// src/data/courses/react/lesson13/part3.jsx
import React from 'react';
import { Database, Code, Play, Terminal, Settings } from 'lucide-react';

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
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">✏️ Практика: Кастомные хуки</h1>
            <p className="text-gray-300">
              <span className="font-medium text-yellow-400">🎯 Цель:</span> Закрепить знания по созданию и использованию кастомных хуков в React через практические задания различной сложности.
            </p>
          </div>
        </div>
      </div>

      {/* Задание 1 */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
          <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">1</span>
          Хук useToggle для переключения булевых значений
        </h3>
        <p className="text-gray-300 mb-3">
          Создайте кастомный хук <code className="bg-gray-700 px-1.5 py-0.5 rounded text-green-300">useToggle</code>, который управляет булевым состоянием:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-gray-300 mb-3">
          <li>Хук должен принимать начальное значение (по умолчанию <code className="bg-gray-700 px-1 rounded">false</code>).</li>
          <li>Возвращать массив из трех элементов: текущее значение, функцию переключения и функцию установки значения.</li>
          <li>Функция переключения должна менять значение на противоположное.</li>
          <li>Функция установки значения должна принимать булево значение или функцию, возвращающую булево значение.</li>
          <li>Создайте компонент <code className="bg-gray-700 px-1 rounded">ToggleDemo</code>, демонстрирующий использование хука:
            <ul className="list-circle pl-5 mt-1">
              <li>Один переключатель с начальным значением <code className="bg-gray-700 px-1 rounded">false</code></li>
              <li>Один переключатель с начальным значением <code className="bg-gray-700 px-1 rounded">true</code></li>
              <li>Кнопки для установки значений <code className="bg-gray-700 px-1 rounded">true</code>/<code className="bg-gray-700 px-1 rounded">false</code> вручную</li>
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
            <p>Используйте <code className="bg-gray-700 px-1 rounded">useState</code> внутри хука. Для функции установки значения проверяйте тип переданного аргумента.</p>
          </div>
        </details>
      </div>

      {/* Задание 2 */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
          <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">2</span>
          Хук useApi для работы с REST API
        </h3>
        <p className="text-gray-300 mb-3">
          Создайте кастомный хук <code className="bg-gray-700 px-1 rounded">useApi</code>, который управляет загрузкой данных с REST API:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-gray-300 mb-3">
          <li>Хук должен принимать URL endpoint'а API.</li>
          <li>Возвращать объект с полями: <code className="bg-gray-700 px-1 rounded">data</code> (данные), <code className="bg-gray-700 px-1 rounded">loading</code> (состояние загрузки), <code className="bg-gray-700 px-1 rounded">error</code> (ошибка), <code className="bg-gray-700 px-1 rounded">refetch</code> (функция повторной загрузки).</li>
          <li>Использовать <code className="bg-gray-700 px-1 rounded">useEffect</code> для автоматической загрузки данных при монтировании и изменении URL.</li>
          <li>Обрабатывать ошибки сети и HTTP-ошибки (статусы 4xx, 5xx).</li>
          <li>Реализовать отмену предыдущих запросов при новом запросе (используйте <code className="bg-gray-700 px-1 rounded">AbortController</code>).</li>
          <li>Добавить автоматическую повторную попытку при сетевых ошибках (до 3 раз с экспоненциальной задержкой).</li>
          <li>Создайте компонент <code className="bg-gray-700 px-1 rounded">UserList</code>, использующий хук для загрузки списка пользователей с <code className="bg-gray-700 px-1 rounded">https://jsonplaceholder.typicode.com/users</code>:</li>
          <li>Отобразите список пользователей с именем, email и телефоном.</li>
          <li>Добавьте индикаторы загрузки и ошибок.</li>
          <li>Добавьте кнопку "Обновить данные", вызывающую <code className="bg-gray-700 px-1 rounded">refetch</code>.</li>
        </ul>
        <details className="group">
          <summary className="cursor-pointer text-sm text-gray-400 hover:text-gray-300 flex items-center gap-1">
            <span>Подсказка</span>
            <svg className="w-4 h-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </summary>
          <div className="mt-2 p-3 bg-gray-900/50 rounded text-sm text-gray-300">
            <p>Для повторных попыток используйте <code className="bg-gray-700 px-1 rounded">setTimeout</code> и счетчик попыток. Для отмены запросов создайте <code className="bg-gray-700 px-1 rounded">AbortController</code> в <code className="bg-gray-700 px-1 rounded">useEffect</code> и передайте сигнал в <code className="bg-gray-700 px-1 rounded">fetch</code>.</p>
          </div>
        </details>
      </div>

      {/* Задание 3 */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
          <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">3</span>
          Хук useDebounce для оптимизации поиска
        </h3>
        <p className="text-gray-300 mb-3">
          Создайте кастомный хук <code className="bg-gray-700 px-1 rounded">useDebounce</code> и используйте его для оптимизации поиска:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-gray-300 mb-3">
          <li>Хук <code className="bg-gray-700 px-1 rounded">useDebounce</code> должен принимать значение и задержку (в миллисекундах).</li>
          <li>Возвращать "задержанное" значение, которое обновляется только после истечения времени задержки без изменений оригинального значения.</li>
          <li>Использовать <code className="bg-gray-700 px-1 rounded">useEffect</code> и <code className="bg-gray-700 px-1 rounded">setTimeout</code>/<code className="bg-gray-700 px-1 rounded">clearTimeout</code> для реализации задержки.</li>
          <li>Создайте компонент <code className="bg-gray-700 px-1 rounded">SearchUsers</code>:
            <ul className="list-circle pl-5 mt-1">
              <li>Поле ввода для поискового запроса</li>
              <li>Использование <code className="bg-gray-700 px-1 rounded">useDebounce</code> для задержки поисковых запросов (500ms)</li>
              <li>Загрузка пользователей с <code className="bg-gray-700 px-1 rounded">https://jsonplaceholder.typicode.com/users</code></li>
              <li>Фильтрация пользователей на клиенте по имени/email</li>
              <li>Отображение результатов поиска</li>
              <li>Индикаторы загрузки и ошибок</li>
            </ul>
          </li>
          <li>Добавьте отображение количества отфильтрованных результатов.</li>
          <li>Реализуйте сброс поиска (очистка поля ввода и результатов).</li>
        </ul>
        <details className="group">
          <summary className="cursor-pointer text-sm text-gray-400 hover:text-gray-300 flex items-center gap-1">
            <span>Подсказка</span>
            <svg className="w-4 h-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </summary>
          <div className="mt-2 p-3 bg-gray-900/50 rounded text-sm text-gray-300">
            <p>В <code className="bg-gray-700 px-1 rounded">useEffect</code> создайте таймер с <code className="bg-gray-700 px-1 rounded">setTimeout</code>. Верните функцию очистки, которая вызывает <code className="bg-gray-700 px-1 rounded">clearTimeout</code>. Используйте массив зависимостей <code className="bg-gray-700 px-1 rounded">[value, delay]</code>.</p>
          </div>
        </details>
      </div>

      {/* Задание 4 */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
          <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">4</span>
          Комплексный хук useLocalStorage с валидацией
        </h3>
        <p className="text-gray-300 mb-3">
          Создайте расширенный кастомный хук <code className="bg-gray-700 px-1 rounded">useLocalStorage</code> с валидацией и обработкой ошибок:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-gray-300 mb-3">
          <li>Хук должен принимать ключ, начальное значение и опциональную функцию валидации.</li>
          <li>Возвращать массив: значение, функцию установки значения, функцию удаления значения.</li>
          <li>Функция валидации должна принимать новое значение и возвращать boolean (валидно/невалидно).</li>
          <li>При установке значения:
            <ul className="list-circle pl-5 mt-1">
              <li>Проверять значение с помощью функции валидации (если предоставлена)</li>
              <li>При невалидном значении не обновлять состояние и localStorage, вызывать callback ошибки</li>
              <li>При валидном значении обновлять состояние и сохранять в localStorage</li>
            </ul>
          </li>
          <li>Обрабатывать ошибки JSON.parse и JSON.stringify.</li>
          <li>Обрабатывать ошибки доступа к localStorage (приватный режим браузера и т.д.).</li>
          <li>Добавить функцию сброса к начальному значению.</li>
          <li>Создайте компонент <code className="bg-gray-700 px-1 rounded">PreferencesForm</code>:
            <ul className="list-circle pl-5 mt-1">
              <li>Поле ввода имени (обязательное, минимум 2 символа)</li>
              <li>Поле ввода email (формат email)</li>
              <li>Поле выбора темы ("light", "dark")</li>
              <li>Поле выбора языка ("en", "ru", "es")</li>
              <li>Кнопки сохранения, сброса и очистки</li>
            </ul>
          </li>
          <li>Используйте хук для каждого поля с соответствующими валидаторами.</li>
          <li>Отображайте сообщения об ошибках валидации под полями ввода.</li>
          <li>Сохраняйте состояние формы между перезагрузками страницы.</li>
        </ul>
        <details className="group">
          <summary className="cursor-pointer text-sm text-gray-400 hover:text-gray-300 flex items-center gap-1">
            <span>Подсказка</span>
            <svg className="w-4 h-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </summary>
          <div className="mt-2 p-3 bg-gray-900/50 rounded text-sm text-gray-300">
            <p>Для валидации создайте объект с предопределенными валидаторами. Используйте <code className="bg-gray-700 px-1 rounded">try/catch</code> при работе с <code className="bg-gray-700 px-1 rounded">localStorage</code> и <code className="bg-gray-700 px-1 rounded">JSON</code>. Реализуйте fallback на <code className="bg-gray-700 px-1 rounded">useState</code> при ошибках.</p>
          </div>
        </details>
      </div>

      {/* Задание 5 */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
          <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">5</span>
          Библиотека кастомных хуков для работы с браузером
        </h3>
        <p className="text-gray-300 mb-3">
          Создайте библиотеку из 5 кастомных хуков для работы с возможностями браузера:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-gray-300 mb-3">
          <li><code className="bg-gray-700 px-1 rounded">useOnlineStatus</code> — возвращает булево значение, indicating онлайн/офлайн статус браузера.</li>
          <li><code className="bg-gray-700 px-1 rounded">useWindowDimensions</code> — возвращает объект с шириной и высотой окна браузера, обновляется при resize.</li>
          <li><code className="bg-gray-700 px-1 rounded">useScrollPosition</code> — возвращает объект с позицией скролла по X и Y осям.</li>
          <li><code className="bg-gray-700 px-1 rounded">useCopyToClipboard</code> — возвращает массив [copied, copy], где copied - булево значение (скопировано/не скопировано), copy - функция для копирования текста в буфер обмена.</li>
          <li><code className="bg-gray-700 px-1 rounded">usePageVisibility</code> — возвращает булево значение, indicating видна страница пользователю или нет (вкладка неактивна, свернут браузер и т.д.).</li>
          <li>Каждый хук должен корректно управлять event listeners и очищать их при размонтировании.</li>
          <li>Создайте демонстрационный компонент <code className="bg-gray-700 px-1 rounded">BrowserFeaturesDemo</code>, который использует все 5 хуков:
            <ul className="list-circle pl-5 mt-1">
              <li>Отображает онлайн/офлайн статус с цветовой индикацией</li>
              <li>Показывает текущие размеры окна</li>
              <li>Показывает позицию скролла</li>
              <li>Предоставляет поле ввода и кнопку для копирования текста</li>
              <li>Отображает статус видимости страницы</li>
            </ul>
          </li>
          <li>Добавьте стилизацию для лучшего визуального представления информации.</li>
          <li>Обработайте граничные случаи (например, отсутствие Clipboard API в старых браузерах).</li>
        </ul>
        <details className="group">
          <summary className="cursor-pointer text-sm text-gray-400 hover:text-gray-300 flex items-center gap-1">
            <span>Подсказка</span>
            <svg className="w-4 h-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </summary>
          <div className="mt-2 p-3 bg-gray-900/50 rounded text-sm text-gray-300">
            <p>Для <code className="bg-gray-700 px-1 rounded">useOnlineStatus</code> используйте события 'online' и 'offline'. Для <code className="bg-gray-700 px-1 rounded">useWindowDimensions</code> - событие 'resize'. Для <code className="bg-gray-700 px-1 rounded">useScrollPosition</code> - событие 'scroll'. Для <code className="bg-gray-700 px-1 rounded">usePageVisibility</code> - Page Visibility API с событиями 'visibilitychange'.</p>
          </div>
        </details>
      </div>

      {/* Заключение */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <div className="flex items-start gap-3">
          <div className="bg-green-500/20 p-2 rounded-lg flex-shrink-0">
            <Settings className="w-5 h-5 text-green-400" />
          </div>
          <div>
            <h3 className="font-bold text-white mb-2">Отличная работа! 🎉</h3>
            <p className="text-gray-300">
              Эти задания помогли вам закрепить навыки создания кастомных хуков в React. Вы научились создавать хуки для управления булевыми значениями (<code className="bg-gray-700 px-1 rounded">useToggle</code>), работы с REST API (<code className="bg-gray-700 px-1 rounded">useApi</code>), оптимизации ввода с задержкой (<code className="bg-gray-700 px-1 rounded">useDebounce</code>), работы с localStorage с валидацией, а также комплексные хуки для работы с возможностями браузера. Вы освоили передачу параметров в хуки, возврат различных типов значений, обработку ошибок, управление побочными эффектами и очистку ресурсов. Кастомные хуки - это мощный инструмент для создания переиспользуемой логики и соблюдения принципа DRY в React-приложениях. Теперь вы можете создавать собственные библиотеки хуков для решения типовых задач в ваших проектах.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Part3;