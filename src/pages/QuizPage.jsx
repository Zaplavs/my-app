import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { quizQuestions } from '../data/quiz/index.js';

export default function QuizPage() {
  const { language } = useParams();
  const navigate = useNavigate();

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);
  const [difficulty, setDifficulty] = useState('junior');

  // Получаем вопросы для текущего языка и сложности
  const languageQuestions = quizQuestions[language.toLowerCase()] || {};
  const questions = languageQuestions[difficulty] || [];

  // Перемешиваем вопросы при загрузке
  const [shuffledQuestions, setShuffledQuestions] = useState([]);

  // Инициализация рекламного блока Яндекс.РТБ — ВСЕГДА ВЫЗЫВАЕТСЯ НАВЕРХУ
  useEffect(() => {
    window.yaContextCb = window.yaContextCb || [];

    const timerId = setTimeout(() => {
      window.yaContextCb.push(() => {
        if (typeof Ya === 'undefined' || !Ya.Context || !Ya.Context.AdvManager) {
          console.warn('Яндекс.РТБ не загружен');
          return;
        }

        Ya.Context.AdvManager.render({
          blockId: "R-A-16179039-3",
          renderTo: "yandex_rtb_R-A-16179039-3"
        });
      });
    }, 0);

    return () => {
      clearTimeout(timerId);
      window.yaContextCb = [];
    };
  }, []);

  // Загрузка вопросов
  useEffect(() => {
    if (!questions.length) {
      navigate('/');
      return;
    }

    const shuffled = [...questions].sort(() => Math.random() - 0.5);
    setShuffledQuestions(shuffled);
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setIsCorrect(null);
  }, [language, navigate, questions, difficulty]);

  const currentQuestion = shuffledQuestions[currentQuestionIndex];

  const handleAnswerClick = (option) => {
    if (selectedAnswer !== null) return;

    const correct = option === currentQuestion.answer;
    setIsCorrect(correct);
    setSelectedAnswer(option);
  };

  const handleNextQuestion = () => {
    const nextIndex = Math.floor(Math.random() * shuffledQuestions.length);
    setCurrentQuestionIndex(nextIndex);
    setSelectedAnswer(null);
    setIsCorrect(null);
  };

  if (!questions.length || !shuffledQuestions.length) {
    return (
      <section className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-red-500 border-t-transparent rounded-full animate-spin mx-auto"></div>
          <p className="mt-4">Загрузка вопросов...</p>
        </div>
      </section>
    );
  }

  if (!currentQuestion) {
    return (
      <section className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-400">Не удалось загрузить вопрос</p>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-extrabold text-center mb-6 bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-pink-600">
          Викторина: {language.toUpperCase()}
        </h2>

        {/* Переключатель сложности */}
        <div className="flex justify-center mb-8">
          <div className="bg-gray-800 p-1 rounded-lg inline-flex">
            {['junior', 'middle', 'senior'].map((level) => (
              <button
                key={level}
                onClick={() => setDifficulty(level)}
                className={`px-6 py-2 rounded-md text-sm font-medium transition-all duration-200 capitalize
                  ${difficulty === level 
                    ? 'bg-gradient-to-r from-red-600 to-pink-600 text-white shadow-lg' 
                    : 'text-gray-300 hover:text-white hover:bg-gray-700'
                  }`}
              >
                {level}
              </button>
            ))}
          </div>
        </div>

        <div className="bg-gray-800 p-6 md:p-8 rounded-xl shadow-2xl border border-gray-700 hover:scale-[1.01] duration-300 transition-transform">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-2xl font-semibold">{currentQuestion.question}</h3>
            <span className={`px-3 py-1 rounded-full text-xs font-semibold capitalize
              ${difficulty === 'junior' ? 'bg-green-900 text-green-200' :
                difficulty === 'middle' ? 'bg-yellow-900 text-yellow-200' :
                'bg-red-900 text-red-200'}`}
            >
              {difficulty}
            </span>
          </div>

          <ul className="space-y-4 mb-8">
            {currentQuestion.options.map((option, idx) => (
              <li key={idx}>
                <button
                  onClick={() => handleAnswerClick(option)}
                  disabled={selectedAnswer !== null}
                  className={`w-full text-left p-4 rounded-lg border transition-all duration-300 ${
                    selectedAnswer === option
                      ? isCorrect
                        ? 'bg-green-700 border-green-600 text-white'
                        : 'bg-red-700 border-red-600 text-white'
                      : 'bg-gray-700 border-gray-600 hover:bg-gray-600 text-white'
                  }`}
                >
                  {option}
                </button>
              </li>
            ))}
          </ul>

          {/* Ответ и объяснение */}
          {selectedAnswer !== null && (
            <div
              className={`mb-8 p-5 rounded-lg border-l-4 transition-all duration-300 ${
                isCorrect ? 'border-green-500 bg-green-900/20' : 'border-red-500 bg-red-900/20'
              }`}
            >
              {isCorrect ? (
                <p className="text-green-400 font-bold flex items-center">
                  <CheckIcon /> Правильно!
                </p>
              ) : (
                <p className="text-red-400 font-bold flex items-center">
                  <XIcon /> Неправильно
                </p>
              )}

              {/* Всегда показываем правильный ответ */}
              <p className="mt-2 text-sm opacity-90">
                Правильный ответ: <span className="font-semibold">{currentQuestion.answer}</span>
              </p>

              {/* Опциональное объяснение */}
              {currentQuestion.explanation?.correct && isCorrect && (
                <p className="mt-1 text-sm opacity-80">{currentQuestion.explanation.correct}</p>
              )}
              {currentQuestion.explanation?.incorrect && !isCorrect && (
                <p className="mt-1 text-sm opacity-80">{currentQuestion.explanation.incorrect}</p>
              )}
            </div>
          )}

          {/* Кнопки управления */}
          <div className="flex justify-end mt-6">
            <button
              onClick={handleNextQuestion}
              disabled={selectedAnswer === null}
              className={`px-5 py-2 rounded-lg transition-all ${
                selectedAnswer !== null
                  ? 'bg-gradient-to-r from-red-700 to-pink-700 hover:from-red-800 hover:to-pink-800'
                  : 'bg-gray-800 cursor-not-allowed opacity-50'
              }`}
            >
              Следующий вопрос
            </button>
          </div>
        </div>

        {/* Рекламный блок Яндекс.РТБ */}
        <div className="my-12">
          <div id="yandex_rtb_R-A-16179039-3" className="w-full"></div>
        </div>

        {/* Кнопка "Вернуться на главную" */}
        <div className="mt-6 text-center">
          <a
            href="/"
            className="text-red-500 hover:text-red-400 font-medium transition inline-flex items-center group"
          >
            <ArrowLeftIcon />
            <span className="ml-2 group-hover:underline">Вернуться на главную</span>
          </a>
        </div>
      </div>
    </section>
  );
}

// Иконки
function CheckIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12"></polyline>
    </svg>
  );
}

function XIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="6" x2="6" y2="18"></line>
      <line x1="6" y1="6" x2="18" y2="18"></line>
    </svg>
  );
}

function ArrowLeftIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="19" y1="12" x2="5" y2="12"></line>
      <polyline points="12 19 5 12 12 5"></polyline>
    </svg>
  );
}