/** DESIGN — Horizonte de Controle: um formulário é apresentado como o primeiro ato de clareza, não como burocracia. */
import { ArrowRight, Check, Copy, FileText, ShieldCheck, X } from "lucide-react";
import { FormEvent, useMemo, useState } from "react";
import { Link, useSearch } from "wouter";
import SiteChrome from "@/components/SiteChrome";
import { Checkbox } from "@/components/ui/checkbox";

type Brief = { nome: string; empresa: string; email: string; area: string; contexto: string };

const areas = ["Governança de TI e Portfólio de Iniciativas", "Planejamento Estratégico de TIC e Roadmaps", "PMO e Gestão de Projetos e Programas de TIC", "Governança de Dados, Privacidade e Apoio Técnico à LGPD", "Gestão de Serviços, Contratos e Fornecedores de TIC", "Transformação Digital Orientada à Governança", "Governança de IA e Uso Responsável de Dados"];

export default function Diagnostico() {
  const search = useSearch();
  const defaultArea = new URLSearchParams(search).get("area") ?? "";
  const [brief, setBrief] = useState<Brief | null>(null);
  const [copied, setCopied] = useState(false);
  const [consent, setConsent] = useState(false);
  const [antiSpamError, setAntiSpamError] = useState("");
  const [formStartedAt] = useState(() => Date.now());

  const message = useMemo(() => {
    if (!brief) return "";
    return `Olá, Vértice.\n\nMeu nome é ${brief.nome}, da ${brief.empresa}.\n\nQuero conversar sobre: ${brief.area}.\n\nContexto inicial: ${brief.contexto || "a ser detalhado na conversa"}.\n\nMeu melhor e-mail para retorno é ${brief.email}.\n\nGostaria de iniciar o Diagnóstico Executivo de 30 dias.`;
  }, [brief]);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const website = String(data.get("website") ?? "");
    const verification = String(data.get("verification") ?? "").trim();
    if (website || verification !== "8" || !consent || Date.now() - formStartedAt < 2200) {
      setAntiSpamError("Confirme a verificação antispam e o aviso de privacidade antes de prosseguir.");
      return;
    }
    setAntiSpamError("");
    setBrief({ nome: String(data.get("nome")), empresa: String(data.get("empresa")), email: String(data.get("email")), area: String(data.get("area")), contexto: String(data.get("contexto")) });
    setCopied(false);
  }

  async function copyMessage() {
    if (!message) return;
    try { await navigator.clipboard.writeText(message); setCopied(true); window.setTimeout(() => setCopied(false), 2000); } catch { setCopied(false); }
  }

  return (
    <SiteChrome>
      <section className="route-hero route-hero-dark diagnostic-route-hero"><div className="route-kicker"><span>05</span> Diagnóstico executivo</div><div className="route-hero-grid"><div><div className="eyebrow eyebrow-light"><span /> Oferta de entrada</div><h1>O primeiro passo<br />para <em>retomar o controle.</em></h1></div><p>Em 30 dias, organizamos o cenário, identificamos tensões e apresentamos uma agenda priorizada para os próximos 90 dias.</p></div></section>
      <section className="route-section diagnostic-route-section">
        {!brief ? (
          <div className="diagnostic-form-layout">
            <aside className="diagnostic-route-intro"><div className="eyebrow"><span /> Rota de decisão</div><h2>Uma conversa<br /><em>com direção.</em></h2><p className="diagnostic-route-label">Do contexto à próxima decisão</p><ol><li><span>01</span>Você compartilha o desafio.</li><li><span>02</span>Nós organizamos a conversa inicial.</li><li><span>03</span>Alinhamos escopo, pessoas e próximos passos.</li></ol></aside>
            <form className="diagnostic-page-form" onSubmit={handleSubmit}>
              <div className="form-heading"><FileText size={21} /><div><strong>Solicite uma conversa de diagnóstico</strong><span>Campos com asterisco são obrigatórios.</span></div></div>
              <div className="diagnostic-stage-track" aria-label="Etapas do diagnóstico">
                <span>Rota do diagnóstico</span>
                <ol><li className="is-current"><b>01</b> Contexto</li><li><b>02</b> Conversa</li><li><b>03</b> Próximo passo</li></ol>
              </div>
              <label>Seu nome *<input required name="nome" placeholder="Como podemos chamar você?" /></label>
              <label>Empresa *<input required name="empresa" placeholder="Nome da empresa" /></label>
              <label>E-mail de contato *<input required type="email" name="email" placeholder="voce@empresa.com.br" /></label>
              <label>Qual desafio você quer priorizar? *<select required name="area" defaultValue={defaultArea}><option value="" disabled>Selecione uma frente</option>{areas.map((area) => <option key={area}>{area}</option>)}</select></label>
              <label className="form-full">O que está perdendo força hoje?<textarea name="contexto" placeholder="Ex.: temos muitos projetos concorrendo por atenção e pouca previsibilidade de entrega." rows={4} /></label>
              <label className="form-honeypot" aria-hidden="true">Não preencha este campo<input name="website" tabIndex={-1} autoComplete="off" /></label>
              <div className="form-notice form-full"><ShieldCheck size={17} /><p>Use este formulário somente para uma solicitação comercial. Não compartilhe senhas, dados bancários, acessos ou informações sigilosas.</p></div>
              <div className="form-verification form-full"><label>Verificação antispam: quanto é 5 + 3? *<input required name="verification" inputMode="numeric" placeholder="Resposta" /></label><label className="consent-check"><Checkbox checked={consent} onCheckedChange={(checked) => setConsent(checked === true)} aria-label="Concordo com o aviso de privacidade" /><span>Li o <Link href="/privacidade">aviso de privacidade e uso adequado</Link> e concordo com o uso das informações para retorno comercial.</span></label>{antiSpamError && <p className="form-error" role="alert">{antiSpamError}</p>}</div>
              <div className="diagnostic-action-row form-full"><span><i /> Etapa 01 · Registro do contexto</span><button className="primary-cta" type="submit">Organizar meu ponto de partida <ArrowRight size={17} /></button></div>
            </form>
          </div>
        ) : (
          <div className="diagnostic-ready-page"><div className="ready-flag"><Check size={23} /></div><div><div className="eyebrow"><span /> Solicitação preparada</div><h2>Sua conversa começa<br /><em>com mais clareza.</em></h2><p>Copie a mensagem abaixo e encaminhe para o e-mail comercial da Vértice quando ele estiver configurado.</p><pre>{message}</pre><div className="ready-actions"><button className="primary-cta" type="button" onClick={copyMessage}>{copied ? <><Check size={17} /> Mensagem copiada</> : <><Copy size={17} /> Copiar mensagem</>}</button><button className="route-secondary-button" type="button" onClick={() => { setBrief(null); setCopied(false); }}>Editar solicitação <X size={16} /></button></div></div></div>
        )}
      </section>
      <section className="route-mini-footer"><p>Prefere começar pelo desafio que exige atenção agora?</p><Link href="/atuacao">Ver frentes de atuação <ArrowRight size={16} /></Link></section>
    </SiteChrome>
  );
}
