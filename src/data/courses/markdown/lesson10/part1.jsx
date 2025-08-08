// src/data/courses/markdown/lesson10/part1.jsx
import React from 'react';
import { Table, AlignLeft, AlignCenter, AlignRight } from 'lucide-react';

const Part1 = () => {
  return (
    <div className="space-y-8 text-gray-200">
      {/* Вступление */}
      <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 backdrop-blur-sm border border-blue-700/30 rounded-2xl p-6 shadow-lg">
        <div className="flex items-start gap-4">
          <div className="bg-blue-500/20 p-3 rounded-lg">
            <Table className="w-6 h-6 text-blue-400" />
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">📊 Урок 10: Таблицы в Markdown</h1>
            <h2 className="text-xl font-semibold text-blue-300 mb-3">Создание и форматирование таблиц для структурирования данных</h2>
            <p className="text-gray-300">
              <span className="font-medium text-yellow-400">🎯 Цель урока:</span> Освоить синтаксис создания таблиц в Markdown, понять принципы выравнивания содержимого ячеек и научиться форматировать таблицы для лучшей читаемости.
            </p>
          </div>
        </div>
      </div>

      {/* Основы таблиц */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Table className="w-5 h-5 text-green-400" />
          Основы создания таблиц
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Таблицы в Markdown создаются с помощью вертикальных черт (<code className="bg-gray-700 px-1.5 py-0.5 rounded">|</code>) и дефисов (<code className="bg-gray-700 px-1.5 py-0.5 rounded">-</code>). 
            Они идеально подходят для отображения структурированных данных, сравнений и списков с несколькими параметрами.
          </p>
        </div>

        <div className="mt-6 bg-gray-900/50 p-5 rounded-xl border border-green-700/30">
          <h3 className="font-bold text-green-300 mb-3">Базовый синтаксис таблицы:</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <p className="text-gray-400 text-sm mb-2">Markdown:</p>
              <pre className="bg-gray-800 p-4 rounded text-sm text-gray-300"><code>{`| Имя | Возраст | Город |
|-----|--------|-------|
| Иван | 25     | Москва |
| Анна | 30     | Санкт-Петербург |
| Петр | 22     | Новосибирск |`}</code></pre>
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
                      <td className="p-2">Санкт-Петербург</td>
                    </tr>
                    <tr>
                      <td className="p-2">Петр</td>
                      <td className="p-2">22</td>
                      <td className="p-2">Новосибирск</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 bg-gray-900/30 p-4 rounded-lg border border-gray-700">
          <h4 className="font-bold text-white mb-2">Важные моменты:</h4>
          <ul className="list-disc pl-5 space-y-2 text-gray-300 text-sm">
            <li>Первая строка — заголовки столбцов</li>
            <li>Вторая строка — разделительная линия из дефисов (обязательна)</li>
            <li>Вертикальные черты (<code className="bg-gray-700 px-1.5 py-0.5 rounded">|</code>) должны быть выровнены по столбцам</li>
            <li>Крайние вертикальные черты слева и справа не обязательны, но улучшают читаемость</li>
            <li>Пробелы вокруг содержимого ячеек игнорируются</li>
          </ul>
        </div>
      </div>

      {/* Выравнивание в таблицах */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <AlignCenter className="w-5 h-5 text-purple-400" />
          Выравнивание содержимого ячеек
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Markdown позволяет управлять выравниванием текста в ячейках таблицы с помощью двоеточий (<code className="bg-gray-700 px-1.5 py-0.5 rounded">:</code>) в разделительной строке.
          </p>
        </div>

        <div className="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="bg-gray-900/50 p-5 rounded-xl border border-blue-700/30">
            <h3 className="font-bold text-blue-300 mb-3 flex items-center gap-2">
              <AlignLeft className="w-4 h-4" />
              Выравнивание по левому краю
            </h3>
            <div className="grid grid-cols-1 gap-4">
              <div>
                <p className="text-gray-400 text-sm mb-2">Markdown:</p>
                <pre className="bg-gray-800 p-3 rounded text-sm text-gray-300"><code>{`| Название | Значение |
|:---------|----------|
| Лево     | Текст    |`}</code></pre>
              </div>
              <div>
                <p className="text-gray-400 text-sm mb-2">Результат:</p>
                <div className="text-gray-300 overflow-x-auto">
                  <table className="min-w-full border-collapse">
                    <thead>
                      <tr className="border-b border-gray-700">
                        <th className="text-left p-2">Название</th>
                        <th className="text-left p-2">Значение</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="p-2 text-left">Лево</td>
                        <td className="p-2 text-left">Текст</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-900/50 p-5 rounded-xl border border-green-700/30">
            <h3 className="font-bold text-green-300 mb-3 flex items-center gap-2">
              <AlignCenter className="w-4 h-4" />
              Выравнивание по центру
            </h3>
            <div className="grid grid-cols-1 gap-4">
              <div>
                <p className="text-gray-400 text-sm mb-2">Markdown:</p>
                <pre className="bg-gray-800 p-3 rounded text-sm text-gray-300"><code>{`| Название | Значение |
|:--------:|:--------:|
| Центр    | Текст    |`}</code></pre>
              </div>
              <div>
                <p className="text-gray-400 text-sm mb-2">Результат:</p>
                <div className="text-gray-300 overflow-x-auto">
                  <table className="min-w-full border-collapse">
                    <thead>
                      <tr className="border-b border-gray-700">
                        <th className="text-center p-2">Название</th>
                        <th className="text-center p-2">Значение</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="p-2 text-center">Центр</td>
                        <td className="p-2 text-center">Текст</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-900/50 p-5 rounded-xl border border-orange-700/30">
            <h3 className="font-bold text-orange-300 mb-3 flex items-center gap-2">
              <AlignRight className="w-4 h-4" />
              Выравнивание по правому краю
            </h3>
            <div className="grid grid-cols-1 gap-4">
              <div>
                <p className="text-gray-400 text-sm mb-2">Markdown:</p>
                <pre className="bg-gray-800 p-3 rounded text-sm text-gray-300"><code>{`| Название | Значение |
|---------:|---------:|
| Право    | Текст    |`}</code></pre>
              </div>
              <div>
                <p className="text-gray-400 text-sm mb-2">Результат:</p>
                <div className="text-gray-300 overflow-x-auto">
                  <table className="min-w-full border-collapse">
                    <thead>
                      <tr className="border-b border-gray-700">
                        <th className="text-right p-2">Название</th>
                        <th className="text-right p-2">Значение</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="p-2 text-right">Право</td>
                        <td className="p-2 text-right">Текст</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 bg-gray-900/30 p-4 rounded-lg border border-gray-700">
          <h4 className="font-bold text-white mb-2">Советы по выравниванию:</h4>
          <ul className="list-disc pl-5 space-y-2 text-gray-300 text-sm">
            <li>По умолчанию текст выравнивается по левому краю</li>
            <li>Числа удобнее выравнивать по правому краю для лучшего восприятия</li>
            <li>Заголовки можно выравнивать по центру для акцента</li>
            <li>Двоеточия ставятся только в строке с дефисами, не в строках данных</li>
          </ul>
        </div>
      </div>

      {/* Форматирование содержимого ячеек */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Table className="w-5 h-5 text-cyan-400" />
          Форматирование содержимого ячеек
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            В ячейках таблиц можно использовать большинство элементов форматирования Markdown:
          </p>
        </div>

        <div className="mt-6 bg-gray-900/50 p-5 rounded-xl border border-cyan-700/30">
          <h3 className="font-bold text-cyan-300 mb-3">Поддерживаемые элементы форматирования:</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <p className="text-gray-400 text-sm mb-2">Markdown:</p>
              <pre className="bg-gray-800 p-4 rounded text-sm text-gray-300"><code>{`| Формат | Пример |
|--------|--------|
| **Жирный** | **Важно** |
| *Курсив* | *Акцент* |
| \`Код\` | \`console.log()\` |
| [Ссылка](url) | [Google](https://google.com) |`}</code></pre>
            </div>
            <div>
              <p className="text-gray-400 text-sm mb-2">Результат:</p>
              <div className="text-gray-300 overflow-x-auto">
                <table className="min-w-full border-collapse">
                  <thead>
                    <tr className="border-b border-gray-700">
                      <th className="text-left p-2">Формат</th>
                      <th className="text-left p-2">Пример</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-800">
                    <tr>
                      <td className="p-2"><strong>Жирный</strong></td>
                      <td className="p-2"><strong>Важно</strong></td>
                    </tr>
                    <tr>
                      <td className="p-2"><em>Курсив</em></td>
                      <td className="p-2"><em>Акцент</em></td>
                    </tr>
                    <tr>
                      <td className="p-2"><code className="bg-gray-700 px-1.5 py-0.5 rounded">Код</code></td>
                      <td className="p-2"><code className="bg-gray-700 px-1.5 py-0.5 rounded">console.log()</code></td>
                    </tr>
                    <tr>
                      <td className="p-2"><a href="https://google.com" className="text-blue-400 hover:underline">Ссылка</a></td>
                      <td className="p-2"><a href="https://google.com" className="text-blue-400 hover:underline">Google</a></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 bg-red-900/20 border border-red-700/30 rounded-lg p-4">
          <h4 className="font-bold text-red-300 mb-2 flex items-center gap-2">
            <span className="bg-red-500/20 w-6 h-6 rounded-full flex items-center justify-center text-sm">!</span>
            Ограничения форматирования:
          </h4>
          <ul className="list-disc pl-5 space-y-2 text-gray-300 text-sm">
            <li>Заголовки (<code className="bg-gray-700 px-1.5 py-0.5 rounded"># Заголовок</code>) не работают внутри ячеек</li>
            <li>Списки требуют специальной обработки и могут отображаться некорректно</li>
            <li>Блоки кода с тремя апострофами не работают внутри ячеек</li>
            <li>Изображения работают, но могут нарушить внешний вид таблицы</li>
          </ul>
        </div>
      </div>

      {/* Сложные таблицы */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Table className="w-5 h-5 text-yellow-400" />
          Сложные таблицы
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Markdown поддерживает создание таблиц с объединенными ячейками и многострочным содержимым, хотя это требует особого подхода.
          </p>
        </div>

        <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-gray-900/50 p-5 rounded-xl border border-yellow-700/30">
            <h3 className="font-bold text-yellow-300 mb-3">Многострочный текст в ячейках:</h3>
            <div>
              <p className="text-gray-400 text-sm mb-2">Markdown:</p>
              <pre className="bg-gray-800 p-3 rounded text-sm text-gray-300"><code>{`| Функция | Описание |
|---------|----------|
| \`map()\` | Создает новый массив с результатами вызова функции для каждого элемента |
| \`filter()\` | Создает новый массив со всеми элементами, прошедшими проверку |`}</code></pre>
            </div>
            <div className="mt-4 pt-4 border-t border-gray-700">
              <p className="text-gray-400 text-sm mb-2">Результат:</p>
              <div className="text-gray-300 overflow-x-auto">
                <table className="min-w-full border-collapse">
                  <thead>
                    <tr className="border-b border-gray-700">
                      <th className="text-left p-2">Функция</th>
                      <th className="text-left p-2">Описание</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-800">
                    <tr>
                      <td className="p-2"><code className="bg-gray-700 px-1.5 py-0.5 rounded">map()</code></td>
                      <td className="p-2">Создает новый массив с результатами вызова функции для каждого элемента</td>
                    </tr>
                    <tr>
                      <td className="p-2"><code className="bg-gray-700 px-1.5 py-0.5 rounded">filter()</code></td>
                      <td className="p-2">Создает новый массив со всеми элементами, прошедшими проверку</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="bg-gray-900/50 p-5 rounded-xl border border-pink-700/30">
            <h3 className="font-bold text-pink-300 mb-3">Таблицы с выравниванием:</h3>
            <div>
              <p className="text-gray-400 text-sm mb-2">Markdown:</p>
              <pre className="bg-gray-800 p-3 rounded text-sm text-gray-300"><code>{`| Название | Цена | Количество |
|:---------|-----:|:----------:|
| Яблоки   |  100 |     5      |
| Бананы   |   80 |     3      |
| Апельсины|  120 |     2      |`}</code></pre>
            </div>
            <div className="mt-4 pt-4 border-t border-gray-700">
              <p className="text-gray-400 text-sm mb-2">Результат:</p>
              <div className="text-gray-300 overflow-x-auto">
                <table className="min-w-full border-collapse">
                  <thead>
                    <tr className="border-b border-gray-700">
                      <th className="text-left p-2">Название</th>
                      <th className="text-right p-2">Цена</th>
                      <th className="text-center p-2">Количество</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-800">
                    <tr>
                      <td className="p-2 text-left">Яблоки</td>
                      <td className="p-2 text-right">100</td>
                      <td className="p-2 text-center">5</td>
                    </tr>
                    <tr>
                      <td className="p-2 text-left">Бананы</td>
                      <td className="p-2 text-right">80</td>
                      <td className="p-2 text-center">3</td>
                    </tr>
                    <tr>
                      <td className="p-2 text-left">Апельсины</td>
                      <td className="p-2 text-right">120</td>
                      <td className="p-2 text-center">2</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Практические примеры */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Table className="w-5 h-5 text-green-400" />
          Практические примеры использования таблиц
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Таблицы эффективны в различных сценариях:
          </p>
        </div>

        <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-gray-900/50 p-4 rounded-xl border border-blue-700/30">
            <h3 className="font-bold text-blue-300 mb-3">Сравнение технологий</h3>
            <pre className="bg-gray-800 p-3 rounded text-sm text-gray-300"><code>{`| Технология | Сложность | Популярность | Применение |
|:-----------|:----------:|:-------------:|:-----------|
| HTML       | Низкая     | ★★★★★         | Верстка    |
| CSS        | Средняя    | ★★★★★         | Стили      |
| JavaScript | Высокая    | ★★★★★         | Логика     |
| React      | Высокая    | ★★★★☆         | Фреймворки |`}</code></pre>
          </div>
          <div className="bg-gray-900/50 p-4 rounded-xl border border-green-700/30">
            <h3 className="font-bold text-green-300 mb-3">Техническая документация</h3>
            <pre className="bg-gray-800 p-3 rounded text-sm text-gray-300"><code>{`| Метод | Путь | Описание | Параметры |
|:------|:-----|:---------|:----------|
| GET   | /api/users | Получить список пользователей | \`page\`, \`limit\` |
| POST  | /api/users | Создать нового пользователя | \`name\`, \`email\` |
| PUT   | /api/users/:id | Обновить пользователя | \`id\`, данные в теле |`}</code></pre>
          </div>
        </div>
      </div>

      {/* Заключение */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <div className="flex items-start gap-3">
          <div className="bg-green-500/20 p-2 rounded-lg flex-shrink-0">
            <Table className="w-5 h-5 text-green-400" />
          </div>
          <div>
            <h3 className="font-bold text-white mb-2">Поздравляем! 🎉</h3>
            <p className="text-gray-300">
              Теперь вы знаете, как создавать таблицы в Markdown, управлять выравниванием содержимого и использовать форматирование внутри ячеек. 
              Таблицы — мощный инструмент для структурирования информации и сравнения данных. 
              В следующем уроке мы рассмотрим дополнительные возможности Markdown и его расширения.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Part1;
