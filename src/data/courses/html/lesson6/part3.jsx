// src/data/courses/html/lesson6/part3.jsx
import React from 'react';
import { Code, FileText, Terminal, Image, Accessibility, FileImage } from 'lucide-react';

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
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">✏️ Практика: Изображения в HTML</h1>
            <p className="text-gray-300">
              <span className="font-medium text-yellow-400">🎯 Цель:</span> Закрепить знания по вставке изображений с помощью тега <code className="bg-gray-700 px-1.5 py-0.5 rounded text-green-300">{'<img>'}</code> и его атрибутов.
            </p>
          </div>
        </div>
      </div>

      {/* Задание 1 */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
          <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">1</span>
          Галерея путешествий
        </h3>
        <p className="text-gray-300 mb-3">
          Создайте HTML-документ с заголовком "Мои путешествия". Вставьте 3-4 изображения с мест, где вы хотели бы побывать или где были. Для каждого изображения укажите:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-gray-300 mb-3">
          <li>Атрибут <code className="bg-gray-700 px-1 rounded">src</code> с путем к изображению (можете использовать URL из интернета или плейсхолдеры, например, <code className="bg-gray-700 px-1 rounded">https://picsum.photos/300/200</code>).</li>
          <li>Содержательный атрибут <code className="bg-gray-700 px-1 rounded">alt</code>, описывающий изображение.</li>
          <li>Атрибуты <code className="bg-gray-700 px-1 rounded">width</code> и <code className="bg-gray-700 px-1 rounded">height</code> (например, 300x200 пикселей).</li>
        </ul>
        <details className="group">
          <summary className="cursor-pointer text-sm text-gray-400 hover:text-gray-300 flex items-center gap-1">
            <span>Подсказка</span>
            <svg className="w-4 h-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </summary>
          <div className="mt-2 p-3 bg-gray-900/50 rounded text-sm text-gray-300">
            <p>Используйте тег <code className="bg-gray-700 px-1 rounded">{'<img>'}</code>. Не забудьте основную структуру HTML-документа.</p>
          </div>
        </details>
      </div>

      {/* Задание 2 */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
          <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">2</span>
          Профиль пользователя
        </h3>
        <p className="text-gray-300 mb-3">
          Создайте фрагмент HTML-кода, представляющий собой карточку профиля пользователя. Карточка должна включать:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-gray-300 mb-3">
          <li>Аватар пользователя (изображение).</li>
          <li>Имя пользователя.</li>
          <li>Краткое описание или статус.</li>
        </ul>
        <p className="text-gray-300 mb-3">
          Убедитесь, что для аватара заданы корректные атрибуты <code className="bg-gray-700 px-1 rounded">src</code> и <code className="bg-gray-700 px-1 rounded">alt</code>. Атрибут <code className="bg-gray-700 px-1 rounded">alt</code> должен описывать, что изображено на аватаре (например, "Аватар пользователя Иван Иванов").
        </p>
        <details className="group">
          <summary className="cursor-pointer text-sm text-gray-400 hover:text-gray-300 flex items-center gap-1">
            <span>Подсказка</span>
            <svg className="w-4 h-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </summary>
          <div className="mt-2 p-3 bg-gray-900/50 rounded text-sm text-gray-300">
            <p>Используйте теги <code className="bg-gray-700 px-1 rounded">{'<div>'}</code> или <code className="bg-gray-700 px-1 rounded">{'<section>'}</code> для создания карточки. Внутри разместите <code className="bg-gray-700 px-1 rounded">{'<img>'}</code>, <code className="bg-gray-700 px-1 rounded">{'<h2>'}</code> для имени и <code className="bg-gray-700 px-1 rounded">{'<p>'}</code> для описания.</p>
          </div>
        </details>
      </div>

      {/* Задание 3 */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
          <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">3</span>
          Логотип и favicon
        </h3>
        <p className="text-gray-300 mb-3">
          Объясните, в чем разница между логотипом сайта и favicon. Создайте HTML-фрагмент, который вставляет логотип компании (изображение) в верхнюю часть страницы. Укажите подходящие атрибуты <code className="bg-gray-700 px-1 rounded">src</code> и <code className="bg-gray-700 px-1 rounded">alt</code>.
        </p>
        <p className="text-gray-300 mb-3">
          (Понятие favicon в этом задании вводится только для общего развития, вставлять его в код пока не нужно).
        </p>
        <details className="group">
          <summary className="cursor-pointer text-sm text-gray-400 hover:text-gray-300 flex items-center gap-1">
            <span>Подсказка</span>
            <svg className="w-4 h-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </summary>
          <div className="mt-2 p-3 bg-gray-900/50 rounded text-sm text-gray-300">
            <p><span className="font-medium">Логотип:</span> Видимое изображение на странице. <span className="font-medium">Favicon:</span> Маленькая иконка, отображаемая во вкладке браузера и в закладках. Для логотипа используйте тег <code className="bg-gray-700 px-1 rounded">{'<img>'}</code>.</p>
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
          Найдите и исправьте все ошибки в приведенном ниже HTML-коде. Объясните, почему это ошибки.
        </p>
        <div className="bg-gray-900 p-4 rounded-lg my-3">
          <pre className="text-red-300 text-sm overflow-x-auto">
            <code>{`<img href="cat.png" description="Милый котенок" width=250 height=200>
<img source="dog.jpg" alt="" width="300">
<img src="bird.svg" alt="Птица" size="150">`}</code>
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
            <p>Проверьте названия атрибутов для пути к изображению, альтернативного текста и размеров. Вспомните, какие атрибуты обязательны.</p>
          </div>
        </details>
      </div>

      {/* Задание 5 */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
          <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">5</span>
          Форматы и доступность
        </h3>
        <p className="text-gray-300 mb-3">
          Создайте HTML-страницу "Галерея форматов", содержащую 3 изображения:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-gray-300 mb-3">
          <li>Фотография (используйте формат <code className="bg-gray-700 px-1 rounded">JPEG</code>).</li>
          <li>Логотип с прозрачным фоном (используйте формат <code className="bg-gray-700 px-1 rounded">PNG</code>).</li>
          <li>Простая иконка (используйте формат <code className="bg-gray-700 px-1 rounded">SVG</code>, можно взять код из интернета или использовать тег <code className="bg-gray-700 px-1 rounded">{'<img>'}</code> с <code className="bg-gray-700 px-1 rounded">src</code>, ведущим на <code className="bg-gray-700 px-1 rounded">.svg</code> файл).</li>
        </ul>
        <p className="text-gray-300 mb-3">
          Для <span className="font-medium">каждого</span> изображения укажите:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-gray-300 mb-3">
          <li>Правильный атрибут <code className="bg-gray-700 px-1 rounded">src</code> (URL или путь к файлу).</li>
          <li>Содержательный и уникальный атрибут <code className="bg-gray-700 px-1 rounded">alt</code>.</li>
          <li>Один из размеров (например, <code className="bg-gray-700 px-1 rounded">width="200"</code>).</li>
        </ul>
        <p className="text-gray-300">
          Добавьте подпись под каждым изображением, поясняющую его формат и почему он выбран именно для этого типа изображения.
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
              Эти задания помогли вам закрепить навыки вставки изображений в HTML с помощью тега <code className="bg-gray-700 px-1 rounded">{'<img>'}</code>. Вы попрактиковались в использовании ключевых атрибутов <code className="bg-gray-700 px-1 rounded">src</code>, <code className="bg-gray-700 px-1 rounded">alt</code>, <code className="bg-gray-700 px-1 rounded">width</code> и <code className="bg-gray-700 px-1 rounded">height</code>, а также разобрались с различиями между форматами изображений (JPEG, PNG, SVG) и важностью альтернативного текста для доступности. Это важный шаг к созданию полноценных и профессиональных веб-страниц.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Part3;