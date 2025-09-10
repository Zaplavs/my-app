import React, { useState } from 'react';
import { CheckCircle, XCircle, RotateCcw, Award, RotateCcw as LoopIcon, Code, HelpCircle, Hash, ArrowRight, X } from 'lucide-react';

const Part2 = () => {
  // Данные викторины по теме урока
  const quizData = [
    {
      id: 1,
      question: "Какое ключевое слово используется для объявления функции в Go?",
      options: [
        "function",
        "def",
        "func",
        "method"
      ],
      correctAnswer: 2 // func
    },
    {
      id: 2,
      question: "Как объявить функцию без параметров и без возвращаемого значения?",
      options: [
        "func hello() {}",
        "function hello(): void {}",
        "def hello():",
        "func hello -> {}"
      ],
      correctAnswer: 0 // func hello() {}
    },
    {
      id: 3,
      question: "Какая функция правильно принимает два целых числа и возвращает их сумму?",
      options: [
        "func add(a int, b int) int { return a + b }",
        "function add(a: int, b: int): int { return a + b }",
        "def add(a, b): return a + b",
        "func add(a, b) -> int { a + b }"
      ],
      correctAnswer: 0 // func add(a int, b int) int { return a + b }
    },
    {
      id: 4,
      question: "Как вернуть два значения из функции в Go?",
      options: [
        "return value1 and value2",
        "return (value1, value2)",
        "return value1, value2",
        "yield value1, value2"
      ],
      correctAnswer: 2 // return value1, value2
    },
    {
      id: 5,
      question: "Что такое именованные возвращаемые значения?",
      options: [
        "Переменные, объявленные в сигнатуре функции для возврата",
        "Функции, которые возвращают своё имя",
        "Параметры с префиксом 'return_'",
        "Глобальные переменные, используемые для возврата"
      ],
      correctAnswer: 0 // Переменные, объявленные в сигнатуре функции для возврата
    },
    {
      id: 6,
      question: "Как вызвать функцию divide, возвращающую частное и остаток?\n\nfunc divide(a, b int) (int, int) { ... }",
      options: [
        "q = divide(10, 3)",
        "q, r := divide(10, 3)",
        "divide(10, 3) -> q, r",
        "var q, r = divide.call(10, 3)"
      ],
      correctAnswer: 1 // q, r := divide(10, 3)
    },
    {
      id: 7,
      question: "Что делает «голый return» (naked return) в функции с именованными возвращаемыми значениями?",
      options: [
        "Возвращает случайное значение",
        "Возвращает текущие значения именованных переменных",
        "Вызывает ошибку компиляции",
        "Возвращает nil"
      ],
      correctAnswer: 1 // Возвращает текущие значения именованных переменных
    },
    {
      id: 8,
      question: "Можно ли объявлять функции внутри других функций в Go?",
      options: [
        "Нет, это запрещено",
        "Да, и они называются вложенными функциями",
        "Только если внешняя функция — анонимная",
        "Только в методах структур"
      ],
      correctAnswer: 1 // Да, и они называются вложенными функциями
    },
    {
      id: 9,
      question: "Что выведет этот код?\n\nfunc getValues() (x, y int) {\n    x = 5\n    y = 10\n    return\n}\n\nfunc main() {\n    a, b := getValues()\n    fmt.Println(a, b)\n}",
      options: [
        "0 0",
        "5 10",
        "Ошибка компиляции",
        "nil nil"
      ],
      correctAnswer: 1 // 5 10
    },
    {
      id: 10,
      question: "Как игнорировать одно из возвращаемых значений функции?",
      options: [
        "Использовать null: a, null = func()",
        "Использовать _: a, _ = func()",
        "Просто не указывать: a = func()",
        "Использовать 0: a, 0 = func()"
      ],
      correctAnswer: 1 // Использовать _: a, _ = func()
    },
    {
      id: 11,
      question: "Что такое замыкание (closure) в контексте вложенных функций?",
      options: [
        "Функция, которая закрывает соединение с базой данных",
        "Функция, которая имеет доступ к переменным внешней функции после её завершения",
        "Функция, которая вызывает саму себя",
        "Функция без параметров"
      ],
      correctAnswer: 1 // Функция, которая имеет доступ к переменным внешней функции после её завершения
    },
    {
      id: 12,
      question: "Как правильно объявить функцию с именованными возвращаемыми значениями?",
      options: [
        "func calc() -> (sum int, diff int) { ... }",
        "func calc() (sum: int, diff: int) { ... }",
        "func calc() (sum int, diff int) { ... }",
        "func calc() returns sum int, diff int { ... }"
      ],
      correctAnswer: 2 // func calc() (sum int, diff int) { ... }
    },
    {
      id: 13,
      question: "Что произойдёт, если функция с именованными возвращаемыми значениями не имеет return?",
      options: [
        "Вернутся нулевые значения",
        "Ошибка компиляции",
        "Программа зависнет",
        "Вернётся последнее присвоенное значение"
      ],
      correctAnswer: 0 // Вернутся нулевые значения (т.к. именованные переменные инициализируются нулями)
    },
    {
      id: 14,
      question: "Какой синтаксис используется для сокращения типа у параметров одного типа?\n\nfunc add(a int, b int) int",
      options: [
        "func add(a b int) int",
        "func add(a, b int) int",
        "func add(int a, b) int",
        "func add(a:int, b:int) int"
      ],
      correctAnswer: 1 // func add(a, b int) int
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
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">🧠 Викторина: Функции в Go</h1>
            <p className="text-gray-300">
              Проверьте свои знания по теме <span className="font-medium text-yellow-400">функций в Go</span>.
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