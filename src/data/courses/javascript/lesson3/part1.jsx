// src/data/courses/javascript/lesson3/part1.jsx
import React from 'react';
import { Terminal, Bug, AlertCircle, Edit3, Zap, Code } from 'lucide-react';

const Part1 = () => {
  return (
    <div className="space-y-8 text-gray-200">
      {/* Вступление */}
      <div className="bg-gradient-to-r from-purple-900/30 to-pink-900/30 backdrop-blur-sm border border-purple-700/30 rounded-2xl p-6 shadow-lg">
        <div className="flex items-start gap-4">
          <div className="bg-purple-500/20 p-3 rounded-lg">
            <Terminal className="w-6 h-6 text-purple-400" />
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">📚 Урок 3: Работа с консолью браузера</h1>
            <h2 className="text-xl font-semibold text-purple-300 mb-3">Инструменты разработчика и основы отладки</h2>
            <p className="text-gray-300">
              <span className="font-medium text-yellow-400">🎯 Цель урока:</span> Научиться использовать инструменты разработчика браузера, работать с консолью и освоить базовые методы отладки JavaScript.
            </p>
          </div>
        </div>
      </div>

      {/* Открытие DevTools */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Code className="w-5 h-5 text-blue-400" />
          Открытие инструментов разработчика (DevTools)
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Инструменты разработчика (DevTools) — это мощный набор инструментов в браузере для отладки веб-страниц.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <div className="bg-gray-900/50 p-4 rounded-xl border border-blue-700/30">
              <h3 className="font-bold text-blue-300 mb-2">Способы открытия:</h3>
              <ul className="list-disc pl-5 space-y-1 text-sm">
                <li>Нажать <kbd className="bg-gray-700 px-2 py-1 rounded">F12</kbd></li>
                <li>Нажать <kbd className="bg-gray-700 px-2 py-1 rounded">Ctrl+Shift+I</kbd> (Windows/Linux)</li>
                <li>Нажать <kbd className="bg-gray-700 px-2 py-1 rounded">Cmd+Option+I</kbd> (Mac)</li>
                <li>Правой кнопкой мыши → "Просмотреть код"</li>
              </ul>
            </div>

            <div className="bg-gray-900/50 p-4 rounded-xl border border-green-700/30">
              <h3 className="font-bold text-green-300 mb-2">Основные вкладки:</h3>
              <ul className="list-disc pl-5 space-y-1 text-sm">
                <li><span className="text-yellow-300">Elements</span> — структура страницы</li>
                <li><span className="text-yellow-300">Console</span> — консоль JavaScript</li>
                <li><span className="text-yellow-300">Sources</span> — исходный код</li>
                <li><span className="text-yellow-300">Network</span> — сетевые запросы</li>
              </ul>
            </div>
          </div>

          <div className="mt-4 p-3 bg-blue-900/20 border border-blue-700/30 rounded-lg">
            <p className="text-blue-300 text-sm">
              <span className="font-medium">💡 Совет:</span> Вкладка <span className="text-yellow-300">Console</span> — ваш лучший помощник для тестирования JavaScript кода и поиска ошибок.
            </p>
          </div>
        </div>
      </div>

      {/* console.log() */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Terminal className="w-5 h-5 text-green-400" />
          Использование console.log()
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            <code className="bg-gray-800 px-2 py-1 rounded text-green-300">console.log()</code> — самый простой способ вывода информации в консоль браузера.
          </p>

          <div className="space-y-4 mt-4">
            <div className="bg-gray-900/50 p-4 rounded-xl border border-green-700/30">
              <h3 className="font-bold text-green-300 mb-2">Базовое использование:</h3>
              <div className="bg-gray-800 p-3 rounded">
                <pre className="text-sm text-gray-300">
{`console.log("Привет, мир!");
console.log(42);
console.log(true);
console.log([1, 2, 3]);`}
                </pre>
              </div>
            </div>

            <div className="bg-gray-900/50 p-4 rounded-xl border border-yellow-700/30">
              <h3 className="font-bold text-yellow-300 mb-2">Вывод нескольких значений:</h3>
              <div className="bg-gray-800 p-3 rounded">
                <pre className="text-sm text-gray-300">
{`let name = "Иван";
let age = 25;
console.log("Имя:", name, "Возраст:", age);`}
                </pre>
              </div>
            </div>

            <div className="bg-gray-900/50 p-4 rounded-xl border border-blue-700/30">
              <h3 className="font-bold text-blue-300 mb-2">Другие методы console:</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="bg-gray-800 p-2 rounded">
                  <code className="text-sm text-blue-300">console.info()</code>
                  <div className="text-xs text-gray-400 mt-1">Информационные сообщения</div>
                </div>
                <div className="bg-gray-800 p-2 rounded">
                  <code className="text-sm text-yellow-300">console.warn()</code>
                  <div className="text-xs text-gray-400 mt-1">Предупреждения</div>
                </div>
                <div className="bg-gray-800 p-2 rounded">
                  <code className="text-sm text-red-300">console.error()</code>
                  <div className="text-xs text-gray-400 mt-1">Ошибки</div>
                </div>
                <div className="bg-gray-800 p-2 rounded">
                  <code className="text-sm text-purple-300">console.clear()</code>
                  <div className="text-xs text-gray-400 mt-1">Очистка консоли</div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-4 p-3 bg-green-900/20 border border-green-700/30 rounded-lg">
            <p className="text-green-300 text-sm">
              <span className="font-medium">💡 console.log()</span> — незаменимый инструмент для отладки и понимания, как работает ваш код.
            </p>
          </div>
        </div>
      </div>

      {/* alert() и prompt() */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <AlertCircle className="w-5 h-5 text-yellow-400" />
          alert() и prompt()
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Эти функции позволяют взаимодействовать с пользователем через всплывающие окна.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
            <div className="bg-gray-900/50 p-5 rounded-xl border border-blue-700/30">
              <h3 className="font-bold text-blue-300 flex items-center gap-2 mb-3">
                <AlertCircle className="w-5 h-5" />
                alert()
              </h3>
              <p className="text-gray-300 text-sm mb-3">
                Показывает всплывающее окно с сообщением и кнопкой "OK".
              </p>
              <div className="bg-gray-800 p-3 rounded">
                <pre className="text-sm text-gray-300">
{`alert("Привет, мир!");
alert("Это важное сообщение!");`}
                </pre>
              </div>
            </div>

            <div className="bg-gray-900/50 p-5 rounded-xl border border-green-700/30">
              <h3 className="font-bold text-green-300 flex items-center gap-2 mb-3">
                <Edit3 className="w-5 h-5" />
                prompt()
              </h3>
              <p className="text-gray-300 text-sm mb-3">
                Показывает окно с полем ввода и возвращает введённое значение.
              </p>
              <div className="bg-gray-800 p-3 rounded">
                <pre className="text-sm text-gray-300">
{`let name = prompt("Как вас зовут?");
alert("Привет, " + name + "!");

let age = prompt("Сколько вам лет?", "18");`}
                </pre>
              </div>
            </div>
          </div>

          <div className="mt-4 bg-gray-900/50 p-4 rounded-xl border border-purple-700/30">
            <h3 className="font-bold text-purple-300 mb-2">confirm() — дополнительная функция:</h3>
            <p className="text-gray-300 text-sm mb-3">
              Показывает окно с вопросом и кнопками "OK" и "Отмена". Возвращает <code className="bg-gray-800 px-1 rounded">true</code> или <code className="bg-gray-800 px-1 rounded">false</code>.
            </p>
            <div className="bg-gray-800 p-3 rounded">
              <pre className="text-sm text-gray-300">
{`let result = confirm("Вы уверены?");
if (result) {
    alert("Действие подтверждено!");
} else {
    alert("Действие отменено!");
}`}
              </pre>
            </div>
          </div>

          <div className="mt-4 p-3 bg-yellow-900/20 border border-yellow-700/30 rounded-lg">
            <p className="text-yellow-300 text-sm">
              <span className="font-medium">💡 Предупреждение:</span> Эти функции блокируют выполнение страницы, поэтому используйте их умеренно и только для простых случаев.
            </p>
          </div>
        </div>
      </div>

      {/* Основы отладки и ошибки */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Bug className="w-5 h-5 text-red-400" />
          Основы отладки и синтаксические ошибки
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Отладка — процесс поиска и исправления ошибок в коде. В консоли браузера отображаются ошибки с указанием места их возникновения.
          </p>

          <div className="space-y-4 mt-4">
            <div className="bg-gray-900/50 p-4 rounded-xl border border-red-700/30">
              <h3 className="font-bold text-red-300 mb-2">Типичные синтаксические ошибки:</h3>
              <div className="space-y-3">
                <div>
                  <div className="text-sm text-gray-400 mb-1">Пропущенная скобка:</div>
                  <div className="bg-gray-800 p-2 rounded">
                    <pre className="text-xs text-red-300 line-through">
{`alert("Привет"`}
                    </pre>
                  </div>
                  <div className="text-xs text-green-300 mt-1">Правильно: <code>alert("Привет")</code></div>
                </div>
                
                <div>
                  <div className="text-sm text-gray-400 mb-1">Непарные кавычки:</div>
                  <div className="bg-gray-800 p-2 rounded">
                    <pre className="text-xs text-red-300 line-through">
{`console.log("Привет');`}
                    </pre>
                  </div>
                  <div className="text-xs text-green-300 mt-1">Правильно: <code>console.log("Привет");</code></div>
                </div>
                
                <div>
                  <div className="text-sm text-gray-400 mb-1">Опечатка в названии функции:</div>
                  <div className="bg-gray-800 p-2 rounded">
                    <pre className="text-xs text-red-300 line-through">
{`consol.log("Ошибка");`}
                    </pre>
                  </div>
                  <div className="text-xs text-green-300 mt-1">Правильно: <code>console.log("Ошибка");</code></div>
                </div>
              </div>
            </div>

            <div className="bg-gray-900/50 p-4 rounded-xl border border-blue-700/30">
              <h3 className="font-bold text-blue-300 mb-2">Как читать ошибки в консоли:</h3>
              <ul className="list-disc pl-5 space-y-1 text-sm">
                <li><span className="text-yellow-300">Тип ошибки</span> — что пошло не так</li>
                <li><span className="text-yellow-300">Номер строки</span> — где находится ошибка</li>
                <li><span className="text-yellow-300">Сообщение</span> — описание проблемы</li>
              </ul>
            </div>
          </div>

          <div className="mt-4 p-3 bg-red-900/20 border border-red-700/30 rounded-lg">
            <p className="text-red-300 text-sm">
              <span className="font-medium">💡 Совет:</span> Всегда проверяйте консоль на наличие ошибок. Красный текст = что-то пошло не так!
            </p>
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
            <h3 className="font-bold text-white mb-2">Отлично! 🎉</h3>
            <p className="text-gray-300">
              Теперь вы знаете, как работать с консолью браузера, использовать основные функции для вывода информации и взаимодействия с пользователем, а также находить и исправлять ошибки. В следующем уроке мы закрепим эти знания на практике!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Part1;