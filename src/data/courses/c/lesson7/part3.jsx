// src/data/courses/c/lesson7/part3.jsx
import React, { useState } from 'react';
import { Monitor, FileText, Play, Code, Edit3, GitBranch, CheckCircle, AlertTriangle } from 'lucide-react';

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
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">💻 Практическое задание: Условные операторы</h1>
            <p className="text-gray-300">
              <span className="font-medium text-yellow-400">🎯 Цель:</span> На практике освоить использование условных операторов if, else, else if для создания программ, принимающих решения.
            </p>
          </div>
        </div>
      </div>

      {/* Задание 1: Простое условие if-else */}
      <div className={`bg-gray-800/40 backdrop-blur-sm border rounded-2xl p-6 shadow-xl ${completedTasks.task1 ? 'border-green-700/50' : 'border-gray-700/50'}`}>
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <FileText className="w-5 h-5 text-green-400" />
          Задание 1: Проверка возраста
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Создайте программу, которая проверяет, достиг ли пользователь совершеннолетия:
          </p>
        </div>
        <div className="mt-6 space-y-6">
          <div className="bg-gray-900/50 p-5 rounded-xl border border-green-700/30">
            <h3 className="font-bold text-green-300 mb-3 flex items-center gap-2">
              <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">1</span>
              Создайте файл проверки возраста
            </h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>Создайте файл <code className="bg-gray-700 px-1.5 py-0.5 rounded">age_check.c</code></li>
              <li>Подключите необходимую библиотеку <code className="bg-gray-700 px-1.5 py-0.5 rounded">{`#include <stdio.h>`}</code></li>
            </ul>
          </div>
          
          <div className="bg-gray-900/50 p-5 rounded-xl border border-blue-700/30">
            <h3 className="font-bold text-blue-300 mb-3 flex items-center gap-2">
              <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">2</span>
              Реализуйте проверку возраста
            </h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>Объявите переменную типа <code className="bg-gray-700 px-1.5 py-0.5 rounded">int</code> для хранения возраста</li>
              <li>Запросите у пользователя ввод возраста с помощью <code className="bg-gray-700 px-1.5 py-0.5 rounded">scanf()</code></li>
              <li>Используйте условный оператор <code className="bg-gray-700 px-1.5 py-0.5 rounded">if-else</code> для проверки:</li>
              <li>{`Если возраст >= 18, выведите "Вы совершеннолетний!"`}</li>
              <li>Иначе выведите "Вы несовершеннолетний!"</li>
            </ul>
            <div className="bg-gray-800 p-4 rounded-lg mt-3 text-sm">
              <pre className="text-green-300">
{`#include <stdio.h>

int main() {
    int age;
    
    printf("Введите ваш возраст: ");
    scanf("%d", &age);
    
    if (age >= 18) {
        printf("Вы совершеннолетний!\\n");
    } else {
        printf("Вы несовершеннолетний!\\n");
    }
    
    return 0;
}`}
              </pre>
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
            Я создал программу для проверки возраста
          </label>
          {completedTasks.task1 && <CheckCircle className="ml-2 w-5 h-5 text-green-400" />}
        </div>
      </div>

      {/* Задание 2: Множественные условия с else if */}
      <div className={`bg-gray-800/40 backdrop-blur-sm border rounded-2xl p-6 shadow-xl ${completedTasks.task2 ? 'border-green-700/50' : 'border-gray-700/50'}`}>
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Edit3 className="w-5 h-5 text-purple-400" />
          Задание 2: Классификация оценок
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Создайте программу, которая классифицирует оценки по школьной системе:
          </p>
        </div>
        <div className="mt-6 space-y-6">
          <div className="bg-gray-900/50 p-5 rounded-xl border border-purple-700/30">
            <h3 className="font-bold text-purple-300 mb-3">Реализуйте следующее:</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>Создайте файл <code className="bg-gray-700 px-1.5 py-0.5 rounded">grade_classifier.c</code></li>
              <li>Запросите у пользователя числовую оценку (0-100)</li>
              <li>Используйте множественные условия <code className="bg-gray-700 px-1.5 py-0.5 rounded">if-else if-else</code>:</li>
              <li>90-100: "Отлично!"</li>
              <li>75-89: "Хорошо!"</li>
              <li>60-74: "Удовлетворительно"</li>
              <li>0-59: "Неудовлетворительно"</li>
              <li>Добавьте проверку на некорректный ввод (меньше 0 или больше 100)</li>
            </ul>
            <div className="mt-4 bg-gray-800 p-3 rounded">
              <pre className="text-purple-300 text-sm">
{`#include <stdio.h>

int main() {
    int score;
    
    printf("Введите оценку (0-100): ");
    scanf("%d", &score);
    
    if (score > 100 || score < 0) {
        printf("Некорректная оценка!\\n");
    } else if (score >= 90) {
        printf("Отлично!\\n");
    } else if (score >= 75) {
        printf("Хорошо!\\n");
    } else if (score >= 60) {
        printf("Удовлетворительно\\n");
    } else {
        printf("Неудовлетворительно\\n");
    }
    
    return 0;
}`}
              </pre>
            </div>
            <div className="mt-4 p-3 bg-blue-900/20 border border-blue-700/30 rounded-lg">
              <p className="text-blue-300 text-sm">
                💡 <span className="font-medium">Совет:</span> Обратите внимание на порядок проверок — от более строгих к менее строгим!
              </p>
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
            Я создал программу для классификации оценок
          </label>
          {completedTasks.task2 && <CheckCircle className="ml-2 w-5 h-5 text-green-400" />}
        </div>
      </div>

      {/* Задание 3: Сложные условия с логическими операторами */}
      <div className={`bg-gray-800/40 backdrop-blur-sm border rounded-2xl p-6 shadow-xl ${completedTasks.task3 ? 'border-green-700/50' : 'border-gray-700/50'}`}>
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <GitBranch className="w-5 h-5 text-cyan-400" />
          Задание 3: Проверка допуска к экзамену
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Создайте программу, которая проверяет, может ли студент сдавать экзамен, используя сложные условия:
          </p>
        </div>
        <div className="mt-6 space-y-6">
          <div className="bg-gray-900/50 p-5 rounded-xl border border-cyan-700/30">
            <h3 className="font-bold text-cyan-300 mb-3">Реализуйте следующее:</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>Создайте файл <code className="bg-gray-700 px-1.5 py-0.5 rounded">exam_access.c</code></li>
              <li>Запросите у пользователя: возраст, наличие оплаты (1/0) и наличие посещаемости (1/0)</li>
              <li>Студент может сдавать экзамен, если:</li>
              <li>{`Возраст >= 16 И оплата = 1 И посещаемость = 1`}</li>
              <li>{`ИЛИ если возраст >= 18 и оплата = 1 (посещаемость не важна)`}</li>
              <li>Используйте логические операторы <code className="bg-gray-700 px-1.5 py-0.5 rounded">&amp;&amp;</code> и <code className="bg-gray-700 px-1.5 py-0.5 rounded">||</code></li>
              <li>Выведите соответствующее сообщение</li>
            </ul>
            <div className="mt-4 bg-gray-800 p-3 rounded">
              <pre className="text-cyan-300 text-sm">
{`#include <stdio.h>

int main() {
    int age, paid, attendance;
    
    printf("Введите возраст: ");
    scanf("%d", &age);
    
    printf("Оплата произведена? (1-да, 0-нет): ");
    scanf("%d", &paid);
    
    printf("Есть посещаемость? (1-да, 0-нет): ");
    scanf("%d", &attendance);
    
    if ((age >= 16 && paid == 1 && attendance == 1) || 
        (age >= 18 && paid == 1)) {
        printf("Допущен к экзамену!\\n");
    } else {
        printf("Не допущен к экзамену!\\n");
    }
    
    return 0;
}`}
              </pre>
            </div>
            <div className="mt-4 p-3 bg-yellow-900/20 border border-yellow-700/30 rounded-lg flex items-start gap-2">
              <AlertTriangle className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
              <p className="text-yellow-300 text-sm">
                ⚠️ <span className="font-medium">Важно:</span> Обратите внимание на использование скобок для группировки условий и правильное сравнение с 1 и 0!
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
            Я создал программу для проверки допуска к экзамену
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
              Теперь вы уверенно можете использовать условные операторы для создания программ, которые принимают решения на основе различных условий. 
              Это важный навык для создания умных и полезных программ.
              В следующем уроке мы научимся создавать циклы и повторять действия.
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