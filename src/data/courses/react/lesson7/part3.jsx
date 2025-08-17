// src/data/courses/react/lesson7/part3.jsx
import React from 'react';
import { RefreshCw, Database, Timer, Download, Play, Terminal } from 'lucide-react';

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
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">✏️ Практика: Хук useEffect — побочные эффекты</h1>
            <p className="text-gray-300">
              <span className="font-medium text-yellow-400">🎯 Цель:</span> Закрепить знания по использованию хука <code className="bg-gray-700 px-1.5 py-0.5 rounded text-green-300">useEffect</code> для выполнения побочных эффектов в React через практические задания различной сложности.
            </p>
          </div>
        </div>
      </div>

      {/* Задание 1 */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
          <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">1</span>
          Таймер с функцией очистки
        </h3>
        <p className="text-gray-300 mb-3">
          Создайте компонент <code className="bg-gray-700 px-1.5 py-0.5 rounded text-green-300">Timer</code>, который реализует таймер с секундомером:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-gray-300 mb-3">
          <li>Используйте <code className="bg-gray-700 px-1 rounded">useState</code> для хранения количества прошедших секунд.</li>
          <li>Используйте <code className="bg-gray-700 px-1 rounded">useEffect</code> для установки интервала, который увеличивает счетчик каждую секунду.</li>
          <li>Реализуйте <span className="font-medium">функцию очистки</span>, которая очищает интервал при размонтировании компонента.</li>
          <li>Добавьте кнопку "Сброс", которая обнуляет счетчик.</li>
          <li>Отобразите текущее значение счетчика на странице.</li>
        </ul>
        <details className="group">
          <summary className="cursor-pointer text-sm text-gray-400 hover:text-gray-300 flex items-center gap-1">
            <span>Подсказка</span>
            <svg className="w-4 h-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </summary>
          <div className="mt-2 p-3 bg-gray-900/50 rounded text-sm text-gray-300">
            <p>Используйте <code className="bg-gray-700 px-1 rounded">setInterval</code> внутри <code className="bg-gray-700 px-1 rounded">useEffect</code> с пустым массивом зависимостей <code className="bg-gray-700 px-1 rounded">[]</code>. Функция очистки: <code className="bg-gray-700 px-1 rounded">{`return () => clearInterval(intervalId);`}</code></p>
          </div>
        </details>
      </div>

      {/* Задание 2 */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
          <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">2</span>
          Отслеживание размера окна
        </h3>
        <p className="text-gray-300 mb-3">
          Создайте компонент <code className="bg-gray-700 px-1 rounded">WindowSize</code>, который отображает текущие размеры окна браузера:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-gray-300 mb-3">
          <li>Используйте <code className="bg-gray-700 px-1 rounded">useState</code> для хранения ширины и высоты окна.</li>
          <li>Используйте <code className="bg-gray-700 px-1 rounded">useEffect</code> для добавления слушателя события <code className="bg-gray-700 px-1 rounded">'resize'</code> на объект <code className="bg-gray-700 px-1 rounded">window</code>.</li>
          <li>В обработчике события обновляйте состояние с текущими размерами окна.</li>
          <li>Реализуйте функцию очистки, которая удаляет слушатель события при размонтировании компонента.</li>
          <li>Отобразите ширину и высоту окна на странице.</li>
        </ul>
        <details className="group">
          <summary className="cursor-pointer text-sm text-gray-400 hover:text-gray-300 flex items-center gap-1">
            <span>Подсказка</span>
            <svg className="w-4 h-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </summary>
          <div className="mt-2 p-3 bg-gray-900/50 rounded text-sm text-gray-300">
            <p>Получите начальные размеры с помощью <code className="bg-gray-700 px-1 rounded">window.innerWidth</code> и <code className="bg-gray-700 px-1 rounded">window.innerHeight</code>. В <code className="bg-gray-700 px-1 rounded">useEffect</code> добавьте слушатель: <code className="bg-gray-700 px-1 rounded">window.addEventListener('resize', handler)</code>.</p>
          </div>
        </details>
      </div>

      {/* Задание 3 */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
          <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">3</span>
          Загрузка данных с API
        </h3>
        <p className="text-gray-300 mb-3">
          Создайте компонент <code className="bg-gray-700 px-1 rounded">UserList</code>, который загружает список пользователей с API:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-gray-300 mb-3">
          <li>Используйте <code className="bg-gray-700 px-1 rounded">useState</code> для хранения массива пользователей и состояния загрузки.</li>
          <li>Используйте <code className="bg-gray-700 px-1 rounded">useEffect</code> с пустым массивом зависимостей для загрузки данных при монтировании компонента.</li>
          <li>Используйте <code className="bg-gray-700 px-1 rounded">fetch</code> для получения данных с <code className="bg-gray-700 px-1 rounded">https://jsonplaceholder.typicode.com/users</code>.</li>
          <li>Обработайте состояния загрузки ("Загрузка...") и ошибки (если есть).</li>
          <li>Отобразите список пользователей (имя и email) в виде списка.</li>
        </ul>
        <details className="group">
          <summary className="cursor-pointer text-sm text-gray-400 hover:text-gray-300 flex items-center gap-1">
            <span>Подсказка</span>
            <svg className="w-4 h-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </summary>
          <div className="mt-2 p-3 bg-gray-900/50 rounded text-sm text-gray-300">
            <p>Используйте <code className="bg-gray-700 px-1 rounded">async/await</code> внутри <code className="bg-gray-700 px-1 rounded">useEffect</code>. Создайте асинхронную функцию внутри <code className="bg-gray-700 px-1 rounded">useEffect</code> и вызовите её. Управление состоянием: <code className="bg-gray-700 px-1 rounded">setLoading(true)</code> перед запросом, <code className="bg-gray-700 px-1 rounded">setUsers(data)</code> и <code className="bg-gray-700 px-1 rounded">setLoading(false)</code> после получения данных.</p>
          </div>
        </details>
      </div>

      {/* Задание 4 */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
          <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">4</span>
          Работа с localStorage
        </h3>
        <p className="text-gray-300 mb-3">
          Создайте компонент <code className="bg-gray-700 px-1 rounded">ThemeSwitcher</code>, который сохраняет выбранную тему в localStorage:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-gray-300 mb-3">
          <li>Используйте <code className="bg-gray-700 px-1 rounded">useState</code> для хранения текущей темы ("light" или "dark").</li>
          <li>Используйте <code className="bg-gray-700 px-1 rounded">useEffect</code> с пустым массивом зависимостей для загрузки темы из localStorage при монтировании.</li>
          <li>Используйте <code className="bg-gray-700 px-1 rounded">useEffect</code> с зависимостью от темы для сохранения её в localStorage при изменении.</li>
          <li>Добавьте кнопку переключения темы между "light" и "dark".</li>
          <li>Примените CSS-классы к body или компоненту в зависимости от выбранной темы.</li>
        </ul>
        <details className="group">
          <summary className="cursor-pointer text-sm text-gray-400 hover:text-gray-300 flex items-center gap-1">
            <span>Подсказка</span>
            <svg className="w-4 h-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </summary>
          <div className="mt-2 p-3 bg-gray-900/50 rounded text-sm text-gray-300">
            <p>Для загрузки: <code className="bg-gray-700 px-1 rounded">const savedTheme = localStorage.getItem('theme')</code>. Для сохранения: <code className="bg-gray-700 px-1 rounded">localStorage.setItem('theme', theme)</code>. Используйте два <code className="bg-gray-700 px-1 rounded">useEffect</code> с разными массивами зависимостей.</p>
          </div>
        </details>
      </div>

      {/* Задание 5 */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
          <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">5</span>
          Комплексный компонент с несколькими эффектами
        </h3>
        <p className="text-gray-300 mb-3">
          Создайте компонент <code className="bg-gray-700 px-1 rounded">Dashboard</code>, который объединяет несколько эффектов:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-gray-300 mb-3">
          <li>Используйте <code className="bg-gray-700 px-1 rounded">useState</code> для хранения:
            <ul className="list-circle pl-5 mt-1">
              <li>Списка задач (загружается с API)</li>
              <li>Текущего времени (обновляется каждую секунду)</li>
              <li>Размеров окна (отслеживает изменения)</li>
              <li>Заголовка страницы (меняется в зависимости от состояния)</li>
            </ul>
          </li>
          <li>Реализуйте <span className="font-medium">четыре отдельных</span> <code className="bg-gray-700 px-1 rounded">useEffect</code>:
            <ul className="list-circle pl-5 mt-1">
              <li>Для загрузки задач при монтировании</li>
              <li>Для обновления времени каждую секунду (с функцией очистки)</li>
              <li>Для отслеживания изменения размера окна (с функцией очистки)</li>
              <li>Для установки заголовка страницы при изменении определенных состояний</li>
            </ul>
          </li>
          <li>Отобразите всю информацию на странице: список задач, текущее время, размеры окна.</li>
          <li>Добавьте кнопки управления: "Обновить задачи", "Сбросить таймер".</li>
        </ul>
        <details className="group">
          <summary className="cursor-pointer text-sm text-gray-400 hover:text-gray-300 flex items-center gap-1">
            <span>Подсказка</span>
            <svg className="w-4 h-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </summary>
          <div className="mt-2 p-3 bg-gray-900/50 rounded text-sm text-gray-300">
            <p>Разделите логику на несколько <code className="bg-gray-700 px-1 rounded">useEffect</code> для лучшей читаемости. Для заголовка:</p>
            <pre className="bg-gray-800 text-gray-200 p-4 rounded-lg overflow-x-auto text-sm">
            {`useEffect(() => {
              document.title = \`Dashboard - \${taskCount} задач\`;
            }, [taskCount]);`}
            </pre>
          </div>
        </details>
      </div>

      {/* Заключение */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <div className="flex items-start gap-3">
          <div className="bg-green-500/20 p-2 rounded-lg flex-shrink-0">
            <RefreshCw className="w-5 h-5 text-green-400" />
          </div>
          <div>
            <h3 className="font-bold text-white mb-2">Отличная работа! 🎉</h3>
            <p className="text-gray-300">
              Эти задания помогли вам закрепить навыки использования хука <code className="bg-gray-700 px-1 rounded">useEffect</code> для выполнения побочных эффектов в React. Вы научились устанавливать и очищать таймеры, отслеживать события браузера, загружать данные с API, работать с localStorage и управлять несколькими независимыми эффектами в одном компоненте. Понимание и правильное применение <code className="bg-gray-700 px-1 rounded">useEffect</code> является ключом к созданию интерактивных и функциональных React-приложений, которые могут взаимодействовать с внешним миром и выполнять сложные асинхронные операции.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Part3;