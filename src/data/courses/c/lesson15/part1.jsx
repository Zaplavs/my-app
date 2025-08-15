// src/data/courses/c/lesson15/part1.jsx
import React from 'react';
import { Factory, Users, Search, Save, Menu, FileText } from 'lucide-react';

const Part1 = () => {
  return (
    <div className="space-y-8 text-gray-200">
      {/* Вступление */}
      <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 backdrop-blur-sm border border-blue-700/30 rounded-2xl p-6 shadow-lg">
        <div className="flex items-start gap-4">
          <div className="bg-blue-500/20 p-3 rounded-lg">
            <Factory className="w-6 h-6 text-blue-400" />
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">🏭 Урок 15: Итоговый проект — Система учета рабочих завода</h1>
            <h2 className="text-xl font-semibold text-blue-300 mb-3">Постановка задачи и планирование разработки</h2>
            <p className="text-gray-300">
              <span className="font-medium text-yellow-400">🎯 Цель урока:</span> Понять требования к итоговому проекту и спланировать его реализацию.
            </p>
          </div>
        </div>
      </div>

      {/* Что такое итоговый проект? */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <FileText className="w-5 h-5 text-green-400" />
          Что такое итоговый проект?
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            <span className="font-medium text-green-300">Итоговый проект</span> — это комплексная программа, которая объединяет все изученные концепции языка C в одну работающую систему.
          </p>
          <div className="mt-4 p-3 bg-blue-900/20 border border-blue-700/30 rounded-lg flex items-start gap-2">
            <Factory className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
            <p className="text-blue-300 text-sm">
              <span className="font-medium">💡 Представьте:</span> Итоговый проект — как выпускной экзамен, 
              где вы демонстрируете все свои знания и навыки, создавая реальную полезную программу.
            </p>
          </div>
          <div className="mt-4 grid md:grid-cols-2 gap-4">
            <div className="bg-gray-900/50 p-4 rounded-lg">
              <h4 className="font-medium text-white mb-2">Что вы будете использовать:</h4>
              <ul className="list-disc pl-5 space-y-1 text-gray-300 text-sm">
                <li>Переменные и типы данных</li>
                <li>Условные операторы и циклы</li>
                <li>Функции и их параметры</li>
                <li>Массивы и структуры</li>
                <li>Указатели и динамическая память</li>
                <li>Работу с файлами</li>
              </ul>
            </div>
            <div className="bg-gray-900/50 p-4 rounded-lg">
              <h4 className="font-medium text-white mb-2">Что вы создадите:</h4>
              <ul className="list-disc pl-5 space-y-1 text-gray-300 text-sm">
                <li>Интерактивное меню</li>
                <li>Систему хранения данных</li>
                <li>Возможность поиска информации</li>
                <li>Сохранение и загрузку данных</li>
                <li>Удобный пользовательский интерфейс</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Постановка задачи */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Menu className="w-5 h-5 text-purple-400" />
          Постановка задачи: Система учета рабочих завода
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Вам нужно создать программу для автоматизации учета рабочих на заводе. Это будет полноценная система управления персоналом с сохранением данных.
          </p>
        </div>

        <div className="mt-6 space-y-6">
          <div className="bg-gray-900/50 p-5 rounded-xl border border-cyan-700/30">
            <h3 className="font-bold text-cyan-300 mb-3 flex items-center gap-2">
              <Factory className="w-5 h-5" />
              Основное описание проекта:
            </h3>
            <div className="bg-gray-800 p-4 rounded-lg">
              <p className="text-cyan-300 text-center text-lg">
                "Создать программу учета рабочих завода с возможностью добавления, просмотра, поиска и сохранения данных"
              </p>
            </div>
          </div>

          <div className="bg-gray-900/50 p-5 rounded-xl border border-green-700/30">
            <h3 className="font-bold text-green-300 mb-3 flex items-center gap-2">
              <Users className="w-5 h-5" />
              Основные функции программы:
            </h3>
            <ul className="list-decimal pl-6 space-y-3 text-gray-300">
              <li className="flex items-start gap-2">
                <span className="font-medium">Добавление рабочих</span>
                <span>- возможность ввода информации о новых сотрудниках</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-medium">Просмотр всех рабочих</span>
                <span>- отображение полного списка сотрудников</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-medium">Поиск по имени</span>
                <span>- возможность найти конкретного сотрудника по ФИО</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-medium">Сохранение в файл</span>
                <span>- запись всех данных в текстовый файл</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-medium">Выход из программы</span>
                <span>- корректное завершение работы с сохранением данных</span>
              </li>
            </ul>
          </div>

          <div className="bg-gray-900/50 p-5 rounded-xl border border-blue-700/30">
            <h3 className="font-bold text-blue-300 mb-3 flex items-center gap-2">
              <Search className="w-5 h-5" />
              Требования к данным рабочего:
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-gray-800 p-4 rounded-lg">
                <h4 className="font-medium text-white mb-3">Обязательные поля:</h4>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center gap-2">
                    <span className="bg-gray-700 px-2 py-1 rounded text-sm">ФИО</span>
                    <span className="text-sm">- строка (имя и фамилия)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="bg-gray-700 px-2 py-1 rounded text-sm">Возраст</span>
                    <span className="text-sm">- целое число</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="bg-gray-700 px-2 py-1 rounded text-sm">Зарплата</span>
                    <span className="text-sm">- дробное число</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="bg-gray-700 px-2 py-1 rounded text-sm">Табельный номер</span>
                    <span className="text-sm">- уникальный идентификатор</span>
                  </li>
                </ul>
              </div>
              <div className="bg-gray-800 p-4 rounded-lg">
                <h4 className="font-medium text-white mb-3">Дополнительные поля (по желанию):</h4>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center gap-2">
                    <span className="bg-gray-700 px-2 py-1 rounded text-sm">Должность</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="bg-gray-700 px-2 py-1 rounded text-sm">Дата приема</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="bg-gray-700 px-2 py-1 rounded text-sm">Стаж работы</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="bg-gray-700 px-2 py-1 rounded text-sm">Отдел</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Технические требования */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Save className="w-5 h-5 text-orange-400" />
          Технические требования к реализации
        </h2>
        
        <div className="mt-6 space-y-6">
          <div className="bg-gray-900/50 p-5 rounded-xl border border-orange-700/30">
            <h3 className="font-bold text-orange-300 mb-3">1. Структура данных:</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>Использовать <span className="font-medium">структуры</span> для хранения информации о рабочих</li>
              <li>Создать <span className="font-medium">массив структур</span> или использовать <span className="font-medium">динамическую память</span></li>
              <li>Реализовать <span className="font-medium">typedef</span> для удобства работы со структурой</li>
            </ul>
          </div>

          <div className="bg-gray-900/50 p-5 rounded-xl border border-purple-700/30">
            <h3 className="font-bold text-purple-300 mb-3">2. Интерфейс пользователя:</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>Реализовать <span className="font-medium">интерактивное меню</span> в цикле <code className="bg-gray-700 px-1.5 py-0.5 rounded">while</code></li>
              <li>Обеспечить <span className="font-medium">валидацию ввода</span> данных пользователем</li>
              <li>Предусмотреть <span className="font-medium">обработку ошибок</span> при вводе</li>
              <li>Сделать <span className="font-medium">понятные сообщения</span> для пользователя</li>
            </ul>
          </div>

          <div className="bg-gray-900/50 p-5 rounded-xl border border-red-700/30">
            <h3 className="font-bold text-red-300 mb-3">3. Работа с файлами:</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>Реализовать <span className="font-medium">запись данных</span> в файл при выходе из программы</li>
              <li>Обеспечить <span className="font-medium">загрузку данных</span> при запуске программы</li>
              <li>Использовать <span className="font-medium">режимы "w"</span> и <span className="font-medium">"r"</span> для работы с файлами</li>
              <li>Обработать <span className="font-medium">ошибки файловой системы</span></li>
            </ul>
          </div>

          <div className="bg-gray-900/50 p-5 rounded-xl border border-yellow-700/30">
            <h3 className="font-bold text-yellow-300 mb-3">4. Функциональные модули:</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>Создать <span className="font-medium">отдельные функции</span> для каждой операции</li>
              <li>Реализовать <span className="font-medium">функцию поиска</span> по имени или табельному номеру</li>
              <li>Сделать <span className="font-medium">функцию отображения</span> списка рабочих</li>
              <li>Реализовать <span className="font-medium">функцию добавления</span> нового рабочего</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Планирование разработки */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Menu className="w-5 h-5 text-green-400" />
          Этапы разработки проекта
        </h2>
        
        <div className="mt-6 space-y-4">
          <div className="bg-gray-900/50 p-4 rounded-xl border border-green-700/30">
            <h3 className="font-bold text-green-300 mb-2 flex items-center gap-2">
              <span className="bg-green-600 w-6 h-6 rounded-full flex items-center justify-center text-white text-sm">1</span>
              Проектирование структуры данных
            </h3>
            <p className="text-gray-300 text-sm ml-8">
              Определить структуру Worker, создать typedef, спланировать поля и их типы
            </p>
          </div>
          
          <div className="bg-gray-900/50 p-4 rounded-xl border border-blue-700/30">
            <h3 className="font-bold text-blue-300 mb-2 flex items-center gap-2">
              <span className="bg-blue-600 w-6 h-6 rounded-full flex items-center justify-center text-white text-sm">2</span>
              Реализация базовых функций
            </h3>
            <p className="text-gray-300 text-sm ml-8">
              Создать функции для добавления, отображения и поиска рабочих в памяти
            </p>
          </div>
          
          <div className="bg-gray-900/50 p-4 rounded-xl border border-purple-700/30">
            <h3 className="font-bold text-purple-300 mb-2 flex items-center gap-2">
              <span className="bg-purple-600 w-6 h-6 rounded-full flex items-center justify-center text-white text-sm">3</span>
              Создание меню и основного цикла
            </h3>
            <p className="text-gray-300 text-sm ml-8">
              Реализовать интерактивное меню с обработкой выбора пользователя
            </p>
          </div>
          
          <div className="bg-gray-900/50 p-4 rounded-xl border border-orange-700/30">
            <h3 className="font-bold text-orange-300 mb-2 flex items-center gap-2">
              <span className="bg-orange-600 w-6 h-6 rounded-full flex items-center justify-center text-white text-sm">4</span>
              Интеграция работы с файлами
            </h3>
            <p className="text-gray-300 text-sm ml-8">
              Добавить функции загрузки данных при запуске и сохранения при выходе
            </p>
          </div>
          
          <div className="bg-gray-900/50 p-4 rounded-xl border border-red-700/30">
            <h3 className="font-bold text-red-300 mb-2 flex items-center gap-2">
              <span className="bg-red-600 w-6 h-6 rounded-full flex items-center justify-center text-white text-sm">5</span>
              Тестирование и отладка
            </h3>
            <p className="text-gray-300 text-sm ml-8">
              Проверить все функции, обработать ошибки, убедиться в корректной работе
            </p>
          </div>
        </div>
      </div>

      {/* Заключение */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <div className="flex items-start gap-3">
          <div className="bg-green-500/20 p-2 rounded-lg flex-shrink-0">
            <Factory className="w-5 h-5 text-green-400" />
          </div>
          <div>
            <h3 className="font-bold text-white mb-2">Готовы к вызову! 🏭</h3>
            <p className="text-gray-300">
              Теперь вы знаете, что нужно создать в итоговом проекте. Это комплексная задача, которая объединяет все ваши знания по языку C. 
              В следующих частях урока мы реализуем каждый этап проекта шаг за шагом, создав полноценную систему учета рабочих завода.
              Этот проект станет отличным портфолио и докажет ваше мастерство в программировании на C!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Part1;