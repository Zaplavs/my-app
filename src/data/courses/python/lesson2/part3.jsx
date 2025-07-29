// src/data/courses/python/lesson1/part3.jsx
import React, { useState } from 'react';
import { CheckCircle, XCircle, RotateCcw, Award } from 'lucide-react';

const Part3 = () => {
  // Данные викторины
  const quizData = [
    {
      id: 1,
      question: "Что по умолчанию делает параметр `end` функции `print()`?",
      options: [
        "Добавляет пробел в конце",
        "Добавляет переход на новую строку (\\n) в конце",
        "Ничего не добавляет",
        "Добавляет точку в конце"
      ],
      correctAnswer: 1 // Индекс правильного ответа
    },
    {
      id: 2,
      question: "Какой параметр функции `print()` отвечает за разделитель между аргументами?",
      options: [
        "end",
        "sep",
        "start",
        "divider"
      ],
      correctAnswer: 1
    },
    {
      id: 3,
      question: "Что выведет следующий код: `print('A', 'B', sep='-', end='*')`?",
      options: [
        "A-B*",
        "A B*",
        "A-B",
        "*A-B"
      ],
      correctAnswer: 0
    },
    {
      id: 4,
      question: "Какой код выведет слова 'Python' и 'программирование' через пробел без перехода на новую строку?",
      options: [
        "print('Python', 'программирование')",
        "print('Python', 'программирование', sep=' ', end='')",
        "print('Python', 'программирование', end=' ')",
        "print('Python программирование', end='')"
      ],
      correctAnswer: 1
    },
    {
      id: 5,
      question: "Что выведет следующий код?\n`print('Hello', end='')`\n`print('World')`",
      options: [
        "Hello\nWorld",
        "Hello World",
        "HelloWorld",
        "World"
      ],
      correctAnswer: 2
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
        <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">🧠 Викторина: Функция `print()`</h1>
        <p className="text-gray-300">
          Проверьте свои знания по параметрам <code className="bg-gray-700 px-1.5 py-0.5 rounded text-yellow-300">sep</code> и <code className="bg-gray-700 px-1.5 py-0.5 rounded text-red-300">end</code>.
        </p>
        <p className="text-gray-400 text-sm mt-2">Выберите один правильный ответ для каждого вопроса.</p>
      </div>

      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        {quizData.map((q, questionIndex) => {
          const isSelected = userAnswers[questionIndex] !== null;
          const isCorrect = userAnswers[questionIndex] === q.correctAnswer;
          
          return (
            <div key={q.id} className={`mb-8 last:mb-0 p-4 rounded-lg ${submitted && isSelected && isCorrect ? 'bg-green-900/20 border border-green-700/30' : submitted && isSelected && !isCorrect ? 'bg-red-900/20 border border-red-700/30' : 'bg-gray-900/50'}`}>
              <h3 className="font-medium text-white mb-3">
                {questionIndex + 1}. {q.question.split('\n').map((line, i) => <div key={i}>{line}</div>)}
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
                        <span className="mr-2 font-mono">{String.fromCharCode(65 + optionIndex)}.</span>
                        <span>{option}</span>
                        {submitted && optionIndex === q.correctAnswer && (
                          <CheckCircle className="ml-auto w-5 h-5 text-green-400" />
                        )}
                        {submitted && optionIndex === userAnswers[questionIndex] && optionIndex !== q.correctAnswer && (
                          <XCircle className="ml-auto w-5 h-5 text-red-400" />
                        )}
                        {!submitted && userAnswers[questionIndex] === optionIndex && (
                          <span className="ml-auto w-5 h-5 rounded-full bg-blue-400"></span>
                        )}
                      </div>
                    </button>
                  );
                })}
              </div>
              {/* Сообщение о правильности ответа после отправки */}
              {submitted && isSelected && (
                <div className={`mt-3 text-sm p-2 rounded ${isCorrect ? 'bg-green-900/30 text-green-300' : 'bg-red-900/30 text-red-300'}`}>
                  {isCorrect ? (
                    <span className="flex items-center"><CheckCircle className="w-4 h-4 mr-1" /> Верно!</span>
                  ) : (
                    <span className="flex items-center"><XCircle className="w-4 h-4 mr-1" /> Неверно. Правильный ответ: {String.fromCharCode(65 + q.correctAnswer)}.</span>
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
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 bg-gray-900 px-4 py-3 rounded-lg">
                <Award className="w-5 h-5 text-yellow-400" />
                <span className="font-bold text-white">Результат: </span>
                <span className="font-bold text-xl text-yellow-400">{score}</span>
                <span className="text-gray-400">/ {quizData.length}</span>
              </div>
              <button
                onClick={handleReset}
                className="px-6 py-3 bg-gray-700 hover:bg-gray-600 text-white rounded-lg font-medium flex items-center gap-2 transition-colors duration-200"
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

export default Part3;