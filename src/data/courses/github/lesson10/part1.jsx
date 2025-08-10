// src/data/courses/git/lesson10/part1.jsx
import React from 'react';
import { GitBranch, Workflow, GitMerge, Zap, FileText, ArrowRight, GitPullRequest } from 'lucide-react';

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
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">📊 Урок 10: Модели ветвления в Git</h1>
            <h2 className="text-xl font-semibold text-blue-300 mb-3">GitHub Flow и Git Flow</h2>
            <p className="text-gray-300">
              <span className="font-medium text-yellow-400">🎯 Цель урока:</span> Понять основные модели ветвления, их особенности и когда каждую использовать.
            </p>
          </div>
        </div>
      </div>

      {/* Что такое модель ветвления */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Workflow className="w-5 h-5 text-green-400" />
          Что такое модель ветвления?
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Модель ветвления (<span className="font-medium text-green-300">branching model</span>) — это стратегия управления ветками в репозитории Git, определяющая:
          </p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>Какие ветки создаются и для какой цели</li>
            <li>Как происходит интеграция изменений</li>
            <li>Как управляется релизный цикл</li>
            <li>Как обрабатываются багфиксы и срочные исправления</li>
          </ul>
          <div className="mt-4 p-3 bg-blue-900/20 border border-blue-700/30 rounded-lg flex items-start gap-2">
            <Zap className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
            <p className="text-blue-300 text-sm">
              <span className="font-medium">💡 Зачем нужны модели ветвления:</span> Они обеспечивают согласованность работы команды, упрощают релизный процесс и помогают избежать хаоса в ветках.
            </p>
          </div>
        </div>
      </div>

      {/* GitHub Flow */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <ArrowRight className="w-5 h-5 text-purple-400" />
          GitHub Flow — Простая модель
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed mb-4">
          <p>
            GitHub Flow — это упрощенная модель ветвления, разработанная GitHub. Она идеально подходит для веб-приложений и непрерывного деплоя.
          </p>
        </div>

        <div className="space-y-6 mt-6">
          {/* Основные принципы */}
          <div className="bg-gray-900/50 p-5 rounded-xl border border-purple-700/30">
            <div className="flex items-center gap-3 mb-3">
              <GitBranch className="w-5 h-5 text-purple-400" />
              <h3 className="text-lg font-bold text-purple-300">Основные принципы GitHub Flow</h3>
            </div>
            <ul className="list-disc pl-5 space-y-2 text-gray-300">
              <li><span className="font-medium">main</span> — единственная долгоживущая ветка, всегда готова к деплою</li>
              <li>Для каждой новой функции создается отдельная feature ветка</li>
              <li>Изменения интегрируются через Pull Request</li>
              <li>После мержа feature ветка удаляется</li>
              <li>Деплой происходит сразу после мержа в main</li>
            </ul>
            <div className="mt-4 p-3 bg-purple-900/20 border border-purple-700/30 rounded">
              <p className="text-purple-300 text-sm">
                ⚡ <span className="font-medium">Преимущества:</span> Простота, быстрая доставка, минимум overhead
              </p>
            </div>
          </div>

          {/* Процесс GitHub Flow */}
          <div className="bg-gray-900/50 p-5 rounded-xl border border-green-700/30">
            <div className="flex items-center gap-3 mb-3">
              <Workflow className="w-5 h-5 text-green-400" />
              <h3 className="text-lg font-bold text-green-300">Процесс GitHub Flow</h3>
            </div>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="bg-green-500/20 w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-green-400 text-xs font-bold">1</span>
                </div>
                <div>
                  <p className="font-medium text-green-300">Создание ветки</p>
                  <p className="text-gray-400 text-sm">От main создается feature ветка для новой функции</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-blue-500/20 w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-blue-400 text-xs font-bold">2</span>
                </div>
                <div>
                  <p className="font-medium text-blue-300">Разработка</p>
                  <p className="text-gray-400 text-sm">Работа в feature ветке с регулярными коммитами</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-yellow-500/20 w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-yellow-400 text-xs font-bold">3</span>
                </div>
                <div>
                  <p className="font-medium text-yellow-300">Pull Request</p>
                  <p className="text-gray-400 text-sm">Создание PR из feature в main для code review</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-orange-500/20 w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-orange-400 text-xs font-bold">4</span>
                </div>
                <div>
                  <p className="font-medium text-orange-300">Обсуждение и тестирование</p>
                  <p className="text-gray-400 text-sm">Code review, автоматические тесты, обсуждение изменений</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-red-500/20 w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-red-400 text-xs font-bold">5</span>
                </div>
                <div>
                  <p className="font-medium text-red-300">Мерж и деплой</p>
                  <p className="text-gray-400 text-sm">Мерж в main и автоматический деплой в production</p>
                </div>
              </div>
            </div>
          </div>

          {/* Пример структуры */}
          <div className="bg-gray-900/50 p-5 rounded-xl border border-blue-700/30">
            <div className="flex items-center gap-3 mb-3">
              <FileText className="w-5 h-5 text-blue-400" />
              <h3 className="text-lg font-bold text-blue-300">Пример структуры веток</h3>
            </div>
            <div className="bg-gray-800 p-4 rounded text-sm">
              <pre className="whitespace-pre-wrap text-gray-300"><code>{`main (готов к деплою)
├── feature/user-authentication
├── feature/payment-integration
└── feature/admin-panel`}</code></pre>
            </div>
            <p className="text-gray-300 mt-3 text-sm">
              После мержа feature ветки удаляются, сохраняя чистую историю.
            </p>
          </div>
        </div>
      </div>

      {/* Git Flow */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <GitBranch className="w-5 h-5 text-orange-400" />
          Git Flow — Расширенная модель
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed mb-4">
          <p>
            Git Flow — это более сложная модель ветвления, разработанная Винсентом Дриссеном. Она подходит для проектов с длительными релизными циклами.
          </p>
        </div>

        <div className="space-y-6 mt-6">
          {/* Основные ветки */}
          <div className="bg-gray-900/50 p-5 rounded-xl border border-orange-700/30">
            <div className="flex items-center gap-3 mb-3">
              <GitBranch className="w-5 h-5 text-orange-400" />
              <h3 className="text-lg font-bold text-orange-300">Основные ветки Git Flow</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gray-800 p-3 rounded">
                <h4 className="font-bold text-green-300 mb-2">main</h4>
                <ul className="list-disc pl-5 text-sm space-y-1 text-gray-300">
                  <li>Содержит production-ready код</li>
                  <li>Каждый коммит — это релиз</li>
                  <li>Теги для каждой версии</li>
                </ul>
              </div>
              <div className="bg-gray-800 p-3 rounded">
                <h4 className="font-bold text-blue-300 mb-2">develop</h4>
                <ul className="list-disc pl-5 text-sm space-y-1 text-gray-300">
                  <li>Интеграционная ветка для разработки</li>
                  <li>Содержит последние изменения</li>
                  <li>Не для production</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Вспомогательные ветки */}
          <div className="bg-gray-900/50 p-5 rounded-xl border border-red-700/30">
            <div className="flex items-center gap-3 mb-3">
              <GitBranch className="w-5 h-5 text-red-400" />
              <h3 className="text-lg font-bold text-red-300">Вспомогательные ветки</h3>
            </div>
            <div className="space-y-4">
              <div>
                <h4 className="font-bold text-yellow-300 mb-2 flex items-center gap-2">
                  <GitBranch className="w-4 h-4" />
                  Feature ветки
                </h4>
                <ul className="list-disc pl-5 text-sm space-y-1 text-gray-300">
                  <li>Ответвляются от develop</li>
                  <li>Сливаются обратно в develop</li>
                  <li>Для разработки новых функций</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-purple-300 mb-2 flex items-center gap-2">
                  <GitBranch className="w-4 h-4" />
                  Release ветки
                </h4>
                <ul className="list-disc pl-5 text-sm space-y-1 text-gray-300">
                  <li>Ответвляются от develop</li>
                  <li>Сливаются в main и develop</li>
                  <li>Для подготовки релиза</li>
                  <li>Теги для версий</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-cyan-300 mb-2 flex items-center gap-2">
                  <GitBranch className="w-4 h-4" />
                  Hotfix ветки
                </h4>
                <ul className="list-disc pl-5 text-sm space-y-1 text-gray-300">
                  <li>Ответвляются от main</li>
                  <li>Сливаются в main и develop</li>
                  <li>Для срочных исправлений в production</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Процесс Git Flow */}
          <div className="bg-gray-900/50 p-5 rounded-xl border border-green-700/30">
            <div className="flex items-center gap-3 mb-3">
              <Workflow className="w-5 h-5 text-green-400" />
              <h3 className="text-lg font-bold text-green-300">Процесс Git Flow</h3>
            </div>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="bg-green-500/20 w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-green-400 text-xs font-bold">1</span>
                </div>
                <div>
                  <p className="font-medium text-green-300">Feature разработка</p>
                  <p className="text-gray-400 text-sm">От develop → feature/* → обратно в develop</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-blue-500/20 w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-blue-400 text-xs font-bold">2</span>
                </div>
                <div>
                  <p className="font-medium text-blue-300">Release подготовка</p>
                  <p className="text-gray-400 text-sm">От develop → release/* → в main и develop</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-orange-500/20 w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-orange-400 text-xs font-bold">3</span>
                </div>
                <div>
                  <p className="font-medium text-orange-300">Hotfix исправления</p>
                  <p className="text-gray-400 text-sm">От main → hotfix/* → в main и develop</p>
                </div>
              </div>
            </div>
          </div>

          {/* Пример структуры */}
          <div className="bg-gray-900/50 p-5 rounded-xl border border-blue-700/30">
            <div className="flex items-center gap-3 mb-3">
              <FileText className="w-5 h-5 text-blue-400" />
              <h3 className="text-lg font-bold text-blue-300">Пример структуры веток</h3>
            </div>
            <div className="bg-gray-800 p-4 rounded text-sm">
              <pre className="whitespace-pre-wrap text-gray-300"><code>{`main (production)
├── v1.0.0
├── v1.1.0
└── v2.0.0

develop (интеграция)
├── feature/user-profile
├── feature/payment-system
├── release/v2.1.0
└── hotfix/critical-bug-fix`}</code></pre>
            </div>
          </div>
        </div>
      </div>

      {/* Когда что использовать */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Zap className="w-5 h-5 text-yellow-400" />
          Когда использовать GitHub Flow и Git Flow?
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Выбор модели зависит от специфики проекта и процессов команды:
          </p>
        </div>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-900/50 p-5 rounded-xl border border-purple-700/30">
            <h3 className="font-bold text-purple-300 mb-3 flex items-center gap-2">
              <ArrowRight className="w-4 h-4" />
              Используйте GitHub Flow когда:
            </h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-purple-400">✓</span>
                <span>Деплойите часто (CI/CD)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-400">✓</span>
                <span>Работаете над веб-приложениями</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-400">✓</span>
                <span>Команда небольшая (до 10 человек)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-400">✓</span>
                <span>Не нужна сложная версионность</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-400">✓</span>
                <span>Хотите простоту и скорость</span>
              </li>
            </ul>
            <div className="mt-3 p-2 bg-purple-900/20 rounded text-xs text-purple-300">
              💡 Пример: Стартапы, SaaS продукты, веб-сервисы
            </div>
          </div>
          <div className="bg-gray-900/50 p-5 rounded-xl border border-orange-700/30">
            <h3 className="font-bold text-orange-300 mb-3 flex items-center gap-2">
              <GitBranch className="w-4 h-4" />
              Используйте Git Flow когда:
            </h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-orange-400">✓</span>
                <span>Имеете сложный релизный цикл</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-400">✓</span>
                <span>Поддерживаете несколько версий</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-400">✓</span>
                <span>Работаете над desktop/mobile приложениями</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-400">✓</span>
                <span>Нужна четкая версионность</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-400">✓</span>
                <span>Команда большая и распределенная</span>
              </li>
            </ul>
            <div className="mt-3 p-2 bg-orange-900/20 rounded text-xs text-orange-300">
              💡 Пример: Enterprise ПО, мобильные приложения, библиотеки
            </div>
          </div>
        </div>
      </div>

      {/* Pull Request как часть процесса */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <GitPullRequest className="w-5 h-5 text-cyan-400" />
          Pull Request как часть процесса
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Pull Request (PR) или Merge Request (MR) — ключевой элемент обеих моделей:
          </p>
        </div>

        <div className="mt-6 space-y-4">
          <div className="flex items-start gap-3 p-3 bg-gray-900/50 rounded-lg">
            <div className="bg-green-500/20 p-2 rounded-lg flex-shrink-0">
              <span className="font-bold text-green-400">1</span>
            </div>
            <div>
              <h4 className="font-bold text-green-300">Code Review</h4>
              <p className="text-gray-400 text-sm">Коллеги проверяют код перед мержем, находят баги и улучшают качество</p>
            </div>
          </div>
          <div className="flex items-start gap-3 p-3 bg-gray-900/50 rounded-lg">
            <div className="bg-blue-500/20 p-2 rounded-lg flex-shrink-0">
              <span className="font-bold text-blue-400">2</span>
            </div>
            <div>
              <h4 className="font-bold text-blue-300">Автоматическое тестирование</h4>
              <p className="text-gray-400 text-sm">CI/CD пайплайны запускаются на PR, проверяя сборку и тесты</p>
            </div>
          </div>
          <div className="flex items-start gap-3 p-3 bg-gray-900/50 rounded-lg">
            <div className="bg-purple-500/20 p-2 rounded-lg flex-shrink-0">
              <span className="font-bold text-purple-400">3</span>
            </div>
            <div>
              <h4 className="font-bold text-purple-300">Документация изменений</h4>
              <p className="text-gray-400 text-sm">PR служит документацией того, что было изменено и почему</p>
            </div>
          </div>
          <div className="flex items-start gap-3 p-3 bg-gray-900/50 rounded-lg">
            <div className="bg-orange-500/20 p-2 rounded-lg flex-shrink-0">
              <span className="font-bold text-orange-400">4</span>
            </div>
            <div>
              <h4 className="font-bold text-orange-300">Обсуждение и принятие решений</h4>
              <p className="text-gray-400 text-sm">Платформа для обсуждения архитектурных решений и альтернатив</p>
            </div>
          </div>
        </div>

        <div className="mt-6 bg-gray-900/50 p-4 rounded-xl border border-cyan-700/30">
          <h3 className="font-bold text-cyan-300 mb-3">Лучшие практики для Pull Request</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="bg-gray-800 p-3 rounded text-sm">
              <p className="text-cyan-300 font-medium">Атомарные PR</p>
              <p className="text-gray-400 text-xs mt-1">Один PR — одна функция или исправление</p>
            </div>
            <div className="bg-gray-800 p-3 rounded text-sm">
              <p className="text-cyan-300 font-medium">Описательные заголовки</p>
              <p className="text-gray-400 text-xs mt-1">Четко описывайте, что делает PR</p>
            </div>
            <div className="bg-gray-800 p-3 rounded text-sm">
              <p className="text-cyan-300 font-medium">Code owners</p>
              <p className="text-gray-400 text-xs mt-1">Назначайте правильных ревьюеров</p>
            </div>
            <div className="bg-gray-800 p-3 rounded text-sm">
              <p className="text-cyan-300 font-medium">Автоматизация</p>
              <p className="text-gray-400 text-xs mt-1">Используйте шаблоны и проверки</p>
            </div>
          </div>
        </div>
      </div>

      {/* Заключение */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <div className="flex items-start gap-3">
          <div className="bg-green-500/20 p-2 rounded-lg flex-shrink-0">
            <GitBranch className="w-5 h-5 text-green-400" />
          </div>
          <div>
            <h3 className="font-bold text-white mb-2">Отлично! 🎯</h3>
            <p className="text-gray-300">
              Теперь вы понимаете основные модели ветвления в Git и знаете, когда использовать каждую. Вы изучили GitHub Flow для простых проектов и Git Flow для сложных, а также роль Pull Request в современных процессах разработки. В следующем уроке мы рассмотрим инструменты автоматизации Git.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Part1;