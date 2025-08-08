// src/data/courses/markdown/lesson9/part1.jsx
import React from 'react';
import { Quote, Code, FileCode, Terminal, Layers } from 'lucide-react';

const Part1 = () => {
  return (
    <div className="space-y-8 text-gray-200">
      {/* Вступление */}
      <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 backdrop-blur-sm border border-blue-700/30 rounded-2xl p-6 shadow-lg">
        <div className="flex items-start gap-4">
          <div className="bg-blue-500/20 p-3 rounded-lg">
            <Quote className="w-6 h-6 text-blue-400" />
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">❝ Урок 9: Цитаты и блоки кода в Markdown</h1>
            <h2 className="text-xl font-semibold text-blue-300 mb-3">Выделение цитат и кода для лучшей структуры документа</h2>
            <p className="text-gray-300">
              <span className="font-medium text-yellow-400">🎯 Цель урока:</span> Освоить синтаксис создания цитат, вложенных цитат, вставки инлайнового и блочного кода с подсветкой синтаксиса.
            </p>
          </div>
        </div>
      </div>

      {/* Цитаты */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Quote className="w-5 h-5 text-green-400" />
          Цитаты
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Цитаты используются для выделения чужой речи, важных высказываний или для создания визуального акцента на определенной части текста.
          </p>
        </div>

        <div className="mt-6 bg-gray-900/50 p-5 rounded-xl border border-green-700/30">
          <h3 className="font-bold text-green-300 mb-3">Базовый синтаксис цитат:</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <p className="text-gray-400 text-sm mb-2">Markdown:</p>
              <pre className="bg-gray-800 p-4 rounded text-sm text-gray-300"><code>{`> Это пример цитаты в Markdown.

> Это тоже цитата,
> которая продолжается на второй строке.`}</code></pre>
            </div>
            <div>
              <p className="text-gray-400 text-sm mb-2">Результат:</p>
              <div className="text-gray-300">
                <blockquote className="border-l-4 border-gray-600 pl-4 italic">
                  Это пример цитаты в Markdown.
                </blockquote>
                <blockquote className="border-l-4 border-gray-600 pl-4 italic mt-4">
                  Это тоже цитата,<br />
                  которая продолжается на второй строке.
                </blockquote>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 bg-gray-900/30 p-4 rounded-lg border border-gray-700">
          <h4 className="font-bold text-white mb-2">Советы по использованию цитат:</h4>
          <ul className="list-disc pl-5 space-y-2 text-gray-300 text-sm">
            <li>Каждая строка цитаты должна начинаться с символа <code className="bg-gray-700 px-1.5 py-0.5 rounded">{'>'}</code></li>
            <li>Для многострочных цитат можно ставить <code className="bg-gray-700 px-1.5 py-0.5 rounded">{'>'}</code> перед каждой строкой</li>
            <li>Цитаты могут содержать другой Markdown-формат (жирный, курсив, ссылки)</li>
            <li>Полезны для цитирования источников, выделения важных мыслей</li>
          </ul>
        </div>
      </div>

      {/* Вложенные цитаты */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Layers className="w-5 h-5 text-purple-400" />
          Вложенные цитаты
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Markdown позволяет создавать вложенные цитаты для отображения диалогов или многоуровневых ссылок.
          </p>
        </div>

        <div className="mt-6 bg-gray-900/50 p-5 rounded-xl border border-purple-700/30">
          <h3 className="font-bold text-purple-300 mb-3">Синтаксис вложенных цитат:</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <p className="text-gray-400 text-sm mb-2">Markdown:</p>
              <pre className="bg-gray-800 p-4 rounded text-sm text-gray-300"><code>{`> Это основная цитата.
>> Это вложенная цитата.
>>> Это цитата третьего уровня.`}</code></pre>
            </div>
            <div>
              <p className="text-gray-400 text-sm mb-2">Результат:</p>
              <div className="text-gray-300">
                <blockquote className="border-l-4 border-gray-600 pl-4">
                  Это основная цитата.
                  <blockquote className="border-l-4 border-gray-500 pl-4 mt-2">
                    Это вложенная цитата.
                    <blockquote className="border-l-4 border-gray-400 pl-4 mt-2">
                      Это цитата третьего уровня.
                    </blockquote>
                  </blockquote>
                </blockquote>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-gray-900/50 p-4 rounded-xl border border-blue-700/30">
            <h3 className="font-bold text-blue-300 mb-3">Цитаты с форматированием:</h3>
            <pre className="bg-gray-800 p-3 rounded text-sm text-gray-300"><code>{`> ## Заголовок в цитате
> 
> Это абзац внутри цитаты с **жирным текстом**.
> 
> - Элемент списка
> - Еще один элемент`}</code></pre>
          </div>
          <div className="bg-gray-900/50 p-4 rounded-xl border border-cyan-700/30">
            <h3 className="font-bold text-cyan-300 mb-3">Диалог в цитатах:</h3>
            <pre className="bg-gray-800 p-3 rounded text-sm text-gray-300"><code>{`> Пользователь: Как установить пакет?
>> Ассистент: Используйте команду \`npm install\`.`}</code></pre>
          </div>
        </div>
      </div>

      {/* Инлайновый код */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Code className="w-5 h-5 text-orange-400" />
          Инлайновый код
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Инлайновый код используется для выделения фрагментов кода внутри обычного текста.
          </p>
        </div>

        <div className="mt-6 bg-gray-900/50 p-5 rounded-xl border border-orange-700/30">
          <h3 className="font-bold text-orange-300 mb-3">Синтаксис инлайнового кода:</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <p className="text-gray-400 text-sm mb-2">Markdown:</p>
              <pre className="bg-gray-800 p-4 rounded text-sm text-gray-300"><code>Используйте команду `npm install` для установки пакетов.</code></pre>
            </div>
            <div>
              <p className="text-gray-400 text-sm mb-2">Результат:</p>
              <div className="text-gray-300">
                Используйте команду <code className="bg-gray-700 px-1.5 py-0.5 rounded">npm install</code> для установки пакетов.
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 bg-gray-900/30 p-4 rounded-lg border border-gray-700">
          <h4 className="font-bold text-white mb-2">Советы по использованию инлайнового кода:</h4>
          <ul className="list-disc pl-5 space-y-2 text-gray-300 text-sm">
            <li>Используйте обратные апострофы ( ` ) для выделения кода</li>
            <li>Подходит для коротких фрагментов: названий переменных, команд, селекторов</li>
            <li>Если внутри кода нужно использовать символ `, заключите код в двойные обратные апострофы: `` `код с ` символом` ``</li>
            <li>Автоматически применяет моноширинный шрифт</li>
          </ul>
        </div>
      </div>

      {/* Блоки кода */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <FileCode className="w-5 h-5 text-cyan-400" />
          Блоки кода
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Блоки кода используются для отображения фрагментов программного кода или других форматированных данных.
          </p>
        </div>

        <div className="mt-6 bg-gray-900/50 p-5 rounded-xl border border-cyan-700/30">
          <h3 className="font-bold text-cyan-300 mb-3">Базовый синтаксис блоков кода:</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <p className="text-gray-400 text-sm mb-2">Markdown:</p>
              <pre className="bg-gray-800 p-4 rounded text-sm text-gray-300"><code>{`\`\`\`
console.log('Hello, World!');
\`\`\``}</code></pre>
            </div>
            <div>
              <p className="text-gray-400 text-sm mb-2">Результат:</p>
              <div className="text-gray-300">
                <pre className="bg-gray-800 p-4 rounded text-sm"><code>console.log('Hello, World!');</code></pre>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 bg-gray-900/50 p-5 rounded-xl border border-blue-700/30">
          <h3 className="font-bold text-blue-300 mb-3">Блоки кода с подсветкой синтаксиса:</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <p className="text-gray-400 text-sm mb-2">Markdown:</p>
              <pre className="bg-gray-800 p-4 rounded text-sm text-gray-300"><code>{`\`\`\`javascript
function hello() {
  console.log('Hello, World!');
  return true;
}
\`\`\``}</code></pre>
            </div>
            <div>
              <p className="text-gray-400 text-sm mb-2">Результат:</p>
              <div className="text-gray-300">
                <pre className="bg-gray-800 p-4 rounded text-sm">
                  <code className="language-javascript">{`function hello() {
  console.log('Hello, World!');
  return true;
}`}</code>
                </pre>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-gray-900/50 p-4 rounded-xl border border-green-700/30">
            <h3 className="font-bold text-green-300 mb-3">Python код:</h3>
            <pre className="bg-gray-800 p-3 rounded text-sm text-gray-300"><code>{`\`\`\`python
def hello():
    print("Hello, World!")
    return True
\`\`\``}</code></pre>
          </div>
          <div className="bg-gray-900/50 p-4 rounded-xl border border-yellow-700/30">
            <h3 className="font-bold text-yellow-300 mb-3">HTML код:</h3>
            <pre className="bg-gray-800 p-3 rounded text-sm text-gray-300"><code>{`\`\`\`html
<h1>Заголовок</h1>
<p>Абзац текста.</p>
<a href="#">Ссылка</a>
\`\`\``}</code></pre>
          </div>
        </div>

        <div className="mt-6 bg-gray-900/30 p-4 rounded-lg border border-gray-700">
          <h4 className="font-bold text-white mb-2">Советы по использованию блоков кода:</h4>
          <ul className="list-disc pl-5 space-y-2 text-gray-300 text-sm">
            <li>Используйте три обратных апострофа (``` ) для начала и конца блока</li>
            <li>Указывайте язык программирования после открывающих апострофов для подсветки синтаксиса</li>
            <li>Поддерживаемые языки: javascript, python, html, css, java, cpp, ruby и многие другие</li>
            <li>Сохраняют форматирование и отступы</li>
            <li>Полезны для документации, примеров кода, логов</li>
          </ul>
        </div>
      </div>

      {/* Практические примеры */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Terminal className="w-5 h-5 text-pink-400" />
          Практические примеры использования
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Вот как можно комбинировать цитаты и код в реальных документах:
          </p>
        </div>

        <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-gray-900/50 p-4 rounded-xl border border-blue-700/30">
            <h3 className="font-bold text-blue-300 mb-3">Техническая документация</h3>
            <pre className="bg-gray-800 p-3 rounded text-sm text-gray-300"><code>{`# Установка

> **Важно:** Перед установкой убедитесь, что у вас установлен Node.js версии 14 или выше.

Для установки пакета выполните команду:

\`\`\`bash
npm install my-package
\`\`\`

После установки вы можете импортировать его в вашем коде:

\`\`\`javascript
import myPackage from 'my-package';

myPackage.init();
\`\`\``}</code></pre>
          </div>
          <div className="bg-gray-900/50 p-4 rounded-xl border border-green-700/30">
            <h3 className="font-bold text-green-300 mb-3">FAQ с цитатами</h3>
            <pre className="bg-gray-800 p-3 rounded text-sm text-gray-300"><code>{`## Часто задаваемые вопросы

**Вопрос:** Как обновить пакет?

> Ответ от разработчика:
> 
> > Для обновления пакета используйте команду \`npm update\`.
> > 
> > > Если возникают конфликты, попробуйте \`npm install package@latest\`.

**Вопрос:** Почему не работает функция \`myFunction\`?

> Проверьте, что вы передаете правильные параметры:
> 
> \`\`\`javascript
> // Правильно
> myFunction('param1', 'param2');
> 
> // Неправильно
> myFunction(param1, param2); // если параметры должны быть строками
> \`\`\``}</code></pre>
          </div>
        </div>
      </div>

      {/* Заключение */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <div className="flex items-start gap-3">
          <div className="bg-green-500/20 p-2 rounded-lg flex-shrink-0">
            <Quote className="w-5 h-5 text-green-400" />
          </div>
          <div>
            <h3 className="font-bold text-white mb-2">Поздравляем! 🎉</h3>
            <p className="text-gray-300">
              Теперь вы знаете, как создавать цитаты и вставлять код в Markdown. Вы научились использовать вложенные цитаты, 
              выделять инлайновый код и создавать блоки кода с подсветкой синтаксиса. Эти навыки позволят вам создавать 
              профессиональные технические документы и руководства. В следующем уроке мы рассмотрим таблицы и расширенные возможности Markdown.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Part1;
