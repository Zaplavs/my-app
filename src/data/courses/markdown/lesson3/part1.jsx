// src/data/courses/markdown/lesson3/part1.jsx
import React from 'react';
import { Edit3, Code, BookOpen, Globe, Monitor, Smartphone, Cloud, Zap, CheckCircle, Users, FileText } from 'lucide-react';

const Part1 = () => {
  return (
    <div className="space-y-8 text-gray-200">
      {/* Вступление */}
      <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 backdrop-blur-sm border border-blue-700/30 rounded-2xl p-6 shadow-lg">
        <div className="flex items-start gap-4">
          <div className="bg-blue-500/20 p-3 rounded-lg">
            <Edit3 className="w-6 h-6 text-blue-400" />
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">📝 Урок 3: Выбор редактора для Markdown</h1>
            <h2 className="text-xl font-semibold text-blue-300 mb-3">Обзор популярных редакторов и рекомендации по выбору</h2>
            <p className="text-gray-300">
              <span className="font-medium text-yellow-400">🎯 Цель урока:</span> Познакомиться с основными редакторами Markdown, понять их особенности и выбрать подходящий инструмент под свои задачи.
            </p>
          </div>
        </div>
      </div>

      {/* Почему важен выбор редактора */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Zap className="w-5 h-5 text-yellow-400" />
          Почему важен выбор редактора Markdown?
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Хотя Markdown и является обычным текстом, <span className="font-medium text-yellow-300">редактор</span> может значительно повлиять на ваш опыт работы:
          </p>
          <ul className="list-disc pl-6 space-y-2 mt-3">
            <li><span className="font-medium">Производительность:</span> Удобный редактор экономит время и снижает утомляемость</li>
            <li><span className="font-medium">Визуализация:</span> Некоторые редакторы показывают результат в реальном времени</li>
            <li><span className="font-medium">Функции:</span> Расширения, интеграции, управление файлами</li>
            <li><span className="font-medium">Совместимость:</span> Поддержка различных расширений Markdown</li>
            <li><span className="font-medium">Цель:</span> Редактор для заметок отличается от редактора для программирования</li>
          </ul>
          <p className="mt-4">
            Правильный выбор редактора может превратить написание Markdown из рутинной задачи в удовольствие.
          </p>
        </div>
      </div>

      {/* Обзор популярных редакторов */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Monitor className="w-5 h-5 text-green-400" />
          Обзор популярных редакторов Markdown
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed mb-4">
          <p>
            Существует множество редакторов Markdown, каждый из которых имеет свои сильные и слабые стороны. Рассмотрим самые популярные из них:
          </p>
        </div>

        {/* VS Code */}
        <div className="bg-gray-900/50 p-5 rounded-xl border border-blue-700/30 mb-6">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <div className="bg-blue-500/20 p-2 rounded-lg">
              <Code className="w-6 h-6 text-blue-400" />
            </div>
            <h3 className="text-xl font-bold text-blue-300">Visual Studio Code</h3>
            <span className="px-3 py-1 bg-blue-900/30 text-blue-300 rounded-full text-sm font-medium">Бесплатный</span>
            <span className="px-3 py-1 bg-purple-900/30 text-purple-300 rounded-full text-sm font-medium">Многофункциональный</span>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div>
              <h4 className="font-bold text-white mb-2 flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Преимущества:
              </h4>
              <ul className="list-disc pl-5 space-y-2 text-gray-300 text-sm">
                <li>Абсолютно <span className="font-medium">бесплатный</span> и с открытым исходным кодом</li>
                <li>Огромная экосистема <span className="font-medium">расширений</span> для Markdown</li>
                <li>Отличная поддержка <span className="font-medium">синтаксиса</span> и <span className="font-medium">автозавершения</span></li>
                <li>Интеграция с <span className="font-medium">Git</span> и системами контроля версий</li>
                <li>Поддержка <span className="font-medium">предварительного просмотра</span> в реальном времени</li>
                <li>Мощные возможности для <span className="font-medium">разработки</span> и <span className="font-medium">написания кода</span></li>
                <li>Кроссплатформенность (Windows, macOS, Linux)</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-2 flex items-center gap-2">
                <FileText className="w-4 h-4 text-red-400" />
                Недостатки:
              </h4>
              <ul className="list-disc pl-5 space-y-2 text-gray-300 text-sm">
                <li>Может быть <span className="font-medium">перегружен</span> функциями для простых задач</li>
                <li>Требует <span className="font-medium">настройки</span> для оптимальной работы с Markdown</li>
                <li>Не такой <span className="font-medium">визуально привлекательный</span> по умолчанию, как специализированные редакторы</li>
                <li>Более ориентирован на <span className="font-medium">разработчиков</span>, чем на писателей</li>
              </ul>
            </div>
          </div>
          <div className="mt-4 p-3 bg-blue-900/20 border border-blue-700/30 rounded-lg">
            <p className="text-blue-300 text-sm flex items-start gap-2">
              <span className="font-medium">💡 Рекомендация:</span>
              <span>
                Идеален для разработчиков, технических писателей и тех, кто работает с кодом. Отличный выбор при работе с проектами в Git.
              </span>
            </p>
          </div>
        </div>

        {/* Obsidian */}
        <div className="bg-gray-900/50 p-5 rounded-xl border border-purple-700/30 mb-6">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <div className="bg-purple-500/20 p-2 rounded-lg">
              <BookOpen className="w-6 h-6 text-purple-400" />
            </div>
            <h3 className="text-xl font-bold text-purple-300">Obsidian</h3>
            <span className="px-3 py-1 bg-purple-900/30 text-purple-300 rounded-full text-sm font-medium">Бесплатный (базовые функции)</span>
            <span className="px-3 py-1 bg-indigo-900/30 text-indigo-300 rounded-full text-sm font-medium">Для знаний</span>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div>
              <h4 className="font-bold text-white mb-2 flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Преимущества:
              </h4>
              <ul className="list-disc pl-5 space-y-2 text-gray-300 text-sm">
                <li>Отличная <span className="font-medium">визуализация связей</span> между заметками (граф знаний)</li>
                <li>Мощная система <span className="font-medium">тегов</span> и <span className="font-medium">обратных ссылок</span></li>
                <li>Поддержка <span className="font-medium">плагинов</span> для расширения функциональности</li>
                <li>Работа с <span className="font-medium">локальными файлами</span> (ваши данные остаются у вас)</li>
                <li>Отличная <span className="font-medium">система навигации</span> по заметкам</li>
                <li>Поддержка <span className="font-medium">математических формул</span> и диаграмм</li>
                <li>Возможность создания <span className="font-medium">личной базы знаний</span></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-2 flex items-center gap-2">
                <FileText className="w-4 h-4 text-red-400" />
                Недостатки:
              </h4>
              <ul className="list-disc pl-5 space-y-2 text-gray-300 text-sm">
                <li>Изначально <span className="font-medium">ориентирован на заметки</span>, а не на документацию</li>
                <li>Может быть <span className="font-medium">сложным</span> для новичков</li>
                <li>Некоторые продвинутые функции требуют <span className="font-medium">платной подписки</span></li>
                <li>Не самый удобный для <span className="font-medium">совместной работы</span></li>
                <li>Требует <span className="font-medium">организации файловой структуры</span></li>
              </ul>
            </div>
          </div>
          <div className="mt-4 p-3 bg-purple-900/20 border border-purple-700/30 rounded-lg">
            <p className="text-purple-300 text-sm flex items-start gap-2">
              <span className="font-medium">💡 Рекомендация:</span>
              <span>
                Лучший выбор для ведения личных заметок, создания второй мозговой системы, исследований и обучения.
              </span>
            </p>
          </div>
        </div>

        {/* Typora */}
        <div className="bg-gray-900/50 p-5 rounded-xl border border-pink-700/30 mb-6">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <div className="bg-pink-500/20 p-2 rounded-lg">
              <Edit3 className="w-6 h-6 text-pink-400" />
            </div>
            <h3 className="text-xl font-bold text-pink-300">Typora</h3>
            <span className="px-3 py-1 bg-pink-900/30 text-pink-300 rounded-full text-sm font-medium">Бесплатно (бета)</span>
            <span className="px-3 py-1 bg-rose-900/30 text-rose-300 rounded-full text-sm font-medium">Визуальный</span>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div>
              <h4 className="font-bold text-white mb-2 flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Преимущества:
              </h4>
              <ul className="list-disc pl-5 space-y-2 text-gray-300 text-sm">
                <li><span className="font-medium">Чистый визуальный интерфейс</span> без разделения на код и предпросмотр</li>
                <li>Отличная <span className="font-medium">типографика</span> и визуальное оформление</li>
                <li>Поддержка <span className="font-medium">математических формул</span>, таблиц, диаграмм</li>
                <li>Простота использования - <span className="font-medium">минимализм</span> в интерфейсе</li>
                <li>Хорошая поддержка <span className="font-medium">тем оформления</span></li>
                <li>Возможность <span className="font-medium">экспорта</span> в различные форматы (PDF, HTML, Word)</li>
                <li>Поддержка <span className="font-medium">автосохранения</span> и облачных сервисов</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-2 flex items-center gap-2">
                <FileText className="w-4 h-4 text-red-400" />
                Недостатки:
              </h4>
              <ul className="list-disc pl-5 space-y-2 text-gray-300 text-sm">
                <li>В <span className="font-medium">бета-версии</span> уже много лет (некоторые функции могут быть нестабильны)</li>
                <li>Ограниченные возможности по <span className="font-medium">настройке</span> по сравнению с VS Code</li>
                <li>Нет встроенной <span className="font-medium">системы управления версиями</span></li>
                <li>Меньше <span className="font-medium">расширений</span> и плагинов</li>
                <li>Не самый удобный для <span className="font-medium">больших проектов</span></li>
                <li>На macOS может быть <span className="font-medium">дорогим</span> после окончания беты</li>
              </ul>
            </div>
          </div>
          <div className="mt-4 p-3 bg-pink-900/20 border border-pink-700/30 rounded-lg">
            <p className="text-pink-300 text-sm flex items-start gap-2">
              <span className="font-medium">💡 Рекомендация:</span>
              <span>
                Идеален для писателей, студентов и всех, кто хочет видеть красиво оформленный текст без отвлечения на код.
              </span>
            </p>
          </div>
        </div>

        {/* Dillinger */}
        <div className="bg-gray-900/50 p-5 rounded-xl border border-green-700/30">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <div className="bg-green-500/20 p-2 rounded-lg">
              <Globe className="w-6 h-6 text-green-400" />
            </div>
            <h3 className="text-xl font-bold text-green-300">Dillinger</h3>
            <span className="px-3 py-1 bg-green-900/30 text-green-300 rounded-full text-sm font-medium">Бесплатный</span>
            <span className="px-3 py-1 bg-emerald-900/30 text-emerald-300 rounded-full text-sm font-medium">Онлайн</span>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div>
              <h4 className="font-bold text-white mb-2 flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Преимущества:
              </h4>
              <ul className="list-disc pl-5 space-y-2 text-gray-300 text-sm">
                <li><span className="font-medium">Не требует установки</span> - работает в браузере</li>
                <li>Быстрый <span className="font-medium">доступ</span> с любого устройства с интернетом</li>
                <li>Поддержка <span className="font-medium">экспорта</span> в PDF, HTML и другие форматы</li>
                <li>Интеграция с <span className="font-medium">облачными сервисами</span> (Dropbox, Google Drive, GitHub)</li>
                <li>Отлично подходит для <span className="font-medium">быстрых задач</span> и тестирования</li>
                <li>Открытый исходный код и <span className="font-medium">бесплатный</span></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-2 flex items-center gap-2">
                <FileText className="w-4 h-4 text-red-400" />
                Недостатки:
              </h4>
              <ul className="list-disc pl-5 space-y-2 text-gray-300 text-sm">
                <li>Требует <span className="font-medium">подключения к интернету</span></li>
                <li>Ограниченные возможности <span className="font-medium">настройки</span></li>
                <li>Меньше <span className="font-medium">функций</span> по сравнению с десктопными редакторами</li>
                <li>Вопросы <span className="font-medium">безопасности</span> при работе с конфиденциальными данными</li>
                <li>Нет возможности для <span className="font-medium">оффлайн-работы</span></li>
                <li>Ограниченная поддержка <span className="font-medium">расширений</span> Markdown</li>
              </ul>
            </div>
          </div>
          <div className="mt-4 p-3 bg-green-900/20 border border-green-700/30 rounded-lg">
            <p className="text-green-300 text-sm flex items-start gap-2">
              <span className="font-medium">💡 Рекомендация:</span>
              <span>
                Отличен для быстрых задач, тестирования синтаксиса или работы на чужих компьютерах.
              </span>
            </p>
          </div>
        </div>
      </div>

      {/* Рекомендации по выбору редактора */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Users className="w-5 h-5 text-cyan-400" />
          Как выбрать редактор под свои задачи?
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Выбор редактора зависит от ваших целей, уровня подготовки и предпочтений. Вот рекомендации по основным сценариям использования:
          </p>
        </div>

        <div className="mt-6 space-y-6">
          {/* Для заметок и личных знаний */}
          <div className="bg-gray-900/50 p-5 rounded-xl border border-purple-700/30">
            <h3 className="font-bold text-purple-300 mb-3 flex items-center gap-2">
              <BookOpen className="w-5 h-5" />
              Для заметок и личных знаний
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-medium text-white mb-2">Лучший выбор:</h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="font-bold text-purple-400">1.</span>
                    <span><span className="font-medium">Obsidian</span> - для создания персональной базы знаний с мощными связями</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold text-blue-400">2.</span>
                    <span><span className="font-medium">Typora</span> - для красивого и простого ведения заметок</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-white mb-2">Альтернативы:</h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="font-bold text-gray-400">•</span>
                    <span>VS Code с плагинами для заметок (Foam, Markdown Notes)</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Для технической документации */}
          <div className="bg-gray-900/50 p-5 rounded-xl border border-blue-700/30">
            <h3 className="font-bold text-blue-300 mb-3 flex items-center gap-2">
              <Code className="w-5 h-5" />
              Для технической документации
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-medium text-white mb-2">Лучший выбор:</h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="font-bold text-blue-400">1.</span>
                    <span><span className="font-medium">VS Code</span> - с расширениями для предпросмотра и интеграцией с Git</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold text-green-400">2.</span>
                    <span><span className="font-medium">Dillinger</span> - для быстрого создания и тестирования документации</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-white mb-2">Альтернативы:</h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="font-bold text-gray-400">•</span>
                    <span>Typora для финального оформления и экспорта</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Для публикаций и блогов */}
          <div className="bg-gray-900/50 p-5 rounded-xl border border-pink-700/30">
            <h3 className="font-bold text-pink-300 mb-3 flex items-center gap-2">
              <Edit3 className="w-5 h-5" />
              Для публикаций и блогов
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-medium text-white mb-2">Лучший выбор:</h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="font-bold text-pink-400">1.</span>
                    <span><span className="font-medium">Typora</span> - для красивого написания и предварительного просмотра</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold text-blue-400">2.</span>
                    <span><span className="font-medium">VS Code</span> - с расширениями для блогеров и интеграцией с CMS</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-white mb-2">Альтернативы:</h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="font-bold text-gray-400">•</span>
                    <span>Dillinger для быстрых черновиков</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Для новичков */}
          <div className="bg-gray-900/50 p-5 rounded-xl border border-yellow-700/30">
            <h3 className="font-bold text-yellow-300 mb-3 flex items-center gap-2">
              <Zap className="w-5 h-5" />
              Для новичков
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-medium text-white mb-2">Лучший выбор:</h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="font-bold text-pink-400">1.</span>
                    <span><span className="font-medium">Typora</span> - интуитивный интерфейс, минимум отвлечения</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold text-green-400">2.</span>
                    <span><span className="font-medium">Dillinger</span> - не требует установки, сразу готов к работе</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-white mb-2">Альтернативы:</h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="font-bold text-gray-400">•</span>
                    <span>Obsidian для изучения концепции "второго мозга"</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Сравнительная таблица */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Monitor className="w-5 h-5 text-orange-400" />
          Сравнительная таблица редакторов
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-700">
                <th className="text-left p-3 text-white">Редактор</th>
                <th className="text-left p-3 text-white">Цена</th>
                <th className="text-left p-3 text-white">Платформы</th>
                <th className="text-left p-3 text-white">Основное назначение</th>
                <th className="text-left p-3 text-white">Особенности</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-800">
              <tr>
                <td className="p-3 font-medium text-blue-300">VS Code</td>
                <td className="p-3 text-gray-300">Бесплатно</td>
                <td className="p-3 text-gray-300">Win, Mac, Linux</td>
                <td className="p-3 text-gray-300">Разработка, документация</td>
                <td className="p-3 text-gray-300">Расширения, Git, код</td>
              </tr>
              <tr>
                <td className="p-3 font-medium text-purple-300">Obsidian</td>
                <td className="p-3 text-gray-300">Бесплатно (базовые)</td>
                <td className="p-3 text-gray-300">Win, Mac, Linux, Mobile</td>
                <td className="p-3 text-gray-300">Заметки, знания</td>
                <td className="p-3 text-gray-300">Граф знаний, теги</td>
              </tr>
              <tr>
                <td className="p-3 font-medium text-pink-300">Typora</td>
                <td className="p-3 text-gray-300">Бесплатно (бета)</td>
                <td className="p-3 text-gray-300">Win, Mac, Linux</td>
                <td className="p-3 text-gray-300">Письмо, публикации</td>
                <td className="p-3 text-gray-300">Визуальный режим</td>
              </tr>
              <tr>
                <td className="p-3 font-medium text-green-300">Dillinger</td>
                <td className="p-3 text-gray-300">Бесплатно</td>
                <td className="p-3 text-gray-300">Веб (браузер)</td>
                <td className="p-3 text-gray-300">Быстрые задачи</td>
                <td className="p-3 text-gray-300">Онлайн, облачные сервисы</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Заключение */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <div className="flex items-start gap-3">
          <div className="bg-green-500/20 p-2 rounded-lg flex-shrink-0">
            <CheckCircle className="w-5 h-5 text-green-400" />
          </div>
          <div>
            <h3 className="font-bold text-white mb-2">Поздравляем! 🎉</h3>
            <p className="text-gray-300">
              Теперь вы знакомы с основными редакторами Markdown и понимаете, какой из них подходит для ваших задач. 
              Помните, что лучший редактор - это тот, который помогает вам сосредоточиться на содержании, а не на инструменте. 
              Не бойтесь экспериментировать с разными вариантами, чтобы найти идеальное решение для себя.
            </p>
            <p className="text-gray-400 mt-3 text-sm">
              В следующем уроке мы рассмотрим расширенные возможности Markdown и популярные расширения, которые делают его еще мощнее.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Part1;
