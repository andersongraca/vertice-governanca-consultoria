/** DESIGN — Horizonte de Controle: o método é exposto como um percurso vivo e navegável. */
import { ArrowRight, CheckCircle2, Compass, Search, Waypoints } from "lucide-react";
import { useState } from "react";
import { Link } from "wouter";
import SiteChrome from "@/components/SiteChrome";

const stages = [
  { id: "ler", number: "01", label: "Ler o cenário", title: "Transformar ruído operacional em um diagnóstico que a liderança reconhece.", description: "Entrevistamos as pessoas certas, lemos documentos, observamos ritos e conectamos iniciativas, riscos e indicadores. A meta é separar sintomas de causas antes de escolher a intervenção.", icon: Search, outputs: ["Mapa de tensões e iniciativas", "Leitura de maturidade proporcional", "Hipóteses de causa e oportunidade"] },
  { id: "escolher", number: "02", label: "Escolher o foco", title: "Reduzir a agenda para as decisões que destravam a execução.", description: "Facilitamos uma conversa executiva de priorização para definir o que realmente importa, o que precisa de responsável e o que não deve competir por atenção neste momento.", icon: Compass, outputs: ["Prioridades acordadas", "Plano de 90 dias", "Matriz de decisões e responsabilidades"] },
  { id: "governar", number: "03", label: "Governar a execução", title: "Criar ritmo sem instalar uma camada de burocracia.", description: "Desenhamos ritos, indicadores e cadências de acompanhamento proporcionais ao desafio. A equipe passa a enxergar avanço, risco e decisão pendente na mesma linguagem.", icon: Waypoints, outputs: ["Ritos executivos essenciais", "Painel de acompanhamento", "Rotina de gestão sustentável"] },
];

export default function Metodo() {
  const [activeId, setActiveId] = useState("ler");
  const stage = stages.find((item) => item.id === activeId) ?? stages[0];
  const Icon = stage.icon;

  return (
    <SiteChrome active="metodo">
      <section className="route-hero route-hero-dark method-route-hero">
        <div className="route-kicker"><span>03</span> Método Vértice</div>
        <div className="route-hero-grid"><div><div className="eyebrow eyebrow-light"><span /> Do diagnóstico ao ritmo</div><h1>Uma rota para decidir, <em>alinhar e executar.</em></h1></div><p>O método Vértice transforma problemas complexos em uma sequência simples: entender o cenário, escolher o foco e governar o avanço.</p></div>
      </section>

      <section className="route-section method-route-section">
        <div className="method-route-top"><div><div className="eyebrow"><span /> Navegue pelas etapas</div><h2>Uma escolha por vez.<br /><em>Sem perder o horizonte.</em></h2></div><p>Clique em uma etapa para explorar como ela funciona e quais resultados costuma deixar para a liderança.</p></div>
        <div className="method-route-layout">
          <div className="method-route-rail" role="tablist" aria-label="Etapas do Método Vértice">
            {stages.map((item) => <button key={item.id} type="button" role="tab" aria-selected={activeId === item.id} className={activeId === item.id ? "active" : ""} onClick={() => setActiveId(item.id)}><span>{item.number}</span>{item.label}</button>)}
          </div>
          <article className="method-route-card" role="tabpanel">
            <div className="method-icon"><Icon size={31} strokeWidth={1.25} /></div>
            <div className="panel-topline"><span>{stage.number} · {stage.label}</span><span className="live-dot">Em foco</span></div>
            <h2>{stage.title}</h2>
            <p>{stage.description}</p>
            <div className="method-outputs"><span>O que fica com o cliente</span><ul>{stage.outputs.map((output) => <li key={output}><CheckCircle2 size={17} />{output}</li>)}</ul></div>
          </article>
        </div>
      </section>

      <section className="route-manifesto"><p>Governança não é uma camada a mais.<br /><em>É a capacidade de fazer o essencial avançar.</em></p><Link className="primary-cta" href="/diagnostico?area=Governança de TI e prioridades">Iniciar uma conversa <ArrowRight size={17} /></Link></section>
    </SiteChrome>
  );
}
