/** DESIGN — O Blog funciona como uma sala de leitura: contexto, sinais e decisões para quem governa tecnologia. */
import { ArrowRight, Clock3, Filter } from "lucide-react";
import { useMemo, useState } from "react";
import { Link } from "wouter";
import PageMeta from "@/components/PageMeta";
import SiteChrome from "@/components/SiteChrome";
import { blogCategories, blogPosts } from "@/lib/blogPosts";

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState("Todos");
  const featured = blogPosts.find(post => post.featured) ?? blogPosts[0];
  const filteredPosts = useMemo(
    () =>
      activeCategory === "Todos"
        ? blogPosts
        : blogPosts.filter(post => post.category === activeCategory),
    [activeCategory]
  );

  return (
    <SiteChrome active="blog">
      <PageMeta
        title="Blog | Vértice Consultoria em TI"
        description="Artigos da Vértice sobre consultoria em TI, ITIL Version 5, governança de IA, ISO/IEC 42001, LGPD, privacidade e operações em países de língua portuguesa."
        path="/blog"
      />
      <section className="route-hero route-hero-dark blog-route-hero">
        <div className="route-kicker">
          <span>06</span> Blog Vértice
        </div>
        <div className="route-hero-grid">
          <div>
            <div className="eyebrow eyebrow-light">
              <span /> Ideias para governar melhor
            </div>
            <h1>
              Menos ruído.
              <br />
              <em>Mais capacidade de decidir.</em>
            </h1>
          </div>
          <p>
            Ensaios curtos para lideranças que precisam conectar estratégia,
            processos, dados, pessoas e tecnologia sem perder o ritmo da
            execução.
          </p>
        </div>
      </section>

      <main className="blog-main">
        <section className="blog-featured-section">
          <div className="blog-section-label">
            <span>Em destaque</span>
            <i />
          </div>
          <Link className="blog-featured" href={`/blog/${featured.slug}`}>
            <div className="blog-featured-visual" aria-hidden="true">
              <span>{featured.number}</span>
              <strong>
                VÉRTICE
                <br />
                LEITURA
              </strong>
            </div>
            <div className="blog-featured-copy">
              <div className="blog-meta">
                <span>{featured.category}</span>
                <span>{featured.publishedAt}</span>
                <span>
                  <Clock3 size={13} /> {featured.readTime}
                </span>
              </div>
              <h2>{featured.title}</h2>
              <p>{featured.excerpt}</p>
              <span className="blog-read-link">
                Ler artigo <ArrowRight size={17} />
              </span>
            </div>
          </Link>
        </section>

        <section className="blog-index-section">
          <div className="blog-index-heading">
            <div>
              <div className="eyebrow">
                <span /> Arquivo editorial
              </div>
              <h2>
                Escolha um <em>ângulo.</em>
              </h2>
            </div>
            <p>
              Filtre os textos pelo tipo de decisão que você quer organizar
              agora.
            </p>
          </div>
          <div
            className="blog-filter-bar"
            role="tablist"
            aria-label="Filtrar artigos por categoria"
          >
            <Filter size={15} aria-hidden="true" />
            {blogCategories.map(category => (
              <button
                key={category}
                type="button"
                role="tab"
                aria-selected={activeCategory === category}
                className={activeCategory === category ? "active" : ""}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
          <div className="blog-grid">
            {filteredPosts.map(post => (
              <article
                className={`blog-card ${post.featured ? "is-featured-card" : ""}`}
                key={post.slug}
              >
                <div className="blog-card-top">
                  <span>{post.number}</span>
                  <span>{post.category}</span>
                </div>
                <h3>
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </h3>
                <p>{post.excerpt}</p>
                <div className="blog-card-bottom">
                  <span>
                    {post.publishedAt} · {post.readTime}
                  </span>
                  <Link
                    href={`/blog/${post.slug}`}
                    aria-label={`Ler ${post.title}`}
                  >
                    <ArrowRight size={17} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>

      <section className="route-manifesto blog-manifesto">
        <p>
          Boa governança também se constrói com <em>linguagem comum.</em>
        </p>
        <Link className="primary-cta" href="/servicos">
          Conhecer Serviços <ArrowRight size={17} />
        </Link>
      </section>
    </SiteChrome>
  );
}
