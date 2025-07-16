import React from 'react';
import { Link } from 'react-router-dom';

const languages = [
  { id: 'python', name: 'Python', icon: '🐍' },
  { id: 'js', name: 'JavaScript', icon: '📜' },
  { id: 'csharp', name: 'C#', icon: '♯' },
];

const CodeChallengeSection = () => {
  return (
    <section className="bg-gradient-to-b from-red-700 via-red-800 to-red-900 text-white py-20 px-4">
      <div id="code-challenge" className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-center bg-gradient-to-r from-yellow-300 to-orange-200 bg-clip-text text-transparent">
          Проверь себя в Code Challenge
        </h2>
        <p className="text-red-100 text-center max-w-2xl mx-auto mb-12 text-lg">
          Реши задачи и улучши свои навыки программирования. Выбери язык и начни прямо сейчас.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {languages.map((lang) => (
            <Link
              key={lang.id}
              to={`/code-challenge/${lang.id}`}
              className="group relative overflow-hidden rounded-2xl bg-white/10 backdrop-blur-md border border-red-600 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-red-900/40 to-transparent opacity-0 group-hover:opacity-20 transition-opacity"></div>
              <div className="relative p-8 flex flex-col items-center text-center">
                <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  {lang.icon}
                </div>
                <h3 className="text-xl font-bold text-white group-hover:text-yellow-300 transition-colors duration-300">
                  {lang.name}
                </h3>
                <p className="mt-2 text-sm text-red-200 group-hover:text-white transition-colors duration-300 flex items-center gap-1">
                  Начать задачи <ArrowRightIcon />
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

function ArrowRightIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"
         stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
         className="transition-transform group-hover:translate-x-1 duration-300">
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  );
}

export default CodeChallengeSection;