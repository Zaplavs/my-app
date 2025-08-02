import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { quizQuestions } from '../data/quiz/index.js';

export default function QuizPage() {
  const { language } = useParams();
  const navigate = useNavigate();

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [usedQuestions, setUsedQuestions] = useState(new Set());

  // Структура уровней: 4 junior, 3 middle, 3 senior
  const [levelStructure] = useState([
    { level: 'junior', count: 4, points: 10 },
    { level: 'middle', count: 3, points: 20 },
    { level: 'senior', count: 3, points: 30 }
  ]);
  
  const [currentLevelIndex, setCurrentLevelIndex] = useState(0);
  const [questionsAnswered, setQuestionsAnswered] = useState(0);

  // Получаем вопросы для текущего языка
  const languageQuestions = quizQuestions[language?.toLowerCase()] || {};

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
          renderTo: "yandex_rtb_R-A-16179039-3"
        });
      });
    }, 0);

    return () => {
      clearTimeout(timerId);
      window.yaContextCb = [];
    };
  }, []);

  // Получаем текущий уровень и вопросы
  const currentLevel = levelStructure[currentLevelIndex];
  const questions = languageQuestions[currentLevel?.level] || [];

  // Загрузка вопросов при смене уровня
  useEffect(() => {
    if (!questions.length && currentLevel) {
      navigate('/game');
      return;
    }

    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setIsCorrect(null);
    setUsedQuestions(new Set());
  }, [currentLevelIndex, questions.length, navigate, currentLevel]);

  const currentQuestion = questions[currentQuestionIndex];

  // Получаем случайный неиспользованный вопрос
  const getRandomQuestionIndex = () => {
    const availableIndices = questions
      .map((_, index) => index)
      .filter(index => !usedQuestions.has(index));
    
    if (availableIndices.length === 0) return -1;
    
    return availableIndices[Math.floor(Math.random() * availableIndices.length)];
  };

  const handleAnswerClick = (option) => {
    if (selectedAnswer !== null) return;

    const correct = option === currentQuestion.answer;
    setIsCorrect(correct);
    setSelectedAnswer(option);
    
    // Начисляем очки за правильный ответ
    if (correct) {
      setScore(prevScore => prevScore + currentLevel.points);
    }
  };

  const handleNextQuestion = () => {
    const newQuestionsAnswered = questionsAnswered + 1;
    setQuestionsAnswered(newQuestionsAnswered);

    // Проверяем, закончились ли вопросы в текущем уровне
    if (newQuestionsAnswered >= currentLevel.count) {
      // Переходим к следующему уровню или показываем результаты
      if (currentLevelIndex < levelStructure.length - 1) {
        setCurrentLevelIndex(prev => prev + 1);
        setQuestionsAnswered(0);
        setUsedQuestions(new Set());
      } else {
        setShowResults(true);
        return;
      }
    }

    // Выбираем следующий случайный вопрос
    const nextQuestionIndex = getRandomQuestionIndex();
    if (nextQuestionIndex !== -1) {
      setUsedQuestions(prev => new Set([...prev, nextQuestionIndex]));
      setCurrentQuestionIndex(nextQuestionIndex);
    } else {
      // Если закончились вопросы, переходим к следующему уровню
      if (currentLevelIndex < levelStructure.length - 1) {
        setCurrentLevelIndex(prev => prev + 1);
        setQuestionsAnswered(0);
        setUsedQuestions(new Set());
      } else {
        setShowResults(true);
      }
    }

    setSelectedAnswer(null);
    setIsCorrect(null);
  };

  const handleRestartQuiz = () => {
    setCurrentLevelIndex(0);
    setQuestionsAnswered(0);
    setScore(0);
    setShowResults(false);
    setUsedQuestions(new Set());
    setSelectedAnswer(null);
    setIsCorrect(null);
  };

  // Экран результатов
  if (showResults) {
    return (
      <section className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-extrabold text-center mb-6 bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-pink-600">
            Результаты викторины: {language?.toUpperCase()}
          </h2>

          <div className="bg-gray-800 p-8 rounded-xl shadow-2xl border border-gray-700 text-center">
            <div className="mb-8">
              <div className="w-32 h-32 bg-gradient-to-r from-red-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-4xl font-bold">{score}</span>
              </div>
              <h3 className="text-3xl font-bold mb-4">Ваш результат</h3>
              <p className="text-xl text-gray-300 mb-6">
                {score >= 150 ? '🎉 Отлично! Вы эксперт!' :
                 score >= 100 ? '👍 Хорошо! Продолжайте учиться!' :
                 score >= 50 ? '👌 Неплохо! Но можно лучше!' :
                 '📚 Время изучать язык программирования!'}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {levelStructure.map((level, index) => (
                <div key={level.level} className="bg-gray-700/50 p-4 rounded-lg">
                  <h4 className="font-bold capitalize mb-2">{level.level}</h4>
                  <p className="text-sm text-gray-300">
                    {level.points} очков за правильный ответ
                  </p>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={handleRestartQuiz}
                className="px-6 py-3 bg-gradient-to-r from-red-700 to-pink-700 hover:from-red-800 hover:to-pink-800 rounded-lg font-semibold transition-all"
              >
                Пройти снова
              </button>
              <button
                onClick={() => navigate('/game')}
                className="px-6 py-3 bg-gray-700 hover:bg-gray-600 rounded-lg font-semibold transition-all"
              >
                Назад к играм
              </button>
            </div>
          </div>

          {/* Рекламный блок Яндекс.РТБ */}
          <div className="my-12">
            <div id="yandex_rtb_R-A-16179039-3" className="w-full"></div>
          </div>
        </div>
      </section>
    );
  }

  // Загрузка
  if (!questions.length || !currentQuestion) {
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
        <h2 className="text-4xl font-extrabold text-center mb-6 bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-pink-600">
          Викторина: {language?.toUpperCase()}
        </h2>

        {/* Прогресс бар */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm text-gray-400">
              Уровень {currentLevelIndex + 1} из {levelStructure.length}
            </span>
            <span className="text-sm font-semibold">Счет: {score}</span>
          </div>
          <div className="w-full bg-gray-700 rounded-full h-3">
            <div 
              className="bg-gradient-to-r from-red-600 to-pink-600 h-3 rounded-full transition-all duration-500"
              style={{ 
                width: `${((currentLevelIndex * 10) + (questionsAnswered / currentLevel.count) * 10)}%` 
              }}
            ></div>
          </div>
          <div className="flex justify-between mt-2">
            <span className="text-xs text-gray-400 capitalize">{currentLevel.level}</span>
            <span className="text-xs text-gray-400">
              {questionsAnswered + 1} из {currentLevel.count}
            </span>
          </div>
        </div>

        <div className="bg-gray-800 p-6 md:p-8 rounded-xl shadow-2xl border border-gray-700 hover:scale-[1.01] duration-300 transition-transform">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-2xl font-semibold">{currentQuestion.question}</h3>
            <span className={`px-3 py-1 rounded-full text-xs font-semibold capitalize
              ${currentLevel.level === 'junior' ? 'bg-green-900 text-green-200' :
                currentLevel.level === 'middle' ? 'bg-yellow-900 text-yellow-200' :
                'bg-red-900 text-red-200'}`}
            >
              {currentLevel.level} (+{currentLevel.points} очков)
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
                  <CheckIcon /> Правильно! +{currentLevel.points} очков
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
          <div className="flex justify-between items-center">
            <div className="text-sm text-gray-400">
              Счет: <span className="font-bold">{score}</span>
            </div>
            <button
              onClick={handleNextQuestion}
              disabled={selectedAnswer === null}
              className={`px-5 py-2 rounded-lg transition-all ${
                selectedAnswer !== null
                  ? 'bg-gradient-to-r from-red-700 to-pink-700 hover:from-red-800 hover:to-pink-800'
                  : 'bg-gray-800 cursor-not-allowed opacity-50'
              }`}
            >
              {questionsAnswered + 1 >= currentLevel.count && currentLevelIndex >= levelStructure.length - 1 
                ? 'Завершить викторину' 
                : 'Следующий вопрос'}
            </button>
          </div>
        </div>

        {/* Рекламный блок Яндекс.РТБ */}
        <div className="my-12">
          <div id="yandex_rtb_R-A-16179039-3" className="w-full"></div>
        </div>

        {/* Кнопка "Назад к играм" */}
        <div className="mt-6 text-center">
          <button
            onClick={() => navigate('/game')}
            className="text-red-500 hover:text-red-400 font-medium transition inline-flex items-center group"
          >
            <ArrowLeftIcon />
            <span className="ml-2 group-hover:underline">Назад к играм</span>
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