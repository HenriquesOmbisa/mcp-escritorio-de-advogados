import type { LucideIcon } from "lucide-react";
import {
  Scale,
  Briefcase,
  Users,
  Landmark,
  ShieldCheck,
  FileText,
  HeartHandshake,
  Building2,
  Banknote,
} from "lucide-react";

export const SITE_NAME = "MPC Escritório de Advogados";
export const SITE_SHORT_NAME = "MPC Advogados";
export const SITE_DESCRIPTION =
  "Sociedade de advogados em Luanda, Angola, com prática consolidada em Direito Civil, Comercial, do Trabalho, Fiscal e Penal. Consultas jurídicas, assessoria e representação com rigor e confidencialidade.";

export const SITE_URL = "https://mpcadvogados.ao";

export const CONTACT = {
  address: "Luanda, Angola",
  phone: "+244 923 456 789",
  phoneSecondary: "+244 222 456 789",
  email: "geral@mpcadvogados.ao",
  hours: "Segunda a Sexta, das 8h00 às 17h00",
};

export const NAV_LINKS = [
  { href: "/", label: "Início" },
  { href: "/sobre-nos", label: "Sobre Nós" },
  { href: "/areas-de-actuacao", label: "Áreas de Actuação" },
  { href: "/consultas", label: "Consultas" },
  { href: "/contactos", label: "Contactos" },
] as const;

export type AreaDeActuacao = {
  slug: string;
  titulo: string;
  descricao: string;
  detalhe: string;
  servicos: string[];
  icon: LucideIcon;
};

export const AREAS_DE_ACTUACAO: AreaDeActuacao[] = [
  {
    slug: "direito-civil",
    titulo: "Direito Civil",
    descricao:
      "Aconselhamento e litigância em matéria de obrigações, responsabilidade civil, propriedade, contratos e questões de direito da família e sucessões.",
    detalhe:
      "O Direito Civil é a base das relações jurídicas entre particulares. A nossa equipa acompanha clientes em acções judiciais e extrajudiciais, defendendo direitos patrimoniais e pessoais com rigor técnico e uma postura de negociação que privilegia soluções consensuais sempre que possível.",
    servicos: [
      "Acções de responsabilidade civil e indemnizações",
      "Contratos civis e obrigações",
      "Questões de propriedade e posse",
      "Direito de arrendamento",
      "Usucapião e registo predial",
      "Litigância cível em todas as instâncias",
    ],
    icon: Scale,
  },
  {
    slug: "direito-comercial",
    titulo: "Direito Comercial",
    descricao:
      "Constituição de sociedades, fusões e aquisições, contratos comerciais, due diligence e consultoria permanente a empresas em Angola.",
    detalhe:
      "Acompanhamos empresas em todas as fases do seu ciclo de vida, da constituição à reestruturação. Combinamos conhecimento do ordenamento jurídico angolano com uma visão prática do ambiente de negócios, assegurando operações seguras e contratos que protegem efectivamente os interesses dos nossos clientes.",
    servicos: [
      "Constituição e registo de sociedades",
      "Contratos comerciais e parcerias",
      "Fusões, aquisições e joint ventures",
      "Due diligence de empresas",
      "Reestruturação e dissolução de sociedades",
      "Assessoria permanente a empresas",
    ],
    icon: Briefcase,
  },
  {
    slug: "direito-do-trabalho",
    titulo: "Direito do Trabalho",
    descricao:
      "Assessoria a empregadores e trabalhadores em contratos de trabalho, processos disciplinares, despedimentos e negociações coletivas.",
    detalhe:
      "Prestamos assessoria preventiva e contenciosa em matéria laboral, ajudando empresas a cumprir a legislação angolana e trabalhadores a verem respeitados os seus direitos. Actuamos em processos disciplinares, despedimentos, acordos de rescisão e negociações com sindicatos.",
    servicos: [
      "Contratos e acordos de trabalho",
      "Processos disciplinares",
      "Despedimentos e rescisões",
      "Acidentes de trabalho e doença profissional",
      "Negociação colectiva e sindicatos",
      "Contencioso laboral",
    ],
    icon: Users,
  },
  {
    slug: "direito-fiscal",
    titulo: "Direito Fiscal",
    descricao:
      "Planeamento fiscal, contencioso administrativo e fiscal, e representação perante a Administração Geral Tributária de Angola.",
    detalhe:
      "Acompanhamos particulares e empresas em todas as questões fiscais, desde o planeamento à defesa em contencioso. Representamos os nossos clientes perante a Administração Geral Tributária de Angola, garantindo que os seus direitos são defendidos com conhecimento profundo da legislação em vigor.",
    servicos: [
      "Planeamento e consultoria fiscal",
      "Declarações e obrigações fiscais",
      "Inspecções e auditorias fiscais",
      "Contencioso administrativo e fiscal",
      "Recursos e reclamações graciosas",
      "Fiscalidade internacional",
    ],
    icon: Landmark,
  },
  {
    slug: "direito-penal",
    titulo: "Direito Penal",
    descricao:
      "Defesa penal em processos de natureza económica, financeira e comum, e assessoria em matéria de compliance e criminalidade económica.",
    detalhe:
      "A nossa prática penal combina defesa técnica exigente com um acompanhamento próximo do cliente. Intervimos em todas as fases do processo, desde o inquérito ao julgamento, incluindo processos de criminalidade económica e financeira, onde a complexidade exige uma estratégia cuidadosa.",
    servicos: [
      "Defesa penal em todas as fases do processo",
      "Criminalidade económica e financeira",
      "Branqueamento de capitais",
      "Corrupção e criminalidade empresarial",
      "Assessoria em matéria de compliance",
      "Representação em medidas de coacção",
    ],
    icon: ShieldCheck,
  },
  {
    slug: "direito-energia-e-recursos",
    titulo: "Energia e Recursos Naturais",
    descricao:
      "Apoio jurídico a operadores do sector petrolífero, mineiro e energético, incluindo contratos de concessão e regulação.",
    detalhe:
      "Angola é um dos principais mercados de energia e recursos naturais de África, e a nossa equipa conhece a fundo o seu enquadramento legal e regulatório. Assistimos operadores nacionais e internacionais em contratos de concessão, regulação, parcerias e questões de direito do petróleo e dos recursos minerais.",
    servicos: [
      "Contratos de concessão e partilha de produção",
      "Regulação do sector petrolífero e mineiro",
      "Assessoria a operadores e prestadores de serviços",
      "Questões ambientais e de licenciamento",
      "Parcerias público-privadas",
      "Direito da energia",
    ],
    icon: FileText,
  },
  {
    slug: "direito-familia-e-sucessoes",
    titulo: "Família e Sucessões",
    descricao:
      "Divórcios, regulação do poder parental, partilhas e testamentos, com abordagem sensível e confidencial às relações familiares.",
    detalhe:
      "Sabemos que as questões familiares são, muitas vezes, momentos delicados da vida das pessoas. Actuamos com sensibilidade, discrição e objectividade, procurando soluções que protejam a estabilidade familiar e os interesses de todos, nomeadamente das crianças.",
    servicos: [
      "Divórcios e separações",
      "Regulação do poder parental",
      "Pensões de alimentos",
      "Partilha de bens",
      "Testamentos e inventários",
      "Habilitações de herdeiros",
    ],
    icon: HeartHandshake,
  },
  {
    slug: "direito-imobiliario",
    titulo: "Direito Imobiliário",
    descricao:
      "Aquisição e transmissão de imóveis, arrendamento, licenciamentos e resolução de conflitos relacionados com a propriedade.",
    detalhe:
      "O sector imobiliário em Angola apresenta oportunidades e desafios próprios. Apoiamos compradores, vendedores, investidores e promotores em operações seguras, assegurando a verificação da documentação, o cumprimento das formalidades e a protecção dos direitos de propriedade.",
    servicos: [
      "Aquisição e venda de imóveis",
      "Due diligence imobiliária",
      "Contratos de arrendamento",
      "Licenciamentos e legalizações",
      "Registo predial e conservatórias",
      "Litígios de propriedade e posse",
    ],
    icon: Building2,
  },
  {
    slug: "banca-e-seguros",
    titulo: "Banca e Seguros",
    descricao:
      "Assessoria a instituições financeiras e seguradoras em operações de crédito, garantias, regulação e recuperação de crédito.",
    detalhe:
      "Assistimos instituições financeiras e seguradoras na sua operação em Angola, desde a estruturação de operações de crédito e garantias até à defesa dos seus interesses em processos de recuperação. Acompanhamos de perto a evolução regulatória do sector financeiro angolano.",
    servicos: [
      "Operações de crédito e financiamento",
      "Garantias e cauções",
      "Recuperação de crédito e execuções",
      "Contratos de seguro e sinistros",
      "Regulação bancária e de seguros",
      "Contencioso bancário",
    ],
    icon: Banknote,
  },
];

export const STATS = [
  { value: "18+", label: "Anos de prática jurídica" },
  { value: "350+", label: "Casos concluídos com êxito" },
  { value: "120+", label: "Empresas assessoradas" },
  { value: "98%", label: "Clientes satisfeitos" },
];
