// src/data/courses/go/lesson1/part1.jsx
import React from 'react';
import { Code, Zap, Cpu, Server, Users, GitBranch, BookOpen, Globe } from 'lucide-react';

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
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">🚀 Урок 1: Что такое Go и зачем его учить?</h1>
            <h2 className="text-xl font-semibold text-blue-300 mb-3">История, применение и преимущества языка Go</h2>
            <p className="text-gray-300">
              <span className="font-medium text-yellow-400">🎯 Цель урока:</span> Понять, что такое язык программирования Go, его историю, области применения и основные преимущества. Узнать, почему Go стал популярным выбором для современной разработки.
            </p>
          </div>
        </div>
      </div>

      {/* Что такое Go? */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Code className="w-5 h-5 text-green-400" />
          Что такое Go (Golang)?
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            <span className="font-medium text-green-300">Go</span> (часто называемый <span className="font-medium text-green-300">Golang</span> по адресу его домашней страницы <code className="bg-gray-700 px-1.5 py-0.5 rounded">golang.org</code>) — это <span className="font-medium">компилируемый</span>, <span className="font-medium">статически типизированный</span> язык программирования с <span className="font-medium">автоматической сборкой мусора</span> и встроенной поддержкой <span className="font-medium">конкурентности</span>.
          </p>
          <p>
            Go был создан с целью быть простым, эффективным и надежным языком для разработки современных, высокопроизводительных программ. Он сочетает в себе удобство динамических языков (например, Python) с производительностью компилируемых языков (например, C++).
          </p>
        </div>
      </div>

      {/* История создания */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <BookOpen className="w-5 h-5 text-purple-400" />
          История создания Go
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed mb-4">
          <p>
            Go был разработан в 2007 году в компании <span className="font-medium text-blue-300">Google</span> инженерами <span className="font-medium">Робом Пайком</span>, <span className="font-medium">Робертом Гризмером</span> и <span className="font-medium">Кеном Томпсоном</span> — легендарными программистами, стоявшими у истоков Unix и C.
          </p>
        </div>

        <div className="mt-6 p-4 bg-gray-900/50 rounded-lg border border-gray-700">
          <h4 className="font-bold text-white mb-2 flex items-center gap-2">
            <GitBranch className="w-4 h-4 text-purple-400" />
            Причины создания Go:
          </h4>
          <ul className="list-disc pl-5 space-y-2 text-gray-300 text-sm">
            <li>Сложность и медлительность компиляции крупных C++ проектов в Google.</li>
            <li>Необходимость в языке, который бы хорошо масштабировался для больших команд.</li>
            <li>Желание избежать чрезмерной сложности современных языков (C++, Java).</li>
            <li>Потребность в встроенной поддержке сетевых и многопоточных операций.</li>
          </ul>
          <p className="mt-3 text-sm">
            Go был официально представлен в 2009 году как <span className="font-medium">open-source</span> проект. Его философия — <span className="italic">"Keep it simple, stupid"</span> (KISS) — делает его привлекательным как для новичков, так и для опытных разработчиков.
          </p>
        </div>
      </div>

      {/* Где используется Go? */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Server className="w-5 h-5 text-orange-400" />
          Где используется Go?
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed mb-4">
          <p>
            Благодаря своей производительности, простоте и мощной поддержке конкурентности, Go нашел применение во многих областях:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <div className="bg-gray-900/50 p-5 rounded-xl border border-purple-700/30">
            <div className="flex items-center gap-3 mb-3">
              <Server className="w-6 h-6 text-purple-400" />
              <h3 className="text-lg font-bold text-purple-300">Веб-сервера и API</h3>
            </div>
            <ul className="list-disc pl-5 space-y-2 text-gray-300">
              <li>Go отлично подходит для создания высоконагруженных веб-серверов.</li>
              <li>Простая стандартная библиотека для работы с HTTP.</li>
              <li>Примеры: <span className="font-medium">Docker</span>, <span className="font-medium">Traefik</span>.</li>
            </ul>
          </div>

          <div className="bg-gray-900/50 p-5 rounded-xl border border-blue-700/30">
            <div className="flex items-center gap-3 mb-3">
              <Cpu className="w-6 h-6 text-blue-400" />
              <h3 className="text-lg font-bold text-blue-300">Микросервисы</h3>
            </div>
            <ul className="list-disc pl-5 space-y-2 text-gray-300">
              <li>Маленький размер бинарных файлов и быстрый старт.</li>
              <li>Отлично сочетается с контейнерами (Docker).</li>
              <li>Примеры: Многие внутренние сервисы в <span className="font-medium">Google</span>, <span className="font-medium">Uber</span>.</li>
            </ul>
          </div>

          <div className="bg-gray-900/50 p-5 rounded-xl border border-green-700/30">
            <div className="flex items-center gap-3 mb-3">
              <Users className="w-6 h-6 text-green-400" />
              <h3 className="text-lg font-bold text-green-300">DevOps и облачные инструменты</h3>
            </div>
            <ul className="list-disc pl-5 space-y-2 text-gray-300">
              <li>Go стал стандартом для написания инструментов DevOps.</li>
              <li>Простое развертывание (один бинарный файл).</li>
              <li>Примеры: <span className="font-medium">Kubernetes</span>, <span className="font-medium">Terraform</span>, <span className="font-medium">Prometheus</span>.</li>
            </ul>
          </div>

          <div className="bg-gray-900/50 p-5 rounded-xl border border-yellow-700/30">
            <div className="flex items-center gap-3 mb-3">
              <Zap className="w-6 h-6 text-yellow-400" />
              <h3 className="text-lg font-bold text-yellow-300">Другие области</h3>
            </div>
            <ul className="list-disc pl-5 space-y-2 text-gray-300">
              <li>Сетевые инструменты и прокси.</li>
              <li>CLI (Command Line Interface) приложения.</li>
              <li>Блокчейн и криптовалюты (например, часть проектов Ethereum).</li>
              <li>Веб-ассемблер (WebAssembly) для высокопроизводительных веб-приложений.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Преимущества Go */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Zap className="w-5 h-5 text-yellow-400" />
          Преимущества Go
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Go обладает рядом уникальных преимуществ, делающих его привлекательным для разработчиков и компаний:
          </p>
        </div>
        <ol className="list-decimal pl-6 space-y-3 mt-4 text-gray-300">
          <li>
            <span className="font-medium text-green-300">Простота:</span> Чистый и понятный синтаксис. Малое количество ключевых слов. Легко читается и изучается.
          </li>
          <li>
            <span className="font-medium text-blue-300">Скорость:</span> Компилируется в быстрые машинные коды. Высокая производительность приложения.
          </li>
          <li>
            <span className="font-medium text-purple-300">Конкурентность:</span> Встроенные <span className="font-mono">горутины</span> и <span className="font-mono">каналы</span> делают написание многопоточных программ простым и безопасным.
          </li>
          <li>
            <span className="font-medium text-orange-300">Статическая типизация:</span> Помогает избежать многих ошибок на этапе компиляции, делая код более надежным.
          </li>
          <li>
            <span className="font-medium text-yellow-300">Быстрая компиляция:</span> Проекты на Go компилируются очень быстро, что ускоряет процесс разработки.
          </li>
          <li>
            <span className="font-medium text-cyan-300">Стандартная библиотека:</span> Богатая и хорошо документированная стандартная библиотека, охватывающая множество задач.
          </li>
          <li>
            <span className="font-medium text-pink-300">Кроссплатформенность:</span> Простая компиляция под разные операционные системы и архитектуры.
          </li>
          <li>
            <span className="font-medium text-red-300">Управление зависимостями:</span> Встроенный модульный менеджер (<code className="bg-gray-700 px-1.5 py-0.5 rounded">Go Modules</code>) с 1.11+.
          </li>
        </ol>
      </div>

      {/* Сравнение с другими языками */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Globe className="w-5 h-5 text-pink-400" />
          Сравнение Go с другими языками
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Go был создан как альтернатива другим популярным языкам, сочетая лучшие их черты и избегая недостатков:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <div className="bg-gray-900/50 p-5 rounded-xl border border-blue-700/30">
            <h3 className="text-lg font-bold text-blue-300 mb-3">Go vs Java</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-300 text-sm">
              <li><span className="font-medium text-green-300">Go:</span> Проще, быстрее компилируется, меньше boilerplate кода, эффективнее по памяти.</li>
              <li><span className="font-medium text-orange-300">Java:</span> Богаче экосистема, ООП, виртуальная машина (JVM).</li>
              <li className="font-medium">Go выбирают, когда важны скорость и простота. Java — для сложных enterprise-приложений.</li>
            </ul>
          </div>

          <div className="bg-gray-900/50 p-5 rounded-xl border border-purple-700/30">
            <h3 className="text-lg font-bold text-purple-300 mb-3">Go vs Python</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-300 text-sm">
              <li><span className="font-medium text-green-300">Go:</span> Компилируемый, статическая типизация, намного быстрее выполнение.</li>
              <li><span className="font-medium text-orange-300">Python:</span> Интерпретируемый, динамическая типизация, богатая экосистема для DS/ML.</li>
              <li className="font-medium">Go выбирают для высоконагруженных backend-сервисов. Python — для скриптов, анализа данных, быстрой разработки.</li>
            </ul>
          </div>

          <div className="bg-gray-900/50 p-5 rounded-xl border border-yellow-700/30">
            <h3 className="text-lg font-bold text-yellow-300 mb-3">Go vs Node.js (JavaScript)</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-300 text-sm">
              <li><span className="font-medium text-green-300">Go:</span> Настоящая многопоточность, статическая типизация, компиляция.</li>
              <li><span className="font-medium text-orange-300">Node.js:</span> Единый язык (JS) для фронтенда и бэкенда, огромная npm-экосистема.</li>
              <li className="font-medium">Go часто превосходит Node.js в CPU-интенсивных задачах и долгоживущих соединениях. Node.js — для I/O-интенсивных приложений и full-stack JS.</li>
            </ul>
          </div>

          <div className="bg-gray-900/50 p-5 rounded-xl border border-red-700/30">
            <h3 className="text-lg font-bold text-red-300 mb-3">Go vs C/C++</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-300 text-sm">
              <li><span className="font-medium text-green-300">Go:</span> Автоматическая сборка мусора, более безопасная работа с памятью, проще в изучении.</li>
              <li><span className="font-medium text-orange-300">C/C++:</span> Максимальный контроль над памятью и производительностью, низкоуровневое программирование.</li>
              <li className="font-medium">Go выбирают для сетевых сервисов, где нужна производительность, но не критичен абсолютный контроль памяти. C/C++ — для системного ПО, игр, embedded.</li>
            </ul>
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
              Теперь вы знаете, что такое Go, его историю, основные преимущества и где он применяется. Вы увидели, как он сравнивается с другими популярными языками программирования.
              Это прочный фундамент для дальнейшего изучения. В следующем уроке мы начнем знакомство с синтаксисом Go, установкой среды разработки и написанием первой программы "Hello, World!".
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Part1;