// src/data/courses/c/lesson3/part3.jsx
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
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">💻 Практическое задание: Модифицируем "Hello, Proletariat!"</h1>
            <p className="text-gray-300">
              <span className="font-medium text-yellow-400">🎯 Цель:</span> Закрепить знания о первой программе на C, изменяя текст и экспериментируя с выводом.
            </p>
          </div>
        </div>
      </div>

      {/* Задание 1: Изменение текста */}
      <div className={`bg-gray-800/40 backdrop-blur-sm border rounded-2xl p-6 shadow-xl ${completedTasks.task1 ? 'border-green-700/50' : 'border-gray-700/50'}`}>
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <FileText className="w-5 h-5 text-green-400" />
          Задание 1: Измените текст приветствия
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Откройте файл <code className="bg-gray-700 px-1.5 py-0.5 rounded">main.c</code> и измените текст в функции <code className="bg-gray-700 px-1.5 py-0.5 rounded">printf</code>:
          </p>
        </div>
        <div className="mt-6 space-y-6">
          <div className="bg-gray-900/50 p-5 rounded-xl border border-green-700/30">
            <h3 className="font-bold text-green-300 mb-3 flex items-center gap-2">
              <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">1</span>
              Откройте файл main.c
            </h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>Откройте ваш текстовый редактор</li>
              <li>Откройте файл <code className="bg-gray-700 px-1.5 py-0.5 rounded">main.c</code>, созданный на предыдущем уроке</li>
              <li>Найдите строку с <code className="bg-gray-700 px-1.5 py-0.5 rounded">printf</code></li>
            </ul>
          </div>
          
          <div className="bg-gray-900/50 p-5 rounded-xl border border-blue-700/30">
            <h3 className="font-bold text-blue-300 mb-3 flex items-center gap-2">
              <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">2</span>
              Измените текст
            </h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>Замените <code className="bg-gray-700 px-1.5 py-0.5 rounded">"Hello, Proletariat!\\n"</code> на любой другой текст</li>
              <li>Например: <code className="bg-gray-700 px-1.5 py-0.5 rounded">"Привет, мир!\\n"</code> или <code className="bg-gray-700 px-1.5 py-0.5 rounded">"Я изучаю C!\\n"</code></li>
              <li>Не забудьте оставить <code className="bg-gray-700 px-1.5 py-0.5 rounded">\\n</code> в конце для перевода строки</li>
            </ul>
            <div className="bg-gray-800 p-3 rounded-lg mt-3 text-sm">
              <pre className="text-green-300">
{`printf("Привет, мир!\\n");`}
              </pre>
            </div>
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
            Я изменил текст в printf и сохранил файл
          </label>
          {completedTasks.task1 && <CheckCircle className="ml-2 w-5 h-5 text-green-400" />}
        </div>
      </div>

      {/* Задание 2: Компиляция и запуск измененной программы */}
      <div className={`bg-gray-800/40 backdrop-blur-sm border rounded-2xl p-6 shadow-xl ${completedTasks.task2 ? 'border-green-700/50' : 'border-gray-700/50'}`}>
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Terminal className="w-5 h-5 text-purple-400" />
          Задание 2: Скомпилируйте и запустите измененную программу
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Теперь скомпилируйте измененную программу и убедитесь, что новый текст выводится правильно:
          </p>
        </div>
        <div className="mt-6 space-y-6">
          <div className="bg-gray-900/50 p-5 rounded-xl border border-purple-700/30">
            <h3 className="font-bold text-purple-300 mb-3 flex items-center gap-2">
              <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">1</span>
              Скомпилируйте программу
            </h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>Откройте терминал в папке с файлом <code className="bg-gray-700 px-1.5 py-0.5 rounded">main.c</code></li>
              <li>Выполните команду компиляции:</li>
            </ul>
            <div className="bg-gray-800 p-3 rounded-lg mt-3 text-sm">
              <pre className="text-green-300">
                gcc main.c -o hello
              </pre>
            </div>
          </div>
          
          <div className="bg-gray-900/50 p-5 rounded-xl border border-orange-700/30">
            <h3 className="font-bold text-orange-300 mb-3 flex items-center gap-2">
              <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">2</span>
              Запустите программу
            </h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>После успешной компиляции запустите программу:</li>
            </ul>
            <div className="bg-gray-800 p-3 rounded-lg mt-3 text-sm">
              <pre className="text-green-300">
                ./hello
              </pre>
            </div>
            <ul className="list-disc pl-6 space-y-2 text-gray-300 mt-3">
              <li>Убедитесь, что выводится ваш новый текст</li>
              <li>Проверьте, что курсор перешел на новую строку (благодаря <code className="bg-gray-700 px-1.5 py-0.5 rounded">\\n</code>)</li>
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
            Я скомпилировал и успешно запустил измененную программу
          </label>
          {completedTasks.task2 && <CheckCircle className="ml-2 w-5 h-5 text-green-400" />}
        </div>
      </div>

      {/* Задание 3: Эксперименты с выводом */}
      <div className={`bg-gray-800/40 backdrop-blur-sm border rounded-2xl p-6 shadow-xl ${completedTasks.task3 ? 'border-green-700/50' : 'border-gray-700/50'}`}>
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Edit3 className="w-5 h-5 text-cyan-400" />
          Задание 3: Добавьте несколько строк вывода
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Теперь попробуйте добавить несколько строк текста в вашу программу:
          </p>
        </div>
        <div className="mt-6 space-y-6">
          <div className="bg-gray-900/50 p-5 rounded-xl border border-cyan-700/30">
            <h3 className="font-bold text-cyan-300 mb-3">Попробуйте следующее:</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>Добавьте еще одну функцию <code className="bg-gray-700 px-1.5 py-0.5 rounded">printf</code> под первой</li>
              <li>Выведите несколько строк текста, например:</li>
            </ul>
            <div className="bg-gray-800 p-3 rounded-lg mt-3 text-sm">
              <pre className="text-green-300">
{`printf("Первая строка\\n");
printf("Вторая строка\\n");
printf("Третья строка\\n");`}
              </pre>
            </div>
            <ul className="list-disc pl-6 space-y-2 text-gray-300 mt-3">
              <li>Не забудьте поставить точку с запятой после каждой команды</li>
              <li>Убедитесь, что каждая строка заканчивается <code className="bg-gray-700 px-1.5 py-0.5 rounded">\\n</code></li>
              <li>Скомпилируйте и запустите программу, чтобы увидеть результат</li>
            </ul>
            <div className="mt-4 p-3 bg-blue-900/20 border border-blue-700/30 rounded-lg">
              <p className="text-blue-300 text-sm">
                💡 <span className="font-medium">Совет:</span> Вы можете экспериментировать с разным текстом и количеством строк. Главное — соблюдать синтаксис C!
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
            Я добавил несколько строк вывода и проверил результат
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
              Теперь вы уверенно можете создавать, изменять и запускать простые программы на C. Вы научились работать с функцией <code className="bg-gray-700 px-1.5 py-0.5 rounded">printf</code> и понимаете основы компиляции. В следующем уроке мы поговорим о переменных и типах данных в C.
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