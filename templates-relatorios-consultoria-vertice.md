# Templates de relatórios de consultoria — Vértice

**Versão:** 1.0  
**Uso:** diagnóstico, avaliação, governança, maturidade, projetos, dados, segurança, contratos e conformidade.  
**Responsável técnico:** {nome}  
**Cliente:** {organização}  
**Projeto:** {nome do projeto}  
**Data-base:** {dd/mm/aaaa}  
**Classificação:** {público / uso interno / confidencial}

> Este pacote foi estruturado para a Vértice Consultoria em TI, Governança e Gestão. Os campos entre chaves devem ser preenchidos para cada cliente. Nenhum achado, métrica, cliente, evidência ou resultado deve ser inventado.

## 1. Padrão único para todos os relatórios

### 1.1 Capa

**{Título do relatório}**  
**{Subtítulo objetivo}**  
Cliente: {nome} · Unidade: {unidade} · Período: {período}  
Versão: {v1.0} · Status: {rascunho / em revisão / aprovado / final}  
Elaborado por: {nome e função}  
Revisado por: {nome e função}  
Aprovado por: {nome e função}

### 1.2 Controle de versões

| Versão | Data | Autor | Revisor | Alteração | Aprovação |
|---|---|---|---|---|---|
| {1.0} | {data} | {nome} | {nome} | {descrição} | {nome/status} |

### 1.3 Sumário executivo

**Situação observada:** {qual é o contexto atual em 3 a 5 linhas?}

**Decisão que este relatório apoia:** {qual decisão o cliente precisa tomar?}

**Principais achados:**

1. {achado crítico ou oportunidade 1};
2. {achado 2};
3. {achado 3}.

**Riscos prioritários:** {riscos que exigem decisão, responsável e prazo}.

**Recomendação executiva:** {o que deve ser feito primeiro e por quê}.

**Horizonte recomendado:**

| Horizonte | Prioridades |
|---|---|
| 0–30 dias | {contenção, decisão urgente, evidência mínima} |
| 31–90 dias | {estruturação, controles, responsáveis e ritos} |
| 91–180 dias | {integração, indicadores, melhoria e preparação futura} |

### 1.4 Contexto, objetivo e escopo

**Contexto:** {por que o trabalho foi contratado?}

**Objetivo:** {qual pergunta o relatório responde?}

**Escopo incluído:** {processos, serviços, sistemas, unidades, países, contratos e períodos analisados}.

**Fora de escopo:** {o que não foi analisado ou não pode ser concluído com as evidências disponíveis}.

**Premissas:** {condições assumidas para executar o trabalho}.

**Limitações:** {restrições de acesso, amostra, tempo, dados incompletos ou dependência de terceiros}.

### 1.5 Método e evidências

Descrever entrevistas, workshops, análise documental, amostragem, observação, walkthrough, análise de indicadores, avaliação de contratos ou inspeção técnica utilizados. Informar período, participantes e critério de seleção.

| ID | Evidência ou fonte | Tipo | Data | Responsável pelo fornecimento | Status | Limitação |
|---|---|---|---|---|---|---|
| E-{001} | {documento, entrevista ou sistema} | {documental / entrevista / sistema} | {data} | {nome} | {validada / pendente} | {limitação} |

### 1.6 Escala de maturidade

| Nível | Nome | Interpretação |
|---:|---|---|
| 0 | Inexistente | Não há prática, responsável ou evidência reconhecível. |
| 1 | Inicial | Há iniciativas pontuais, dependentes de pessoas e sem repetibilidade. |
| 2 | Repetível | A prática se repete em parte do escopo, mas ainda é inconsistente. |
| 3 | Definido | Processo, papéis e critérios estão documentados e comunicados. |
| 4 | Gerenciado | Há indicadores, controles, revisão e decisão baseada em evidências. |
| 5 | Otimizado | Há melhoria contínua, aprendizado institucional e capacidade de adaptação. |

### 1.7 Modelo de achado

> **A-{número} — {título curto do achado}**
>
> **Critério:** {boa prática, política interna, contrato, norma, requisito ou objetivo usado como referência}.  
> **Condição observada:** {o que foi encontrado}.  
> **Evidência:** {E-xxx, documento, entrevista, indicador ou amostra}.  
> **Causa provável:** {por que o problema ou oportunidade existe}.  
> **Impacto/risco:** {efeito sobre serviço, processo, pessoa, dado, segurança, custo ou decisão}.  
> **Recomendação:** {ação objetiva, com verbo de ação}.  
> **Prioridade:** {crítica / alta / média / baixa}.  
> **Responsável sugerido:** {papel ou área}.  
> **Prazo sugerido:** {data ou horizonte}.  
> **Critério de encerramento:** {evidência que demonstrará que a ação foi concluída}.

### 1.8 Matriz de riscos

Usar probabilidade e impacto de 1 a 5. O nível é o produto dos dois fatores: 1–4 baixo, 5–9 moderado, 10–16 alto e 17–25 crítico. A classificação deve ser validada com o cliente; não é uma verdade automática do relatório.

| ID | Risco | Causa | Consequência | Probabilidade (1–5) | Impacto (1–5) | Nível | Tratamento | Dono | Prazo |
|---|---|---|---|---:|---:|---:|---|---|---|
| R-{001} | {descrição} | {causa} | {consequência} | {n} | {n} | {n} | {evitar / reduzir / transferir / aceitar} | {nome} | {data} |

### 1.9 Roadmap e plano de ação

| ID | Ação | Resultado esperado | Responsável | Dependências | Esforço | Prazo | Indicador de conclusão | Status |
|---|---|---|---|---|---|---|---|---|
| P-{001} | {ação} | {resultado} | {área} | {dependência} | {P/M/G} | {data} | {evidência} | {aberta} |

### 1.10 Conclusão e limites profissionais

**Conclusão:** {síntese do estado, decisão e próximos passos}.

Este relatório representa uma avaliação técnica e gerencial baseada no escopo, período e evidências indicados. Não constitui, por si só, certificação, auditoria independente, perícia, parecer jurídico ou garantia de conformidade. Em temas de proteção de dados, contratos, notificações, direitos de titulares ou interpretação de legislação, a validação deve envolver profissional habilitado na jurisdição aplicável.

## 2. Template — Relatório de diagnóstico executivo

### Objetivo

Produzir uma visão de decisão sobre {tema}, identificando contexto, capacidade atual, lacunas, riscos, prioridades e roteiro de implementação.

### Perguntas executivas

- O que a organização precisa decidir agora?
- Qual serviço, processo, dado, projeto ou sistema está perdendo força?
- Quem é afetado e qual é o impacto?
- Quais capacidades já existem?
- Que evidência sustenta cada conclusão?
- O que deve acontecer nos próximos 30, 90 e 180 dias?

### Quadro de decisão

| Decisão | Opções | Recomendação | Justificativa | Dono | Data limite |
|---|---|---|---|---|---|
| {decisão} | {opções} | {opção recomendada} | {evidência} | {nome} | {data} |

### Dimensões de avaliação

| Dimensão | Pergunta | Nível atual (0–5) | Evidência | Lacuna principal |
|---|---|---:|---|---|
| Estratégia | {há prioridade e investimento claros?} | {n} | {E-xxx} | {lacuna} |
| Governança | {há papéis e fóruns de decisão?} | {n} | {E-xxx} | {lacuna} |
| Processos | {o trabalho é repetível e mensurável?} | {n} | {E-xxx} | {lacuna} |
| Pessoas | {há capacidade, conhecimento e sucessão?} | {n} | {E-xxx} | {lacuna} |
| Tecnologia e dados | {há confiabilidade, segurança e rastreabilidade?} | {n} | {E-xxx} | {lacuna} |

## 3. Template — Governança de TI e gestão de serviços com ITIL Version 5

### Escopo

Serviços analisados: {lista}. Produtos digitais, processos de suporte, catálogo, níveis de serviço, incidentes, problemas, mudanças, configuração, fornecedores, continuidade e melhoria incluídos: {sim/não e observação}.

### Avaliação do ciclo de vida

| Momento | Pergunta de avaliação | Evidência | Maturidade | Recomendação |
|---|---|---|---:|---|
| Estratégia e valor | {o serviço responde a uma necessidade clara?} | {E-xxx} | {n} | {ação} |
| Desenho e arquitetura | {requisitos, riscos e dependências estão claros?} | {E-xxx} | {n} | {ação} |
| Aquisição e construção | {fornecedores, critérios e qualidade estão controlados?} | {E-xxx} | {n} | {ação} |
| Transição | {mudanças e entrada em operação são governadas?} | {E-xxx} | {n} | {ação} |
| Operação e suporte | {há atendimento, incidentes, problemas e níveis de serviço?} | {E-xxx} | {n} | {ação} |
| Entrega e melhoria | {valor e desempenho são medidos e revisados?} | {E-xxx} | {n} | {ação} |

### Indicadores sugeridos

Disponibilidade do serviço, cumprimento de SLA, tempo de restauração, reincidência de incidentes, tempo de atendimento, satisfação, mudanças malsucedidas, backlog de problemas, custo por serviço e ações de melhoria encerradas.

## 4. Template — Governança e implementação de IA / ISO/IEC 42001

### Inventário de casos de uso

| ID | Caso de uso | Serviço/processo | Finalidade | Usuários/afetados | Dados | Fornecedor/modelo | Responsável | Risco inicial |
|---|---|---|---|---|---|---|---|---|
| IA-{001} | {nome} | {serviço} | {finalidade} | {grupo} | {tipo} | {fornecedor} | {dono} | {baixo/médio/alto} |

### Domínios de governança

| Domínio | Pergunta | Estado | Evidência | Próxima ação |
|---|---|---|---|---|
| Direção e responsabilidade | Há política, escopo, papéis e autoridade para decidir? | {estado} | {E-xxx} | {ação} |
| Inventário e ciclo de vida | Cada uso de IA possui finalidade, dono, fornecedor e data de revisão? | {estado} | {E-xxx} | {ação} |
| Riscos e impactos | Há avaliação de riscos técnicos, operacionais, direitos e terceiros? | {estado} | {E-xxx} | {ação} |
| Dados e qualidade | Entradas, fontes, qualidade, retenção e limitações estão documentadas? | {estado} | {E-xxx} | {ação} |
| Supervisão humana | Há intervenção, contestação, escalonamento e possibilidade de interrupção? | {estado} | {E-xxx} | {ação} |
| Segurança e confiabilidade | Há controles, testes, monitoramento, incidentes e continuidade? | {estado} | {E-xxx} | {ação} |
| Transparência | Usuários sabem quando a IA é usada e como questionar resultados? | {estado} | {E-xxx} | {ação} |
| Melhoria e retirada | Existe revisão periódica, mudança controlada e encerramento seguro? | {estado} | {E-xxx} | {ação} |

### Critério de linguagem

Separar no relatório o que é requisito da ISO/IEC 42001, o que é boa prática de governança, o que é obrigação de proteção de dados e o que depende de avaliação jurídica, contratual ou setorial.

## 5. Template — Proteção de dados em países de língua portuguesa

### Mapa de jurisdições

| País | Operação abrangida | Marco/autoridade a validar | Dados e titulares | Transferências | Responsável local | Status da análise |
|---|---|---|---|---|---|---|
| Brasil | {escopo} | LGPD / ANPD | {escopo} | {fluxo} | {nome/papel} | {atualização} |
| Portugal | {escopo} | RGPD / Lei nº 58/2019 / CNPD | {escopo} | {fluxo} | {nome/papel} | {atualização} |
| Angola | {escopo} | Lei nº 22/11 / APD | {escopo} | {fluxo} | {nome/papel} | {atualização} |
| Moçambique | {escopo} | quadro constitucional, transações eletrônicas, setorial e legislação vigente a confirmar | {escopo} | {fluxo} | {nome/papel} | {monitorar} |
| Cabo Verde | {escopo} | regime nacional / CNPD | {escopo} | {fluxo} | {nome/papel} | {atualização} |

### Fluxo de dados

1. Origem do dado: {sistema, formulário ou parceiro}.
2. Finalidade: {por que o dado é tratado}.
3. Categoria: {identificação, contato, profissional, sensível ou outra}.
4. Titular/população: {quem é afetado}.
5. Operações: {coleta, consulta, uso, compartilhamento, armazenamento, eliminação}.
6. Países e fornecedores: {onde ocorre cada etapa}.
7. Segurança e acesso: {controles e responsáveis}.
8. Retenção: {prazo, critério e descarte}.
9. Direitos e atendimento: {canal, prazo interno e responsável}.
10. Evidência e revisão: {registro que comprova a operação}.

### Limite obrigatório

O relatório deve indicar a data de consulta, as fontes oficiais utilizadas, o que ainda depende de confirmação jurídica e que a matriz técnica não equivale a parecer jurídico ou autorização regulatória.

## 6. Template — Gap assessment ISO/IEC 27001 e ISO/IEC 27701

### Escopo do sistema de gestão

Organização, unidades, processos, ativos, serviços, fornecedores, ambientes e exclusões: {descrição}. Objetivos de segurança e privacidade: {descrição}.

### Matriz de lacunas

| ID | Tema/controle | Requisito ou referência | Situação atual | Evidência | Lacuna | Ação | Prioridade | Dono |
|---|---|---|---|---|---|---|---|---|
| G-{001} | {tema} | {referência} | {existente/parcial/inexistente} | {E-xxx} | {lacuna} | {ação} | {P1/P2/P3} | {área} |

### Evidências esperadas

Políticas aprovadas, inventário de ativos, avaliação e tratamento de riscos, declaração de aplicabilidade quando aplicável, gestão de acessos, registros de incidentes, continuidade, fornecedores, privacidade, retenção, treinamento, indicadores, auditorias internas e análise crítica pela direção.

A Vértice pode apoiar governança, lacunas, documentação, evidências e preparação. Auditoria independente e certificação permanecem com organismo competente e independente.

## 7. Template — Maturidade de processos e pessoas

### Matriz de processo

| Processo | Objetivo | Dono | Entradas | Saídas | Interfaces | Indicadores | Nível (0–5) | Prioridade |
|---|---|---|---|---|---|---|---:|---|
| {nome} | {objetivo} | {papel} | {entradas} | {saídas} | {áreas} | {indicadores} | {n} | {alta/média/baixa} |

### Pessoas e conhecimento

| Capacidade | Dependência de pessoa-chave | Evidência de conhecimento | Lacuna | Ação de desenvolvimento | Dono |
|---|---|---|---|---|---|
| {capacidade} | {baixa/média/alta} | {documento/entrevista/ritual} | {lacuna} | {ação} | {área} |

## 8. Template — Governança de dados

### Catálogo de dados

| Domínio | Dado crítico | Sistema de origem | Dono | Custodiante | Qualidade | Classificação | Retenção | Compartilhamento |
|---|---|---|---|---|---|---|---|---|
| {domínio} | {dado} | {sistema} | {papel} | {papel} | {nível} | {público/interno/confidencial} | {critério} | {destino} |

### Dimensões de qualidade

Avaliar completude, unicidade, validade, consistência, atualidade, rastreabilidade, disponibilidade e proteção. Para cada problema, registrar impacto de negócio, causa, regra de qualidade, responsável, indicador e plano de correção.

## 9. Template — Projetos e portfólio de TI

### Visão do portfólio

| Projeto | Objetivo estratégico | Benefício | Custo/esforço | Risco | Dependências | Capacidade necessária | Status | Decisão requerida |
|---|---|---|---|---|---|---|---|---|
| {projeto} | {objetivo} | {benefício} | {P/M/G} | {nível} | {dependência} | {capacidade} | {status} | {decisão} |

### Saúde do projeto

Escopo: {verde/amarelo/vermelho}. Prazo: {status}. Orçamento: {status}. Riscos: {status}. Benefícios: {status}. Pessoas: {status}. Fornecedores: {status}. Próxima decisão executiva: {decisão}.

## 10. Template — Aquisições e contratos de TIC

### Avaliação do contrato

| Tema | Pergunta | Situação | Evidência | Risco | Recomendação |
|---|---|---|---|---|---|
| Objeto e escopo | O contrato descreve entrega, limites e responsabilidades? | {estado} | {E-xxx} | {risco} | {ação} |
| SLA e aceite | Há critérios mensuráveis de aceite e serviço? | {estado} | {E-xxx} | {risco} | {ação} |
| Dados e segurança | Há regras de acesso, subcontratação, incidentes e retorno? | {estado} | {E-xxx} | {risco} | {ação} |
| Continuidade | A saída do fornecedor e a portabilidade estão previstas? | {estado} | {E-xxx} | {risco} | {ação} |
| Governança | Há reunião, indicador, escalonamento e registro de decisões? | {estado} | {E-xxx} | {risco} | {ação} |

## 11. Template — Segurança e confiabilidade de recursos tecnológicos

### Mapa de confiabilidade

| Serviço/ativo | Criticidade | Dependências | Ameaça | Controle atual | Evidência | RTO/RPO | Lacuna | Ação |
|---|---|---|---|---|---|---|---|---|
| {ativo} | {alta/média/baixa} | {dependências} | {ameaça} | {controle} | {E-xxx} | {tempo} | {lacuna} | {ação} |

Avaliar disponibilidade, integridade, confidencialidade, autenticidade, continuidade, monitoramento, resposta a incidentes, recuperação, fornecedor, acesso privilegiado e testes de restauração.

## 12. Template — Gestão do conhecimento organizacional

### Conhecimento crítico

| Conhecimento | Onde é usado | Pessoa-chave | Risco de perda | Evidência atual | Forma de captura | Dono | Prazo |
|---|---|---|---|---|---|---|---|
| {conhecimento} | {processo/serviço} | {papel} | {alto/médio/baixo} | {evidência} | {entrevista, manual, treinamento} | {área} | {data} |

O relatório deve distinguir documentação criada, conhecimento realmente utilizado, treinamento realizado e capacidade de transferência. Um arquivo armazenado não prova, sozinho, que o conhecimento está consolidado na cultura organizacional.

## 13. Template — Relatório periódico executivo

**Período:** {mês/trimestre} · **Patrocinador:** {nome} · **Responsável:** {nome}

| Indicador | Meta | Realizado | Tendência | Comentário executivo |
|---|---:|---:|---|---|
| {indicador} | {meta} | {valor} | {subindo/estável/caindo} | {comentário} |

**Concluído no período:** {ações e entregáveis}.  
**Em risco:** {tema, impacto, decisão necessária}.  
**Próximas decisões:** {decisões com dono e data}.  
**Mudanças de escopo:** {alterações aprovadas}.  
**Evidências anexas:** {lista}.

## 14. Checklist de qualidade antes de entregar

- O título, cliente, período, versão, classificação e responsáveis estão preenchidos?
- O sumário executivo apresenta decisão, achados, riscos e próximos passos?
- Todo achado tem critério, condição, evidência, impacto e recomendação?
- As fontes foram identificadas e a data de consulta foi registrada?
- A classificação de maturidade foi explicada e validada?
- Os números possuem origem, período e unidade de medida?
- O relatório separa fato observado, interpretação, recomendação e hipótese?
- O texto evita alegações de cliente, métricas não comprovadas e promessas de conformidade?
- O escopo fora da análise está explícito?
- Dados pessoais, informações bancárias, credenciais e segredos foram removidos ou protegidos?
- Há responsável, prazo e critério de encerramento para cada ação prioritária?
- A conclusão está coerente com as evidências e limitações?
- O documento foi revisado por outra pessoa antes do envio?

## 15. Convenção de arquivos

Usar o padrão:

`AAAA-MM-DD_CLIENTE_TIPO-RELATORIO_VERSAO_STATUS.ext`

Exemplo:

`2026-10-20_ORGAO-EXEMPLO_DIAGNOSTICO-GOVERNANCA-TI_v1.0_EM-REVISAO.docx`

Para anexos:

`AAAA-MM-DD_CLIENTE_ANEXO-ID_DESCRICAO.ext`

Manter uma pasta por projeto com `00-controle`, `01-evidencias`, `02-analise`, `03-relatorio`, `04-apresentacao`, `05-plano-de-acao` e `06-encerramento`. A pasta de evidências deve conter somente arquivos autorizados e uma planilha ou tabela de controle de origem, responsável, data e restrição de uso.

## 16. Entrega recomendada para cada projeto

O pacote final de um projeto deve conter:

1. relatório principal em PDF ou DOCX;
2. versão editável sob controle de acesso;
3. sumário executivo de uma ou duas páginas;
4. matriz de achados e riscos;
5. roadmap/plano de ação;
6. matriz de evidências;
7. apresentação executiva, quando contratada;
8. registro de premissas, limitações e aprovação;
9. anexos técnicos autorizados;
10. termo de encerramento ou registro do próximo ciclo.

Esse conjunto transforma a consultoria em uma entrega reproduzível: a direção recebe decisão e prioridade, a equipe recebe ação e evidência, e a Vértice mantém consistência entre projetos sem prometer mais do que foi comprovado.
