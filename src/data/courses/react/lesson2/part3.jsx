// src/data/courses/react/lesson2/part3.jsx
import React from 'react';
import { Code, Braces, Palette, Hash, FileText, Terminal } from 'lucide-react';

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
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">✏️ Практика: JSX — HTML в JavaScript</h1>
            <p className="text-gray-300">
              <span className="font-medium text-yellow-400">🎯 Цель:</span> Закрепить знания по работе с JSX, освоить синтаксис, атрибуты, стилизацию и логические операции в React-компонентах.
            </p>
          </div>
        </div>
      </div>

      {/* Задание 1 */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
          <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">1</span>
          Создание простого компонента с JSX
        </h3>
        <p className="text-gray-300 mb-3">
          Создайте React-компонент <code className="bg-gray-700 px-1.5 py-0.5 rounded text-green-300">UserProfile</code>, который отображает:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-gray-300 mb-3">
          <li>Заголовок <code className="bg-gray-700 px-1 rounded">{'<h1>'}</code> с текстом "Профиль пользователя".</li>
          <li>Абзац <code className="bg-gray-700 px-1 rounded">{'<p>'}</code> с именем пользователя (используйте переменную <code className="bg-gray-700 px-1 rounded">userName</code> со значением "Анна").</li>
          <li>Абзац с возрастом пользователя (используйте переменную <code className="bg-gray-700 px-1 rounded">userAge</code> со значением 25).</li>
          <li>Изображение <code className="bg-gray-700 px-1 rounded">{'<img>'}</code> с атрибутами <code className="bg-gray-700 px-1 rounded">src</code> и <code className="bg-gray-700 px-1 rounded">alt</code> (используйте любую ссылку на аватар, например, <code className="bg-gray-700 px-1 rounded">https://i.pravatar.cc/150?img=1</code>).</li>
        </ul>
        <details className="group">
          <summary className="cursor-pointer text-sm text-gray-400 hover:text-gray-300 flex items-center gap-1">
            <span>Подсказка</span>
            <svg className="w-4 h-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </summary>
          <div className="mt-2 p-3 bg-gray-900/50 rounded text-sm text-gray-300">
            <p>Не забудьте правильно закрыть тег <code className="bg-gray-700 px-1 rounded">{'<img />'}</code> и использовать фигурные скобки <code className="bg-gray-700 px-1 rounded">{'{ }'}</code> для вставки переменных.</p>
          </div>
        </details>
      </div>

      {/* Задание 2 */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
          <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">2</span>
          Стилизация компонента
        </h3>
        <p className="text-gray-300 mb-3">
          Модифицируйте компонент <code className="bg-gray-700 px-1 rounded">UserProfile</code> из предыдущего задания:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-gray-300 mb-3">
          <li>Добавьте CSS-класс <code className="bg-gray-700 px-1 rounded">profile-card</code> к внешнему <code className="bg-gray-700 px-1 rounded">{'<div>'}</code> элементу.</li>
          <li>Создайте inline-стили для заголовка: красный цвет текста и размер шрифта 28px.</li>
          <li>Создайте inline-стили для изображения: закругленные углы (borderRadius) 50% и ширина/высота 100px.</li>
          <li>Добавьте CSS-класс <code className="bg-gray-700 px-1 rounded">user-info</code> к абзацам с информацией о пользователе.</li>
        </ul>
        <details className="group">
          <summary className="cursor-pointer text-sm text-gray-400 hover:text-gray-300 flex items-center gap-1">
            <span>Подсказка</span>
            <svg className="w-4 h-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </summary>
          <div className="mt-2 p-3 bg-gray-900/50 rounded text-sm text-gray-300">
            <p>Для inline-стилей используйте двойные фигурные скобки <code className="bg-gray-700 px-1 rounded">{'{{ }}'}</code>. CSS-свойства с дефисами пишутся в camelCase: <code className="bg-gray-700 px-1 rounded">fontSize</code>, <code className="bg-gray-700 px-1 rounded">borderRadius</code>.</p>
          </div>
        </details>
      </div>

      {/* Задание 3 */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
          <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">3</span>
          Условный рендеринг
        </h3>
        <p className="text-gray-300 mb-3">
          Создайте компонент <code className="bg-gray-700 px-1 rounded">Message</code>, который отображает разный контент в зависимости от состояния:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-gray-300 mb-3">
          <li>Создайте булеву переменную <code className="bg-gray-700 px-1 rounded">isLoggedIn</code> и установите её в <code className="bg-gray-700 px-1 rounded">true</code>.</li>
          <li>Используйте тернарный оператор для отображения:
            <ul className="list-circle pl-5 mt-1">
              <li>Если <code className="bg-gray-700 px-1 rounded">isLoggedIn</code> равно <code className="bg-gray-700 px-1 rounded">true</code>: <code className="bg-gray-700 px-1 rounded">{'<p>Добро пожаловать, пользователь!</p>'}</code></li>
              <li>Если <code className="bg-gray-700 px-1 rounded">isLoggedIn</code> равно <code className="bg-gray-700 px-1 rounded">false</code>: <code className="bg-gray-700 px-1 rounded">{'<p>Пожалуйста, войдите в систему.</p>'}</code></li>
            </ul>
          </li>
          <li>Создайте ещё одну переменную <code className="bg-gray-700 px-1 rounded">hasMessages</code> и установите её в <code className="bg-gray-700 px-1 rounded">false</code>.</li>
          <li>Используйте логическое И (<code className="bg-gray-700 px-1 rounded">{'&&'}</code>) для отображения:
            <ul className="list-circle pl-5 mt-1">
              <li>Если <code className="bg-gray-700 px-1 rounded">hasMessages</code> равно <code className="bg-gray-700 px-1 rounded">true</code>: <code className="bg-gray-700 px-1 rounded">{'<div>У вас 5 непрочитанных сообщений.</div>'}</code></li>
              <li>Если <code className="bg-gray-700 px-1 rounded">hasMessages</code> равно <code className="bg-gray-700 px-1 rounded">false</code>: ничего не отображается.</li>
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
            <p>Синтаксис тернарного оператора: <code className="bg-gray-700 px-1 rounded">{'{условие ? <элемент1 /> : <элемент2 />}'}</code>. Синтаксис логического И: <code className="bg-gray-700 px-1 rounded">{'{условие && <элемент />}'}</code>.</p>
          </div>
        </details>
      </div>

      {/* Задание 4 */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
          <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">4</span>
          Рендеринг списков
        </h3>
        <p className="text-gray-300 mb-3">
          Создайте компонент <code className="bg-gray-700 px-1 rounded">TodoList</code>, который отображает список задач:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-gray-300 mb-3">
          <li>Создайте массив строк <code className="bg-gray-700 px-1 rounded">todos</code> с задачами: <code className="bg-gray-700 px-1 rounded">['Купить молоко', 'Погулять с собакой', 'Закончить проект']</code>.</li>
          <li>Отобразите этот массив в виде неупорядоченного списка <code className="bg-gray-700 px-1 rounded">{'<ul>'}</code>.</li>
          <li>Каждый элемент списка <code className="bg-gray-700 px-1 rounded">{'<li>'}</code> должен содержать текст задачи.</li>
          <li>Добавьте уникальный ключ <code className="bg-gray-700 px-1 rounded">key</code> для каждого элемента списка (используйте индекс).</li>
          <li>Добавьте заголовок <code className="bg-gray-700 px-1 rounded">{'<h2>'}</code> "Список дел" над списком.</li>
        </ul>
        <details className="group">
          <summary className="cursor-pointer text-sm text-gray-400 hover:text-gray-300 flex items-center gap-1">
            <span>Подсказка</span>
            <svg className="w-4 h-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </summary>
          <div className="mt-2 p-3 bg-gray-900/50 rounded text-sm text-gray-300">
            <p>Используйте метод массива <code className="bg-gray-700 px-1 rounded">.map()</code> для преобразования массива в JSX-элементы. Синтаксис: <code className="bg-gray-700 px-1 rounded">{'{todos.map((todo, index) => (<li key={index}>{todo}</li>))}'}</code>.</p>
          </div>
        </details>
      </div>

      {/* Задание 5 */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
          <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">5</span>
          Комплексный компонент
        </h3>
        <p className="text-gray-300 mb-3">
          Создайте компонент <code className="bg-gray-700 px-1 rounded">ProductCard</code>, объединяющий все изученные концепции:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-gray-300 mb-3">
          <li>Создайте объект <code className="bg-gray-700 px-1 rounded">product</code> со свойствами: <code className="bg-gray-700 px-1 rounded">name</code> ("Смартфон"), <code className="bg-gray-700 px-1 rounded">price</code> (25000), <code className="bg-gray-700 px-1 rounded">inStock</code> (true), <code className="bg-gray-700 px-1 rounded">description</code> ("Новый смартфон с отличной камерой").</li>
          <li>Отобразите название продукта в заголовке <code className="bg-gray-700 px-1 rounded">{'<h3>'}</code>.</li>
          <li>Отобразите цену в абзаце <code className="bg-gray-700 px-1 rounded">{'<p>'}</code>, добавив "₽" в конце.</li>
          <li>Используйте условный рендеринг для отображения статуса наличия:
            <ul className="list-circle pl-5 mt-1">
              <li>Если <code className="bg-gray-700 px-1 rounded">inStock</code> true: <code className="bg-gray-700 px-1 rounded">{'<span style={{ color: "green" }}>В наличии</span>'}</code></li>
              <li>Если <code className="bg-gray-700 px-1 rounded">inStock</code> false: <code className="bg-gray-700 px-1 rounded">{'<span style={{ color: "red" }}>Нет в наличии</span>'}</code></li>
            </ul>
          </li>
          <li>Отобразите описание в абзаце <code className="bg-gray-700 px-1 rounded">{'<p>'}</code>.</li>
          <li>Добавьте кнопку <code className="bg-gray-700 px-1 rounded">{'<button>'}</code> с текстом "Добавить в корзину" и CSS-классом <code className="bg-gray-700 px-1 rounded">btn</code>.</li>
        </ul>
        <details className="group">
          <summary className="cursor-pointer text-sm text-gray-400 hover:text-gray-300 flex items-center gap-1">
            <span>Подсказка</span>
            <svg className="w-4 h-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </summary>
          <div className="mt-2 p-3 bg-gray-900/50 rounded text-sm text-gray-300">
            <p>Для доступа к свойствам объекта используйте точечную нотацию: <code className="bg-gray-700 px-1 rounded">{'{product.name}'}</code>. Для добавления символа рубля используйте строковую конкатенацию: <code className="bg-gray-700 px-1 rounded">{'{product.price} ₽'}</code>.</p>
          </div>
        </details>
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
              Эти задания помогли вам закрепить навыки работы с JSX в React. Вы научились создавать компоненты с HTML-подобным синтаксисом, использовать атрибуты (<code className="bg-gray-700 px-1 rounded">className</code>), встраивать JavaScript-выражения в фигурных скобках, применять стилизацию (через <code className="bg-gray-700 px-1 rounded">className</code> и inline <code className="bg-gray-700 px-1 rounded">style</code>), реализовывать условный рендеринг (с помощью тернарного оператора и логического И) и рендерить списки с использованием <code className="bg-gray-700 px-1 rounded">.map()</code> и ключей. Эти навыки являются фундаментом для создания любых React-приложений.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Part3;