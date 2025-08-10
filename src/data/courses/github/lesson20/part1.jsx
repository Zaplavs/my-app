// src/data/courses/git/lesson20/part1.jsx
import React from 'react';
import {CheckCircle, Tag, Package, GitBranch, Zap, Shield, FileText, Download, Calendar } from 'lucide-react';

const Part1 = () => {
  return (
    <div className="space-y-8 text-gray-200">
      {/* Вступление */}
      <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 backdrop-blur-sm border border-blue-700/30 rounded-2xl p-6 shadow-lg">
        <div className="flex items-start gap-4">
          <div className="bg-blue-500/20 p-3 rounded-lg">
            <Tag className="w-6 h-6 text-blue-400" />
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">🏷️ Урок 20: Теги и релизы</h1>
            <h2 className="text-xl font-semibold text-blue-300 mb-3">Версионирование и публикация релизов</h2>
            <p className="text-gray-300">
              <span className="font-medium text-yellow-400">🎯 Цель урока:</span> Освоить использование тегов в Git и создание релизов на GitHub.
            </p>
          </div>
        </div>
      </div>

      {/* Что такое теги */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Tag className="w-5 h-5 text-green-400" />
          Что такое теги в Git?
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            <span className="font-medium text-green-300">Теги (tags)</span> в Git — это ссылки на определенные коммиты, используемые для маркировки важных точек в истории проекта, таких как релизы.
          </p>
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-gray-900/50 p-4 rounded-xl border border-green-700/30">
              <h3 className="font-bold text-green-300 mb-2 flex items-center gap-2">
                <Tag className="w-5 h-5" />
                Основное назначение тегов
              </h3>
              <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-400 text-sm">
                <li>Маркировка релизов (v1.0.0, v2.1.3)</li>
                <li>Отметка важных вех проекта</li>
                <li>Создание стабильных точек отсчета</li>
                <li>Упрощение навигации по истории</li>
                <li>Интеграция с системами CI/CD</li>
              </ul>
            </div>
            <div className="bg-gray-900/50 p-4 rounded-xl border border-purple-700/30">
              <h3 className="font-bold text-purple-300 mb-2 flex items-center gap-2">
                <GitBranch className="w-5 h-5" />
                Теги vs Ветки
              </h3>
              <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-400 text-sm">
                <li>Теги не изменяются (immutable)</li>
                <li>Ветки продолжают развиваться</li>
                <li>Теги указывают на конкретный коммит</li>
                <li>Ветки указывают на последний коммит</li>
                <li>Теги используются для релизов</li>
                <li>Ветки для разработки</li>
              </ul>
            </div>
          </div>
          <div className="mt-4 p-3 bg-blue-900/20 border border-blue-700/30 rounded-lg flex items-start gap-2">
            <Zap className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
            <p className="text-blue-300 text-sm">
              <span className="font-medium">💡 Пример:</span> Вместо запоминания хеша коммита (a1b2c3d), можно использовать тег v1.0.0 для ссылки на стабильную версию.
            </p>
          </div>
        </div>
      </div>

      {/* Типы тегов */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Package className="w-5 h-5 text-purple-400" />
          Типы тегов в Git
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed mb-4">
          <p>
            В Git существует два основных типа тегов: легковесные и аннотированные.
          </p>
        </div>

        <div className="space-y-6 mt-6">
          <div className="bg-gray-900/50 p-5 rounded-xl border border-green-700/30">
            <div className="flex items-center gap-3 mb-3">
              <Tag className="w-5 h-5 text-green-400" />
              <h3 className="text-lg font-bold text-green-300">1. Легковесные теги (Lightweight Tags)</h3>
            </div>
            <p className="text-gray-300 mb-3">
              Простые указатели на коммиты без дополнительной информации:
            </p>
            <div className="bg-gray-800 p-4 rounded-lg">
              <h4 className="font-bold text-blue-300 mb-2">Создание легковесного тега:</h4>
              <div className="bg-gray-700 p-3 rounded">
                <code className="text-green-300 text-sm">git tag v1.0.0-light</code>
              </div>
              <div className="mt-2 text-gray-400 text-sm">
                Создает тег без дополнительных метаданных
              </div>
            </div>
            
            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gray-800 p-3 rounded">
                <h5 className="font-bold text-green-300 mb-1">Преимущества:</h5>
                <ul className="list-disc pl-5 space-y-1 text-gray-400 text-xs">
                  <li>Быстрые и простые</li>
                  <li>Маленький размер</li>
                  <li>Подходят для временных меток</li>
                </ul>
              </div>
              <div className="bg-gray-800 p-3 rounded">
                <h5 className="font-bold text-red-300 mb-1">Недостатки:</h5>
                <ul className="list-disc pl-5 space-y-1 text-gray-400 text-xs">
                  <li>Нет метаданных</li>
                  <li>Не содержат информацию об авторе</li>
                  <li>Не подходят для официальных релизов</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-gray-900/50 p-5 rounded-xl border border-blue-700/30">
            <div className="flex items-center gap-3 mb-3">
              <Package className="w-5 h-5 text-blue-400" />
              <h3 className="text-lg font-bold text-blue-300">2. Аннотированные теги (Annotated Tags)</h3>
            </div>
            <p className="text-gray-300 mb-3">
              Полноценные теги с метаданными, рекомендуемые для релизов:
            </p>
            
            <div className="bg-gray-800 p-4 rounded-lg">
              <h4 className="font-bold text-purple-300 mb-2">Создание аннотированного тега:</h4>
              <div className="bg-gray-700 p-3 rounded">
                <code className="text-green-300 text-sm">git tag -a v1.0.0 -m "Релиз версии 1.0.0"</code>
              </div>
              <div className="mt-2 text-gray-400 text-sm">
                Создает тег с аннотацией и сообщением
              </div>
            </div>
            
            <div className="mt-4 bg-gray-800 p-4 rounded-lg">
              <h4 className="font-bold text-yellow-300 mb-2">Расширенное создание тега:</h4>
              <div className="bg-gray-700 p-3 rounded">
                <code className="text-blue-300 text-sm">git tag -a v1.0.0 -m "Релиз версии 1.0.0" -m "Добавлены новые функции:" -m "- Аутентификация" -m "- API документация"</code>
              </div>
            </div>
            
            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gray-800 p-3 rounded">
                <h5 className="font-bold text-green-300 mb-1">Преимущества:</h5>
                <ul className="list-disc pl-5 space-y-1 text-gray-400 text-xs">
                  <li>Содержат полные метаданные</li>
                  <li>Информация об авторе и дате</li>
                  <li>Криптографическая подпись (опционально)</li>
                  <li>Подходят для официальных релизов</li>
                </ul>
              </div>
              <div className="bg-gray-800 p-3 rounded">
                <h5 className="font-bold text-blue-300 mb-1">Метаданные тега:</h5>
                <ul className="list-disc pl-5 space-y-1 text-gray-400 text-xs">
                  <li>Имя тега</li>
                  <li>Сообщение тега</li>
                  <li>Автор тега</li>
                  <li>Дата создания</li>
                  <li>Коммит, на который указывает</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Работа с тегами */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <FileText className="w-5 h-5 text-cyan-400" />
          Работа с тегами
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Основные операции с тегами: создание, просмотр, удаление и работа с конкретными коммитами.
          </p>
        </div>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-gray-900/50 p-4 rounded-xl border border-green-700/30">
            <h3 className="font-bold text-green-300 mb-3 flex items-center gap-2">
              <Tag className="w-5 h-5" />
              Просмотр тегов
            </h3>
            <div className="space-y-3">
              <div className="bg-gray-800 p-3 rounded">
                <code className="text-sm text-green-300">git tag</code>
                <div className="text-xs text-gray-400 mt-1">Список всех тегов</div>
              </div>
              <div className="bg-gray-800 p-3 rounded">
                <code className="text-sm text-blue-300">git tag -l "v1.*"</code>
                <div className="text-xs text-gray-400 mt-1">Фильтрация по шаблону</div>
              </div>
              <div className="bg-gray-800 p-3 rounded">
                <code className="text-sm text-purple-300">git tag --sort=-creatordate</code>
                <div className="text-xs text-gray-400 mt-1">Сортировка по дате создания</div>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-900/50 p-4 rounded-xl border border-blue-700/30">
            <h3 className="font-bold text-blue-300 mb-3 flex items-center gap-2">
              <FileText className="w-5 h-5" />
              Просмотр информации о тегах
            </h3>
            <div className="space-y-3">
              <div className="bg-gray-800 p-3 rounded">
                <code className="text-sm text-green-300">git show v1.0.0</code>
                <div className="text-xs text-gray-400 mt-1">Подробная информация о теге</div>
              </div>
              <div className="bg-gray-800 p-3 rounded">
                <code className="text-sm text-blue-300">git tag -v v1.0.0</code>
                <div className="text-xs text-gray-400 mt-1">Верификация тега (если подписан)</div>
              </div>
              <div className="bg-gray-800 p-3 rounded">
                <code className="text-sm text-purple-300">git log --oneline v1.0.0</code>
                <div className="text-xs text-gray-400 mt-1">Просмотр коммита, на который указывает тег</div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 bg-gray-900/50 p-5 rounded-xl border border-orange-700/30">
          <h3 className="font-bold text-orange-300 mb-3">Создание тегов для конкретных коммитов:</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-gray-800 p-4 rounded-lg">
              <h4 className="font-bold text-green-300 mb-2">Тег для последнего коммита:</h4>
              <div className="bg-gray-700 p-3 rounded mb-2">
                <code className="text-green-300 text-sm">git tag -a v1.0.0 -m "Стабильный релиз"</code>
              </div>
              <div className="text-gray-400 text-xs">
                Создает тег для HEAD коммита
              </div>
            </div>
            
            <div className="bg-gray-800 p-4 rounded-lg">
              <h4 className="font-bold text-blue-300 mb-2">Тег для конкретного коммита:</h4>
              <div className="bg-gray-700 p-3 rounded mb-2">
                <code className="text-blue-300 text-sm">git tag -a v0.9.0 a1b2c3d -m "Бета-версия"</code>
              </div>
              <div className="text-gray-400 text-xs">
                Создает тег для коммита с хешем a1b2c3d
              </div>
            </div>
          </div>
          
          <div className="mt-4 bg-gray-800 p-4 rounded-lg">
            <h4 className="font-bold text-purple-300 mb-2">Удаление тегов:</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="bg-gray-700 p-3 rounded">
                <code className="text-red-300 text-sm">git tag -d v1.0.0</code>
                <div className="text-gray-400 text-xs mt-1">Удаление локального тега</div>
              </div>
              <div className="bg-gray-700 p-3 rounded">
                <code className="text-orange-300 text-sm">git push origin :refs/tags/v1.0.0</code>
                <div className="text-gray-400 text-xs mt-1">Удаление удаленного тега</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Публикация тегов */}
      <div class="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 class="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Download class="w-5 h-5 text-yellow-400" />
          Публикация тегов
        </h2>
        <div class="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Теги по умолчанию не пушатся в удаленный репозиторий и требуют отдельной публикации.
          </p>
        </div>

        <div class="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div class="bg-gray-900/50 p-4 rounded-xl border border-green-700/30">
            <h3 class="font-bold text-green-300 mb-3 flex items-center gap-2">
              <Download class="w-5 h-5" />
              Публикация отдельных тегов
            </h3>
            <div class="space-y-3">
              <div class="bg-gray-800 p-3 rounded">
                <code class="text-sm text-green-300">git push origin v1.0.0</code>
                <div class="text-xs text-gray-400 mt-1">Публикация одного тега</div>
              </div>
              <div class="bg-gray-800 p-3 rounded">
                <code class="text-sm text-blue-300">git push origin v1.0.0 v1.0.1</code>
                <div class="text-xs text-gray-400 mt-1">Публикация нескольких тегов</div>
              </div>
            </div>
          </div>
          
          <div class="bg-gray-900/50 p-4 rounded-xl border border-blue-700/30">
            <h3 class="font-bold text-blue-300 mb-3 flex items-center gap-2">
              <Zap class="w-5 h-5" />
              Публикация всех тегов
            </h3>
            <div class="space-y-3">
              <div class="bg-gray-800 p-3 rounded">
                <code class="text-sm text-green-300">git push origin --tags</code>
                <div class="text-xs text-gray-400 mt-1">Публикация всех локальных тегов</div>
              </div>
              <div class="bg-gray-800 p-3 rounded">
                <code class="text-sm text-purple-300">git push --tags</code>
                <div class="text-xs text-gray-400 mt-1">Публикация тегов во все удаленные</div>
              </div>
            </div>
          </div>
        </div>

        <div class="mt-6 bg-gray-900/50 p-4 rounded-lg border border-orange-700/30">
          <h4 class="font-bold text-orange-300 mb-3 flex items-center gap-2">
            <Shield class="w-5 h-5" />
            Лучшие практики публикации
          </h4>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div class="bg-gray-800 p-3 rounded">
              <div class="text-sm text-green-300">Публикуйте теги отдельно</div>
              <div class="text-xs text-gray-400 mt-1">Не используйте --tags с каждым push</div>
            </div>
            <div class="bg-gray-800 p-3 rounded">
              <div class="text-sm text-blue-300">Проверяйте перед публикацией</div>
              <div class="text-xs text-gray-400 mt-1">git tag для просмотра локальных тегов</div>
            </div>
            <div class="bg-gray-800 p-3 rounded">
              <div class="text-sm text-purple-300">Используйте семантическое версионирование</div>
              <div class="text-xs text-gray-400 mt-1">v1.0.0, v2.1.3 и т.д.</div>
            </div>
            <div class="bg-gray-800 p-3 rounded">
              <div class="text-sm text-orange-300">Удаляйте ненужные теги</div>
              <div class="text-xs text-gray-400 mt-1">Локально и удаленно</div>
            </div>
          </div>
        </div>
      </div>

      {/* GitHub Releases */}
      <div class="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 class="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Package class="w-5 h-5 text-cyan-400" />
          GitHub Releases
        </h2>
        <div class="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            GitHub Releases — это мощный инструмент для публикации релизов с дополнительной информацией и бинарниками.
          </p>
        </div>

        <div class="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div class="bg-gray-900/50 p-4 rounded-xl border border-green-700/30">
            <h3 class="font-bold text-green-300 mb-3 flex items-center gap-2">
              <FileText class="w-5 h-5" />
              Создание Release через интерфейс
            </h3>
            <ol class="list-decimal pl-5 space-y-2 text-gray-300 text-sm">
              <li>Перейдите во вкладку "Releases"</li>
              <li>Нажмите "Draft a new release"</li>
              <li>Выберите или создайте тег</li>
              <li>Введите заголовок релиза</li>
              <li>Напишите описание (changelog)</li>
              <li>Добавьте бинарные файлы (опционально)</li>
              <li>Опубликуйте релиз</li>
            </ol>
          </div>
          
          <div class="bg-gray-900/50 p-4 rounded-xl border border-blue-700/30">
            <h3 class="font-bold text-blue-300 mb-3 flex items-center gap-2">
              <Tag class="w-5 h-5" />
              Элементы хорошего Release
            </h3>
            <ul class="space-y-2 text-gray-300 text-sm">
              <li class="flex items-start gap-2">
                <span class="text-blue-400">🏷️</span>
                <span>Четкий заголовок с номером версии</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-blue-400">📝</span>
                <span>Подробный changelog с изменениями</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-blue-400">📦</span>
                <span>Скомпилированные бинарники (если нужно)</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-blue-400">🔗</span>
                <span>Ссылки на документацию и примеры</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-blue-400">⚠️</span>
                <span>Информация о breaking changes</span>
              </li>
            </ul>
          </div>
        </div>

        <div class="mt-6 bg-gray-900/50 p-5 rounded-xl border border-purple-700/30">
          <h3 class="font-bold text-purple-300 mb-3">Changelog в Release:</h3>
          
          <div class="bg-gray-800 p-4 rounded-lg">
            <h4 class="font-bold text-white mb-2">Пример структуры changelog:</h4>
            <pre class="whitespace-pre-wrap text-gray-300 text-sm">
{`## 🚀 Новые функции
- Добавлена аутентификация через OAuth2
- Реализована система уведомлений

## 🐛 Исправления ошибок
- Исправлена ошибка загрузки файлов (#123)
- Устранено падение при пустом вводе (#125)

## 📦 Улучшения
- Оптимизирована производительность API
- Обновлена документация

## ⚠️ Критические изменения
- Изменен формат конфигурационного файла
- Удален устаревший API v1`}</pre>
          </div>
          
          <div class="mt-4 p-3 bg-blue-900/20 border border-blue-700/30 rounded text-blue-300 text-sm">
            ⚡ <span class="font-medium">Совет:</span> Используйте эмодзи для визуального разделения секций changelog.
          </div>
        </div>
      </div>

      {/* Автоматизация и лучшие практики */}
      <div class="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 class="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Zap class="w-5 h-5 text-yellow-400" />
          Автоматизация и лучшие практики
        </h2>
        <div class="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Автоматизация создания тегов и релизов помогает поддерживать консистентность и экономит время.
          </p>
        </div>

        <div class="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div class="bg-gray-900/50 p-4 rounded-xl border border-green-700/30">
            <h3 class="font-bold text-green-300 mb-3 flex items-center gap-2">
              <Calendar class="w-5 h-5" />
              Семантическое версионирование (SemVer)
            </h3>
            <div class="space-y-3">
              <div class="bg-gray-800 p-3 rounded">
                <div class="font-bold text-white">Формат: MAJOR.MINOR.PATCH</div>
                <div class="text-gray-400 text-xs mt-1">Пример: v2.1.3</div>
              </div>
              <ul class="list-disc pl-5 space-y-1 text-gray-300 text-sm">
                <li><span class="font-medium text-red-300">MAJOR:</span> Критические изменения (v1.0.0 → v2.0.0)</li>
                <li><span class="font-medium text-yellow-300">MINOR:</span> Новые функции (v1.2.3 → v1.3.0)</li>
                <li><span class="font-medium text-green-300">PATCH:</span> Исправления багов (v1.2.3 → v1.2.4)</li>
              </ul>
            </div>
          </div>
          
          <div class="bg-gray-900/50 p-4 rounded-xl border border-blue-700/30">
            <h3 class="font-bold text-blue-300 mb-3 flex items-center gap-2">
              <Shield class="w-5 h-5" />
              Лучшие практики тегов
            </h3>
            <ul class="space-y-2 text-gray-300 text-sm">
              <li class="flex items-start gap-2">
                <span class="text-green-400">✅</span>
                <span>Используйте аннотированные теги для релизов</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-green-400">✅</span>
                <span>Следуйте SemVer</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-green-400">✅</span>
                <span>Пишите осмысленные сообщения</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-green-400">✅</span>
                <span>Публикуйте теги для стабильных релизов</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-green-400">✅</span>
                <span>Создавайте GitHub Releases</span>
              </li>
            </ul>
          </div>
        </div>

        <div class="mt-6 bg-gray-900/50 p-4 rounded-lg border border-orange-700/30">
          <h4 class="font-bold text-orange-300 mb-3">Автоматизация с GitHub Actions:</h4>
          <div class="bg-gray-800 p-4 rounded">
            <pre class="whitespace-pre-wrap text-gray-300 text-xs">
{`name: Create Release
on:
  push:
    tags:
      - 'v*'
jobs:
  release:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout code
        uses: actions/checkout@v3
        
      - name: Create Release
        uses: actions/create-release@v1
        with:
          tag_name: $\{{ github.ref }}
          release_name: Release $\{{ github.ref }}
          body: |
            Автоматически сгенерированный релиз
          draft: false
          prerelease: false`}</pre>
          </div>
          
          <div class="mt-3 p-3 bg-purple-900/20 border border-purple-700/30 rounded text-purple-300 text-sm">
            ⚡ <span class="font-medium">Преимущества:</span> Автоматическое создание релизов при пуше тегов.
          </div>
        </div>
      </div>

      {/* Заключение */}
      <div class="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <div class="flex items-start gap-3">
          <div class="bg-green-500/20 p-2 rounded-lg flex-shrink-0">
            <CheckCircle class="w-5 h-5 text-green-400" />
          </div>
          <div>
            <h3 class="font-bold text-white mb-2">Отлично! 🏷️</h3>
            <p class="text-gray-300">
              Теперь вы знаете, как использовать теги в Git для маркировки важных точек в истории проекта и создавать профессиональные релизы на GitHub. Вы научились различать типы тегов, публиковать их и автоматизировать процесс релизов.
              В следующем уроке мы рассмотрим работу с Git hooks и автоматизацию задач.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Part1;