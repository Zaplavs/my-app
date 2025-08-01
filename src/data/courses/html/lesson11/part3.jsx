// src/data/courses/html/lesson11/part3.jsx
import React from 'react';
import { Code, FileText, Terminal, Type, Key, AlignLeft, List, MousePointerSquareDashed } from 'lucide-react';

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
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">✏️ Практика: Формы в HTML — Ввод данных</h1>
            <p className="text-gray-300">
              <span className="font-medium text-yellow-400">🎯 Цель:</span> Закрепить знания по созданию веб-форм с помощью тега <code className="bg-gray-700 px-1.5 py-0.5 rounded text-green-300">{'<form>'}</code> и различных полей ввода (<code className="bg-gray-700 px-1 rounded">{'<input>'}</code>, <code className="bg-gray-700 px-1 rounded">{'<textarea>'}</code>, <code className="bg-gray-700 px-1 rounded">{'<select>'}</code>).
            </p>
          </div>
        </div>
      </div>

      {/* Задание 1 */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
          <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">1</span>
          Форма регистрации пользователя
        </h3>
        <p className="text-gray-300 mb-3">
          Создайте HTML-фрагмент формы регистрации нового пользователя. Форма должна включать:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-gray-300 mb-3">
          <li>Тег <code className="bg-gray-700 px-1 rounded">{'<form>'}</code> с атрибутами <code className="bg-gray-700 px-1 rounded">action</code> (любой URL, например, <code className="bg-gray-700 px-1 rounded">"/register"</code>) и <code className="bg-gray-700 px-1 rounded">method="post"</code>.</li>
          <li>Поля ввода:
            <ul className="list-disc pl-5 mt-1 space-y-1">
              <li><code className="bg-gray-700 px-1 rounded">{'<input type="text">'}</code> для имени пользователя с <code className="bg-gray-700 px-1 rounded">placeholder</code> "Имя пользователя".</li>
              <li><code className="bg-gray-700 px-1 rounded">{'<input type="email">'}</code> для адреса электронной почты с <code className="bg-gray-700 px-1 rounded">placeholder</code> "your@email.com".</li>
              <li><code className="bg-gray-700 px-1 rounded">{'<input type="password">'}</code> для пароля.</li>
            </ul>
          </li>
          <li>Кнопку отправки формы <code className="bg-gray-700 px-1 rounded">{'<input type="submit">'}</code> со значением "Зарегистрироваться".</li>
        </ul>
        <details className="group">
          <summary className="cursor-pointer text-sm text-gray-400 hover:text-gray-300 flex items-center gap-1">
            <span>Подсказка</span>
            <svg className="w-4 h-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </summary>
          <div className="mt-2 p-3 bg-gray-900/50 rounded text-sm text-gray-300">
            <p>Не забудьте добавить атрибуты <code className="bg-gray-700 px-1 rounded">name</code> к каждому полю ввода для корректной отправки данных на сервер.</p>
          </div>
        </details>
      </div>

      {/* Задание 2 */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
          <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">2</span>
          Форма обратной связи
        </h3>
        <p className="text-gray-300 mb-3">
          Создайте HTML-фрагмент формы обратной связи для сайта. Форма должна включать:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-gray-300 mb-3">
          <li>Тег <code className="bg-gray-700 px-1 rounded">{'<form>'}</code> с атрибутами <code className="bg-gray-700 px-1 rounded">action="/send_message"</code> и <code className="bg-gray-700 px-1 rounded">method="post"</code>.</li>
          <li>Поля ввода:
            <ul className="list-disc pl-5 mt-1 space-y-1">
              <li><code className="bg-gray-700 px-1 rounded">{'<input type="text">'}</code> для имени отправителя с <code className="bg-gray-700 px-1 rounded">placeholder</code> "Ваше имя".</li>
              <li><code className="bg-gray-700 px-1 rounded">{'<input type="email">'}</code> для email отправителя.</li>
              <li><code className="bg-gray-700 px-1 rounded">{'<input type="text">'}</code> для темы сообщения с <code className="bg-gray-700 px-1 rounded">placeholder</code> "Тема вашего сообщения".</li>
            </ul>
          </li>
          <li><code className="bg-gray-700 px-1 rounded">{'<textarea>'}</code> для основного текста сообщения с атрибутами <code className="bg-gray-700 px-1 rounded">rows="5"</code> и <code className="bg-gray-700 px-1 rounded">placeholder</code> "Напишите ваше сообщение здесь...".</li>
          <li>Кнопку отправки формы <code className="bg-gray-700 px-1 rounded">{'<input type="submit">'}</code> со значением "Отправить сообщение".</li>
        </ul>
        <details className="group">
          <summary className="cursor-pointer text-sm text-gray-400 hover:text-gray-300 flex items-center gap-1">
            <span>Подсказка</span>
            <svg className="w-4 h-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </summary>
          <div className="mt-2 p-3 bg-gray-900/50 rounded text-sm text-gray-300">
            <p>Используйте тег <code className="bg-gray-700 px-1 rounded">{'<label>'}</code> перед каждым полем ввода, чтобы связать метку с полем (через атрибут <code className="bg-gray-700 px-1 rounded">for</code>, указывающий на <code className="bg-gray-700 px-1 rounded">id</code> поля).</p>
          </div>
        </details>
      </div>

      {/* Задание 3 */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
          <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">3</span>
          Форма заказа товара
        </h3>
        <p className="text-gray-300 mb-3">
          Создайте HTML-фрагмент формы заказа товара в интернет-магазине. Форма должна включать:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-gray-300 mb-3">
          <li>Тег <code className="bg-gray-700 px-1 rounded">{'<form>'}</code> с атрибутами <code className="bg-gray-700 px-1 rounded">action="/place_order"</code> и <code className="bg-gray-700 px-1 rounded">method="post"</code>.</li>
          <li>Поля ввода:
            <ul className="list-disc pl-5 mt-1 space-y-1">
              <li><code className="bg-gray-700 px-1 rounded">{'<input type="text">'}</code> для имени получателя.</li>
              <li><code className="bg-gray-700 px-1 rounded">{'<input type="tel">'}</code> для номера телефона.</li>
              <li><code className="bg-gray-700 px-1 rounded">{'<input type="email">'}</code> для email.</li>
              <li><code className="bg-gray-700 px-1 rounded">{'<textarea>'}</code> для адреса доставки с <code className="bg-gray-700 px-1 rounded">placeholder</code> "Улица, дом, квартира, город, индекс".</li>
            </ul>
          </li>
          <li>
            Выпадающий список <code className="bg-gray-700 px-1 rounded">{'<select>'}</code> для выбора способа оплаты:
            <ul className="list-disc pl-5 mt-1 space-y-1">
              <li><code className="bg-gray-700 px-1 rounded">{'<option>'}</code> "Кредитная карта".</li>
              <li><code className="bg-gray-700 px-1 rounded">{'<option>'}</code> "PayPal".</li>
              <li><code className="bg-gray-700 px-1 rounded">{'<option>'}</code> "Наличные при получении".</li>
            </ul>
          </li>
          <li>Кнопку отправки формы <code className="bg-gray-700 px-1 rounded">{'<input type="submit">'}</code> со значением "Оформить заказ".</li>
        </ul>
        <details className="group">
          <summary className="cursor-pointer text-sm text-gray-400 hover:text-gray-300 flex items-center gap-1">
            <span>Подсказка</span>
            <svg className="w-4 h-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </summary>
          <div className="mt-2 p-3 bg-gray-900/50 rounded text-sm text-gray-300">
            <p>Добавьте атрибут <code className="bg-gray-700 px-1 rounded">required</code> к полям, которые должны быть обязательно заполнены (например, имя, телефон, email).</p>
          </div>
        </details>
      </div>

      {/* Задание 4 */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
          <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">4</span>
          Найди и исправь ошибки
        </h3>
        <p className="text-gray-300 mb-3">
          Найдите и исправьте все ошибки в приведенном ниже HTML-коде формы. Объясните, почему это ошибки.
        </p>
        <div className="bg-gray-900 p-4 rounded-lg my-3">
          <pre className="text-red-300 text-sm overflow-x-auto">
            <code>{`<form action="process.php">
  <input type="text" name="username" value="Имя пользователя">
  <input type="password" name="pass">
  <input type="submit">
</form>`}</code>
          </pre>
        </div>
        <details className="group">
          <summary className="cursor-pointer text-sm text-gray-400 hover:text-gray-300 flex items-center gap-1">
            <span>Подсказка</span>
            <svg className="w-4 h-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </summary>
          <div className="mt-2 p-3 bg-gray-900/50 rounded text-sm text-gray-300">
            <p>Проверьте, указан ли метод отправки формы, правильно ли используются атрибуты <code className="bg-gray-700 px-1 rounded">value</code> и <code className="bg-gray-700 px-1 rounded">placeholder</code>, есть ли атрибут <code className="bg-gray-700 px-1 rounded">type</code> у кнопки отправки.</p>
          </div>
        </details>
      </div>

      {/* Задание 5 */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
          <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">5</span>
          Комплексная форма профиля
        </h3>
        <p className="text-gray-300 mb-3">
          Создайте HTML-страницу "Редактирование профиля". Страница должна включать:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-gray-300 mb-3">
          <li>Заголовок "Редактирование профиля".</li>
          <li>Форму с атрибутами <code className="bg-gray-700 px-1 rounded">action="/update_profile"</code> и <code className="bg-gray-700 px-1 rounded">method="post"</code>.</li>
          <li>Поля ввода:
            <ul className="list-disc pl-5 mt-1 space-y-1">
              <li><code className="bg-gray-700 px-1 rounded">{'<input type="text">'}</code> для имени, предзаполненное значением "Иван".</li>
              <li><code className="bg-gray-700 px-1 rounded">{'<input type="email">'}</code> для email, предзаполненное значением "ivan@example.com".</li>
              <li><code className="bg-gray-700 px-1 rounded">{'<input type="date">'}</code> для даты рождения.</li>
              <li><code className="bg-gray-700 px-1 rounded">{'<textarea>'}</code> для "О себе" с <code className="bg-gray-700 px-1 rounded">rows="4"</code> и <code className="bg-gray-700 px-1 rounded">placeholder</code>.</li>
            </ul>
          </li>
          <li>
            Выпадающий список <code className="bg-gray-700 px-1 rounded">{'<select>'}</code> для выбора страны:
            <ul className="list-disc pl-5 mt-1 space-y-1">
              <li>Опция "-- Выберите страну --" без значения (по умолчанию).</li>
              <li>Опции "Россия", "Беларусь", "Казахстан", "Украина".</li>
            </ul>
          </li>
          <li>Флажок <code className="bg-gray-700 px-1 rounded">{'<input type="checkbox">'}</code> "Подписаться на рассылку".</li>
          <li>Кнопки:
            <ul className="list-disc pl-5 mt-1 space-y-1">
              <li><code className="bg-gray-700 px-1 rounded">{'<input type="submit">'}</code> "Сохранить изменения".</li>
              <li><code className="bg-gray-700 px-1 rounded">{'<input type="reset">'}</code> "Сбросить".</li>
            </ul>
          </li>
        </ul>
        <p className="text-gray-300">
          Добавьте соответствующие <code className="bg-gray-700 px-1 rounded">{'<label>'}</code> для каждого поля.
        </p>
      </div>

      {/* Заключение */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <div className="flex items-start gap-3">
          <div className="bg-green-500/20 p-2 rounded-lg flex-shrink-0">
            <Code className="w-5 h-5 text-green-400" />
          </div>
          <div>
            <h3 className="font-bold text-white mb-2">Отличная работа! 🎉</h3>
            <p className="text-gray-300">
              Эти задания помогли вам закрепить навыки создания форм в HTML. Вы попрактиковались в использовании ключевых тегов (<code className="bg-gray-700 px-1 rounded">{'<form>'}</code>, <code className="bg-gray-700 px-1 rounded">{'<input>'}</code>, <code className="bg-gray-700 px-1 rounded">{'<textarea>'}</code>, <code className="bg-gray-700 px-1 rounded">{'<select>'}</code>, <code className="bg-gray-700 px-1 rounded">{'<option>'}</code>) и атрибутов (<code className="bg-gray-700 px-1 rounded">action</code>, <code className="bg-gray-700 px-1 rounded">method</code>, <code className="bg-gray-700 px-1 rounded">type</code>, <code className="bg-gray-700 px-1 rounded">placeholder</code>, <code className="bg-gray-700 px-1 rounded">value</code>). Формы — это основа интерактивности в вебе, и умение их правильно создавать — ключевой навык веб-разработчика.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Part3;