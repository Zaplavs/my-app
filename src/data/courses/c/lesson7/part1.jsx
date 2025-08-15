// src/data/courses/c/lesson7/part1.jsx
import React from 'react';
import { GitBranch, Check, X, AlertTriangle, Zap, Brain } from 'lucide-react';

const Part1 = () => {
  return (
    <div className="space-y-8 text-gray-200">
      {/* Вступление */}
      <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 backdrop-blur-sm border border-blue-700/30 rounded-2xl p-6 shadow-lg">
        <div className="flex items-start gap-4">
          <div className="bg-blue-500/20 p-3 rounded-lg">
            <GitBranch className="w-6 h-6 text-blue-400" />
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">🤔 Урок 7: Условные операторы if, else, else if</h1>
            <h2 className="text-xl font-semibold text-blue-300 mb-3">Как заставить программу принимать решения</h2>
            <p className="text-gray-300">
              <span className="font-medium text-yellow-400">🎯 Цель урока:</span> Научиться использовать условные операторы для выполнения разных действий в зависимости от условий.
            </p>
          </div>
        </div>
      </div>

      {/* Что такое условные операторы? */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Brain className="w-5 h-5 text-green-400" />
          Что такое условные операторы?
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            <span className="font-medium text-green-300">Условные операторы</span> — это конструкции в программировании, которые позволяют выполнять разный код в зависимости от выполнения определенных условий.
          </p>
          <div className="mt-4 p-3 bg-blue-900/20 border border-blue-700/30 rounded-lg flex items-start gap-2">
            <Zap className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
            <p className="text-blue-300 text-sm">
              <span className="font-medium">💡 Представьте:</span> Условные операторы — как развилка на дороге. В зависимости от условия (знака на дороге) вы едете по разным путям.
            </p>
          </div>
          <div className="mt-4 grid md:grid-cols-2 gap-4">
            <div className="bg-gray-900/50 p-4 rounded-lg">
              <h4 className="font-medium text-white mb-2">Без условий:</h4>
              <pre className="text-gray-300 text-sm bg-black p-2 rounded">
                <code>printf("Привет!");<br/>printf("Пока!");</code>
              </pre>
              <p className="text-gray-400 text-xs mt-1">Всегда выполняется один и тот же код</p>
            </div>
            <div className="bg-gray-900/50 p-4 rounded-lg">
              <h4 className="font-medium text-white mb-2">С условиями:</h4>
              <pre className="text-gray-300 text-sm bg-black p-2 rounded">
                <code>{`if (время == день) {<br/>&nbsp;&nbsp;printf("Добрый день!");<br/>} else {<br/>&nbsp;&nbsp;printf("Добрый вечер!");<br/>}`}</code>
              </pre>
              <p className="text-gray-400 text-xs mt-1">Выполняется разный код в зависимости от условия</p>
            </div>
          </div>
        </div>
      </div>

      {/* Основной оператор if */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Check className="w-5 h-5 text-blue-400" />
          Основной оператор if
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Оператор <code className="bg-gray-700 px-1.5 py-0.5 rounded">if</code> (если) выполняет блок кода только тогда, когда условие истинно (равно 1 или true).
          </p>
        </div>

        <div className="mt-6 space-y-6">
          <div className="bg-gray-900/50 p-5 rounded-xl border border-green-700/30">
            <h3 className="font-bold text-green-300 mb-3">Структура оператора if:</h3>
            <div className="bg-gray-800 p-4 rounded-lg">
              <pre className="text-green-300 text-center text-lg">
                <code>if (условие) {"{"}<br/>&nbsp;&nbsp;// код, который выполнится, если условие истинно<br/>{"}"}</code>
              </pre>
            </div>
            <div className="mt-4 space-y-3 text-sm">
              <div className="bg-gray-800/50 p-3 rounded">
                <p className="font-medium text-white mb-1">условие</p>
                <p className="text-gray-300">Логическое выражение, которое может быть истинным (1) или ложным (0)</p>
              </div>
              <div className="bg-gray-800/50 p-3 rounded">
                <p className="font-medium text-white mb-1">код в фигурных скобках</p>
                <p className="text-gray-300">Блок команд, который выполнится только если условие истинно</p>
              </div>
            </div>
          </div>

          <div className="bg-gray-900/50 p-5 rounded-xl border border-blue-700/30">
            <h3 className="font-bold text-blue-300 mb-3">Простой пример:</h3>
            <div className="bg-gray-800 p-4 rounded-lg">
              <pre className="text-blue-300 text-sm">
{`#include <stdio.h>

int main() {
    int age = 20;
    
    if (age >= 18) {
        printf("Вы совершеннолетний!\\n");
    }
    
    return 0;
}`}
              </pre>
            </div>
            <div className="mt-3 p-3 bg-black rounded">
              <p className="text-white text-sm">Вывод:</p>
              <p className="text-gray-300 text-sm">Вы совершеннолетний!</p>
            </div>
            <div className="mt-3 p-2 bg-blue-900/20 border border-blue-700/30 rounded text-blue-300 text-xs">
              💡 <span className="font-medium">Объяснение:</span> Так как age (20) больше или равно 18, условие выполняется и выводится сообщение.
            </div>
          </div>
        </div>
      </div>

      {/* Оператор else */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <X className="w-5 h-5 text-purple-400" />
          Оператор else (иначе)
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Оператор <code className="bg-gray-700 px-1.5 py-0.5 rounded">else</code> (иначе) выполняет блок кода, если условие в <code className="bg-gray-700 px-1.5 py-0.5 rounded">if</code> ложно (равно 0 или false).
          </p>
        </div>

        <div className="mt-6 bg-gray-900/50 p-5 rounded-xl border border-purple-700/30">
          <h3 className="font-bold text-purple-300 mb-3">Структура if-else:</h3>
          <div className="bg-gray-800 p-4 rounded-lg">
            <pre className="text-purple-300 text-center text-lg">
              <code>if (условие) {"{"}<br/>&nbsp;&nbsp;// код, если условие истинно<br/>{"}"} else {"{"}<br/>&nbsp;&nbsp;// код, если условие ложно<br/>{"}"}</code>
            </pre>
          </div>
          <div className="mt-4 bg-gray-800 p-4 rounded-lg">
            <pre className="text-purple-300 text-sm">
{`#include <stdio.h>

int main() {
    int age = 15;
    
    if (age >= 18) {
        printf("Вы совершеннолетний!\\n");
    } else {
        printf("Вы несовершеннолетний!\\n");
    }
    
    return 0;
}`}
            </pre>
          </div>
          <div className="mt-3 p-3 bg-black rounded">
            <p className="text-white text-sm">Вывод:</p>
            <p className="text-gray-300 text-sm">Вы несовершеннолетний!</p>
          </div>
          <div className="mt-3 p-2 bg-purple-900/20 border border-purple-700/30 rounded text-purple-300 text-xs">
            💡 <span className="font-medium">Объяснение:</span> Так как age (15) меньше 18, условие ложно, поэтому выполняется блок else.
          </div>
        </div>
      </div>

      {/* Оператор else if */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <GitBranch className="w-5 h-5 text-cyan-400" />
          Оператор else if (иначе если)
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Оператор <code className="bg-gray-700 px-1.5 py-0.5 rounded">else if</code> позволяет проверить несколько условий по очереди.
          </p>
        </div>

        <div className="mt-6 bg-gray-900/50 p-5 rounded-xl border border-cyan-700/30">
          <h3 className="font-bold text-cyan-300 mb-3">Структура if-else if-else:</h3>
          <div className="bg-gray-800 p-4 rounded-lg">
            <pre className="text-cyan-300 text-sm">
              <code>if (условие1) {"{"}<br/>&nbsp;&nbsp;// код, если условие1 истинно<br/>{"}"} else if (условие2) {"{"}<br/>&nbsp;&nbsp;// код, если условие2 истинно<br/>{"}"} else {"{"}<br/>&nbsp;&nbsp;// код, если все условия ложны<br/>{"}"}</code>
            </pre>
          </div>
          <div className="mt-4 bg-gray-800 p-4 rounded-lg">
            <pre className="text-cyan-300 text-sm">
{`#include <stdio.h>

int main() {
    int age = 16;
    
    if (age >= 18) {
        printf("Вы совершеннолетний!\\n");
    } else if (age >= 16) {
        printf("Вы можете работать!\\n");
    } else {
        printf("Вы еще учитесь!\\n");
    }
    
    return 0;
}`}
            </pre>
          </div>
          <div className="mt-3 p-3 bg-black rounded">
            <p className="text-white text-sm">Вывод:</p>
            <p className="text-gray-300 text-sm">Вы можете работать!</p>
          </div>
          <div className="mt-3 p-2 bg-cyan-900/20 border border-cyan-700/30 rounded text-cyan-300 text-xs">
            💡 <span className="font-medium">Объяснение:</span> {`Проверяются условия по порядку. Первое условие (age >= 18) ложно, но второе (age >= 16) истинно, поэтому выполняется соответствующий блок.`}
          </div>
        </div>
      </div>

      {/* Операторы сравнения */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <AlertTriangle className="w-5 h-5 text-orange-400" />
          Операторы сравнения
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Для создания условий используются операторы сравнения:
          </p>
        </div>

        <div className="mt-6 grid md:grid-cols-2 gap-4">
          <div className="bg-gray-900/50 p-4 rounded-xl border border-green-700/30">
            <h3 className="font-bold text-green-300 mb-3">Базовые операторы:</h3>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-center gap-2">
                <code className="bg-gray-700 px-2 py-1 rounded">==</code>
                <span>Равно</span>
              </li>
              <li className="flex items-center gap-2">
                <code className="bg-gray-700 px-2 py-1 rounded">!=</code>
                <span>Не равно</span>
              </li>
              <li className="flex items-center gap-2">
                <code className="bg-gray-700 px-2 py-1 rounded">{`>`}</code>
                <span>Больше</span>
              </li>
              <li className="flex items-center gap-2">
                <code className="bg-gray-700 px-2 py-1 rounded">{`<`}</code>
                <span>Меньше</span>
              </li>
              <li className="flex items-center gap-2">
                <code className="bg-gray-700 px-2 py-1 rounded">{`>=`}</code>
                <span>Больше или равно</span>
              </li>
              <li className="flex items-center gap-2">
                <code className="bg-gray-700 px-2 py-1 rounded">{`<=`}</code>
                <span>Меньше или равно</span>
              </li>
            </ul>
          </div>

          <div className="bg-gray-900/50 p-4 rounded-xl border border-blue-700/30">
            <h3 className="font-bold text-blue-300 mb-3">Примеры использования:</h3>
            <div className="space-y-2 text-sm">
              <div className="bg-gray-800 p-2 rounded">
                <code className="text-blue-300">age == 18</code>
                <p className="text-gray-400 text-xs mt-1">Возраст равен 18</p>
              </div>
              <div className="bg-gray-800 p-2 rounded">
                <code className="text-blue-300">score != 100</code>
                <p className="text-gray-400 text-xs mt-1">Оценка не равна 100</p>
              </div>
              <div className="bg-gray-800 p-2 rounded">
                <code className="text-blue-300">{`temperature > 0`}</code>
                <p className="text-gray-400 text-xs mt-1">Температура больше 0</p>
              </div>
              <div className="bg-gray-800 p-2 rounded">
                <code className="text-blue-300">{`count <= 10`}</code>
                <p className="text-gray-400 text-xs mt-1">Счетчик меньше или равен 10</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 bg-gray-900/50 p-4 rounded-xl border border-yellow-700/30">
          <h4 className="font-bold text-yellow-300 mb-2">⚠️ Важно:</h4>
          <p className="text-gray-300 text-sm">
            Не путайте <code className="bg-gray-700 px-1.5 py-0.5 rounded">=</code> (присваивание) и <code className="bg-gray-700 px-1.5 py-0.5 rounded">==</code> (сравнение)!
          </p>
          <div className="mt-2 grid md:grid-cols-2 gap-2 text-sm">
            <div className="bg-red-900/20 p-2 rounded">
              <code className="text-red-300">if (age = 18)</code>
              <p className="text-red-400 text-xs mt-1">❌ Это присваивание! Условие всегда будет истинным!</p>
            </div>
            <div className="bg-green-900/20 p-2 rounded">
              <code className="text-green-300">if (age == 18)</code>
              <p className="text-green-400 text-xs mt-1">✅ Это сравнение! Правильно!</p>
            </div>
          </div>
        </div>
      </div>

      {/* Логические операторы */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Brain className="w-5 h-5 text-red-400" />
          Логические операторы
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Для создания сложных условий используются логические операторы:
          </p>
        </div>

        <div className="mt-6 grid md:grid-cols-3 gap-4">
          <div className="bg-gray-900/50 p-4 rounded-xl border border-blue-700/30">
            <h3 className="font-bold text-blue-300 mb-3 flex items-center gap-2">
              <span className="bg-gray-700 px-2 py-1 rounded">&amp;&amp;</span>
              Логическое И
            </h3>
            <p className="text-gray-300 text-sm mb-2">
              Условие истинно, если оба выражения истинны
            </p>
            <div className="bg-gray-800 p-2 rounded">
              <code className="text-blue-300">{`age >= 18 && age <= 65`}</code>
              <p className="text-gray-400 text-xs mt-1">Возраст от 18 до 65 лет</p>
            </div>
          </div>

          <div className="bg-gray-900/50 p-4 rounded-xl border border-green-700/30">
            <h3 className="font-bold text-green-300 mb-3 flex items-center gap-2">
              <span className="bg-gray-700 px-2 py-1 rounded">||</span>
              Логическое ИЛИ
            </h3>
            <p className="text-gray-300 text-sm mb-2">
              Условие истинно, если хотя бы одно выражение истинно
            </p>
            <div className="bg-gray-800 p-2 rounded">
              <code className="text-green-300">grade == 'A' || grade == 'B'</code>
              <p className="text-gray-400 text-xs mt-1">Оценка A или B</p>
            </div>
          </div>

          <div className="bg-gray-900/50 p-4 rounded-xl border border-purple-700/30">
            <h3 className="font-bold text-purple-300 mb-3 flex items-center gap-2">
              <span className="bg-gray-700 px-2 py-1 rounded">!</span>
              Логическое НЕ
            </h3>
            <p className="text-gray-300 text-sm mb-2">
              Инвертирует значение (истину делает ложью и наоборот)
            </p>
            <div className="bg-gray-800 p-2 rounded">
              <code className="text-purple-300">{`!(age < 18)`}</code>
              <p className="text-gray-400 text-xs mt-1">Не меньше 18 (т.е. 18 или больше)</p>
            </div>
          </div>
        </div>

        <div className="mt-6 bg-gray-900/50 p-4 rounded-xl border border-cyan-700/30">
          <h3 className="font-bold text-cyan-300 mb-3">Комплексный пример:</h3>
          <div className="bg-gray-800 p-3 rounded">
            <pre className="text-cyan-300 text-sm">
{`#include <stdio.h>

int main() {
    int age = 25;
    char has_license = 'Y';
    
    if (age >= 18 && has_license == 'Y') {
        printf("Можно водить машину!\\n");
    } else if (age >= 18 && has_license != 'Y') {
        printf("Нужно получить права!\\n");
    } else {
        printf("Слишком молод для вождения!\\n");
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
            <GitBranch className="w-5 h-5 text-green-400" />
          </div>
          <div>
            <h3 className="font-bold text-white mb-2">Отлично! 🤔</h3>
            <p className="text-gray-300">
              Теперь вы умеете заставлять программы принимать решения с помощью условных операторов! Это ключевой навык для создания умных программ.
              В следующем уроке мы научимся создавать интерактивные программы с использованием условий и ввода данных.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Part1;