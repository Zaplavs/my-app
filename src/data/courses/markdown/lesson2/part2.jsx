// src/data/courses/markdown/lesson2/part2.jsx
import React, { useState } from 'react';
import { CheckCircle, XCircle, RotateCcw, Award, FileText, Code, File as FileIcon } from 'lucide-react'; // Заменили FileWord на FileIcon

const Part2 = () => {
  // Данные викторины по теме урока
  const quizData = [
    {
      id: 1,
      question: "Какое из следующих утверждений лучше всего описывает ключевое преимущество Markdown?",
      options: [
        "Он позволяет создавать сложные анимации на веб-страницах",
        "Он обеспечивает максимальную простоту, читаемость и концентрацию на содержании текста",
        "Он является стандартом для создания печатных документов",
        "Он требует установки специального программного обеспечения"
      ],
      correctAnswer: 1 // Он обеспечивает максимальную простоту, читаемость и концентрацию на содержании текста
    },
    {
      id: 2,
      question: "Почему Markdown часто предпочтительнее Microsoft Word для написания технической документации?",
      options: [
        "Markdown имеет более красивый графический интерфейс",
        "Markdown позволяет вставлять видео напрямую в документ",
        "Markdown решает проблемы совместимости и легко интегрируется с системами контроля версий",
        "Markdown автоматически публикует документы в интернете"
      ],
      correctAnswer: 2 // Markdown решает проблемы совместимости и легко интегрируется с системами контроля версий
    },
    {
      id: 3,
      question: "Как Markdown сравнивается с HTML по уровню сложности синтаксиса?",
      options: [
        "Markdown требует больше закрывающих тегов, чем HTML",
        "Синтаксис Markdown более громоздкий и сложный, чем у HTML",
        "Markdown использует минималистичный синтаксис, в отличие от избыточности HTML",
        "Markdown и HTML имеют одинаково сложный синтаксис"
      ],
      correctAnswer: 2 // Markdown использует минималистичный синтаксис, в отличие от избыточности HTML
    },
    {
      id: 4,
      question: "Какое из следующих утверждений о читаемости Markdown и HTML верно?",
      options: [
        "HTML-код всегда легче читать, чем Markdown",
        "Markdown трудно читать без специального редактора",
        "Даже в \"сыром\" виде Markdown легче читать и понимать, чем HTML с множеством тегов",
        "Читаемость Markdown и HTML одинакова"
      ],
      correctAnswer: 2 // Даже в "сыром" виде Markdown легче читать и понимать, чем HTML с множеством тегов
    },
    {
      id: 5,
      question: "Какое преимущество Markdown особенно ценно в среде разработки программного обеспечения?",
      options: [
        "Возможность создания 3D-моделей",
        "Отличная интеграция с системами контроля версий (Git) и CI/CD",
        "Встроенная проверка орфографии",
        "Автоматическое резервное копирование в облако"
      ],
      correctAnswer: 1 // Отличная интеграция с системами контроля версий (Git) и CI/CD
    },
    {
      id: 6,
      question: "Почему Markdown не зависит от редактора?",
      options: [
        "Потому что он работает только в браузере",
        "Потому что он является обычным текстом и может быть открыт и отредактирован в любом текстовом редакторе",
        "Потому что он автоматически конвертируется в Word",
        "Потому что он требует специального плагина для редакторов"
      ],
      correctAnswer: 1 // Потому что он является обычным текстом и может быть открыт и отредактирован в любом текстовом редакторе
    },
    {
      id: 7,
      question: "Какое из следующих утверждений о скорости написания текста является верным?",
      options: [
        "Написание в HTML всегда быстрее, чем в Markdown",
        "Markdown требует больше времени для изучения, чем Word",
        "Markdown позволяет сосредоточиться на содержании, что делает написание текста быстрее, чем в HTML",
        "Скорость написания в Markdown и HTML одинакова"
      ],
      correctAnswer: 2 // Markdown позволяет сосредоточиться на содержании, что делает написание текста быстрее, чем в HTML
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
      {/* Шапка викторины */}
      <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 backdrop-blur-sm border border-blue-700/30 rounded-2xl p-6 shadow-lg">
        <div className="flex items-start gap-4">
          <div className="bg-blue-500/20 p-3 rounded-lg">
            <FileText className="w-6 h-6 text-blue-400" />
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">🧠 Викторина: Преимущества Markdown</h1>
            <p className="text-gray-300">
              Проверьте свои знания по теме <span className="font-medium text-yellow-400">преимуществ Markdown перед Word и HTML</span>.
            </p>
            <p className="text-gray-400 text-sm mt-2">Выберите один правильный ответ для каждого вопроса.</p>
          </div>
        </div>
      </div>

      {/* Карточка викторины */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        {/* Список вопросов */}
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
              {/* Текст вопроса */}
              <h3 className="font-medium text-white mb-3 flex items-start gap-2">
                <span className="flex-shrink-0">{questionIndex + 1}.</span>
                <span>{q.question}</span>
              </h3>
              
              {/* Варианты ответов */}
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
                      <span>Неверно. Правильный ответ: {String.fromCharCode(65 + q.correctAnswer)}. {q.options[q.correctAnswer]}</span>
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
              {/* Результат */}
              <div className="flex items-center gap-2 bg-gray-900 px-4 py-3 rounded-lg">
                <Award className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                <span className="font-bold text-white">Результат: </span>
                <span className="font-bold text-xl text-yellow-400">{score}</span>
                <span className="text-gray-400">/ {quizData.length}</span>
              </div>
              
              {/* Кнопка сброса */}
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
