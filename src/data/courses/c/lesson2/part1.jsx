// src/data/courses/c/lesson2/part1.jsx
import React from 'react';
import { Download, Terminal, Settings, Zap, CheckCircle, AlertTriangle } from 'lucide-react';

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
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">🔧 Урок 2: Установка среды разработки и первый компилятор</h1>
            <h2 className="text-xl font-semibold text-blue-300 mb-3">Готовим инструменты для программирования на C</h2>
            <p className="text-gray-300">
              <span className="font-medium text-yellow-400">🎯 Цель урока:</span> Установить компилятор GCC и научиться запускать первую программу на C.
            </p>
          </div>
        </div>
      </div>

      {/* Что такое компилятор? */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Settings className="w-5 h-5 text-green-400" />
          Что такое компилятор?
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            <span className="font-medium text-green-300">Компилятор</span> — это специальная программа, которая переводит код, написанный на языке программирования (в нашем случае C), в <span className="font-medium">машинный код</span>, который понимает компьютер.
          </p>
          <div className="mt-4 p-3 bg-blue-900/20 border border-blue-700/30 rounded-lg flex items-start gap-2">
            <Zap className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
            <p className="text-blue-300 text-sm">
              <span className="font-medium">💡 Представьте:</span> Вы говорите на русском (C-код), а компьютер понимает только двоичный язык (0 и 1). Компилятор — это переводчик между ними.
            </p>
          </div>
          <p className="mt-4">
            Без компилятора вы не сможете запустить ни одной программы на C. Поэтому первый шаг — установить его.
          </p>
        </div>
      </div>

      {/* Что такое GCC? */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Terminal className="w-5 h-5 text-purple-400" />
          Что такое GCC?
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            <span className="font-medium text-purple-300">GCC (GNU Compiler Collection)</span> — это самый популярный и надежный компилятор для языка C. Он бесплатный и открытый.
          </p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>Работает на всех операционных системах</li>
            <li>Поддерживает не только C, но и C++, Objective-C, Fortran и другие языки</li>
            <li>Используется миллионами программистов по всему миру</li>
            <li>Стандарт де-факто для разработки на C</li>
          </ul>
          <div className="mt-4 p-3 bg-gray-900/50 border border-gray-700/30 rounded-lg">
            <p className="text-gray-300 text-sm">
              <span className="font-medium text-yellow-300">📌 Факт:</span> Ядро Linux компилируется именно с помощью GCC.
            </p>
          </div>
        </div>
      </div>

      {/* Установка GCC */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Download className="w-5 h-5 text-blue-400" />
          Как установить GCC?
        </h2>
        
        {/* Для Linux */}
        <div className="mb-6">
          <h3 className="flex items-center gap-2 text-lg font-bold text-green-300 mb-3">
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            Linux (Ubuntu/Debian)
          </h3>
          <div className="bg-gray-900 p-4 rounded-lg">
            <p className="text-gray-300 mb-2">Откройте терминал и выполните команду:</p>
            <pre className="bg-black p-3 rounded text-green-300 text-sm overflow-x-auto">
              <code>sudo apt update && sudo apt install build-essential</code>
            </pre>
            <div className="mt-3 text-sm text-gray-400">
              <p><span className="text-yellow-400">💡 Объяснение команд:</span></p>
              <p><code className="text-gray-300">sudo</code> — выполнить от имени администратора</p>
              <p><code className="text-gray-300">apt update</code> — обновить список доступных программ</p>
              <p><code className="text-gray-300">apt install build-essential</code> — установить пакет с компилятором GCC</p>
            </div>
          </div>
        </div>

        {/* Для Windows */}
        <div className="mb-6">
          <h3 className="flex items-center gap-2 text-lg font-bold text-blue-300 mb-3">
            <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
            Windows
          </h3>
          <div className="space-y-4">
            <div className="bg-gray-900 p-4 rounded-lg">
              <p className="text-gray-300 mb-2 font-medium">Вариант 1: Установка MinGW</p>
              <ol className="list-decimal pl-5 space-y-2 text-sm text-gray-300">
                <li>Скачайте MinGW с официального сайта: <span className="text-blue-300">mingw-w64.org</span></li>
                <li>Запустите установщик и следуйте инструкциям</li>
                <li>Добавьте путь к MinGW в переменные среды (PATH)</li>
              </ol>
            </div>
            <div className="bg-gray-900 p-4 rounded-lg">
              <p className="text-gray-300 mb-2 font-medium">Вариант 2: Использование WSL (рекомендуется)</p>
              <ol className="list-decimal pl-5 space-y-2 text-sm text-gray-300">
                <li>Откройте PowerShell от имени администратора</li>
                <li>Выполните команду: <code className="bg-black px-2 py-1 rounded">wsl --install</code></li>
                <li>Перезагрузите компьютер</li>
                <li>Установите Ubuntu из Microsoft Store</li>
                <li>Следуйте инструкции для Linux выше</li>
              </ol>
            </div>
          </div>
        </div>

        {/* Для macOS */}
        <div className="mb-6">
          <h3 className="flex items-center gap-2 text-lg font-bold text-red-300 mb-3">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            macOS
          </h3>
          <div className="bg-gray-900 p-4 rounded-lg">
            <p className="text-gray-300 mb-2">Откройте терминал и выполните команду:</p>
            <pre className="bg-black p-3 rounded text-green-300 text-sm overflow-x-auto">
              <code>xcode-select --install</code>
            </pre>
            <p className="text-gray-400 text-sm mt-2">
              Это установит Command Line Tools, включая компилятор GCC.
            </p>
          </div>
        </div>
      </div>

      {/* Проверка установки */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <CheckCircle className="w-5 h-5 text-green-400" />
          Как проверить, что GCC установлен?
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            После установки откройте терминал (или командную строку в Windows) и введите:
          </p>
          <div className="bg-gray-900 p-4 rounded-lg my-4">
            <pre className="text-green-300 text-sm overflow-x-auto">
              <code>gcc --version</code>
            </pre>
          </div>
          <p>
            Если установка прошла успешно, вы увидите информацию о версии GCC, например:
          </p>
          <div className="bg-black p-4 rounded-lg my-4 text-sm">
            <pre className="text-gray-300">
              <code>gcc (Ubuntu 11.4.0-1ubuntu1~22.04) 11.4.0<br/>Copyright (C) 2021 Free Software Foundation, Inc.</code>
            </pre>
          </div>
          <div className="mt-4 p-3 bg-red-900/20 border border-red-700/30 rounded-lg flex items-start gap-2">
            <AlertTriangle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
            <p className="text-red-300 text-sm">
              <span className="font-medium">⚠️ Если команда не найдена:</span> Установка не завершена или путь к GCC не добавлен в переменные среды. Проверьте установку еще раз.
            </p>
          </div>
        </div>
      </div>

      {/* Заключение */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <div className="flex items-start gap-3">
          <div className="bg-green-500/20 p-2 rounded-lg flex-shrink-0">
            <CheckCircle className="w-5 h-5 text-green-400" />
          </div>
          <div>
            <h3 className="font-bold text-white mb-2">Отлично! 🎉</h3>
            <p className="text-gray-300">
              Теперь у вас установлен компилятор GCC и вы готовы к написанию первой программы на C. 
              В следующем уроке мы создадим и запустим нашу первую программу "Hello, World!".
            </p>
            <div className="mt-3 p-3 bg-blue-900/20 border border-blue-700/30 rounded-lg">
              <p className="text-blue-300 text-sm">
                <span className="font-medium">📌 Следующий шаг:</span> Настройка текстового редактора и первый запуск программы.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Part1;