import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { interviewQuestions } from '../data/interviewQuestions';

export default function InterviewQuestionsPage() {
  const { language } = useParams();

  const questions = interviewQuestions[language.toLowerCase()] || [];
  const titleMap = {
    python: "Python",
    javascript: "JavaScript",
    csharp: "C#",
    java: "Java",
    cpp: "C++"
  };
  const title = titleMap[language.toLowerCase()] || "Неизвестный язык";

  // --- Рендер рекламы ---
  useEffect(() => {
    const scriptId = 'yandex_rtb_script';

    // Проверяем, есть ли уже загруженный скрипт
    if (!document.getElementById(scriptId)) {
      const script = document.createElement('script');
      script.id = scriptId;
      script.async = true;
      script.src = 'https://yandex.ru/ads/system/context.js ';
      document.body.appendChild(script);
    }

    // Ждём, пока подгрузится Ya.Context.AdvManager
    const tryRenderAd = () => {
      if (window.Ya && window.Ya.Context && window.Ya.Context.AdvManager) {
        window.yaContextCb = window.yaContextCb || [];
        window.yaContextCb.push(() => {
          Ya.Context.AdvManager.render({
            blockId: "R-A-16179039-2",
            renderTo: "yandex_rtb_R-A-16179039-2"
          });
        });
      } else {
        setTimeout(tryRenderAd, 500); // Повтор позже
      }
    };

    tryRenderAd();
  }, []);

  return (
    <section className="bg-red-950 text-white min-h-screen py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-10 text-center bg-gradient-to-r from-red-700 to-black p-4 rounded-lg shadow-md">
          Вопросы на собеседование: {title}
        </h2>

        {questions.length > 0 ? (
          <div className="space-y-6">
            {questions.map((qa, index) => (
              <QuestionCard key={index} question={qa.q} answer={qa.a} />
            ))}
          </div>
        ) : (
          <div className="text-center py-10">
            <p className="text-xl text-red-700">К сожалению, вопросы для этого языка пока не добавлены.</p>
          </div>
        )}

        {/* Блок с рекламой */}
        <div id="yandex_rtb_R-A-16179039-2" className="my-10"></div>

        {/* Кнопка назад */}
        <div className="mt-8 text-center">
          <a
            href="/#"
            className="inline-block bg-red-700 hover:bg-red-800 px-6 py-3 rounded-full transition transform hover:scale-105"
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
    <div className="bg-black p-6 rounded-lg shadow-lg border border-red-800 transition hover:bg-gray-900">
      <h4 className="font-bold text-xl text-red-500 mb-4">Вопрос: {question}</h4>

      <button
        onClick={() => setShowAnswer(!showAnswer)}
        className="mt-2 text-sm bg-red-800 hover:bg-red-700 px-4 py-2 rounded transition"
      >
        {showAnswer ? "Скрыть ответ" : "Показать ответ"}
      </button>

      {showAnswer && (
        <p className="mt-4 pl-4 border-l-4 border-red-700 text-white">
          Ответ: {answer}
        </p>
      )}
    </div>
  );
}