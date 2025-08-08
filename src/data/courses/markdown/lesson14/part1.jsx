// src/data/courses/markdown/lesson14/part1.jsx
import React from 'react';
import { FunctionSquare, Sigma, Calculator, BookOpen, FileText } from 'lucide-react';

const Part1 = () => {
  return (
    <div className="space-y-8 text-gray-200">
      {/* Вступление */}
      <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 backdrop-blur-sm border border-blue-700/30 rounded-2xl p-6 shadow-lg">
        <div className="flex items-start gap-4">
          <div className="bg-blue-500/20 p-3 rounded-lg">
            <Sigma className="w-6 h-6 text-blue-400" />
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">𝚺 Урок 14: Математические формулы (LaTeX) в Markdown</h1>
            <h2 className="text-xl font-semibold text-blue-300 mb-3">Вставка математических выражений с помощью LaTeX-синтаксиса</h2>
            <p className="text-gray-300">
              <span className="font-medium text-yellow-400">🎯 Цель урока:</span> Освоить вставку математических формул в Markdown-документы с использованием LaTeX-синтаксиса, понять разницу между инлайновыми и блочными формулами.
            </p>
          </div>
        </div>
      </div>

      {/* Что такое LaTeX в Markdown */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <FunctionSquare className="w-5 h-5 text-green-400" />
          Что такое LaTeX в Markdown?
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            <span className="font-medium text-green-300">LaTeX</span> — это система компьютерной вёрстки, широко используемая для создания научных и математических документов. 
            Хотя Markdown сам по себе не поддерживает математические формулы, многие редакторы и платформы добавляют эту возможность через интеграцию с LaTeX.
          </p>
          <p>
            Это особенно полезно для: научных статей, технической документации, учебных материалов, заметок по математике и физике.
          </p>
        </div>
      </div>

      {/* Синтаксис формул */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Calculator className="w-5 h-5 text-purple-400" />
          Синтаксис математических формул
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            В Markdown для вставки математических формул используются специальные разделители, которые указывают на использование LaTeX:
          </p>
        </div>

        <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-gray-900/50 p-5 rounded-xl border border-blue-700/30">
            <h3 className="font-bold text-blue-300 mb-3">Инлайновые формулы:</h3>
            <div className="grid grid-cols-1 gap-4">
              <div>
                <p className="text-gray-400 text-sm mb-2">Синтаксис:</p>
                <pre className="bg-gray-800 p-3 rounded text-sm text-gray-300"><code>Формула Эйнштейна $ E = mc^2 $ из теории относительности.</code></pre>
              </div>
              <div>
                <p className="text-gray-400 text-sm mb-2">Результат:</p>
                <div className="text-gray-300">
                  Формула Эйнштейна <span className="italic">E = mc²</span> из теории относительности.
                </div>
              </div>
            </div>
            <div className="mt-3 p-3 bg-gray-800/50 rounded text-xs text-gray-400">
              Используются одинарные знаки доллара <code className="bg-gray-700 px-1 py-0.5 rounded">$...$</code>
            </div>
          </div>

          <div className="bg-gray-900/50 p-5 rounded-xl border border-green-700/30">
            <h3 className="font-bold text-green-300 mb-3">Блочные формулы:</h3>
            <div className="grid grid-cols-1 gap-4">
              <div>
                <p className="text-gray-400 text-sm mb-2">Синтаксис:</p>
                <pre className="bg-gray-800 p-3 rounded text-sm text-gray-300"><code>{`Квадратное уравнение:
$$ x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a} $$`}</code></pre>
              </div>
              <div>
                <p className="text-gray-400 text-sm mb-2">Результат:</p>
                <div className="text-gray-300">
                  Квадратное уравнение:
                  <div className="text-center p-4 my-2 bg-gray-800 rounded">
                    <span className="text-lg italic">x = (-b ± √(b² - 4ac)) / 2a</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-3 p-3 bg-gray-800/50 rounded text-xs text-gray-400">
              Используются двойные знаки доллара <code className="bg-gray-700 px-1 py-0.5 rounded">$$...$$</code>
            </div>
          </div>
        </div>
      </div>

      {/* Основные элементы LaTeX */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Sigma className="w-5 h-5 text-cyan-400" />
          Основные элементы LaTeX для формул
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Вот основные конструкции LaTeX, которые часто используются в математических формулах:
          </p>
        </div>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-900/50 p-4 rounded-xl border border-cyan-700/30">
            <h3 className="font-bold text-cyan-300 mb-3">Индексы и степени:</h3>
            <pre className="bg-gray-800 p-3 rounded text-sm text-gray-300 mb-2"><code>{`$ x^2 $ - квадрат
$ y_1 $ - нижний индекс
$ x^{2y} $ - сложная степень
$ z_{i+1} $ - сложный индекс`}</code></pre>
            <div className="text-gray-300 text-sm">
              Результат: <span className="italic">x²</span>, <span className="italic">y₁</span>, <span className="italic">x²ʸ</span>, <span className="italic">zᵢ₊₁</span>
            </div>
          </div>

          <div className="bg-gray-900/50 p-4 rounded-xl border border-yellow-700/30">
            <h3 className="font-bold text-yellow-300 mb-3">Дроби и корни:</h3>
            <pre className="bg-gray-800 p-3 rounded text-sm text-gray-300 mb-2"><code>{`$ \frac{a}{b} $ - дробь
$ \sqrt{x} $ - квадратный корень
$ \sqrt[3]{x} $ - кубический корень`}</code></pre>
            <div className="text-gray-300 text-sm">
              Результат: <span className="italic">a/b</span>, <span className="italic">√x</span>, <span className="italic">∛x</span>
            </div>
          </div>

          <div className="bg-gray-900/50 p-4 rounded-xl border border-pink-700/30">
            <h3 className="font-bold text-pink-300 mb-3">Греческие буквы:</h3>
            <pre className="bg-gray-800 p-3 rounded text-sm text-gray-300 mb-2"><code>{`$ \alpha $ - альфа
$ \beta $ - бета
$ \pi $ - пи
$ \infty $ - бесконечность`}</code></pre>
            <div className="text-gray-300 text-sm">
              Результат: <span className="italic">α</span>, <span className="italic">β</span>, <span className="italic">π</span>, <span className="italic">∞</span>
            </div>
          </div>

          <div className="bg-gray-900/50 p-4 rounded-xl border border-orange-700/30">
            <h3 className="font-bold text-orange-300 mb-3">Операторы и символы:</h3>
            <pre className="bg-gray-800 p-3 rounded text-sm text-gray-300 mb-2"><code>{`$ \int $ - интеграл
$ \sum $ - сумма
$ \pm $ - плюс-минус
$ \times $ - умножение
$ \neq $ - не равно`}</code></pre>
            <div className="text-gray-300 text-sm">
              Результат: <span className="italic">∫</span>, <span className="italic">∑</span>, <span className="italic">±</span>, <span className="italic">×</span>, <span className="italic">≠</span>
            </div>
          </div>
        </div>
      </div>

      {/* Поддержка платформами */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <BookOpen className="w-5 h-5 text-orange-400" />
          Поддержка LaTeX в различных платформах
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Важно понимать, что не все редакторы Markdown одинаково поддерживают LaTeX-формулы:
          </p>
        </div>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-gray-900/50 p-4 rounded-xl border border-green-700/30">
            <h3 className="font-bold text-green-300 mb-2 flex items-center gap-2">
              <span className="bg-green-500/20 w-6 h-6 rounded-full flex items-center justify-center text-xs">✓</span>
              Полная поддержка
            </h3>
            <ul className="list-disc pl-5 space-y-1 text-gray-300 text-sm">
              <li>Jupyter Notebooks</li>
              <li>Obsidian (с плагинами)</li>
              <li>Typora</li>
              <li>Overleaf</li>
            </ul>
          </div>
          <div className="bg-gray-900/50 p-4 rounded-xl border border-yellow-700/30">
            <h3 className="font-bold text-yellow-300 mb-2 flex items-center gap-2">
              <span className="bg-yellow-500/20 w-6 h-6 rounded-full flex items-center justify-center text-xs">~</span>
              Частичная поддержка
            </h3>
            <ul className="list-disc pl-5 space-y-1 text-gray-300 text-sm">
              <li>GitHub (с расширениями)</li>
              <li>GitLab</li>
              <li>VS Code (с расширениями)</li>
              <li>Notion (ограниченно)</li>
            </ul>
          </div>
          <div className="bg-gray-900/50 p-4 rounded-xl border border-red-700/30">
            <h3 className="font-bold text-red-300 mb-2 flex items-center gap-2">
              <span className="bg-red-500/20 w-6 h-6 rounded-full flex items-center justify-center text-xs">✗</span>
              Нет поддержки
            </h3>
            <ul className="list-disc pl-5 space-y-1 text-gray-300 text-sm">
              <li>Базовые редакторы</li>
              <li>Некоторые CMS</li>
              <li>Почтовые клиенты</li>
            </ul>
          </div>
        </div>

        <div className="mt-6 bg-red-900/20 border border-red-700/30 rounded-lg p-4">
          <h4 className="font-bold text-red-300 mb-2 flex items-center gap-2">
            <span className="bg-red-500/20 w-6 h-6 rounded-full flex items-center justify-center text-sm">!</span>
            Важное замечание:
          </h4>
          <p className="text-gray-300 text-sm">
            Всегда проверяйте отображение формул в вашей целевой платформе. То, что работает в одном редакторе, может не работать в другом.
          </p>
        </div>
      </div>

      {/* Практические примеры */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <FileText className="w-5 h-5 text-pink-400" />
          Практические примеры использования формул
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Вот как можно использовать математические формулы в реальных документах:
          </p>
        </div>

        <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-gray-900/50 p-4 rounded-xl border border-blue-700/30">
            <h3 className="font-bold text-blue-300 mb-3">Научная статья:</h3>
            <pre className="bg-gray-800 p-3 rounded text-sm text-gray-300"><code>{`# Теория относительности

Согласно специальной теории относительности, 
связь между энергией и массой выражается формулой:

$$ E = mc^2 $$

где $ E $ - энергия, $ m $ - масса, 
а $ c $ - скорость света в вакууме.`}</code></pre>
          </div>
          <div className="bg-gray-900/50 p-4 rounded-xl border border-green-700/30">
            <h3 className="font-bold text-green-300 mb-3">Математические заметки:</h3>
            <pre className="bg-gray-800 p-3 rounded text-sm text-gray-300"><code>{`# Производные

Производная функции $ f(x) $ в точке $ x $:

$$ f'(x) = \lim_{h \to 0} \frac{f(x+h) - f(x)}{h} $$

Пример: $ \frac{d}{dx}(x^2) = 2x $`}</code></pre>
          </div>
        </div>

        <div className="mt-6 bg-gray-900/30 p-4 rounded-lg border border-gray-700">
          <h4 className="font-bold text-white mb-2">Советы по использованию:</h4>
          <ul className="list-disc pl-5 space-y-2 text-gray-300 text-sm">
            <li>Используйте блочные формулы для сложных выражений, которые требуют отдельной строки</li>
            <li>Используйте инлайновые формулы для простых выражений внутри текста</li>
            <li>Добавляйте пробелы вокруг формул для лучшей читаемости</li>
            <li>Комментируйте сложные формулы для других читателей</li>
          </ul>
        </div>
      </div>

      {/* Заключение */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <div className="flex items-start gap-3">
          <div className="bg-green-500/20 p-2 rounded-lg flex-shrink-0">
            <Sigma className="w-5 h-5 text-green-400" />
          </div>
          <div>
            <h3 className="font-bold text-white mb-2">Поздравляем! 🎉</h3>
            <p className="text-gray-300">
              Теперь вы знаете, как использовать LaTeX для вставки математических формул в Markdown-документы. 
              Вы научились создавать как инлайновые, так и блочные формулы, использовать основные математические символы. 
              Помните, что поддержка формул зависит от платформы, поэтому всегда проверяйте отображение в вашей целевой системе. 
              В следующем уроке мы рассмотрим дополнительные возможности Markdown и его расширения.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Part1;
