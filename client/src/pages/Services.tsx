/** DESIGN — O portfólio é uma matriz de escolhas: cada frente revela o nível de decisão que a Vértice ajuda a organizar. */
import { ArrowRight, Check, ShieldCheck, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useSearch } from "wouter";
import PageMeta from "@/components/PageMeta";
import SiteChrome from "@/components/SiteChrome";
import { caseStudies } from "@/lib/caseStudies";
import { consultingCapabilities } from "@/lib/consultingCapabilities";
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
        title="Consultoria em TI e Serviços | Vértice"
        description="Consultoria em TI, governança e gestão: dez frentes de atuação em serviços, projetos, estratégia, processos, dados, segurança, contratos, arquitetura, IA, privacidade e ISO."
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
              <span /> Consultoria em TI · Dez frentes conectadas
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
        <div className="consulting-capabilities-heading">
          <div>
            <div className="eyebrow">
              <span /> O que atravessa as frentes
            </div>
            <h3>
              Consultoria em TI com <em>amplitude e foco.</em>
            </h3>
          </div>
          <p>
            A especialização em Governança de TI, a formação em Computação e o
            ITIL Version 5 ampliam a capacidade de conectar estratégia,
            operação, processos e melhoria sem transformar o portfólio em uma
            lista de promessas genéricas.
          </p>
        </div>
        <div
          className="consulting-capabilities-grid"
          aria-label="Capacidades complementares de Consultoria em TI"
        >
          {consultingCapabilities.map(capability => (
            <article key={capability.number}>
              <span>{capability.number}</span>
              <strong>{capability.title}</strong>
              <p>{capability.description}</p>
              <small>{capability.deliverable}</small>
            </article>
          ))}
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
            <a className="service-case-link" href={`#case-${service.id}`}>
              Ver caso de aplicação <ArrowRight size={16} />
            </a>
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

      <section id="cases" className="route-section case-studies-section">
        <div className="case-studies-heading">
          <div>
            <div className="eyebrow">
              <span /> Cases de aplicação
            </div>
            <h2>
              Da frente de serviço
              <br />
              <em>à mudança observável.</em>
            </h2>
          </div>
          <div className="case-studies-heading-copy">
            <p>
              Cada cenário traduz um desafio recorrente em contexto,
              intervenção, evidência e sinal de sucesso — para mostrar como a
              especialização pode aparecer na rotina da organização.
            </p>
            <div className="case-studies-disclaimer">
              <ShieldCheck size={18} aria-hidden="true" />
              <p>
                Estes são cenários de aplicação ilustrativos. Não representam
                clientes, resultados quantitativos ou alegações de projeto sem
                autorização e evidência pública.
              </p>
            </div>
          </div>
        </div>
        <div className="case-studies-grid">
          {caseStudies.map(caseStudy => {
            const serviceReference = getServiceById(caseStudy.serviceId);
            return (
              <article
                id={`case-${caseStudy.serviceId}`}
                className="case-study-card"
                key={caseStudy.id}
              >
                <header>
                  <span>{caseStudy.number}</span>
                  <strong>{serviceReference.short}</strong>
                </header>
                <h3>{caseStudy.title}</h3>
                <div className="case-study-story">
                  <div>
                    <span>Contexto</span>
                    <p>{caseStudy.context}</p>
                  </div>
                  <div>
                    <span>Intervenção</span>
                    <p>{caseStudy.intervention}</p>
                  </div>
                </div>
                <div className="case-study-evidence">
                  <span>Como se comprova</span>
                  <p>{caseStudy.evidence}</p>
                </div>
                <div className="case-study-success">
                  <Sparkles size={16} aria-hidden="true" />
                  <div>
                    <span>Sinal de sucesso</span>
                    <p>{caseStudy.successSignal}</p>
                  </div>
                </div>
                <Link
                  className="case-study-link"
                  href={`/servicos?service=${encodeURIComponent(caseStudy.serviceId)}`}
                >
                  Ver frente relacionada <ArrowRight size={15} />
                </Link>
              </article>
            );
          })}
        </div>
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
