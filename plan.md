# Plano — Blog e Serviços da Vértice

## Escopo aprovado

Ampliar o site público da Vértice Governança de TI com duas áreas principais na navegação: **Serviços** e **Blog**. A área de Serviços deve apresentar, em linguagem comercial e tecnicamente responsável, as nove frentes de conhecimento informadas pelo usuário:

1. Gestão de Serviços;
2. Gestão de Projetos em TI e iniciativas de Tecnologia da Informação;
3. Alinhamento dos processos estratégicos de negócio com procedimentos, programas de investimento e recursos de TIC;
4. Gestão do conhecimento consolidado na cultura organizacional;
5. Gestão de segurança e confiabilidade de recursos tecnológicos;
6. Gestão de dados;
7. Gestão de aquisições e contratos;
8. Arquitetura organizacional baseada na maturidade de processos e pessoas;
9. Governança e implementação de ISO/IEC 27001 e ISO/IEC 27701.

A área de Blog será editorial, com conteúdos iniciais relacionados a essas frentes, filtros por tema e páginas individuais de artigos. O diagnóstico continuará sendo o CTA comercial principal.

## Arquitetura de implementação

- `client/src/lib/serviceCatalog.ts`: catálogo único das dez frentes, incluindo Governança de Privacidade e Dados para operações lusófonas, com título, descrição, entregáveis, resultado esperado, ícone e observações de escopo.
- `client/src/lib/blogPosts.ts`: catálogo editorial dos artigos iniciais, incluindo a trilha de Privacidade, com slug, categoria, resumo, tempo de leitura, data editorial e conteúdo estruturado em blocos.
- `client/src/lib/dataProtection.ts`: catálogo comparável de Brasil, Portugal, Angola, Moçambique e Cabo Verde, com status do marco, autoridade, escopo, pontos de governança, transferências, limites, apoio técnico e fontes primárias.
- `client/src/components/PageMeta.tsx`: metadados de rota no cliente (título, descrição, canonical, Open Graph e Twitter Card) para Serviços, Blog e artigos.
- `client/src/pages/Services.tsx`: nova rota `/servicos`, com navegação lateral/interativa entre as frentes, seção de método de atuação, limites profissionais e CTA para diagnóstico; `/atuacao` permanece como alias compatível.
- `client/src/pages/Blog.tsx`: hub editorial em `/blog`, com artigo em destaque, filtros de categoria e cards de artigos.
- `client/src/pages/BlogPost.tsx`: rota `/blog/:slug`, com leitura individual, índice visual, blocos editoriais e links para outros artigos/diagnóstico.
- `client/src/pages/ProtecaoDados.tsx`: página `/protecao-dados` com mapa comparativo de jurisdições, aviso de limites profissionais, fontes oficiais e CTA para diagnóstico técnico.
- `client/src/components/SiteChrome.tsx` e `client/src/pages/Home.tsx`: navegação atualizada para Serviços, Blog e Proteção de Dados, mantendo o acesso às páginas existentes.
- `client/src/App.tsx`: manifestação das novas rotas estáticas e da rota dinâmica de artigos.
- `client/public/manus-routes.json`: declaração de rotas públicas para a camada de publicação/descoberta.
- `client/public/sitemap.xml` e `client/public/robots.txt`: documentos básicos de descoberta para a publicação no domínio GitHub Pages.
- `client/src/index.css`: estilos editoriais responsivos para serviços, blog, artigos, breadcrumbs, filtros e blocos de conteúdo, reaproveitando a linguagem visual existente.

## Decisões de conteúdo

- Os textos posicionam a Vértice como consultoria técnica e gerencial em governança, tecnologia, dados, processos e projetos.
- A redação não promete operação de infraestrutura, desenvolvimento de sistemas ou certificação independente.
- Para ISO/IEC 27001 e 27701, a oferta é descrita como governança, diagnóstico de lacunas, estruturação de controles, documentação, evidências e preparação para auditoria; a certificação/auditoria permanece responsabilidade de organismo independente competente.
- Para temas de privacidade, LGPD e proteção de dados lusófona, o escopo é técnico-operacional e a interface jurídica continua explicitamente condicionada à atuação de profissional habilitado na jurisdição aplicável.
- A comunicação separa direito vigente, ato vinculante, orientação oficial, recomendação técnica e proposta não confirmada. Moçambique é apresentado como quadro fragmentado e em monitorização legislativa, sem importar a proposta de lei como requisito atual.
- Os artigos serão evergreen, educativos e orientados a decisão, sem inventar cases, clientes ou métricas.

## Direção de design

O site já possui o movimento visual **Horizonte de Controle**, portanto a nova experiência reutiliza sua identidade editorial em vez de introduzir uma estética concorrente.

- **Princípios:** clareza executiva, leitura em camadas, contraste entre decisão e contexto, e sinais visuais de percurso.
- **Paleta:** azul-petróleo para confiança e concentração, papel quente para leitura e cobre para indicar foco, transição e ação.
- **Layout:** composição assimétrica com trilho lateral, listas numeradas, painéis de leitura e uma coluna de índice; evitar cartões genéricos centralizados.
- **Elementos de assinatura:** régua vertical cobre, diagramas de grade, marcadores numéricos, linhas de navegação e títulos em serif editorial.
- **Interação:** filtros e abas revelam conteúdo sem perder o contexto; toda ação importante leva ao diagnóstico ou a outro conteúdo relacionado.
- **Animação:** entradas curtas e discretas, respeitando `prefers-reduced-motion`, sem animações que prejudiquem a leitura.
- **Tipografia:** `DM Serif Display` para títulos e `Manrope` para interface, corpo e dados, seguindo o sistema existente.
- **Voz:** objetiva, segura e sem jargão ornamental. Exemplos: “Governança não é uma camada a mais. É capacidade de decidir.” e “Da evidência ao rito: segurança que a organização consegue sustentar.”

## Rotas públicas

- `/` — página institucional existente.
- `/servicos` — portfólio completo das dez frentes.
- `/atuacao` — alias retrocompatível para `/servicos`.
- `/blog` — hub editorial.
- `/blog/:slug` — artigo individual.
- `/protecao-dados` — mapa comparativo de proteção de dados lusófona.
- `/metodo`, `/socios`, `/diagnostico`, `/privacidade` — páginas existentes preservadas.

## Entrega e publicação

A implementação será validada com `pnpm check` e `pnpm build`. Depois, as alterações serão commitadas no branch `main`, enviadas ao repositório GitHub selecionado e a saída de produção será sincronizada no branch `gh-pages`, que atende ao endereço público informado.
