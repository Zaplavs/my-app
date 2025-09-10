import React, { useState } from 'react';
import { CheckCircle, XCircle, RotateCcw, Award, RotateCcw as LoopIcon, Code, HelpCircle, Hash, ArrowRight, X } from 'lucide-react';

const Part2 = () => {
  // Данные викторины по теме урока "Слайсы (Срезы) в Go"
  const quizData = [
    {
      id: 1,
      question: "Чем слайс отличается от массива в Go?",
      options: [
        "Слайс может менять размер, массив — нет",
        "Массив всегда содержит числа, слайс — строки",
        "Слайс передаётся по значению, массив — по ссылке",
        "У массива нет функции len(), у слайса есть"
      ],
      correctAnswer: 0 // Слайс может менять размер, массив — нет
    },
    {
      id: 2,
      question: "Как правильно объявить слайс целых чисел?",
      options: [
        "var slice int[]",
        "var slice []int",
        "var slice [ ]int",
        "var slice array<int>"
      ],
      correctAnswer: 1 // var slice []int
    },
    {
      id: 3,
      question: "Что делает функция cap() применительно к слайсу?",
      options: [
        "Возвращает количество элементов в слайсе",
        "Возвращает максимальное количество элементов, которое слайс может вместить без перераспределения памяти",
        "Возвращает ёмкость в байтах",
        "Копирует слайс"
      ],
      correctAnswer: 1 // Возвращает максимальное количество элементов, которое слайс может вместить без перераспределения памяти
    },
    {
      id: 4,
      question: "Как добавить элемент в слайс?",
      options: [
        "slice.add(5)",
        "slice.push(5)",
        "slice = append(slice, 5)",
        "append(slice, 5)"
      ],
      correctAnswer: 2 // slice = append(slice, 5)
    },
    {
      id: 5,
      question: "Что произойдёт, если использовать append() на слайсе, когда достигнута его ёмкость?",
      options: [
        "Произойдёт ошибка",
        "Go автоматически выделит новый массив большего размера и скопирует данные",
        "Элемент не будет добавлен",
        "Программа завершится с panic"
      ],
      correctAnswer: 1 // Go автоматически выделит новый массив большего размера и скопирует данные
    },
    {
      id: 6,
      question: "Какая функция копирует элементы из одного слайса в другой?",
      options: [
        "clone()",
        "duplicate()",
        "copy()",
        "paste()"
      ],
      correctAnswer: 2 // copy()
    },
    {
      id: 7,
      question: "Что выведет этот код?\n\narr := []int{1, 2, 3, 4, 5}\nslice := arr[1:4]\nfmt.Println(len(slice), cap(slice))",
      options: [
        "3 3",
        "3 4",
        "4 4",
        "4 5"
      ],
      correctAnswer: 1 // 3 4 (длина=3, ёмкость=4, т.к. можно расширять до конца исходного массива)
    },
    {
      id: 8,
      question: "При передаче слайса в функцию, что происходит?",
      options: [
        "Копируется весь массив данных",
        "Копируется только заголовок слайса (указатель, длина, ёмкость)",
        "Передаётся по ссылке как указатель",
        "Создаётся полная копия всех данных"
      ],
      correctAnswer: 1 // Копируется только заголовок слайса (указатель, длина, ёмкость)
    },
    {
      id: 9,
      question: "Как создать слайс с начальной длиной 0 и ёмкостью 100?",
      options: [
        "slice := make([]int, 100)",
        "slice := make([]int, 0, 100)",
        "slice := []int{cap: 100}",
        "slice := new([]int, 100)"
      ],
      correctAnswer: 1 // slice := make([]int, 0, 100)
    },
    {
      id: 10,
      question: "Что означает запись slice[2:5]?",
      options: [
        "Элементы с индекса 2 по 5 включительно",
        "Элементы с индекса 2 по 4 (5 не включается)",
        "Элементы с индекса 3 по 5",
        "Три последних элемента слайса"
      ],
      correctAnswer: 1 // Элементы с индекса 2 по 4 (5 не включается)
    },
    {
      id: 11,
      question: "Что выведет этот код?\n\noriginal := []int{1, 2, 3, 4, 5}\nsubset := original[1:3]\nsubset[0] = 999\nfmt.Println(original[1])",
      options: [
        "2",
        "999",
        "1",
        "Ошибка"
      ],
      correctAnswer: 1 // 999 (т.к. слайсы разделяют память)
    },
    {
      id: 12,
      question: "Как создать слайс из массива arr := [5]int{1, 2, 3, 4, 5}?",
      options: [
        "slice := arr.slice()",
        "slice := arr[0:len(arr)]",
        "slice := []int(arr)",
        "slice := convert(arr)"
      ],
      correctAnswer: 1 // slice := arr[0:len(arr)] или просто arr[:]
    },
    {
      id: 13,
      question: "Что делает выражение slice[:]? (полная нарезка)",
      options: [
        "Создаёт nil-слайс",
        "Удаляет все элементы",
        "Создаёт новый слайс, ссылающийся на те же данные",
        "Создаёт полную копию данных в новом массиве"
      ],
      correctAnswer: 2 // Создаёт новый слайс, ссылающийся на те же данные
    },
    {
      id: 14,
      question: "Как добавить все элементы одного слайса в конец другого?",
      options: [
        "slice1 = append(slice1, slice2)",
        "slice1 = append(slice1, slice2...)",
        "slice1.add(slice2)",
        "copy(slice1, slice2)"
      ],
      correctAnswer: 1 // slice1 = append(slice1, slice2...)
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
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">🧠 Викторина: Слайсы (Срезы) в Go</h1>
            <p className="text-gray-300">
              Проверьте свои знания по теме <span className="font-medium text-yellow-400">слайсов в Go</span>.
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