import React from 'react';
import { Link } from 'react-router-dom';

// SVG иконки для языков
const Icons = {
  Python: () => (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
      <path d="M11.996 6c-3.313 0-5.997 2.686-5.997 6s2.684 6 5.997 6c3.314 0 6-2.686 6-6s-2.686-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z" />
      <path d="M17 2H7v2h10V2zm3 4H4v2h16V6zM4 10h6v8H4v-8zm16 0h-6v8h6v-8z" />
    </svg>
  ),
  JavaScript: () => (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.15 14.11c-.79.79-2.07.79-2.83 0l-1.22-1.22c-.37-.37-.37-1.01 0-1.38.37-.37 1.01-.37 1.38 0l.53.53.94-1.21c.32-.41.95-.47 1.33-.12.38.35.41.94.06 1.32l-1.49 1.49c-.38.38-.38 1.01 0 1.39.38.38 1.01.38 1.39 0l1.22-1.22z" />
    </svg>
  ),
  CSharp: () => (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4 11H8v-2h8v2zm0-4H8V7h8v2z" />
    </svg>
  ),
  Java: () => (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-12a4 4 0 100 8 4 4 0 000-8z" />
    </svg>
  ),
  Cpp: () => (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
      <path d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H8V4h12v12zM10 9h2v2h-2V9zm4 0h2v2h-2V9z" />
    </svg>
  )
};

export default function InterviewQuestionsSection() {
  const questionBlocks = [
    {
      title: "Python",
      link: "/interview/python",
      color: "bg-red-700 hover:bg-red-800 text-white",
      icon: <Icons.Python />,
    },
    {
      title: "JavaScript",
      link: "/interview/javascript",
      color: "bg-yellow-500 hover:bg-yellow-600 text-black",
      icon: <Icons.JavaScript />,
    },
    {
      title: "C#",
      link: "/interview/csharp",
      color: "bg-blue-700 hover:bg-blue-800 text-white",
      icon: <Icons.CSharp />,
    },
    {
      title: "Java",
      link: "/interview/java",
      color: "bg-orange-600 hover:bg-orange-700 text-white",
      icon: <Icons.Java />,
    },
    {
      title: "C++",
      link: "/interview/cpp",
      color: "bg-purple-700 hover:bg-purple-800 text-white",
      icon: <Icons.Cpp />,
    },
  ];

  return (
    <section id="interview" className="bg-red-950 text-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold mb-4">Собеседования</h2>
          <p className="text-lg opacity-80 max-w-2xl mx-auto">
            Выбери язык программирования и получи доступ к вопросам, которые задают на собеседованиях.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {questionBlocks.map((block, index) => (
            <Link
              key={index}
              to={block.link}
              className={`group relative p-6 rounded-xl shadow-xl border border-opacity-20 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl ${block.color}`}
            >
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-black/20 rounded-full">{block.icon}</div>
                <h3 className="text-2xl font-bold group-hover:text-gray-200 transition">{block.title}</h3>
              </div>
              <p className="mt-4 font-medium group-hover:text-gray-200 transition">
                Посмотреть вопросы →
              </p>

              {/* Градиентный бордер по углам */}
              <div className="absolute inset-0 w-full h-full pointer-events-none rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-red-600 via-black to-red-600 opacity-30 blur-md"></div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}