// src/data/courses/html/lesson10/part3.jsx
import React from 'react';
import { Code, FileText, Terminal, Table, Rows, Columns, Hash } from 'lucide-react';

const Part3 = () => {
  return (
    <div className="space-y-8 text-gray-200">
      {/* Вступление */}
      <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 backdrop-blur-sm border border-blue-700/30 rounded-2xl p-6 shadow-lg">
        <div className="flex items-start gap-4">
          <div className="bg-blue-500/20 p-3 rounded-lg">
            <Terminal className="w-6 h-6 text-blue-400" />
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">✏️ Практика: Таблицы в HTML</h1>
            <p className="text-gray-300">
              <span className="font-medium text-yellow-400">🎯 Цель:</span> Закрепить знания по созданию таблиц в HTML с помощью тегов <code className="bg-gray-700 px-1.5 py-0.5 rounded text-green-300">{'<table>'}</code>, <code className="bg-gray-700 px-1.5 py-0.5 rounded text-orange-300">{'<tr>'}</code>, <code className="bg-gray-700 px-1.5 py-0.5 rounded text-purple-300">{'<td>'}</code>, <code className="bg-gray-700 px-1.5 py-0.5 rounded text-cyan-300">{'<th>'}</code>, а также освоить семантические теги и атрибуты объединения.
            </p>
          </div>
        </div>
      </div>

      {/* Задание 1 */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
          <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">1</span>
          Расписание занятий
        </h3>
        <p className="text-gray-300 mb-3">
          Создайте HTML-фрагмент, представляющий собой расписание занятий на один день. Таблица должна включать:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-gray-300 mb-3">
          <li>Строку заголовков с названиями предметов (например, "Математика", "Литература", "Физкультура").</li>
          <li>Строку с временем начала каждого занятия (например, "09:00", "10:00", "11:00").</li>
          <li>Строку с кабинетами (например, "Каб. 101", "Каб. 205", "Спортзал").</li>
        </ul>
        <p className="text-gray-300">
          Используйте базовые теги таблицы (<code className="bg-gray-700 px-1 rounded">{'<table>'}</code>, <code className="bg-gray-700 px-1 rounded">{'<tr>'}</code>, <code className="bg-gray-700 px-1 rounded">{'<th>'}</code>, <code className="bg-gray-700 px-1 rounded">{'<td>'}</code>). Добавьте атрибут <code className="bg-gray-700 px-1 rounded">border="1"</code> к тегу <code className="bg-gray-700 px-1 rounded">{'<table>'}</code> для визуализации границ (временно, для проверки).
        </p>
        <details className="group mt-3">
          <summary className="cursor-pointer text-sm text-gray-400 hover:text-gray-300 flex items-center gap-1">
            <span>Подсказка</span>
            <svg className="w-4 h-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </summary>
          <div className="mt-2 p-3 bg-gray-900/50 rounded text-sm text-gray-300">
            <p>Начните с <code className="bg-gray-700 px-1 rounded">{'<table>'}</code>. Первая <code className="bg-gray-700 px-1 rounded">{'<tr>'}</code> — для заголовков предметов (<code className="bg-gray-700 px-1 rounded">{'<th>'}</code>). Вторая <code className="bg-gray-700 px-1 rounded">{'<tr>'}</code> — для времени. Третья <code className="bg-gray-700 px-1 rounded">{'<tr>'}</code> — для кабинетов (<code className="bg-gray-700 px-1 rounded">{'<td>'}</code>).</p>
          </div>
        </details>
      </div>

      {/* Задание 2 */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
          <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">2</span>
          Таблица лидеров
        </h3>
        <p className="text-gray-300 mb-3">
          Создайте HTML-фрагмент таблицы "Топ-5 игроков". Таблица должна включать:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-gray-300 mb-3">
          <li>Заголовок таблицы <code className="bg-gray-700 px-1 rounded">{'<caption>'}</code> с текстом "Рейтинг игроков".</li>
          <li>Строку заголовков (<code className="bg-gray-700 px-1 rounded">{'<th>'}</code>) с колонками "Место", "Имя", "Очки".</li>
          <li>5 строк данных (<code className="bg-gray-700 px-1 rounded">{'<td>'}</code>) с вымышленными именами и очками.</li>
        </ul>
        <p className="text-gray-300">
          Используйте семантические теги <code className="bg-gray-700 px-1 rounded">{'<thead>'}</code>, <code className="bg-gray-700 px-1 rounded">{'<tbody>'}</code>. Добавьте атрибут <code className="bg-gray-700 px-1 rounded">scope="col"</code> к заголовкам колонок (<code className="bg-gray-700 px-1 rounded">{'<th>'}</code> внутри <code className="bg-gray-700 px-1 rounded">{'<thead>'}</code>) для улучшения доступности.
        </p>
        <details className="group">
          <summary className="cursor-pointer text-sm text-gray-400 hover:text-gray-300 flex items-center gap-1">
            <span>Подсказка</span>
            <svg className="w-4 h-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </summary>
          <div className="mt-2 p-3 bg-gray-900/50 rounded text-sm text-gray-300">
            <p>Структура: <code className="bg-gray-700 px-1 rounded">{'<table>'}</code> -> <code className="bg-gray-700 px-1 rounded">{'<caption>'}</code> -> <code className="bg-gray-700 px-1 rounded">{'<thead>'}</code> (с одной <code className="bg-gray-700 px-1 rounded">{'<tr>'}</code> и тремя <code className="bg-gray-700 px-1 rounded">{'<th scope="col">...</th>'}</code>) -> <code className="bg-gray-700 px-1 rounded">{'<tbody>'}</code> (с пятью <code className="bg-gray-700 px-1 rounded">{'<tr>'}</code>, каждая с тремя <code className="bg-gray-700 px-1 rounded">{'<td>...</td>'}</code>).</p>
          </div>
        </details>
      </div>

      {/* Задание 3 */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
          <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">3</span>
          Финансовый отчет
        </h3>
        <p className="text-gray-300 mb-3">
          Создайте HTML-фрагмент таблицы "Квартальный финансовый отчет". Таблица должна включать:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-gray-300 mb-3">
          <li>Заголовок таблицы "Финансовый отчет за Q1-Q3 2024".</li>
          <li>Группу заголовков <code className="bg-gray-700 px-1 rounded">{'<thead>'}</code> с колонками "Квартал", "Доходы", "Расходы", "Прибыль".</li>
          <li>Тело таблицы <code className="bg-gray-700 px-1 rounded">{'<tbody>'}</code> с данными за три квартала (Q1, Q2, Q3).</li>
          <li>Нижний колонтитул <code className="bg-gray-700 px-1 rounded">{'<tfoot>'}</code> с итоговой строкой "Итого" и суммами по колонкам "Доходы", "Расходы", "Прибыль".</li>
        </ul>
        <p className="text-gray-300">
          Используйте все семантические теги (<code className="bg-gray-700 px-1 rounded">{'<thead>'}</code>, <code className="bg-gray-700 px-1 rounded">{'<tbody>'}</code>, <code className="bg-gray-700 px-1 rounded">{'<tfoot>'}</code>). Примените атрибуты <code className="bg-gray-700 px-1 rounded">scope="col"</code> и <code className="bg-gray-700 px-1 rounded">scope="row"</code> где это уместно.
        </p>
        <details className="group">
          <summary className="cursor-pointer text-sm text-gray-400 hover:text-gray-300 flex items-center gap-1">
            <span>Подсказка</span>
            <svg className="w-4 h-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </summary>
          <div className="mt-2 p-3 bg-gray-900/50 rounded text-sm text-gray-300">
            <p>Структура: <code className="bg-gray-700 px-1 rounded">{'<table>'}</code> -> <code className="bg-gray-700 px-1 rounded">{'<caption>'}</code> -> <code className="bg-gray-700 px-1 rounded">{'<thead>'}</code> -> <code className="bg-gray-700 px-1 rounded">{'<tbody>'}</code> -> <code className="bg-gray-700 px-1 rounded">{'<tfoot>'}</code>. В <code className="bg-gray-700 px-1 rounded">{'<thead>'}</code> и <code className="bg-gray-700 px-1 rounded">{'<tfoot>'}</code> используйте <code className="bg-gray-700 px-1 rounded">scope="col"</code>. В <code className="bg-gray-700 px-1 rounded">{'<tbody>'}</code> в первой ячейке каждой строки (<code className="bg-gray-700 px-1 rounded">{'<td>'}</code>) можно использовать <code className="bg-gray-700 px-1 rounded">scope="row"</code> (хотя чаще <code className="bg-gray-700 px-1 rounded">{'<th scope="row">...</th>'}</code>).</p>
          </div>
        </details>
      </div>

      {/* Задание 4 */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
          <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">4</span>
          Расписание спортивного турнира
        </h3>
        <p className="text-gray-300 mb-3">
          Создайте HTML-фрагмент таблицы "Расписание спортивного турнира". Таблица должна включать:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-gray-300 mb-3">
          <li>Заголовок таблицы "Групповой этап Турнира Чемпионов".</li>
          <li>Группу заголовков <code className="bg-gray-700 px-1 rounded">{'<thead>'}</code> с колонками "Дата", "Команда 1", "Счет", "Команда 2", "Статус".</li>
          <li>Тело таблицы <code className="bg-gray-700 px-1 rounded">{'<tbody>'}</code> с 4-5 строками матчей.</li>
        </ul>
        <p className="text-gray-300 mb-3">
          В некоторых ячейках "Счет" используйте объединение ячеек:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-gray-300 mb-3">
          <li>Если матч ещё не сыгран, объедините ячейки "Счет" и "Статус" в одну с помощью <code className="bg-gray-700 px-1 rounded">colspan="2"</code> и текстом "Не сыгран".</li>
          <li>Если матч сыгран, в ячейке "Счет" укажите результат (например, "2:1"), а в ячейке "Статус" — "Завершен".</li>
        </ul>
        <p className="text-gray-300">
          Используйте <code className="bg-gray-700 px-1 rounded">colspan</code> для объединения ячеек. Добавьте атрибут <code className="bg-gray-700 px-1 rounded">scope="col"</code> к заголовкам.
        </p>
        <details className="group">
          <summary className="cursor-pointer text-sm text-gray-400 hover:text-gray-300 flex items-center gap-1">
            <span>Подсказка</span>
            <svg className="w-4 h-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </summary>
          <div className="mt-2 p-3 bg-gray-900/50 rounded text-sm text-gray-300">
            <p>Пример строки с несыгранным матчем: <code className="bg-gray-700 px-1 rounded">{'<td colspan="2">Не сыгран</td>'}</code>. Обратите внимание, что если в одной строке вы объединяете 2 ячейки, то в других строках этой же колонки должно быть на одну <code className="bg-gray-700 px-1 rounded">{'<td>'}</code> меньше, чтобы общее количество ячеек в строках совпадало с количеством заголовков.</p>
          </div>
        </details>
      </div>

      {/* Задание 5 */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
          <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">5</span>
          Комплексная таблица с rowspan
        </h3>
        <p className="text-gray-300 mb-3">
          Создайте HTML-страницу "Отчет о продажах по регионам". Создайте таблицу с использованием <code className="bg-gray-700 px-1 rounded">rowspan</code> и <code className="bg-gray-700 px-1 rounded">colspan</code>:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-gray-300 mb-3">
          <li>Заголовок таблицы "Продажи по регионам и кварталам 2024".</li>
          <li>Сложный заголовок:
            <ul className="list-disc pl-5 mt-1 space-y-1">
              <li>Первая строка заголовков: пустая ячейка, "Регион", объединённая ячейка "Кварталы" (<code className="bg-gray-700 px-1 rounded">colspan="4"</code>).</li>
              <li>Вторая строка заголовков: "Q1", "Q2", "Q3", "Q4".</li>
            </ul>
          </li>
          <li>Данные:
            <ul className="list-disc pl-5 mt-1 space-y-1">
              <li>Строка для "Регион А":
                <ul className="list-disc pl-5 mt-1 space-y-1">
                  <li>Ячейка "Регион А" объединяет 2 строки по вертикали (<code className="bg-gray-700 px-1 rounded">rowspan="2"</code>).</li>
                  <li>Подрегион "Центр" с данными по 4 кварталам.</li>
                  <li>Подрегион "Юг" с данными по 4 кварталам.</li>
                </ul>
              </li>
              <li>Строка для "Регион Б" (1 строка):
                <ul className="list-disc pl-5 mt-1 space-y-1">
                  <li>Ячейка "Регион Б".</li>
                  <li>Данные по 4 кварталам.</li>
                </ul>
              </li>
            </ul>
          </li>
          <li>Итоговая строка в <code className="bg-gray-700 px-1 rounded">{'<tfoot>'}</code> с "Итого" и суммами по кварталам.</li>
        </ul>
        <p className="text-gray-300">
          Используйте <code className="bg-gray-700 px-1 rounded">{'<thead>'}</code>, <code className="bg-gray-700 px-1 rounded">{'<tbody>'}</code>, <code className="bg-gray-700 px-1 rounded">{'<tfoot>'}</code>, <code className="bg-gray-700 px-1 rounded">{'<caption>'}</code>, <code className="bg-gray-700 px-1 rounded">colspan</code> и <code className="bg-gray-700 px-1 rounded">rowspan</code>. Добавьте атрибуты <code className="bg-gray-700 px-1 rounded">scope</code> для улучшения семантики.
        </p>
        <details className="group">
          <summary className="cursor-pointer text-sm text-gray-400 hover:text-gray-300 flex items-center gap-1">
            <span>Подсказка</span>
            <svg className="w-4 h-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </summary>
          <div className="mt-2 p-3 bg-gray-900/50 rounded text-sm text-gray-300">
            <p>Схема строк в <code className="bg-gray-700 px-1 rounded">{'<tbody>'}</code>:</p>
            <ol className="list-decimal pl-5 space-y-1 mt-1">
              <li><code className="bg-gray-700 px-1 rounded">{'<tr>'}</code> с <code className="bg-gray-700 px-1 rounded">{'<td rowspan="2">Регион А</td>'}</code>, <code className="bg-gray-700 px-1 rounded">{'<td>Центр</td>'}</code> и 4 ячейки данных.</li>
              <li><code className="bg-gray-700 px-1 rounded">{'<tr>'}</code> (без ячейки для "Регион А", так как она занята <code className="bg-gray-700 px-1 rounded">rowspan</code>!) с <code className="bg-gray-700 px-1 rounded">{'<td>Юг</td>'}</code> и 4 ячейки данных.</li>
              <li><code className="bg-gray-700 px-1 rounded">{'<tr>'}</code> с <code className="bg-gray-700 px-1 rounded">{'<td>Регион Б</td>'}</code> и 5 ячеек данных (включая пустую ячейку или заголовок подрегиона, если нужно).</li>
            </ol>
          </div>
        </details>
      </div>

      {/* Заключение */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <div className="flex items-start gap-3">
          <div className="bg-green-500/20 p-2 rounded-lg flex-shrink-0">
            <Code className="w-5 h-5 text-green-400" />
          </div>
          <div>
            <h3 className="font-bold text-white mb-2">Отличная работа! 🎉</h3>
            <p className="text-gray-300">
              Эти задания помогли вам закрепить навыки создания таблиц в HTML. Вы попрактиковались в использовании основных тегов (<code className="bg-gray-700 px-1 rounded">{'<table>'}</code>, <code className="bg-gray-700 px-1 rounded">{'<tr>'}</code>, <code className="bg-gray-700 px-1 rounded">{'<td>'}</code>, <code className="bg-gray-700 px-1 rounded">{'<th>'}</code>), освоили семантические теги (<code className="bg-gray-700 px-1 rounded">{'<thead>'}</code>, <code className="bg-gray-700 px-1 rounded">{'<tbody>'}</code>, <code className="bg-gray-700 px-1 rounded">{'<tfoot>'}</code>, <code className="bg-gray-700 px-1 rounded">{'<caption>'}</code>) и научились объединять ячейки с помощью атрибутов <code className="bg-gray-700 px-1 rounded">colspan</code> и <code className="bg-gray-700 px-1 rounded">rowspan</code>. Таблицы — важный инструмент для структурирования данных на ваших веб-страницах.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Part3;