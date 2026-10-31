import { useState, FormEvent } from 'react';
import { 
  Plus, 
  ChevronRight, 
  Flame, 
  Check, 
  TrendingUp, 
  Calendar, 
  BarChart3, 
  BookOpen, 
  Star, 
  Sparkles, 
  FolderHeart,
  Undo2,
  Filter
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Task } from '../types';
import GlowButton from './GlowButton';

const STATUS_ORDER: Task['status'][] = ['ideia', 'roteiro', 'gravacao', 'edicao', 'publicado'];

const STEPS = [
  {
    id: '01',
    label: 'Passo 1: Produção em fluxo',
    title: 'Do rascunho ao publicado,',
    accentTitle: 'sem perder nenhuma etapa.',
    description: 'Seis etapas em colunas: A produzir, Roteiro, Gravação, Edição, Pronto e Publicado. Você vê em que ponto está cada conteúdo, filtra por canal, formato e tag, e sabe qual é o próximo passo do dia. Copie a descrição com um clique na hora de publicar.',
    quote: '"Começo a semana com boa intenção. Na quinta, o conteúdo ainda está na minha cabeça."',
    pills: [
      { icon: BarChart3, text: 'Fluxo visual de produção' },
      { icon: ChevronRight, text: 'Avance etapas com um clique' },
      { icon: Filter, text: 'Filtro por canal, formato e tag' },
    ],
    image: '/images/af-producao.png',
    alt: 'Dashboard de Produção AutorFloow',
    path: 'WORKSPACE / PRODUÇÃO',
    panel: 'bg-brand-neutral-100',
    accent: 'bg-brand-green-100/70',
  },
  {
    id: '02',
    label: 'Passo 2: Banco de ideias',
    title: 'Capture suas ideias',
    accentTitle: 'no instante em que surgem.',
    description: 'Registre rascunhos, referências e dúvidas de clientes em segundos. Para cada ideia, você define canal, formato, título, descrição, prioridade e a série a que ela pertence. Filtre e ordene por prioridade, sequência e canal. Quando decidir produzir, o botão "Transformar em post" leva a ideia direto para a coluna "A produzir" e já inicia o fluxo de produção.',
    quote: '"Tinha uma ideia ótima ontem. Agora não lembro mais onde anotei."',
    pills: [
      { icon: Plus, text: 'Registre antes que suma' },
      { icon: Sparkles, text: 'Séries, prioridade e canal' },
      { icon: Check, text: 'Da ideia ao post em um clique' },
    ],
    image: '/images/af-ideias.png',
    alt: 'Banco de Ideias AutorFloow',
    path: 'WORKSPACE / IDEIAS',
    panel: 'bg-brand-green-50',
    accent: 'bg-brand-green-100/70',
  },
  {
    id: '03',
    label: 'Passo 3: Ritmo e calendário',
    title: 'Saiba',
    accentTitle: 'há quantas semanas você publica.',
    description: 'O termômetro de ritmo mostra suas semanas seguidas de publicação e alerta quando a pausa começa, antes que ela vire hábito. O calendário editorial mostra a semana e o mês com tudo o que precisa sair: posts, Stories e edições da newsletter.',
    quote: '"Sei que deveria estar publicando mais. Mas nem sei há quantas semanas estou sem postar nada."',
    pills: [
      { icon: Flame, text: 'Semanas consecutivas' },
      { icon: Calendar, text: 'Alerta de inércia' },
      { icon: Sparkles, text: 'Calendário com posts, Stories e News' },
    ],
    image: '/images/af-insights.png',
    alt: 'Insights e Métricas AutorFloow',
    path: 'WORKSPACE / INSIGHTS',
    panel: 'bg-brand-green-50',
    accent: 'bg-brand-green-100/70',
  },
  {
    id: '04',
    label: 'Passo 4: Biblioteca',
    title: 'Entenda o que funcionou.',
    accentTitle: 'Repita o que trouxe resultado.',
    description: 'Depois de publicar, você registra as métricas de cada post na Biblioteca. Com o histórico, vê quais temas e formatos geraram mais conexão e repete o que deu certo.',
    quote: '"Publico, mas não sei quais posts funcionam de verdade. Sigo no escuro."',
    pills: [
      { icon: BookOpen, text: 'Histórico completo' },
      { icon: TrendingUp, text: 'Métricas por post' },
      { icon: Check, text: 'Repita o que funcionou' },
    ],
    image: '/images/af-biblioteca.png',
    alt: 'Biblioteca de Conteúdo AutorFloow',
    path: 'WORKSPACE / BIBLIOTECA',
    panel: 'bg-brand-neutral-100',
    accent: 'bg-brand-green-100/70',
  },
];

export default function HowItWorks() {
  // Shared interactive state across steps to simulate the app!
  const [tasks, setTasks] = useState<Task[]>([
    {
      id: '1',
      title: '3 erros cruciais que médicos e dentistas cometem no Instagram',
      channel: 'Instagram',
      format: 'Reels',
      date: '12 de Maio',
      status: 'ideia',
      authorInitial: 'C',
    },
    {
      id: '2',
      title: 'Por que especialistas de renome não vendem consulta barata',
      channel: 'LinkedIn',
      format: 'Texto',
      date: '15 de Maio',
      status: 'ideia',
      authorInitial: 'C',
    },
    {
      id: '3',
      title: 'Como construir autoridade profissional sem depender de indicações',
      channel: 'Instagram',
      format: 'Carrossel',
      date: '16 de Maio',
      status: 'roteiro',
      authorInitial: 'C',
      isStale: true,
      staleDays: 3,
    },
    {
      id: '4',
      title: 'Minha rotina real de gravação ágil no consultório',
      channel: 'Instagram',
      format: 'Reels',
      date: '10 de Maio',
      status: 'gravacao',
      authorInitial: 'C',
    },
    {
      id: '5',
      title: 'Caso Clínico: Como expliquei uma cirurgia complexa de modo leigo',
      channel: 'Instagram',
      format: 'Reels',
      date: '11 de Maio',
      status: 'edicao',
      authorInitial: 'C',
    },
    {
      id: '6',
      title: 'Por que profissionais seniores travam e procrastinam na hora de gravar vídeos',
      channel: 'LinkedIn',
      format: 'Texto',
      date: '09 de Maio',
      status: 'publicado',
      authorInitial: 'C',
      metricLikes: 91,
      metricReach: 1450,
      metricEngagement: '16.5%',
    },
  ]);

  // States for interactive simulations
  const [newIdeaTitle, setNewIdeaTitle] = useState('');
  const [newIdeaChannel, setNewIdeaChannel] = useState<'Instagram' | 'LinkedIn'>('Instagram');
  const [newIdeaFormat, setNewIdeaFormat] = useState<'Reels' | 'Carrossel' | 'Texto'>('Reels');
  
  const [streakCount, setStreakCount] = useState(6);
  const [publishedThisWeek, setPublishedThisWeek] = useState(3);
  const [pulseButton, setPulseButton] = useState(false);
  const [tempFeedback, setTempFeedback] = useState<string | null>(null);

  const [libraryFilter, setLibraryFilter] = useState<'todos' | 'Instagram' | 'LinkedIn'>('todos');

  // Suggestions list for Step 2
  const suggestions = [
    { title: 'Estudo de Caso: O protocolo que reduziu recuperação clínica em 30%', channel: 'LinkedIn' as const, format: 'Texto' as const },
    { title: '3 mitos sobre check-ups preventivos que pacientes high-ticket precisam ouvir', channel: 'Instagram' as const, format: 'Carrossel' as const },
    { title: 'Como responder elegantemente à frase "seu concorrente cobra mais barato"', channel: 'Instagram' as const, format: 'Reels' as const },
  ];

  // Handle adding an idea
  const handleAddIdea = (e?: FormEvent) => {
    if (e) e.preventDefault();
    if (!newIdeaTitle.trim()) return;

    const newTask: Task = {
      id: Date.now().toString(),
      title: newIdeaTitle,
      channel: newIdeaChannel,
      format: newIdeaFormat,
      date: 'Hoje',
      status: 'ideia',
      authorInitial: 'C',
    };

    setTasks((prev) => [newTask, ...prev]);
    setNewIdeaTitle('');
    triggerFeedback('Ideia adicionada à coluna A produzir!');
  };

  // Add a suggestion directly
  const handleAddSuggestion = (sug: typeof suggestions[0]) => {
    const newTask: Task = {
      id: Date.now().toString(),
      title: sug.title,
      channel: sug.channel,
      format: sug.format,
      date: 'Hoje',
      status: 'ideia',
      authorInitial: 'C',
    };

    setTasks((prev) => [newTask, ...prev]);
    triggerFeedback('Sugestão clínica adicionada!');
  };

  // Trigger brief alert feedback in mock
  const triggerFeedback = (msg: string) => {
    setTempFeedback(msg);
    setTimeout(() => setTempFeedback(null), 3000);
  };

  // Move a task through kanban columns
  const handleProgressTask = (taskId: string) => {
    setTasks((prev) =>
      prev.map((task) => {
        if (task.id === taskId) {
          const currentIndex = STATUS_ORDER.indexOf(task.status);
          const nextIndex = Math.min(currentIndex + 1, STATUS_ORDER.length - 1);
          const nextStatus = STATUS_ORDER[nextIndex];
          
          if (task.status === nextStatus) return task; // already published

          let updatedTask = { ...task, status: nextStatus };
          
          if (nextStatus === 'publicado') {
            updatedTask.metricLikes = Math.floor(Math.random() * 80) + 40;
            updatedTask.metricReach = Math.floor(Math.random() * 2500) + 600;
            updatedTask.metricEngagement = `${(Math.random() * 10 + 8).toFixed(1)}%`;
            
            // Increment streaks
            setPublishedThisWeek((p) => p + 1);
            setStreakCount((s) => s + 1);
            triggerFeedback('Post publicado na biblioteca e métricas atualizadas!');
          } else {
            triggerFeedback(`Post avançado para ${nextStatus.toUpperCase()}`);
          }
          return updatedTask;
        }
        return task;
      })
    );
  };

  // Revert a task status for easier experimentation
  const handleResetTask = (taskId: string) => {
    setTasks((prev) =>
      prev.map((task) => {
        if (task.id === taskId) {
          triggerFeedback('Status do post resetado para A PRODUZIR');
          return { ...task, status: 'ideia' };
        }
        return task;
      })
    );
  };

  // Simulated rapid one-click publication to show off Step 3 metrics
  const simulatePublication = () => {
    setPulseButton(true);
    setTimeout(() => setPulseButton(false), 800);
    setStreakCount((prev) => prev + 1);
    setPublishedThisWeek((prev) => prev + 1);

    const randomTopics = [
      'Análise de Caso: O procedimento anatômico que mudou minha visão sobre o tratamento',
      'Por que a pressa digital destrói o posicionamento médico premium',
      '3 condutas pós-cirúrgicas que aceleram a cicatrização em 40%',
    ];
    
    const generatedTask: Task = {
      id: Date.now().toString(),
      title: randomTopics[Math.floor(Math.random() * randomTopics.length)],
      channel: Math.random() > 0.5 ? 'Instagram' : 'LinkedIn',
      format: 'Texto',
      date: 'Hoje',
      status: 'publicado',
      authorInitial: 'C',
      metricLikes: Math.floor(Math.random() * 110) + 30,
      metricReach: Math.floor(Math.random() * 3200) + 900,
      metricEngagement: `${(Math.random() * 14 + 6).toFixed(1)}%`,
    };
    
    setTasks((prev) => [generatedTask, ...prev]);
    triggerFeedback('Simulação publicada com sucesso!');
  };

  const getTasksByStatus = (status: Task['status']) => {
    return tasks.filter((task) => task.status === status);
  };

  // Step 3 weeks helper
  const weeks = [
    { num: 14, active: true },
    { num: 15, active: true },
    { num: 16, active: true },
    { num: 17, active: true },
    { num: 18, active: true },
    { num: 19, active: true, current: true },
    { num: 20, active: false },
    { num: 21, active: false },
  ];

  return (
    <div className="w-full bg-[#FAF9F6] text-brand-neutral-800" id="como-funciona">
      
      {/* top hero */}
      <div className="max-w-7xl mx-auto text-left pt-24 pb-12 px-6 md:px-12">
        <span className="font-mono text-xs font-semibold text-brand-green-500 uppercase tracking-widest mb-4 inline-block">
          COMO FUNCIONA
        </span>
        <h2 className="font-display font-medium text-4xl sm:text-5xl lg:text-[56px] text-brand-neutral-800 tracking-tight leading-[1.1] mb-6">
          Com o AutorFloow, <br className="hidden sm:inline" />
          <span className="text-brand-green-500">sua rotina de conteúdo cabe na agenda.</span>
        </h2>
        <p className="text-base md:text-lg text-brand-neutral-500 font-sans leading-relaxed max-w-2xl font-normal">
          Quatro passos pensados para quem atende, advoga ou consulta o dia inteiro e não tem tempo para aprender ferramenta nova.
        </p>
      </div>

      {/* PASSOS: cards com imagem + explicação */}
      <section className="px-6 md:px-12 pb-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          {STEPS.map((step, i) => (
            <motion.article
              key={step.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, delay: (i % 2) * 0.1 }}
              className="group flex flex-col bg-white border border-brand-neutral-200 rounded-[32px] p-3 md:p-4 shadow-[0_24px_60px_rgba(27,30,26,0.06)] hover:shadow-[0_32px_70px_rgba(27,30,26,0.1)] transition-shadow duration-500"
            >
              {/* Painel da imagem */}
              <div className={`relative h-[260px] md:h-[340px] rounded-[22px] overflow-hidden border border-brand-neutral-200/70 ${step.panel}`}>
                {/* Forma diagonal do design system */}
                <div
                  className={`absolute inset-0 ${step.accent}`}
                  style={{ clipPath: 'polygon(48% 0, 100% 0, 100% 100%, 12% 100%)' }}
                />

                {/* Número do passo */}
                <span className="absolute top-5 left-6 z-10 font-mono text-xs font-bold tracking-widest text-brand-green-700 bg-white/90 border border-brand-neutral-200 rounded-full px-3 py-1">
                  {step.id}
                </span>

                {/* Tela do produto, cortada na borda do painel */}
                <div className="absolute left-8 right-[-18%] top-16 bottom-0 bg-white border border-brand-neutral-200 rounded-t-2xl rounded-br-none shadow-[0_24px_60px_rgba(27,30,26,0.14)] overflow-hidden transition-transform duration-700 ease-out group-hover:-translate-y-2 group-hover:-translate-x-1">
                  <div className="bg-brand-neutral-50 border-b border-brand-neutral-200 py-2.5 px-4 flex items-center gap-3">
                    <div className="flex gap-1.5 shrink-0">
                      <div className="w-2 h-2 rounded-full bg-[#FC5C65]/80" />
                      <div className="w-2 h-2 rounded-full bg-[#FED330]/80" />
                      <div className="w-2 h-2 rounded-full bg-[#26DE81]/80" />
                    </div>
                    <div className="text-[9px] font-mono font-bold text-brand-neutral-400 tracking-wider truncate">{step.path}</div>
                  </div>
                  <img
                    src={step.image}
                    alt={step.alt}
                    className="w-full h-auto block"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>

              {/* Conteúdo */}
              <div className="flex flex-col flex-1 px-4 md:px-5 pt-8 pb-5">
                <span className="font-mono text-[11px] font-semibold text-brand-green-500 uppercase tracking-widest mb-3 inline-block">
                  {step.label}
                </span>

                <h3 className="font-display font-semibold text-2xl md:text-[30px] text-brand-neutral-800 tracking-tight leading-[1.12] mb-4">
                  {step.title} <span className="text-brand-green-500">{step.accentTitle}</span>
                </h3>

                <p className="text-sm md:text-[15px] text-brand-neutral-500 font-sans leading-relaxed mb-6">
                  {step.description}
                </p>

                <div className="mb-6 px-5 py-4 bg-brand-neutral-50 border-l-4 border-brand-green-500 rounded-r-2xl italic text-brand-neutral-600 text-sm leading-relaxed">
                  <span className="not-italic font-semibold text-brand-neutral-800">Você já pensou assim?</span> {step.quote}
                </div>

                <div className="flex flex-wrap gap-2.5 mt-auto">
                  {step.pills.map((pill, k) => (
                    <div key={k} className="flex items-center gap-2 bg-brand-green-50/50 border border-brand-green-100 rounded-full px-3.5 py-1.5">
                      <pill.icon className="w-3.5 h-3.5 text-brand-green-600" />
                      <span className="text-[10px] font-bold text-brand-green-700 uppercase tracking-wider font-mono">{pill.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* Modern Centered Sticky Footer/Action Bar for the Steps Flow */}
      <div className="bg-[#FAF9F6] pt-12 pb-24 text-center">
        <GlowButton
          href="https://app.autorfloow.com/cadastro"
          className="inline-block !px-10 !py-4.5 !text-sm md:!text-base !min-w-[260px]"
        >
          Testar grátis
        </GlowButton>
        <p className="text-sm text-brand-neutral-500 mt-4 font-medium font-sans">
          14 dias grátis, sem cartão, acesso completo.
        </p>
      </div>

    </div>
  );
}
