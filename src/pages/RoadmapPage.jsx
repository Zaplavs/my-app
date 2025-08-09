import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ChevronRight, Cpu, Code2, Braces } from 'lucide-react';
import { getRoadmapById, ROADMAPS } from '../data/roadmap';

export default function RoadmapPage() {
  const { tech } = useParams();
  const roadmap = getRoadmapById(tech);

  if (!roadmap) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center text-white">
        <h1 className="text-3xl font-bold mb-4">Роадмап не найден</h1>
        <p className="text-gray-400 mb-6">Проверь правильность пути: /roadmap/python | /roadmap/javascript | /roadmap/csharp</p>
        <Link to="/" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 hover:bg-white/15 border border-white/10">
          <ArrowLeft className="w-4 h-4" /> На главную
        </Link>
      </div>
    );
  }

  const Icon = roadmap.id === 'python' ? Cpu : roadmap.id === 'javascript' ? Code2 : Braces;
  const headerGradient = `${roadmap.colorFrom} ${roadmap.colorTo}`;
  const modules = roadmap.modules || [];
  const totalHours = modules.reduce((sum, m) => sum + (m.hours || 0), 0);
  const STAGE_LABEL = {
    start: 'Старт',
    foundation: 'База',
    core: 'Ядро',
    advanced: 'Продвинутое',
    practice: 'Практика',
  };
  const STAGE_ORDER = ['start', 'foundation', 'core', 'advanced', 'practice'];
  const grouped = modules.reduce((acc, m) => {
    const key = m.stage || 'core';
    acc[key] = acc[key] || { hours: 0, items: [] };
    acc[key].items.push(m);
    acc[key].hours += m.hours || 0;
    return acc;
  }, {});
  const presentStages = STAGE_ORDER.filter((s) => grouped[s]);

  return (
    <section className="relative py-24 px-4 text-white bg-gradient-to-br from-gray-950 via-black to-gray-900 overflow-hidden">
      {/* subtle grid and glow */}
      <div className="pointer-events-none absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage:
            'radial-gradient(circle at 15% 20%, rgba(255,255,255,0.06), transparent 40%), radial-gradient(circle at 85% 30%, rgba(255,200,150,0.05), transparent 45%), linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)',
          backgroundSize: '100% 100%, 100% 100%, 44px 44px, 44px 44px',
          backgroundPosition: 'center, center, center, center'
        }} />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <nav className="text-sm text-gray-400 mb-6">
          <Link to="/" className="hover:text-white">Главная</Link>
          <span className="mx-2">/</span>
          <a href="#roadmap" className="hover:text-white">Roadmap</a>
          <span className="mx-2">/</span>
          <span className="text-white">{roadmap.title}</span>
        </nav>

        {/* Hero header */}
        <div className="relative mb-6">
          <div className={`absolute -inset-1 rounded-2xl bg-gradient-to-r ${headerGradient} opacity-20 blur-lg`} />
          <div className="relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6 flex items-center gap-4">
            <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${headerGradient} flex items-center justify-center text-black/90`}>
              <Icon className="w-8 h-8" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-black">Roadmap: {roadmap.title}</h1>
              <p className="text-gray-300">Структура от нуля до уверенного уровня. Примерное время: ~{totalHours || '—'} ч.</p>
            </div>
          </div>
        </div>

        {/* Summary chips */}
        {Array.isArray(roadmap.points) && roadmap.points.length > 0 && (
          <div className="mb-8 flex flex-wrap items-center gap-2">
            {roadmap.points.map((p, i) => (
              <span key={i} className={`px-3 py-1 rounded-full text-sm border border-white/10 bg-white/5`}>{p}</span>
            ))}
          </div>
        )}

        {/* Stage navigation */}
        {presentStages.length > 1 && (
          <div className="mb-8 flex flex-wrap gap-2">
            {presentStages.map((stage) => (
              <a key={stage} href={`#stage-${stage}`} className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 text-sm">
                {STAGE_LABEL[stage] || stage}
                <span className="ml-2 text-xs text-gray-300">~{grouped[stage].hours} ч</span>
              </a>
            ))}
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="relative rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md shadow-[0_30px_80px_rgba(0,0,0,0.35)]">
            <div className={`absolute -inset-0.5 rounded-2xl bg-gradient-to-r ${headerGradient} opacity-10 blur-lg`} />
            <div className="relative">
              <h2 className="text-xl font-bold mb-4">Модули</h2>
              {presentStages.length > 0 ? (
                <div className="space-y-8">
                  {presentStages.map((stageKey) => (
                    <section key={stageKey} id={`stage-${stageKey}`} className="scroll-mt-24">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <span className={`inline-flex items-center justify-center px-2 py-0.5 rounded-md text-xs font-semibold bg-gradient-to-r ${headerGradient} text-black/80`}>{STAGE_LABEL[stageKey] || stageKey}</span>
                          <span className="text-xs text-gray-400">~{grouped[stageKey].hours} ч</span>
                        </div>
                      </div>
                      <div className="space-y-5">
                        {grouped[stageKey].items.map((m, idx) => (
                          <div key={m.id} className="rounded-xl border border-white/10 bg-white/5 p-4">
                            <div className="flex items-center justify-between mb-3">
                              <div className="flex items-center gap-2">
                                <span className={`inline-flex items-center justify-center w-7 h-7 text-xs font-bold rounded-full bg-gradient-to-br ${headerGradient} text-black/80`}>{idx + 1}</span>
                                <h3 className="font-semibold">{m.title}</h3>
                              </div>
                              <span className="text-sm text-gray-300">~{m.hours} ч</span>
                            </div>
                            <ul className="space-y-2 text-gray-200">
                              {m.topics.map((t, i) => (
                                <li key={i} className="flex flex-col gap-1">
                                  <div className="flex items-start justify-between gap-3">
                                    <span className="leading-relaxed">{t.title}</span>
                                    {'hours' in t && (
                                      <span className="text-xs text-gray-400 whitespace-nowrap">{t.hours} ч</span>
                                    )}
                                  </div>
                                  {Array.isArray(t.subtopics) && t.subtopics.length > 0 && (
                                    <ul className="ml-4 list-disc text-gray-400 text-sm space-y-1">
                                      {t.subtopics.map((s, si) => (
                                        <li key={si}>{s}</li>
                                      ))}
                                    </ul>
                                  )}
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </section>
                  ))}
                </div>
              ) : (
                <ol className="space-y-3 text-gray-200">
                  {roadmap.points.map((p, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className={`mt-0.5 inline-flex items-center justify-center w-6 h-6 text-xs font-bold rounded-full bg-gradient-to-br ${headerGradient} text-black/80`}>{i+1}</span>
                      <span className="leading-relaxed">{p}</span>
                    </li>
                  ))}
                </ol>
              )}
            </div>
          </div>

          <div className="relative rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md shadow-[0_30px_80px_rgba(0,0,0,0.35)]">
            <div className={`absolute -inset-0.5 rounded-2xl bg-gradient-to-r ${headerGradient} opacity-10 blur-lg`} />
            <div className="relative">
              <h2 className="text-xl font-bold mb-4">Ресурсы</h2>
              <ul className="space-y-2">
                {roadmap.links.map((l, i) => (
                  <li key={i}>
                    <a href={l.url} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-red-300 hover:text-red-200">
                      {l.label} <ChevronRight className="w-4 h-4" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap gap-3">
          {ROADMAPS.map((r) => (
            <Link
              key={r.id}
              to={`/roadmap/${r.id}`}
              className={`px-3 py-2 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10`}
            >
              {r.title}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
