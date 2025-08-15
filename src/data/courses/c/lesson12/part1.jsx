// src/data/courses/c/lesson12/part1.jsx
import React from 'react';
import { Database, Zap, AlertTriangle, Recycle, HardDrive, Trash2 } from 'lucide-react';

const Part1 = () => {
  return (
    <div className="space-y-8 text-gray-200">
      {/* Вступление */}
      <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 backdrop-blur-sm border border-blue-700/30 rounded-2xl p-6 shadow-lg">
        <div className="flex items-start gap-4">
          <div className="bg-blue-500/20 p-3 rounded-lg">
            <HardDrive className="w-6 h-6 text-blue-400" />
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">💾 Урок 12: Динамическая память — malloc и free</h1>
            <h2 className="text-xl font-semibold text-blue-300 mb-3">Как выделять память во время выполнения программы</h2>
            <p className="text-gray-300">
              <span className="font-medium text-yellow-400">🎯 Цель урока:</span> Понять, как выделять и освобождать память динамически во время работы программы.
            </p>
          </div>
        </div>
      </div>

      {/* Что такое динамическая память? */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Database className="w-5 h-5 text-green-400" />
          Что такое динамическая память?
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            <span className="font-medium text-green-300">Динамическая память</span> — это область памяти, которую программа может запрашивать и освобождать <span className="font-medium">во время выполнения</span>.
          </p>
          <div className="mt-4 p-3 bg-blue-900/20 border border-blue-700/30 rounded-lg flex items-start gap-2">
            <Zap className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
            <p className="text-blue-300 text-sm">
              <span className="font-medium">💡 Представьте:</span> Динамическая память — как аренда складских помещений. 
              Вы можете арендовать (выделить) столько места, сколько нужно, когда это нужно, 
              и освободить (вернуть) помещение, когда оно больше не требуется.
            </p>
          </div>
          <div className="mt-4 grid md:grid-cols-2 gap-4">
            <div className="bg-gray-900/50 p-4 rounded-lg">
              <h4 className="font-medium text-white mb-2">Статическая память:</h4>
              <pre className="text-gray-300 text-sm bg-black p-2 rounded">
                <code>int arr[100]; // Размер известен при компиляции</code>
              </pre>
              <p className="text-gray-400 text-xs mt-1">Размер фиксирован, выделяется при запуске</p>
            </div>
            <div className="bg-gray-900/50 p-4 rounded-lg">
              <h4 className="font-medium text-white mb-2">Динамическая память:</h4>
              <pre className="text-gray-300 text-sm bg-black p-2 rounded">
                <code>int *arr = malloc(n * sizeof(int)); // Размер определяется во время выполнения</code>
              </pre>
              <p className="text-gray-400 text-xs mt-1">Размер гибкий, выделяется по запросу</p>
            </div>
          </div>
        </div>
      </div>

      {/* Зачем нужна динамическая память? */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Zap className="w-5 h-5 text-purple-400" />
          Зачем нужна динамическая память?
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-gray-900/50 p-5 rounded-xl border border-green-700/30">
            <h3 className="font-bold text-green-300 mb-3">✅ Когда полезна:</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-300">
              <li>Размер данных <span className="font-medium">неизвестен</span> при компиляции</li>
              <li>Нужно создать <span className="font-medium">большие массивы</span>, размер которых зависит от ввода пользователя</li>
              <li>Создание <span className="font-medium">гибких структур данных</span> (списки, деревья)</li>
              <li>Экономия памяти — выделяем только <span className="font-medium">нужное количество</span></li>
              <li>Передача больших данных между функциями <span className="font-medium">без копирования</span></li>
            </ul>
          </div>
          <div className="bg-gray-900/50 p-5 rounded-xl border border-blue-700/30">
            <h3 className="font-bold text-blue-300 mb-3">🔧 Практические примеры:</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-300">
              <li>Программа для обработки файла неизвестного размера</li>
              <li>Игра с переменным количеством игроков</li>
              <li>База данных с динамическим количеством записей</li>
              <li>Матрица, размер которой задает пользователь</li>
            </ul>
            <div className="mt-3 p-2 bg-blue-900/20 border border-blue-700/30 rounded text-blue-300 text-xs">
              💡 <span className="font-medium">Факт:</span> Операционные системы используют динамическую память для управления процессами!
            </div>
          </div>
        </div>
        <div className="mt-6 p-4 bg-yellow-900/20 border border-yellow-700/30 rounded-lg">
          <p className="text-yellow-300 text-sm">
            ⚠️ <span className="font-medium">Важно:</span> Динамическая память — это мощный, но ответственный инструмент. 
            Неправильное использование может привести к утечкам памяти и сбоям программы!
          </p>
        </div>
      </div>

      {/* Функция malloc() */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Database className="w-5 h-5 text-cyan-400" />
          Функция malloc() — выделение памяти
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            <code className="bg-gray-700 px-1.5 py-0.5 rounded">malloc()</code> (memory allocation) — функция для выделения блока памяти заданного размера.
          </p>
        </div>

        <div className="mt-6 space-y-6">
          <div className="bg-gray-900/50 p-5 rounded-xl border border-cyan-700/30">
            <h3 className="font-bold text-cyan-300 mb-3">Синтаксис malloc():</h3>
            <div className="bg-gray-800 p-4 rounded-lg">
              <pre className="text-cyan-300 text-center text-lg">
                <code>указатель = (тип*)malloc(размер_в_байтах);</code>
              </pre>
            </div>
            <div className="mt-4 space-y-3 text-sm">
              <div className="bg-gray-800/50 p-3 rounded">
                <p className="font-medium text-white mb-1">указатель</p>
                <p className="text-gray-300">Указатель на выделенную память</p>
              </div>
              <div className="bg-gray-800/50 p-3 rounded">
                <p className="font-medium text-white mb-1">(тип*)</p>
                <p className="text-gray-300">Приведение типа (cast) — указываем тип указателя</p>
              </div>
              <div className="bg-gray-800/50 p-3 rounded">
                <p className="font-medium text-white mb-1">malloc(размер)</p>
                <p className="text-gray-300">Запрос памяти размером в байтах</p>
              </div>
            </div>
          </div>

          <div className="bg-gray-900/50 p-5 rounded-xl border border-green-700/30">
            <h3 className="font-bold text-green-300 mb-3">Как вычислять размер памяти:</h3>
            <div className="bg-gray-800 p-4 rounded-lg">
              <pre className="text-green-300 text-sm">
{`#include <stdio.h>
#include <stdlib.h>  // Обязательно для malloc()

int main() {
    int n = 5;
    
    // Выделяем память для 5 целых чисел
    int *arr = (int*)malloc(n * sizeof(int));
    
    // Проверяем, успешно ли выделена память
    if (arr != NULL) {
        printf("Память успешно выделена!\\n");
        
        // Используем выделенную память
        for (int i = 0; i < n; i++) {
            arr[i] = i * 10;
            printf("arr[%d] = %d\\n", i, arr[i]);
        }
        
        // Освобождаем память
        free(arr);
    } else {
        printf("Ошибка выделения памяти!\\n");
    }
    
    return 0;
}`}
              </pre>
            </div>
            <div className="mt-3 p-2 bg-green-900/20 border border-green-700/30 rounded text-green-300 text-xs">
              💡 <span className="font-medium">Важно:</span> Всегда используйте <code className="bg-gray-700 px-1.5 py-0.5 rounded">sizeof(тип)</code> для правильного расчета размера!
            </div>
          </div>
        </div>
      </div>

      {/* Функция free() и освобождение памяти */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Recycle className="w-5 h-5 text-orange-400" />
          Функция free() — освобождение памяти
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            <code className="bg-gray-700 px-1.5 py-0.5 rounded">free()</code> — функция для освобождения ранее выделенной динамической памяти.
          </p>
        </div>

        <div className="mt-6 grid md:grid-cols-2 gap-6">
          <div className="bg-gray-900/50 p-5 rounded-xl border border-orange-700/30">
            <h3 className="font-bold text-orange-300 mb-3">Правила использования free():</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-300">
              <li><span className="font-medium">Всегда освобождайте</span> выделенную память с помощью <code className="bg-gray-700 px-1.5 py-0.5 rounded">free()</code></li>
              <li>Вызывайте <code className="bg-gray-700 px-1.5 py-0.5 rounded">free()</code> <span className="font-medium">только один раз</span> для каждого <code className="bg-gray-700 px-1.5 py-0.5 rounded">malloc()</code></li>
              <li>После <code className="bg-gray-700 px-1.5 py-0.5 rounded">free()</code> <span className="font-medium">не используйте</span> указатель</li>
              <li>Устанавливайте указатель в <code className="bg-gray-700 px-1.5 py-0.5 rounded">NULL</code> после <code className="bg-gray-700 px-1.5 py-0.5 rounded">free()</code> для безопасности</li>
            </ul>
          </div>
          <div className="bg-gray-900/50 p-5 rounded-xl border border-red-700/30">
            <h3 className="font-bold text-red-300 mb-3">Опасные ошибки:</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-300">
              <li><span className="font-medium">Утечка памяти</span> — забыли вызвать <code className="bg-gray-700 px-1.5 py-0.5 rounded">free()</code></li>
              <li><span className="font-medium">Двойное освобождение</span> — дважды вызвали <code className="bg-gray-700 px-1.5 py-0.5 rounded">free()</code></li>
              <li><span className="font-medium">Использование после free</span> — обращение к памяти после <code className="bg-gray-700 px-1.5 py-0.5 rounded">free()</code></li>
              <li><span className="font-medium">Освобождение не выделенной памяти</span> — <code className="bg-gray-700 px-1.5 py-0.5 rounded">free()</code> для статических переменных</li>
            </ul>
          </div>
        </div>

        <div className="mt-6 bg-gray-900/50 p-5 rounded-xl border border-purple-700/30">
          <h3 className="font-bold text-purple-300 mb-3">Правильное использование malloc() и free():</h3>
          <div className="bg-gray-800 p-4 rounded-lg">
            <pre className="text-purple-300 text-sm">
{`#include <stdio.h>
#include <stdlib.h>

int main() {
    int n = 3;
    
    // Выделение памяти
    int *numbers = (int*)malloc(n * sizeof(int));
    
    // Проверка выделения
    if (numbers == NULL) {
        printf("Ошибка выделения памяти!\\n");
        return 1;
    }
    
    // Использование памяти
    printf("Введите %d чисел:\\n", n);
    for (int i = 0; i < n; i++) {
        scanf("%d", &numbers[i]);
    }
    
    printf("Вы ввели:\\n");
    for (int i = 0; i < n; i++) {
        printf("%d ", numbers[i]);
    }
    printf("\\n");
    
    // Освобождение памяти
    free(numbers);
    numbers = NULL;  // Хорошая практика
    
    return 0;
}`}
            </pre>
          </div>
        </div>
      </div>

      {/* Утечки памяти и как их избежать */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <AlertTriangle className="w-5 h-5 text-red-400" />
          Утечки памяти — враги революции!
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            <span className="font-medium text-red-300">Утечка памяти</span> происходит, когда выделенная память не освобождается, и программа теряет возможность её использовать.
          </p>
        </div>

        <div className="mt-6 grid md:grid-cols-2 gap-6">
          <div className="bg-gray-900/50 p-5 rounded-xl border border-red-700/30">
            <h3 className="font-bold text-red-300 mb-3">❌ Пример утечки памяти:</h3>
            <div className="bg-gray-800 p-3 rounded">
              <pre className="text-red-300 text-sm">
{`#include <stdio.h>
#include <stdlib.h>

int main() {
    for (int i = 0; i < 1000; i++) {
        int *arr = (int*)malloc(1000 * sizeof(int));
        // ЗАБЫЛИ free(arr) !!!
        // Каждую итерацию теряем 4000 байт!
    }
    // После цикла потеряно 4 МБ памяти!
    return 0;
}`}
              </pre>
            </div>
            <div className="mt-2 p-2 bg-red-900/20 border border-red-700/30 rounded text-red-300 text-xs">
              ❌ <span className="font-medium">Опасно:</span> Программа может исчерпать всю доступную память!
            </div>
          </div>
          <div className="bg-gray-900/50 p-5 rounded-xl border border-green-700/30">
            <h3 className="font-bold text-green-300 mb-3">✅ Правильное решение:</h3>
            <div className="bg-gray-800 p-3 rounded">
              <pre className="text-green-300 text-sm">
{`#include <stdio.h>
#include <stdlib.h>

int main() {
    for (int i = 0; i < 1000; i++) {
        int *arr = (int*)malloc(1000 * sizeof(int));
        
        // ... работа с массивом ...
        
        free(arr);  // Обязательно освобождаем!
        arr = NULL; // Хорошая практика
    }
    return 0;
}`}
              </pre>
            </div>
            <div className="mt-2 p-2 bg-green-900/20 border border-green-700/30 rounded text-green-300 text-xs">
              ✅ <span className="font-medium">Безопасно:</span> Память освобождается после использования!
            </div>
          </div>
        </div>
        <div className="mt-6 p-4 bg-blue-900/20 border border-blue-700/30 rounded-lg">
          <p className="text-blue-300 text-sm">
            💡 <span className="font-medium">Совет:</span> На каждую функцию <code className="bg-gray-700 px-1.5 py-0.5 rounded">malloc()</code> должна быть своя функция <code className="bg-gray-700 px-1.5 py-0.5 rounded">free()</code>!
          </p>
        </div>
      </div>

      {/* Практический пример */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Zap className="w-5 h-5 text-yellow-400" />
          Практический пример: Динамический массив
        </h2>
        <div className="bg-gray-900/50 p-5 rounded-xl border border-yellow-700/30">
          <div className="bg-gray-800 p-4 rounded-lg">
            <pre className="text-yellow-300 text-sm">
{`#include <stdio.h>
#include <stdlib.h>

int main() {
    int n;
    
    printf("Сколько чисел вы хотите ввести? ");
    scanf("%d", &n);
    
    // Выделяем память под массив
    int *numbers = (int*)malloc(n * sizeof(int));
    
    // Проверяем выделение памяти
    if (numbers == NULL) {
        printf("Ошибка: недостаточно памяти!\\n");
        return 1;
    }
    
    // Заполняем массив
    printf("Введите %d чисел:\\n", n);
    for (int i = 0; i < n; i++) {
        printf("Число %d: ", i + 1);
        scanf("%d", &numbers[i]);
    }
    
    // Выводим массив
    printf("\\nВы ввели числа:\\n");
    for (int i = 0; i < n; i++) {
        printf("%d ", numbers[i]);
    }
    printf("\\n");
    
    // Находим сумму
    int sum = 0;
    for (int i = 0; i < n; i++) {
        sum += numbers[i];
    }
    printf("Сумма: %d\\n", sum);
    
    // Освобождаем память
    free(numbers);
    numbers = NULL;
    
    printf("Память освобождена. Программа завершена.\\n");
    
    return 0;
}`}
            </pre>
          </div>
          <div className="mt-4 p-3 bg-black rounded text-sm">
            <p className="text-white">Пример работы:</p>
            <p className="text-gray-300 text-xs">
              Сколько чисел вы хотите ввести? 3<br/>
              Введите 3 чисел:<br/>
              Число 1: 10<br/>
              Число 2: 20<br/>
              Число 3: 30<br/>
              <br/>
              Вы ввели числа:<br/>
              10 20 30<br/>
              Сумма: 60<br/>
              Память освобождена. Программа завершена.
            </p>
          </div>
        </div>
      </div>

      {/* Заключение */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <div className="flex items-start gap-3">
          <div className="bg-green-500/20 p-2 rounded-lg flex-shrink-0">
            <HardDrive className="w-5 h-5 text-green-400" />
          </div>
          <div>
            <h3 className="font-bold text-white mb-2">Отлично! 💾</h3>
            <p className="text-gray-300">
              Теперь вы умеете работать с динамической памятью — выделять её с помощью <code className="bg-gray-700 px-1.5 py-0.5 rounded">malloc()</code> 
              и освобождать с помощью <code className="bg-gray-700 px-1.5 py-0.5 rounded">free()</code>. Это мощный инструмент для создания гибких и эффективных программ.
              Помните: с большой силой приходит большая ответственность — всегда освобождайте выделенную память!
              В следующем уроке мы научимся работать с файлами и сохранять данные на диск.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Part1;