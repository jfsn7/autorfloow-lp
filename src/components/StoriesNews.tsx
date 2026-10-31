import { CalendarDays, Percent, Copy, Blocks, FolderSearch, ArrowRightLeft } from 'lucide-react';
import { motion } from 'motion/react';

const BLOCKS = [
  {
    label: 'NOVO: STORIES',
    title: 'Sua semana de Stories,',
    accentTitle: 'de segunda a domingo.',
    description: 'Veja os Stories de cada dia em uma única tela e acompanhe a taxa de retenção: o alcance do último Story comparado ao do primeiro. Assim você enxerga quanta audiência mantém ao longo da sequência e ajusta o próximo roteiro.',
    quote: '"Posto Stories no improviso e não sei se a audiência chega até o último."',
    pills: [
      { icon: CalendarDays, text: 'Semana de segunda a domingo' },
      { icon: Percent, text: 'Taxa de retenção' },
      { icon: Copy, text: 'Copiar descrição' },
    ],
    image: '/images/af-stories.png',
    alt: 'Tela de Stories do AutorFloow com a semana de segunda a domingo',
    path: 'WORKSPACE / STORIES',
    reverse: false,
  },
  {
    label: 'NOVO: NEWS',
    title: 'Escreva a newsletter',
    accentTitle: 'sem sair do AutorFloow.',
    description: 'Um editor de blocos simples, com pastas para organizar as edições, busca e filtro por status (rascunho, em andamento e publicada). Marque uma ideia como Newsletter e a edição já nasce no News. Escreva em tela cheia, sem distração, e copie o texto na hora de enviar.',
    quote: '"Guardo as ideias em um lugar, escrevo a newsletter em outro e perco o fio."',
    pills: [
      { icon: Blocks, text: 'Editor de blocos' },
      { icon: FolderSearch, text: 'Pastas, busca e status' },
      { icon: ArrowRightLeft, text: 'Ideia vira edição' },
    ],
    image: '/images/af-news.png',
    alt: 'Editor de newsletter do AutorFloow com pastas e blocos',
    path: 'WORKSPACE / NEWS',
    reverse: true,
  },
];

export default function StoriesNews() {
  return (
    <section className="bg-white py-24 md:py-32 px-6 md:px-12 border-t border-b border-brand-neutral-200" id="stories-news">
      <div className="max-w-7xl mx-auto">
        {/* Cabeçalho */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <span className="font-mono text-xs font-semibold text-brand-green-500 uppercase tracking-widest mb-4 inline-block">
            STORIES E NEWSLETTER
          </span>
          <h2 className="font-display font-medium text-4xl sm:text-5xl lg:text-[52px] text-brand-neutral-800 tracking-tight leading-[1.1] mb-6">
            Stories e newsletter <br className="hidden sm:inline" />
            <span className="text-brand-green-500">também entram no fluxo.</span>
          </h2>
          <p className="text-base md:text-lg text-brand-neutral-500 font-sans leading-relaxed">
            Planeje a semana de Stories e escreva a newsletter no mesmo lugar em que organiza o resto do conteúdo.
          </p>
        </div>

        <div className="flex flex-col gap-20 md:gap-28">
          {BLOCKS.map((block) => (
            <div key={block.label} className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              {/* Texto */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.6 }}
                className={block.reverse ? 'lg:order-2' : ''}
              >
                <span className="inline-flex items-center gap-2 font-mono text-[11px] font-bold text-brand-green-700 uppercase tracking-widest bg-brand-green-50 border border-brand-green-100 rounded-full px-3.5 py-1.5 mb-6">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-green-500" />
                  {block.label}
                </span>

                <h3 className="font-display font-semibold text-3xl md:text-[38px] text-brand-neutral-800 tracking-tight leading-[1.1] mb-5">
                  {block.title} <span className="text-brand-green-500">{block.accentTitle}</span>
                </h3>

                <p className="text-sm md:text-base text-brand-neutral-500 font-sans leading-relaxed mb-6 max-w-xl">
                  {block.description}
                </p>

                <div className="mb-7 px-5 py-4 bg-brand-neutral-50 border-l-4 border-brand-green-500 rounded-r-2xl italic text-brand-neutral-600 text-sm leading-relaxed max-w-xl">
                  <span className="not-italic font-semibold text-brand-neutral-800">Você já pensou assim?</span> {block.quote}
                </div>

                <div className="flex flex-wrap gap-2.5">
                  {block.pills.map((pill, k) => (
                    <div key={k} className="flex items-center gap-2 bg-brand-green-50/50 border border-brand-green-100 rounded-full px-3.5 py-1.5">
                      <pill.icon className="w-3.5 h-3.5 text-brand-green-600" />
                      <span className="text-[10px] font-bold text-brand-green-700 uppercase tracking-wider font-mono">{pill.text}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Imagem */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className={`group ${block.reverse ? 'lg:order-1' : ''}`}
              >
                <div className="relative h-[300px] md:h-[400px] rounded-[28px] overflow-hidden bg-brand-green-50 border border-brand-neutral-200/70">
                  <div
                    className="absolute inset-0 bg-brand-green-100/70"
                    style={{ clipPath: block.reverse ? 'polygon(0 0, 52% 0, 88% 100%, 0 100%)' : 'polygon(48% 0, 100% 0, 100% 100%, 12% 100%)' }}
                  />
                  <div
                    className={`absolute top-14 bottom-0 bg-white border border-brand-neutral-200 rounded-t-2xl shadow-[0_24px_60px_rgba(27,30,26,0.14)] overflow-hidden transition-transform duration-700 ease-out group-hover:-translate-y-2 ${
                      block.reverse ? 'right-8 left-[-3%] rounded-bl-none' : 'left-8 right-[-18%] rounded-br-none'
                    }`}
                  >
                    <div className="bg-brand-neutral-50 border-b border-brand-neutral-200 py-2.5 px-4 flex items-center gap-3">
                      <div className="flex gap-1.5 shrink-0">
                        <div className="w-2 h-2 rounded-full bg-[#FC5C65]/80" />
                        <div className="w-2 h-2 rounded-full bg-[#FED330]/80" />
                        <div className="w-2 h-2 rounded-full bg-[#26DE81]/80" />
                      </div>
                      <div className="text-[9px] font-mono font-bold text-brand-neutral-400 tracking-wider truncate">{block.path}</div>
                    </div>
                    <img src={block.image} alt={block.alt} className="w-full h-auto block" referrerPolicy="no-referrer" />
                  </div>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
