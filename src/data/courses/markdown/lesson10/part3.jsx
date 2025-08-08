// src/data/courses/markdown/lesson10/part3.jsx
import React from 'react';
import { Table, AlignLeft, AlignCenter, AlignRight, Edit3 } from 'lucide-react';

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
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">✏️ Практика: Таблицы в Markdown</h1>
            <p className="text-gray-300">
              <span className="font-medium text-yellow-400">🎯 Цель:</span> Закрепить знания по созданию и форматированию таблиц в Markdown, освоить выравнивание содержимого и использование форматирования внутри ячеек.
            </p>
          </div>
        </div>
      </div>

      {/* Задание 1 */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
          <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">1</span>
          Таблица сравнения языков программирования
        </h3>
        <p className="text-gray-300 mb-3">
          Создайте Markdown-документ <code className="bg-gray-700 px-2 py-1 rounded">programming-languages.md</code> с таблицей сравнения популярных языков программирования. Таблица должна включать:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-gray-300 mb-3">
          <li>Заголовки: "Язык", "Год создания", "Сложность", "Популярность", "Область применения"</li>
          <li>Данные по 5-7 языкам (например, Python, JavaScript, Java, C++, Go, Rust)</li>
          <li>Выравнивание: "Язык" по левому краю, "Год создания" и "Сложность" по центру, "Популярность" по правому краю</li>
          <li>Используйте звездочки (★) для визуализации популярности (например, ★★★★☆)</li>
        </ul>
        <details className="group">
          <summary className="cursor-pointer text-sm text-gray-400 hover:text-gray-300 flex items-center gap-1">
            <span>Подсказка</span>
            <svg className="w-4 h-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </summary>
          <div className="mt-2 p-3 bg-gray-900/50 rounded text-sm text-gray-300">
            <p>Используйте синтаксис <code className="bg-gray-700 px-1 py-0.5 rounded">:---:</code> для центрирования, <code className="bg-gray-700 px-1 py-0.5 rounded">---:</code> для выравнивания по правому краю.</p>
          </div>
        </details>
      </div>

      {/* Задание 2 */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
          <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">2</span>
          Техническая документация API
        </h3>
        <p className="text-gray-300 mb-3">
          Создайте файл <code className="bg-gray-700 px-2 py-1 rounded">api-documentation.md</code> - документацию для вымышленного API. Включите:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-gray-300 mb-3">
          <li>Заголовок 1 уровня "Документация API"</li>
          <li>Раздел "Эндпоинты" с таблицей методов API</li>
          <li>Таблица должна содержать столбцы: "Метод", "Путь", "Описание", "Параметры", "Пример ответа"</li>
          <li>Используйте инлайновый код для выделения методов, путей и параметров</li>
          <li>Выравнивайте "Метод" и "Путь" по центру, остальные столбцы по левому краю</li>
          <li>Добавьте примеры JSON в столбце "Пример ответа"</li>
        </ul>
        <details className="group">
          <summary className="cursor-pointer text-sm text-gray-400 hover:text-gray-300 flex items-center gap-1">
            <span>Подсказка</span>
            <svg className="w-4 h-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </summary>
          <div className="mt-2 p-3 bg-gray-900/50 rounded text-sm text-gray-300">
            <p>Для JSON в ячейках используйте одинарные обратные апострофы. Для многострочного текста в ячейке используйте обычные переносы строк.</p>
          </div>
        </details>
      </div>

      {/* Задание 3 */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
          <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">3</span>
          Анализ и исправление таблиц
        </h3>
        <p className="text-gray-300 mb-3">
          Ниже приведен Markdown-документ с ошибками в таблицах. Найдите и исправьте все ошибки:
        </p>
        <div className="bg-gray-900 p-4 rounded-lg my-3">
          <pre className="text-red-300 text-sm">
            <code>{`# Отчет о продажах

| Месяц | Продажи | Прибыль
|-------|--------:|--------:
| Январь | 100000 | 20000
| Февраль | 120000 | 25000
| Март | 110000 | 22000

## Сравнение продуктов

| Продукт | Цена | Рейтинг |
|--------|-----:|:-------:|
| A      | 100  | 4.5     |
| B      | 150  | 4.2     |
| C      | 80   | 4.8     |`}</code>
          </pre>
        </div>
        <p className="text-gray-300 mb-3">
          Создайте исправленную версию документа в новом файле <code className="bg-gray-700 px-2 py-1 rounded">corrected-tables.md</code> и объясните найденные ошибки.
        </p>
        <details className="group">
          <summary className="cursor-pointer text-sm text-gray-400 hover:text-gray-300 flex items-center gap-1">
            <span>Подсказка</span>
            <svg className="w-4 h-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </summary>
          <div className="mt-2 p-3 bg-gray-900/50 rounded text-sm text-gray-300">
            <p>Обратите внимание на: завершающие вертикальные черты, обязательную строку с дефисами, правильное количество столбцов в каждой строке.</p>
          </div>
        </details>
      </div>

      {/* Задание 4 */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
          <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">4</span>
          Создание расписания занятий
        </h3>
        <p className="text-gray-300 mb-3">
          Создайте документ <code className="bg-gray-700 px-2 py-1 rounded">schedule.md</code> - расписание занятий на неделю. Требования:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-gray-300 mb-3">
          <li>Заголовок 1 уровня "Расписание занятий"</li>
          <li>Таблица с днями недели в заголовках столбцов</li>
          <li>Временные слоты в заголовках строк</li>
          <li>Содержание ячеек - название предмета и преподаватель</li>
          <li>Используйте выравнивание по центру для заголовков дней недели</li>
          <li>Выделите жирным текстом названия предметов</li>
          <li>Добавьте горизонтальную линию между таблицей и заголовком</li>
        </ul>
        <details className="group">
          <summary className="cursor-pointer text-sm text-gray-400 hover:text-gray-300 flex items-center gap-1">
            <span>Подсказка</span>
            <svg className="w-4 h-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </summary>
          <div className="mt-2 p-3 bg-gray-900/50 rounded text-sm text-gray-300">
            <p>Создайте таблицу 6x8 (время + 7 дней недели). Используйте **жирный** текст внутри ячеек для названий предметов.</p>
          </div>
        </details>
      </div>

      {/* Задание 5 */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
          <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">5</span>
          Эксперимент с форматированием таблиц
        </h3>
        <p className="text-gray-300 mb-3">
          Создайте документ <code className="bg-gray-700 px-2 py-1 rounded">table-experiment.md</code>, демонстрирующий различные возможности форматирования таблиц:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-gray-300 mb-3">
          <li>Таблица с различными вариантами выравнивания (влево, вправо, по центру)</li>
          <li>Таблица с использованием форматирования внутри ячеек (жирный, курсив, код, ссылки)</li>
          <li>Таблица с многострочным содержимым в ячейках</li>
          <li>Таблица с числовыми данными, выровненными по правому краю для лучшей читаемости</li>
          <li>Таблица с объединенными логически данными (например, категории товаров)</li>
        </ul>
        <p className="text-gray-300">
          Добавьте пояснения к каждой таблице, объясняя, почему вы выбрали тот или иной способ форматирования.
        </p>
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
              Эти задания помогли вам закрепить навыки создания и форматирования таблиц в Markdown. 
              Вы научились управлять выравниванием содержимого, использовать форматирование внутри ячеек и создавать сложные структуры таблиц. 
              Эти навыки важны для создания профессиональных документов, технической документации и отчетов.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Part3;
