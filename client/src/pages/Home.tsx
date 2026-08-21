/**
 * DESIGN — Horizonte de Controle: editorial executivo, azul-petróleo profundo,
 * off-white quente e Cobre de Decisão. A página funciona como uma rota de decisão,
 * com assimetria, marcos de progresso e interações discretas.
 */
import { FormEvent, useMemo, useState } from "react";
import {
  ArrowDownRight,
  ArrowRight,
  BarChart3,
  Check,
  ChevronRight,
  ClipboardCheck,
  Copy,
  Database,
  Menu,
  Network,
  ShieldCheck,
  Sparkles,
  Target,
  X,
} from "lucide-react";
import { Link } from "wouter";
import { ContactChannels } from "@/components/ContactChannels";
import { Checkbox } from "@/components/ui/checkbox";
import { BRAND_ASSETS } from "@/lib/brandAssets";

const LOGO_URL = BRAND_ASSETS.logo;
const HERO_URL = BRAND_ASSETS.hero;
const METODO_URL = BRAND_ASSETS.metodo;
const DADOS_URL = BRAND_ASSETS.dados;

type ServiceKey = "governanca" | "planejamento" | "projetos" | "dados" | "servicos" | "transformacao" | "ia";

type Inquiry = {
  nome: string;
  empresa: string;
  desafio: string;
  email: string;
};

const services: Record<
  ServiceKey,
  {
    eyebrow: string;
    title: string;
    description: string;
    outcome: string;
    delivery: string[];
    icon: typeof ShieldCheck;
    tone: string;
  }
> = {
  governanca: {
    eyebrow: "01 · Direção de TI",
    title: "Governança de TI e Portfólio de Iniciativas.",
    description:
      "Estruturamos decisões, comitês, papéis, indicadores, riscos e prioridades para que a tecnologia gere valor mensurável ao negócio.",
    outcome: "Mais visibilidade sobre investimentos, riscos, fornecedores e prioridades.",
    delivery: ["Diagnóstico de maturidade", "Modelo de decisão", "Indicadores e plano de ação"],
    icon: ShieldCheck,
    tone: "governance",
  },
  planejamento: {
    eyebrow: "02 · Direção estratégica",
    title: "Planejamento Estratégico de TIC e Roadmaps.",
    description:
      "Construímos diagnósticos, roadmaps, políticas e planos de ação para orientar investimentos, serviços e iniciativas digitais.",
    outcome: "Uma direção prática para conectar prioridades institucionais e evolução tecnológica.",
    delivery: ["Diagnóstico estratégico", "Roadmap priorizado", "Políticas e plano de ação"],
    icon: Target,
    tone: "planning",
  },
  projetos: {
    eyebrow: "03 · Projetos que avançam",
    title: "PMO e Gestão de Projetos e Programas de TIC.",
    description:
      "Organizamos portfólios, cronogramas, riscos, benefícios e ritos executivos para projetos complexos avançarem com clareza e controle.",
    outcome: "Projetos e programas críticos com cadência, responsáveis e decisões visíveis.",
    delivery: ["Estrutura de PMO", "Gestão de riscos", "Ritos executivos"],
    icon: ClipboardCheck,
    tone: "projects",
  },
  dados: {
    eyebrow: "04 · Dados que orientam",
    title: "Governança de Dados, Privacidade e Apoio Técnico à LGPD.",
    description:
      "Mapeamos dados, processos, riscos e controles; apoiamos a implantação de rotinas de privacidade, indicadores e capacitação.",
    outcome: "Dados organizados para decisões confiáveis e privacidade tratada como rotina de gestão.",
    delivery: ["Mapa de dados", "Controles de privacidade", "Capacitação e roadmap"],
    icon: Database,
    tone: "data",
  },
  servicos: {
    eyebrow: "05 · Serviços e fornecedores",
    title: "Gestão de Serviços, Contratos e Fornecedores de TIC.",
    description:
      "Definimos níveis de serviço, critérios de aceite, indicadores, controles de terceiros e rotinas de acompanhamento de contratos tecnológicos.",
    outcome: "Serviços e fornecedores acompanhados por critérios claros de desempenho e valor.",
    delivery: ["Níveis de serviço", "Critérios de aceite", "Governança de terceiros"],
    icon: Network,
    tone: "services",
  },
  transformacao: {
    eyebrow: "06 · Evolução com direção",
    title: "Transformação Digital Orientada à Governança.",
    description:
      "Priorizamos iniciativas, redesenhamos processos, estruturamos a gestão da mudança e acompanhamos a evolução do roadmap digital.",
    outcome: "Uma transformação conectada a prioridades, processos e resultados verificáveis.",
    delivery: ["Iniciativas prioritárias", "Redesenho de processos", "Gestão da mudança"],
    icon: Target,
    tone: "transformation",
  },
  ia: {
    eyebrow: "07 · IA com responsabilidade",
    title: "Governança de IA e Uso Responsável de Dados.",
    description:
      "Criamos diretrizes, critérios de risco, papéis, controles e práticas de capacitação para adoção responsável de inteligência artificial.",
    outcome: "Iniciativas de IA orientadas por valor, responsabilidade e controles proporcionais.",
    delivery: ["Diretrizes de uso", "Critérios de risco", "Papéis e capacitação"],
    icon: ClipboardCheck,
    tone: "ai",
  },
};

const serviceOrder: ServiceKey[] = ["governanca", "planejamento", "projetos", "dados", "servicos", "transformacao", "ia"];

const navItems = [
  { label: "Atuação", href: "/atuacao" },
  { label: "Método", href: "/metodo" },
  { label: "Quem somos", href: "/socios" },
];

export default function Home() {
  const [activeService, setActiveService] = useState<ServiceKey>("governanca");
  const [menuOpen, setMenuOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const [inquiry, setInquiry] = useState<Inquiry | null>(null);
  const [copied, setCopied] = useState(false);
  const [modalConsent, setModalConsent] = useState(false);
  const [modalAntiSpamError, setModalAntiSpamError] = useState("");
  const [modalStartedAt, setModalStartedAt] = useState(0);

  const service = services[activeService];
  const ServiceIcon = service.icon;

  const emailDraft = useMemo(() => {
    if (!inquiry) return "";
    return `Olá, Vértice.\n\nMeu nome é ${inquiry.nome}, da empresa ${inquiry.empresa}.\n\nQuero conversar sobre: ${inquiry.desafio}.\n\nMeu melhor e-mail para retorno é ${inquiry.email}.\n\nGostaria de entender como funciona o Diagnóstico Executivo de 30 dias.`;
  }, [inquiry]);

  function scrollTo(target: string) {
    document.getElementById(target)?.scrollIntoView({ behavior: "smooth", block: "start" });
    setMenuOpen(false);
  }

  function submitInquiry(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const website = String(form.get("website") ?? "");
    const verification = String(form.get("verification") ?? "").trim();
    if (website || verification !== "8" || !modalConsent || Date.now() - modalStartedAt < 2200) {
      setModalAntiSpamError("Confirme a verificação antispam e o aviso de privacidade antes de prosseguir.");
      return;
    }
    setModalAntiSpamError("");
    setInquiry({
      nome: String(form.get("nome") || ""),
      empresa: String(form.get("empresa") || ""),
      desafio: String(form.get("desafio") || ""),
      email: String(form.get("email") || ""),
    });
    setCopied(false);
  }

  function openContactDialog() {
    setContactOpen(true);
    setInquiry(null);
    setCopied(false);
    setModalConsent(false);
    setModalAntiSpamError("");
    setModalStartedAt(Date.now());
  }

  async function copyDraft() {
    if (!emailDraft) return;
    try {
      await navigator.clipboard.writeText(emailDraft);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2200);
    } catch {
      setCopied(false);
    }
  }

  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="brand" href="#inicio" aria-label="Vértice Governança de TI — início" onClick={() => scrollTo("inicio")}>
          <img src={LOGO_URL} alt="Símbolo Vértice" className="brand-mark" />
          <span className="brand-type">
            <strong>VÉRTICE</strong>
            <small>GOVERNANÇA DE TI</small>
          </span>
        </a>

        <nav className="desktop-nav" aria-label="Navegação principal">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href}>{item.label}</Link>
          ))}
        </nav>

        <Link className="header-cta" href="/diagnostico">
          Diagnóstico executivo <ArrowDownRight size={16} strokeWidth={2.2} />
        </Link>
        <button className="menu-toggle" type="button" aria-label="Abrir menu" aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </header>

      {menuOpen && (
        <nav className="mobile-nav" aria-label="Navegação mobile">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>
              {item.label} <ArrowRight size={16} />
            </Link>
          ))}
          <Link href="/diagnostico" onClick={() => setMenuOpen(false)}>
            Agendar diagnóstico <ArrowRight size={16} />
          </Link>
        </nav>
      )}

      <main>
        <section id="inicio" className="hero-section">
          <div className="hero-art" style={{ backgroundImage: `url(${HERO_URL})` }} aria-hidden="true" />
          <div className="hero-grid" aria-hidden="true" />
          <div className="hero-content">
            <div className="eyebrow hero-eyebrow"><span /> Governança de TI · Serviços · Projetos</div>
            <h1>Decisões melhores.<br /><em>Execução sob controle.</em></h1>
            <p>
              Organizamos tecnologia, serviços, riscos e portfólios críticos para que a liderança avance com direção, visibilidade e ritmo de execução.
            </p>
            <div className="hero-actions">
              <Link className="primary-cta" href="/diagnostico">
                Começar pelo diagnóstico <ArrowRight size={18} />
              </Link>
              <button className="text-cta" type="button" onClick={() => scrollTo("atuacao")}>
                Conhecer frentes de atuação <ChevronRight size={18} />
              </button>
            </div>
          </div>
          <div className="hero-footnote">
            <span className="line" />
            <span>CONSULTORIA B2B PARA DECISÕES COMPLEXAS</span>
          </div>
          <div className="hero-index" aria-label="Mensagem principal">
            <span>01</span><i />
            <span>Foco. Direção. Entrega.</span>
          </div>
        </section>

        <section className="signal-section">
          <div className="signal-intro">
            <div className="eyebrow"><span /> O ponto de partida</div>
            <h2>Se a execução perde força, <em>o problema raramente é falta de esforço.</em></h2>
          </div>
          <div className="signals-list">
            <article><span>01</span><p>Projetos demais, prioridades pouco claras e decisões sempre adiadas.</p></article>
            <article><span>02</span><p>Investimento em TI sem visão executiva de valor, risco e avanço.</p></article>
            <article><span>03</span><p>Serviços, riscos e informações de TI sem indicadores que sustentem decisões confiáveis.</p></article>
          </div>
        </section>

        <section id="atuacao" className="services-section">
          <div className="section-heading services-heading">
            <div>
              <div className="eyebrow"><span /> Frentes de atuação</div>
              <h2>O desafio define<br /><em>a intervenção.</em></h2>
            </div>
            <p>Vocês não precisam de mais uma camada de relatórios. Precisam de escolhas claras, responsabilidades explícitas e uma cadência que sustente a entrega.</p>
          </div>

          <div className="service-explorer">
            <div className="service-tabs" role="tablist" aria-label="Frentes de atuação">
              {serviceOrder.map((key, index) => (
                <button
                  key={key}
                  id={`tab-${key}`}
                  type="button"
                  role="tab"
                  aria-selected={activeService === key}
                  aria-controls={`panel-${key}`}
                  className={activeService === key ? "active" : ""}
                  onClick={() => setActiveService(key)}
                >
                  <span>0{index + 1}</span>{services[key].title.split(".")[0]}
                </button>
              ))}
            </div>
            <article id={`panel-${activeService}`} className={`service-panel ${service.tone}`} role="tabpanel" aria-labelledby={`tab-${activeService}`}>
              <div className="panel-topline">
                <span>{service.eyebrow}</span>
                <ServiceIcon size={25} strokeWidth={1.5} />
              </div>
              <h3>{service.title}</h3>
              <p className="panel-description">{service.description}</p>
              <div className="panel-bottom">
                <div className="outcome"><Sparkles size={17} /> <span>{service.outcome}</span></div>
                <ul>
                  {service.delivery.map((item) => <li key={item}><Check size={16} />{item}</li>)}
                </ul>
              </div>
              <Link href="/atuacao" className="home-offer-link">Ver portfólio completo de Governança de TI <ArrowRight size={16} /></Link>
            </article>
          </div>
        </section>

        <section id="metodo" className="method-section">
          <div className="method-visual" style={{ backgroundImage: `url(${METODO_URL})` }} aria-label="Composição estratégica abstrata" />
          <div className="method-content">
            <div className="eyebrow"><span /> Método Vértice</div>
            <h2>Uma agenda de decisão que <em>não para no diagnóstico.</em></h2>
            <p>Começamos pelo que está travando a execução, desenhamos o mínimo necessário para dar governança e acompanhamos a mudança até que a rotina se sustente.</p>
            <ol className="method-steps">
              <li><span>01</span><div><strong>Ler o cenário</strong><p>Entrevistas, documentos, iniciativas e dados para separar sintomas de causas.</p></div></li>
              <li><span>02</span><div><strong>Escolher o foco</strong><p>Priorização executiva, metas de curto prazo e uma agenda de decisões pendentes.</p></div></li>
              <li><span>03</span><div><strong>Governar a execução</strong><p>Ritos, indicadores e acompanhamento para transformar plano em ritmo.</p></div></li>
            </ol>
          </div>
        </section>

        <section className="data-statement-section">
          <div className="statement-copy">
            <div className="eyebrow eyebrow-light"><span /> Informação sob controle</div>
            <h2>Não entregamos <em>só relatórios.</em><br />Construímos <em>decisões confiáveis.</em></h2>
            <p>Informações, serviços, riscos, indicadores e projetos devem convergir para um resultado que a diretoria reconhece: controle sobre o que importa.</p>
            <button type="button" className="inverse-text-cta" onClick={() => { setActiveService("dados"); scrollTo("atuacao"); }}>
              Explorar gestão de informações <ArrowRight size={17} />
            </button>
          </div>
          <div className="data-visual-wrap">
            <div className="data-visual" style={{ backgroundImage: `url(${DADOS_URL})` }} aria-label="Fluxo de dados governados" />
            <span className="visual-caption">Dados governados<br />sustentam decisões.</span>
          </div>
        </section>

        <section id="socios" className="partners-section">
          <div className="section-heading partners-heading">
            <div>
              <div className="eyebrow"><span /> Quem conduz</div>
              <h2>Experiência técnica<br /><em>a serviço da gestão.</em></h2>
            </div>
            <p>A Vértice reúne repertório acadêmico sólido, certificações de mercado e foco em interlocução executiva. O objetivo é aproximar estratégia e operação sem transformar o cliente em refém de jargões.</p>
          </div>
          <div className="partners-grid">
            <article className="partner-card primary-partner">
              <div className="partner-card-top"><span>SÓCIO FUNDADOR</span><BarChart3 size={20} /></div>
              <h3>Me. Anderson Graça<br /><em>Governança de TI &amp; Estratégia.</em></h3>
              <p>Conecta prioridades de negócio, serviços, indicadores e governança de TI para transformar investimento em direção de execução.</p>
              <div className="credentials">
                <span>Mestrado em Ciência da Computação</span><span>MBA Data Science &amp; Analytics · USP/ESALQ</span><span>Governança de TI · Unicamp</span><span>ITIL V5 · PRINCE2</span>
              </div>
            </article>
            <article className="partner-card secondary-partner">
              <div className="partner-card-top"><span>SÓCIO</span><ClipboardCheck size={20} /></div>
              <h3>Me. Márcio Costa<br /><em>Projetos &amp; Governança.</em></h3>
              <p>Orienta portfólios e iniciativas críticas com método, controle de riscos e comunicação objetiva com stakeholders.</p>
              <div className="credentials">
                <span>Mestrado em Ciência da Computação</span><span>Governança de TI · Unicamp</span><span>PMP · COBIT</span>
              </div>
            </article>
            <aside className="partner-note">
              <div className="note-symbol"><img src={LOGO_URL} alt="" /></div>
              <p>Dois repertórios complementares. <strong>Uma conversa de negócio.</strong></p>
            </aside>
          </div>
        </section>

        <section className="diagnostic-section">
          <div className="diagnostic-marker"><span>30</span><small>DIAS</small></div>
          <div className="diagnostic-copy">
            <div className="eyebrow eyebrow-light"><span /> Oferta de entrada</div>
            <h2>Diagnóstico executivo de<br /><em>Governança, Projetos &amp; Dados.</em></h2>
            <p>Em 30 dias, identificamos onde a execução está perdendo força e apresentamos uma agenda priorizada de 90 dias para a sua liderança.</p>
          </div>
          <button type="button" className="diagnostic-button" onClick={openContactDialog}>
            Quero conversar <ArrowRight size={19} />
          </button>
        </section>
      </main>

      <footer className="site-footer">
        <a className="brand footer-brand" href="#inicio" onClick={() => scrollTo("inicio")}>
          <img src={LOGO_URL} alt="Símbolo Vértice" className="brand-mark" />
          <span className="brand-type"><strong>VÉRTICE</strong><small>GOVERNANÇA DE TI</small></span>
        </a>
        <p>Menos ruído. Mais decisão. Execução controlada.</p>
        <div className="footer-utility">
          <ContactChannels />
          <div className="footer-legal"><Link href="/privacidade">Privacidade e uso adequado</Link><span>© {new Date().getFullYear()} Vértice Consultoria</span></div>
        </div>
      </footer>

      {contactOpen && (
        <div className="contact-layer" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) setContactOpen(false); }}>
          <section className="contact-dialog" role="dialog" aria-modal="true" aria-labelledby="contact-title">
            <button className="dialog-close" type="button" onClick={() => setContactOpen(false)} aria-label="Fechar formulário"><X size={21} /></button>
            {!inquiry ? (
              <>
                <div className="eyebrow"><span /> Próximo passo</div>
                <h2 id="contact-title">Comece pelo ponto que <em>mais consome energia.</em></h2>
                <p>Conte, em poucas linhas, onde a execução está perdendo força. Organizaremos uma primeira conversa de diagnóstico.</p>
                <form onSubmit={submitInquiry} className="inquiry-form">
                  <label>Seu nome<input name="nome" required placeholder="Como podemos chamar você?" /></label>
                  <label>Empresa<input name="empresa" required placeholder="Nome da empresa" /></label>
                  <label>E-mail de contato<input type="email" name="email" required placeholder="voce@empresa.com.br" /></label>
                  <label>Principal desafio<select name="desafio" required defaultValue=""><option value="" disabled>Selecione uma frente</option><option>Governança de TI e Portfólio de Iniciativas</option><option>Planejamento Estratégico de TIC e Roadmaps</option><option>PMO e Gestão de Projetos e Programas de TIC</option><option>Governança de Dados, Privacidade e Apoio Técnico à LGPD</option><option>Gestão de Serviços, Contratos e Fornecedores de TIC</option><option>Transformação Digital Orientada à Governança</option><option>Governança de IA e Uso Responsável de Dados</option></select></label>
                  <label className="form-honeypot" aria-hidden="true">Não preencha este campo<input name="website" tabIndex={-1} autoComplete="off" /></label>
                  <div className="form-notice form-full"><ShieldCheck size={17} /><p>Use este formulário somente para contato comercial. Não compartilhe senhas, dados bancários, acessos ou informações sigilosas.</p></div>
                  <div className="form-verification form-full"><label>Verificação antispam: quanto é 5 + 3? <input required name="verification" inputMode="numeric" placeholder="Resposta" /></label><label className="consent-check"><Checkbox checked={modalConsent} onCheckedChange={(checked) => setModalConsent(checked === true)} aria-label="Concordo com o aviso de privacidade" /><span>Li o <Link href="/privacidade">aviso de privacidade e uso adequado</Link>.</span></label>{modalAntiSpamError && <p className="form-error" role="alert">{modalAntiSpamError}</p>}</div>
                  <button className="primary-cta form-cta" type="submit">Preparar minha solicitação <ArrowRight size={18} /></button>
                </form>
              </>
            ) : (
              <div className="inquiry-ready">
                <div className="ready-icon"><Check size={23} /></div>
                <div className="eyebrow"><span /> Solicitação preparada</div>
                <h2 id="contact-title">Seu resumo de diagnóstico está <em>pronto para envio.</em></h2>
                <p>Copie a mensagem abaixo e encaminhe ao e-mail comercial que vocês configurarem no domínio da Vértice.</p>
                <pre>{emailDraft}</pre>
                <div className="ready-actions">
                  <button type="button" className="primary-cta" onClick={copyDraft}>{copied ? <><Check size={18} /> Mensagem copiada</> : <><Copy size={17} /> Copiar mensagem</>}</button>
                  <button type="button" className="text-cta dark-text" onClick={() => { setInquiry(null); setCopied(false); }}>Fazer nova solicitação <ArrowRight size={17} /></button>
                </div>
              </div>
            )}
          </section>
        </div>
      )}
    </div>
  );
}
