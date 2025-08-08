// src/data/courses/markdown/lesson19/part1.jsx
import React from 'react';
import { Notebook, Code, FunctionSquare, Image, Table, Lightbulb } from 'lucide-react';

const Part1 = () => {
  return (
    <div className="space-y-8 text-gray-200">
      {/* Вступление */}
      <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 backdrop-blur-sm border border-blue-700/30 rounded-2xl p-6 shadow-lg">
        <div className="flex items-start gap-4">
          <div className="bg-blue-500/20 p-3 rounded-lg">
            <Notebook className="w-6 h-6 text-blue-400" />
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">📓 Урок 19: Markdown в Jupyter Notebook</h1>
            <h2 className="text-xl font-semibold text-blue-300 mb-3">Использование Markdown для документирования анализа данных</h2>
            <p className="text-gray-300">
              <span className="font-medium text-yellow-400">🎯 Цель урока:</span> Освоить использование Markdown-ячеек в Jupyter Notebook для создания документированных отчетов, объяснения кода, вставки формул, изображений и таблиц.
            </p>
          </div>
        </div>
      </div>

      {/* Что такое Jupyter Notebook */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Notebook className="w-5 h-5 text-green-400" />
          Что такое Jupyter Notebook?
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            <span className="font-medium text-green-300">Jupyter Notebook</span> — это интерактивная среда разработки, которая позволяет создавать и выполнять документы, 
            сочетающие код, визуализации, текст и математические формулы. Она широко используется в <span className="font-medium">науке о данных</span>, 
            <span className="font-medium"> машинном обучении</span>, <span className="font-medium">исследованиях</span> и <span className="font-medium">образовании</span>.
          </p>
          <p>
            Основные особенности Jupyter Notebook:
          </p>
        </div>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-900/50 p-5 rounded-xl border border-green-700/30">
            <h3 className="font-bold text-green-300 mb-3">Интерактивность:</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li className="flex items-start gap-2">
                <span className="font-bold text-green-400 mt-1">•</span>
                <span>Выполнение кода по частям (ячейкам)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold text-green-400 mt-1">•</span>
                <span>Мгновенный просмотр результатов</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold text-green-400 mt-1">•</span>
                <span>Интерактивные виджеты и графики</span>
              </li>
            </ul>
          </div>
          <div className="bg-gray-900/50 p-5 rounded-xl border border-blue-700/30">
            <h3 className="font-bold text-blue-300 mb-3">Документирование:</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li className="flex items-start gap-2">
                <span className="font-bold text-blue-400 mt-1">•</span>
                <span>Markdown-ячейки для пояснений</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold text-blue-400 mt-1">•</span>
                <span>Встроенная поддержка LaTeX</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold text-blue-400 mt-1">•</span>
                <span>Экспорт в различные форматы (HTML, PDF, Markdown)</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-6 bg-gray-900/30 p-4 rounded-lg border border-gray-700">
          <h4 className="font-bold text-white mb-2">Преимущества Jupyter Notebook:</h4>
          <ul className="list-disc pl-5 space-y-2 text-gray-300 text-sm">
            <li>Идеален для исследовательского анализа данных</li>
            <li>Позволяет создавать воспроизводимые исследования</li>
            <li>Отлично подходит для обучения и презентаций</li>
            <li>Поддерживает множество языков программирования (Python, R, Julia и др.)</li>
          </ul>
        </div>
      </div>

      {/* Ячейки в Jupyter Notebook */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Code className="w-5 h-5 text-purple-400" />
          Типы ячеек в Jupyter Notebook
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            В Jupyter Notebook существует два основных типа ячеек:
          </p>
        </div>

        <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-gray-900/50 p-5 rounded-xl border border-purple-700/30">
            <h3 className="font-bold text-purple-300 mb-3 flex items-center gap-2">
              <Code className="w-5 h-5" />
              Code Cells (Ячейки кода)
            </h3>
            <div className="space-y-3 text-gray-300 text-sm">
              <p>
                Используются для написания и выполнения программного кода.
              </p>
              <div className="bg-gray-800 p-3 rounded">
                <p className="font-medium text-gray-400 mb-2">Пример:</p>
                <pre className="text-gray-300"><code>{`# Это ячейка кода Python
import pandas as pd
import numpy as np

data = pd.DataFrame({'x': [1, 2, 3], 'y': [4, 5, 6]})
print(data)`}</code></pre>
              </div>
              <ul className="list-disc pl-5 space-y-1">
                <li>Выполняются нажатием Shift+Enter</li>
                <li>Результаты отображаются сразу под ячейкой</li>
                <li>Поддерживают автодополнение и подсветку синтаксиса</li>
              </ul>
            </div>
          </div>

          <div className="bg-gray-900/50 p-5 rounded-xl border border-green-700/30">
            <h3 className="font-bold text-green-300 mb-3 flex items-center gap-2">
              <Lightbulb className="w-5 h-5" />
              Markdown Cells (Ячейки Markdown)
            </h3>
            <div className="space-y-3 text-gray-300 text-sm">
              <p>
                Используются для написания текста, пояснений и документации.
              </p>
              <div className="bg-gray-800 p-3 rounded">
                <p className="font-medium text-gray-400 mb-2">Пример:</p>
                <pre className="text-gray-300"><code>{`## Анализ данных

В этом разделе мы рассмотрим:
- Загрузку данных
- Предварительную обработку
- Визуализацию результатов`}</code></pre>
              </div>
              <ul className="list-disc pl-5 space-y-1">
                <li>Отображаются как отформатированный текст</li>
                <li>Поддерживают весь синтаксис Markdown</li>
                <li>Могут содержать LaTeX-формулы</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-6 bg-red-900/20 border border-red-700/30 rounded-lg p-4">
          <h4 className="font-bold text-red-300 mb-2 flex items-center gap-2">
            <span className="bg-red-500/20 w-6 h-6 rounded-full flex items-center justify-center text-sm">!</span>
            Важно:
          </h4>
          <p className="text-gray-300 text-sm">
            Для перехода в режим редактирования Markdown-ячейки дважды кликните по ней или нажмите Enter. 
            Для выхода из режима редактирования и отображения результата нажмите Shift+Enter или Ctrl+Enter.
          </p>
        </div>
      </div>

      {/* Возможности Markdown в Jupyter */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Lightbulb className="w-5 h-5 text-cyan-400" />
          Возможности Markdown в Jupyter Notebook
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Jupyter Notebook предоставляет расширенные возможности Markdown, включая:
          </p>
        </div>

        <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-gray-900/50 p-4 rounded-xl border border-cyan-700/30">
            <h3 className="font-bold text-cyan-300 mb-3 flex items-center gap-2">
              <FunctionSquare className="w-5 h-5" />
              Математические формулы (LaTeX)
            </h3>
            <div className="grid grid-cols-1 gap-4">
              <div>
                <p className="text-gray-400 text-sm mb-2">Инлайновая формула:</p>
                <pre className="bg-gray-800 p-3 rounded text-sm text-gray-300"><code>Формула Эйнштейна: $ E = mc^2 $</code></pre>
                <p className="text-gray-300 text-sm mt-2">Результат: Формула Эйнштейна: <span className="italic">E = mc²</span></p>
              </div>
              <div>
                <p className="text-gray-400 text-sm mb-2">Блочная формула:</p>
                <pre className="bg-gray-800 p-3 rounded text-sm text-gray-300"><code>{`$$ x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a} $$`}</code></pre>
                <div className="text-gray-300 text-center p-4 my-2 bg-gray-800 rounded">
                  <span className="text-lg italic">x = (-b ± √(b² - 4ac)) / 2a</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-900/50 p-4 rounded-xl border border-yellow-700/30">
            <h3 className="font-bold text-yellow-300 mb-3 flex items-center gap-2">
              <Image className="w-5 h-5" />
              Изображения и медиа
            </h3>
            <div className="space-y-4">
              <div>
                <p className="text-gray-400 text-sm mb-2">Из локального файла:</p>
                <pre className="bg-gray-800 p-3 rounded text-sm text-gray-300"><code>![Альтернативный текст](images/chart.png)</code></pre>
              </div>
              <div>
                <p className="text-gray-400 text-sm mb-2">Из интернета:</p>
                <pre className="bg-gray-800 p-3 rounded text-sm text-gray-300"><code>![Логотип](https://example.com/logo.png)</code></pre>
              </div>
              <div>
                <p className="text-gray-400 text-sm mb-2">С настройкой размера (HTML):</p>
                <pre className="bg-gray-800 p-3 rounded text-sm text-gray-300"><code>{`<img src="chart.png" width="500" height="300">`}</code></pre>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 bg-gray-900/50 p-4 rounded-xl border border-pink-700/30">
          <h3 className="font-bold text-pink-300 mb-3 flex items-center gap-2">
            <Table className="w-5 h-5" />
            Таблицы
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <p className="text-gray-400 text-sm mb-2">Markdown-таблица:</p>
              <pre className="bg-gray-800 p-3 rounded text-sm text-gray-300"><code>{`| Имя | Возраст | Город |
|-----|--------|-------|
| Иван | 25     | Москва |
| Анна | 30     | Питер  |`}</code></pre>
            </div>
            <div>
              <p className="text-gray-400 text-sm mb-2">Результат:</p>
              <div className="text-gray-300 overflow-x-auto">
                <table className="min-w-full border-collapse">
                  <thead>
                    <tr className="border-b border-gray-700">
                      <th className="text-left p-2">Имя</th>
                      <th className="text-left p-2">Возраст</th>
                      <th className="text-left p-2">Город</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-800">
                    <tr>
                      <td className="p-2">Иван</td>
                      <td className="p-2">25</td>
                      <td className="p-2">Москва</td>
                    </tr>
                    <tr>
                      <td className="p-2">Анна</td>
                      <td className="p-2">30</td>
                      <td className="p-2">Питер</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Использование в анализе данных */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Notebook className="w-5 h-5 text-orange-400" />
          Использование Markdown в анализе данных
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Markdown-ячейки в Jupyter Notebook играют ключевую роль в анализе данных:
          </p>
        </div>

        <div className="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-4">
          <div className="bg-gray-900/50 p-4 rounded-xl border border-blue-700/30">
            <h3 className="font-bold text-blue-300 mb-2 flex items-center gap-2">
              <span className="bg-blue-500/20 w-6 h-6 rounded-full flex items-center justify-center text-xs">1</span>
              Документирование
            </h3>
            <p className="text-gray-300 text-sm">
              Пояснение шагов анализа, описания методов и интерпретации результатов.
            </p>
          </div>
          <div className="bg-gray-900/50 p-4 rounded-xl border border-green-700/30">
            <h3 className="font-bold text-green-300 mb-2 flex items-center gap-2">
              <span className="bg-green-500/20 w-6 h-6 rounded-full flex items-center justify-center text-xs">2</span>
              Объяснение кода
            </h3>
            <p className="text-gray-300 text-sm">
              Добавление комментариев к сложным участкам кода и объяснение логики.
            </p>
          </div>
          <div className="bg-gray-900/50 p-4 rounded-xl border border-purple-700/30">
            <h3 className="font-bold text-purple-300 mb-2 flex items-center gap-2">
              <span className="bg-purple-500/20 w-6 h-6 rounded-full flex items-center justify-center text-xs">3</span>
              Визуализация
            </h3>
            <p className="text-gray-300 text-sm">
              Добавление заголовков, подписей и описаний к графикам и диаграммам.
            </p>
          </div>
        </div>

        <div className="mt-6 bg-gray-900/30 p-4 rounded-lg border border-gray-700">
          <h4 className="font-bold text-white mb-2">Пример структуры аналитического отчета:</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-300 text-sm">
            <div>
              <ul className="list-disc pl-5 space-y-2">
                <li><span className="font-medium">Заголовок:</span> Название исследования</li>
                <li><span className="font-medium">Введение:</span> Цели и задачи</li>
                <li><span className="font-medium">Методология:</span> Описание подходов</li>
                <li><span className="font-medium">Результаты:</span> Выводы и наблюдения</li>
              </ul>
            </div>
            <div>
              <ul className="list-disc pl-5 space-y-2">
                <li><span className="font-medium">Визуализации:</span> Графики и диаграммы</li>
                <li><span className="font-medium">Обсуждение:</span> Интерпретация результатов</li>
                <li><span className="font-medium">Выводы:</span> Заключение исследования</li>
                <li><span className="font-medium">Приложения:</span> Дополнительные материалы</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Практические примеры */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Lightbulb className="w-5 h-5 text-pink-400" />
          Практические примеры использования
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Вот как можно использовать Markdown в Jupyter Notebook на практике:
          </p>
        </div>

        <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-gray-900/50 p-4 rounded-xl border border-blue-700/30">
            <h3 className="font-bold text-blue-300 mb-3">Аналитический отчет:</h3>
            <pre className="bg-gray-800 p-3 rounded text-sm text-gray-300"><code>{`# Анализ продаж за квартал

## Введение
В этом отчете представлен анализ продаж компании за первый квартал 2024 года.

## Методология
Использовались данные из CRM-системы и финансовых отчетов.

## Результаты
Средний рост продаж составил 15% по сравнению с предыдущим кварталом.

### Формула роста:
$$ \\text{Рост} = \\frac{\\text{Текущий период} - \\text{Предыдущий период}}{\\text{Предыдущий период}} \\times 100\\% $$

## Визуализация
![График продаж](sales_chart.png)

## Выводы
Анализ показал положительную динамику продаж.`}</code></pre>
          </div>
          <div className="bg-gray-900/50 p-4 rounded-xl border border-green-700/30">
            <h3 className="font-bold text-green-300 mb-3">Учебный материал:</h3>
            <pre className="bg-gray-800 p-3 rounded text-sm text-gray-300"><code>{`# Урок: Линейная регрессия

## Что такое линейная регрессия?

Линейная регрессия - это статистический метод для моделирования 
зависимости между переменной Y и одной или несколькими 
переменными X.

### Математическая модель:
$$ Y = \\beta_0 + \\beta_1 X + \\epsilon $$

где:
- $ Y $ - зависимая переменная
- $ X $ - независимая переменная
- $ \\beta_0 $ - свободный член
- $ \\beta_1 $ - коэффициент наклона
- $ \\epsilon $ - ошибка

## Практический пример:

\`\`\`python
import numpy as np
from sklearn.linear_model import LinearRegression

# Создаем данные
X = np.array([[1], [2], [3], [4], [5]])
y = np.array([2, 4, 6, 8, 10])

# Создаем и обучаем модель
model = LinearRegression()
model.fit(X, y)
\`\`\``}</code></pre>
          </div>
        </div>

        <div className="mt-6 bg-gray-900/30 p-4 rounded-lg border border-gray-700">
          <h4 className="font-bold text-white mb-2">Советы по использованию:</h4>
          <ul className="list-disc pl-5 space-y-2 text-gray-300 text-sm">
            <li>Используйте заголовки для структурирования отчета</li>
            <li>Добавляйте формулы для математических объяснений</li>
            <li>Вставляйте графики для визуализации данных</li>
            <li>Используйте списки для перечисления шагов и выводов</li>
            <li>Добавляйте кодовые блоки для примеров кода</li>
          </ul>
        </div>
      </div>

      {/* Заключение */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <div className="flex items-start gap-3">
          <div className="bg-green-500/20 p-2 rounded-lg flex-shrink-0">
            <Notebook className="w-5 h-5 text-green-400" />
          </div>
          <div>
            <h3 className="font-bold text-white mb-2">Поздравляем! 🎉</h3>
            <p className="text-gray-300">
              Теперь вы знаете, как использовать Markdown в Jupyter Notebook для создания документированных аналитических отчетов, 
              учебных материалов и исследований. Вы научились сочетать код, текст, формулы и визуализации в одном интерактивном документе. 
              Эти навыки важны для анализа данных, машинного обучения и научных исследований. 
              В следующем уроке мы рассмотрим дополнительные возможности и лучшие практики работы с Jupyter Notebook.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Part1;
