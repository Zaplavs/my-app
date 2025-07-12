import React from 'react';
import { Link } from 'react-router-dom';

const languages = [
  { id: 'python', name: 'Python' },
  { id: 'js', name: 'JavaScript' },
  { id: 'csharp', name: 'C#' }
];

const CodeChallengeSection = () => {
  return (
    <section className="bg-gradient-to-b from-red-700 via-red-800 to-black text-white py-16 px-4">
      <div id="code-challenge" className="container mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-12 text-center tracking-tight">
          Проверь себя в Code Challenge
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {languages.map((lang) => (
            <Link
              key={lang.id}
              to={`/code-challenge/${lang.id}`}
              className="group bg-gray-800 hover:bg-red-900 transition-all duration-300 p-6 rounded-2xl shadow-lg text-center border border-red-700 group-hover:border-red-400 transform hover:-translate-y-1 hover:shadow-xl"
            >
              <span className="text-xl font-semibold group-hover:text-red-200 transition-colors">
                {lang.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CodeChallengeSection;