import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import GlowButton from './GlowButton';

interface NavigationProps {
  onHome?: () => void;
}

export default function Navigation({ onHome }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleLogoClick = (e: React.MouseEvent) => {
    if (onHome) {
      e.preventDefault();
      onHome();
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-brand-neutral-50/90 backdrop-blur-md border-b border-brand-neutral-200 h-16 flex items-center justify-between px-6 md:px-8 lg:px-12">
      {/* Brand logo */}
      <a href="#" onClick={handleLogoClick} className="flex items-center gap-2 group mr-2">
        <img 
          src="/assets/af-logo-original.svg"
          alt="AutorFloow Logo" 
          className="h-11 w-auto group-hover:scale-105 transition-transform"
          referrerPolicy="no-referrer"
        />
      </a>

      {/* Nav Links - Desktop */}
      <div className="hidden lg:flex items-center lg:gap-8" id="nav-links">
        <a 
          href="#como-funciona" 
          onClick={onHome ? (e) => { e.preventDefault(); onHome(); setTimeout(() => window.location.hash = '#como-funciona', 0); } : undefined}
          className="text-sm font-display font-medium text-brand-neutral-500 hover:text-brand-green-500 transition-colors"
        >
          Como funciona
        </a>
        <a 
          href="#funcionalidades" 
          onClick={onHome ? (e) => { e.preventDefault(); onHome(); setTimeout(() => window.location.hash = '#funcionalidades', 0); } : undefined}
          className="text-sm font-display font-medium text-brand-neutral-500 hover:text-brand-green-500 transition-colors"
        >
          Funcionalidades
        </a>
        <a 
          href="#precos" 
          onClick={onHome ? (e) => { e.preventDefault(); onHome(); setTimeout(() => window.location.hash = '#precos', 0); } : undefined}
          className="text-sm font-display font-medium text-brand-neutral-500 hover:text-brand-green-500 transition-colors"
        >
          Preços
        </a>
        <a 
          href="#faq" 
          onClick={onHome ? (e) => { e.preventDefault(); onHome(); setTimeout(() => window.location.hash = '#faq', 0); } : undefined}
          className="text-sm font-display font-medium text-brand-neutral-500 hover:text-brand-green-500 transition-colors"
        >
          Dúvidas
        </a>
      </div>

      {/* Action Buttons - Desktop */}
      <div className="hidden lg:flex items-center lg:gap-5">
        <a
          href="https://app.autorfloow.com/login"
          className="text-sm font-display font-medium text-brand-neutral-500 hover:text-brand-green-500 transition-colors flex items-center gap-1.5"
        >
          Entrar
        </a>
        <GlowButton 
          href="#precos" 
          onClick={onHome ? () => { onHome(); setTimeout(() => window.location.hash = '#precos', 0); } : undefined}
          className="text-[13px] px-6 py-2.5 whitespace-nowrap"
        >
          Comece grátis
        </GlowButton>
      </div>

      {/* Mobile Menu Trigger */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden p-2 text-brand-neutral-700 hover:text-brand-green-500 focus:outline-none focus:ring-0"
        aria-label="Toggle menu"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden absolute top-16 left-0 right-0 bg-brand-neutral-50 border-b border-brand-neutral-200 overflow-hidden shadow-lg"
          >
            <div className="flex flex-col px-6 py-6 gap-4">
              <a
                href="#como-funciona"
                onClick={() => { setIsOpen(false); if (onHome) onHome(); }}
                className="text-base font-semibold text-brand-neutral-700 hover:text-brand-green-500 transition-colors"
              >
                Como funciona
              </a>
              <a
                href="#funcionalidades"
                onClick={() => { setIsOpen(false); if (onHome) onHome(); }}
                className="text-base font-semibold text-brand-neutral-700 hover:text-brand-green-500 transition-colors"
              >
                Funcionalidades
              </a>
              <a
                href="#precos"
                onClick={() => { setIsOpen(false); if (onHome) onHome(); }}
                className="text-base font-semibold text-brand-neutral-700 hover:text-brand-green-500 transition-colors"
              >
                Preços
              </a>
              <a
                href="#faq"
                onClick={() => { setIsOpen(false); if (onHome) onHome(); }}
                className="text-base font-semibold text-brand-neutral-700 hover:text-brand-green-500 transition-colors"
              >
                Dúvidas
              </a>

              <hr className="border-brand-neutral-200 my-2" />

              <div className="flex flex-col gap-3">
                <a
                  href="https://app.autorfloow.com/login"
                  onClick={() => setIsOpen(false)}
                  className="w-full text-center py-3 text-brand-neutral-700 hover:text-brand-green-500 font-display font-semibold border border-brand-neutral-200 rounded-lg flex items-center justify-center gap-2"
                >
                  Entrar
                </a>
                <GlowButton 
                  href="#precos" 
                  onClick={() => { setIsOpen(false); if (onHome) onHome(); }}
                  className="w-full py-3.5 flex justify-center text-base"
                >
                  Comece grátis
                </GlowButton>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
