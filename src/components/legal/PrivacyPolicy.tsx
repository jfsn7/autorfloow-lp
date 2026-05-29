import ReactMarkdown from 'react-markdown';
import { ArrowLeft } from 'lucide-react';

interface LegalPageProps {
  onBack: () => void;
}

const policyContent = `
# Política de Privacidade — AutorFloow

**Última atualização: maio de 2026**

---

## 1. Introdução

Esta Política de Privacidade descreve como o AutorFloow coleta, usa, armazena e protege os dados pessoais dos seus usuários, em conformidade com a Lei Geral de Proteção de Dados (LGPD — Lei 13.709/2018).

O AutorFloow é operado por José Ferdinando, pessoa física, com sede em Recife, Pernambuco, Brasil, que atua como **controlador** dos dados pessoais tratados pela plataforma.

Ao usar o AutorFloow, você concorda com as práticas descritas nesta Política.

---

## 2. Dados que coletamos

### 2.1 Dados fornecidos diretamente por você

| Dado | Finalidade |
|---|---|
| Nome | Identificação da conta e personalização da experiência |
| E-mail | Acesso à conta, comunicações e suporte |
| Profissão | Personalização de funcionalidades e sugestões de conteúdo |

### 2.2 Dados coletados automaticamente

| Dado | Finalidade |
|---|---|
| Dados de uso e comportamento no app | Melhoria do produto, análise de funcionalidades utilizadas e diagnóstico de problemas |
| Endereço IP e informações do dispositivo | Segurança da conta e prevenção de acessos não autorizados |
| Dados de navegação e sessão | Funcionamento técnico da plataforma |

### 2.3 Dados de pagamento

Os dados de pagamento (cartão de crédito, CPF quando aplicável) são coletados e processados diretamente pela **Stripe**. O AutorFloow não armazena dados de cartão em seus próprios servidores.

---

## 3. Base legal para o tratamento

O AutorFloow trata seus dados com base nas seguintes hipóteses previstas na LGPD:

- **Execução de contrato:** para criar e manter sua conta e prestar o serviço contratado
- **Legítimo interesse:** para melhorar o produto, garantir segurança e prevenir fraudes
- **Cumprimento de obrigação legal:** quando exigido por lei ou autoridade competente
- **Consentimento:** para comunicações de marketing, quando aplicável

---

## 4. Como usamos seus dados

Seus dados são usados para:

- Criar e gerenciar sua conta
- Prestar e melhorar os serviços da plataforma
- Processar pagamentos e gerenciar assinaturas
- Enviar comunicações relacionadas ao serviço (atualizações, avisos, suporte)
- Enviar comunicações de marketing, se você tiver optado por recebê-las
- Garantir a segurança da plataforma e prevenir uso indevido
- Cumprir obrigações legais e regulatórias

---

## 5. Compartilhamento de dados com terceiros

O AutorFloow compartilha dados com os seguintes fornecedores, exclusivamente para a prestação do serviço:

| Fornecedor | Finalidade | Política de privacidade |
|---|---|---|
| **Supabase** | Armazenamento de dados e autenticação | supabase.com/privacy |
| **Stripe** | Processamento de pagamentos | stripe.com/br/privacy |
| **Google Analytics** (ou similar) | Análise de uso e comportamento | policies.google.com/privacy |

Esses fornecedores atuam como **operadores** de dados e estão contratualmente obrigados a tratar seus dados apenas para as finalidades descritas acima, com padrões de segurança adequados.

O AutorFloow **não vende** dados pessoais a terceiros.

---

## 6. Armazenamento e segurança

6.1 Os dados são armazenados em servidores seguros fornecidos pelo Supabase, com criptografia em trânsito (TLS) e em repouso.

6.2 O acesso aos dados é restrito a pessoas autorizadas e necessário para a operação do serviço.

6.3 Em caso de incidente de segurança que afete seus dados, você será notificado nos prazos previstos pela LGPD.

---

## 7. Retenção de dados

| Situação | Prazo de retenção |
|---|---|
| Conta ativa | Enquanto o serviço estiver ativo |
| Conta cancelada | 30 dias após o cancelamento, para possível reativação |
| Após os 30 dias | Exclusão permanente dos dados pessoais |
| Obrigação legal | Pelo prazo exigido pela legislação aplicável |

---

## 8. Seus direitos como titular

Em conformidade com a LGPD, você tem direito a:

- **Confirmar** se tratamos seus dados pessoais
- **Acessar** os dados que temos sobre você
- **Corrigir** dados incompletos, inexatos ou desatualizados
- **Solicitar a exclusão** dos dados tratados com base no seu consentimento
- **Revogar o consentimento** para tratamentos baseados nessa hipótese legal
- **Portabilidade** dos seus dados para outro fornecedor de serviço
- **Informação** sobre os terceiros com quem compartilhamos seus dados

Para exercer qualquer desses direitos, entre em contato pelo e-mail de suporte informado na seção 11. Responderemos em até 15 dias úteis.

---

## 9. Cookies e rastreamento

O AutorFloow utiliza cookies e tecnologias similares para:

- Manter sua sessão ativa
- Analisar o uso da plataforma (via Google Analytics ou ferramenta similar)
- Melhorar a experiência de navegação

Você pode configurar seu navegador para bloquear cookies, mas isso pode afetar o funcionamento de algumas funcionalidades da plataforma.

---

## 10. Usuários menores de idade

O AutorFloow é destinado exclusivamente a maiores de 18 anos. Não coletamos intencionalmente dados de menores de idade. Se identificarmos que um cadastro foi feito por menor de 18 anos, a conta será encerrada e os dados excluídos.

---

## 11. Transferência internacional de dados

Alguns dos nossos fornecedores (Supabase, Stripe, Google) operam servidores fora do Brasil. Nesses casos, garantimos que a transferência ocorre com salvaguardas adequadas, conforme previsto na LGPD e nas políticas de privacidade desses fornecedores.

---

## 12. Alterações nesta Política

Esta Política pode ser atualizada periodicamente. Alterações relevantes serão comunicadas por e-mail ou notificação dentro da plataforma com antecedência mínima de 15 dias.

---

## 13. Contato e encarregado de dados (DPO)

Para dúvidas, solicitações de direitos ou reclamações relacionadas ao tratamento de dados pessoais:

**Responsável pelo tratamento:** José Ferdinando
**E-mail:** privacidade@autorfloow.com.br

Você também pode registrar reclamações junto à **Autoridade Nacional de Proteção de Dados (ANPD)**: www.gov.br/anpd
`;

export default function PrivacyPolicy({ onBack }: LegalPageProps) {
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
          <ReactMarkdown>{policyContent}</ReactMarkdown>
        </div>
      </div>
    </div>
  );
}
