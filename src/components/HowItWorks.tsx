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
  AlertCircle
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Task } from '../types';
import GlowButton from './GlowButton';

const STATUS_ORDER: Task['status'][] = ['ideia', 'roteiro', 'gravacao', 'edicao', 'publicado'];

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
    triggerFeedback('Ideia adicionada à coluna 1!');
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
          triggerFeedback('Status do post resetado para IDEIA');
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
          <span className="text-brand-green-500">é diferente.</span>
        </h2>
        <p className="text-base md:text-lg text-brand-neutral-500 font-sans leading-relaxed max-w-2xl font-normal">
          Quatro passos construídos para a rotina de quem tem agenda cheia, seja no consultório, no escritório ou na academia, e zero tempo para aprender ferramenta nova.
        </p>
      </div>

      {/* STEP 1: PRODUÇÃO INTELIGENTE (Kanban Board) */}
      <section className="relative py-24 px-6 md:px-12 border-b border-brand-neutral-200/50 overflow-hidden">
        <div className="max-w-5xl mx-auto flex flex-col items-center text-center">
          
          {/* Text details Top */}
          <div className="mb-16 max-w-3xl">
            <span className="font-mono text-xs font-semibold text-brand-green-500 uppercase tracking-widest mb-4 inline-block">
              PASSO 1: PRODUÇÃO INTELIGENTE
            </span>

            <h3 className="font-sans font-semibold text-3xl md:text-[42px] text-brand-neutral-800 tracking-tight leading-[1.1] mb-6">
              Do rascunho ao publicado. <br />
              <span className="text-brand-green-500 font-medium font-display">Sem perder nenhuma etapa pelo caminho.</span>
            </h3>

            <p className="text-sm md:text-base text-brand-neutral-500 font-sans leading-relaxed mb-6 max-w-2xl mx-auto">
              O fluxo de produção em colunas substitui a procrastinação. Você sabe exatamente em que ponto está cada postagem (roteiro, gravação, edição ou pronto) e qual o seu próximo passo rápido do dia.
            </p>

            <div className="mb-10 inline-block px-6 py-3 bg-white border border-brand-neutral-200 rounded-2xl shadow-sm italic text-brand-neutral-600 text-sm">
              "Começo a semana com boa intenção. Na quinta, o conteúdo ainda está na minha cabeça."
            </div>

            <div className="flex flex-wrap justify-center gap-4 mb-4">
              {[
                { icon: BarChart3, text: "Fluxo visual de produção" },
                { icon: ChevronRight, text: "Avance etapas com um clique" },
                { icon: AlertCircle, text: "Veja o que está travado" }
              ].map((pill, i) => (
                <div key={i} className="flex items-center gap-2 bg-brand-green-50/50 border border-brand-green-100 rounded-full px-4 py-1.5 backdrop-blur-sm">
                  <pill.icon className="w-3.5 h-3.5 text-brand-green-600" />
                  <span className="text-[11px] font-bold text-brand-green-700 uppercase tracking-wider font-mono">{pill.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Dashboard Image Bottom - HUGE prominence */}
          <div className="w-full">
            <div className="bg-white border border-brand-neutral-200 rounded-[32px] p-2.5 shadow-[0_42px_80px_rgba(27,30,26,0.1)] overflow-hidden relative group ring-1 ring-black/[0.03]">
              <div className="bg-brand-neutral-50/80 border-b border-brand-neutral-200 py-4 px-6 flex items-center justify-between backdrop-blur-sm">
                <div className="flex gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#FC5C65]/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#FED330]/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#26DE81]/80" />
                </div>
                <div className="text-[10px] font-mono font-bold text-brand-neutral-400 tracking-wider">WORKSPACE / PRODUÇÃO</div>
                <div className="w-10" /> {/* Spacer */}
              </div>
              <div className="bg-white overflow-hidden">
                <img 
                  src="/images/af-producao.png" 
                  alt="Dashboard de Produção AutorFloow" 
                  className="w-full h-auto object-cover transform transition-transform duration-1000 ease-out group-hover:scale-[1.015]"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* STEP 2: REPOSITÓRIO SELETIVO (Banco de Ideias) */}
      <section className="relative py-24 px-6 md:px-12 bg-[#FAF9F6] border-b border-brand-neutral-200/50 overflow-hidden">
        <div className="max-w-5xl mx-auto flex flex-col items-center text-center">
          
          {/* Text Top */}
          <div className="mb-16 max-w-3xl">
            <span className="font-mono text-xs font-semibold text-brand-green-500 uppercase tracking-widest mb-4 inline-block">
              PASSO 2: REPOSITÓRIO SELETIVO
            </span>

            <h3 className="font-sans font-semibold text-3xl md:text-[42px] text-brand-neutral-800 tracking-tight leading-[1.1] mb-6">
              Capture suas ideias <br />
              <span className="text-brand-green-500 font-medium font-display">no instante em que surgem.</span>
            </h3>

            <p className="text-sm md:text-base text-brand-neutral-500 font-sans leading-relaxed mb-6 max-w-2xl mx-auto">
              Desenvolva rascunhos rápidos, referências científicas ou insights em segundos. Mantenha ganchos clínicos qualificados baseados em conexões reais do seu dia a dia.
            </p>

            <div className="mb-10 inline-block px-6 py-3 bg-white border border-brand-neutral-200 rounded-2xl shadow-sm italic text-brand-neutral-600 text-sm">
              "Tinha uma ideia ótima ontem. Agora não lembro mais onde anotei."
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              {[
                { icon: Sparkles, text: "Ganchos baseados no seu contexto" },
                { icon: Plus, text: "Registre antes que suma" },
                { icon: Check, text: "Canal e formato automáticos" }
              ].map((pill, i) => (
                <div key={i} className="flex items-center gap-2 bg-brand-green-50/50 border border-brand-green-100 rounded-full px-4 py-1.5 backdrop-blur-sm">
                  <pill.icon className="w-3.5 h-3.5 text-brand-green-600" />
                  <span className="text-[11px] font-bold text-brand-green-700 uppercase tracking-wider font-mono">{pill.text}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="w-full">
            <div className="bg-white border border-brand-neutral-200 rounded-[32px] p-2.5 shadow-[0_42px_80px_rgba(27,30,26,0.1)] overflow-hidden relative group ring-1 ring-black/[0.03]">
              <div className="bg-brand-neutral-50/80 border-b border-brand-neutral-200 py-4 px-6 flex items-center justify-between backdrop-blur-sm">
                <div className="flex gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#FC5C65]/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#FED330]/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#26DE81]/80" />
                </div>
                <div className="text-[10px] font-mono font-bold text-brand-neutral-400 tracking-wider">WORKSPACE / IDEIAS</div>
                <div className="w-10" />
              </div>
              <div className="bg-white overflow-hidden">
                <img 
                  src="/images/af-ideias.png" 
                  alt="Banco de Ideias AutorFloow" 
                  className="w-full h-auto object-cover transform transition-transform duration-1000 ease-out group-hover:scale-[1.015]"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* STEP 3: TERMÔMETRO DE RITMO (Insights da Semana) */}
      <section className="relative py-24 px-6 md:px-12 border-b border-brand-neutral-200/50 overflow-hidden">
        <div className="max-w-5xl mx-auto flex flex-col items-center text-center">
          
          {/* Text details Top */}
          <div className="mb-16 max-w-3xl">
            <span className="font-mono text-xs font-semibold text-brand-green-500 uppercase tracking-widest mb-4 inline-block">
              PASSO 3: TERMÔMETRO DE RITMO
            </span>

            <h3 className="font-sans font-semibold text-3xl md:text-[42px] text-brand-neutral-800 tracking-tight leading-[1.1] mb-6">
              Saiba exatamente <br />
              <span className="text-brand-green-500 font-medium font-display">há quantas semanas você está construindo autoridade.</span>
            </h3>

            <p className="text-sm md:text-base text-brand-neutral-500 font-sans leading-relaxed mb-6 max-w-2xl mx-auto">
              Acompanhe sua consistência semanal através de alertas visuais. Identifique lapsos de publicação antes que eles prejudiquem seu posicionamento digital.
            </p>

            <div className="mb-10 inline-block px-6 py-3 bg-white border border-brand-neutral-200 rounded-2xl shadow-sm italic text-brand-neutral-600 text-sm">
              "Sei que deveria estar publicando mais conteúdo. Mas nem sei mais há quantas semanas estou sem postar nada."
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              {[
                { icon: Flame, text: "Semanas consecutivas" },
                { icon: Calendar, text: "Alerta de inércia" },
                { icon: Sparkles, text: "Progresso visível" }
              ].map((pill, i) => (
                <div key={i} className="flex items-center gap-2 bg-brand-green-50/50 border border-brand-green-100 rounded-full px-4 py-1.5 backdrop-blur-sm">
                  <pill.icon className="w-3.5 h-3.5 text-brand-green-600" />
                  <span className="text-[11px] font-bold text-brand-green-700 uppercase tracking-wider font-mono">{pill.text}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="w-full">
            <div className="bg-white border border-brand-neutral-200 rounded-[32px] p-2.5 shadow-[0_42px_80px_rgba(27,30,26,0.1)] overflow-hidden relative group ring-1 ring-black/[0.03]">
              <div className="bg-brand-neutral-50/80 border-b border-brand-neutral-200 py-4 px-6 flex items-center justify-between backdrop-blur-sm">
                <div className="flex gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#FC5C65]/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#FED330]/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#26DE81]/80" />
                </div>
                <div className="text-[10px] font-mono font-bold text-brand-neutral-400 tracking-wider">WORKSPACE / INSIGHTS</div>
                <div className="w-10" />
              </div>
              <div className="bg-white overflow-hidden">
                <img 
                  src="/images/af-insights.png" 
                  alt="Insights e Métricas AutorFloow" 
                  className="w-full h-auto object-cover transform transition-transform duration-1000 ease-out group-hover:scale-[1.015]"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* STEP 4: ENGENHARIA DE ATRAÇÃO (Biblioteca & Métricas) */}
      <section className="relative py-24 px-6 md:px-12 bg-[#FAF9F6] border-b border-brand-neutral-200/50 overflow-hidden">
        <div className="max-w-5xl mx-auto flex flex-col items-center text-center">
          
          {/* Text details Top */}
          <div className="mb-16 max-w-3xl">
            <span className="font-mono text-xs font-semibold text-brand-green-500 uppercase tracking-widest mb-4 inline-block">
              PASSO 4: ENGENHARIA DE ATRAÇÃO
            </span>

            <h3 className="font-sans font-semibold text-3xl md:text-[42px] text-brand-neutral-800 tracking-tight leading-[1.1] mb-6">
              Entenda o que funcionou. <br />
              <span className="text-brand-green-500 font-medium font-display">Repita o que trouxe resultados.</span>
            </h3>

            <p className="text-sm md:text-base text-brand-neutral-500 font-sans leading-relaxed mb-6 max-w-2xl mx-auto">
              Sua biblioteca compila o histórico completo de postagens e métricas reais. Saiba quais pautas geraram mais conexões e replique frameworks eficientes sem esforço.
            </p>

            <div className="mb-10 inline-block px-6 py-3 bg-white border border-brand-neutral-200 rounded-2xl shadow-sm italic text-brand-neutral-600 text-sm">
              "Publico, mas não compreendo quais posts funcionam de verdade. Continuo focado em fidelidade ou no escuro."
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              {[
                { icon: BookOpen, text: "Histórico completo" },
                { icon: TrendingUp, text: "Métricas reais por post" },
                { icon: Check, text: "Replique o que funcionou" }
              ].map((pill, i) => (
                <div key={i} className="flex items-center gap-2 bg-brand-green-50/50 border border-brand-green-100 rounded-full px-4 py-1.5 backdrop-blur-sm">
                  <pill.icon className="w-3.5 h-3.5 text-brand-green-600" />
                  <span className="text-[11px] font-bold text-brand-green-700 uppercase tracking-wider font-mono">{pill.text}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="w-full">
            <div className="bg-white border border-brand-neutral-200 rounded-[32px] p-2.5 shadow-[0_42px_80px_rgba(27,30,26,0.1)] overflow-hidden relative group ring-1 ring-black/[0.03]">
              <div className="bg-brand-neutral-50/80 border-b border-brand-neutral-200 py-4 px-6 flex items-center justify-between backdrop-blur-sm">
                <div className="flex gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#FC5C65]/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#FED330]/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#26DE81]/80" />
                </div>
                <div className="text-[10px] font-mono font-bold text-brand-neutral-400 tracking-wider">WORKSPACE / BIBLIOTECA</div>
                <div className="w-10" />
              </div>
              <div className="bg-white overflow-hidden">
                <img 
                  src="/images/af-biblioteca.png" 
                  alt="Biblioteca de Conteúdo AutorFloow" 
                  className="w-full h-auto object-cover transform transition-transform duration-1000 ease-out group-hover:scale-[1.015]"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Modern Centered Sticky Footer/Action Bar for the Steps Flow */}
      <div className="bg-[#FAF9F6] pt-12 pb-24 text-center">
        <GlowButton 
          href="#precos" 
          className="inline-block !px-10 !py-4.5 !text-sm md:!text-base !min-w-[260px]"
        >
          Quero começar agora
        </GlowButton>
        <p className="text-sm text-brand-neutral-500 mt-4 font-medium font-sans">
          Experimente 14 dias grátis.
        </p>
      </div>

    </div>
  );
}
