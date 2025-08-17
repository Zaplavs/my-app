// src/data/courses/react/lesson12/part3.jsx
import React from 'react';
import { Eye, Code, Database, Play, Terminal } from 'lucide-react';

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
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">✏️ Практика: Хук useRef — доступ к DOM и сохранение значений</h1>
            <p className="text-gray-300">
              <span className="font-medium text-yellow-400">🎯 Цель:</span> Закрепить знания по использованию хука <code className="bg-gray-700 px-1.5 py-0.5 rounded text-green-300">useRef</code> для доступа к DOM-элементам и сохранения значений между рендерами в React через практические задания различной сложности.
            </p>
          </div>
        </div>
      </div>

      {/* Задание 1 */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
          <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">1</span>
          Форма с автофокусом и валидацией
        </h3>
        <p className="text-gray-300 mb-3">
          Создайте форму регистрации с использованием useRef для управления фокусом и валидации:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-gray-300 mb-3">
          <li>Создайте компонент <code className="bg-gray-700 px-1 rounded">RegistrationForm</code> с полями: имя, email, пароль, подтверждение пароля.</li>
          <li>Используйте <code className="bg-gray-700 px-1 rounded">useRef</code> для создания рефов на каждое поле ввода.</li>
          <li>Реализуйте автофокус на первое поле при монтировании компонента.</li>
          <li>Создайте функцию <code className="bg-gray-700 px-1 rounded">focusFirstInvalidField</code>, которая будет фокусироваться на первом поле с ошибкой после неудачной валидации.</li>
          <li>Реализуйте валидацию полей:
            <ul className="list-circle pl-5 mt-1">
              <li>Имя: не пустое, минимум 2 символа</li>
              <li>Email: не пустой, правильный формат email</li>
              <li>Пароль: не пустой, минимум 6 символов</li>
              <li>Подтверждение пароля: должно совпадать с паролем</li>
            </ul>
          </li>
          <li>Отобразите сообщения об ошибках под каждым полем.</li>
          <li>При отправке формы, если есть ошибки, вызывайте <code className="bg-gray-700 px-1 rounded">focusFirstInvalidField</code>.</li>
          <li>При успешной отправке сбрасывайте форму и устанавливайте фокус на первое поле.</li>
        </ul>
        <details className="group">
          <summary className="cursor-pointer text-sm text-gray-400 hover:text-gray-300 flex items-center gap-1">
            <span>Подсказка</span>
            <svg className="w-4 h-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </summary>
          <div className="mt-2 p-3 bg-gray-900/50 rounded text-sm text-gray-300">
            <p>Используйте <code className="bg-gray-700 px-1 rounded">useRef</code> для хранения объектов ошибок для каждого поля. В <code className="bg-gray-700 px-1 rounded">useEffect</code> с пустым массивом зависимостей установите фокус на первое поле.</p>
          </div>
        </details>
      </div>

      {/* Задание 2 */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
          <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">2</span>
          Таймер с управлением и сохранением состояния
        </h3>
        <p className="text-gray-300 mb-3">
          Создайте компонент таймера с использованием useRef для хранения интервалов и времени:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-gray-300 mb-3">
          <li>Создайте компонент <code className="bg-gray-700 px-1 rounded">Timer</code> с состоянием: секунды, минуты, часы.</li>
          <li>Используйте <code className="bg-gray-700 px-1 rounded">useRef</code> для хранения ID интервала (<code className="bg-gray-700 px-1 rounded">intervalRef</code>).</li>
          <li>Используйте <code className="bg-gray-700 px-1 rounded">useRef</code> для хранения времени начала таймера (<code className="bg-gray-700 px-1 rounded">startTimeRef</code>) для точного расчета времени.</li>
          <li>Реализуйте функции: старт, пауза, сброс, сохранение времени.</li>
          <li>При старте таймера сохраняйте время начала в <code className="bg-gray-700 px-1 rounded">startTimeRef</code>.</li>
          <li>При паузе очищайте интервал и сохраняйте текущее время.</li>
          <li>При старте после паузы рассчитывайте прошедшее время с момента <code className="bg-gray-700 px-1 rounded">startTimeRef</code>.</li>
          <li>Добавьте отображение миллисекунд (сотых долей секунды).</li>
          <li>Реализуйте функцию "Круг" (lap), которая сохраняет текущее время как круг и отображает список кругов.</li>
          <li>Используйте <code className="bg-gray-700 px-1 rounded">useRef</code> для хранения массива кругов (<code className="bg-gray-700 px-1 rounded">lapsRef</code>).</li>
          <li>Добавьте кнопку "Очистить круги", которая очищает список кругов.</li>
        </ul>
        <details className="group">
          <summary className="cursor-pointer text-sm text-gray-400 hover:text-gray-300 flex items-center gap-1">
            <span>Подсказка</span>
            <svg className="w-4 h-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </summary>
          <div className="mt-2 p-3 bg-gray-900/50 rounded text-sm text-gray-300">
            <p>Для точного времени используйте <code className="bg-gray-700 px-1 rounded">Date.now()</code>. Для обновления состояния на основе рефа используйте <code className="bg-gray-700 px-1 rounded">setLaps([...lapsRef.current])</code> после изменения рефа.</p>
          </div>
        </details>
      </div>

      {/* Задание 3 */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
          <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">3</span>
          Компонент с предыдущими значениями пропсов
        </h3>
        <p className="text-gray-300 mb-3">
          Создайте компонент, который отслеживает изменения пропсов с помощью useRef:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-gray-300 mb-3">
          <li>Создайте компонент <code className="bg-gray-700 px-1 rounded">UserCard</code>, который принимает пропсы: <code className="bg-gray-700 px-1 rounded">name</code>, <code className="bg-gray-700 px-1 rounded">email</code>, <code className="bg-gray-700 px-1 rounded">status</code> ("active", "inactive", "pending").</li>
          <li>Используйте <code className="bg-gray-700 px-1 rounded">useRef</code> для хранения предыдущих значений каждого пропса.</li>
          <li>Отобразите текущие значения пропсов и, если они изменились, предыдущие значения с пометкой "было".</li>
          <li>Добавьте индикатор изменений: если пропс изменился, отобразите надпись "изменилось" рядом с ним.</li>
          <li>Создайте компонент <code className="bg-gray-700 px-1 rounded">UserCardDemo</code>, который демонстрирует работу <code className="bg-gray-700 px-1 rounded">UserCard</code>.</li>
          <li>В демонстрационном компоненте добавьте кнопки для изменения пропсов <code className="bg-gray-700 px-1 rounded">UserCard</code> (изменить имя, email, статус).</li>
          <li>Отслеживайте количество изменений каждого пропса и отображайте счетчики.</li>
          <li>Добавьте кнопку "Сбросить счетчики", которая обнуляет все счетчики изменений.</li>
        </ul>
        <details className="group">
          <summary className="cursor-pointer text-sm text-gray-400 hover:text-gray-300 flex items-center gap-1">
            <span>Подсказка</span>
            <svg className="w-4 h-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </summary>
          <div className="mt-2 p-3 bg-gray-900/50 rounded text-sm text-gray-300">
            <p>Используйте <code className="bg-gray-700 px-1 rounded">useEffect</code> для отслеживания изменений пропсов. Внутри эффекта обновляйте рефы предыдущих значений и увеличивайте счетчики.</p>
          </div>
        </details>
      </div>

      {/* Задание 4 */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
          <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">4</span>
          Кастомный хук usePrevious и useRenderCount
        </h3>
        <p className="text-gray-300 mb-3">
          Создайте кастомные хуки для отслеживания предыдущих значений и подсчета рендеров:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-gray-300 mb-3">
          <li>Создайте кастомный хук <code className="bg-gray-700 px-1 rounded">usePrevious</code>, который возвращает предыдущее значение переданного значения:
            <ul className="list-circle pl-5 mt-1">
              <li>Принимает одно значение любого типа</li>
              <li>Возвращает предыдущее значение этого значения</li>
              <li>Использует <code className="bg-gray-700 px-1 rounded">useRef</code> для хранения предыдущего значения</li>
              <li>Использует <code className="bg-gray-700 px-1 rounded">useEffect</code> для обновления значения после рендера</li>
            </ul>
          </li>
          <li>Создайте кастомный хук <code className="bg-gray-700 px-1 rounded">useRenderCount</code>, который возвращает количество рендеров компонента:
            <ul className="list-circle pl-5 mt-1">
              <li>Использует <code className="bg-gray-700 px-1 rounded">useRef</code> для хранения счетчика</li>
              <li>Увеличивает счетчик на каждом рендере</li>
              <li>Возвращает текущее значение счетчика</li>
            </ul>
          </li>
          <li>Создайте компонент <code className="bg-gray-700 px-1 rounded">Counter</code> для демонстрации хуков:
            <ul className="list-circle pl-5 mt-1">
              <li>Использует <code className="bg-gray-700 px-1 rounded">useState</code> для хранения счетчика</li>
              <li>Использует <code className="bg-gray-700 px-1 rounded">usePrevious</code> для получения предыдущего значения счетчика</li>
              <li>Использует <code className="bg-gray-700 px-1 rounded">useRenderCount</code> для получения количества рендеров</li>
              <li>Отображает текущее значение, предыдущее значение и количество рендеров</li>
              <li>Добавляет кнопки увеличения, уменьшения и сброса счетчика</li>
            </ul>
          </li>
          <li>Создайте компонент <code className="bg-gray-700 px-1 rounded">FormDemo</code>, который демонстрирует <code className="bg-gray-700 px-1 rounded">usePrevious</code> с объектами:
            <ul className="list-circle pl-5 mt-1">
              <li>Использует <code className="bg-gray-700 px-1 rounded">useState</code> для хранения данных формы (имя, email)</li>
              <li>Использует <code className="bg-gray-700 px-1 rounded">usePrevious</code> для отслеживания предыдущего состояния формы</li>
              <li>Отображает текущие и предыдущие значения полей формы</li>
              <li>Добавляет кнопки для изменения значений полей</li>
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
            <p>В <code className="bg-gray-700 px-1 rounded">usePrevious</code> обновляйте реф в <code className="bg-gray-700 px-1 rounded">useEffect</code>. В <code className="bg-gray-700 px-1 rounded">useRenderCount</code> увеличивайте счетчик в теле хука (не в эффекте), так как хуки вызываются на каждом рендере.</p>
          </div>
        </details>
      </div>

      {/* Задание 5 */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
          <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">5</span>
          Компонент ImageGallery с ленивой загрузкой и IntersectionObserver
        </h3>
        <p className="text-gray-300 mb-3">
          Создайте галерею изображений с ленивой загрузкой, используя useRef и IntersectionObserver:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-gray-300 mb-3">
          <li>Создайте компонент <code className="bg-gray-700 px-1 rounded">ImageGallery</code>, который отображает сетку изображений.</li>
          <li>Используйте <code className="bg-gray-700 px-1 rounded">useRef</code> для хранения ссылок на каждый элемент изображения.</li>
          <li>Используйте <code className="bg-gray-700 px-1 rounded">useRef</code> для хранения экземпляра <code className="bg-gray-700 px-1 rounded">IntersectionObserver</code>.</li>
          <li>Реализуйте ленивую загрузку изображений: изображения загружаются только тогда, когда они попадают в область видимости.</li>
          <li>Используйте плейсхолдеры (например, серые прямоугольники) для изображений, которые еще не загрузились.</li>
          <li>Добавьте анимацию появления изображений после загрузки.</li>
          <li>Реализуйте функцию <code className="bg-gray-700 px-1 rounded">observeImages</code>, которая регистрирует все изображения в <code className="bg-gray-700 px-1 rounded">IntersectionObserver</code>.</li>
          <li>Реализуйте функцию <code className="bg-gray-700 px-1 rounded">unobserveImages</code> для очистки наблюдения при размонтировании.</li>
          <li>Добавьте обработку ошибок загрузки изображений (показывать заглушку при ошибке).</li>
          <li>Создайте пропс <code className="bg-gray-700 px-1 rounded">threshold</code> (по умолчанию 0.1) для настройки чувствительности IntersectionObserver.</li>
          <li>Добавьте возможность горизонтальной прокрутки галереи с кнопками "влево"/"вправо".</li>
          <li>Реализуйте индикатор загрузки для всей галереи и для отдельных изображений.</li>
        </ul>
        <details className="group">
          <summary className="cursor-pointer text-sm text-gray-400 hover:text-gray-300 flex items-center gap-1">
            <span>Подсказка</span>
            <svg className="w-4 h-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </summary>
          <div className="mt-2 p-3 bg-gray-900/50 rounded text-sm text-gray-300">
            <p>Создайте реф для хранения карты изображений и их состояния загрузки. Используйте <code className="bg-gray-700 px-1 rounded">useCallback</code> для создания обработчика пересечения, чтобы избежать повторного создания на каждый рендер.</p>
          </div>
        </details>
      </div>

      {/* Заключение */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <div className="flex items-start gap-3">
          <div className="bg-green-500/20 p-2 rounded-lg flex-shrink-0">
            <Eye className="w-5 h-5 text-green-400" />
          </div>
          <div>
            <h3 className="font-bold text-white mb-2">Отличная работа! 🎉</h3>
            <p className="text-gray-300">
              Эти задания помогли вам закрепить навыки использования хука <code className="bg-gray-700 px-1 rounded">useRef</code> для доступа к DOM-элементам, сохранения значений между рендерами, управления фокусом, таймерами и создания кастомных хуков. Вы научились использовать <code className="bg-gray-700 px-1 rounded">useRef</code> для хранения мутабельных значений, которые не вызывают перерендер, создавать сложные интерактивные компоненты с императивным управлением, отслеживать изменения пропсов и состояния, реализовывать ленивую загрузку изображений с IntersectionObserver, а также разрабатывать переиспользуемые кастомные хуки. Понимание и умение применять <code className="bg-gray-700 px-1 rounded">useRef</code> является важным навыком для создания производительных и функциональных React-приложений, где требуется прямой доступ к DOM или сохранение значений между рендерами без влияния на отображение.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Part3;