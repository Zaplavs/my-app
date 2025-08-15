// src/data/courses/c/lesson3/part1.jsx
import React from 'react';
import { Terminal, Code, Play, Zap, BookOpen, AlertCircle } from 'lucide-react';

const Part1 = () => {
  return (
    <div className="space-y-8 text-gray-200">
      {/* Вступление */}
      <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 backdrop-blur-sm border border-blue-700/30 rounded-2xl p-6 shadow-lg">
        <div className="flex items-start gap-4">
          <div className="bg-blue-500/20 p-3 rounded-lg">
            <Play className="w-6 h-6 text-blue-400" />
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">🚀 Урок 3: Первая программа на C — "Hello, Proletariat!"</h1>
            <h2 className="text-xl font-semibold text-blue-300 mb-3">Ваш первый шаг в мир программирования</h2>
            <p className="text-gray-300">
              <span className="font-medium text-yellow-400">🎯 Цель урока:</span> Написать, скомпилировать и запустить первую программу на C, поняв каждую строчку кода.
            </p>
          </div>
        </div>
      </div>

      {/* Почему "Hello, World"? */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <BookOpen className="w-5 h-5 text-green-400" />
          Почему именно "Hello, World"?
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            В мире программирования традиционно первой программой является вывод на экран фразы <span className="font-mono bg-gray-700 px-2 py-1 rounded">"Hello, World!"</span>.
          </p>
          <p>
            Эта традиция началась в 1970-х годах с книги по языку C, и с тех пор она используется как первый тест для проверки, что всё работает правильно.
          </p>
          <div className="mt-4 p-3 bg-blue-900/20 border border-blue-700/30 rounded-lg flex items-start gap-2">
            <Zap className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
            <p className="text-blue-300 text-sm">
              <span className="font-medium">💡 Смысл прост:</span> Если программа может вывести текст — значит, компилятор, система и ваш код работают корректно!
            </p>
          </div>
          <p className="mt-4">
            Мы немного изменим традицию и напишем <span className="font-mono bg-gray-700 px-2 py-1 rounded">"Hello, Proletariat!"</span> — как дань уважения тем, кто строит будущее своими руками.
          </p>
        </div>
      </div>

      {/* Разбор кода построчно */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Code className="w-5 h-5 text-purple-400" />
          Разбор программы построчно
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Давайте внимательно рассмотрим каждую строку нашей первой программы:
          </p>
        </div>

        <div className="mt-6 space-y-6">
          {/* Строка 1 */}
          <div className="bg-gray-900/50 p-5 rounded-xl border border-green-700/30">
            <div className="flex items-center gap-3 mb-3">
              <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm font-mono">1</span>
              <code className="text-green-300 font-mono">{`#include <stdio.h>`}</code>
            </div>
            <div className="text-gray-300">
              <p className="font-medium text-yellow-400 mb-2">Что это значит?</p>
              <p>
                Это <span className="font-medium">директива препроцессора</span>. Представьте, что вы готовите бутерброд — вам нужны ингредиенты. 
                <code className="bg-gray-700 px-1.5 py-0.5 rounded mx-1">stdio.h</code> — это "ингредиент", который содержит функции для работы с вводом и выводом (например, <code className="bg-gray-700 px-1.5 py-0.5 rounded">printf</code>).
              </p>
              <p className="mt-2">
                <span className="font-medium">Без этой строки</span> мы не сможем использовать <code className="bg-gray-700 px-1.5 py-0.5 rounded">printf</code> для вывода текста.
              </p>
            </div>
          </div>

          {/* Строка 2 */}
          <div className="bg-gray-900/50 p-5 rounded-xl border border-blue-700/30">
            <div className="flex items-center gap-3 mb-3">
              <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm font-mono">2</span>
              <code className="text-blue-300 font-mono">int main()</code>
            </div>
            <div className="text-gray-300">
              <p className="font-medium text-yellow-400 mb-2">Что это значит?</p>
              <p>
                Это <span className="font-medium">главная функция</span> программы. С неё начинается выполнение любой программы на C.
              </p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li><code className="bg-gray-700 px-1.5 py-0.5 rounded">int</code> — означает, что функция вернёт целое число (обычно 0 при успешном завершении)</li>
                <li><code className="bg-gray-700 px-1.5 py-0.5 rounded">main</code> — имя функции (всегда такое в C)</li>
                <li><code className="bg-gray-700 px-1.5 py-0.5 rounded">()</code> — скобки говорят, что это функция</li>
              </ul>
              <div className="mt-3 p-2 bg-blue-900/20 border border-blue-700/30 rounded text-blue-300 text-xs">
                ⚠️ <span className="font-medium">Важно:</span> Без функции <code className="bg-gray-700 px-1.5 py-0.5 rounded">main</code> программа не запустится!
              </div>
            </div>
          </div>

          {/* Строка 3 */}
          <div className="bg-gray-900/50 p-5 rounded-xl border border-purple-700/30">
            <div className="flex items-center gap-3 mb-3">
              <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm font-mono">3</span>
              <code className="text-purple-300 font-mono">{`{`}</code>
            </div>
            <div className="text-gray-300">
              <p className="font-medium text-yellow-400 mb-2">Что это значит?</p>
              <p>
                Открывающая фигурная скобка <code className="bg-gray-700 px-1.5 py-0.5 rounded">{`{`}</code> показывает начало тела функции <code className="bg-gray-700 px-1.5 py-0.5 rounded">main</code>.
              </p>
              <p>
                Всё, что находится между <code className="bg-gray-700 px-1.5 py-0.5 rounded">{`{`}</code> и <code className="bg-gray-700 px-1.5 py-0.5 rounded">{`}`}</code> — это команды, которые будет выполнять программа.
              </p>
            </div>
          </div>

          {/* Строка 4 */}
          <div className="bg-gray-900/50 p-5 rounded-xl border border-orange-700/30">
            <div className="flex items-center gap-3 mb-3">
              <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm font-mono">4</span>
              <code className="text-orange-300 font-mono">printf("Hello, Proletariat!\\n");</code>
            </div>
            <div className="text-gray-300">
              <p className="font-medium text-yellow-400 mb-2">Что это значит?</p>
              <p>
                Это <span className="font-medium">функция вывода текста</span> на экран.
              </p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li><code className="bg-gray-700 px-1.5 py-0.5 rounded">printf</code> — команда для вывода текста</li>
                <li><code className="bg-gray-700 px-1.5 py-0.5 rounded">"Hello, Proletariat!\\n"</code> — текст, который будет выведен</li>
                <li><code className="bg-gray-700 px-1.5 py-0.5 rounded">\\n</code> — символ новой строки (переводит курсор на следующую строку)</li>
                <li><code className="bg-gray-700 px-1.5 py-0.5 rounded">;</code> — точка с запятой завершает команду (обязательно в C!)</li>
              </ul>
              <div className="mt-3 p-2 bg-orange-900/20 border border-orange-700/30 rounded text-orange-300 text-xs">
                🔍 <span className="font-medium">Обратите внимание:</span> Текст всегда заключается в двойные кавычки!
              </div>
            </div>
          </div>

          {/* Строка 5 */}
          <div className="bg-gray-900/50 p-5 rounded-xl border border-cyan-700/30">
            <div className="flex items-center gap-3 mb-3">
              <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm font-mono">5</span>
              <code className="text-cyan-300 font-mono">return 0;</code>
            </div>
            <div className="text-gray-300">
              <p className="font-medium text-yellow-400 mb-2">Что это значит?</p>
              <p>
                Эта команда <span className="font-medium">возвращает значение</span> из функции <code className="bg-gray-700 px-1.5 py-0.5 rounded">main</code>.
              </p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li><code className="bg-gray-700 px-1.5 py-0.5 rounded">return</code> — команда возврата значения</li>
                <li><code className="bg-gray-700 px-1.5 py-0.5 rounded">0</code> — означает успешное завершение программы</li>
              </ul>
              <p className="mt-2">
                Операционная система проверяет это значение, чтобы понять, успешно ли завершилась программа.
              </p>
            </div>
          </div>

          {/* Строка 6 */}
          <div className="bg-gray-900/50 p-5 rounded-xl border border-red-700/30">
            <div className="flex items-center gap-3 mb-3">
              <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm font-mono">6</span>
              <code className="text-red-300 font-mono">{`}`}</code>
            </div>
            <div className="text-gray-300">
              <p className="font-medium text-yellow-400 mb-2">Что это значит?</p>
              <p>
                Закрывающая фигурная скобка <code className="bg-gray-700 px-1.5 py-0.5 rounded">{`}`}</code> показывает конец тела функции <code className="bg-gray-700 px-1.5 py-0.5 rounded">main</code>.
              </p>
              <p>
                Каждая открывающая скобка должна иметь свою закрывающую — это правило хорошего стиля и правильной работы программы.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Процесс компиляции и запуска */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Terminal className="w-5 h-5 text-blue-400" />
          Как компилировать и запускать программу?
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            После написания кода нужно превратить его в программу, которую может выполнить компьютер:
          </p>
        </div>

        <div className="mt-6 space-y-6">
          <div className="bg-gray-900/50 p-5 rounded-xl border border-green-700/30">
            <h3 className="font-bold text-green-300 mb-3 flex items-center gap-2">
              <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">1</span>
              Компиляция
            </h3>
            <p className="text-gray-300 mb-3">
              Откройте терминал в папке с файлом <code className="bg-gray-700 px-1.5 py-0.5 rounded">main.c</code> и выполните команду:
            </p>
            <div className="bg-gray-800 p-3 rounded-lg">
              <pre className="text-green-300 text-sm">
                <code>gcc main.c -o hello</code>
              </pre>
            </div>
            <div className="mt-3 text-sm text-gray-400">
              <p><span className="text-yellow-400">💡 Объяснение:</span></p>
              <p><code className="text-gray-300">gcc</code> — вызов компилятора</p>
              <p><code className="text-gray-300">main.c</code> — имя исходного файла</p>
              <p><code className="text-gray-300">-o hello</code> — создать исполняемый файл с именем "hello"</p>
            </div>
          </div>

          <div className="bg-gray-900/50 p-5 rounded-xl border border-blue-700/30">
            <h3 className="font-bold text-blue-300 mb-3 flex items-center gap-2">
              <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">2</span>
              Запуск
            </h3>
            <p className="text-gray-300 mb-3">
              После успешной компиляции запустите программу командой:
            </p>
            <div className="bg-gray-800 p-3 rounded-lg">
              <pre className="text-green-300 text-sm">
                <code>./hello</code>
              </pre>
            </div>
            <p className="text-gray-300 mt-3">
              Вы должны увидеть в терминале:
            </p>
            <div className="bg-black p-3 rounded-lg mt-2">
              <pre className="text-white">
                <code>Hello, Proletariat!</code>
              </pre>
            </div>
          </div>
        </div>

        <div className="mt-6 p-4 bg-red-900/20 border border-red-700/30 rounded-lg flex items-start gap-2">
          <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
          <div className="text-red-300 text-sm">
            <p className="font-medium mb-1">⚠️ Возможные ошибки:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Если видите "command not found" — GCC не установлен</li>
              <li>Если видите ошибки компиляции — проверьте синтаксис кода</li>
              <li>Если файл не запускается — убедитесь, что он существует и имеет права на выполнение</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Заключение */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <div className="flex items-start gap-3">
          <div className="bg-green-500/20 p-2 rounded-lg flex-shrink-0">
            <Play className="w-5 h-5 text-green-400" />
          </div>
          <div>
            <h3 className="font-bold text-white mb-2">Поздравляем! 🎉</h3>
            <p className="text-gray-300">
              Вы только что написали, скомпилировали и запустили свою первую программу на C! Теперь вы знаете, что такое компиляция, как работает функция <code className="bg-gray-700 px-1.5 py-0.5 rounded">main</code> и как выводить текст на экран.
              В следующем уроке мы подробнее разберём структуру программы и научимся работать с переменными.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Part1;