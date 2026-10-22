export type GrcPillar = {
  number: string;
  label: string;
  title: string;
  description: string;
  outputs: string;
};

export type GrcMethodGroup = {
  number: string;
  title: string;
  description: string;
  methods: string[];
};

export const grcPillars: GrcPillar[] = [
  {
    number: "G",
    label: "Governança",
    title: "Decisão com responsabilidade visível.",
    description:
      "Conectamos objetivos, papéis, políticas, investimentos, comitês e indicadores para que a tecnologia responda à estratégia da organização.",
    outputs: "Modelo de decisão, papéis, políticas e roadmap",
  },
  {
    number: "R",
    label: "Riscos",
    title: "Risco tratado antes de virar urgência.",
    description:
      "Mapeamos riscos estratégicos, operacionais, tecnológicos, de dados, projetos, serviços, fornecedores, continuidade e inteligência artificial.",
    outputs:
      "Registro de riscos, controles, responsáveis e plano de tratamento",
  },
  {
    number: "C",
    label: "Conformidade",
    title: "Evidência para sustentar a confiança.",
    description:
      "Organizamos requisitos, controles, fontes, responsabilidades e evidências para apoiar normas, auditorias, privacidade e decisões regulatórias.",
    outputs: "Matriz de requisitos, evidências e agenda de melhoria",
  },
];

export const grcCycle = [
  {
    number: "01",
    title: "Ler o contexto",
    description:
      "Entender objetivos, serviços, processos, pessoas, dados, tecnologia, obrigações e decisões pendentes.",
  },
  {
    number: "02",
    title: "Desenhar a governança",
    description:
      "Definir papéis, fóruns, políticas, critérios de priorização, indicadores e caminhos de escalonamento.",
  },
  {
    number: "03",
    title: "Tratar riscos",
    description:
      "Avaliar riscos, controles, dependências, terceiros, continuidade e capacidade real de execução.",
  },
  {
    number: "04",
    title: "Construir evidências",
    description:
      "Transformar decisões e controles em registros, rotinas, indicadores e evidências que a equipe consegue sustentar.",
  },
  {
    number: "05",
    title: "Melhorar continuamente",
    description:
      "Acompanhar resultados, aprender com incidentes e ajustar o modelo sem criar burocracia desconectada da operação.",
  },
];

export const grcMethodGroups: GrcMethodGroup[] = [
  {
    number: "01",
    title: "Governança e risco",
    description:
      "Referências para estruturar decisões, controles, responsabilidades e tratamento de riscos.",
    methods: [
      "COBIT",
      "ISO/IEC 27001",
      "ISO/IEC 27701",
      "ISO/IEC 42001",
      "COSO",
    ],
  },
  {
    number: "02",
    title: "Serviços, projetos e qualidade",
    description:
      "Repertório para conectar valor, execução, portfólio, melhoria e indicadores de desempenho.",
    methods: [
      "ITIL Version 5",
      "PMBoK",
      "PRINCE2",
      "Scrum",
      "Kanban",
      "Lean IT",
      "KPIs",
      "OKRs",
    ],
  },
  {
    number: "03",
    title: "Processos, dados e arquitetura",
    description:
      "Métodos para tornar fluxos, informação, capacidades e dependências mais compreensíveis.",
    methods: [
      "BPMN",
      "DMBoK",
      "TOGAF",
      "Qualidade de processos",
      "Arquitetura de capacidades",
    ],
  },
  {
    number: "04",
    title: "Transformação e pessoas",
    description:
      "Abordagens para mudança, inovação, aprendizagem, adoção e evolução organizacional.",
    methods: [
      "Design Thinking",
      "Lean Inception",
      "BMC",
      "VPC",
      "MVP",
      "Lean",
      "Seis Sigma",
      "Gestão da mudança",
    ],
  },
];

export const grcDeliverables = [
  "Diagnóstico executivo de Governança, Riscos e Conformidade",
  "Modelo de governança, papéis, comitês e critérios de decisão",
  "Registro de riscos, matriz de controles e plano de tratamento",
  "Políticas, procedimentos, indicadores e matriz de evidências",
  "Roadmap de TIC, projetos, serviços, dados, segurança, privacidade ou IA",
  "Preparação gerencial para auditorias, revisões e melhoria contínua",
];
