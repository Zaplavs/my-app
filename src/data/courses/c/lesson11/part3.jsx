// src/data/courses/c/lesson11/part3.jsx
import React, { useState } from 'react';
import { Monitor, FileText, Play, Code, Edit3, Navigation, CheckCircle, Target } from 'lucide-react';

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
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">💻 Практическое задание: Указатели в C</h1>
            <p className="text-gray-300">
              <span className="font-medium text-yellow-400">🎯 Цель:</span> На практике освоить работу с указателями, операторами & и *.
            </p>
          </div>
        </div>
      </div>

      {/* Задание 1: Основы указателей */}
      <div className={`bg-gray-800/40 backdrop-blur-sm border rounded-2xl p-6 shadow-xl ${completedTasks.task1 ? 'border-green-700/50' : 'border-gray-700/50'}`}>
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <FileText className="w-5 h-5 text-green-400" />
          Задание 1: Работа с адресами и значениями
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Создайте программу для изучения работы с адресами и значениями через указатели:
          </p>
        </div>
        <div className="mt-6 space-y-6">
          <div className="bg-gray-900/50 p-5 rounded-xl border border-green-700/30">
            <h3 className="font-bold text-green-300 mb-3 flex items-center gap-2">
              <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">1</span>
              Создайте программу с указателями
            </h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>Создайте файл <code className="bg-gray-700 px-1.5 py-0.5 rounded">pointers_basics.c</code></li>
              <li>Объявите переменную типа <code className="bg-gray-700 px-1.5 py-0.5 rounded">int</code> со значением 100</li>
              <li>Объявите указатель на эту переменную</li>
              <li>Выведите: значение переменной, адрес переменной, значение указателя, значение по адресу указателя</li>
              <li>Измените значение переменной через указатель на 200</li>
              <li>Снова выведите значение переменной обычным способом</li>
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
    int number = 100;
    int *ptr = &number;
    
    printf("=== Исходные данные ===\\n");
    printf("Значение number: %d\\n", number);
    printf("Адрес number: %p\\n", &number);
    printf("Значение ptr: %p\\n", ptr);
    printf("Значение по адресу ptr: %d\\n", *ptr);
    
    // Изменяем значение через указатель
    *ptr = 200;
    
    printf("\\n=== После изменения через указатель ===\\n");
    printf("Значение number: %d\\n", number);
    printf("Значение по адресу ptr: %d\\n", *ptr);
    
    return 0;
}`}
              </pre>
            </div>
            <div className="mt-3 p-3 bg-black rounded text-sm">
              <p className="text-white">Примерный вывод:</p>
              <p className="text-gray-300 text-xs">
                === Исходные данные ===<br/>
                Значение number: 100<br/>
                Адрес number: 0x7fff5fbff6ac<br/>
                Значение ptr: 0x7fff5fbff6ac<br/>
                Значение по адресу ptr: 100<br/>
                <br/>
                === После изменения через указатель ===<br/>
                Значение number: 200<br/>
                Значение по адресу ptr: 200
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
            Я создал программу с основами указателей
          </label>
          {completedTasks.task1 && <CheckCircle className="ml-2 w-5 h-5 text-green-400" />}
        </div>
      </div>

      {/* Задание 2: Указатели разных типов */}
      <div className={`bg-gray-800/40 backdrop-blur-sm border rounded-2xl p-6 shadow-xl ${completedTasks.task2 ? 'border-green-700/50' : 'border-gray-700/50'}`}>
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Edit3 className="w-5 h-5 text-purple-400" />
          Задание 2: Работа с указателями разных типов
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Создайте программу с указателями на переменные разных типов:
          </p>
        </div>
        <div className="mt-6 space-y-6">
          <div className="bg-gray-900/50 p-5 rounded-xl border border-purple-700/30">
            <h3 className="font-bold text-purple-300 mb-3">Реализуйте следующее:</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>Создайте файл <code className="bg-gray-700 px-1.5 py-0.5 rounded">different_pointers.c</code></li>
              <li>Объявите переменные разных типов: <code className="bg-gray-700 px-1.5 py-0.5 rounded">int</code>, <code className="bg-gray-700 px-1.5 py-0.5 rounded">float</code>, <code className="bg-gray-700 px-1.5 py-0.5 rounded">char</code></li>
              <li>Создайте указатели на каждую переменную соответствующих типов</li>
              <li>Выведите значения и адреса всех переменных через указатели</li>
              <li>Измените значения всех переменных через указатели</li>
              <li>Снова выведите обновленные значения</li>
            </ul>
            <div className="mt-4 bg-gray-800 p-3 rounded">
              <pre className="text-purple-300 text-sm">
{`#include <stdio.h>

int main() {
    // Переменные разных типов
    int integer = 42;
    float decimal = 3.14;
    char symbol = 'A';
    
    // Указатели на переменные
    int *int_ptr = &integer;
    float *float_ptr = &decimal;
    char *char_ptr = &symbol;
    
    printf("=== Исходные значения ===\\n");
    printf("int: %d, адрес: %p\\n", *int_ptr, int_ptr);
    printf("float: %.2f, адрес: %p\\n", *float_ptr, float_ptr);
    printf("char: %c, адрес: %p\\n", *char_ptr, char_ptr);
    
    // Изменяем значения через указатели
    *int_ptr = 100;
    *float_ptr = 2.71;
    *char_ptr = 'Z';
    
    printf("\\n=== Измененные значения ===\\n");
    printf("int: %d\\n", integer);
    printf("float: %.2f\\n", decimal);
    printf("char: %c\\n", symbol);
    
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
            Я создал программу с указателями разных типов
          </label>
          {completedTasks.task2 && <CheckCircle className="ml-2 w-5 h-5 text-green-400" />}
        </div>
      </div>

      {/* Задание 3: NULL указатели и безопасность */}
      <div className={`bg-gray-800/40 backdrop-blur-sm border rounded-2xl p-6 shadow-xl ${completedTasks.task3 ? 'border-green-700/50' : 'border-gray-700/50'}`}>
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Target className="w-5 h-5 text-cyan-400" />
          Задание 3: Работа с NULL указателями
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Создайте программу для безопасной работы с указателями:
          </p>
        </div>
        <div className="mt-6 space-y-6">
          <div className="bg-gray-900/50 p-5 rounded-xl border border-cyan-700/30">
            <h3 className="font-bold text-cyan-300 mb-3">Реализуйте следующее:</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>Создайте файл <code className="bg-gray-700 px-1.5 py-0.5 rounded">null_pointers.c</code></li>
              <li>Объявите указатель, инициализированный значением <code className="bg-gray-700 px-1.5 py-0.5 rounded">NULL</code></li>
              <li>Проверьте указатель на равенство <code className="bg-gray-700 px-1.5 py-0.5 rounded">NULL</code> перед использованием</li>
              <li>Создайте обычный указатель на переменную <code className="bg-gray-700 px-1.5 py-0.5 rounded">int</code></li>
              <li>Проверьте его на <code className="bg-gray-700 px-1.5 py-0.5 rounded">NULL</code> и выведите соответствующие сообщения</li>
              <li>Продемонстрируйте, как правильно инициализировать указатели</li>
            </ul>
            <div className="mt-4 bg-gray-800 p-3 rounded">
              <pre className="text-cyan-300 text-xs">
{`#include <stdio.h>

int main() {
    // NULL указатель
    int *null_ptr = NULL;
    
    // Обычный указатель
    int value = 123;
    int *normal_ptr = &value;
    
    printf("=== Проверка NULL указателя ===\\n");
    if (null_ptr == NULL) {
        printf("null_ptr не указывает ни на что\\n");
    } else {
        printf("Значение null_ptr: %d\\n", *null_ptr);
    }
    
    printf("\\n=== Проверка обычного указателя ===\\n");
    if (normal_ptr == NULL) {
        printf("normal_ptr не инициализирован\\n");
    } else {
        printf("normal_ptr указывает на: %p\\n", normal_ptr);
        printf("Значение по адресу: %d\\n", *normal_ptr);
    }
    
    // Безопасное использование указателя
    if (normal_ptr != NULL) {
        *normal_ptr = 456;
        printf("\\nНовое значение: %d\\n", value);
    }
    
    return 0;
}`}
              </pre>
            </div>
            <div className="mt-4 p-3 bg-yellow-900/20 border border-yellow-700/30 rounded-lg">
              <p className="text-yellow-300 text-sm">
                ⚠️ <span className="font-medium">Важно:</span> Всегда проверяйте указатели на NULL перед разыменованием! 
                Это предотвращает ошибки и сбои программы.
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
            Я создал программу с безопасной работой указателей
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
              Теперь вы уверенно можете работать с указателями в C. 
              Вы научились использовать операторы & и *, работать с указателями разных типов 
              и обеспечивать безопасность при работе с указателями через проверку на NULL.
              В следующем уроке мы научимся использовать указатели с массивами и функциями.
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