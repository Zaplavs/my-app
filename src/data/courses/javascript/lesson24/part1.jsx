// src/data/courses/javascript/lesson24/part1.jsx
import React from 'react';
import { Calculator, Plus, Minus, X, Divide, Equal, Delete, RotateCw } from 'lucide-react';

const Part1 = () => {
  return (
    <div className="space-y-8 text-gray-200">
      {/* Вступление */}
      <div className="bg-gradient-to-r from-orange-900/30 to-red-900/30 backdrop-blur-sm border border-orange-700/30 rounded-2xl p-6 shadow-lg">
        <div className="flex items-start gap-4">
          <div className="bg-orange-500/20 p-3 rounded-lg">
            <Calculator className="w-6 h-6 text-orange-400" />
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">📚 Урок 24: Итоговое задание: интерактивный калькулятор</h1>
            <h2 className="text-xl font-semibold text-orange-300 mb-3">Комплексное применение всех изученных концепций</h2>
            <p className="text-gray-300">
              <span className="font-medium text-yellow-400">🎯 Цель урока:</span> Создать полнофункциональный калькулятор, объединяющий работу с DOM, событиями, функциями и логикой вычислений.
            </p>
          </div>
        </div>
      </div>

      {/* Планирование проекта */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Calculator className="w-5 h-5 text-blue-400" />
          Планирование калькулятора
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Перед началом разработки важно <span className="font-medium text-yellow-300">спланировать</span> структуру калькулятора и определить <span className="font-medium text-blue-300">основные функции</span>.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
            <div className="bg-gray-900/50 p-4 rounded-xl border border-blue-700/30">
              <h3 className="font-bold text-blue-300 mb-3">Основные функции калькулятора:</h3>
              <ul className="list-disc pl-5 space-y-2 text-sm text-gray-300">
                <li><Plus className="w-4 h-4 inline mr-1" /> Сложение, вычитание, умножение, деление</li>
                <li><Equal className="w-4 h-4 inline mr-1" /> Вычисление результата</li>
                <li><Delete className="w-4 h-4 inline mr-1" /> Очистка (C и CE)</li>
                <li><RotateCw className="w-4 h-4 inline mr-1" /> Удаление последнего символа</li>
                <li>Десятичные числа</li>
                <li>Последовательные вычисления</li>
                <li>Обработка ошибок (деление на ноль)</li>
              </ul>
            </div>

            <div className="bg-gray-900/50 p-4 rounded-xl border border-green-700/30">
              <h3 className="font-bold text-green-300 mb-3">Структура данных:</h3>
              <ul className="list-disc pl-5 space-y-2 text-sm text-gray-300">
                <li><span className="font-medium">Текущее значение</span> — отображаемое число</li>
                <li><span className="font-medium">Первое число</span> — операнд для вычислений</li>
                <li><span className="font-medium">Оператор</span> — текущая операция</li>
                <li><span className="font-medium">Ожидание второго числа</span> — флаг состояния</li>
                <li><span className="font-medium">Предыдущее значение</span> — для истории</li>
              </ul>
            </div>
          </div>

          <div className="mt-6 bg-gray-900/50 p-5 rounded-xl border border-purple-700/30">
            <h3 className="font-bold text-purple-300 mb-3">Архитектура приложения:</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-gray-800 p-3 rounded">
                <div className="text-xs text-gray-400 mb-2">Модель (Данные):</div>
                <ul className="list-disc pl-5 text-sm text-gray-300">
                  <li>Состояние калькулятора</li>
                  <li>Функции вычислений</li>
                </ul>
              </div>
              <div className="bg-gray-800 p-3 rounded">
                <div className="text-xs text-gray-400 mb-2">Представление (UI):</div>
                <ul className="list-disc pl-5 text-sm text-gray-300">
                  <li>HTML разметка</li>
                  <li>Обновление дисплея</li>
                </ul>
              </div>
              <div className="bg-gray-800 p-3 rounded">
                <div className="text-xs text-gray-400 mb-2">Контроллер (Логика):</div>
                <ul className="list-disc pl-5 text-sm text-gray-300">
                  <li>Обработка событий</li>
                  <li>Управление состоянием</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Создание HTML-структуры */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Calculator className="w-5 h-5 text-green-400" />
          Шаг 1: Создание HTML-структуры
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Начните с создания <span className="font-medium text-green-300">базовой HTML-разметки</span> для калькулятора.
          </p>

          <div className="mt-4 bg-gray-900/50 p-5 rounded-xl border border-green-700/30">
            <h3 className="font-bold text-green-300 mb-3">Элементы калькулятора:</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-300">
              <li><span className="font-medium">Дисплей</span> — для отображения текущего значения</li>
              <li><span className="font-medium">Цифровые кнопки</span> — 0-9</li>
              <li><span className="font-medium">Операторные кнопки</span> — +, -, *, /</li>
              <li><span className="font-medium">Специальные кнопки</span> — =, C, CE, .</li>
              <li><span className="font-medium">Кнопка удаления</span> — удаление последнего символа</li>
            </ul>
          </div>

          <div className="mt-4 p-3 bg-blue-900/20 border border-blue-700/30 rounded-lg">
            <p className="text-blue-300 text-sm">
              <span className="font-medium">💡 Совет:</span> Используйте семантические классы для кнопок (например, data-action="add" для кнопки сложения) и добавьте ID для дисплея.
            </p>
          </div>
        </div>
      </div>

      {/* Инициализация состояния калькулятора */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <RotateCw className="w-5 h-5 text-yellow-400" />
          Шаг 2: Инициализация состояния калькулятора
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Создайте <span className="font-medium text-yellow-300">объект состояния</span> для хранения данных калькулятора.
          </p>

          <div className="mt-4 bg-gray-900/50 p-5 rounded-xl border border-yellow-700/30">
            <h3 className="font-bold text-yellow-300 mb-3">Свойства состояния:</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-300">
              <li><span className="font-medium">displayValue</span> — текущее отображаемое значение</li>
              <li><span className="font-medium">firstOperand</span> — первое число для операции</li>
              <li><span className="font-medium">waitingForSecondOperand</span> — флаг ожидания второго числа</li>
              <li><span className="font-medium">operator</span> — текущий оператор (+, -, *, /)</li>
              <li><span className="font-medium">shouldResetDisplay</span> — флаг сброса дисплея</li>
            </ul>
          </div>

          <div className="mt-4 p-3 bg-purple-900/20 border border-purple-700/30 rounded-lg">
            <p className="text-purple-300 text-sm">
              <span className="font-medium">💡 Совет:</span> Создайте функцию resetCalculator() для сброса всех значений в начальное состояние.
            </p>
          </div>
        </div>
      </div>

      {/* Обработка цифровых кнопок */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Plus className="w-5 h-5 text-cyan-400" />
          Шаг 3: Обработка цифровых кнопок
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Реализуйте <span className="font-medium text-cyan-300">функциональность ввода цифр</span> и формирования чисел.
          </p>

          <div className="mt-4 bg-gray-900/50 p-5 rounded-xl border border-cyan-700/30">
            <h3 className="font-bold text-cyan-300 mb-3">Основные задачи:</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-300">
              <li>Добавление цифр к текущему значению</li>
              <li>Обработка десятичной точки</li>
              <li>Предотвращение множественных точек</li>
              <li>Сброс дисплея при необходимости</li>
              <li>Ограничение длины ввода</li>
            </ul>
          </div>

          <div className="mt-4 p-3 bg-green-900/20 border border-green-700/30 rounded-lg">
            <p className="text-green-300 text-sm">
              <span className="font-medium">💡 Совет:</span> Создайте функцию inputDigit(digit), которая будет обрабатывать нажатие цифровых кнопок.
            </p>
          </div>
        </div>
      </div>

      {/* Обработка операторов */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <X className="w-5 h-5 text-red-400" />
          <Divide className="w-5 h-5 text-blue-400" />
          Шаг 4: Обработка операторов
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Реализуйте <span className="font-medium text-red-300">функциональность математических операторов</span>.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
            <div className="bg-gray-900/50 p-4 rounded-xl border border-red-700/30">
              <h3 className="font-bold text-red-300 mb-3">Операторные функции:</h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-300">
                <li>Функция handleOperator(operator)</li>
                <li>Вычисление промежуточных результатов</li>
                <li>Сохранение первого операнда</li>
                <li>Установка флагов состояния</li>
                <li>Обновление дисплея</li>
              </ul>
            </div>

            <div className="bg-gray-900/50 p-4 rounded-xl border border-blue-700/30">
              <h3 className="font-bold text-blue-300 mb-3">Логика операторов:</h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-300">
                <li>Проверка наличия первого числа</li>
                <li>Выполнение предыдущей операции</li>
                <li>Обработка последовательных операторов</li>
                <li>Сброс флагов после операции</li>
              </ul>
            </div>
          </div>

          <div className="mt-4 p-3 bg-orange-900/20 border border-orange-700/30 rounded-lg">
            <p className="text-orange-300 text-sm">
              <span className="font-medium">💡 Совет:</span> Создайте отдельную функцию calculate(first, second, operator) для выполнения математических операций.
            </p>
          </div>
        </div>
      </div>

      {/* Вычисление результата */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Equal className="w-5 h-5 text-green-400" />
          Шаг 5: Вычисление результата
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Реализуйте <span className="font-medium text-green-300">функциональность вычисления</span> и отображения результата.
          </p>

          <div className="mt-4 bg-gray-900/50 p-5 rounded-xl border border-green-700/30">
            <h3 className="font-bold text-green-300 mb-3">Функция результата:</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-300">
              <li>Функция handleEquals()</li>
              <li>Проверка наличия всех операндов</li>
              <li>Выполнение финального вычисления</li>
              <li>Обновление состояния калькулятора</li>
              <li>Отображение результата</li>
              <li>Подготовка к следующим вычислениям</li>
            </ul>
          </div>

          <div className="mt-4 p-3 bg-purple-900/20 border border-purple-700/30 rounded-lg">
            <p className="text-purple-300 text-sm">
              <span className="font-medium">💡 Совет:</span> После вычисления результата установите флаг waitingForSecondOperand в true, чтобы следующее число начинало новую операцию.
            </p>
          </div>
        </div>
      </div>

      {/* Специальные функции */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Delete className="w-5 h-5 text-orange-400" />
          <RotateCw className="w-5 h-5 text-cyan-400" />
          Шаг 6: Специальные функции
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Добавьте <span className="font-medium text-orange-300">специальные функции</span> для удобства использования.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
            <div className="bg-gray-900/50 p-4 rounded-xl border border-orange-700/30">
              <h3 className="font-bold text-orange-300 mb-3">Функции очистки:</h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-300">
                <li><span className="font-medium">Очистка всего (C)</span> — сброс к начальному состоянию</li>
                <li><span className="font-medium">Очистка ввода (CE)</span> — очистка текущего значения</li>
                <li>Функция resetCalculator()</li>
                <li>Функция clearEntry()</li>
              </ul>
            </div>

            <div className="bg-gray-900/50 p-4 rounded-xl border border-cyan-700/30">
              <h3 className="font-bold text-cyan-300 mb-3">Дополнительные функции:</h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-300">
                <li><span className="font-medium">Удаление символа</span> — удаление последней цифры</li>
                <li><span className="font-medium">Изменение знака</span> — +/- функция</li>
                <li><span className="font-medium">Проценты</span> — % функция</li>
                <li><span className="font-medium">Обработка ошибок</span> — деление на ноль, переполнение</li>
              </ul>
            </div>
          </div>

          <div className="mt-4 p-3 bg-red-900/20 border border-red-700/30 rounded-lg">
            <p className="text-red-300 text-sm">
              <span className="font-medium">💡 Совет:</span> Реализуйте обработку ошибок через специальные значения (например, "Error") и автоматическую очистку через таймер.
            </p>
          </div>
        </div>
      </div>

      {/* Обновление дисплея */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Calculator className="w-5 h-5 text-blue-400" />
          Шаг 7: Обновление дисплея
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Создайте <span className="font-medium text-blue-300">функцию обновления дисплея</span> для отображения текущего значения.
          </p>

          <div className="mt-4 bg-gray-900/50 p-5 rounded-xl border border-blue-700/30">
            <h3 className="font-bold text-blue-300 mb-3">Функциональность дисплея:</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-300">
              <li>Функция updateDisplay()</li>
              <li>Форматирование чисел</li>
              <li>Ограничение длины отображения</li>
              <li>Обработка специальных значений (Error, Infinity)</li>
              <li>Анимация обновления (опционально)</li>
            </ul>
          </div>

          <div className="mt-4 p-3 bg-green-900/20 border border-green-700/30 rounded-lg">
            <p className="text-green-300 text-sm">
              <span className="font-medium">💡 Совет:</span> Используйте textContent для безопасного обновления дисплея и добавьте CSS для стилизации.
            </p>
          </div>
        </div>
      </div>

      {/* Обработка событий */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Plus className="w-5 h-5 text-purple-400" />
          <Minus className="w-5 h-5 text-red-400" />
          Шаг 8: Обработка событий
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Реализуйте <span className="font-medium text-purple-300">систему обработки событий</span> для всех кнопок калькулятора.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
            <div className="bg-gray-900/50 p-4 rounded-xl border border-purple-700/30">
              <h3 className="font-bold text-purple-300 mb-3">Типы событий:</h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-300">
                <li><span className="font-medium">Клик по кнопкам</span> — основной способ взаимодействия</li>
                <li><span className="font-medium">Клавиатурный ввод</span> — поддержка клавиатуры</li>
                <li><span className="font-medium">Касания</span> — для мобильных устройств</li>
                <li><span className="font-medium">Фокусировка</span> — для доступности</li>
              </ul>
            </div>

            <div className="bg-gray-900/50 p-4 rounded-xl border border-green-700/30">
              <h3 className="font-bold text-green-300 mb-3">Делегирование событий:</h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-300">
                <li>Использование одного обработчика для всех кнопок</li>
                <li>Определение типа действия через data-атрибуты</li>
                <li>Проверка типа кнопки (цифра, оператор, специальная)</li>
                <li>Предотвращение стандартного поведения</li>
              </ul>
            </div>
          </div>

          <div className="mt-4 p-3 bg-cyan-900/20 border border-cyan-700/30 rounded-lg">
            <p className="text-cyan-300 text-sm">
              <span className="font-medium">💡 Совет:</span> Используйте делегирование событий на контейнере калькулятора для эффективного управления множеством кнопок.
            </p>
          </div>
        </div>
      </div>

      {/* Тестирование и отладка */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <RotateCw className="w-5 h-5 text-orange-400" />
          Шаг 9: Тестирование и отладка
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Проведите <span className="font-medium text-orange-300">тестирование</span> калькулятора на различных сценариях использования.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
            <div className="bg-gray-900/50 p-4 rounded-xl border border-orange-700/30">
              <h3 className="font-bold text-orange-300 mb-3">Тестовые сценарии:</h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-300">
                <li><span className="font-medium">Базовые операции</span> — 2+2, 10-5, 3*4, 15/3</li>
                <li><span className="font-medium">Десятичные числа</span> — 1.5+2.7, 0.1+0.2</li>
                <li><span className="font-medium">Последовательные операции</span> — 2+3*4</li>
                <li><span className="font-medium">Граничные случаи</span> — деление на ноль, большие числа</li>
                <li><span className="font-medium">Специальные кнопки</span> — C, CE, удаление символов</li>
              </ul>
            </div>

            <div className="bg-gray-900/50 p-4 rounded-xl border border-red-700/30">
              <h3 className="font-bold text-red-300 mb-3">Отладка и оптимизация:</h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-300">
                <li>Использование console.log для отслеживания состояния</li>
                <li>Проверка корректности вычислений</li>
                <li>Оптимизация производительности</li>
                <li>Улучшение пользовательского опыта</li>
                <li>Тестирование на разных устройствах</li>
              </ul>
            </div>
          </div>

          <div className="mt-4 p-3 bg-blue-900/20 border border-blue-700/30 rounded-lg">
            <p className="text-blue-300 text-sm">
              <span className="font-medium">💡 Совет:</span> Создайте список тест-кейсов и проверяйте каждый функционал по отдельности перед интеграцией.
            </p>
          </div>
        </div>
      </div>

      {/* Расширение функциональности */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Calculator className="w-5 h-5 text-cyan-400" />
          Дополнительные улучшения
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            После создания базового калькулятора можно <span className="font-medium text-cyan-300">расширить</span> его функциональность.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
            <div className="bg-gray-900/50 p-4 rounded-xl border border-green-700/30">
              <h3 className="font-bold text-green-300 mb-2">Математические функции</h3>
              <ul className="list-disc pl-5 space-y-1 text-sm text-gray-300">
                <li>Квадратный корень (√)</li>
                <li>Возведение в степень (x², xʸ)</li>
                <li>Тригонометрические функции</li>
                <li>Логарифмы</li>
              </ul>
            </div>

            <div className="bg-gray-900/50 p-4 rounded-xl border border-blue-700/30">
              <h3 className="font-bold text-blue-300 mb-2">Интерфейсные улучшения</h3>
              <ul className="list-disc pl-5 space-y-1 text-sm text-gray-300">
                <li>Темы оформления</li>
                <li>Анимации кнопок</li>
                <li>История вычислений</li>
                <li>Копирование результата</li>
              </ul>
            </div>

            <div className="bg-gray-900/50 p-4 rounded-xl border border-purple-700/30">
              <h3 className="font-bold text-purple-300 mb-2">Технические улучшения</h3>
              <ul className="list-disc pl-5 space-y-1 text-sm text-gray-300">
                <li>Классовая архитектура</li>
                <li>Модульная структура</li>
                <li>Тестирование кода</li>
                <li>Документация</li>
              </ul>
            </div>
          </div>

          <div className="mt-6 bg-gray-900/50 p-5 rounded-xl border border-orange-700/30">
            <h3 className="font-bold text-orange-300 mb-3">Пример расширения:</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-300">
              <li>Добавьте кнопку для вычисления процента</li>
              <li>Реализуйте функцию изменения знака числа</li>
              <li>Создайте историю последних вычислений</li>
              <li>Добавьте поддержку клавиатурного ввода</li>
              <li>Реализуйте сохранение настроек в localStorage</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Заключение */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <div className="flex items-start gap-3">
          <div className="bg-orange-500/20 p-2 rounded-lg flex-shrink-0">
            <Calculator className="w-5 h-5 text-orange-400" />
          </div>
          <div>
            <h3 className="font-bold text-white mb-2">Поздравляем! 🎉</h3>
            <p className="text-gray-300">
              Вы создали полнофункциональный калькулятор, который объединяет все изученные концепции: работу с DOM, события, функции и логику вычислений. Это отличное завершение курса JavaScript!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Part1;