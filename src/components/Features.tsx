import { ComponentType } from 'react';
import { Layers, Users, Lightbulb, Calendar, BarChart4, Bookmark, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';
import { Feature } from '../types';

const featuresData: Feature[] = [
  {
    id: 1,
    tag: 'Fluxo de produção',
    title: '6 etapas do rascunho ao publicado, prontas para usar.',
    description: 'Ideia, Roteiro, Gravação, Edição, Pronto, Publicado. Cada conteúdo sabe onde está e qual é o próximo passo.',
    result: 'Fim do "onde estava mesmo isso?"',
  },
  {
    id: 2,
    tag: 'Solo ou com equipe de até 3 pessoas',
    title: 'Convide assistente, social media ou editor.',
    description: 'Todo mundo vê o status de cada conteúdo, sem WhatsApp de alinhamento.',
    result: 'Sem alinhamento manual, sem WhatsApp',
    isFeatured: true,
  },
  {
    id: 3,
    tag: 'Banco de ideias',
    title: 'Registre ideias a qualquer hora',
    description: 'No consultório, na mesa ou entre atendimentos. Digite sua ideia rapidamente em texto. Quando decidir produzir, a pauta estará pronta.',
    result: 'Sempre com pauta, sem bloqueio criativo',
  },
  {
    id: 4,
    tag: 'Calendário editorial',
    title: 'Visão semanal de tudo que precisa sair',
    description: 'Planeje com antecedência, publique com previsibilidade.',
    result: 'Da reatividade para a previsibilidade',
  },
  {
    id: 5,
    tag: 'Insights de constância',
    title: 'Quantas semanas seguidas você publicou',
    description: 'Qual canal está performando. Onde está travando. A constância deixa de ser sensação e vira dado.',
    result: 'Progresso real que alimenta o hábito',
  },
  {
    id: 6,
    tag: 'Biblioteca de publicações',
    title: 'Tudo que você publicou',
    description: 'Com métricas reais por post. Entenda o que gerou mais conexão com seu público e repita com mais intenção.',
    result: 'Estratégia baseada em dados, não em achismo',
  },
];

const featureIcons: { [key: number]: ComponentType<any> } = {
  1: Layers,
  2: Users,
  3: Lightbulb,
  4: Calendar,
  5: BarChart4,
  6: Bookmark,
};

export default function Features() {
  return (
    <section className="bg-brand-neutral-100/50 py-24 px-6 md:px-12" id="funcionalidades">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20 animate-fade-in">
          <span className="inline-block text-xs font-bold text-brand-green-500 tracking-widest uppercase mb-3 text-center">
            Funcionalidades
          </span>
          <h2 className="font-display font-medium text-3xl md:text-4xl text-brand-neutral-800 leading-tight tracking-tight mb-4 text-center">
            Tudo que você precisa.<br />
            <span className="text-brand-green-500">Nada do que não precisa.</span>
          </h2>
          <p className="text-base text-brand-neutral-500 font-sans leading-relaxed text-center">
            Tudo que um especialista precisa para construir presença digital com consistência.
          </p>
        </div>

        {/* Features Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuresData.map((feat) => {
            const Icon = featureIcons[feat.id];
            return (
              <motion.div
                key={feat.id}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.4 }}
                whileHover={{ y: -4, boxShadow: '0 12px 24px rgba(43,114,74,0.06)' }}
                className={`rounded-2xl p-8 border ${
                  feat.isFeatured
                    ? 'bg-brand-green-500 border-brand-green-500 text-white shadow-lg shadow-brand-green-500/10'
                    : 'bg-white border-brand-neutral-200 text-brand-neutral-800'
                }`}
              >
                {/* Icon wrapper */}
                <div
                  className={`w-11 h-11 rounded-xl flex items-center justify-center mb-6 shrink-0 ${
                    feat.isFeatured ? 'bg-white/12' : 'bg-brand-green-50 text-brand-green-500'
                  }`}
                  style={feat.isFeatured ? { backgroundColor: 'rgba(255,255,255,0.12)' } : undefined}
                >
                  <Icon className={`w-5 h-5 ${feat.isFeatured ? 'text-white' : ''}`} />
                </div>

                {/* Subtitle Tag */}
                <span
                  className={`inline-block text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded mb-3 leading-normal ${
                    feat.isFeatured ? 'bg-white/12 text-brand-green-200' : 'bg-brand-green-100/40 text-brand-green-600'
                  }`}
                  style={feat.isFeatured ? { backgroundColor: 'rgba(255,255,255,0.12)' } : undefined}
                >
                  {feat.tag}
                </span>

                {/* Title */}
                <h3 className="font-sans font-semibold text-lg leading-snug mb-3 text-current">
                  {feat.title}
                </h3>

                {/* Description */}
                <p
                  className={`text-sm leading-relaxed mb-6 font-sans ${
                    feat.isFeatured ? 'text-brand-green-50/80' : 'text-brand-neutral-500'
                  }`}
                >
                  {feat.description}
                </p>

                {/* Horizontal divider */}
                <hr className={`border-t mb-5 ${feat.isFeatured ? 'border-white/12' : 'border-brand-neutral-200'}`} />

                {/* Result checkmark */}
                <div
                  className={`flex items-center gap-2 text-xs font-bold leading-none ${
                    feat.isFeatured ? 'text-brand-green-100' : 'text-brand-green-600'
                  }`}
                >
                  <CheckCircle2 className="w-4 h-4 text-brand-green-500 filter" style={feat.isFeatured ? { color: '#C0DFD0' } : { color: '#2B724A' }} />
                  {feat.result}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
