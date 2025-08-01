// src/data/courses/html/lesson4/part1.jsx
import React from 'react';
import { Hash, Pilcrow, CornerDownLeft, Minus, BookOpen } from 'lucide-react';

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
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">🔤 Урок 4: Заголовки и абзацы в HTML</h1>
            <h2 className="text-xl font-semibold text-blue-300 mb-3">Структурирование текстового содержимого</h2>
            <p className="text-gray-300">
              <span className="font-medium text-yellow-400">🎯 Цель урока:</span> Освоить основные теги для создания структуры текста: заголовки <code className="bg-gray-700 px-1.5 py-0.5 rounded text-green-300">{'<h1>'}–{'<h6>'}</code>, абзацы <code className="bg-gray-700 px-1.5 py-0.5 rounded text-orange-300">{'<p>'}</code>, а также вспомогательные теги <code className="bg-gray-700 px-1.5 py-0.5 rounded text-purple-300">{'<br>'}</code> и <code className="bg-gray-700 px-1.5 py-0.5 rounded text-cyan-300">{'<hr>'}</code>.
            </p>
          </div>
        </div>
      </div>

      {/* Роль текстовой структуры */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <BookOpen className="w-5 h-5 text-green-400" />
          Зачем нужна структура текста?
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Текст без структуры — это сплошная масса слов, в которой сложно ориентироваться. HTML предоставляет теги, которые помогают <span className="font-medium">организовать</span> текст, сделать его <span className="font-medium">логичным</span> и <span className="font-medium">удобным для чтения</span>.
          </p>
          <p>
            Правильная структура важна не только для пользователей, но и для:
          </p>
          <ul className="list-disc pl-5 space-y-2 mt-2">
            <li><span className="font-medium">Поисковых систем (SEO)</span> — они лучше понимают содержание страницы.</li>
            <li><span className="font-medium">Скринридеров</span> — программ для чтения с экрана, используемых людьми с ограниченными возможностями.</li>
            <li><span className="font-medium">Разработчиков</span> — упрощает дальнейшую работу с разметкой (стилизация, скрипты).</li>
          </ul>
        </div>
      </div>

      {/* Теги заголовков <h1>–<h6> */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Hash className="w-5 h-5 text-purple-400" />
          Теги заголовков {'<h1>'}–{'<h6>'}
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            HTML предоставляет шесть уровней заголовков: от <code className="bg-gray-700 px-1.5 py-0.5 rounded text-green-300">{'<h1>'}</code> до <code className="bg-gray-700 px-1.5 py-0.5 rounded text-green-300">{'<h6>'}</code>. Они определяют <span className="font-medium">иерархию</span> разделов страницы.
          </p>
        </div>

        <div className="mt-6 space-y-4">
          <div className="bg-gray-900/50 p-4 rounded-xl border border-green-700/30">
            <div className="flex items-center gap-2 mb-2">
              <Hash className="w-4 h-4 text-green-400" />
              <code className="text-green-400 font-mono">{'<h1>'}</code>
              <span className="text-sm text-gray-400">(Самый важный)</span>
            </div>
            <p className="text-2xl font-bold text-white">Это заголовок h1</p>
            <p className="text-gray-400 text-sm mt-2">Обычно используется один раз на странице для основного заголовка.</p>
          </div>

          <div className="bg-gray-900/50 p-4 rounded-xl border border-blue-700/30">
            <div className="flex items-center gap-2 mb-2">
              <Hash className="w-4 h-4 text-blue-400" />
              <code className="text-blue-400 font-mono">{'<h2>'}</code>
              <span className="text-sm text-gray-400">(Важный раздел)</span>
            </div>
            <p className="text-xl font-bold text-white">Это заголовок h2</p>
            <p className="text-gray-400 text-sm mt-2">Используется для заголовков основных разделов.</p>
          </div>

          <div className="bg-gray-900/50 p-4 rounded-xl border border-cyan-700/30">
            <div className="flex items-center gap-2 mb-2">
              <Hash className="w-4 h-4 text-cyan-400" />
              <code className="text-cyan-400 font-mono">{'<h3>'}</code>
              <span className="text-sm text-gray-400">(Подраздел)</span>
            </div>
            <p className="text-lg font-bold text-white">Это заголовок h3</p>
            <p className="text-gray-400 text-sm mt-2">Используется для подзаголовков разделов.</p>
          </div>

          <div className="bg-gray-900/50 p-4 rounded-xl border border-yellow-700/30">
            <div className="flex items-center gap-2 mb-2">
              <Hash className="w-4 h-4 text-yellow-400" />
              <code className="text-yellow-400 font-mono">{'<h4>'}</code>
              <span className="text-sm text-gray-400">(Подраздел 2-го уровня)</span>
            </div>
            <p className="text-base font-bold text-white">Это заголовок h4</p>
            <p className="text-gray-400 text-sm mt-2">Используется для менее значимых подзаголовков.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-gray-900/50 p-4 rounded-xl border border-orange-700/30">
              <div className="flex items-center gap-2 mb-2">
                <Hash className="w-4 h-4 text-orange-400" />
                <code className="text-orange-400 font-mono">{'<h5>'}</code>
              </div>
              <p className="text-sm font-bold text-white">Это заголовок h5</p>
            </div>
            <div className="bg-gray-900/50 p-4 rounded-xl border border-red-700/30">
              <div className="flex items-center gap-2 mb-2">
                <Hash className="w-4 h-4 text-red-400" />
                <code className="text-red-400 font-mono">{'<h6>'}</code>
              </div>
              <p className="text-xs font-bold text-white">Это заголовок h6</p>
            </div>
          </div>
        </div>

        <div className="mt-6 p-4 bg-blue-900/20 border border-blue-700/30 rounded-lg">
          <h3 className="font-bold text-white mb-2 flex items-center gap-2">
            <BookOpen className="w-4 h-4" />
            Правила использования заголовков:
          </h3>
          <ul className="list-decimal pl-5 space-y-2 text-gray-300 text-sm">
            <li><span className="font-medium">Иерархия:</span> Не пропускайте уровни. После <code className="bg-gray-700 px-1 rounded">{'<h1>'}</code> должен идти <code className="bg-gray-700 px-1 rounded">{'<h2>'}</code>, а не <code className="bg-gray-700 px-1 rounded">{'<h3>'}</code>.</li>
            <li><span className="font-medium">Уникальность h1:</span> На одной странице рекомендуется использовать <span className="font-medium">только один</span> тег <code className="bg-gray-700 px-1 rounded">{'<h1>'}</code>.</li>
            <li><span className="font-medium">Смысловая нагрузка:</span> Заголовки должны отражать содержание следующего за ними раздела.</li>
          </ul>
        </div>
      </div>

      {/* Тег абзаца <p> */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Pilcrow className="w-5 h-5 text-orange-400" />
          Тег абзаца {'<p>'}
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Тег <code className="bg-gray-700 px-1.5 py-0.5 rounded text-orange-300">{'<p>'}</code> (от английского <em>paragraph</em>) используется для создания <span className="font-medium">абзацев</span> текста.
          </p>
          <p>
            Это <span className="font-medium">основной</span> тег для размещения обычного текстового содержимого. Браузер автоматически добавляет отступы до и после абзаца для визуального разделения.
          </p>
        </div>
        <div className="mt-4 bg-gray-900 p-4 rounded-lg">
          <pre className="text-orange-300 text-sm">
            <code>{`<p>Это первый абзац текста. Он содержит какую-то информацию.</p>
<p>Это второй абзац. Он отделен от первого пустой строкой в HTML и отступами в браузере.</p>`}</code>
          </pre>
        </div>
        <div className="mt-4 p-3 bg-gray-900/50 rounded-lg">
          <p className="text-gray-300 text-sm">
            <span className="font-medium">Важно:</span> Не используйте теги заголовков (<code className="bg-gray-700 px-1 rounded">{'<h1>'}–{'<h6>'}</code>) вместо абзацев просто для изменения размера текста. Для стилизации существует CSS.
          </p>
        </div>
      </div>

      {/* Перенос строки <br> */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <CornerDownLeft className="w-5 h-5 text-cyan-400" />
          Перенос строки {'<br>'}
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Тег <code className="bg-gray-700 px-1.5 py-0.5 rounded text-cyan-300">{'<br>'}</code> (от английского <em>break</em>) создает <span className="font-medium">принудительный перенос строки</span> в том месте, где он находится.
          </p>
          <p>
            Это <span className="font-medium">самозакрывающийся</span> тег, то есть он не требует закрывающего тега.
          </p>
        </div>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-gray-900/50 p-4 rounded-lg">
            <p className="text-sm text-gray-400 mb-2">Без {'<br>'} (один абзац):</p>
            <p className="text-gray-300 text-sm bg-gray-800 p-2 rounded">
              Первая строка Вторая строка Третья строка
            </p>
          </div>
          <div className="bg-gray-900/50 p-4 rounded-lg">
            <p className="text-sm text-gray-400 mb-2">С {'<br>'} (один абзац, переносы внутри):</p>
            <p className="text-gray-300 text-sm bg-gray-800 p-2 rounded">
              Первая строка<br />Вторая строка<br />Третья строка
            </p>
          </div>
        </div>
        <div className="mt-4 bg-gray-900 p-4 rounded-lg">
          <pre className="text-cyan-300 text-sm">
            <code>{`<p>
  Первая строка<br>
  Вторая строка<br>
  Третья строка
</p>`}</code>
          </pre>
        </div>
        <div className="mt-4 p-3 bg-blue-900/20 border border-blue-700/30 rounded-lg">
          <p className="text-blue-300 text-sm flex items-start gap-2">
            <span className="font-medium">💡 Когда использовать:</span>
            <span>
              <code className="bg-gray-700 px-1 rounded">{'<br>'}</code> полезен для адресов, стихов или коротких фрагментов текста, где нужен контроль за переносами, но создавать новый абзац (<code className="bg-gray-700 px-1 rounded">{'<p>'}</code>) неуместно.
            </span>
          </p>
        </div>
      </div>

      {/* Горизонтальная линия <hr> */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Minus className="w-5 h-5 text-purple-400" />
          Горизонтальная линия {'<hr>'}
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Тег <code className="bg-gray-700 px-1.5 py-0.5 rounded text-purple-300">{'<hr>'}</code> (от английского <em>horizontal rule</em>) создает <span className="font-medium">горизонтальную линию</span> для визуального разделения частей страницы.
          </p>
          <p>
            Это также <span className="font-medium">самозакрывающийся</span> тег.
          </p>
        </div>
        <div className="mt-4 bg-gray-900 p-4 rounded-lg">
          <pre className="text-purple-300 text-sm">
            <code>{`<p>Первая часть текста.</p>
<hr>
<p>Вторая часть текста, отделенная линией.</p>`}</code>
          </pre>
        </div>
        <div className="mt-4 flex flex-col items-center p-4 bg-gray-900/50 rounded-lg">
          <p className="text-gray-300 text-sm mb-2">Пример отображения в браузере:</p>
          <p className="text-gray-400 text-sm">Первая часть текста.</p>
          <div className="w-full my-2 border-t border-gray-600"></div>
          <p className="text-gray-400 text-sm">Вторая часть текста, отделенная линией.</p>
        </div>
        <div className="mt-4 p-3 bg-blue-900/20 border border-blue-700/30 rounded-lg">
          <p className="text-blue-300 text-sm flex items-start gap-2">
            <span className="font-medium">💡 Семантика:</span>
            <span>
              В HTML5 тег <code className="bg-gray-700 px-1 rounded">{'<hr>'}</code> представляет собой "тематический разрыв" между абзацами, например, смену сцены в рассказе или переход к другой теме.
            </span>
          </p>
        </div>
      </div>

      {/* Семантическое значение заголовков */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <BookOpen className="w-5 h-5 text-yellow-400" />
          Семантическое значение заголовков
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            <span className="font-medium">Семантика</span> — это смысловая нагрузка тегов. HTML-теги не только определяют, <span className="font-medium">как</span> что-то отображается, но и <span className="font-medium">что</span> это означает.
          </p>
          <p>
            Заголовки (<code className="bg-gray-700 px-1 rounded">{'<h1>'}–{'<h6>'}</code>) имеют важное семантическое значение:
          </p>
          <ul className="list-disc pl-5 space-y-2 mt-2">
            <li>Они создают <span className="font-medium">структуру документа</span>.</li>
            <li>Помогают <span className="font-medium">поисковым системам</span> понять, о чём страница.</li>
            <li>Используются <span className="font-medium">скринридерами</span> для навигации по странице.</li>
            <li>Упрощают <span className="font-medium">индексацию</span> содержимого.</li>
          </ul>
          <div className="mt-4 p-3 bg-green-900/20 border border-green-700/30 rounded-lg">
            <p className="text-green-300 text-sm flex items-start gap-2">
              <span className="font-medium">✅ Правильно:</span>
              <span>
                Использовать заголовки по иерархии: <code className="bg-gray-700 px-1 rounded">{'<h1>'}</code> для главной темы, <code className="bg-gray-700 px-1 rounded">{'<h2>'}</code> для разделов, <code className="bg-gray-700 px-1 rounded">{'<h3>'}</code> для подразделов и т.д.
              </span>
            </p>
          </div>
          <div className="mt-2 p-3 bg-red-900/20 border border-red-700/30 rounded-lg">
            <p className="text-red-300 text-sm flex items-start gap-2">
              <span className="font-medium">❌ Неправильно:</span>
              <span>
                Использовать теги заголовков <span className="font-medium">только</span> для изменения размера текста. Для стилизации используйте CSS.
              </span>
            </p>
          </div>
        </div>
      </div>

      {/* Заключение */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <div className="flex items-start gap-3">
          <div className="bg-green-500/20 p-2 rounded-lg flex-shrink-0">
            <BookOpen className="w-5 h-5 text-green-400" />
          </div>
          <div>
            <h3 className="font-bold text-white mb-2">Отличная работа! 🎉</h3>
            <p className="text-gray-300">
              Теперь вы знаете основные теги для структурирования текста в HTML: заголовки <code className="bg-gray-700 px-1 rounded">{'<h1>'}–{'<h6>'}</code>, абзацы <code className="bg-gray-700 px-1 rounded">{'<p>'}</code>, перенос строки <code className="bg-gray-700 px-1 rounded">{'<br>'}</code> и горизонтальную линию <code className="bg-gray-700 px-1 rounded">{'<hr>'}</code>. Понимание их семантического значения поможет вам создавать более доступные и понятные веб-страницы. В следующих частях урока мы закрепим эти знания на практике.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Part1;