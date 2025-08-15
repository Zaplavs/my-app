// src/data/courses/c/lesson9/part1.jsx
import React from 'react';
import { FunctionSquare, Box, ArrowRight, Zap, Play, GitBranch } from 'lucide-react';

const Part1 = () => {
  return (
    <div className="space-y-8 text-gray-200">
      {/* Вступление */}
      <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 backdrop-blur-sm border border-blue-700/30 rounded-2xl p-6 shadow-lg">
        <div className="flex items-start gap-4">
          <div className="bg-blue-500/20 p-3 rounded-lg">
            <FunctionSquare className="w-6 h-6 text-blue-400" />
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">🧱 Урок 9: Функции — делай, что умеешь</h1>
            <h2 className="text-xl font-semibold text-blue-300 mb-3">Как организовать код в повторно используемые блоки</h2>
            <p className="text-gray-300">
              <span className="font-medium text-yellow-400">🎯 Цель урока:</span> Научиться создавать и использовать функции для структурирования кода.
            </p>
          </div>
        </div>
      </div>

      {/* Что такое функции? */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Box className="w-5 h-5 text-green-400" />
          Что такое функции?
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            <span className="font-medium text-green-300">Функция</span> — это именованный блок кода, который выполняет определенную задачу и может быть вызван из разных частей программы.
          </p>
          <div className="mt-4 p-3 bg-blue-900/20 border border-blue-700/30 rounded-lg flex items-start gap-2">
            <Zap className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
            <p className="text-blue-300 text-sm">
              <span className="font-medium">💡 Представьте:</span> Функция — как специалист на заводе. Вы говорите ему "сделай это", и он выполняет свою задачу, а потом возвращается к вам с результатом.
            </p>
          </div>
          <div className="mt-4 grid md:grid-cols-2 gap-4">
            <div className="bg-gray-900/50 p-4 rounded-lg">
              <h4 className="font-medium text-white mb-2">Без функций:</h4>
              <pre className="text-gray-300 text-sm bg-black p-2 rounded">
                <code>// Повторяющийся код<br/>int a = 5 + 3;<br/>int b = 7 + 3;<br/>int c = 10 + 3;</code>
              </pre>
              <p className="text-gray-400 text-xs mt-1">Один и тот же код повторяется</p>
            </div>
            <div className="bg-gray-900/50 p-4 rounded-lg">
              <h4 className="font-medium text-white mb-2">С функциями:</h4>
              <pre className="text-gray-300 text-sm bg-black p-2 rounded">
                <code>int addThree(int x) {"{"}<br/>&nbsp;&nbsp;return x + 3;<br/>{"}"}<br/>int a = addThree(5);<br/>int b = addThree(7);</code>
              </pre>
              <p className="text-gray-400 text-xs mt-1">Один код используется многократно</p>
            </div>
          </div>
        </div>
      </div>

      {/* Зачем нужны функции? */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Zap className="w-5 h-5 text-purple-400" />
          Зачем нужны функции?
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-gray-900/50 p-5 rounded-xl border border-green-700/30">
            <h3 className="font-bold text-green-300 mb-3">✅ Преимущества:</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-300">
              <li><span className="font-medium">Повторное использование</span> — один код можно вызывать много раз</li>
              <li><span className="font-medium">Читаемость</span> — программа становится понятнее</li>
              <li><span className="font-medium">Поддержка</span> — легче исправлять ошибки в одном месте</li>
              <li><span className="font-medium">Организация</span> — код структурирован и логичен</li>
              <li><span className="font-medium">Командная работа</span> — разные люди могут писать разные функции</li>
            </ul>
          </div>
          <div className="bg-gray-900/50 p-5 rounded-xl border border-blue-700/30">
            <h3 className="font-bold text-blue-300 mb-3">❌ Без функций:</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-300">
              <li><span className="font-medium">Дублирование кода</span> — один и тот же код повторяется</li>
              <li><span className="font-medium">Сложность</span> — большая программа становится нечитаемой</li>
              <li><span className="font-medium">Ошибки</span> — при исправлении нужно менять код в нескольких местах</li>
              <li><span className="font-medium">Беспорядок</span> — всё в одной большой функции main()</li>
            </ul>
          </div>
        </div>
        <div className="mt-6 p-4 bg-yellow-900/20 border border-yellow-700/30 rounded-lg">
          <p className="text-yellow-300 text-sm">
            ⚠️ <span className="font-medium">Важно:</span> Функции — это основа хорошего программирования! Чем больше вы будете использовать функции, тем лучше ваш код.
          </p>
        </div>
      </div>

      {/* Структура функции */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <FunctionSquare className="w-5 h-5 text-cyan-400" />
          Структура функции
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Каждая функция имеет определенную структуру:
          </p>
        </div>

        <div className="mt-6 space-y-6">
          <div className="bg-gray-900/50 p-5 rounded-xl border border-cyan-700/30">
            <h3 className="font-bold text-cyan-300 mb-3">Общая структура:</h3>
            <div className="bg-gray-800 p-4 rounded-lg">
              <pre className="text-cyan-300 text-center text-lg">
                <code>тип_возвращаемого_значения имя_функции(параметры) {"{"}<br/>&nbsp;&nbsp;// тело функции<br/>&nbsp;&nbsp;return значение;<br/>{"}"}</code>
              </pre>
            </div>
            <div className="mt-4 grid md:grid-cols-4 gap-3 text-sm">
              <div className="bg-gray-800/50 p-3 rounded">
                <p className="font-medium text-white mb-1">Тип возврата</p>
                <p className="text-gray-300">Какой тип данных возвращает функция (int, float, void и т.д.)</p>
              </div>
              <div className="bg-gray-800/50 p-3 rounded">
                <p className="font-medium text-white mb-1">Имя функции</p>
                <p className="text-gray-300">Уникальное имя функции (следует правилам именования переменных)</p>
              </div>
              <div className="bg-gray-800/50 p-3 rounded">
                <p className="font-medium text-white mb-1">Параметры</p>
                <p className="text-gray-300">Входные данные для функции (переменные, которые она получает)</p>
              </div>
              <div className="bg-gray-800/50 p-3 rounded">
                <p className="font-medium text-white mb-1">Тело функции</p>
                <p className="text-gray-300">Код, который выполняется при вызове функции</p>
              </div>
            </div>
          </div>

          <div className="bg-gray-900/50 p-5 rounded-xl border border-green-700/30">
            <h3 className="font-bold text-green-300 mb-3">Простая функция без параметров:</h3>
            <div className="bg-gray-800 p-4 rounded-lg">
              <pre className="text-green-300 text-sm">
{`#include <stdio.h>

// Функция без параметров и без возвращаемого значения
void sayHello() {
    printf("Привет, товарищ!\\n");
}

int main() {
    sayHello();  // Вызов функции
    sayHello();  // Ещё один вызов
    return 0;
}`}
              </pre>
            </div>
            <div className="mt-3 p-3 bg-black rounded">
              <p className="text-white text-sm">Вывод:</p>
              <p className="text-gray-300 text-sm">
                Привет, товарищ!<br/>
                Привет, товарищ!
              </p>
            </div>
          </div>

          <div className="bg-gray-900/50 p-5 rounded-xl border border-blue-700/30">
            <h3 className="font-bold text-blue-300 mb-3">Функция с параметрами и возвращаемым значением:</h3>
            <div className="bg-gray-800 p-4 rounded-lg">
              <pre className="text-blue-300 text-sm">
{`#include <stdio.h>

// Функция с параметрами и возвращаемым значением
int add(int a, int b) {
    int result = a + b;
    return result;  // Возвращаем результат
}

int main() {
    int sum1 = add(5, 3);     // sum1 = 8
    int sum2 = add(10, 7);    // sum2 = 17
    
    printf("5 + 3 = %d\\n", sum1);
    printf("10 + 7 = %d\\n", sum2);
    
    return 0;
}`}
              </pre>
            </div>
            <div className="mt-3 p-3 bg-black rounded">
              <p className="text-white text-sm">Вывод:</p>
              <p className="text-gray-300 text-sm">
                5 + 3 = 8<br/>
                10 + 7 = 17
              </p>
            </div>
            <div className="mt-3 p-2 bg-blue-900/20 border border-blue-700/30 rounded text-blue-300 text-xs">
              💡 <span className="font-medium">Объяснение:</span> Функция add получает два параметра (a и b), складывает их и возвращает результат.
            </div>
          </div>
        </div>
      </div>

      {/* Типы функций */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Play className="w-5 h-5 text-orange-400" />
          Типы функций
        </h2>
        
        <div className="mt-6 space-y-6">
          <div className="bg-gray-900/50 p-5 rounded-xl border border-green-700/30">
            <h3 className="font-bold text-green-300 mb-3 flex items-center gap-2">
              <span className="bg-gray-700 px-2 py-1 rounded text-sm">void</span>
              Функции без возвращаемого значения
            </h3>
            <p className="text-gray-300 text-sm mb-3">
              Используются, когда функция выполняет действие, но не возвращает результат.
            </p>
            <div className="bg-gray-800 p-3 rounded">
              <pre className="text-green-300 text-sm">
{`void printWelcome() {
    printf("Добро пожаловать!\\n");
}

void printNumber(int number) {
    printf("Число: %d\\n", number);
}`}
              </pre>
            </div>
          </div>

          <div className="bg-gray-900/50 p-5 rounded-xl border border-blue-700/30">
            <h3 className="font-bold text-blue-300 mb-3 flex items-center gap-2">
              <span className="bg-gray-700 px-2 py-1 rounded text-sm">int, float, char</span>
              Функции с возвращаемым значением
            </h3>
            <p className="text-gray-300 text-sm mb-3">
              Используются, когда функция должна вернуть результат своей работы.
            </p>
            <div className="bg-gray-800 p-3 rounded">
              <pre className="text-blue-300 text-sm">
{`int getMax(int a, int b) {
    if (a > b) {
        return a;
    } else {
        return b;
    }
}

float calculateAverage(float sum, int count) {
    return sum / count;
}`}
              </pre>
            </div>
          </div>

          <div className="bg-gray-900/50 p-5 rounded-xl border border-purple-700/30">
            <h3 className="font-bold text-purple-300 mb-3 flex items-center gap-2">
              <span className="bg-gray-700 px-2 py-1 rounded text-sm">без параметров</span>
              Функции без параметров
            </h3>
            <p className="text-gray-300 text-sm mb-3">
              Функции, которые не получают входные данные.
            </p>
            <div className="bg-gray-800 p-3 rounded">
              <pre className="text-purple-300 text-sm">
{`int getRandomNumber() {
    return 42;  // Всегда возвращает 42
}

void printMenu() {
    printf("=== МЕНЮ ===\\n");
    printf("1. Начать\\n");
    printf("2. Выйти\\n");
}`}
              </pre>
            </div>
          </div>

          <div className="bg-gray-900/50 p-5 rounded-xl border border-cyan-700/30">
            <h3 className="font-bold text-cyan-300 mb-3 flex items-center gap-2">
              <span className="bg-gray-700 px-2 py-1 rounded text-sm">с параметрами</span>
              Функции с параметрами
            </h3>
            <p className="text-gray-300 text-sm mb-3">
              Функции, которые получают входные данные для работы.
            </p>
            <div className="bg-gray-800 p-3 rounded">
              <pre className="text-cyan-300 text-sm">
{`int power(int base, int exponent) {
    int result = 1;
    for (int i = 0; i < exponent; i++) {
        result *= base;
    }
    return result;
}

void printMessage(char message[], int times) {
    for (int i = 0; i < times; i++) {
        printf("%s\\n", message);
    }
}`}
              </pre>
            </div>
          </div>
        </div>
      </div>

      {/* Прототипы функций */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <GitBranch className="w-5 h-5 text-red-400" />
          Прототипы функций
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            <span className="font-medium text-red-300">Прототип функции</span> — это объявление функции без тела, которое позволяет использовать функцию до её определения.
          </p>
        </div>

        <div className="mt-6 grid md:grid-cols-2 gap-6">
          <div className="bg-gray-900/50 p-5 rounded-xl border border-red-700/30">
            <h3 className="font-bold text-red-300 mb-3">❌ Без прототипа (ошибка):</h3>
            <div className="bg-gray-800 p-3 rounded">
              <pre className="text-red-300 text-sm">
{`#include <stdio.h>

int main() {
    int result = add(5, 3);  // ОШИБКА! Функция ещё не объявлена
    printf("Результат: %d\\n", result);
    return 0;
}

int add(int a, int b) {  // Функция определена после main()
    return a + b;
}`}
              </pre>
            </div>
            <div className="mt-2 p-2 bg-red-900/20 border border-red-700/30 rounded text-red-300 text-xs">
              ❌ Компилятор не знает о функции add() и выдаст ошибку!
            </div>
          </div>
          <div className="bg-gray-900/50 p-5 rounded-xl border border-green-700/30">
            <h3 className="font-bold text-green-300 mb-3">✅ С прототипом (правильно):</h3>
            <div className="bg-gray-800 p-3 rounded">
              <pre className="text-green-300 text-sm">
{`#include <stdio.h>

// Прототип функции (объявление без тела)
int add(int a, int b);

int main() {
    int result = add(5, 3);  // Теперь всё работает!
    printf("Результат: %d\\n", result);
    return 0;
}

// Определение функции
int add(int a, int b) {
    return a + b;
}`}
              </pre>
            </div>
            <div className="mt-2 p-2 bg-green-900/20 border border-green-700/30 rounded text-green-300 text-xs">
              ✅ Прототип говорит компилятору, что такая функция существует!
            </div>
          </div>
        </div>
        <div className="mt-6 p-4 bg-blue-900/20 border border-blue-700/30 rounded-lg">
          <p className="text-blue-300 text-sm">
            💡 <span className="font-medium">Совет:</span> Прототипы функций обычно размещают после #include и перед main(). 
            Это помогает компилятору понять, какие функции будут использоваться в программе.
          </p>
        </div>
      </div>

      {/* Практический пример */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <ArrowRight className="w-5 h-5 text-yellow-400" />
          Практический пример: Калькулятор с функциями
        </h2>
        <div className="bg-gray-900/50 p-5 rounded-xl border border-yellow-700/30">
          <div className="bg-gray-800 p-4 rounded-lg">
            <pre className="text-yellow-300 text-sm">
{`#include <stdio.h>

// Прототипы функций
int add(int a, int b);
int subtract(int a, int b);
int multiply(int a, int b);
float divide(int a, int b);
void printMenu();

int main() {
    int choice, num1, num2;
    float result;
    
    printMenu();
    printf("Выберите операцию: ");
    scanf("%d", &choice);
    
    printf("Введите два числа: ");
    scanf("%d %d", &num1, &num2);
    
    switch(choice) {
        case 1:
            result = add(num1, num2);
            printf("Результат: %.2f\\n", (float)result);
            break;
        case 2:
            result = subtract(num1, num2);
            printf("Результат: %.2f\\n", (float)result);
            break;
        case 3:
            result = multiply(num1, num2);
            printf("Результат: %.2f\\n", (float)result);
            break;
        case 4:
            if (num2 != 0) {
                result = divide(num1, num2);
                printf("Результат: %.2f\\n", result);
            } else {
                printf("Ошибка: деление на ноль!\\n");
            }
            break;
        default:
            printf("Неверный выбор!\\n");
    }
    
    return 0;
}

// Определения функций
void printMenu() {
    printf("=== КАЛЬКУЛЯТОР ===\\n");
    printf("1. Сложение\\n");
    printf("2. Вычитание\\n");
    printf("3. Умножение\\n");
    printf("4. Деление\\n");
}

int add(int a, int b) {
    return a + b;
}

int subtract(int a, int b) {
    return a - b;
}

int multiply(int a, int b) {
    return a * b;
}

float divide(int a, int b) {
    return (float)a / b;
}`}
            </pre>
          </div>
          <div className="mt-4 p-3 bg-blue-900/20 border border-blue-700/30 rounded-lg">
            <p className="text-blue-300 text-sm">
              💡 <span className="font-medium">Обратите внимание:</span> Каждая операция вынесена в отдельную функцию. 
              Это делает код чище, понятнее и проще в поддержке!
            </p>
          </div>
        </div>
      </div>

      {/* Заключение */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <div className="flex items-start gap-3">
          <div className="bg-green-500/20 p-2 rounded-lg flex-shrink-0">
            <FunctionSquare className="w-5 h-5 text-green-400" />
          </div>
          <div>
            <h3 className="font-bold text-white mb-2">Отлично! 🧱</h3>
            <p className="text-gray-300">
              Теперь вы умеете создавать и использовать функции! Это мощный инструмент для структурирования кода и повторного использования логики.
              В следующем уроке мы научимся работать с массивами — структурами для хранения множества значений одного типа.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Part1;