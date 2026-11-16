import fs from "node:fs/promises";
import path from "node:path";
import { createServer } from "vite";
import React from "react";
import { renderToString } from "react-dom/server";
import { Router } from "wouter";

const project = process.cwd();
const publicBase =
  "https://andersongraca.github.io/vertice-governanca-consultoria";
const appBase = "/vertice-governanca-consultoria";
const route = "/capacitacao/";
const vite = await createServer({
  configFile: path.join(project, "vite.config.ts"),
  base: `${appBase}/`,
  server: { middlewareMode: true, hmr: false },
  appType: "custom",
});

const escapeAttribute = text =>
  text
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
try {
  const {
    default: Capacitacao,
    trainingPageTitle,
    trainingPageDescription,
  } = await vite.ssrLoadModule("/src/pages/Capacitacao.tsx");
  const hook = () => [`${appBase}${route}`, () => {}];
  const body = renderToString(
    React.createElement(
      Router,
      { base: appBase, hook },
      React.createElement(Capacitacao)
    )
  );
  const indexPath = path.join(project, "dist/public/index.html");
  let html = await fs.readFile(indexPath, "utf8");
  const title = escapeAttribute(trainingPageTitle);
  const description = escapeAttribute(trainingPageDescription);
  html = html.replace(/<title>[\s\S]*?<\/title>/, `<title>${title}</title>`);
  html = html.replace(
    /<meta\b[^>]*(?:name="(?:description|twitter:[^"]+)"|property="og:[^"]+")[^>]*>\s*/g,
    ""
  );
  const url = `${publicBase}${route}`;
  const socialImage = `${publicBase}/favicon.svg`;
  const metadata = `
    <meta name="description" content="${description}" />
    <meta name="robots" content="index, follow" />
    <link rel="canonical" href="${url}" />
    <meta property="og:type" content="website" />
    <meta property="og:title" content="${title}" />
    <meta property="og:description" content="${description}" />
    <meta property="og:url" content="${url}" />
    <meta property="og:site_name" content="Vértice Consultoria" />
    <meta property="og:image" content="${socialImage}" />
    <meta name="twitter:card" content="summary" />
    <meta name="twitter:title" content="${title}" />
    <meta name="twitter:description" content="${description}" />
    <meta name="twitter:image" content="${socialImage}" />
  `;
  html = html.replace("</head>", `${metadata}</head>`);
  if (!html.includes('<div id="root"></div>'))
    throw new Error("O build não contém o mount esperado da aplicação.");
  html = html.replace('<div id="root"></div>', `<div id="root">${body}</div>`);
  for (const marker of [
    "LGPD",
    "Brasil",
    "Portugal",
    "Angola",
    "Moçambique",
    "Cabo Verde",
  ]) {
    if (!body.includes(marker)) throw new Error(`Conteúdo ausente: ${marker}`);
  }
  const target = path.join(project, "dist/public/capacitacao/index.html");
  await fs.mkdir(path.dirname(target), { recursive: true });
  await fs.writeFile(target, html.replace(/[ \t]+$/gm, ""));
  console.log(
    `Capacitação: HTML estático com conteúdo e metadados gravado em ${target}`
  );
} finally {
  await vite.close();
}
