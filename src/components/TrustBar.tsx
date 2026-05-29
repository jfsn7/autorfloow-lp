import { Lightbulb, Workflow, Award, SearchCheck } from 'lucide-react';
import { motion } from 'motion/react';

const transformations = [
  {
    num: '01',
    icon: Lightbulb,
    badge: 'ANTES',
    title: 'Suas ideias somem no WhatsApp',
    description: 'Tudo que você ia postar, o insight na consulta, a referência da aula, a ideia no carro, desaparece antes de virar conteúdo.',
  },
  {
    num: '02',
    icon: Workflow,
    badge: 'COM O AUTORFLOOW',
    title: 'Cada ideia tem um destino',
    description: 'Você captura, organiza e encontra qualquer conteúdo em segundos. O banco de ideias trabalha enquanto você atende, advoga ou treina.',
  },
  {
    num: '03',
    icon: Award,
    badge: 'O RESULTADO',
    title: 'Constância real, visível, acumulada',
    description: 'Semanas seguidas publicando. Autoridade construída. Clientes chegando porque te reconhecem como referência na sua área.',
  },
];

export default function TrustBar() {
  return (
    <section className="bg-white py-24 md:py-32 px-6 md:px-12 relative overflow-hidden border-t border-b border-brand-neutral-200" id="muda-tudo">
      {/* Premium Radial Glowing Lights - Aura Aesthetic with Brand Green */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[20%] left-[-10%] w-[600px] h-[600px] bg-brand-green-50/40 rounded-full filter blur-[120px]" />
        <div className="absolute bottom-[10%] right-[-10%] w-[450px] h-[450px] bg-brand-green-100/20 rounded-full filter blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="max-w-4xl text-left mb-16 md:mb-20">
          <span className="font-mono text-xs font-semibold text-brand-green-500 uppercase tracking-widest mb-4 inline-block">
            A TRANSFORMAÇÃO
          </span>
          <h2 className="font-display font-medium text-4xl sm:text-5xl lg:text-[56px] text-brand-neutral-800 tracking-tight leading-[1.1] mb-6">
            O que muda quando você <br className="hidden sm:inline" />
            para de improvisar.
          </h2>
          <p className="text-base md:text-lg text-brand-neutral-500 font-sans leading-relaxed max-w-2xl">
            Você continua sendo advogado, nutricionista ou engenheiro. O AutorFloow cuida de fazer sua produção acontecer toda semana, sem depender de inspiração.
          </p>
        </div>

        {/* Premium Transformation Grid - 3 Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {transformations.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`group bg-[#FAF9F6]/50 backdrop-blur-md border border-brand-neutral-200/50 rounded-2xl p-6 flex flex-col items-start transition-all hover:border-brand-green-300 hover:shadow-[0_12px_40px_rgba(27,30,26,0.04)] hover:-translate-y-0.5 duration-300 relative overflow-hidden ${
                  index === 2 ? 'sm:col-span-2 sm:w-[calc(50%-10px)] sm:mx-auto lg:col-span-1 lg:w-full lg:mx-0' : ''
                }`}
              >
                {/* Clean circle badge with prioritária brand green */}
                <div className="w-10 h-10 rounded-full bg-brand-green-50 border border-brand-green-100 flex items-center justify-center text-brand-green-500 mb-5 group-hover:bg-brand-green-500 group-hover:text-white transition-all duration-300">
                  <IconComponent className="w-4.5 h-4.5" />
                </div>
                
                {/* Subtitle/Badge */}
                <span className="font-mono text-[10px] font-bold tracking-widest text-brand-neutral-400 uppercase mb-2">
                  {item.num} {item.badge}
                </span>

                <h3 className="font-sans font-semibold text-base text-brand-neutral-800 mb-2 group-hover:text-brand-green-500 transition-colors duration-300 leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs text-brand-neutral-500 font-sans leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
