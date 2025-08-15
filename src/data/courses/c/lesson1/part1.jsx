// src/data/courses/c/lesson1/part1.jsx
import React from 'react';
import { Cpu, Code, Server, Zap, Terminal } from 'lucide-react';

const Part1 = () => {
  return (
    <div className="space-y-8 text-gray-200">
      {/* Вступление */}
      <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 backdrop-blur-sm border border-blue-700/30 rounded-2xl p-6 shadow-lg">
        <div className="flex items-start gap-4">
          <div className="bg-blue-500/20 p-3 rounded-lg">
            <Cpu className="w-6 h-6 text-blue-400" />
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">💻 Урок 1: Что такое C и почему он — основа всего?</h1>
            <h2 className="text-xl font-semibold text-blue-300 mb-3">Язык, который управляет миром</h2>
            <p className="text-gray-300">
              <span className="font-medium text-yellow-400">🎯 Цель урока:</span> Понять, что такое язык программирования C, почему он важен и где используется.
            </p>
          </div>
        </div>
      </div>

      {/* Что такое C? */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Code className="w-5 h-5 text-green-400" />
          Что такое C?
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            <span className="font-medium text-green-300">C</span> — это мощный и компактный язык программирования, созданный в начале <span className="font-medium">1970-х годов</span> Деннисом Ритчи в Bell Labs.
          </p>
          <p>
            Он был разработан для написания операционных систем, и именно на нём была написана <span className="font-medium">UNIX</span> — предок большинства современных ОС, включая <span className="font-medium">Linux</span> и <span className="font-medium">macOS</span>.
          </p>
          <p>
            C — это <span className="font-medium">системный язык программирования</span>, который даёт программисту полный контроль над ресурсами компьютера: памятью, процессором, устройствами ввода-вывода.
          </p>
          <div className="mt-4 p-3 bg-blue-900/20 border border-blue-700/30 rounded-lg flex items-start gap-2">
            <Zap className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
            <p className="text-blue-300 text-sm">
              <span className="font-medium">💡 В C нет магии</span> — каждая строка — это прямая команда процессору. Изучая C, ты начинаешь понимать, как на самом деле работает компьютер.
            </p>
          </div>
        </div>
      </div>

      {/* Почему C — основа всего? */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Server className="w-5 h-5 text-purple-400" />
          Почему C — основа всего?
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed mb-4">
          <p>
            C — это <span className="font-medium">фундамент</span> современного программирования. Вот почему:
          </p>
        </div>

        <div className="space-y-6 mt-6">
          {/* Операционные системы */}
          <div className="bg-gray-900/50 p-5 rounded-xl border border-green-700/30">
            <div className="flex items-center gap-3 mb-3">
              <Server className="w-5 h-5 text-green-400" />
              <h3 className="text-lg font-bold text-green-300">1. Операционные системы</h3>
            </div>
            <p className="text-gray-300 mb-3">
              ОС Linux, ядро которой написано почти полностью на C, — это основа миллионов серверов, смартфонов (Android), встраиваемых систем и даже суперкомпьютеров.
            </p>
            <div className="mt-3 p-2 bg-green-900/20 border border-green-700/30 rounded text-green-300 text-xs">
              ✅ <span className="font-medium">Пример:</span> Ядро Linux — это более 27 миллионов строк кода на C.
            </div>
          </div>

          {/* Драйверы и микроконтроллеры */}
          <div className="bg-gray-900/50 p-5 rounded-xl border border-blue-700/30">
            <div className="flex items-center gap-3 mb-3">
              <Terminal className="w-5 h-5 text-blue-400" />
              <h3 className="text-lg font-bold text-blue-300">2. Драйверы и микроконтроллеры</h3>
            </div>
            <p className="text-gray-300 mb-3">
              Устройства, такие как видеокарты, принтеры, Wi-Fi-модули, работают благодаря драйверам, написанным на C. Также C активно используется в IoT и микроконтроллерах.
            </p>
            <div className="mt-3 p-2 bg-blue-900/20 border border-blue-700/30 rounded text-blue-300 text-xs">
              ⚙️ <span className="font-medium">Пример:</span> Arduino, ESP32 и другие платформы используют C/C++.
            </div>
          </div>

          {/* Другие языки программирования */}
          <div className="bg-gray-900/50 p-5 rounded-xl border border-red-700/30">
            <div className="flex items-center gap-3 mb-3">
              <Code className="w-5 h-5 text-red-400" />
              <h3 className="text-lg font-bold text-red-300">3. Основа других языков</h3>
            </div>
            <p className="text-gray-300 mb-3">
              Интерпретаторы и виртуальные машины многих языков (Python, PHP, JavaScript/V8) написаны на C. То есть, когда ты запускаешь Python-скрипт — ты используешь код, написанный на C!
            </p>
            <div className="mt-3 p-2 bg-red-900/20 border border-red-700/30 rounded text-red-300 text-xs">
              🔥 <span className="font-medium">Факт:</span> Python написан на C (CPython), а JavaScript в браузерах — на C++.
            </div>
          </div>
        </div>

        <div className="mt-6 p-4 bg-gray-900/50 rounded-lg border border-yellow-700/30">
          <h4 className="font-bold text-white mb-2 flex items-center gap-2">
            <Zap className="w-5 h-5 text-yellow-400" />
            Совет от профи
          </h4>
          <p className="text-gray-300 text-sm">
            <span className="font-medium text-yellow-300">Изучение C — это не про "быстрое создание сайта"</span>. Это про понимание, как работает память, процессор, ОС. Это делает тебя <span className="font-medium">настоящим инженером</span>.
          </p>
        </div>
      </div>

      {/* Заключение */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <div className="flex items-start gap-3">
          <div className="bg-green-500/20 p-2 rounded-lg flex-shrink-0">
            <Cpu className="w-5 h-5 text-green-400" />
          </div>
          <div>
            <h3 className="font-bold text-white mb-2">Отлично! 💡</h3>
            <p className="text-gray-300">
              Теперь ты знаешь, что такое язык C и почему он до сих пор важен. Ты увидел, как C используется в операционных системах, устройствах и даже других языках программирования.
              В следующем уроке мы установим компилятор и напишем свою первую программу на C.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Part1;