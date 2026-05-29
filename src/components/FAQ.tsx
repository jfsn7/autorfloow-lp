import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { FAQItem } from '../types';

const faqData: FAQItem[] = [
  {
    id: 1,
    question: 'Preciso ter experiência com ferramentas de produtividade para usar?',
    answer: 'Não. O AutorFloow foi desenhado para quem não quer perder tempo configurando ferramentas. Você cria sua conta, entra no produto e já começa a usar em menos de 5 minutos. Sem templates complexos para montar, sem qualquer curva de aprendizado.',
  },
  {
    id: 2,
    question: 'Como funciona o período de 14 dias grátis?',
    answer: 'Você cria sua conta e tem acesso completo ao AutorFloow por 14 dias sem precisar informar cartão. Ao final do período, escolhe o plano que faz mais sentido para a sua fase, ou cancela sem burocracia.',
  },
  {
    id: 3,
    question: 'Posso usar sozinho e depois adicionar alguém da equipe?',
    answer: 'Sim. A plataforma mantém dois workspaces separados para você: o Individual e o de Equipe. Para adicionar alguém ao seu time, você faz a contratação do plano Especialista + Equipe. Assim, você unifica os fluxos e gerencia o acesso de forma integrada.',
  },
  {
    id: 4,
    question: 'O AutorFloow publica os conteúdos automaticamente nas redes sociais?',
    answer: 'Não, e isso é intencional. O AutorFloow organiza sua produção, do rascunho ao conteúdo pronto. A publicação fica com você, para manter o controle da sua presença. Integrações de agendamento estão no roadmap.',
  },
  {
    id: 5,
    question: 'Já tentei me organizar antes e não funcionou. Por que seria diferente agora?',
    answer: 'Porque o problema não era você, era a ferramenta. Notion e planilhas foram criados para tudo, e é exatamente por isso que não sustentam a rotina de quem tem agenda cheia. O AutorFloow tem um único propósito: fazer a produção de conteúdo de especialistas acontecer toda semana, sem precisar reconfigurar nem relembrar como usar. A estrutura já está pronta, você só executa.',
  },
];

export default function FAQ() {
  const [openId, setOpenId] = useState<number | null>(1); // Open first by default

  const toggle = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="bg-white py-24 px-6 md:px-12 scroll-mt-12" id="faq">
      <div className="max-w-3xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-xs font-bold text-brand-green-500 tracking-widest uppercase mb-3 text-center">
            Dúvidas frequentes
          </span>
          <h2 className="font-display font-medium text-3xl text-brand-neutral-800 leading-tight tracking-tight mb-4 text-center">
            Perguntas que<br />
            <span className="text-brand-green-500">todo especialista faz.</span>
          </h2>
        </div>

        {/* Accordions List */}
        <div className="border border-brand-neutral-200 rounded-2xl bg-white shadow-sm overflow-hidden divide-y divide-brand-neutral-100">
          {faqData.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div key={item.id} className="transition-colors duration-150">
                {/* Header click bar */}
                <button
                  onClick={() => toggle(item.id)}
                  aria-expanded={isOpen}
                  className="w-full text-left py-5 px-6 flex items-center justify-between gap-6 cursor-pointer group hover:bg-brand-neutral-50/40"
                >
                  <span className="font-sans font-semibold text-sm md:text-base text-brand-neutral-800 leading-snug group-hover:text-brand-green-600 transition-colors">
                    {item.question}
                  </span>
                  <span className={`w-7 h-7 rounded-full flex items-center justify-center transition-all ${isOpen ? 'bg-brand-green-500 text-white' : 'bg-brand-green-50 text-brand-green-600'}`}>
                    {isOpen ? <Minus className="w-4 h-4 stroke-[2.5]" /> : <Plus className="w-4 h-4 stroke-[2.5]" />}
                  </span>
                </button>

                {/* Answer section inside container */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-1 text-sm text-brand-neutral-500 leading-relaxed font-sans border-t border-brand-neutral-50/10">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
