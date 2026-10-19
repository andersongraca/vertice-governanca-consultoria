/** DESIGN — Proteção de dados aparece como um mapa de responsabilidade: jurisdição, evidência e decisão. */
import {
  AlertTriangle,
  ArrowRight,
  CalendarDays,
  ExternalLink,
  Globe2,
  Landmark,
  ShieldCheck,
} from "lucide-react";
import { Link } from "wouter";
import PageMeta from "@/components/PageMeta";
import SiteChrome from "@/components/SiteChrome";
import {
  dataProtectionDisclaimer,
  dataProtectionJurisdictions,
  dataProtectionReviewDate,
  dataProtectionSupport,
} from "@/lib/dataProtection";

export default function ProtecaoDados() {
  return (
    <SiteChrome active="privacidade-dados">
      <PageMeta
        title="Proteção de Dados Lusófona | Vértice"
        description="Governança técnica de proteção de dados para Brasil, Portugal, Angola, Moçambique e Cabo Verde, com fontes oficiais e limites jurídicos claros."
        path="/protecao-dados"
      />
      <section className="route-hero route-hero-dark privacy-data-hero">
        <div className="route-kicker">
          <span>07</span> Proteção de dados
        </div>
        <div className="route-hero-grid">
          <div>
            <div className="eyebrow eyebrow-light">
              <span /> Uma trilha lusófona de governança
            </div>
            <h1>
              O mesmo idioma.
              <br />
              <em>Regras diferentes.</em>
            </h1>
          </div>
          <p>
            Organizamos fluxos, papéis, riscos, contratos e evidências para
            operações que tratam dados no Brasil, em Portugal, Angola,
            Moçambique e Cabo Verde.
          </p>
        </div>
      </section>

      <main className="privacy-data-main">
        <section className="privacy-data-intro">
          <div>
            <div className="eyebrow">
              <span /> Antes de falar em conformidade
            </div>
            <h2>
              Governança começa por <em>localizar o risco.</em>
            </h2>
          </div>
          <div className="privacy-data-intro-copy">
            <p>
              A língua comum não transforma cinco jurisdições em uma só. O
              primeiro passo é entender onde o tratamento acontece, quem decide,
              quem opera, quais dados circulam e que fonte oficial sustenta cada
              conclusão.
            </p>
            <div className="privacy-data-disclaimer">
              <ShieldCheck size={18} aria-hidden="true" />
              <p>{dataProtectionDisclaimer}</p>
            </div>
          </div>
        </section>

        <section
          className="privacy-support-section"
          aria-label="Como a Vértice pode apoiar"
        >
          <div className="privacy-section-heading">
            <div className="eyebrow">
              <span /> O que organizamos
            </div>
            <p>
              Uma camada técnica para que a decisão jurídica aconteça sobre
              fatos, documentos e responsabilidades visíveis.
            </p>
          </div>
          <div className="privacy-support-grid">
            {dataProtectionSupport.map(item => (
              <article key={item.number}>
                <span>{item.number}</span>
                <strong>{item.title}</strong>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="privacy-jurisdictions-section" id="jurisdicoes">
          <div className="privacy-section-heading privacy-jurisdictions-heading">
            <div>
              <div className="eyebrow">
                <span /> Mapa de jurisdições
              </div>
              <h2>
                Cinco contextos.
                <br />
                <em>Uma disciplina de evidência.</em>
              </h2>
            </div>
            <p>
              Consulte o marco geral, a autoridade, os pontos de governança e os
              limites identificados na pesquisa oficial.
            </p>
          </div>
          <div
            className="privacy-jurisdiction-index"
            aria-label="Ir para uma jurisdição"
          >
            {dataProtectionJurisdictions.map(jurisdiction => (
              <a key={jurisdiction.id} href={`#${jurisdiction.id}`}>
                <span>{jurisdiction.code}</span>
                {jurisdiction.name}
                <ArrowRight size={15} />
              </a>
            ))}
          </div>
          <div className="privacy-jurisdiction-grid">
            {dataProtectionJurisdictions.map(jurisdiction => (
              <article
                className="privacy-jurisdiction-card"
                id={jurisdiction.id}
                key={jurisdiction.id}
              >
                <header>
                  <div className="privacy-jurisdiction-code">
                    <span>{jurisdiction.code}</span>
                    <strong>{jurisdiction.name}</strong>
                  </div>
                  <span
                    className={`privacy-status privacy-status-${jurisdiction.statusTone}`}
                  >
                    <i />
                    {jurisdiction.status}
                  </span>
                </header>
                <p className="privacy-jurisdiction-label">
                  {jurisdiction.shortLabel}
                </p>
                <div className="privacy-authority">
                  <Landmark size={16} />
                  <span>{jurisdiction.authority}</span>
                </div>
                <p className="privacy-card-scope">{jurisdiction.scope}</p>
                <div className="privacy-card-columns">
                  <div>
                    <span className="privacy-card-heading">
                      Pontos de governança
                    </span>
                    <ul>
                      {jurisdiction.keyPoints.map(point => (
                        <li key={point}>{point}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <span className="privacy-card-heading">
                      Transferências e localização
                    </span>
                    <p>{jurisdiction.crossBorder}</p>
                  </div>
                </div>
                <div className="privacy-card-support">
                  <span className="privacy-card-heading">
                    Apoio técnico Vértice
                  </span>
                  <ul>
                    {jurisdiction.support.map(item => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div className="privacy-card-caution">
                  <AlertTriangle size={16} />
                  <p>{jurisdiction.caution}</p>
                </div>
                <footer>
                  <span>
                    <Globe2 size={14} /> Fontes oficiais
                  </span>
                  <div>
                    {jurisdiction.sources.map(source => (
                      <a
                        key={source.href}
                        href={source.href}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {source.label}
                        <ExternalLink size={13} />
                      </a>
                    ))}
                  </div>
                </footer>
              </article>
            ))}
          </div>
        </section>

        <aside className="privacy-review-note">
          <CalendarDays size={18} aria-hidden="true" />
          <p>
            <strong>Revisão editorial:</strong> {dataProtectionReviewDate}.
            Marcos legais, atos de autoridades, decisões e regras setoriais
            mudam. A fonte oficial vigente deve ser conferida antes de uma
            decisão ou implementação.
          </p>
        </aside>
      </main>

      <section className="route-callout privacy-data-callout">
        <div>
          <div className="eyebrow eyebrow-light">
            <span /> Próximo passo
          </div>
          <h2>
            Da regra publicada
            <br />
            <em>à evidência operacional.</em>
          </h2>
        </div>
        <p>
          Começamos por uma conversa sobre fluxos, papéis, fornecedores, países,
          dados e decisões que precisam ser sustentadas.
        </p>
        <Link
          href="/diagnostico?area=Governança%20de%20Privacidade%20e%20Dados%20Lusófona"
          className="route-callout-link"
        >
          Solicitar diagnóstico técnico <ArrowRight size={18} />
        </Link>
      </section>
    </SiteChrome>
  );
}
