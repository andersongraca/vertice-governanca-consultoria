export type ArticleBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string }
  | { type: "list"; items: string[] }
  | { type: "quote"; text: string };

export type BlogPost = {
  slug: string;
  number: string;
  category: string;
  title: string;
  excerpt: string;
  readTime: string;
  publishedAt: string;
  serviceId: string;
  featured?: boolean;
  blocks: ArticleBlock[];
};

export const blogCategories = [
  "Todos",
  "Governança",
  "Projetos",
  "Processos",
  "Conhecimento",
  "Segurança",
  "Dados",
  "Conformidade",
];

export const blogPosts: BlogPost[] = [
  {
    slug: "iso-27001-27701-da-intencao-a-evidencia",
    number: "01",
    category: "Conformidade",
    title: "ISO/IEC 27001 e 27701: da intenção à evidência.",
    excerpt:
      "Implementar segurança e privacidade não é colecionar políticas. É construir uma rotina de decisão, controle e evidência que sobreviva à operação.",
    readTime: "7 min de leitura",
    publishedAt: "19 out 2026",
    serviceId: "iso-27001-27701",
    featured: true,
    blocks: [
      {
        type: "paragraph",
        text: "Quando uma organização decide avançar com a ISO/IEC 27001 ou com a ISO/IEC 27701, a primeira pergunta não deveria ser apenas quais documentos faltam. A pergunta mais importante é: que decisões, responsabilidades e evidências precisam existir para que segurança da informação e privacidade façam parte da rotina?",
      },
      { type: "heading", text: "O sistema de gestão vem antes do documento" },
      {
        type: "paragraph",
        text: "Políticas são importantes, mas não operam sozinhas. Um sistema de gestão precisa conectar contexto, riscos, controles, pessoas, indicadores, evidências e melhoria contínua. É essa conexão que transforma um conjunto de intenções em uma capacidade organizacional verificável.",
      },
      {
        type: "list",
        items: [
          "definir escopo e contexto de forma compreensível",
          "atribuir papéis e responsabilidades que caibam na estrutura existente",
          "registrar riscos, controles, decisões e evidências",
          "criar ritos de acompanhamento e tratamento de não conformidades",
        ],
      },
      {
        type: "quote",
        text: "Conformidade sustentável é a capacidade de demonstrar, com clareza, como a organização decide e melhora.",
      },
      { type: "heading", text: "Preparar a auditoria é preparar a gestão" },
      {
        type: "paragraph",
        text: "A preparação para uma auditoria independente deve ser consequência de uma rotina bem estruturada, não um mutirão de última hora. O trabalho de implementação pode organizar lacunas, priorizar controles e preparar evidências; a certificação e a auditoria permanecem responsabilidades de organismo independente competente.",
      },
    ],
  },
  {
    slug: "gestao-de-servicos-ti-alem-do-sla",
    number: "02",
    category: "Governança",
    title: "Gestão de serviços de TI: além do SLA.",
    excerpt:
      "Um acordo de nível de serviço só gera valor quando a organização sabe o que está medindo, por que está medindo e qual decisão nasce daquele indicador.",
    readTime: "5 min de leitura",
    publishedAt: "16 out 2026",
    serviceId: "gestao-servicos",
    blocks: [
      {
        type: "paragraph",
        text: "O SLA costuma ser tratado como ponto de chegada da gestão de serviços. Na prática, ele é apenas uma peça de uma conversa maior sobre expectativa, capacidade, prioridade e valor percebido pelas áreas de negócio.",
      },
      { type: "heading", text: "O indicador precisa encontrar uma decisão" },
      {
        type: "paragraph",
        text: "Medir disponibilidade, tempo de resposta ou volume de chamados sem definir o que será feito com o resultado cria um painel bonito e uma gestão frágil. Cada indicador precisa ter um responsável, uma periodicidade e uma consequência de gestão.",
      },
      {
        type: "list",
        items: [
          "catálogo que traduza o serviço para a linguagem do negócio",
          "níveis de serviço negociados e compreendidos",
          "rotina para incidentes, problemas e mudanças",
          "revisão periódica de capacidade, risco e satisfação",
        ],
      },
      {
        type: "quote",
        text: "Serviço bem governado é aquele cuja promessa, entrega e melhoria podem ser conversadas na mesma mesa.",
      },
    ],
  },
  {
    slug: "projetos-de-ti-sem-governanca-viram-urgencia",
    number: "03",
    category: "Projetos",
    title: "Por que projetos de TI sem governança viram urgência.",
    excerpt:
      "Atraso, retrabalho e disputa por prioridade raramente começam no cronograma. Muitas vezes, começam quando ninguém sabe quem decide.",
    readTime: "6 min de leitura",
    publishedAt: "13 out 2026",
    serviceId: "gestao-projetos-ti",
    blocks: [
      {
        type: "paragraph",
        text: "Projetos de tecnologia podem ter equipes competentes e ainda assim perder previsibilidade. Quando decisões, dependências, benefícios e riscos não têm um espaço comum, a organização passa a administrar urgências em vez de governar o portfólio.",
      },
      { type: "heading", text: "Três perguntas para recuperar clareza" },
      {
        type: "list",
        items: [
          "qual resultado de negócio justifica esta iniciativa agora?",
          "qual decisão está bloqueada e quem tem autoridade para tomá-la?",
          "que risco ou dependência pode alterar o caminho antes do próximo marco?",
        ],
      },
      {
        type: "paragraph",
        text: "Um PMO útil não existe para produzir mais relatórios. Ele existe para organizar a conversa executiva, tornar o risco visível e criar uma cadência de decisão proporcional à complexidade do projeto.",
      },
      {
        type: "quote",
        text: "A governança do projeto começa quando o cronograma deixa de ser o único lugar onde a realidade aparece.",
      },
    ],
  },
  {
    slug: "alinhamento-estrategico-tic-investimento",
    number: "04",
    category: "Processos",
    title:
      "Alinhamento estratégico: quando TIC deixa de correr atrás da agenda.",
    excerpt:
      "Planejamento de tecnologia ganha força quando conecta objetivos, processos, investimentos e capacidade organizacional em uma mesma sequência de escolhas.",
    readTime: "6 min de leitura",
    publishedAt: "09 out 2026",
    serviceId: "alinhamento-estrategico",
    blocks: [
      {
        type: "paragraph",
        text: "Alinhar negócio e TIC não significa fazer a tecnologia dizer sim para todas as demandas. Significa criar um critério compartilhado para decidir quais iniciativas merecem investimento, qual capacidade será necessária e que resultado será observado.",
      },
      { type: "heading", text: "O alinhamento é uma prática de escolha" },
      {
        type: "paragraph",
        text: "Objetivos estratégicos precisam encontrar processos, capacidades, recursos e responsabilidades. Sem essa tradução, a estratégia permanece como mensagem institucional e os investimentos digitais são escolhidos por pressão, hábito ou visibilidade política.",
      },
      {
        type: "list",
        items: [
          "mapear capacidades e processos mais críticos",
          "relacionar iniciativas a objetivos e benefícios esperados",
          "explicitar restrições de pessoas, orçamento e dependências",
          "revisar o roadmap quando o contexto mudar",
        ],
      },
    ],
  },
  {
    slug: "conhecimento-organizacional-nao-pode-morar-em-uma-pessoa",
    number: "05",
    category: "Conhecimento",
    title: "Conhecimento organizacional não pode morar em uma pessoa.",
    excerpt:
      "Continuidade não nasce apenas de um repositório. Nasce de práticas que tornam o conhecimento encontrável, compartilhável e útil para decidir.",
    readTime: "5 min de leitura",
    publishedAt: "06 out 2026",
    serviceId: "gestao-conhecimento",
    blocks: [
      {
        type: "paragraph",
        text: "Toda organização possui conhecimentos críticos que não aparecem no organograma: atalhos, decisões históricas, critérios de exceção, relações e aprendizados que sustentam a operação. Quando tudo isso depende da memória de poucas pessoas, a organização fica vulnerável a férias, desligamentos e mudanças de contexto.",
      },
      { type: "heading", text: "Registrar não é burocratizar" },
      {
        type: "paragraph",
        text: "O objetivo da gestão do conhecimento não é documentar cada detalhe. É tornar explícito o que precisa ser repetido, aprendido ou protegido. A pergunta é simples: o que uma nova pessoa precisaria encontrar para tomar uma decisão segura amanhã?",
      },
      {
        type: "list",
        items: [
          "identificar conhecimentos cuja perda criaria risco",
          "criar momentos de transferência e aprendizagem",
          "organizar registros próximos ao fluxo de trabalho",
          "acompanhar adoção e atualização dos conteúdos",
        ],
      },
    ],
  },
  {
    slug: "dados-confiaveis-comecam-no-processo",
    number: "06",
    category: "Dados",
    title: "Dados confiáveis começam no processo, não no painel.",
    excerpt:
      "Qualidade de dados é consequência de responsabilidades, entradas, regras e decisões claras — não apenas de uma ferramenta de visualização.",
    readTime: "6 min de leitura",
    publishedAt: "02 out 2026",
    serviceId: "gestao-dados",
    blocks: [
      {
        type: "paragraph",
        text: "Quando um indicador é questionado, a conversa normalmente vai direto para a ferramenta. Mas a confiabilidade do dado começa antes: na definição do processo, na responsabilidade pelo registro, na regra de transformação e na decisão que será tomada com aquele número.",
      },
      { type: "heading", text: "Quatro camadas para uma gestão de dados útil" },
      {
        type: "list",
        items: [
          "propósito: para qual decisão o dado existe",
          "origem: onde e por quem ele é produzido",
          "qualidade: quais critérios tornam o dado confiável",
          "responsabilidade: quem acompanha, corrige e evolui",
        ],
      },
      {
        type: "quote",
        text: "Um dado governado é aquele cuja origem, significado e responsabilidade podem ser explicados sem improviso.",
      },
    ],
  },
  {
    slug: "maturidade-de-processos-e-pessoas",
    number: "07",
    category: "Processos",
    title:
      "Maturidade de processos e pessoas: o desenho precisa caber na realidade.",
    excerpt:
      "Arquitetura organizacional não é desenhar o organograma ideal. É conectar capacidades, responsabilidades e evolução possível.",
    readTime: "5 min de leitura",
    publishedAt: "28 set 2026",
    serviceId: "arquitetura-organizacional",
    blocks: [
      {
        type: "paragraph",
        text: "Modelos de maturidade ajudam a criar linguagem comum, mas não devem transformar a organização em uma escala abstrata. O valor está em enxergar o estágio atual, identificar o próximo salto possível e escolher mudanças que as pessoas consigam sustentar.",
      },
      { type: "heading", text: "Maturidade é capacidade repetível" },
      {
        type: "paragraph",
        text: "Uma prática só se torna maturidade quando deixa de depender de esforço heroico. Ela precisa de papéis, critérios, ferramentas, conhecimento e uma rotina que produza resultado mesmo quando o contexto muda.",
      },
      {
        type: "list",
        items: [
          "descrever o processo real antes de propor o processo ideal",
          "relacionar papéis e competências às entregas",
          "priorizar poucos avanços com efeito observável",
          "revisar a arquitetura quando a estratégia ou a operação mudarem",
        ],
      },
    ],
  },
];

export function getBlogPostBySlug(slug: string) {
  return blogPosts.find(post => post.slug === slug);
}
