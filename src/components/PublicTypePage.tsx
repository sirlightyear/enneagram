import React from 'react';
import { ArrowRight, ArrowUpRight, Brain, Check, AlertCircle, Heart, ShieldCheck, Sparkles, Target, Users } from 'lucide-react';
import { typeDetails, TypeDetail } from '../data/typeDetails_en';

interface PublicTypePageProps {
  typeNumber: number;
}

const typeLabels: Record<number, string> = {
  1: 'The Reformer',
  2: 'The Helper',
  3: 'The Achiever',
  4: 'The Individualist',
  5: 'The Investigator',
  6: 'The Loyalist',
  7: 'The Enthusiast',
  8: 'The Challenger',
  9: 'The Peacemaker',
};

const typeColors: Record<number, { accent: string; soft: string; line: string }> = {
  1: { accent: '#0f766e', soft: '#dff6ef', line: '#8ed8c7' },
  2: { accent: '#b45309', soft: '#fff1d6', line: '#f1c47a' },
  3: { accent: '#2563eb', soft: '#e6efff', line: '#a9c5ff' },
  4: { accent: '#be123c', soft: '#ffe5eb', line: '#f4a7b8' },
  5: { accent: '#475569', soft: '#e9eef3', line: '#b8c5d1' },
  6: { accent: '#15803d', soft: '#e3f5e9', line: '#9bd6aa' },
  7: { accent: '#d97706', soft: '#fff0d9', line: '#f0c178' },
  8: { accent: '#c2410c', soft: '#ffeadf', line: '#f2b293' },
  9: { accent: '#0f766e', soft: '#e1f5f0', line: '#9edbcf' },
};

const getTypeFromPath = (typeNumber: number): TypeDetail => typeDetails[`Type ${typeNumber}`];

const TypeLink: React.FC<{ number: number; current: number }> = ({ number, current }) => (
  <a
    href={`/enneagram/type-${number}`}
    className={`group flex items-center justify-between rounded-xl border px-4 py-3 transition-all duration-200 ${
      current === number
        ? 'border-slate-900 bg-slate-900 text-white shadow-lg'
        : 'border-slate-200 bg-white text-slate-700 hover:-translate-y-0.5 hover:border-slate-400 hover:shadow-md'
    }`}
  >
    <span>
      <span className="block text-xs font-semibold uppercase tracking-[0.18em] opacity-60">Type {number}</span>
      <span className="block font-semibold">{typeLabels[number]}</span>
    </span>
    <ArrowUpRight className="h-4 w-4 opacity-60 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
  </a>
);

const List: React.FC<{ items: string[]; color: string }> = ({ items, color }) => (
  <ul className="space-y-3">
    {items.map((item) => (
      <li key={item} className="flex items-start gap-3 text-sm leading-6 text-slate-700">
        <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full" style={{ backgroundColor: color }}>
          <Check className="h-3 w-3 text-white" />
        </span>
        <span>{item}</span>
      </li>
    ))}
  </ul>
);

const PublicTypePage: React.FC<PublicTypePageProps> = ({ typeNumber }) => {
  const detail = getTypeFromPath(typeNumber);
  const colors = typeColors[typeNumber];

  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.title = `${detail.type}: ${detail.title} | Kruso Enneagram`;
  }, [detail.type, detail.title]);

  return (
    <div className="min-h-screen bg-[#f5f7f4] text-slate-900">
      <header className="border-b border-slate-200 bg-[#f5f7f4]/95 px-5 py-5 backdrop-blur md:px-10">
        <div className="mx-auto flex max-w-6xl items-center justify-between">
          <a href="/?lang=en" aria-label="Back to the Enneagram test">
            <img src="/-K_-_Colored(2).png" alt="Kruso" className="h-10 w-auto" />
          </a>
          <a href="/?lang=en" className="inline-flex items-center gap-2 text-sm font-semibold text-slate-700 transition-colors hover:text-slate-950">
            Take the test <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </header>

      <main>
        <section className="overflow-hidden border-b border-slate-200 px-5 pb-14 pt-10 md:px-10 md:pb-20 md:pt-16">
          <div className="mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-[1.05fr_0.95fr]">
            <div>
              <p className="mb-5 text-sm font-bold uppercase tracking-[0.22em]" style={{ color: colors.accent }}>Enneagram personality types</p>
              <h1 className="max-w-2xl text-5xl font-bold leading-[1.05] tracking-[-0.04em] text-slate-950 md:text-7xl">
                {detail.type}<span className="block" style={{ color: colors.accent }}>{detail.title}</span>
              </h1>
              <p className="mt-7 max-w-xl text-lg leading-8 text-slate-600">{detail.worldview}</p>
              <div className="mt-8 flex flex-wrap gap-2">
                {detail.qualities.map((quality) => <span key={quality} className="rounded-full border px-3 py-1.5 text-sm font-medium" style={{ borderColor: colors.line, backgroundColor: colors.soft }}>{quality}</span>)}
              </div>
            </div>
            <div className="relative flex min-h-[330px] items-center justify-center overflow-hidden rounded-[2rem]" style={{ backgroundColor: colors.soft }}>
              <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full border-[20px] opacity-20" style={{ borderColor: colors.accent }} />
              <div className="absolute -bottom-12 -left-12 h-48 w-48 rounded-full border-[16px] opacity-10" style={{ borderColor: colors.accent }} />
              <div className="relative z-10 flex flex-col items-center text-center">
                <span className="text-8xl font-bold leading-none tracking-tight" style={{ color: colors.accent }}>{typeNumber}</span>
                <span className="mt-3 text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Enneagram</span>
              </div>
            </div>
          </div>
        </section>

        <section className="px-5 py-14 md:px-10 md:py-20">
          <div className="mx-auto max-w-6xl">
            <div className="mb-10 max-w-3xl">
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-teal-700">A short introduction</p>
              <h2 className="text-3xl font-bold tracking-tight text-slate-950 md:text-4xl">What is the Enneagram?</h2>
              <p className="mt-4 text-lg leading-8 text-slate-600">The Enneagram is a framework for understanding personality and motivation. It describes nine different ways of seeing the world, each with its own core drive, strengths and challenges. It is a tool for reflection, not a label or a diagnosis.</p>
            </div>

            <div className="grid gap-5 md:grid-cols-3">
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200"><Brain className="mb-5 h-6 w-6 text-teal-700" /><h3 className="font-bold">See the pattern</h3><p className="mt-2 text-sm leading-6 text-slate-600">Notice what tends to drive your attention, choices and reactions.</p></div>
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200"><Heart className="mb-5 h-6 w-6 text-rose-600" /><h3 className="font-bold">Build understanding</h3><p className="mt-2 text-sm leading-6 text-slate-600">Use the language of types to create more empathy in teams and relationships.</p></div>
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200"><Sparkles className="mb-5 h-6 w-6 text-amber-600" /><h3 className="font-bold">Make room for growth</h3><p className="mt-2 text-sm leading-6 text-slate-600">Every type has both natural gifts and opportunities to develop.</p></div>
            </div>

            <div className="mt-8 grid gap-5 md:grid-cols-2">
              <div className="rounded-2xl bg-white p-7 shadow-sm ring-1 ring-slate-200"><div className="mb-5 flex items-center gap-3"><Target className="h-5 w-5 text-rose-600" /><h2 className="text-xl font-bold">Core motivation</h2></div><div className="grid gap-5 sm:grid-cols-2"><div><p className="mb-2 text-xs font-bold uppercase tracking-[0.16em] text-slate-500">Basic fear</p><p className="leading-7 text-slate-700">{detail.basicFear}</p></div><div><p className="mb-2 text-xs font-bold uppercase tracking-[0.16em] text-slate-500">Basic desire</p><p className="leading-7 text-slate-700">{detail.basicDesire}</p></div></div></div>
              <div className="rounded-2xl bg-white p-7 shadow-sm ring-1 ring-slate-200"><div className="mb-5 flex items-center gap-3"><AlertCircle className="h-5 w-5 text-amber-600" /><h2 className="text-xl font-bold">Focus and inner dialogue</h2></div><p className="leading-7 text-slate-700">{detail.focus}</p><p className="mt-4 border-l-2 pl-4 italic leading-7 text-slate-600" style={{ borderColor: colors.accent }}>{detail.innerDialogue}</p></div>
            </div>
          </div>
        </section>

        <section className="bg-white px-5 py-14 md:px-10 md:py-20">
          <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2">
            <div><p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-teal-700">The upside</p><h2 className="mb-6 text-3xl font-bold tracking-tight">Strengths and qualities</h2><List items={detail.personalStrengths} color={colors.accent} /></div>
            <div><p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-amber-700">The growth edge</p><h2 className="mb-6 text-3xl font-bold tracking-tight">Challenges and blind spots</h2><List items={detail.blindSpots} color="#d97706" /><p className="mt-6 rounded-xl bg-amber-50 p-4 text-sm leading-6 text-amber-900"><strong>Passion / vice:</strong> {detail.passion}</p></div>
          </div>
        </section>

        <section className="px-5 py-14 md:px-10 md:py-20">
          <div className="mx-auto max-w-6xl">
            <div className="mb-8 flex items-center gap-3"><Users className="h-6 w-6 text-blue-700" /><h2 className="text-3xl font-bold tracking-tight">Type {typeNumber} at work and in relationships</h2></div>
            <div className="grid gap-5 md:grid-cols-3"><div className="rounded-2xl bg-white p-6 ring-1 ring-slate-200"><h3 className="font-bold">Relationships</h3><p className="mt-3 text-sm leading-7 text-slate-600">{detail.relationships.generalApproach}</p></div><div className="rounded-2xl bg-white p-6 ring-1 ring-slate-200"><h3 className="font-bold">Approach to work</h3><p className="mt-3 text-sm leading-7 text-slate-600">{detail.relationships.workApproach}</p></div><div className="rounded-2xl bg-white p-6 ring-1 ring-slate-200"><h3 className="font-bold">As a team player</h3><p className="mt-3 text-sm leading-7 text-slate-600">{detail.relationships.teamPlayer}</p></div></div>
            <div className="mt-5 grid gap-5 md:grid-cols-2"><div className="rounded-2xl p-6" style={{ backgroundColor: colors.soft }}><h3 className="font-bold" style={{ color: colors.accent }}>If you are a {detail.type}</h3><div className="mt-4"><List items={detail.ifYouAreThisType} color={colors.accent} /></div></div><div className="rounded-2xl bg-slate-900 p-6 text-white"><h3 className="font-bold">If you work with a {detail.type}</h3><ul className="mt-4 space-y-3">{detail.ifYouWorkWithThisType.map((item) => <li key={item} className="flex items-start gap-3 text-sm leading-6 text-slate-200"><ShieldCheck className="mt-1 h-4 w-4 shrink-0 text-teal-300" />{item}</li>)}</ul></div></div>
          </div>
        </section>

        <section className="border-y border-slate-200 bg-[#e8f1ed] px-5 py-14 md:px-10 md:py-20">
          <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2"><div><p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-rose-700">Movement</p><h2 className="text-3xl font-bold tracking-tight">Under stress and when secure</h2><p className="mt-4 leading-7 text-slate-600">The Enneagram also describes familiar patterns that can appear when we feel pressured or safe.</p></div><div className="grid gap-4 sm:grid-cols-2"><div className="rounded-2xl bg-white p-5 ring-1 ring-slate-200"><p className="text-xs font-bold uppercase tracking-[0.15em] text-rose-700">Under stress</p><p className="mt-3 text-sm leading-6 text-slate-700">Moves towards <strong>{detail.underStress.movesToType}</strong>. {detail.underStress.description}</p></div><div className="rounded-2xl bg-white p-5 ring-1 ring-slate-200"><p className="text-xs font-bold uppercase tracking-[0.15em] text-teal-700">When secure</p><p className="mt-3 text-sm leading-6 text-slate-700">Moves towards <strong>{detail.whenSecure.movesToType}</strong>. {detail.whenSecure.description}</p></div></div></div>
        </section>

        <section className="px-5 py-14 md:px-10 md:py-20"><div className="mx-auto max-w-6xl"><div className="rounded-[2rem] bg-slate-950 px-7 py-10 text-white md:flex md:items-center md:justify-between md:gap-10 md:px-12"><div><p className="text-sm font-bold uppercase tracking-[0.2em] text-teal-300">Go a little deeper</p><h2 className="mt-3 text-3xl font-bold tracking-tight">Want to discover your own type?</h2><p className="mt-3 max-w-xl leading-7 text-slate-300">Take the Kruso Enneagram test and get a personal result with a detailed profile. It takes approximately 10–15 minutes.</p></div><a href="/?lang=en" className="mt-7 inline-flex shrink-0 items-center justify-center gap-3 rounded-xl bg-white px-6 py-3 font-bold text-slate-950 transition-transform hover:-translate-y-0.5 md:mt-0">Take the test <ArrowRight className="h-4 w-4" /></a></div><div className="mt-12"><div className="mb-5 flex items-center justify-between"><h2 className="text-xl font-bold">Explore the nine types</h2><span className="text-sm text-slate-500">Share any page directly</span></div><div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">{Array.from({ length: 9 }, (_, index) => <TypeLink key={index + 1} number={index + 1} current={typeNumber} />)}</div></div></div></section>
      </main>

      <footer className="border-t border-slate-200 px-5 py-8 text-center text-sm text-slate-500 md:px-10">Copyright 2026 – Kruso A/S – enneagram@kruso.dk</footer>
    </div>
  );
};

export default PublicTypePage;
