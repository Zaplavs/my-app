// src/data/courses/markdown/lesson8/part3.jsx
import React from 'react';
import { Link, Image, Globe, FileImage, Hash, Edit3 } from 'lucide-react';

const Part3 = () => {
  return (
    <div className="space-y-8 text-gray-200">
      {/* Вступление */}
      <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 backdrop-blur-sm border border-blue-700/30 rounded-2xl p-6 shadow-lg">
        <div className="flex items-start gap-4">
          <div className="bg-blue-500/20 p-3 rounded-lg">
            <Edit3 className="w-6 h-6 text-blue-400" />
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">✏️ Практика: Гиперссылки и изображения в Markdown</h1>
            <p className="text-gray-300">
              <span className="font-medium text-yellow-400">🎯 Цель:</span> Закрепить знания по созданию гиперссылок и вставке изображений в Markdown, понять разницу между относительными и абсолютными путями.
            </p>
          </div>
        </div>
      </div>

      {/* Задание 1 */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
          <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">1</span>
          Создание портфолио
        </h3>
        <p className="text-gray-300 mb-3">
          Создайте Markdown-документ <code className="bg-gray-700 px-2 py-1 rounded">portfolio.md</code> - ваше портфолио с ссылками на проекты и изображениями. Структура:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-gray-300 mb-3">
          <li>Заголовок 1 уровня с вашим именем</li>
          <li>Краткое описание (абзац текста)</li>
          <li>Раздел "Проекты" с заголовком 2 уровня</li>
          <li>Список проектов с названиями (жирный текст), описаниями и ссылками на GitHub/демо</li>
          <li>Изображения для каждого проекта с описательным alt-текстом</li>
          <li>Раздел "Контакты" с ссылками на социальные сети и email</li>
        </ul>
        <details className="group">
          <summary className="cursor-pointer text-sm text-gray-400 hover:text-gray-300 flex items-center gap-1">
            <span>Подсказка</span>
            <svg className="w-4 h-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </summary>
          <div className="mt-2 p-3 bg-gray-900/50 rounded text-sm text-gray-300">
            <p>Используйте абсолютные URL для внешних ссылок и изображений из интернета. Для alt-текста изображений опишите, что изображено на картинке.</p>
          </div>
        </details>
      </div>

      {/* Задание 2 */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
          <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">2</span>
          Документация проекта
        </h3>
        <p className="text-gray-300 mb-3">
          Создайте файл <code className="bg-gray-700 px-2 py-1 rounded">documentation.md</code> - документацию для вымышленного проекта. Используйте структуру:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-gray-300 mb-3">
          <li>Заголовок 1 уровня с названием проекта</li>
          <li>Описание проекта с изображением логотипа</li>
          <li>Оглавление с ссылками на разделы документа (якорные ссылки)</li>
          <li>Раздел "Установка" с пошаговой инструкцией и скриншотами</li>
          <li>Раздел "Использование" с примерами кода и изображениями результатов</li>
          <li>Раздел "API" со ссылками на внешние ресурсы</li>
          <li>Раздел "Лицензия" со ссылкой на файл LICENSE в репозитории</li>
        </ul>
        <details className="group">
          <summary className="cursor-pointer text-sm text-gray-400 hover:text-gray-300 flex items-center gap-1">
            <span>Подсказка</span>
            <svg className="w-4 h-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </summary>
          <div className="mt-2 p-3 bg-gray-900/50 rounded text-sm text-gray-300">
            <p>Используйте относительные пути для локальных изображений и файлов. Создайте якорные ссылки для навигации по оглавлению.</p>
          </div>
        </details>
      </div>

      {/* Задание 3 */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
          <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">3</span>
          Анализ и исправление ссылок
        </h3>
        <p className="text-gray-300 mb-3">
          Ниже приведен Markdown-документ с ошибками в ссылках и изображениях. Найдите и исправьте все ошибки:
        </p>
        <div className="bg-gray-900 p-4 rounded-lg my-3">
          <pre className="text-red-300 text-sm">
            <code>{`# Мой блог

![Мой аватар](avatar.jpg "Фото профиля")

## Статьи

### [Как я выучил Markdown](./posts/markdown-guide.md)

В этой статье я делюсь своим опытом изучения Markdown.

![Скриншот редактора](/images/editor.png)

### [Полезные ресурсы](resources.md)

Список полезных ссылок:
- [Документация Markdown](https://daringfireball.net/projects/markdown/)
- [GitHub Flavored Markdown] https://github.github.com/gfm/
- ![Логотип GitHub](https://github.githubassets.com/favicons/favicon.svg "GitHub")

## Контакты

Пишите мне на почту: [email@example.com](mailto:email@example.com)`}</code>
          </pre>
        </div>
        <p className="text-gray-300 mb-3">
          Создайте исправленную версию документа в новом файле <code className="bg-gray-700 px-2 py-1 rounded">corrected-links.md</code> и объясните найденные ошибки.
        </p>
        <details className="group">
          <summary className="cursor-pointer text-sm text-gray-400 hover:text-gray-300 flex items-center gap-1">
            <span>Подсказка</span>
            <svg className="w-4 h-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </summary>
          <div className="mt-2 p-3 bg-gray-900/50 rounded text-sm text-gray-300">
            <p>Обратите внимание на: синтаксис ссылок, отсутствующие скобки, неправильные пути, формат изображений.</p>
          </div>
        </details>
      </div>

      {/* Задание 4 */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
          <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">4</span>
          Создание галереи изображений
        </h3>
        <p className="text-gray-300 mb-3">
          Создайте документ <code className="bg-gray-700 px-2 py-1 rounded">gallery.md</code> - галерею изображений с описаниями. Требования:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-gray-300 mb-3">
          <li>Заголовок 1 уровня "Галерея"</li>
          <li>По крайней мере 6 изображений с описательными alt-текстами</li>
          <li>Каждое изображение должно быть ссылкой на его полноразмерную версию</li>
          <li>Используйте как локальные, так и внешние изображения</li>
          <li>Добавьте подписи к изображениям</li>
          <li>Организуйте изображения в сетку или список</li>
        </ul>
        <details className="group">
          <summary className="cursor-pointer text-sm text-gray-400 hover:text-gray-300 flex items-center gap-1">
            <span>Подсказка</span>
            <svg className="w-4 h-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </summary>
          <div className="mt-2 p-3 bg-gray-900/50 rounded text-sm text-gray-300">
            <p>Для создания ссылки на изображение, поместите синтаксис изображения внутрь квадратных скобок ссылки: <code className="bg-gray-700 px-1 py-0.5 rounded">[![alt](thumb.jpg)](full.jpg)</code></p>
          </div>
        </details>
      </div>

      {/* Задание 5 */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
          <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">5</span>
          Эксперимент с путями
        </h3>
        <p className="text-gray-300 mb-3">
          Создайте структуру папок и файлов для документации проекта:
        </p>
        <div className="bg-gray-900 p-4 rounded-lg my-3">
          <pre className="text-gray-300 text-sm">
            <code>{`project/
├── README.md
├── docs/
│   ├── guide.md
│   ├── api.md
│   └── images/
│       ├── diagram.png
│       └── screenshot.jpg
├── src/
│   └── app.js
└── LICENSE`}</code>
          </pre>
        </div>
        <p className="text-gray-300 mb-3">
          В файле <code className="bg-gray-700 px-2 py-1 rounded">docs/guide.md</code> создайте содержание с правильными относительными ссылками:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-gray-300 mb-3">
          <li>Ссылка на README.md в корне проекта</li>
          <li>Ссылка на api.md в той же папке</li>
          <li>Ссылка на файл LICENSE в корне проекта</li>
          <li>Ссылка на файл app.js в папке src</li>
          <li>Вставка изображений diagram.png и screenshot.jpg</li>
        </ul>
        <p className="text-gray-300">
          Создайте отдельный файл <code className="bg-gray-700 px-2 py-1 rounded">path-experiment.md</code> с объяснением, почему вы использовали именно такие пути.
        </p>
      </div>

      {/* Заключение */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <div className="flex items-start gap-3">
          <div className="bg-green-500/20 p-2 rounded-lg flex-shrink-0">
            <Link className="w-5 h-5 text-green-400" />
          </div>
          <div>
            <h3 className="font-bold text-white mb-2">Отличная работа! 🎉</h3>
            <p className="text-gray-300">
              Эти задания помогли вам закрепить навыки создания гиперссылок и вставки изображений в Markdown. 
              Вы научились различать относительные и абсолютные пути, правильно использовать alt-тексты для изображений и создавать сложные структуры ссылок. 
              Эти навыки важны для создания профессиональных и доступных документов.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Part3;
