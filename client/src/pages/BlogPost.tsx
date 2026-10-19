/** DESIGN — O artigo individual é uma leitura guiada: índice, argumento e próximo passo. */
import { ArrowLeft, ArrowRight, Check, Clock3, Quote } from "lucide-react";
import { Link, useParams } from "wouter";
import PageMeta from "@/components/PageMeta";
import SiteChrome from "@/components/SiteChrome";
import { getBlogPostBySlug, blogPosts } from "@/lib/blogPosts";
import { getServiceById } from "@/lib/serviceCatalog";

export default function BlogPost() {
  const { slug = "" } = useParams<{ slug: string }>();
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return (
      <SiteChrome>
        <PageMeta
          title="Artigo não encontrado | Vértice"
          description="O artigo solicitado não foi encontrado."
          path={`/blog/${slug}`}
        />
        <section className="route-hero route-hero-light article-not-found">
          <div className="route-kicker">
            <span>404</span> Blog Vértice
          </div>
          <div className="route-hero-grid">
            <div>
              <h1>
                Esta leitura
                <br />
                <em>não está aqui.</em>
              </h1>
            </div>
            <p>
              O artigo pode ter mudado de endereço. Volte ao arquivo editorial
              para escolher outro ponto de vista.
            </p>
          </div>
          <Link className="primary-cta article-back-button" href="/blog">
            <ArrowLeft size={17} /> Voltar ao Blog
          </Link>
        </section>
      </SiteChrome>
    );
  }

  const service = getServiceById(post.serviceId);
  const related = blogPosts
    .filter(
      item =>
        item.slug !== post.slug &&
        (item.category === post.category || item.serviceId === post.serviceId)
    )
    .slice(0, 2);

  return (
    <SiteChrome active="blog">
      <PageMeta
        title={`${post.title} | Vértice`}
        description={post.excerpt}
        path={`/blog/${post.slug}`}
        type="article"
      />
      <section className="route-hero route-hero-dark article-hero">
        <div className="route-kicker">
          <span>{post.number}</span> {post.category}
        </div>
        <div className="article-hero-grid">
          <div>
            <div className="eyebrow eyebrow-light">
              <span /> Caderno de governança
            </div>
            <h1>{post.title}</h1>
          </div>
          <div className="article-hero-aside">
            <span>{post.publishedAt}</span>
            <span>
              <Clock3 size={14} /> {post.readTime}
            </span>
            <Link href={`/servicos?service=${encodeURIComponent(service.id)}`}>
              Frente relacionada <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      <main className="article-main">
        <aside className="article-index">
          <Link className="article-back-link" href="/blog">
            <ArrowLeft size={15} /> Voltar ao arquivo
          </Link>
          <div className="article-index-card">
            <span>Índice da leitura</span>
            <ol>
              {post.blocks
                .filter(block => block.type === "heading")
                .map((block, index) => (
                  <li key={`${block.text}-${index}`}>
                    <a href={`#section-${index + 1}`}>
                      {String(index + 1).padStart(2, "0")} {block.text}
                    </a>
                  </li>
                ))}
            </ol>
          </div>
          <div className="article-related-service">
            <span>Frente Vértice</span>
            <strong>{service.short}</strong>
            <Link href="/servicos">
              Ver como atuamos <ArrowRight size={15} />
            </Link>
          </div>
        </aside>
        <article className="article-body">
          <p className="article-deck">{post.excerpt}</p>
          {post.blocks.map((block, index) => {
            if (block.type === "heading")
              return (
                <h2
                  id={`section-${post.blocks.slice(0, index).filter(item => item.type === "heading").length + 1}`}
                  key={`${block.type}-${index}`}
                >
                  {block.text}
                </h2>
              );
            if (block.type === "list")
              return (
                <ul key={`${block.type}-${index}`}>
                  {block.items.map(item => (
                    <li key={item}>
                      <Check size={17} />
                      {item}
                    </li>
                  ))}
                </ul>
              );
            if (block.type === "quote")
              return (
                <blockquote key={`${block.type}-${index}`}>
                  <Quote size={22} />
                  {block.text}
                </blockquote>
              );
            return <p key={`${block.type}-${index}`}>{block.text}</p>;
          })}
          <div className="article-source-note">
            <span>Leitura aplicada</span>
            <p>
              Este texto faz parte do repertório editorial da Vértice sobre
              governança, gestão e tecnologia. Use as perguntas como ponto de
              partida para uma conversa com sua equipe.
            </p>
          </div>
          {post.sources && post.sources.length > 0 && (
            <div className="article-sources">
              <span>Fontes oficiais consultadas</span>
              <ul>
                {post.sources.map(source => (
                  <li key={source.href}>
                    <a href={source.href} target="_blank" rel="noreferrer">
                      {source.label} <ArrowRight size={13} />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </article>
      </main>

      <section className="article-next-step">
        <div>
          <div className="eyebrow eyebrow-light">
            <span /> Próximo passo
          </div>
          <h2>
            O tema ganhou forma.
            <br />
            <em>Agora, qual decisão vem?</em>
          </h2>
        </div>
        <p>
          Se este assunto toca uma prioridade real, podemos organizar um
          diagnóstico inicial e delimitar a frente de atuação adequada.
        </p>
        <Link
          className="primary-cta"
          href={`/diagnostico?area=${encodeURIComponent(service.title.replace(/\.$/, ""))}`}
        >
          Levar para o diagnóstico <ArrowRight size={17} />
        </Link>
      </section>
      {related.length > 0 && (
        <section className="article-related">
          <div className="eyebrow">
            <span /> Continue a leitura
          </div>
          <div className="article-related-grid">
            {related.map(item => (
              <Link key={item.slug} href={`/blog/${item.slug}`}>
                <span>{item.category}</span>
                <strong>{item.title}</strong>
                <small>
                  Ler artigo <ArrowRight size={14} />
                </small>
              </Link>
            ))}
          </div>
        </section>
      )}
    </SiteChrome>
  );
}
