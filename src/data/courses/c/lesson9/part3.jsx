// src/data/courses/c/lesson9/part3.jsx
import React, { useState } from 'react';
import { Monitor, FileText, Play, Code, Edit3, FunctionSquare, CheckCircle, Box } from 'lucide-react';

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
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">💻 Практическое задание: Функции в C</h1>
            <p className="text-gray-300">
              <span className="font-medium text-yellow-400">🎯 Цель:</span> На практике освоить создание и использование функций для структурирования кода.
            </p>
          </div>
        </div>
      </div>

      {/* Задание 1: Простая функция без параметров */}
      <div className={`bg-gray-800/40 backdrop-blur-sm border rounded-2xl p-6 shadow-xl ${completedTasks.task1 ? 'border-green-700/50' : 'border-gray-700/50'}`}>
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <FileText className="w-5 h-5 text-green-400" />
          Задание 1: Создание функции приветствия
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Создайте программу с функцией, которая выводит приветственное сообщение:
          </p>
        </div>
        <div className="mt-6 space-y-6">
          <div className="bg-gray-900/50 p-5 rounded-xl border border-green-700/30">
            <h3 className="font-bold text-green-300 mb-3 flex items-center gap-2">
              <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">1</span>
              Создайте файл с функцией приветствия
            </h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>Создайте файл <code className="bg-gray-700 px-1.5 py-0.5 rounded">greeting.c</code></li>
              <li>Создайте функцию <code className="bg-gray-700 px-1.5 py-0.5 rounded">void printGreeting()</code> без параметров</li>
              <li>Функция должна выводить приветственное сообщение</li>
              <li>Вызовите эту функцию несколько раз в <code className="bg-gray-700 px-1.5 py-0.5 rounded">main()</code></li>
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

// Функция без параметров и без возвращаемого значения
void printGreeting() {
    printf("===================\\n");
    printf("  Добро пожаловать!\\n");
    printf("  Начинаем работу!\\n");
    printf("===================\\n");
}

int main() {
    printGreeting();  // Первый вызов
    printf("Выполняем какие-то действия...\\n");
    printGreeting();  // Второй вызов
    
    return 0;
}`}
              </pre>
            </div>
            <div className="mt-3 p-3 bg-black rounded text-sm">
              <p className="text-white">Ожидаемый вывод:</p>
              <p className="text-gray-300 text-xs">
                ===================<br/>
                &nbsp;&nbsp;Добро пожаловать!<br/>
                &nbsp;&nbsp;Начинаем работу!<br/>
                ===================<br/>
                Выполняем какие-то действия...<br/>
                ===================<br/>
                &nbsp;&nbsp;Добро пожаловать!<br/>
                &nbsp;&nbsp;Начинаем работу!<br/>
                ===================
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
            Я создал программу с функцией приветствия
          </label>
          {completedTasks.task1 && <CheckCircle className="ml-2 w-5 h-5 text-green-400" />}
        </div>
      </div>

      {/* Задание 2: Функция с параметрами и возвращаемым значением */}
      <div className={`bg-gray-800/40 backdrop-blur-sm border rounded-2xl p-6 shadow-xl ${completedTasks.task2 ? 'border-green-700/50' : 'border-gray-700/50'}`}>
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Edit3 className="w-5 h-5 text-purple-400" />
          Задание 2: Математические функции
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Создайте программу с несколькими математическими функциями:
          </p>
        </div>
        <div className="mt-6 space-y-6">
          <div className="bg-gray-900/50 p-5 rounded-xl border border-purple-700/30">
            <h3 className="font-bold text-purple-300 mb-3">Реализуйте следующее:</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>Создайте файл <code className="bg-gray-700 px-1.5 py-0.5 rounded">math_functions.c</code></li>
              <li>Создайте функцию <code className="bg-gray-700 px-1.5 py-0.5 rounded">int square(int number)</code> для возведения в квадрат</li>
              <li>Создайте функцию <code className="bg-gray-700 px-1.5 py-0.5 rounded">int max(int a, int b)</code> для нахождения большего числа</li>
              <li>Создайте функцию <code className="bg-gray-700 px-1.5 py-0.5 rounded">float average(int a, int b)</code> для нахождения среднего</li>
              <li>Используйте прототипы функций перед <code className="bg-gray-700 px-1.5 py-0.5 rounded">main()</code></li>
              <li>Протестируйте все функции в <code className="bg-gray-700 px-1.5 py-0.5 rounded">main()</code></li>
            </ul>
            <div className="mt-4 bg-gray-800 p-3 rounded">
              <pre className="text-purple-300 text-sm">
{`#include <stdio.h>

// Прототипы функций
int square(int number);
int max(int a, int b);
float average(int a, int b);

int main() {
    int num1 = 5, num2 = 8;
    
    printf("Квадрат %d = %d\\n", num1, square(num1));
    printf("Квадрат %d = %d\\n", num2, square(num2));
    
    printf("Большее из %d и %d = %d\\n", num1, num2, max(num1, num2));
    
    printf("Среднее %d и %d = %.2f\\n", num1, num2, average(num1, num2));
    
    return 0;
}

// Определения функций
int square(int number) {
    return number * number;
}

int max(int a, int b) {
    if (a > b) {
        return a;
    } else {
        return b;
    }
}

float average(int a, int b) {
    return (float)(a + b) / 2;
}`}
              </pre>
            </div>
            <div className="mt-4 p-3 bg-blue-900/20 border border-blue-700/30 rounded-lg">
              <p className="text-blue-300 text-sm">
                💡 <span className="font-medium">Совет:</span> Обратите внимание на приведение типов в функции average() — без (float) результат будет целочисленным!
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
            Я создал программу с математическими функциями
          </label>
          {completedTasks.task2 && <CheckCircle className="ml-2 w-5 h-5 text-green-400" />}
        </div>
      </div>

      {/* Задание 3: Комплексная программа с несколькими функциями */}
      <div className={`bg-gray-800/40 backdrop-blur-sm border rounded-2xl p-6 shadow-xl ${completedTasks.task3 ? 'border-green-700/50' : 'border-gray-700/50'}`}>
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <FunctionSquare className="w-5 h-5 text-cyan-400" />
          Задание 3: Программа анализа чисел
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Создайте программу, которая анализирует введенное пользователем число с помощью нескольких функций:
          </p>
        </div>
        <div className="mt-6 space-y-6">
          <div className="bg-gray-900/50 p-5 rounded-xl border border-cyan-700/30">
            <h3 className="font-bold text-cyan-300 mb-3">Реализуйте следующее:</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>Создайте файл <code className="bg-gray-700 px-1.5 py-0.5 rounded">number_analyzer.c</code></li>
              <li>Создайте функцию <code className="bg-gray-700 px-1.5 py-0.5 rounded">void printMenu()</code> для вывода меню</li>
              <li>Создайте функцию <code className="bg-gray-700 px-1.5 py-0.5 rounded">int isEven(int number)</code> проверки четности (возвращает 1 если четное, 0 если нечетное)</li>
              <li>Создайте функцию <code className="bg-gray-700 px-1.5 py-0.5 rounded">int factorial(int number)</code> для вычисления факториала</li>
              <li>Создайте функцию <code className="bg-gray-700 px-1.5 py-0.5 rounded">void printTable(int number)</code> для вывода таблицы умножения</li>
              <li>В <code className="bg-gray-700 px-1.5 py-0.5 rounded">main()</code> запросите число у пользователя и протестируйте все функции</li>
            </ul>
            <div className="mt-4 bg-gray-800 p-3 rounded">
              <pre className="text-cyan-300 text-xs">
{`#include <stdio.h>

// Прототипы функций
void printMenu();
int isEven(int number);
int factorial(int number);
void printTable(int number);

int main() {
    int number;
    
    printf("Введите число для анализа: ");
    scanf("%d", &number);
    
    printMenu();
    
    printf("\\nАнализ числа %d:\\n", number);
    printf("Четное: %s\\n", isEven(number) ? "Да" : "Нет");
    printf("Факториал: %d\\n", factorial(number));
    printf("\\nТаблица умножения:\\n");
    printTable(number);
    
    return 0;
}

void printMenu() {
    printf("\\n=== АНАЛИЗАТОР ЧИСЕЛ ===\\n");
    printf("Программа для анализа чисел\\n");
    printf("==========================\\n");
}

int isEven(int number) {
    return number % 2 == 0;
}

int factorial(int number) {
    if (number <= 1) return 1;
    int result = 1;
    for (int i = 2; i <= number; i++) {
        result *= i;
    }
    return result;
}

void printTable(int number) {
    for (int i = 1; i <= 10; i++) {
        printf("%d × %d = %d\\n", number, i, number * i);
    }
}`}
              </pre>
            </div>
            <div className="mt-4 p-3 bg-yellow-900/20 border border-yellow-700/30 rounded-lg">
              <p className="text-yellow-300 text-sm">
                ⚠️ <span className="font-medium">Важно:</span> Убедитесь, что все прототипы функций объявлены перед main(), а определения функций — после main()!
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
            Я создал комплексную программу с несколькими функциями
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
              Теперь вы уверенно можете создавать и использовать функции для структурирования вашего кода. 
              Вы научились работать с параметрами, возвращаемыми значениями и прототипами функций.
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