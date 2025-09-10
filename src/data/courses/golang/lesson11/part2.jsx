import React, { useState } from 'react';
import { CheckCircle, XCircle, RotateCcw, Award, RotateCcw as LoopIcon, Code, HelpCircle, Hash, ArrowRight, X } from 'lucide-react';

const Part2 = () => {
  // Данные викторины по теме урока "Массивы в Go"
  const quizData = [
    {
      id: 1,
      question: "Как объявить массив из 5 целых чисел в Go?",
      options: [
        "arr int[5]",
        "arr := [5]int",
        "arr := []int{5}",
        "arr := new int[5]"
      ],
      correctAnswer: 1 // arr := [5]int
    },
    {
      id: 2,
      question: "С какого индекса начинается нумерация элементов массива в Go?",
      options: [
        "С 1",
        "С 0",
        "С -1",
        "Зависит от типа данных"
      ],
      correctAnswer: 1 // С 0
    },
    {
      id: 3,
      question: "Что произойдёт при обращении к несуществующему индексу массива (например, arr[10] для массива из 5 элементов)?",
      options: [
        "Вернётся нулевое значение",
        "Компилятор выдаст предупреждение",
        "Произойдёт panic (ошибка времени выполнения)",
        "Программа продолжит работу с мусорным значением"
      ],
      correctAnswer: 2 // Произойдёт panic
    },
    {
      id: 4,
      question: "Какая функция используется для получения длины массива?",
      options: [
        "size()",
        "length()",
        "len()",
        "count()"
      ],
      correctAnswer: 2 // len()
    },
    {
      id: 5,
      question: "Как правильно инициализировать массив строк с автоматическим определением размера?",
      options: [
        "days := [..]string{\"Пн\", \"Вт\", \"Ср\"}",
        "days := [...]string{\"Пн\", \"Вт\", \"Ср\"}",
        "days := []string{\"Пн\", \"Вт\", \"Ср\"}",
        "days := string[]{\"Пн\", \"Вт\", \"Ср\"}"
      ],
      correctAnswer: 1 // days := [...]string{"Пн", "Вт", "Ср"}
    },
    {
      id: 6,
      question: "Что выведет этот код?\n\narr := [3]int{1, 2, 3}\nfmt.Println(len(arr))",
      options: [
        "0",
        "1",
        "3",
        "Ошибка компиляции"
      ],
      correctAnswer: 2 // 3
    },
    {
      id: 7,
      question: "Как передаются массивы в функции в Go?",
      options: [
        "По ссылке (оригинал изменяется)",
        "По значению (передаётся копия)",
        "По указателю (если не указано иное)",
        "Зависит от размера массива"
      ],
      correctAnswer: 1 // По значению (передаётся копия)
    },
    {
      id: 8,
      question: "Можно ли изменить размер массива после его создания?",
      options: [
        "Да, с помощью функции resize()",
        "Да, добавляя элементы через append()",
        "Нет, размер фиксирован",
        "Да, но только уменьшать"
      ],
      correctAnswer: 2 // Нет, размер фиксирован
    },
    {
      id: 9,
      question: "Являются ли [3]int и [5]int одним и тем же типом в Go?",
      options: [
        "Да, оба — массивы целых чисел",
        "Нет, размер — часть типа",
        "Да, если значения одинаковые",
        "Зависит от контекста использования"
      ],
      correctAnswer: 1 // Нет, размер — часть типа
    },
    {
      id: 10,
      question: "Что выведет этот код?\n\nfunc modify(arr [2]int) {\n    arr[0] = 999\n}\n\nfunc main() {\n    nums := [2]int{1, 2}\n    modify(nums)\n    fmt.Println(nums[0])\n}",
      options: [
        "999",
        "1",
        "0",
        "Ошибка компиляции"
      ],
      correctAnswer: 1 // 1 (т.к. передаётся копия)
    },
    {
      id: 11,
      question: "Как инициализировать массив, задав значения только для некоторых индексов?",
      options: [
        "arr := [5]int{1=10, 3=30}",
        "arr := [5]int{1:10, 3:30}",
        "arr := [5]int{index1:10, index3:30}",
        "arr := [5]int{pos(1):10, pos(3):30}"
      ],
      correctAnswer: 1 // arr := [5]int{1:10, 3:30}
    },
    {
      id: 12,
      question: "Что такое нулевое значение для элементов массива int при объявлении без инициализации?",
      options: [
        "nil",
        "undefined",
        "0",
        "1"
      ],
      correctAnswer: 2 // 0
    },
    {
      id: 13,
      question: "Какой индекс последнего элемента в массиве из N элементов?",
      options: [
        "N",
        "N+1",
        "N-1",
        "Зависит от типа данных"
      ],
      correctAnswer: 2 // N-1
    },
    {
      id: 14,
      question: "Какой тип имеет переменная, объявленная как: var matrix [3][3]int?",
      options: [
        "Срез срезов целых чисел",
        "Массив из 9 целых чисел",
        "Массив массивов: 3 массива по 3 int",
        "Двумерный срез"
      ],
      correctAnswer: 2 // Массив массивов: 3 массива по 3 int
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
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">🧠 Викторина: Массивы в Go</h1>
            <p className="text-gray-300">
              Проверьте свои знания по теме <span className="font-medium text-yellow-400">массивов в Go</span>.
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