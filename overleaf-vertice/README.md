# Pacote Overleaf — Vértice Consultoria e Governança em TI

Este pacote contém templates profissionais de relatórios com a identidade visual da Vértice, logo, capa, cabeçalho, rodapé, cores, tabelas, sumário, campos de controle e avisos de limites profissionais.

## Como usar no Overleaf

1. Crie um projeto novo em **New Project → Upload Project**.
2. Envie o arquivo `overleaf-vertice.zip` ou todos os arquivos desta pasta.
3. Em **Menu → Main document**, escolha um dos arquivos `.tex`.
4. Use o compilador **pdfLaTeX**. O pacote foi escrito para compilar sem fontes externas e sem dependências de fontes comerciais.
5. Substitua os campos destacados como `{nome do cliente}`, `{data}`, `{E-001}` e `{ação}`.
6. Compile duas vezes para atualizar referências, sumário e paginação.

## Modelos incluídos

- `relatorio-template-mestre.tex` — esqueleto completo e reutilizável.
- `relatorio-diagnostico-executivo.tex` — diagnóstico e avaliação executiva.
- `relatorio-governanca-ia-iso42001.tex` — governança de IA e ISO/IEC 42001.
- `relatorio-protecao-dados-lusofona.tex` — Brasil, Portugal, Angola, Moçambique e Cabo Verde.
- `relatorio-gap-iso.tex` — lacunas de ISO/IEC 27001 e ISO/IEC 27701.
- `relatorio-maturidade-processos.tex` — maturidade de processos, pessoas e arquitetura organizacional.
- `relatorio-executivo-periodico.tex` — acompanhamento mensal ou trimestral.
- `vertice-report.sty` — identidade visual e comandos compartilhados.
- `assets/mark.png` — símbolo da Vértice para uso em capa e cabeçalho; o nome da empresa é composto tipograficamente no template.

## Personalização rápida

As cores estão no arquivo `vertice-report.sty`:

- Azul-petróleo: `#0C292D`;
- Cobre de decisão: `#D3633B`;
- Papel quente: `#F4F1E9`;
- Cobre claro: `#EDC3A9`;
- Texto de apoio: `#41565A`.

Para criar um novo relatório, duplique `relatorio-template-mestre.tex`, altere a capa e mantenha a estrutura de evidências, achados, riscos, roadmap, conclusão e limites profissionais.

## Organização recomendada do projeto no Overleaf

Use uma pasta por cliente ou contrato e mantenha estes subdiretórios:

```text
00-controle/
01-evidencias/
02-analise/
03-relatorio/
04-apresentacao/
05-plano-de-acao/
06-encerramento/
```

Não coloque senhas, dados bancários, credenciais, dados pessoais desnecessários ou documentos confidenciais sem autorização. Quando um relatório tratar de legislação, contratos, direitos de titulares ou transferências internacionais, registre as fontes, a data de consulta e a necessidade de validação jurídica local.

## Convenção de nome

```text
AAAA-MM-DD_CLIENTE_TIPO-RELATORIO_VERSAO_STATUS.pdf
```

Exemplo:

```text
2026-10-20_ORGAO-EXEMPLO_DIAGNOSTICO-GOVERNANCA-TI_v1.0_EM-REVISAO.pdf
```
