// src/data/courses/react/lesson9/part3.jsx
import React from 'react';
import { Eye, ToggleLeft, Code, Play, Terminal } from 'lucide-react';

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
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">✏️ Практика: Условный рендеринг и индикаторы</h1>
            <p className="text-gray-300">
              <span className="font-medium text-yellow-400">🎯 Цель:</span> Закрепить знания по условному рендерингу и созданию индикаторов состояний в React через практические задания различной сложности.
            </p>
          </div>
        </div>
      </div>

      {/* Задание 1 */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
          <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">1</span>
          Компонент профиля пользователя с различными состояниями
        </h3>
        <p className="text-gray-300 mb-3">
          Создайте компонент <code className="bg-gray-700 px-1.5 py-0.5 rounded text-green-300">UserProfile</code>, который отображает профиль пользователя с обработкой различных состояний:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-gray-300 mb-3">
          <li>Компонент принимает пропсы: <code className="bg-gray-700 px-1 rounded">user</code> (объект с данными пользователя или null), <code className="bg-gray-700 px-1 rounded">loading</code> (булево), <code className="bg-gray-700 px-1 rounded">error</code> (строка ошибки или null).</li>
          <li>Реализуйте условный рендеринг для четырех состояний:
            <ul className="list-circle pl-5 mt-1">
              <li>Показ "Загрузка..." если <code className="bg-gray-700 px-1 rounded">loading</code> равно <code className="bg-gray-700 px-1 rounded">true</code></li>
              <li>Показ сообщения об ошибке если <code className="bg-gray-700 px-1 rounded">error</code> не null</li>
              <li>Показ сообщения "Пользователь не найден" если <code className="bg-gray-700 px-1 rounded">user</code> равен <code className="bg-gray-700 px-1 rounded">null</code> и нет загрузки/ошибки</li>
              <li>Показ карточки профиля с данными пользователя если <code className="bg-gray-700 px-1 rounded">user</code> существует</li>
            </ul>
          </li>
          <li>Используйте разные способы условного рендеринга: ранний возврат, логическое И, тернарный оператор.</li>
          <li>Для карточки профиля отобразите имя, email, телефон и вебсайт пользователя.</li>
        </ul>
        <details className="group">
          <summary className="cursor-pointer text-sm text-gray-400 hover:text-gray-300 flex items-center gap-1">
            <span>Подсказка</span>
            <svg className="w-4 h-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </summary>
          <div className="mt-2 p-3 bg-gray-900/50 rounded text-sm text-gray-300">
            <p>Используйте ранний возврат для состояний загрузки и ошибки. Для отображения данных пользователя используйте тернарный оператор или логическое И.</p>
          </div>
        </details>
      </div>

      {/* Задание 2 */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
          <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">2</span>
          Форма регистрации с условными полями
        </h3>
        <p className="text-gray-300 mb-3">
          Создайте компонент <code className="bg-gray-700 px-1 rounded">RegistrationForm</code>, который реализует форму регистрации с условными полями:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-gray-300 mb-3">
          <li>Используйте <code className="bg-gray-700 px-1 rounded">useState</code> для хранения значений полей: тип пользователя ("individual" или "company"), имя, фамилия, email, название компании (если тип "company").</li>
          <li>Отобразите радио-кнопки для выбора типа пользователя.</li>
          <li>Отобразите общие поля: имя, фамилия, email.</li>
          <li>Условно отобразите поле "Название компании" только если выбран тип "company" (используйте логическое И).</li>
          <li>Добавьте чекбокс "Согласен с условиями" и кнопку отправки формы.</li>
          <li>Условно отобразите кнопку отправки только если чекбокс согласия отмечен.</li>
          <li>При отправке формы отобразите сообщение "Регистрация успешна!" под формой.</li>
          <li>Добавьте условное стилизация для полей ввода: зеленая рамка при валидном значении, красная при невалидном.</li>
        </ul>
        <details className="group">
          <summary className="cursor-pointer text-sm text-gray-400 hover:text-gray-300 flex items-center gap-1">
            <span>Подсказка</span>
            <svg className="w-4 h-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </summary>
          <div className="mt-2 p-3 bg-gray-900/50 rounded text-sm text-gray-300">
            <p>Для условного отображения используйте <code className="bg-gray-700 px-1 rounded">{'{userType === "company" && <input />}'}</code>. Для валидации полей проверяйте их значения в состоянии.</p>
          </div>
        </details>
      </div>

      {/* Задание 3 */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
          <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">3</span>
          Список задач с фильтрацией и пустыми состояниями
        </h3>
        <p className="text-gray-300 mb-3">
          Создайте компонент <code className="bg-gray-700 px-1 rounded">TodoList</code>, который отображает список задач с фильтрацией и различными состояниями:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-gray-300 mb-3">
          <li>Используйте <code className="bg-gray-700 px-1 rounded">useState</code> для хранения массива задач, фильтра ("all", "active", "completed") и текста новой задачи.</li>
          <li>Каждая задача должна иметь поля: id, text, completed (булево).</li>
          <li>Реализуйте функции: добавление задачи, переключение статуса задачи, удаление задачи.</li>
          <li>Отобразите фильтры: "Все", "Активные", "Выполненные" в виде кнопок.</li>
          <li>Условно добавьте класс "active" к кнопке активного фильтра.</li>
          <li>Отфильтруйте задачи в соответствии с выбранным фильтром.</li>
          <li>Реализуйте три состояния отображения:
            <ul className="list-circle pl-5 mt-1">
              <li>Показ списка задач, если есть задачи после фильтрации</li>
              <li>Показ сообщения "Нет активных задач" при пустом списке и фильтре "active"</li>
              <li>Показ сообщения "Все задачи выполнены!" при пустом списке и фильтре "completed"</li>
              <li>Показ сообщения "Список задач пуст" при пустом списке и фильтре "all"</li>
            </ul>
          </li>
          <li>Отобразите счетчики: общее количество задач, количество активных задач.</li>
        </ul>
        <details className="group">
          <summary className="cursor-pointer text-sm text-gray-400 hover:text-gray-300 flex items-center gap-1">
            <span>Подсказка</span>
            <svg className="w-4 h-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </summary>
          <div className="mt-2 p-3 bg-gray-900/50 rounded text-sm text-gray-300">
            <p>Используйте тернарный оператор или цепочку условий для определения, какое сообщение показывать при пустом списке. Для фильтрации: <code className="bg-gray-700 px-1 rounded">{`tasks.filter(task => ...)`}</code>.</p>
          </div>
        </details>
      </div>

      {/* Задание 4 */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
          <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">4</span>
          Панель управления с рольевой доступностью
        </h3>
        <p className="text-gray-300 mb-3">
          Создайте компонент <code className="bg-gray-700 px-1 rounded">AdminPanel</code>, который отображает панель управления с различными разделами в зависимости от роли пользователя:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-gray-300 mb-3">
          <li>Компонент принимает пропс <code className="bg-gray-700 px-1 rounded">userRole</code> ("guest", "user", "moderator", "admin").</li>
          <li>Реализуйте условный рендеринг разделов панели в зависимости от роли:
            <ul className="list-circle pl-5 mt-1">
              <li>"guest" - показ только приветствия и кнопки "Войти"</li>
              <li>"user" - показ профиля, настроек и базовой информации</li>
              <li>"moderator" - показ всего для "user" + модераторские инструменты</li>
              <li>"admin" - показ всего + административные функции</li>
            </ul>
          </li>
          <li>Используйте <code className="bg-gray-700 px-1 rounded">if/else</code> или <code className="bg-gray-700 px-1 rounded">switch</code> вне JSX для определения доступных разделов.</li>
          <li>Для каждого раздела отобразите соответствующий заголовок и список доступных действий.</li>
          <li>Добавьте индикатор текущей роли пользователя в верхней части панели.</li>
          <li>Условно отобразите предупреждение о необходимости повышения прав, если пользователь пытается получить доступ к закрытым разделам.</li>
        </ul>
        <details className="group">
          <summary className="cursor-pointer text-sm text-gray-400 hover:text-gray-300 flex items-center gap-1">
            <span>Подсказка</span>
            <svg className="w-4 h-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </summary>
          <div className="mt-2 p-3 bg-gray-900/50 rounded text-sm text-gray-300">
            <p>Используйте <code className="bg-gray-700 px-1 rounded">switch</code> для определения содержимого панели. Создайте отдельные компоненты для каждого раздела панели.</p>
          </div>
        </details>
      </div>

      {/* Задание 5 */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
          <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">5</span>
          Комплексный компонент с динамическим интерфейсом
        </h3>
        <p className="text-gray-300 mb-3">
          Создайте компонент <code className="bg-gray-700 px-1 rounded">Dashboard</code>, который объединяет все изученные техники условного рендеринга:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-gray-300 mb-3">
          <li>Используйте <code className="bg-gray-700 px-1 rounded">useState</code> для хранения:
            <ul className="list-circle pl-5 mt-1">
              <li>Состояния загрузки данных</li>
              <li>Ошибки загрузки (или null)</li>
              <li>Массива виджетов (данных для отображения)</li>
              <li>Текущего выбранного виджета (или null)</li>
              <li>Режима отображения ("grid" или "list")</li>
              <li>Видимости боковой панели (булево)</li>
            </ul>
          </li>
          <li>Создайте имитацию загрузки данных с помощью <code className="bg-gray-700 px-1 rounded">setTimeout</code> (2 секунды).</li>
          <li>Реализуйте пять уровней условного рендеринга:
            <ul className="list-circle pl-5 mt-1">
              <li>Индикатор загрузки во время имитации загрузки</li>
              <li>Сообщение об ошибке, если имитация завершилась с ошибкой</li>
              <li>Главный интерфейс дашборда при успешной загрузке</li>
              <li>Условное отображение боковой панели в зависимости от состояния</li>
              <li>Различные представления данных (сетка/список) в зависимости от режима</li>
            </ul>
          </li>
          <li>В главном интерфейсе отобразите:
            <ul className="list-circle pl-5 mt-1">
              <li>Заголовок дашборда</li>
              <li>Кнопки переключения режима отображения</li>
              <li>Кнопку переключения видимости боковой панели</li>
              <li>Список виджетов с возможностью выбора</li>
              <li>Детали выбранного виджета (если есть выбор)</li>
            </ul>
          </li>
          <li>Добавьте кнопку "Обновить данные", которая снова запускает имитацию загрузки.</li>
          <li>Реализуйте обработку пустого списка виджетов с соответствующим сообщением.</li>
        </ul>
        <details className="group">
          <summary className="cursor-pointer text-sm text-gray-400 hover:text-gray-300 flex items-center gap-1">
            <span>Подсказка</span>
            <svg className="w-4 h-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </summary>
          <div className="mt-2 p-3 bg-gray-900/50 rounded text-sm text-gray-300">
            <p>Используйте ранний возврат для обработки состояний загрузки и ошибки. Применяйте различные способы условного рендеринга для разных частей интерфейса. Создайте отдельные компоненты для виджетов и деталей.</p>
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
              Эти задания помогли вам закрепить навыки условного рендеринга в React и создания индикаторов различных состояний приложения. Вы научились использовать различные способы условного рендеринга (логическое И, тернарный оператор, if/else, switch), создавать компоненты с обработкой состояний загрузки, ошибок и пустых данных, реализовывать условное отображение элементов форм и интерфейса, а также строить сложные компоненты с многоуровневым условным рендерингом. Умение эффективно использовать условный рендеринг является ключевым навыком для создания адаптивных и информативных пользовательских интерфейсов, которые могут реагировать на различные состояния приложения и предоставлять пользователю четкую обратную связь.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Part3;