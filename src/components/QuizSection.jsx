import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Brain, Zap, Trophy, Clock, Users } from 'lucide-react';

export default function QuizSection() {
  const quizLanguages = [
    { 
      name: "Python", 
      color: "from-blue-600 to-cyan-600",
      hoverColor: "hover:from-blue-700 hover:to-cyan-700",
      icon: "P",
      questions: "20 вопросов",
      time: "10 мин"
    },
    { 
      name: "JavaScript", 
      color: "from-yellow-400 to-orange-500",
      hoverColor: "hover:from-yellow-500 hover:to-orange-600",
      icon: "JS",
      questions: "25 вопросов",
      time: "12 мин"
    },
    { 
      name: "C#", 
      color: "from-purple-600 to-indigo-600",
      hoverColor: "hover:from-purple-700 hover:to-indigo-700",
      icon: "C#",
      questions: "20 вопросов",
      time: "10 мин"
    },
    { 
      name: "Java", 
      color: "from-red-600 to-pink-600",
      hoverColor: "hover:from-red-700 hover:to-pink-700",
      icon: "J",
      questions: "22 вопроса",
      time: "11 мин"
    },
    { 
      name: "C++", 
      color: "from-green-600 to-teal-600",
      hoverColor: "hover:from-green-700 hover:to-teal-700",
      icon: "C++",
      questions: "18 вопросов",
      time: "9 мин"
    }
  ];

  return (
    <section className="bg-gradient-to-br from-gray-900 via-black to-gray-900 py-24 px-6 relative overflow-hidden">
      {/* Анимированные фоновые элементы */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-500/20 via-transparent to-blue-500/20"></div>
      </div>
      
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>

      <div id="quiz" className="max-w-7xl mx-auto text-center relative z-10">
        {/* Заголовок секции */}
        <div className="mb-16">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-900/30 to-blue-900/30 backdrop-blur-sm border border-purple-800/30 rounded-full px-6 py-2 mb-6">
            <Brain className="w-5 h-5 text-purple-400" />
            <span className="text-purple-300 font-medium uppercase tracking-wider">Интерактивное обучение</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-black mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-blue-500">
            Проверь свои знания!
          </h2>
          
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Пройди короткую викторину и узнай, насколько хорошо ты знаешь язык программирования.
          </p>
        </div>

        {/* Сетка викторин */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {quizLanguages.map((lang, index) => (
            <div 
              key={lang.name}
              className="group relative"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Градиентный фон при наведении */}
              <div className={`absolute -inset-1 bg-gradient-to-r ${lang.color} rounded-2xl blur opacity-0 group-hover:opacity-20 transition-all duration-500`}></div>
              
              <Link
                to={`/quiz/${lang.name.toLowerCase() === 'c#' ? 'csharp' : lang.name.toLowerCase()}`}
                className={`relative block p-6 rounded-2xl bg-gray-800/60 backdrop-blur-lg border border-gray-700/50 shadow-xl transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl ${lang.hoverColor}`}
              >
                {/* Иконка языка */}
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${lang.color} mb-5 text-white font-bold text-lg shadow-lg`}>
                  {lang.icon}
                </div>
                
                {/* Название языка */}
                <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-gray-100 transition-colors duration-300">
                  {lang.name}
                </h3>
                
                {/* Информация о викторине */}
                <div className="space-y-3 mb-6">
                  <div className="flex items-center justify-center gap-2 text-sm text-gray-300">
                    <Zap className="w-4 h-4" />
                    <span>{lang.questions}</span>
                  </div>
                  <div className="flex items-center justify-center gap-2 text-sm text-gray-300">
                    <Clock className="w-4 h-4" />
                    <span>{lang.time}</span>
                  </div>
                </div>
                
                {/* Кнопка действия */}
                <div className="pt-4 border-t border-gray-700/50">
                  <div className="inline-flex items-center gap-2 font-bold text-white group-hover:text-gray-100 transition-colors duration-300">
                    <span>Начать викторину</span>
                    <ChevronRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                </div>
                
                {/* Градиентная рамка */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${lang.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300 -z-10`}></div>
              </Link>
            </div>
          ))}
        </div>

        {/* Статистика */}
        <div className="mt-16 flex flex-wrap items-center justify-center gap-8 text-gray-400">
          <div className="flex items-center gap-2">
            <Trophy className="w-5 h-5 text-yellow-500" />
            <span><span className="font-bold text-white">1000+</span> пройденных викторин</span>
          </div>
          <div className="h-4 w-px bg-gray-700"></div>
          <div className="flex items-center gap-2">
            <Users className="w-5 h-5 text-blue-500" />
            <span><span className="font-bold text-white">500+</span> активных пользователей</span>
          </div>
          <div className="h-4 w-px bg-gray-700"></div>
          <div className="flex items-center gap-2">
            <Brain className="w-5 h-5 text-purple-500" />
            <span><span className="font-bold text-white">105</span> уникальных вопросов</span>
          </div>
        </div>
      </div>
    </section>
  );
}