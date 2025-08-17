// src/data/courses/react/lesson15/part3.jsx
import React from 'react';
import { Zap, Database, Code, Play, Terminal } from 'lucide-react';

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
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">✏️ Практика: Оптимизация производительности</h1>
            <p className="text-gray-300">
              <span className="font-medium text-yellow-400">🎯 Цель:</span> Закрепить знания по оптимизации производительности React-приложений через практические задания различной сложности.
            </p>
          </div>
        </div>
      </div>

      {/* Задание 1 */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
          <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">1</span>
          Оптимизация списка пользователей с React.memo
        </h3>
        <p className="text-gray-300 mb-3">
          Создайте оптимизированное приложение для отображения списка пользователей:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-gray-300 mb-3">
          <li>Создайте компонент <code className="bg-gray-700 px-1.5 py-0.5 rounded text-green-300">UserList</code>, который загружает список пользователей с <code className="bg-gray-700 px-1 rounded">https://jsonplaceholder.typicode.com/users</code> с помощью <code className="bg-gray-700 px-1 rounded">fetch</code> и <code className="bg-gray-700 px-1 rounded">useEffect</code>.</li>
          <li>Создайте компонент <code className="bg-gray-700 px-1 rounded">UserItem</code> для отображения информации о каждом пользователе (имя, email, телефон, вебсайт).</li>
          <li>Добавьте состояние <code className="bg-gray-700 px-1 rounded">selectedUserId</code> для отслеживания выбранного пользователя.</li>
          <li>Добавьте состояние <code className="bg-gray-700 px-1 rounded">searchTerm</code> для фильтрации пользователей по имени.</li>
          <li>Реализуйте функциональность выбора пользователя по клику.</li>
          <li>Реализуйте функциональность поиска пользователей по имени (без учета регистра).</li>
          <li>Добавьте индикаторы загрузки и ошибок.</li>
          <li><span className="font-medium">Оптимизируйте</span> компонент <code className="bg-gray-700 px-1 rounded">UserItem</code> с помощью <code className="bg-gray-700 px-1 rounded">React.memo</code>, чтобы предотвратить лишние перерендеры при изменении состояния выбора или поиска.</li>
          <li>Добавьте визуальную индикацию выбранного пользователя (например, другой цвет фона).</li>
          <li>Отобразите детальную информацию о выбранном пользователе под списком.</li>
        </ul>
        <details className="group">
          <summary className="cursor-pointer text-sm text-gray-400 hover:text-gray-300 flex items-center gap-1">
            <span>Подсказка</span>
            <svg className="w-4 h-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </summary>
          <div className="mt-2 p-3 bg-gray-900/50 rounded text-sm text-gray-300">
            <p>Для оптимизации <code className="bg-gray-700 px-1 rounded">UserItem</code> передавайте в него только необходимые пропсы: <code className="bg-gray-700 px-1 rounded">user</code>, <code className="bg-gray-700 px-1 rounded">isSelected</code>, <code className="bg-gray-700 px-1 rounded">onSelect</code>. Используйте <code className="bg-gray-700 px-1 rounded">useCallback</code> для функции <code className="bg-gray-700 px-1 rounded">onSelect</code>.</p>
          </div>
        </details>
      </div>

      {/* Задание 2 */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
          <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">2</span>
          Калькулятор чисел Фибоначчи с useMemo
        </h3>
        <p className="text-gray-300 mb-3">
          Создайте компонент калькулятора чисел Фибоначчи с оптимизацией тяжелых вычислений:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-gray-300 mb-3">
          <li>Создайте компонент <code className="bg-gray-700 px-1 rounded">FibonacciCalculator</code> с полем ввода для числа <code className="bg-gray-700 px-1 rounded">n</code>.</li>
          <li>Реализуйте функцию вычисления n-го числа Фибоначчи с помощью рекурсии.</li>
          <li>Используйте <code className="bg-gray-700 px-1 rounded">useMemo</code> для кэширования результата вычисления, чтобы избежать повторных тяжелых вычислений при каждом рендере.</li>
          <li>Добавьте состояние <code className="bg-gray-700 px-1 rounded">calculationHistory</code> для хранения истории вычислений (массив объектов с полями <code className="bg-gray-700 px-1 rounded">n</code> и <code className="bg-gray-700 px-1 rounded">result</code>).</li>
          <li>Отобразите историю вычислений в виде списка под результатом.</li>
          <li>Добавьте кнопку "Очистить историю" для очистки массива истории.</li>
          <li>Добавьте индикатор "Вычисляется..." во время выполнения тяжелых вычислений.</li>
          <li>Реализуйте ограничение на максимальное значение <code className="bg-gray-700 px-1 rounded">n</code> (например, 40) для предотвращения зависания браузера.</li>
          <li>Добавьте визуализацию времени выполнения последнего вычисления.</li>
        </ul>
        <details className="group">
          <summary className="cursor-pointer text-sm text-gray-400 hover:text-gray-300 flex items-center gap-1">
            <span>Подсказка</span>
            <svg className="w-4 h-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </summary>
          <div className="mt-2 p-3 bg-gray-900/50 rounded text-sm text-gray-300">
            <p>Для измерения времени используйте <code className="bg-gray-700 px-1 rounded">performance.now()</code> до и после вычисления. Для рекурсивного вычисления Фибоначчи используйте мемоизацию внутри самой функции или реализуйте итеративный подход.</p>
          </div>
        </details>
      </div>

      {/* Задание 3 */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
          <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">3</span>
          Форма с валидацией и useCallback
        </h3>
        <p className="text-gray-300 mb-3">
          Создайте сложную форму с валидацией и оптимизированными обработчиками событий:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-gray-300 mb-3">
          <li>Создайте компонент <code className="bg-gray-700 px-1 rounded">RegistrationForm</code> с полями: имя, email, пароль, подтверждение пароля, дата рождения, страна, согласие с условиями.</li>
          <li>Используйте <code className="bg-gray-700 px-1 rounded">useState</code> для управления состоянием каждого поля и состоянием ошибок.</li>
          <li>Реализуйте валидацию для каждого поля:
            <ul className="list-circle pl-5 mt-1">
              <li>Имя: не пустое, минимум 2 символа</li>
              <li>Email: не пустой, правильный формат email</li>
              <li>Пароль: не пустой, минимум 6 символов</li>
              <li>Подтверждение пароля: должно совпадать с паролем</li>
              <li>Дата рождения: не пустая, пользователю должно быть не менее 13 лет</li>
              <li>Страна: должен быть выбран один из вариантов</li>
              <li>Согласие: должно быть отмечено</li>
            </ul>
          </li>
          <li>Оптимизируйте функции валидации и обработчики событий с помощью <code className="bg-gray-700 px-1 rounded">useCallback</code>.</li>
          <li>Создайте компонент <code className="bg-gray-700 px-1 rounded">FormField</code> для отображения каждого поля ввода с меткой и сообщением об ошибке.</li>
          <li>Оптимизируйте <code className="bg-gray-700 px-1 rounded">FormField</code> с помощью <code className="bg-gray-700 px-1 rounded">React.memo</code>.</li>
          <li>Реализуйте мгновенную валидацию при изменении каждого поля (debounce 300ms).</li>
          <li>Добавьте кнопку "Проверить все поля" для запуска валидации всех полей сразу.</li>
          <li>Реализуйте отправку формы с имитацией API-запроса (setTimeout 2 секунды).</li>
          <li>Отобразите состояние отправки (загрузка) и результат (успех/ошибка).</li>
          <li>Добавьте возможность сброса формы к начальному состоянию.</li>
        </ul>
        <details className="group">
          <summary className="cursor-pointer text-sm text-gray-400 hover:text-gray-300 flex items-center gap-1">
            <span>Подсказка</span>
            <svg className="w-4 h-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </summary>
          <div className="mt-2 p-3 bg-gray-900/50 rounded text-sm text-gray-300">
            <p>Для debounce используйте <code className="bg-gray-700 px-1 rounded">useRef</code> для хранения ID таймера и <code className="bg-gray-700 px-1 rounded">useEffect</code> для очистки. Для <code className="bg-gray-700 px-1 rounded">useCallback</code> правильно укажите зависимости - только те значения, которые действительно используются в функции.</p>
          </div>
        </details>
      </div>

      {/* Задание 4 */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
          <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">4</span>
          Дашборд с графиками и таблицами данных
        </h3>
        <p className="text-gray-300 mb-3">
          Создайте комплексный дашборд с оптимизированными компонентами и тяжелыми вычислениями:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-gray-300 mb-3">
          <li>Создайте компонент <code className="bg-gray-700 px-1 rounded">Dashboard</code> с несколькими виджетами: график продаж, таблица пользователей, статистика по регионам.</li>
          <li>Используйте моковые данные для имитации API-ответов (массивы объектов с различными полями).</li>
          <li>Создайте компонент <code className="bg-gray-700 px-1 rounded">SalesChart</code> для отображения графика продаж за последние 12 месяцев.</li>
          <li>Создайте компонент <code className="bg-gray-700 px-1 rounded">UsersTable</code> для отображения таблицы пользователей с возможностью сортировки по столбцам.</li>
          <li>Создайте компонент <code className="bg-gray-700 px-1 rounded">RegionalStats</code> для отображения статистики по регионам в виде списка с процентами.</li>
          <li>Добавьте фильтры для всех виджетов: выбор диапазона дат, выбор региона, поиск по пользователям.</li>
          <li>Реализуйте состояние <code className="bg-gray-700 px-1 rounded">dashboardFilters</code> для управления общими фильтрами дашборда.</li>
          <li>Оптимизируйте каждый виджет с помощью <code className="bg-gray-700 px-1 rounded">React.memo</code>.</li>
          <li>Используйте <code className="bg-gray-700 px-1 rounded">useMemo</code> для тяжелых вычислений:
            <ul className="list-circle pl-5 mt-1">
              <li>Фильтрация и сортировка данных для таблицы</li>
              <li>Агрегация данных для графика</li>
              <li>Расчет процентов для статистики</li>
              <li>Форматирование чисел и дат</li>
            </ul>
          </li>
          <li>Используйте <code className="bg-gray-700 px-1 rounded">useCallback</code> для обработчиков событий фильтров и сортировки.</li>
          <li>Добавьте визуальные эффекты при загрузке данных (скелетоны, спиннеры).</li>
          <li>Реализуйте обновление данных по таймеру (имитация получения новых данных каждые 30 секунд).</li>
          <li>Добавьте возможность экспорта данных в CSV.</li>
          <li>Реализуйте темизацию (светлая/темная) с сохранением выбора.</li>
        </ul>
        <details className="group">
          <summary className="cursor-pointer text-sm text-gray-400 hover:text-gray-300 flex items-center gap-1">
            <span>Подсказка</span>
            <svg className="w-4 h-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </summary>
          <div className="mt-2 p-3 bg-gray-900/50 rounded text-sm text-gray-300">
            <p>Для агрегации данных используйте методы массивов <code className="bg-gray-700 px-1 rounded">reduce</code>, <code className="bg-gray-700 px-1 rounded">filter</code>, <code className="bg-gray-700 px-1 rounded">map</code>. Для форматирования чисел используйте <code className="bg-gray-700 px-1 rounded">Intl.NumberFormat</code>. Для управления таймером используйте <code className="bg-gray-700 px-1 rounded">useEffect</code> с возвратом функции очистки.</p>
          </div>
        </details>
      </div>

      {/* Задание 5 */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
          <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">5</span>
          Комплексное приложение с профилем пользователя и настройками
        </h3>
        <p className="text-gray-300 mb-3">
          Создайте комплексное приложение с профилем пользователя, настройками и оптимизированными компонентами:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-gray-300 mb-3">
          <li>Создайте компонент <code className="bg-gray-700 px-1 rounded">UserProfileApp</code> с навигацией между разделами: Профиль, Настройки, Активность.</li>
          <li>Создайте компонент <code className="bg-gray-700 px-1 rounded">ProfileSection</code> для отображения и редактирования профиля пользователя.</li>
          <li>Создайте компонент <code className="bg-gray-700 px-1 rounded">SettingsSection</code> для управления настройками приложения.</li>
          <li>Создайте компонент <code className="bg-gray-700 px-1 rounded">ActivitySection</code> для отображения истории активности пользователя.</li>
          <li>Используйте контекст (<code className="bg-gray-700 px-1 rounded">createContext</code>, <code className="bg-gray-700 px-1 rounded">useContext</code>) для управления глобальным состоянием пользователя и настроек.</li>
          <li>Оптимизируйте все компоненты с помощью <code className="bg-gray-700 px-1 rounded">React.memo</code>.</li>
          <li>Используйте <code className="bg-gray-700 px-1 rounded">useMemo</code> для:
            <ul className="list-circle pl-5 mt-1">
              <li>Форматирования данных профиля</li>
              <li>Фильтрации и сортировки истории активности</li>
              <li>Валидации настроек перед сохранением</li>
              <li>Генерации аватаров на основе имени пользователя</li>
            </ul>
          </li>
          <li>Используйте <code className="bg-gray-700 px-1 rounded">useCallback</code> для:
            <ul className="list-circle pl-5 mt-1">
              <li>Обработчиков изменения профиля</li>
              <li>Обработчиков изменения настроек</li>
              <li>Функций фильтрации активности</li>
              <li>Функций экспорта данных</li>
            </ul>
          </li>
          <li>Реализуйте аватар пользователя с возможностью загрузки нового изображения.</li>
          <li>Добавьте валидацию email и телефона в реальном времени.</li>
          <li>Реализуйте двухфакторную аутентификацию в настройках безопасности.</li>
          <li>Добавьте уведомления о изменениях (toast-сообщения).</li>
          <li>Реализуйте экспорт профиля и настроек в JSON.</li>
          <li>Добавьте темизацию с превью тем в настройках.</li>
          <li>Реализуйте локализацию (минимум 2 языка) с сохранением выбора.</li>
          <li>Добавьте возможность сброса настроек к значениям по умолчанию.</li>
        </ul>
        <details className="group">
          <summary className="cursor-pointer text-sm text-gray-400 hover:text-gray-300 flex items-center gap-1">
            <span>Подсказка</span>
            <svg className="w-4 h-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </summary>
          <div className="mt-2 p-3 bg-gray-900/50 rounded text-sm text-gray-300">
            <p>Для генерации аватаров используйте библиотеку like <code className="bg-gray-700 px-1 rounded">jdenticon</code> или создайте SVG на основе хэша имени. Для toast-уведомлений можно использовать готовую библиотеку или создать собственный контекст уведомлений.</p>
          </div>
        </details>
      </div>

      {/* Заключение */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <div className="flex items-start gap-3">
          <div className="bg-green-500/20 p-2 rounded-lg flex-shrink-0">
            <Zap className="w-5 h-5 text-green-400" />
          </div>
          <div>
            <h3 className="font-bold text-white mb-2">Отличная работа! 🎉</h3>
            <p className="text-gray-300">
              Эти задания помогли вам закрепить навыки оптимизации производительности React-приложений. Вы научились использовать <code className="bg-gray-700 px-1 rounded">React.memo</code> для предотвращения лишних перерендеров компонентов, применять <code className="bg-gray-700 px-1 rounded">useMemo</code> для кэширования тяжелых вычислений и создания сложных объектов, а также использовать <code className="bg-gray-700 px-1 rounded">useCallback</code> для оптимизации функций, передаваемых в дочерние компоненты. Вы также освоили лучшие практики оптимизации, включая правильное использование массивов зависимостей, избегание преждевременной оптимизации и измерение производительности. Понимание и умение применять эти техники является ключевым навыком для создания быстрых и эффективных React-приложений, которые обеспечивают отличный пользовательский опыт даже при работе со сложными данными и интерфейсами.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Part3;