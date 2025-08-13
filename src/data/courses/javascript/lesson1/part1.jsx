// src/data/courses/javascript/lesson1/part1.jsx
import React from 'react';
import { Code, Globe, Smartphone, Server, Zap, Layers } from 'lucide-react';

const Part1 = () => {
  return (
    <div className="space-y-8 text-gray-200">
      {/* Вступление */}
      <div className="bg-gradient-to-r from-yellow-900/30 to-orange-900/30 backdrop-blur-sm border border-yellow-700/30 rounded-2xl p-6 shadow-lg">
        <div className="flex items-start gap-4">
          <div className="bg-yellow-500/20 p-3 rounded-lg">
            <Code className="w-6 h-6 text-yellow-400" />
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">📚 Урок 1: Что такое JavaScript и зачем он нужен?</h1>
            <h2 className="text-xl font-semibold text-yellow-300 mb-3">Интерактивность в вебе и возможности JS</h2>
            <p className="text-gray-300">
              <span className="font-medium text-green-400">🎯 Цель урока:</span> Понять, что такое JavaScript, какую роль он играет в веб-разработке и где ещё применяется.
            </p>
          </div>
        </div>
      </div>

      {/* Что такое JavaScript */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Code className="w-5 h-5 text-yellow-400" />
          Что такое JavaScript?
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            <span className="font-medium text-yellow-300">JavaScript (JS)</span> — это мощный язык программирования, который делает веб-страницы интерактивными.
          </p>
          <p>
            Если представить веб-сайт как человека:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li><span className="text-blue-300">HTML</span> — это скелет (структура)</li>
            <li><span className="text-green-300">CSS</span> — это внешность (оформление)</li>
            <li><span className="text-yellow-300">JavaScript</span> — это мозг (поведение, действия)</li>
          </ul>
          
          <div className="mt-4 p-3 bg-yellow-900/20 border border-yellow-700/30 rounded-lg flex items-start gap-2">
            <Zap className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
            <p className="text-yellow-300 text-sm">
              <span className="font-medium">💡 Пример:</span> Когда вы нажимаете кнопку "Лайк" в соцсети — это JavaScript обрабатывает ваш клик и меняет иконку.
            </p>
          </div>
        </div>
      </div>

      {/* Роль JavaScript в вебе */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Globe className="w-5 h-5 text-blue-400" />
          Роль JavaScript в вебе
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            JavaScript добавляет <span className="font-medium text-blue-300">динамику</span> и <span className="font-medium text-green-300">интерактивность</span> веб-страницам:
          </p>

          <div className="space-y-4 mt-4">
            <div className="bg-gray-900/50 p-4 rounded-xl border border-blue-700/30">
              <h3 className="font-bold text-blue-300 flex items-center gap-2 mb-2">
                <Zap className="w-4 h-4" />
                Динамическое обновление контента
              </h3>
              <p className="text-gray-300 text-sm">
                Обновление страницы без перезагрузки (например, новые сообщения в чате)
              </p>
            </div>

            <div className="bg-gray-900/50 p-4 rounded-xl border border-green-700/30">
              <h3 className="font-bold text-green-300 flex items-center gap-2 mb-2">
                <Layers className="w-4 h-4" />
                Интерактивные элементы
              </h3>
              <p className="text-gray-300 text-sm">
                Анимации, всплывающие окна, обработка форм, игры
              </p>
            </div>

            <div className="bg-gray-900/50 p-4 rounded-xl border border-purple-700/30">
              <h3 className="font-bold text-purple-300 flex items-center gap-2 mb-2">
                <Server className="w-4 h-4" />
                Работа с данными
              </h3>
              <p className="text-gray-300 text-sm">
                Отправка и получение данных с сервера (например, загрузка новостей)
              </p>
            </div>
          </div>

          <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-3 text-center">
            <div className="bg-blue-900/20 p-3 rounded-lg border border-blue-700/30">
              <div className="text-blue-300 font-medium">До JS</div>
              <div className="text-sm text-gray-400">Статичная страница</div>
            </div>
            <div className="bg-yellow-900/20 p-3 rounded-lg border border-yellow-700/30">
              <div className="text-yellow-300 font-medium">С JS</div>
              <div className="text-sm text-gray-400">Интерактивный сайт</div>
            </div>
            <div className="bg-green-900/20 p-3 rounded-lg border border-green-700/30">
              <div className="text-green-300 font-medium">Примеры</div>
              <div className="text-sm text-gray-400">Кнопки, формы, анимации</div>
            </div>
          </div>
        </div>
      </div>

      {/* Отличие от HTML и CSS */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Layers className="w-5 h-5 text-purple-400" />
          Отличие от HTML и CSS
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-700">
                  <th className="text-left py-2 text-blue-300">HTML</th>
                  <th className="text-left py-2 text-green-300">CSS</th>
                  <th className="text-left py-2 text-yellow-300">JavaScript</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-800">
                  <td className="py-2 text-gray-300">Структура страницы</td>
                  <td className="py-2 text-gray-300">Внешний вид</td>
                  <td className="py-2 text-gray-300">Поведение и логика</td>
                </tr>
                <tr className="border-b border-gray-800">
                  <td className="py-2 text-gray-300">Заголовки, абзацы, ссылки</td>
                  <td className="py-2 text-gray-300">Цвета, шрифты, отступы</td>
                  <td className="py-2 text-gray-300">Клики, валидация, анимации</td>
                </tr>
                <tr>
                  <td className="py-2 text-gray-300">Скелет сайта</td>
                  <td className="py-2 text-gray-300">Одежда сайта</td>
                  <td className="py-2 text-gray-300">Мозг сайта</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-4 p-3 bg-purple-900/20 border border-purple-700/30 rounded-lg">
            <p className="text-purple-300 text-sm">
              <span className="font-medium">💡 Все три технологии работают вместе:</span> HTML создает содержимое, CSS делает его красивым, а JavaScript делает живым.
            </p>
          </div>
        </div>
      </div>

      {/* Где ещё используется JavaScript */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Smartphone className="w-5 h-5 text-green-400" />
          Где ещё используется JavaScript?
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            JavaScript вышел за рамки браузеров и теперь используется во многих областях:
          </p>

          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-gray-900/50 p-4 rounded-xl border border-blue-700/30">
              <h4 className="font-bold text-blue-300 mb-1">🌐 Веб-разработка</h4>
              <p className="text-sm text-gray-300">Фронтенд (в браузере) и бэкенд (на сервере)</p>
            </div>
            <div className="bg-gray-900/50 p-4 rounded-xl border border-green-700/30">
              <h4 className="font-bold text-green-300 mb-1">📱 Мобильные приложения</h4>
              <p className="text-sm text-gray-300">React Native, Ionic для кроссплатформенных приложений</p>
            </div>
            <div className="bg-gray-900/50 p-4 rounded-xl border border-purple-700/30">
              <h4 className="font-bold text-purple-300 mb-1">💻 Десктопные приложения</h4>
              <p className="text-sm text-gray-300">Electron для создания программ (Discord, VS Code)</p>
            </div>
            <div className="bg-gray-900/50 p-4 rounded-xl border border-yellow-700/30">
              <h4 className="font-bold text-yellow-300 mb-1">🎮 Игры и IoT</h4>
              <p className="text-sm text-gray-300">Веб-игры, умные устройства, роботы</p>
            </div>
          </div>

          <div className="mt-4 p-3 bg-green-900/20 border border-green-700/30 rounded-lg">
            <p className="text-green-300 text-sm">
              <span className="font-medium">💡 JavaScript — один из самых востребованных языков программирования</span> в мире разработки.
            </p>
          </div>
        </div>
      </div>

      {/* Заключение */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <div className="flex items-start gap-3">
          <div className="bg-green-500/20 p-2 rounded-lg flex-shrink-0">
            <Zap className="w-5 h-5 text-green-400" />
          </div>
          <div>
            <h3 className="font-bold text-white mb-2">Отлично! 🎉</h3>
            <p className="text-gray-300">
              Теперь вы знаете, что такое JavaScript, какую роль он играет в вебе и где ещё применяется. В следующем уроке мы установим всё необходимое и напишем первую программу на JavaScript!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Part1;