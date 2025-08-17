// src/data/courses/react/lesson9/part2.jsx
import React, { useState } from 'react';
import { CheckCircle, XCircle, RotateCcw, Award, Eye, ToggleLeft, Code, Database } from 'lucide-react';

const Part2 = () => {
  // Данные викторины по теме урока
  const quizData = [
    {
      id: 1,
      question: "Что такое условный рендеринг в React?",
      options: [
        "Процесс автоматического обновления состояния компонента",
        "Техника отображения разных элементов интерфейса в зависимости от состояния приложения",
        "Метод оптимизации производительности React-приложений",
        "Способ стилизации компонентов с помощью CSS"
      ],
      correctAnswer: 1 // Техника отображения разных элементов интерфейса в зависимости от состояния приложения
    },
    {
      id: 2,
      question: "Какой из следующих вариантов правильно демонстрирует использование логического И (&&) для условного рендеринга?",
      options: [
        "{isLoggedIn && <p>Добро пожаловать!</p>}",
        "{isLoggedIn ? <p>Добро пожаловать!</p> : <p>Войдите в систему</p>}",
        "if (isLoggedIn) { <p>Добро пожаловать!</p> }",
        "{isLoggedIn || <p>Добро пожаловать!</p>}"
      ],
      correctAnswer: 0 // {isLoggedIn && <p>Добро пожаловать!</p>}
    },
    {
      id: 3,
      question: "Какой синтаксис используется для тернарного оператора в JSX?",
      options: [
        "condition ? value1 : value2",
        "condition && value1 || value2",
        "if (condition) { value1 } else { value2 }",
        "condition : value1 ? value2"
      ],
      correctAnswer: 0 // condition ? value1 : value2
    },
    {
      id: 4,
      question: "Что будет отображено, если в выражении {false && <div>Привет</div>}?",
      options: [
        "<div>Привет</div>",
        "false",
        "null (ничего не отобразится)",
        "Ошибка в консоли"
      ],
      correctAnswer: 2 // null (ничего не отобразится)
    },
    {
      id: 5,
      question: "Для чего используются индикаторы состояний в React-приложениях?",
      options: [
        "Для улучшения внешнего вида приложения",
        "Для информирования пользователя о текущем состоянии асинхронных операций",
        "Для ускорения работы приложения",
        "Для автоматического тестирования компонентов"
      ],
      correctAnswer: 1 // Для информирования пользователя о текущем состоянии асинхронных операций
    },
    {
      id: 6,
      question: "Какой из следующих вариантов НЕ является способом условного рендеринга в React?",
      options: [
        "Логическое И (&&)",
        "Тернарный оператор (?:)",
        "Метод map() для массивов",
        "if/else вне JSX"
      ],
      correctAnswer: 2 // Метод map() для массивов
    },
    {
      id: 7,
      question: "Как правильно отрендерить компонент ErrorComponent только если переменная error не равна null?",
      options: [
        "{error && <ErrorComponent message={error} />}",
        "{error ? <ErrorComponent message={error} /> : null}",
        "{if (error) <ErrorComponent message={error} />}",
        "Все перечисленные варианты правильные"
      ],
      correctAnswer: 3 // Все перечисленные варианты правильные
    },
    {
      id: 8,
      question: "Что произойдет при следующем коде: {0 && <p>Тест</p>}?",
      options: [
        "Отобразится <p>Тест</p>",
        "Ничего не отобразится",
        "Отобразится 0",
        "Произойдет ошибка"
      ],
      correctAnswer: 1 // Ничего не отобразится
    },
    {
      id: 9,
      question: "Какой из следующих примеров правильно демонстрирует обработку состояния загрузки?",
      options: [
        "if (loading) return <div>Загрузка...</div>;",
        "{loading && <div>Загрузка...</div>}",
        "{loading ? <div>Загрузка...</div> : null}",
        "Все перечисленные варианты правильные"
      ],
      correctAnswer: 3 // Все перечисленные варианты правильные
    },
    {
      id: 10,
      question: "Когда рекомендуется использовать if/else вне JSX вместо тернарного оператора?",
      options: [
        "Когда нужно выбрать между двумя простыми вариантами",
        "Когда условная логика становится сложной и тернарный оператор трудно читается",
        "Когда нужно отобразить элемент только при истинном условии",
        "Когда работаем с числовыми значениями"
      ],
      correctAnswer: 1 // Когда условная логика становится сложной и тернарный оператор трудно читается
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
            <Eye className="w-6 h-6 text-blue-400" />
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">🧠 Викторина: Условный рендеринг и индикаторы</h1>
            <p className="text-gray-300">
              Проверьте свои знания по теме <span className="font-medium text-yellow-400">условного рендеринга</span> и <span className="font-medium text-yellow-400">индикаторов состояний</span> в React.
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