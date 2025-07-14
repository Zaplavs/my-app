import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { interviewQuestions } from '../data/interviewQuestions';

export default function InterviewQuestionsPage() {
  const { language, level = 'junior' } = useParams(); // Получаем язык и уровень из URL
  const navigate = useNavigate();

  const [selectedLevel, setSelectedLevel] = useState(level);

  const levels = ['junior', 'middle', 'senior'];
  const langKey = language.toLowerCase();
  const questionsByLevel = interviewQuestions[langKey] || {};
  const questions = questionsByLevel[selectedLevel] || [];

  const titleMap = {
    python: "Python",
    javascript: "JavaScript",
    csharp: "C#",
    java: "Java",
    cpp: "C++"
  };

  const title = titleMap[langKey] || "Неизвестный язык";

  // Проверяем, существует ли такой язык
  const isValidLanguage = Object.keys(interviewQuestions).includes(langKey);

  // --- Реклама (временно оставлена, можно удалить при необходимости) ---
  useEffect(() => {
    const scriptId = 'yandex_rtb_script';
    if (!document.getElementById(scriptId)) {
      const script = document.createElement('script');
      script.id = scriptId;
      script.async = true;
      script.src = 'https://yandex.ru/ads/system/context.js ';
      document.body.appendChild(script);
    }

    const tryRenderAd = () => {
      if (window.Ya?.Context?.AdvManager) {
        window.yaContextCb = window.yaContextCb || [];
        window.yaContextCb.push(() => {
          Ya.Context.AdvManager.render({
            blockId: "R-A-16179039-2",
            renderTo: "yandex_rtb_R-A-16179039-2"
          });
        });
      } else {
        setTimeout(tryRenderAd, 500);
      }
    };

    tryRenderAd();
  }, []);

  const handleLevelChange = (newLevel) => {
    setSelectedLevel(newLevel);
    navigate(`/interview/${langKey}/${newLevel}`); // ✅ Теперь используем /interview/
  };

  return (
    <section className="bg-gradient-to-br from-gray-900 via-black to-red-950 text-white min-h-screen py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-red-500 to-red-800 p-5 rounded-xl shadow-lg">
          Вопросы на собеседование: {title} ({selectedLevel})
        </h2>

        {/* Фильтр по уровню */}
        <div className="flex justify-center gap-4 mb-10">
          {levels.map((lvl) => (
            <button
              key={lvl}
              onClick={() => handleLevelChange(lvl)}
              className={`px-5 py-2 rounded-full capitalize transition-all ${
                selectedLevel === lvl
                  ? 'bg-red-700 text-white'
                  : 'bg-gray-800 hover:bg-red-900'
              }`}
            >
              {lvl}
            </button>
          ))}
        </div>

        {/* Сообщение, если язык не найден */}
        {!isValidLanguage && (
          <div className="text-center py-10">
            <p className="text-xl text-red-700">Язык "{language}" не поддерживается.</p>
          </div>
        )}

        {/* Список вопросов */}
        {isValidLanguage && questions.length > 0 ? (
          <div className="space-y-6">
            {questions.map((qa, index) => (
              <QuestionCard key={index} question={qa.q} answer={qa.a} />
            ))}
          </div>
        ) : isValidLanguage && questions.length === 0 ? (
          <div className="text-center py-10">
            <p className="text-xl text-red-700">Нет вопросов для выбранного уровня.</p>
          </div>
        ) : null}

        {/* Блок с рекламой */}
        <div id="yandex_rtb_R-A-16179039-2" className="my-10"></div>

        {/* Кнопка назад */}
        <div className="mt-8 text-center">
          <a
            href="/#"
            className="inline-block bg-red-800 hover:bg-red-700 px-6 py-3 rounded-full transition transform hover:scale-105"
          >
            Назад к выбору
          </a>
        </div>
      </div>
    </section>
  );
}

function QuestionCard({ question, answer }) {
  const [showAnswer, setShowAnswer] = React.useState(false);

  return (
    <div className="bg-gray-900 p-6 rounded-lg shadow-lg border border-red-800 transition hover:bg-gray-800">
      <h4 className="font-bold text-xl text-red-400 mb-4">Вопрос: {question}</h4>

      <button
        onClick={() => setShowAnswer(!showAnswer)}
        className="mt-2 text-sm bg-red-900 hover:bg-red-700 px-4 py-2 rounded transition"
      >
        {showAnswer ? "Скрыть ответ" : "Показать ответ"}
      </button>

      {showAnswer && (
        <p className="mt-4 pl-4 border-l-4 border-red-600 text-gray-300">
          Ответ: {answer}
        </p>
      )}
    </div>
  );
}