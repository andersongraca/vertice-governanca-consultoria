/** DESIGN — Horizonte de Controle: uma matriz de escolhas, não uma prateleira de serviços. */
import { ArrowRight, Check, ClipboardCheck, Database, Network, ShieldCheck, Sparkles, Target } from "lucide-react";
import { useState } from "react";
import { Link } from "wouter";
import SiteChrome from "@/components/SiteChrome";

type ServiceKey = "governanca" | "planejamento" | "projetos" | "dados" | "servicos" | "transformacao" | "ia";

type Service = { number: string; short: string; title: string; description: string; outcome: string; delivery: string[]; icon: typeof ShieldCheck; area: string; notice?: string };

const services: Record<ServiceKey, Service> = {
  governanca: {
    number: "01", short: "Governança & Portfólio", title: "Governança de TI e Portfólio de Iniciativas.",
    description: "Estruturamos decisões, comitês, papéis, indicadores, riscos e prioridades para que a tecnologia gere valor mensurável ao negócio.",
    outcome: "Liderança com visibilidade para priorizar investimentos, riscos e iniciativas.",
    delivery: ["Diagnóstico de maturidade", "Modelo de decisão e comitês", "Indicadores, riscos e plano de ação"], icon: ShieldCheck, area: "Governança de TI e Portfólio de Iniciativas",
  },
  planejamento: {
    number: "02", short: "Planejamento & Roadmaps", title: "Planejamento Estratégico de TIC e Roadmaps.",
    description: "Construímos diagnósticos, roadmaps, políticas e planos de ação para orientar investimentos, serviços e iniciativas digitais.",
    outcome: "Uma direção prática para conectar prioridades institucionais e evolução tecnológica.",
    delivery: ["Diagnóstico estratégico", "Roadmap priorizado", "Políticas e plano de ação"], icon: Target, area: "Planejamento Estratégico de TIC e Roadmaps",
  },
  projetos: {
    number: "03", short: "PMO & Projetos", title: "PMO e Gestão de Projetos e Programas de TIC.",
    description: "Organizamos portfólios, cronogramas, riscos, benefícios e ritos executivos para projetos complexos avançarem com clareza e controle.",
    outcome: "Projetos e programas críticos com cadência, responsáveis e decisões visíveis.",
    delivery: ["Estrutura de PMO", "Plano integrado e gestão de riscos", "Ritos executivos e acompanhamento"], icon: ClipboardCheck, area: "PMO e Gestão de Projetos e Programas de TIC",
  },
  dados: {
    number: "04", short: "Dados, Privacidade & LGPD", title: "Governança de Dados, Privacidade e Apoio Técnico à LGPD.",
    description: "Mapeamos dados, processos, riscos e controles; apoiamos a implantação de rotinas de privacidade, indicadores e capacitação.",
    outcome: "Dados organizados para decisões confiáveis e privacidade tratada como rotina de gestão.",
    delivery: ["Mapa de dados e processos", "Controles e indicadores de privacidade", "Capacitação e roadmap de evolução"], icon: Database, area: "Governança de Dados, Privacidade e Apoio Técnico à LGPD",
    notice: "Quando a demanda requer análise jurídica, atuamos em conjunto com assessoria especializada.",
  },
  servicos: {
    number: "05", short: "Serviços & Fornecedores", title: "Gestão de Serviços, Contratos e Fornecedores de TIC.",
    description: "Definimos níveis de serviço, critérios de aceite, indicadores, controles de terceiros e rotinas de acompanhamento de contratos tecnológicos.",
    outcome: "Serviços e fornecedores acompanhados por critérios claros de desempenho e valor.",
    delivery: ["Catálogo e níveis de serviço", "Critérios de aceite e indicadores", "Governança de contratos e terceiros"], icon: Network, area: "Gestão de Serviços, Contratos e Fornecedores de TIC",
  },
  transformacao: {
    number: "06", short: "Transformação Digital", title: "Transformação Digital Orientada à Governança.",
    description: "Priorizamos iniciativas, redesenhamos processos, estruturamos a gestão da mudança e acompanhamos a evolução do roadmap digital.",
    outcome: "Uma transformação que conecta adoção, processos, prioridades e resultados verificáveis.",
    delivery: ["Mapa de iniciativas prioritárias", "Redesenho de processos", "Gestão da mudança e roadmap"], icon: Target, area: "Transformação Digital Orientada à Governança",
  },
  ia: {
    number: "07", short: "Governança de IA", title: "Governança de IA e Uso Responsável de Dados.",
    description: "Criamos diretrizes, critérios de risco, papéis, controles e práticas de capacitação para adoção responsável de inteligência artificial.",
    outcome: "Iniciativas de IA orientadas por valor, responsabilidade e controles proporcionais ao contexto.",
    delivery: ["Diretrizes e princípios de uso", "Mapa de casos e critérios de risco", "Papéis, controles e capacitação"], icon: ClipboardCheck, area: "Governança de IA e Uso Responsável de Dados",
  },
};

const order: ServiceKey[] = ["governanca", "planejamento", "projetos", "dados", "servicos", "transformacao", "ia"];

export default function Atuacao() {
  const [active, setActive] = useState<ServiceKey>("governanca");
  const service = services[active];
  const Icon = service.icon;

  return (
    <SiteChrome active="atuacao">
      <section className="route-hero route-hero-light">
        <div className="route-kicker"><span>02</span> Frentes de atuação</div>
        <div className="route-hero-grid">
          <div><div className="eyebrow"><span /> Escolha pelo desafio</div><h1>Onde a TI precisa <em>ganhar controle?</em></h1></div>
          <p>A Vértice estrutura decisões, processos, dados, projetos e fornecedores de tecnologia para transformar prioridades digitais em resultados verificáveis.</p>
        </div>
      </section>

      <section className="route-section service-route-section">
        <div className="route-service-layout">
          <aside className="route-service-menu" role="tablist" aria-label="Serviços da Vértice">
            {order.map((key) => (
              <button key={key} id={`route-tab-${key}`} type="button" role="tab" aria-selected={active === key} aria-controls={`route-panel-${key}`} className={active === key ? "active" : ""} onClick={() => setActive(key)}>
                <span>{services[key].number}</span>{services[key].short}<ArrowRight size={16} />
              </button>
            ))}
          </aside>
          <article id={`route-panel-${active}`} className="route-service-panel" role="tabpanel" aria-labelledby={`route-tab-${active}`}>
            <div className="panel-topline"><span>{service.number} · Vértice atua</span><Icon size={25} strokeWidth={1.5} /></div>
            <h2>{service.title}</h2>
            <p>{service.description}</p>
            {service.notice && <p className="service-legal-note">{service.notice}</p>}
            <div className="route-service-outcome"><Sparkles size={17} /><strong>{service.outcome}</strong></div>
            <div className="route-deliveries">
              <span>Entregas típicas</span>
              <ul>{service.delivery.map((item) => <li key={item}><Check size={16} />{item}</li>)}</ul>
            </div>
            <Link className="primary-cta" href={`/diagnostico?area=${encodeURIComponent(service.area)}`}>Quero avaliar este desafio <ArrowRight size={17} /></Link>
          </article>
        </div>
        <aside className="route-boundary-note" aria-label="Limites profissionais da Vértice">
          <ShieldCheck size={19} aria-hidden="true" />
          <p>A Vértice presta consultoria técnica e gerencial em governança, dados e tecnologia. Projetos que demandem parecer, assessoria ou representação jurídica são conduzidos em conjunto com profissional habilitado.</p>
        </aside>
      </section>

      <section className="route-callout">
        <div><div className="eyebrow eyebrow-light"><span /> Como começamos</div><h2>Diagnóstico executivo<br /><em>em 30 dias.</em></h2></div>
        <p>Leitura objetiva do cenário, prioridades acordadas e uma agenda de 90 dias para a liderança acompanhar.</p>
        <Link href="/diagnostico" className="route-callout-link">Abrir conversa de diagnóstico <ArrowRight size={18} /></Link>
      </section>
    </SiteChrome>
  );
}
