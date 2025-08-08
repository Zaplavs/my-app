// src/data/courses/markdown/lesson17/part3.jsx
import React from 'react';
import { Download, FileText, Code, Printer, Settings, Edit3 } from 'lucide-react';

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
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">✏️ Практика: Экспорт Markdown в PDF, HTML, DOCX</h1>
            <p className="text-gray-300">
              <span className="font-medium text-yellow-400">🎯 Цель:</span> Закрепить навыки экспорта Markdown-документов в различные форматы с использованием различных инструментов и настройки стилей.
            </p>
          </div>
        </div>
      </div>

      {/* Задание 1 */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
          <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">1</span>
          Создание отчета в PDF с настройкой стилей
        </h3>
        <p className="text-gray-300 mb-3">
          Создайте Markdown-документ <code className="bg-gray-700 px-2 py-1 rounded">report.md</code> - отчет о выполнении проекта. Структура:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-gray-300 mb-3">
          <li>Заголовок 1 уровня "Ежеквартальный отчет по проекту Alpha"</li>
          <li>Заголовок 2 уровня "Общая информация"</li>
          <li>Абзац с общей информацией о проекте</li>
          <li>Заголовок 2 уровня "Результаты"</li>
          <li>Список ключевых результатов</li>
          <li>Заголовок 2 уровня "Проблемы и риски"</li>
          <li>Список выявленных проблем</li>
          <li>Заголовок 2 уровня "Планы на следующий квартал"</li>
          <li>Список запланированных мероприятий</li>
        </ul>
        <p className="text-gray-300 mb-3">
          Создайте CSS-файл <code className="bg-gray-700 px-2 py-1 rounded">report-styles.css</code> с настройками:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-gray-300 mb-3">
          <li>Шрифт Times New Roman, размер 12pt</li>
          <li>Поля: верхнее/нижнее 2 см, левое 3 см, правое 2 см</li>
          <li>Заголовки 1 уровня - синий цвет, подчеркнуты</li>
          <li>Заголовки 2 уровня - черный цвет, отступ сверху 1.5em</li>
          <li>Абзацы с выравниванием по ширине</li>
        </ul>
        <p className="text-gray-300 mb-3">
          Экспортируйте документ в PDF с использованием Pandoc и созданного CSS-файла.
        </p>
        <details className="group">
          <summary className="cursor-pointer text-sm text-gray-400 hover:text-gray-300 flex items-center gap-1">
            <span>Подсказка</span>
            <svg className="w-4 h-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </summary>
          <div className="mt-2 p-3 bg-gray-900/50 rounded text-sm text-gray-300">
            <p>Команда Pandoc: <code className="bg-gray-700 px-1 py-0.5 rounded">pandoc report.md --css=report-styles.css -o report.pdf</code></p>
          </div>
        </details>
      </div>

      {/* Задание 2 */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
          <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">2</span>
          Документация в HTML с интерактивными элементами
        </h3>
        <p className="text-gray-300 mb-3">
          Создайте файл <code className="bg-gray-700 px-2 py-1 rounded">api-docs.md</code> - документацию API с использованием Markdown. Включите:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-gray-300 mb-3">
          <li>Заголовок 1 уровня "Документация API сервиса Beta"</li>
          <li>Заголовок 2 уровня "Аутентификация"</li>
          <li>Описание процесса аутентификации</li>
          <li>Заголовок 2 уровня "Эндпоинты"</li>
          <li>Заголовок 3 уровня "Получение списка пользователей"</li>
          <li>Описание метода GET /api/users</li>
          <li>Пример запроса в коде</li>
          <li>Пример ответа в коде</li>
          <li>Заголовок 3 уровня "Создание пользователя"</li>
          <li>Описание метода POST /api/users</li>
          <li>Пример запроса и ответа</li>
        </ul>
        <p className="text-gray-300 mb-3">
          Создайте CSS-файл <code className="bg-gray-700 px-2 py-1 rounded">docs-styles.css</code> с настройками:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-gray-300 mb-3">
          <li>Шрифт Arial, размер 14px</li>
          <li>Цвет фона #f5f5f5</li>
          <li>Блоки кода с темным фоном и моноширинным шрифтом</li>
          <li>Ссылки синего цвета, подчеркнуты при наведении</li>
          <li>Таблицы с границами и чередующимся фоном строк</li>
        </ul>
        <p className="text-gray-300 mb-3">
          Экспортируйте документ в HTML с использованием Pandoc и созданного CSS-файла. Откройте полученный HTML-файл в браузере и проверьте отображение.
        </p>
        <details className="group">
          <summary className="cursor-pointer text-sm text-gray-400 hover:text-gray-300 flex items-center gap-1">
            <span>Подсказка</span>
            <svg className="w-4 h-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </summary>
          <div className="mt-2 p-3 bg-gray-900/50 rounded text-sm text-gray-300">
            <p>Команда Pandoc: <code className="bg-gray-700 px-1 py-0.5 rounded">pandoc api-docs.md --css=docs-styles.css -s -o api-docs.html</code></p>
          </div>
        </details>
      </div>

      {/* Задание 3 */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
          <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">3</span>
          Создание документа для MS Word
        </h3>
        <p className="text-gray-300 mb-3">
          Создайте Markdown-документ <code className="bg-gray-700 px-2 py-1 rounded">business-plan.md</code> - бизнес-план стартапа. Структура:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-gray-300 mb-3">
          <li>Заголовок 1 уровня "Бизнес-план стартапа Gamma"</li>
          <li>Заголовок 2 уровня "Исполнительное резюме"</li>
          <li>Краткое описание бизнес-идеи</li>
          <li>Заголовок 2 уровня "Описание компании"</li>
          <li>Информация о компании и команде</li>
          <li>Заголовок 2 уровня "Анализ рынка"</li>
          <li>Описание целевой аудитории и конкурентов</li>
          <li>Заголовок 2 уровня "Маркетинговая стратегия"</li>
          <li>План продвижения продукта</li>
          <li>Заголовок 2 уровня "Финансовый план"</li>
          <li>Прогноз доходов и расходов</li>
        </ul>
        <p className="text-gray-300 mb-3">
          Экспортируйте документ в формат DOCX с использованием Pandoc. Откройте полученный файл в MS Word или аналоге и проверьте:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-gray-300 mb-3">
          <li>Правильность структуры документа</li>
          <li>Сохранение форматирования заголовков</li>
          <li>Наличие оглавления</li>
          <li>Корректность списков</li>
        </ul>
        <details className="group">
          <summary className="cursor-pointer text-sm text-gray-400 hover:text-gray-300 flex items-center gap-1">
            <span>Подсказка</span>
            <svg className="w-4 h-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </summary>
          <div className="mt-2 p-3 bg-gray-900/50 rounded text-sm text-gray-300">
            <p>Команда Pandoc: <code className="bg-gray-700 px-1 py-0.5 rounded">pandoc business-plan.md -o business-plan.docx</code></p>
          </div>
        </details>
      </div>

      {/* Задание 4 */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
          <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">4</span>
          Сравнение методов экспорта
        </h3>
        <p className="text-gray-300 mb-3">
          Создайте простой Markdown-документ <code className="bg-gray-700 px-2 py-1 rounded">comparison.md</code> с различными элементами:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-gray-300 mb-3">
          <li>Заголовки разных уровней</li>
          <li>Маркированные и нумерованные списки</li>
          <li>Фрагменты кода</li>
          <li>Таблицы</li>
          <li>Горизонтальные линии</li>
          <li>Выделение текста (жирный, курсив)</li>
        </ul>
        <p className="text-gray-300 mb-3">
          Экспортируйте этот документ всеми доступными вам способами:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-gray-300 mb-3">
          <li>С помощью Pandoc в PDF, HTML и DOCX</li>
          <li>С помощью расширения VS Code Markdown PDF в PDF</li>
          <li>С помощью онлайн-конвертера (если доступен)</li>
        </ul>
        <p className="text-gray-300">
          Создайте отчет <code className="bg-gray-700 px-2 py-1 rounded">export-comparison.md</code>, в котором опишите:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-gray-300 mb-3">
          <li>Плюсы и минусы каждого метода</li>
          <li>Качество результата (сохранность форматирования)</li>
          <li>Удобство использования</li>
          <li>Возможности настройки стилей</li>
          <li>Скорость выполнения</li>
        </ul>
        <details className="group">
          <summary className="cursor-pointer text-sm text-gray-400 hover:text-gray-300 flex items-center gap-1">
            <span>Подсказка</span>
            <svg className="w-4 h-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </summary>
          <div className="mt-2 p-3 bg-gray-900/50 rounded text-sm text-gray-300">
            <p>Обратите внимание на различия в обработке специфичных элементов Markdown разными инструментами.</p>
          </div>
        </details>
      </div>

      {/* Задание 5 */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
          <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">5</span>
          Экспорт с продвинутыми настройками
        </h3>
        <p className="text-gray-300 mb-3">
          Создайте Markdown-документ <code className="bg-gray-700 px-2 py-1 rounded">advanced-export.md</code> - научную статью. Требования:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-gray-300 mb-3">
          <li>Титульная страница с названием, авторами, датой</li>
          <li>Аннотация</li>
          <li>Содержание (оглавление)</li>
          <li>Нумерованные разделы и подразделы</li>
          <li>Математические формулы (если поддерживается)</li>
          <li>Изображения (если возможно)</li>
          <li>Список литературы</li>
          <li>Нумерация страниц</li>
        </ul>
        <p className="text-gray-300 mb-3">
          Создайте продвинутый CSS-файл <code className="bg-gray-700 px-2 py-1 rounded">advanced-styles.css</code> с настройками:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-gray-300 mb-3">
          <li>Колонтитулы с названием статьи и номерами страниц</li>
          <li>Стили для разных уровней заголовков</li>
          <li>Форматирование списков литературы</li>
          <li>Стили для математических формул</li>
          <li>Настройки для изображений (выравнивание, размеры)</li>
        </ul>
        <p className="text-gray-300 mb-3">
          Экспортируйте документ в PDF с использованием Pandoc с максимальным количеством настроек:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-gray-300 mb-3">
          <li>Установите поля документа</li>
          <li>Добавьте колонтитулы</li>
          <li>Включите автоматическую нумерацию страниц</li>
          <li>Сгенерируйте оглавление</li>
          <li>Примените созданный CSS-файл</li>
        </ul>
        <p className="text-gray-300">
          Проанализируйте результат и опишите, какие элементы были успешно преобразованы, а какие потребовали дополнительной настройки.
        </p>
      </div>

      {/* Заключение */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <div className="flex items-start gap-3">
          <div className="bg-green-500/20 p-2 rounded-lg flex-shrink-0">
            <Download className="w-5 h-5 text-green-400" />
          </div>
          <div>
            <h3 className="font-bold text-white mb-2">Отличная работа! 🎉</h3>
            <p className="text-gray-300">
              Эти задания помогли вам закрепить навыки экспорта Markdown-документов в различные форматы. 
              Вы научились использовать Pandoc, расширения VS Code и онлайн-конвертеры. 
              Вы освоили настройку стилей с помощью CSS и создание профессиональных документов с правильным форматированием. 
              Эти навыки позволят вам эффективно преобразовывать Markdown в нужные форматы для различных целей.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Part3;
