// src/data/courses/markdown/lesson21/part1.jsx
import React from 'react';
import { Trophy, BookOpen, Code, Zap, Users, FileText } from 'lucide-react';

const Part1 = () => {
  return (
    <div className="space-y-8 text-gray-200">
      {/* Вступление */}
      <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 backdrop-blur-sm border border-blue-700/30 rounded-2xl p-6 shadow-lg">
        <div className="flex items-start gap-4">
          <div className="bg-blue-500/20 p-3 rounded-lg">
            <Trophy className="w-6 h-6 text-blue-400" />
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">🏆 Урок 22: Итоговый проект - техническая документация</h1>
            <h2 className="text-xl font-semibold text-blue-300 mb-3">Создание полноценной документации к open-source проекту</h2>
            <p className="text-gray-300">
              <span className="font-medium text-yellow-400">🎯 Цель урока:</span> Применить все изученные навыки Markdown для создания профессиональной технической документации к вымышленному open-source проекту.
            </p>
          </div>
        </div>
      </div>

      {/* Что такое техническая документация */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <BookOpen className="w-5 h-5 text-green-400" />
          Что такое техническая документация?
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            <span className="font-medium text-green-300">Техническая документация</span> — это набор документов, объясняющих, как использовать, настраивать, развивать и поддерживать программный продукт или систему.
          </p>
          <p>
            Для open-source проектов документация особенно важна, так как она помогает новым пользователям и контрибьюторам быстро разобраться в проекте.
          </p>
        </div>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-900/50 p-5 rounded-xl border border-green-700/30">
            <h3 className="font-bold text-green-300 mb-3">Цели документации:</h3>
            <ul className="space-y-3 text-gray-300 text-sm">
              <li className="flex items-start gap-2">
                <span className="font-bold text-green-400 mt-1">•</span>
                <span><span className="font-medium">Обучение:</span> Помочь пользователям начать работу с проектом</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold text-green-400 mt-1">•</span>
                <span><span className="font-medium">Справочник:</span> Объяснить API, функции и параметры</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold text-green-400 mt-1">•</span>
                <span><span className="font-medium">Руководство:</span> Предоставить пошаговые инструкции</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold text-green-400 mt-1">•</span>
                <span><span className="font-medium">Коммуникация:</span> Объяснить архитектуру и принятые решения</span>
              </li>
            </ul>
          </div>
          <div className="bg-gray-900/50 p-5 rounded-xl border border-blue-700/30">
            <h3 className="font-bold text-blue-300 mb-3">Аудитория документации:</h3>
            <ul className="space-y-3 text-gray-300 text-sm">
              <li className="flex items-start gap-2">
                <span className="font-bold text-blue-400 mt-1">•</span>
                <span><span className="font-medium">Конечные пользователи:</span> Люди, использующие проект</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold text-blue-400 mt-1">•</span>
                <span><span className="font-medium">Разработчики:</span> Люди, расширяющие или изменяющие проект</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold text-blue-400 mt-1">•</span>
                <span><span className="font-medium">Администраторы:</span> Люди, устанавливающие и поддерживающие проект</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-6 bg-gray-900/30 p-4 rounded-lg border border-gray-700">
          <h4 className="font-bold text-white mb-2">Качества хорошей документации:</h4>
          <ul className="list-disc pl-5 space-y-2 text-gray-300 text-sm">
            <li>Четкая структура и навигация</li>
            <li>Актуальность и точность информации</li>
            <li>Простота и ясность изложения</li>
            <li>Примеры и практические случаи</li>
            <li>Поиск и перекрестные ссылки</li>
          </ul>
        </div>
      </div>

      {/* Структура документации */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <FileText className="w-5 h-5 text-purple-400" />
          Структура технической документации
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Хорошая техническая документация имеет четкую и логичную структуру, которая помогает пользователям быстро находить нужную информацию.
          </p>
        </div>

        <div className="mt-6 bg-gray-900/50 p-5 rounded-xl border border-purple-700/30">
          <h3 className="font-bold text-purple-300 mb-3">Типичная структура документации:</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <p className="text-gray-400 text-sm mb-2">Основные разделы:</p>
              <ul className="space-y-3 text-gray-300 text-sm">
                <li className="flex items-start gap-2">
                  <span className="font-bold text-purple-400 mt-1">1.</span>
                  <span><span className="font-medium">Заголовок и описание:</span> Название проекта, краткое описание, бейджи статуса</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold text-purple-400 mt-1">2.</span>
                  <span><span className="font-medium">Оглавление:</span> Навигация по документу</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold text-purple-400 mt-1">3.</span>
                  <span><span className="font-medium">Установка:</span> Пошаговое руководство по установке и настройке</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold text-purple-400 mt-1">4.</span>
                  <span><span className="font-medium">Использование:</span> Основные сценарии использования и примеры</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold text-purple-400 mt-1">5.</span>
                  <span><span className="font-medium">API/Справочник:</span> Подробное описание функций, параметров, возвращаемых значений</span>
                </li>
              </ul>
            </div>
            <div>
              <p className="text-gray-400 text-sm mb-2">Дополнительные разделы:</p>
              <ul className="space-y-3 text-gray-300 text-sm">
                <li className="flex items-start gap-2">
                  <span className="font-bold text-purple-400 mt-1">6.</span>
                  <span><span className="font-medium">Примеры:</span> Практические примеры кода и использования</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold text-purple-400 mt-1">7.</span>
                  <span><span className="font-medium">Диаграммы:</span> Визуализация архитектуры и процессов</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold text-purple-400 mt-1">8.</span>
                  <span><span className="font-medium">Формулы:</span> Математические выражения и алгоритмы</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold text-purple-400 mt-1">9.</span>
                  <span><span className="font-medium">Ссылки:</span> Полезные ресурсы, связанные проекты, сообщество</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold text-purple-400 mt-1">10.</span>
                  <span><span className="font-medium">Вклад в проект:</span> Руководство для контрибьюторов</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-6 bg-gray-900/30 p-4 rounded-lg border border-gray-700">
          <h4 className="font-bold text-white mb-2">Принципы организации:</h4>
          <ul className="list-disc pl-5 space-y-2 text-gray-300 text-sm">
            <li>Размещайте наиболее важную информацию в начале</li>
            <li>Используйте иерархию заголовков для структурирования</li>
            <li>Добавляйте горизонтальные разделители между крупными разделами</li>
            <li>Создавайте перекрестные ссылки между связанными разделами</li>
            <li>Поддерживайте последовательный стиль написания</li>
          </ul>
        </div>
      </div>

      {/* Использование всех изученных элементов */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Code className="w-5 h-5 text-cyan-400" />
          Использование всех изученных элементов Markdown
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            В этом итоговом проекте вы примените все изученные элементы Markdown:
          </p>
        </div>

        <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-gray-900/50 p-5 rounded-xl border border-cyan-700/30">
            <h3 className="font-bold text-cyan-300 mb-3">Текстовое форматирование:</h3>
            <ul className="space-y-3 text-gray-300 text-sm">
              <li className="flex items-start gap-2">
                <span className="font-bold text-cyan-400 mt-1">•</span>
                <span><span className="font-medium">Заголовки:</span> Используйте H1-H6 для структурирования документа</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold text-cyan-400 mt-1">•</span>
                <span><span className="font-medium">Форматирование:</span> Жирный, курсив, зачёркнутый текст</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold text-cyan-400 mt-1">•</span>
                <span><span className="font-medium">Списки:</span> Маркированные, нумерованные, вложенные</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold text-cyan-400 mt-1">•</span>
                <span><span className="font-medium">Цитаты:</span> Для выделения важной информации и примеров</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold text-cyan-400 mt-1">•</span>
                <span><span className="font-medium">Код:</span> Инлайновый и блочный код с подсветкой синтаксиса</span>
              </li>
            </ul>
          </div>
          <div className="bg-gray-900/50 p-5 rounded-xl border border-green-700/30">
            <h3 className="font-bold text-green-300 mb-3">Дополнительные элементы:</h3>
            <ul className="space-y-3 text-gray-300 text-sm">
              <li className="flex items-start gap-2">
                <span className="font-bold text-green-400 mt-1">•</span>
                <span><span className="font-medium">Ссылки:</span> Внешние и внутренние (якорные) ссылки</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold text-green-400 mt-1">•</span>
                <span><span className="font-medium">Изображения:</span> Скриншоты, диаграммы, иконки</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold text-green-400 mt-1">•</span>
                <span><span className="font-medium">Таблицы:</span> Для структурирования данных и параметров</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold text-green-400 mt-1">•</span>
                <span><span className="font-medium">Диаграммы:</span> Mermaid для визуализации архитектуры</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold text-green-400 mt-1">•</span>
                <span><span className="font-medium">Формулы:</span> LaTeX для математических выражений</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-4">
          <div className="bg-gray-900/50 p-4 rounded-xl border border-blue-700/30">
            <h3 className="font-bold text-blue-300 mb-2 flex items-center gap-2">
              <Zap className="w-5 h-5" />
              Интерактивность
            </h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-300 text-sm">
              <li>Todo-списки для задач и контрольных списков</li>
              <li>Комментарии для пояснений и заметок</li>
            </ul>
          </div>
          <div className="bg-gray-900/50 p-4 rounded-xl border border-yellow-700/30">
            <h3 className="font-bold text-yellow-300 mb-2 flex items-center gap-2">
              <Users className="w-5 h-5" />
              Совместная работа
            </h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-300 text-sm">
              <li>@Упоминания для обращения к участникам</li>
              <li>#Ссылки на задачи и PR в GitHub</li>
            </ul>
          </div>
          <div className="bg-gray-900/50 p-4 rounded-xl border border-pink-700/30">
            <h3 className="font-bold text-pink-300 mb-2 flex items-center gap-2">
              <FileText className="w-5 h-5" />
              Оформление
            </h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-300 text-sm">
              <li>Эмодзи для визуального выделения</li>
              <li>Горизонтальные линии для разделения</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Практические рекомендации */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Zap className="w-5 h-5 text-orange-400" />
          Практические рекомендации по созданию документации
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            При создании технической документации следуйте этим рекомендациям:
          </p>
        </div>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-900/50 p-5 rounded-xl border border-orange-700/30">
            <h3 className="font-bold text-orange-300 mb-3">Содержание документации:</h3>
            <ul className="space-y-3 text-gray-300 text-sm">
              <li className="flex items-start gap-2">
                <span className="font-bold text-orange-400 mt-1">✓</span>
                <span><span className="font-medium">Начните с основ:</span> Установка, быстрый старт, основные концепции</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold text-orange-400 mt-1">✓</span>
                <span><span className="font-medium">Используйте примеры:</span> Конкретные примеры кода и использования</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold text-orange-400 mt-1">✓</span>
                <span><span className="font-medium">Добавляйте скриншоты:</span> Визуальные пособия улучшают понимание</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold text-orange-400 mt-1">✓</span>
                <span><span className="font-medium">Структурируйте информацию:</span> Используйте заголовки и списки</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold text-orange-400 mt-1">✓</span>
                <span><span className="font-medium">Пишите для своей аудитории:</span> Учитывайте уровень подготовки читателей</span>
              </li>
            </ul>
          </div>
          <div className="bg-gray-900/50 p-5 rounded-xl border border-yellow-700/30">
            <h3 className="font-bold text-yellow-300 mb-3">Технические аспекты:</h3>
            <ul className="space-y-3 text-gray-300 text-sm">
              <li className="flex items-start gap-2">
                <span className="font-bold text-yellow-400 mt-1">✓</span>
                <span><span className="font-medium">Проверяйте в предпросмотре:</span> Регулярно смотрите, как выглядит документ</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold text-yellow-400 mt-1">✓</span>
                <span><span className="font-medium">Используйте правильные отступы:</span> Делайте код читаемым</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold text-yellow-400 mt-1">✓</span>
                <span><span className="font-medium">Добавляйте комментарии:</span> Для пояснений и задач</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold text-yellow-400 mt-1">✓</span>
                <span><span className="font-medium">Проверяйте ссылки:</span> Убедитесь, что все ссылки работают</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold text-yellow-400 mt-1">✓</span>
                <span><span className="font-medium">Используйте бейджи:</span> Для отображения статуса и метрик</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-6 bg-red-900/20 border border-red-700/30 rounded-lg p-4">
          <h4 className="font-bold text-red-300 mb-2 flex items-center gap-2">
            <span className="bg-red-500/20 w-6 h-6 rounded-full flex items-center justify-center text-sm">!</span>
            Важные замечания:
          </h4>
          <ul className="list-disc pl-5 space-y-2 text-gray-300 text-sm">
            <li>Документация должна быть живой — регулярно обновляйте её</li>
            <li>Избегайте jargon и технического сленга без объяснения</li>
            <li>Добавляйте информацию о версиях и совместимости</li>
            <li>Учитывайте доступность (accessibility) при оформлении</li>
            <li>Предоставляйте несколько способов получения помощи</li>
          </ul>
        </div>
      </div>

      {/* Пример структуры проекта */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <BookOpen className="w-5 h-5 text-pink-400" />
          Пример структуры итогового проекта
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Вот как может выглядеть структура документации для вымышленного проекта "DataProcessor":
          </p>
        </div>

        <div className="mt-6 bg-gray-900/50 p-5 rounded-xl border border-pink-700/30">
          <h3 className="font-bold text-pink-300 mb-3">Документация DataProcessor:</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <p className="text-gray-400 text-sm mb-2">Структура документа:</p>
              <pre className="bg-gray-800 p-4 rounded text-sm text-gray-300"><code>{`# DataProcessor

## Описание
## Возможности
## Установка
## Быстрый старт
## Использование
## API
## Примеры
## Диаграммы
## Формулы
## Вклад в проект
## Лицензия
## Контакты`}</code></pre>
            </div>
            <div>
              <p className="text-gray-400 text-sm mb-2">Пример содержания:</p>
              <pre className="bg-gray-800 p-4 rounded text-sm text-gray-300"><code>{`# DataProcessor

Библиотека для обработки данных 🚀

[![Build Status](https://travis-ci.org/user/repo.svg?branch=master)](https://travis-ci.org/user/repo)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Описание

DataProcessor - это мощная библиотека для обработки и анализа данных в формате JSON и CSV.

## Установка

\`\`\`bash
npm install dataprocessor
\`\`\`

## Быстрый старт

\`\`\`javascript
import { processData } from 'dataprocessor';

const data = [{id: 1, name: 'Test'}];
const result = processData(data);
\`\`\``}</code></pre>
            </div>
          </div>
        </div>
      </div>

      {/* Заключение */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <div className="flex items-start gap-3">
          <div className="bg-green-500/20 p-2 rounded-lg flex-shrink-0">
            <Trophy className="w-5 h-5 text-green-400" />
          </div>
          <div>
            <h3 className="font-bold text-white mb-2">Поздравляем! 🎉</h3>
            <p className="text-gray-300">
              Теперь вы готовы создать полноценную техническую документацию, применив все изученные навыки Markdown. 
              В этом итоговом проекте вы объедините заголовки, списки, код, таблицы, диаграммы, формулы и другие элементы 
              для создания профессиональной документации к open-source проекту. 
              Это отличный способ продемонстрировать свои знания и создать полезный ресурс для сообщества разработчиков.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Part1;
