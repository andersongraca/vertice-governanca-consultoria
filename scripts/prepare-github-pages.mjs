import fs from "node:fs/promises";
import path from "node:path";

const project = process.cwd();
const source = path.join(project, "dist/public");
const target = path.join(project, "dist/github-pages");
const appBase = "/vertice-governanca-consultoria";
const template = await fs.readFile(path.join(source, "index.html"), "utf8");
const manifest = JSON.parse(
  await fs.readFile(path.join(source, "manus-routes.json"), "utf8")
);
const sitemap = await fs.readFile(path.join(source, "sitemap.xml"), "utf8");
const routes = new Set(
  manifest.routes
    .map(entry => entry.path)
    .filter(route => route !== "/" && !route.includes(":"))
);
for (const match of sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)) {
  const url = new URL(match[1]);
  if (
    url.hostname !== "andersongraca.github.io" ||
    !url.pathname.startsWith(`${appBase}/`)
  )
    continue;
  const route = url.pathname.slice(appBase.length).replace(/\/$/, "");
  if (route) routes.add(route);
}
await fs.rm(target, { recursive: true, force: true });
await fs.cp(source, target, { recursive: true });
for (const route of routes) {
  if (route.includes("..") || route.includes(":"))
    throw new Error(`Rota inválida: ${route}`);
  const slug = route.replace(/^\/+|\/+$/g, "");
  if (slug === "capacitacao") continue; // Preserve o HTML pré-renderizado com conteúdo real.
  const destination = path.join(target, slug, "index.html");
  await fs.mkdir(path.dirname(destination), { recursive: true });
  await fs.writeFile(destination, template);
}
await fs.writeFile(path.join(target, "404.html"), template);
await fs.writeFile(path.join(target, ".nojekyll"), "");
const training = await fs.readFile(
  path.join(target, "capacitacao/index.html"),
  "utf8"
);
if (!training.includes("training-page") || !training.includes("LGPD"))
  throw new Error("O HTML da aba Capacitação não foi preservado.");
console.log(
  `GitHub Pages: ${routes.size} rotas profundas preparadas em ${target}; Capacitação pré-renderizada preservada.`
);
