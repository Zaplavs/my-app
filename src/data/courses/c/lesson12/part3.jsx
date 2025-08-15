// src/data/courses/c/lesson12/part3.jsx
import React, { useState } from 'react';
import { Monitor, FileText, Play, Code, Edit3, HardDrive, CheckCircle, Database } from 'lucide-react';

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
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">💻 Практическое задание: Динамическая память в C</h1>
            <p className="text-gray-300">
              <span className="font-medium text-yellow-400">🎯 Цель:</span> На практике освоить выделение и освобождение динамической памяти с помощью malloc() и free().
            </p>
          </div>
        </div>
      </div>

      {/* Задание 1: Простое выделение памяти */}
      <div className={`bg-gray-800/40 backdrop-blur-sm border rounded-2xl p-6 shadow-xl ${completedTasks.task1 ? 'border-green-700/50' : 'border-gray-700/50'}`}>
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <FileText className="w-5 h-5 text-green-400" />
          Задание 1: Динамический массив целых чисел
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Создайте программу для работы с динамическим массивом целых чисел:
          </p>
        </div>
        <div className="mt-6 space-y-6">
          <div className="bg-gray-900/50 p-5 rounded-xl border border-green-700/30">
            <h3 className="font-bold text-green-300 mb-3 flex items-center gap-2">
              <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">1</span>
              Создайте программу с динамическим массивом
            </h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>Создайте файл <code className="bg-gray-700 px-1.5 py-0.5 rounded">dynamic_array.c</code></li>
              <li>Запросите у пользователя размер массива</li>
              <li>Выделите память для массива целых чисел с помощью <code className="bg-gray-700 px-1.5 py-0.5 rounded">malloc()</code></li>
              <li>Проверьте, успешно ли выделена память</li>
              <li>Заполните массив значениями (например, квадратами индексов)</li>
              <li>Выведите массив на экран</li>
              <li>Обязательно освободите память с помощью <code className="bg-gray-700 px-1.5 py-0.5 rounded">free()</code></li>
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
#include <stdlib.h>

int main() {
    int n;
    
    printf("Введите размер массива: ");
    scanf("%d", &n);
    
    // Выделение памяти
    int *arr = (int*)malloc(n * sizeof(int));
    
    // Проверка выделения памяти
    if (arr == NULL) {
        printf("Ошибка выделения памяти!\\n");
        return 1;
    }
    
    // Заполнение массива
    printf("Заполняем массив квадратами индексов:\\n");
    for (int i = 0; i < n; i++) {
        arr[i] = i * i;
    }
    
    // Вывод массива
    printf("Массив:\\n");
    for (int i = 0; i < n; i++) {
        printf("arr[%d] = %d\\n", i, arr[i]);
    }
    
    // Освобождение памяти
    free(arr);
    arr = NULL;
    
    printf("Память освобождена успешно!\\n");
    
    return 0;
}`}
              </pre>
            </div>
            <div className="mt-3 p-3 bg-black rounded text-sm">
              <p className="text-white">Пример работы:</p>
              <p className="text-gray-300 text-xs">
                Введите размер массива: 5<br/>
                Заполняем массив квадратами индексов:<br/>
                Массив:<br/>
                arr[0] = 0<br/>
                arr[1] = 1<br/>
                arr[2] = 4<br/>
                arr[3] = 9<br/>
                arr[4] = 16<br/>
                Память освобождена успешно!
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
            Я создал программу с динамическим массивом целых чисел
          </label>
          {completedTasks.task1 && <CheckCircle className="ml-2 w-5 h-5 text-green-400" />}
        </div>
      </div>

      {/* Задание 2: Работа с динамическим массивом дробных чисел */}
      <div className={`bg-gray-800/40 backdrop-blur-sm border rounded-2xl p-6 shadow-xl ${completedTasks.task2 ? 'border-green-700/50' : 'border-gray-700/50'}`}>
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Edit3 className="w-5 h-5 text-purple-400" />
          Задание 2: Динамический массив дробных чисел с обработкой
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Создайте программу для работы с динамическим массивом дробных чисел и их обработкой:
          </p>
        </div>
        <div className="mt-6 space-y-6">
          <div className="bg-gray-900/50 p-5 rounded-xl border border-purple-700/30">
            <h3 className="font-bold text-purple-300 mb-3">Реализуйте следующее:</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>Создайте файл <code className="bg-gray-700 px-1.5 py-0.5 rounded">float_array.c</code></li>
              <li>Запросите у пользователя количество элементов массива</li>
              <li>Выделите память для массива <code className="bg-gray-700 px-1.5 py-0.5 rounded">float</code> с помощью <code className="bg-gray-700 px-1.5 py-0.5 rounded">malloc()</code></li>
              <li>Проверьте выделение памяти</li>
              <li>Заполните массив значениями, введенными пользователем</li>
              <li>Найдите минимальное, максимальное и среднее значения</li>
              <li>Выведите все результаты</li>
              <li>Правильно освободите память</li>
            </ul>
            <div className="mt-4 bg-gray-800 p-3 rounded">
              <pre className="text-purple-300 text-sm">
{`#include <stdio.h>
#include <stdlib.h>

int main() {
    int n;
    
    printf("Сколько чисел вы хотите ввести? ");
    scanf("%d", &n);
    
    // Выделение памяти для массива float
    float *numbers = (float*)malloc(n * sizeof(float));
    
    // Проверка выделения памяти
    if (numbers == NULL) {
        printf("Ошибка выделения памяти!\\n");
        return 1;
    }
    
    // Ввод чисел
    printf("Введите %d чисел:\\n", n);
    for (int i = 0; i < n; i++) {
        printf("Число %d: ", i + 1);
        scanf("%f", &numbers[i]);
    }
    
    // Поиск минимума, максимума и суммы
    float min = numbers[0], max = numbers[0], sum = 0;
    
    for (int i = 0; i < n; i++) {
        if (numbers[i] < min) min = numbers[i];
        if (numbers[i] > max) max = numbers[i];
        sum += numbers[i];
    }
    
    float average = sum / n;
    
    // Вывод результатов
    printf("\\nРезультаты:\\n");
    printf("Минимальное: %.2f\\n", min);
    printf("Максимальное: %.2f\\n", max);
    printf("Среднее: %.2f\\n", average);
    
    // Освобождение памяти
    free(numbers);
    numbers = NULL;
    
    printf("Память освобождена.\\n");
    
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
            Я создал программу с динамическим массивом дробных чисел
          </label>
          {completedTasks.task2 && <CheckCircle className="ml-2 w-5 h-5 text-green-400" />}
        </div>
      </div>

      {/* Задание 3: Безопасная работа с памятью и обработка ошибок */}
      <div className={`bg-gray-800/40 backdrop-blur-sm border rounded-2xl p-6 shadow-xl ${completedTasks.task3 ? 'border-green-700/50' : 'border-gray-700/50'}`}>
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Database className="w-5 h-5 text-cyan-400" />
          Задание 3: Безопасная работа с памятью и предотвращение утечек
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Создайте программу с демонстрацией правильной и неправильной работы с памятью:
          </p>
        </div>
        <div className="mt-6 space-y-6">
          <div className="bg-gray-900/50 p-5 rounded-xl border border-cyan-700/30">
            <h3 className="font-bold text-cyan-300 mb-3">Реализуйте следующее:</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>Создайте файл <code className="bg-gray-700 px-1.5 py-0.5 rounded">memory_safety.c</code></li>
              <li>Создайте функцию, которая выделяет память и возвращает указатель</li>
              <li>Создайте функцию, которая освобождает память и устанавливает указатель в NULL</li>
              <li>Продемонстрируйте правильное использование этих функций</li>
              <li>Покажите, как проверять указатель на NULL перед использованием</li>
              <li>Создайте пример с потенциальной утечкой памяти и объясните, почему она опасна</li>
            </ul>
            <div className="mt-4 bg-gray-800 p-3 rounded">
              <pre className="text-cyan-300 text-xs">
{`#include <stdio.h>
#include <stdlib.h>

// Функция для выделения памяти
int* create_array(int size) {
    if (size <= 0) {
        printf("Неверный размер массива!\\n");
        return NULL;
    }
    
    int *arr = (int*)malloc(size * sizeof(int));
    
    if (arr == NULL) {
        printf("Ошибка выделения памяти!\\n");
        return NULL;
    }
    
    printf("Память выделена для %d элементов\\n", size);
    return arr;
}

// Функция для освобождения памяти
void destroy_array(int **arr_ptr) {
    if (arr_ptr == NULL || *arr_ptr == NULL) {
        printf("Невозможно освободить память: указатель NULL\\n");
        return;
    }
    
    free(*arr_ptr);
    *arr_ptr = NULL;  // Устанавливаем оригинальный указатель в NULL
    printf("Память освобождена\\n");
}

int main() {
    int size;
    
    printf("Введите размер массива: ");
    scanf("%d", &size);
    
    // Правильное использование
    int *my_array = create_array(size);
    
    if (my_array != NULL) {
        // Используем массив
        for (int i = 0; i < size; i++) {
            my_array[i] = i + 1;
        }
        
        printf("Массив заполнен: ");
        for (int i = 0; i < size; i++) {
            printf("%d ", my_array[i]);
        }
        printf("\\n");
        
        // Правильное освобождение
        destroy_array(&my_array);
    }
    
    // Проверка, что указатель теперь NULL
    if (my_array == NULL) {
        printf("Указатель установлен в NULL - безопасно\\n");
    }
    
    // Демонстрация защиты от повторного освобождения
    printf("\\nПопытка повторного освобождения:\\n");
    destroy_array(&my_array);  // Безопасно, ничего не произойдет
    
    return 0;
}`}
              </pre>
            </div>
            <div className="mt-4 p-3 bg-yellow-900/20 border border-yellow-700/30 rounded-lg">
              <p className="text-yellow-300 text-sm">
                ⚠️ <span className="font-medium">Важно:</span> Обратите внимание на передачу указателя на указатель (&my_array) 
                в функцию destroy_array() — это позволяет функции изменить оригинальный указатель!
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
            Я создал программу с безопасной работой памяти
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
              Теперь вы уверенно можете работать с динамической памятью в C. 
              Вы научились выделять память с помощью <code className="bg-gray-700 px-1.5 py-0.5 rounded">malloc()</code>, 
              освобождать её с помощью <code className="bg-gray-700 px-1.5 py-0.5 rounded">free()</code>, 
              и最重要的是 - предотвращать утечки памяти и обеспечивать безопасность программы.
              В следующем уроке мы научимся работать с файлами и сохранять данные на диск.
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