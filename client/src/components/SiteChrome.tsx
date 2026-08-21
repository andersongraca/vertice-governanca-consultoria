/** DESIGN — Horizonte de Controle: navegação editorial, precisa e orientada à decisão. */
import { ArrowDownRight, Menu, X } from "lucide-react";
import { type ReactNode, useState } from "react";
import { Link } from "wouter";
import { ContactChannels } from "@/components/ContactChannels";
import { BRAND_ASSETS } from "@/lib/brandAssets";

const LOGO_URL = BRAND_ASSETS.logo;

const navigation = [
  { label: "Atuação", href: "/atuacao", key: "atuacao" },
  { label: "Método", href: "/metodo", key: "metodo" },
  { label: "Quem somos", href: "/socios", key: "socios" },
];

type SiteChromeProps = {
  children: ReactNode;
  active?: string;
};

export default function SiteChrome({ children, active }: SiteChromeProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="site-shell route-shell">
      <header className="site-header">
        <Link className="brand" href="/" aria-label="Vértice Governança de TI — início">
          <img src={LOGO_URL} alt="Símbolo Vértice" className="brand-mark" />
          <span className="brand-type">
            <strong>VÉRTICE</strong>
            <small>GOVERNANÇA DE TI</small>
          </span>
        </Link>

        <nav className="desktop-nav" aria-label="Navegação principal">
          {navigation.map((item) => (
            <Link key={item.key} href={item.href} className={active === item.key ? "nav-active" : ""}>
              {item.label}
            </Link>
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
          {navigation.map((item) => (
            <Link key={item.key} href={item.href} onClick={() => setMenuOpen(false)}>
              {item.label}
            </Link>
          ))}
          <Link href="/diagnostico" onClick={() => setMenuOpen(false)}>Agendar diagnóstico <ArrowDownRight size={16} /></Link>
        </nav>
      )}

      <main>{children}</main>

      <footer className="site-footer">
        <Link className="brand footer-brand" href="/">
          <img src={LOGO_URL} alt="Símbolo Vértice" className="brand-mark" />
          <span className="brand-type"><strong>VÉRTICE</strong><small>GOVERNANÇA DE TI</small></span>
        </Link>
        <p>Menos ruído. Mais decisão. Execução controlada.</p>
        <div className="footer-utility">
          <ContactChannels />
          <div className="footer-legal"><Link href="/privacidade">Privacidade e uso adequado</Link><span>© {new Date().getFullYear()} Vértice Consultoria</span></div>
        </div>
      </footer>
    </div>
  );
}
