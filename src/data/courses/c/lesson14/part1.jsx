// src/data/courses/c/lesson14/part1.jsx
import React from 'react';
import { FileText, Save, FolderOpen, Edit3, Download, Upload } from 'lucide-react';

const Part1 = () => {
  return (
    <div className="space-y-8 text-gray-200">
      {/* Вступление */}
      <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 backdrop-blur-sm border border-blue-700/30 rounded-2xl p-6 shadow-lg">
        <div className="flex items-start gap-4">
          <div className="bg-blue-500/20 p-3 rounded-lg">
            <FileText className="w-6 h-6 text-blue-400" />
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">💾 Урок 14: Файлы — запиши правду в архив</h1>
            <h2 className="text-xl font-semibold text-blue-300 mb-3">Как сохранять и читать данные из файлов</h2>
            <p className="text-gray-300">
              <span className="font-medium text-yellow-400">🎯 Цель урока:</span> Понять, как работать с файлами в C для сохранения и загрузки данных.
            </p>
          </div>
        </div>
      </div>

      {/* Что такое работа с файлами? */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <FolderOpen className="w-5 h-5 text-green-400" />
          Что такое работа с файлами?
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            <span className="font-medium text-green-300">Работа с файлами</span> — это возможность программы <span className="font-medium">сохранять данные на диск</span> и <span className="font-medium">загружать их</span> при следующем запуске.
          </p>
          <div className="mt-4 p-3 bg-blue-900/20 border border-blue-700/30 rounded-lg flex items-start gap-2">
            <Download className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
            <p className="text-blue-300 text-sm">
              <span className="font-medium">💡 Представьте:</span> Работа с файлами — как записная книжка. 
              Вы можете записать в неё информацию (сохранить), закрыть и открыть позже (загрузить).
            </p>
          </div>
          <div className="mt-4 grid md:grid-cols-2 gap-4">
            <div className="bg-gray-900/50 p-4 rounded-lg">
              <h4 className="font-medium text-white mb-2">Без файлов:</h4>
              <pre className="text-gray-300 text-sm bg-black p-2 rounded">
                <code>int score = 100;<br/>// После закрытия программы<br/>// данные теряются!</code>
              </pre>
              <p className="text-gray-400 text-xs mt-1">Данные исчезают при завершении программы</p>
            </div>
            <div className="bg-gray-900/50 p-4 rounded-lg">
              <h4 className="font-medium text-white mb-2">С файлами:</h4>
              <pre className="text-gray-300 text-sm bg-black p-2 rounded">
                <code>FILE *file = fopen("score.txt", "w");<br/>fprintf(file, "%d", score);<br/>fclose(file);</code>
              </pre>
              <p className="text-gray-400 text-xs mt-1">Данные сохраняются на диск</p>
            </div>
          </div>
        </div>
      </div>

      {/* Зачем нужны файлы? */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Save className="w-5 h-5 text-purple-400" />
          Зачем нужны файлы?
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-gray-900/50 p-5 rounded-xl border border-green-700/30">
            <h3 className="font-bold text-green-300 mb-3">✅ Зачем использовать файлы:</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-300">
              <li><span className="font-medium">Сохранение данных</span> между запусками программы</li>
              <li><span className="font-medium">Хранение больших объемов</span> информации</li>
              <li><span className="font-medium">Обмен данными</span> между программами</li>
              <li><span className="font-medium">Создание логов</span> работы программы</li>
              <li><span className="font-medium">Работа с базами данных</span> в простом виде</li>
            </ul>
          </div>
          <div className="bg-gray-900/50 p-5 rounded-xl border border-blue-700/30">
            <h3 className="font-bold text-blue-300 mb-3">🔧 Практические примеры:</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-300">
              <li>Сохранение рекордов в игре</li>
              <li>Хранение списка сотрудников</li>
              <li>Запись результатов вычислений</li>
              <li>Создание текстовых отчетов</li>
              <li>Резервное копирование данных</li>
            </ul>
            <div className="mt-3 p-2 bg-blue-900/20 border border-blue-700/30 rounded text-blue-300 text-xs">
              💡 <span className="font-medium">Факт:</span> Операционные системы используют файлы миллионами для хранения всей информации!
            </div>
          </div>
        </div>
        <div className="mt-6 p-4 bg-yellow-900/20 border border-yellow-700/30 rounded-lg">
          <p className="text-yellow-300 text-sm">
            ⚠️ <span className="font-medium">Важно:</span> Файлы — это основа долговременного хранения данных в программах!
          </p>
        </div>
      </div>

      {/* Основы работы с файлами */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <FileText className="w-5 h-5 text-cyan-400" />
          Основы работы с файлами
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Работа с файлами в C происходит в несколько шагов:
          </p>
        </div>

        <div className="mt-6 space-y-6">
          <div className="bg-gray-900/50 p-5 rounded-xl border border-cyan-700/30">
            <h3 className="font-bold text-cyan-300 mb-3">Шаг 1: Открытие файла</h3>
            <div className="bg-gray-800 p-4 rounded-lg">
              <pre className="text-cyan-300 text-center text-lg">
                <code>FILE *file_pointer = fopen("имя_файла", "режим");</code>
              </pre>
            </div>
            <div className="mt-4 space-y-3 text-sm">
              <div className="bg-gray-800/50 p-3 rounded">
                <p className="font-medium text-white mb-1">FILE *</p>
                <p className="text-gray-300">Специальный тип указателя для работы с файлами</p>
              </div>
              <div className="bg-gray-800/50 p-3 rounded">
                <p className="font-medium text-white mb-1">fopen()</p>
                <p className="text-gray-300">Функция открытия файла</p>
              </div>
              <div className="bg-gray-800/50 p-3 rounded">
                <p className="font-medium text-white mb-1">имя_файла</p>
                <p className="text-gray-300">Имя файла (может включать путь)</p>
              </div>
              <div className="bg-gray-800/50 p-3 rounded">
                <p className="font-medium text-white mb-1">режим</p>
                <p className="text-gray-300">Как мы хотим работать с файлом</p>
              </div>
            </div>
          </div>

          <div className="bg-gray-900/50 p-5 rounded-xl border border-green-700/30">
            <h3 className="font-bold text-green-300 mb-3">Режимы работы с файлами:</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-gray-800 p-3 rounded">
                <h4 className="text-yellow-300 font-medium mb-2">"w" — Запись</h4>
                <ul className="list-disc pl-5 space-y-1 text-gray-300 text-sm">
                  <li>Создает новый файл</li>
                  <li>Если файл существует — стирает его содержимое</li>
                  <li>Пишем данные в файл</li>
                </ul>
              </div>
              <div className="bg-gray-800 p-3 rounded">
                <h4 className="text-blue-300 font-medium mb-2">"r" — Чтение</h4>
                <ul className="list-disc pl-5 space-y-1 text-gray-300 text-sm">
                  <li>Открывает существующий файл</li>
                  <li>Только для чтения</li>
                  <li>Файл должен существовать</li>
                </ul>
              </div>
              <div className="bg-gray-800 p-3 rounded">
                <h4 className="text-purple-300 font-medium mb-2">"a" — Добавление</h4>
                <ul className="list-disc pl-5 space-y-1 text-gray-300 text-sm">
                  <li>Открывает файл для добавления</li>
                  <li>Если файла нет — создает его</li>
                  <li>Данные добавляются в конец</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Запись в файлы */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Edit3 className="w-5 h-5 text-orange-400" />
          Запись в файлы — сохраняем данные
        </h2>
        
        <div className="mt-6 space-y-6">
          <div className="bg-gray-900/50 p-5 rounded-xl border border-orange-700/30">
            <h3 className="font-bold text-orange-300 mb-3">Функция fprintf() — форматированная запись:</h3>
            <div className="bg-gray-800 p-4 rounded-lg">
              <pre className="text-orange-300 text-sm">
{`#include <stdio.h>

int main() {
    // Открываем файл для записи
    FILE *file = fopen("worker.txt", "w");
    
    // Проверяем, успешно ли открыт файл
    if (file == NULL) {
        printf("Ошибка открытия файла!\\n");
        return 1;
    }
    
    // Записываем данные в файл
    fprintf(file, "Имя: Иван Петров\\n");
    fprintf(file, "Возраст: 30 лет\\n");
    fprintf(file, "Зарплата: 2500.50 руб.\\n");
    
    // Закрываем файл
    fclose(file);
    
    printf("Данные успешно записаны в файл!\\n");
    
    return 0;
}`}
              </pre>
            </div>
            <div className="mt-3 p-2 bg-orange-900/20 border border-orange-700/30 rounded text-orange-300 text-xs">
              💡 <span className="font-medium">Важно:</span> Всегда проверяйте, не равен ли указатель NULL после fopen()!
            </div>
          </div>

          <div className="bg-gray-900/50 p-5 rounded-xl border border-green-700/30">
            <h3 className="font-bold text-green-300 mb-3">Пример с массивом данных:</h3>
            <div className="bg-gray-800 p-4 rounded-lg">
              <pre className="text-green-300 text-sm">
{`#include <stdio.h>

typedef struct {
    char name[50];
    int age;
    float salary;
} Worker;

int main() {
    Worker workers[3] = {
        {"Иван Петров", 30, 2500.50},
        {"Анна Сидорова", 25, 2200.00},
        {"Петр Иванов", 35, 2800.75}
    };
    
    // Открываем файл для записи
    FILE *file = fopen("workers.txt", "w");
    
    if (file == NULL) {
        printf("Ошибка открытия файла!\\n");
        return 1;
    }
    
    // Записываем всех работников в файл
    fprintf(file, "=== Список работников ===\\n");
    for (int i = 0; i < 3; i++) {
        fprintf(file, "Работник %d:\\n", i + 1);
        fprintf(file, "  Имя: %s\\n", workers[i].name);
        fprintf(file, "  Возраст: %d лет\\n", workers[i].age);
        fprintf(file, "  Зарплата: %.2f руб.\\n\\n", workers[i].salary);
    }
    
    // Закрываем файл
    fclose(file);
    
    printf("Список работников сохранен в файл workers.txt\\n");
    
    return 0;
}`}
              </pre>
            </div>
          </div>
        </div>
      </div>

      {/* Чтение из файлов */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <FolderOpen className="w-5 h-5 text-red-400" />
          Чтение из файлов — загружаем данные
        </h2>
        
        <div className="mt-6 space-y-6">
          <div className="bg-gray-900/50 p-5 rounded-xl border border-red-700/30">
            <h3 className="font-bold text-red-300 mb-3">Функция fscanf() — форматированное чтение:</h3>
            <div className="bg-gray-800 p-4 rounded-lg">
              <pre className="text-red-300 text-sm">
{`#include <stdio.h>

int main() {
    char name[50];
    int age;
    float salary;
    
    // Открываем файл для чтения
    FILE *file = fopen("worker.txt", "r");
    
    // Проверяем, успешно ли открыт файл
    if (file == NULL) {
        printf("Ошибка открытия файла!\\n");
        return 1;
    }
    
    // Читаем данные из файла
    // Предполагаем, что файл имеет определенный формат
    fscanf(file, "Имя: %[^\\n]\\n", name);
    fscanf(file, "Возраст: %d лет\\n", &age);
    fscanf(file, "Зарплата: %f руб.\\n", &salary);
    
    // Выводим прочитанные данные
    printf("=== Загруженные данные ===\\n");
    printf("Имя: %s\\n", name);
    printf("Возраст: %d лет\\n", age);
    printf("Зарплата: %.2f руб.\\n", salary);
    
    // Закрываем файл
    fclose(file);
    
    return 0;
}`}
              </pre>
            </div>
          </div>

          <div className="bg-gray-900/50 p-5 rounded-xl border border-purple-700/30">
            <h3 className="font-bold text-purple-300 mb-3">Построчное чтение с fgets():</h3>
            <div className="bg-gray-800 p-4 rounded-lg">
              <pre className="text-purple-300 text-sm">
{`#include <stdio.h>

int main() {
    char line[100];
    
    // Открываем файл для чтения
    FILE *file = fopen("workers.txt", "r");
    
    if (file == NULL) {
        printf("Ошибка открытия файла!\\n");
        return 1;
    }
    
    printf("=== Содержимое файла ===\\n");
    
    // Читаем файл построчно
    while (fgets(line, sizeof(line), file) != NULL) {
        printf("%s", line);  // fgets сохраняет символ \\n
    }
    
    // Закрываем файл
    fclose(file);
    
    return 0;
}`}
              </pre>
            </div>
            <div className="mt-2 p-2 bg-purple-900/20 border border-purple-700/30 rounded text-purple-300 text-xs">
              💡 <span className="font-medium">Совет:</span> <code className="bg-gray-700 px-1.5 py-0.5 rounded">fgets()</code> безопаснее, чем <code className="bg-gray-700 px-1.5 py-0.5 rounded">fscanf()</code> для чтения строк!
            </div>
          </div>
        </div>
      </div>

      {/* Практический пример */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Save className="w-5 h-5 text-yellow-400" />
          Практический пример: Дневник работника
        </h2>
        <div className="bg-gray-900/50 p-5 rounded-xl border border-yellow-700/30">
          <div className="bg-gray-800 p-4 rounded-lg">
            <pre className="text-yellow-300 text-sm">
{`#include <stdio.h>
#include <string.h>

int main() {
    int choice;
    char entry[200];
    FILE *diary;
    
    printf("=== Дневник работника ===\\n");
    
    while (1) {
        printf("\\nВыберите действие:\\n");
        printf("1. Добавить запись\\n");
        printf("2. Просмотреть записи\\n");
        printf("3. Выход\\n");
        printf("Ваш выбор: ");
        scanf("%d", &choice);
        
        // Очищаем буфер ввода
        while (getchar() != '\\n');
        
        switch (choice) {
            case 1:
                diary = fopen("diary.txt", "a");
                if (diary == NULL) {
                    printf("Ошибка открытия файла!\\n");
                    break;
                }
                
                printf("Введите запись (одна строка): ");
                fgets(entry, sizeof(entry), stdin);
                
                fprintf(diary, "- %s", entry);
                fclose(diary);
                printf("Запись добавлена!\\n");
                break;
                
            case 2:
                diary = fopen("diary.txt", "r");
                if (diary == NULL) {
                    printf("Файл дневника пуст или не существует.\\n");
                    break;
                }
                
                printf("\\n=== Записи в дневнике ===\\n");
                char line[200];
                while (fgets(line, sizeof(line), diary) != NULL) {
                    printf("%s", line);
                }
                fclose(diary);
                break;
                
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
          <div className="mt-4 p-3 bg-black rounded text-sm">
            <p className="text-white">Пример работы:</p>
            <p className="text-gray-300 text-xs">
              === Дневник работника ===<br/>
              <br/>
              Выберите действие:<br/>
              1. Добавить запись<br/>
              2. Просмотреть записи<br/>
              3. Выход<br/>
              Ваш выбор: 1<br/>
              Введите запись (одна строка): Сегодня выполнил важный проект<br/>
              Запись добавлена!<br/>
              <br/>
              Ваш выбор: 2<br/>
              <br/>
              === Записи в дневнике ===<br/>
              - Сегодня выполнил важный проект<br/>
            </p>
          </div>
        </div>
      </div>

      {/* Заключение */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <div className="flex items-start gap-3">
          <div className="bg-green-500/20 p-2 rounded-lg flex-shrink-0">
            <FileText className="w-5 h-5 text-green-400" />
          </div>
          <div>
            <h3 className="font-bold text-white mb-2">Отлично! 💾</h3>
            <p className="text-gray-300">
              Теперь вы умеете работать с файлами в C — сохранять данные с помощью <code className="bg-gray-700 px-1.5 py-0.5 rounded">fprintf()</code> 
              и загружать их с помощью <code className="bg-gray-700 px-1.5 py-0.5 rounded">fscanf()</code> и <code className="bg-gray-700 px-1.5 py-0.5 rounded">fgets()</code>. 
              Это важный навык для создания программ, которые сохраняют информацию между запусками.
              В следующем уроке мы изучим продвинутые темы и подготовим итоговый проект.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Part1;