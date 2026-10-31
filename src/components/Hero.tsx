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
  Clock,
  Flame,
  Check
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import GlowButton from './GlowButton';
import PremiumLinkButton from './PremiumLinkButton';
import HeroJourney from './HeroJourney';

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
        triggerNotification('Card redefinido para a etapa: A PRODUZIR');
        return {
          ...card,
          columnId: 'ideia'
        };
      }
      return card;
    }));
  };

  return (
    <section className="bg-brand-neutral-50 pt-28 pb-20 md:pt-36 md:pb-28 px-6 md:px-12 relative overflow-hidden" id="hero">

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] gap-14 lg:gap-24 items-start">

        {/* Copy — alinhada à esquerda */}
        <div className="flex flex-col items-start text-left">

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display font-bold text-4xl sm:text-5xl lg:text-[3.4rem] xl:text-6xl text-brand-neutral-800 tracking-tight leading-[1.05] mb-8"
          >
            <span className="text-brand-green-600">Publique toda semana</span> sem virar criador de conteúdo.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base md:text-lg text-brand-neutral-500 leading-relaxed font-sans font-normal max-w-xl mb-10"
          >
            O AutorFloow organiza ideias, posts, Stories e newsletter em um fluxo pronto para especialistas. Sem configurar nada. Pronto em 5 minutos.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-5 sm:gap-6 mb-12"
          >
            <GlowButton href="https://app.autorfloow.com/cadastro" className="px-8 py-4 sm:py-3.5 min-w-[210px] text-center flex justify-center text-base md:text-[14px]">
              Testar grátis
            </GlowButton>
            <PremiumLinkButton href="#como-funciona" lightTheme={true}>
              Ver como funciona
            </PremiumLinkButton>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="grid grid-cols-3 gap-6 md:gap-10 border-t border-brand-neutral-200/60 pt-8 w-full max-w-md"
          >
            <div>
              <span className="block text-[9px] uppercase tracking-widest text-brand-neutral-400 font-sans font-bold mb-2">TESTE</span>
              <span className="block font-sans font-bold text-xs md:text-sm text-brand-neutral-800">14 dias grátis</span>
            </div>
            <div>
              <span className="block text-[9px] uppercase tracking-widest text-brand-neutral-400 font-sans font-bold mb-2">CARTÃO</span>
              <span className="block font-sans font-bold text-xs md:text-sm text-brand-neutral-800">Não é necessário</span>
            </div>
            <div>
              <span className="block text-[9px] uppercase tracking-widest text-brand-neutral-400 font-sans font-bold mb-2">INÍCIO</span>
              <span className="block font-sans font-bold text-xs md:text-sm text-brand-neutral-800">Pronto em 5 minutos</span>
            </div>
          </motion.div>
        </div>

        {/* Imagem do hero: o conteúdo que viaja da ideia até a publicação */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="relative min-w-0"
        >
          <HeroJourney />
        </motion.div>

      </div>
    </section>
  );
}
