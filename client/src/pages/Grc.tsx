/** DESIGN — GRC aplicado à TI como arquitetura editorial de decisão, risco e evidência. */
import {
  ArrowRight,
  Check,
  CircleAlert,
  Scale,
  ShieldCheck,
  Sparkles,
  Target,
} from "lucide-react";
import { Link } from "wouter";
import PageMeta from "@/components/PageMeta";
import SiteChrome from "@/components/SiteChrome";
import {
  grcCycle,
  grcDeliverables,
  grcMethodGroups,
  grcPillars,
} from "@/lib/grcContent";
import { blogPosts } from "@/lib/blogPosts";
import { serviceCatalog } from "@/lib/serviceCatalog";

const pillarIcons = [Target, CircleAlert, ShieldCheck];
const featuredArticleSlugs = [
  "itil-v5-iso-42001-lgpd-uma-arquitetura-de-gestao",
  "governanca-ia-na-operacao-de-servicos-itil-v5",
  "privacidade-em-paises-de-lingua-portuguesa",
];

export default function Grc() {
  const featuredArticles = featuredArticleSlugs
    .map(slug => blogPosts.find(post => post.slug === slug))
    .filter(Boolean);

  return (
    <SiteChrome active="grc">
      <PageMeta
        title="GRC aplicado à TI | Vértice Consultoria"
        description="Governança, Riscos e Conformidade aplicados à Tecnologia da Informação, com referências em COBIT, ITIL Version 5, ISO, dados, projetos, processos e governança de IA."
        path="/grc"
      />
      <section className="route-hero route-hero-dark grc-route-hero">
        <div className="route-kicker">
          <span>03</span> GRC aplicado à TI
        </div>
        <div className="route-hero-grid">
          <div>
            <div className="eyebrow hero-eyebrow">
              <span /> Governança · Riscos · Conformidade
            </div>
            <h1>
              A decisão precisa de <em>estrutura.</em>
            </h1>
          </div>
          <p>
            Conectamos estratégia, serviços, projetos, dados, pessoas, riscos e
            requisitos para que a tecnologia avance com responsabilidade visível
            e evidências sustentáveis.
          </p>
        </div>
        <div className="grc-hero-bottom">
          <span>GRC NÃO É UMA CAMADA A MAIS.</span>
          <strong>É a forma de ligar intenção, risco e execução.</strong>
        </div>
      </section>

      <section className="route-section grc-pillars-section">
        <div className="grc-section-heading">
          <div>
            <div className="eyebrow">
              <span /> Uma arquitetura de gestão
            </div>
            <h2>
              Três dimensões.
              <br />
              <em>Uma mesma conversa.</em>
            </h2>
          </div>
          <p>
            GRC organiza a relação entre decisão, incerteza e obrigação. Na
            prática, a Vértice transforma essa arquitetura em modelos, rotinas,
            controles e indicadores que cabem na operação.
          </p>
        </div>
        <div className="grc-pillars-grid">
          {grcPillars.map((pillar, index) => {
            const Icon = pillarIcons[index];
            return (
              <article key={pillar.number}>
                <div className="grc-card-topline">
                  <span>{pillar.number}</span>
                  <Icon size={21} strokeWidth={1.6} />
                </div>
                <small>{pillar.label}</small>
                <h3>{pillar.title}</h3>
                <p>{pillar.description}</p>
                <strong>
                  <Sparkles size={15} /> {pillar.outputs}
                </strong>
              </article>
            );
          })}
        </div>
      </section>

      <section className="route-section grc-cycle-section">
        <div className="grc-section-heading grc-cycle-heading">
          <div>
            <div className="eyebrow">
              <span /> Como atuamos
            </div>
            <h2>
              Do contexto à evidência,
              <br />
              <em>sem saltar etapas.</em>
            </h2>
          </div>
          <p>
            O trabalho pode começar por uma auditoria, um projeto crítico, uma
            decisão de investimento, um incidente, um contrato ou uma iniciativa
            de IA. O método organiza o que precisa ser visto antes de propor a
            resposta.
          </p>
        </div>
        <div className="grc-cycle-layout">
          <ol className="grc-cycle-list">
            {grcCycle.map(step => (
              <li key={step.number}>
                <span>{step.number}</span>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              </li>
            ))}
          </ol>
          <aside className="grc-evidence-card">
            <div className="eyebrow eyebrow-light">
              <span /> O que muda
            </div>
            <h3>
              Controle não é produzir mais papel.
              <em> É conseguir responder.</em>
            </h3>
            <p>
              Quem decidiu? Qual risco foi aceito? Qual controle está
              funcionando? Que evidência sustenta a afirmação? O que precisa
              mudar agora?
            </p>
            <div className="grc-evidence-lines">
              <span>DECISÃO</span>
              <i />
              <span>RISCO</span>
              <i />
              <span>EVIDÊNCIA</span>
            </div>
          </aside>
        </div>
      </section>

      <section className="route-section grc-methods-section">
        <div className="grc-section-heading">
          <div>
            <div className="eyebrow">
              <span /> Repertório aplicado
            </div>
            <h2>
              Métodos que dão precisão
              <br />
              <em>à conversa.</em>
            </h2>
          </div>
          <p>
            A{" "}
            <a
              className="grc-inline-link"
              href="https://wordpress.ft.unicamp.br/espgov/?page_id=29"
              target="_blank"
              rel="noreferrer"
            >
              especialização em Governança de TI pela Unicamp
            </a>
            , a formação em Computação e o ITIL Version 5 formam uma base para
            conectar diferentes referências ao problema real do cliente.
          </p>
        </div>
        <div className="grc-methods-grid">
          {grcMethodGroups.map(group => (
            <article key={group.number}>
              <span className="grc-method-number">{group.number}</span>
              <h3>{group.title}</h3>
              <p>{group.description}</p>
              <div className="grc-method-tags">
                {group.methods.map(method => (
                  <span key={method}>{method}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
        <p className="grc-method-note">
          Referências e métodos são aplicados conforme o escopo, a maturidade e
          a necessidade do projeto. Eles não representam, por si só,
          certificação da Vértice em todos os frameworks listados.
        </p>
      </section>

      <section className="route-section grc-fronts-section">
        <div className="grc-section-heading grc-fronts-heading">
          <div>
            <div className="eyebrow">
              <span /> Dez frentes conectadas
            </div>
            <h2>
              GRC aparece na rotina
              <br />
              <em>de cada decisão.</em>
            </h2>
          </div>
          <p>
            GRC é o guarda-chuva. As frentes abaixo são as formas concretas de
            intervir em serviços, projetos, processos, pessoas, dados,
            segurança, contratos, arquitetura, normas e privacidade.
          </p>
        </div>
        <div className="grc-fronts-grid">
          {serviceCatalog.map(service => (
            <Link
              key={service.id}
              href={`/servicos?service=${encodeURIComponent(service.id)}`}
              className="grc-front-card"
            >
              <span>{service.number}</span>
              <strong>{service.short}</strong>
              <ArrowRight size={16} />
            </Link>
          ))}
        </div>
      </section>

      <section className="grc-deliverables-section">
        <div>
          <div className="eyebrow eyebrow-light">
            <span /> Entregáveis possíveis
          </div>
          <h2>
            Da leitura executiva
            <br />
            <em>à rotina que permanece.</em>
          </h2>
          <p>
            Cada projeto é dimensionado conforme o contexto. O objetivo é deixar
            capacidade instalada, não apenas um conjunto de documentos.
          </p>
          <Link className="primary-cta" href="/diagnostico">
            Começar pelo diagnóstico <ArrowRight size={17} />
          </Link>
        </div>
        <ul>
          {grcDeliverables.map(item => (
            <li key={item}>
              <Check size={17} /> {item}
            </li>
          ))}
        </ul>
      </section>

      <section className="route-section grc-reading-section">
        <div className="grc-section-heading">
          <div>
            <div className="eyebrow">
              <span /> Leitura de apoio
            </div>
            <h2>
              GRC também se constrói
              <br />
              <em>em linguagem acessível.</em>
            </h2>
          </div>
          <p>
            Conteúdos para aproximar ITIL, governança de IA, ISO/IEC 42001 e
            privacidade da rotina de quem precisa decidir.
          </p>
        </div>
        <div className="grc-reading-grid">
          {featuredArticles.map(post => (
            <Link
              key={post!.slug}
              href={`/blog/${post!.slug}`}
              className="grc-reading-card"
            >
              <span>{post!.category}</span>
              <h3>{post!.title}</h3>
              <p>{post!.excerpt}</p>
              <strong>
                Continuar leitura <ArrowRight size={15} />
              </strong>
            </Link>
          ))}
        </div>
        <aside
          className="route-boundary-note grc-boundary-note"
          aria-label="Limites profissionais da Vértice"
        >
          <Scale size={19} aria-hidden="true" />
          <p>
            A Vértice presta consultoria técnica e gerencial. Pareceres,
            interpretação jurídica, representação perante autoridades,
            certificação ou auditoria independente, operação de infraestrutura,
            desenvolvimento de software, testes ofensivos e perícia permanecem
            fora do escopo próprio, salvo parceria formal com profissionais
            habilitados.
          </p>
        </aside>
      </section>
    </SiteChrome>
  );
}
