// src/data/courses/c/lesson13/part3.jsx
import React, { useState } from 'react';
import { Monitor, FileText, Play, Code, Edit3, User, CheckCircle, Users } from 'lucide-react';

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
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">💻 Практическое задание: Структуры в C</h1>
            <p className="text-gray-300">
              <span className="font-medium text-yellow-400">🎯 Цель:</span> На практике освоить создание и использование структур для объединения связанных данных.
            </p>
          </div>
        </div>
      </div>

      {/* Задание 1: Простая структура Student */}
      <div className={`bg-gray-800/40 backdrop-blur-sm border rounded-2xl p-6 shadow-xl ${completedTasks.task1 ? 'border-green-700/50' : 'border-gray-700/50'}`}>
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <FileText className="w-5 h-5 text-green-400" />
          Задание 1: Структура студента
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Создайте программу для работы с информацией о студенте:
          </p>
        </div>
        <div className="mt-6 space-y-6">
          <div className="bg-gray-900/50 p-5 rounded-xl border border-green-700/30">
            <h3 className="font-bold text-green-300 mb-3 flex items-center gap-2">
              <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">1</span>
              Создайте структуру Student
            </h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>Создайте файл <code className="bg-gray-700 px-1.5 py-0.5 rounded">student.c</code></li>
              <li>Объявите структуру <code className="bg-gray-700 px-1.5 py-0.5 rounded">Student</code> с полями: имя (строка 50 символов), возраст (int), средний балл (float)</li>
              <li>Используйте <code className="bg-gray-700 px-1.5 py-0.5 rounded">typedef</code> для упрощения работы</li>
              <li>Создайте переменную типа Student и заполните её данными</li>
              <li>Выведите информацию о студенте в форматированном виде</li>
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
#include <string.h>

typedef struct {
    char name[50];
    int age;
    float average_grade;
} Student;

int main() {
    // Создание и инициализация студента
    Student student1 = {
        .name = "Анна Смирнова",
        .age = 20,
        .average_grade = 4.75
    };
    
    // Вывод информации
    printf("=== Информация о студенте ===\\n");
    printf("Имя: %s\\n", student1.name);
    printf("Возраст: %d лет\\n", student1.age);
    printf("Средний балл: %.2f\\n", student1.average_grade);
    
    // Изменение данных
    student1.age = 21;
    student1.average_grade = 4.85;
    
    printf("\\n=== Обновленная информация ===\\n");
    printf("Возраст: %d лет\\n", student1.age);
    printf("Средний балл: %.2f\\n", student1.average_grade);
    
    return 0;
}`}
              </pre>
            </div>
            <div className="mt-3 p-3 bg-black rounded text-sm">
              <p className="text-white">Примерный вывод:</p>
              <p className="text-gray-300 text-xs">
                === Информация о студенте ===<br/>
                Имя: Анна Смирнова<br/>
                Возраст: 20 лет<br/>
                Средний балл: 4.75<br/>
                <br/>
                === Обновленная информация ===<br/>
                Возраст: 21 лет<br/>
                Средний балл: 4.85
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
            Я создал программу со структурой Student
          </label>
          {completedTasks.task1 && <CheckCircle className="ml-2 w-5 h-5 text-green-400" />}
        </div>
      </div>

      {/* Задание 2: Массив структур Book */}
      <div className={`bg-gray-800/40 backdrop-blur-sm border rounded-2xl p-6 shadow-xl ${completedTasks.task2 ? 'border-green-700/50' : 'border-gray-700/50'}`}>
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Edit3 className="w-5 h-5 text-purple-400" />
          Задание 2: Библиотека книг
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Создайте программу для управления библиотечным фондом:
          </p>
        </div>
        <div className="mt-6 space-y-6">
          <div className="bg-gray-900/50 p-5 rounded-xl border border-purple-700/30">
            <h3 className="font-bold text-purple-300 mb-3">Реализуйте следующее:</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>Создайте файл <code className="bg-gray-700 px-1.5 py-0.5 rounded">library.c</code></li>
              <li>Объявите структуру <code className="bg-gray-700 px-1.5 py-0.5 rounded">Book</code> с полями: название, автор, год издания, цена</li>
              <li>Создайте массив из 5 книг и заполните его данными</li>
              <li>Реализуйте функцию для вывода информации о всех книгах</li>
              <li>Найдите и выведите самую дорогую книгу</li>
              <li>Подсчитайте среднюю цену всех книг</li>
            </ul>
            <div className="mt-4 bg-gray-800 p-3 rounded">
              <pre className="text-purple-300 text-sm">
{`#include <stdio.h>
#include <string.h>

typedef struct {
    char title[100];
    char author[50];
    int year;
    float price;
} Book;

int main() {
    // Массив книг
    Book library[5] = {
        {"Война и мир", "Л.Н. Толстой", 1869, 1200.50},
        {"Преступление и наказание", "Ф.М. Достоевский", 1866, 850.00},
        {"Мастер и Маргарита", "М.А. Булгаков", 1967, 950.75},
        {"Евгений Онегин", "А.С. Пушкин", 1833, 680.25},
        {"Анна Каренина", "Л.Н. Толстой", 1878, 1100.00}
    };
    
    printf("=== Библиотечный фонд ===\\n");
    
    // Вывод всех книг
    for (int i = 0; i < 5; i++) {
        printf("%d. %s\\n", i + 1, library[i].title);
        printf("   Автор: %s\\n", library[i].author);
        printf("   Год: %d\\n", library[i].year);
        printf("   Цена: %.2f руб.\\n\\n", library[i].price);
    }
    
    // Поиск самой дорогой книги
    int most_expensive = 0;
    for (int i = 1; i < 5; i++) {
        if (library[i].price > library[most_expensive].price) {
            most_expensive = i;
        }
    }
    
    printf("Самая дорогая книга:\\n");
    printf("  %s (%.2f руб.)\\n", library[most_expensive].title, library[most_expensive].price);
    
    // Подсчет средней цены
    float total_price = 0;
    for (int i = 0; i < 5; i++) {
        total_price += library[i].price;
    }
    float average_price = total_price / 5;
    
    printf("Средняя цена книг: %.2f руб.\\n", average_price);
    
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
            Я создал программу с библиотечным фондом
          </label>
          {completedTasks.task2 && <CheckCircle className="ml-2 w-5 h-5 text-green-400" />}
        </div>
      </div>

      {/* Задание 3: Интерактивная работа со структурами */}
      <div className={`bg-gray-800/40 backdrop-blur-sm border rounded-2xl p-6 shadow-xl ${completedTasks.task3 ? 'border-green-700/50' : 'border-gray-700/50'}`}>
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Users className="w-5 h-5 text-cyan-400" />
          Задание 3: Управление сотрудниками компании
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Создайте программу для управления информацией о сотрудниках с интерактивным вводом:
          </p>
        </div>
        <div className="mt-6 space-y-6">
          <div className="bg-gray-900/50 p-5 rounded-xl border border-cyan-700/30">
            <h3 className="font-bold text-cyan-300 mb-3">Реализуйте следующее:</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>Создайте файл <code className="bg-gray-700 px-1.5 py-0.5 rounded">employees.c</code></li>
              <li>Объявите структуру <code className="bg-gray-700 px-1.5 py-0.5 rounded">Employee</code> с полями: табельный номер, ФИО, должность, оклад, стаж работы</li>
              <li>Запросите у пользователя количество сотрудников</li>
              <li>Динамически выделите память для массива сотрудников</li>
              <li>Заполните массив данными, введенными пользователем</li>
              <li>Выведите список всех сотрудников</li>
              <li>Найдите сотрудника с наибольшим стажем</li>
              <li>Правильно освободите выделенную память</li>
            </ul>
            <div className="mt-4 bg-gray-800 p-3 rounded">
              <pre className="text-cyan-300 text-xs">
{`#include <stdio.h>
#include <stdlib.h>
#include <string.h>

typedef struct {
    int id;
    char name[50];
    char position[50];
    float salary;
    int experience;
} Employee;

int main() {
    int n;
    
    printf("Сколько сотрудников вы хотите добавить? ");
    scanf("%d", &n);
    
    // Динамическое выделение памяти
    Employee *employees = (Employee*)malloc(n * sizeof(Employee));
    
    if (employees == NULL) {
        printf("Ошибка выделения памяти!\\n");
        return 1;
    }
    
    // Ввод данных о сотрудниках
    printf("\\nВведите информацию о сотрудниках:\\n");
    for (int i = 0; i < n; i++) {
        printf("\\nСотрудник %d:\\n", i + 1);
        
        employees[i].id = i + 1;
        
        printf("  ФИО: ");
        scanf(" %[^\n]", employees[i].name);
        
        printf("  Должность: ");
        scanf(" %[^\n]", employees[i].position);
        
        printf("  Оклад: ");
        scanf("%f", &employees[i].salary);
        
        printf("  Стаж (лет): ");
        scanf("%d", &employees[i].experience);
    }
    
    // Вывод информации о всех сотрудниках
    printf("\\n\\n=== Список сотрудников ===\\n");
    for (int i = 0; i < n; i++) {
        printf("%d. %s\\n", employees[i].id, employees[i].name);
        printf("   Должность: %s\\n", employees[i].position);
        printf("   Оклад: %.2f руб.\\n", employees[i].salary);
        printf("   Стаж: %d лет\\n\\n", employees[i].experience);
    }
    
    // Поиск сотрудника с наибольшим стажем
    int max_exp_index = 0;
    for (int i = 1; i < n; i++) {
        if (employees[i].experience > employees[max_exp_index].experience) {
            max_exp_index = i;
        }
    }
    
    printf("Сотрудник с наибольшим стажем:\\n");
    printf("  %s (%d лет)\\n", employees[max_exp_index].name, employees[max_exp_index].experience);
    
    // Освобождение памяти
    free(employees);
    employees = NULL;
    
    printf("\\nПамять освобождена. Программа завершена.\\n");
    
    return 0;
}`}
              </pre>
            </div>
            <div className="mt-4 p-3 bg-yellow-900/20 border border-yellow-700/30 rounded-lg">
              <p className="text-yellow-300 text-sm">
                ⚠️ <span className="font-medium">Важно:</span> Обратите внимание на использование <code className="bg-gray-700 px-1.5 py-0.5 rounded">scanf(" %[^\n]", ...)</code> 
                для ввода строк с пробелами и на правильное освобождение памяти!
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
            Я создал программу с управлением сотрудниками
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
              Теперь вы уверенно можете создавать и использовать структуры в C. 
              Вы научились объединять связанные данные, работать с массивами структур 
              и сочетать структуры с динамической памятью для создания гибких программ.
              В следующем уроке мы научимся передавать структуры в функции и работать с указателями на структуры.
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