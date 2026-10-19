import { ArrowUp, MessageCircle, X } from "lucide-react";
import { useEffect, useState } from "react";
import { WHATSAPP_URL } from "@/components/ContactChannels";

export default function FloatingActions() {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [showWhatsApp, setShowWhatsApp] = useState(true);

  useEffect(() => {
    const handleScroll = () => setShowBackToTop(window.scrollY > 480);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function dismissWhatsApp() {
    setShowWhatsApp(false);
  }

  return (
    <div className="floating-actions" aria-label="Ações rápidas">
      {showBackToTop && (
        <button
          className="back-to-top"
          type="button"
          onClick={scrollToTop}
          aria-label="Voltar ao topo"
          title="Voltar ao topo"
        >
          <ArrowUp size={19} strokeWidth={2.1} />
          <span>Topo</span>
        </button>
      )}
      {showWhatsApp && (
        <div className="whatsapp-float-wrap">
          {WHATSAPP_URL ? (
            <a
              className="whatsapp-float"
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              aria-label="Abrir WhatsApp"
              title="Falar pelo WhatsApp"
            >
              <MessageCircle size={21} strokeWidth={1.9} />
              <span>WhatsApp</span>
            </a>
          ) : (
            <span
              className="whatsapp-float is-pending"
              role="status"
              aria-label="WhatsApp"
              title="Canal de WhatsApp em configuração"
            >
              <MessageCircle size={21} strokeWidth={1.9} />
              <span>WhatsApp</span>
            </span>
          )}
          <button
            className="whatsapp-dismiss"
            type="button"
            onClick={dismissWhatsApp}
            aria-label="Fechar botão flutuante do WhatsApp"
            title="Ocultar WhatsApp"
          >
            <X size={11} strokeWidth={2.4} />
          </button>
        </div>
      )}
    </div>
  );
}
