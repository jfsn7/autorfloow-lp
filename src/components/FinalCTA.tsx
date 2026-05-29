import GlowButton from './GlowButton';
import PremiumLinkButton from './PremiumLinkButton';

export default function FinalCTA() {
  return (
    <section className="bg-[#246645] relative py-24 md:py-32 px-6 md:px-16 overflow-hidden" id="comecar">
      {/* Dynamic slanted background elements matching the reference image */}
      <div 
        className="absolute inset-y-0 right-0 w-full md:w-[65%] lg:w-[50%] bg-[#1E5237] pointer-events-none transition-all duration-300" 
        style={{ clipPath: 'polygon(15% 0, 100% 0, 100% 100%, 0% 100%)' }} 
      />
      <div 
        className="absolute inset-y-0 right-0 w-full md:w-[45%] lg:w-[32%] bg-[#133524] pointer-events-none transition-all duration-300" 
        style={{ clipPath: 'polygon(15% 0, 100% 0, 100% 100%, 0% 100%)' }} 
      />

      <div className="max-w-6xl mx-auto text-left relative z-10">
        {/* Top Badge text exactly as referenced in image */}
        <div className="text-[11px] font-bold uppercase tracking-widest text-[#9AE2B6] mb-8 font-sans">
          14 DIAS GRÁTIS, SEM CARTÃO
        </div>

        {/* Heading matching the reference linebreaks and boldness */}
        <h2 className="font-display font-bold text-4xl sm:text-5xl md:text-[56px] text-white tracking-tight leading-[1.08] mb-6 max-w-2xl">
          Você já tem o conhecimento.<br />
          Está na hora de construir a<br />
          autoridade que vai com ele.
        </h2>

        {/* Subheading matching description text */}
        <p className="text-base md:text-lg text-white/70 leading-relaxed font-sans max-w-xl mb-12">
          Comece hoje. Em 5 minutos você tem seu primeiro conteúdo no fluxo. Sem cartão, sem configuração, sem desculpa.
        </p>

        {/* Left aligned CTA Buttons matching referenced image */}
        <div className="flex flex-col sm:flex-row items-center justify-start gap-8 mb-12 w-full sm:w-auto">
          <GlowButton
            href="https://app.autorfloow.com/cadastro"
            className="w-full sm:w-auto min-w-[190px] text-center flex justify-center py-4 sm:py-3 text-base md:text-[13px]"
          >
            Comece grátis agora
          </GlowButton>
          <PremiumLinkButton href="#precos" lightTheme={false}>
            Ver planos e preços
          </PremiumLinkButton>
        </div>

        {/* Under-button features list matching exactly green check and lowercase text */}
        <div className="flex flex-wrap items-center justify-start gap-x-6 gap-y-2.5 text-xs text-white/60 font-sans font-medium">
          <div className="flex items-center gap-1">
            <span className="text-white/80">✓</span> 14 dias grátis
          </div>
          <div className="flex items-center gap-1">
            <span className="text-white/80">✓</span> Sem cartão de crédito
          </div>
          <div className="flex items-center gap-1">
            <span className="text-white/80">✓</span> Pronto em 5 minutos
          </div>
        </div>
      </div>
    </section>
  );
}

