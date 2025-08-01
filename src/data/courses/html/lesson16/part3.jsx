// src/data/courses/html/lesson16/part3.jsx
import React from 'react';
import { Code, FileText, Terminal, Search, Smartphone, Hash, Globe, Eye } from 'lucide-react';

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
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">✏️ Практика: Метатеги и SEO-основы</h1>
            <p className="text-gray-300">
              <span className="font-medium text-yellow-400">🎯 Цель:</span> Закрепить знания по использованию <span className="font-medium text-green-300">метатегов</span> в секции <code className="bg-gray-700 px-1.5 py-0.5 rounded text-purple-300">{'<head>'}</code> для улучшения <span className="font-medium text-cyan-300">SEO</span> и <span className="font-medium text-blue-300">адаптивности</span> веб-страниц. Практика с метатегами: <code className="bg-gray-700 px-1.5 py-0.5 rounded text-orange-300">charset</code>, <code className="bg-gray-700 px-1.5 py-0.5 rounded text-red-300">viewport</code>, <code className="bg-gray-700 px-1.5 py-0.5 rounded text-green-300">description</code>, <code className="bg-gray-700 px-1.5 py-0.5 rounded text-yellow-300">keywords</code>.
            </p>
          </div>
        </div>
      </div>

      {/* Задание 1 */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
          <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">1</span>
          Оптимизация заголовков страницы
        </h3>
        <p className="text-gray-300 mb-3">
          Создайте HTML-фрагмент секции <code className="bg-gray-700 px-1 rounded">{'<head>'}</code> для страницы "О компании". Страница должна включать:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-gray-300 mb-3">
          <li>Правильную кодировку документа (<code className="bg-gray-700 px-1 rounded">charset</code>).</li>
          <li>Метатег viewport для адаптивности.</li>
          <li>Заголовок страницы (<code className="bg-gray-700 px-1 rounded">{'<title>'}</code>) "О компании - Наша история и миссия".</li>
          <li>Метатег description с описанием компании (120-160 символов).</li>
          <li>Метатег keywords с 5-7 ключевыми словами.</li>
        </ul>
        <p className="text-gray-300 mb-3">
          <span className="font-medium">Требования:</span>
        </p>
        <ul className="list-disc pl-5 space-y-1 text-gray-300 mb-3">
          <li>Метатег <code className="bg-gray-700 px-1 rounded">charset</code> должен быть первым.</li>
          <li>Метатег <code className="bg-gray-700 px-1 rounded">viewport</code> должен следовать за <code className="bg-gray-700 px-1 rounded">charset</code>.</li>
          <li>Description должен быть уникальным и содержательным.</li>
          <li>Keywords должны быть релевантны содержанию страницы.</li>
        </ul>
        <details className="group">
          <summary className="cursor-pointer text-sm text-gray-400 hover:text-gray-300 flex items-center gap-1">
            <span>Подсказка</span>
            <svg className="w-4 h-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </summary>
          <div className="mt-2 p-3 bg-gray-900/50 rounded text-sm text-gray-300">
            <p>Используйте структуру: <code className="bg-gray-700 px-1 rounded">{'<head>'}</code> → <code className="bg-gray-700 px-1 rounded">{'<meta charset="UTF-8">'}</code> → <code className="bg-gray-700 px-1 rounded">{'<meta name="viewport"...>'}</code> → <code className="bg-gray-700 px-1 rounded">{'<title>'}</code> → <code className="bg-gray-700 px-1 rounded">{'<meta name="description"...>'}</code> → <code className="bg-gray-700 px-1 rounded">{'<meta name="keywords"...>'}</code>.</p>
          </div>
        </details>
      </div>

      {/* Задание 2 */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
          <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">2</span>
          Метатеги для блога
        </h3>
        <p className="text-gray-300 mb-3">
          Создайте HTML-фрагмент секции <code className="bg-gray-700 px-1 rounded">{'<head>'}</code> для статьи в блоге "Как изучать HTML". Страница должна включать:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-gray-300 mb-3">
          <li>Правильную кодировку и viewport.</li>
          <li>Заголовок страницы "Как изучать HTML - Пошаговое руководство".</li>
          <li>Описание статьи в метатеге description (120-160 символов).</li>
          <li>Ключевые слова, связанные с темой статьи.</li>
          <li>Дополнительные метатеги: автор статьи и дата публикации.</li>
        </ul>
        <p className="text-gray-300 mb-3">
          <span className="font-medium">Требования:</span>
        </p>
        <ul className="list-disc pl-5 space-y-1 text-gray-300 mb-3">
          <li>Описание должно содержать призыв к действию (например, "Узнайте, как...").</li>
          <li>Keywords должны включать как общие, так и уточняющие термины.</li>
          <li>Используйте дополнительные метатеги <code className="bg-gray-700 px-1 rounded">author</code> и <code className="bg-gray-700 px-1 rounded">date</code>.</li>
        </ul>
        <details className="group">
          <summary className="cursor-pointer text-sm text-gray-400 hover:text-gray-300 flex items-center gap-1">
            <span>Подсказка</span>
            <svg className="w-4 h-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </summary>
          <div className="mt-2 p-3 bg-gray-900/50 rounded text-sm text-gray-300">
            <p>Пример дополнительных метатегов: <code className="bg-gray-700 px-1 rounded">{'<meta name="author" content="Иван Петров">'}</code>, <code className="bg-gray-700 px-1 rounded">{'<meta name="date" content="2023-06-15">'}</code>.</p>
          </div>
        </details>
      </div>

      {/* Задание 3 */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
          <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">3</span>
          Адаптивность для мобильных устройств
        </h3>
        <p className="text-gray-300 mb-3">
          Создайте HTML-фрагмент секции <code className="bg-gray-700 px-1 rounded">{'<head>'}</code> для мобильного приложения. Страница должна включать:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-gray-300 mb-3">
          <li>Правильную кодировку документа.</li>
          <li>Метатег viewport с дополнительными параметрами для мобильных устройств.</li>
          <li>Заголовок страницы "Наше мобильное приложение".</li>
          <li>Описание с акцентом на мобильную оптимизацию.</li>
        </ul>
        <p className="text-gray-300 mb-3">
          <span className="font-medium">Требования:</span>
        </p>
        <ul className="list-disc pl-5 space-y-1 text-gray-300 mb-3">
          <li>Используйте расширенный метатег viewport с параметрами <code className="bg-gray-700 px-1 rounded">user-scalable</code>, <code className="bg-gray-700 px-1 rounded">minimum-scale</code>, <code className="bg-gray-700 px-1 rounded">maximum-scale</code>.</li>
          <li>Описание должно упоминать "мобильную версию", "удобный интерфейс" и т.д.</li>
          <li>Добавьте метатег <code className="bg-gray-700 px-1 rounded">format-detection</code> для отключения автоматического определения телефонных номеров.</li>
        </ul>
        <details className="group">
          <summary className="cursor-pointer text-sm text-gray-400 hover:text-gray-300 flex items-center gap-1">
            <span>Подсказка</span>
            <svg className="w-4 h-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </summary>
          <div className="mt-2 p-3 bg-gray-900/50 rounded text-sm text-gray-300">
            <p>Пример расширенного viewport: <code className="bg-gray-700 px-1 rounded">{'<meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no, minimum-scale=1.0, maximum-scale=1.0">'}</code>. Для форматов: <code className="bg-gray-700 px-1 rounded">{'<meta name="format-detection" content="telephone=no">'}</code>.</p>
          </div>
        </details>
      </div>

      {/* Задание 4 */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
          <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">4</span>
          Найди и исправь ошибки в метатегах
        </h3>
        <p className="text-gray-300 mb-3">
          Найдите и исправьте все ошибки в приведенном ниже фрагменте секции <code className="bg-gray-700 px-1 rounded">{'<head>'}</code>. Объясните, почему это ошибки.
        </p>
        <div className="bg-gray-900 p-4 rounded-lg my-3">
          <pre className="text-red-300 text-sm overflow-x-auto">
            <code>{`<head>
    <title>Мой сайт</title>
    <meta name="description" content="Это мой сайт. Здесь вы найдете много интересного. Посетите нас прямо сейчас!">
    <meta name="keywords" content="сайт, интересный, посетите">
    <meta name="viewport" content="initial-scale=1.0">
    <meta charset="UTF-8">
</head>`}</code>
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
            <p>Проверьте: порядок метатегов, длину description, релевантность keywords, полноту viewport, правильность атрибута charset.</p>
          </div>
        </details>
      </div>

      {/* Задание 5 */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
          <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">5</span>
          Комплексная оптимизация для интернет-магазина
        </h3>
        <p className="text-gray-300 mb-3">
          Создайте HTML-фрагмент секции <code className="bg-gray-700 px-1 rounded">{'<head>'}</code> для главной страницы интернет-магазина "ТехноМаркет". Страница должна включать:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-gray-300 mb-3">
          <li><span className="font-medium">Базовые метатеги:</span> кодировку, viewport, заголовок "ТехноМаркет - Лучшие гаджеты по выгодным ценам".</li>
          <li><span className="font-medium">SEO-метатеги:</span> description с уникальным описанием магазина, keywords с 8-10 релевантными терминами.</li>
          <li><span className="font-medium">Метатеги для социальных сетей (Open Graph):</span> заголовок, описание, изображение, URL.</li>
          <li><span className="font-medium">Дополнительные метатеги:</span> автор, robots (index, follow), theme-color для мобильных браузеров.</li>
        </ul>
        <p className="text-gray-300">
          <span className="font-medium">Требования:</span> Используйте все изученные метатеги, правильную структуру, уникальные и содержательные значения. Уделите внимание метатегам Open Graph для улучшения шаринга в соцсетях.
        </p>
      </div>

      {/* Заключение */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <div className="flex items-start gap-3">
          <div className="bg-green-500/20 p-2 rounded-lg flex-shrink-0">
            <Search className="w-5 h-5 text-green-400" />
          </div>
          <div>
            <h3 className="font-bold text-white mb-2">Отличная работа! 🎉</h3>
            <p className="text-gray-300">
              Эти задания помогли вам закрепить навыки использования <span className="font-medium text-purple-300">метатегов</span> в секции <code className="bg-gray-700 px-1 rounded">{'<head>'}</code> для улучшения <span className="font-medium text-green-300">SEO</span> и <span className="font-medium text-cyan-300">адаптивности</span> ваших веб-страниц. Вы попрактиковались в создании правильной <span className="font-medium text-blue-300">кодировки</span> (<code className="bg-gray-700 px-1 rounded">charset</code>), настройке <span className="font-medium text-orange-300">адаптивности</span> (<code className="bg-gray-700 px-1 rounded">viewport</code>), написании <span className="font-medium text-red-300">SEO-описаний</span> (<code className="bg-gray-700 px-1 rounded">description</code>) и <span className="font-medium text-yellow-300">ключевых слов</span> (<code className="bg-gray-700 px-1 rounded">keywords</code>). Эти знания делают ваши веб-страницы не только <span className="font-medium text-green-300">понятнее</span> для поисковых систем, но и <span className="font-medium text-blue-300">удобнее</span> для пользователей на всех устройствах. Это <span className="font-medium text-purple-300">важный навык</span> профессионального веб-разработчика.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Part3;