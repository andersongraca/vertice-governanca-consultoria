/** DESIGN — Capacitação aplicada: mantém o editorial Horizonte de Controle e dá prioridade à LGPD. */
import {
  ArrowRight,
  BookOpen,
  Check,
  ChevronDown,
  GraduationCap,
  ShieldCheck,
} from "lucide-react";
import { useState, type KeyboardEvent } from "react";
import { Link } from "wouter";
import PageMeta from "@/components/PageMeta";
import SiteChrome from "@/components/SiteChrome";
import { WHATSAPP_URL } from "@/components/ContactChannels";
import {
  trainingFaqs,
  trainingFormats,
  trainingTracks,
} from "@/lib/trainingContent";

export const trainingPageTitle =
  "Treinamentos e Capacitação em TI e LGPD | Vértice";
export const trainingPageDescription =
  "Capacitação corporativa em LGPD, governança de TI, GRC, ITIL Version 5, IA e privacidade lusófona. Workshops aplicados e programas sob medida para equipes.";

function whatsappInterest(topic: string) {
  const message = `Olá, Vértice. Gostaria de conversar sobre capacitação corporativa em ${topic}. Podemos alinhar o público, os objetivos, o formato e o escopo?`;
  return `${WHATSAPP_URL}?text=${encodeURIComponent(message)}`;
}

const lgpdAudiences = [
  {
    number: "01",
    title: "Colaboradores",
    text: "Reconhecer dados pessoais no trabalho e adotar cuidados no uso de e-mail, planilhas, documentos, canais de atendimento e ferramentas digitais.",
    output: "Checklist de cuidados no cotidiano",
  },
  {
    number: "02",
    title: "Gestores e lideranças",
    text: "Relacionar finalidades, responsabilidades, prioridades e riscos. Saber quando envolver a equipe de privacidade e a assessoria jurídica.",
    output: "Mapa inicial de responsabilidades",
  },
  {
    number: "03",
    title: "Equipes técnicas e de apoio",
    text: "Conectar acesso, retenção, fornecedores, solicitações de titulares e resposta a incidentes às rotinas que sustentam a proteção de dados.",
    output: "Exercício de fluxo e encaminhamento",
  },
];

export default function Capacitacao() {
  const [activeId, setActiveId] = useState(trainingTracks[0].id);
  const track =
    trainingTracks.find(item => item.id === activeId) ?? trainingTracks[0];

  function navigateTracks(
    event: KeyboardEvent<HTMLButtonElement>,
    index: number
  ) {
    let next: number | undefined;
    if (event.key === "ArrowDown") next = (index + 1) % trainingTracks.length;
    if (event.key === "ArrowUp")
      next = (index - 1 + trainingTracks.length) % trainingTracks.length;
    if (event.key === "Home") next = 0;
    if (event.key === "End") next = trainingTracks.length - 1;
    if (next === undefined) return;
    event.preventDefault();
    const item = trainingTracks[next];
    setActiveId(item.id);
    document.getElementById(`training-tab-${item.id}`)?.focus();
  }

  return (
    <SiteChrome active="capacitacao">
      <PageMeta
        title={trainingPageTitle}
        description={trainingPageDescription}
        path="/capacitacao/"
      />
      <div className="training-page">
        <section className="training-hero">
          <div className="training-hero-copy">
            <div className="eyebrow">
              <span /> Treinamentos e Capacitação
            </div>
            <h1>
              Conhecimento que se transforma <em>em prática.</em>
            </h1>
            <p>
              Capacitação corporativa em LGPD, Governança de TI, GRC, serviços,
              IA e privacidade. Conteúdo claro, exercícios aplicados e um
              próximo passo que faz sentido para a sua equipe.
            </p>
            <div className="training-hero-actions">
              <a href="#trilhas" className="primary-cta">
                Conhecer as trilhas <ArrowRight size={17} />
              </a>
              <Link href="/contato" className="training-text-link">
                Conversar com a Vértice <ArrowRight size={15} />
              </Link>
            </div>
          </div>
          <aside className="training-hero-note">
            <GraduationCap size={34} strokeWidth={1.2} aria-hidden="true" />
            <span>APRENDER · APLICAR · INCORPORAR</span>
            <h2>
              Não basta conhecer a regra. <em>É preciso saber agir.</em>
            </h2>
            <p>
              Da conscientização dos colaboradores ao alinhamento das
              lideranças, a aprendizagem acompanha o contexto e a maturidade da
              organização.
            </p>
            <div className="training-hero-foot">
              Para empresas e equipes · Escopo sob medida
            </div>
          </aside>
        </section>

        <section id="trilhas" className="training-section">
          <div className="training-section-heading">
            <div>
              <div className="eyebrow">
                <span /> Trilhas de aprendizagem
              </div>
              <h2>
                O tema muda.
                <br />
                <em>A aplicação é o foco.</em>
              </h2>
            </div>
            <p>
              Escolha uma trilha para conhecer o público, os conteúdos e o
              exercício proposto. A carga horária é indicativa; o programa é
              definido conforme os objetivos da contratação.
            </p>
          </div>
          <div className="training-catalog">
            <div
              className="training-tabs"
              role="tablist"
              aria-label="Trilhas de capacitação"
              aria-orientation="vertical"
            >
              {trainingTracks.map((item, index) => (
                <button
                  key={item.id}
                  id={`training-tab-${item.id}`}
                  type="button"
                  role="tab"
                  aria-selected={track.id === item.id}
                  aria-controls={`training-panel-${item.id}`}
                  tabIndex={track.id === item.id ? 0 : -1}
                  onClick={() => setActiveId(item.id)}
                  onKeyDown={event => navigateTracks(event, index)}
                >
                  <span>{item.number}</span>
                  <strong>{item.short}</strong>
                  <ArrowRight size={15} aria-hidden="true" />
                </button>
              ))}
            </div>
            {trainingTracks.map(track => (
              <article
                key={track.id}
                className="training-detail"
                hidden={track.id !== activeId}
                id={`training-panel-${track.id}`}
                role="tabpanel"
                aria-labelledby={`training-tab-${track.id}`}
                tabIndex={0}
              >
                <div className="training-detail-top">
                  <span>{track.number} · Trilha corporativa</span>
                  <BookOpen size={23} strokeWidth={1.4} aria-hidden="true" />
                </div>
                <h3>{track.title}</h3>
                <p>{track.description}</p>
                <dl className="training-detail-facts">
                  <div>
                    <dt>Para quem</dt>
                    <dd>{track.audience}</dd>
                  </div>
                  <div>
                    <dt>Duração de referência</dt>
                    <dd>{track.duration}</dd>
                  </div>
                </dl>
                <h4>O que vamos trabalhar</h4>
                <ul className="training-topics">
                  {track.topics.map(topic => (
                    <li key={topic}>
                      <Check size={15} aria-hidden="true" />
                      {topic}
                    </li>
                  ))}
                </ul>
                <div className="training-exercise">
                  <span>Aplicação prática</span>
                  <p>{track.exercise}</p>
                </div>
                <h4>Materiais previstos no escopo</h4>
                <ul className="training-materials">
                  {track.materials.map(material => (
                    <li key={material}>{material}</li>
                  ))}
                </ul>
                <div className="training-detail-actions">
                  <a
                    className="primary-cta"
                    href={whatsappInterest(track.title)}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Conversar sobre esta trilha <ArrowRight size={16} />
                  </a>
                  <Link
                    className="training-text-link"
                    href={`/servicos?service=${encodeURIComponent(track.serviceId)}`}
                  >
                    Ver consultoria relacionada <ArrowRight size={15} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
          <p className="training-small-note">
            O botão abre uma mensagem de interesse no WhatsApp. Você pode
            revisar o texto antes de enviar; nenhum envio é automático.
          </p>
        </section>

        <section className="training-section training-lgpd">
          <div className="training-section-heading">
            <div>
              <div className="eyebrow">
                <span /> LGPD na prática
              </div>
              <h2>
                Proteção de dados começa
                <br />
                <em>com pessoas preparadas.</em>
              </h2>
            </div>
            <p>
              O treinamento em LGPD é adaptado às responsabilidades de quem
              participa. A mesma mensagem não resolve todos os riscos: cada área
              precisa entender suas decisões e os caminhos de encaminhamento.
            </p>
          </div>
          <div className="training-audience-grid">
            {lgpdAudiences.map(item => (
              <article key={item.number}>
                <span>{item.number}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <strong>{item.output}</strong>
              </article>
            ))}
          </div>
          <div className="training-lgpd-footer">
            <p>
              Casos fictícios ou anonimizados ajudam a exercitar decisões sem
              expor dados pessoais, senhas ou informações sigilosas.
            </p>
            <a
              href={whatsappInterest("LGPD na prática para nossa equipe")}
              className="training-text-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Planejar capacitação em LGPD <ArrowRight size={16} />
            </a>
          </div>
        </section>

        <section className="training-section training-formats">
          <div className="training-section-heading">
            <div>
              <div className="eyebrow">
                <span /> Formatos corporativos
              </div>
              <h2>
                Do primeiro alinhamento
                <br />
                <em>à rotina da equipe.</em>
              </h2>
            </div>
            <p>
              Palestras, workshops e programas por módulos. Modalidade
              presencial ou remota, local, carga horária e condições são
              alinhados na contratação, conforme a viabilidade.
            </p>
          </div>
          <div className="training-formats-list">
            {trainingFormats.map(format => (
              <article key={format.number}>
                <span>{format.number}</span>
                <div>
                  <h3>{format.title}</h3>
                  <p>{format.description}</p>
                </div>
                <strong>{format.duration}</strong>
              </article>
            ))}
          </div>
        </section>

        <section className="training-section training-lusophone">
          <div className="eyebrow">
            <span /> Contexto lusófono
          </div>
          <div className="training-section-heading">
            <h2>
              Uma língua em comum.
              <br />
              <em>Contextos próprios.</em>
            </h2>
            <div>
              <p>
                Brasil, Portugal, Angola, Moçambique e Cabo Verde fazem parte da
                trilha de privacidade lusófona. O conteúdo considera o país, o
                setor, os fluxos de dados e a atuação da organização.
              </p>
              <p>
                A LGPD brasileira e o RGPD aplicável em Portugal não são
                tratados como uma regra única para todos os países. Questões
                jurídicas específicas dependem de validação local.
              </p>
              <Link className="training-text-link" href="/protecao-dados">
                Conhecer os contextos de proteção de dados{" "}
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
          <div
            className="training-country-list"
            aria-label="Países da trilha lusófona"
          >
            {[
              "Brasil · LGPD",
              "Portugal",
              "Angola",
              "Moçambique",
              "Cabo Verde",
            ].map(country => (
              <span key={country}>{country}</span>
            ))}
          </div>
        </section>

        <section className="training-section training-faq">
          <div className="training-section-heading">
            <div>
              <div className="eyebrow">
                <span /> Antes de começar
              </div>
              <h2>
                Uma contratação
                <br />
                <em>com expectativas claras.</em>
              </h2>
            </div>
            <p>
              Começamos pelo público, pelo desafio e pelo resultado de
              aprendizagem esperado. Conteúdo, materiais, carga horária,
              modalidade e investimento são definidos no escopo.
            </p>
          </div>
          <div className="training-faq-list">
            {trainingFaqs.map(item => (
              <details key={item.question}>
                <summary>
                  {item.question}
                  <ChevronDown size={17} aria-hidden="true" />
                </summary>
                <p>{item.answer}</p>
              </details>
            ))}
          </div>
          <aside className="training-boundary">
            <ShieldCheck size={22} aria-hidden="true" />
            <p>
              Capacitação técnica e gerencial. Não anunciamos cursos oficiais ou
              acreditados ITIL/ISO, certificação profissional, garantia de
              conformidade ou habilitação jurídica. Interpretação legal,
              pareceres e representação perante autoridades exigem profissional
              habilitado na jurisdição aplicável.
            </p>
          </aside>
        </section>

        <section className="training-closing">
          <div>
            <div className="eyebrow">
              <span /> Próximo passo
            </div>
            <h2>
              Qual conhecimento sua equipe
              <br />
              <em>precisa colocar em movimento?</em>
            </h2>
            <p>
              Conte o tema, o público e o objetivo. A partir daí, alinhamos um
              formato e um escopo de capacitação.
            </p>
          </div>
          <div className="training-closing-actions">
            <a
              className="primary-cta"
              href={whatsappInterest("treinamentos e capacitação")}
              target="_blank"
              rel="noopener noreferrer"
            >
              Abrir WhatsApp <ArrowRight size={17} />
            </a>
            <Link href="/contato" className="training-text-link">
              Preferir o contato por e-mail <ArrowRight size={15} />
            </Link>
          </div>
        </section>
      </div>
    </SiteChrome>
  );
}
