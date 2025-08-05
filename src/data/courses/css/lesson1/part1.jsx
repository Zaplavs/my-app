// src/data/courses/css/lesson1/part1.jsx
import React from 'react';
import { Palette, FileText, Code, Monitor, Zap } from 'lucide-react';

const Part1 = () => {
  return (
    <div className="space-y-8 text-gray-200">
      {/* Вступление */}
      <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 backdrop-blur-sm border border-blue-700/30 rounded-2xl p-6 shadow-lg">
        <div className="flex items-start gap-4">
          <div className="bg-blue-500/20 p-3 rounded-lg">
            <Palette className="w-6 h-6 text-blue-400" />
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">🎨 Урок 1: Что такое CSS и как его подключить?</h1>
            <h2 className="text-xl font-semibold text-blue-300 mb-3">Основы каскадных таблиц стилей</h2>
            <p className="text-gray-300">
              <span className="font-medium text-yellow-400">🎯 Цель урока:</span> Понять, что такое CSS, зачем он нужен и как правильно подключить стили к HTML-документу.
            </p>
          </div>
        </div>
      </div>

      {/* Что такое CSS? */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Palette className="w-5 h-5 text-green-400" />
          Что такое CSS?
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            <span className="font-medium text-green-300">CSS (Cascading Style Sheets)</span> — это язык таблиц стилей, который отвечает за <span className="font-medium">внешний вид</span> веб-страницы.
          </p>
          <p>
            Если представить HTML как каркас дома, то CSS — это его <span className="font-medium">дизайн интерьера и экстерьера</span>. Именно CSS определяет:
          </p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>Цвета текста и фона</li>
            <li>Шрифты и их размеры</li>
            <li>Отступы и размеры элементов</li>
            <li>Позиционирование блоков</li>
            <li>Анимации и переходы</li>
          </ul>
          <div className="mt-4 p-3 bg-blue-900/20 border border-blue-700/30 rounded-lg flex items-start gap-2">
            <Zap className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
            <p className="text-blue-300 text-sm">
              <span className="font-medium">💡 Без CSS</span> сайт выглядит как сухой, неформатированный текст. <span className="font-medium">С CSS</span> — как современный, красивый дизайн.
            </p>
          </div>
        </div>
      </div>

      {/* Как подключить CSS? */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <FileText className="w-5 h-5 text-purple-400" />
          Способы подключения CSS
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed mb-4">
          <p>
            Есть <span className="font-medium">три основных способа</span> подключить CSS к вашей HTML-странице:
          </p>
        </div>

        <div className="space-y-6 mt-6">
          {/* Внешний файл */}
          <div className="bg-gray-900/50 p-5 rounded-xl border border-green-700/30">
            <div className="flex items-center gap-3 mb-3">
              <FileText className="w-5 h-5 text-green-400" />
              <h3 className="text-lg font-bold text-green-300">1. Внешний файл стилей (Внешний CSS)</h3>
              <span className="text-xs bg-green-900/30 text-green-300 px-2 py-1 rounded">Рекомендуется</span>
            </div>
            <p className="text-gray-300 mb-3">
              Создается отдельный файл с расширением <code className="bg-gray-700 px-1.5 py-0.5 rounded">.css</code> (например, <code className="bg-gray-700 px-1.5 py-0.5 rounded">styles.css</code>), в котором пишутся все стили. Затем он подключается к HTML-документу с помощью тега <code className="bg-gray-700 px-1.5 py-0.5 rounded">{'<link>'}</code> внутри <code className="bg-gray-700 px-1.5 py-0.5 rounded">{'<head>'}</code>.
            </p>
            <div className="bg-gray-800 p-3 rounded text-sm">
              <p className="font-medium text-white mb-1">HTML (index.html):</p>
              <pre className="whitespace-pre-wrap text-gray-300"><code>{`<head>
  <link rel="stylesheet" href="styles.css">
</head>`}</code></pre>
              <p className="font-medium text-white mt-3 mb-1">CSS (styles.css):</p>
              <pre className="whitespace-pre-wrap text-gray-300"><code>{`body {
  background-color: #f0f0f0;
  font-family: Arial, sans-serif;
}`}</code></pre>
            </div>
            <div className="mt-3 p-2 bg-green-900/20 border border-green-700/30 rounded text-green-300 text-xs">
              ✅ <span className="font-medium">Плюсы:</span> Разделение логики и стиля, переиспользуемость, удобство поддержки.
            </div>
          </div>

          {/* Внутренний стиль */}
          <div className="bg-gray-900/50 p-5 rounded-xl border border-blue-700/30">
            <div className="flex items-center gap-3 mb-3">
              <Code className="w-5 h-5 text-blue-400" />
              <h3 className="text-lg font-bold text-blue-300">2. Внутренние стили (Internal CSS)</h3>
            </div>
            <p className="text-gray-300 mb-3">
              Стили определяются внутри тега <code className="bg-gray-700 px-1.5 py-0.5 rounded">{'<style>'}</code>, который помещается в секцию <code className="bg-gray-700 px-1.5 py-0.5 rounded">{'<head>'}</code> HTML-документа.
            </p>
            <div className="bg-gray-800 p-3 rounded text-sm">
              <p className="font-medium text-white mb-1">HTML (index.html):</p>
              <pre className="whitespace-pre-wrap text-gray-300"><code>{`<head>
  <style>
    body {
      background-color: #f0f0f0;
      font-family: Arial, sans-serif;
    }
  </style>
</head>`}</code></pre>
            </div>
            <div className="mt-3 p-2 bg-blue-900/20 border border-blue-700/30 rounded text-blue-300 text-xs">
              ⚠️ <span className="font-medium">Когда использовать:</span> Для стилей, уникальных для одной страницы. Не рекомендуется для больших проектов.
            </div>
          </div>

          {/* Инлайн стиль */}
          <div className="bg-gray-900/50 p-5 rounded-xl border border-red-700/30">
            <div className="flex items-center gap-3 mb-3">
              <Monitor className="w-5 h-5 text-red-400" />
              <h3 className="text-lg font-bold text-red-300">3. Встроенные стили (Inline CSS)</h3>
            </div>
            <p className="text-gray-300 mb-3">
              Стили применяются непосредственно к конкретному HTML-элементу с помощью атрибута <code className="bg-gray-700 px-1.5 py-0.5 rounded">style</code>.
            </p>
            <div className="bg-gray-800 p-3 rounded text-sm">
              <p className="font-medium text-white mb-1">HTML:</p>
              <pre className="whitespace-pre-wrap text-gray-300"><code>{`<p style="color: blue; font-size: 18px;">Этот текст синий и крупный.</p>`}</code></pre>
            </div>
            <div className="mt-3 p-2 bg-red-900/20 border border-red-700/30 rounded text-red-300 text-xs">
              ❌ <span className="font-medium">Минусы:</span> Нарушает принцип разделения, трудно поддерживать, низкий приоритет. Используйте только в крайних случаях.
            </div>
          </div>
        </div>

        <div className="mt-6 p-4 bg-gray-900/50 rounded-lg border border-yellow-700/30">
          <h4 className="font-bold text-white mb-2 flex items-center gap-2">
            <Zap className="w-5 h-5 text-yellow-400" />
            Совет от профи
          </h4>
          <p className="text-gray-300 text-sm">
            <span className="font-medium text-yellow-300">Всегда используйте внешний файл стилей (<code className="bg-gray-700 px-1.5 py-0.5 rounded">.css</code>)</span>. Это делает код чище, проще в управлении и позволяет переиспользовать стили на разных страницах.
          </p>
        </div>
      </div>

      {/* Заключение */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <div className="flex items-start gap-3">
          <div className="bg-green-500/20 p-2 rounded-lg flex-shrink-0">
            <Palette className="w-5 h-5 text-green-400" />
          </div>
          <div>
            <h3 className="font-bold text-white mb-2">Отлично! 🎨</h3>
            <p className="text-gray-300">
              Теперь вы знаете, что такое CSS и как его подключать. Вы изучили три способа подключения стилей и поняли, почему внешний файл — это лучший выбор.
              В следующем уроке мы погрузимся в синтаксис CSS и научимся писать свои первые правила стилей.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Part1;