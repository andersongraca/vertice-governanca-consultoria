export type TrainingTrack = {
  id: string;
  number: string;
  short: string;
  title: string;
  audience: string;
  description: string;
  duration: string;
  topics: string[];
  exercise: string;
  materials: string[];
  serviceId: string;
};

export const trainingTracks: TrainingTrack[] = [
  {
    id: "lgpd-pratica",
    number: "01",
    short: "LGPD na prática",
    title: "LGPD na prática: proteção de dados no cotidiano de trabalho",
    audience:
      "Colaboradores, lideranças e equipes técnicas que lidam com dados pessoais.",
    description:
      "Trilha educativa para reconhecer situações comuns de tratamento de dados e aplicar cuidados proporcionais. Princípios e bases legais são apresentados em linguagem introdutória; interpretações jurídicas devem ser validadas por profissional habilitado. O treinamento não garante conformidade.",
    duration: "Workshop de 4 a 8 horas; ajuste por público e escopo.",
    topics: [
      "Princípios e bases legais em linguagem introdutória",
      "Dados pessoais no cotidiano e pontos de atenção por atividade",
      "Coleta mínima, controle de acesso e critérios de retenção",
      "Solicitações de titulares e encaminhamento responsável",
      "Incidentes, fornecedores e canais de escalonamento",
    ],
    exercise:
      "Com dados fictícios ou anonimizados, revisar um fluxo de cadastro simulado, apontar excessos de coleta e propor cuidados de acesso, retenção e encaminhamento de uma ocorrência.",
    materials: [
      "Guia de boas práticas para equipes",
      "Checklist de situações e encaminhamentos",
    ],
    serviceId: "privacidade-dados-lusofona",
  },
  {
    id: "grc-gestores",
    number: "02",
    short: "Governança & GRC",
    title: "Governança, riscos e controles para decisões melhores",
    audience:
      "Gestores, lideranças de negócio e tecnologia e responsáveis por riscos e controles.",
    description:
      "Capacitação prática para conectar objetivos, responsabilidades, riscos, controles e evidências. O foco é tornar decisões e prioridades compreensíveis e acompanháveis, com exemplos ajustados ao contexto organizacional.",
    duration: "Workshop de 4 a 8 horas; ajuste por público e escopo.",
    topics: [
      "Papéis, fóruns e critérios de decisão",
      "Identificação e priorização de riscos",
      "Controles proporcionais e responsáveis definidos",
      "Indicadores, evidências e acompanhamento",
      "Planos de tratamento e melhoria contínua",
    ],
    exercise:
      "Com um cenário organizacional fictício, montar um registro breve de riscos, relacionar controles e responsáveis e definir evidências e próximos passos.",
    materials: [
      "Canvas de decisão e responsabilidades",
      "Matriz introdutória de riscos e controles",
    ],
    serviceId: "alinhamento-estrategico",
  },
  {
    id: "itil-servicos",
    number: "03",
    short: "Gestão de serviços",
    title: "Gestão de serviços de tecnologia orientada a valor",
    audience:
      "Gestores de serviços, equipes de operações, suporte e responsáveis por processos de TI.",
    description:
      "Introdução aplicada à organização e melhoria de serviços, conectando necessidades, fluxos de trabalho, responsabilidades e resultados. ITIL Version 5 é tratada como referência de estudo; não se trata de curso oficial, acreditado, certificação ou preparação homologada.",
    duration: "Workshop de 4 a 8 horas; ajuste por público e escopo.",
    topics: [
      "Serviço, valor e necessidades das partes interessadas",
      "Papéis, catálogo e acordos de acompanhamento",
      "Fluxos de atendimento e coordenação operacional",
      "Indicadores úteis e comunicação de desempenho",
      "Revisão de resultados e melhoria contínua",
    ],
    exercise:
      "A partir de um serviço fictício e chamados simulados, desenhar o fluxo de atendimento, atribuir responsabilidades e selecionar indicadores de acompanhamento.",
    materials: [
      "Canvas de fluxo de serviço",
      "Glossário e roteiro de melhoria",
    ],
    serviceId: "gestao-servicos",
  },
  {
    id: "ia-responsavel",
    number: "04",
    short: "Governança de IA",
    title: "Governança responsável para iniciativas de inteligência artificial",
    audience:
      "Lideranças, equipes de produto, dados, tecnologia, risco e áreas usuárias de IA.",
    description:
      "Trilha para organizar responsabilidades, riscos e pontos de supervisão ao longo do ciclo de iniciativas de IA. ISO/IEC 42001 é usada como referência de gestão, sem caracterizar curso oficial, acreditado, certificação ou preparação homologada.",
    duration: "Workshop de 4 a 8 horas; ajuste por público e escopo.",
    topics: [
      "Escopo, finalidade e contexto de uso da solução",
      "Papéis, prestação de contas e decisões humanas",
      "Dados, qualidade e dependências relevantes",
      "Riscos, salvaguardas e critérios de escalonamento",
      "Monitoramento, registro e revisão ao longo do ciclo",
    ],
    exercise:
      "Com um caso fictício de recomendação automatizada, mapear finalidade, participantes, dados, riscos, medidas de supervisão e perguntas para revisão antes do uso.",
    materials: [
      "Canvas de governança de iniciativa de IA",
      "Checklist introdutório de riscos e supervisão",
    ],
    serviceId: "gestao-dados",
  },
  {
    id: "privacidade-lusofona",
    number: "05",
    short: "Privacidade lusófona",
    title: "Governança de privacidade em operações lusófonas",
    audience:
      "Organizações e equipes que atuam em mais de um país de língua portuguesa.",
    description:
      "Aborda operações no Brasil, Portugal, Angola, Moçambique e Cabo Verde sem homogeneizar regras ou presumir requisitos iguais. A trilha orienta o mapeamento por país, setor e fluxo de dados e o encaminhamento de questões para análise jurídica local.",
    duration: "Workshop de 4 a 8 horas; ajuste por países, público e escopo.",
    topics: [
      "Países, setores, atividades e fluxos de dados em contexto",
      "Papéis, responsáveis e governança entre unidades",
      "Inventário de dados, terceiros e pontos de decisão",
      "Questões que requerem avaliação jurídica na jurisdição local",
      "Evidências, encaminhamentos e revisão das práticas",
    ],
    exercise:
      "Com uma operação fictícia em dois países, construir um mapa país-setor-fluxo e registrar dúvidas para encaminhamento à análise jurídica local, sem avaliar um caso real.",
    materials: [
      "Matriz país, setor e fluxo de dados",
      "Roteiro de questões para análise local",
    ],
    serviceId: "privacidade-dados-lusofona",
  },
  {
    id: "iso-seguranca",
    number: "06",
    short: "Segurança & privacidade",
    title: "Gestão integrada de segurança da informação e privacidade",
    audience:
      "Lideranças e equipes de segurança, privacidade, tecnologia, riscos e auditoria interna.",
    description:
      "Apresenta práticas de gestão, riscos, controles e evidências para segurança e privacidade. ISO/IEC 27001 e ISO/IEC 27701 são referências de trabalho; a trilha não é curso oficial, acreditado, certificação ou preparação homologada.",
    duration: "Workshop de 4 a 8 horas; ajuste por público e escopo.",
    topics: [
      "Contexto, escopo e responsabilidades de gestão",
      "Riscos e seleção de controles proporcionais",
      "Políticas, rotinas e evidências verificáveis",
      "Integração entre segurança da informação e privacidade",
      "Acompanhamento, revisão e melhoria do sistema de gestão",
    ],
    exercise:
      "Com uma organização fictícia, delimitar um escopo, registrar riscos, propor controles e indicar evidências e responsáveis para revisão.",
    materials: [
      "Checklist introdutório de gestão e controles",
      "Modelo de plano de ações e evidências",
    ],
    serviceId: "iso-27001-27701",
  },
];

export type TrainingFormat = {
  number: string;
  title: string;
  duration: string;
  description: string;
};

export const trainingFormats: TrainingFormat[] = [
  {
    number: "01",
    title: "Palestra",
    duration: "45 a 90 minutos; ajuste conforme o combinado.",
    description:
      "Conteúdo objetivo para sensibilização e alinhamento de conceitos com o público.",
  },
  {
    number: "02",
    title: "Workshop",
    duration: "4 a 8 horas; ajuste conforme o escopo.",
    description:
      "Encontro participativo com exercícios guiados e materiais de apoio.",
  },
  {
    number: "03",
    title: "Programa",
    duration: "Múltiplos encontros, definidos em conjunto.",
    description:
      "Jornada em etapas para aprofundar temas e apoiar a aprendizagem progressiva.",
  },
  {
    number: "04",
    title: "Sob medida",
    duration: "Definida após alinhamento de público e escopo.",
    description:
      "Conteúdo e dinâmica adaptados às prioridades e ao contexto da organização.",
  },
];

export type TrainingFaq = {
  question: string;
  answer: string;
};

export const trainingFaqs: TrainingFaq[] = [
  {
    question: "Os treinamentos podem ser corporativos ou remotos?",
    answer:
      "Sim. Formato, modalidade, público e agenda são definidos em conjunto antes da proposta.",
  },
  {
    question: "O treinamento oferece certificação profissional?",
    answer:
      "Quando previsto, pode haver certificado de participação. Ele não equivale a certificação profissional, curso oficial ou acreditado, nem a preparação homologada.",
  },
  {
    question: "O conteúdo substitui uma análise jurídica?",
    answer:
      "Não. O conteúdo é educativo e técnico; interpretações e decisões jurídicas devem ser validadas por profissional habilitado na jurisdição aplicável. Não há garantia de conformidade.",
  },
  {
    question: "Como são tratados exemplos e informações da organização?",
    answer:
      "Os exercícios usam dados fictícios ou anonimizados. Condições de confidencialidade e uso de informações eventualmente compartilhadas são alinhadas com a organização antes da atividade.",
  },
  {
    question: "Como solicitar escopo e valores?",
    answer:
      "O primeiro passo é alinhar objetivos, público, temas, modalidade e duração. A proposta é preparada a partir desse escopo; não há preços fixos neste catálogo.",
  },
];
