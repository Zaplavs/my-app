// src/data/courses/react/lesson11/part3.jsx
import React from 'react';
import { Shuffle, Settings, Database, Play, Terminal } from 'lucide-react';

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
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">✏️ Практика: Хук useReducer — сложное состояние</h1>
            <p className="text-gray-300">
              <span className="font-medium text-yellow-400">🎯 Цель:</span> Закрепить знания по использованию хука <code className="bg-gray-700 px-1.5 py-0.5 rounded text-green-300">useReducer</code> для управления сложным состоянием в React через практические задания различной сложности.
            </p>
          </div>
        </div>
      </div>

      {/* Задание 1 */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
          <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">1</span>
          Расширенный счетчик с историей действий
        </h3>
        <p className="text-gray-300 mb-3">
          Создайте расширенный счетчик, который отслеживает историю действий пользователя:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-gray-300 mb-3">
          <li>Создайте редьюсер <code className="bg-gray-700 px-1 rounded">counterReducer</code>, который будет управлять состоянием счетчика.</li>
          <li>Состояние должно включать: текущее значение счетчика, шаг инкремента/декремента, историю действий (массив объектов с типом действия и временем).</li>
          <li>Реализуйте действия: INCREMENT, DECREMENT, SET_STEP, RESET, UNDO (отмена последнего действия).</li>
          <li>Каждое действие должно добавляться в историю с типом, значением и меткой времени.</li>
          <li>Создайте компонент счетчика с кнопками для всех действий и отображением истории.</li>
          <li>Добавьте возможность установки шага через input и отображение текущего шага.</li>
          <li>Реализуйте кнопку "Отменить", которая отменяет последнее действие (UNDO).</li>
        </ul>
        <details className="group">
          <summary className="cursor-pointer text-sm text-gray-400 hover:text-gray-300 flex items-center gap-1">
            <span>Подсказка</span>
            <svg className="w-4 h-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </summary>
          <div className="mt-2 p-3 bg-gray-900/50 rounded text-sm text-gray-300">
            <p>Для действия UNDO восстанавливайте предыдущее состояние счетчика из истории. Используйте <code className="bg-gray-700 px-1 rounded">Date.now()</code> или <code className="bg-gray-700 px-1 rounded">new Date().toISOString()</code> для меток времени.</p>
          </div>
        </details>
      </div>

      {/* Задание 2 */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
          <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">2</span>
          Система управления задачами (TODO) с фильтрами
        </h3>
        <p className="text-gray-300 mb-3">
          Создайте полноценную систему управления задачами с использованием useReducer:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-gray-300 mb-3">
          <li>Создайте редьюсер <code className="bg-gray-700 px-1 rounded">todoReducer</code> для управления списком задач.</li>
          <li>Каждая задача должна иметь поля: id, text, completed, createdAt, priority ("low", "medium", "high").</li>
          <li>Реализуйте действия: ADD_TODO, TOGGLE_TODO, REMOVE_TODO, SET_FILTER, SET_PRIORITY_FILTER, CLEAR_COMPLETED, EDIT_TODO.</li>
          <li>Состояние должно включать: массив задач, фильтр по статусу ("all", "active", "completed"), фильтр по приоритету ("all", "low", "medium", "high").</li>
          <li>Создайте компонент <code className="bg-gray-700 px-1 rounded">TodoList</code>, который отображает отфильтрованный список задач.</li>
          <li>Создайте компонент <code className="bg-gray-700 px-1 rounded">TodoForm</code> для добавления новых задач с возможностью выбора приоритета.</li>
          <li>Добавьте отображение количества активных задач.</li>
          <li>Реализуйте кнопки для очистки выполненных задач и переключения фильтров.</li>
          <li>Добавьте возможность редактирования текста задачи по двойному клику.</li>
        </ul>
        <details className="group">
          <summary className="cursor-pointer text-sm text-gray-400 hover:text-gray-300 flex items-center gap-1">
            <span>Подсказка</span>
            <svg className="w-4 h-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </summary>
          <div className="mt-2 p-3 bg-gray-900/50 rounded text-sm text-gray-300">
            <p>Для фильтрации задач создайте селектор в компоненте, который применяет оба фильтра последовательно. Для редактирования задачи можно добавить временно состояние редактирования в саму задачу или отдельно в редьюсере.</p>
          </div>
        </details>
      </div>

      {/* Задание 3 */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
          <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">3</span>
          Форма регистрации с валидацией и состоянием загрузки
        </h3>
        <p className="text-gray-300 mb-3">
          Создайте сложную форму регистрации с использованием useReducer для управления всеми аспектами состояния:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-gray-300 mb-3">
          <li>Создайте редьюсер <code className="bg-gray-700 px-1 rounded">formReducer</code> для управления состоянием формы.</li>
          <li>Состояние формы должно включать: поля (имя, email, пароль, подтверждение пароля), ошибки для каждого поля, общие ошибки формы, состояние загрузки, состояние успешной отправки.</li>
          <li>Реализуйте действия: SET_FIELD, SET_FIELD_ERROR, SET_GENERAL_ERROR, SET_LOADING, SET_SUCCESS, RESET_FORM, VALIDATE_FIELD, VALIDATE_FORM.</li>
          <li>Создайте функции валидации для каждого поля:
            <ul className="list-circle pl-5 mt-1">
              <li>Имя: не пустое, минимум 2 символа</li>
              <li>Email: не пустой, правильный формат email</li>
              <li>Пароль: не пустой, минимум 6 символов</li>
              <li>Подтверждение пароля: должно совпадать с паролем</li>
            </ul>
          </li>
          <li>Создайте компонент формы с полями ввода, отображением ошибок и состоянием загрузки.</li>
          <li>Реализуйте валидацию в реальном времени при изменении полей и при отправке формы.</li>
          <li>Добавьте имитацию отправки данных с задержкой (setTimeout) и обработку успешного/неуспешного результата.</li>
          <li>После успешной отправки показывайте сообщение об успехе и сбрасывайте форму через несколько секунд.</li>
        </ul>
        <details className="group">
          <summary className="cursor-pointer text-sm text-gray-400 hover:text-gray-300 flex items-center gap-1">
            <span>Подсказка</span>
            <svg className="w-4 h-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </summary>
          <div className="mt-2 p-3 bg-gray-900/50 rounded text-sm text-gray-300">
            <p>Используйте <code className="bg-gray-700 px-1 rounded">useReducer</code> для централизованного управления всем состоянием формы. Для валидации создайте вспомогательные функции, которые вызываются из редьюсера или из обработчиков событий.</p>
          </div>
        </details>
      </div>

      {/* Задание 4 */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
          <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">4</span>
          Корзина покупок с применением промокодов и расчетом итогов
        </h3>
        <p className="text-gray-300 mb-3">
          Создайте систему корзины покупок с комплексным управлением состоянием:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-gray-300 mb-3">
          <li>Создайте редьюсер <code className="bg-gray-700 px-1 rounded">cartReducer</code> для управления состоянием корзины.</li>
          <li>Состояние корзины должно включать: массив товаров (id, name, price, quantity, discount), промокод, доступные промокоды (массив объектов с кодом и скидкой), итоговые значения (subtotal, discountAmount, total).</li>
          <li>Реализуйте действия: ADD_ITEM, REMOVE_ITEM, UPDATE_QUANTITY, APPLY_PROMO_CODE, REMOVE_PROMO_CODE, CLEAR_CART, CALCULATE_TOTALS.</li>
          <li>Создайте систему промокодов с различными типами скидок (процент от суммы, фиксированная сумма).</li>
          <li>Создайте компонент <code className="bg-gray-700 px-1 rounded">CartItem</code> для отображения отдельного товара с возможностью изменения количества.</li>
          <li>Создайте компонент <code className="bg-gray-700 px-1 rounded">CartSummary</code> для отображения итогов и поля ввода промокода.</li>
          <li>Реализуйте автоматический пересчет итогов при любом изменении корзины.</li>
          <li>Добавьте отображение скидки по промокоду и общей суммы к оплате.</li>
          <li>Реализуйте проверку корректности промокода и отображение сообщений об ошибках.</li>
        </ul>
        <details className="group">
          <summary className="cursor-pointer text-sm text-gray-400 hover:text-gray-300 flex items-center gap-1">
            <span>Подсказка</span>
            <svg className="w-4 h-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </summary>
          <div className="mt-2 p-3 bg-gray-900/50 rounded text-sm text-gray-300">
            <p>Для расчета итогов создайте отдельное действие CALCULATE_TOTALS, которое будет вызываться после каждого изменения корзины. Храните доступные промокоды в состоянии и проверяйте введенный код на соответствие.</p>
          </div>
        </details>
      </div>

      {/* Задание 5 */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
          <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">5</span>
          Многошаговая форма с управлением прогрессом
        </h3>
        <p className="text-gray-300 mb-3">
          Создайте многошаговую форму (wizard) с использованием useReducer для управления сложным состоянием процесса:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-gray-300 mb-3">
          <li>Создайте редьюсер <code className="bg-gray-700 px-1 rounded">wizardReducer</code> для управления состоянием многошагового процесса.</li>
          <li>Определите минимум 4 шага формы (например: персональные данные, контактная информация, предпочтения, подтверждение).</li>
          <li>Состояние должно включать: текущий шаг, данные для каждого шага, валидность каждого шага, общее состояние валидации, прогресс (процент завершения).</li>
          <li>Реализуйте действия: SET_CURRENT_STEP, UPDATE_STEP_DATA, VALIDATE_STEP, SET_STEP_VALIDITY, GO_TO_NEXT_STEP, GO_TO_PREV_STEP, RESET_WIZARD, SUBMIT_FORM.</li>
          <li>Создайте компонент <code className="bg-gray-700 px-1 rounded">Wizard</code>, который отображает текущий шаг и элементы управления.</li>
          <li>Создайте отдельные компоненты для каждого шага формы с соответствующими полями ввода.</li>
          <li>Реализуйте валидацию на каждом шаге при переходе к следующему шагу.</li>
          <li>Добавьте индикатор прогресса (полоса прогресса и/или шаги с номерами).</li>
          <li>Реализуйте возможность навигации между шагами с сохранением введенных данных.</li>
          <li>Добавьте имитацию отправки данных формы и отображение результата.</li>
          <li>Реализуйте сброс формы и возврат к первому шагу.</li>
        </ul>
        <details className="group">
          <summary className="cursor-pointer text-sm text-gray-400 hover:text-gray-300 flex items-center gap-1">
            <span>Подсказка</span>
            <svg className="w-4 h-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </summary>
          <div className="mt-2 p-3 bg-gray-900/50 rounded text-sm text-gray-300">
            <p>Используйте объект для хранения данных каждого шага, где ключи - это названия шагов. Для навигации проверяйте валидность текущего шага перед переходом. Прогресс можно рассчитывать как отношение количества валидных шагов к общему количеству шагов.</p>
          </div>
        </details>
      </div>

      {/* Заключение */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <div className="flex items-start gap-3">
          <div className="bg-green-500/20 p-2 rounded-lg flex-shrink-0">
            <Shuffle className="w-5 h-5 text-green-400" />
          </div>
          <div>
            <h3 className="font-bold text-white mb-2">Отличная работа! 🎉</h3>
            <p className="text-gray-300">
              Эти задания помогли вам закрепить навыки использования хука <code className="bg-gray-700 px-1 rounded">useReducer</code> для управления сложным состоянием в React. Вы научились создавать редьюсеры для счетчиков с историей, систем управления задачами, сложных форм с валидацией, корзин покупок и многошаговых процессов. Вы также освоили структурирование действий, работу с историей изменений, централизованное управление состоянием и реализацию сложной бизнес-логики с помощью редьюсеров. Понимание и умение применять useReducer является важным навыком для создания масштабируемых React-приложений с предсказуемым управлением состоянием.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Part3;