// src/data/courses/html/lesson9/part3.jsx
import React from 'react';
import { Code, FileText, Terminal, Monitor, Youtube, MapPin, Shield } from 'lucide-react';

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
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">✏️ Практика: Встраивание внешнего контента с {'<iframe>'}</h1>
            <p className="text-gray-300">
              <span className="font-medium text-yellow-400">🎯 Цель:</span> Закрепить знания по использованию тега <code className="bg-gray-700 px-1.5 py-0.5 rounded text-green-300">{'<iframe>'}</code> для встраивания видео, карт и других виджетов, а также применить атрибуты безопасности.
            </p>
          </div>
        </div>
      </div>

      {/* Задание 1 */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
          <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">1</span>
          Вставьте видео с YouTube
        </h3>
        <p className="text-gray-300 mb-3">
          Найдите любое публичное видео на YouTube (например, обучающее, развлекательное). Скопируйте код для встраивания (<em>Embed Code</em>) и вставьте его в HTML-фрагмент. Убедитесь, что у iframe есть атрибут <code className="bg-gray-700 px-1 rounded">title</code> с описательным текстом.
        </p>
        <details className="group">
          <summary className="cursor-pointer text-sm text-gray-400 hover:text-gray-300 flex items-center gap-1">
            <span>Подсказка</span>
            <svg className="w-4 h-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </summary>
          <div className="mt-2 p-3 bg-gray-900/50 rounded text-sm text-gray-300">
            <p>На странице видео YouTube нажмите "Поделиться" -> "Встроить". Скопируйте предоставленный код <code className="bg-gray-700 px-1 rounded">{'<iframe>'}</code>.</p>
          </div>
        </details>
      </div>

      {/* Задание 2 */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
          <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">2</span>
          Карта вашего любимого места
        </h3>
        <p className="text-gray-300 mb-3">
          Используйте Google Карты, чтобы найти место, которое вам нравится (ваш город, парк, достопримечательность). Создайте iframe для встраивания карты этого места на вашу веб-страницу. Добавьте атрибуты <code className="bg-gray-700 px-1 rounded">width</code>, <code className="bg-gray-700 px-1 rounded">height</code> и <code className="bg-gray-700 px-1 rounded">title</code>.
        </p>
        <details className="group">
          <summary className="cursor-pointer text-sm text-gray-400 hover:text-gray-300 flex items-center gap-1">
            <span>Подсказка</span>
            <svg className="w-4 h-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </summary>
          <div className="mt-2 p-3 bg-gray-900/50 rounded text-sm text-gray-300">
            <p>В Google Карты щелкните правой кнопкой мыши по месту -> "Встроить карту" -> Выберите размер -> Скопируйте код iframe.</p>
          </div>
        </details>
      </div>

      {/* Задание 3 */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
          <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">3</span>
          Безопасное встраивание рекламы
        </h3>
        <p className="text-gray-300 mb-3">
          Представьте, что вы хотите встроить сторонний рекламный баннер (который может содержать скрипты). Создайте HTML-фрагмент с iframe, который будет встраивать этот гипотетический баннер (<code className="bg-gray-700 px-1 rounded">ad_banner.html</code>). Используйте атрибут <code className="bg-gray-700 px-1 rounded">sandbox</code> <span className="font-medium">без</span> значения, чтобы применить <span className="font-medium">все</span> возможные ограничения безопасности.
        </p>
        <details className="group">
          <summary className="cursor-pointer text-sm text-gray-400 hover:text-gray-300 flex items-center gap-1">
            <span>Подсказка</span>
            <svg className="w-4 h-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </summary>
          <div className="mt-2 p-3 bg-gray-900/50 rounded text-sm text-gray-300">
            <p>Используйте атрибут <code className="bg-gray-700 px-1 rounded">sandbox</code> без кавычек и значения: <code className="bg-gray-700 px-1 rounded">{'<iframe src="..." sandbox></iframe>'}</code>.</p>
          </div>
        </details>
      </div>

      {/* Задание 4 */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
          <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">4</span>
          Виджет с ограниченными правами
        </h3>
        <p className="text-gray-300 mb-3">
          Создайте HTML-фрагмент, встраивающий гипотетический виджет чата (<code className="bg-gray-700 px-1 rounded">chat_widget.html</code>). Используйте атрибут <code className="bg-gray-700 px-1 rounded">sandbox</code>, но разрешите выполнение скриптов и отправку форм. Также добавьте атрибут <code className="bg-gray-700 px-1 rounded">referrerpolicy="no-referrer"</code> для повышения конфиденциальности.
        </p>
        <details className="group">
          <summary className="cursor-pointer text-sm text-gray-400 hover:text-gray-300 flex items-center gap-1">
            <span>Подсказка</span>
            <svg className="w-4 h-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </summary>
          <div className="mt-2 p-3 bg-gray-900/50 rounded text-sm text-gray-300">
            <p>Используйте <code className="bg-gray-700 px-1 rounded">sandbox="allow-scripts allow-forms"</code> и <code className="bg-gray-700 px-1 rounded">referrerpolicy="no-referrer"</code>.</p>
          </div>
        </details>
      </div>

      {/* Задание 5 */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
          <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">5</span>
          Комплексная страница с медиа
        </h3>
        <p className="text-gray-300 mb-3">
          Создайте HTML-страницу "Моя медиа-галерея" со следующими элементами:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-gray-300 mb-3">
          <li><span className="font-medium">Заголовок страницы</span> "Добро пожаловать в мою медиа-галерею".</li>
          <li>
            <span className="font-medium">Секция "Видео"</span>:
            <ul className="list-disc pl-5 mt-1 space-y-1">
              <li>Вставьте любое видео с YouTube (задание 1).</li>
              <li>Убедитесь, что у iframe есть атрибут <code className="bg-gray-700 px-1 rounded">title</code>.</li>
            </ul>
          </li>
          <li>
            <span className="font-medium">Секция "Карта"</span>:
            <ul className="list-disc pl-5 mt-1 space-y-1">
              <li>Вставьте карту места (задание 2).</li>
              <li>Убедитесь, что у iframe есть атрибут <code className="bg-gray-700 px-1 rounded">title</code>.</li>
            </ul>
          </li>
          <li>
            <span className="font-medium">Секция "Виджеты"</span>:
            <ul className="list-disc pl-5 mt-1 space-y-1">
              <li>Добавьте iframe для "рекламного баннера" из задания 3 с <code className="bg-gray-700 px-1 rounded">sandbox</code>.</li>
              <li>Добавьте iframe для "виджета чата" из задания 4 с <code className="bg-gray-700 px-1 rounded">sandbox="..."</code> и <code className="bg-gray-700 px-1 rounded">referrerpolicy="..."</code>.</li>
            </ul>
          </li>
        </ul>
        <p className="text-gray-300">
          Используйте семантические теги <code className="bg-gray-700 px-1 rounded">{'<section>'}</code> и <code className="bg-gray-700 px-1 rounded">{'<h2>'}</code> для структуры. Добавьте в конец страницы ссылку "Наверх".
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
              Эти задания помогли вам закрепить навыки использования тега <code className="bg-gray-700 px-1 rounded">{'<iframe>'}</code> для встраивания внешнего контента. Вы попрактиковались во вставке видео YouTube и карт Google, а также научились применять важные атрибуты безопасности <code className="bg-gray-700 px-1 rounded">sandbox</code> и <code className="bg-gray-700 px-1 rounded">referrerpolicy</code> для защиты вашего сайта и конфиденциальности пользователей. IFrame — мощный инструмент для создания богатых и интерактивных веб-страниц.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Part3;