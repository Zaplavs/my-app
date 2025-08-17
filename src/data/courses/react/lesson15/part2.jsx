// src/data/courses/react/lesson15/part2.jsx
import React, { useState } from 'react';
import { CheckCircle, XCircle, RotateCcw, Award, Zap, Database, Code, Share2 } from 'lucide-react';

const Part2 = () => {
  // Данные викторины по теме урока
  const quizData = [
    {
      id: 1,
      question: "Какова основная цель оптимизации производительности в React-приложениях?",
      options: [
        "Уменьшить размер бандла JavaScript",
        "Предотвратить лишние перерендеры компонентов и кэшировать тяжелые вычисления",
        "Ускорить загрузку CSS-стилей",
        "Оптимизировать работу с базой данных"
      ],
      correctAnswer: 1 // Предотвратить лишние перерендеры компонентов и кэшировать тяжелые вычисления
    },
    {
      id: 2,
      question: "Что делает React.memo?",
      options: [
        "Полностью отключает рендер компонента",
        "Мемоизирует компонент, предотвращая перерендер, если пропсы не изменились",
        "Кэширует результаты тяжелых вычислений",
        "Оптимизирует работу с сетью"
      ],
      correctAnswer: 1 // Мемоизирует компонент, предотвращая перерендер, если пропсы не изменились
    },
    {
      id: 3,
      question: "Когда следует использовать useMemo?",
      options: [
        "Для оптимизации простых арифметических операций",
        "Для кэширования тяжелых вычислений или создания сложных объектов между рендерами",
        "Для управления состоянием компонента",
        "Для выполнения побочных эффектов"
      ],
      correctAnswer: 1 // Для кэширования тяжелых вычислений или создания сложных объектов между рендерами
    },
    {
      id: 4,
      question: "Какова цель useCallback?",
      options: [
        "Выполнить функцию только один раз",
        "Кэшировать функции между рендерами, предотвращая создание новых функций",
        "Оптимизировать CSS-анимации",
        "Управлять жизненным циклом компонента"
      ],
      correctAnswer: 1 // Кэшировать функции между рендерами, предотвращая создание новых функций
    },
    {
      id: 5,
      question: "Что произойдет, если не указать массив зависимостей в useMemo?",
      options: [
        "Хук будет работать как обычно",
        "Хук будет вычислять значение при каждом рендере",
        "Произойдет ошибка выполнения",
        "Хук не выполнится никогда"
      ],
      correctAnswer: 1 // Хук будет вычислять значение при каждом рендере
    },
    {
      id: 6,
      question: "Какой из следующих вариантов правильно демонстрирует использование React.memo?",
      options: [
        "const MyComponent = memo(({ name }) => <div>Hello {name}</div>);",
        "function MyComponent = memo(({ name }) => <div>Hello {name}</div>);",
        "const MyComponent = ({ name }) => <div>Hello {name}</div>; export default memo(MyComponent);",
        "Оба варианта A и C правильные"
      ],
      correctAnswer: 3 // Оба варианта A и C правильные
    },
    {
      id: 7,
      question: "В каком случае использование useMemo будет контрпродуктивным?",
      options: [
        "Для кэширования результатов сложных математических вычислений",
        "Для кэширования создания нового массива на основе фильтрации существующего",
        "Для кэширования простых вычислений (например, a + b)",
        "Для мемоизации тяжелых операций обработки данных"
      ],
      correctAnswer: 2 // Для кэширования простых вычислений (например, a + b)
    },
    {
      id: 8,
      question: "Почему важно использовать useCallback для функций, передаваемых в React.memo компоненты?",
      options: [
        "Потому что useCallback делает функции быстрее",
        "Потому что без useCallback функции будут теряться",
        "Потому что при каждом рендере создается новая функция, что приводит к лишним перерендерам мемоизированного компонента",
        "Потому что useCallback обязательный для всех функций"
      ],
      correctAnswer: 2 // Потому что при каждом рендере создается новая функция, что приводит к лишним перерендерам мемоизированного компонента
    },
    {
      id: 9,
      question: "Что сравнивает React.memo по умолчанию для определения необходимости перерендера?",
      options: [
        "Глубокое сравнение всех пропсов",
        "Поверхностное (shallow) сравнение пропсов",
        "Сравнение только примитивных значений пропсов",
        "Сравнение по ссылке всех пропсов"
      ],
      correctAnswer: 1 // Поверхностное (shallow) сравнение пропсов
    },
    {
      id: 10,
      question: "Какой из следующих сценариев НЕ является хорошим кандидатом для оптимизации производительности?",
      options: [
        "Компонент с тяжелыми вычислениями, выполняемыми при каждом рендере",
        "Компонент, который часто перерисовывается с одинаковыми пропсами",
        "Простой компонент, отображающий статический текст",
        "Компонент, получающий новые объекты пропсов при каждом рендере родителя"
      ],
      correctAnswer: 2 // Простой компонент, отображающий статический текст
    }
  ];

  // Состояния викторины
  const [userAnswers, setUserAnswers] = useState(Array(quizData.length).fill(null));
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);

  // Обработка выбора ответа
  const handleAnswerSelect = (questionIndex, optionIndex) => {
    if (submitted) return; // Блокируем изменение после отправки
    const newAnswers = [...userAnswers];
    newAnswers[questionIndex] = optionIndex;
    setUserAnswers(newAnswers);
  };

  // Отправка ответов
  const handleSubmit = () => {
    let newScore = 0;
    userAnswers.forEach((answer, index) => {
      if (answer === quizData[index].correctAnswer) {
        newScore++;
      }
    });
    setScore(newScore);
    setSubmitted(true);
  };

  // Сброс викторины
  const handleReset = () => {
    setUserAnswers(Array(quizData.length).fill(null));
    setSubmitted(false);
    setScore(0);
  };

  // Проверка, все ли вопросы отвечены
  const allAnswered = userAnswers.every(answer => answer !== null);

  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 backdrop-blur-sm border border-blue-700/30 rounded-2xl p-6 shadow-lg">
        <div className="flex items-start gap-4">
          <div className="bg-blue-500/20 p-3 rounded-lg">
            <Zap className="w-6 h-6 text-blue-400" />
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">🧠 Викторина: Оптимизация производительности</h1>
            <p className="text-gray-300">
              Проверьте свои знания по теме <span className="font-medium text-yellow-400">оптимизации производительности</span> в React (<code className="bg-gray-700 px-1.5 py-0.5 rounded text-green-300">React.memo</code>, <code className="bg-gray-700 px-1 rounded">useMemo</code>, <code className="bg-gray-700 px-1 rounded">useCallback</code>).
            </p>
            <p className="text-gray-400 text-sm mt-2">Выберите один правильный ответ для каждого вопроса.</p>
          </div>
        </div>
      </div>

      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        {quizData.map((q, questionIndex) => {
          const isSelected = userAnswers[questionIndex] !== null;
          const isCorrect = userAnswers[questionIndex] === q.correctAnswer;
          
          return (
            <div 
              key={q.id} 
              className={`mb-8 last:mb-0 p-4 rounded-lg ${
                submitted && isSelected && isCorrect 
                  ? 'bg-green-900/20 border border-green-700/30' 
                  : submitted && isSelected && !isCorrect 
                    ? 'bg-red-900/20 border border-red-700/30' 
                    : 'bg-gray-900/50'
              }`}
            >
              <h3 className="font-medium text-white mb-3 flex items-start gap-2">
                <span className="flex-shrink-0">{questionIndex + 1}.</span>
                <span>{q.question}</span>
              </h3>
              <div className="space-y-2">
                {q.options.map((option, optionIndex) => {
                  let optionStyle = "block w-full text-left p-3 rounded-lg transition-colors duration-200 ";
                  if (submitted) {
                    if (optionIndex === q.correctAnswer) {
                      optionStyle += "bg-green-700 text-white"; // Правильный ответ
                    } else if (optionIndex === userAnswers[questionIndex] && optionIndex !== q.correctAnswer) {
                      optionStyle += "bg-red-700 text-white"; // Неправильный выбранный ответ
                    } else {
                      optionStyle += "bg-gray-800 text-gray-400 cursor-not-allowed"; // Другие варианты
                    }
                  } else {
                    // Стили до отправки
                    if (userAnswers[questionIndex] === optionIndex) {
                      optionStyle += "bg-blue-600 text-white"; // Выбранный вариант
                    } else {
                      optionStyle += "bg-gray-800 hover:bg-gray-700 text-gray-300"; // Не выбранный
                    }
                  }

                  return (
                    <button
                      key={optionIndex}
                      onClick={() => handleAnswerSelect(questionIndex, optionIndex)}
                      className={optionStyle}
                      disabled={submitted} // Блокируем кнопки после отправки
                    >
                      <div className="flex items-center">
                        <span className="mr-2 font-mono flex-shrink-0">{String.fromCharCode(65 + optionIndex)}.</span>
                        <span>{option}</span>
                        {submitted && optionIndex === q.correctAnswer && (
                          <CheckCircle className="ml-auto w-5 h-5 text-green-400 flex-shrink-0" />
                        )}
                        {submitted && optionIndex === userAnswers[questionIndex] && optionIndex !== q.correctAnswer && (
                          <XCircle className="ml-auto w-5 h-5 text-red-400 flex-shrink-0" />
                        )}
                        {!submitted && userAnswers[questionIndex] === optionIndex && (
                          <span className="ml-auto w-5 h-5 rounded-full bg-blue-400 flex-shrink-0"></span>
                        )}
                      </div>
                    </button>
                  );
                })}
              </div>
              {/* Сообщение о правильности ответа после отправки */}
              {submitted && isSelected && (
                <div className={`mt-3 text-sm p-2 rounded flex items-start gap-2 ${isCorrect ? 'bg-green-900/30 text-green-300' : 'bg-red-900/30 text-red-300'}`}>
                  {isCorrect ? (
                    <>
                      <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                      <span>Верно!</span>
                    </>
                  ) : (
                    <>
                      <XCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                      <span>Неверно. Правильный ответ: {String.fromCharCode(65 + q.correctAnswer)}.</span>
                    </>
                  )}
                </div>
              )}
            </div>
          );
        })}

        {/* Кнопки управления */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-4 mt-6 border-t border-gray-700">
          {!submitted ? (
            <button
              onClick={handleSubmit}
              disabled={!allAnswered}
              className={`px-6 py-3 rounded-lg font-medium flex items-center gap-2 transition-all duration-300 ${
                allAnswered
                  ? 'bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white shadow-lg hover:shadow-xl transform hover:scale-[1.02] cursor-pointer'
                  : 'bg-gray-700 text-gray-500 cursor-not-allowed'
              }`}
            >
              <CheckCircle className="w-5 h-5" />
              Проверить ответы
            </button>
          ) : (
            <div className="flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-2 bg-gray-900 px-4 py-3 rounded-lg">
                <Award className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                <span className="font-bold text-white">Результат: </span>
                <span className="font-bold text-xl text-yellow-400">{score}</span>
                <span className="text-gray-400">/ {quizData.length}</span>
              </div>
              <button
                onClick={handleReset}
                className="px-6 py-3 bg-gray-700 hover:bg-gray-600 text-white rounded-lg font-medium flex items-center gap-2 transition-colors duration-200 whitespace-nowrap"
              >
                <RotateCcw className="w-5 h-5" />
                Попробовать снова
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Part2;