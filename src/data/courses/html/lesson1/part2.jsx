// src/data/courses/html/lesson1/part2.jsx
import React from 'react';
import { Play, Save, CheckCircle } from 'lucide-react'; // Импортируем иконки

const Part2 = ({ userCode, setUserCode, completed, setCompleted, handleSaveCode, handleComplete, isSaving, partId }) => {
  // Этот компонент использует props для взаимодействия с функционалом сохранения/выполнения
  return (
    <div className="space-y-6">
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h3 className="text-xl font-bold text-white mb-4">Теги и Элементы</h3>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed mb-4">
          <p>HTML использует <em>теги</em> для определения элементов.</p>
          <ul>
            {/* Исправлено: Текст тегов теперь корректно отображается как текст внутри <li> и <code> */}
            <li><code className="bg-gray-700 px-1 rounded">{'<p>'}</code> - абзац</li>
            <li><code className="bg-gray-700 px-1 rounded">{'<h1>'}</code>, <code className="bg-gray-700 px-1 rounded">{'<h2>'}</code> - заголовки</li>
            <li><code className="bg-gray-700 px-1 rounded">{'<a>'}</code> - ссылка</li>
          </ul>
        </div>
      </div>

      {/* Стандартный блок задания, использующий переданные props */}
      <div className="bg-gray-800/40 backdrop-blur-lg border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-8 bg-red-600/20 rounded-lg flex items-center justify-center">
            <Play className="w-4 h-4 text-red-400" />
          </div>
          <h3 className="text-2xl font-bold text-white">Практика: Теги</h3>
        </div>
        {/* Исправлено: Текст задания без вложенных блочных элементов */}
        <p className="text-gray-300 mb-6 text-lg leading-relaxed">
          Создайте HTML-документ с заголовком &quot;Мои навыки&quot; и списком из 3 навыков, используя теги {'<h1>'} и {'<ul>'}.
        </p>

        <div className="mb-4">
          <div className="flex items-center justify-between mb-2">
            <label className="text-gray-400">Ваш код:</label>
            <button
              onClick={handleSaveCode}
              disabled={isSaving}
              className="flex items-center gap-2 text-sm bg-gray-700 hover:bg-gray-600 px-3 py-1 rounded transition-colors duration-200 disabled:opacity-50"
            >
              <Save className="w-4 h-4" />
              {isSaving ? 'Сохранено' : 'Сохранить'}
            </button>
          </div>
          <textarea
            value={userCode}
            onChange={(e) => setUserCode(e.target.value)}
            placeholder="Введите ваш код здесь..."
            rows="8"
            className="w-full bg-gray-900 border border-gray-700 rounded-lg p-4 text-white placeholder-gray-500 text-sm font-mono focus:border-red-500 focus:outline-none transition-colors duration-200"
          />
        </div>
        <button
          onClick={handleComplete}
          className={`flex items-center justify-center gap-2 w-full py-4 rounded-lg text-lg font-bold transition-all duration-300 ${
            completed
              ? 'bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800'
              : 'bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800'
          } shadow-lg hover:shadow-xl transform hover:scale-[1.02]`}
        >
          {completed ? (
            <>
              <CheckCircle className="w-5 h-5" />
              Часть выполнена
            </>
          ) : (
            <>
              <Play className="w-5 h-5" />
              Пометить как выполненную
            </>
          )}
        </button>
      </div>
    </div>
  );
};

export default Part2;