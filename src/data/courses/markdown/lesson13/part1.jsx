// src/data/courses/markdown/lesson13/part1.jsx
import React from 'react';
import { Code, FileCode, Globe, AlertTriangle } from 'lucide-react';

const Part1 = () => {
  return (
    <div className="space-y-8 text-gray-200">
      {/* Вступление */}
      <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 backdrop-blur-sm border border-blue-700/30 rounded-2xl p-6 shadow-lg">
        <div className="flex items-start gap-4">
          <div className="bg-blue-500/20 p-3 rounded-lg">
            <Code className="w-6 h-6 text-blue-400" />
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">🔤 Урок 13: HTML внутри Markdown</h1>
            <h2 className="text-xl font-semibold text-blue-300 mb-3">Расширение возможностей Markdown с помощью встраиваемого HTML</h2>
            <p className="text-gray-300">
              <span className="font-medium text-yellow-400">🎯 Цель урока:</span> Освоить встраивание HTML-тегов в Markdown-документы для реализации функциональности, не поддерживаемой стандартным синтаксисом Markdown.
            </p>
          </div>
        </div>
      </div>

      {/* Когда нужен HTML в Markdown */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <AlertTriangle className="w-5 h-5 text-yellow-400" />
          Когда нужен HTML в Markdown?
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Несмотря на богатый синтаксис, Markdown не охватывает все возможные элементы форматирования и интерактивности. 
            В таких случаях можно использовать встроенный HTML для расширения возможностей документа.
          </p>
          <p>
            Это особенно полезно, когда вам нужны:
          </p>
        </div>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-gray-900/50 p-4 rounded-xl border border-blue-700/30">
            <h3 className="font-bold text-blue-300 mb-2">Специфичные элементы</h3>
            <ul className="list-disc pl-5 space-y-1 text-gray-300 text-sm">
              <li>Видео и аудио</li>
              <li>Фреймы (iframes)</li>
              <li>Сложные таблицы</li>
              <li>Специальные атрибуты (классы, стили)</li>
            </ul>
          </div>
          <div className="bg-gray-900/50 p-4 rounded-xl border border-green-700/30">
            <h3 className="font-bold text-green-300 mb-2">Точное форматирование</h3>
            <ul className="list-disc pl-5 space-y-1 text-gray-300 text-sm">
              <li>Точные отступы и выравнивание</li>
              <li>Цветной текст</li>
              <li>Сложные макеты</li>
              <li>Кастомные элементы интерфейса</li>
            </ul>
          </div>
        </div>

        <div className="mt-6 bg-red-900/20 border border-red-700/30 rounded-lg p-4">
          <h4 className="font-bold text-red-300 mb-2 flex items-center gap-2">
            <span className="bg-red-500/20 w-6 h-6 rounded-full flex items-center justify-center text-sm">!</span>
            Важное предупреждение:
          </h4>
          <p className="text-gray-300 text-sm">
            Использование HTML снижает переносимость документа между различными платформами и редакторами. 
            Не все системы Markdown одинаково поддерживают встроенный HTML.
          </p>
        </div>
      </div>

      {/* Основы встраивания HTML */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <FileCode className="w-5 h-5 text-purple-400" />
          Основы встраивания HTML
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Markdown позволяет использовать большинство HTML-тегов напрямую. Они будут обработаны как обычный HTML, а не как Markdown-синтаксис.
          </p>
        </div>

        <div className="mt-6 bg-gray-900/50 p-5 rounded-xl border border-purple-700/30">
          <h3 className="font-bold text-purple-300 mb-3">Простые HTML-элементы:</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <p className="text-gray-400 text-sm mb-2">Markdown с HTML:</p>
              <pre className="bg-gray-800 p-4 rounded text-sm text-gray-300"><code>{`Это обычный текст в Markdown.

<div style="background-color: #2d3748; padding: 10px; border-radius: 5px;">
  <p style="color: #68d391;">Это HTML внутри Markdown!</p>
</div>

Продолжение обычного текста.`}</code></pre>
            </div>
            <div>
              <p className="text-gray-400 text-sm mb-2">Результат:</p>
              <div className="text-gray-300">
                <p>Это обычный текст в Markdown.</p>
                <div style={{backgroundColor: '#2d3748', padding: '10px', borderRadius: '5px', marginTop: '10px', marginBottom: '10px'}}>
                  <p style={{color: '#68d391'}}>Это HTML внутри Markdown!</p>
                </div>
                <p>Продолжение обычного текста.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 bg-gray-900/30 p-4 rounded-lg border border-gray-700">
          <h4 className="font-bold text-white mb-2">Поддерживаемые элементы:</h4>
          <ul className="list-disc pl-5 space-y-2 text-gray-300 text-sm">
            <li>Блочные элементы: <code className="bg-gray-700 px-1.5 py-0.5 rounded">{'<div>'}</code>, <code className="bg-gray-700 px-1.5 py-0.5 rounded">{'<p>'}</code>, <code className="bg-gray-700 px-1.5 py-0.5 rounded">{'<section>'}</code></li>
            <li>Строчные элементы: <code className="bg-gray-700 px-1.5 py-0.5 rounded">{'<span>'}</code>, <code className="bg-gray-700 px-1.5 py-0.5 rounded">{'<strong>'}</code>, <code className="bg-gray-700 px-1.5 py-0.5 rounded">{'<em>'}</code></li>
            <li>Медиа: <code className="bg-gray-700 px-1.5 py-0.5 rounded">{'<img>'}</code>, <code className="bg-gray-700 px-1.5 py-0.5 rounded">{'<video>'}</code>, <code className="bg-gray-700 px-1.5 py-0.5 rounded">{'<audio>'}</code></li>
            <li>Фреймы: <code className="bg-gray-700 px-1.5 py-0.5 rounded">{'<iframe>'}</code></li>
            <li>Списки: <code className="bg-gray-700 px-1.5 py-0.5 rounded">{'<ul>'}</code>, <code className="bg-gray-700 px-1.5 py-0.5 rounded">{'<ol>'}</code>, <code className="bg-gray-700 px-1.5 py-0.5 rounded">{'<li>'}</code></li>
          </ul>
        </div>
      </div>

      {/* Практические примеры */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Globe className="w-5 h-5 text-cyan-400" />
          Практические примеры использования HTML
        </h2>

        <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-gray-900/50 p-5 rounded-xl border border-blue-700/30">
            <h3 className="font-bold text-blue-300 mb-3">Видео в документе:</h3>
            <pre className="bg-gray-800 p-4 rounded text-sm text-gray-300 mb-3"><code>{`# Демонстрация функции

Посмотрите, как это работает:

<video width="100%" controls>
  <source src="demo.mp4" type="video/mp4">
  Ваш браузер не поддерживает видео.
</video>`}</code></pre>
            <p className="text-gray-400 text-xs">
              Позволяет встроить видео напрямую в документ
            </p>
          </div>

          <div className="bg-gray-900/50 p-5 rounded-xl border border-green-700/30">
            <h3 className="font-bold text-green-300 mb-3">Встроенный фрейм:</h3>
            <pre className="bg-gray-800 p-4 rounded text-sm text-gray-300 mb-3"><code>{`## Карта местоположения

<iframe 
  src="https://maps.example.com/embed?location=moscow" 
  width="100%" 
  height="300" 
  frameborder="0">
</iframe>`}</code></pre>
            <p className="text-gray-400 text-xs">
              Позволяет встроить внешние ресурсы (карты, виджеты)
            </p>
          </div>
        </div>

        <div className="mt-6 bg-gray-900/50 p-5 rounded-xl border border-orange-700/30">
          <h3 className="font-bold text-orange-300 mb-3">Стилизованный контент:</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <p className="text-gray-400 text-sm mb-2">Markdown с HTML/CSS:</p>
              <pre className="bg-gray-800 p-4 rounded text-sm text-gray-300"><code>{`<div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 20px; border-radius: 10px; color: white;">
  <h3 style="margin-top: 0;">Важное уведомление</h3>
  <p>Этот контент выделен с помощью встроенного CSS.</p>
</div>`}</code></pre>
            </div>
            <div>
              <p className="text-gray-400 text-sm mb-2">Результат:</p>
              <div className="text-gray-300">
                <div style={{background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', padding: '20px', borderRadius: '10px', color: 'white'}}>
                  <h3 style={{marginTop: '0'}}>Важное уведомление</h3>
                  <p>Этот контент выделен с помощью встроенного CSS.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Ограничения и особенности */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <AlertTriangle className="w-5 h-5 text-red-400" />
          Ограничения и особенности
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            При использовании HTML в Markdown важно учитывать следующие ограничения:
          </p>
        </div>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-900/50 p-4 rounded-xl border border-red-700/30">
            <h3 className="font-bold text-red-300 mb-3">Ограничения безопасности:</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li className="flex items-start gap-2">
                <span className="font-bold text-red-400 mt-1">•</span>
                <span>Некоторые платформы блокируют определенные теги для безопасности</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold text-red-400 mt-1">•</span>
                <span>Атрибуты <code className="bg-gray-700 px-1 py-0.5 rounded">onload</code>, <code className="bg-gray-700 px-1 py-0.5 rounded">onclick</code> могут быть удалены</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold text-red-400 mt-1">•</span>
                <span>Скрипты <code className="bg-gray-700 px-1 py-0.5 rounded">{'<script>'}</code> часто блокируются</span>
              </li>
            </ul>
          </div>
          <div className="bg-gray-900/50 p-4 rounded-xl border border-yellow-700/30">
            <h3 className="font-bold text-yellow-300 mb-3">Особенности обработки:</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li className="flex items-start gap-2">
                <span className="font-bold text-yellow-400 mt-1">•</span>
                <span>HTML-теги не обрабатываются как Markdown внутри них</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold text-yellow-400 mt-1">•</span>
                <span>Нужно закрывать все теги правильно</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold text-yellow-400 mt-1">•</span>
                <span>Сложные структуры могут нарушить форматирование</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-6 bg-gray-900/30 p-4 rounded-lg border border-gray-700">
          <h4 className="font-bold text-white mb-2">Советы по использованию:</h4>
          <ul className="list-disc pl-5 space-y-2 text-gray-300 text-sm">
            <li>Используйте HTML только когда это действительно необходимо</li>
            <li>Проверяйте отображение в целевой платформе</li>
            <li>Сохраняйте простоту структуры документа</li>
            <li>Документируйте использование HTML для других разработчиков</li>
            <li>Избегайте встроенных стилей — используйте классы и внешние CSS</li>
          </ul>
        </div>
      </div>

      {/* Совместимость платформ */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Globe className="w-5 h-5 text-green-400" />
          Совместимость с платформами
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Поддержка HTML в Markdown различается в зависимости от платформы:
          </p>
        </div>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-gray-900/50 p-4 rounded-xl border border-blue-700/30">
            <h3 className="font-bold text-blue-300 mb-2">Полная поддержка</h3>
            <ul className="list-disc pl-5 space-y-1 text-gray-300 text-sm">
              <li>GitHub (с ограничениями)</li>
              <li>GitLab</li>
              <li>VS Code Preview</li>
              <li>Typora</li>
            </ul>
          </div>
          <div className="bg-gray-900/50 p-4 rounded-xl border border-yellow-700/30">
            <h3 className="font-bold text-yellow-300 mb-2">Частичная поддержка</h3>
            <ul className="list-disc pl-5 space-y-1 text-gray-300 text-sm">
              <li>Obsidian</li>
              <li>Notion (ограниченно)</li>
              <li>Dillinger</li>
              <li>Некоторые CMS</li>
            </ul>
          </div>
          <div className="bg-gray-900/50 p-4 rounded-xl border border-red-700/30">
            <h3 className="font-bold text-red-300 mb-2">Ограниченная поддержка</h3>
            <ul className="list-disc pl-5 space-y-1 text-gray-300 text-sm">
              <li>Базовые редакторы</li>
              <li>Некоторые почтовые клиенты</li>
              <li>Упрощенные просмотрщики</li>
            </ul>
          </div>
        </div>

        <div className="mt-6 bg-red-900/20 border border-red-700/30 rounded-lg p-4">
          <h4 className="font-bold text-red-300 mb-2 flex items-center gap-2">
            <span className="bg-red-500/20 w-6 h-6 rounded-full flex items-center justify-center text-sm">!</span>
            Рекомендация:
          </h4>
          <p className="text-gray-300 text-sm">
            Всегда тестируйте документ в целевой платформе перед публикацией, особенно если вы используете HTML-теги.
          </p>
        </div>
      </div>

      {/* Заключение */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <div className="flex items-start gap-3">
          <div className="bg-green-500/20 p-2 rounded-lg flex-shrink-0">
            <Code className="w-5 h-5 text-green-400" />
          </div>
          <div>
            <h3 className="font-bold text-white mb-2">Поздравляем! 🎉</h3>
            <p className="text-gray-300">
              Теперь вы знаете, как использовать HTML внутри Markdown для расширения возможностей форматирования. 
              Вы научились встраивать медиа, создавать стилизованный контент и использовать специфичные HTML-элементы. 
              Помните, что HTML снижает переносимость документа, поэтому используйте его с умом. 
              В следующем уроке мы рассмотрим расширенные возможности Markdown и его расширения.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Part1;
