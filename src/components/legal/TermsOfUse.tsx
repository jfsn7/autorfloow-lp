import ReactMarkdown from 'react-markdown';
import { ArrowLeft } from 'lucide-react';

interface LegalPageProps {
  onBack: () => void;
}

const termsContent = `
# Termos de Uso — AutorFloow

**Última atualização: maio de 2026**

---

## 1. Aceitação dos termos

Ao criar uma conta e acessar o AutorFloow, você declara ter lido, compreendido e concordado com estes Termos de Uso. Se não concordar com alguma cláusula, não utilize o serviço.

O uso do AutorFloow é restrito a pessoas com 18 anos ou mais. Ao se cadastrar, você confirma que atende a esse requisito.

---

## 2. O que é o AutorFloow

O AutorFloow é uma plataforma de gestão de produção de conteúdo voltada para profissionais liberais e especialistas que desejam organizar e manter constância na criação de conteúdo digital.

O serviço é operado por José Ferdinando, pessoa física, com sede em Recife, Pernambuco, Brasil.

---

## 3. Cadastro e conta

3.1 Para usar o AutorFloow, você precisa criar uma conta informando nome, e-mail e profissão.

3.2 Você é responsável pela confidencialidade das suas credenciais de acesso e por todas as atividades realizadas com sua conta.

3.3 Notifique imediatamente o suporte caso identifique uso não autorizado da sua conta.

3.4 O AutorFloow se reserva o direito de encerrar contas que violem estes Termos.

---

## 4. Planos e pagamento

4.1 O AutorFloow oferece um período de teste gratuito de 14 dias, sem necessidade de cartão de crédito.

4.2 Após o período de teste, a continuidade do serviço exige a contratação de um plano pago, com faturamento anual.

4.3 Os pagamentos são processados pela Stripe. Ao contratar um plano, você concorda também com os termos de uso da Stripe.

4.4 Os valores dos planos estão disponíveis na página de preços e podem ser alterados com aviso prévio de 30 dias.

4.5 Não há reembolso proporcional em caso de cancelamento antes do término do ciclo anual contratado, salvo nos casos previstos no Código de Defesa do Consumidor.

---

## 5. Uso do serviço

5.1 Você se compromete a usar o AutorFloow apenas para fins lícitos e de acordo com estes Termos.

5.2 É proibido:

- Usar o serviço para atividades ilegais ou que violem direitos de terceiros
- Tentar acessar áreas restritas da plataforma ou de outros usuários
- Inserir conteúdo que contenha vírus, malware ou código malicioso
- Revender, sublicenciar ou ceder o acesso à plataforma a terceiros sem autorização expressa
- Usar o serviço para fins diferentes dos descritos nestes Termos

5.3 O AutorFloow não se responsabiliza pelo conteúdo produzido, armazenado ou publicado pelos usuários por meio da plataforma.

---

## 6. Propriedade intelectual

6.1 Todo o código, design, marca, nome, logotipo e funcionalidades do AutorFloow são de propriedade exclusiva do operador e protegidos pelas leis de propriedade intelectual aplicáveis.

6.2 O conteúdo criado pelo usuário dentro da plataforma — textos, roteiros, ideias e publicações — permanece de propriedade do próprio usuário.

6.3 Ao usar o AutorFloow, o usuário concede ao operador uma licença limitada, não exclusiva e não transferível para processar e armazenar esse conteúdo com o único objetivo de prestar o serviço contratado.

---

## 7. Disponibilidade e manutenção

7.1 O AutorFloow se esforça para manter o serviço disponível de forma contínua, mas não garante disponibilidade ininterrupta.

7.2 Podem ocorrer interrupções programadas para manutenção, atualizações ou correções, com aviso prévio sempre que possível.

7.3 O AutorFloow não se responsabiliza por perdas decorrentes de indisponibilidade temporária do serviço.

---

## 8. Limitação de responsabilidade

8.1 O AutorFloow é fornecido "como está", sem garantias expressas ou implícitas além das previstas em lei.

8.2 O operador não se responsabiliza por danos indiretos, lucros cessantes ou perda de dados decorrentes do uso ou impossibilidade de uso do serviço, exceto nos casos previstos pelo Código de Defesa do Consumidor.

---

## 9. Cancelamento

9.1 O usuário pode cancelar sua conta a qualquer momento pelo painel de configurações ou entrando em contato com o suporte.

9.2 Após o cancelamento, os dados do usuário serão mantidos por 30 dias para possível reativação e, após esse prazo, excluídos conforme a Política de Privacidade.

9.3 O AutorFloow pode suspender ou encerrar contas que violem estes Termos, com ou sem aviso prévio dependendo da gravidade da infração.

---

## 10. Alterações nos termos

O AutorFloow pode atualizar estes Termos a qualquer momento. Alterações relevantes serão comunicadas por e-mail ou notificação dentro da plataforma com antecedência mínima de 15 dias. O uso contínuo do serviço após esse prazo implica aceitação dos novos termos.

---

## 11. Lei aplicável e foro

Estes Termos são regidos pela legislação brasileira, em especial pelo Código de Defesa do Consumidor (Lei 8.078/1990) e pelo Marco Civil da Internet (Lei 12.965/2014). Fica eleito o foro da comarca de Recife, Pernambuco, para dirimir eventuais controvérsias.

---

## 12. Contato

Dúvidas, solicitações ou reclamações relacionadas a estes Termos podem ser enviadas para:

**E-mail:** suporte@autorfloow.com.br
`;

export default function TermsOfUse({ onBack }: LegalPageProps) {
  return (
    <div className="bg-white min-h-screen pt-24 pb-20 px-6">
      <div className="max-w-3xl mx-auto">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-brand-neutral-500 hover:text-brand-green-600 transition-colors mb-12 font-sans font-medium"
        >
          <ArrowLeft className="w-4 h-4" />
          Voltar para a página inicial
        </button>

        <div className="markdown-body prose prose-slate prose-brand max-w-none">
          <ReactMarkdown>{termsContent}</ReactMarkdown>
        </div>
      </div>
    </div>
  );
}
