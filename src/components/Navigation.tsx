import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import GlowButton from './GlowButton';

interface NavigationProps {
  onHome?: () => void;
}

const LINKS = [
  { label: 'Como funciona', href: '#como-funciona' },
  { label: 'Funcionalidades', href: '#funcionalidades' },
  { label: 'Preços', href: '#precos' },
  { label: 'Dúvidas', href: '#faq' },
];

export default function Navigation({ onHome }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleLogoClick = (e: React.MouseEvent) => {
    if (onHome) {
      e.preventDefault();
      onHome();
    }
  };

  const goTo = (href: string) => (e: React.MouseEvent) => {
    setIsOpen(false);
    if (onHome) {
      e.preventDefault();
      onHome();
      setTimeout(() => { window.location.hash = href; }, 0);
    }
  };

  return (
    <nav className="fixed top-3 md:top-4 left-3 right-3 md:left-6 md:right-6 z-50 max-w-[1400px] mx-auto">
      <div className="relative bg-brand-neutral-50/90 backdrop-blur-md border border-brand-neutral-200 rounded-full shadow-[0_8px_30px_rgba(27,30,26,0.08)] h-[56px] md:h-[64px] flex items-center justify-between pl-4 pr-2.5 md:pl-5 md:pr-3">
        {/* Logo */}
        <a href="#" onClick={handleLogoClick} className="flex items-center group shrink-0">
          <img
            src="/assets/af-logo-original.svg"
            alt="AutorFloow Logo"
            className="h-10 md:h-11 w-auto group-hover:scale-105 transition-transform"
            referrerPolicy="no-referrer"
          />
        </a>

        {/* Links - Desktop */}
        <div className="hidden lg:flex items-center gap-9 xl:gap-11" id="nav-links">
          {LINKS.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              onClick={goTo(href)}
              className="text-[15px] font-sans font-medium text-brand-neutral-600 hover:text-brand-green-500 transition-colors"
            >
              {label}
            </a>
          ))}
        </div>

        {/* Ações - Desktop */}
        <div className="hidden lg:flex items-center gap-6">
          <a
            href="https://app.autorfloow.com/login"
            className="text-[15px] font-sans font-medium text-brand-neutral-600 hover:text-brand-green-500 transition-colors"
          >
            Entrar
          </a>
          <GlowButton
            href="https://app.autorfloow.com/cadastro"
            className="text-[14px] px-6 py-3 whitespace-nowrap"
          >
            Testar grátis
          </GlowButton>
        </div>

        {/* Gatilho do menu mobile */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 mr-1 text-brand-neutral-700 hover:text-brand-green-500 focus:outline-none focus:ring-0"
          aria-label="Abrir menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Painel mobile */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="lg:hidden mt-2 bg-brand-neutral-50 border border-brand-neutral-200 rounded-3xl overflow-hidden shadow-[0_8px_30px_rgba(27,30,26,0.12)]"
          >
            <div className="flex flex-col px-6 py-6 gap-4">
              {LINKS.map(({ label, href }) => (
                <a
                  key={href}
                  href={href}
                  onClick={goTo(href)}
                  className="text-base font-semibold text-brand-neutral-700 hover:text-brand-green-500 transition-colors"
                >
                  {label}
                </a>
              ))}

              <hr className="border-brand-neutral-200 my-2" />

              <div className="flex flex-col gap-3">
                <a
                  href="https://app.autorfloow.com/login"
                  onClick={() => setIsOpen(false)}
                  className="w-full text-center py-3 text-brand-neutral-700 hover:text-brand-green-500 font-display font-semibold border border-brand-neutral-200 rounded-full flex items-center justify-center gap-2"
                >
                  Entrar
                </a>
                <GlowButton
                  href="https://app.autorfloow.com/cadastro"
                  onClick={() => setIsOpen(false)}
                  className="w-full py-3.5 flex justify-center text-base"
                >
                  Testar grátis
                </GlowButton>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
