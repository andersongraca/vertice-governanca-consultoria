/** DESIGN — Horizonte de Controle: canais de contato aparecem como sinais operacionais, claros e discretos. */
import { Instagram, Linkedin, Mail } from "lucide-react";

// Preencha estes valores quando a Vértice definir os canais comerciais oficiais.
export const CONTACT_EMAIL = "";
export const INSTAGRAM_URL = "";
export const LINKEDIN_URL = "";

const channels = [
  { label: "E-mail", href: CONTACT_EMAIL, icon: Mail },
  { label: "Instagram", href: INSTAGRAM_URL, icon: Instagram },
  { label: "LinkedIn", href: LINKEDIN_URL, icon: Linkedin },
];

export function ContactChannels() {
  return (
    <div className="contact-channels" aria-label="Canais de contato e redes sociais">
      {channels.map(({ label, href, icon: Icon }) => href ? (
        <a key={label} className="contact-channel" href={href} aria-label={label} title={label} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noreferrer" : undefined}>
          <Icon size={18} strokeWidth={1.8} aria-hidden="true" />
        </a>
      ) : (
        <span key={label} className="contact-channel is-pending" aria-label={`${label} em configuração`} title={`${label} em configuração`}>
          <Icon size={18} strokeWidth={1.8} aria-hidden="true" />
        </span>
      ))}
    </div>
  );
}
