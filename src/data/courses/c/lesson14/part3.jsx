// src/data/courses/c/lesson14/part3.jsx
import React, { useState } from 'react';
import { Monitor, FileText, Play, Code, Edit3, Save, CheckCircle, FolderOpen } from 'lucide-react';

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
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">💻 Практическое задание: Работа с файлами в C</h1>
            <p className="text-gray-300">
              <span className="font-medium text-yellow-400">🎯 Цель:</span> На практике освоить чтение и запись данных в файлы с помощью функций fopen(), fprintf(), fscanf() и fgets().
            </p>
          </div>
        </div>
      </div>

      {/* Задание 1: Запись данных о студенте в файл */}
      <div className={`bg-gray-800/40 backdrop-blur-sm border rounded-2xl p-6 shadow-xl ${completedTasks.task1 ? 'border-green-700/50' : 'border-gray-700/50'}`}>
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <FileText className="w-5 h-5 text-green-400" />
          Задание 1: Запись информации о студенте
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Создайте программу для записи информации о студенте в текстовый файл:
          </p>
        </div>
        <div className="mt-6 space-y-6">
          <div className="bg-gray-900/50 p-5 rounded-xl border border-green-700/30">
            <h3 className="font-bold text-green-300 mb-3 flex items-center gap-2">
              <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">1</span>
              Создайте программу для записи данных
            </h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>Создайте файл <code className="bg-gray-700 px-1.5 py-0.5 rounded">student_record.c</code></li>
              <li>Запросите у пользователя: ФИО, возраст, группу, средний балл</li>
              <li>Откройте файл <code className="bg-gray-700 px-1.5 py-0.5 rounded">student.txt</code> для записи</li>
              <li>Запишите введенные данные в файл в форматированном виде</li>
              <li>Правильно закройте файл</li>
              <li>Выведите сообщение об успешной записи</li>
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
    char name[50];
    int age;
    char group[20];
    float average_grade;
    
    // Ввод данных
    printf("Введите ФИО студента: ");
    fgets(name, sizeof(name), stdin);
    
    printf("Введите возраст: ");
    scanf("%d", &age);
    
    printf("Введите группу: ");
    scanf("%s", group);
    
    printf("Введите средний балл: ");
    scanf("%f", &average_grade);
    
    // Открытие файла для записи
    FILE *file = fopen("student.txt", "w");
    
    if (file == NULL) {
        printf("Ошибка создания файла!\\n");
        return 1;
    }
    
    // Запись данных в файл
    fprintf(file, "=== Карточка студента ===\\n");
    fprintf(file, "ФИО: %s", name);
    fprintf(file, "Возраст: %d лет\\n", age);
    fprintf(file, "Группа: %s\\n", group);
    fprintf(file, "Средний балл: %.2f\\n", average_grade);
    
    // Закрытие файла
    fclose(file);
    
    printf("Информация о студенте сохранена в файл student.txt\\n");
    
    return 0;
}`}
              </pre>
            </div>
            <div className="mt-3 p-3 bg-black rounded text-sm">
              <p className="text-white">Пример работы:</p>
              <p className="text-gray-300 text-xs">
                Введите ФИО студента: Иванов Петр Сергеевич<br/>
                Введите возраст: 20<br/>
                Введите группу: ИТ-201<br/>
                Введите средний балл: 4.75<br/>
                Информация о студенте сохранена в файл student.txt
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
            Я создал программу для записи данных о студенте
          </label>
          {completedTasks.task1 && <CheckCircle className="ml-2 w-5 h-5 text-green-400" />}
        </div>
      </div>

      {/* Задание 2: Чтение и отображение данных из файла */}
      <div className={`bg-gray-800/40 backdrop-blur-sm border rounded-2xl p-6 shadow-xl ${completedTasks.task2 ? 'border-green-700/50' : 'border-gray-700/50'}`}>
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Edit3 className="w-5 h-5 text-purple-400" />
          Задание 2: Чтение и отображение данных
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Создайте программу для чтения и отображения информации из файла:
          </p>
        </div>
        <div className="mt-6 space-y-6">
          <div className="bg-gray-900/50 p-5 rounded-xl border border-purple-700/30">
            <h3 className="font-bold text-purple-300 mb-3">Реализуйте следующее:</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>Создайте файл <code className="bg-gray-700 px-1.5 py-0.5 rounded">read_student.c</code></li>
              <li>Откройте файл <code className="bg-gray-700 px-1.5 py-0.5 rounded">student.txt</code> для чтения</li>
              <li>Проверьте, существует ли файл</li>
              <li>Прочитайте и отобразите содержимое файла на экране</li>
              <li>Используйте <code className="bg-gray-700 px-1.5 py-0.5 rounded">fgets()</code> для безопасного чтения строк</li>
              <li>Правильно закройте файл после чтения</li>
            </ul>
            <div className="mt-4 bg-gray-800 p-3 rounded">
              <pre className="text-purple-300 text-sm">
{`#include <stdio.h>

int main() {
    FILE *file = fopen("student.txt", "r");
    
    // Проверка существования файла
    if (file == NULL) {
        printf("Файл student.txt не найден!\\n");
        printf("Сначала создайте запись о студенте.\\n");
        return 1;
    }
    
    printf("=== Информация о студенте ===\\n");
    
    char line[100];
    // Чтение файла построчно
    while (fgets(line, sizeof(line), file) != NULL) {
        printf("%s", line);
    }
    
    // Закрытие файла
    fclose(file);
    
    printf("\\nДанные успешно загружены!\\n");
    
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
            Я создал программу для чтения данных о студенте
          </label>
          {completedTasks.task2 && <CheckCircle className="ml-2 w-5 h-5 text-green-400" />}
        </div>
      </div>

      {/* Задание 3: Журнал посещений с добавлением записей */}
      <div className={`bg-gray-800/40 backdrop-blur-sm border rounded-2xl p-6 shadow-xl ${completedTasks.task3 ? 'border-green-700/50' : 'border-gray-700/50'}`}>
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Save className="w-5 h-5 text-cyan-400" />
          Задание 3: Журнал посещений
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Создайте программу для ведения журнала посещений с возможностью добавления и просмотра записей:
          </p>
        </div>
        <div className="mt-6 space-y-6">
          <div className="bg-gray-900/50 p-5 rounded-xl border border-cyan-700/30">
            <h3 className="font-bold text-cyan-300 mb-3">Реализуйте следующее:</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>Создайте файл <code className="bg-gray-700 px-1.5 py-0.5 rounded">attendance_log.c</code></li>
              <li>Реализуйте меню с тремя пунктами: добавить запись, просмотреть журнал, выход</li>
              <li>Для добавления записи: открывайте файл в режиме "a" (добавление)</li>
              <li>Для просмотра: открывайте файл в режиме "r" (чтение)</li>
              <li>При добавлении записи запрашивайте: дату, ФИО студента, статус (присутствовал/отсутствовал)</li>
              <li>Каждая новая запись должна добавляться в конец файла</li>
              <li>Обработайте случай, когда файл еще не существует</li>
            </ul>
            <div className="mt-4 bg-gray-800 p-3 rounded">
              <pre className="text-cyan-300 text-xs">
{`#include <stdio.h>
#include <string.h>

int main() {
    int choice;
    
    printf("=== Журнал посещений ===\\n");
    
    while (1) {
        printf("\\nВыберите действие:\\n");
        printf("1. Добавить запись\\n");
        printf("2. Просмотреть журнал\\n");
        printf("3. Выход\\n");
        printf("Ваш выбор: ");
        scanf("%d", &choice);
        
        // Очистка буфера ввода
        while (getchar() != '\\n');
        
        switch (choice) {
            case 1: {
                FILE *file = fopen("attendance.txt", "a");
                if (file == NULL) {
                    printf("Ошибка открытия файла!\\n");
                    break;
                }
                
                char date[20], name[50], status[20];
                
                printf("Введите дату (ДД.ММ.ГГГГ): ");
                fgets(date, sizeof(date), stdin);
                
                printf("Введите ФИО студента: ");
                fgets(name, sizeof(name), stdin);
                
                printf("Введите статус (присутствовал/отсутствовал): ");
                fgets(status, sizeof(status), stdin);
                
                fprintf(file, "Дата: %s", date);
                fprintf(file, "Студент: %s", name);
                fprintf(file, "Статус: %s", status);
                fprintf(file, "------------------------\\n");
                
                fclose(file);
                printf("Запись добавлена в журнал!\\n");
                break;
            }
            
            case 2: {
                FILE *file = fopen("attendance.txt", "r");
                if (file == NULL) {
                    printf("Журнал пуст или не существует.\\n");
                    break;
                }
                
                printf("\\n=== Журнал посещений ===\\n");
                char line[100];
                while (fgets(line, sizeof(line), file) != NULL) {
                    printf("%s", line);
                }
                fclose(file);
                break;
            }
            
            case 3:
                printf("До свидания!\\n");
                return 0;
                
            default:
                printf("Неверный выбор!\\n");
        }
    }
    
    return 0;
}`}
              </pre>
            </div>
            <div className="mt-4 p-3 bg-yellow-900/20 border border-yellow-700/30 rounded-lg">
              <p className="text-yellow-300 text-sm">
                ⚠️ <span className="font-medium">Важно:</span> Обратите внимание на использование режима "a" для добавления записей 
                и правильную очистку буфера ввода с помощью <code className="bg-gray-700 px-1.5 py-0.5 rounded">while (getchar() != '\\n');</code>!
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
            Я создал программу для ведения журнала посещений
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
              Теперь вы уверенно можете работать с файлами в C — создавать, читать, записывать и добавлять данные. 
              Вы научились использовать основные функции работы с файлами и создавать программы, которые сохраняют 
              информацию между запусками. Это важный навык для создания практических приложений!
              В следующем уроке мы изучим продвинутые темы и подготовим итоговый проект.
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