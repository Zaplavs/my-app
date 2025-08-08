// src/data/courses/html/lesson1/part1.jsx
import React from 'react';
import { BookOpen, FileText, Code, FileCode, Edit, Zap } from 'lucide-react';

const Part1 = () => {
  return (
    <div className="space-y-8 text-gray-200">
      {/* Вступление */}
      <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 backdrop-blur-sm border border-blue-700/30 rounded-2xl p-6 shadow-lg">
        <div className="flex items-start gap-4">
          <div className="bg-blue-500/20 p-3 rounded-lg">
            <BookOpen className="w-6 h-6 text-blue-400" />
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">📘 Урок 1: Что такое Markdown?</h1>
            <h2 className="text-xl font-semibold text-blue-300 mb-3">Легковесная разметка для простого и читаемого текста</h2>
            <p className="text-gray-300">
              <span className="font-medium text-yellow-400">🎯 Цель урока:</span> Понять, что такое Markdown, зачем он нужен и где применяется. Ознакомиться с основами синтаксиса.
            </p>
          </div>
        </div>
      </div>

      {/* Что такое Markdown? */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <FileText className="w-5 h-5 text-green-400" />
          Что такое Markdown?
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            <span className="font-medium text-green-300">Markdown</span> — это <span className="font-medium">легковесный язык разметки</span>, созданный в 2004 году Джоном Грубером (John Gruber) и Аароном Шварцем (Aaron Swartz).
          </p>
          <p>
            Его основная идея — сделать текст максимально <span className="font-medium">читаемым</span> и <span className="font-medium">простым для написания</span> в "сыром" виде, а также легко <span className="font-medium">конвертируемым</span> в структурированный формат, например, HTML.
          </p>
          <p>
            В отличие от сложных языков разметки вроде HTML, Markdown использует простые символы, которые интуитивно понятны. Например, выделение текста звездочками <code className="bg-gray-700 px-1.5 py-0.5 rounded">*курсив*</code> или решетки для заголовков <code className="bg-gray-700 px-1.5 py-0.5 rounded"># Заголовок</code>.
          </p>
        </div>
      </div>

      {/* Зачем нужен Markdown? */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Edit className="w-5 h-5 text-purple-400" />
          Зачем нужен Markdown?
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <ul className="space-y-3">
            <li>
              <span className="font-medium text-purple-300">Простота:</span> Не нужно знать сложные теги. Достаточно запомнить несколько символов.
            </li>
            <li>
              <span className="font-medium text-cyan-300">Читаемость:</span> Даже "сырой" Markdown легко читать, он не перегружен тегами.
            </li>
            <li>
              <span className="font-medium text-yellow-300">Универсальность:</span> Поддерживается множеством платформ и инструментов.
            </li>
            <li>
              <span className="font-medium text-pink-300">Конвертация:</span> Легко преобразуется в HTML, PDF, DOCX и другие форматы.
            </li>
            <li>
              <span className="font-medium text-blue-300">Фокус на содержание:</span> Позволяет сосредоточиться на написании текста, а не на его оформлении.
            </li>
          </ul>
        </div>
      </div>

      {/* Где используется Markdown? */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Zap className="w-5 h-5 text-orange-400" />
          Где используется Markdown?
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Markdown стал стандартом де-факто для написания документации, заметок и технического контента. Вот основные сферы применения:
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
          <div className="bg-gray-900/50 p-4 rounded-xl border border-purple-700/30">
            <h3 className="font-bold text-purple-300 mb-2">📝 Документация и README</h3>
            <p className="text-sm text-gray-300">
              GitHub, GitLab, Bitbucket и другие системы контроля версий используют Markdown для файлов <code className="bg-gray-700 px-1.5 py-0.5 rounded">README.md</code> и документации.
            </p>
          </div>
          <div className="bg-gray-900/50 p-4 rounded-xl border border-blue-700/30">
            <h3 className="font-bold text-blue-300 mb-2">💬 Блоги и статьи</h3>
            <p className="text-sm text-gray-300">
              Многие платформы (например, Medium, DEV.to) позволяют писать статьи в формате Markdown. Также используется в генераторах статических сайтов (Jekyll, Hugo).
            </p>
          </div>
          <div className="bg-gray-900/50 p-4 rounded-xl border border-green-700/30">
            <h3 className="font-bold text-green-300 mb-2">🧠 Заметки и знания</h3>
            <p className="text-sm text-gray-300">
              Приложения для ведения заметок, такие как Obsidian, Notion, Joplin, поддерживают Markdown для структурирования информации.
            </p>
          </div>
          <div className="bg-gray-900/50 p-4 rounded-xl border border-yellow-700/30">
            <h3 className="font-bold text-yellow-300 mb-2">🔢 Технические тексты</h3>
            <p className="text-sm text-gray-300">
              Jupyter Notebooks, научные статьи, техническая документация часто используют Markdown для написания текста с возможностью вставки кода.
            </p>
          </div>
        </div>
      </div>

      {/* Основы синтаксиса Markdown */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Code className="w-5 h-5 text-red-400" />
          Основы синтаксиса Markdown
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Вот краткий обзор самых распространённых элементов синтаксиса Markdown:
          </p>
        </div>
        <div className="mt-6 space-y-4">
          <div className="bg-gray-900/50 p-4 rounded-xl border border-gray-700">
            <h3 className="font-bold text-white mb-2">Заголовки</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div>
                <p className="font-medium text-gray-400 mb-1">Markdown:</p>
                <pre className="bg-gray-800 p-3 rounded overflow-x-auto text-gray-300"><code>{`# Заголовок 1
## Заголовок 2
### Заголовок 3
#### Заголовок 4`}</code></pre>
              </div>
              <div>
                <p className="font-medium text-gray-400 mb-1">Результат:</p>
                <div className="space-y-1">
                  <h1 className="text-2xl font-bold">Заголовок 1</h1>
                  <h2 className="text-xl font-bold">Заголовок 2</h2>
                  <h3 className="text-lg font-bold">Заголовок 3</h3>
                  <h4 className="text-base font-bold">Заголовок 4</h4>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-900/50 p-4 rounded-xl border border-gray-700">
            <h3 className="font-bold text-white mb-2">Выделение текста</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div>
                <p className="font-medium text-gray-400 mb-1">Markdown:</p>
                <pre className="bg-gray-800 p-3 rounded overflow-x-auto text-gray-300"><code>{`*Курсив* или _Курсив_
**Жирный** или __Жирный__
***Жирный курсив***`}</code></pre>
              </div>
              <div>
                <p className="font-medium text-gray-400 mb-1">Результат:</p>
                <div className="space-y-1">
                  <p><em>Курсив</em> или <em>Курсив</em></p>
                  <p><strong>Жирный</strong> или <strong>Жирный</strong></p>
                  <p><strong><em>Жирный курсив</em></strong></p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-900/50 p-4 rounded-xl border border-gray-700">
            <h3 className="font-bold text-white mb-2">Списки</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div>
                <p className="font-medium text-gray-400 mb-1">Markdown:</p>
                <pre className="bg-gray-800 p-3 rounded overflow-x-auto text-gray-300"><code>{`- Элемент 1
- Элемент 2
  - Вложенный элемент
1. Нумерованный 1
2. Нумерованный 2`}</code></pre>
              </div>
              <div>
                <p className="font-medium text-gray-400 mb-1">Результат:</p>
                <div className="space-y-2">
                  <ul className="list-disc pl-5">
                    <li>Элемент 1</li>
                    <li>Элемент 2
                      <ul className="list-disc pl-5">
                        <li>Вложенный элемент</li>
                      </ul>
                    </li>
                  </ul>
                  <ol className="list-decimal pl-5">
                    <li>Нумерованный 1</li>
                    <li>Нумерованный 2</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-900/50 p-4 rounded-xl border border-gray-700">
            <h3 className="font-bold text-white mb-2">Ссылки и изображения</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div>
                <p className="font-medium text-gray-400 mb-1">Markdown:</p>
                <pre className="bg-gray-800 p-3 rounded overflow-x-auto text-gray-300"><code>{`[Google](https://google.com)
![Альтернативный текст](image.jpg)`}</code></pre>
              </div>
              <div>
                <p className="font-medium text-gray-400 mb-1">Результат:</p>
                <div className="space-y-2">
                  <p><a href="https://google.com" className="text-blue-400 hover:underline">Google</a></p>
                  <p><em>(Изображение не отображается, так как файл image.jpg отсутствует)</em></p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-900/50 p-4 rounded-xl border border-gray-700">
            <h3 className="font-bold text-white mb-2">Блоки кода</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div>
                <p className="font-medium text-gray-400 mb-1">Markdown:</p>
                <pre className="bg-gray-800 p-3 rounded overflow-x-auto text-gray-300"><code>{`Встроенный код: \`console.log('Привет')\`

Блок кода:
\`\`\`javascript
function hello() {
  console.log('Привет');
}
\`\`\``}</code></pre>
              </div>
              <div>
                <p className="font-medium text-gray-400 mb-1">Результат:</p>
                <div className="space-y-2">
                  <p>Встроенный код: <code className="bg-gray-700 px-1.5 py-0.5 rounded">console.log('Привет')</code></p>
                  <pre className="bg-gray-800 p-3 rounded overflow-x-auto text-gray-300"><code className="language-javascript">{`function hello() {
  console.log('Привет');
}`}</code></pre>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Заключение */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <div className="flex items-start gap-3">
          <div className="bg-green-500/20 p-2 rounded-lg flex-shrink-0">
            <Zap className="w-5 h-5 text-green-400" />
          </div>
          <div>
            <h3 className="font-bold text-white mb-2">Поздравляем! 🎉</h3>
            <p className="text-gray-300">
              Теперь вы знаете, что такое Markdown, зачем он нужен и где применяется. Вы также ознакомились с основами его синтаксиса.
              Markdown — отличный инструмент для написания читаемой и структурированной документации, заметок и статей. Его простота делает его идеальным для фокусировки на содержании, а не на форматировании.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Part1;
