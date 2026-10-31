import { useEffect, useState } from 'react';
import { Check, Flame } from 'lucide-react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';

const STAGES = [
  { name: 'A produzir', dot: 'bg-brand-neutral-400' },
  { name: 'Roteiro', dot: 'bg-[#4A6B85]' },
  { name: 'Gravação', dot: 'bg-[#4A6B85]' },
  { name: 'Edição', dot: 'bg-[#4A6B85]' },
  { name: 'Pronto', dot: 'bg-[#DFB13C]' },
  { name: 'Publicado', dot: 'bg-brand-green-500' },
];

const LAST = STAGES.length - 1;
const COL_W = 196; // largura de cada coluna do fluxo (px)
const STEP_MS = 1900;
const HOLD_MS = 3800;

export default function HeroJourney() {
  const reduce = useReducedMotion();
  const [step, setStep] = useState(0);

  useEffect(() => {
    if (reduce) return;
    const t = setTimeout(
      () => setStep((s) => (s >= LAST ? 0 : s + 1)),
      step === LAST ? HOLD_MS : step === 0 ? STEP_MS + 600 : STEP_MS
    );
    return () => clearTimeout(t);
  }, [step, reduce]);

  // Quem prefere menos movimento vê o card parado em "Pronto"
  const current = reduce ? 4 : step;
  const published = current === LAST;
  const weeks = published ? 6 : 5;

  return (
    <div
      role="img"
      aria-label="Um conteúdo do AutorFloow avançando pelas seis etapas do fluxo, da ideia até publicado, e a constância subindo de 5 para 6 semanas seguidas."
      className="relative w-full h-[470px] md:h-[500px] select-none"
    >
      {/* Faixas diagonais do design system, em verde claro (cantos de 4px) */}
      <div className="absolute top-[6px] bottom-0 right-0 w-[88%] overflow-hidden rounded-[4px]">
        <div className="absolute inset-y-0 left-[24%] -right-[30%] rounded-[4px] bg-brand-green-50 origin-top-left -skew-x-[15deg]" />
      </div>
      <div className="absolute top-[6px] bottom-0 right-0 w-[52%] overflow-hidden rounded-[4px]">
        <div className="absolute inset-y-0 left-[28%] -right-[30%] rounded-[4px] bg-brand-green-100/60 origin-top-left -skew-x-[10deg]" />
      </div>

      {/* Constância */}
      <div className="absolute bottom-[80px] md:bottom-[104px] right-3 md:right-5 z-20 bg-white border border-brand-neutral-200 rounded-2xl px-3.5 py-2.5 shadow-[0_12px_30px_rgba(27,30,26,0.10)]">
        <p className="text-[9px] font-bold uppercase tracking-widest text-brand-green-600 leading-none mb-2">Constância</p>
        <div className="flex items-center gap-1 mb-2">
          {Array.from({ length: 8 }).map((_, i) => (
            <motion.span
              key={i}
              animate={{
                backgroundColor: i < weeks ? '#2B724A' : '#E3E5E0',
                scale: i === 5 && published ? [1, 1.7, 1] : 1,
              }}
              transition={{ duration: 0.5 }}
              className="w-2 h-2 rounded-full"
            />
          ))}
        </div>
        <p className="flex items-center gap-1.5 text-[12px] font-bold text-brand-neutral-800 font-sans leading-none whitespace-nowrap">
          <Flame className="w-3.5 h-3.5 text-[#DFB13C]" />
          <AnimatePresence mode="wait" initial={false}>
            <motion.span
              key={weeks}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.25 }}
            >
              {weeks} semanas seguidas
            </motion.span>
          </AnimatePresence>
        </p>
      </div>

      {/* Fluxo ao fundo: desliza para manter a etapa atual sob o card */}
      <div
        aria-hidden
        className="absolute inset-0 overflow-hidden"
        style={{
          WebkitMaskImage: 'linear-gradient(to right, transparent 0, #000 14%, #000 86%, transparent 100%)',
          maskImage: 'linear-gradient(to right, transparent 0, #000 14%, #000 86%, transparent 100%)',
        }}
      >
      <motion.div
        className="absolute top-0 bottom-0 left-1/2 flex"
        style={{ width: COL_W * STAGES.length }}
        animate={{ x: -(current + 0.5) * COL_W }}
        transition={reduce ? { duration: 0 } : { type: 'spring', stiffness: 70, damping: 18, mass: 1 }}
      >
        {STAGES.map((stage, i) => {
          const active = i === current;
          return (
            <div key={stage.name} className="h-full px-2.5 pt-12" style={{ width: COL_W }}>
              <motion.div
                animate={{ opacity: active ? 1 : 0.6 }}
                transition={{ duration: 0.5 }}
                className={`h-[250px] md:h-[280px] rounded-2xl border px-3 pt-3 transition-colors duration-500 ${
                  active ? 'bg-white border-brand-green-100 shadow-[0_20px_50px_rgba(43,114,74,0.14)]' : 'bg-white/60 border-brand-neutral-200/70'
                }`}
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className={`w-2 h-2 rounded-full ${stage.dot}`} />
                  <span className="text-[11px] font-bold text-brand-neutral-700 font-sans">{stage.name}</span>
                </div>
                {!active && (
                  <div className="space-y-2">
                    {Array.from({ length: (i % 3) + 1 }).map((_, k) => (
                      <div key={k} className="h-12 rounded-xl bg-brand-neutral-100" />
                    ))}
                  </div>
                )}
              </motion.div>
            </div>
          );
        })}
      </motion.div>
      </div>

      {/* O card que viaja */}
      <motion.div
        key={current}
        initial={reduce ? false : { y: 0, scale: 1 }}
        animate={reduce ? undefined : { y: [0, -10, 0], scale: [1, 1.03, 1] }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="absolute left-1/2 -translate-x-1/2 top-[112px] md:top-[124px] z-10 w-[252px]"
      >
        <div className="bg-white rounded-[10px] p-4 border border-brand-neutral-200 shadow-[0_30px_60px_rgba(27,30,26,0.18)]">
          <div className="flex flex-wrap items-center gap-1.5 mb-3">
            <span className="text-[10px] font-bold text-pink-700 bg-pink-50 rounded-full px-2.5 py-1">Instagram</span>
            <span className="text-[10px] font-bold text-brand-neutral-600 bg-brand-neutral-100 rounded-full px-2.5 py-1">Carrossel</span>
            {!published && (
              <span className="text-[10px] font-bold text-[#8A6A14] bg-[#F8EDD0] rounded-full px-2.5 py-1 whitespace-nowrap">prazo hoje</span>
            )}
          </div>

          <p className="font-display font-bold text-[15px] md:text-base text-brand-neutral-800 leading-snug tracking-tight mb-4">
            Meu primeiro post sobre autoridade digital
          </p>

          {/* checklist 0/5 → 5/5, como no app */}
          <div className="flex items-center gap-1 mb-1.5">
            {Array.from({ length: 5 }).map((_, i) => (
              <span
                key={i}
                className={`h-1.5 flex-1 rounded-full transition-colors duration-500 ${i < current ? 'bg-brand-green-500' : 'bg-brand-neutral-200'}`}
              />
            ))}
          </div>
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-semibold text-brand-neutral-400 font-sans">{Math.min(current, 5)}/5 etapas</span>
            <span
              className={`inline-flex items-center gap-1 text-[10px] font-bold rounded-full px-2.5 py-1 ${
                published ? 'bg-brand-green-500 text-white' : 'bg-brand-green-50 text-brand-green-700'
              }`}
            >
              {published && <Check className="w-3 h-3" />}
              {STAGES[current].name}
            </span>
          </div>
        </div>
      </motion.div>

      {/* Linha do fluxo */}
      <div aria-hidden className="absolute left-6 right-6 bottom-10 z-10">
        <div className="relative flex items-center justify-between">
          <span className="absolute left-0 right-0 top-1/2 h-px bg-brand-neutral-300" />
          <motion.span
            className="absolute left-0 top-1/2 h-px bg-brand-green-500"
            animate={{ width: `${(current / LAST) * 100}%` }}
            transition={reduce ? { duration: 0 } : { duration: 0.8, ease: 'easeInOut' }}
          />
          {STAGES.map((stage, i) => (
            <span key={stage.name} className="relative flex flex-col items-center gap-2">
              <span
                className={`w-3 h-3 rounded-full border-2 transition-all duration-500 ${
                  i <= current ? 'bg-brand-green-500 border-brand-green-500' : 'bg-brand-neutral-50 border-brand-neutral-300'
                } ${i === current ? 'ring-4 ring-brand-green-500/20' : ''}`}
              />
              <span className={`hidden sm:block text-[9px] font-semibold transition-colors duration-500 ${i <= current ? 'text-brand-neutral-800' : 'text-brand-neutral-400'}`}>
                {stage.name}
              </span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
