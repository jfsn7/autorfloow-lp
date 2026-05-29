import { Instagram, Linkedin } from 'lucide-react';

interface FooterProps {
  onShowPrivacy: () => void;
  onShowTerms: () => void;
}

export default function Footer({ onShowPrivacy, onShowTerms }: FooterProps) {
  return (
    <footer className="bg-brand-neutral-900 text-brand-neutral-300 py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 pb-12 border-b border-brand-neutral-800">
          
          {/* Brand Left Column */}
          <div className="md:col-span-4 flex flex-col items-start gap-4">
            <a href="#" className="flex items-center gap-2 group">
              <img 
                src="/assets/af-logo-original.svg"
                alt="AutorFloow Logo" 
                className="h-8 w-auto group-hover:scale-105 transition-transform brightness-0 invert"
                referrerPolicy="no-referrer"
              />
            </a>
            <p className="text-xs text-brand-neutral-500 leading-relaxed font-sans max-w-xs">
              Produza com constância. Construa autoridade.
            </p>
            <div className="flex gap-2.5 mt-2">
              <a 
                href="https://www.instagram.com/appautorfloow?igsh=czJmcXU2YXJ2cmVm&utm_source=qr" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-brand-neutral-800 text-brand-neutral-400 hover:text-white hover:bg-brand-neutral-700 flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a 
                href="https://www.linkedin.com/company/autorfloow/about/?viewAsMember=true" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-brand-neutral-800 text-brand-neutral-400 hover:text-white hover:bg-brand-neutral-700 flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Navigation Links Columns */}
          <div className="md:col-span-8 grid grid-cols-2 gap-12 md:gap-24">
            {/* Column 1 - Produto */}
            <div className="flex flex-col gap-5">
              <span className="text-[10px] font-bold uppercase tracking-wider text-brand-neutral-500">
                Produto
              </span>
              <div className="flex flex-col gap-3 text-xs text-brand-neutral-400 font-medium">
                <a href="#funcionalidades" className="hover:text-white transition-colors">Funcionalidades</a>
                <a href="#como-funciona" className="hover:text-white transition-colors">Como funciona</a>
                <a href="#precos" className="hover:text-white transition-colors">Preços</a>
                <a href="#faq" className="hover:text-white transition-colors">FAQ / Suporte</a>
              </div>
            </div>

            {/* Column 2 - Para Quem É */}
            <div className="flex flex-col gap-5">
              <span className="text-[10px] font-bold uppercase tracking-wider text-brand-neutral-500">
                Para quem é
              </span>
              <div className="flex flex-col gap-3 text-xs text-brand-neutral-400 font-medium">
                <a href="#para-quem" className="hover:text-white transition-colors">Dentistas / Médicos</a>
                <a href="#para-quem" className="hover:text-white transition-colors">Advogados / Jurídico</a>
                <a href="#para-quem" className="hover:text-white transition-colors">Consultores / Mentores</a>
                <a href="#para-quem" className="hover:text-white transition-colors">Psicólogos / Nutris</a>
              </div>
            </div>
          </div>
        </div>

        {/* Legal Rodapé Info Row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-brand-neutral-500 text-center sm:text-left">
            © 2026 AutorFloow. Todos os direitos reservados.
          </p>
          <div className="flex gap-6 text-xs text-brand-neutral-500 font-medium font-sans">
            <button 
              onClick={onShowTerms}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Termos de uso
            </button>
            <button 
              onClick={onShowPrivacy}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Política de privacidade
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
