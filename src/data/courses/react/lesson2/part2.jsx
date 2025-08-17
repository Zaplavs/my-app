// src/data/courses/react/lesson2/part2.jsx
import React, { useState } from 'react';
import { CheckCircle, XCircle, RotateCcw, Award, Code, Braces, Palette, Hash } from 'lucide-react';

const Part2 = () => {
  // Данные викторины по теме урока
  const quizData = [
    {
      id: 1,
      question: "Что такое JSX в контексте React?",
      options: [
        "Новый язык программирования",
        "Синтаксическое расширение JavaScript, позволяющее писать HTML-подобный код",
        "Библиотека для работы с DOM",
        "CSS-препроцессор"
      ],
      correctAnswer: 1 // Синтаксическое расширение JavaScript, позволяющее писать HTML-подобный код
    },
    {
      id: 2,
      question: "Какой атрибут в JSX используется вместо HTML-атрибута 'class'?",
      options: [
        "classes",
        "cssClass",
        "className",
        "class-name"
      ],
      correctAnswer: 2 // className
    },
    {
      id: 3,
      question: "Как в JSX вставить JavaScript-выражение в разметку?",
      options: [
        "Используя квадратные скобки [ ]",
        "Используя фигурные скобки { }",
        "Используя угловые скобки < >",
        "Используя круглые скобки ( )"
      ],
      correctAnswer: 1 // Используя фигурные скобки { }
    },
    {
      id: 4,
      question: "Как правильно записать inline-стили в JSX?",
      options: [
        "<div style=\"color: red;\">Текст</div>",
        "<div style={color: 'red'}>Текст</div>",
        "<div style={{ color: 'red' }}>Текст</div>",
        "<div style={{ color = 'red' }}>Текст</div>"
      ],
      correctAnswer: 2 // <div style={{ color: 'red' }}>Текст</div>
    },
    {
      id: 5,
      question: "Какой из этих вариантов правильно демонстрирует использование тернарного оператора в JSX для условного рендеринга?",
      options: [
        "{isLoggedIn ? <p>Привет</p>}",
        "{isLoggedIn : <p>Привет</p> ? <p>Войдите</p>}",
        "{isLoggedIn ? <p>Привет</p> : <p>Войдите</p>}",
        "{if (isLoggedIn) <p>Привет</p> else <p>Войдите</p>}"
      ],
      correctAnswer: 2 // {isLoggedIn ? <p>Привет</p> : <p>Войдите</p>}
    },
    {
      id: 6,
      question: "Как правильно закрыть тег <img> в JSX?",
      options: [
        "<img src=\"image.jpg\" alt=\"Описание\">",
        "<img src=\"image.jpg\" alt=\"Описание\"></img>",
        "<img src=\"image.jpg\" alt=\"Описание\" />",
        "<img src=\"image.jpg\" alt=\"Описание\" >"
      ],
      correctAnswer: 2 // <img src="image.jpg" alt="Описание" />
    },
    {
      id: 7,
      question: "Как в JSX задать CSS-свойство background-color?",
      options: [
        "backgroundColor",
        "background_color",
        "background-color",
        "bgColor"
      ],
      correctAnswer: 0 // backgroundColor
    },
    {
      id: 8,
      question: "Какой метод массива используется для рендеринга списков в JSX?",
      options: [
        "forEach()",
        "filter()",
        "map()",
        "reduce()"
      ],
      correctAnswer: 2 // map()
    },
    {
      id: 9,
      question: "Для чего нужен атрибут 'key' при рендеринге списков в React?",
      options: [
        "Для стилизации элементов списка",
        "Для идентификации элементов и эффективного обновления списка",
        "Для задания порядкового номера элемента",
        "Атрибут 'key' не используется в React"
      ],
      correctAnswer: 1 // Для идентификации элементов и эффективного обновления списка
    },
    {
      id: 10,
      question: "Как правильно использовать логическое И (&&) для условного рендеринга в JSX?",
      options: [
        "{isLoggedIn && <p>Привет</p>}",
        "{isLoggedIn || <p>Привет</p>}",
        "{isLoggedIn -> <p>Привет</p>}",
        "{isLoggedIn then <p>Привет</p>}"
      ],
      correctAnswer: 0 // {isLoggedIn && <p>Привет</p>}
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
            <Code className="w-6 h-6 text-blue-400" />
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">🧠 Викторина: JSX — HTML в JavaScript</h1>
            <p className="text-gray-300">
              Проверьте свои знания по теме <span className="font-medium text-yellow-400">JSX</span> и его особенностей в React.
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