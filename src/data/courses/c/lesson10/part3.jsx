// src/data/courses/c/lesson10/part3.jsx
import React, { useState } from 'react';
import { Monitor, FileText, Play, Code, Edit3, Database, CheckCircle, Hash } from 'lucide-react';

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
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">💻 Практическое задание: Массивы в C</h1>
            <p className="text-gray-300">
              <span className="font-medium text-yellow-400">🎯 Цель:</span> На практике освоить создание, инициализацию и работу с массивами.
            </p>
          </div>
        </div>
      </div>

      {/* Задание 1: Создание и вывод массива */}
      <div className={`bg-gray-800/40 backdrop-blur-sm border rounded-2xl p-6 shadow-xl ${completedTasks.task1 ? 'border-green-700/50' : 'border-gray-700/50'}`}>
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <FileText className="w-5 h-5 text-green-400" />
          Задание 1: Массив температур
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Создайте программу для хранения и вывода температур за неделю:
          </p>
        </div>
        <div className="mt-6 space-y-6">
          <div className="bg-gray-900/50 p-5 rounded-xl border border-green-700/30">
            <h3 className="font-bold text-green-300 mb-3 flex items-center gap-2">
              <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">1</span>
              Создайте массив температур
            </h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>Создайте файл <code className="bg-gray-700 px-1.5 py-0.5 rounded">temperatures.c</code></li>
              <li>Создайте массив <code className="bg-gray-700 px-1.5 py-0.5 rounded">float temps[7]</code> для хранения температур</li>
              <li>Инициализируйте массив значениями: 22.5, 24.0, 21.8, 23.2, 25.1, 26.3, 24.7</li>
              <li>Выведите все температуры с помощью цикла <code className="bg-gray-700 px-1.5 py-0.5 rounded">for</code></li>
              <li>Каждая температура должна выводиться с пояснением дня недели</li>
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
    float temps[7] = {22.5, 24.0, 21.8, 23.2, 25.1, 26.3, 24.7};
    char days[7][12] = {"Понедельник", "Вторник", "Среда", 
                        "Четверг", "Пятница", "Суббота", "Воскресенье"};
    
    printf("Температуры за неделю:\\n");
    
    for (int i = 0; i < 7; i++) {
        printf("%-12s: %.1f°C\\n", days[i], temps[i]);
    }
    
    return 0;
}`}
              </pre>
            </div>
            <div className="mt-3 p-3 bg-black rounded text-sm">
              <p className="text-white">Ожидаемый вывод:</p>
              <p className="text-gray-300 text-xs">
                Температуры за неделю:<br/>
                Понедельник : 22.5°C<br/>
                Вторник     : 24.0°C<br/>
                Среда       : 21.8°C<br/>
                Четверг     : 23.2°C<br/>
                Пятница     : 25.1°C<br/>
                Суббота     : 26.3°C<br/>
                Воскресенье : 24.7°C
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
            Я создал программу с массивом температур
          </label>
          {completedTasks.task1 && <CheckCircle className="ml-2 w-5 h-5 text-green-400" />}
        </div>
      </div>

      {/* Задание 2: Работа с массивом чисел */}
      <div className={`bg-gray-800/40 backdrop-blur-sm border rounded-2xl p-6 shadow-xl ${completedTasks.task2 ? 'border-green-700/50' : 'border-gray-700/50'}`}>
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Edit3 className="w-5 h-5 text-purple-400" />
          Задание 2: Статистика оценок
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Создайте программу для анализа оценок студентов:
          </p>
        </div>
        <div className="mt-6 space-y-6">
          <div className="bg-gray-900/50 p-5 rounded-xl border border-purple-700/30">
            <h3 className="font-bold text-purple-300 mb-3">Реализуйте следующее:</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>Создайте файл <code className="bg-gray-700 px-1.5 py-0.5 rounded">grades.c</code></li>
              <li>Создайте массив <code className="bg-gray-700 px-1.5 py-0.5 rounded">int grades[10]</code> с оценками студентов</li>
              <li>Инициализируйте массив значениями: 85, 92, 78, 96, 88, 73, 89, 94, 81, 87</li>
              <li>Найдите и выведите: сумму всех оценок, среднюю оценку, максимальную и минимальную оценки</li>
              <li>Используйте циклы <code className="bg-gray-700 px-1.5 py-0.5 rounded">for</code> для обработки массива</li>
              <li>Подсчитайте количество студентов с оценкой выше средней</li>
            </ul>
            <div className="mt-4 bg-gray-800 p-3 rounded">
              <pre className="text-purple-300 text-sm">
{`#include <stdio.h>

int main() {
    int grades[10] = {85, 92, 78, 96, 88, 73, 89, 94, 81, 87};
    int sum = 0, max = grades[0], min = grades[0];
    float average;
    int above_average = 0;
    
    // Подсчет суммы
    for (int i = 0; i < 10; i++) {
        sum += grades[i];
    }
    
    average = (float)sum / 10;
    
    // Поиск максимума и минимума
    for (int i = 1; i < 10; i++) {
        if (grades[i] > max) max = grades[i];
        if (grades[i] < min) min = grades[i];
    }
    
    // Подсчет студентов выше среднего
    for (int i = 0; i < 10; i++) {
        if (grades[i] > average) above_average++;
    }
    
    printf("Статистика оценок:\\n");
    printf("Сумма: %d\\n", sum);
    printf("Средняя: %.1f\\n", average);
    printf("Максимальная: %d\\n", max);
    printf("Минимальная: %d\\n", min);
    printf("Выше среднего: %d студентов\\n", above_average);
    
    return 0;
}`}
              </pre>
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
            Я создал программу для анализа оценок
          </label>
          {completedTasks.task2 && <CheckCircle className="ml-2 w-5 h-5 text-green-400" />}
        </div>
      </div>

      {/* Задание 3: Интерактивная работа с массивом */}
      <div className={`bg-gray-800/40 backdrop-blur-sm border rounded-2xl p-6 shadow-xl ${completedTasks.task3 ? 'border-green-700/50' : 'border-gray-700/50'}`}>
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Database className="w-5 h-5 text-cyan-400" />
          Задание 3: Ввод данных в массив
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Создайте программу, которая позволяет пользователю вводить данные в массив:
          </p>
        </div>
        <div className="mt-6 space-y-6">
          <div className="bg-gray-900/50 p-5 rounded-xl border border-cyan-700/30">
            <h3 className="font-bold text-cyan-300 mb-3">Реализуйте следующее:</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>Создайте файл <code className="bg-gray-700 px-1.5 py-0.5 rounded">input_array.c</code></li>
              <li>Создайте массив <code className="bg-gray-700 px-1.5 py-0.5 rounded">int numbers[5]</code> для хранения чисел</li>
              <li>Запросите у пользователя 5 чисел и сохраните их в массив</li>
              <li>Выведите все введенные числа в обратном порядке</li>
              <li>Найдите и выведите сумму четных чисел в массиве</li>
              <li>Проверьте, есть ли в массиве число 42, и выведите соответствующее сообщение</li>
            </ul>
            <div className="mt-4 bg-gray-800 p-3 rounded">
              <pre className="text-cyan-300 text-xs">
{`#include <stdio.h>

int main() {
    int numbers[5];
    int sum_even = 0;
    int found_42 = 0;
    
    printf("Введите 5 чисел:\\n");
    
    // Ввод чисел
    for (int i = 0; i < 5; i++) {
        printf("Число %d: ", i + 1);
        scanf("%d", &numbers[i]);
    }
    
    printf("\\nВведенные числа в обратном порядке:\\n");
    for (int i = 4; i >= 0; i--) {
        printf("%d ", numbers[i]);
        
        // Проверка на четность
        if (numbers[i] % 2 == 0) {
            sum_even += numbers[i];
        }
        
        // Проверка на 42
        if (numbers[i] == 42) {
            found_42 = 1;
        }
    }
    
    printf("\\n\\nСумма четных чисел: %d\\n", sum_even);
    
    if (found_42) {
        printf("Число 42 найдено в массиве!\\n");
    } else {
        printf("Число 42 не найдено в массиве.\\n");
    }
    
    return 0;
}`}
              </pre>
            </div>
            <div className="mt-4 p-3 bg-yellow-900/20 border border-yellow-700/30 rounded-lg">
              <p className="text-yellow-300 text-sm">
                ⚠️ <span className="font-medium">Важно:</span> Обратите внимание на правильное использование & в scanf() и индексацию массива!
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
            Я создал программу с интерактивным вводом в массив
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
              Теперь вы уверенно можете создавать и работать с массивами в C. 
              Вы научились инициализировать массивы, обращаться к элементам по индексу, 
              использовать циклы для обработки массивов и вводить данные от пользователя в массивы.
              В следующем уроке мы научимся работать со строками как с массивами символов.
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