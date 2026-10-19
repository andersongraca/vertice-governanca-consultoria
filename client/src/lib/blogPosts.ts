export type ArticleBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string }
  | { type: "list"; items: string[] }
  | { type: "quote"; text: string };

export type ArticleSource = {
  label: string;
  href: string;
};

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
  sources?: ArticleSource[];
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
  "IA",
  "Privacidade",
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
  {
    slug: "protecao-de-dados-lusofona-governanca-antes-da-promessa",
    number: "08",
    category: "Privacidade",
    title: "Proteção de dados lusófona: governança antes da promessa.",
    excerpt:
      "LGPD, RGPD, Angola, Moçambique e Cabo Verde não formam uma regra única. O primeiro trabalho é tornar visíveis os fluxos, as responsabilidades e as fontes que sustentam cada decisão.",
    readTime: "8 min de leitura",
    publishedAt: "19 out 2026",
    serviceId: "privacidade-dados-lusofona",
    blocks: [
      {
        type: "paragraph",
        text: "Falar português não significa operar sob a mesma regra de proteção de dados. Uma organização pode ter sede em um país, usuários em outro, uma nuvem em uma terceira região e fornecedores que acessam dados a partir de vários lugares. A governança começa quando esse desenho deixa de ser presumido e passa a ser documentado.",
      },
      {
        type: "heading",
        text: "O mesmo idioma não cria o mesmo requisito",
      },
      {
        type: "list",
        items: [
          "No Brasil, a LGPD e a regulamentação da ANPD estruturam princípios, bases, direitos, segurança, incidentes e transferências.",
          "Em Portugal, RGPD e Lei nº 58/2019 convivem com a atuação da CNPD e com o capítulo europeu de transferências internacionais.",
          "Em Angola, a Lei nº 22/11 e a APD tratam de notificações, autorizações, segurança, representantes e transferências.",
          "Em Moçambique, é preciso separar o quadro vigente, os regimes setoriais e a proposta legislativa em monitorização.",
          "Em Cabo Verde, o regime geral e a CNPD possuem regras próprias de notificação, autorização, direitos, segurança e transferências.",
        ],
      },
      {
        type: "heading",
        text: "A disciplina que atravessa as jurisdições",
      },
      {
        type: "paragraph",
        text: "A camada técnica comum não é uma lista universal de obrigações. É uma forma de organizar fatos para que a decisão seja tomada no contexto correto: inventário de tratamentos, mapa de fluxos, papéis, finalidades, retenção, terceiros, cloud, backups, transferências, incidentes, direitos, controles e evidências.",
      },
      {
        type: "quote",
        text: "Antes de perguntar se a organização está em conformidade, é preciso conseguir explicar onde o dado está, por que circula e quem responde por ele.",
      },
      {
        type: "paragraph",
        text: "A Vértice pode organizar essa base de governança, apoiar políticas, contratos, matrizes, capacitação e preparação para auditorias. Pareceres, interpretação jurídica, notificações formais e representação perante autoridades permanecem responsabilidades do cliente e de profissionais habilitados na jurisdição aplicável.",
      },
    ],
    sources: [
      {
        label: "ANPD — Transferência Internacional de Dados",
        href: "https://www.gov.br/anpd/pt-br/assuntos/assuntos-internacionais/transferencia-internacional-de-dados",
      },
      {
        label: "EUR-Lex — Regulamento Geral sobre a Proteção de Dados",
        href: "https://eur-lex.europa.eu/eli/reg/2016/679/oj?locale=pt",
      },
      {
        label: "APD Angola — Lei nº 22/11",
        href: "https://apd.ao/fotos/frontend_1/editor2/110617_lei_22-11_de_17_junho-proteccao_dados_pessoais.pdf",
      },
      {
        label: "INTIC Moçambique — Lei das Transações Eletrónicas",
        href: "https://www.intic.gov.mz/wp-content/uploads/2021/04/Lei-das-Transaccoes-Electronicas.pdf",
      },
      {
        label: "CNPD Cabo Verde — Lei nº 121/IX/2021",
        href: "https://www.cnpd.cv/wp-content/uploads/2025/03/Lei-121.IX_.2021-alteracao-Lei-41.VIII_.2013.pdf",
      },
    ],
  },
  {
    slug: "itil-v5-iso-42001-lgpd-uma-arquitetura-de-gestao",
    number: "09",
    category: "Governança",
    title: "ITIL v5, ISO/IEC 42001 e LGPD: uma arquitetura de gestão.",
    excerpt:
      "ITIL organiza o ciclo de vida de produtos e serviços digitais. A ISO/IEC 42001 organiza o sistema de gestão de IA. A privacidade protege pessoas, direitos e usos legítimos de dados. A intersecção começa quando os três entram na mesma rotina de decisão.",
    readTime: "12 min de leitura",
    publishedAt: "19 out 2026",
    serviceId: "iso-27001-27701",
    blocks: [
      {
        type: "paragraph",
        text: "Uma organização pode ter um catálogo de serviços, uma política de inteligência artificial e um programa de privacidade e, ainda assim, tomar decisões desconectadas. O serviço é desenhado em uma frente, o modelo é adquirido em outra, o contrato é revisado por uma terceira e o titular só aparece quando surge um incidente. A maturidade não está na existência isolada dos documentos. Está na capacidade de ligar contexto, risco, operação, direitos e melhoria.",
      },
      { type: "heading", text: "Três camadas, não três silos" },
      {
        type: "paragraph",
        text: "O ITIL Version 5 oferece uma linguagem para gerir produtos e serviços digitais ao longo do seu ciclo de vida, conectando valor, experiência, operação e melhoria contínua. A ISO/IEC 42001:2023 especifica requisitos e orientação para estabelecer, implementar, manter e melhorar continuamente um sistema de gestão de inteligência artificial. A LGPD, o RGPD e as demais regras aplicáveis protegem pessoas e estabelecem condições para o tratamento de dados pessoais. São camadas diferentes de uma mesma decisão, não nomes intercambiáveis para o mesmo controle.",
      },
      {
        type: "list",
        items: [
          "ITIL pergunta: que produto ou serviço está sendo entregue, para quem, com qual valor, risco, capacidade e nível de suporte?",
          "ISO/IEC 42001 pergunta: como a organização governa riscos e oportunidades associados ao desenvolvimento, fornecimento ou uso de IA?",
          "Privacidade pergunta: que dados pessoais entram no tratamento, para qual finalidade, com que responsabilidade, salvaguarda, transparência e direitos?",
        ],
      },
      { type: "heading", text: "A intersecção está no ciclo de vida" },
      {
        type: "paragraph",
        text: "O ciclo do serviço não termina quando um modelo é colocado em produção. O uso de IA pode alterar a experiência do usuário, a forma de decisão, o risco operacional, a exposição de dados e a capacidade de explicar uma resposta. Por isso, cada momento do ciclo precisa produzir perguntas e evidências proporcionais ao risco.",
      },
      {
        type: "list",
        items: [
          "Descobrir: identificar o problema de negócio, os usuários, o benefício esperado, os dados envolvidos e a jurisdição relevante.",
          "Desenhar: definir propósito, limites, supervisão humana, requisitos de segurança, privacidade, experiência, desempenho e continuidade.",
          "Adquirir ou construir: avaliar fornecedor, origem dos dados, direitos de uso, arquitetura, subcontratados, critérios de aceite e capacidade de auditoria.",
          "Transicionar: testar cenários, documentar riscos residuais, preparar suporte, aprovar o uso e comunicar responsabilidades.",
          "Operar, entregar e suportar: monitorar comportamento, qualidade, incidentes, mudanças, reclamações, direitos dos titulares e degradação do serviço.",
          "Melhorar: revisar benefícios, custos, riscos, vieses, explicabilidade, segurança, experiência e necessidade de manter, ajustar ou retirar o sistema.",
        ],
      },
      { type: "heading", text: "O que é uma governança comum" },
      {
        type: "paragraph",
        text: "A governança comum é uma camada de informação e decisão que pode ser reutilizada pelos três domínios. Ela não transforma a LGPD em uma prática ITIL nem reduz a ISO/IEC 42001 a um checklist de privacidade. Ela torna visível o objeto que todos precisam compreender: qual serviço usa qual sistema, com quais dados, sob qual finalidade, com quais fornecedores, donos, controles, riscos, evidências e critérios de revisão.",
      },
      {
        type: "list",
        items: [
          "catálogo de produtos, serviços e casos de uso de IA",
          "inventário de dados, finalidades, categorias, fontes, retenção e fluxos",
          "matriz de papéis: dono do serviço, dono do dado, responsável pelo modelo, fornecedor e instância de decisão",
          "registro de riscos, controles, incidentes, mudanças, exceções e decisões de aceite",
          "indicadores de valor, qualidade, segurança, privacidade, experiência e melhoria contínua",
        ],
      },
      {
        type: "quote",
        text: "O ponto de encontro entre serviço, IA e privacidade é a decisão que consegue explicar seu propósito, seu risco e sua evidência.",
      },
      { type: "heading", text: "A evidência precisa acompanhar a operação" },
      {
        type: "paragraph",
        text: "A organização não precisa criar um documento novo para cada pergunta. Precisa evitar que a resposta dependa da memória de alguém. Um registro de mudança pode apontar para a avaliação de risco. O contrato pode definir acesso, uso secundário, retenção, subcontratação e suporte. O catálogo pode apontar o responsável pelo serviço. O registro de tratamento pode se relacionar ao caso de uso. O painel de operação pode mostrar incidentes, reclamações e desvios. Essa rede de referências é mais útil do que uma coleção de arquivos sem dono.",
      },
      { type: "heading", text: "O que a Vértice consegue organizar" },
      {
        type: "paragraph",
        text: "A Vértice pode apoiar diagnóstico, desenho de governança, catálogo de serviços, inventário de casos de uso, matriz de riscos e controles, fluxos de aprovação, requisitos de fornecedores, indicadores, capacitação, preparação para auditoria e ciclos de melhoria. O trabalho técnico também pode organizar as perguntas que precisam ser encaminhadas a uma assessoria jurídica ou a um organismo independente. Não substitui parecer jurídico, decisão da autoridade, auditoria de certificação ou a responsabilidade da organização sobre seus tratamentos e sistemas.",
      },
    ],
    sources: [
      {
        label: "PeopleCert — ITIL Foundation Version 5",
        href: "https://www.peoplecert.org/browse-certifications/it-governance-and-service-management/ITIL-1/itil-5-foundation-version-50-4154",
      },
      {
        label: "PeopleCert — ITIL Version 5: what’s new",
        href: "https://www.peoplecert.org/news-and-announcements/itil-version-5-foundation-whats-new-guide",
      },
      {
        label: "ISO — ISO/IEC 42001:2023 AI management systems",
        href: "https://www.iso.org/standard/81230.html",
      },
      {
        label: "Planalto — Lei Geral de Proteção de Dados Pessoais",
        href: "https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709compilado.htm",
      },
      {
        label: "ANPD — Transferência Internacional de Dados",
        href: "https://www.gov.br/anpd/pt-br/assuntos/assuntos-internacionais/transferencia-internacional-de-dados",
      },
      {
        label: "EUR-Lex — Regulamento Geral sobre a Proteção de Dados",
        href: "https://eur-lex.europa.eu/eli/reg/2016/679/oj?locale=pt",
      },
    ],
  },
  {
    slug: "governanca-ia-na-operacao-de-servicos-itil-v5",
    number: "10",
    category: "IA",
    title:
      "Governança de IA na operação de serviços: do experimento à evidência.",
    excerpt:
      "Quando uma IA entra em um serviço digital, ela também entra no catálogo, no suporte, na gestão de mudanças, na segurança, na privacidade e na conversa sobre valor.",
    readTime: "11 min de leitura",
    publishedAt: "19 out 2026",
    serviceId: "gestao-servicos",
    blocks: [
      {
        type: "paragraph",
        text: "O protótipo costuma ser apresentado como uma ferramenta. O usuário, porém, vivencia uma resposta, uma recomendação, uma classificação ou uma decisão dentro de um serviço. Se o resultado é inconsistente, alguém precisa atender a reclamação. Se o dado está errado, alguém precisa corrigir a origem. Se o modelo muda, alguém precisa avaliar o impacto. Se a resposta expõe informação pessoal, alguém precisa investigar. A partir desse ponto, governança de IA deixa de ser uma conversa abstrata e passa a ser gestão de serviço.",
      },
      { type: "heading", text: "Uma IA em produção é um serviço" },
      {
        type: "paragraph",
        text: "Uma aplicação de IA pode ser interna ou voltada ao cliente, adquirida de um fornecedor ou criada pela própria equipe. Em todos os casos, existe uma proposta de valor, uma população afetada, uma dependência tecnológica, uma expectativa de disponibilidade, uma forma de suporte e um conjunto de riscos. O primeiro passo é descrevê-la no idioma da operação: o que ela faz, o que não faz, quem usa, quem responde e em que momento uma pessoa pode interromper ou revisar o resultado.",
      },
      { type: "heading", text: "Antes de colocar o caso de uso no catálogo" },
      {
        type: "list",
        items: [
          "finalidade e benefício esperado, escritos em termos que negócio, tecnologia e controle consigam discutir",
          "dados de entrada, fontes, qualidade, retenção, uso secundário e possíveis dados pessoais",
          "limites de uso, público afetado, decisões que não podem ser automatizadas e situações de escalonamento humano",
          "responsável pelo serviço, responsável pelo dado, responsável pela solução e fornecedor ou subcontratado envolvido",
          "critérios de desempenho, segurança, continuidade, explicação, acessibilidade, experiência e resposta a incidentes",
          "condições para aprovação, pausa, alteração, revalidação ou retirada do serviço",
        ],
      },
      { type: "heading", text: "O que o ITIL Version 5 traz para a conversa" },
      {
        type: "paragraph",
        text: "A orientação oficial do ITIL Version 5 conecta estratégia, desenho, aquisição, construção, transição, operação, entrega e suporte em um ciclo de produto e serviço. Para uma solução com IA, essa visão ajuda a evitar o salto direto do laboratório para a produção. Ela cria um espaço para validar a proposta, negociar a experiência, preparar o suporte, acompanhar o fluxo de valor e inserir melhoria contínua sem esperar uma falha grave para começar a aprender.",
      },
      { type: "heading", text: "O que a ISO/IEC 42001 adiciona" },
      {
        type: "paragraph",
        text: "A ISO/IEC 42001 trata de um sistema de gestão de IA. Seu foco é a capacidade organizacional de estabelecer objetivos, políticas, processos, responsabilidades, tratamento de riscos e melhoria contínua para o uso, fornecimento ou desenvolvimento de IA. Ela não transforma todos os sistemas em iguais nem elimina a necessidade de avaliação específica. O valor está em criar uma forma repetível de decidir e demonstrar que a organização está governando riscos e oportunidades, em vez de reagir caso a caso.",
      },
      { type: "heading", text: "O que a privacidade muda na operação" },
      {
        type: "paragraph",
        text: "Nem todo sistema de IA trata dados pessoais, mas a hipótese precisa ser verificada. Logs, prompts, históricos de atendimento, identificadores, voz, imagem, dados de colaboradores e informações usadas para personalização podem transformar uma solução aparentemente técnica em operação de tratamento. A LGPD e o RGPD colocam no centro finalidade, necessidade, transparência, segurança, responsabilidade demonstrável e direitos. A resposta operacional não é declarar que o modelo é seguro. É conseguir mostrar que os dados necessários foram identificados, que os acessos foram definidos e que a organização sabe como responder a uma solicitação, incidente ou mudança de finalidade.",
      },
      { type: "heading", text: "Evidência mínima para um serviço com IA" },
      {
        type: "list",
        items: [
          "ficha do caso de uso, serviço relacionado, escopo, usuário e responsável",
          "registro de dados, fornecedores, regiões, subcontratados e dependências críticas",
          "avaliação de risco e critérios para supervisão ou intervenção humana",
          "testes de qualidade, segurança, robustez, experiência e cenários adversos",
          "registro de versões, mudanças, aprovações, exceções e decisões de rollback",
          "procedimento de incidente que conecte suporte, segurança, privacidade, negócio e comunicação",
          "indicadores de resultado e de dano potencial, com periodicidade e dono",
          "data de revisão e condições para melhorar, restringir ou encerrar o uso",
        ],
      },
      { type: "heading", text: "O ritual importa mais que o formulário" },
      {
        type: "paragraph",
        text: "A governança não se sustenta se o registro é preenchido uma vez e esquecido. A revisão pode entrar no comitê de mudança, na reunião de nível de serviço, no acompanhamento de fornecedores, na análise de incidentes e no ciclo de melhoria. O desenho do rito deve ser proporcional ao risco. Uma automação de baixo impacto não exige o mesmo caminho de uma solução que influencia crédito, seleção, saúde, benefícios, segurança ou acesso a direitos.",
      },
      {
        type: "quote",
        text: "O melhor controle de IA é aquele que aparece no momento em que a decisão pode ser alterada.",
      },
      { type: "heading", text: "Quando a organização deve pausar" },
      {
        type: "paragraph",
        text: "Pausar não é fracassar. Pode ser a decisão correta quando a finalidade não está clara, os dados não são confiáveis, o fornecedor não oferece evidência suficiente, o suporte não consegue responder ao usuário, o risco residual não foi aceito ou uma mudança alterou o comportamento esperado. O ITIL oferece o vocabulário de mudança, incidente, suporte e melhoria. A ISO/IEC 42001 oferece a disciplina do sistema de gestão. A privacidade oferece direitos, princípios e limites que não podem ser tratados como uma etapa posterior.",
      },
    ],
    sources: [
      {
        label: "PeopleCert — ITIL Foundation Version 5",
        href: "https://www.peoplecert.org/browse-certifications/it-governance-and-service-management/ITIL-1/itil-5-foundation-version-50-4154",
      },
      {
        label: "PeopleCert — ITIL Version 5: what’s new",
        href: "https://www.peoplecert.org/news-and-announcements/itil-version-5-foundation-whats-new-guide",
      },
      {
        label: "ISO — ISO/IEC 42001:2023 AI management systems",
        href: "https://www.iso.org/standard/81230.html",
      },
      {
        label: "ANPD — Transferência Internacional de Dados",
        href: "https://www.gov.br/anpd/pt-br/assuntos/assuntos-internacionais/transferencia-internacional-de-dados",
      },
      {
        label: "Planalto — Lei Geral de Proteção de Dados Pessoais",
        href: "https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709compilado.htm",
      },
      {
        label: "EUR-Lex — Regulamento Geral sobre a Proteção de Dados",
        href: "https://eur-lex.europa.eu/eli/reg/2016/679/oj?locale=pt",
      },
    ],
  },
  {
    slug: "privacidade-em-paises-de-lingua-portuguesa",
    number: "11",
    category: "Privacidade",
    title:
      "Privacidade em países de língua portuguesa: governar o fluxo, não presumir a regra.",
    excerpt:
      "Brasil, Portugal, Angola, Moçambique e Cabo Verde podem participar do mesmo serviço digital sem estarem submetidos ao mesmo conjunto de requisitos. A governança começa separando idioma, operação, jurisdição e responsabilidade.",
    readTime: "13 min de leitura",
    publishedAt: "19 out 2026",
    serviceId: "privacidade-dados-lusofona",
    blocks: [
      {
        type: "paragraph",
        text: "Uma operação lusófona pode ter cliente no Brasil, fornecedor em Portugal, suporte em Angola, equipe de desenvolvimento em Moçambique, usuários em Cabo Verde e uma plataforma de nuvem distribuída por várias regiões. O português aproxima pessoas e mercados, mas não cria uma lei única. O mesmo fluxo de dados pode ser descrito de forma diferente por cada autoridade e pode envolver regras gerais, setoriais, contratuais e técnicas ao mesmo tempo.",
      },
      { type: "heading", text: "Língua comum, regimes diferentes" },
      {
        type: "paragraph",
        text: "O erro mais comum é escolher uma lei conhecida e tratá-la como padrão suficiente para todo o grupo. A LGPD brasileira, o RGPD europeu, a Lei angolana nº 22/11, o quadro moçambicano e o regime cabo-verdiano têm pontos de contato, mas não são cópias. Também não basta olhar para o país da sede. Oferta de serviços, local dos titulares, acesso remoto, armazenamento, suporte, subcontratação e setor de atividade podem alterar a análise.",
      },
      { type: "heading", text: "Cinco leituras de contexto" },
      {
        type: "list",
        items: [
          "Brasil: a LGPD e os atos da ANPD orientam princípios, bases, direitos, segurança, incidentes e mecanismos de transferência internacional. A Resolução CD/ANPD nº 19/2024 organiza mecanismos como decisões de adequação, cláusulas e normas corporativas globais.",
          "Portugal: o RGPD convive com a Lei nº 58/2019 e com a atuação da CNPD. A operação precisa considerar responsabilidade demonstrável, proteção desde a conceção, direitos, segurança, subcontratação e transferências para fora do EEE.",
          "Angola: a Lei nº 22/11 e a APD devem ser consultadas para requisitos de tratamento, notificações, autorizações, segurança, representantes, subcontratação e transferências conforme o caso.",
          "Moçambique: as fontes oficiais consultadas não comprovam uma lei geral promulgada em 2026. A análise precisa separar Constituição, Lei das Transações Eletrónicas, regras setoriais, orientações oficiais e propostas em acompanhamento.",
          "Cabo Verde: o regime geral e a CNPD possuem procedimentos próprios, incluindo regras de notificação, autorização, direitos, segurança e transferências. Não se deve importar automaticamente mecanismos do RGPD.",
        ],
      },
      { type: "heading", text: "Como o ITIL Version 5 ajuda" },
      {
        type: "paragraph",
        text: "O ITIL oferece uma forma de ligar estratégia, desenho, aquisição, construção, transição, operação, entrega e suporte. Em um grupo lusófono, isso ajuda a perguntar onde o dado entra no serviço, que fornecedor o acessa, que equipe o suporta, onde ocorre a transferência e qual é o procedimento quando o titular questiona o tratamento. O framework não decide a legalidade por si só. Ele ajuda a colocar a pergunta no ponto correto do ciclo de serviço.",
      },
      { type: "heading", text: "Como a ISO/IEC 42001 ajuda quando há IA" },
      {
        type: "paragraph",
        text: "Se o grupo utiliza IA para atendimento, classificação, recomendação, análise de risco ou automação, a ISO/IEC 42001 pode oferecer uma estrutura comum de gestão de riscos e oportunidades. O sistema de gestão pode ser corporativo, mas o contexto local não desaparece. Finalidade, dados, direitos, contratos, autoridade competente, transferências e expectativas dos titulares continuam precisando ser avaliados em cada operação.",
      },
      {
        type: "heading",
        text: "O mapa mínimo de uma operação transfronteiriça",
      },
      {
        type: "list",
        items: [
          "serviço ou produto digital que usa o dado e resultado esperado para o negócio e para o titular",
          "países de titulares, responsáveis, operadores, equipes de suporte, fornecedores e subcontratados",
          "categorias de dados, finalidade, origem, base documentada, retenção e uso secundário",
          "regiões de armazenamento, backup, processamento, acesso remoto e administração técnica",
          "mecanismos de transferência, cláusulas, decisões de adequação, autorizações ou requisitos setoriais aplicáveis",
          "procedimentos para direitos, incidentes, reclamações, auditoria, mudança e encerramento do fornecedor",
          "fontes oficiais, data de revisão e distinção entre requisito vigente, proposta, contrato e boa prática técnica",
        ],
      },
      {
        type: "heading",
        text: "Cloud, suporte e subcontratados também são fluxo",
      },
      {
        type: "paragraph",
        text: "É comum o contrato mencionar apenas o país da empresa contratada. Isso é insuficiente para compreender a operação. O suporte pode acessar registros a partir de outra jurisdição. O backup pode ser replicado em outra região. Um fornecedor de observabilidade pode receber identificadores. Um modelo externo pode processar prompts e logs. A gestão de serviços deve transformar essas dependências em itens de catálogo, contrato, risco, aceite, monitoramento e revisão.",
      },
      { type: "heading", text: "O que separar antes de decidir" },
      {
        type: "paragraph",
        text: "Uma matriz de privacidade lusófona fica mais segura quando distingue cinco coisas: o que a lei vigente exige; o que a autoridade orienta; o que o contrato prometeu; o que o setor exige; e o que é uma recomendação técnica de governança. Misturar essas camadas cria tanto falsa segurança quanto exigências que não podem ser justificadas. A revisão jurídica deve ocorrer sobre fatos organizados, não sobre uma descrição genérica da tecnologia.",
      },
      {
        type: "quote",
        text: "Em uma operação internacional, governar não é escolher a lei mais conhecida. É conseguir explicar qual requisito se aplica a qual fluxo.",
      },
      { type: "heading", text: "A contribuição da Vértice" },
      {
        type: "paragraph",
        text: "A Vértice pode organizar inventários, mapas de fluxo, catálogo de serviços, matriz de países e terceiros, critérios de contratação, riscos, controles, evidências, capacitação e rotinas de revisão. Em serviços com IA, pode conectar esse mapa ao ciclo de vida do serviço e ao sistema de gestão de IA. A interpretação jurídica, os pareceres, as notificações formais, a representação perante autoridades e a decisão final sobre adequação permanecem com profissionais habilitados na jurisdição aplicável.",
      },
    ],
    sources: [
      {
        label: "PeopleCert — ITIL Foundation Version 5",
        href: "https://www.peoplecert.org/browse-certifications/it-governance-and-service-management/ITIL-1/itil-5-foundation-version-50-4154",
      },
      {
        label: "ISO — ISO/IEC 42001:2023 AI management systems",
        href: "https://www.iso.org/standard/81230.html",
      },
      {
        label: "ANPD — Transferência Internacional de Dados",
        href: "https://www.gov.br/anpd/pt-br/assuntos/assuntos-internacionais/transferencia-internacional-de-dados",
      },
      {
        label: "Planalto — Lei Geral de Proteção de Dados Pessoais",
        href: "https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709compilado.htm",
      },
      {
        label: "EUR-Lex — Regulamento Geral sobre a Proteção de Dados",
        href: "https://eur-lex.europa.eu/eli/reg/2016/679/oj?locale=pt",
      },
      {
        label: "CNPD Portugal — Transferências internacionais",
        href: "https://www.cnpd.pt/legislacao/jurisprudencia-tjue/rgpd-e-dpd/transferencias-internacionais/",
      },
      {
        label: "APD Angola — Lei nº 22/11",
        href: "https://apd.ao/fotos/frontend_1/editor2/110617_lei_22-11_de_17_junho-proteccao_dados_pessoais.pdf",
      },
      {
        label: "INTIC Moçambique — Lei das Transações Eletrónicas",
        href: "https://www.intic.gov.mz/wp-content/uploads/2021/04/Lei-das-Transaccoes-Electronicas.pdf",
      },
      {
        label: "CNPD Cabo Verde — Lei nº 121/IX/2021",
        href: "https://www.cnpd.cv/wp-content/uploads/2025/03/Lei-121.IX_.2021-alteracao-Lei-41.VIII_.2013.pdf",
      },
    ],
  },
];

export function getBlogPostBySlug(slug: string) {
  return blogPosts.find(post => post.slug === slug);
}
