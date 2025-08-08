// src/data/courses/markdown/lesson17/part1.jsx
import React from 'react';
import { FileText, Download, Settings, Palette, Printer, Code } from 'lucide-react';

const Part1 = () => {
  return (
    <div className="space-y-8 text-gray-200">
      {/* Вступление */}
      <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 backdrop-blur-sm border border-blue-700/30 rounded-2xl p-6 shadow-lg">
        <div className="flex items-start gap-4">
          <div className="bg-blue-500/20 p-3 rounded-lg">
            <Download className="w-6 h-6 text-blue-400" />
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">📤 Урок 17: Экспорт Markdown в PDF, HTML, DOCX</h1>
            <h2 className="text-xl font-semibold text-blue-300 mb-3">Преобразование документов в различные форматы</h2>
            <p className="text-gray-300">
              <span className="font-medium text-yellow-400">🎯 Цель урока:</span> Освоить инструменты и методы экспорта Markdown-документов в PDF, HTML и DOCX, научиться настраивать стили и создавать профессиональные документы.
            </p>
          </div>
        </div>
      </div>

      {/* Зачем нужен экспорт */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Printer className="w-5 h-5 text-green-400" />
          Зачем нужен экспорт Markdown-документов?
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Хотя Markdown отлично подходит для написания и совместной работы, часто требуется преобразовать документы в другие форматы:
          </p>
        </div>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-gray-900/50 p-4 rounded-xl border border-blue-700/30">
            <h3 className="font-bold text-blue-300 mb-2 flex items-center gap-2">
              <FileText className="w-5 h-5" />
              PDF
            </h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-300 text-sm">
              <li>Профессиональный внешний вид</li>
              <li>Сохранение форматирования</li>
              <li>Универсальная совместимость</li>
              <li>Печать и архивирование</li>
            </ul>
          </div>
          <div className="bg-gray-900/50 p-4 rounded-xl border border-green-700/30">
            <h3 className="font-bold text-green-300 mb-2 flex items-center gap-2">
              <Code className="w-5 h-5" />
              HTML
            </h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-300 text-sm">
              <li>Публикация в вебе</li>
              <li>Интерактивность</li>
              <li>Интеграция с веб-сайтами</li>
              <li>Дальнейшая веб-разработка</li>
            </ul>
          </div>
          <div className="bg-gray-900/50 p-4 rounded-xl border border-purple-700/30">
            <h3 className="font-bold text-purple-300 mb-2 flex items-center gap-2">
              <FileText className="w-5 h-5" />
              DOCX
            </h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-300 text-sm">
              <li>Совместимость с MS Word</li>
              <li>Редактирование в офисных приложениях</li>
              <li>Совместная работа в корпоративной среде</li>
              <li>Официальная переписка</li>
            </ul>
          </div>
        </div>

        <div className="mt-6 bg-gray-900/30 p-4 rounded-lg border border-gray-700">
          <h4 className="font-bold text-white mb-2">Преимущества экспорта:</h4>
          <ul className="list-disc pl-5 space-y-2 text-gray-300 text-sm">
            <li>Универсальность использования документов</li>
            <li>Профессиональное оформление</li>
            <li>Совместимость с различными системами</li>
            <li>Возможность печати и архивирования</li>
          </ul>
        </div>
      </div>

      {/* Инструменты для экспорта */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Settings className="w-5 h-5 text-purple-400" />
          Инструменты для экспорта Markdown
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Существует множество инструментов для экспорта Markdown-документов:
          </p>
        </div>

        <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-gray-900/50 p-5 rounded-xl border border-blue-700/30">
            <h3 className="font-bold text-blue-300 mb-3 flex items-center gap-2">
              <Code className="w-5 h-5" />
              Pandoc
            </h3>
            <div className="space-y-3 text-gray-300 text-sm">
              <p>
                <span className="font-medium">Pandoc</span> — универсальный конвертер документов, поддерживающий множество форматов.
              </p>
              <div className="bg-gray-800 p-3 rounded">
                <p className="font-medium text-gray-400 mb-2">Установка:</p>
                <pre className="text-gray-300"><code>{`# Windows (через Chocolatey)
choco install pandoc

# macOS (через Homebrew)
brew install pandoc

# Ubuntu/Debian
sudo apt-get install pandoc`}</code></pre>
              </div>
              <div className="bg-gray-800 p-3 rounded">
                <p className="font-medium text-gray-400 mb-2">Примеры использования:</p>
                <pre className="text-gray-300"><code>{`# Markdown в PDF
pandoc document.md -o document.pdf

# Markdown в DOCX
pandoc document.md -o document.docx

# Markdown в HTML
pandoc document.md -o document.html`}</code></pre>
              </div>
            </div>
          </div>

          <div className="bg-gray-900/50 p-5 rounded-xl border border-green-700/30">
            <h3 className="font-bold text-green-300 mb-3 flex items-center gap-2">
              <Settings className="w-5 h-5" />
              Расширения VS Code
            </h3>
            <div className="space-y-3 text-gray-300 text-sm">
              <p>
                <span className="font-medium">Markdown PDF</span> — популярное расширение для VS Code.
              </p>
              <div className="bg-gray-800 p-3 rounded">
                <p className="font-medium text-gray-400 mb-2">Установка:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Откройте VS Code</li>
                  <li>Перейдите в Extensions (Ctrl+Shift+X)</li>
                  <li>Найдите "Markdown PDF"</li>
                  <li>Нажмите Install</li>
                </ul>
              </div>
              <div className="bg-gray-800 p-3 rounded">
                <p className="font-medium text-gray-400 mb-2">Использование:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Откройте Markdown-файл</li>
                  <li>Нажмите Ctrl+Shift+P</li>
                  <li>Введите "Markdown PDF"</li>
                  <li>Выберите формат экспорта</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-gray-900/50 p-5 rounded-xl border border-yellow-700/30">
            <h3 className="font-bold text-yellow-300 mb-3 flex items-center gap-2">
              <Printer className="w-5 h-5" />
              Онлайн-конвертеры
            </h3>
            <div className="space-y-3 text-gray-300 text-sm">
              <p>
                Удобны для быстрого преобразования без установки ПО.
              </p>
              <div className="bg-gray-800 p-3 rounded">
                <p className="font-medium text-gray-400 mb-2">Популярные сервисы:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>CloudConvert</li>
                  <li>Online-Convert</li>
                  <li>Convertio</li>
                  <li>Smallpdf</li>
                </ul>
              </div>
              <div className="bg-gray-800 p-3 rounded">
                <p className="font-medium text-gray-400 mb-2">Преимущества:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Не требуют установки</li>
                  <li>Работают в браузере</li>
                  <li>Поддерживают множество форматов</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-gray-900/50 p-5 rounded-xl border border-pink-700/30">
            <h3 className="font-bold text-pink-300 mb-3 flex items-center gap-2">
              <FileText className="w-5 h-5" />
              Специализированные редакторы
            </h3>
            <div className="space-y-3 text-gray-300 text-sm">
              <p>
                Некоторые редакторы имеют встроенные функции экспорта.
              </p>
              <div className="bg-gray-800 p-3 rounded">
                <p className="font-medium text-gray-400 mb-2">Примеры:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Typora</li>
                  <li>Mark Text</li>
                  <li>Obsidian</li>
                  <li>Zettlr</li>
                </ul>
              </div>
              <div className="bg-gray-800 p-3 rounded">
                <p className="font-medium text-gray-400 mb-2">Особенности:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Интеграция с редактором</li>
                  <li>Предпросмотр перед экспортом</li>
                  <li>Настройка стилей</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Настройка стилей при экспорте */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Palette className="w-5 h-5 text-cyan-400" />
          Настройка стилей при экспорте
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Профессиональные документы требуют настройки стилей и форматирования:
          </p>
        </div>

        <div className="mt-6 bg-gray-900/50 p-5 rounded-xl border border-cyan-700/30">
          <h3 className="font-bold text-cyan-300 mb-3">CSS для HTML/PDF экспорта:</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <p className="text-gray-400 text-sm mb-2">Создание CSS-файла:</p>
              <pre className="bg-gray-800 p-4 rounded text-sm text-gray-300"><code>{`/* styles.css */
body {
  font-family: 'Times New Roman', Times, serif;
  font-size: 12pt;
  line-height: 1.5;
  margin: 2cm;
}

h1 {
  color: #2563eb;
  border-bottom: 2px solid #2563eb;
  padding-bottom: 10px;
}

h2 {
  color: #0f172a;
  margin-top: 1.5em;
}

p {
  text-align: justify;
  margin-bottom: 1em;
}

code {
  background-color: #f1f5f9;
  padding: 2px 4px;
  border-radius: 3px;
  font-family: 'Courier New', monospace;
}`}</code></pre>
            </div>
            <div>
              <p className="text-gray-400 text-sm mb-2">Использование с Pandoc:</p>
              <pre className="bg-gray-800 p-4 rounded text-sm text-gray-300"><code>{`pandoc document.md \\
  --css=styles.css \\
  --pdf-engine=weasyprint \\
  -o document.pdf`}</code></pre>
              <div className="mt-4 p-3 bg-gray-800/50 rounded">
                <p className="text-gray-400 text-sm mb-2">Опции экспорта:</p>
                <ul className="list-disc pl-5 space-y-1 text-gray-300 text-xs">
                  <li><code className="bg-gray-700 px-1 py-0.5 rounded">--css</code> - подключение CSS-файла</li>
                  <li><code className="bg-gray-700 px-1 py-0.5 rounded">--pdf-engine</code> - выбор движка PDF</li>
                  <li><code className="bg-gray-700 px-1 py-0.5 rounded">--template</code> - использование шаблона</li>
                  <li><code className="bg-gray-700 px-1 py-0.5 rounded">--variable</code> - установка переменных</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-900/50 p-4 rounded-xl border border-green-700/30">
            <h3 className="font-bold text-green-300 mb-3">Настройки PDF:</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li className="flex items-start gap-2">
                <span className="font-bold text-green-400 mt-1">•</span>
                <span><span className="font-medium">Поля страницы:</span> Установка размеров полей (2-3 см стандарт)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold text-green-400 mt-1">•</span>
                <span><span className="font-medium">Шрифты:</span> Выбор профессиональных шрифтов (Times New Roman, Arial)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold text-green-400 mt-1">•</span>
                <span><span className="font-medium">Нумерация страниц:</span> Автоматическая или ручная</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold text-green-400 mt-1">•</span>
                <span><span className="font-medium">Колонтитулы:</span> Добавление заголовков и дат</span>
              </li>
            </ul>
          </div>
          <div className="bg-gray-900/50 p-4 rounded-xl border border-blue-700/30">
            <h3 className="font-bold text-blue-300 mb-3">Настройки DOCX:</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li className="flex items-start gap-2">
                <span className="font-bold text-blue-400 mt-1">•</span>
                <span><span className="font-medium">Стили документов:</span> Использование встроенных стилей Word</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold text-blue-400 mt-1">•</span>
                <span><span className="font-medium">Оглавление:</span> Автоматическая генерация оглавления</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold text-blue-400 mt-1">•</span>
                <span><span className="font-medium">Нумерация заголовков:</span> Автоматическая нумерация разделов</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold text-blue-400 mt-1">•</span>
                <span><span className="font-medium">Поля и ориентация:</span> Настройка страницы под содержимое</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Создание красивого PDF */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <FileText className="w-5 h-5 text-orange-400" />
          Создание красивого PDF с полями и шрифтами
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Профессиональный PDF требует внимания к деталям оформления:
          </p>
        </div>

        <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-gray-900/50 p-5 rounded-xl border border-orange-700/30">
            <h3 className="font-bold text-orange-300 mb-3">Поля документа:</h3>
            <div className="space-y-3 text-gray-300 text-sm">
              <div className="flex items-center gap-3 p-3 bg-gray-800 rounded">
                <div className="w-8 h-10 bg-gray-700 border border-gray-600 relative">
                  <div className="absolute top-0 left-0 right-0 h-2 bg-blue-500"></div>
                  <div className="absolute bottom-0 left-0 right-0 h-2 bg-blue-500"></div>
                  <div className="absolute top-2 bottom-2 left-0 w-2 bg-blue-500"></div>
                  <div className="absolute top-2 bottom-2 right-0 w-2 bg-blue-500"></div>
                </div>
                <div>
                  <p className="font-medium">Стандартные поля:</p>
                  <p className="text-gray-400">Верхнее/Нижнее: 2 см</p>
                  <p className="text-gray-400">Левое/Правое: 3 см / 2 см</p>
                </div>
              </div>
              <div className="bg-gray-800 p-3 rounded">
                <p className="font-medium text-gray-400 mb-2">Pandoc с настройкой полей:</p>
                <pre className="text-gray-300"><code>{`pandoc document.md \\
  --variable margin-top=2cm \\
  --variable margin-bottom=2cm \\
  --variable margin-left=3cm \\
  --variable margin-right=2cm \\
  -o document.pdf`}</code></pre>
              </div>
            </div>
          </div>

          <div className="bg-gray-900/50 p-5 rounded-xl border border-yellow-700/30">
            <h3 className="font-bold text-yellow-300 mb-3">Шрифты и типографика:</h3>
            <div className="space-y-3 text-gray-300 text-sm">
              <div className="grid grid-cols-2 gap-2">
                <div className="p-2 bg-gray-800 rounded text-center">
                  <p className="font-serif">Serif</p>
                  <p className="text-xs text-gray-400">Times New Roman</p>
                </div>
                <div className="p-2 bg-gray-800 rounded text-center">
                  <p className="font-sans">Sans-serif</p>
                  <p className="text-xs text-gray-400">Arial, Helvetica</p>
                </div>
              </div>
              <div className="bg-gray-800 p-3 rounded">
                <p className="font-medium text-gray-400 mb-2">Настройка шрифтов в CSS:</p>
                <pre className="text-gray-300"><code>{`body {
  font-family: 'Georgia', serif;
  font-size: 11pt;
  line-height: 1.4;
}

h1, h2, h3 {
  font-family: 'Helvetica', sans-serif;
}`}</code></pre>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 bg-gray-900/30 p-4 rounded-lg border border-gray-700">
          <h4 className="font-bold text-white mb-2">Советы по созданию профессионального PDF:</h4>
          <ul className="list-disc pl-5 space-y-2 text-gray-300 text-sm">
            <li>Используйте стандартные шрифты для лучшей совместимости</li>
            <li>Соблюдайте единую стилистику заголовков</li>
            <li>Добавляйте разрывы страниц перед новыми разделами</li>
            <li>Используйте нумерацию страниц для многостраничных документов</li>
            <li>Проверяйте читаемость текста при печати</li>
            <li>Добавляйте колонтитулы с названием документа и датой</li>
          </ul>
        </div>
      </div>

      {/* Практические примеры */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Download className="w-5 h-5 text-pink-400" />
          Практические примеры экспорта
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Вот как можно использовать различные методы экспорта:
          </p>
        </div>

        <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-gray-900/50 p-4 rounded-xl border border-blue-700/30">
            <h3 className="font-bold text-blue-300 mb-3">Отчет в PDF:</h3>
            <pre className="bg-gray-800 p-3 rounded text-sm text-gray-300"><code>{`# Ежемесячный отчет

## Введение
Этот отчет содержит анализ 
результатов за месяц.

## Результаты
- Выполнено 95% задач
- Увеличение эффективности на 12%

## Заключение
План выполнен успешно.`}</code></pre>
            <div className="mt-3 p-3 bg-gray-800/50 rounded">
              <p className="text-gray-400 text-xs mb-2">Экспорт в PDF:</p>
              <pre className="text-gray-300 text-xs"><code>pandoc report.md -o report.pdf --pdf-engine=wkhtmltopdf</code></pre>
            </div>
          </div>
          <div className="bg-gray-900/50 p-4 rounded-xl border border-green-700/30">
            <h3 className="font-bold text-green-300 mb-3">Документация в HTML:</h3>
            <pre className="bg-gray-800 p-3 rounded text-sm text-gray-300"><code>{`# API Documentation

## Endpoints
- \`GET /users\` - Получить список пользователей
- \`POST /users\` - Создать нового пользователя`}</code></pre>
            <div className="mt-3 p-3 bg-gray-800/50 rounded">
              <p className="text-gray-400 text-xs mb-2">Экспорт в HTML:</p>
              <pre className="text-gray-300 text-xs"><code>pandoc api.md -s -o api.html --css=docs.css</code></pre>
            </div>
          </div>
        </div>
      </div>

      {/* Заключение */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <div className="flex items-start gap-3">
          <div className="bg-green-500/20 p-2 rounded-lg flex-shrink-0">
            <Download className="w-5 h-5 text-green-400" />
          </div>
          <div>
            <h3 className="font-bold text-white mb-2">Поздравляем! 🎉</h3>
            <p className="text-gray-300">
              Теперь вы знаете, как экспортировать Markdown-документы в различные форматы. Вы научились использовать Pandoc, расширения VS Code и онлайн-конвертеры. 
              Вы освоили настройку стилей и создание профессиональных PDF-документов с правильными полями и шрифтами. 
              Эти навыки позволят вам создавать документы для любых целей - от внутренних отчетов до официальной переписки.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Part1;
