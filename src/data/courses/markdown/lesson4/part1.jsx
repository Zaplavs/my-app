// src/data/courses/markdown/lesson4/part1.jsx
import React from 'react';
import { FileText, Eye, Save, Keyboard, FolderOpen, Plus, Download } from 'lucide-react';

const Part1 = () => {
  return (
    <div className="space-y-8 text-gray-200">
      {/* Вступление */}
      <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 backdrop-blur-sm border border-blue-700/30 rounded-2xl p-6 shadow-lg">
        <div className="flex items-start gap-4">
          <div className="bg-blue-500/20 p-3 rounded-lg">
            <FileText className="w-6 h-6 text-blue-400" />
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">📄 Урок 4: Создание первого документа Markdown</h1>
            <h2 className="text-xl font-semibold text-blue-300 mb-3">Структура файла, основы работы и полезные советы</h2>
            <p className="text-gray-300">
              <span className="font-medium text-yellow-400">🎯 Цель урока:</span> Научиться создавать, сохранять и открывать Markdown-файлы. Освоить панель предпросмотра и полезные горячие клавиши.
            </p>
          </div>
        </div>
      </div>

      {/* Структура Markdown-файла */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <FileText className="w-5 h-5 text-green-400" />
          Структура Markdown-файла
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            <span className="font-medium text-green-300">Markdown-файл</span> — это обычный текстовый файл с определенным расширением. Вот основные характеристики:
          </p>
          <ul className="list-disc pl-6 space-y-2 mt-3">
            <li><span className="font-medium">Расширение файла:</span> <code className="bg-gray-700 px-2 py-1 rounded">.md</code> или <code className="bg-gray-700 px-2 py-1 rounded">.markdown</code></li>
            <li><span className="font-medium">Кодировка:</span> Обычно UTF-8 (поддерживает все языки, включая русский)</li>
            <li><span className="font-medium">Содержание:</span> Текст с разметкой Markdown и обычный текст</li>
            <li><span className="font-medium">Размер:</span> Очень легкие файлы, быстро загружаются</li>
          </ul>
          <p className="mt-4">
            Markdown-файлы можно открыть в любом текстовом редакторе, но для удобной работы рекомендуется использовать специализированные редакторы с предпросмотром.
          </p>
        </div>
      </div>

      {/* Создание первого документа */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Plus className="w-5 h-5 text-blue-400" />
          Создание первого документа Markdown
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Создание Markdown-документа — простой процесс. Вот пошаговое руководство:
          </p>
        </div>

        <div className="mt-6 space-y-6">
          <div className="bg-gray-900/50 p-5 rounded-xl border border-blue-700/30">
            <h3 className="font-bold text-blue-300 mb-3 flex items-center gap-2">
              <span className="bg-blue-500/20 w-6 h-6 rounded-full flex items-center justify-center text-sm">1</span>
              В любом текстовом редакторе
            </h3>
            <div className="space-y-3">
              <p className="text-gray-300">
                <span className="font-medium">Шаг 1:</span> Откройте любой текстовый редактор (Блокнот, TextEdit, VS Code, Sublime Text и т.д.)
              </p>
              <p className="text-gray-300">
                <span className="font-medium">Шаг 2:</span> Напишите простую разметку:
              </p>
              <pre className="bg-gray-800 p-4 rounded-lg overflow-x-auto text-sm">
                <code>{`# Мой первый документ

Привет, это **жирный текст** и это *курсив*.

## Список дел:
- [x] Создать документ Markdown
- [ ] Выучить синтаксис
- [ ] Использовать предпросмотр`}</code>
              </pre>
              <p className="text-gray-300">
                <span className="font-medium">Шаг 3:</span> Сохраните файл с расширением <code className="bg-gray-700 px-2 py-1 rounded">.md</code> (например, <code className="bg-gray-700 px-2 py-1 rounded">first-document.md</code>)
              </p>
            </div>
          </div>

          <div className="bg-gray-900/50 p-5 rounded-xl border border-purple-700/30">
            <h3 className="font-bold text-purple-300 mb-3 flex items-center gap-2">
              <span className="bg-purple-500/20 w-6 h-6 rounded-full flex items-center justify-center text-sm">2</span>
              В специализированном редакторе
            </h3>
            <div className="space-y-3">
              <p className="text-gray-300">
                <span className="font-medium">Шаг 1:</span> Откройте редактор Markdown (VS Code, Typora, Obsidian)
              </p>
              <p className="text-gray-300">
                <span className="font-medium">Шаг 2:</span> Создайте новый файл (обычно Ctrl+N или Cmd+N)
              </p>
              <p className="text-gray-300">
                <span className="font-medium">Шаг 3:</span> Напишите содержание документа
              </p>
              <p className="text-gray-300">
                <span className="font-medium">Шаг 4:</span> Сохраните файл с расширением <code className="bg-gray-700 px-2 py-1 rounded">.md</code> (Ctrl+S или Cmd+S)
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Сохранение и открытие файлов */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Save className="w-5 h-5 text-yellow-400" />
          Сохранение и открытие Markdown-файлов
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-900/50 p-5 rounded-xl border border-green-700/30">
            <h3 className="font-bold text-green-300 mb-3 flex items-center gap-2">
              <Save className="w-5 h-5" />
              Сохранение файлов
            </h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start gap-2">
                <span className="font-bold text-green-400 mt-1">•</span>
                <span>Используйте расширение <code className="bg-gray-700 px-1.5 py-0.5 rounded">.md</code> для всех Markdown-файлов</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold text-green-400 mt-1">•</span>
                <span>Выбирайте понятные имена файлов без пробелов (используйте дефисы или подчеркивания)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold text-green-400 mt-1">•</span>
                <span>Сохраняйте файлы в организованной структуре папок</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold text-green-400 mt-1">•</span>
                <span>Используйте UTF-8 кодировку для поддержки всех языков</span>
              </li>
            </ul>
          </div>
          <div className="bg-gray-900/50 p-5 rounded-xl border border-blue-700/30">
            <h3 className="font-bold text-blue-300 mb-3 flex items-center gap-2">
              <FolderOpen className="w-5 h-5" />
              Открытие файлов
            </h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start gap-2">
                <span className="font-bold text-blue-400 mt-1">•</span>
                <span>Дважды кликните по файлу <code className="bg-gray-700 px-1.5 py-0.5 rounded">.md</code> для открытия в редакторе по умолчанию</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold text-blue-400 mt-1">•</span>
                <span>Откройте файл через меню "Файл → Открыть" в вашем редакторе</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold text-blue-400 mt-1">•</span>
                <span>Перетащите файл в окно редактора</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold text-blue-400 mt-1">•</span>
                <span>Используйте командную строку: <code className="bg-gray-700 px-1.5 py-0.5 rounded">code myfile.md</code></span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Использование панели предпросмотра */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Eye className="w-5 h-5 text-purple-400" />
          Использование панели предпросмотра
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Панель предпросмотра — одна из самых полезных функций редакторов Markdown. Она позволяет видеть результат форматирования в реальном времени.
          </p>
        </div>

        <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-gray-900/50 p-5 rounded-xl border border-cyan-700/30">
            <h3 className="font-bold text-cyan-300 mb-3">Как включить предпросмотр</h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start gap-2">
                <span className="font-bold text-cyan-400">VS Code:</span>
                <span>Ctrl+Shift+V (Cmd+Shift+V на Mac) или кнопка "Open Preview" в правом верхнем углу</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold text-cyan-400">Typora:</span>
                <span>Предпросмотр встроен по умолчанию (визуальный режим)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold text-cyan-400">Obsidian:</span>
                <span>Ctrl+Click на ссылку или кнопка "Preview" в правом верхнем углу</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold text-cyan-400">Dillinger:</span>
                <span>Разделенное окно - код слева, предпросмотр справа</span>
              </li>
            </ul>
          </div>
          <div className="bg-gray-900/50 p-5 rounded-xl border border-pink-700/30">
            <h3 className="font-bold text-pink-300 mb-3">Преимущества предпросмотра</h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start gap-2">
                <span className="font-bold text-pink-400">✓</span>
                <span>Мгновенный просмотр результата форматирования</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold text-pink-400">✓</span>
                <span>Обнаружение ошибок в синтаксисе</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold text-pink-400">✓</span>
                <span>Удобство при работе с таблицами и изображениями</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold text-pink-400">✓</span>
                <span>Проверка внешнего вида перед публикацией</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-6 bg-gray-900/30 p-4 rounded-lg border border-gray-700">
          <h4 className="font-bold text-white mb-2">Советы по работе с предпросмотром:</h4>
          <ul className="list-disc pl-5 space-y-2 text-gray-300 text-sm">
            <li>Используйте разделенный экран (split view) для одновременного просмотра кода и результата</li>
            <li>Обновляйте предпросмотр при изменении сложных элементов (таблицы, диаграммы)</li>
            <li>Проверяйте внешний вид перед экспортом или публикацией</li>
            <li>Используйте горячие клавиши для быстрого переключения между режимами</li>
          </ul>
        </div>
      </div>

      {/* Полезные горячие клавиши */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Keyboard className="w-5 h-5 text-orange-400" />
          Полезные горячие клавиши Markdown
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed mb-4">
          <p>
            Горячие клавиши значительно ускоряют работу с Markdown. Вот самые важные из них:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-900/50 p-5 rounded-xl border border-blue-700/30">
            <h3 className="font-bold text-blue-300 mb-4">Общие команды</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center p-2 bg-gray-800/50 rounded">
                <span className="font-mono">Ctrl+S / Cmd+S</span>
                <span className="text-gray-400">Сохранить файл</span>
              </div>
              <div className="flex justify-between items-center p-2 bg-gray-800/50 rounded">
                <span className="font-mono">Ctrl+N / Cmd+N</span>
                <span className="text-gray-400">Новый файл</span>
              </div>
              <div className="flex justify-between items-center p-2 bg-gray-800/50 rounded">
                <span className="font-mono">Ctrl+O / Cmd+O</span>
                <span className="text-gray-400">Открыть файл</span>
              </div>
              <div className="flex justify-between items-center p-2 bg-gray-800/50 rounded">
                <span className="font-mono">Ctrl+Z / Cmd+Z</span>
                <span className="text-gray-400">Отменить действие</span>
              </div>
              <div className="flex justify-between items-center p-2 bg-gray-800/50 rounded">
                <span className="font-mono">Ctrl+Y / Cmd+Shift+Z</span>
                <span className="text-gray-400">Повторить действие</span>
              </div>
            </div>
          </div>

          <div className="bg-gray-900/50 p-5 rounded-xl border border-green-700/30">
            <h3 className="font-bold text-green-300 mb-4">Форматирование и предпросмотр</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center p-2 bg-gray-800/50 rounded">
                <span className="font-mono">Ctrl+B / Cmd+B</span>
                <span className="text-gray-400">Жирный текст</span>
              </div>
              <div className="flex justify-between items-center p-2 bg-gray-800/50 rounded">
                <span className="font-mono">Ctrl+I / Cmd+I</span>
                <span className="text-gray-400">Курсив</span>
              </div>
              <div className="flex justify-between items-center p-2 bg-gray-800/50 rounded">
                <span className="font-mono">Ctrl+Shift+V</span>
                <span className="text-gray-400">Открыть предпросмотр (VS Code)</span>
              </div>
              <div className="flex justify-between items-center p-2 bg-gray-800/50 rounded">
                <span className="font-mono">Ctrl+Shift+]</span>
                <span className="text-gray-400">Увеличить отступ</span>
              </div>
              <div className="flex justify-between items-center p-2 bg-gray-800/50 rounded">
                <span className="font-mono">Ctrl+Shift+[</span>
                <span className="text-gray-400">Уменьшить отступ</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 bg-gray-900/30 p-4 rounded-lg border border-gray-700">
          <h4 className="font-bold text-white mb-2">Советы по запоминанию горячих клавиш:</h4>
          <ul className="list-disc pl-5 space-y-2 text-gray-300 text-sm">
            <li>Начните с 3-5 самых важных команд и постепенно добавляйте новые</li>
            <li>Используйте встроенные шпаргалки в редакторах (обычно в меню Help)</li>
            <li>Практикуйтесь регулярно - мышечная память сработает через несколько дней</li>
            <li>Настройте горячие клавиши под себя, если стандартные неудобны</li>
          </ul>
        </div>
      </div>

      {/* Заключение */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <div className="flex items-start gap-3">
          <div className="bg-green-500/20 p-2 rounded-lg flex-shrink-0">
            <FileText className="w-5 h-5 text-green-400" />
          </div>
          <div>
            <h3 className="font-bold text-white mb-2">Поздравляем! 🎉</h3>
            <p className="text-gray-300">
              Теперь вы знаете, как создавать, сохранять и открывать Markdown-файлы. Вы освоили панель предпросмотра и полезные горячие клавиши. 
              Эти навыки станут отличной основой для дальнейшей работы с Markdown. В следующем уроке мы рассмотрим расширенные возможности синтаксиса Markdown.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Part1;
