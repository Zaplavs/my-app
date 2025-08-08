// src/data/courses/markdown/lesson14/part3.jsx
import React from 'react';
import { Sigma, FunctionSquare, Calculator, Edit3 } from 'lucide-react';

const Part3 = () => {
  return (
    <div className="space-y-8 text-gray-200">
      {/* Вступление */}
      <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 backdrop-blur-sm border border-blue-700/30 rounded-2xl p-6 shadow-lg">
        <div className="flex items-start gap-4">
          <div className="bg-blue-500/20 p-3 rounded-lg">
            <Edit3 className="w-6 h-6 text-blue-400" />
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">✏️ Практика: Математические формулы (LaTeX) в Markdown</h1>
            <p className="text-gray-300">
              <span className="font-medium text-yellow-400">🎯 Цель:</span> Закрепить знания по вставке математических формул в Markdown с использованием LaTeX-синтаксиса.
            </p>
          </div>
        </div>
      </div>

      {/* Задание 1 */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
          <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">1</span>
          Научные формулы
        </h3>
        <p className="text-gray-300 mb-3">
          Создайте Markdown-документ <code className="bg-gray-700 px-2 py-1 rounded">scientific-formulas.md</code> с коллекцией известных научных формул. Включите:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-gray-300 mb-3">
          <li>Заголовок 1 уровня "Известные научные формулы"</li>
          <li>Формулу Эйнштейна $E = mc^2$ (инлайновая)</li>
          <li>Закон Ньютона в блочном виде: $$F = ma$$</li>
          <li>Формулу Пифагора в блочном виде: $$c^2 = a^2 + b^2$$</li>
          <li>Формулу площади круга с греческой буквой пи: $$S = \pi r^2$$</li>
          <li>Краткое описание каждой формулы</li>
        </ul>
        <details className="group">
          <summary className="cursor-pointer text-sm text-gray-400 hover:text-gray-300 flex items-center gap-1">
            <span>Подсказка</span>
            <svg className="w-4 h-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </summary>
          <div className="mt-2 p-3 bg-gray-900/50 rounded text-sm text-gray-300">
            <p>Используйте инлайновые формулы для упоминания в тексте и блочные для выделенных формул. Не забудьте про греческие буквы.</p>
          </div>
        </details>
      </div>

      {/* Задание 2 */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
          <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">2</span>
          Математические выражения
        </h3>
        <p className="text-gray-300 mb-3">
          Создайте файл <code className="bg-gray-700 px-2 py-1 rounded">math-expressions.md</code> - сборник математических выражений. Включите:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-gray-300 mb-3">
          <li>Заголовок 1 уровня "Математические выражения"</li>
          <li>{`Дробь в инлайновом виде: $ \frac{a+b}{c} $`}</li>
          <li>{`Квадратный корень в блочном виде: $$ \sqrt{x^2 + y^2} $$`}</li>
          <li>{`Сумму в блочном виде: $$ \sum_{i=1}^{n} i $$`}</li>
          <li>{`Интеграл в блочном виде: $$ \int_{0}^{\infty} e^{-x^2} dx $$`}</li>
          <li>{`Предел в блочном виде: $$ \lim_{x \to 0} \frac{\sin x}{x} $$`}</li>
          <li>{`Нижние и верхние индексы: $ x_1, x_2, y^{(1)}, y^{(2)} $`}</li>
        </ul>
        <details className="group">
          <summary className="cursor-pointer text-sm text-gray-400 hover:text-gray-300 flex items-center gap-1">
            <span>Подсказка</span>
            <svg className="w-4 h-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </summary>
          <div className="mt-2 p-3 bg-gray-900/50 rounded text-sm text-gray-300">
            <p>Обратите внимание на правильное использование фигурных скобок для группировки индексов и степеней.</p>
          </div>
        </details>
      </div>

      {/* Задание 3 */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
          <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">3</span>
          Физические константы
        </h3>
        <p className="text-gray-300 mb-3">
          Создайте документ <code className="bg-gray-700 px-2 py-1 rounded">physical-constants.md</code> - таблицу физических констант с формулами. Включите:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-gray-300 mb-3">
          <li>Заголовок 1 уровня "Физические константы"</li>
          <li>Таблицу с тремя колонками: "Название", "Значение", "Формула"</li>
          <li>В колонке "Формула" используйте LaTeX для отображения формул</li>
          <li>Добавьте константы: скорость света, постоянная Планка, гравитационная постоянная</li>
          <li>Используйте греческие буквы и математические символы</li>
        </ul>
        <details className="group">
          <summary className="cursor-pointer text-sm text-gray-400 hover:text-gray-300 flex items-center gap-1">
            <span>Подсказка</span>
            <svg className="w-4 h-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </summary>
          <div className="mt-2 p-3 bg-gray-900/50 rounded text-sm text-gray-300">
            <p>{`Пример формулы в таблице: $ c = 299,792,458 \text{ м/с} $. Используйте \text{'{' для текста внутри формул.`}</p>
          </div>
        </details>
      </div>

      {/* Задание 4 */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
          <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">4</span>
          Создание учебного материала
        </h3>
        <p className="text-gray-300 mb-3">
          Создайте файл <code className="bg-gray-700 px-2 py-1 rounded">calculus-basics.md</code> - учебный материал по основам математического анализа. Включите:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-gray-300 mb-3">
          <li>Заголовок 1 уровня "Основы математического анализа"</li>
          <li>Раздел "Производные" с определением в блочной формуле</li>
          <li>Раздел "Интегралы" с определением в блочной формуле</li>
          <li>{`Примеры производных в блочных формулах: $ \frac{d}{dx}(x^n) = nx^{n-1} $`}</li>
          <li>{`Примеры интегралов в блочных формулах: $ \int x^n dx = \frac{x^{n+1}}{n+1} + C $`}</li>
          <li>Используйте инлайновые формулы для упоминания в тексте</li>
        </ul>
        <details className="group">
          <summary className="cursor-pointer text-sm text-gray-400 hover:text-gray-300 flex items-center gap-1">
            <span>Подсказка</span>
            <svg className="w-4 h-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </summary>
          <div className="mt-2 p-3 bg-gray-900/50 rounded text-sm text-gray-300">
            <p>Используйте \frac для дробей, ^ и _ для степеней и индексов, C для константы интегрирования.</p>
          </div>
        </details>
      </div>

      {/* Задание 5 */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
          <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">5</span>
          Эксперимент с формулами
        </h3>
        <p className="text-gray-300 mb-3">
          Создайте документ <code className="bg-gray-700 px-2 py-1 rounded">formula-experiment.md</code>, демонстрирующий различные возможности LaTeX:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-gray-300 mb-3">
          <li>Простые инлайновые формулы с разными символами</li>
          <li>Сложные блочные формулы с дробями, корнями, интегралами</li>
          <li>Формулы с греческими буквами и специальными символами</li>
          <li>{`Формулы с матрицами (если поддерживается): $$ \begin{pmatrix} a & b \\ c & d \end{pmatrix} $$`}</li>
          <li>Формулы с верхними и нижними индексами</li>
          <li>Сравнение инлайновых и блочных формул для одинаковых выражений</li>
        </ul>
        <p className="text-gray-300">
          Добавьте пояснения к каждому примеру, объясняя, когда и почему вы используете тот или иной тип формулы.
        </p>
      </div>

      {/* Заключение */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <div className="flex items-start gap-3">
          <div className="bg-green-500/20 p-2 rounded-lg flex-shrink-0">
            <Sigma className="w-5 h-5 text-green-400" />
          </div>
          <div>
            <h3 className="font-bold text-white mb-2">Отличная работа! 🎉</h3>
            <p className="text-gray-300">
              Эти задания помогли вам закрепить навыки вставки математических формул в Markdown с использованием LaTeX. 
              Вы научились создавать как простые инлайновые формулы, так и сложные блочные выражения, использовать греческие буквы и математические символы. 
              Эти навыки важны для создания научных и технических документов, учебных материалов и заметок по математике.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Part3;
