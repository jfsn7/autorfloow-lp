import { useState } from 'react';
import { 
  ArrowUpRight, 
  ArrowRight, 
  Sparkles, 
  Plus, 
  Calendar, 
  Layers, 
  ChevronRight, 
  TrendingUp, 
  FolderHeart,
  Undo2,
  Lightbulb,
  Clock
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import GlowButton from './GlowButton';
import PremiumLinkButton from './PremiumLinkButton';

interface MockCard {
  id: string;
  columnId: 'ideia' | 'roteiro' | 'gravacao' | 'edicao' | 'pronto' | 'publicado';
  title: string;
  channel: 'Instagram' | 'LinkedIn';
  format: 'Carrossel' | 'Texto' | 'Reels';
  deadline: 'prazo hoje' | 'agendado';
  date: string;
}

const COLUMNS_ORDER: MockCard['columnId'][] = ['ideia', 'roteiro', 'gravacao', 'edicao', 'pronto', 'publicado'];

export default function Hero() {
  const [cards, setCards] = useState<MockCard[]>([
    {
      id: 'card-1',
      columnId: 'ideia',
      title: 'Meu primeiro post sobre autoridade digital',
      channel: 'Instagram',
      format: 'Carrossel',
      deadline: 'prazo hoje',
      date: '26 de mai.',
    },
    {
      id: 'card-2',
      columnId: 'publicado',
      title: 'Por que profissionais precisam de presença digital',
      channel: 'LinkedIn',
      format: 'Texto',
      deadline: 'prazo hoje',
      date: '26 de mai.',
    }
  ]);

  const [notification, setNotification] = useState<string | null>(null);

  const triggerNotification = (msg: string) => {
    setNotification(msg);
    setTimeout(() => {
      setNotification(null);
    }, 3000);
  };

  const handleAddNewIdea = () => {
    const customIdeas = [
      'Como médicos podem cobrar consultas high-ticket no Brasil',
      '3 condutas pós-cirúrgicas essenciais para compartilhar hoje',
      'Por que seu conhecimento técnico assusta o cliente final',
      'Como produzir conteúdo consistente em menos de 1 hora por semana',
      'O maior erro cometido por especialistas seniores na internet'
    ];
    
    const randomTitle = customIdeas[Math.floor(Math.random() * customIdeas.length)];
    const randomChannel = Math.random() > 0.5 ? 'Instagram' : 'LinkedIn';
    const randomFormat = randomChannel === 'Instagram' ? (Math.random() > 0.5 ? 'Carrossel' : 'Reels') : 'Texto';

    const newCard: MockCard = {
      id: `card-${Date.now()}`,
      columnId: 'ideia',
      title: randomTitle,
      channel: randomChannel as any,
      format: randomFormat as any,
      deadline: 'prazo hoje',
      date: 'Hoje',
    };

    setCards(prev => [newCard, ...prev]);
    triggerNotification('Nova ideia criada com sucesso!');
  };

  const handleMoveCard = (cardId: string) => {
    setCards(prev => prev.map(card => {
      if (card.id === cardId) {
        const currentIdx = COLUMNS_ORDER.indexOf(card.columnId);
        const nextIdx = Math.min(currentIdx + 1, COLUMNS_ORDER.length - 1);
        const nextCol = COLUMNS_ORDER[nextIdx];
        
        if (card.columnId !== nextCol) {
          triggerNotification(`Card movido para a etapa: ${nextCol.toUpperCase()}`);
        } else {
          triggerNotification('Card já foi publicado!');
        }
        
        return {
          ...card,
          columnId: nextCol
        };
      }
      return card;
    }));
  };

  const handleResetCard = (cardId: string) => {
    setCards(prev => prev.map(card => {
      if (card.id === cardId) {
        triggerNotification('Card redefinido para a etapa: IDEIA');
        return {
          ...card,
          columnId: 'ideia'
        };
      }
      return card;
    }));
  };

  return (
    <section className="bg-brand-neutral-50 pt-28 pb-24 md:pt-36 md:pb-32 px-6 md:px-12 relative overflow-hidden" id="hero">
      
      {/* Background radial soft light to frame our Hero visually */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-brand-green-100/10 rounded-full blur-[160px] pointer-events-none" />
      
      <div className="max-w-6xl mx-auto w-full flex flex-col items-center text-center">
        
        {/* Copywrite Area - Now Centered */}
        <div className="max-w-4xl mb-20 md:mb-24 flex flex-col items-center">
          
          {/* Top Pill Cohort Badge inside brand guidelines */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-white border border-brand-neutral-200/80 rounded-full px-4 py-1.5 mb-10 shadow-sm"
          >
            <span className="w-2 h-2 rounded-full bg-brand-green-500 animate-pulse" />
            <span className="text-[11px] font-bold text-brand-neutral-600 font-sans tracking-wide">
              Sistema ativo · 1.500+ especialistas esta semana
            </span>
          </motion.div>

          {/* Title - Exactly matching the user's attachment, fonts, words and colors */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-brand-neutral-800 tracking-tight leading-[1.02] mb-10 select-none px-4"
          >
            O sistema de conteúdo <br className="hidden md:inline" />
            <span className="text-brand-green-600">feito para quem é</span> <br className="hidden md:inline" />
            especialista primeiro.
          </motion.h1>

          {/* Centered description block */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base md:text-lg text-brand-neutral-500 leading-relaxed font-sans font-normal max-w-2xl mb-12"
          >
            O AutorFloow foi construído para advogados, nutricionistas, engenheiros, médicos e consultores que querem produzir com constância, sem precisar virar criador de conteúdo. Nenhuma configuração. Pronto em 5 minutos.
          </motion.p>

          {/* CTA Buttons - Solid Brand Green design */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 w-full sm:w-auto mb-16"
          >
            <GlowButton href="#precos" className="px-8 py-4 sm:py-3.5 min-w-[210px] text-center flex justify-center text-base md:text-[14px]">
              Começar grátis agora
            </GlowButton>
            <PremiumLinkButton href="#como-funciona" lightTheme={true}>
              Ver como funciona
            </PremiumLinkButton>
          </motion.div>

          {/* Bottom stats pillars - Now subtle and centered */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="grid grid-cols-3 gap-8 md:gap-16 border-t border-brand-neutral-200/60 pt-10 w-full max-w-xl"
          >
            <div>
              <span className="block text-[9px] uppercase tracking-widest text-brand-neutral-400 font-sans font-bold mb-2">GARANTIA</span>
              <span className="block font-sans font-bold text-xs md:text-sm text-brand-neutral-800">14 dias grátis</span>
            </div>
            <div>
              <span className="block text-[9px] uppercase tracking-widest text-brand-neutral-400 font-sans font-bold mb-2">ACESSO</span>
              <span className="block font-sans font-bold text-xs md:text-sm text-brand-neutral-800">Sem cartão</span>
            </div>
            <div>
              <span className="block text-[9px] uppercase tracking-widest text-brand-neutral-400 font-sans font-bold mb-2">SUPORTE</span>
              <span className="block font-sans font-bold text-xs md:text-sm text-brand-neutral-800">Pronto em 5 min</span>
            </div>
          </motion.div>
        </div>

        {/* Dashboard Mockup Column - Center stacked with maximum width */}
        <div className="w-full flex flex-col justify-center items-center group relative px-4">
          
          {/* Background Decorative Element */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4/5 h-4/5 bg-brand-green-100/15 rounded-full blur-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000 -z-10" />
          
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="relative w-full max-w-[1100px] bg-white border border-brand-neutral-200/90 rounded-[28px] shadow-[0_45px_100px_rgba(27,30,26,0.1)] overflow-hidden transition-all duration-700 hover:shadow-[0_60px_130px_rgba(27,30,26,0.16)] hover:-translate-y-2 ring-1 ring-black/[0.03]"
          >
            
            {/* Mock Web Browser Header - Refined */}
            <div className="bg-gradient-to-b from-brand-neutral-50/80 to-brand-neutral-50 border-b border-brand-neutral-200 py-4.5 px-6 flex items-center justify-between backdrop-blur-sm">
              <div className="flex gap-2.5 shrink-0">
                <div className="w-3.5 h-3.5 rounded-full bg-[#FC5C65] shadow-inner opacity-80" />
                <div className="w-3.5 h-3.5 rounded-full bg-[#FED330] shadow-inner opacity-80" />
                <div className="w-3.5 h-3.5 rounded-full bg-[#26DE81] shadow-inner opacity-80" />
              </div>
              <div className="bg-white/80 border border-brand-neutral-200/80 rounded-full text-[11px] text-brand-neutral-500 text-center px-12 md:px-32 py-1.5 font-sans font-medium select-none truncate max-w-md shadow-sm">
                app.autorfloow.com/producao
              </div>
              <div className="hidden sm:flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-brand-neutral-200/50" />
                <div className="w-10 h-2.5 rounded-full bg-brand-neutral-200/50" />
              </div>
            </div>

            {/* Main Interface Split */}
            <div className="overflow-hidden bg-brand-neutral-100">
               <img 
                src="/images/af-producao.png" 
                alt="Produção AutorFloow" 
                className="w-full h-auto object-cover transform transition-transform duration-1000 ease-out group-hover:scale-[1.01]"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>

          {/* Floating Accessory Badge - Engagement (Right Middle) */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="absolute -bottom-8 md:bottom-auto md:top-2/3 right-10 md:-right-8 bg-white border border-brand-neutral-200 rounded-2xl p-5 shadow-2xl flex items-center gap-4 z-10 hover:scale-105 transition-transform duration-300 pointer-events-none"
          >
            <div className="w-12 h-12 rounded-full bg-brand-green-50 flex items-center justify-center text-brand-green-600 shadow-inner">
              <TrendingUp className="w-6 h-6" />
            </div>
            <div className="text-left">
              <p className="text-[10px] font-bold text-brand-neutral-400 uppercase tracking-widest leading-none mb-1.5">Análise Semanal</p>
              <p className="text-base font-bold text-brand-neutral-800 font-sans tracking-tight leading-none">+28.4% Engajamento</p>
            </div>
          </motion.div>

          {/* Floating Accessory Badge - Ideas (Left Top) */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.1, duration: 0.6 }}
            className="absolute hidden lg:flex top-12 -left-12 bg-white border border-brand-neutral-200 rounded-2xl p-5 shadow-2xl items-center gap-4 z-10 hover:scale-105 transition-transform duration-300 pointer-events-none"
          >
            <div className="w-12 h-12 rounded-full bg-brand-green-50 flex items-center justify-center text-brand-green-600 shadow-inner">
              <Lightbulb className="w-6 h-6" />
            </div>
            <div className="text-left">
              <p className="text-[10px] font-bold text-brand-neutral-400 uppercase tracking-widest leading-none mb-1.5">Ideias Ativas</p>
              <p className="text-base font-bold text-brand-neutral-800 font-sans tracking-tight leading-none">12 novos contextos</p>
            </div>
          </motion.div>

          {/* Floating Accessory Badge - Time Save (Left Bottom) */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.3, duration: 0.6 }}
            className="absolute hidden lg:flex bottom-20 -left-16 bg-white border border-brand-neutral-200 rounded-2xl p-5 shadow-2xl items-center gap-4 z-10 hover:scale-105 transition-transform duration-300 pointer-events-none"
          >
            <div className="w-12 h-12 rounded-full bg-brand-green-50 flex items-center justify-center text-brand-green-600 shadow-inner">
              <Clock className="w-6 h-6" />
            </div>
            <div className="text-left">
              <p className="text-[10px] font-bold text-brand-neutral-400 uppercase tracking-widest leading-none mb-1.5">Tempo Economizado</p>
              <p className="text-base font-bold text-brand-neutral-800 font-sans tracking-tight leading-none">4.5h / semana</p>
            </div>
          </motion.div>

          {/* Floating Accessory Badge - Authority Score (Right Top) */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.5, duration: 0.6 }}
            className="absolute hidden lg:flex top-20 -right-12 bg-white border border-brand-neutral-200 rounded-2xl p-5 shadow-2xl items-center gap-4 z-10 hover:scale-105 transition-transform duration-300 pointer-events-none"
          >
            <div className="w-12 h-12 rounded-full bg-brand-green-50 flex items-center justify-center text-brand-green-600 shadow-inner">
              <Sparkles className="w-6 h-6" />
            </div>
            <div className="text-left">
              <p className="text-[10px] font-bold text-brand-neutral-400 uppercase tracking-widest leading-none mb-1.5">Score Autoridade</p>
              <p className="text-base font-bold text-brand-neutral-800 font-sans tracking-tight leading-none">98.2 Status</p>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
