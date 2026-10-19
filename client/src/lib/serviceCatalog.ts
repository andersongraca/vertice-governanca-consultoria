import type { LucideIcon } from "lucide-react";
import {
  BadgeCheck,
  BookOpen,
  ClipboardCheck,
  Database,
  FileText,
  Globe,
  Layers3,
  Network,
  ShieldCheck,
  Target,
} from "lucide-react";

export type ServiceItem = {
  id: string;
  number: string;
  short: string;
  eyebrow: string;
  title: string;
  description: string;
  outcome: string;
  deliverables: string[];
  icon: LucideIcon;
  notice?: string;
};

export const serviceCatalog: ServiceItem[] = [
  {
    id: "gestao-servicos",
    number: "01",
    short: "Gestão de Serviços",
    eyebrow: "Serviços que sustentam a operação",
    title: "Gestão de Serviços de Tecnologia da Informação.",
    description:
      "Organizamos catálogos, níveis de serviço, indicadores, incidentes, problemas e ritos de acompanhamento para que a área de tecnologia entregue valor percebido pelas áreas de negócio.",
    outcome:
      "Uma operação de TI mais previsível, mensurável e conectada às prioridades da organização.",
    deliverables: [
      "Catálogo e níveis de serviço",
      "Indicadores e acordos de acompanhamento",
      "Modelo de governança e melhoria contínua",
    ],
    icon: Network,
  },
  {
    id: "gestao-projetos-ti",
    number: "02",
    short: "Projetos em TI",
    eyebrow: "Projetos que avançam com direção",
    title: "Gestão de Projetos e Programas em Tecnologia da Informação.",
    description:
      "Estruturamos portfólios, cronogramas, riscos, benefícios, dependências e ritos executivos para que projetos de TI evoluam com clareza de escopo, responsabilidade e decisão.",
    outcome:
      "Projetos críticos com cadência, transparência e capacidade de antecipar desvios.",
    deliverables: [
      "PMO e modelo de governança",
      "Plano integrado, riscos e dependências",
      "Status executivo e acompanhamento de benefícios",
    ],
    icon: ClipboardCheck,
  },
  {
    id: "alinhamento-estrategico",
    number: "03",
    short: "Alinhamento Estratégico",
    eyebrow: "Negócio e TIC na mesma direção",
    title: "Alinhamento dos processos estratégicos de negócio com a TIC.",
    description:
      "Conectamos objetivos institucionais, procedimentos, programas de investimento e recursos de TIC para transformar intenção estratégica em prioridades, decisões e planos de execução.",
    outcome:
      "Investimentos digitais orientados por valor, prioridade e capacidade real de execução.",
    deliverables: [
      "Mapa de objetivos e capacidades",
      "Roadmap de iniciativas e investimentos",
      "Matriz de prioridades, papéis e decisões",
    ],
    icon: Target,
  },
  {
    id: "gestao-conhecimento",
    number: "04",
    short: "Gestão do Conhecimento",
    eyebrow: "Conhecimento que permanece",
    title: "Gestão do conhecimento consolidado na cultura organizacional.",
    description:
      "Mapeamos conhecimentos críticos, práticas, decisões e pontos de dependência para criar rotinas de registro, compartilhamento, aprendizagem e continuidade organizacional.",
    outcome:
      "Menos dependência de pessoas-chave e mais capacidade de aprender, repetir e evoluir.",
    deliverables: [
      "Mapa de conhecimentos e riscos de perda",
      "Rituais e repositórios de aprendizagem",
      "Indicadores de adoção e continuidade",
    ],
    icon: BookOpen,
  },
  {
    id: "seguranca-confiabilidade",
    number: "05",
    short: "Segurança & Confiabilidade",
    eyebrow: "Recursos tecnológicos confiáveis",
    title: "Gestão de Segurança e Confiabilidade de Recursos Tecnológicos.",
    description:
      "Apoiamos a organização de riscos, controles, responsabilidades, evidências e rotinas de confiabilidade para proteger recursos tecnológicos e sustentar a continuidade da operação.",
    outcome:
      "Mais visibilidade sobre riscos tecnológicos, controles essenciais e capacidade de resposta.",
    deliverables: [
      "Matriz de riscos e controles",
      "Políticas, responsabilidades e evidências",
      "Plano de tratamento e acompanhamento",
    ],
    icon: ShieldCheck,
  },
  {
    id: "gestao-dados",
    number: "06",
    short: "Gestão de Dados",
    eyebrow: "Dados que sustentam decisão",
    title: "Gestão de Dados para decisões confiáveis.",
    description:
      "Estruturamos papéis, fluxos, qualidade, indicadores e responsabilidades para que os dados sejam compreendidos como ativo de gestão e não apenas como subproduto de sistemas.",
    outcome:
      "Dados mais rastreáveis, úteis e confiáveis para a liderança e para a operação.",
    deliverables: [
      "Mapa de dados, fluxos e responsabilidades",
      "Critérios de qualidade e indicadores",
      "Roadmap de governança e evolução",
    ],
    icon: Database,
    notice:
      "Quando o projeto exigir interpretação jurídica, parecer ou assessoria jurídica, a atuação técnica é conduzida em conjunto com profissional habilitado.",
  },
  {
    id: "aquisicoes-contratos",
    number: "07",
    short: "Aquisições & Contratos",
    eyebrow: "Fornecedores sob governança",
    title: "Gestão de Aquisições e Contratos de TIC.",
    description:
      "Apoiamos a definição de requisitos, critérios de aceite, indicadores, riscos de terceiros e rotinas de acompanhamento para que aquisições e contratos tecnológicos sejam geridos com clareza.",
    outcome:
      "Contratos mais acompanháveis, entregas verificáveis e decisões de fornecedor mais transparentes.",
    deliverables: [
      "Requisitos e critérios de aceite",
      "Indicadores, riscos e governança de terceiros",
      "Rotina de acompanhamento contratual",
    ],
    icon: FileText,
    notice:
      "A atuação é técnica e gerencial; análises jurídicas formais devem ser realizadas por assessoria jurídica competente.",
  },
  {
    id: "arquitetura-organizacional",
    number: "08",
    short: "Arquitetura Organizacional",
    eyebrow: "Maturidade de processos e pessoas",
    title: "Arquitetura Organizacional baseada em maturidade.",
    description:
      "Relacionamos processos, papéis, competências, responsabilidades e níveis de maturidade para orientar uma evolução organizacional que caiba na realidade das pessoas e da operação.",
    outcome:
      "Uma organização mais coerente entre processos, capacidades, papéis e resultados esperados.",
    deliverables: [
      "Leitura de maturidade de processos e pessoas",
      "Mapa de capacidades e responsabilidades",
      "Plano de evolução priorizado",
    ],
    icon: Layers3,
  },
  {
    id: "iso-27001-27701",
    number: "09",
    short: "ISO/IEC 27001 & 27701",
    eyebrow: "Segurança e privacidade com evidência",
    title: "Governança e implementação ISO/IEC 27001 e ISO/IEC 27701.",
    description:
      "Estruturamos diagnóstico de lacunas, sistema de gestão, papéis, riscos, controles, políticas, evidências e rotinas de melhoria para apoiar a implementação responsável de segurança da informação e privacidade.",
    outcome:
      "Uma jornada de conformidade com evidências, responsabilidades e evolução que a organização consegue sustentar.",
    deliverables: [
      "Gap assessment e plano de implementação",
      "Riscos, controles, políticas e evidências",
      "Preparação gerencial para auditorias e melhoria contínua",
    ],
    icon: BadgeCheck,
    notice:
      "A Vértice apoia a governança e a implementação. Certificação e auditoria independente devem ser conduzidas por organismo competente e independente.",
  },
  {
    id: "privacidade-dados-lusofona",
    number: "10",
    short: "Privacidade Lusófona",
    eyebrow: "Dados, países e responsabilidade",
    title: "Governança de Privacidade e Dados para operações lusófonas.",
    description:
      "Organizamos inventário, fluxos, papéis, contratos, riscos, transferências e evidências para operações que tratam dados no Brasil, Portugal, Angola, Moçambique e Cabo Verde.",
    outcome:
      "Uma base técnica verificável para que a organização tome decisões de privacidade com contexto jurídico e operacional.",
    deliverables: [
      "Mapa de jurisdições, dados, fluxos e terceiros",
      "Matriz de riscos, contratos, direitos e evidências",
      "Trilha de implementação, capacitação e revisão regulatória",
    ],
    icon: Globe,
    notice:
      "A Vértice presta apoio técnico de governança. Interpretação jurídica, pareceres, notificações formais e representação perante autoridades devem ser validados por profissional habilitado na jurisdição aplicável.",
  },
];

export function getServiceById(id: string) {
  return serviceCatalog.find(service => service.id === id) ?? serviceCatalog[0];
}
