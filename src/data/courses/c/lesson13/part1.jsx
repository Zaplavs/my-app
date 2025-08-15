// src/data/courses/c/lesson13/part1.jsx
import React from 'react';
import { User, Users, Database, Box, Zap, Building } from 'lucide-react';

const Part1 = () => {
  return (
    <div className="space-y-8 text-gray-200">
      {/* Вступление */}
      <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 backdrop-blur-sm border border-blue-700/30 rounded-2xl p-6 shadow-lg">
        <div className="flex items-start gap-4">
          <div className="bg-blue-500/20 p-3 rounded-lg">
            <User className="w-6 h-6 text-blue-400" />
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">👷 Урок 13: Структуры — создай своего рабочего</h1>
            <h2 className="text-xl font-semibold text-blue-300 mb-3">Как объединять разные данные в одну сущность</h2>
            <p className="text-gray-300">
              <span className="font-medium text-yellow-400">🎯 Цель урока:</span> Понять, что такое структуры и как их использовать для объединения связанных данных.
            </p>
          </div>
        </div>
      </div>

      {/* Что такое структуры? */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Box className="w-5 h-5 text-green-400" />
          Что такое структуры?
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            <span className="font-medium text-green-300">Структура</span> — это пользовательский тип данных, который позволяет объединить несколько переменных <span className="font-medium">разных типов</span> в одну логическую единицу.
          </p>
          <div className="mt-4 p-3 bg-blue-900/20 border border-blue-700/30 rounded-lg flex items-start gap-2">
            <Zap className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
            <p className="text-blue-300 text-sm">
              <span className="font-medium">💡 Представьте:</span> Структура — как папка с документами работника. 
              В папке лежат разные документы (имя, возраст, зарплата), но все они относятся к одному человеку.
            </p>
          </div>
          <div className="mt-4 grid md:grid-cols-2 gap-4">
            <div className="bg-gray-900/50 p-4 rounded-lg">
              <h4 className="font-medium text-white mb-2">Без структур:</h4>
              <pre className="text-gray-300 text-sm bg-black p-2 rounded">
                <code>char name[50] = "Иван";<br/>int age = 30;<br/>float salary = 2500.0;</code>
              </pre>
              <p className="text-gray-400 text-xs mt-1">Отдельные переменные для каждого свойства</p>
            </div>
            <div className="bg-gray-900/50 p-4 rounded-lg">
              <h4 className="font-medium text-white mb-2">Со структурами:</h4>
              <pre className="text-gray-300 text-sm bg-black p-2 rounded">
                <code>struct Worker w = {"Иван", 30, 2500.0};<br/>printf("%s\\n", w.name);</code>
              </pre>
              <p className="text-gray-400 text-xs mt-1">Один объект содержит все данные</p>
            </div>
          </div>
        </div>
      </div>

      {/* Зачем нужны структуры? */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Zap className="w-5 h-5 text-purple-400" />
          Зачем нужны структуры?
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-gray-900/50 p-5 rounded-xl border border-green-700/30">
            <h3 className="font-bold text-green-300 mb-3">✅ Преимущества:</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-300">
              <li><span className="font-medium">Логическая группировка</span> связанных данных</li>
              <li><span className="font-medium">Удобство</span> работы с комплексными объектами</li>
              <li><span className="font-medium">Читаемость кода</span> — всё в одном месте</li>
              <li><span className="font-medium">Переиспользуемость</span> — можно создавать много объектов одного типа</li>
              <li><span className="font-medium">Передача в функции</span> как один параметр</li>
            </ul>
          </div>
          <div className="bg-gray-900/50 p-5 rounded-xl border border-blue-700/30">
            <h3 className="font-bold text-blue-300 mb-3">🔧 Практические примеры:</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-300">
              <li>Информация о работнике (имя, возраст, зарплата)</li>
              <li>Данные о студенте (ФИО, группа, оценки)</li>
              <li>Координаты точки (x, y, z)</li>
              <li>Информация о книге (название, автор, год)</li>
              <li>Данные автомобиля (марка, модель, год выпуска)</li>
            </ul>
            <div className="mt-3 p-2 bg-blue-900/20 border border-blue-700/30 rounded text-blue-300 text-xs">
              💡 <span className="font-medium">Факт:</span> Операционные системы используют структуры миллионами для управления процессами!
            </div>
          </div>
        </div>
        <div className="mt-6 p-4 bg-yellow-900/20 border border-yellow-700/30 rounded-lg">
          <p className="text-yellow-300 text-sm">
            ⚠️ <span className="font-medium">Важно:</span> Структуры — это основа объектно-ориентированного программирования и работы со сложными данными!
          </p>
        </div>
      </div>

      {/* Создание и использование структур */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <User className="w-5 h-5 text-cyan-400" />
          Создание и использование структур
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Структуры создаются и используются по определенным правилам:
          </p>
        </div>

        <div className="mt-6 space-y-6">
          <div className="bg-gray-900/50 p-5 rounded-xl border border-cyan-700/30">
            <h3 className="font-bold text-cyan-300 mb-3">Объявление структуры:</h3>
            <div className="bg-gray-800 p-4 rounded-lg">
              <pre className="text-cyan-300 text-center text-lg">
                <code>struct имя_структуры {"{"}<br/>&nbsp;&nbsp;тип1 поле1;<br/>&nbsp;&nbsp;тип2 поле2;<br/>&nbsp;&nbsp;// ... другие поля<br/>{"}"};</code>
              </pre>
            </div>
            <div className="mt-4 space-y-3 text-sm">
              <div className="bg-gray-800/50 p-3 rounded">
                <p className="font-medium text-white mb-1">struct</p>
                <p className="text-gray-300">Ключевое слово для объявления структуры</p>
              </div>
              <div className="bg-gray-800/50 p-3 rounded">
                <p className="font-medium text-white mb-1">имя_структуры</p>
                <p className="text-gray-300">Уникальное имя типа структуры</p>
              </div>
              <div className="bg-gray-800/50 p-3 rounded">
                <p className="font-medium text-white mb-1">поля</p>
                <p className="text-gray-300">Переменные разных типов внутри структуры</p>
              </div>
            </div>
          </div>

          <div className="bg-gray-900/50 p-5 rounded-xl border border-green-700/30">
            <h3 className="font-bold text-green-300 mb-3">Полный пример структуры Worker:</h3>
            <div className="bg-gray-800 p-4 rounded-lg">
              <pre className="text-green-300 text-sm">
{`#include <stdio.h>
#include <string.h>

// Объявление структуры
struct Worker {
    char name[50];    // Имя работника
    int age;          // Возраст
    float salary;     // Зарплата
};

int main() {
    // Создание переменной типа struct Worker
    struct Worker worker1;
    
    // Заполнение полей структуры
    strcpy(worker1.name, "Иван Петров");
    worker1.age = 30;
    worker1.salary = 2500.50;
    
    // Вывод информации о работнике
    printf("=== Информация о работнике ===\\n");
    printf("Имя: %s\\n", worker1.name);
    printf("Возраст: %d лет\\n", worker1.age);
    printf("Зарплата: %.2f руб.\\n", worker1.salary);
    
    return 0;
}`}
              </pre>
            </div>
            <div className="mt-3 p-3 bg-black rounded text-sm">
              <p className="text-white">Вывод:</p>
              <p className="text-gray-300 text-xs">
                === Информация о работнике ===<br/>
                Имя: Иван Петров<br/>
                Возраст: 30 лет<br/>
                Зарплата: 2500.50 руб.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Инициализация структур */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Database className="w-5 h-5 text-orange-400" />
          Способы инициализации структур
        </h2>
        
        <div className="mt-6 space-y-6">
          <div className="bg-gray-900/50 p-5 rounded-xl border border-orange-700/30">
            <h3 className="font-bold text-orange-300 mb-3">1. Инициализация при создании:</h3>
            <div className="bg-gray-800 p-3 rounded">
              <pre className="text-orange-300 text-sm">
{`// Полная инициализация
struct Worker worker1 = {"Анна Сидорова", 25, 2200.00};

// Частичная инициализация (остальные поля = 0)
struct Worker worker2 = {"Петр Иванов", 35};

// Инициализация нулями
struct Worker worker3 = {0};`}
              </pre>
            </div>
          </div>

          <div className="bg-gray-900/50 p-5 rounded-xl border border-blue-700/30">
            <h3 className="font-bold text-blue-300 mb-3">2. Последовательное заполнение:</h3>
            <div className="bg-gray-800 p-3 rounded">
              <pre className="text-blue-300 text-sm">
{`struct Worker worker;
strcpy(worker.name, "Мария Козлова");
worker.age = 28;
worker.salary = 2800.75;`}
              </pre>
            </div>
          </div>

          <div className="bg-gray-900/50 p-5 rounded-xl border border-purple-700/30">
            <h3 className="font-bold text-purple-300 mb-3">3. Дизайнерская инициализация (C99):</h3>
            <div className="bg-gray-800 p-3 rounded">
              <pre className="text-purple-300 text-sm">
{`struct Worker worker = {
    .name = "Алексей Новиков",
    .age = 32,
    .salary = 3000.00
};`}
              </pre>
            </div>
            <div className="mt-2 p-2 bg-purple-900/20 border border-purple-700/30 rounded text-purple-300 text-xs">
              💡 <span className="font-medium">Совет:</span> Дизайнерская инициализация делает код более читаемым!
            </div>
          </div>
        </div>
      </div>

      {/* typedef для упрощения работы */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Building className="w-5 h-5 text-red-400" />
          typedef — упрощаем работу со структурами
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            <code className="bg-gray-700 px-1.5 py-0.5 rounded">typedef</code> позволяет создавать псевдонимы для типов данных, делая код более читаемым:
          </p>
        </div>

        <div className="mt-6 grid md:grid-cols-2 gap-6">
          <div className="bg-gray-900/50 p-5 rounded-xl border border-red-700/30">
            <h3 className="font-bold text-red-300 mb-3">❌ Без typedef (неудобно):</h3>
            <div className="bg-gray-800 p-3 rounded">
              <pre className="text-red-300 text-sm">
{`struct Worker {
    char name[50];
    int age;
    float salary;
};

int main() {
    struct Worker worker1;  // Длинная запись
    struct Worker workers[10];  // Массив структур
    return 0;
}`}
              </pre>
            </div>
          </div>
          <div className="bg-gray-900/50 p-5 rounded-xl border border-green-700/30">
            <h3 className="font-bold text-green-300 mb-3">✅ С typedef (удобно):</h3>
            <div className="bg-gray-800 p-3 rounded">
              <pre className="text-green-300 text-sm">
{`typedef struct {
    char name[50];
    int age;
    float salary;
} Worker;  // Теперь Worker - это новый тип

int main() {
    Worker worker1;      // Короткая запись
    Worker workers[10];  // Массив структур
    return 0;
}`}
              </pre>
            </div>
            <div className="mt-2 p-2 bg-green-900/20 border border-green-700/30 rounded text-green-300 text-xs">
              ✅ <span className="font-medium">Преимущество:</span> Не нужно писать "struct" каждый раз!
            </div>
          </div>
        </div>
      </div>

      {/* Работа с массивами структур */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Users className="w-5 h-5 text-yellow-400" />
          Массивы структур — команда работников
        </h2>
        <div className="bg-gray-900/50 p-5 rounded-xl border border-yellow-700/30">
          <div className="bg-gray-800 p-4 rounded-lg">
            <pre className="text-yellow-300 text-sm">
{`#include <stdio.h>
#include <string.h>

typedef struct {
    char name[50];
    int age;
    float salary;
} Worker;

int main() {
    // Массив из 3 работников
    Worker team[3] = {
        {"Иван Петров", 30, 2500.00},
        {"Анна Сидорова", 25, 2200.50},
        {"Петр Иванов", 35, 2800.75}
    };
    
    printf("=== Команда работников ===\\n");
    
    // Вывод информации о всех работниках
    for (int i = 0; i < 3; i++) {
        printf("Работник %d:\\n", i + 1);
        printf("  Имя: %s\\n", team[i].name);
        printf("  Возраст: %d лет\\n", team[i].age);
        printf("  Зарплата: %.2f руб.\\n", team[i].salary);
        printf("\\n");
    }
    
    // Подсчет общей зарплаты
    float total_salary = 0;
    for (int i = 0; i < 3; i++) {
        total_salary += team[i].salary;
    }
    
    printf("Общая зарплата команды: %.2f руб.\\n", total_salary);
    
    return 0;
}`}
            </pre>
          </div>
          <div className="mt-4 p-3 bg-black rounded text-sm">
            <p className="text-white">Вывод:</p>
            <p className="text-gray-300 text-xs">
              === Команда работников ===<br/>
              Работник 1:<br/>
              &nbsp;&nbsp;Имя: Иван Петров<br/>
              &nbsp;&nbsp;Возраст: 30 лет<br/>
              &nbsp;&nbsp;Зарплата: 2500.00 руб.<br/>
              <br/>
              Работник 2:<br/>
              &nbsp;&nbsp;Имя: Анна Сидорова<br/>
              &nbsp;&nbsp;Возраст: 25 лет<br/>
              &nbsp;&nbsp;Зарплата: 2200.50 руб.<br/>
              <br/>
              Работник 3:<br/>
              &nbsp;&nbsp;Имя: Петр Иванов<br/>
              &nbsp;&nbsp;Возраст: 35 лет<br/>
              &nbsp;&nbsp;Зарплата: 2800.75 руб.<br/>
              <br/>
              Общая зарплата команды: 7501.25 руб.
            </p>
          </div>
        </div>
      </div>

      {/* Заключение */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <div className="flex items-start gap-3">
          <div className="bg-green-500/20 p-2 rounded-lg flex-shrink-0">
            <User className="w-5 h-5 text-green-400" />
          </div>
          <div>
            <h3 className="font-bold text-white mb-2">Отлично! 👷</h3>
            <p className="text-gray-300">
              Теперь вы умеете создавать и использовать структуры — мощный инструмент для объединения связанных данных. 
              Структуры позволяют создавать сложные объекты и работать с ними как с единым целым.
              Это основа для создания более продвинутых программ и понимания объектно-ориентированного программирования.
              В следующем уроке мы научимся передавать структуры в функции и работать с указателями на структуры.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Part1;