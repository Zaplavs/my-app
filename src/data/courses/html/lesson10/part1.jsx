// src/data/courses/html/lesson10/part1.jsx
import React from 'react';
import { Table, Rows, Columns, Hash, Pilcrow, BookOpen } from 'lucide-react';

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
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">📊 Урок 10: Таблицы в HTML</h1>
            <h2 className="text-xl font-semibold text-blue-300 mb-3">Создание структурированных таблиц данных</h2>
            <p className="text-gray-300">
              <span className="font-medium text-yellow-400">🎯 Цель урока:</span> Освоить создание таблиц в HTML с помощью тегов <code className="bg-gray-700 px-1.5 py-0.5 rounded text-green-300">{'<table>'}</code>, <code className="bg-gray-700 px-1.5 py-0.5 rounded text-orange-300">{'<tr>'}</code>, <code className="bg-gray-700 px-1.5 py-0.5 rounded text-purple-300">{'<td>'}</code>, <code className="bg-gray-700 px-1.5 py-0.5 rounded text-cyan-300">{'<th>'}</code>, а также научиться использовать семантические теги <code className="bg-gray-700 px-1 rounded">{'<thead>'}</code>, <code className="bg-gray-700 px-1 rounded">{'<tbody>'}</code>, <code className="bg-gray-700 px-1 rounded">{'<tfoot>'}</code>, атрибуты <code className="bg-gray-700 px-1 rounded">colspan</code> и <code className="bg-gray-700 px-1 rounded">rowspan</code>, и тег <code className="bg-gray-700 px-1 rounded">{'<caption>'}</code>.
            </p>
          </div>
        </div>
      </div>

      {/* Роль таблиц в вебе */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <BookOpen className="w-5 h-5 text-green-400" />
          Роль таблиц в вебе
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Таблицы — это мощный инструмент для <span className="font-medium text-green-300">организации и представления</span> табличных данных на веб-страницах. Они идеально подходят для отображения:
          </p>
          <ul className="list-disc pl-5 space-y-2 mt-2">
            <li>Финансовой информации (прайс-листы, бюджеты, отчеты)</li>
            <li>Расписаний (расписание занятий, рейсов)</li>
            <li>Сравнительных характеристик (таблицы сравнения товаров)</li>
            <li>Статистики и данных (научные данные, результаты опросов)</li>
            <li>Календарей</li>
          </ul>
          <p className="mt-3">
            HTML предоставляет специальные теги для создания семантически правильных и доступных таблиц.
          </p>
        </div>
      </div>

      {/* Основные теги таблиц */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Table className="w-5 h-5 text-purple-400" />
          Основные теги для создания таблиц
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Создание таблицы — это процесс <span className="font-medium">"сборки"</span> из нескольких специализированных тегов.
          </p>
        </div>

        <div className="mt-6 space-y-6">
          {/* <table> */}
          <div className="bg-gray-900/50 p-5 rounded-xl border border-purple-700/30">
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-purple-500/20 p-2 rounded-lg">
                <Table className="w-5 h-5 text-purple-400" />
              </div>
              <h3 className="font-bold text-purple-300">{'<table>'} — Контейнер таблицы</h3>
            </div>
            <p className="text-gray-300 text-sm mb-3">
              Это <span className="font-medium">корневой</span> тег для всей таблицы. Все остальные теги таблицы должны находиться внутри него.
            </p>
            <div className="bg-gray-800 p-3 rounded-lg">
              <pre className="text-purple-300 text-xs"><code>{`<table>
  ...
</table>`}</code></pre>
            </div>
          </div>

          {/* <tr> */}
          <div className="bg-gray-900/50 p-5 rounded-xl border border-orange-700/30">
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-orange-500/20 p-2 rounded-lg">
                <Rows className="w-5 h-5 text-orange-400" />
              </div>
              <h3 className="font-bold text-orange-300">{'<tr>'} — Table Row (Строка таблицы)</h3>
            </div>
            <p className="text-gray-300 text-sm mb-3">
              Определяет <span className="font-medium">одну строку</span> в таблице. Все ячейки (<code className="bg-gray-700 px-1 rounded">{'<td>'}</code> или <code className="bg-gray-700 px-1 rounded">{'<th>'}</code>) должны находиться внутри тега <code className="bg-gray-700 px-1 rounded">{'<tr>'}</code>.
            </p>
            <div className="bg-gray-800 p-3 rounded-lg">
              <pre className="text-orange-300 text-xs"><code>{`<table>
  <tr>
    <!-- Ячейки строки -->
  </tr>
</table>`}</code></pre>
            </div>
          </div>

          {/* <td> */}
          <div className="bg-gray-900/50 p-5 rounded-xl border border-green-700/30">
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-green-500/20 p-2 rounded-lg">
                <Columns className="w-5 h-5 text-green-400" />
              </div>
              <h3 className="font-bold text-green-300">{'<td>'} — Table Data (Ячейка данных)</h3>
            </div>
            <p className="text-gray-300 text-sm mb-3">
              Определяет <span className="font-medium">обычную ячейку данных</span> в таблице. Это <span className="font-medium">парный</span> тег, внутри которого размещается содержимое ячейки (текст, изображения, другие теги).
            </p>
            <div className="bg-gray-800 p-3 rounded-lg">
              <pre className="text-green-300 text-xs"><code>{`<tr>
  <td>Ячейка 1, Строка 1</td>
  <td>Ячейка 2, Строка 1</td>
</tr>`}</code></pre>
            </div>
          </div>

          {/* <th> */}
          <div className="bg-gray-900/50 p-5 rounded-xl border border-cyan-700/30">
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-cyan-500/20 p-2 rounded-lg">
                <Hash className="w-5 h-5 text-cyan-400" />
              </div>
              <h3 className="font-bold text-cyan-300">{'<th>'} — Table Header (Ячейка заголовка)</h3>
            </div>
            <p className="text-gray-300 text-sm mb-3">
              Определяет <span className="font-medium">ячейку заголовка</span> таблицы. Обычно используется для названий столбцов или строк. По умолчанию браузер делает текст в <code className="bg-gray-700 px-1 rounded">{'<th>'}</code> <span className="font-medium">жирным</span> и <span className="font-medium">центрирует</span> его. Также имеет важное <span className="font-medium">семантическое значение</span> для доступности.
            </p>
            <div className="bg-gray-800 p-3 rounded-lg">
              <pre className="text-cyan-300 text-xs"><code>{`<tr>
  <th>Имя</th>
  <th>Возраст</th>
</tr>`}</code></pre>
            </div>
          </div>
        </div>

        {/* Пример простой таблицы */}
        <div className="mt-8 p-5 bg-gray-900/50 rounded-xl border border-yellow-700/30">
          <h3 className="font-bold text-yellow-300 mb-3 flex items-center gap-2">
            <Table className="w-4 h-4" />
            Пример простой таблицы:
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-800 p-4 rounded-lg">
              <p className="text-xs text-gray-400 mb-2">HTML-код:</p>
              <pre className="text-yellow-300 text-xs overflow-x-auto">
                <code>{`<table border="1">
  <tr>
    <th>Имя</th>
    <th>Возраст</th>
  </tr>
  <tr>
    <td>Анна</td>
    <td>25</td>
  </tr>
  <tr>
    <td>Иван</td>
    <td>30</td>
  </tr>
</table>`}</code>
              </pre>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg">
              <p className="text-xs text-gray-400 mb-2">Как отображается в браузере:</p>
              <div className="overflow-x-auto">
                <table className="min-w-full border-collapse border border-gray-600 text-sm">
                  <thead>
                    <tr>
                      <th className="border border-gray-600 px-2 py-1 bg-gray-700">Имя</th>
                      <th className="border border-gray-600 px-2 py-1 bg-gray-700">Возраст</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-600 px-2 py-1">Анна</td>
                      <td className="border border-gray-600 px-2 py-1">25</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-600 px-2 py-1">Иван</td>
                      <td className="border border-gray-600 px-2 py-1">30</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Семантические теги таблицы */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <BookOpen className="w-5 h-5 text-blue-400" />
          Семантические теги таблицы: {'<thead>'}, {'<tbody>'}, {'<tfoot>'}
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Для <span className="font-medium">логической структуризации</span> таблицы и улучшения её <span className="font-medium">доступности</span> и <span className="font-medium">стилизации</span> используются дополнительные теги:
          </p>
        </div>

        <div className="mt-6 space-y-6">
          {/* <thead> */}
          <div className="bg-gray-900/50 p-5 rounded-xl border border-blue-700/30">
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-blue-500/20 p-2 rounded-lg">
                <Hash className="w-5 h-5 text-blue-400" />
              </div>
              <h3 className="font-bold text-blue-300">{'<thead>'} — Группа заголовков таблицы</h3>
            </div>
            <p className="text-gray-300 text-sm mb-3">
              Содержит <span className="font-medium">одну или несколько строк</span> заголовков таблицы (<code className="bg-gray-700 px-1 rounded">{'<tr>'}</code> с <code className="bg-gray-700 px-1 rounded">{'<th>'}</code>). Обычно это первая строка(и) таблицы.
            </p>
          </div>

          {/* <tbody> */}
          <div className="bg-gray-900/50 p-5 rounded-xl border border-green-700/30">
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-green-500/20 p-2 rounded-lg">
                <Rows className="w-5 h-5 text-green-400" />
              </div>
              <h3 className="font-bold text-green-300">{'<tbody>'} — Тело таблицы</h3>
            </div>
            <p className="text-gray-300 text-sm mb-3">
              Содержит <span className="font-medium">основные строки данных</span> таблицы. Это <span className="font-medium">основная</span> часть таблицы.
            </p>
          </div>

          {/* <tfoot> */}
          <div className="bg-gray-900/50 p-5 rounded-xl border border-red-700/30">
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-red-500/20 p-2 rounded-lg">
                <Pilcrow className="w-5 h-5 text-red-400" />
              </div>
              <h3 className="font-bold text-red-300">{'<tfoot>'} — Нижний колонтитул таблицы</h3>
            </div>
            <p className="text-gray-300 text-sm mb-3">
              Содержит <span className="font-medium">итоговую строку</span> или другую сводную информацию, относящуюся ко всей таблице. Обычно размещается в <span className="font-medium">конце</span> таблицы, но браузер может отображать её <span className="font-medium">внизу</span>, даже если код находится выше <code className="bg-gray-700 px-1 rounded">{'<tbody>'}</code>.
            </p>
          </div>
        </div>

        {/* Пример структурированной таблицы */}
        <div className="mt-8 p-5 bg-gray-900/50 rounded-xl border border-cyan-700/30">
          <h3 className="font-bold text-cyan-300 mb-3 flex items-center gap-2">
            <Table className="w-4 h-4" />
            Пример структурированной таблицы:
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-800 p-4 rounded-lg">
              <p className="text-xs text-gray-400 mb-2">HTML-код:</p>
              <pre className="text-cyan-300 text-xs overflow-x-auto">
                <code>{`<table border="1">
  <thead>
    <tr>
      <th>Продукт</th>
      <th>Цена</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Яблоки</td>
      <td>50 руб.</td>
    </tr>
    <tr>
      <td>Бананы</td>
      <td>30 руб.</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <td><strong>Итого:</strong></td>
      <td><strong>80 руб.</strong></td>
    </tr>
  </tfoot>
</table>`}</code>
              </pre>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg">
              <p className="text-xs text-gray-400 mb-2">Как отображается в браузере:</p>
              <div className="overflow-x-auto">
                <table className="min-w-full border-collapse border border-gray-600 text-sm">
                  <thead>
                    <tr>
                      <th className="border border-gray-600 px-2 py-1 bg-gray-700">Продукт</th>
                      <th className="border border-gray-600 px-2 py-1 bg-gray-700">Цена</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-600 px-2 py-1">Яблоки</td>
                      <td className="border border-gray-600 px-2 py-1">50 руб.</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-600 px-2 py-1">Бананы</td>
                      <td className="border border-gray-600 px-2 py-1">30 руб.</td>
                    </tr>
                  </tbody>
                  <tfoot>
                    <tr>
                      <td className="border border-gray-600 px-2 py-1 font-bold">Итого:</td>
                      <td className="border border-gray-600 px-2 py-1 font-bold">80 руб.</td>
                    </tr>
                  </tfoot>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-4 p-3 bg-blue-900/20 border border-blue-700/30 rounded-lg">
          <p className="text-blue-300 text-sm flex items-start gap-2">
            <span className="font-medium">💡 Преимущества:</span>
            <span>
              Использование <code className="bg-gray-700 px-1 rounded">{'<thead>'}</code>, <code className="bg-gray-700 px-1 rounded">{'<tbody>'}</code> и <code className="bg-gray-700 px-1 rounded">{'<tfoot>'}</code> облегчает стилизацию таблицы с помощью CSS (например, можно стилизовать только <code className="bg-gray-700 px-1 rounded">{'<thead>'}</code>), улучшает доступность для скринридеров и позволяет браузеру лучше понимать структуру таблицы.
            </span>
          </p>
        </div>
      </div>

      {/* Объединение ячеек */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Columns className="w-5 h-5 text-orange-400" />
          Объединение ячеек: colspan и rowspan
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Иногда необходимо, чтобы одна ячейка занимала <span className="font-medium">несколько</span> столбцов или строк. Для этого используются атрибуты <code className="bg-gray-700 px-1.5 py-0.5 rounded text-orange-300">colspan</code> и <code className="bg-gray-700 px-1.5 py-0.5 rounded text-red-300">rowspan</code>.
          </p>
        </div>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* colspan */}
          <div className="bg-gray-900/50 p-5 rounded-xl border border-orange-700/30">
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-orange-500/20 p-2 rounded-lg">
                <Columns className="w-5 h-5 text-orange-400" />
              </div>
              <h3 className="font-bold text-orange-300">colspan</h3>
            </div>
            <p className="text-gray-300 text-sm mb-3">
              Атрибут <code className="bg-gray-700 px-1.5 py-0.5 rounded text-orange-300">colspan="N"</code> указывает, что ячейка должна <span className="font-medium">охватывать N столбцов</span> по горизонтали.
            </p>
            <div className="bg-gray-800 p-3 rounded-lg">
              <pre className="text-orange-300 text-xs"><code>{`<td colspan="2">Эта ячейка занимает 2 столбца</td>`}</code></pre>
            </div>
          </div>

          {/* rowspan */}
          <div className="bg-gray-900/50 p-5 rounded-xl border border-red-700/30">
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-red-500/20 p-2 rounded-lg">
                <Rows className="w-5 h-5 text-red-400" />
              </div>
              <h3 className="font-bold text-red-300">rowspan</h3>
            </div>
            <p className="text-gray-300 text-sm mb-3">
              Атрибут <code className="bg-gray-700 px-1.5 py-0.5 rounded text-red-300">rowspan="N"</code> указывает, что ячейка должна <span className="font-medium">охватывать N строк</span> по вертикали.
            </p>
            <div className="bg-gray-800 p-3 rounded-lg">
              <pre className="text-red-300 text-xs"><code>{`<td rowspan="3">Эта ячейка занимает 3 строки</td>`}</code></pre>
            </div>
          </div>
        </div>

        {/* Пример с объединением */}
        <div className="mt-8 p-5 bg-gray-900/50 rounded-xl border border-yellow-700/30">
          <h3 className="font-bold text-yellow-300 mb-3 flex items-center gap-2">
            <Table className="w-4 h-4" />
            Пример таблицы с объединенными ячейками:
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-800 p-4 rounded-lg">
              <p className="text-xs text-gray-400 mb-2">HTML-код:</p>
              <pre className="text-yellow-300 text-xs overflow-x-auto">
                <code>{`<table border="1">
  <tr>
    <th>Категория</th>
    <th>Продукт</th>
    <th>Цена</th>
  </tr>
  <tr>
    <td rowspan="2">Фрукты</td>
    <td>Яблоки</td>
    <td>50 руб.</td>
  </tr>
  <tr>
    <td>Бананы</td>
    <td>30 руб.</td>
  </tr>
  <tr>
    <td colspan="2">Итого:</td>
    <td><strong>80 руб.</strong></td>
  </tr>
</table>`}</code>
              </pre>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg">
              <p className="text-xs text-gray-400 mb-2">Как отображается в браузере:</p>
              <div className="overflow-x-auto">
                <table className="min-w-full border-collapse border border-gray-600 text-sm">
                  <thead>
                    <tr>
                      <th className="border border-gray-600 px-2 py-1 bg-gray-700">Категория</th>
                      <th className="border border-gray-600 px-2 py-1 bg-gray-700">Продукт</th>
                      <th className="border border-gray-600 px-2 py-1 bg-gray-700">Цена</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td rowSpan="2" className="border border-gray-600 px-2 py-1 align-top">Фрукты</td>
                      <td className="border border-gray-600 px-2 py-1">Яблоки</td>
                      <td className="border border-gray-600 px-2 py-1">50 руб.</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-600 px-2 py-1">Бананы</td>
                      <td className="border border-gray-600 px-2 py-1">30 руб.</td>
                    </tr>
                    <tr>
                      <td colSpan="2" className="border border-gray-600 px-2 py-1 font-bold">Итого:</td>
                      <td className="border border-gray-600 px-2 py-1 font-bold">80 руб.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-4 p-3 bg-red-900/20 border border-red-700/30 rounded-lg">
          <p className="text-red-300 text-sm flex items-start gap-2">
            <span className="font-medium">⚠️ Важно:</span>
            <span>
              При использовании <code className="bg-gray-700 px-1 rounded">colspan</code> или <code className="bg-gray-700 px-1 rounded">rowspan</code> необходимо <span className="font-medium">убирать</span> "пропущенные" ячейки (<code className="bg-gray-700 px-1 rounded">{'<td>'}</code> или <code className="bg-gray-700 px-1 rounded">{'<th>'}</code>) из последующих строк или столбцов, чтобы структура таблицы оставалась корректной. В примере выше, во второй строке <code className="bg-gray-700 px-1 rounded">{'<tr>'}</code> только две ячейки, так как первая ячейка первой строки охватывает две строки (<code className="bg-gray-700 px-1 rounded">rowspan="2"</code>).
            </span>
          </p>
        </div>
      </div>

      {/* Тег <caption> */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <BookOpen className="w-5 h-5 text-cyan-400" />
          Заголовок таблицы: {'<caption>'}
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Тег <code className="bg-gray-700 px-1.5 py-0.5 rounded text-cyan-300">{'<caption>'}</code> используется для добавления <span className="font-medium">заголовка</span> или <span className="font-medium">описания</span> к таблице.
          </p>
          <p>
            Он должен быть <span className="font-medium">первым</span> дочерним элементом внутри тега <code className="bg-gray-700 px-1 rounded">{'<table>'}</code>.
          </p>
        </div>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-900/50 p-4 rounded-lg">
            <p className="text-sm text-gray-400 mb-2">HTML-код:</p>
            <pre className="text-cyan-300 text-sm overflow-x-auto">
              <code>{`<table border="1">
  <caption>Распродажа фруктов этой недели</caption>
  <tr>
    <th>Фрукт</th>
    <th>Цена</th>
  </tr>
  <tr>
    <td>Яблоки</td>
    <td>50 руб./кг</td>
  </tr>
</table>`}</code>
            </pre>
          </div>
          <div className="bg-gray-900/50 p-4 rounded-lg">
            <p className="text-sm text-gray-400 mb-2">Как отображается в браузере:</p>
            <div className="overflow-x-auto">
              <table className="min-w-full border-collapse border border-gray-600 text-sm">
                <caption className="caption-top text-base font-bold mb-2 text-cyan-300">Распродажа фруктов этой недели</caption>
                <thead>
                  <tr>
                    <th className="border border-gray-600 px-2 py-1 bg-gray-700">Фрукт</th>
                    <th className="border border-gray-600 px-2 py-1 bg-gray-700">Цена</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-600 px-2 py-1">Яблоки</td>
                    <td className="border border-gray-600 px-2 py-1">50 руб./кг</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="mt-4 p-3 bg-blue-900/20 border border-blue-700/30 rounded-lg">
          <p className="text-blue-300 text-sm flex items-start gap-2">
            <span className="font-medium">💡 Семантика:</span>
            <span>
              <code className="bg-gray-700 px-1 rounded">{'<caption>'}</code> предоставляет контекст таблицы, что особенно важно для <span className="font-medium">доступности</span> (скринридеры читают его первым делом) и <span className="font-medium">SEO</span>.
            </span>
          </p>
        </div>
      </div>

      {/* Заключение */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <div className="flex items-start gap-3">
          <div className="bg-green-500/20 p-2 rounded-lg flex-shrink-0">
            <Table className="w-5 h-5 text-green-400" />
          </div>
          <div>
            <h3 className="font-bold text-white mb-2">Отличная работа! 🎉</h3>
            <p className="text-gray-300">
              Теперь вы знаете, как создавать таблицы в HTML. Вы разобрались с основными тегами (<code className="bg-gray-700 px-1 rounded">{'<table>'}</code>, <code className="bg-gray-700 px-1 rounded">{'<tr>'}</code>, <code className="bg-gray-700 px-1 rounded">{'<td>'}</code>, <code className="bg-gray-700 px-1 rounded">{'<th>'}</code>), научились использовать семантические теги (<code className="bg-gray-700 px-1 rounded">{'<thead>'}</code>, <code className="bg-gray-700 px-1 rounded">{'<tbody>'}</code>, <code className="bg-gray-700 px-1 rounded">{'<tfoot>'}</code>) и тег <code className="bg-gray-700 px-1 rounded">{'<caption>'}</code> для заголовка. Вы также освоили объединение ячеек с помощью атрибутов <code className="bg-gray-700 px-1 rounded">colspan</code> и <code className="bg-gray-700 px-1 rounded">rowspan</code>. Это мощный инструмент для представления структурированных данных.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Part1;