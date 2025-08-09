import React from 'react';
import { Link } from 'react-router-dom';
import { Map, ChevronRight, Cpu, Code2, Braces, Star } from 'lucide-react';
import { ROADMAPS } from '../data/roadmap';
import { motion } from 'framer-motion';

export default function RoadmapSection() {
  return (
    <section id="roadmap" className="relative py-24 px-4 bg-gradient-to-br from-gray-950 via-black to-gray-900 text-white overflow-hidden">
      {/* decorative grid */}
      <div className="pointer-events-none absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage:
            'radial-gradient(circle at 20% 20%, rgba(255,255,255,0.06), transparent 40%), radial-gradient(circle at 80% 30%, rgba(255,200,150,0.05), transparent 45%), linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)',
          backgroundSize: '100% 100%, 100% 100%, 44px 44px, 44px 44px',
          backgroundPosition: 'center, center, center, center'
        }} />
      </div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <div className="inline-flex items-center gap-3 bg-orange-900/30 backdrop-blur-sm border border-orange-800/40 rounded-full px-6 py-2.5 mb-8 shadow-lg shadow-orange-900/10">
            <div className="relative">
              <div className="w-2.5 h-2.5 bg-orange-500 rounded-full animate-ping absolute opacity-75 inset-0"></div>
              <div className="w-2.5 h-2.5 bg-orange-500 rounded-full relative"></div>
            </div>
            <span className="text-orange-300 font-semibold tracking-wide text-sm uppercase">Путь к успеху</span>
          </div>
          
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center shadow-lg shadow-red-500/20">
              <Map className="w-6 h-6" />
            </div>
            <h2 className="text-3xl md:text-5xl font-black tracking-wide bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-gray-400">
              Roadmap
            </h2>
          </div>
        </motion.div>
        
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-center text-gray-300 mb-16 max-w-2xl mx-auto text-lg"
        >
          Три стартовые дорожные карты для быстрого входа в разработку. Выбирай стек и следуй шагам.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {ROADMAPS.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              whileHover={{ y: -10 }}
              className="group relative rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md shadow-[0_30px_80px_rgba(0,0,0,0.35)] hover:border-white/20 transition-all duration-500"
            >
              <div className={`absolute -inset-0.5 bg-gradient-to-r ${item.colorFrom} ${item.colorTo} opacity-10 rounded-2xl blur-lg group-hover:opacity-20 transition-opacity duration-500`} />
              
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.colorFrom} ${item.colorTo} flex items-center justify-center text-black/90 shadow-lg`}>
                    {item.id === 'python' && <Cpu className="w-6 h-6" />}
                    {item.id === 'javascript' && <Code2 className="w-6 h-6" />}
                    {item.id === 'csharp' && <Braces className="w-6 h-6" />}
                  </div>
                  <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
                    {item.title}
                  </h3>
                </div>

                <ul className="space-y-3 text-gray-300 mb-8">
                  {item.points.slice(0, 3).map((p, idx) => (
                    <motion.li 
                      key={idx} 
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.1 * idx }}
                      className="flex items-center gap-3"
                    >
                      <div className="flex-shrink-0 w-2 h-2 rounded-full bg-gradient-to-r from-red-400 to-orange-400" />
                      <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-sm text-gray-200 hover:bg-white/10 transition-colors">
                        {p}
                      </span>
                    </motion.li>
                  ))}
                </ul>

                <Link 
                  to={`/roadmap/${item.id}`} 
                  className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-white/10 to-white/5 hover:from-white/15 hover:to-white/10 border border-white/10 hover:border-white/20 transition-all group-hover:shadow-lg group-hover:shadow-white/10"
                >
                  Открыть план
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ 
                      duration: 1.5,
                      repeat: Infinity,
                      repeatType: "reverse"
                    }}
                  >
                    <ChevronRight className="w-4 h-4" />
                  </motion.div>
                </Link>
              </div>
              
              {/* Decorative star */}
              <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-40 transition-opacity">
                <Star className="w-4 h-4 text-yellow-300" fill="currentColor" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Enhanced background effects */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-red-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-yellow-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>
    </section>
  );
}