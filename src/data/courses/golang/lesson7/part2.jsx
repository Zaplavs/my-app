import React, { useState } from 'react';
import { CheckCircle, XCircle, RotateCcw, Award, Code, HelpCircle, Hash } from 'lucide-react';

const Part2 = () => {
  // Данные викторины по теме урока
  const quizData = [
    {
      id: 1,
      question: "Как правильно записать условие if в Go?",
      options: [
        "if (x > 5) { ... }",
        "if x > 5 { ... }",
        "if [x > 5] { ... }",
        "if {x > 5} ..."
      ],
      correctAnswer: 1 // if x > 5 { ... } — без скобок!
    },
    {
      id: 2,
      question: "Обязательны ли фигурные скобки {} в if, даже если внутри одна строка?",
      options: [
        "Нет, можно без них",
        "Да, всегда обязательны",
        "Только если else есть",
        "Только в main функции"
      ],
      correctAnswer: 1 // Да, всегда обязательны
    },
    {
      id: 3,
      question: "Что выведет этот код?\n\nif x := 10; x > 5 {\n    fmt.Println(x)\n}",
      options: [
        "Ошибка компиляции",
        "5",
        "10",
        "Ничего не выведет"
      ],
      correctAnswer: 2 // 10 — переменная x доступна внутри блока
    },
    {
      id: 4,
      question: "Можно ли использовать переменную, объявленную в if, после его завершения?",
      options: [
        "Да, она доступна везде в функции",
        "Да, но только если условие было true",
        "Нет, область видимости ограничена блоком if/else",
        "Да, но только в else-блоке"
      ],
      correctAnswer: 2 // Нет, область видимости ограничена блоком if/else
    },
    {
      id: 5,
      question: "Какой синтаксис используется для проверки нескольких условий?",
      options: [
        "if → elif → else",
        "if → else if → else",
        "if → elseif → else",
        "if → otherwise → else"
      ],
      correctAnswer: 1 // if → else if → else
    },
    {
      id: 6,
      question: "Что выведет этот код?\n\nscore := 85\nif score >= 90 {\n    fmt.Println(\"A\")\n} else if score >= 80 {\n    fmt.Println(\"B\")\n} else {\n    fmt.Println(\"C\")\n}",
      options: [
        "A",
        "B",
        "C",
        "Ничего"
      ],
      correctAnswer: 1 // B — первое истинное условие
    },
    {
      id: 7,
      question: "Как правильно объявить переменную прямо в условии if в Go?",
      options: [
        "if var x = 5; x > 0 { ... }",
        "if x := 5; x > 0 { ... }",
        "if let x = 5; x > 0 { ... }",
        "if x = 5 && x > 0 { ... }"
      ],
      correctAnswer: 1 // if x := 5; x > 0 { ... }
    },
    {
      id: 8,
      question: "Какой оператор используется для логического И в условиях?",
      options: [
        "AND",
        "&",
        "&&",
        "||"
      ],
      correctAnswer: 2 // &&
    },
    {
      id: 9,
      question: "Какой оператор используется для логического ИЛИ?",
      options: [
        "OR",
        "|",
        "||",
        "&&"
      ],
      correctAnswer: 2 // ||
    },
    {
      id: 10,
      question: "Как инвертировать условие (сделать false → true и наоборот)?",
      options: [
        "not",
        "!",
        "invert",
        "~"
      ],
      correctAnswer: 1 // !
    },
    {
      id: 11,
      question: "Что выведет этот код?\n\nif !true {\n    fmt.Println(\"Hello\")\n} else {\n    fmt.Println(\"World\")\n}",
      options: [
        "Hello",
        "World",
        "Hello World",
        "Ничего"
      ],
      correctAnswer: 1 // World — !true = false
    },
    {
      id: 12,
      question: "Где доступна переменная, объявленная в блоке else?",
      options: [
        "Только в else",
        "В if и else",
        "Во всей функции",
        "Только в if"
      ],
      correctAnswer: 1 // В if и else — если объявлена в условии перед if
    },
    {
      id: 13,
      question: "Что такое вложенный if?",
      options: [
        "if внутри функции",
        "if внутри другого if",
        "if с несколькими else",
        "if без условия"
      ],
      correctAnswer: 1 // if внутри другого if
    },
    {
      id: 14,
      question: "Сколько else if можно использовать после if?",
      options: [
        "Только один",
        "Не более трёх",
        "Любое количество",
        "Только если нет else"
      ],
      correctAnswer: 2 // Любое количество
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
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">🧠 Викторина: Условные операторы if/else в Go</h1>
            <p className="text-gray-300">
              Проверьте свои знания по теме <span className="font-medium text-yellow-400">условных операторов в Go</span>.
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