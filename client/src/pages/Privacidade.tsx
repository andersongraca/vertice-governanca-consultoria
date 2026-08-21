/** DESIGN — Horizonte de Controle: transparência e uso responsável apresentados como parte da governança. */
import { ArrowRight, ShieldCheck } from "lucide-react";
import { Link } from "wouter";
import SiteChrome from "@/components/SiteChrome";

export default function Privacidade() {
  return (
    <SiteChrome>
      <section className="route-hero route-hero-dark privacy-route-hero">
        <div className="route-kicker"><span>06</span> Transparência</div>
        <div className="route-hero-grid"><div><div className="eyebrow eyebrow-light"><span /> Privacidade e uso adequado</div><h1>Contato com<br /><em>clareza e respeito.</em></h1></div><p>O fluxo de diagnóstico foi desenhado para coletar apenas as informações necessárias a uma primeira conversa profissional.</p></div>
      </section>
      <section className="route-section privacy-route-section">
        <div className="privacy-intro"><div className="privacy-mark"><ShieldCheck size={28} strokeWidth={1.4} /></div><p>Este aviso organiza como as informações fornecidas nos formulários são utilizadas no contexto de contato comercial da Vértice.</p></div>
        <div className="privacy-grid">
          <article><span>01</span><h2>Dados solicitados</h2><p>Nome, empresa, e-mail profissional, frente de interesse e um breve contexto do desafio. O envio é opcional e parte da iniciativa de quem preenche o formulário.</p></article>
          <article><span>02</span><h2>Finalidade do contato</h2><p>As informações devem ser usadas exclusivamente para compreender a solicitação, organizar uma conversa inicial e responder ao interesse apresentado.</p></article>
          <article><span>03</span><h2>Uso adequado</h2><p>Não envie senhas, dados bancários, credenciais de acesso, informações sigilosas de terceiros ou conteúdo que não seja necessário para a conversa inicial.</p></article>
          <article><span>04</span><h2>Verificação antispam</h2><p>O formulário inclui uma verificação local para reduzir envios automatizados. Essa barreira não substitui uma validação de servidor ou serviço especializado quando o canal de e-mail estiver ativo.</p></article>
        </div>
        <div className="privacy-closing"><p>O conteúdo desta página é um aviso informativo de boas práticas e deverá ser revisto antes de uma operação que trate dados em escala.</p><Link className="primary-cta" href="/diagnostico">Voltar ao diagnóstico <ArrowRight size={17} /></Link></div>
      </section>
    </SiteChrome>
  );
}
