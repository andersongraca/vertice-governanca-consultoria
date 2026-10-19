export type ConsultingCapability = {
  number: string;
  title: string;
  description: string;
  deliverable: string;
};

export const consultingCapabilities: ConsultingCapability[] = [
  {
    number: "A",
    title: "Estratégia, planejamento e investimento",
    description:
      "Conectamos objetivos, capacidades, orçamento, investimentos e roadmaps de TIC para orientar escolhas executáveis.",
    deliverable: "Plano, roadmap e critérios de priorização",
  },
  {
    number: "B",
    title: "Processos, qualidade e transformação",
    description:
      "Mapeamos processos, papéis, indicadores e gargalos para apoiar melhoria contínua, qualidade de ativos e transformação digital.",
    deliverable: "Processos modelados, métricas e agenda de evolução",
  },
  {
    number: "C",
    title: "Governança de IA e uso responsável",
    description:
      "Organizamos casos de uso, papéis, riscos, critérios de aprovação e controles para adoção responsável de IA e dados.",
    deliverable: "Diretrizes, inventário de casos e matriz de riscos",
  },
  {
    number: "D",
    title: "Pessoas, conhecimento e mudança",
    description:
      "Apoiamos capacidades, cultura, transferência de conhecimento e gestão da mudança para que a transformação seja incorporada.",
    deliverable: "Mapa de competências, ritos e plano de adoção",
  },
];
