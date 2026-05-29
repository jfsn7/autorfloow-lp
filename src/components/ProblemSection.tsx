import { Inbox, FileText, Target, ListTodo } from 'lucide-react';
import { motion } from 'motion/react';

export default function ProblemSection() {
  const cards = [
    {
      num: '01',
      icon: Inbox,
      title: 'Capturar',
      description: 'Você pode digitar e registrar qualquer ideia rapidamente no AutorFloow.',
      pill: 'Captura instantânea'
    },
    {
      num: '02',
      icon: FileText,
      title: 'Salvar ideias',
      description: 'Crie e salve seus insights e dúvidas reais de clientes que, no futuro, podem se transformar em posts de alta autoridade.',
      pill: 'Banco de ideias'
    },
    {
      num: '03',
      icon: Target,
      title: 'Escolher post',
      description: 'Você navega pelo seu banco de ideias salvas e escolhe o que quer transformar em post.',
      pill: 'Controle completo'
    },
    {
      num: '04',
      icon: ListTodo,
      title: 'Produzir',
      description: 'Quando você escolhe, transforma a ideia salva em um roteiro estruturado com canal e formato definidos.',
      pill: 'Roteiro pronto para uso'
    }
  ];

  return (
    <section className="bg-[#FAF9F6] py-24 md:py-32 px-6 md:px-12 relative overflow-hidden border-b border-brand-neutral-200" id="problema">
      {/* Premium Radial Glowing Lights - Aura Aesthetic with Brand Green */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[20%] right-[-10%] w-[600px] h-[600px] bg-brand-green-50/30 rounded-full filter blur-[100px]" />
        <div className="absolute bottom-[10%] left-[-10%] w-[450px] h-[450px] bg-brand-green-100/20 rounded-full filter blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="max-w-4xl text-left mb-20 md:mb-24">
          <span className="font-mono text-xs font-semibold text-brand-green-500 uppercase tracking-widest mb-4 inline-block">
            POR QUE ISSO IMPORTA
          </span>
          <h2 className="font-display font-medium text-4xl sm:text-5xl lg:text-[56px] text-brand-neutral-800 tracking-tight leading-[1.1] mb-6">
            Você sabe mais do que qualquer <br className="hidden sm:inline" />
            concorrente seu. <span className="text-brand-neutral-400 block mt-2 text-3xl md:text-5xl">O problema é que esse conhecimento fica preso em você.</span>
          </h2>
          <p className="text-base md:text-lg text-brand-neutral-500 font-sans leading-relaxed max-w-2xl">
            Chega em insights no meio de uma consulta, notas de voz no carro depois de uma audiência, referências de artigos técnicos, casos reais que valeriam um post. O AutorFloow transforma esse conhecimento disperso em conteúdo que constrói sua autoridade sem você precisar ser um criador de conteúdo.
          </p>
        </div>

        {/* Dynamic Cards Grid & Horizontal Timeline */}
        <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Dashed connecting timeline line for desktop (positioned perfectly across grid items) */}
          <div className="hidden lg:block absolute left-[12.5%] right-[12.5%] top-7 h-[1px] border-t border-dashed border-brand-green-200/50 z-0" />

          {cards.map((card, idx) => {
            const IconComponent = card.icon;
            return (
              <div key={idx} className="flex flex-col items-center relative z-10 group w-full">
                
                {/* Timeline Circle with glowing double rings in Brand Green */}
                <div className="mb-6 relative z-10 flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full bg-brand-green-50 border border-brand-green-150 flex items-center justify-center p-0.5 shadow-[0_4px_16px_rgba(43,114,74,0.05)] group-hover:scale-105 transition-transform duration-300">
                    <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center border border-brand-green-100/20">
                      <div className="w-9 h-9 rounded-full bg-brand-green-500 flex items-center justify-center text-white font-mono text-xs font-bold shadow-md shadow-brand-green-500/10">
                        {card.num}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Main Card */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className="w-full bg-white/95 backdrop-blur-md border border-brand-neutral-200/40 rounded-[24px] p-8 pb-8 flex flex-col items-center justify-center text-center min-h-[340px] transition-all hover:border-brand-green-200 hover:shadow-[0_12px_45px_rgba(27,30,26,0.04)] duration-300"
                >
                  <div className="flex flex-col items-center">
                    {/* Centered Icon badge with brand green */}
                    <div className="w-14 h-14 rounded-2xl bg-brand-green-50 border border-brand-green-100 flex items-center justify-center text-brand-green-500 mb-6 group-hover:bg-brand-green-500 group-hover:text-white transition-colors duration-300">
                      <IconComponent className="w-6 h-6 stroke-[1.8]" />
                    </div>
                    
                    {/* Title */}
                    <h3 className="font-sans font-semibold text-xl text-brand-neutral-800 mb-3 group-hover:text-brand-green-500 transition-colors duration-300">
                      {card.title}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-sm text-brand-neutral-500 font-sans leading-relaxed">
                      {card.description}
                    </p>
                  </div>
 
                  {/* Bottom Pill */}
                  <div className="mt-6">
                    <span className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-brand-green-50 border border-brand-green-100/30 rounded-full text-[11px] font-medium text-brand-green-600 shadow-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-green-500 animate-pulse" />
                      {card.pill}
                    </span>
                  </div>
                </motion.div>

              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

