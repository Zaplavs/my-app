import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

export default function CodeChallengePage() {
  const { language } = useParams();
  const navigate = useNavigate();

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswer, setUserAnswer] = useState('');
  const [isCorrect, setIsCorrect] = useState(null);
  const [questions, setQuestions] = useState([]);
  const [isAnswered, setIsAnswered] = useState(false);

  // Инициализация рекламного блока Яндекс.РТБ
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
          renderTo: "yandex_rtb_R-A-16179039-4"
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
    const loadQuestions = async () => {
      try {
        const module = await import(`../data/${language.toLowerCase()}/quiz.js`);
        setQuestions(module.default);
      } catch (err) {
        console.error('Ошибка загрузки вопросов:', err);
        navigate('/');
      }
    };

    loadQuestions();
  }, [language, navigate]);

  // Перемешиваем вопросы при загрузке
  const [shuffledQuestions, setShuffledQuestions] = useState([]);
  useEffect(() => {
    if (!questions.length) return;
    const shuffled = [...questions].sort(() => Math.random() - 0.5);
    setShuffledQuestions(shuffled);
  }, [questions]);

  const currentQuestion = shuffledQuestions[currentQuestionIndex];

  const handleInputChange = (e) => {
    setUserAnswer(e.target.value);
    setIsCorrect(null);
    setIsAnswered(false);
  };

  const handleCheckAnswer = () => {
    if (!userAnswer.trim()) return;

    const correct = userAnswer.trim() === currentQuestion.answer;
    setIsCorrect(correct);
    setIsAnswered(true);
  };

  const handleNextQuestion = () => {
    const nextIndex = Math.floor(Math.random() * shuffledQuestions.length);
    setCurrentQuestionIndex(nextIndex);
    setUserAnswer('');
    setIsCorrect(null);
    setIsAnswered(false);
  };

  if (!shuffledQuestions.length) {
    return (
      <section className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-red-500 border-t-transparent rounded-full animate-spin mx-auto"></div>
          <p className="mt-4">Загрузка вопросов...</p>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-extrabold text-center mb-10 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
          Code Challenge: {language.toUpperCase()}
        </h2>

        <div className="bg-gray-800 p-6 md:p-8 rounded-xl shadow-2xl border border-gray-700 hover:scale-[1.01] duration-300 transition-transform">
          <h3 className="text-2xl font-semibold mb-6">Что выведет этот код?</h3>

          <pre className="bg-gray-900 p-4 rounded-md overflow-x-auto mb-6 text-sm font-mono whitespace-pre-wrap">
            {currentQuestion.code}
          </pre>

          {/* Поле ввода */}
          <div className="mb-6">
            <label htmlFor="answer" className="block text-sm font-medium mb-2">
              Введите ваш ответ:
            </label>
            <input
              id="answer"
              type="text"
              value={userAnswer}
              onChange={handleInputChange}
              placeholder="Например: true или [object Object]"
              className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Кнопка проверки */}
          <div className="mb-8">
            <button
              onClick={handleCheckAnswer}
              disabled={!userAnswer.trim()}
              className={`px-5 py-2 rounded-lg transition-all ${
                userAnswer.trim()
                  ? 'bg-gradient-to-r from-blue-700 to-purple-700 hover:from-blue-800 hover:to-purple-800'
                  : 'bg-gray-800 cursor-not-allowed'
              }`}
            >
              Проверить
            </button>
          </div>

          {/* Результат */}
          {isAnswered && (
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

              <p className="mt-2 text-sm opacity-90">
                Правильный ответ: <span className="font-semibold">{currentQuestion.answer}</span>
              </p>

              {currentQuestion.explanation && (
                <p className="mt-1 text-sm opacity-80">{currentQuestion.explanation}</p>
              )}
            </div>
          )}

          {/* Кнопка следующего вопроса */}
          <div className="flex justify-end mt-6">
            <button
              onClick={handleNextQuestion}
              disabled={!isAnswered}
              className={`px-5 py-2 rounded-lg transition-all ${
                isAnswered
                  ? 'bg-gradient-to-r from-blue-700 to-purple-700 hover:from-blue-800 hover:to-purple-800'
                  : 'bg-gray-800 cursor-not-allowed'
              }`}
            >
              Следующий вопрос
            </button>
          </div>
        </div>

        {/* Рекламный блок Яндекс.РТБ */}
        <div className="my-12">
          <div id="yandex_rtb_R-A-16179039-4" className="w-full"></div>
        </div>

        {/* Кнопка "Выбрать игру" */}
        <div className="mt-6 text-center">
          <button
            onClick={() => navigate('/game')}
            className="text-blue-500 hover:text-blue-400 font-medium transition inline-flex items-center group"
          >
            <ArrowLeftIcon />
            <span className="ml-2 group-hover:underline">Выбрать игру</span>
          </button>
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