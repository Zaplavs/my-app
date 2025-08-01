// src/data/courses/html/lesson17/part1.jsx
import React from 'react';
import { Folder, Image, Link, FileText, HardDrive, Navigation, Globe, Hash } from 'lucide-react';

const Part1 = () => {
  return (
    <div className="space-y-8 text-gray-200">
      {/* Вступление */}
      <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 backdrop-blur-sm border border-blue-700/30 rounded-2xl p-6 shadow-lg">
        <div className="flex items-start gap-4">
          <div className="bg-blue-500/20 p-3 rounded-lg">
            <Folder className="w-6 h-6 text-blue-400" />
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">📁 Урок 17: Работа с файлами и путями</h1>
            <h2 className="text-xl font-semibold text-blue-300 mb-3">Организация проекта и навигация по файлам</h2>
            <p className="text-gray-300">
              <span className="font-medium text-yellow-400">🎯 Цель урока:</span> Освоить <span className="font-medium text-green-300">организацию файлов</span> веб-проекта, понять разницу между <span className="font-medium text-orange-300">абсолютными</span> и <span className="font-medium text-purple-300">относительными путями</span>, научиться правильно создавать <span className="font-medium text-cyan-300">ссылки</span> на изображения, страницы и другие файлы.
            </p>
          </div>
        </div>
      </div>

      {/* Важность организации файлов */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <HardDrive className="w-5 h-5 text-green-400" />
          Почему важна организация файлов?
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Хорошая <span className="font-medium">организация файлов</span> — это основа любого успешного веб-проекта. Она влияет на:
          </p>
          <ul className="list-disc pl-5 space-y-2 mt-2">
            <li><span className="font-medium">Поддерживаемость</span> — проще найти нужный файл и внести изменения.</li>
            <li><span className="font-medium">Совместную работу</span> — коллеги быстрее разберутся в структуре проекта.</li>
            <li><span className="font-medium">Производительность</span> — браузер эффективнее кэширует ресурсы.</li>
            <li><span className="font-medium">Безопасность</span> — четкое разделение файлов снижает риски.</li>
            <li><span className="font-medium">Развёртывание</span> — проще переносить и обновлять проект.</li>
          </ul>
        </div>
        <div className="mt-4 p-3 bg-blue-900/20 border border-blue-700/30 rounded-lg">
          <p className="text-blue-300 text-sm flex items-start gap-2">
            <span className="font-medium">💡 Зачем это нужно?</span>
            <span>
              Представьте веб-сайт с сотнями файлов, разбросанных в одной папке без структуры. Поиск нужного изображения или стиля займет уйму времени. Хорошая организация файлов — это как <span className="font-medium">наведенный порядок</span> на рабочем столе: все на своих местах, и вы <span className="font-medium">всегда знаете, где что искать</span>.
            </span>
          </p>
        </div>
      </div>

      {/* Стандартная структура папок */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Folder className="w-5 h-5 text-purple-400" />
          Стандартная структура папок веб-проекта
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Существует <span className="font-medium">рекомендуемая структура</span> организации файлов веб-проекта, которая используется большинством разработчиков:
          </p>
        </div>
        
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-900/50 p-5 rounded-xl border border-purple-700/30">
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-purple-500/20 p-2 rounded-lg">
                <Folder className="w-5 h-5 text-purple-400" />
              </div>
              <h3 className="font-bold text-purple-300">Основные папки</h3>
            </div>
            <ul className="list-disc pl-5 space-y-2 text-gray-300 text-sm">
              <li>
                <code className="bg-gray-700 px-1.5 py-0.5 rounded text-green-300">/css/</code> — стили (CSS-файлы)
                <ul className="list-circle pl-5 mt-1 text-gray-400">
                  <li><code className="bg-gray-700 px-1 rounded">styles.css</code></li>
                  <li><code className="bg-gray-700 px-1 rounded">reset.css</code></li>
                </ul>
              </li>
              <li>
                <code className="bg-gray-700 px-1.5 py-0.5 rounded text-blue-300">/js/</code> — скрипты (JavaScript-файлы)
                <ul className="list-circle pl-5 mt-1 text-gray-400">
                  <li><code className="bg-gray-700 px-1 rounded">main.js</code></li>
                  <li><code className="bg-gray-700 px-1 rounded">utils.js</code></li>
                </ul>
              </li>
              <li>
                <code className="bg-gray-700 px-1.5 py-0.5 rounded text-orange-300">/img/</code> — изображения
                <ul className="list-circle pl-5 mt-1 text-gray-400">
                  <li><code className="bg-gray-700 px-1 rounded">logo.png</code></li>
                  <li><code className="bg-gray-700 px-1 rounded">banner.jpg</code></li>
                </ul>
              </li>
            </ul>
          </div>
          
          <div className="bg-gray-900/50 p-5 rounded-xl border border-cyan-700/30">
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-cyan-500/20 p-2 rounded-lg">
                <FileText className="w-5 h-5 text-cyan-400" />
              </div>
              <h3 className="font-bold text-cyan-300">Файлы проекта</h3>
            </div>
            <ul className="list-disc pl-5 space-y-2 text-gray-300 text-sm">
              <li>
                <span className="font-medium">HTML-страницы</span> в корне проекта:
                <ul className="list-circle pl-5 mt-1 text-gray-400">
                  <li><code className="bg-gray-700 px-1 rounded">index.html</code> — главная страница</li>
                  <li><code className="bg-gray-700 px-1 rounded">about.html</code> — о компании</li>
                  <li><code className="bg-gray-700 px-1 rounded">contact.html</code> — контакты</li>
                </ul>
              </li>
              <li>
                <span className="font-medium">Дополнительные папки</span> (по необходимости):
                <ul className="list-circle pl-5 mt-1 text-gray-400">
                  <li><code className="bg-gray-700 px-1 rounded">/fonts/</code> — шрифты</li>
                  <li><code className="bg-gray-700 px-1 rounded">/videos/</code> — видеофайлы</li>
                  <li><code className="bg-gray-700 px-1 rounded">/documents/</code> — документы для скачивания</li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-6 bg-gray-900/50 p-5 rounded-xl border border-green-700/30">
          <h3 className="font-bold text-green-300 mb-3">Пример структуры проекта:</h3>
          <pre className="text-green-300 text-sm overflow-x-auto">
            <code>{`мой-сайт/
├── index.html
├── about.html
├── contact.html
├── css/
│   ├── styles.css
│   └── reset.css
├── js/
│   └── main.js
├── img/
│   ├── logo.png
│   ├── banner.jpg
│   └── icons/
│       ├── home.png
│       └── user.png
└── fonts/
    ├── opensans.woff2
    └── roboto.ttf`}</code>
          </pre>
        </div>
      </div>

      {/* Абсолютные и относительные пути */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Navigation className="w-5 h-5 text-orange-400" />
          Абсолютные и относительные пути
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-900/50 p-5 rounded-xl border border-orange-700/30">
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-orange-500/20 p-2 rounded-lg">
                <Globe className="w-5 h-5 text-orange-400" />
              </div>
              <h3 className="font-bold text-orange-300">Абсолютные пути</h3>
            </div>
            <div className="prose prose-invert max-w-none text-gray-300 text-sm leading-relaxed">
              <p>
                <span className="font-medium">Полный адрес</span> к ресурсу, включая протокол и домен.
              </p>
              <p className="mt-2">
                <span className="font-medium">Начинается с:</span>
              </p>
              <ul className="list-disc pl-5 space-y-1 mt-1">
                <li><code className="bg-gray-700 px-1 rounded">http://</code> или <code className="bg-gray-700 px-1 rounded">https://</code></li>
                <li><code className="bg-gray-700 px-1 rounded">ftp://</code></li>
                <li><code className="bg-gray-700 px-1 rounded">/</code> (корень сайта)</li>
              </ul>
            </div>
            <div className="mt-4">
              <p className="text-xs text-gray-400 mb-2">Примеры:</p>
              <pre className="text-orange-300 text-xs overflow-x-auto">
                <code>{`<img src="https://example.com/img/logo.png" alt="Логотип">
<a href="https://google.com">Перейти в Google</a>
<link rel="stylesheet" href="/css/styles.css">`}</code>
              </pre>
            </div>
            <div className="mt-3 p-2 bg-orange-900/20 border border-orange-700/30 rounded text-orange-300 text-xs">
              <span className="font-medium">Используются:</span> для внешних ресурсов, ссылок на другие сайты, файлов в корне сайта
            </div>
          </div>
          
          <div className="bg-gray-900/50 p-5 rounded-xl border border-purple-700/30">
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-purple-500/20 p-2 rounded-lg">
                <Hash className="w-5 h-5 text-purple-400" />
              </div>
              <h3 className="font-bold text-purple-300">Относительные пути</h3>
            </div>
            <div className="prose prose-invert max-w-none text-gray-300 text-sm leading-relaxed">
              <p>
                <span className="font-medium">Путь относительно</span> текущего местоположения файла.
              </p>
              <p className="mt-2">
                <span className="font-medium">Используются символы:</span>
              </p>
              <ul className="list-disc pl-5 space-y-1 mt-1">
                <li><code className="bg-gray-700 px-1 rounded">./</code> — текущая папка</li>
                <li><code className="bg-gray-700 px-1 rounded">../</code> — родительская папка</li>
                <li><code className="bg-gray-700 px-1 rounded">имя_файла</code> — файл в текущей папке</li>
              </ul>
            </div>
            <div className="mt-4">
              <p className="text-xs text-gray-400 mb-2">Примеры:</p>
              <pre className="text-purple-300 text-xs overflow-x-auto">
                <code>{`<img src="./img/logo.png" alt="Логотип">
<a href="../about.html">О нас</a>
<link rel="stylesheet" href="css/styles.css">`}</code>
              </pre>
            </div>
            <div className="mt-3 p-2 bg-purple-900/20 border border-purple-700/30 rounded text-purple-300 text-xs">
              <span className="font-medium">Используются:</span> для внутренних ресурсов проекта, обеспечивают переносимость
            </div>
          </div>
        </div>
        
        <div className="mt-6 bg-gray-900/50 p-5 rounded-xl border border-cyan-700/30">
          <h3 className="font-bold text-cyan-300 mb-3">Практический пример:</h3>
          <p className="text-gray-300 text-sm mb-3">
            Предположим, у нас есть структура проекта:
          </p>
          <pre className="text-cyan-300 text-sm overflow-x-auto mb-3">
            <code>{`проект/
├── index.html
├── pages/
│   ├── about.html
│   └── services.html
├── css/
│   └── styles.css
└── img/
    └── logo.png`}</code>
          </pre>
          <p className="text-gray-300 text-sm mb-3">
            Как будут выглядеть пути в файле <code className="bg-gray-700 px-1 rounded">pages/about.html</code>:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="text-xs text-gray-400 mb-1">К главной странице:</p>
              <pre className="text-green-300 text-xs overflow-x-auto">
                <code>{`<a href="../index.html">Главная</a>`}</code>
              </pre>
            </div>
            <div>
              <p className="text-xs text-gray-400 mb-1">К стилям:</p>
              <pre className="text-blue-300 text-xs overflow-x-auto">
                <code>{`<link rel="stylesheet" href="../css/styles.css">`}</code>
              </pre>
            </div>
            <div>
              <p className="text-xs text-gray-400 mb-1">К изображению:</p>
              <pre className="text-orange-300 text-xs overflow-x-auto">
                <code>{`<img src="../img/logo.png" alt="Логотип">`}</code>
              </pre>
            </div>
            <div>
              <p className="text-xs text-gray-400 mb-1">К другой странице:</p>
              <pre className="text-purple-300 text-xs overflow-x-auto">
                <code>{`<a href="services.html">Услуги</a>`}</code>
              </pre>
            </div>
          </div>
        </div>
      </div>

      {/* Работа с изображениями */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Image className="w-5 h-5 text-green-400" />
          Работа с изображениями
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Изображения — важная часть любого веб-сайта. Правильная работа с ними включает:
          </p>
        </div>
        
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-900/50 p-5 rounded-xl border border-green-700/30">
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-green-500/20 p-2 rounded-lg">
                <Image className="w-5 h-5 text-green-400" />
              </div>
              <h3 className="font-bold text-green-300">Форматы изображений</h3>
            </div>
            <ul className="list-disc pl-5 space-y-2 text-gray-300 text-sm">
              <li>
                <span className="font-medium">JPEG (.jpg)</span> — для фотографий, поддерживает сжатие с потерями
              </li>
              <li>
                <span className="font-medium">PNG (.png)</span> — для графики с прозрачностью, без потерь
              </li>
              <li>
                <span className="font-medium">GIF (.gif)</span> — для простой анимации, ограниченная палитра
              </li>
              <li>
                <span className="font-medium">WebP (.webp)</span> — современный формат с лучшим сжатием
              </li>
              <li>
                <span className="font-medium">SVG (.svg)</span> — векторная графика, масштабируется без потерь
              </li>
            </ul>
          </div>
          
          <div className="bg-gray-900/50 p-5 rounded-xl border border-blue-700/30">
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-blue-500/20 p-2 rounded-lg">
                <Folder className="w-5 h-5 text-blue-400" />
              </div>
              <h3 className="font-bold text-blue-300">Организация изображений</h3>
            </div>
            <ul className="list-disc pl-5 space-y-2 text-gray-300 text-sm">
              <li>Храните все изображения в папке <code className="bg-gray-700 px-1 rounded">/img/</code></li>
              <li>Используйте понятные имена файлов: <code className="bg-gray-700 px-1 rounded">logo.png</code>, <code className="bg-gray-700 px-1 rounded">product-preview.jpg</code></li>
              <li>Создавайте подпапки для группировки: <code className="bg-gray-700 px-1 rounded">/img/icons/</code>, <code className="bg-gray-700 px-1 rounded">/img/gallery/</code></li>
              <li>Оптимизируйте размеры файлов для веба</li>
              <li>Всегда указывайте атрибут <code className="bg-gray-700 px-1 rounded">alt</code> для доступности</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-6 bg-gray-900/50 p-5 rounded-xl border border-cyan-700/30">
          <h3 className="font-bold text-cyan-300 mb-3">Примеры использования изображений:</h3>
          <div className="grid grid-cols-1 gap-4">
            <div>
              <p className="text-xs text-gray-400 mb-1">Логотип в шапке сайта:</p>
              <pre className="text-cyan-300 text-xs overflow-x-auto">
                <code>{`<img src="./img/logo.png" alt="Логотип компании" width="150" height="50">`}</code>
              </pre>
            </div>
            <div>
              <p className="text-xs text-gray-400 mb-1">Изображение в галерее (из подпапки):</p>
              <pre className="text-green-300 text-xs overflow-x-auto">
                <code>{`<img src="./img/gallery/photo1.jpg" alt="Фотография пейзажа">`}</code>
              </pre>
            </div>
            <div>
              <p className="text-xs text-gray-400 mb-1">Иконка (из подпапки):</p>
              <pre className="text-orange-300 text-xs overflow-x-auto">
                <code>{`<img src="./img/icons/home.png" alt="Главная" width="24" height="24">`}</code>
              </pre>
            </div>
          </div>
        </div>
      </div>

      {/* Создание ссылок */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Link className="w-5 h-5 text-purple-400" />
          Создание ссылок на различные ресурсы
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Ссылки (<code className="bg-gray-700 px-1.5 py-0.5 rounded text-purple-300">{'<a>'}</code>) — основной способ навигации в вебе. Они могут вести к:
          </p>
        </div>
        
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-900/50 p-5 rounded-xl border border-purple-700/30">
            <h3 className="font-bold text-purple-300 mb-3">Ссылки на страницы сайта</h3>
            <div className="space-y-3">
              <div>
                <p className="text-xs text-gray-400 mb-1">На главную страницу:</p>
                <pre className="text-purple-300 text-xs overflow-x-auto">
                  <code>{`<a href="./index.html">Главная</a>`}</code>
                </pre>
              </div>
              <div>
                <p className="text-xs text-gray-400 mb-1">На страницу в той же папке:</p>
                <pre className="text-cyan-300 text-xs overflow-x-auto">
                  <code>{`<a href="about.html">О нас</a>`}</code>
                </pre>
              </div>
              <div>
                <p className="text-xs text-gray-400 mb-1">На страницу в другой папке:</p>
                <pre className="text-green-300 text-xs overflow-x-auto">
                  <code>{`<a href="./pages/services.html">Услуги</a>`}</code>
                </pre>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-900/50 p-5 rounded-xl border border-orange-700/30">
            <h3 className="font-bold text-orange-300 mb-3">Ссылки на внешние ресурсы</h3>
            <div className="space-y-3">
              <div>
                <p className="text-xs text-gray-400 mb-1">На другой сайт:</p>
                <pre className="text-orange-300 text-xs overflow-x-auto">
                  <code>{`<a href="https://google.com">Google</a>`}</code>
                </pre>
              </div>
              <div>
                <p className="text-xs text-gray-400 mb-1">На email:</p>
                <pre className="text-blue-300 text-xs overflow-x-auto">
                  <code>{`<a href="mailto:info@example.com">Написать нам</a>`}</code>
                </pre>
              </div>
              <div>
                <p className="text-xs text-gray-400 mb-1">На телефон:</p>
                <pre className="text-green-300 text-xs overflow-x-auto">
                  <code>{`<a href="tel:+71234567890">Позвонить</a>`}</code>
                </pre>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-6 bg-gray-900/50 p-5 rounded-xl border border-cyan-700/30">
          <h3 className="font-bold text-cyan-300 mb-3">Ссылки на файлы для скачивания</h3>
          <div className="grid grid-cols-1 gap-4">
            <div>
              <p className="text-xs text-gray-400 mb-1">PDF-документ:</p>
              <pre className="text-cyan-300 text-xs overflow-x-auto">
                <code>{`<a href="./documents/price-list.pdf" download>Скачать прайс-лист</a>`}</code>
              </pre>
            </div>
            <div>
              <p className="text-xs text-gray-400 mb-1">Архив с файлами:</p>
              <pre className="text-green-300 text-xs overflow-x-auto">
                <code>{`<a href="./downloads/project-files.zip">Скачать файлы проекта</a>`}</code>
              </pre>
            </div>
            <div>
              <p className="text-xs text-gray-400 mb-1">Изображение для просмотра:</p>
              <pre className="text-orange-300 text-xs overflow-x-auto">
                <code>{`<a href="./img/large-photo.jpg">Посмотреть фото</a>`}</code>
              </pre>
            </div>
          </div>
          <div className="mt-3 p-2 bg-blue-900/20 border border-blue-700/30 rounded text-blue-300 text-xs">
            <span className="font-medium">💡 Совет:</span> Используйте атрибут <code className="bg-gray-700 px-1 rounded">download</code> для файлов, которые нужно скачать, а не открыть в браузере.
          </div>
        </div>
      </div>

      {/* Практические рекомендации */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Folder className="w-5 h-5 text-green-400" />
          Практические рекомендации
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gray-900/50 p-5 rounded-xl border border-green-700/30">
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-green-500/20 p-2 rounded-lg">
                <Folder className="w-5 h-5 text-green-400" />
              </div>
              <h3 className="font-bold text-green-300">Именование файлов</h3>
            </div>
            <ul className="list-disc pl-5 space-y-2 text-gray-300 text-sm">
              <li>Используйте только латинские буквы, цифры, дефисы и подчеркивания</li>
              <li>Избегайте пробелов в именах файлов</li>
              <li>Пишите в нижнем регистре</li>
              <li>Используйте понятные, описательные имена</li>
              <li>Не используйте специальные символы (@, #, $ и т.д.)</li>
            </ul>
          </div>
          
          <div className="bg-gray-900/50 p-5 rounded-xl border border-blue-700/30">
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-blue-500/20 p-2 rounded-lg">
                <Navigation className="w-5 h-5 text-blue-400" />
              </div>
              <h3 className="font-bold text-blue-300">Работа с путями</h3>
            </div>
            <ul className="list-disc pl-5 space-y-2 text-gray-300 text-sm">
              <li>Предпочитайте относительные пути абсолютным</li>
              <li>Всегда проверяйте правильность путей</li>
              <li>Используйте <code className="bg-gray-700 px-1 rounded">./</code> для файлов в текущей папке</li>
              <li>Используйте <code className="bg-gray-700 px-1 rounded">../</code> для перехода в родительскую папку</li>
              <li>Тестируйте сайт после изменения структуры папок</li>
            </ul>
          </div>
          
          <div className="bg-gray-900/50 p-5 rounded-xl border border-orange-700/30">
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-orange-500/20 p-2 rounded-lg">
                <HardDrive className="w-5 h-5 text-orange-400" />
              </div>
              <h3 className="font-bold text-orange-300">Организация проекта</h3>
            </div>
            <ul className="list-disc pl-5 space-y-2 text-gray-300 text-sm">
              <li>Создавайте структуру папок в начале проекта</li>
              <li>Регулярно удаляйте неиспользуемые файлы</li>
              <li>Используйте комментарии в коде для сложных путей</li>
              <li>Создавайте резервные копии перед крупными изменениями</li>
              <li>Документируйте структуру проекта для команды</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Заключение */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <div className="flex items-start gap-3">
          <div className="bg-green-500/20 p-2 rounded-lg flex-shrink-0">
            <Folder className="w-5 h-5 text-green-400" />
          </div>
          <div>
            <h3 className="font-bold text-white mb-2">Отличная работа! 🎉</h3>
            <p className="text-gray-300">
              Теперь вы знаете, как <span className="font-medium text-purple-300">правильно организовывать файлы</span> веб-проекта, понимаете разницу между <span className="font-medium text-orange-300">абсолютными</span> и <span className="font-medium text-cyan-300">относительными путями</span>, умеете создавать <span className="font-medium text-green-300">ссылки</span> на изображения, страницы и другие ресурсы. Эти навыки делают ваши веб-проекты не только <span className="font-medium text-blue-300">структурированными</span> и <span className="font-medium text-yellow-300">поддерживаемыми</span>, но и <span className="font-medium text-red-300">переносимыми</span> между различными серверами и средами разработки. Хорошая организация файлов — это <span className="font-medium text-green-300">основа</span> профессиональной веб-разработки.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Part1;