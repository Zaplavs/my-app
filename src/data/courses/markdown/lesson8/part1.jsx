// src/data/courses/markdown/lesson8/part1.jsx
import React from 'react';
import { Link, Image, Globe, FileImage, Hash } from 'lucide-react';

const Part1 = () => {
  return (
    <div className="space-y-8 text-gray-200">
      {/* Вступление */}
      <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 backdrop-blur-sm border border-blue-700/30 rounded-2xl p-6 shadow-lg">
        <div className="flex items-start gap-4">
          <div className="bg-blue-500/20 p-3 rounded-lg">
            <Link className="w-6 h-6 text-blue-400" />
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">🔗 Урок 8: Гиперссылки и изображения в Markdown</h1>
            <h2 className="text-xl font-semibold text-blue-300 mb-3">Создание ссылок и вставка изображений с описаниями</h2>
            <p className="text-gray-300">
              <span className="font-medium text-yellow-400">🎯 Цель урока:</span> Освоить синтаксис создания гиперссылок и вставки изображений в Markdown, понять разницу между относительными и абсолютными путями.
            </p>
          </div>
        </div>
      </div>

      {/* Гиперссылки */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Link className="w-5 h-5 text-green-400" />
          Гиперссылки
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Гиперссылки — это основа навигации в Вебе. В Markdown они создаются с помощью квадратных и круглых скобок.
          </p>
        </div>

        <div className="mt-6 bg-gray-900/50 p-5 rounded-xl border border-green-700/30">
          <h3 className="font-bold text-green-300 mb-3">Базовый синтаксис ссылок:</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <p className="text-gray-400 text-sm mb-2">Markdown:</p>
              <pre className="bg-gray-800 p-4 rounded text-sm text-gray-300"><code>[Текст ссылки](https://example.com)</code></pre>
            </div>
            <div>
              <p className="text-gray-400 text-sm mb-2">Результат:</p>
              <div className="text-gray-300">
                <a href="https://example.com" className="text-blue-400 hover:underline">Текст ссылки</a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-gray-900/50 p-5 rounded-xl border border-blue-700/30">
            <h3 className="font-bold text-blue-300 mb-3">Ссылки на внешние ресурсы:</h3>
            <pre className="bg-gray-800 p-4 rounded text-sm text-gray-300 mb-3"><code>{`[Google](https://google.com)
[Документация Markdown](https://daringfireball.net/projects/markdown/)
[Мой профиль на GitHub](https://github.com/username)`}</code></pre>
            <p className="text-gray-400 text-sm">
              Абсолютные URL начинаются с http:// или https://
            </p>
          </div>
          <div className="bg-gray-900/50 p-5 rounded-xl border border-purple-700/30">
            <h3 className="font-bold text-purple-300 mb-3">Ссылки на другие файлы:</h3>
            <pre className="bg-gray-800 p-4 rounded text-sm text-gray-300 mb-3"><code>{`[Оглавление](README.md)
[Следующий урок](../lesson9/part1.md)
[Файл лицензии](LICENSE)`}</code></pre>
            <p className="text-gray-400 text-sm">
              Относительные пути указывают на файлы в той же системе
            </p>
          </div>
        </div>

        <div className="mt-6 bg-gray-900/30 p-4 rounded-lg border border-gray-700">
          <h4 className="font-bold text-white mb-2">Советы по использованию ссылок:</h4>
          <ul className="list-disc pl-5 space-y-2 text-gray-300 text-sm">
            <li>Используйте понятный текст ссылки, а не просто "кликните здесь"</li>
            <li>Для ссылок на другие Markdown-файлы в репозитории используйте относительные пути</li>
            <li>Проверяйте работоспособность ссылок перед публикацией</li>
            <li>Можно добавлять всплывающие подсказки: <code className="bg-gray-700 px-1.5 py-0.5 rounded">[Текст](url "Подсказка")</code></li>
          </ul>
        </div>
      </div>

      {/* Изображения */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Image className="w-5 h-5 text-orange-400" />
          Изображения
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Вставка изображений в Markdown похожа на создание ссылок, но с восклицательным знаком в начале.
          </p>
        </div>

        <div className="mt-6 bg-gray-900/50 p-5 rounded-xl border border-orange-700/30">
          <h3 className="font-bold text-orange-300 mb-3">Базовый синтаксис изображений:</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <p className="text-gray-400 text-sm mb-2">Markdown:</p>
              <pre className="bg-gray-800 p-4 rounded text-sm text-gray-300"><code>![Альтернативный текст](путь/к/изображению.png)</code></pre>
            </div>
            <div>
              <p className="text-gray-400 text-sm mb-2">Результат:</p>
              <div className="text-gray-300 text-center p-4 bg-gray-800 rounded">
                <div className="border-2 border-dashed border-gray-600 rounded-lg p-8">
                  <FileImage className="w-12 h-12 mx-auto text-gray-500 mb-2" />
                  <p className="text-gray-500 text-sm">Альтернативный текст</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-gray-900/50 p-5 rounded-xl border border-yellow-700/30">
            <h3 className="font-bold text-yellow-300 mb-3">Изображения из интернета:</h3>
            <pre className="bg-gray-800 p-4 rounded text-sm text-gray-300"><code>{`![Логотип GitHub](https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png)
![Котик](https://example.com/cat.jpg "Милый кот")`}</code></pre>
            <p className="text-gray-400 text-sm mt-2">
              Абсолютные URL для внешних изображений
            </p>
          </div>
          <div className="bg-gray-900/50 p-5 rounded-xl border border-cyan-700/30">
            <h3 className="font-bold text-cyan-300 mb-3">Локальные изображения:</h3>
            <pre className="bg-gray-800 p-4 rounded text-sm text-gray-300"><code>{`![Скриншот приложения](images/screenshot.png)
![Диаграмма](../assets/diagram.svg)
![Фото профиля](profile.jpg)`}</code></pre>
            <p className="text-gray-400 text-sm mt-2">
              Относительные пути к изображениям в репозитории
            </p>
          </div>
        </div>

        <div className="mt-6 bg-red-900/20 border border-red-700/30 rounded-lg p-4">
          <h4 className="font-bold text-red-300 mb-2 flex items-center gap-2">
            <span className="bg-red-500/20 w-6 h-6 rounded-full flex items-center justify-center text-sm">!</span>
            Важно о alt-тексте:
          </h4>
          <ul className="list-disc pl-5 space-y-2 text-gray-300 text-sm">
            <li>Alt-текст обязателен для доступности (помогает слабовидящим пользователям)</li>
            <li>Он отображается, если изображение не загрузилось</li>
            <li>Должен кратко описывать содержание изображения</li>
            <li>Для декоративных изображений можно оставить пустым: <code className="bg-gray-700 px-1.5 py-0.5 rounded">![](image.jpg)</code></li>
          </ul>
        </div>
      </div>

      {/* Относительные и абсолютные пути */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Globe className="w-5 h-5 text-purple-400" />
          Относительные и абсолютные пути
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Понимание разницы между относительными и абсолютными путями критически важно для правильной работы ссылок и изображений.
          </p>
        </div>

        <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-gray-900/50 p-5 rounded-xl border border-blue-700/30">
            <h3 className="font-bold text-blue-300 mb-3 flex items-center gap-2">
              <Globe className="w-5 h-5" />
              Абсолютные пути
            </h3>
            <ul className="space-y-3 text-gray-300 text-sm">
              <li className="flex items-start gap-2">
                <span className="font-bold text-blue-400 mt-1">•</span>
                <span>Начинаются с <code className="bg-gray-700 px-1.5 py-0.5 rounded">http://</code> или <code className="bg-gray-700 px-1.5 py-0.5 rounded">https://</code></span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold text-blue-400 mt-1">•</span>
                <span>Указывают на конкретный ресурс в интернете</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold text-blue-400 mt-1">•</span>
                <span>Пример: <code className="bg-gray-700 px-1.5 py-0.5 rounded">https://example.com/image.png</code></span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold text-blue-400 mt-1">•</span>
                <span>Используются для внешних ресурсов</span>
              </li>
            </ul>
            <div className="mt-4 p-3 bg-gray-800 rounded">
              <pre className="text-xs text-gray-300"><code>{`[Внешний сайт](https://google.com)
![Внешнее изображение](https://example.com/logo.png)`}</code></pre>
            </div>
          </div>
          <div className="bg-gray-900/50 p-5 rounded-xl border border-green-700/30">
            <h3 className="font-bold text-green-300 mb-3 flex items-center gap-2">
              <Hash className="w-5 h-5" />
              Относительные пути
            </h3>
            <ul className="space-y-3 text-gray-300 text-sm">
              <li className="flex items-start gap-2">
                <span className="font-bold text-green-400 mt-1">•</span>
                <span>Отсчитываются от текущего местоположения файла</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold text-green-400 mt-1">•</span>
                <span><code className="bg-gray-700 px-1.5 py-0.5 rounded">./</code> — текущая директория</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold text-green-400 mt-1">•</span>
                <span><code className="bg-gray-700 px-1.5 py-0.5 rounded">../</code> — родительская директория</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold text-green-400 mt-1">•</span>
                <span>Используются для локальных ресурсов в репозитории</span>
              </li>
            </ul>
            <div className="mt-4 p-3 bg-gray-800 rounded">
              <pre className="text-xs text-gray-300"><code>{`[Другой файл](./other-file.md)
[Родительский каталог](../README.md)
![Локальное изображение](images/photo.jpg)`}</code></pre>
            </div>
          </div>
        </div>

        <div className="mt-6 bg-gray-900/30 p-4 rounded-lg border border-gray-700">
          <h4 className="font-bold text-white mb-2">Практические примеры структуры:</h4>
          <div className="text-gray-300 text-sm">
            <p className="mb-2">Структура проекта:</p>
            <pre className="bg-gray-800 p-3 rounded mb-3"><code>{`project/
├── README.md
├── docs/
│   ├── guide.md
│   └── images/
│       └── diagram.png
└── src/
    └── app.js`}</code></pre>
            <p>В файле <code className="bg-gray-700 px-1.5 py-0.5 rounded">docs/guide.md</code>:</p>
            <pre className="bg-gray-800 p-3 rounded mt-2"><code>{`![Диаграмма](./images/diagram.png)  // Относительный путь
[Главная страница](../README.md)    // Относительный путь`}</code></pre>
          </div>
        </div>
      </div>

      {/* Дополнительные возможности */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Link className="w-5 h-5 text-pink-400" />
          Дополнительные возможности ссылок
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Markdown поддерживает дополнительные возможности для ссылок и изображений:
          </p>
        </div>

        <div className="mt-6 space-y-6">
          <div className="bg-gray-900/50 p-5 rounded-xl border border-cyan-700/30">
            <h3 className="font-bold text-cyan-300 mb-3">Ссылки с подсказками (title):</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <p className="text-gray-400 text-sm mb-2">Markdown:</p>
                <pre className="bg-gray-800 p-4 rounded text-sm text-gray-300"><code>[Google](https://google.com "Перейти к поисковой системе")</code></pre>
              </div>
              <div>
                <p className="text-gray-400 text-sm mb-2">Результат:</p>
                <div className="text-gray-300">
                  <a href="https://google.com" title="Перейти к поисковой системе" className="text-blue-400 hover:underline">Google</a>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-900/50 p-5 rounded-xl border border-yellow-700/30">
            <h3 className="font-bold text-yellow-300 mb-3">Ссылки-идентификаторы:</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <p className="text-gray-400 text-sm mb-2">Markdown:</p>
                <pre className="bg-gray-800 p-4 rounded text-sm text-gray-300"><code>{`[Ссылка на документацию][markdown]

[markdown]: https://daringfireball.net/projects/markdown/`}</code></pre>
              </div>
              <div>
                <p className="text-gray-400 text-sm mb-2">Результат:</p>
                <div className="text-gray-300">
                  <a href="https://daringfireball.net/projects/markdown/" className="text-blue-400 hover:underline">Ссылка на документацию</a>
                </div>
              </div>
            </div>
            <p className="text-gray-400 text-sm mt-3">
              Полезно для многократного использования одной ссылки
            </p>
          </div>

          <div className="bg-gray-900/50 p-5 rounded-xl border border-purple-700/30">
            <h3 className="font-bold text-purple-300 mb-3">Изображения со ссылками:</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <p className="text-gray-400 text-sm mb-2">Markdown:</p>
                <pre className="bg-gray-800 p-4 rounded text-sm text-gray-300"><code>{`[![Логотип GitHub](https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png)](https://github.com)`}</code></pre>
              </div>
              <div>
                <p className="text-gray-400 text-sm mb-2">Результат:</p>
                <div className="text-gray-300 text-center">
                  <a href="https://github.com">
                    <div className="inline-block border-2 border-dashed border-gray-600 rounded-lg p-4">
                      <FileImage className="w-8 h-8 mx-auto text-gray-500" />
                      <p className="text-gray-500 text-xs mt-1">Логотип GitHub</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Практические примеры */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Globe className="w-5 h-5 text-green-400" />
          Практические примеры использования
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Вот как можно комбинировать ссылки и изображения в реальных документах:
          </p>
        </div>

        <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-gray-900/50 p-4 rounded-xl border border-blue-700/30">
            <h3 className="font-bold text-blue-300 mb-3">README.md проекта</h3>
            <pre className="bg-gray-800 p-3 rounded text-sm text-gray-300"><code>{`# Мой проект

![Логотип проекта](./assets/logo.png)

## Описание
Этот проект создан для [демонстрации](#демонстрация) возможностей Markdown.

## Начало работы
Подробная инструкция находится в [документации](./docs/getting-started.md).

## Лицензия
Проект распространяется под лицензией [MIT](./LICENSE).

---

[Вернуться к оглавлению](#оглавление)`}</code></pre>
          </div>
          <div className="bg-gray-900/50 p-4 rounded-xl border border-green-700/30">
            <h3 className="font-bold text-green-300 mb-3">Техническая документация</h3>
            <pre className="bg-gray-800 p-3 rounded text-sm text-gray-300"><code>{`# API Reference

## Аутентификация

Для аутентификации используется токен. 
Подробнее в [руководстве](./auth-guide.md).

Пример запроса:
![Пример запроса](./images/auth-request.png "Запрос аутентификации")

## Ошибки
Список возможных ошибок и их описание 
находится в [документе](./errors.md).`}</code></pre>
          </div>
        </div>
      </div>

      {/* Заключение */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <div className="flex items-start gap-3">
          <div className="bg-green-500/20 p-2 rounded-lg flex-shrink-0">
            <Link className="w-5 h-5 text-green-400" />
          </div>
          <div>
            <h3 className="font-bold text-white mb-2">Поздравляем! 🎉</h3>
            <p className="text-gray-300">
              Теперь вы знаете, как создавать гиперссылки и вставлять изображения в Markdown. 
              Вы понимаете разницу между относительными и абсолютными путями, а также важность alt-текстов для изображений. 
              Эти навыки позволят вам создавать богатые и интерактивные документы. 
              В следующем уроке мы рассмотрим работу с таблицами и кодом.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Part1;
