import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Code, Zap, Trophy, Clock, Users, Target, Award } from 'lucide-react';

const languages = [
  { 
    id: 'python', 
    name: 'Python', 
    icon: '🐍',
    color: 'from-blue-500 to-cyan-500',
    hoverColor: 'hover:from-blue-600 hover:to-cyan-600',
    tasks: '35 задач',
    level: 'Все уровни'
  },
  { 
    id: 'js', 
    name: 'JavaScript', 
    icon: '📜',
    color: 'from-yellow-400 to-orange-500',
    hoverColor: 'hover:from-yellow-500 hover:to-orange-600',
    tasks: '42 задачи',
    level: 'Все уровни'
  },
  { 
    id: 'csharp', 
    name: 'C#', 
    icon: '♯',
    color: 'from-purple-500 to-indigo-500',
    hoverColor: 'hover:from-purple-600 hover:to-indigo-600',
    tasks: '28 задач',
    level: 'Все уровни'
  },
];

const CodeChallengeSection = () => {
  return (
    <section className="bg-gradient-to-br from-gray-900 via-red-900 to-black text-white py-24 px-4 relative overflow-hidden">
      {/* Анимированные фоновые элементы */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-red-500/20 via-transparent to-yellow-500/20"></div>
      </div>
      
      <div className="absolute top-1/4 right-10 w-96 h-96 bg-red-500/5 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 left-10 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>

      <div id="code-challenge" className="container mx-auto max-w-7xl relative z-10">
        {/* Заголовок секции */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-red-900/30 to-yellow-900/30 backdrop-blur-sm border border-red-800/30 rounded-full px-6 py-2 mb-6">
            <Code className="w-5 h-5 text-red-400" />
            <span className="text-red-300 font-medium uppercase tracking-wider">Практические задания</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-black mb-6 bg-clip-text text-transparent bg-gradient-to-r from-red-400 via-orange-400 to-yellow-400">
            Code Challenge
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Реши задачи и улучши свои навыки программирования. Выбери язык и начни прямо сейчас.
          </p>
        </div>

        {/* Сетка языков */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {languages.map((lang, index) => (
            <div 
              key={lang.id}
              className="group relative"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Градиентный фон при наведении */}
              <div className={`absolute -inset-1 bg-gradient-to-r ${lang.color} rounded-2xl blur opacity-0 group-hover:opacity-20 transition-all duration-500`}></div>
              
              <Link
                to={`/code-challenge/${lang.id}`}
                className={`relative block overflow-hidden rounded-2xl bg-gray-800/60 backdrop-blur-lg border border-gray-700/50 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 ${lang.hoverColor}`}
              >
                {/* Иконка языка с градиентом */}
                <div className={`flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-r ${lang.color} mx-auto mt-6 mb-5 text-3xl shadow-lg transform transition-transform duration-300 group-hover:scale-110`}>
                  {lang.icon}
                </div>
                
                {/* Название языка */}
                <h3 className="text-2xl font-bold text-center mb-4 text-white group-hover:text-gray-100 transition-colors duration-300">
                  {lang.name}
                </h3>
                
                {/* Информация о задачах */}
                <div className="px-6 pb-6">
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center justify-center gap-2 text-sm text-gray-300">
                      <Target className="w-4 h-4" />
                      <span>{lang.tasks}</span>
                    </div>
                    <div className="flex items-center justify-center gap-2 text-sm text-gray-300">
                      <Award className="w-4 h-4" />
                      <span>{lang.level}</span>
                    </div>
                  </div>
                  
                  {/* Кнопка действия */}
                  <div className="pt-4 border-t border-gray-700/50">
                    <div className="inline-flex items-center justify-center gap-2 w-full font-bold text-white group-hover:text-gray-100 transition-colors duration-300">
                      <span>Начать задачи</span>
                      <ChevronRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </div>
                  </div>
                </div>
                
                {/* Градиентная рамка */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${lang.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300 -z-10`}></div>
              </Link>
            </div>
          ))}
        </div>

        {/* Статистика платформы */}
        <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-red-500/20 rounded-xl mb-4">
              <Trophy className="w-6 h-6 text-red-400" />
            </div>
            <div className="text-2xl font-bold text-white">1,250+</div>
            <div className="text-gray-400 text-sm">Решенных задач</div>
          </div>
          
          <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-yellow-500/20 rounded-xl mb-4">
              <Users className="w-6 h-6 text-yellow-400" />
            </div>
            <div className="text-2xl font-bold text-white">890+</div>
            <div className="text-gray-400 text-sm">Активных пользователей</div>
          </div>
          
          <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-green-500/20 rounded-xl mb-4">
              <Zap className="w-6 h-6 text-green-400" />
            </div>
            <div className="text-2xl font-bold text-white">3</div>
            <div className="text-gray-400 text-sm">Языка программирования</div>
          </div>
          
          <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-500/20 rounded-xl mb-4">
              <Award className="w-6 h-6 text-blue-400" />
            </div>
            <div className="text-2xl font-bold text-white">98%</div>
            <div className="text-gray-400 text-sm">Удовлетворенность</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CodeChallengeSection;