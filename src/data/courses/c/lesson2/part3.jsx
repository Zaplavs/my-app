// src/data/courses/c/lesson2/part3.jsx
import React, { useState } from 'react';
import { Monitor, FileText, Play, Code, Download, Edit3, Terminal, CheckCircle } from 'lucide-react';

const Part3 = () => {
  const [completedTasks, setCompletedTasks] = useState({
    task1: false,
    task2: false,
    task3: false
  });

  const handleTaskComplete = (task) => {
    setCompletedTasks(prev => ({
      ...prev,
      [task]: !prev[task]
    }));
  };

  return (
    <div className="space-y-8 text-gray-200">
      {/* Вступление */}
      <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 backdrop-blur-sm border border-blue-700/30 rounded-2xl p-6 shadow-lg">
        <div className="flex items-start gap-4">
          <div className="bg-blue-500/20 p-3 rounded-lg">
            <Monitor className="w-6 h-6 text-blue-400" />
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">💻 Практическое задание: Создайте и запустите первую программу на C</h1>
            <p className="text-gray-300">
              <span className="font-medium text-yellow-400">🎯 Цель:</span> Применить полученные знания об установке GCC, создав и скомпилировав первую программу на C.
            </p>
          </div>
        </div>
      </div>

      {/* Задание 1: Создание файла */}
      <div className={`bg-gray-800/40 backdrop-blur-sm border rounded-2xl p-6 shadow-xl ${completedTasks.task1 ? 'border-green-700/50' : 'border-gray-700/50'}`}>
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <FileText className="w-5 h-5 text-green-400" />
          Задание 1: Создайте файл с первой программой
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Создайте на своем компьютере файл с первой программой на C:
          </p>
        </div>
        <div className="mt-6 space-y-6">
          <div className="bg-gray-900/50 p-5 rounded-xl border border-green-700/30">
            <h3 className="font-bold text-green-300 mb-3 flex items-center gap-2">
              <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">1</span>
              Создайте папку для проекта
            </h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>Создайте новую папку на рабочем столе или в домашней директории.</li>
              <li>Назовите её, например, <code className="bg-gray-700 px-1.5 py-0.5 rounded">my-first-c-program</code>.</li>
            </ul>
          </div>
          
          <div className="bg-gray-900/50 p-5 rounded-xl border border-blue-700/30">
            <h3 className="font-bold text-blue-300 mb-3 flex items-center gap-2">
              <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">2</span>
              Создайте файл с кодом
            </h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>Откройте текстовый редактор (Блокнот, VS Code, или любой другой).</li>
              <li>Создайте новый файл и вставьте в него следующий код:</li>
            </ul>
            <div className="bg-gray-800 p-4 rounded-lg mt-3 text-sm overflow-x-auto">
              <pre className="whitespace-pre-wrap text-gray-300">
{`#include <stdio.h>

int main() {
    printf("Привет, мир! Это моя первая программа на C!\\n");
    return 0;
}`}
              </pre>
            </div>
            <ul className="list-disc pl-6 space-y-2 text-gray-300 mt-3">
              <li>Сохраните файл как <code className="bg-gray-700 px-1.5 py-0.5 rounded">hello.c</code> в папке вашего проекта.</li>
              <li>Убедитесь, что расширение файла именно <code className="bg-gray-700 px-1.5 py-0.5 rounded">.c</code>, а не <code className="bg-gray-700 px-1.5 py-0.5 rounded">.txt</code>.</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-6 flex items-center">
          <input
            type="checkbox"
            id="task1"
            checked={completedTasks.task1}
            onChange={() => handleTaskComplete('task1')}
            className="w-5 h-5 text-blue-600 rounded focus:ring-blue-500"
          />
          <label htmlFor="task1" className="ml-2 text-gray-300">
            Я создал папку и файл с программой hello.c
          </label>
          {completedTasks.task1 && <CheckCircle className="ml-2 w-5 h-5 text-green-400" />}
        </div>
      </div>

      {/* Задание 2: Компиляция и запуск */}
      <div className={`bg-gray-800/40 backdrop-blur-sm border rounded-2xl p-6 shadow-xl ${completedTasks.task2 ? 'border-green-700/50' : 'border-gray-700/50'}`}>
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Terminal className="w-5 h-5 text-purple-400" />
          Задание 2: Скомпилируйте и запустите программу
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Теперь пора превратить ваш код в исполняемую программу!
          </p>
        </div>
        <div className="mt-6 space-y-6">
          <div className="bg-gray-900/50 p-5 rounded-xl border border-purple-700/30">
            <h3 className="font-bold text-purple-300 mb-3 flex items-center gap-2">
              <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">1</span>
              Откройте терминал/командную строку
            </h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li><span className="font-medium">Windows:</span> Откройте Командную строку (cmd) или PowerShell</li>
              <li><span className="font-medium">Linux/macOS:</span> Откройте Терминал</li>
              <li>Перейдите в папку с вашим проектом с помощью команды <code className="bg-gray-700 px-1.5 py-0.5 rounded">cd</code>:</li>
            </ul>
            <div className="bg-gray-800 p-3 rounded-lg mt-3 text-sm">
              <pre className="text-green-300">
                cd путь/к/вашей/папке/my-first-c-program
              </pre>
            </div>
          </div>
          
          <div className="bg-gray-900/50 p-5 rounded-xl border border-orange-700/30">
            <h3 className="font-bold text-orange-300 mb-3 flex items-center gap-2">
              <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">2</span>
              Скомпилируйте программу
            </h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>Введите команду для компиляции:</li>
            </ul>
            <div className="bg-gray-800 p-3 rounded-lg mt-3 text-sm">
              <pre className="text-green-300">
                gcc hello.c -o hello
              </pre>
            </div>
            <ul className="list-disc pl-6 space-y-2 text-gray-300 mt-3">
              <li><code className="bg-gray-700 px-1.5 py-0.5 rounded">gcc</code> — команда для запуска компилятора</li>
              <li><code className="bg-gray-700 px-1.5 py-0.5 rounded">hello.c</code> — имя исходного файла</li>
              <li><code className="bg-gray-700 px-1.5 py-0.5 rounded">-o hello</code> — указывает имя выходного исполняемого файла</li>
            </ul>
          </div>

          <div className="bg-gray-900/50 p-5 rounded-xl border border-cyan-700/30">
            <h3 className="font-bold text-cyan-300 mb-3 flex items-center gap-2">
              <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">3</span>
              Запустите программу
            </h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>После успешной компиляции в папке появится исполняемый файл</li>
              <li>Запустите программу командой:</li>
            </ul>
            <div className="bg-gray-800 p-3 rounded-lg mt-3 text-sm">
              <p className="text-gray-300 mb-2"><span className="font-medium">Linux/macOS:</span></p>
              <pre className="text-green-300 mb-3">
                ./hello
              </pre>
              <p className="text-gray-300 mb-2"><span className="font-medium">Windows:</span></p>
              <pre className="text-green-300">
                hello.exe
              </pre>
            </div>
            <ul className="list-disc pl-6 space-y-2 text-gray-300 mt-3">
              <li>Вы должны увидеть сообщение: <code className="bg-gray-700 px-1.5 py-0.5 rounded">Привет, мир! Это моя первая программа на C!</code></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-6 flex items-center">
          <input
            type="checkbox"
            id="task2"
            checked={completedTasks.task2}
            onChange={() => handleTaskComplete('task2')}
            className="w-5 h-5 text-blue-600 rounded focus:ring-blue-500"
          />
          <label htmlFor="task2" className="ml-2 text-gray-300">
            Я скомпилировал и успешно запустил программу
          </label>
          {completedTasks.task2 && <CheckCircle className="ml-2 w-5 h-5 text-green-400" />}
        </div>
      </div>

      {/* Задание 3: Эксперименты */}
      <div className={`bg-gray-800/40 backdrop-blur-sm border rounded-2xl p-6 shadow-xl ${completedTasks.task3 ? 'border-green-700/50' : 'border-gray-700/50'}`}>
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Edit3 className="w-5 h-5 text-cyan-400" />
          Задание 3: Поэкспериментируйте с кодом
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Теперь, когда программа работает, попробуйте изменить код и посмотрите, что произойдет:
          </p>
        </div>
        <div className="mt-6 space-y-6">
          <div className="bg-gray-900/50 p-5 rounded-xl border border-cyan-700/30">
            <h3 className="font-bold text-cyan-300 mb-3">Попробуйте следующее:</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>Измените текст в функции <code className="bg-gray-700 px-1.5 py-0.5 rounded">printf</code> на любой другой.</li>
              <li>Добавьте еще одну строку с <code className="bg-gray-700 px-1.5 py-0.5 rounded">printf</code> для вывода второго сообщения.</li>
              <li>Попробуйте убрать точку с запятой в конце строки — что произойдет?</li>
              <li>Измените <code className="bg-gray-700 px-1.5 py-0.5 rounded">return 0;</code> на <code className="bg-gray-700 px-1.5 py-0.5 rounded">return 1;</code> — заметите ли разницу?</li>
            </ul>
            <div className="mt-4 p-3 bg-blue-900/20 border border-blue-700/30 rounded-lg">
              <p className="text-blue-300 text-sm">
                💡 <span className="font-medium">Совет:</span> После каждого изменения сохраняйте файл, перекомпилируйте его командой <code className="bg-gray-700 px-1.5 py-0.5 rounded">gcc hello.c -o hello</code> и запускайте снова, чтобы увидеть изменения.
              </p>
            </div>
          </div>
        </div>
        
        <div className="mt-6 flex items-center">
          <input
            type="checkbox"
            id="task3"
            checked={completedTasks.task3}
            onChange={() => handleTaskComplete('task3')}
            className="w-5 h-5 text-blue-600 rounded focus:ring-blue-500"
          />
          <label htmlFor="task3" className="ml-2 text-gray-300">
            Я поэкспериментировал с кодом и увидел результаты
          </label>
          {completedTasks.task3 && <CheckCircle className="ml-2 w-5 h-5 text-green-400" />}
        </div>
      </div>

      {/* Заключение */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <div className="flex items-start gap-3">
          <div className="bg-green-500/20 p-2 rounded-lg flex-shrink-0">
            <CheckCircle className="w-5 h-5 text-green-400" />
          </div>
          <div>
            <h3 className="font-bold text-white mb-2">Отличная работа! 🎉</h3>
            <p className="text-gray-300">
              Теперь вы умеете создавать программы на C, компилировать их с помощью GCC и запускать в терминале. Это ключевой навык для любого программиста на C! В следующем уроке мы изучим структуру программы на C и основные элементы синтаксиса.
            </p>
            {Object.values(completedTasks).every(task => task) && (
              <div className="mt-3 p-3 bg-green-900/20 border border-green-700/30 rounded-lg flex items-center">
                <CheckCircle className="w-5 h-5 text-green-400 mr-2 flex-shrink-0" />
                <span className="text-green-300">Все задания выполнены! Вы готовы к следующему уроку.</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Part3;