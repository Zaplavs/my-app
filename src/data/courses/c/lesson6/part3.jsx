// src/data/courses/c/lesson6/part3.jsx
import React, { useState } from 'react';
import { Monitor, FileText, Play, Code, Edit3, Keyboard, CheckCircle, Terminal } from 'lucide-react';

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
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">💻 Практическое задание: Ввод данных с клавиатуры</h1>
            <p className="text-gray-300">
              <span className="font-medium text-yellow-400">🎯 Цель:</span> На практике освоить использование функции scanf() для ввода данных разных типов.
            </p>
          </div>
        </div>
      </div>

      {/* Задание 1: Простой ввод одного значения */}
      <div className={`bg-gray-800/40 backdrop-blur-sm border rounded-2xl p-6 shadow-xl ${completedTasks.task1 ? 'border-green-700/50' : 'border-gray-700/50'}`}>
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <FileText className="w-5 h-5 text-green-400" />
          Задание 1: Ввод и вывод одного целого числа
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Создайте программу, которая запрашивает у пользователя целое число и выводит его обратно:
          </p>
        </div>
        <div className="mt-6 space-y-6">
          <div className="bg-gray-900/50 p-5 rounded-xl border border-green-700/30">
            <h3 className="font-bold text-green-300 mb-3 flex items-center gap-2">
              <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">1</span>
              Создайте файл ввода
            </h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>Создайте файл <code className="bg-gray-700 px-1.5 py-0.5 rounded">input_test.c</code></li>
              <li>Подключите необходимую библиотеку <code className="bg-gray-700 px-1.5 py-0.5 rounded">{`#include <stdio.h>`}</code></li>
            </ul>
          </div>
          
          <div className="bg-gray-900/50 p-5 rounded-xl border border-blue-700/30">
            <h3 className="font-bold text-blue-300 mb-3 flex items-center gap-2">
              <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">2</span>
              Реализуйте ввод и вывод
            </h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>Объявите переменную типа <code className="bg-gray-700 px-1.5 py-0.5 rounded">int</code></li>
              <li>Выведите приглашение к вводу с помощью <code className="bg-gray-700 px-1.5 py-0.5 rounded">printf()</code></li>
              <li>Получите значение от пользователя с помощью <code className="bg-gray-700 px-1.5 py-0.5 rounded">scanf()</code> (не забудьте &!)</li>
              <li>Выведите введенное значение обратно пользователю</li>
            </ul>
            <div className="bg-gray-800 p-4 rounded-lg mt-3 text-sm">
              <pre className="text-green-300">
{`#include <stdio.h>

int main() {
    int number;
    
    printf("Введите целое число: ");
    scanf("%d", &number);
    
    printf("Вы ввели число: %d\\n", number);
    
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
            Я создал программу для ввода и вывода целого числа
          </label>
          {completedTasks.task1 && <CheckCircle className="ml-2 w-5 h-5 text-green-400" />}
        </div>
      </div>

      {/* Задание 2: Ввод нескольких значений разных типов */}
      <div className={`bg-gray-800/40 backdrop-blur-sm border rounded-2xl p-6 shadow-xl ${completedTasks.task2 ? 'border-green-700/50' : 'border-gray-700/50'}`}>
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Edit3 className="w-5 h-5 text-purple-400" />
          Задание 2: Ввод данных разных типов
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Создайте программу, которая запрашивает у пользователя данные разных типов:
          </p>
        </div>
        <div className="mt-6 space-y-6">
          <div className="bg-gray-900/50 p-5 rounded-xl border border-purple-700/30">
            <h3 className="font-bold text-purple-300 mb-3">Реализуйте следующее:</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>Объявите переменные типов <code className="bg-gray-700 px-1.5 py-0.5 rounded">int</code>, <code className="bg-gray-700 px-1.5 py-0.5 rounded">float</code> и <code className="bg-gray-700 px-1.5 py-0.5 rounded">char</code></li>
              <li>Поочередно запросите у пользователя: возраст, рост и первую букву имени</li>
              <li>Используйте правильные спецификаторы для каждого типа</li>
              <li>Не забудьте & перед каждой переменной в scanf()!</li>
              <li>Выведите все введенные данные в форматированном виде</li>
            </ul>
            <div className="mt-4 bg-gray-800 p-3 rounded">
              <pre className="text-purple-300 text-sm">
{`#include <stdio.h>

int main() {
    int age;
    float height;
    char initial;
    
    printf("Введите ваш возраст: ");
    scanf("%d", &age);
    
    printf("Введите ваш рост (в см): ");
    scanf("%f", &height);
    
    printf("Введите первую букву вашего имени: ");
    scanf(" %c", &initial);
    
    printf("\\n=== Ваши данные ===\\n");
    printf("Возраст: %d лет\\n", age);
    printf("Рост: %.1f см\\n", height);
    printf("Имя начинается на: %c\\n", initial);
    
    return 0;
}`}
              </pre>
            </div>
            <div className="mt-4 p-3 bg-blue-900/20 border border-blue-700/30 rounded-lg">
              <p className="text-blue-300 text-sm">
                💡 <span className="font-medium">Совет:</span> Обратите внимание на пробел перед %c в последнем scanf() — это важно для корректной работы!
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
            Я создал программу для ввода данных разных типов
          </label>
          {completedTasks.task2 && <CheckCircle className="ml-2 w-5 h-5 text-green-400" />}
        </div>
      </div>

      {/* Задание 3: Эксперименты с ошибками */}
      <div className={`bg-gray-800/40 backdrop-blur-sm border rounded-2xl p-6 shadow-xl ${completedTasks.task3 ? 'border-green-700/50' : 'border-gray-700/50'}`}>
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Terminal className="w-5 h-5 text-cyan-400" />
          Задание 3: Исследование ошибок в scanf()
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Проведите эксперименты с различными ошибками в scanf(), чтобы лучше их понять:
          </p>
        </div>
        <div className="mt-6 space-y-6">
          <div className="bg-gray-900/50 p-5 rounded-xl border border-cyan-700/30">
            <h3 className="font-bold text-cyan-300 mb-3">Попробуйте следующее:</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>Создайте программу с intentional ошибкой: забудьте & перед переменной в scanf()</li>
              <li>Скомпилируйте программу и посмотрите, какие предупреждения выдаст компилятор</li>
              <li>Запустите программу и посмотрите, что произойдет</li>
              <li>Исправьте ошибку и проверьте правильную работу</li>
              <li>Попробуйте ввести буквы вместо чисел — что произойдет?</li>
              <li>Попробуйте не ставить пробел перед %c — как это повлияет на работу?</li>
            </ul>
            <div className="mt-4 bg-gray-800 p-3 rounded">
              <pre className="text-red-300 text-sm">
{`// Пример с ОШИБКОЙ (забыли &):
int number;
printf("Введите число: ");
scanf("%d", number);  // ОШИБКА! Должно быть &number

// Правильный вариант:
scanf("%d", &number); // Так правильно`}
              </pre>
            </div>
            <div className="mt-4 bg-gray-800 p-3 rounded">
              <pre className="text-orange-300 text-sm">
{`// Пример без пробела перед %c:
char letter;
scanf("%c", &letter);  // Может не работать корректно

// Правильный вариант:
scanf(" %c", &letter); // Пробел перед %c`}
              </pre>
            </div>
            <div className="mt-4 p-3 bg-yellow-900/20 border border-yellow-700/30 rounded-lg">
              <p className="text-yellow-300 text-sm">
                ⚠️ <span className="font-medium">Важно:</span> Эти эксперименты помогут вам запомнить, как правильно использовать scanf() и избегать типичных ошибок в будущем.
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
            Я провел эксперименты с ошибками в scanf() и понял их причины
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
              Теперь вы уверенно можете вводить данные с клавиатуры и понимаете, как избежать типичных ошибок при использовании scanf(). 
              Это важный навык для создания интерактивных программ.
              В следующем уроке мы научимся создавать простые калькуляторы и работать с математическими операциями.
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