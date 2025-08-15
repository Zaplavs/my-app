// src/data/courses/c/lesson8/part3.jsx
import React, { useState } from 'react';
import { Monitor, FileText, Play, Code, Edit3, Repeat, CheckCircle, ArrowRight } from 'lucide-react';

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
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">💻 Практическое задание: Циклы while и for</h1>
            <p className="text-gray-300">
              <span className="font-medium text-yellow-400">🎯 Цель:</span> На практике освоить использование циклов для повторения действий и автоматизации задач.
            </p>
          </div>
        </div>
      </div>

      {/* Задание 1: Простой цикл for */}
      <div className={`bg-gray-800/40 backdrop-blur-sm border rounded-2xl p-6 shadow-xl ${completedTasks.task1 ? 'border-green-700/50' : 'border-gray-700/50'}`}>
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <FileText className="w-5 h-5 text-green-400" />
          Задание 1: Вывод последовательности чисел
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Создайте программу, которая выводит числа от 1 до 10 с помощью цикла for:
          </p>
        </div>
        <div className="mt-6 space-y-6">
          <div className="bg-gray-900/50 p-5 rounded-xl border border-green-700/30">
            <h3 className="font-bold text-green-300 mb-3 flex items-center gap-2">
              <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">1</span>
              Создайте файл с циклом for
            </h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>Создайте файл <code className="bg-gray-700 px-1.5 py-0.5 rounded">numbers_for.c</code></li>
              <li>Используйте цикл <code className="bg-gray-700 px-1.5 py-0.5 rounded">for</code> для вывода чисел от 1 до 10</li>
              <li>Выводите каждое число на новой строке</li>
              <li>Добавьте поясняющий текст перед каждым числом</li>
            </ul>
          </div>
          
          <div className="bg-gray-900/50 p-5 rounded-xl border border-blue-700/30">
            <h3 className="font-bold text-blue-300 mb-3 flex items-center gap-2">
              <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">2</span>
              Пример реализации
            </h3>
            <div className="bg-gray-800 p-4 rounded-lg mt-3 text-sm">
              <pre className="text-green-300">
{`#include <stdio.h>

int main() {
    printf("Числа от 1 до 10:\\n");
    
    for (int i = 1; i <= 10; i++) {
        printf("Число: %d\\n", i);
    }
    
    return 0;
}`}
              </pre>
            </div>
            <div className="mt-3 p-3 bg-black rounded text-sm">
              <p className="text-white">Ожидаемый вывод:</p>
              <p className="text-gray-300">
                Числа от 1 до 10:<br/>
                Число: 1<br/>
                Число: 2<br/>
                Число: 3<br/>
                ...<br/>
                Число: 10
              </p>
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
            Я создал программу с циклом for для вывода чисел
          </label>
          {completedTasks.task1 && <CheckCircle className="ml-2 w-5 h-5 text-green-400" />}
        </div>
      </div>

      {/* Задание 2: Цикл while с пользовательским вводом */}
      <div className={`bg-gray-800/40 backdrop-blur-sm border rounded-2xl p-6 shadow-xl ${completedTasks.task2 ? 'border-green-700/50' : 'border-gray-700/50'}`}>
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Edit3 className="w-5 h-5 text-purple-400" />
          Задание 2: Цикл while с вводом пользователя
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Создайте программу, которая запрашивает у пользователя числа до тех пор, пока он не введет 0:
          </p>
        </div>
        <div className="mt-6 space-y-6">
          <div className="bg-gray-900/50 p-5 rounded-xl border border-purple-700/30">
            <h3 className="font-bold text-purple-300 mb-3">Реализуйте следующее:</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>Создайте файл <code className="bg-gray-700 px-1.5 py-0.5 rounded">input_while.c</code></li>
              <li>Используйте цикл <code className="bg-gray-700 px-1.5 py-0.5 rounded">while</code></li>
              <li>Объявите переменную для хранения введенного числа</li>
              <li>Выводите приглашение к вводу в теле цикла</li>
              <li>Цикл продолжается, пока пользователь не введет 0</li>
              <li>После ввода каждого числа выводите его обратно</li>
            </ul>
            <div className="mt-4 bg-gray-800 p-3 rounded">
              <pre className="text-purple-300 text-sm">
{`#include <stdio.h>

int main() {
    int number;
    
    printf("Введите числа (0 для выхода):\\n");
    
    printf("Введите число: ");
    scanf("%d", &number);
    
    while (number != 0) {
        printf("Вы ввели: %d\\n", number);
        printf("Введите число: ");
        scanf("%d", &number);
    }
    
    printf("Программа завершена!\\n");
    
    return 0;
}`}
              </pre>
            </div>
            <div className="mt-4 p-3 bg-blue-900/20 border border-blue-700/30 rounded-lg">
              <p className="text-blue-300 text-sm">
                💡 <span className="font-medium">Совет:</span> Обратите внимание, что первый ввод происходит до цикла, а последующие — внутри цикла!
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
            Я создал программу с циклом while и пользовательским вводом
          </label>
          {completedTasks.task2 && <CheckCircle className="ml-2 w-5 h-5 text-green-400" />}
        </div>
      </div>

      {/* Задание 3: Сравнение циклов и суммирование */}
      <div className={`bg-gray-800/40 backdrop-blur-sm border rounded-2xl p-6 shadow-xl ${completedTasks.task3 ? 'border-green-700/50' : 'border-gray-700/50'}`}>
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Repeat className="w-5 h-5 text-cyan-400" />
          Задание 3: Суммирование чисел двумя способами
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Создайте две программы для суммирования чисел от 1 до N — одну с циклом for, другую с циклом while:
          </p>
        </div>
        <div className="mt-6 space-y-6">
          <div className="bg-gray-900/50 p-5 rounded-xl border border-cyan-700/30">
            <h3 className="font-bold text-cyan-300 mb-3">Реализуйте следующее:</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>Создайте файл <code className="bg-gray-700 px-1.5 py-0.5 rounded">sum_for.c</code> с циклом for</li>
              <li>Создайте файл <code className="bg-gray-700 px-1.5 py-0.5 rounded">sum_while.c</code> с циклом while</li>
              <li>Запросите у пользователя число N</li>
              <li>Посчитайте сумму всех чисел от 1 до N</li>
              <li>Выведите результат</li>
              <li>Сравните, как выглядят обе реализации</li>
            </ul>
            <div className="mt-4 grid md:grid-cols-2 gap-4">
              <div className="bg-gray-800 p-3 rounded">
                <h4 className="text-green-300 font-medium mb-2">С циклом for:</h4>
                <pre className="text-green-300 text-xs">
{`#include <stdio.h>

int main() {
    int n, sum = 0;
    
    printf("Введите N: ");
    scanf("%d", &n);
    
    for (int i = 1; i <= n; i++) {
        sum += i;
    }
    
    printf("Сумма от 1 до %d = %d\\n", n, sum);
    
    return 0;
}`}
                </pre>
              </div>
              <div className="bg-gray-800 p-3 rounded">
                <h4 className="text-blue-300 font-medium mb-2">С циклом while:</h4>
                <pre className="text-blue-300 text-xs">
{`#include <stdio.h>

int main() {
    int n, sum = 0, i = 1;
    
    printf("Введите N: ");
    scanf("%d", &n);
    
    while (i <= n) {
        sum += i;
        i++;
    }
    
    printf("Сумма от 1 до %d = %d\\n", n, sum);
    
    return 0;
}`}
                </pre>
              </div>
            </div>
            <div className="mt-4 p-3 bg-yellow-900/20 border border-yellow-700/30 rounded-lg">
              <p className="text-yellow-300 text-sm">
                ⚠️ <span className="font-medium">Важно:</span> Обратите внимание, где объявляются переменные и где происходит изменение счетчика!
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
            Я создал две программы для суммирования разными способами
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
              Теперь вы уверенно можете использовать циклы for и while для автоматизации повторяющихся задач. 
              Вы понимаете разницу между ними и знаете, когда какой использовать.
              В следующем уроке мы научимся работать с массивами — структурами для хранения множества значений.
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