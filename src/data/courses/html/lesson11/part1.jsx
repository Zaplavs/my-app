// src/data/courses/html/lesson11/part1.jsx
import React from 'react';
import { MousePointerSquareDashed, Send, Type, Key, AlignLeft, List, Square, FileText } from 'lucide-react';

const Part1 = () => {
  return (
    <div className="space-y-8 text-gray-200">
      {/* Вступление */}
      <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 backdrop-blur-sm border border-blue-700/30 rounded-2xl p-6 shadow-lg">
        <div className="flex items-start gap-4">
          <div className="bg-blue-500/20 p-3 rounded-lg">
            <MousePointerSquareDashed className="w-6 h-6 text-blue-400" />
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">📝 Урок 11: Формы в HTML — Ввод данных</h1>
            <h2 className="text-xl font-semibold text-blue-300 mb-3">Создание интерактивных форм для сбора информации</h2>
            <p className="text-gray-300">
              <span className="font-medium text-yellow-400">🎯 Цель урока:</span> Освоить создание веб-форм с помощью тега <code className="bg-gray-700 px-1.5 py-0.5 rounded text-green-300">{'<form>'}</code> и различных полей ввода (<code className="bg-gray-700 px-1 rounded">{'<input>'}</code>, <code className="bg-gray-700 px-1 rounded">{'<textarea>'}</code>, <code className="bg-gray-700 px-1 rounded">{'<select>'}</code>), а также понять назначение ключевых атрибутов (<code className="bg-gray-700 px-1 rounded">action</code>, <code className="bg-gray-700 px-1 rounded">method</code>, <code className="bg-gray-700 px-1 rounded">placeholder</code>, <code className="bg-gray-700 px-1 rounded">value</code>).
            </p>
          </div>
        </div>
      </div>

      {/* Роль форм в вебе */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Send className="w-5 h-5 text-green-400" />
          Роль форм в вебе
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            <span className="font-medium text-green-300">Формы</span> — это <span className="font-medium">основной способ</span> взаимодействия пользователя с веб-сайтом. Они позволяют <span className="font-medium">собирать</span> информацию от пользователей, что делает веб <span className="font-medium">двусторонним</span> каналом связи.
          </p>
          <p>
            С помощью форм можно:
          </p>
          <ul className="list-disc pl-5 space-y-2 mt-2">
            <li>Регистрировать новых пользователей</li>
            <li>Авторизовывать существующих</li>
            <li>Отправлять сообщения (обратная связь, заказы)</li>
            <li>Выполнять поиск по сайту</li>
            <li>Настраивать предпочтения</li>
            <li>Проходить опросы и тесты</li>
          </ul>
          <p className="mt-3">
            HTML предоставляет мощный набор тегов и атрибутов для создания форм любой сложности.
          </p>
        </div>
      </div>

      {/* Тег <form> */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <MousePointerSquareDashed className="w-5 h-5 text-purple-400" />
          Тег {'<form>'} — Контейнер формы
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Тег <code className="bg-gray-700 px-1.5 py-0.5 rounded text-purple-300">{'<form>'}</code> — это <span className="font-medium">контейнер</span>, который объединяет все элементы управления формы (поля ввода, кнопки и т.д.).
          </p>
          <p>
            Он определяет, <span className="font-medium">куда</span> и <span className="font-medium">как</span> будут отправляться данные, введённые пользователем.
          </p>
        </div>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-900/50 p-4 rounded-xl border border-purple-700/30">
            <p className="text-sm text-gray-400 mb-2">Пример базовой формы:</p>
            <pre className="text-purple-400 text-sm overflow-x-auto">
              <code>{`<form action="/submit_form.php" method="post">
  <!-- Поля формы -->
  <input type="text" name="username">
  <input type="submit" value="Отправить">
</form>`}</code>
            </pre>
          </div>
          <div className="bg-gray-900/50 p-4 rounded-xl border border-cyan-700/30">
            <p className="text-sm text-gray-400 mb-2">Как отображается в браузере:</p>
            <div className="flex flex-col gap-3 p-4 bg-gray-800 rounded-lg border border-gray-700">
              <input type="text" placeholder="Имя пользователя" className="bg-gray-900 border border-gray-700 rounded-lg p-2 text-white placeholder-gray-500 text-sm focus:border-purple-500 focus:outline-none" />
              <input type="submit" value="Отправить" className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white px-4 py-2 rounded-lg font-medium text-sm cursor-pointer transition-all duration-300 shadow-lg hover:shadow-xl" />
            </div>
          </div>
        </div>

        <div className="mt-6 space-y-6">
          {/* action */}
          <div className="bg-gray-900/50 p-5 rounded-xl border border-blue-700/30">
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-blue-500/20 p-2 rounded-lg">
                <Send className="w-5 h-5 text-blue-400" />
              </div>
              <h3 className="text-lg font-bold text-blue-300">action</h3>
            </div>
            <p className="text-gray-300 text-sm mb-3">
              Атрибут <code className="bg-gray-700 px-1.5 py-0.5 rounded text-blue-300">action</code> указывает <span className="font-medium">URL</span> серверного скрипта, который будет <span className="font-medium">обрабатывать</span> данные формы после её отправки.
            </p>
            <div className="bg-gray-800 p-3 rounded-lg mb-3">
              <pre className="text-blue-400 text-xs"><code>{`<form action="https://mysite.com/process_login.php">`}</code></pre>
            </div>
            <div className="p-3 bg-blue-900/20 border border-blue-700/30 rounded-lg">
              <p className="text-blue-300 text-sm flex items-start gap-2">
                <span className="font-medium">💡 Если не указан:</span>
                <span>
                  Данные формы отправляются на <span className="font-medium">ту же страницу</span>, на которой находится форма.
                </span>
              </p>
            </div>
          </div>

          {/* method */}
          <div className="bg-gray-900/50 p-5 rounded-xl border border-orange-700/30">
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-orange-500/20 p-2 rounded-lg">
                <FileText className="w-5 h-5 text-orange-400" />
              </div>
              <h3 className="text-lg font-bold text-orange-300">method</h3>
            </div>
            <p className="text-gray-300 text-sm mb-3">
              Атрибут <code className="bg-gray-700 px-1.5 py-0.5 rounded text-orange-300">method</code> определяет <span className="font-medium">метод HTTP</span>, используемый для отправки данных.
            </p>
            <ul className="list-disc pl-5 space-y-2 text-gray-300 text-sm mb-3">
              <li>
                <code className="bg-gray-700 px-1 rounded">GET</code> — данные формы добавляются к URL в виде строки запроса (после знака <code className="bg-gray-700 px-1 rounded">?</code>). <span className="font-medium">Не подходит</span> для отправки конфиденциальных данных (паролей) и больших объёмов информации.
                <div className="mt-2 bg-gray-800 p-2 rounded">
                  <pre className="text-orange-400 text-xs"><code>{`<form action="/search" method="get">`}</code></pre>
                  <p className="text-gray-500 text-xs mt-1">Отправит: <code className="bg-gray-700 px-1 rounded">/search?q=запрос</code></p>
                </div>
              </li>
              <li>
                <code className="bg-gray-700 px-1 rounded">POST</code> — данные отправляются <span className="font-medium">в теле</span> HTTP-запроса. <span className="font-medium">Безопасен</span> для конфиденциальных данных и больших объёмов.
                <div className="mt-2 bg-gray-800 p-2 rounded">
                  <pre className="text-orange-400 text-xs"><code>{`<form action="/login" method="post">`}</code></pre>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Поля ввода <input> */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Type className="w-5 h-5 text-cyan-400" />
          Поля ввода {'<input>'}
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Тег <code className="bg-gray-700 px-1.5 py-0.5 rounded text-cyan-400">{'<input>'}</code> — <span className="font-medium">самозакрывающийся</span> тег, используемый для создания <span className="font-medium">различных полей ввода</span>.
          </p>
          <p>
            Тип поля определяется атрибутом <code className="bg-gray-700 px-1 rounded">type</code>.
          </p>
        </div>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* text */}
          <div className="bg-gray-900/50 p-5 rounded-xl border border-green-700/30">
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-green-500/20 p-2 rounded-lg">
                <Type className="w-5 h-5 text-green-400" />
              </div>
              <h3 className="text-lg font-bold text-green-300">type="text"</h3>
            </div>
            <p className="text-gray-300 text-sm mb-3">
              Однострочное текстовое поле.
            </p>
            <div className="bg-gray-800 p-3 rounded-lg mb-3">
              <pre className="text-green-400 text-xs"><code>{`<input type="text" name="fullname" placeholder="Введите ваше имя">`}</code></pre>
            </div>
            <div className="flex items-center justify-center p-3 bg-gray-800 rounded-lg border border-gray-700">
              <input type="text" placeholder="Введите ваше имя" className="w-full bg-transparent border-none text-white placeholder-gray-500 text-sm focus:outline-none" />
            </div>
          </div>

          {/* email */}
          <div className="bg-gray-900/50 p-5 rounded-xl border border-blue-700/30">
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-blue-500/20 p-2 rounded-lg">
                <Send className="w-5 h-5 text-blue-400" />
              </div>
              <h3 className="text-lg font-bold text-blue-300">type="email"</h3>
            </div>
            <p className="text-gray-300 text-sm mb-3">
              Поле для ввода адреса электронной почты. Браузер может автоматически проверять формат.
            </p>
            <div className="bg-gray-800 p-3 rounded-lg mb-3">
              <pre className="text-blue-400 text-xs"><code>{`<input type="email" name="email" placeholder="your@email.com">`}</code></pre>
            </div>
            <div className="flex items-center justify-center p-3 bg-gray-800 rounded-lg border border-gray-700">
              <input type="email" placeholder="your@email.com" className="w-full bg-transparent border-none text-white placeholder-gray-500 text-sm focus:outline-none" />
            </div>
          </div>

          {/* password */}
          <div className="bg-gray-900/50 p-5 rounded-xl border border-red-700/30">
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-red-500/20 p-2 rounded-lg">
                <Key className="w-5 h-5 text-red-400" />
              </div>
              <h3 className="text-lg font-bold text-red-300">type="password"</h3>
            </div>
            <p className="text-gray-300 text-sm mb-3">
              Поле для ввода пароля. Введённые символы маскируются (обычно точками или звёздочками).
            </p>
            <div className="bg-gray-800 p-3 rounded-lg mb-3">
              <pre className="text-red-400 text-xs"><code>{`<input type="password" name="pass" placeholder="••••••••">`}</code></pre>
            </div>
            <div className="flex items-center justify-center p-3 bg-gray-800 rounded-lg border border-gray-700">
              <input type="password" placeholder="••••••••" className="w-full bg-transparent border-none text-white placeholder-gray-500 text-sm focus:outline-none" />
            </div>
          </div>

          {/* submit */}
          <div className="bg-gray-900/50 p-5 rounded-xl border border-purple-700/30">
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-purple-500/20 p-2 rounded-lg">
                <Send className="w-5 h-5 text-purple-400" />
              </div>
              <h3 className="text-lg font-bold text-purple-300">type="submit"</h3>
            </div>
            <p className="text-gray-300 text-sm mb-3">
              Кнопка для <span className="font-medium">отправки</span> формы. Обычно это последний элемент формы.
            </p>
            <div className="bg-gray-800 p-3 rounded-lg mb-3">
              <pre className="text-purple-400 text-xs"><code>{`<input type="submit" value="Войти">`}</code></pre>
            </div>
            <div className="flex items-center justify-center p-3 bg-gray-800 rounded-lg border border-gray-700">
              <input type="submit" value="Войти" className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white px-4 py-2 rounded-lg font-medium text-sm cursor-pointer transition-all duration-300 shadow-lg hover:shadow-xl" />
            </div>
          </div>
        </div>

        <div className="mt-6 p-4 bg-gray-900/50 rounded-lg">
          <h4 className="font-bold text-white mb-3">Другие полезные атрибуты тега {'<input>'}:</h4>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-300">
            <li className="flex items-start gap-2">
              <Square className="w-4 h-4 text-yellow-400 mt-0.5 flex-shrink-0" />
              <span><code className="bg-gray-700 px-1 rounded">name</code> — имя поля, по которому данные будут доступны на сервере.</span>
            </li>
            <li className="flex items-start gap-2">
              <Square className="w-4 h-4 text-yellow-400 mt-0.5 flex-shrink-0" />
              <span><code className="bg-gray-700 px-1 rounded">value</code> — начальное значение поля.</span>
            </li>
            <li className="flex items-start gap-2">
              <Square className="w-4 h-4 text-yellow-400 mt-0.5 flex-shrink-0" />
              <span><code className="bg-gray-700 px-1 rounded">placeholder</code> — подсказка, отображаемая внутри поля до ввода.</span>
            </li>
            <li className="flex items-start gap-2">
              <Square className="w-4 h-4 text-yellow-400 mt-0.5 flex-shrink-0" />
              <span><code className="bg-gray-700 px-1 rounded">required</code> — делает поле обязательным для заполнения.</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Другие поля формы */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <AlignLeft className="w-5 h-5 text-orange-400" />
          <List className="w-5 h-5 text-orange-400" />
          Другие поля формы
        </h2>

        <div className="mt-6 space-y-6">
          {/* <textarea> */}
          <div className="bg-gray-900/50 p-5 rounded-xl border border-green-700/30">
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-green-500/20 p-2 rounded-lg">
                <AlignLeft className="w-5 h-5 text-green-400" />
              </div>
              <h3 className="text-lg font-bold text-green-300">{'<textarea>'} — Многострочное текстовое поле</h3>
            </div>
            <p className="text-gray-300 text-sm mb-3">
              Используется, когда пользователю нужно ввести <span className="font-medium">большой объём текста</span>, например, сообщение или отзыв. Это <span className="font-medium">парный</span> тег.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gray-800 p-3 rounded-lg">
                <p className="text-xs text-gray-400 mb-1">HTML-код:</p>
                <pre className="text-green-400 text-xs"><code>{`<textarea name="message" rows="4" cols="50" placeholder="Ваше сообщение..."></textarea>`}</code></pre>
              </div>
              <div className="bg-gray-800 p-3 rounded-lg">
                <p className="text-xs text-gray-400 mb-1">Как отображается:</p>
                <textarea placeholder="Ваше сообщение..." rows="3" className="w-full bg-gray-900 border border-gray-700 rounded-lg p-3 text-white placeholder-gray-500 text-sm focus:border-green-500 focus:outline-none transition-colors duration-200 resize-y"></textarea>
              </div>
            </div>
            <div className="mt-3 p-3 bg-blue-900/20 border border-blue-700/30 rounded-lg">
              <p className="text-blue-300 text-xs flex items-start gap-2">
                <span className="font-medium">💡 Атрибуты:</span>
                <span>
                  <code className="bg-gray-700 px-1 rounded">rows</code> и <code className="bg-gray-700 px-1 rounded">cols</code> задают начальный размер, но пользователь часто может его изменить (если не запрещено CSS <code className="bg-gray-700 px-1 rounded">resize: none;</code>). Начальный текст можно поместить между тегами <code className="bg-gray-700 px-1 rounded">{'<textarea>Текст</textarea>'}</code>.
                </span>
              </p>
            </div>
          </div>

          {/* <select> и <option> */}
          <div className="bg-gray-900/50 p-5 rounded-xl border border-blue-700/30">
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-blue-500/20 p-2 rounded-lg">
                <List className="w-5 h-5 text-blue-400" />
              </div>
              <h3 className="text-lg font-bold text-blue-300">{'<select>'} и {'<option>'} — Выпадающий список</h3>
            </div>
            <p className="text-gray-300 text-sm mb-3">
              Используется, когда пользователь должен <span className="font-medium">выбрать</span> один (или несколько) вариант(ов) из <span className="font-medium">предопределённого списка</span>.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gray-800 p-3 rounded-lg">
                <p className="text-xs text-gray-400 mb-1">HTML-код:</p>
                <pre className="text-blue-400 text-xs"><code>{`<select name="country">
  <option value="">-- Выберите страну --</option>
  <option value="ru">Россия</option>
  <option value="by">Беларусь</option>
  <option value="kz">Казахстан</option>
</select>`}</code></pre>
              </div>
              <div className="bg-gray-800 p-3 rounded-lg">
                <p className="text-xs text-gray-400 mb-1">Как отображается:</p>
                <select className="w-full bg-gray-900 border border-gray-700 rounded-lg p-2 text-white focus:border-blue-500 focus:outline-none transition-colors duration-200">
                  <option value="">-- Выберите страну --</option>
                  <option value="ru">Россия</option>
                  <option value="by">Беларусь</option>
                  <option value="kz">Казахстан</option>
                </select>
              </div>
            </div>
            <div className="mt-3 p-3 bg-blue-900/20 border border-blue-700/30 rounded-lg">
              <p className="text-blue-300 text-xs flex items-start gap-2">
                <span className="font-medium">💡 Атрибуты:</span>
                <span>
                  <code className="bg-gray-700 px-1 rounded">{'<option selected>'}</code> — делает вариант выбранным по умолчанию. <code className="bg-gray-700 px-1 rounded">{'<select multiple>'}</code> — позволяет выбрать несколько вариантов (удерживая Ctrl/Cmd).
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Атрибуты placeholder и value */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Square className="w-5 h-5 text-yellow-400" />
          Важные атрибуты полей ввода
        </h2>

        <div className="mt-6 space-y-6">
          {/* placeholder */}
          <div className="bg-gray-900/50 p-5 rounded-xl border border-cyan-700/30">
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-cyan-500/20 p-2 rounded-lg">
                <Type className="w-5 h-5 text-cyan-400" />
              </div>
              <h3 className="text-lg font-bold text-cyan-300">placeholder</h3>
            </div>
            <p className="text-gray-300 text-sm mb-3">
              Атрибут <code className="bg-gray-700 px-1.5 py-0.5 rounded text-cyan-300">placeholder</code> задаёт <span className="font-medium">подсказку</span>, которая отображается внутри поля ввода до тех пор, пока пользователь не начнёт вводить текст.
            </p>
            <div className="bg-gray-800 p-3 rounded-lg mb-3">
              <pre className="text-cyan-400 text-xs"><code>{`<input type="text" name="city" placeholder="Например, Москва">`}</code></pre>
            </div>
            <div className="flex items-center justify-center p-3 bg-gray-800 rounded-lg border border-gray-700">
              <input type="text" placeholder="Например, Москва" className="w-full bg-transparent border-none text-white placeholder-gray-500 text-sm focus:outline-none" />
            </div>
            <div className="mt-3 p-3 bg-blue-900/20 border border-blue-700/30 rounded-lg">
              <p className="text-blue-300 text-xs flex items-start gap-2">
                <span className="font-medium">💡 Используется:</span>
                <span>
                  Для пояснения, <span className="font-medium">что</span> и <span className="font-medium">как</span> нужно ввести. Не заменяет <code className="bg-gray-700 px-1 rounded">{'<label>'}</code>!
                </span>
              </p>
            </div>
          </div>

          {/* value */}
          <div className="bg-gray-900/50 p-5 rounded-xl border border-green-700/30">
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-green-500/20 p-2 rounded-lg">
                <Key className="w-5 h-5 text-green-400" />
              </div>
              <h3 className="text-lg font-bold text-green-300">value</h3>
            </div>
            <p className="text-gray-300 text-sm mb-3">
              Атрибут <code className="bg-gray-700 px-1.5 py-0.5 rounded text-green-300">value</code> задаёт <span className="font-medium">начальное значение</span> поля ввода.
            </p>
            <div className="bg-gray-800 p-3 rounded-lg mb-3">
              <pre className="text-green-400 text-xs"><code>{`<input type="text" name="username" value="Иван">`}</code></pre>
            </div>
            <div className="flex items-center justify-center p-3 bg-gray-800 rounded-lg border border-gray-700">
              <input type="text" value="Иван" className="w-full bg-transparent border-none text-white focus:outline-none" readOnly />
            </div>
            <div className="mt-3 p-3 bg-blue-900/20 border border-blue-700/30 rounded-lg">
              <p className="text-blue-300 text-xs flex items-start gap-2">
                <span className="font-medium">💡 Используется:</span>
                <span>
                  Для предзаполнения форм (например, при редактировании профиля) или установки значений по умолчанию. Для <code className="bg-gray-700 px-1 rounded">{'<input type="submit">'}</code> определяет текст на кнопке.
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
            <MousePointerSquareDashed className="w-5 h-5 text-green-400" />
          </div>
          <div>
            <h3 className="font-bold text-white mb-2">Отличная работа! 🎉</h3>
            <p className="text-gray-300">
              Теперь вы знаете, как создавать основу для интерактивных веб-форм. Вы разобрались с тегом <code className="bg-gray-700 px-1 rounded">{'<form>'}</code> и его ключевыми атрибутами <code className="bg-gray-700 px-1 rounded">action</code> и <code className="bg-gray-700 px-1 rounded">method</code>. Вы научились использовать различные типы полей <code className="bg-gray-700 px-1 rounded">{'<input>'}</code> (<code className="bg-gray-700 px-1 rounded">text</code>, <code className="bg-gray-700 px-1 rounded">email</code>, <code className="bg-gray-700 px-1 rounded">password</code>, <code className="bg-gray-700 px-1 rounded">submit</code>), а также другие важные элементы, такие как <code className="bg-gray-700 px-1 rounded">{'<textarea>'}</code> и <code className="bg-gray-700 px-1 rounded">{'<select>'}</code>/<code className="bg-gray-700 px-1 rounded">{'<option>'}</code>. Понимание атрибутов <code className="bg-gray-700 px-1 rounded">placeholder</code> и <code className="bg-gray-700 px-1 rounded">value</code> поможет вам сделать формы более удобными и понятными для пользователей. Это фундамент для создания полноценных веб-приложений.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Part1;