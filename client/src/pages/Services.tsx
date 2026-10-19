/** DESIGN — O portfólio é uma matriz de escolhas: cada frente revela o nível de decisão que a Vértice ajuda a organizar. */
import { ArrowRight, Check, ShieldCheck, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useSearch } from "wouter";
import PageMeta from "@/components/PageMeta";
import SiteChrome from "@/components/SiteChrome";
import { getServiceById, serviceCatalog } from "@/lib/serviceCatalog";

export default function Services() {
  const search = useSearch();
  const requestedService = new URLSearchParams(search).get("service");
  const initialServiceId =
    requestedService &&
    serviceCatalog.some(service => service.id === requestedService)
      ? requestedService
      : serviceCatalog[0].id;
  const [activeId, setActiveId] = useState(initialServiceId);
  useEffect(() => {
    if (
      requestedService &&
      serviceCatalog.some(service => service.id === requestedService)
    ) {
      setActiveId(requestedService);
    }
  }, [requestedService]);
  const service = getServiceById(activeId);
  const Icon = service.icon;

  return (
    <SiteChrome active="servicos">
      <PageMeta
        title="Serviços | Vértice Governança de TI"
        description="Conheça as frentes de consultoria da Vértice em serviços, projetos, alinhamento estratégico, conhecimento, segurança, dados, contratos, arquitetura organizacional, privacidade lusófona e ISO/IEC 27001 e 27701."
        path="/servicos"
      />
      <section className="route-hero route-hero-light services-route-hero">
        <div className="route-kicker">
          <span>02</span> Serviços Vértice
        </div>
        <div className="route-hero-grid">
          <div>
            <div className="eyebrow">
              <span /> A especialização aplicada à decisão
            </div>
            <h1>
              Onde a organização precisa <em>ganhar coerência?</em>
            </h1>
          </div>
          <p>
            Atuamos entre estratégia, processos, pessoas, dados e tecnologia
            para transformar complexidade em escolhas, responsabilidades e
            evolução sustentável.
          </p>
        </div>
      </section>

      <section className="route-section service-route-section services-catalog-section">
        <div className="services-intro-grid">
          <div>
            <div className="eyebrow">
              <span /> Dez frentes conectadas
            </div>
            <h2>
              O serviço muda.
              <br />
              <em>A lógica permanece.</em>
            </h2>
          </div>
          <p>
            O ponto de partida pode ser um projeto atrasado, um contrato difícil
            de acompanhar, uma auditoria de segurança ou uma decisão de
            investimento. A abordagem é sempre ligar o problema à capacidade de
            gestão que precisa existir.
          </p>
        </div>
        <div className="services-proof-grid" aria-label="Princípios de atuação">
          <article>
            <span>01</span>
            <strong>Contexto antes do desenho</strong>
            <p>
              Entendemos o cenário real antes de propor modelos, indicadores ou
              controles.
            </p>
          </article>
          <article>
            <span>02</span>
            <strong>Responsabilidade visível</strong>
            <p>
              Transformamos papéis, decisões e dependências em uma linguagem que
              a organização consegue acompanhar.
            </p>
          </article>
          <article>
            <span>03</span>
            <strong>Evolução sustentável</strong>
            <p>
              Priorizamos o que pode ser incorporado à rotina, medido e
              melhorado ao longo do tempo.
            </p>
          </article>
        </div>
        <div className="route-service-layout services-detail-layout">
          <aside
            className="route-service-menu"
            role="tablist"
            aria-label="Frentes de serviços da Vértice"
          >
            {serviceCatalog.map(item => (
              <button
                key={item.id}
                id={`service-tab-${item.id}`}
                type="button"
                role="tab"
                aria-selected={activeId === item.id}
                aria-controls={`service-panel-${item.id}`}
                className={activeId === item.id ? "active" : ""}
                onClick={() => setActiveId(item.id)}
              >
                <span>{item.number}</span>
                {item.short}
                <ArrowRight size={16} />
              </button>
            ))}
          </aside>
          <article
            id={`service-panel-${service.id}`}
            className="route-service-panel"
            role="tabpanel"
            aria-labelledby={`service-tab-${service.id}`}
          >
            <div className="panel-topline">
              <span>
                {service.number} · {service.eyebrow}
              </span>
              <Icon size={25} strokeWidth={1.5} />
            </div>
            <h2>{service.title}</h2>
            <p>{service.description}</p>
            {service.notice && (
              <p className="service-legal-note">{service.notice}</p>
            )}
            <div className="route-service-outcome">
              <Sparkles size={17} />
              <strong>{service.outcome}</strong>
            </div>
            <div className="route-deliveries">
              <span>Entregas típicas</span>
              <ul>
                {service.deliverables.map(item => (
                  <li key={item}>
                    <Check size={16} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <Link
              className="primary-cta"
              href={`/diagnostico?area=${encodeURIComponent(service.title.replace(/\.$/, ""))}`}
            >
              Conversar sobre esta frente <ArrowRight size={17} />
            </Link>
            {service.id === "privacidade-dados-lusofona" && (
              <Link
                className="route-secondary-button services-privacy-link"
                href="/protecao-dados"
              >
                Ver mapa de jurisdições <ArrowRight size={16} />
              </Link>
            )}
          </article>
        </div>
        <aside
          className="route-boundary-note"
          aria-label="Limites profissionais da Vértice"
        >
          <ShieldCheck size={19} aria-hidden="true" />
          <p>
            A Vértice presta consultoria técnica e gerencial em governança,
            dados, processos e tecnologia. Projetos que demandem parecer,
            assessoria ou representação jurídica são conduzidos em conjunto com
            profissional habilitado. Em certificações ISO, a auditoria
            independente permanece fora do escopo da consultoria.
          </p>
        </aside>
      </section>

      <section className="route-callout services-callout">
        <div>
          <div className="eyebrow eyebrow-light">
            <span /> Como começamos
          </div>
          <h2>
            Uma conversa para escolher
            <br />
            <em>o ponto de maior efeito.</em>
          </h2>
        </div>
        <p>
          Mapeamos o desafio, identificamos a decisão que está travando a
          execução e organizamos um primeiro caminho de 30 dias.
        </p>
        <Link href="/diagnostico" className="route-callout-link">
          Abrir conversa de diagnóstico <ArrowRight size={18} />
        </Link>
      </section>
    </SiteChrome>
  );
}
