// src/data/courses/react/lesson14/part3.jsx
import React from 'react';
import { Layers, Code, Database, Play, Terminal } from 'lucide-react';

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
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">✏️ Практика: Композиция компонентов</h1>
            <p className="text-gray-300">
              <span className="font-medium text-yellow-400">🎯 Цель:</span> Закрепить знания по композиции компонентов в React через практические задания различной сложности.
            </p>
          </div>
        </div>
      </div>

      {/* Задание 1 */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
          <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">1</span>
          Гибкая карточка с использованием children
        </h3>
        <p className="text-gray-300 mb-3">
          Создайте гибкий компонент <code className="bg-gray-700 px-1.5 py-0.5 rounded text-green-300">FlexibleCard</code>, который использует <code className="bg-gray-700 px-1 rounded">children</code> для отображения содержимого:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-gray-300 mb-3">
          <li>Компонент должен принимать пропсы: <code className="bg-gray-700 px-1 rounded">title</code> (строка, необязательный), <code className="bg-gray-700 px-1 rounded">bordered</code> (булево, по умолчанию <code className="bg-gray-700 px-1 rounded">false</code>), <code className="bg-gray-700 px-1 rounded">elevated</code> (булево, по умолчанию <code className="bg-gray-700 px-1 rounded">false</code>).</li>
          <li>Используйте <code className="bg-gray-700 px-1 rounded">children</code> для отображения содержимого карточки.</li>
          <li>Если передан <code className="bg-gray-700 px-1 rounded">title</code>, отобразите его в заголовке карточки с классом <code className="bg-gray-700 px-1 rounded">card-header</code>.</li>
          <li>Содержимое из <code className="bg-gray-700 px-1 rounded">children</code> должно отображаться в теле карточки с классом <code className="bg-gray-700 px-1 rounded">card-body</code>.</li>
          <li>Добавьте классы стилей в зависимости от пропсов:
            <ul className="list-circle pl-5 mt-1">
              <li><code className="bg-gray-700 px-1 rounded">card-bordered</code> если <code className="bg-gray-700 px-1 rounded">bordered</code> равно <code className="bg-gray-700 px-1 rounded">true</code></li>
              <li><code className="bg-gray-700 px-1 rounded">card-elevated</code> если <code className="bg-gray-700 px-1 rounded">elevated</code> равно <code className="bg-gray-700 px-1 rounded">true</code></li>
            </ul>
          </li>
          <li>Создайте демонстрационный компонент <code className="bg-gray-700 px-1 rounded">CardDemo</code>, который использует <code className="bg-gray-700 px-1 rounded">FlexibleCard</code> с различными конфигурациями:
            <ul className="list-circle pl-5 mt-1">
              <li>Простая карточка с текстом</li>
              <li>Карточка с заголовком и несколькими элементами содержимого</li>
              <li>Карточка с границей</li>
              <li>Карточка с тенью</li>
              <li>Карточка с заголовком, границей и тенью</li>
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
            <p>Для классов используйте шаблонные строки: <code className="bg-gray-700 px-1 rounded">{"card ${bordered ? 'card-bordered' : ''}"}</code>. Для условного рендеринга заголовка используйте <code className="bg-gray-700 px-1 rounded">title && <div className="card-header">{"{title}"}</div></code>.</p>
          </div>
        </details>
      </div>

      {/* Задание 2 */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
          <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">2</span>
          Модальное окно с различными вариантами использования
        </h3>
        <p className="text-gray-300 mb-3">
          Создайте компонент <code className="bg-gray-700 px-1 rounded">Modal</code>, который использует <code className="bg-gray-700 px-1 rounded">children</code> и демонстрирует продвинутую композицию:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-gray-300 mb-3">
          <li>Компонент должен принимать пропсы: <code className="bg-gray-700 px-1 rounded">isOpen</code> (булево), <code className="bg-gray-700 px-1 rounded">onClose</code> (функция), <code className="bg-gray-700 px-1 rounded">title</code> (строка, необязательный), <code className="bg-gray-700 px-1 rounded">size</code> ("small", "medium", "large", по умолчанию "medium").</li>
          <li>Используйте <code className="bg-gray-700 px-1 rounded">children</code> для содержимого модального окна.</li>
          <li>Если передан <code className="bg-gray-700 px-1 rounded">title</code>, отобразите его в заголовке модального окна с кнопкой закрытия.</li>
          <li>Реализуйте закрытие модального окна при клике на оверлей (но не на само окно) и при нажатии клавиши Escape.</li>
          <li>Добавьте анимацию появления и исчезновения модального окна.</li>
          <li>Создайте компонент <code className="bg-gray-700 px-1 rounded">ModalHeader</code>, <code className="bg-gray-700 px-1 rounded">ModalBody</code>, <code className="bg-gray-700 px-1 rounded">ModalFooter</code> для структурирования содержимого.</li>
          <li>Создайте демонстрационный компонент <code className="bg-gray-700 px-1 rounded">ModalDemo</code> с различными примерами:
            <ul className="list-circle pl-5 mt-1">
              <li>Простое модальное окно с текстом</li>
              <li>Модальное окно с формой</li>
              <li>Модальное окно с изображением и описанием</li>
              <li>Модальное окно с таблицей данных</li>
              <li>Модальное окно с различными размерами</li>
            </ul>
          </li>
          <li>Добавьте кнопки для открытия каждого типа модального окна.</li>
        </ul>
        <details className="group">
          <summary className="cursor-pointer text-sm text-gray-400 hover:text-gray-300 flex items-center gap-1">
            <span>Подсказка</span>
            <svg className="w-4 h-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </summary>
          <div className="mt-2 p-3 bg-gray-900/50 rounded text-sm text-gray-300">
            <p>Для обработки Escape используйте <code className="bg-gray-700 px-1 rounded">useEffect</code> с добавлением/удалением event listener. Для остановки всплытия события клика используйте <code className="bg-gray-700 px-1 rounded">e.stopPropagation()</code>.</p>
          </div>
        </details>
      </div>

      {/* Задание 3 */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
          <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">3</span>
          Компонент списка с render-пропсом
        </h3>
        <p className="text-gray-300 mb-3">
          Создайте компонент <code className="bg-gray-700 px-1 rounded">ListRenderer</code>, который использует render-пропс для гибкого отображения элементов списка:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-gray-300 mb-3">
          <li>Компонент должен принимать пропсы: <code className="bg-gray-700 px-1 rounded">items</code> (массив элементов), <code className="bg-gray-700 px-1 rounded">renderItem</code> (функция), <code className="bg-gray-700 px-1 rounded">isLoading</code> (булево, по умолчанию <code className="bg-gray-700 px-1 rounded">false</code>), <code className="bg-gray-700 px-1 rounded">error</code> (строка или null, по умолчанию <code className="bg-gray-700 px-1 rounded">null</code>).</li>
          <li>Функция <code className="bg-gray-700 px-1 rounded">renderItem</code> должна принимать элемент массива и индекс, и возвращать JSX для отображения элемента.</li>
          <li>Реализуйте три состояния отображения:
            <ul className="list-circle pl-5 mt-1">
              <li>Индикатор загрузки, если <code className="bg-gray-700 px-1 rounded">isLoading</code> равно <code className="bg-gray-700 px-1 rounded">true</code></li>
              <li>Сообщение об ошибке, если <code className="bg-gray-700 px-1 rounded">error</code> не null</li>
              <li>Список элементов, если нет загрузки и ошибок</li>
            </ul>
          </li>
          <li>Если массив <code className="bg-gray-700 px-1 rounded">items</code> пустой и нет ошибок, отобразите сообщение "Нет элементов для отображения".</li>
          <li>Создайте компонент <code className="bg-gray-700 px-1 rounded">UserList</code>, который использует <code className="bg-gray-700 px-1 rounded">ListRenderer</code> для отображения списка пользователей с данными из <code className="bg-gray-700 px-1 rounded">https://jsonplaceholder.typicode.com/users</code>.</li>
          <li>В <code className="bg-gray-700 px-1 rounded">UserList</code> реализуйте загрузку данных с помощью <code className="bg-gray-700 px-1 rounded">useEffect</code> и <code className="bg-gray-700 px-1 rounded">useState</code>.</li>
          <li>Создайте различные варианты отображения пользователей с помощью render-пропса:
            <ul className="list-circle pl-5 mt-1">
              <li>Карточки с именем и email</li>
              <li>Таблица с именем, телефоном и вебсайтом</li>
              <li>Список с именем и компанией</li>
            </ul>
          </li>
          <li>Добавьте кнопки переключения между вариантами отображения.</li>
          <li>Добавьте кнопку "Обновить данные" для повторной загрузки.</li>
        </ul>
        <details className="group">
          <summary className="cursor-pointer text-sm text-gray-400 hover:text-gray-300 flex items-center gap-1">
            <span>Подсказка</span>
            <svg className="w-4 h-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </summary>
          <div className="mt-2 p-3 bg-gray-900/50 rounded text-sm text-gray-300">
            <p>Для render-пропса: <code className="bg-gray-700 px-1 rounded">{"{items.map((item, index) => renderItem(item, index))}"}</code>. Для загрузки данных используйте <code className="bg-gray-700 px-1 rounded">async/await</code> внутри <code className="bg-gray-700 px-1 rounded">useEffect</code>.</p>
          </div>
        </details>
      </div>

      {/* Задание 4 */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
          <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">4</span>
          Компонент вкладок (Tabs) с композицией через props
        </h3>
        <p className="text-gray-300 mb-3">
          Создайте гибкий компонент <code className="bg-gray-700 px-1 rounded">Tabs</code>, который использует композицию через props:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-gray-300 mb-3">
          <li>Компонент должен принимать пропсы: <code className="bg-gray-700 px-1 rounded">tabs</code> (массив объектов с полями <code className="bg-gray-700 px-1 rounded">id</code>, <code className="bg-gray-700 px-1 rounded">label</code>, <code className="bg-gray-700 px-1 rounded">content</code>), <code className="bg-gray-700 px-1 rounded">defaultActiveTab</code> (строка, по умолчанию первый tab id).</li>
          <li>Каждый объект в массиве <code className="bg-gray-700 px-1 rounded">tabs</code> должен иметь:
            <ul className="list-circle pl-5 mt-1">
              <li><code className="bg-gray-700 px-1 rounded">id</code> — уникальный идентификатор вкладки</li>
              <li><code className="bg-gray-700 px-1 rounded">label</code> — заголовок вкладки (React-элемент или строка)</li>
              <li><code className="bg-gray-700 px-1 rounded">content</code> — содержимое вкладки (React-элемент)</li>
            </ul>
          </li>
          <li>Реализуйте состояние активной вкладки с помощью <code className="bg-gray-700 px-1 rounded">useState</code>.</li>
          <li>Отобразите список вкладок в виде кнопок/ссылок с обработчиками переключения.</li>
          <li>Отобразите содержимое активной вкладки.</li>
          <li>Добавьте визуальную индикацию активной вкладки.</li>
          <li>Создайте компонент <code className="bg-gray-700 px-1 rounded">TabsDemo</code> с различными примерами использования:
            <ul className="list-circle pl-5 mt-1">
              <li>Простые текстовые вкладки</li>
              <li>Вкладки с иконками в заголовках</li>
              <li>Вкладки с различным содержимым (форма, таблица, изображения)</li>
              <li>Вкладки с динамически добавляемыми/удаляемыми элементами</li>
            </ul>
          </li>
          <li>Добавьте возможность программного переключения вкладок.</li>
          <li>Реализуйте callback <code className="bg-gray-700 px-1 rounded">onTabChange</code>, который вызывается при смене вкладки.</li>
        </ul>
        <details className="group">
          <summary className="cursor-pointer text-sm text-gray-400 hover:text-gray-300 flex items-center gap-1">
            <span>Подсказка</span>
            <svg className="w-4 h-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </summary>
          <div className="mt-2 p-3 bg-gray-900/50 rounded text-sm text-gray-300">
            <p>Для поиска активной вкладки: <code className="bg-gray-700 px-1 rounded">{"const activeTab = tabs.find(tab => tab.id === activeTabId)"}</code>. Для обработчика переключения: <code className="bg-gray-700 px-1 rounded">{"const handleTabChange = (tabId) => { setActiveTabId(tabId); onTabChange?.(tabId); }"}</code>.</p>
          </div>
        </details>
      </div>

      {/* Задание 5 */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
          <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">5</span>
          Комплексный компонент макета приложения
        </h3>
        <p className="text-gray-300 mb-3">
          Создайте комплексный компонент <code className="bg-gray-700 px-1 rounded">AppLayout</code>, который демонстрирует все изученные техники композиции:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-gray-300 mb-3">
          <li>Компонент должен принимать пропсы для всех секций макета: <code className="bg-gray-700 px-1 rounded">header</code>, <code className="bg-gray-700 px-1 rounded">sidebar</code>, <code className="bg-gray-700 px-1 rounded">main</code>, <code className="bg-gray-700 px-1 rounded">footer</code>.</li>
          <li>Каждая секция должна быть опциональной (может быть null или undefined).</li>
          <li>Используйте <code className="bg-gray-700 px-1 rounded">children</code> для передачи содержимого основной области.</li>
          <li>Реализуйте гибкую систему классов для различных комбинаций секций (например, с/без сайдбара).</li>
          <li>Создайте компоненты-помощники: <code className="bg-gray-700 px-1 rounded">Header</code>, <code className="bg-gray-700 px-1 rounded">Sidebar</code>, <code className="bg-gray-700 px-1 rounded">Main</code>, <code className="bg-gray-700 px-1 rounded">Footer</code> с предопределенными стилями.</li>
          <li>Реализуйте адаптивное поведение: на мобильных устройствах сайдбар должен превращаться в выдвижное меню.</li>
          <li>Добавьте состояние для управления видимостью мобильного меню.</li>
          <li>Создайте компонент <code className="bg-gray-700 px-1 rounded">Dashboard</code>, который использует <code className="bg-gray-700 px-1 rounded">AppLayout</code> для создания дашборда:
            <ul className="list-circle pl-5 mt-1">
              <li>Шапка с логотипом, навигацией и пользовательским меню</li>
              <li>Сайдбар с меню навигации и виджетами</li>
              <li>Основная область с сеткой виджетов (графики, таблицы, карточки)</li>
              <li>Футер с информацией о копирайте</li>
            </ul>
          </li>
          <li>Создайте различные страницы, использующие один и тот же макет, но с разным содержимым:
            <ul className="list-circle pl-5 mt-1">
              <li>Главная страница (дашборд)</li>
              <li>Страница профиля пользователя</li>
              <li>Страница настроек</li>
              <li>Страница с формой</li>
            </ul>
          </li>
          <li>Реализуйте переключение между страницами через роутинг (можно имитировать состояние).</li>
          <li>Добавьте темизацию (светлая/темная) с сохранением выбора в localStorage.</li>
          <li>Реализуйте контекст темы и используйте его в компонентах макета.</li>
        </ul>
        <details className="group">
          <summary className="cursor-pointer text-sm text-gray-400 hover:text-gray-300 flex items-center gap-1">
            <span>Подсказка</span>
            <svg className="w-4 h-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </summary>
          <div className="mt-2 p-3 bg-gray-900/50 rounded text-sm text-gray-300">
            <p>Для адаптивности используйте медиа-запросы CSS и состояние <code className="bg-gray-700 px-1 rounded">useState</code> для управления мобильным меню. Для темизации создайте контекст с помощью <code className="bg-gray-700 px-1 rounded">createContext</code> и <code className="bg-gray-700 px-1 rounded">useContext</code>.</p>
          </div>
        </details>
      </div>

      {/* Заключение */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <div className="flex items-start gap-3">
          <div className="bg-green-500/20 p-2 rounded-lg flex-shrink-0">
            <Layers className="w-5 h-5 text-green-400" />
          </div>
          <div>
            <h3 className="font-bold text-white mb-2">Отличная работа! 🎉</h3>
            <p className="text-gray-300">
              Эти задания помогли вам закрепить навыки композиции компонентов в React. Вы научились использовать <code className="bg-gray-700 px-1 rounded">children</code> для передачи содержимого, создавать компоненты с render-пропсами для гибкой логики отображения, применять композицию через props для структурированных интерфейсов, а также разрабатывать сложные макеты приложений с использованием всех изученных техник. Композиция компонентов — это мощный инструмент для создания переиспользуемых, гибких и поддерживаемых React-приложений. Понимание и умение применять эти концепции позволит вам создавать сложные пользовательские интерфейсы из простых строительных блоков.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Part3;