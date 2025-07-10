import React from 'react';
import { Link } from 'react-router-dom';

export default function QuizSection() {
  const quizLanguages = [
    { name: "Python", color: "bg-blue-600 hover:bg-blue-700" },
    { name: "JavaScript", color: "bg-yellow-500 hover:bg-yellow-600 text-black" },
    { name: "CSharp", color: "bg-purple-600 hover:bg-purple-700" },
    { name: "Java", color: "bg-red-600 hover:bg-red-700" },
    { name: "CPP", color: "bg-pink-700 hover:bg-pink-800" }
  ];

  return (
    <section className="bg-gray-900 py-16 px-6">
      <div id="quiz" className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Проверь свои знания!</h2>
        <p className="text-gray-400 mb-10 max-w-xl mx-auto">
          Пройди короткую викторину и узнай, насколько хорошо ты знаешь язык.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {quizLanguages.map((lang) => (
            <Link
              key={lang.name}
              to={`/quiz/${lang.name.toLowerCase()}`}
              className={`p-6 rounded-lg shadow-md border border-gray-700 transition-all transform hover:-translate-y-1 hover:shadow-lg ${lang.color}`}
            >
              <h3 className="text-xl font-semibold">{lang.name}</h3>
              <p className="mt-2 text-sm opacity-90">Начать викторину →</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}