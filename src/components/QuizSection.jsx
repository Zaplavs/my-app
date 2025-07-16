import React from 'react';
import { Link } from 'react-router-dom';

export default function QuizSection() {
  const quizLanguages = [
    { name: "Python", color: "bg-blue-600 hover:bg-blue-700" },
    { name: "JavaScript", color: "bg-yellow-400 hover:bg-yellow-500 text-black" },
    { name: "CSharp", color: "bg-purple-600 hover:bg-purple-700" },
    { name: "Java", color: "bg-red-600 hover:bg-red-700" },
    { name: "CPP", color: "bg-pink-600 hover:bg-pink-700" }
  ];

  return (
    <section className="bg-gray-900 py-20 px-6">
      <div id="quiz" className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
          Проверь свои знания!
        </h2>
        <p className="text-gray-400 mb-12 max-w-xl mx-auto text-lg">
          Пройди короткую викторину и узнай, насколько хорошо ты знаешь язык.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          {quizLanguages.map((lang) => (
            <Link
              key={lang.name}
              to={`/quiz/${lang.name.toLowerCase()}`}
              className={`group relative p-6 rounded-xl shadow-lg border border-gray-800 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl ${lang.color}`}
            >
              <div className="absolute inset-0 rounded-xl bg-black opacity-0 group-hover:opacity-10 transition-opacity"></div>
              <div className="relative z-10">
                <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center rounded-full bg-white bg-opacity-20">
                  <span className="font-bold text-xl">{lang.name.charAt(0)}</span>
                </div>
                <h3 className="text-xl font-semibold">{lang.name}</h3>
                <p className="mt-2 text-sm opacity-90 flex items-center justify-center gap-1">
                  Начать викторину <ArrowRightIcon />
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function ArrowRightIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  );
}