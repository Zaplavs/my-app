// src/data/courses/react/lesson10/part3.jsx
import React from 'react';
import { Share2, Globe, Palette, Play, Terminal } from 'lucide-react';

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
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">✏️ Практика: Хук useContext — глобальное состояние</h1>
            <p className="text-gray-300">
              <span className="font-medium text-yellow-400">🎯 Цель:</span> Закрепить знания по использованию хука <code className="bg-gray-700 px-1.5 py-0.5 rounded text-green-300">useContext</code> и контекста для управления глобальным состоянием в React через практические задания различной сложности.
            </p>
          </div>
        </div>
      </div>

      {/* Задание 1 */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
          <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">1</span>
          Система темизации приложения
        </h3>
        <p className="text-gray-300 mb-3">
          Создайте систему темизации для React-приложения с использованием контекста:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-gray-300 mb-3">
          <li>Создайте файл <code className="bg-gray-700 px-1 rounded">ThemeContext.js</code> с контекстом темы.</li>
          <li>Реализуйте провайдер <code className="bg-gray-700 px-1 rounded">ThemeProvider</code>, который будет хранить текущую тему ("light" или "dark") и функцию переключения темы.</li>
          <li>Создайте компонент <code className="bg-gray-700 px-1 rounded">ThemeButton</code>, который использует <code className="bg-gray-700 px-1 rounded">useContext</code> для получения текущей темы и функции переключения.</li>
          <li>Создайте компонент <code className="bg-gray-700 px-1 rounded">ThemedCard</code>, который отображает карточку с контентом и меняет стили в зависимости от темы.</li>
          <li>Оберните ваше приложение в <code className="bg-gray-700 px-1 rounded">ThemeProvider</code> и используйте созданные компоненты.</li>
          <li>Добавьте CSS-классы для светлой и темной тем, которые будут применяться к элементам в зависимости от состояния контекста.</li>
        </ul>
        <details className="group">
          <summary className="cursor-pointer text-sm text-gray-400 hover:text-gray-300 flex items-center gap-1">
            <span>Подсказка</span>
            <svg className="w-4 h-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </summary>
          <div className="mt-2 p-3 bg-gray-900/50 rounded text-sm text-gray-300">
            <p>Используйте <code className="bg-gray-700 px-1 rounded">useState</code> внутри <code className="bg-gray-700 px-1 rounded">ThemeProvider</code> для хранения состояния темы. Передавайте объект <code className="bg-gray-700 px-1 rounded">{'{ theme, toggleTheme }'}</code> в value провайдера.</p>
          </div>
        </details>
      </div>

      {/* Задание 2 */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
          <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">2</span>
          Глобальное состояние корзины покупок
        </h3>
        <p className="text-gray-300 mb-3">
          Создайте систему управления корзиной покупок с использованием контекста:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-gray-300 mb-3">
          <li>Создайте файл <code className="bg-gray-700 px-1 rounded">CartContext.js</code> с контекстом корзины.</li>
          <li>Реализуйте провайдер <code className="bg-gray-700 px-1 rounded">CartProvider</code>, который будет хранить массив товаров в корзине и методы: добавить товар, удалить товар, очистить корзину, обновить количество.</li>
          <li>Каждый товар должен иметь поля: id, name, price, quantity.</li>
          <li>Создайте компонент <code className="bg-gray-700 px-1 rounded">ProductList</code>, который отображает список товаров и кнопки "Добавить в корзину".</li>
          <li>Создайте компонент <code className="bg-gray-700 px-1 rounded">Cart</code>, который отображает содержимое корзины с возможностью изменения количества и удаления товаров.</li>
          <li>Создайте компонент <code className="bg-gray-700 px-1 rounded">CartSummary</code>, который показывает общее количество товаров и общую сумму.</li>
          <li>Оберните приложение в <code className="bg-gray-700 px-1 rounded">CartProvider</code> и используйте созданные компоненты.</li>
        </ul>
        <details className="group">
          <summary className="cursor-pointer text-sm text-gray-400 hover:text-gray-300 flex items-center gap-1">
            <span>Подсказка</span>
            <svg className="w-4 h-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </summary>
          <div className="mt-2 p-3 bg-gray-900/50 rounded text-sm text-gray-300">
            <p>Для обновления количества товара в корзине используйте метод <code className="bg-gray-700 px-1 rounded">map</code> для создания нового массива с обновленным товаром. Для добавления товара проверяйте, есть ли он уже в корзине.</p>
          </div>
        </details>
      </div>

      {/* Задание 3 */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
          <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">3</span>
          Многоязычное приложение
        </h3>
        <p className="text-gray-300 mb-3">
          Создайте систему локализации (переводов) для React-приложения:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-gray-300 mb-3">
          <li>Создайте файл <code className="bg-gray-700 px-1 rounded">LanguageContext.js</code> с контекстом языка.</li>
          <li>Создайте объекты переводов для минимум двух языков (например, русский и английский).</li>
          <li>Реализуйте провайдер <code className="bg-gray-700 px-1 rounded">LanguageProvider</code>, который будет хранить текущий язык и функцию смены языка.</li>
          <li>Создайте хук <code className="bg-gray-700 px-1 rounded">useTranslation</code>, который будет использовать контекст и возвращать функцию для получения перевода по ключу.</li>
          <li>Создайте компонент <code className="bg-gray-700 px-1 rounded">LanguageSwitcher</code>, который отображает кнопки/селект для переключения языков.</li>
          <li>Создайте несколько компонентов с текстом, который будет переводиться с помощью хука <code className="bg-gray-700 px-1 rounded">useTranslation</code>.</li>
          <li>Оберните приложение в <code className="bg-gray-700 px-1 rounded">LanguageProvider</code> и используйте созданные компоненты.</li>
        </ul>
        <details className="group">
          <summary className="cursor-pointer text-sm text-gray-400 hover:text-gray-300 flex items-center gap-1">
            <span>Подсказка</span>
            <svg className="w-4 h-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </summary>
          <div className="mt-2 p-3 bg-gray-900/50 rounded text-sm text-gray-300">
            <p>Объект переводов может выглядеть так: <code className="bg-gray-700 px-1 rounded">{'{ en: { greeting: "Hello" }, ru: { greeting: "Привет" } }'}</code>. Хук <code className="bg-gray-700 px-1 rounded">useTranslation</code> должен возвращать функцию, которая принимает ключ и возвращает перевод для текущего языка.</p>
          </div>
        </details>
      </div>

      {/* Задание 4 */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
          <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">4</span>
          Комплексное состояние приложения (пользователь + тема + язык)
        </h3>
        <p className="text-gray-300 mb-3">
          Создайте комплексную систему управления состоянием приложения, объединяющую несколько контекстов:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-gray-300 mb-3">
          <li>Создайте отдельные контексты для пользователя, темы и языка (как в предыдущих заданиях).</li>
          <li>Создайте компонент <code className="bg-gray-700 px-1 rounded">AppProviders</code>, который объединяет все провайдеры в один компонент для удобного оборачивания приложения.</li>
          <li>Реализуйте систему аутентификации: пользователь может войти (установить данные пользователя в контекст) и выйти (очистить данные пользователя).</li>
          <li>Создайте компонент <code className="bg-gray-700 px-1 rounded">UserProfile</code>, который отображает информацию о пользователе, если он авторизован, или кнопку входа.</li>
          <li>Создайте компонент <code className="bg-gray-700 px-1 rounded">SettingsPanel</code>, который позволяет пользователю изменять тему и язык.</li>
          <li>Создайте компонент <code className="bg-gray-700 px-1 rounded">ProtectedRoute</code>, который отображает содержимое только для авторизованных пользователей.</li>
          <li>Реализуйте сохранение настроек (тема, язык) в localStorage и восстановление при загрузке приложения.</li>
          <li>Создайте главный компонент приложения, который использует все созданные компоненты и демонстрирует их взаимодействие.</li>
        </ul>
        <details className="group">
          <summary className="cursor-pointer text-sm text-gray-400 hover:text-gray-300 flex items-center gap-1">
            <span>Подсказка</span>
            <svg className="w-4 h-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </summary>
          <div className="mt-2 p-3 bg-gray-900/50 rounded text-sm text-gray-300">
            <p>Компонент <code className="bg-gray-700 px-1 rounded">AppProviders</code> должен выглядеть примерно так: <code className="bg-gray-700 px-1 rounded">{'<ThemeProvider><LanguageProvider><UserProvider>{children}</UserProvider></LanguageProvider></ThemeProvider>'}</code>. Используйте <code className="bg-gray-700 px-1 rounded">useEffect</code> для сохранения настроек в localStorage.</p>
          </div>
        </details>
      </div>

      {/* Задание 5 */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
          <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">5</span>
          Оптимизированная система уведомлений
        </h3>
        <p className="text-gray-300 mb-3">
          Создайте оптимизированную систему глобальных уведомлений с использованием контекста и продвинутых техник React:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-gray-300 mb-3">
          <li>Создайте файл <code className="bg-gray-700 px-1 rounded">NotificationContext.js</code> с контекстом уведомлений.</li>
          <li>Реализуйте провайдер <code className="bg-gray-700 px-1 rounded">NotificationProvider</code>, который будет управлять массивом уведомлений с полями: id, type ("success", "error", "warning", "info"), message, duration.</li>
          <li>Реализуйте функцию <code className="bg-gray-700 px-1 rounded">showNotification</code> для добавления уведомлений и автоматическое удаление по истечении duration.</li>
          <li>Используйте <code className="bg-gray-700 px-1 rounded">useMemo</code> для оптимизации значения контекста и избежания лишних перерендеров.</li>
          <li>Создайте компонент <code className="bg-gray-700 px-1 rounded">NotificationContainer</code>, который отображает список активных уведомлений.</li>
          <li>Создайте компонент <code className="bg-gray-700 px-1 rounded">Notification</code> для отображения отдельного уведомления с кнопкой закрытия.</li>
          <li>Реализуйте анимации появления и исчезновения уведомлений (можно использовать CSS transitions).</li>
          <li>Создайте несколько компонентов, которые используют <code className="bg-gray-700 px-1 rounded">useContext</code> для показа уведомлений при различных действиях (например, успешная отправка формы, ошибка загрузки данных).</li>
          <li>Добавьте возможность настройки позиции уведомлений (верхний правый угол, нижний левый угол и т.д.).</li>
        </ul>
        <details className="group">
          <summary className="cursor-pointer text-sm text-gray-400 hover:text-gray-300 flex items-center gap-1">
            <span>Подсказка</span>
            <svg className="w-4 h-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </summary>
          <div className="mt-2 p-3 bg-gray-900/50 rounded text-sm text-gray-300">
            <p>Для автоматического удаления используйте <code className="bg-gray-700 px-1 rounded">setTimeout</code> внутри <code className="bg-gray-700 px-1 rounded">showNotification</code>. Для генерации уникальных ID можно использовать <code className="bg-gray-700 px-1 rounded">Date.now()</code> или библиотеку <code className="bg-gray-700 px-1 rounded">uuid</code>.</p>
          </div>
        </details>
      </div>

      {/* Заключение */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <div className="flex items-start gap-3">
          <div className="bg-green-500/20 p-2 rounded-lg flex-shrink-0">
            <Share2 className="w-5 h-5 text-green-400" />
          </div>
          <div>
            <h3 className="font-bold text-white mb-2">Отличная работа! 🎉</h3>
            <p className="text-gray-300">
              Эти задания помогли вам закрепить навыки использования хука <code className="bg-gray-700 px-1 rounded">useContext</code> и контекста для управления глобальным состоянием в React. Вы научились создавать системы темизации, управления корзиной покупок, локализации, комплексного состояния приложения и оптимизированных уведомлений. Вы также освоили лучшие практики работы с контекстом, такие как разделение контекстов, использование <code className="bg-gray-700 px-1 rounded">useMemo</code> для оптимизации, сохранение состояния в localStorage и создание переиспользуемых провайдеров. Понимание и умение применять контекст является важным навыком для создания масштабируемых React-приложений с эффективным управлением глобальным состоянием.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Part3;