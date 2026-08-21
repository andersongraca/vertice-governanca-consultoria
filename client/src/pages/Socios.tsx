/** DESIGN — Horizonte de Controle: retratos e credenciais ganham peso editorial, sem parecer um currículo comum. */
import { ArrowRight, Award, BarChart3, CheckCircle2, ClipboardCheck, GraduationCap } from "lucide-react";
import { useState } from "react";
import { Link } from "wouter";
import SiteChrome from "@/components/SiteChrome";
import { BRAND_ASSETS } from "@/lib/brandAssets";

const ANDERSON_PHOTO = BRAND_ASSETS.anderson;
const MARCIO_PHOTO = BRAND_ASSETS.marcio;

type Partner = "anderson" | "marcio";

const partners = {
  anderson: {
    role: "SÓCIO FUNDADOR", name: "Me. Anderson Graça", focus: "Governança de TI & Estratégia", intro: "Conecta prioridades de negócio, serviços, indicadores e governança de TI para transformar investimento em direção de execução.", education: ["Mestre em Ciências da Computação · UFS", "MBA em Data Science & Analytics · USP/ESALQ", "Especialização em Governança de TI · Unicamp"], certifications: ["ITIL V5", "PRINCE2"], icon: BarChart3, photo: ANDERSON_PHOTO, photoAlt: "Me. Anderson Graça, sócio fundador da Vértice", portraitClass: "is-anderson",
  },
  marcio: {
    role: "SÓCIO", name: "Me. Márcio Costa", focus: "Projetos & Governança", intro: "Orienta portfólios e iniciativas críticas com método, controle de riscos e comunicação objetiva com stakeholders.", education: ["Mestre em Ciências da Computação", "Especialização em Governança de TI · Unicamp"], certifications: ["PMP", "COBIT"], icon: ClipboardCheck, photo: MARCIO_PHOTO, photoAlt: "Me. Márcio Costa, sócio da Vértice", portraitClass: "is-marcio",
  },
};

export default function Socios() {
  const [active, setActive] = useState<Partner>("anderson");
  const partner = partners[active];
  const Icon = partner.icon;

  return (
    <SiteChrome active="socios">
      <section className="route-hero route-hero-light partners-route-hero">
        <div className="route-kicker"><span>04</span> Quem conduz</div>
        <div className="route-hero-grid"><div><div className="eyebrow"><span /> Repertório complementar</div><h1>Experiência técnica<br /><em>a serviço da gestão.</em></h1></div><p>A Vértice combina formação acadêmica, certificações de mercado e uma conversa dirigida à tomada de decisão de líderes de negócio.</p></div>
      </section>

      <section className="route-section partners-route-section">
        <div className="partner-switcher" role="tablist" aria-label="Perfis dos sócios">
          {(["anderson", "marcio"] as Partner[]).map((key) => <button key={key} type="button" role="tab" aria-selected={active === key} className={active === key ? "active" : ""} onClick={() => setActive(key)}><span>{key === "anderson" ? "01" : "02"}</span>{partners[key].name}</button>)}
        </div>
        <div className="partner-profile" role="tabpanel">
          <div className={`partner-portrait is-photo ${partner.portraitClass}`}>
            <img key={active} src={partner.photo} alt={partner.photoAlt} />
            <div className="portrait-caption"><span>{partner.role}</span><Icon size={19} /></div>
          </div>
          <div className="partner-profile-content">
            <div className="eyebrow"><span /> Perfil profissional</div>
            <h2>{partner.name}<br /><em>{partner.focus}</em></h2>
            <p>{partner.intro}</p>
            <div className="profile-detail-grid">
              <div><div className="profile-detail-title"><GraduationCap size={17} /> Titulação & especializações</div><ul>{partner.education.map((item) => <li key={item}>{item}</li>)}</ul></div>
              <div><div className="profile-detail-title"><Award size={17} /> Certificações</div><ul>{partner.certifications.map((item) => <li key={item}><CheckCircle2 size={15} />{item}</li>)}</ul></div>
            </div>
            <Link className="primary-cta" href={`/diagnostico?area=${encodeURIComponent(active === "anderson" ? "Gestão de informações e dados" : "Portfólio de projetos")}`}>Conversar com a Vértice <ArrowRight size={17} /></Link>
          </div>
        </div>
      </section>

      <section className="partner-proof-section"><div><span>01</span><h3>Governança e estratégia.</h3><p>Anderson conduz a leitura de valor, serviços, informações e indicadores que aproximam TI da decisão executiva.</p></div><div><span>02</span><h3>Projetos e direção.</h3><p>Márcio organiza portfólios, riscos e cadência de entrega para tornar iniciativas críticas governáveis.</p></div><div className="proof-end"><p>Dois repertórios complementares. <em>Uma conversa de negócio.</em></p></div></section>
    </SiteChrome>
  );
}
