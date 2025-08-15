// src/data/courses/c/lesson5/part3.jsx
import React, { useState } from 'react';
import { Monitor, FileText, Play, Code, Edit3, Eye, CheckCircle, Terminal } from 'lucide-react';

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
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">💻 Практическое задание: Выводим данные с помощью printf()</h1>
            <p className="text-gray-300">
              <span className="font-medium text-yellow-400">🎯 Цель:</span> На практике освоить использование функции printf() для вывода переменных разных типов.
            </p>
          </div>
        </div>
      </div>

      {/* Задание 1: Вывод переменных разных типов */}
      <div className={`bg-gray-800/40 backdrop-blur-sm border rounded-2xl p-6 shadow-xl ${completedTasks.task1 ? 'border-green-700/50' : 'border-gray-700/50'}`}>
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <FileText className="w-5 h-5 text-green-400" />
          Задание 1: Создайте программу с переменными всех типов и выведите их
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Создайте программу, которая объявляет переменные всех изученных типов и выводит их значения:
          </p>
        </div>
        <div className="mt-6 space-y-6">
          <div className="bg-gray-900/50 p-5 rounded-xl border border-green-700/30">
            <h3 className="font-bold text-green-300 mb-3 flex items-center gap-2">
              <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">1</span>
              Создайте файл вывода
            </h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>Создайте файл <code className="bg-gray-700 px-1.5 py-0.5 rounded">output_test.c</code></li>
              <li>Подключите необходимую библиотеку <code className="bg-gray-700 px-1.5 py-0.5 rounded">{`#include <stdio.h>`}</code></li>
            </ul>
          </div>
          
          <div className="bg-gray-900/50 p-5 rounded-xl border border-blue-700/30">
            <h3 className="font-bold text-blue-300 mb-3 flex items-center gap-2">
              <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">2</span>
              Объявите и выведите переменные
            </h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>Объявите переменные всех типов с осмысленными значениями</li>
              <li>Выведите каждую переменную с поясняющим текстом</li>
              <li>Используйте правильные спецификаторы для каждого типа</li>
            </ul>
            <div className="bg-gray-800 p-4 rounded-lg mt-3 text-sm">
              <pre className="text-green-300">
{`#include <stdio.h>

int main() {
    // Объявляем переменные
    int age = 25;
    float height = 175.5;
    char grade = 'A';
    double pi = 3.14159;
    
    // Выводим значения
    printf("Возраст: %d лет\\n", age);
    printf("Рост: %.1f см\\n", height);
    printf("Оценка: %c\\n", grade);
    printf("Число Пи: %.5f\\n", pi);
    
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
            Я создал программу с выводом переменных всех типов
          </label>
          {completedTasks.task1 && <CheckCircle className="ml-2 w-5 h-5 text-green-400" />}
        </div>
      </div>

      {/* Задание 2: Эксперименты с форматированием */}
      <div className={`bg-gray-800/40 backdrop-blur-sm border rounded-2xl p-6 shadow-xl ${completedTasks.task2 ? 'border-green-700/50' : 'border-gray-700/50'}`}>
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Edit3 className="w-5 h-5 text-purple-400" />
          Задание 2: Поэкспериментируйте с форматированием чисел
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Попробуйте разные способы форматирования чисел с помощью спецификаторов:
          </p>
        </div>
        <div className="mt-6 space-y-6">
          <div className="bg-gray-900/50 p-5 rounded-xl border border-purple-700/30">
            <h3 className="font-bold text-purple-300 mb-3">Попробуйте следующее:</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>Создайте переменную типа <code className="bg-gray-700 px-1.5 py-0.5 rounded">float</code> со значением 123.456</li>
              <li>Выведите это число с разным количеством знаков после запятой: <code className="bg-gray-700 px-1.5 py-0.5 rounded">%f</code>, <code className="bg-gray-700 px-1.5 py-0.5 rounded">%.1f</code>, <code className="bg-gray-700 px-1.5 py-0.5 rounded">%.2f</code>, <code className="bg-gray-700 px-1.5 py-0.5 rounded">%.0f</code></li>
              <li>Создайте переменную типа <code className="bg-gray-700 px-1.5 py-0.5 rounded">int</code> и выведите её с разной шириной поля: <code className="bg-gray-700 px-1.5 py-0.5 rounded">%d</code>, <code className="bg-gray-700 px-1.5 py-0.5 rounded">%5d</code>, <code className="bg-gray-700 px-1.5 py-0.5 rounded">%05d</code></li>
              <li>Сравните результаты и понаблюдайте за форматированием</li>
            </ul>
            <div className="mt-4 bg-gray-800 p-3 rounded">
              <pre className="text-purple-300 text-sm">
{`float number = 123.456;
int integer = 42;

printf("Обычный вывод: %f и %d\\n", number, integer);
printf("С 2 знаками: %.2f\\n", number);
printf("Ширина 8: %8.2f\\n", number);
printf("Ширина 5: %5d\\n", integer);
printf("С нулями: %05d\\n", integer);`}
              </pre>
            </div>
            <div className="mt-4 p-3 bg-blue-900/20 border border-blue-700/30 rounded-lg">
              <p className="text-blue-300 text-sm">
                💡 <span className="font-medium">Совет:</span> Обратите внимание, как меняется вывод при разных форматах. Это поможет вам создавать красиво оформленные программы.
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
            Я поэкспериментировал с форматированием чисел
          </label>
          {completedTasks.task2 && <CheckCircle className="ml-2 w-5 h-5 text-green-400" />}
        </div>
      </div>

      {/* Задание 3: Вывод нескольких переменных в одной строке */}
      <div className={`bg-gray-800/40 backdrop-blur-sm border rounded-2xl p-6 shadow-xl ${completedTasks.task3 ? 'border-green-700/50' : 'border-gray-700/50'}`}>
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Terminal className="w-5 h-5 text-cyan-400" />
          Задание 3: Выведите несколько переменных в одном printf()
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Научитесь выводить несколько переменных в одной строке:
          </p>
        </div>
        <div className="mt-6 space-y-6">
          <div className="bg-gray-900/50 p-5 rounded-xl border border-cyan-700/30">
            <h3 className="font-bold text-cyan-300 mb-3">Попробуйте следующее:</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>Создайте три переменные разных типов (например, <code className="bg-gray-700 px-1.5 py-0.5 rounded">int</code>, <code className="bg-gray-700 px-1.5 py-0.5 rounded">float</code>, <code className="bg-gray-700 px-1.5 py-0.5 rounded">char</code>)</li>
              <li>Выведите их все в одной строке с поясняющим текстом</li>
              <li>Убедитесь, что порядок переменных соответствует порядку спецификаторов</li>
              <li>Попробуйте изменить порядок спецификаторов и посмотрите, что произойдет</li>
            </ul>
            <div className="mt-4 bg-gray-800 p-3 rounded">
              <pre className="text-cyan-300 text-sm">
{`#include <stdio.h>

int main() {
    int age = 30;
    float salary = 50000.75;
    char department = 'A';
    
    // Правильный порядок
    printf("Сотрудник: возраст %d, зарплата %.2f, отдел %c\\n", 
           age, salary, department);
    
    // Неправильный порядок (посмотрите, что будет)
    printf("Неправильный порядок: %d %.2f %c\\n", 
           salary, department, age); // ОШИБКА!
    
    return 0;
}`}
              </pre>
            </div>
            <div className="mt-4 p-3 bg-yellow-900/20 border border-yellow-700/30 rounded-lg">
              <p className="text-yellow-300 text-sm">
                ⚠️ <span className="font-medium">Важно:</span> Порядок переменных в printf() должен точно соответствовать порядку спецификаторов. Иначе вы получите непредсказуемые результаты!
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
            Я научился выводить несколько переменных в одном printf()
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
              Теперь вы уверенно можете выводить данные любых типов и форматировать их вывод. Это важный навык для создания понятных и профессиональных программ.
              В следующем уроке мы научимся вводить данные с клавиатуры.
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