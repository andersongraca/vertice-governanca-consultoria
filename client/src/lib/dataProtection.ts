export type DataProtectionSource = {
  label: string;
  href: string;
};

export type DataProtectionJurisdiction = {
  id: string;
  code: string;
  name: string;
  shortLabel: string;
  status: string;
  statusTone: "current" | "watch";
  authority: string;
  scope: string;
  keyPoints: string[];
  crossBorder: string;
  support: string[];
  caution: string;
  sources: DataProtectionSource[];
};

export const dataProtectionReviewDate = "19 out 2026";

export const dataProtectionDisclaimer =
  "Conteúdo informativo de governança técnica. Não constitui parecer, aconselhamento jurídico, representação perante autoridade ou garantia de conformidade. A aplicação depende dos fatos, do setor, dos contratos, da arquitetura e da jurisdição do tratamento.";

export const dataProtectionJurisdictions: DataProtectionJurisdiction[] = [
  {
    id: "brasil-lgpd",
    code: "BR",
    name: "Brasil",
    shortLabel: "LGPD",
    status: "Lei geral vigente",
    statusTone: "current",
    authority: "ANPD — Agência Nacional de Proteção de Dados",
    scope:
      "A LGPD alcança operações de tratamento realizadas no Brasil, voltadas a ofertar bens ou serviços a pessoas no Brasil ou que envolvam dados coletados no país, observadas as exclusões legais.",
    keyPoints: [
      "Princípios, bases legais, direitos dos titulares e responsabilização.",
      "Segurança desde a concepção, governança, registros e gestão de incidentes.",
      "Transferências internacionais sujeitas ao art. 33 e à regulamentação da ANPD.",
    ],
    crossBorder:
      "As fontes consultadas não indicam localização geral obrigatória no Brasil. É preciso mapear cloud, backups, suporte, suboperadores e salvaguardas; exigências setoriais e contratuais podem existir.",
    support: [
      "Inventário de tratamento, mapa de fluxos e registro de operadores.",
      "Matriz de direitos, retenção, incidentes, contratos e evidências.",
      "Preparação técnica para governança, auditoria e resposta à ANPD.",
    ],
    caution:
      "Guias da ANPD orientam boas práticas, mas não substituem a LGPD nem os atos vinculantes.",
    sources: [
      {
        label: "Lei nº 13.709/2018 — Planalto",
        href: "https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709compilado.htm",
      },
      {
        label: "ANPD — Transferência internacional",
        href: "https://www.gov.br/anpd/pt-br/assuntos/assuntos-internacionais/transferencia-internacional-de-dados",
      },
      {
        label: "ANPD — Regulamentações",
        href: "https://www.gov.br/anpd/pt-br/acesso-a-informacao/institucional/atos-normativos/regulamentacoes_anpd",
      },
    ],
  },
  {
    id: "portugal-rgpd",
    code: "PT",
    name: "Portugal",
    shortLabel: "RGPD + Lei nº 58/2019",
    status: "Regime geral vigente",
    statusTone: "current",
    authority: "CNPD — Comissão Nacional de Proteção de Dados",
    scope:
      "O RGPD abrange tratamentos automatizados ou organizados em ficheiro, incluindo estabelecimentos na União e certas ofertas ou monitorizações de titulares na União por entidades externas.",
    keyPoints: [
      "Transparência, direitos, registos, contratos, privacy by design e segurança proporcional ao risco.",
      "AIPD e encarregado quando os critérios do RGPD forem atingidos.",
      "Violação comunicável à CNPD, em regra, no prazo de 72 horas quando aplicável.",
    ],
    crossBorder:
      "Não há localização geral em Portugal. Transferências para fora do EEE exigem análise do capítulo V do RGPD, incluindo adequação ou salvaguardas; região europeia não elimina a análise de acessos, suporte e subprocessadores.",
    support: [
      "RoPA, mapa de fluxos, bases, retenção e catálogo de direitos.",
      "Due diligence, contratos de subcontratação e dossiê de transferências.",
      "AIPD, segurança, incidentes, capacitação e evidências de auditoria.",
    ],
    caution:
      "A Lei nº 58/2019, decisões e regimes setoriais devem ser revalidados antes de qualquer decisão concreta.",
    sources: [
      {
        label: "RGPD — EUR-Lex",
        href: "https://eur-lex.europa.eu/eli/reg/2016/679/oj?locale=pt",
      },
      {
        label: "Lei nº 58/2019 — Diário da República",
        href: "https://diariodarepublica.pt/dr/detalhe/lei/58-2019-123815982",
      },
      {
        label: "CNPD — Transferências internacionais",
        href: "https://www.cnpd.pt/legislacao/jurisprudencia-tjue/rgpd-e-dpd/transferencias-internacionais/",
      },
    ],
  },
  {
    id: "angola-protecao-dados",
    code: "AO",
    name: "Angola",
    shortLabel: "Lei nº 22/11",
    status: "Lei geral vigente",
    statusTone: "current",
    authority: "APD — Agência de Protecção de Dados",
    scope:
      "A Lei nº 22/11 alcança tratamentos automatizados e ficheiros, inclusive quando um responsável não estabelecido usa meios situados em Angola para alojar, recolher, registar ou fazer transitar dados.",
    keyPoints: [
      "Princípios, consentimento e exceções legais, informação e direitos.",
      "Notificações e autorizações, segurança, subcontratação e interconexão conforme o caso.",
      "A APD orienta a comunicação confidencial de incidentes assim que a entidade toma conhecimento.",
    ],
    crossBorder:
      "Transferências podem exigir notificação, adequação, autorização e garantias conforme o destino e a hipótese legal. Não foi identificada uma regra geral de localização física em Angola.",
    support: [
      "Inventário, fluxos, papéis, representante e matriz de notificações.",
      "Contratos, segurança, incidentes e documentação para APD.",
      "Avaliação técnica de destinos e preparação de evidências.",
    ],
    caution:
      "O projeto de revisão da Lei nº 22/11 não foi tratado como lei vigente; não importar seus requisitos para o site como obrigações atuais.",
    sources: [
      {
        label: "Lei nº 22/11 — APD",
        href: "https://apd.ao/fotos/frontend_1/editor2/110617_lei_22-11_de_17_junho-proteccao_dados_pessoais.pdf",
      },
      {
        label: "Circular nº 02/APD/2024",
        href: "https://apd.ao/fotos/frontend_1/editor2/circular_002.pdf",
      },
      {
        label: "Projeto de revisão — consulta pública",
        href: "https://www.consultapublica.gov.ao/consulta/100021",
      },
    ],
  },
  {
    id: "mocambique-protecao-dados",
    code: "MZ",
    name: "Moçambique",
    shortLabel: "Quadro fragmentado",
    status: "Monitorização legislativa",
    statusTone: "watch",
    authority:
      "INTIC e INCM em âmbitos setoriais; não foi confirmada uma autoridade geral operativa",
    scope:
      "As fontes oficiais consultadas não comprovaram uma lei geral promulgada em 2026. O quadro atual combina Constituição, Lei nº 3/2017 de Transações Eletrónicas e regras setoriais.",
    keyPoints: [
      "Proteção constitucional, acesso e retificação de dados.",
      "Tratamento eletrónico com finalidade, identidade do processador, exatidão, confidencialidade e proteção contra acessos indevidos.",
      "No setor de telecomunicações, há regras próprias para registo de subscritores e retenção.",
    ],
    crossBorder:
      "Não foi identificada regra geral vigente de adequação ou autorização para transferências. O Decreto nº 13/2023 prevê processamento e armazenamento nacional para dados setoriais de registo de subscritores, não para todos os dados.",
    support: [
      "Matriz de requisitos por setor e monitorização de mudança legislativa.",
      "Inventário, fluxos, classificação, retenção, terceiros e incidentes.",
      "Procedimentos de acesso, retificação e trilhas de auditoria.",
    ],
    caution:
      "Separar sempre requisito vigente, proposta em acompanhamento e recomendação técnica; não importar RGPD, DPO ou AIPD como obrigação atual sem fonte.",
    sources: [
      {
        label: "Constituição — Parlamento de Moçambique",
        href: "https://www.parlamento.mz/wp-content/uploads/2022/08/Constittuicao_Republica.pdf",
      },
      {
        label: "Lei nº 3/2017 — INTIC",
        href: "https://www.intic.gov.mz/wp-content/uploads/2021/04/Lei-das-Transaccoes-Electronicas.pdf",
      },
      {
        label: "INTIC — estado da proposta em 2026",
        href: "https://intic.gov.mz/intic-apresenta-avancos-na-transformacao-digital-durante-a-facim-2026/",
      },
    ],
  },
  {
    id: "cabo-verde-protecao-dados",
    code: "CV",
    name: "Cabo Verde",
    shortLabel: "Lei nº 133/V/2001 e alterações",
    status: "Regime geral vigente",
    statusTone: "current",
    authority: "CNPD — Comissão Nacional de Proteção de Dados",
    scope:
      "O regime aplica-se a tratamentos automatizados e ficheiros por entidades públicas e privadas, incluindo certas ofertas ou monitorizações de titulares em Cabo Verde por entidades externas.",
    keyPoints: [
      "Princípios, bases de licitude, direitos, segurança e privacidade desde a conceção.",
      "Notificação e autorização da CNPD quando aplicáveis, inclusive para tratamentos de maior risco.",
      "Encarregado, avaliação de impacto e incidentes conforme as hipóteses legais.",
    ],
    crossBorder:
      "Transferências dependem de adequação, autorização ou garantias previstas na lei. Não foi identificada uma obrigação geral de armazenamento exclusivamente em Cabo Verde.",
    support: [
      "Inventário, fluxos, bases, retenção e matriz de direitos.",
      "Notificações, autorizações, contratos e subprocessamento.",
      "Transferências, segurança, AIPD, incidentes e evidências.",
    ],
    caution:
      "Não importar automaticamente mecanismos do RGPD; a legislação cabo-verdiana possui procedimentos próprios de notificação, autorização e adequação.",
    sources: [
      {
        label: "Boletim Oficial — regime de proteção de dados",
        href: "https://boe.incv.cv/Bulletins/View/49460",
      },
      {
        label: "Lei nº 121/IX/2021 — CNPD",
        href: "https://www.cnpd.cv/wp-content/uploads/2025/03/Lei-121.IX_.2021-alteracao-Lei-41.VIII_.2013.pdf",
      },
      {
        label: "CNPD Cabo Verde — quem somos",
        href: "https://www.cnpd.cv/o-que-somos-e-quem-somos/",
      },
    ],
  },
];

export const dataProtectionSupport = [
  {
    number: "01",
    title: "Mapear",
    text: "Inventário, fluxos, finalidades, categorias, papéis, fornecedores, cloud e transferências.",
  },
  {
    number: "02",
    title: "Organizar",
    text: "Políticas, contratos, retenção, direitos, incidentes, evidências e responsabilidades.",
  },
  {
    number: "03",
    title: "Preparar",
    text: "Matriz de riscos e controles, capacitação, auditoria e preparação para decisões jurídicas.",
  },
];
