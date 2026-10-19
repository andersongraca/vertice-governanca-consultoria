/** DESIGN — Contato: transformar contexto executivo em conversa comercial objetiva. */
import { FormEvent, useState } from "react";
import { ArrowRight, Check, MessageCircle, ShieldCheck } from "lucide-react";
import { Link } from "wouter";
import PageMeta from "@/components/PageMeta";
import SiteChrome from "@/components/SiteChrome";
import { WHATSAPP_URL } from "@/components/ContactChannels";

const proposalOptions = [
  "Diagnóstico executivo de Governança, Projetos e Dados",
  "Governança de IA e implementação ISO/IEC 42001",
  "Privacidade e conformidade de dados lusófona",
  "Programa integrado de Governança de IA e Dados",
  "Gestão de Serviços e ITIL Version 5",
  "Outro escopo de Consultoria em TI",
];

const jurisdictionOptions = [
  "Brasil",
  "Portugal",
  "Angola",
  "Moçambique",
  "Cabo Verde",
  "Mais de um país lusófono",
  "Ainda estou definindo",
];

export default function Contato() {
  const [submitted, setSubmitted] = useState(false);

  function submitProposal(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const message = [
      "Olá, Vértice! Gostaria de conversar sobre uma proposta comercial.",
      "",
      `Nome: ${String(form.get("nome") || "")}`,
      `Empresa: ${String(form.get("empresa") || "")}`,
      `E-mail: ${String(form.get("email") || "")}`,
      `País ou jurisdição: ${String(form.get("jurisdicao") || "")}`,
      `Escopo de interesse: ${String(form.get("proposta") || "")}`,
      "",
      "Contexto e objetivo:",
      String(form.get("contexto") || ""),
      "",
      "Solicito uma conversa inicial para dimensionar escopo, prazo e investimento.",
    ].join("\n");

    const whatsappLink = new URL(WHATSAPP_URL);
    whatsappLink.searchParams.set("text", message);
    window.open(whatsappLink.toString(), "_blank", "noopener,noreferrer");
    setSubmitted(true);
  }

  return (
    <SiteChrome active="contato">
      <PageMeta
        title="Contato e propostas comerciais | Vértice"
        description="Solicite uma conversa sobre governança de IA, ITIL Version 5, proteção de dados e propostas comerciais para operações lusófonas."
        path="/contato"
      />
      <section className="route-hero route-hero-dark contact-hero">
        <div className="route-kicker">
          <span>08</span> Contato e propostas
        </div>
        <div className="route-hero-grid">
          <div>
            <div className="eyebrow eyebrow-light">
              <span /> Uma conversa começa pelo contexto
            </div>
            <h1>
              Vamos transformar
              <br />
              <em>complexidade em proposta.</em>
            </h1>
          </div>
          <p>
            Conte o que precisa ser governado, em quais países a operação
            acontece e qual decisão a liderança precisa tomar. A primeira
            mensagem já chega organizada ao WhatsApp da Vértice.
          </p>
        </div>
      </section>

      <main className="contact-page-main">
        <section className="route-section contact-form-section">
          <div className="contact-layout">
            <aside className="contact-copy">
              <div className="eyebrow">
                <span /> O que podemos estruturar
              </div>
              <h2>
                Uma proposta começa com <em>perguntas certas.</em>
              </h2>
              <p>
                O formulário não substitui a conversa. Ele organiza o primeiro
                contexto para que a Vértice consiga indicar o escopo mais
                adequado, sem presumir uma solução antes de entender o risco.
              </p>
              <ul className="contact-offer-list">
                <li>
                  <Check size={17} /> Governança de IA e ISO/IEC 42001
                </li>
                <li>
                  <Check size={17} /> ITIL Version 5 e gestão de serviços
                </li>
                <li>
                  <Check size={17} /> LGPD, RGPD e privacidade lusófona
                </li>
                <li>
                  <Check size={17} /> Dados, projetos, processos e contratos
                </li>
              </ul>
              <div className="contact-direct-card">
                <MessageCircle size={20} />
                <div>
                  <strong>Prefere começar direto?</strong>
                  <p>Abra o WhatsApp e escreva para a equipe comercial.</p>
                  <a href={WHATSAPP_URL} target="_blank" rel="noreferrer">
                    Abrir WhatsApp <ArrowRight size={15} />
                  </a>
                </div>
              </div>
            </aside>

            <form className="contact-proposal-form" onSubmit={submitProposal}>
              <div className="contact-form-heading">
                <ShieldCheck size={19} />
                <div>
                  <strong>Solicitar proposta comercial</strong>
                  <span>A mensagem será preparada no seu WhatsApp.</span>
                </div>
              </div>
              <label>
                Nome
                <input
                  name="nome"
                  required
                  placeholder="Como podemos chamar você?"
                />
              </label>
              <label>
                Empresa
                <input
                  name="empresa"
                  required
                  placeholder="Nome da organização"
                />
              </label>
              <label>
                E-mail
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="voce@empresa.com.br"
                />
              </label>
              <label>
                País ou jurisdição principal
                <select name="jurisdicao" required defaultValue="">
                  <option value="" disabled>
                    Selecione uma opção
                  </option>
                  {jurisdictionOptions.map(option => (
                    <option key={option}>{option}</option>
                  ))}
                </select>
              </label>
              <label className="form-full">
                Escopo de interesse
                <select name="proposta" required defaultValue="">
                  <option value="" disabled>
                    Selecione uma proposta
                  </option>
                  {proposalOptions.map(option => (
                    <option key={option}>{option}</option>
                  ))}
                </select>
              </label>
              <label className="form-full">
                Contexto e objetivo
                <textarea
                  name="contexto"
                  required
                  rows={6}
                  placeholder="O que motivou a conversa? Há prazo, auditoria, novo serviço, incidente ou expansão para outro país?"
                />
              </label>
              <label className="contact-consent form-full">
                <input type="checkbox" required />
                <span>
                  Concordo em usar estes dados apenas para o contato comercial
                  solicitado e não enviarei senhas, dados bancários ou
                  informações sigilosas.
                </span>
              </label>
              <div className="contact-form-actions form-full">
                <button className="primary-cta" type="submit">
                  Preparar mensagem no WhatsApp <ArrowRight size={17} />
                </button>
                {submitted && (
                  <span className="contact-sent-note">
                    <Check size={15} /> Mensagem preparada. Confirme o envio no
                    WhatsApp.
                  </span>
                )}
              </div>
              <small className="contact-form-note form-full">
                A Vértice presta apoio técnico e gerencial. Pareceres,
                interpretação jurídica, notificações e representação perante
                autoridades dependem de profissional habilitado na jurisdição
                aplicável.
              </small>
            </form>
          </div>
        </section>

        <section className="contact-process-section">
          <div className="section-heading">
            <div>
              <div className="eyebrow">
                <span /> Depois da mensagem
              </div>
              <h2>
                Clareza antes
                <br />
                <em>do contrato.</em>
              </h2>
            </div>
            <p>
              A primeira conversa serve para confirmar contexto, fronteiras e
              próximos passos. Não empurramos um pacote antes de entender a
              decisão que precisa ser sustentada.
            </p>
          </div>
          <div className="contact-process-grid">
            <article>
              <span>01</span>
              <strong>Qualificar</strong>
              <p>
                Entendemos países, serviços, dados, IA, fornecedores, prazos e
                stakeholders.
              </p>
            </article>
            <article>
              <span>02</span>
              <strong>Dimensionar</strong>
              <p>
                Definimos escopo, entregáveis, dependências, participação
                jurídica e critérios de aceite.
              </p>
            </article>
            <article>
              <span>03</span>
              <strong>Propor</strong>
              <p>
                Enviamos uma proposta comercial com cronograma, investimento,
                limites e forma de decisão.
              </p>
            </article>
          </div>
        </section>

        <section className="contact-privacy-callout">
          <div>
            <div className="eyebrow eyebrow-light">
              <span /> Trilha lusófona
            </div>
            <h2>
              Portugal, Angola, Moçambique e Cabo Verde exigem{" "}
              <em>contexto local.</em>
            </h2>
          </div>
          <p>
            Organizamos fluxos, papéis, contratos, transferências, incidentes e
            evidências sem presumir que uma lei substitui a outra.
          </p>
          <Link className="route-callout-link" href="/protecao-dados">
            Ver mapa de proteção de dados <ArrowRight size={16} />
          </Link>
        </section>
      </main>
    </SiteChrome>
  );
}
