// src/data/courses/markdown/lesson2/part1.jsx
import React from 'react';
// Заменено FileWord на File, так как FileWord может отсутствовать в используемой версии lucide-react
import { File, FileText, Code, GitBranch, Users, Zap, FileCode } from 'lucide-react';

const Part1 = () => {
  return (
    <>
      <div className="space-y-8 text-gray-200">
        {/* Вступление */}
        <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 backdrop-blur-sm border border-blue-700/30 rounded-2xl p-6 shadow-lg">
          <div className="flex items-start gap-4">
            <div className="bg-blue-500/20 p-3 rounded-lg">
              <Zap className="w-6 h-6 text-blue-400" />
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">⚡ Урок 2: Преимущества Markdown перед Word и HTML</h1>
              <h2 className="text-xl font-semibold text-blue-300 mb-3">Почему Markdown стал выбором миллионов разработчиков и писателей</h2>
              <p className="text-gray-300">
                <span className="font-medium text-yellow-400">🎯 Цель урока:</span> Понять ключевые преимущества Markdown по сравнению с Microsoft Word и HTML. Узнать, почему Markdown идеален для документации, заметок и совместной работы.
              </p>
            </div>
          </div>
        </div>
        {/* Основное преимущество Markdown */}
        <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
          <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
            <FileText className="w-5 h-5 text-green-400" />
            Ключевое преимущество Markdown
          </h2>
          <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
            <p>
              <span className="font-medium text-green-300">Markdown</span> — это не просто ещё один способ форматирования текста. Его философия — <span className="font-medium">максимальная простота и читаемость</span>.
            </p>
            <p>
              В отличие от тяжеловесных форматов, Markdown сосредоточен на содержании, а не на оформлении. Это делает его идеальным инструментом для:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li>Написания технической документации</li>
              <li>Ведения заметок и списков дел</li>
              <li>Создания README-файлов в проектах</li>
              <li>Написания блогов и статей</li>
              <li>Совместной работы над текстами</li>
            </ul>
          </div>
        </div>
        {/* Сравнение с Microsoft Word */}
        <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
          {/* Использована иконка File вместо FileWord */}
          <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
            <File className="w-5 h-5 text-blue-400" />
            Преимущества Markdown перед Microsoft Word
          </h2>
          <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
            <p>
              Microsoft Word — мощный текстовый процессор, но для многих задач он избыточен. Вот почему Markdown часто предпочтительнее:
            </p>
          </div>
          <div className="mt-6 space-y-4">
            <div className="bg-gray-900/50 p-4 rounded-xl border border-red-700/30">
              <h3 className="font-bold text-red-300 mb-2 flex items-center gap-2">
                <Users className="w-4 h-4" />
                Проблемы совместимости
              </h3>
              <p className="text-gray-300 text-sm">
                Файлы <code className="bg-gray-700 px-1.5 py-0.5 rounded">.docx</code> могут по-разному отображаться в разных версиях Word или в других редакторах. Markdown — это обычный текст, который одинаково выглядит везде.
              </p>
            </div>
            <div className="bg-gray-900/50 p-4 rounded-xl border border-purple-700/30">
              <h3 className="font-bold text-purple-300 mb-2 flex items-center gap-2">
                <FileCode className="w-4 h-4" />
                Зависимость от редактора
              </h3>
              <p className="text-gray-300 text-sm">
                Для открытия и редактирования Word-документов нужна специальная программа. Markdown можно читать и редактировать в любом текстовом редакторе — от Блокнота до продвинутых IDE.
              </p>
            </div>
            <div className="bg-gray-900/50 p-4 rounded-xl border border-green-700/30">
              <h3 className="font-bold text-green-300 mb-2 flex items-center gap-2">
                <GitBranch className="w-4 h-4" />
                Сложность версионирования
              </h3>
              <p className="text-gray-300 text-sm">
                Системы контроля версий (Git) отлично работают с текстовыми файлами. Изменения в Word-документах сложно отслеживать, так как формат бинарный. Markdown легко интегрируется с Git.
              </p>
            </div>
            <div className="bg-gray-900/50 p-4 rounded-xl border border-yellow-700/30">
              <h3 className="font-bold text-yellow-300 mb-2 flex items-center gap-2">
                <Zap className="w-4 h-4" />
                Скорость и простота
              </h3>
              <p className="text-gray-300 text-sm">
                Markdown не перегружен функциями. Нет необходимости искать нужную кнопку на ленте — достаточно запомнить несколько символов. Это экономит время и снижает когнитивную нагрузку.
              </p>
            </div>
          </div>
        </div>
        {/* Сравнение с HTML */}
        <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
          <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
            <Code className="w-5 h-5 text-orange-400" />
            Преимущества Markdown перед HTML
          </h2>
          <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
            <p>
              HTML — основа Веба, но для написания простых документов он избыточен. Markdown предлагает более удобный способ достижения тех же результатов:
            </p>
          </div>
          <div className="mt-6 space-y-4">
            <div className="bg-gray-900/50 p-4 rounded-xl border border-red-700/30">
              <h3 className="font-bold text-red-300 mb-2 flex items-center gap-2">
                <FileCode className="w-4 h-4" />
                Избыточность синтаксиса
              </h3>
              {/* Исправлена строка: правильно закрыты теги <code> и экранированы символы < > с помощью фигурных скобок и строк */}
              <p className="text-gray-300 text-sm">
                HTML требует закрывающих тегов (<code className="bg-gray-700 px-1.5 py-0.5 rounded">{'</p>'}</code>, <code className="bg-gray-700 px-1.5 py-0.5 rounded">{'</div>'}</code>), что делает текст громоздким. Markdown использует минималистичный синтаксис.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3 text-sm">
                <div>
                  <p className="font-medium text-gray-400 mb-1">HTML:</p>
                  <pre className="bg-gray-800 p-3 rounded overflow-x-auto text-gray-300"><code>{`<h1>Заголовок</h1>
<p>Это <strong>жирный</strong> текст.</p>
<ul>
  <li>Элемент списка</li>
</ul>`}</code></pre>
                </div>
                <div>
                  <p className="font-medium text-gray-400 mb-1">Markdown:</p>
                  <pre className="bg-gray-800 p-3 rounded overflow-x-auto text-gray-300"><code>{`# Заголовок
Это **жирный** текст.
- Элемент списка`}</code></pre>
                </div>
              </div>
            </div>
            <div className="bg-gray-900/50 p-4 rounded-xl border border-purple-700/30">
              <h3 className="font-bold text-purple-300 mb-2 flex items-center gap-2">
                <FileText className="w-4 h-4" />
                Читаемость "сырого" текста
              </h3>
              <p className="text-gray-300 text-sm">
                Даже без рендеринга Markdown легко читать и понимать. HTML-код с множеством тегов сложнее воспринимать визуально.
              </p>
            </div>
            <div className="bg-gray-900/50 p-4 rounded-xl border border-green-700/30">
              <h3 className="font-bold text-green-300 mb-2 flex items-center gap-2">
                <Zap className="w-4 h-4" />
                Скорость написания
              </h3>
              <p className="text-gray-300 text-sm">
                Markdown позволяет сосредоточиться на содержании, а не на тегах. Написание в Markdown в разы быстрее, чем в HTML.
              </p>
            </div>
          </div>
        </div>
        {/* Преимущества для разработки и документации */}
        <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
          <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
            <GitBranch className="w-5 h-5 text-cyan-400" />
            Преимущества для разработки и документации
          </h2>
          <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
            <p>
              Markdown особенно ценен в среде разработки программного обеспечения:
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
            <div className="bg-gray-900/50 p-4 rounded-xl border border-blue-700/30">
              <h3 className="font-bold text-blue-300 mb-2">🔄 Версионирование с Git</h3>
              <p className="text-sm text-gray-300">
                Markdown-файлы отлично работают с системами контроля версий. Легко отслеживать изменения, создавать ветки, объединять правки от разных авторов.
              </p>
            </div>
            <div className="bg-gray-900/50 p-4 rounded-xl border border-green-700/30">
              <h3 className="font-bold text-green-300 mb-2">🚀 CI/CD интеграция</h3>
              <p className="text-sm text-gray-300">
                Многие системы непрерывной интеграции и доставки (CI/CD) могут автоматически конвертировать Markdown в HTML, PDF или другие форматы.
              </p>
            </div>
            <div className="bg-gray-900/50 p-4 rounded-xl border border-purple-700/30">
              <h3 className="font-bold text-purple-300 mb-2">👥 Совместная работа</h3>
              <p className="text-sm text-gray-300">
                Markdown поддерживается всеми основными платформами для совместной работы: GitHub, GitLab, Notion, Obsidian и др.
              </p>
            </div>
            <div className="bg-gray-900/50 p-4 rounded-xl border border-yellow-700/30">
              <h3 className="font-bold text-yellow-300 mb-2">🧼 Чистота и простота</h3>
              <p className="text-sm text-gray-300">
                Markdown-файлы не содержат скрытого форматирования или метаданных, которые могут вызвать проблемы при переносе между системами.
              </p>
            </div>
          </div>
        </div>
        {/* Заключение */}
        <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
          <div className="flex items-start gap-3">
            <div className="bg-green-500/20 p-2 rounded-lg flex-shrink-0">
              <Zap className="w-5 h-5 text-green-400" />
            </div>
            <div>
              <h3 className="font-bold text-white mb-2">Поздравляем! 🎉</h3>
              <p className="text-gray-300">
                Теперь вы понимаете, почему Markdown стал стандартом де-факто для написания документации, заметок и технического контента. Его простота, читаемость и совместимость с современными инструментами разработки делают его незаменимым инструментом.
                В следующем уроке мы рассмотрим расширенные возможности Markdown и его расширения.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Part1;