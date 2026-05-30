import { Check, Shield } from 'lucide-react';
import { motion } from 'motion/react';

export default function Pricing() {

  return (
    <section className="bg-brand-neutral-100/55 py-32 px-6 md:px-12 border-t border-brand-neutral-200" id="precos">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <h2 className="font-display font-medium text-4xl md:text-5xl text-brand-neutral-800 tracking-tight leading-tight mb-6">
            Escolha o plano certo<br />
            <span className="text-brand-green-500">para a sua fase de crescimento.</span>
          </h2>
          <p className="text-lg text-brand-neutral-500 font-sans leading-relaxed">
            Experimente <strong className="text-brand-green-500">14 dias grátis</strong> sem compromisso. Acesso completo desde o primeiro dia.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                {/* Plan 1 - SOLO (ANNUAL ONLY) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -4, shadow: '0 20px 48px rgba(43,114,74,0.04)' }}
            className="bg-white border border-brand-neutral-200 rounded-3xl p-10 relative flex flex-col transition-all overflow-hidden"
          >
            <div className="flex items-start justify-between mb-8">
              <div>
                <h3 className="font-sans font-semibold text-2xl text-brand-neutral-800 tracking-tight">Especialista Solo</h3>
                <p className="text-sm text-brand-neutral-450 mt-1.5 font-sans leading-relaxed text-brand-neutral-500">
                  Para advogados, nutricionistas, engenheiros e consultores que produzem sozinhos e querem um sistema que funciona sem depender de ninguém.
                </p>
              </div>
            </div>

            <hr className="border-t border-brand-neutral-100 my-6" />

            <div className="mb-10">
              <p className="text-xs font-bold text-brand-neutral-400 uppercase tracking-widest mb-4">Estrutura inclusa:</p>
              <ul className="space-y-4">
                {['Sem limite de rascunhos ou ideias', 'Banco de ideias personalizado', 'Painel de constância e streak', 'Histórico como biblioteca inteligente'].map((feat, idx) => (
                  <li key={idx} className="flex items-center gap-3.5 text-sm text-brand-neutral-700">
                    <span className="w-5 h-5 rounded-full bg-brand-green-50 flex items-center justify-center text-brand-green-600 shrink-0">
                      <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                    </span>
                    {feat}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-auto">
              <div className="mb-6">
                <span className="block text-xs text-brand-neutral-400 uppercase tracking-widest mb-1.5 font-bold">Investimento anual</span>
                <div className="flex items-center gap-2 mb-2 select-none">
                  <span className="text-xs text-brand-neutral-400 line-through">De R$ 147/mês</span>
                  <span className="text-[10px] font-bold text-brand-green-700 bg-brand-green-50 px-2 py-0.5 rounded">
                    Preço Founder
                  </span>
                </div>
                <div className="flex items-baseline gap-1.5">
                  <span className="text-sm font-semibold text-brand-neutral-500 font-display">R$</span>
                  <span className="text-5xl font-display font-bold text-brand-green-600 leading-none tracking-tight">
                    97
                  </span>
                  <span className="text-sm font-semibold text-brand-neutral-500">/mês</span>
                </div>
                <span className="block text-[11px] text-brand-neutral-400 mt-2 font-sans font-medium">
                  Cancele quando quiser
                </span>
              </div>

              <button
                onClick={() => {}}
                className="relative block w-full text-center bg-[#2B724A] hover:bg-[#22533A] border border-[#DFB13C]/30 font-sans font-bold text-white py-4 px-6 rounded-full transition-all duration-350 shadow-[0_4px_14px_rgba(43,114,74,0.15)] hover:shadow-[0_0_24px_rgba(223,177,60,0.65)] hover:-translate-y-0.5 active:translate-y-0 cursor-pointer text-xs md:text-[13px] tracking-widest uppercase select-none overflow-hidden group"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-[#DFB13C]/10 via-transparent to-[#DFB13C]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                <span className="relative z-10 text-white group-hover:text-white transition-colors duration-200">
                  Começar agora
                </span>
              </button>
            </div>
          </motion.div>

          {/* Plan 2 - TEAMS / TIMES (ANNUAL ONLY) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -4, shadow: '0 24px 60px rgba(43,114,74,0.3)' }}
            className="bg-[#2B724A] border border-white/15 rounded-3xl p-10 relative flex flex-col transition-all overflow-hidden"
          >
            {/* Styles for the button glow tracer */}
            <style>{`
              @keyframes teams-sweep {
                from {
                  stroke-dashoffset: 0;
                }
                to {
                  stroke-dashoffset: -320;
                }
              }
              .teams-tracer {
                stroke-dasharray: 60 260;
                stroke-dashoffset: 0;
              }
              .group:hover .teams-tracer {
                animation: teams-sweep 2.5s linear infinite;
              }
            `}</style>

            <div className="flex items-start justify-between mb-8">
              <div>
                <h3 className="font-sans font-semibold text-2xl text-white tracking-tight">Especialista + Equipe</h3>
                <p className="text-sm mt-1.5 font-sans leading-relaxed text-white/85">
                  Para especialistas que trabalham com assistente, social media ou editor. Todos no mesmo fluxo, sem WhatsApp de alinhamento.
                </p>
              </div>
            </div>

            <hr className="border-t border-white/15 my-6" />

            <div className="mb-10">
              <p className="text-xs font-bold text-white uppercase tracking-widest mb-4 font-mono">Estrutura equipes:</p>
              <ul className="space-y-4">
                {['Até 3 usuários simultâneos', 'Gestão de convites rápidos', 'Aprovação integrada de roteiros', 'Tudo contido no plano Solo'].map((feat, idx) => (
                  <li key={idx} className="flex items-center gap-3.5 text-sm text-white/95">
                    <span className="w-5 h-5 rounded-full bg-white/15 flex items-center justify-center text-white shrink-0">
                      <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                    </span>
                    {feat}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-auto">
              <div className="mb-6">
                <span className="block text-xs text-white uppercase tracking-widest mb-1.5 font-bold">Investimento anual</span>
                <div className="flex items-center gap-2 mb-2 select-none">
                  <span className="text-xs text-white/65 line-through">De R$ 297/mês</span>
                  <span className="text-[10px] font-bold text-white bg-white/10 border border-white/25 px-2 py-0.5 rounded">
                    Preço Founder
                  </span>
                </div>
                <div className="flex items-baseline gap-1.5">
                  <span className="text-sm font-semibold text-white/80 font-display">R$</span>
                  <span className="text-5xl font-display font-bold text-white leading-none tracking-tight">
                    197
                  </span>
                  <span className="text-sm font-semibold text-white/80">/mês</span>
                </div>
                <span className="block text-[11px] text-white/70 mt-2 font-sans font-medium">
                  Cancele quando quiser
                </span>
              </div>

              <button
                onClick={() => {}}
                className="relative block w-full text-center bg-white hover:bg-[#FAF9F6] border border-transparent font-sans font-bold text-[#2B724A] py-4 px-6 rounded-full transition-all duration-350 shadow-[0_4px_14px_rgba(255,255,255,0.15)] hover:shadow-[0_0_30px_rgba(255,255,255,0.9)] active:shadow-[0_0_40px_rgba(223,177,60,0.85)] hover:-translate-y-0.5 active:translate-y-0 cursor-pointer text-xs md:text-[13px] tracking-widest uppercase select-none overflow-hidden group"
              >
                {/* Embedded style background light beam */}
                <span className="absolute inset-0 bg-gradient-to-r from-[#DFB13C]/5 via-transparent to-[#DFB13C]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                {/* Ambient glow tracer on hover/click mapped to image reference */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none rounded-full overflow-visible" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect
                    className="teams-tracer opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    x="0.75"
                    y="0.75"
                    width="calc(100% - 1.5px)"
                    height="calc(100% - 1.5px)"
                    rx="999px"
                    stroke="url(#teams-btn-glow-gradient)"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                  <defs>
                    <linearGradient id="teams-btn-glow-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#DFB13C" />
                      <stop offset="50%" stopColor="#2B724A" stopOpacity="0.4" />
                      <stop offset="100%" stopColor="transparent" />
                    </linearGradient>
                  </defs>
                </svg>

                <span className="relative z-10 text-[#2B724A] group-hover:text-[#22533A] transition-colors duration-200">
                  Começar agora
                </span>
              </button>
            </div>
          </motion.div>
        </div>

        <div className="mt-16 max-w-2xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-5 text-center sm:text-left bg-white border border-brand-neutral-200 rounded-xl p-6.5">
          <Shield className="w-7 h-7 text-brand-green-500 shrink-0" />
          <p className="text-sm text-brand-neutral-600 font-sans leading-relaxed font-medium">
            14 dias grátis, sem cartão. Acesso completo desde o primeiro dia
          </p>
        </div>

      </div>
    </section>
  );
}
