// src/data/courses/git/lesson18/part1.jsx
import React from 'react';
import { FileText, EyeOff, Settings, Shield, Zap, Code, Lock, Folder } from 'lucide-react';

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
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">🙈 Урок 18: Файл .gitignore</h1>
            <h2 className="text-xl font-semibold text-blue-300 mb-3">Игнорирование файлов и директорий в Git</h2>
            <p className="text-gray-300">
              <span className="font-medium text-yellow-400">🎯 Цель урока:</span> Освоить использование файла .gitignore для исключения ненужных файлов из репозитория.
            </p>
          </div>
        </div>
      </div>

      {/* Зачем нужен .gitignore */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <EyeOff className="w-5 h-5 text-green-400" />
          Зачем нужен .gitignore?
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Файл <span className="font-medium text-green-300">.gitignore</span> — это текстовый файл, который указывает Git, какие файлы и директории следует игнорировать и не отслеживать.
          </p>
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-gray-900/50 p-4 rounded-xl border border-green-700/30">
              <h3 className="font-bold text-green-300 mb-2 flex items-center gap-2">
                <Shield className="w-5 h-5" />
                Основные причины использования
              </h3>
              <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-400 text-sm">
                <li>Исключение конфиденциальных данных (.env, ключи API)</li>
                <li>Не хранить сгенерированные файлы (node_modules, build)</li>
                <li>Избежать конфликтов из-за локальных настроек</li>
                <li>Уменьшить размер репозитория</li>
                <li>Предотвратить случайную публикацию приватной информации</li>
              </ul>
            </div>
            <div className="bg-gray-900/50 p-4 rounded-xl border border-purple-700/30">
              <h3 className="font-bold text-purple-300 mb-2 flex items-center gap-2">
                <Zap className="w-5 h-5" />
                Преимущества .gitignore
              </h3>
              <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-400 text-sm">
                <li>Чище история коммитов</li>
                <li>Быстрее клонирование и pull</li>
                <li>Безопасность данных</li>
                <li>Удобство командной работы</li>
                <li>Соблюдение best practices</li>
              </ul>
            </div>
          </div>
          <div className="mt-4 p-3 bg-blue-900/20 border border-blue-700/30 rounded-lg flex items-start gap-2">
            <Zap className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
            <p className="text-blue-300 text-sm">
              <span className="font-medium">💡 Пример:</span> Без .gitignore в репозиторий попадут все зависимости (node_modules - десятки тысяч файлов), что сделает репозиторий огромным и непрактичным.
            </p>
          </div>
        </div>
      </div>

      {/* Общие примеры файлов для игнорирования */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Lock className="w-5 h-5 text-purple-400" />
          Общие примеры файлов для игнорирования
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed mb-4">
          <p>
            Существуют категории файлов, которые практически всегда должны быть в .gitignore.
          </p>
        </div>

        <div className="space-y-6 mt-6">
          {/* Конфиденциальные данные */}
          <div className="bg-gray-900/50 p-5 rounded-xl border border-red-700/30">
            <div className="flex items-center gap-3 mb-3">
              <Shield className="w-5 h-5 text-red-400" />
              <h3 className="text-lg font-bold text-red-300">1. Конфиденциальные данные</h3>
            </div>
            <p className="text-gray-300 mb-3">
              Файлы, содержащие секретную информацию:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gray-800 p-4 rounded-lg">
                <h4 className="font-bold text-green-300 mb-2">Файлы окружения</h4>
                <ul className="list-disc pl-5 space-y-1 text-gray-300 text-sm">
                  <li><code className="bg-gray-700 px-1.5 py-0.5 rounded">.env</code> - основной файл окружения</li>
                  <li><code className="bg-gray-700 px-1.5 py-0.5 rounded">.env.local</code> - локальные настройки</li>
                  <li><code className="bg-gray-700 px-1.5 py-0.5 rounded">.env.production</code> - продакшен настройки</li>
                  <li><code className="bg-gray-700 px-1.5 py-0.5 rounded">.env.*</code> - все файлы окружения</li>
                </ul>
              </div>
              <div className="bg-gray-800 p-4 rounded-lg">
                <h4 className="font-bold text-blue-300 mb-2">Ключи и сертификаты</h4>
                <ul className="list-disc pl-5 space-y-1 text-gray-300 text-sm">
                  <li><code className="bg-gray-700 px-1.5 py-0.5 rounded">*.key</code> - приватные ключи</li>
                  <li><code className="bg-gray-700 px-1.5 py-0.5 rounded">*.pem</code> - сертификаты</li>
                  <li><code className="bg-gray-700 px-1.5 py-0.5 rounded">id_rsa</code> - SSH ключи</li>
                  <li><code className="bg-gray-700 px-1.5 py-0.5 rounded">config.json</code> - файлы конфигурации с паролями</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Зависимости и библиотеки */}
          <div className="bg-gray-900/50 p-5 rounded-xl border border-blue-700/30">
            <div className="flex items-center gap-3 mb-3">
              <Folder className="w-5 h-5 text-blue-400" />
              <h3 className="text-lg font-bold text-blue-300">2. Зависимости и библиотеки</h3>
            </div>
            <p className="text-gray-300 mb-3">
              Директории с установленными зависимостями:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-gray-800 p-4 rounded-lg">
                <h4 className="font-bold text-green-300 mb-2">Node.js</h4>
                <ul className="list-disc pl-5 space-y-1 text-gray-300 text-sm">
                  <li><code className="bg-gray-700 px-1.5 py-0.5 rounded">node_modules/</code></li>
                  <li><code className="bg-gray-700 px-1.5 py-0.5 rounded">npm-debug.log*</code></li>
                  <li><code className="bg-gray-700 px-1.5 py-0.5 rounded">yarn-debug.log*</code></li>
                </ul>
              </div>
              
              <div className="bg-gray-800 p-4 rounded-lg">
                <h4 className="font-bold text-purple-300 mb-2">Python</h4>
                <ul className="list-disc pl-5 space-y-1 text-gray-300 text-sm">
                  <li><code className="bg-gray-700 px-1.5 py-0.5 rounded">__pycache__/</code></li>
                  <li><code className="bg-gray-700 px-1.5 py-0.5 rounded">*.pyc</code></li>
                  <li><code className="bg-gray-700 px-1.5 py-0.5 rounded">venv/</code></li>
                  <li><code className="bg-gray-700 px-1.5 py-0.5 rounded">.pytest_cache/</code></li>
                </ul>
              </div>
              
              <div className="bg-gray-800 p-4 rounded-lg">
                <h4 className="font-bold text-yellow-300 mb-2">Java</h4>
                <ul className="list-disc pl-5 space-y-1 text-gray-300 text-sm">
                  <li><code className="bg-gray-700 px-1.5 py-0.5 rounded">target/</code></li>
                  <li><code className="bg-gray-700 px-1.5 py-0.5 rounded">.gradle/</code></li>
                  <li><code className="bg-gray-700 px-1.5 py-0.5 rounded">*.class</code></li>
                  <li><code className="bg-gray-700 px-1.5 py-0.5 rounded">build/</code></li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Сгенерированные файлы */}
          <div className="bg-gray-900/50 p-5 rounded-xl border border-orange-700/30">
            <div className="flex items-center gap-3 mb-3">
              <Settings className="w-5 h-5 text-orange-400" />
              <h3 className="text-lg font-bold text-orange-300">3. Сгенерированные файлы</h3>
            </div>
            <p className="text-gray-300 mb-3">
              Файлы, создаваемые в процессе сборки:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gray-800 p-4 rounded-lg">
                <h4 className="font-bold text-green-300 mb-2">Frontend сборка</h4>
                <ul className="list-disc pl-5 space-y-1 text-gray-300 text-sm">
                  <li><code className="bg-gray-700 px-1.5 py-0.5 rounded">dist/</code> - директория сборки</li>
                  <li><code className="bg-gray-700 px-1.5 py-0.5 rounded">build/</code> - результат сборки</li>
                  <li><code className="bg-gray-700 px-1.5 py-0.5 rounded">*.min.js</code> - минифицированные файлы</li>
                  <li><code className="bg-gray-700 px-1.5 py-0.5 rounded">bundle.js</code> - бандлы</li>
                </ul>
              </div>
              
              <div className="bg-gray-800 p-4 rounded-lg">
                <h4 className="font-bold text-blue-300 mb-2">Документация и логи</h4>
                <ul className="list-disc pl-5 space-y-1 text-gray-300 text-sm">
                  <li><code className="bg-gray-700 px-1.5 py-0.5 rounded">*.log</code> - лог-файлы</li>
                  <li><code className="bg-gray-700 px-1.5 py-0.5 rounded">coverage/</code> - отчеты о покрытии тестами</li>
                  <li><code className="bg-gray-700 px-1.5 py-0.5 rounded">docs/_build/</code> - сгенерированная документация</li>
                  <li><code className="bg-gray-700 px-1.5 py-0.5 rounded">*.tmp</code> - временные файлы</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Синтаксис .gitignore */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Code className="w-5 h-5 text-cyan-400" />
          Синтаксис .gitignore
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Файл .gitignore использует простой, но мощный синтаксис для определения паттернов игнорирования.
          </p>
        </div>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-gray-900/50 p-4 rounded-xl border border-green-700/30">
            <h3 className="font-bold text-green-300 mb-3 flex items-center gap-2">
              <Code className="w-5 h-5" />
              Основные правила синтаксиса
            </h3>
            <ul className="space-y-3 text-gray-300 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-green-400">#</span>
                <div>
                  <div className="font-medium">Комментарии</div>
                  <div className="text-gray-400 text-xs">Все после # игнорируется</div>
                  <div className="mt-1 bg-gray-800 p-2 rounded text-gray-300 font-mono text-xs">
                    # Это комментарий
                  </div>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-400">*</span>
                <div>
                  <div className="font-medium">Звездочка (*)</div>
                  <div className="text-gray-400 text-xs">Соответствует любым символам</div>
                  <div className="mt-1 bg-gray-800 p-2 rounded text-gray-300 font-mono text-xs">
                    *.log # Все файлы с расширением .log
                  </div>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-400">?</span>
                <div>
                  <div className="font-medium">Вопросительный знак (?)</div>
                  <div className="text-gray-400 text-xs">Соответствует одному символу</div>
                  <div className="mt-1 bg-gray-800 p-2 rounded text-gray-300 font-mono text-xs">
                    file?.txt # file1.txt, fileA.txt
                  </div>
                </div>
              </li>
            </ul>
          </div>
          
          <div className="bg-gray-900/50 p-4 rounded-xl border border-blue-700/30">
            <h3 className="font-bold text-blue-300 mb-3 flex items-center gap-2">
              <Folder className="w-5 h-5" />
              Пути и директории
            </h3>
            <ul className="space-y-3 text-gray-300 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-blue-400">/</span>
                <div>
                  <div className="font-medium">Слэш (/)</div>
                  <div className="text-gray-400 text-xs">Разделитель директорий и корневой путь</div>
                  <div className="mt-1 bg-gray-800 p-2 rounded text-gray-300 font-mono text-xs">
                    /config/ # Только в корне<br/>
                    src/config/ # В директории src
                  </div>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-400">**</span>
                <div>
                  <div className="font-medium">Двойная звездочка (**)</div>
                  <div className="text-gray-400 text-xs">Соответствует любому количеству директорий</div>
                  <div className="mt-1 bg-gray-800 p-2 rounded text-gray-300 font-mono text-xs">
                    **/*.js # Все .js файлы в любом месте
                  </div>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-400">!</span>
                <div>
                  <div className="font-medium">Восклицательный знак (!)</div>
                  <div className="text-gray-400 text-xs">Исключение из игнорирования</div>
                  <div className="mt-1 bg-gray-800 p-2 rounded text-gray-300 font-mono text-xs">
                    *.log<br/>
                    !important.log # Не игнорировать
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-6 bg-gray-900/50 p-5 rounded-xl border border-purple-700/30">
          <h3 className="font-bold text-purple-300 mb-3">Примеры сложных паттернов:</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-gray-800 p-4 rounded-lg">
              <h4 className="font-bold text-green-300 mb-2">Директории</h4>
              <div className="space-y-2 text-sm">
                <div className="bg-gray-700 p-2 rounded font-mono text-gray-300">
                  node_modules/
                </div>
                <div className="text-gray-400 text-xs">Игнорировать директорию node_modules</div>
                
                <div className="bg-gray-700 p-2 rounded font-mono text-gray-300">
                  **/logs/
                </div>
                <div className="text-gray-400 text-xs">Игнорировать все директории logs на любом уровне</div>
              </div>
            </div>
            
            <div className="bg-gray-800 p-4 rounded-lg">
              <h4 className="font-bold text-blue-300 mb-2">Файлы и расширения</h4>
              <div className="space-y-2 text-sm">
                <div className="bg-gray-700 p-2 rounded font-mono text-gray-300">
                  *.tmp
                </div>
                <div className="text-gray-400 text-xs">Игнорировать все .tmp файлы</div>
                
                <div className="bg-gray-700 p-2 rounded font-mono text-gray-300">
                  !*.keep.tmp
                </div>
                <div className="text-gray-400 text-xs">Не игнорировать файлы с .keep.tmp</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Генераторы .gitignore */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Zap className="w-5 h-5 text-yellow-400" />
          Генераторы .gitignore
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Существуют онлайн-сервисы и инструменты для автоматической генерации .gitignore файлов.
          </p>
        </div>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-gray-900/50 p-4 rounded-xl border border-green-700/30">
            <h3 className="font-bold text-green-300 mb-3 flex items-center gap-2">
              <Zap className="w-5 h-5" />
              gitignore.io
            </h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-300 text-sm">
              <li>Самый популярный генератор .gitignore</li>
              <li>Поддерживает сотни технологий и фреймворков</li>
              <li>Интуитивный интерфейс с чекбоксами</li>
              <li>Можно использовать через API</li>
            </ul>
            <div className="mt-3 bg-gray-800 p-3 rounded">
              <div className="text-xs text-gray-400 mb-1">Пример URL:</div>
              <div className="text-green-300 text-xs font-mono break-all">
                https://www.toptal.com/developers/gitignore/api/node,react,python
              </div>
            </div>
          </div>
          
          <div className="bg-gray-900/50 p-4 rounded-xl border border-blue-700/30">
            <h3 className="font-bold text-blue-300 mb-3 flex items-center gap-2">
              <Code className="w-5 h-5" />
              CLI инструменты
            </h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-300 text-sm">
              <li><code className="bg-gray-700 px-1.5 py-0.5 rounded">git ignore</code> - встроенный Git</li>
              <li><code className="bg-gray-700 px-1.5 py-0.5 rounded">gibo</code> - Go-based инструмент</li>
              <li><code className="bg-gray-700 px-1.5 py-0.5 rounded">ignr</code> - Node.js пакет</li>
              <li>IDE интеграции (VS Code, IntelliJ)</li>
            </ul>
            <div className="mt-3 bg-gray-800 p-3 rounded">
              <div className="text-xs text-gray-400 mb-1">Пример команды:</div>
              <div className="text-blue-300 text-xs font-mono">{`
                npx gibo dump Node React Python > .gitignore
              `}</div>
            </div>
          </div>
        </div>

        <div className="mt-6 bg-gray-900/50 p-4 rounded-lg border border-yellow-700/30">
          <h4 className="font-bold text-yellow-300 mb-3 flex items-center gap-2">
            <Settings className="w-5 h-5" />
            Пример генерации через gitignore.io
          </h4>
          <ol className="list-decimal pl-5 space-y-2 text-gray-300 text-sm">
            <li>Откройте https://www.toptal.com/developers/gitignore</li>
            <li>Введите в поиск: "Node", "React", "Python"</li>
            <li>Выберите нужные технологии из списка</li>
            <li>Нажмите "Create" для генерации файла</li>
            <li>Скопируйте содержимое и вставьте в .gitignore</li>
          </ol>
        </div>
      </div>

      {/* Лучшие практики */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Shield className="w-5 h-5 text-green-400" />
          Лучшие практики использования .gitignore
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Следование лучшим практикам помогает эффективно управлять игнорированием файлов.
          </p>
        </div>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-gray-900/50 p-4 rounded-xl border border-green-700/30">
            <h3 className="font-bold text-green-300 mb-3 flex items-center gap-2">
              <CheckCircle className="w-5 h-5" />
              Рекомендации по содержимому
            </h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-green-400">✓</span>
                <span>Добавляйте .gitignore в начале проекта</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-400">✓</span>
                <span>Используйте комментарии для пояснений</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-400">✓</span>
                <span>Группируйте похожие правила</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-400">✓</span>
                <span>Регулярно обновляйте список</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-400">✓</span>
                <span>Используйте генераторы для новых проектов</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-gray-900/50 p-4 rounded-xl border border-red-700/30">
            <h3 className="font-bold text-red-300 mb-3 flex items-center gap-2">
              <EyeOff className="w-5 h-5" />
              Распространенные ошибки
            </h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-red-400">✗</span>
                <span>Игнорировать уже отслеживаемые файлы</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-400">✗</span>
                <span>Не игнорировать конфиденциальные данные</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-400">✗</span>
                <span>Создавать слишком общие паттерны</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-400">✗</span>
                <span>Игнорировать файлы, нужные другим разработчикам</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-400">✗</span>
                <span>Не тестировать .gitignore перед коммитом</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-6 p-4 bg-gray-900/50 rounded-lg border border-blue-700/30">
          <h4 className="font-bold text-blue-300 mb-3">Полезные команды для проверки:</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="bg-gray-800 p-3 rounded">
              <code className="text-sm text-green-300">git status --ignored</code>
              <div className="text-xs text-gray-400 mt-1">Показать игнорируемые файлы</div>
            </div>
            <div className="bg-gray-800 p-3 rounded">
              <code className="text-sm text-blue-300">{`git check-ignore -v <file>`}</code>
              <div className="text-xs text-gray-400 mt-1">Проверить, почему файл игнорируется</div>
            </div>
            <div className="bg-gray-800 p-3 rounded">
              <code className="text-sm text-purple-300">{`git rm --cached <file>`}</code>
              <div className="text-xs text-gray-400 mt-1">Удалить файл из индекса (если уже отслеживается)</div>
            </div>
            <div className="bg-gray-800 p-3 rounded">
              <code className="text-sm text-yellow-300">git ls-files --others --ignored --exclude-standard</code>
              <div className="text-xs text-gray-400 mt-1">Список всех игнорируемых файлов</div>
            </div>
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
            <h3 className="font-bold text-white mb-2">Отлично! 🙈</h3>
            <p className="text-gray-300">
              Теперь вы знаете, как использовать файл .gitignore для эффективного управления файлами в репозитории. Вы научились создавать правила игнорирования, использовать генераторы и следовать лучшим практикам.
              В следующем уроке мы рассмотрим работу с GitHub Actions для автоматизации CI/CD.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Part1;