// src/data/courses/go/lesson2/part1.jsx
import React from 'react';
import { 
  Download, 
  Settings, 
  Play, 
  Package, 
  Terminal, 
  Monitor, 
  Smartphone,
  Cpu,
  HardDrive
} from 'lucide-react';

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
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">💻 Урок 2: Установка Go и первая программа</h1>
            <h2 className="text-xl font-semibold text-blue-300 mb-3">Установка Go на Windows, macOS, Linux. Первая программа "Hello, World!"</h2>
            <p className="text-gray-300">
              <span className="font-medium text-yellow-400">🎯 Цель урока:</span> Установить язык программирования Go на ваш компьютер, настроить рабочее окружение и написать первую программу на Go.
            </p>
          </div>
        </div>
      </div>

      {/* Установка Go */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Download className="w-5 h-5 text-green-400" />
          Установка Go на разные операционные системы
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Перед тем как начать писать программы на Go, необходимо установить его на ваш компьютер. Процесс установки отличается в зависимости от операционной системы.
          </p>
        </div>

        {/* Windows */}
        <div className="mt-6 bg-gray-900/50 p-5 rounded-xl border border-blue-700/30">
          <div className="flex items-center gap-3 mb-3">
            <Monitor className="w-6 h-6 text-blue-400" />
            <h3 className="text-lg font-bold text-blue-300">Установка Go на Windows</h3>
          </div>
          <ol className="list-decimal pl-6 space-y-3 text-gray-300">
            <li>
              Перейдите на официальный сайт Go: <a href="https://golang.org/dl/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">https://golang.org/dl/</a>
            </li>
            <li>
              Скачайте установочный файл для Windows (файл с расширением <code className="bg-gray-700 px-1.5 py-0.5 rounded">.msi</code>)
            </li>
            <li>
              Запустите скачанный файл и следуйте инструкциям установщика
            </li>
            <li>
              По умолчанию Go установится в папку <code className="bg-gray-700 px-1.5 py-0.5 rounded">C:\Program Files\Go</code>
            </li>
            <li>
              Установщик автоматически добавит Go в переменные окружения PATH
            </li>
          </ol>
          <div className="mt-4 p-3 bg-blue-900/20 border border-blue-700/30 rounded-lg">
            <p className="text-blue-300 text-sm flex items-start gap-2">
              <span className="font-medium">💡 Совет:</span>
              <span>
                После установки перезагрузите терминал или командную строку, чтобы изменения вступили в силу.
              </span>
            </p>
          </div>
        </div>

        {/* macOS */}
        <div className="mt-6 bg-gray-900/50 p-5 rounded-xl border border-gray-600/30">
          <div className="flex items-center gap-3 mb-3">
            <Smartphone className="w-6 h-6 text-gray-400" />
            <h3 className="text-lg font-bold text-gray-300">Установка Go на macOS</h3>
          </div>
          <div className="space-y-4">
            <div>
              <h4 className="font-medium text-gray-300 mb-2">Способ 1: Через официальный сайт</h4>
              <ol className="list-decimal pl-6 space-y-3 text-gray-300">
                <li>
                  Перейдите на официальный сайт Go: <a href="https://golang.org/dl/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">https://golang.org/dl/</a>
                </li>
                <li>
                  Скачайте установочный файл для macOS (файл с расширением <code className="bg-gray-700 px-1.5 py-0.5 rounded">.pkg</code>)
                </li>
                <li>
                  Запустите скачанный файл и следуйте инструкциям установщика
                </li>
                <li>
                  По умолчанию Go установится в папку <code className="bg-gray-700 px-1.5 py-0.5 rounded">/usr/local/go</code>
                </li>
              </ol>
            </div>
            <div>
              <h4 className="font-medium text-gray-300 mb-2">Способ 2: Через Homebrew (если установлен)</h4>
              <div className="bg-gray-800 p-3 rounded-lg">
                <code className="text-green-300">brew install go</code>
              </div>
            </div>
          </div>
        </div>

        {/* Linux */}
        <div className="mt-6 bg-gray-900/50 p-5 rounded-xl border border-green-700/30">
          <div className="flex items-center gap-3 mb-3">
            <Cpu className="w-6 h-6 text-green-400" />
            <h3 className="text-lg font-bold text-green-300">Установка Go на Linux</h3>
          </div>
          <div className="space-y-4">
            <div>
              <h4 className="font-medium text-gray-300 mb-2">Способ 1: Через официальный сайт</h4>
              <ol className="list-decimal pl-6 space-y-3 text-gray-300">
                <li>
                  Перейдите на официальный сайт Go: <a href="https://golang.org/dl/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">https://golang.org/dl/</a>
                </li>
                <li>
                  Скачайте архив для Linux (файл с расширением <code className="bg-gray-700 px-1.5 py-0.5 rounded">.tar.gz</code>)
                </li>
                <li>
                  Распакуйте архив в <code className="bg-gray-700 px-1.5 py-0.5 rounded">/usr/local</code>:
                  <div className="bg-gray-800 p-3 rounded-lg mt-2">
                    <code className="text-green-300">sudo tar -C /usr/local -xzf go1.XX.X.linux-amd64.tar.gz</code>
                  </div>
                </li>
                <li>
                  Добавьте путь к Go в переменную PATH. Добавьте в файл <code className="bg-gray-700 px-1.5 py-0.5 rounded">~/.bashrc</code> или <code className="bg-gray-700 px-1.5 py-0.5 rounded">~/.zshrc</code> строку:
                  <div className="bg-gray-800 p-3 rounded-lg mt-2">
                    <code className="text-green-300">export PATH=$PATH:/usr/local/go/bin</code>
                  </div>
                </li>
                <li>
                  Перезагрузите терминал или выполните:
                  <div className="bg-gray-800 p-3 rounded-lg mt-2">
                    <code className="text-green-300">source ~/.bashrc</code>
                  </div>
                </li>
              </ol>
            </div>
            <div>
              <h4 className="font-medium text-gray-300 mb-2">Способ 2: Через пакетный менеджер</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-2">
                <div className="bg-gray-800 p-3 rounded-lg">
                  <span className="text-gray-400">Ubuntu/Debian:</span>
                  <div className="mt-1">
                    <code className="text-green-300">sudo apt install golang-go</code>
                  </div>
                </div>
                <div className="bg-gray-800 p-3 rounded-lg">
                  <span className="text-gray-400">Fedora:</span>
                  <div className="mt-1">
                    <code className="text-green-300">sudo dnf install golang</code>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Проверка установки */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Terminal className="w-5 h-5 text-purple-400" />
          Проверка установки Go
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed mb-4">
          <p>
            После установки необходимо проверить, что Go корректно установлен и доступен в терминале.
          </p>
        </div>

        <div className="mt-6 bg-gray-900/50 p-5 rounded-xl border border-purple-700/30">
          <h3 className="text-lg font-bold text-purple-300 mb-3">Откройте терминал и выполните команды:</h3>
          <div className="space-y-4">
            <div>
              <p className="text-gray-300 mb-2">Проверка версии Go:</p>
              <div className="bg-gray-800 p-4 rounded-lg">
                <code className="text-green-300">go version</code>
              </div>
              <p className="text-gray-400 text-sm mt-2">
                Если установка прошла успешно, вы увидите что-то вроде: <code className="bg-gray-700 px-1.5 py-0.5 rounded">go version go1.21.0 linux/amd64</code>
              </p>
            </div>
            <div>
              <p className="text-gray-300 mb-2">Проверка переменных окружения:</p>
              <div className="bg-gray-800 p-4 rounded-lg">
                <code className="text-green-300">go env</code>
              </div>
              <p className="text-gray-400 text-sm mt-2">
                Эта команда покажет все настройки окружения Go.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Настройка рабочего окружения */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Settings className="w-5 h-5 text-orange-400" />
          Настройка рабочего окружения Go
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Для работы с Go необходимо понимать несколько важных переменных окружения:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <div className="bg-gray-900/50 p-5 rounded-xl border border-blue-700/30">
            <div className="flex items-center gap-3 mb-3">
              <Settings className="w-6 h-6 text-blue-400" />
              <h3 className="text-lg font-bold text-blue-300">GOROOT</h3>
            </div>
            <ul className="list-disc pl-5 space-y-2 text-gray-300">
              <li>Путь к каталогу, где установлен Go</li>
              <li>Обычно устанавливается автоматически</li>
              <li>Примеры:
                <ul className="list-circle pl-5 mt-2 space-y-1">
                  <li>Windows: <code className="bg-gray-700 px-1.5 py-0.5 rounded">C:\Program Files\Go</code></li>
                  <li>macOS/Linux: <code className="bg-gray-700 px-1.5 py-0.5 rounded">/usr/local/go</code></li>
                </ul>
              </li>
            </ul>
          </div>

          <div className="bg-gray-900/50 p-5 rounded-xl border border-green-700/30">
            <div className="flex items-center gap-3 mb-3">
              <Package className="w-6 h-6 text-green-400" />
              <h3 className="text-lg font-bold text-green-300">GOPATH</h3>
            </div>
            <ul className="list-disc pl-5 space-y-2 text-gray-300">
              <li>Рабочая область разработчика</li>
              <li>Содержит исходный код, установленные пакеты и скомпилированные файлы</li>
              <li>По умолчанию: <code className="bg-gray-700 px-1.5 py-0.5 rounded">$HOME/go</code> (в домашней директории)</li>
              <li>Содержит три подкаталога:
                <ul className="list-circle pl-5 mt-2 space-y-1">
                  <li><code className="bg-gray-700 px-1.5 py-0.5 rounded">src</code> - исходный код</li>
                  <li><code className="bg-gray-700 px-1.5 py-0.5 rounded">bin</code> - исполняемые файлы</li>
                  <li><code className="bg-gray-700 px-1.5 py-0.5 rounded">pkg</code> - скомпилированные пакеты</li>
                </ul>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-6 p-4 bg-yellow-900/20 border border-yellow-700/30 rounded-lg">
          <p className="text-yellow-300 flex items-start gap-2">
            <span className="font-medium">⚠️ Важно:</span>
            <span>
              Начиная с Go 1.11, GOPATH стал менее важным благодаря модулям Go (Go Modules). 
              Однако понимание этой концепции полезно для общего развития.
            </span>
          </p>
        </div>
      </div>

      {/* Создание первой программы */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Play className="w-5 h-5 text-pink-400" />
          Создание первой программы на Go
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Теперь, когда Go установлен, давайте создадим и запустим нашу первую программу - классический "Hello, World!".
          </p>
        </div>

        <div className="mt-6 space-y-6">
          <div className="bg-gray-900/50 p-5 rounded-xl border border-pink-700/30">
            <h3 className="text-lg font-bold text-pink-300 mb-3">Шаг 1: Создание рабочей директории</h3>
            <div className="bg-gray-800 p-4 rounded-lg">
              <code className="text-green-300">
                mkdir ~/myproject<br />
                cd ~/myproject
              </code>
            </div>
          </div>

          <div className="bg-gray-900/50 p-5 rounded-xl border border-blue-700/30">
            <h3 className="text-lg font-bold text-blue-300 mb-3">Шаг 2: Инициализация Go модуля</h3>
            <div className="bg-gray-800 p-4 rounded-lg">
              <code className="text-green-300">go mod init myproject</code>
            </div>
            <p className="text-gray-400 text-sm mt-2">
              Эта команда создает файл <code className="bg-gray-700 px-1.5 py-0.5 rounded">go.mod</code>, который управляет зависимостями проекта.
            </p>
          </div>

          <div className="bg-gray-900/50 p-5 rounded-xl border border-green-700/30">
            <h3 className="text-lg font-bold text-green-300 mb-3">Шаг 3: Создание файла программы</h3>
            <p className="text-gray-300 mb-3">
              Создайте файл с именем <code className="bg-gray-700 px-1.5 py-0.5 rounded">main.go</code> и добавьте в него следующий код:
            </p>
            <div className="bg-gray-800 p-4 rounded-lg overflow-x-auto">
              <pre className="text-green-300">
{`package main

import "fmt"

func main() {
    fmt.Println("Hello, World!")
}`}
              </pre>
            </div>
          </div>

          <div className="bg-gray-900/50 p-5 rounded-xl border border-purple-700/30">
            <h3 className="text-lg font-bold text-purple-300 mb-3">Разбор кода</h3>
            <ul className="space-y-3 text-gray-300">
              <li>
                <span className="font-medium text-blue-300">package main</span> - объявляет, что это исполняемая программа (не библиотека)
              </li>
              <li>
                <span className="font-medium text-green-300">import "fmt"</span> - импортирует пакет форматированного ввода-вывода
              </li>
              <li>
                <span className="font-medium text-yellow-300">func main()</span> - точка входа в программу (с этой функции начинается выполнение)
              </li>
              <li>
                <span className="font-medium text-pink-300">fmt.Println(...)</span> - выводит текст в консоль с переходом на новую строку
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Запуск программы */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Play className="w-5 h-5 text-cyan-400" />
          Запуск и компиляция программы
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Go предоставляет два основных способа работы с программами: запуск без создания исполняемого файла и компиляция в исполняемый файл.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <div className="bg-gray-900/50 p-5 rounded-xl border border-blue-700/30">
            <div className="flex items-center gap-3 mb-3">
              <Play className="w-6 h-6 text-blue-400" />
              <h3 className="text-lg font-bold text-blue-300">go run</h3>
            </div>
            <p className="text-gray-300 mb-3">
              Команда <code className="bg-gray-700 px-1.5 py-0.5 rounded">go run</code> компилирует и сразу запускает программу:
            </p>
            <div className="bg-gray-800 p-4 rounded-lg">
              <code className="text-green-300">go run main.go</code>
            </div>
            <p className="text-gray-400 text-sm mt-2">
              Результат: <code className="bg-gray-700 px-1.5 py-0.5 rounded">Hello, World!</code>
            </p>
            <p className="text-gray-400 text-sm mt-3">
              Используется для быстрого тестирования и разработки.
            </p>
          </div>

          <div className="bg-gray-900/50 p-5 rounded-xl border border-green-700/30">
            <div className="flex items-center gap-3 mb-3">
              <Package className="w-6 h-6 text-green-400" />
              <h3 className="text-lg font-bold text-green-300">go build</h3>
            </div>
            <p className="text-gray-300 mb-3">
              Команда <code className="bg-gray-700 px-1.5 py-0.5 rounded">go build</code> компилирует программу в исполняемый файл:
            </p>
            <div className="bg-gray-800 p-4 rounded-lg">
              <code className="text-green-300">go build main.go</code>
            </div>
            <p className="text-gray-300 mt-3">
              После выполнения в текущей директории появится исполняемый файл:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-gray-400 text-sm mt-2">
              <li>Windows: <code className="bg-gray-700 px-1.5 py-0.5 rounded">main.exe</code></li>
              <li>macOS/Linux: <code className="bg-gray-700 px-1.5 py-0.5 rounded">main</code></li>
            </ul>
            <p className="text-gray-300 mt-3">
              Запуск исполняемого файла:
            </p>
            <div className="bg-gray-800 p-4 rounded-lg mt-2">
              <code className="text-green-300">./main</code>
            </div>
          </div>
        </div>

        <div className="mt-6 p-4 bg-blue-900/20 border border-blue-700/30 rounded-lg">
          <p className="text-blue-300 flex items-start gap-2">
            <span className="font-medium">💡 Совет:</span>
            <span>
              Используйте <code className="bg-gray-700 px-1.5 py-0.5 rounded">go run</code> во время разработки для быстрого тестирования, 
              а <code className="bg-gray-700 px-1.5 py-0.5 rounded">go build</code> - когда нужно создать финальный исполняемый файл для распространения.
            </span>
          </p>
        </div>
      </div>

      {/* Заключение */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <div className="flex items-start gap-3">
          <div className="bg-green-500/20 p-2 rounded-lg flex-shrink-0">
            <Play className="w-5 h-5 text-green-400" />
          </div>
          <div>
            <h3 className="font-bold text-white mb-2">Поздравляем! 🎉</h3>
            <p className="text-gray-300">
              Теперь вы знаете, как установить Go на разные операционные системы, настроить рабочее окружение и создать свою первую программу. 
              Вы научились использовать команды <code className="bg-gray-700 px-1.5 py-0.5 rounded">go run</code> и <code className="bg-gray-700 px-1.5 py-0.5 rounded">go build</code> для запуска и компиляции программ.
              В следующем уроке мы подробно разберем структуру программы на Go, пакеты, функции и другие основные концепции языка.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Part1;