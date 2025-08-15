// src/data/courses/c/lesson15/part2.jsx
import React from 'react';
import { Code, Bug, Shield, HardDrive, Zap, CheckCircle } from 'lucide-react';

const Part1 = () => {
  return (
    <div className="space-y-8 text-gray-200">
      {/* Вступление */}
      <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 backdrop-blur-sm border border-blue-700/30 rounded-2xl p-6 shadow-lg">
        <div className="flex items-start gap-4">
          <div className="bg-blue-500/20 p-3 rounded-lg">
            <Code className="w-6 h-6 text-blue-400" />
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">🔧 Урок 16: Реализация и тестирование системы учета рабочих</h1>
            <h2 className="text-xl font-semibold text-blue-300 mb-3">Создание полноценной программы с проверкой качества</h2>
            <p className="text-gray-300">
              <span className="font-medium text-yellow-400">🎯 Цель урока:</span> Реализовать все функции проекта и провести комплексное тестирование.
            </p>
          </div>
        </div>
      </div>

      {/* План реализации */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Zap className="w-5 h-5 text-green-400" />
          План реализации проекта
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Реализация проекта будет проходить поэтапно, начиная с базовых структур данных и заканчивая комплексной системой:
          </p>
        </div>

        <div className="mt-6 space-y-4">
          <div className="bg-gray-900/50 p-4 rounded-xl border border-green-700/30">
            <h3 className="font-bold text-green-300 mb-2 flex items-center gap-2">
              <span className="bg-green-600 w-6 h-6 rounded-full flex items-center justify-center text-white text-sm">1</span>
              Создание структуры данных
            </h3>
            <p className="text-gray-300 text-sm ml-8">
              Определяем структуру Worker и реализуем базовые функции для работы с ней
            </p>
          </div>
          
          <div className="bg-gray-900/50 p-4 rounded-xl border border-blue-700/30">
            <h3 className="font-bold text-blue-300 mb-2 flex items-center gap-2">
              <span className="bg-blue-600 w-6 h-6 rounded-full flex items-center justify-center text-white text-sm">2</span>
              Реализация основных функций
            </h3>
            <p className="text-gray-300 text-sm ml-8">
              Создаем функции добавления, отображения, поиска и работы с файлами
            </p>
          </div>
          
          <div className="bg-gray-900/50 p-4 rounded-xl border border-purple-700/30">
            <h3 className="font-bold text-purple-300 mb-2 flex items-center gap-2">
              <span className="bg-purple-600 w-6 h-6 rounded-full flex items-center justify-center text-white text-sm">3</span>
              Создание пользовательского интерфейса
            </h3>
            <p className="text-gray-300 text-sm ml-8">
              Реализуем интерактивное меню и основной цикл программы
            </p>
          </div>
          
          <div className="bg-gray-900/50 p-4 rounded-xl border border-orange-700/30">
            <h3 className="font-bold text-orange-300 mb-2 flex items-center gap-2">
              <span className="bg-orange-600 w-6 h-6 rounded-full flex items-center justify-center text-white text-sm">4</span>
              Интеграция всех компонентов
            </h3>
            <p className="text-gray-300 text-sm ml-8">
              Объединяем все функции в единую работающую систему
            </p>
          </div>
          
          <div className="bg-gray-900/50 p-4 rounded-xl border border-red-700/30">
            <h3 className="font-bold text-red-300 mb-2 flex items-center gap-2">
              <span className="bg-red-600 w-6 h-6 rounded-full flex items-center justify-center text-white text-sm">5</span>
              Комплексное тестирование
            </h3>
            <p className="text-gray-300 text-sm ml-8">
              Проверяем корректность работы, отсутствие утечек памяти и совместимость
            </p>
          </div>
        </div>
      </div>

      {/* Реализация структуры данных */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <HardDrive className="w-5 h-5 text-cyan-400" />
          Шаг 1: Создание структуры Worker
        </h2>
        
        <div className="mt-6 space-y-6">
          <div className="bg-gray-900/50 p-5 rounded-xl border border-cyan-700/30">
            <h3 className="font-bold text-cyan-300 mb-3">Определение структуры:</h3>
            <div className="bg-gray-800 p-4 rounded-lg">
              <pre className="text-cyan-300 text-sm">
{`#include <stdio.h>
#include <stdlib.h>
#include <string.h>

#define MAX_WORKERS 100
#define NAME_LENGTH 50

// Структура для хранения информации о рабочем
typedef struct {
    int id;                    // Табельный номер
    char name[NAME_LENGTH];    // ФИО
    int age;                   // Возраст
    float salary;              // Зарплата
    char position[30];         // Должность
    char department[30];       // Отдел
} Worker;

// Глобальные переменные для хранения данных
Worker workers[MAX_WORKERS];
int worker_count = 0;`}
              </pre>
            </div>
            <div className="mt-3 p-2 bg-cyan-900/20 border border-cyan-700/30 rounded text-cyan-300 text-xs">
              💡 <span className="font-medium">Совет:</span> Используем typedef для удобства, 
              а глобальные переменные упростят работу с данными в функциях.
            </div>
          </div>

          <div className="bg-gray-900/50 p-5 rounded-xl border border-green-700/30">
            <h3 className="font-bold text-green-300 mb-3">Функция добавления рабочего:</h3>
            <div className="bg-gray-800 p-4 rounded-lg">
              <pre className="text-green-300 text-sm">
{`int addWorker() {
    if (worker_count >= MAX_WORKERS) {
        printf("Ошибка: Достигнуто максимальное количество рабочих!\\n");
        return 0;
    }
    
    Worker new_worker;
    
    printf("Введите табельный номер: ");
    scanf("%d", &new_worker.id);
    
    // Проверка на уникальность табельного номера
    for (int i = 0; i < worker_count; i++) {
        if (workers[i].id == new_worker.id) {
            printf("Ошибка: Рабочий с таким табельным номером уже существует!\\n");
            return 0;
        }
    }
    
    printf("Введите ФИО: ");
    scanf(" %[^\n]", new_worker.name);
    
    printf("Введите возраст: ");
    scanf("%d", &new_worker.age);
    
    printf("Введите зарплату: ");
    scanf("%f", &new_worker.salary);
    
    printf("Введите должность: ");
    scanf(" %[^\n]", new_worker.position);
    
    printf("Введите отдел: ");
    scanf(" %[^\n]", new_worker.department);
    
    // Добавляем нового рабочего в массив
    workers[worker_count] = new_worker;
    worker_count++;
    
    printf("Рабочий успешно добавлен!\\n");
    return 1;
}`}
              </pre>
            </div>
          </div>
        </div>
      </div>

      {/* Реализация отображения и поиска */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <CheckCircle className="w-5 h-5 text-purple-400" />
          Шаг 2: Функции отображения и поиска
        </h2>
        
        <div className="mt-6 space-y-6">
          <div className="bg-gray-900/50 p-5 rounded-xl border border-purple-700/30">
            <h3 className="font-bold text-purple-300 mb-3">Функция отображения всех рабочих:</h3>
            <div className="bg-gray-800 p-4 rounded-lg">
              <pre className="text-purple-300 text-sm">
{`void showAllWorkers() {
    if (worker_count == 0) {
        printf("Список рабочих пуст!\\n");
        return;
    }
    
    printf("\\n=== Список всех рабочих ===\\n");
    printf("%-5s %-25s %-5s %-10s %-20s %-15s\\n", 
           "ID", "ФИО", "Возр", "Зарплата", "Должность", "Отдел");
    printf("%s\\n", "-------------------------------------------------------------");
    
    for (int i = 0; i < worker_count; i++) {
        printf("%-5d %-25s %-5d %-10.2f %-20s %-15s\\n",
               workers[i].id,
               workers[i].name,
               workers[i].age,
               workers[i].salary,
               workers[i].position,
               workers[i].department);
    }
    printf("\\nВсего рабочих: %d\\n", worker_count);
}`}
              </pre>
            </div>
          </div>

          <div className="bg-gray-900/50 p-5 rounded-xl border border-orange-700/30">
            <h3 className="font-bold text-orange-300 mb-3">Функция поиска по имени:</h3>
            <div className="bg-gray-800 p-4 rounded-lg">
              <pre className="text-orange-300 text-sm">
{`void findWorker() {
    if (worker_count == 0) {
        printf("Список рабочих пуст!\\n");
        return;
    }
    
    char search_name[NAME_LENGTH];
    printf("Введите ФИО для поиска: ");
    scanf(" %[^\n]", search_name);
    
    int found = 0;
    printf("\\n=== Результаты поиска ===\\n");
    
    for (int i = 0; i < worker_count; i++) {
        if (strstr(workers[i].name, search_name) != NULL) {
            printf("ID: %d\\n", workers[i].id);
            printf("ФИО: %s\\n", workers[i].name);
            printf("Возраст: %d\\n", workers[i].age);
            printf("Зарплата: %.2f\\n", workers[i].salary);
            printf("Должность: %s\\n", workers[i].position);
            printf("Отдел: %s\\n", workers[i].department);
            printf("------------------------\\n");
            found = 1;
        }
    }
    
    if (!found) {
        printf("Рабочий с таким именем не найден.\\n");
    }
}`}
              </pre>
            </div>
          </div>
        </div>
      </div>

      {/* Работа с файлами */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <HardDrive className="w-5 h-5 text-blue-400" />
          Шаг 3: Функции работы с файлами
        </h2>
        
        <div className="mt-6 space-y-6">
          <div className="bg-gray-900/50 p-5 rounded-xl border border-blue-700/30">
            <h3 className="font-bold text-blue-300 mb-3">Функция сохранения в файл:</h3>
            <div className="bg-gray-800 p-4 rounded-lg">
              <pre className="text-blue-300 text-sm">
{`int saveToFile() {
    FILE *file = fopen("workers.dat", "w");
    
    if (file == NULL) {
        printf("Ошибка открытия файла для записи!\\n");
        return 0;
    }
    
    // Записываем количество рабочих
    fprintf(file, "%d\\n", worker_count);
    
    // Записываем данные каждого рабочего
    for (int i = 0; i < worker_count; i++) {
        fprintf(file, "%d\\n", workers[i].id);
        fprintf(file, "%s\\n", workers[i].name);
        fprintf(file, "%d\\n", workers[i].age);
        fprintf(file, "%.2f\\n", workers[i].salary);
        fprintf(file, "%s\\n", workers[i].position);
        fprintf(file, "%s\\n", workers[i].department);
    }
    
    fclose(file);
    printf("Данные успешно сохранены в файл workers.dat\\n");
    return 1;
}`}
              </pre>
            </div>
          </div>

          <div className="bg-gray-900/50 p-5 rounded-xl border border-green-700/30">
            <h3 className="font-bold text-green-300 mb-3">Функция загрузки из файла:</h3>
            <div className="bg-gray-800 p-4 rounded-lg">
              <pre className="text-green-300 text-sm">
{`int loadFromFile() {
    FILE *file = fopen("workers.dat", "r");
    
    if (file == NULL) {
        printf("Файл workers.dat не найден. Будет создан новый.\\n");
        return 0;
    }
    
    // Читаем количество рабочих
    if (fscanf(file, "%d\\n", &worker_count) != 1) {
        printf("Ошибка чтения данных из файла!\\n");
        fclose(file);
        return 0;
    }
    
    // Читаем данные каждого рабочего
    for (int i = 0; i < worker_count; i++) {
        if (fscanf(file, "%d\\n", &workers[i].id) != 1) break;
        if (fgets(workers[i].name, NAME_LENGTH, file) == NULL) break;
        workers[i].name[strcspn(workers[i].name, "\\n")] = 0; // Удаляем \\n
        if (fscanf(file, "%d\\n", &workers[i].age) != 1) break;
        if (fscanf(file, "%f\\n", &workers[i].salary) != 1) break;
        if (fgets(workers[i].position, 30, file) == NULL) break;
        workers[i].position[strcspn(workers[i].position, "\\n")] = 0;
        if (fgets(workers[i].department, 30, file) == NULL) break;
        workers[i].department[strcspn(workers[i].department, "\\n")] = 0;
    }
    
    fclose(file);
    printf("Данные успешно загружены из файла workers.dat\\n");
    printf("Загружено %d записей\\n", worker_count);
    return 1;
}`}
              </pre>
            </div>
          </div>
        </div>
      </div>

      {/* Главное меню и основной цикл */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Zap className="w-5 h-5 text-yellow-400" />
          Шаг 4: Главное меню и основной цикл
        </h2>
        
        <div className="bg-gray-900/50 p-5 rounded-xl border border-yellow-700/30">
          <h3 className="font-bold text-yellow-300 mb-3">Реализация меню:</h3>
          <div className="bg-gray-800 p-4 rounded-lg">
            <pre className="text-yellow-300 text-sm">
{`void showMenu() {
    printf("\\n=== Система учета рабочих завода ===\\n");
    printf("1. Добавить рабочего\\n");
    printf("2. Просмотреть всех рабочих\\n");
    printf("3. Найти рабочего по имени\\n");
    printf("4. Сохранить данные в файл\\n");
    printf("5. Загрузить данные из файла\\n");
    printf("6. Выход\\n");
    printf("Выберите действие: ");
}

int main() {
    int choice;
    
    // Пытаемся загрузить данные при запуске
    loadFromFile();
    
    while (1) {
        showMenu();
        scanf("%d", &choice);
        
        switch (choice) {
            case 1:
                addWorker();
                break;
            case 2:
                showAllWorkers();
                break;
            case 3:
                findWorker();
                break;
            case 4:
                saveToFile();
                break;
            case 5:
                loadFromFile();
                break;
            case 6:
                printf("Сохраняем данные перед выходом...\\n");
                saveToFile();
                printf("До свидания!\\n");
                return 0;
            default:
                printf("Неверный выбор! Попробуйте снова.\\n");
        }
        
        printf("\\nНажмите Enter для продолжения...");
        while (getchar() != '\\n');
        getchar();
    }
    
    return 0;
}`}
            </pre>
          </div>
        </div>
      </div>

      {/* Заключение */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <div className="flex items-start gap-3">
          <div className="bg-green-500/20 p-2 rounded-lg flex-shrink-0">
            <Code className="w-5 h-5 text-green-400" />
          </div>
          <div>
            <h3 className="font-bold text-white mb-2">Поздравляем! 🎉</h3>
            <p className="text-gray-300">
              Теперь у вас есть полная реализация системы учета рабочих завода! Эта программа объединяет все изученные 
              концепции: структуры, функции, файлы, массивы и пользовательский интерфейс. 
              В следующем уроке мы проведем комплексное тестирование и оптимизацию программы.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Part1;