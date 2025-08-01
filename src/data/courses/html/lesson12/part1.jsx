// src/data/courses/html/lesson10/part1.jsx
import React from 'react';
// Импортируем все иконки, которые используются в файле
import { 
  Accessibility, // Основная иконка для доступности
  MousePointerClick, // Для навигации
// Для вступления
  CheckCircle, // Для итогов
  Square,
  ToggleRight,
  Circle,
  Check,
  Ban 
     // Для наград
} from 'lucide-react';

const Part1 = () => {
  return (
    <div className="space-y-8 text-gray-200">
      {/* Вступление */}
      <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 backdrop-blur-sm border border-blue-700/30 rounded-2xl p-6 shadow-lg">
        <div className="flex items-start gap-4">
          <div className="bg-blue-500/20 p-3 rounded-lg">
            <Square className="w-6 h-6 text-blue-400" />
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">🔘 Урок 12: Формы — Чекбоксы, радио-кнопки и кнопки</h1>
            <h2 className="text-xl font-semibold text-blue-300 mb-3">Расширенные элементы управления формой</h2>
            <p className="text-gray-300">
              <span className="font-medium text-yellow-400">🎯 Цель урока:</span> Освоить использование <span className="font-medium">чекбоксов</span> (<code className="bg-gray-700 px-1.5 py-0.5 rounded text-green-300">{'<input type="checkbox">'}</code>), <span className="font-medium">радио-кнопок</span> (<code className="bg-gray-700 px-1.5 py-0.5 rounded text-orange-300">{'<input type="radio">'}</code>), а также различных типов <span className="font-medium">кнопок</span> (<code className="bg-gray-700 px-1.5 py-0.5 rounded text-purple-300">{'<button>'}</code>, <code className="bg-gray-700 px-1.5 py-0.5 rounded text-cyan-300">{'<input type="submit">'}</code>). Понять назначение атрибутов <code className="bg-gray-700 px-1 rounded">required</code> и <code className="bg-gray-700 px-1 rounded">disabled</code>.
            </p>
          </div>
        </div>
      </div>

      {/* Роль расширенных элементов управления */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <MousePointerClick className="w-5 h-5 text-green-400" />
          Роль расширенных элементов управления в формах
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            В предыдущих уроках мы познакомились с базовыми полями ввода (<code className="bg-gray-700 px-1 rounded">text</code>, <code className="bg-gray-700 px-1 rounded">email</code>, <code className="bg-gray-700 px-1 rounded">password</code>) и кнопкой отправки (<code className="bg-gray-700 px-1 rounded">submit</code>).
          </p>
          <p>
            Однако, для <span className="font-medium">сложных</span> и <span className="font-medium">интерактивных</span> форм необходимы дополнительные элементы:
          </p>
        </div>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gray-900/50 p-5 rounded-xl border border-green-700/30">
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-green-500/20 p-2 rounded-lg">
                <ToggleRight className="w-5 h-5 text-green-400" />
              </div>
              <h3 className="font-bold text-green-300">Чекбоксы</h3>
            </div>
            <p className="text-gray-300 text-sm">
              Позволяют пользователю <span className="font-medium">выбрать</span> <span className="font-medium">один</span> или <span className="font-medium">несколько</span> вариантов из списка.
            </p>
          </div>
          <div className="bg-gray-900/50 p-5 rounded-xl border border-orange-700/30">
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-orange-500/20 p-2 rounded-lg">
                <Circle className="w-5 h-5 text-orange-400" />
              </div>
              <h3 className="font-bold text-orange-300">Радио-кнопки</h3>
            </div>
            <p className="text-gray-300 text-sm">
              Позволяют пользователю <span className="font-medium">выбрать только один</span> вариант из <span className="font-medium">группы</span>.
            </p>
          </div>
          <div className="bg-gray-900/50 p-5 rounded-xl border border-purple-700/30">
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-purple-500/20 p-2 rounded-lg">
                <MousePointerClick className="w-5 h-5 text-purple-400" />
              </div>
              <h3 className="font-bold text-purple-300">Кнопки</h3>
            </div>
            <p className="text-gray-300 text-sm">
              Предоставляют различные способы <span className="font-medium">взаимодействия</span> с формой: отправка, сброс, выполнение скриптов.
            </p>
          </div>
        </div>
        <div className="mt-6 p-3 bg-blue-900/20 border border-blue-700/30 rounded-lg">
          <p className="text-blue-300 text-sm flex items-start gap-2">
            <span className="font-medium">💡 Зачем это нужно?</span>
            <span>
              Эти элементы делают формы <span className="font-medium">интуитивно понятными</span> и <span className="font-medium">мощными</span>. Они позволяют собирать сложные данные (например, настройки пользователя, анкеты, опросы) и управлять поведением формы.
            </span>
          </p>
        </div>
      </div>

      {/* Чекбоксы <input type="checkbox"> */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Square className="w-5 h-5 text-green-400" />
          Чекбоксы {'<input type="checkbox">'}
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Тег <code className="bg-gray-700 px-1.5 py-0.5 rounded text-green-300">{'<input type="checkbox">'}</code> создает <span className="font-medium">переключатель</span>, который пользователь может <span className="font-medium">отметить</span> или <span className="font-medium">снять отметку</span>.
          </p>
        </div>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-900/50 p-5 rounded-xl border border-green-700/30">
            <p className="text-sm text-gray-400 mb-2">Пример HTML-кода:</p>
            <pre className="text-green-400 text-sm"><code>{`<input type="checkbox" id="subscribe" name="subscribe" value="yes">
<label for="subscribe">Подписаться на рассылку</label>`}</code></pre>
          </div>
          <div className="bg-gray-900/50 p-5 rounded-xl border border-cyan-700/30">
            <p className="text-sm text-gray-400 mb-2">Как отображается в браузере:</p>
            <div className="flex items-center gap-2">
              <input type="checkbox" id="subscribe-example" className="w-4 h-4 text-green-500 bg-gray-700 border-gray-600 rounded focus:ring-green-500 focus:ring-2" />
              <label htmlFor="subscribe-example" className="text-gray-300 text-sm">Подписаться на рассылку</label>
            </div>
          </div>
        </div>

        <div className="mt-6 prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            <span className="font-medium">Особенности чекбоксов:</span>
          </p>
        </div>
        <ul className="list-disc pl-5 space-y-2 text-gray-300 mt-2">
          <li>
            <span className="font-medium">Множественный выбор:</span> В одной форме может быть <span className="font-medium">несколько</span> чекбоксов с <span className="font-medium">одинаковым</span> <code className="bg-gray-700 px-1 rounded">name</code>, и пользователь может выбрать <span className="font-medium">любое количество</span> из них.
            <div className="mt-2 bg-gray-900 p-3 rounded-lg">
              <pre className="text-green-400 text-xs"><code>{`<input type="checkbox" id="news-tech" name="interests" value="tech">
<label for="news-tech">Технологии</label><br>
<input type="checkbox" id="news-sport" name="interests" value="sport">
<label for="news-sport">Спорт</label><br>
<input type="checkbox" id="news-music" name="interests" value="music">
<label for="news-music">Музыка</label>`}</code></pre>
            </div>
          </li>
          <li>
            <span className="font-medium">Атрибут <code className="bg-gray-700 px-1 rounded">value</code>:</span> Определяет <span className="font-medium">значение</span>, которое будет отправлено на сервер, если чекбокс <span className="font-medium">отмечен</span>. Если не указан, по умолчанию отправляется строка <code className="bg-gray-700 px-1 rounded">"on"</code>.
          </li>
          <li>
            <span className="font-medium">Атрибут <code className="bg-gray-700 px-1 rounded">checked</code>:</span> Делает чекбокс <span className="font-medium">отмеченным</span> по умолчанию.
            <div className="mt-2 bg-gray-900 p-3 rounded-lg">
              <pre className="text-green-400 text-xs"><code>{`<input type="checkbox" id="agree" name="agreed" value="yes" checked>
<label for="agree">Я согласен с условиями</label>`}</code></pre>
            </div>
          </li>
        </ul>
        <div className="mt-4 p-3 bg-blue-900/20 border border-blue-700/30 rounded-lg">
          <p className="text-blue-300 text-sm flex items-start gap-2">
            <span className="font-medium">💡 Важно:</span>
            <span>
              Для правильной работы чекбоксов <span className="font-medium">всегда</span> используйте тег <code className="bg-gray-700 px-1 rounded">{'<label>'}</code> с атрибутом <code className="bg-gray-700 px-1 rounded">for</code>, указывающим на <code className="bg-gray-700 px-1 rounded">id</code> чекбокса. Это улучшает <span className="font-medium">доступность</span> и позволяет кликнуть по надписи, чтобы отметить/снять галочку.
            </span>
          </p>
        </div>
      </div>

      {/* Радио-кнопки <input type="radio"> */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Circle className="w-5 h-5 text-orange-400" />
          Радио-кнопки {'<input type="radio">'}
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Тег <code className="bg-gray-700 px-1.5 py-0.5 rounded text-orange-300">{'<input type="radio">'}</code> создает <span className="font-medium">радио-кнопку</span>. Пользователь может выбрать <span className="font-medium">только один</span> вариант из <span className="font-medium">группы</span> радио-кнопок.
          </p>
        </div>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-900/50 p-5 rounded-xl border border-orange-700/30">
            <p className="text-sm text-gray-400 mb-2">Пример HTML-кода:</p>
            <pre className="text-orange-400 text-sm"><code>{`<input type="radio" id="gender-male" name="gender" value="male">
<label for="gender-male">Мужской</label><br>
<input type="radio" id="gender-female" name="gender" value="female">
<label for="gender-female">Женский</label>`}</code></pre>
          </div>
          <div className="bg-gray-900/50 p-5 rounded-xl border border-cyan-700/30">
            <p className="text-sm text-gray-400 mb-2">Как отображается в браузере:</p>
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <input type="radio" id="gender-male-example" name="gender-example" value="male" className="w-4 h-4 text-orange-500 bg-gray-700 border-gray-600 focus:ring-orange-500 focus:ring-2" />
                <label htmlFor="gender-male-example" className="text-gray-300 text-sm">Мужской</label>
              </div>
              <div className="flex items-center gap-2">
                <input type="radio" id="gender-female-example" name="gender-example" value="female" className="w-4 h-4 text-orange-500 bg-gray-700 border-gray-600 focus:ring-orange-500 focus:ring-2" />
                <label htmlFor="gender-female-example" className="text-gray-300 text-sm">Женский</label>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            <span className="font-medium">Особенности радио-кнопок:</span>
          </p>
        </div>
        <ul className="list-disc pl-5 space-y-2 text-gray-300 mt-2">
          <li>
            <span className="font-medium">Группировка:</span> Все радио-кнопки в <span className="font-medium">одной группе</span> должны иметь <span className="font-medium">одинаковое</span> значение атрибута <code className="bg-gray-700 px-1 rounded">name</code>.
          </li>
          <li>
            <span className="font-medium">Единственный выбор:</span> При выборе одного варианта, предыдущий <span className="font-medium">автоматически снимается</span>.
          </li>
          <li>
            <span className="font-medium">Атрибут <code className="bg-gray-700 px-1 rounded">value</code>:</span> Определяет <span className="font-medium">значение</span>, которое будет отправлено на сервер для выбранного варианта.
          </li>
          <li>
            <span className="font-medium">Атрибут <code className="bg-gray-700 px-1 rounded">checked</code>:</span> Делает конкретную радио-кнопку <span className="font-medium">выбранной</span> по умолчанию.
            <div className="mt-2 bg-gray-900 p-3 rounded-lg">
              <pre className="text-orange-400 text-xs"><code>{`<input type="radio" id="size-s" name="size" value="small">
<label for="size-s">S</label><br>
<input type="radio" id="size-m" name="size" value="medium" checked>
<label for="size-m">M</label><br>
<input type="radio" id="size-l" name="size" value="large">
<label for="size-l">L</label>`}</code></pre>
            </div>
          </li>
        </ul>
        <div className="mt-4 p-3 bg-blue-900/20 border border-blue-700/30 rounded-lg">
          <p className="text-blue-300 text-sm flex items-start gap-2">
            <span className="font-medium">💡 Важно:</span>
            <span>
              Как и для чекбоксов, <span className="font-medium">всегда</span> используйте тег <code className="bg-gray-700 px-1 rounded">{'<label>'}</code> с атрибутом <code className="bg-gray-700 px-1 rounded">for</code>, указывающим на <code className="bg-gray-700 px-1 rounded">id</code> радио-кнопки. Это улучшает <span className="font-medium">доступность</span> и удобство использования.
            </span>
          </p>
        </div>
      </div>

      {/* Кнопки: <button> и <input type="submit"> */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <MousePointerClick className="w-5 h-5 text-purple-400" />
          Кнопки: {'<button>'} и {'<input type="submit">'}
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Кнопки — это <span className="font-medium">интерактивные элементы</span> формы, предназначенные для <span className="font-medium">выполнения действий</span>.
          </p>
        </div>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* <input type="submit"> */}
          <div className="bg-gray-900/50 p-5 rounded-xl border border-green-700/30">
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-green-500/20 p-2 rounded-lg">
                <Check className="w-5 h-5 text-green-400" />
              </div>
              <h3 className="font-bold text-green-300">{'<input type="submit">'}</h3>
            </div>
            <p className="text-gray-300 text-sm mb-3">
              Специализированная кнопка для <span className="font-medium">отправки</span> данных формы на сервер. Это <span className="font-medium">самозакрывающийся</span> тег.
            </p>
            <div className="bg-gray-800 p-3 rounded-lg mb-3">
              <pre className="text-green-400 text-xs"><code>{`<input type="submit" value="Отправить форму">`}</code></pre>
            </div>
            <div className="flex items-center justify-center p-3 bg-gray-800 rounded-lg border border-gray-700">
              <input type="submit" value="Отправить форму" className="px-4 py-2 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white rounded-lg font-medium text-sm cursor-pointer transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-[1.02]" />
            </div>
            <div className="mt-3 p-3 bg-blue-900/20 border border-blue-700/30 rounded-lg">
              <p className="text-blue-300 text-xs flex items-start gap-2">
                <span className="font-medium">💡 Атрибут <code className="bg-gray-700 px-1 rounded">value</code>:</span>
                <span>
                  Определяет <span className="font-medium">текст</span> на кнопке.
                </span>
              </p>
            </div>
          </div>

          {/* <button> */}
          <div className="bg-gray-900/50 p-5 rounded-xl border border-purple-700/30">
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-purple-500/20 p-2 rounded-lg">
                <MousePointerClick className="w-5 h-5 text-purple-400" />
              </div>
              <h3 className="font-bold text-purple-300">{'<button>'}</h3>
            </div>
            <p className="text-gray-300 text-sm mb-3">
              <span className="font-medium">Парный</span> тег, который предоставляет <span className="font-medium">больше гибкости</span> для создания кнопок. Может содержать <span className="font-medium">любой HTML-контент</span> (текст, иконки, изображения).
            </p>
            <div className="bg-gray-800 p-3 rounded-lg mb-3">
              <pre className="text-purple-400 text-xs"><code>{`<button type="submit">Отправить <CheckCircle className="w-4 h-4" /></button>`}</code></pre>
            </div>
            <div className="flex items-center justify-center p-3 bg-gray-800 rounded-lg border border-gray-700">
              <button className="px-4 py-2 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white rounded-lg font-medium text-sm flex items-center gap-2 cursor-pointer transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-[1.02]">
                Отправить <Check className="w-4 h-4" />
              </button>
            </div>
            <div className="mt-3 p-3 bg-blue-900/20 border border-blue-700/30 rounded-lg">
              <p className="text-blue-300 text-xs flex items-start gap-2">
                <span className="font-medium">💡 Атрибут <code className="bg-gray-700 px-1 rounded">type</code>:</span>
                <span>
                  Для отправки формы используйте <code className="bg-gray-700 px-1 rounded">type="submit"</code>. Для сброса формы — <code className="bg-gray-700 px-1 rounded">type="reset"</code>. Для выполнения скриптов — <code className="bg-gray-700 px-1 rounded">type="button"</code> (по умолчанию).
                </span>
              </p>
            </div>
          </div>
        </div>

        <div className="mt-6 p-3 bg-gray-900/50 rounded-lg border border-gray-700/30">
          <h4 className="font-bold text-white mb-2">Сравнение {'<input type="submit">'} и {'<button>'}:</h4>
          <table className="min-w-full text-sm text-gray-300">
            <thead className="bg-gray-700/50">
              <tr>
                <th className="py-2 px-4 text-left">Характеристика</th>
                <th className="py-2 px-4 text-left"><code className="bg-gray-700 px-1 rounded text-green-300">{'<input type="submit">'}</code></th>
                <th className="py-2 px-4 text-left"><code className="bg-gray-700 px-1 rounded text-purple-300">{'<button>'}</code></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-700/50">
              <tr>
                <td className="py-2 px-4">Тип</td>
                <td className="py-2 px-4">Самозакрывающийся</td>
                <td className="py-2 px-4">Парный</td>
              </tr>
              <tr>
                <td className="py-2 px-4">Содержимое</td>
                <td className="py-2 px-4">Только текст (атрибут <code className="bg-gray-700 px-1 rounded">value</code>)</td>
                <td className="py-2 px-4">Любой HTML (текст, иконки, изображения)</td>
              </tr>
              <tr>
                <td className="py-2 px-4">Гибкость</td>
                <td className="py-2 px-4">Ограниченная</td>
                <td className="py-2 px-4">Высокая</td>
              </tr>
              <tr>
                <td className="py-2 px-4">Стилизация</td>
                <td className="py-2 px-4">Стандартная</td>
                <td className="py-2 px-4">Полностью кастомизируемая</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Атрибуты required и disabled */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Ban className="w-5 h-5 text-red-400" />
          Атрибуты <code className="bg-gray-700 px-1.5 py-0.5 rounded text-red-300">required</code> и <code className="bg-gray-700 px-1.5 py-0.5 rounded text-gray-400">disabled</code>
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            HTML предоставляет <span className="font-medium">булевы атрибуты</span> для управления поведением и состоянием полей формы.
          </p>
        </div>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* required */}
          <div className="bg-gray-900/50 p-5 rounded-xl border border-red-700/30">
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-red-500/20 p-2 rounded-lg">
                <CheckCircle className="w-5 h-5 text-red-400" />
              </div>
              <h3 className="font-bold text-red-300">required</h3>
            </div>
            <p className="text-gray-300 text-sm mb-3">
              Делает поле <span className="font-medium">обязательным</span> для заполнения. Если поле пустое при попытке отправки формы, браузер покажет сообщение об ошибке.
            </p>
            <div className="bg-gray-800 p-3 rounded-lg mb-3">
              <pre className="text-red-400 text-xs"><code>{`<input type="email" name="email" required>`}</code></pre>
            </div>
            <div className="flex items-center justify-center p-3 bg-gray-800 rounded-lg border border-gray-700">
              <input type="email" placeholder="Обязательное поле" required className="w-full bg-gray-900 border border-red-700 rounded-lg p-2 text-white placeholder-gray-500 text-sm focus:outline-none transition-colors duration-200" />
            </div>
            <div className="mt-3 p-3 bg-blue-900/20 border border-blue-700/30 rounded-lg">
              <p className="text-blue-300 text-xs flex items-start gap-2">
                <span className="font-medium">💡 Используется:</span>
                <span>
                  Для полей, без заполнения которых форма <span className="font-medium">не имеет смысла</span> (например, email для регистрации).
                </span>
              </p>
            </div>
          </div>

          {/* disabled */}
          <div className="bg-gray-900/50 p-5 rounded-xl border border-gray-700/30">
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-gray-500/20 p-2 rounded-lg">
                <Ban className="w-5 h-5 text-gray-400" />
              </div>
              <h3 className="font-bold text-gray-300">disabled</h3>
            </div>
            <p className="text-gray-300 text-sm mb-3">
              <span className="font-medium">Отключает</span> поле или кнопку. Пользователь <span className="font-medium">не может</span> взаимодействовать с ним, и его <span className="font-medium">значение не будет отправлено</span> на сервер.
            </p>
            <div className="bg-gray-800 p-3 rounded-lg mb-3">
              <pre className="text-gray-400 text-xs"><code>{`<input type="text" name="username" value="admin" disabled>`}</code></pre>
            </div>
            <div className="flex items-center justify-center p-3 bg-gray-800 rounded-lg border border-gray-700">
              <input type="text" value="admin" disabled className="w-full bg-gray-900 border border-gray-700 rounded-lg p-2 text-gray-500 placeholder-gray-600 text-sm cursor-not-allowed" />
            </div>
            <div className="mt-3 p-3 bg-blue-900/20 border border-blue-700/30 rounded-lg">
              <p className="text-blue-300 text-xs flex items-start gap-2">
                <span className="font-medium">💡 Используется:</span>
                <span>
                  Для <span className="font-medium">временно недоступных</span> полей или для <span className="font-medium">предотвращения</span> взаимодействия до выполнения определённых условий.
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Заключение */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <div className="flex items-start gap-3">
          <div className="bg-green-500/20 p-2 rounded-lg flex-shrink-0">
            <Accessibility className="w-5 h-5 text-green-400" />
          </div>
          <div>
            <h3 className="font-bold text-white mb-2">Отличная работа! 🎉</h3>
            <p className="text-gray-300">
              Теперь вы знаете, как использовать <span className="font-medium text-green-300">чекбоксы</span> (<code className="bg-gray-700 px-1 rounded">{'<input type="checkbox">'}</code>) для множественного выбора, <span className="font-medium text-orange-300">радио-кнопки</span> (<code className="bg-gray-700 px-1 rounded">{'<input type="radio">'}</code>) для единичного выбора из группы, а также различные типы <span className="font-medium text-purple-300">кнопок</span> (<code className="bg-gray-700 px-1 rounded">{'<button>'}</code>, <code className="bg-gray-700 px-1 rounded">{'<input type="submit">'}</code>). Вы разобрались с важными атрибутами <code className="bg-gray-700 px-1 rounded text-red-300">required</code> для обязательных полей и <code className="bg-gray-700 px-1 rounded text-gray-400">disabled</code> для отключения элементов. Эти знания — важный шаг к созданию <span className="font-medium">доступных</span> и <span className="font-medium">удобных</span> веб-форм.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};



export default Part1;