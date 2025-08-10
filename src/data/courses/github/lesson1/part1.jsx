// src/data/courses/git/lesson1/part1.jsx
import React from 'react';
import { GitBranch, Server, Users, Clock, Zap } from 'lucide-react';

const Part1 = () => {
  return (
    <div className="space-y-8 text-gray-200">
      {/* Вступление */}
      <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 backdrop-blur-sm border border-blue-700/30 rounded-2xl p-6 shadow-lg">
        <div className="flex items-start gap-4">
          <div className="bg-blue-500/20 p-3 rounded-lg">
            <GitBranch className="w-6 h-6 text-blue-400" />
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">📚 Урок 1: Что такое Git и зачем он нужен?</h1>
            <h2 className="text-xl font-semibold text-blue-300 mb-3">Системы контроля версий и почему Git — стандарт</h2>
            <p className="text-gray-300">
              <span className="font-medium text-yellow-400">🎯 Цель урока:</span> Понять, что такое системы контроля версий (VCS), какие они бывают, и почему Git стал стандартом в разработке.
            </p>
          </div>
        </div>
      </div>

      {/* Зачем нужны системы контроля версий */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Clock className="w-5 h-5 text-green-400" />
          Зачем нужны системы контроля версий?
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Системы контроля версий (VCS — Version Control Systems) — это инструменты, которые помогают отслеживать изменения в файлах проекта, сохранять историю изменений и управлять совместной работой.
          </p>
          <p>
            Без VCS сложно:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Отследить, кто и когда внес изменения</li>
            <li>Вернуться к предыдущей версии проекта</li>
            <li>Работать в команде над одним проектом</li>
            <li>Сохранить резервную копию кода</li>
          </ul>
          <div className="mt-4 p-3 bg-blue-900/20 border border-blue-700/30 rounded-lg flex items-start gap-2">
            <Zap className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
            <p className="text-blue-300 text-sm">
              <span className="font-medium">💡 Пример:</span> Представьте, что вы работаете над курсовой. Если не использовать систему контроля версий, то через неделю вы можете потерять все изменения и не вспомнить, что было в прошлой версии.
            </p>
          </div>
        </div>
      </div>

      {/* Что такое VCS */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Server className="w-5 h-5 text-purple-400" />
          Что такое VCS?
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            <span className="font-medium text-purple-300">VCS (Version Control System)</span> — это система, которая записывает изменения в файлы или набор файлов во времени, чтобы вы могли вернуться к любой версии позже.
          </p>
          <p>
            Существует три основных типа систем контроля версий:
          </p>

          <div className="space-y-4 mt-4">
            {/* Локальные VCS */}
            <div className="bg-gray-900/50 p-4 rounded-xl border border-green-700/30">
              <h3 className="font-bold text-green-300 flex items-center gap-2 mb-2">
                <Clock className="w-4 h-4" />
                1. Локальные системы контроля версий
              </h3>
              <p className="text-gray-300 text-sm">
                Простые системы, хранящие изменения локально. Пример — RCS. Не подходят для командной работы.
              </p>
            </div>

            {/* Централизованные VCS */}
            <div className="bg-gray-900/50 p-4 rounded-xl border border-blue-700/30">
              <h3 className="font-bold text-blue-300 flex items-center gap-2 mb-2">
                <Server className="w-4 h-4" />
                2. Централизованные системы (например, SVN)
              </h3>
              <p className="text-gray-300 text-sm">
                Используют центральный сервер для хранения всех версий. Клиенты получают копии. Популярны в прошлом, но имеют риски при отказе сервера.
              </p>
            </div>

            {/* Распределённые VCS */}
            <div className="bg-gray-900/50 p-4 rounded-xl border border-yellow-700/30">
              <h3 className="font-bold text-yellow-300 flex items-center gap-2 mb-2">
                <GitBranch className="w-4 h-4" />
                3. Распределённые системы (например, Git)
              </h3>
              <p className="text-gray-300 text-sm">
                Полная копия репозитория у каждого разработчика. Позволяет работать автономно, легко сливать изменения и восстанавливать данные.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Почему Git — стандарт де-факто */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Users className="w-5 h-5 text-yellow-400" />
          Почему Git стал стандартом?
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            <span className="font-medium text-yellow-300">Git</span> — самая популярная распределённая система контроля версий. Создан Линусом Торвальдсом в 2005 году для разработки ядра Linux.
          </p>

          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-gray-900/50 p-4 rounded-xl border border-green-700/30">
              <h4 className="font-bold text-green-300 mb-1">⚡ Высокая скорость</h4>
              <p className="text-sm text-gray-300">Быстрые операции, особенно локальные.</p>
            </div>
            <div className="bg-gray-900/50 p-4 rounded-xl border border-blue-700/30">
              <h4 className="font-bold text-blue-300 mb-1">🔒 Безопасность</h4>
              <p className="text-sm text-gray-300">Использует хеши для проверки целостности данных.</p>
            </div>
            <div className="bg-gray-900/50 p-4 rounded-xl border border-purple-700/30">
              <h4 className="font-bold text-purple-300 mb-1">🔄 Гибкость ветвления</h4>
              <p className="text-sm text-gray-300">Легко создавать и сливать ветки.</p>
            </div>
            <div className="bg-gray-900/50 p-4 rounded-xl border border-yellow-700/30">
              <h4 className="font-bold text-yellow-300 mb-1">🌐 Распределённость</h4>
              <p className="text-sm text-gray-300">Каждый разработчик имеет полную копию репозитория.</p>
            </div>
          </div>

          <div className="mt-4 p-3 bg-blue-900/20 border border-blue-700/30 rounded-lg">
            <p className="text-blue-300 text-sm">
              <span className="font-medium">💡 Git — это не только инструмент,</span> но и стандарт, который используют GitHub, GitLab, Bitbucket и миллионы разработчиков по всему миру.
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
              Теперь вы знаете, зачем нужны системы контроля версий, какие они бывают и почему Git стал стандартом. В следующем уроке мы установим Git и сделаем первые шаги в работе с ним.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Part1;