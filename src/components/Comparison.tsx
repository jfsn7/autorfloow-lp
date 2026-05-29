import { Check, X } from 'lucide-react';

const comparisonRows = [
  {
    feature: 'Feito para especialistas e profissionais liberais',
    autorFloow: 'yes',
    notionTrello: 'X',
    planilha: 'X',
  },
  {
    feature: 'Fluxo de produção pronto para usar',
    autorFloow: 'yes',
    notionTrello: 'Configura você mesmo',
    planilha: 'X',
  },
  {
    feature: 'Banco de ideias com canal e formato',
    autorFloow: 'yes',
    notionTrello: 'Com adaptação',
    planilha: 'X',
  },
  {
    feature: 'Calendário editorial integrado',
    autorFloow: 'yes',
    notionTrello: 'Com adaptação',
    planilha: 'Manual',
  },
  {
    feature: 'Insights de constância e diagnóstico semanal',
    autorFloow: 'yes',
    notionTrello: 'X',
    planilha: 'X',
  },
  {
    feature: 'Biblioteca com métricas por publicação',
    autorFloow: 'yes',
    notionTrello: 'X',
    planilha: 'Manual',
  },
  {
    feature: 'Workspace para equipe de até 3 pessoas',
    autorFloow: 'yes',
    notionTrello: 'yes',
    planilha: 'X',
  },
  {
    feature: 'Pronto para usar em 5 minutos',
    autorFloow: 'yes',
    notionTrello: 'X',
    planilha: 'X',
  },
];

const GreenCheck = () => (
  <svg className="w-5 h-5 text-[#2B724A] mx-auto shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const GrayCheck = () => (
  <svg className="w-5 h-5 text-brand-neutral-400 mx-auto shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const GrayCross = () => (
  <span className="text-brand-neutral-300 font-sans font-light text-base select-none block text-center shrink-0">✕</span>
);

export default function Comparison() {
  return (
    <section className="bg-brand-neutral-50 py-32 px-6 md:px-12 border-b border-brand-neutral-200" id="por-que-autorfloow">
      <div className="max-w-6xl mx-auto">
        
        {/* Apple/Airbnb-Style Split Header without "04 — A Diferença" */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 mb-24 items-start">
          <div className="lg:col-span-6">
            <h2 className="font-display font-medium text-4xl md:text-5.5xl text-brand-neutral-800 tracking-tight leading-tight">
              Notion e Trello foram <br className="hidden md:inline" />
              <span className="text-brand-green-500">feitos para todo mundo.</span>
            </h2>
          </div>
          <div className="lg:col-span-6 lg:pt-8">
            <p className="text-lg text-brand-neutral-500 leading-relaxed font-sans">
              Você já tentou adaptar o Notion. Já configurou uma planilha. Já criou o template perfeito. E abandonou tudo em duas semanas, não por falta de vontade, mas porque nenhuma dessas ferramentas foi feita para a rotina de um especialista. O AutorFloow foi.
            </p>
          </div>
        </div>

        {/* Comparison Board - Custom Table Design exactly like user request */}
        <div className="border border-brand-neutral-200 rounded-2xl bg-white overflow-hidden shadow-[0_16px_40px_rgba(27,30,26,0.02)]">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse table-auto min-w-[720px]">
              <thead>
                <tr className="bg-[#FAF9F6] border-b border-brand-neutral-200 font-display">
                  <th className="py-5 px-6 text-sm font-bold text-brand-neutral-800 w-[42%] pl-8">
                    Recurso
                  </th>
                  <th className="py-5 px-6 text-[15px] font-bold text-white text-center bg-[#2B724A] w-[22%] tracking-wider">
                    AutorFloow
                  </th>
                  <th className="py-5 px-6 text-sm font-bold text-brand-neutral-800 text-center w-[18%]">
                    Notion / Trello
                  </th>
                  <th className="py-5 px-6 text-sm font-bold text-brand-neutral-800 text-center w-[18%]">
                    Planilha
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-brand-neutral-200/50 font-sans">
                {comparisonRows.map((row, i) => {
                  const isEven = i % 2 === 1; // Shaded alternate row styling
                  return (
                    <tr 
                      key={i} 
                      className={`transition-colors ${isEven ? 'bg-[#FAF9F6]/40' : 'bg-white'}`}
                    >
                      {/* Feature Column */}
                      <td className="py-4.5 px-6 pl-8 text-sm md:text-[14.5px] font-medium text-brand-neutral-800">
                        {row.feature}
                      </td>

                      {/* AutorFloow Column */}
                      <td className={`py-4.5 px-6 text-center border-x border-brand-neutral-200/20 ${isEven ? 'bg-[#E8F4EE]/50' : 'bg-white'}`}>
                        <div className="flex items-center justify-center">
                          <GreenCheck />
                        </div>
                      </td>

                      {/* Notion / Trello Column */}
                      <td className="py-4.5 px-6 text-center text-sm">
                        {row.notionTrello === 'yes' ? (
                          <div className="flex items-center justify-center">
                            <GrayCheck />
                          </div>
                        ) : row.notionTrello === 'X' ? (
                          <div className="flex items-center justify-center">
                            <GrayCross />
                          </div>
                        ) : (
                          <span className="text-xs md:text-[13px] font-medium text-brand-neutral-500 block text-center">
                            {row.notionTrello}
                          </span>
                        )}
                      </td>

                      {/* Planilha Column */}
                      <td className="py-4.5 px-6 text-center text-sm">
                        {row.planilha === 'yes' ? (
                          <div className="flex items-center justify-center">
                            <GrayCheck />
                          </div>
                        ) : row.planilha === 'X' ? (
                          <div className="flex items-center justify-center">
                            <GrayCross />
                          </div>
                        ) : (
                          <span className="text-xs md:text-[13px] font-medium text-brand-neutral-500 block text-center">
                            {row.planilha}
                          </span>
                        )}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </section>
  );
}
