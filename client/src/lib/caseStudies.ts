export type CaseStudy = {
  id: string;
  serviceId: string;
  number: string;
  title: string;
  context: string;
  intervention: string;
  evidence: string;
  successSignal: string;
};

export const caseStudies: CaseStudy[] = [
  {
    id: "catalogo-servicos-previsivel",
    serviceId: "gestao-servicos",
    number: "01",
    title: "Um catálogo que tira a operação do modo reativo.",
    context:
      "Áreas de negócio acionam a tecnologia por canais diferentes, com expectativas pouco claras e pouca visibilidade sobre prioridade e capacidade.",
    intervention:
      "Desenho de catálogo, níveis de serviço, indicadores e ritos para incidentes, problemas, mudanças e revisão de capacidade.",
    evidence:
      "Catálogo publicado, responsáveis nomeados, indicadores com definição e rotina de acompanhamento registrada.",
    successSignal:
      "Promessas de serviço e decisões de prioridade passam a ser conversadas na mesma mesa.",
  },
  {
    id: "portfolio-com-prioridade",
    serviceId: "gestao-projetos-ti",
    number: "02",
    title: "Um portfólio que volta a ter prioridade.",
    context:
      "Projetos de TI competem pela mesma equipe, acumulam dependências e chegam à liderança apenas quando o atraso já virou urgência.",
    intervention:
      "Implantação de uma governança proporcional, com critérios de priorização, riscos, dependências, status executivo e revisão de benefícios.",
    evidence:
      "Portfólio consolidado, decisões pendentes visíveis, responsáveis por risco e cadência executiva de acompanhamento.",
    successSignal:
      "A organização consegue decidir o que avança, o que espera e o que precisa ser redirecionado.",
  },
  {
    id: "investimento-conectado-estrategia",
    serviceId: "alinhamento-estrategico",
    number: "03",
    title: "Investimentos de TIC conectados à estratégia.",
    context:
      "O planejamento institucional fala em objetivos, enquanto a área de tecnologia recebe demandas isoladas e difíceis de comparar.",
    intervention:
      "Tradução de objetivos em capacidades, processos, iniciativas, investimentos, restrições e responsabilidades de execução.",
    evidence:
      "Mapa de alinhamento, roadmap priorizado e critérios explícitos para revisar investimentos quando o contexto muda.",
    successSignal:
      "Cada iniciativa digital consegue explicar que objetivo atende, que capacidade exige e que benefício pretende produzir.",
  },
  {
    id: "conhecimento-que-permanece",
    serviceId: "gestao-conhecimento",
    number: "04",
    title: "Conhecimento crítico que deixa de depender de uma pessoa.",
    context:
      "Decisões, atalhos operacionais e critérios de exceção estão concentrados em poucas pessoas e não são encontrados no fluxo de trabalho.",
    intervention:
      "Mapa de conhecimentos críticos, ritos de transferência, repositórios próximos da operação e critérios de atualização e adoção.",
    evidence:
      "Matriz de dependências, registros de decisões, trilhas de transferência e indicadores de uso dos conteúdos.",
    successSignal:
      "Uma nova pessoa consegue encontrar o contexto necessário para tomar decisões mais seguras e repetíveis.",
  },
  {
    id: "controles-com-evidencia",
    serviceId: "seguranca-confiabilidade",
    number: "05",
    title: "Controles essenciais com dono e evidência.",
    context:
      "A organização conhece riscos tecnológicos, mas políticas, controles, responsabilidades e evidências não formam uma rotina verificável.",
    intervention:
      "Matriz de riscos e controles, definição de donos, tratamento priorizado, políticas essenciais e ritos de acompanhamento.",
    evidence:
      "Registro de riscos, controles associados, responsáveis, evidências esperadas e histórico de tratamento.",
    successSignal:
      "A liderança consegue enxergar quais riscos estão tratados, quais permanecem abertos e que decisão cada um exige.",
  },
  {
    id: "indicadores-que-decidem",
    serviceId: "gestao-dados",
    number: "06",
    title: "Indicadores que passam a sustentar decisão.",
    context:
      "Painéis apresentam números diferentes para a mesma pergunta e ninguém sabe explicar origem, regra, qualidade ou responsável pelo dado.",
    intervention:
      "Mapa de fluxos, definição de papéis, critérios de qualidade, regras de transformação e rotina de correção e evolução.",
    evidence:
      "Dicionário de dados, linhagem mínima, responsáveis, critérios de qualidade e registro das decisões apoiadas pelo indicador.",
    successSignal:
      "Uma divergência deixa de gerar opinião e passa a gerar investigação rastreável sobre origem, regra e responsabilidade.",
  },
  {
    id: "contrato-verificavel",
    serviceId: "aquisicoes-contratos",
    number: "07",
    title: "Um contrato de TIC com entrega verificável.",
    context:
      "Fornecedor e contratante discutem entrega, aceite e desempenho porque requisitos, indicadores e evidências não foram traduzidos para a rotina.",
    intervention:
      "Requisitos objetivos, critérios de aceite, indicadores, riscos de terceiros, papéis e rito de acompanhamento contratual.",
    evidence:
      "Matriz de obrigações, critérios de aceite, atas de acompanhamento, indicadores e trilha de decisões e pendências.",
    successSignal:
      "A conversa com o fornecedor se apoia em evidências de entrega, não apenas em percepção ou pressão de prazo.",
  },
  {
    id: "maturidade-que-orienta",
    serviceId: "arquitetura-organizacional",
    number: "08",
    title: "Maturidade que vira agenda de desenvolvimento.",
    context:
      "Processos e pessoas evoluem em ritmos diferentes, e modelos de maturidade acabam descritos sem conexão com capacidades e responsabilidades reais.",
    intervention:
      "Leitura do processo real, avaliação de maturidade, mapa de capacidades, papéis e plano de evolução possível para a organização.",
    evidence:
      "Diagnóstico com critérios, mapa de lacunas, responsáveis por evolução e marcos acompanháveis.",
    successSignal:
      "Maturidade deixa de ser uma nota isolada e passa a orientar o próximo avanço que as pessoas conseguem sustentar.",
  },
  {
    id: "iso-que-se-sustenta",
    serviceId: "iso-27001-27701",
    number: "09",
    title: "Uma implementação ISO que não vira mutirão.",
    context:
      "A organização possui políticas dispersas e pressão por auditoria, mas não consegue demonstrar sistema de gestão, riscos, controles e melhoria contínua.",
    intervention:
      "Gap assessment, definição de escopo, papéis, riscos, controles, políticas, evidências, indicadores e preparação gerencial para auditoria independente.",
    evidence:
      "Plano de implementação, registros de risco e controle, evidências versionadas e rito de análise crítica e melhoria.",
    successSignal:
      "Segurança e privacidade entram na rotina de gestão, em vez de aparecerem apenas na semana da auditoria.",
  },
  {
    id: "operacao-lusofona-mapeada",
    serviceId: "privacidade-dados-lusofona",
    number: "10",
    title: "Uma operação lusófona com países e responsabilidades visíveis.",
    context:
      "Dados circulam entre Brasil, Portugal, Angola, Moçambique ou Cabo Verde por meio de cloud, fornecedores, suporte e integrações, sem um mapa comum de responsabilidades.",
    intervention:
      "Inventário, mapa de jurisdições e fluxos, contratos, transferências, riscos, fontes regulatórias, controles e trilha de revisão.",
    evidence:
      "Mapa de países e terceiros, matriz de responsabilidades, registro de fontes oficiais e plano técnico para validação jurídica.",
    successSignal:
      "A organização consegue separar requisito vigente, recomendação técnica e decisão jurídica antes de alterar processos ou contratos.",
  },
];

export function getCaseStudyByServiceId(serviceId: string) {
  return caseStudies.find(caseStudy => caseStudy.serviceId === serviceId);
}
