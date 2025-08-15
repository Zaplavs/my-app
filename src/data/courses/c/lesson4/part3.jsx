// src/data/courses/c/lesson4/part3.jsx
import React, { useState } from 'react';
import { Monitor, FileText, Play, Code, Edit3, Database, CheckCircle } from 'lucide-react';

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
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">💻 Практическое задание: Работаем с переменными</h1>
            <p className="text-gray-300">
              <span className="font-medium text-yellow-400">🎯 Цель:</span> На практике освоить объявление переменных разных типов и понять, как они работают.
            </p>
          </div>
        </div>
      </div>

      {/* Задание 1: Создание переменных разных типов */}
      <div className={`bg-gray-800/40 backdrop-blur-sm border rounded-2xl p-6 shadow-xl ${completedTasks.task1 ? 'border-green-700/50' : 'border-gray-700/50'}`}>
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <FileText className="w-5 h-5 text-green-400" />
          Задание 1: Объявите переменные всех изученных типов
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Создайте новую программу и объявите в ней переменные всех типов, которые мы изучили:
          </p>
        </div>
        <div className="mt-6 space-y-6">
          <div className="bg-gray-900/50 p-5 rounded-xl border border-green-700/30">
            <h3 className="font-bold text-green-300 mb-3 flex items-center gap-2">
              <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">1</span>
              Создайте новый файл
            </h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>Создайте файл <code className="bg-gray-700 px-1.5 py-0.5 rounded">variables.c</code></li>
              <li>Добавьте стандартные директивы и функцию main()</li>
            </ul>
          </div>
          
          <div className="bg-gray-900/50 p-5 rounded-xl border border-blue-700/30">
            <h3 className="font-bold text-blue-300 mb-3 flex items-center gap-2">
              <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">2</span>
              Объявите переменные
            </h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>Объявите переменную типа <code className="bg-gray-700 px-1.5 py-0.5 rounded">int</code> с вашим возрастом</li>
              <li>Объявите переменную типа <code className="bg-gray-700 px-1.5 py-0.5 rounded">float</code> с вашим ростом в метрах</li>
              <li>Объявите переменную типа <code className="bg-gray-700 px-1.5 py-0.5 rounded">char</code> с первой буквой вашего имени</li>
              <li>Объявите переменную типа <code className="bg-gray-700 px-1.5 py-0.5 rounded">double</code> с числом Пи (3.14159265359)</li>
            </ul>
            <div className="bg-gray-800 p-4 rounded-lg mt-3 text-sm">
              <pre className="text-green-300">
{`#include <stdio.h>

int main() {
    int age = 25;
    float height = 1.75;
    char first_letter = 'A';
    double pi = 3.14159265359;
    
    return 0;
}`}
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
            Я объявил переменные всех четырех типов
          </label>
          {completedTasks.task1 && <CheckCircle className="ml-2 w-5 h-5 text-green-400" />}
        </div>
      </div>

      {/* Задание 2: Эксперименты с именами переменных */}
      <div className={`bg-gray-800/40 backdrop-blur-sm border rounded-2xl p-6 shadow-xl ${completedTasks.task2 ? 'border-green-700/50' : 'border-gray-700/50'}`}>
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Edit3 className="w-5 h-5 text-purple-400" />
          Задание 2: Попробуйте разные имена переменных
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Поэкспериментируйте с именами переменных, чтобы лучше понять правила именования:
          </p>
        </div>
        <div className="mt-6 space-y-6">
          <div className="bg-gray-900/50 p-5 rounded-xl border border-purple-700/30">
            <h3 className="font-bold text-purple-300 mb-3">Попробуйте следующее:</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>Создайте переменную с именем из нескольких слов, разделяя их подчеркиванием: <code className="bg-gray-700 px-1.5 py-0.5 rounded">my_age</code></li>
              <li>Создайте переменную, начинающуюся с подчеркивания: <code className="bg-gray-700 px-1.5 py-0.5 rounded">_temperature</code></li>
              <li>Создайте переменную с цифрами в имени: <code className="bg-gray-700 px-1.5 py-0.5 rounded">value2024</code></li>
              <li>Попробуйте создать переменную с именем, начинающимся с цифры (это должно вызвать ошибку)</li>
              <li>Попробуйте использовать в имени переменной специальный символ (например, дефис) - это тоже вызовет ошибку</li>
            </ul>
            <div className="mt-4 p-3 bg-blue-900/20 border border-blue-700/30 rounded-lg">
              <p className="text-blue-300 text-sm">
                💡 <span className="font-medium">Совет:</span> Обратите внимание, какие имена компилируются успешно, а какие вызывают ошибки. Это поможет запомнить правила именования.
              </p>
            </div>
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
            Я поэкспериментировал с именами переменных и понял правила
          </label>
          {completedTasks.task2 && <CheckCircle className="ml-2 w-5 h-5 text-green-400" />}
        </div>
      </div>

      {/* Задание 3: Работа с неинициализированными переменными */}
      <div className={`bg-gray-800/40 backdrop-blur-sm border rounded-2xl p-6 shadow-xl ${completedTasks.task3 ? 'border-green-700/50' : 'border-gray-700/50'}`}>
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Database className="w-5 h-5 text-cyan-400" />
          Задание 3: Сравните инициализированные и неинициализированные переменные
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Понаблюдайте за поведением переменных с и без начальных значений:
          </p>
        </div>
        <div className="mt-6 space-y-6">
          <div className="bg-gray-900/50 p-5 rounded-xl border border-cyan-700/30">
            <h3 className="font-bold text-cyan-300 mb-3">Попробуйте следующее:</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>Объявите две переменные типа <code className="bg-gray-700 px-1.5 py-0.5 rounded">int</code>: одну с начальным значением, другую без</li>
              <li>Попробуйте вывести обе переменные (мы пока не знаем, как это делать, но можно попробовать)</li>
              <li>Обратите внимание на предупреждения компилятора для неинициализированной переменной</li>
            </ul>
            <div className="bg-gray-800 p-4 rounded-lg mt-3 text-sm">
              <pre className="text-cyan-300">
{`#include <stdio.h>

int main() {
    int initialized = 100;      // Инициализированная переменная
    int uninitialized;          // Неинициализированная переменная
    
    // Пока просто объявим их - мы научимся выводить значения в следующем уроке
    
    return 0;
}`}
              </pre>
            </div>
            <div className="mt-4 p-3 bg-yellow-900/20 border border-yellow-700/30 rounded-lg">
              <p className="text-yellow-300 text-sm">
                ⚠️ <span className="font-medium">Важно:</span> Неинициализированные переменные содержат "мусорные" значения - случайные данные, которые были в памяти. Всегда инициализируйте переменные!
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
            Я сравнил поведение инициализированных и неинициализированных переменных
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
              Теперь вы умеете объявлять переменные разных типов, понимаете правила именования и знаете важность инициализации переменных. 
              В следующем уроке мы научимся выводить значения переменных и использовать их в программах.
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