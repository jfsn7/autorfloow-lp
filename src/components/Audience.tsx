import { Check } from 'lucide-react';
import { motion } from 'motion/react';

const profiles = [
  {
    index: '01',
    category: 'Saúde & Clínicos',
    sub: 'DENTISTAS, MÉDICOS, NUTRICIONISTAS, PSICÓLOGOS',
    details: 'Para quem quer uma agenda com mais clientes particulares, construída pela autoridade que o conteúdo consistente gera, não por indicação aleatória.',
  },
  {
    index: '02',
    category: 'Advocacia & Consultoria',
    sub: 'ADVOGADOS, CONSULTORES E PERSONAIS',
    details: 'Para quem quer ser a primeira referência que vem à cabeça quando alguém precisa de um especialista da sua área, sem depender só de indicação.',
  },
  {
    index: '03',
    category: 'Educação & Mentorias',
    sub: 'MENTORES E TREINADORES',
    details: 'Converta seu método em pílulas de conhecimento que educam e qualificam seus futuros alunos. Do rascunho de aula ao post qualificado em escala.',
  },
  {
    index: '04',
    category: 'Projetos de Alto Valor',
    sub: 'ENGENHEIROS, ARQUITETOS E CORRETORES',
    details: 'Para quem vende projetos de alto valor e precisa que sua presença digital reflita a mesma precisão e excelência técnica que entrega aos clientes.',
  },
];

export default function Audience() {
  return (
    <section className="bg-white py-32 px-6 md:px-12 border-b border-brand-neutral-200" id="para-quem">
      <div className="max-w-6xl mx-auto">
        
        {/* Apple/Airbnb-Style Split Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 mb-24 items-start">
          <div className="lg:col-span-12 lg:text-center max-w-4xl mx-auto">
            <h2 className="font-display font-medium text-4xl md:text-6xl text-brand-neutral-800 tracking-tight leading-tight mb-8">
              Feito para quem é <br className="hidden md:inline" />
              <span className="text-brand-green-500">especialista primeiro.</span>
            </h2>
            <p className="text-lg md:text-xl text-brand-neutral-500 leading-relaxed font-sans max-w-2xl mx-auto">
              O AutorFloow não foi feito para quem quer viralizar. Foi feito para dentistas, médicos, advogados e consultores que querem construir autoridade real.
            </p>
          </div>
        </div>

        {/* High-End Two-by-Two Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {profiles.map((aud, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-20px' }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="border border-brand-neutral-200 rounded-2xl p-10 hover:shadow-[0_12px_40px_rgba(0,0,0,0.015)] transition-all hover:border-brand-neutral-800/10 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-4 mb-8">
                  {/* Elegant Numbering */}
                  <span className="font-display text-lg font-bold text-brand-neutral-400 bg-brand-neutral-50 border border-brand-neutral-200 rounded-full w-9 h-9 flex items-center justify-center shrink-0">
                    {aud.index}
                  </span>
                  <div>
                    <h3 className="font-sans font-semibold text-xl text-brand-neutral-800 tracking-tight leading-tight">
                      {aud.category}
                    </h3>
                    <p className="text-xs text-brand-neutral-400 font-sans tracking-wide uppercase font-bold mt-1">
                      {aud.sub}
                    </p>
                  </div>
                </div>

                <p className="text-sm md:text-base text-brand-neutral-500 leading-relaxed font-sans">
                  {aud.details}
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-brand-neutral-200/50 flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-brand-green-50 flex items-center justify-center text-brand-green-600">
                  <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                </span>
                <span className="text-xs font-semibold text-brand-neutral-600">
                  Aderência imediata ao ecossistema
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modern Editorial Callout block */}
        <div className="mt-24 border-l-4 border-brand-green-500 pl-8 md:pl-12 py-10 bg-brand-neutral-50 rounded-r-2xl max-w-4xl">
          <p className="text-xl md:text-2xl text-brand-neutral-800 leading-relaxed font-sans font-medium">
            Você passou anos construindo conhecimento técnico. O <strong>AutorFloow</strong> existe para que esse conhecimento chegue até quem precisa de você, sem você precisar virar influencer para isso.
            <span className="block mt-6 text-base md:text-lg text-brand-green-600 font-semibold tracking-tight">
              Para nutricionistas, personais, engenheiros, arquitetos, psicólogos, corretores ou consultores.
            </span>
          </p>
        </div>

      </div>
    </section>
  );
}
