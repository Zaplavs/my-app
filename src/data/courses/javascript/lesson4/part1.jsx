// src/data/courses/javascript/lesson4/part1.jsx
import React from 'react';
import { Variable, Lock, Eye, Edit3, Zap, Code } from 'lucide-react';

const Part1 = () => {
  return (
    <div className="space-y-8 text-gray-200">
      {/* Вступление */}
      <div className="bg-gradient-to-r from-indigo-900/30 to-blue-900/30 backdrop-blur-sm border border-indigo-700/30 rounded-2xl p-6 shadow-lg">
        <div className="flex items-start gap-4">
          <div className="bg-indigo-500/20 p-3 rounded-lg">
            <Variable className="w-6 h-6 text-indigo-400" />
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">📚 Урок 4: Переменные в JavaScript</h1>
            <h2 className="text-xl font-semibold text-indigo-300 mb-3">let, const и var - способы хранения данных</h2>
            <p className="text-gray-300">
              <span className="font-medium text-yellow-400">🎯 Цель урока:</span> Понять, что такое переменные, как их объявлять и в чем разница между let, const и var.
            </p>
          </div>
        </div>
      </div>

      {/* Что такое переменные */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Edit3 className="w-5 h-5 text-green-400" />
          Что такое переменные?
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            <span className="font-medium text-green-300">Переменная</span> — это именованное хранилище для данных в программе. Представьте переменную как коробку с названием, в которую можно положить значение.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
            <div className="bg-gray-900/50 p-4 rounded-xl border border-green-700/30">
              <h3 className="font-bold text-green-300 mb-2">Аналогия:</h3>
              <p className="text-gray-300 text-sm">
                Переменная как коробка: у нее есть <span className="text-yellow-300">имя</span> (этикетка) и <span className="text-yellow-300">содержимое</span> (значение внутри).
              </p>
              <div className="mt-3 p-3 bg-gray-800 rounded text-center">
                <div className="text-xs text-gray-400">Коробка с названием "возраст"</div>
                <div className="text-lg font-bold text-yellow-300">25</div>
              </div>
            </div>

            <div className="bg-gray-900/50 p-4 rounded-xl border border-blue-700/30">
              <h3 className="font-bold text-blue-300 mb-2">Зачем нужны переменные:</h3>
              <ul className="list-disc pl-5 space-y-1 text-sm">
                <li>Хранить данные для дальнейшего использования</li>
                <li>Изменять значения в процессе работы программы</li>
                <li>Давать понятные имена данным</li>
                <li>Избегать повторения одинаковых значений</li>
              </ul>
            </div>
          </div>

          <div className="mt-4 p-3 bg-yellow-900/20 border border-yellow-700/30 rounded-lg">
            <p className="text-yellow-300 text-sm">
              <span className="font-medium">💡 Пример:</span> Вместо того чтобы писать число 3.14159265359 везде, можно создать переменную <code className="bg-gray-800 px-1 rounded">pi</code> и использовать её.
            </p>
          </div>
        </div>
      </div>

      {/* Способы объявления переменных */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Code className="w-5 h-5 text-purple-400" />
          Способы объявления переменных
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            В JavaScript есть три способа объявить переменную: <code className="bg-gray-800 px-2 py-1 rounded text-yellow-300">let</code>, <code className="bg-gray-800 px-2 py-1 rounded text-blue-300">const</code> и <code className="bg-gray-800 px-2 py-1 rounded text-red-300">var</code>.
          </p>

          <div className="space-y-6 mt-6">
            {/* let */}
            <div className="bg-gray-900/50 p-5 rounded-xl border border-yellow-700/30">
              <h3 className="font-bold text-yellow-300 flex items-center gap-2 mb-3">
                <Edit3 className="w-5 h-5" />
                let — изменяемая переменная
              </h3>
              <p className="text-gray-300 text-sm mb-3">
                Переменная, значение которой можно изменить после объявления.
              </p>
              <div className="bg-gray-800 p-4 rounded">
                <pre className="text-sm text-gray-300">
{`let имя = "Иван";
let возраст = 25;
console.log(имя, возраст); // Иван 25

// Можно изменить значение
возраст = 26;
console.log(возраст); // 26`}
                </pre>
              </div>
            </div>

            {/* const */}
            <div className="bg-gray-900/50 p-5 rounded-xl border border-blue-700/30">
              <h3 className="font-bold text-blue-300 flex items-center gap-2 mb-3">
                <Lock className="w-5 h-5" />
                const — константа (неизменяемая)
              </h3>
              <p className="text-gray-300 text-sm mb-3">
                Переменная, значение которой нельзя изменить после объявления.
              </p>
              <div className="bg-gray-800 p-4 rounded">
                <pre className="text-sm text-gray-300">
{`const город = "Москва";
const число_PI = 3.14159;
console.log(город); // Москва

// Попытка изменить значение вызовет ошибку!
// город = "Санкт-Петербург"; // ❌ ОШИБКА!`}
                </pre>
              </div>
            </div>

            {/* var */}
            <div className="bg-gray-900/50 p-5 rounded-xl border border-red-700/30">
              <h3 className="font-bold text-red-300 flex items-center gap-2 mb-3">
                <Code className="w-5 h-5" />
                var — устаревший способ (не рекомендуется)
              </h3>
              <p className="text-gray-300 text-sm mb-3">
                Старый способ объявления переменных с особым поведением (область видимости).
              </p>
              <div className="bg-gray-800 p-4 rounded">
                <pre className="text-sm text-gray-300">
{`var старая_переменная = "Устаревшая";
console.log(старая_переменная); // Устаревшая

// Можно изменить значение
старая_переменная = "Изменена";
console.log(старая_переменная); // Изменена`}
                </pre>
              </div>
            </div>
          </div>

          <div className="mt-6 p-3 bg-purple-900/20 border border-purple-700/30 rounded-lg">
            <p className="text-purple-300 text-sm">
              <span className="font-medium">💡 Рекомендация:</span> Используйте <code className="bg-gray-800 px-1 rounded">const</code> по умолчанию, <code className="bg-gray-800 px-1 rounded">let</code> если нужно изменить значение. Избегайте <code className="bg-gray-800 px-1 rounded">var</code>.
            </p>
          </div>
        </div>
      </div>

      {/* Область видимости */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Eye className="w-5 h-5 text-green-400" />
          Область видимости переменных
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            <span className="font-medium text-green-300">Область видимости</span> — это часть программы, где переменная доступна для использования.
          </p>

          <div className="space-y-4 mt-4">
            <div className="bg-gray-900/50 p-4 rounded-xl border border-blue-700/30">
              <h3 className="font-bold text-blue-300 mb-2">Блочная область видимости (let и const):</h3>
              <p className="text-gray-300 text-sm mb-3">
                Переменные доступны только внутри блока кода (между фигурными скобками).
              </p>
              <div className="bg-gray-800 p-4 rounded">
                <pre className="text-sm text-gray-300">
{`{
  let внутренняя = "Доступна только здесь";
  const константа = 42;
  console.log(внутренняя); // ✅ Работает
  console.log(константа); // ✅ Работает
}

// console.log(внутренняя); // ❌ ОШИБКА! Переменная не доступна
// console.log(константа); // ❌ ОШИБКА! Переменная не доступна`}
                </pre>
              </div>
            </div>

            <div className="bg-gray-900/50 p-4 rounded-xl border border-yellow-700/30">
              <h3 className="font-bold text-yellow-300 mb-2">Функциональная область видимости (var):</h3>
              <p className="text-gray-300 text-sm mb-3">
                Переменные доступны внутри всей функции (или глобально, если вне функции).
              </p>
              <div className="bg-gray-800 p-4 rounded">
                <pre className="text-sm text-gray-300">
{`{
  var старая = "Доступна везде";
  console.log(старая); // ✅ Работает
}

console.log(старая); // ✅ Работает (проблема var!)`}
                </pre>
              </div>
            </div>

            <div className="bg-gray-900/50 p-4 rounded-xl border border-purple-700/30">
              <h3 className="font-bold text-purple-300 mb-2">Глобальная область видимости:</h3>
              <p className="text-gray-300 text-sm mb-3">
                Переменные, объявленные вне любых блоков, доступны везде.
              </p>
              <div className="bg-gray-800 p-4 rounded">
                <pre className="text-sm text-gray-300">
{`let глобальная = "Доступна везде";

function показать() {
  console.log(глобальная); // ✅ Работает
}

показать(); // Выведет: Доступна везде`}
                </pre>
              </div>
            </div>
          </div>

          <div className="mt-4 p-3 bg-red-900/20 border border-red-700/30 rounded-lg">
            <p className="text-red-300 text-sm">
              <span className="font-medium">⚠️ Важно:</span> Блочная область видимости (<code className="bg-gray-800 px-1 rounded">let</code>, <code className="bg-gray-800 px-1 rounded">const</code>) помогает избежать ошибок и делает код более предсказуемым.
            </p>
          </div>
        </div>
      </div>

      {/* Правила именования переменных */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Zap className="w-5 h-5 text-yellow-400" />
          Правила именования переменных
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Имена переменных должны следовать определенным правилам и соглашениям:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
            <div className="bg-gray-900/50 p-4 rounded-xl border border-green-700/30">
              <h3 className="font-bold text-green-300 mb-2">Обязательные правила:</h3>
              <ul className="list-disc pl-5 space-y-2 text-sm">
                <li>Имя должно начинаться с буквы, <code className="bg-gray-800 px-1 rounded">_</code> или <code className="bg-gray-800 px-1 rounded">$</code></li>
                <li>Не может начинаться с цифры</li>
                <li>Не может содержать пробелы</li>
                <li>Не может быть зарезервированным словом (if, for, function и т.д.)</li>
                <li>Регистр имеет значение (age ≠ Age ≠ AGE)</li>
              </ul>
            </div>

            <div className="bg-gray-900/50 p-4 rounded-xl border border-blue-700/30">
              <h3 className="font-bold text-blue-300 mb-2">Рекомендации:</h3>
              <ul className="list-disc pl-5 space-y-2 text-sm">
                <li>Используйте английские слова</li>
                <li>Давайте осмысленные имена</li>
                <li>Используйте camelCase (имяПеременной)</li>
                <li>Избегайте сокращений</li>
                <li>Имена констант пишутся ЗАГЛАВНЫМИ_БУКВАМИ</li>
              </ul>
            </div>
          </div>

          <div className="mt-6 bg-gray-900/50 p-4 rounded-xl border border-yellow-700/30">
            <h3 className="font-bold text-yellow-300 mb-3">Примеры хороших и плохих имен:</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <div className="text-sm text-green-300 mb-2">✅ Хорошие имена:</div>
                <div className="bg-gray-800 p-3 rounded text-xs">
                  <div>let userName = "Иван";</div>
                  <div>let userAge = 25;</div>
                  <div>const MAX_USERS = 100;</div>
                  <div>let isActive = true;</div>
                </div>
              </div>
              <div>
                <div className="text-sm text-red-300 mb-2">❌ Плохие имена:</div>
                <div className="bg-gray-800 p-3 rounded text-xs">
                  <div className="line-through">let a = "Иван";</div>
                  <div className="line-through">let переменная1 = 25;</div>
                  <div className="line-through">let имя_пользователя = true;</div>
                  <div className="line-through">let u = 100;</div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-4 p-3 bg-blue-900/20 border border-blue-700/30 rounded-lg">
            <p className="text-blue-300 text-sm">
              <span className="font-medium">💡 Совет:</span> Хорошо названная переменная — это переменная, имя которой сразу понятно без комментариев.
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
              Теперь вы знаете, что такое переменные, как их объявлять с помощью let, const и var, понимаете область видимости и правила именования. В следующем уроке мы закрепим эти знания на практике!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Part1;