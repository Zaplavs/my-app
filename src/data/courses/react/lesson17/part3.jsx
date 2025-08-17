// src/data/courses/react/lesson17/part3.jsx
import React from 'react';
import { FileText, Database, Code, Play, Terminal } from 'lucide-react';

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
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">✏️ Практика: Формы — валидация и управление</h1>
            <p className="text-gray-300">
              <span className="font-medium text-yellow-400">🎯 Цель:</span> Закрепить знания по управлению формами и валидации в React через практические задания различной сложности.
            </p>
          </div>
        </div>
      </div>

      {/* Задание 1 */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
          <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">1</span>
          Простая форма обратной связи
        </h3>
        <p className="text-gray-300 mb-3">
          Создайте простую форму обратной связи с базовой валидацией:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-gray-300 mb-3">
          <li>Создайте компонент <code className="bg-gray-700 px-1.5 py-0.5 rounded text-green-300">FeedbackForm</code> с полями: имя (обязательное), email (обязательное, формат email), сообщение (обязательное).</li>
          <li>Используйте <code className="bg-gray-700 px-1 rounded">useState</code> для управления состоянием формы и ошибок.</li>
          <li>Реализуйте валидацию при потере фокуса (<code className="bg-gray-700 px-1 rounded">onBlur</code>) для каждого поля.</li>
          <li>Отобразите сообщения об ошибках под каждым полем при наличии ошибок.</li>
          <li>Добавьте общую валидацию формы при отправке.</li>
          <li>При успешной отправке отобразите сообщение "Спасибо за ваш отзыв!" и сбросьте форму.</li>
          <li>Добавьте индикаторы обязательных полей (*).</li>
          <li>Реализуйте отключение кнопки отправки во время отправки данных.</li>
        </ul>
        <details className="group">
          <summary className="cursor-pointer text-sm text-gray-400 hover:text-gray-300 flex items-center gap-1">
            <span>Подсказка</span>
            <svg className="w-4 h-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </summary>
          <div className="mt-2 p-3 bg-gray-900/50 rounded text-sm text-gray-300">
            <p>Создайте объект состояния <code className="bg-gray-700 px-1 rounded">formData</code> и объект <code className="bg-gray-700 px-1 rounded">errors</code>. Для валидации email используйте регулярное выражение <code className="bg-gray-700 px-1 rounded">/\S+@\S+\.\S+/</code>.</p>
          </div>
        </details>
      </div>

      {/* Задание 2 */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
          <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">2</span>
          Регистрационная форма с множеством полей
        </h3>
        <p className="text-gray-300 mb-3">
          Создайте расширенную регистрационную форму с использованием объекта состояния:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-gray-300 mb-3">
          <li>Создайте компонент <code className="bg-gray-700 px-1 rounded">RegistrationForm</code> с полями: имя, фамилия, email, телефон, дата рождения, пол (радио-кнопки), страна (выпадающий список), согласие с условиями (чекбокс).</li>
          <li>Используйте один объект состояния <code className="bg-gray-700 px-1 rounded">formData</code> для управления всеми полями.</li>
          <li>Реализуйте универсальный обработчик изменений <code className="bg-gray-700 px-1 rounded">handleChange</code>, который работает с разными типами полей (input, select, textarea, radio, checkbox).</li>
          <li>Добавьте валидацию для каждого поля:
            <ul className="list-circle pl-5 mt-1">
              <li>Имя и фамилия: не пустые, минимум 2 символа</li>
              <li>Email: обязательный, правильный формат</li>
              <li>Телефон: необязательный, если заполнен - правильный формат</li>
              <li>Дата рождения: обязательная, пользователю должно быть от 13 до 120 лет</li>
              <li>Пол: обязательный выбор</li>
              <li>Страна: обязательный выбор (не "выберите")</li>
              <li>Согласие: обязательно</li>
            </ul>
          </li>
          <li>Реализуйте валидацию при изменении и потере фокуса.</li>
          <li>Добавьте выпадающий список стран с минимум 10 вариантами.</li>
          <li>Создайте компонент <code className="bg-gray-700 px-1 rounded">FormField</code> для унифицированного отображения полей ввода с метками и сообщениями об ошибках.</li>
          <li>При отправке формы имитируйте API-запрос с задержкой 2 секунды.</li>
          <li>Отобразите состояние загрузки во время отправки.</li>
          <li>После успешной отправки покажите сообщение об успехе и сбросьте форму через 3 секунды.</li>
        </ul>
        <details className="group">
          <summary className="cursor-pointer text-sm text-gray-400 hover:text-gray-300 flex items-center gap-1">
            <span>Подсказка</span>
            <svg className="w-4 h-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </summary>
          <div className="mt-2 p-3 bg-gray-900/50 rounded text-sm text-gray-300">
            <p>Для универсального обработчика: <code className="bg-gray-700 px-1 rounded">const {'{'} name, value, type, checked {'}'} = e.target;</code> и <code className="bg-gray-700 px-1 rounded">setValue(type === 'checkbox' ? checked : value)</code>. Для валидации возраста создайте функцию, которая вычисляет возраст на основе даты рождения.</p>
          </div>
        </details>
      </div>

      {/* Задание 3 */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
          <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">3</span>
          Форма профиля пользователя с API
        </h3>
        <p className="text-gray-300 mb-3">
          Создайте форму редактирования профиля пользователя с загрузкой и сохранением данных через API:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-gray-300 mb-3">
          <li>Создайте компонент <code className="bg-gray-700 px-1 rounded">UserProfileForm</code>, который загружает данные пользователя с <code className="bg-gray-700 px-1 rounded">https://jsonplaceholder.typicode.com/users/1</code>.</li>
          <li>Отобразите поля: имя, username, email, улица, город, почтовый индекс, телефон, вебсайт, название компании.</li>
          <li>Используйте объект состояния для управления данными формы.</li>
          <li>Реализуйте валидацию:
            <ul className="list-circle pl-5 mt-1">
              <li>Все поля обязательны для заполнения</li>
              <li>Email должен быть в правильном формате</li>
              <li>Телефон и вебсайт должны быть в правильном формате (опционально)</li>
            </ul>
          </li>
          <li>Добавьте кнопки "Сохранить" и "Отменить изменения".</li>
          <li>Кнопка "Отменить изменения" должна восстанавливать исходные данные формы.</li>
          <li>При сохранении отправляйте обновленные данные на <code className="bg-gray-700 px-1 rounded">https://jsonplaceholder.typicode.com/users/1</code> методом PUT.</li>
          <li>Отобразите состояние загрузки, ошибки и сообщения об успехе.</li>
          <li>Добавьте возможность загрузки аватара пользователя (имитация через URL).</li>
          <li>Реализуйте отслеживание изменений формы - активируйте кнопки сохранения/отмены только при наличии изменений.</li>
          <li>Добавьте подтверждение при попытке отмены изменений с потерей данных.</li>
        </ul>
        <details className="group">
          <summary className="cursor-pointer text-sm text-gray-400 hover:text-gray-300 flex items-center gap-1">
            <span>Подсказка</span>
            <svg className="w-4 h-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </summary>
          <div className="mt-2 p-3 bg-gray-900/50 rounded text-sm text-gray-300">
            <p>Для отслеживания изменений сохраните исходные данные в отдельное состояние <code className="bg-gray-700 px-1 rounded">originalData</code> и сравнивайте с <code className="bg-gray-700 px-1 rounded">formData</code>. Для имитации PUT-запроса используйте <code className="bg-gray-700 px-1 rounded">fetch</code> с методом <code className="bg-gray-700 px-1 rounded">'PUT'</code> и телом запроса <code className="bg-gray-700 px-1 rounded">JSON.stringify(formData)</code>.</p>
          </div>
        </details>
      </div>

      {/* Задание 4 */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
          <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">4</span>
          Сложная форма с зависимыми полями
        </h3>
        <p className="text-gray-300 mb-3">
          Создайте форму заказа с зависимыми полями и сложной валидацией:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-gray-300 mb-3">
          <li>Создайте компонент <code className="bg-gray-700 px-1 rounded">OrderForm</code> с полями: тип доставки (самовывоз/доставка), адрес доставки (улица, город, индекс - только для доставки), способ оплаты (наличные/карта), номер карты и срок действия (только для оплаты картой).</li>
          <li>Реализуйте зависимость полей: поля адреса отображаются только при выборе доставки, поля карты отображаются только при выборе оплаты картой.</li>
          <li>Используйте объект состояния для управления всеми полями формы.</li>
          <li>Добавьте валидацию:
            <ul className="list-circle pl-5 mt-1">
              <li>При доставке - все поля адреса обязательны</li>
              <li>При оплате картой - номер карты (16 цифр) и срок действия (MM/YY) обязательны</li>
              <li>Номер карты должен содержать только цифры</li>
              <li>Срок действия должен быть в формате MM/YY и не истекшим</li>
            </ul>
          </li>
          <li>Реализуйте автоматическое форматирование поля номера карты (добавлять пробелы каждые 4 цифры).</li>
          <li>Добавьте выпадающий список товаров с возможностью выбора нескольких товаров (используйте данные с <code className="bg-gray-700 px-1 rounded">https://jsonplaceholder.typicode.com/users</code> как образец данных).</li>
          <li>Для каждого выбранного товара добавьте возможность указания количества.</li>
          <li>Отобразите итоговую стоимость заказа (сумма стоимостей товаров * количество).</li>
          <li>Реализуйте добавление/удаление товаров в заказе.</li>
          <li>Добавьте валидацию товаров - каждый товар должен иметь положительное количество.</li>
          <li>Создайте компонент <code className="bg-gray-700 px-1 rounded">OrderSummary</code> для отображения сводки заказа.</li>
          <li>Реализуйте сохранение черновика формы в <code className="bg-gray-700 px-1 rounded">localStorage</code> при каждом изменении.</li>
          <li>Добавьте возможность восстановления черновика при загрузке формы.</li>
        </ul>
        <details className="group">
          <summary className="cursor-pointer text-sm text-gray-400 hover:text-gray-300 flex items-center gap-1">
            <span>Подсказка</span>
            <svg className="w-4 h-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </summary>
          <div className="mt-2 p-3 bg-gray-900/50 rounded text-sm text-gray-300">
            <p>Для зависимых полей используйте условный рендеринг: <code className="bg-gray-700 px-1 rounded">{'{deliveryType === "delivery" && <AddressFields />}'}</code>. Для автоматического форматирования номера карты используйте <code className="bg-gray-700 px-1 rounded">useEffect</code> с регулярным выражением <code className="bg-gray-700 px-1 rounded">value.replace(/\D/g, '').replace(/(.{4})/g, '$1 ').trim()</code>.</p>
          </div>
        </details>
      </div>

      {/* Задание 5 */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
          <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">5</span>
          Комплексная форма с библиотекой Formik
        </h3>
        <p className="text-gray-300 mb-3">
          Создайте ту же форму, что и в задании 2, но с использованием библиотеки Formik:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-gray-300 mb-3">
          <li>Установите библиотеки <code className="bg-gray-700 px-1 rounded">formik</code> и <code className="bg-gray-700 px-1 rounded">yup</code> в ваш проект.</li>
          <li>Создайте компонент <code className="bg-gray-700 px-1 rounded">FormikRegistrationForm</code>, который реализует ту же функциональность, что и <code className="bg-gray-700 px-1 rounded">RegistrationForm</code> из задания 2.</li>
          <li>Используйте <code className="bg-gray-700 px-1 rounded">Formik</code>, <code className="bg-gray-700 px-1 rounded">Form</code>, <code className="bg-gray-700 px-1 rounded">Field</code>, <code className="bg-gray-700 px-1 rounded">ErrorMessage</code> из Formik.</li>
          <li>Создайте схему валидации с помощью Yup, включающую все правила из задания 2.</li>
          <li>Реализуйте валидацию на уровне схемы Yup и кастомную валидацию для возраста.</li>
          <li>Добавьте отображение ошибок с помощью компонента <code className="bg-gray-700 px-1 rounded">ErrorMessage</code>.</li>
          <li>Реализуйте имитацию API-запроса с задержкой и отображением состояния загрузки.</li>
          <li>Создайте кастомный компонент поля ввода <code className="bg-gray-700 px-1 rounded">CustomField</code>, который интегрируется с Formik и отображает ошибки.</li>
          <li>Добавьте валидацию в реальном времени при изменении полей.</li>
          <li>Реализуйте сброс формы к начальному состоянию.</li>
          <li>Добавьте отображение прогресса заполнения формы (процент заполненных и провалидированных полей).</li>
          <li>Создайте компонент <code className="bg-gray-700 px-1 rounded">FormProgress</code> для отображения прогресса.</li>
        </ul>
        <details className="group">
          <summary className="cursor-pointer text-sm text-gray-400 hover:text-gray-300 flex items-center gap-1">
            <span>Подсказка</span>
            <svg className="w-4 h-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </summary>
          <div className="mt-2 p-3 bg-gray-900/50 rounded text-sm text-gray-300">
            <p>Для установки: <code className="bg-gray-700 px-1 rounded">npm install formik yup</code>. Для Yup-схемы: <code className="bg-gray-700 px-1 rounded">Yup.object({'{'}</code><br />
            <code className="bg-gray-700 px-1 rounded">name: Yup.string().min(2).required(),</code><br />
            <code className="bg-gray-700 px-1 rounded">email: Yup.string().email().required(),</code><br />
            <code className="bg-gray-700 px-1 rounded">{'}'})</code></p>
          </div>
        </details>
      </div>

      {/* Заключение */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <div className="flex items-start gap-3">
          <div className="bg-green-500/20 p-2 rounded-lg flex-shrink-0">
            <FileText className="w-5 h-5 text-green-400" />
          </div>
          <div>
            <h3 className="font-bold text-white mb-2">Отличная работа! 🎉</h3>
            <p className="text-gray-300">
              Эти задания помогли вам закрепить навыки управления формами и валидации в React. Вы научились использовать <code className="bg-gray-700 px-1 rounded">useState</code> для управления состоянием форм, реализовывать валидацию при изменении и потере фокуса, отображать сообщения об ошибках, работать с различными типами полей ввода, создавать формы с зависимыми полями, интегрировать формы с API и использовать библиотеки для упрощения работы с формами. Понимание и умение применять эти концепции является ключевым навыком для создания качественных пользовательских интерфейсов с формами. Формы - это одна из самых важных частей веб-приложений, и правильная реализация валидации и управления состоянием делает пользовательский опыт намного лучше.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Part3;