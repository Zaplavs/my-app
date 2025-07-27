import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Code, MousePointer2, Cpu, Coffee, Zap } from 'lucide-react';

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
      color: "from-blue-600 to-cyan-600",
      hoverColor: "hover:from-blue-700 hover:to-cyan-700",
      icon: <Icons.Python />,
      questions: "150+ вопросов",
      level: "Все уровни"
    },
    {
      title: "JavaScript",
      link: "/interview/javascript",
      color: "from-yellow-500 to-orange-500",
      hoverColor: "hover:from-yellow-600 hover:to-orange-600",
      icon: <Icons.JavaScript />,
      questions: "200+ вопросов",
      level: "Все уровни"
    },
    {
      title: "C#",
      link: "/interview/csharp",
      color: "from-purple-600 to-indigo-600",
      hoverColor: "hover:from-purple-700 hover:to-indigo-700",
      icon: <Icons.CSharp />,
      questions: "120+ вопросов",
      level: "Все уровни"
    },
    {
      title: "Java",
      link: "/interview/java",
      color: "from-red-600 to-pink-600",
      hoverColor: "hover:from-red-700 hover:to-pink-700",
      icon: <Icons.Java />,
      questions: "180+ вопросов",
      level: "Все уровни"
    },
    {
      title: "C++",
      link: "/interview/cpp",
      color: "from-green-600 to-teal-600",
      hoverColor: "hover:from-green-700 hover:to-teal-700",
      icon: <Icons.Cpp />,
      questions: "140+ вопросов",
      level: "Все уровни"
    },
  ];

  return (
    <section id="interview" className="bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white py-24 px-6 relative overflow-hidden">
      {/* Анимированные фоновые элементы */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-500/20 via-transparent to-purple-500/20"></div>
      </div>
      
      <div className="absolute top-1/4 right-10 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 left-10 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Заголовок секции */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-900/30 to-purple-900/30 backdrop-blur-sm border border-blue-800/30 rounded-full px-6 py-2 mb-6">
            <Coffee className="w-5 h-5 text-blue-400" />
            <span className="text-blue-300 font-medium uppercase tracking-wider">Подготовка к собеседованиям</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-black mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
            Вопросы для собеседований
          </h2>
          
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Выбери язык программирования и получи доступ к вопросам, которые задают на собеседованиях.
          </p>
        </div>

        {/* Сетка вопросов */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {questionBlocks.map((block, index) => (
            <div 
              key={index}
              className="group relative"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Градиентный фон при наведении */}
              <div className={`absolute -inset-1 bg-gradient-to-r ${block.color} rounded-2xl blur opacity-0 group-hover:opacity-20 transition-all duration-500`}></div>
              
              <Link
                to={block.link}
                className={`relative block p-6 rounded-2xl bg-gray-800/60 backdrop-blur-lg border border-gray-700/50 shadow-xl transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl ${block.hoverColor}`}
              >
                {/* Иконка */}
                <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-r ${block.color} mb-5`}>
                  {block.icon}
                </div>
                
                {/* Заголовок */}
                <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-gray-100 transition-colors duration-300">
                  {block.title}
                </h3>
                
                {/* Дополнительная информация */}
                <div className="space-y-2 mb-5">
                  <div className="flex items-center gap-2 text-sm text-gray-300">
                    <Zap className="w-4 h-4" />
                    <span>{block.questions}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-300">
                    <MousePointer2 className="w-4 h-4" />
                    <span>{block.level}</span>
                  </div>
                </div>
                
                {/* Кнопка действия */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-700/50">
                  <span className="font-medium text-gray-200 group-hover:text-white transition-colors duration-300">
                    Перейти
                  </span>
                  <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-white transition-all duration-300 group-hover:translate-x-1" />
                </div>
                
                {/* Градиентная рамка */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${block.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300 -z-10`}></div>
              </Link>
            </div>
          ))}
        </div>

        {/* Призыв к действию */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-3 bg-gray-800/60 backdrop-blur-sm border border-gray-700/50 rounded-full px-8 py-4">
            <Cpu className="w-5 h-5 text-blue-400" />
            <span className="text-gray-300">
              <span className="font-bold text-white">{questionBlocks.reduce((acc, block) => acc + parseInt(block.questions), 0)}+</span> 
              вопросов по всем языкам программирования
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}