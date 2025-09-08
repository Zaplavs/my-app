import React, { useState } from 'react';
import { CheckCircle, XCircle, RotateCcw, Award, RotateCcw as LoopIcon, Code, HelpCircle, Hash, ArrowRight, X } from 'lucide-react';

const Part2 = () => {
  // Данные викторины по теме урока
  const quizData = [
    {
      id: 1,
      question: "Сколько циклов есть в Go?",
      options: [
        "Три: for, while, do-while",
        "Два: for и while",
        "Один: только for",
        "Четыре: for, foreach, while, loop"
      ],
      correctAnswer: 2 // Один: только for
    },
    {
      id: 2,
      question: "Как записать бесконечный цикл в Go?",
      options: [
        "while true { }",
        "for ( ; ; ) { }",
        "for { }",
        "loop { }"
      ],
      correctAnswer: 2 // for { }
    },
    {
      id: 3,
      question: "Что делает оператор break в цикле?",
      options: [
        "Пропускает текущую итерацию",
        "Немедленно выходит из цикла",
        "Останавливает всю программу",
        "Перезапускает цикл сначала"
      ],
      correctAnswer: 1 // Немедленно выходит из цикла
    },
    {
      id: 4,
      question: "Что делает оператор continue?",
      options: [
        "Выходит из цикла",
        "Пропускает оставшуюся часть текущей итерации и переходит к следующей",
        "Останавливает выполнение программы",
        "Повторяет текущую итерацию"
      ],
      correctAnswer: 1 // Пропускает текущую итерацию
    },
    {
      id: 5,
      question: "Какой цикл заменяет while в Go?",
      options: [
        "for с одним условием: for x < 10 { ... }",
        "while x < 10 { ... }",
        "do x < 10 { ... }",
        "loop x < 10 { ... }"
      ],
      correctAnswer: 0 // for с условием
    },
    {
      id: 6,
      question: "Что выведет этот код?\n\nfor i := 0; i < 3; i++ {\n    if i == 1 {\n        continue\n    }\n    fmt.Print(i)\n}",
      options: [
        "012",
        "02",
        "12",
        "01"
      ],
      correctAnswer: 1 // 02 — 1 пропущено
    },
    {
      id: 7,
      question: "Что выведет этот код?\n\nfor i := 0; i < 5; i++ {\n    if i == 3 {\n        break\n    }\n    fmt.Print(i)\n}",
      options: [
        "012",
        "0123",
        "01234",
        "0124"
      ],
      correctAnswer: 0 // 012 — выходит при i=3
    },
    {
      id: 8,
      question: "Как перебрать все символы строки word?",
      options: [
        "for char in word { ... }",
        "for i=0; i<len(word); i++ { char := word[i] }",
        "for _, char := range word { ... }",
        "foreach char of word { ... }"
      ],
      correctAnswer: 2 // for _, char := range word
    },
    {
      id: 9,
      question: "Что такое вложенный цикл?",
      options: [
        "Цикл, который вызывает функцию",
        "Цикл внутри другого цикла",
        "Цикл, который работает бесконечно",
        "Цикл с break и continue"
      ],
      correctAnswer: 1 // Цикл внутри другого цикла
    },
    {
      id: 10,
      question: "Что выведет этот код?\n\nfor i := 1; i <= 2; i++ {\n    for j := 1; j <= 2; j++ {\n        fmt.Print(i*j, \" \")\n    }\n}",
      options: [
        "1 2 2 4",
        "1 2 3 4",
        "2 4 6 8",
        "1 1 2 2"
      ],
      correctAnswer: 0 // 1 2 2 4 → (1*1, 1*2, 2*1, 2*2)
    },
    {
      id: 11,
      question: "Какой индекс у первого символа в строке при использовании range?",
      options: [
        "1",
        "0",
        "-1",
        "Зависит от длины строки"
      ],
      correctAnswer: 1 // 0 — индексация с нуля
    },
    {
      id: 12,
      question: "Что произойдёт, если забыть break в бесконечном цикле?",
      options: [
        "Программа сама остановится через 10 секунд",
        "Цикл выполнится 100 раз и остановится",
        "Программа зависнет или будет работать бесконечно",
        "Go автоматически добавит break"
      ],
      correctAnswer: 2 // Программа зависнет или будет работать бесконечно
    },
    {
      id: 13,
      question: "Как пропустить индекс, если он не нужен в range?",
      options: [
        "Использовать null: for null, char := range word",
        "Использовать _: for _, char := range word",
        "Просто не писать: for char := range word",
        "Использовать 0: for 0, char := range word"
      ],
      correctAnswer: 1 // for _, char := range word
    },
    {
      id: 14,
      question: "Сколько раз выполнится этот цикл?\n\ni := 5\nfor i > 0 {\n    i--\n}",
      options: [
        "0 раз",
        "5 раз",
        "Бесконечно",
        "1 раз"
      ],
      correctAnswer: 1 // 5 раз — i уменьшается от 5 до 0
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
      <div className="bg-gradient-to-r from-green-900/30 to-teal-900/30 backdrop-blur-sm border border-green-700/30 rounded-2xl p-6 shadow-lg">
        <div className="flex items-start gap-4">
          <div className="bg-green-500/20 p-3 rounded-lg">
            <LoopIcon className="w-6 h-6 text-green-400" />
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">🧠 Викторина: Циклы в Go</h1>
            <p className="text-gray-300">
              Проверьте свои знания по теме <span className="font-medium text-yellow-400">циклов в Go</span>.
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