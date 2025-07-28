// src/pages/InterviewQuestionsPage.jsx
import React, { useEffect, useState, useCallback, useMemo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { interviewQuestions } from '../data/interviewQuestions';

// Константы
const YANDEX_RTB_BLOCK_ID = "R-A-16179039-2";
const YANDEX_RTB_CONTAINER_ID = "yandex_rtb_R-A-16179039-2";
const YANDEX_RTB_SCRIPT_ID = 'yandex_rtb_script';

// Маппинг языков
const titleMap = {
  python: "Python",
  javascript: "JavaScript",
  csharp: "C#",
  java: "Java",
  cpp: "C++"
};

const levels = [
  { key: 'junior', label: 'Junior', color: 'from-blue-600 to-blue-800' },
  { key: 'middle', label: 'Middle', color: 'from-purple-600 to-purple-800' },
  { key: 'senior', label: 'Senior', color: 'from-red-600 to-red-800' }
];

// Компонент карточки вопроса
function QuestionCard({ question, answer, index }) {
  const [showAnswer, setShowAnswer] = useState(false);

  const toggleAnswer = useCallback(() => {
    setShowAnswer(prev => !prev);
  }, []);

  return (
    <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/80 backdrop-blur-sm p-6 rounded-xl shadow-xl border border-gray-700 transition-all duration-300 hover:border-red-600 hover:shadow-2xl group">
      <div className="flex items-start gap-3">
        <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-red-600 to-red-800 rounded-full flex items-center justify-center text-sm font-bold">
          {index + 1}
        </div>
        <div className="flex-1">
          <h4 className="font-bold text-lg text-white mb-3 group-hover:text-red-400 transition-colors">
            {question}
          </h4>
          
          <button
            onClick={toggleAnswer}
            className="mt-2 inline-flex items-center gap-2 text-sm bg-gradient-to-r from-red-700 to-red-800 hover:from-red-600 hover:to-red-700 px-4 py-2 rounded-lg transition-all transform hover:scale-105 font-medium shadow-lg group/btn"
          >
            {showAnswer ? (
              <>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21" />
                </svg>
                Скрыть ответ
              </>
            ) : (
              <>
                <svg className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
                Показать ответ
              </>
            )}
          </button>

          {showAnswer && (
            <div className="mt-4 pl-4 border-l-4 border-red-600 animate-fadeIn">
              <p className="text-gray-300 leading-relaxed bg-black/30 p-4 rounded-lg">
                <span className="font-semibold text-red-400">Ответ:</span> {answer}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// Компонент загрузки
function LoadingSpinner() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-red-950 text-white">
      <div className="text-center">
        <div className="relative mb-6">
          <div className="w-16 h-16 border-4 border-red-900 rounded-full animate-spin border-t-red-500 mx-auto"></div>
          <div className="absolute inset-0 w-16 h-16 border-4 border-transparent rounded-full animate-ping border-t-red-500 mx-auto opacity-20"></div>
        </div>
        <p className="text-gray-400 font-medium">Загрузка вопросов...</p>
      </div>
    </div>
  );
}

// Компонент ошибки
function ErrorDisplay({ message }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-red-950 text-white p-6">
      <div className="text-center bg-gradient-to-br from-gray-900 to-black p-8 rounded-2xl border border-red-800 max-w-md shadow-2xl">
        <div className="w-16 h-16 bg-red-900/20 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-8 h-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
        </div>
        <h2 className="text-2xl font-bold text-red-500 mb-3">Ошибка</h2>
        <p className="text-gray-300 mb-6 leading-relaxed">{message}</p>
        <a
          href="/#"
          className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-red-700 to-red-800 text-white rounded-lg hover:from-red-600 hover:to-red-700 transition-all transform hover:scale-105 font-medium shadow-lg group"
        >
          <svg className="w-5 h-5 mr-2 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Назад к выбору
        </a>
      </div>
    </div>
  );
}

// Компонент пустого состояния
function EmptyState({ title, level }) {
  return (
    <div className="text-center py-20 bg-gradient-to-br from-gray-900/50 to-black rounded-2xl border border-gray-800">
      <div className="w-20 h-20 bg-red-900/20 rounded-full flex items-center justify-center mx-auto mb-6">
        <svg className="w-10 h-10 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </div>
      <h3 className="text-2xl font-bold text-gray-300 mb-4">Нет вопросов для {title} ({level})</h3>
      <p className="text-gray-500 max-w-md mx-auto">
        Следите за обновлениями — новые вопросы появятся совсем скоро!
      </p>
    </div>
  );
}

// Основной компонент
export default function InterviewQuestionsPage() {
  const { language, level = 'junior' } = useParams();
  const navigate = useNavigate();
  const [selectedLevel, setSelectedLevel] = useState(level);
  const [loading, setLoading] = useState(true);

  // Мемоизированные вычисления
  const langKey = useMemo(() => language?.toLowerCase(), [language]);
  const title = useMemo(() => titleMap[langKey] || "Неизвестный язык", [langKey]);
  const isValidLanguage = useMemo(() => Object.keys(interviewQuestions).includes(langKey), [langKey]);
  const questionsByLevel = useMemo(() => interviewQuestions[langKey] || {}, [langKey]);
  const questions = useMemo(() => questionsByLevel[selectedLevel] || [], [questionsByLevel, selectedLevel]);

  // Загрузка данных
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  // Инициализация рекламы
  useEffect(() => {
    if (!document.getElementById(YANDEX_RTB_SCRIPT_ID)) {
      const script = document.createElement('script');
      script.id = YANDEX_RTB_SCRIPT_ID;
      script.async = true;
      script.src = 'https://yandex.ru/ads/system/context.js';
      document.body.appendChild(script);
    }

    const tryRenderAd = () => {
      if (window.Ya?.Context?.AdvManager) {
        window.yaContextCb = window.yaContextCb || [];
        window.yaContextCb.push(() => {
          Ya.Context.AdvManager.render({
            blockId: YANDEX_RTB_BLOCK_ID,
            renderTo: YANDEX_RTB_CONTAINER_ID
          });
        });
      } else {
        setTimeout(tryRenderAd, 500);
      }
    };

    tryRenderAd();

    return () => {
      const container = document.getElementById(YANDEX_RTB_CONTAINER_ID);
      if (container) {
        container.innerHTML = '';
      }
    };
  }, []);

  // Обработчик смены уровня
  const handleLevelChange = useCallback((newLevel) => {
    setSelectedLevel(newLevel);
    navigate(`/interview/${langKey}/${newLevel}`);
  }, [langKey, navigate]);

  // Рендер состояний
  if (loading) return <LoadingSpinner />;

  if (!isValidLanguage) {
    return <ErrorDisplay message={`Язык "${language}" не поддерживается.`} />;
  }

  return (
    <section className="bg-gradient-to-br from-gray-900 via-black to-red-950 text-white min-h-screen py-16 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Заголовок */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-red-500 to-red-800 bg-clip-text text-transparent">
            Вопросы на собеседование
          </h1>
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="text-2xl font-bold text-white">{title}</span>
            <span className="px-3 py-1 bg-gradient-to-r from-gray-700 to-gray-800 rounded-full text-sm font-medium">
              {selectedLevel}
            </span>
          </div>
          <div className="w-24 h-1 bg-gradient-to-r from-red-600 to-red-800 mx-auto rounded-full"></div>
        </div>

        {/* Фильтр по уровню */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {levels.map((lvl) => (
            <button
              key={lvl.key}
              onClick={() => handleLevelChange(lvl.key)}
              className={`px-6 py-3 rounded-xl capitalize transition-all duration-300 font-medium shadow-lg transform hover:scale-105 ${
                selectedLevel === lvl.key
                  ? `bg-gradient-to-r ${lvl.color} text-white shadow-xl`
                  : 'bg-gradient-to-r from-gray-800 to-gray-900 text-gray-300 hover:from-gray-700 hover:to-gray-800 hover:text-white'
              }`}
            >
              {lvl.label}
            </button>
          ))}
        </div>

        {/* Статистика */}
        {questions.length > 0 && (
          <div className="mb-8 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-red-900/30 to-red-800/30 rounded-full border border-red-800/50">
              <svg className="w-5 h-5 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <span className="font-medium">
                Всего вопросов: <span className="text-red-400">{questions.length}</span>
              </span>
            </div>
          </div>
        )}

        {/* Список вопросов */}
        {questions.length > 0 ? (
          <div className="space-y-6 mb-12">
            {questions.map((qa, index) => (
              <QuestionCard 
                key={`${selectedLevel}-${index}`} 
                question={qa.q} 
                answer={qa.a} 
                index={index}
              />
            ))}
          </div>
        ) : (
          <div className="mb-12">
            <EmptyState title={title} level={selectedLevel} />
          </div>
        )}

        {/* Рекламный блок Яндекс.РТБ */}
        <div className="my-12 flex justify-center">
          <div 
            id={YANDEX_RTB_CONTAINER_ID} 
            className="max-w-2xl w-full bg-gradient-to-br from-gray-900/50 to-black rounded-xl border border-gray-800 p-8 min-h-[280px] flex items-center justify-center"
          >
            <div className="text-center text-gray-600">
              <div className="animate-pulse mb-4">
                <div className="w-16 h-16 bg-gray-800 rounded-lg mx-auto"></div>
              </div>
              <p className="text-sm">Рекламный блок загружается...</p>
            </div>
          </div>
        </div>

        {/* Кнопка назад */}
        <div className="text-center">
          <a
            href="/#"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-red-700 to-red-800 text-white rounded-xl hover:from-red-600 hover:to-red-700 transition-all transform hover:scale-105 font-medium shadow-xl group text-lg"
          >
            <svg className="w-5 h-5 mr-3 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Назад к выбору
          </a>
        </div>
      </div>
    </section>
  );
}