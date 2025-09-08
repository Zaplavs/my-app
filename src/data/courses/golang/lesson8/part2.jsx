import React, { useState } from 'react';
import { CheckCircle, XCircle, RotateCcw, Award, Code, HelpCircle, Hash, ArrowRight } from 'lucide-react';

const Part2 = () => {
  // Данные викторины по теме урока
  const quizData = [
    {
      id: 1,
      question: "Как правильно начать оператор switch в Go?",
      options: [
        "switch (x) {",
        "switch x {",
        "switch [x] {",
        "switch x:"
      ],
      correctAnswer: 1 // switch x { — без скобок!
    },
    {
      id: 2,
      question: "Что происходит, если ни один case не совпал и нет default?",
      options: [
        "Происходит ошибка",
        "Выполняется первый case",
        "Ничего не происходит — программа просто продолжает работу",
        "Программа зависает"
      ],
      correctAnswer: 2 // Ничего не происходит
    },
    {
      id: 3,
      question: "Какой блок выполнится, если значение совпало с case, и в нём есть fallthrough?",
      options: [
        "Только текущий case",
        "Текущий case и следующий case (даже если условие не совпадает!)",
        "Текущий case и default",
        "Программа выдаст ошибку"
      ],
      correctAnswer: 1 // Текущий + следующий case
    },
    {
      id: 4,
      question: "Можно ли использовать switch без выражения?",
      options: [
        "Нет, это ошибка синтаксиса",
        "Да, тогда в case пишутся условия",
        "Только в функциях",
        "Только с числами"
      ],
      correctAnswer: 1 // Да — фишка Go!
    },
    {
      id: 5,
      question: "Где можно разместить блок default?",
      options: [
        "Только в самом конце",
        "Только в начале",
        "В любом месте — Go разрешает",
        "Только после первого case"
      ],
      correctAnswer: 2 // В любом месте
    },
    {
      id: 6,
      question: "Что выведет этот код?\n\nx := 2\nswitch x {\ncase 1:\n    fmt.Println(\"A\")\ncase 2:\n    fmt.Println(\"B\")\ndefault:\n    fmt.Println(\"C\")\n}",
      options: [
        "A",
        "B",
        "C",
        "A B C"
      ],
      correctAnswer: 1 // B
    },
    {
      id: 7,
      question: "Что выведет этот код?\n\nx := 5\nswitch {\ncase x < 3:\n    fmt.Println(\"Мало\")\ncase x < 7:\n    fmt.Println(\"Средне\")\ndefault:\n    fmt.Println(\"Много\")\n}",
      options: [
        "Мало",
        "Средне",
        "Много",
        "Ничего"
      ],
      correctAnswer: 1 // Средне — первый подходящий case
    },
    {
      id: 8,
      question: "Что выведет этот код?\n\nx := 1\nswitch x {\ncase 1:\n    fmt.Println(\"Один\")\n    fallthrough\ncase 2:\n    fmt.Println(\"Два\")\ndefault:\n    fmt.Println(\"Другое\")\n}",
      options: [
        "Один",
        "Один, Два",
        "Один, Два, Другое",
        "Ошибка компиляции"
      ],
      correctAnswer: 1 // Один, Два — fallthrough переходит к следующему case
    },
    {
      id: 9,
      question: "Когда лучше использовать switch вместо if/else?",
      options: [
        "Когда нужно проверить сложное логическое выражение",
        "Когда сравниваем одно значение с несколькими вариантами",
        "Когда условий всего два",
        "Когда нужно использовать циклы"
      ],
      correctAnswer: 1 // Когда одно значение vs несколько вариантов
    },
    {
      id: 10,
      question: "Можно ли в одном case перечислить несколько значений?",
      options: [
        "Нет, только одно",
        "Да, через запятую: case 1, 2, 3:",
        "Да, через ||: case 1 || 2 || 3:",
        "Да, через &&"
      ],
      correctAnswer: 1 // Да, через запятую
    },
    {
      id: 11,
      question: "Что выведет этот код?\n\nx := \"hi\"\nswitch x {\ncase \"hello\":\n    fmt.Println(\"Привет\")\ncase \"hi\":\n    fmt.Println(\"Приветик\")\ndefault:\n    fmt.Println(\"Здравствуйте\")\n}",
      options: [
        "Привет",
        "Приветик",
        "Здравствуйте",
        "Ничего"
      ],
      correctAnswer: 1 // Приветик
    },
    {
      id: 12,
      question: "Что делает fallthrough?",
      options: [
        "Прерывает выполнение switch",
        "Переходит к следующему case, игнорируя его условие",
        "Возвращается к предыдущему case",
        "Вызывает default"
      ],
      correctAnswer: 1 // Переходит к следующему case
    },
    {
      id: 13,
      question: "Какой вариант НЕ поддерживается в Go switch?",
      options: [
        "case с несколькими значениями через запятую",
        "switch без выражения",
        "case с диапазонами: case 1..5:",
        "fallthrough"
      ],
      correctAnswer: 2 // Диапазоны — НЕ поддерживаются (в отличие от некоторых других языков)
    },
    {
      id: 14,
      question: "Что выведет этот код?\n\nx := 10\nswitch x {\ndefault:\n    fmt.Println(\"Неизвестно\")\ncase 5:\n    fmt.Println(\"Пять\")\ncase 10:\n    fmt.Println(\"Десять\")\n}",
      options: [
        "Неизвестно",
        "Пять",
        "Десять",
        "Ошибка — default должен быть в конце"
      ],
      correctAnswer: 2 // Десять — default может быть где угодно, но case 10 совпал первым!
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
      <div className="bg-gradient-to-r from-purple-900/30 to-pink-900/30 backdrop-blur-sm border border-purple-700/30 rounded-2xl p-6 shadow-lg">
        <div className="flex items-start gap-4">
          <div className="bg-purple-500/20 p-3 rounded-lg">
            <Code className="w-6 h-6 text-purple-400" />
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">🧠 Викторина: Оператор switch в Go</h1>
            <p className="text-gray-300">
              Проверьте свои знания по теме <span className="font-medium text-yellow-400">оператора switch</span>.
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