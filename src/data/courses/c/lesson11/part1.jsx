// src/data/courses/c/lesson11/part1.jsx
import React from 'react';
import { Navigation, MapPin, Target, Zap, AlertTriangle, Database } from 'lucide-react';

const Part1 = () => {
  return (
    <div className="space-y-8 text-gray-200">
      {/* Вступление */}
      <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 backdrop-blur-sm border border-blue-700/30 rounded-2xl p-6 shadow-lg">
        <div className="flex items-start gap-4">
          <div className="bg-blue-500/20 p-3 rounded-lg">
            <Navigation className="w-6 h-6 text-blue-400" />
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">🧭 Урок 11: Указатели — что такое & и *</h1>
            <h2 className="text-xl font-semibold text-blue-300 mb-3">Как работать с адресами памяти</h2>
            <p className="text-gray-300">
              <span className="font-medium text-yellow-400">🎯 Цель урока:</span> Понять, что такое указатели, как их использовать и почему они важны в C.
            </p>
          </div>
        </div>
      </div>

      {/* Что такое указатели? */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <MapPin className="w-5 h-5 text-green-400" />
          Что такое указатели?
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            <span className="font-medium text-green-300">Указатель</span> — это переменная, которая хранит <span className="font-medium">адрес</span> другой переменной в памяти компьютера.
          </p>
          <div className="mt-4 p-3 bg-blue-900/20 border border-blue-700/30 rounded-lg flex items-start gap-2">
            <Zap className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
            <p className="text-blue-300 text-sm">
              <span className="font-medium">💡 Представьте:</span> Указатель — как почтовый адрес. 
              Сам адрес не является домом, но он говорит, где находится дом. 
              Также и указатель — не значение переменной, а её "адрес" в памяти.
            </p>
          </div>
          <div className="mt-4 grid md:grid-cols-2 gap-4">
            <div className="bg-gray-900/50 p-4 rounded-lg">
              <h4 className="font-medium text-white mb-2">Обычная переменная:</h4>
              <pre className="text-gray-300 text-sm bg-black p-2 rounded">
                <code>int age = 25;</code>
              </pre>
              <p className="text-gray-400 text-xs mt-1">Переменная хранит значение 25</p>
            </div>
            <div className="bg-gray-900/50 p-4 rounded-lg">
              <h4 className="font-medium text-white mb-2">Указатель:</h4>
              <pre className="text-gray-300 text-sm bg-black p-2 rounded">
                <code>int *ptr = &age;</code>
              </pre>
              <p className="text-gray-400 text-xs mt-1">Указатель хранит адрес переменной age</p>
            </div>
          </div>
        </div>
      </div>

      {/* Основные понятия: & и * */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Target className="w-5 h-5 text-purple-400" />
          Два важных символа: & и *
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            В указателях используются два ключевых оператора:
          </p>
        </div>

        <div className="mt-6 grid md:grid-cols-2 gap-6">
          <div className="bg-gray-900/50 p-5 rounded-xl border border-green-700/30">
            <h3 className="font-bold text-green-300 mb-3 flex items-center gap-2">
              <span className="bg-gray-700 px-2 py-1 rounded">&</span>
              Амперсанд (оператор адреса)
            </h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-300">
              <li>Получает <span className="font-medium">адрес</span> переменной</li>
              <li>Используется перед именем переменной</li>
              <li>Читается как "адрес переменной"</li>
            </ul>
            <div className="mt-3 bg-gray-800 p-3 rounded">
              <pre className="text-green-300 text-sm">
{`int x = 42;
printf("Адрес x: %p\\n", &x);`}
              </pre>
            </div>
          </div>
          <div className="bg-gray-900/50 p-5 rounded-xl border border-blue-700/30">
            <h3 className="font-bold text-blue-300 mb-3 flex items-center gap-2">
              <span className="bg-gray-700 px-2 py-1 rounded">*</span>
              Звездочка (оператор разыменования)
            </h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-300">
              <li>Получает <span className="font-medium">значение</span> по адресу</li>
              <li>Используется с указателем</li>
              <li>Читается как "значение по адресу"</li>
            </ul>
            <div className="mt-3 bg-gray-800 p-3 rounded">
              <pre className="text-blue-300 text-sm">
{`int x = 42;
int *ptr = &x;
printf("Значение: %d\\n", *ptr);`}
              </pre>
            </div>
          </div>
        </div>
      </div>

      {/* Создание и использование указателей */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Navigation className="w-5 h-5 text-cyan-400" />
          Создание и использование указателей
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Указатели создаются и используются по определенным правилам:
          </p>
        </div>

        <div className="mt-6 space-y-6">
          <div className="bg-gray-900/50 p-5 rounded-xl border border-cyan-700/30">
            <h3 className="font-bold text-cyan-300 mb-3">Общая структура указателя:</h3>
            <div className="bg-gray-800 p-4 rounded-lg">
              <pre className="text-cyan-300 text-center text-lg">
                <code>тип *имя_указателя = &переменная;</code>
              </pre>
            </div>
            <div className="mt-4 grid md:grid-cols-3 gap-3 text-sm">
              <div className="bg-gray-800/50 p-3 rounded">
                <p className="font-medium text-white mb-1">тип</p>
                <p className="text-gray-300">Тип данных переменной, на которую указывает указатель</p>
              </div>
              <div className="bg-gray-800/50 p-3 rounded">
                <p className="font-medium text-white mb-1">*имя_указателя</p>
                <p className="text-gray-300">Имя указателя (звездочка часть объявления)</p>
              </div>
              <div className="bg-gray-800/50 p-3 rounded">
                <p className="font-medium text-white mb-1">&переменная</p>
                <p className="text-gray-300">Адрес переменной, на которую указывает указатель</p>
              </div>
            </div>
          </div>

          <div className="bg-gray-900/50 p-5 rounded-xl border border-green-700/30">
            <h3 className="font-bold text-green-300 mb-3">Полный пример работы с указателем:</h3>
            <div className="bg-gray-800 p-4 rounded-lg">
              <pre className="text-green-300 text-sm">
{`#include <stdio.h>

int main() {
    // Обычная переменная
    int number = 100;
    
    // Указатель на переменную number
    int *pointer = &number;
    
    // Выводим информацию
    printf("Значение number: %d\\n", number);
    printf("Адрес number: %p\\n", &number);
    printf("Значение pointer: %p\\n", pointer);
    printf("Значение по адресу pointer: %d\\n", *pointer);
    
    // Меняем значение через указатель
    *pointer = 200;
    printf("Новое значение number: %d\\n", number);
    
    return 0;
}`}
              </pre>
            </div>
            <div className="mt-3 p-3 bg-black rounded text-sm">
              <p className="text-white">Примерный вывод:</p>
              <p className="text-gray-300 text-xs">
                Значение number: 100<br/>
                Адрес number: 0x7fff5fbff6ac<br/>
                Значение pointer: 0x7fff5fbff6ac<br/>
                Значение по адресу pointer: 100<br/>
                Новое значение number: 200
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Важные концепции указателей */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <AlertTriangle className="w-5 h-5 text-orange-400" />
          Важные концепции указателей
        </h2>
        
        <div className="mt-6 space-y-6">
          <div className="bg-gray-900/50 p-5 rounded-xl border border-orange-700/30">
            <h3 className="font-bold text-orange-300 mb-3">1. Тип указателя должен соответствовать типу переменной:</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-gray-800 p-3 rounded">
                <h4 className="text-green-300 font-medium mb-2">Правильно:</h4>
                <pre className="text-green-300 text-sm">
{`int x = 42;
int *ptr = &x;  // Указатель int* на int`}
                </pre>
              </div>
              <div className="bg-gray-800 p-3 rounded">
                <h4 className="text-red-300 font-medium mb-2">Неправильно:</h4>
                <pre className="text-red-300 text-sm">
{`int x = 42;
float *ptr = &x;  // ОШИБКА! Разные типы`}
                </pre>
              </div>
            </div>
          </div>

          <div className="bg-gray-900/50 p-5 rounded-xl border border-blue-700/30">
            <h3 className="font-bold text-blue-300 mb-3">2. Инициализация указателей:</h3>
            <div className="space-y-3">
              <div className="bg-gray-800 p-3 rounded">
                <pre className="text-blue-300 text-sm">
{`// Правильная инициализация
int x = 10;
int *ptr1 = &x;        // Указатель инициализирован адресом

// Неинициализированный указатель (ОПАСНО!)
int *ptr2;             // Содержит "мусорный" адрес
*ptr2 = 20;            // ОШИБКА! Куда записываем?`}
                </pre>
              </div>
              <div className="p-2 bg-yellow-900/20 border border-yellow-700/30 rounded text-yellow-300 text-sm">
                ⚠️ <span className="font-medium">Важно:</span> Всегда инициализируйте указатели! Неиспользуемый указатель можно установить в NULL.
              </div>
            </div>
          </div>

          <div className="bg-gray-900/50 p-5 rounded-xl border border-purple-700/30">
            <h3 className="font-bold text-purple-300 mb-3">3. NULL указатель:</h3>
            <div className="bg-gray-800 p-3 rounded">
              <pre className="text-purple-300 text-sm">
{`#include <stdio.h>

int main() {
    int *ptr = NULL;  // Безопасная инициализация
    
    if (ptr == NULL) {
        printf("Указатель не указывает ни на что\\n");
    } else {
        printf("Значение: %d\\n", *ptr);
    }
    
    return 0;
}`}
              </pre>
            </div>
            <div className="mt-2 p-2 bg-purple-900/20 border border-purple-700/30 rounded text-purple-300 text-xs">
              💡 <span className="font-medium">Совет:</span> Используйте NULL для указателей, которые временно не используются.
            </div>
          </div>
        </div>
      </div>

      {/* Практическая польза указателей */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Zap className="w-5 h-5 text-red-400" />
          Зачем нужны указатели?
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-gray-900/50 p-5 rounded-xl border border-green-700/30">
            <h3 className="font-bold text-green-300 mb-3">✅ Преимущества:</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-300">
              <li><span className="font-medium">Эффективная передача данных</span> в функции (без копирования)</li>
              <li><span className="font-medium">Динамическое выделение памяти</span> во время выполнения</li>
              <li><span className="font-medium">Работа с массивами</span> на более низком уровне</li>
              <li><span className="font-medium">Создание сложных структур данных</span> (списки, деревья)</li>
              <li><span className="font-medium">Прямой доступ к памяти</span> — основа системного программирования</li>
            </ul>
          </div>
          <div className="bg-gray-900/50 p-5 rounded-xl border border-blue-700/30">
            <h3 className="font-bold text-blue-300 mb-3">🔧 Практические примеры:</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-300">
              <li>Передача больших структур в функции без копирования</li>
              <li>Изменение значений переменных внутри функций</li>
              <li>Работа с динамическими массивами</li>
              <li>Создание гибких и эффективных программ</li>
            </ul>
            <div className="mt-3 p-2 bg-blue-900/20 border border-blue-700/30 rounded text-blue-300 text-xs">
              💡 <span className="font-medium">Факт:</span> Ядро Linux использует указатели миллионами строк кода!
            </div>
          </div>
        </div>
      </div>

      {/* Пример: Указатели и функции */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Database className="w-5 h-5 text-yellow-400" />
          Пример: Указатели в функциях
        </h2>
        <div className="bg-gray-900/50 p-5 rounded-xl border border-yellow-700/30">
          <div className="bg-gray-800 p-4 rounded-lg">
            <pre className="text-yellow-300 text-sm">
{`#include <stdio.h>

// Функция, изменяющая значение через указатель
void changeValue(int *ptr) {
    *ptr = 999;
    printf("Внутри функции: %d\\n", *ptr);
}

// Функция обмена значений
void swap(int *a, int *b) {
    int temp = *a;
    *a = *b;
    *b = temp;
}

int main() {
    int x = 42;
    int y = 73;
    
    printf("До изменения: x = %d, y = %d\\n", x, y);
    
    changeValue(&x);
    printf("После изменения: x = %d\\n", x);
    
    swap(&x, &y);
    printf("После обмена: x = %d, y = %d\\n", x, y);
    
    return 0;
}`}
            </pre>
          </div>
          <div className="mt-4 p-3 bg-black rounded text-sm">
            <p className="text-white">Вывод:</p>
            <p className="text-gray-300 text-xs">
              До изменения: x = 42, y = 73<br/>
              Внутри функции: 999<br/>
              После изменения: x = 999<br/>
              После обмена: x = 73, y = 999
            </p>
          </div>
          <div className="mt-4 p-3 bg-blue-900/20 border border-blue-700/30 rounded-lg">
            <p className="text-blue-300 text-sm">
              💡 <span className="font-medium">Объяснение:</span> Без указателей функции не могли бы изменять значения переменных из main()!
            </p>
          </div>
        </div>
      </div>

      {/* Заключение */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <div className="flex items-start gap-3">
          <div className="bg-green-500/20 p-2 rounded-lg flex-shrink-0">
            <Navigation className="w-5 h-5 text-green-400" />
          </div>
          <div>
            <h3 className="font-bold text-white mb-2">Отлично! 🧭</h3>
            <p className="text-gray-300">
              Теперь вы понимаете, что такое указатели и как с ними работать. Указатели — это мощный инструмент C, 
              который дает прямой доступ к памяти и позволяет создавать эффективные программы. 
              Это основа системного программирования и продвинутой работы с данными.
              В следующем уроке мы научимся использовать указатели с массивами и функциями.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Part1;