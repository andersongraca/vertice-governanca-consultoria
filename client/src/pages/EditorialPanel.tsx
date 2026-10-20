/** DESIGN — Painel editorial: preparar conteúdo com clareza antes de conectar o servidor. */
import {
  AlertTriangle,
  Check,
  CheckCircle2,
  CloudOff,
  Eye,
  FilePlus2,
  FileText,
  Save,
  ShieldAlert,
  Trash2,
} from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import PageMeta from "@/components/PageMeta";
import SiteChrome from "@/components/SiteChrome";
import { blogCategories, blogPosts } from "@/lib/blogPosts";
import {
  createEmptyDraft,
  type EditorialDraft,
  type EditorialDraftStatus,
  loadEditorialDrafts,
  removeEditorialDraft,
  saveEditorialDrafts,
  slugify,
} from "@/lib/editorialDrafts";
import { serviceCatalog } from "@/lib/serviceCatalog";

const editableCategories = blogCategories.filter(
  category => category !== "Todos"
);

function formatDate(value: string) {
  return new Intl.DateTimeFormat("pt-BR", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  }).format(new Date(value));
}

export default function EditorialPanel() {
  const [drafts, setDrafts] = useState<EditorialDraft[]>(() =>
    loadEditorialDrafts()
  );
  const [activeDraft, setActiveDraft] = useState<EditorialDraft>(() =>
    createEmptyDraft()
  );
  const [isDirty, setIsDirty] = useState(false);
  const [notice, setNotice] = useState("");
  const [storageError, setStorageError] = useState("");
  const [previewOpen, setPreviewOpen] = useState(false);

  const savedActiveDraft = useMemo(
    () => drafts.find(draft => draft.id === activeDraft.id),
    [activeDraft.id, drafts]
  );

  useEffect(() => {
    const warnBeforeLeaving = (event: BeforeUnloadEvent) => {
      if (!isDirty) return;
      event.preventDefault();
      event.returnValue = "";
    };
    window.addEventListener("beforeunload", warnBeforeLeaving);
    return () => window.removeEventListener("beforeunload", warnBeforeLeaving);
  }, [isDirty]);

  function updateDraft<Field extends keyof EditorialDraft>(
    field: Field,
    value: EditorialDraft[Field]
  ) {
    setActiveDraft(current => ({
      ...current,
      [field]: value,
      updatedAt: new Date().toISOString(),
    }));
    setIsDirty(true);
    setNotice("");
  }

  function updateTitle(value: string) {
    setActiveDraft(current => ({
      ...current,
      title: value,
      slug: current.slug || slugify(value),
      updatedAt: new Date().toISOString(),
    }));
    setIsDirty(true);
    setNotice("");
  }

  function selectDraft(draft: EditorialDraft) {
    if (
      isDirty &&
      !window.confirm(
        "Há alterações não salvas. Deseja trocar de rascunho mesmo assim?"
      )
    )
      return;
    setActiveDraft(draft);
    setIsDirty(false);
    setNotice("");
    setPreviewOpen(false);
  }

  function createDraft() {
    if (
      isDirty &&
      !window.confirm(
        "Há alterações não salvas. Deseja iniciar outro rascunho mesmo assim?"
      )
    )
      return;
    setActiveDraft(createEmptyDraft());
    setIsDirty(false);
    setNotice("");
    setPreviewOpen(false);
  }

  function saveDraft(status: EditorialDraftStatus) {
    const requiredFields = [
      activeDraft.title,
      activeDraft.slug,
      activeDraft.excerpt,
      activeDraft.body,
    ];
    if (requiredFields.some(value => !value.trim())) {
      setStorageError(
        "Preencha título, URL do artigo, resumo e conteúdo antes de salvar."
      );
      return;
    }

    const normalizedSlug = slugify(activeDraft.slug);
    const current = {
      ...activeDraft,
      slug: normalizedSlug,
      status,
      updatedAt: new Date().toISOString(),
    };
    const nextDrafts = savedActiveDraft
      ? drafts.map(draft => (draft.id === current.id ? current : draft))
      : [current, ...drafts];

    if (!saveEditorialDrafts(nextDrafts)) {
      setStorageError(
        "Não foi possível salvar neste navegador. Verifique as permissões de armazenamento antes de fechar esta página."
      );
      return;
    }

    setDrafts(nextDrafts);
    setActiveDraft(current);
    setIsDirty(false);
    setStorageError("");
    setNotice(
      status === "pronto"
        ? "Rascunho marcado como pronto para revisão. Ele ainda não está no Blog público."
        : "Rascunho salvo neste navegador. Ele ainda não está no Blog público."
    );
  }

  function deleteDraft() {
    if (!savedActiveDraft) return;
    if (
      !window.confirm(
        "Excluir este rascunho local? Esta ação não pode ser desfeita."
      )
    )
      return;
    const nextDrafts = removeEditorialDraft(activeDraft.id, drafts);
    if (!saveEditorialDrafts(nextDrafts)) {
      setStorageError(
        "Não foi possível atualizar o armazenamento local. O rascunho não foi removido."
      );
      return;
    }
    setDrafts(nextDrafts);
    setActiveDraft(createEmptyDraft());
    setIsDirty(false);
    setPreviewOpen(false);
    setNotice("Rascunho removido deste navegador.");
  }

  const paragraphs = activeDraft.body
    .split(/\n\s*\n/)
    .map(value => value.trim())
    .filter(Boolean);
  const sources = activeDraft.sources
    .split("\n")
    .map(line => line.trim())
    .filter(Boolean)
    .map(line => {
      const [label, ...hrefParts] = line.split("|");
      return { label: label.trim(), href: hrefParts.join("|").trim() };
    });

  return (
    <SiteChrome active="editorial">
      <PageMeta
        title="Painel editorial | Vértice"
        description="Ambiente de preparação editorial da Vértice."
        path="/painel-editorial"
        noIndex
      />
      <section className="route-hero route-hero-dark editorial-hero">
        <div className="route-kicker">
          <span>09</span> Painel editorial
        </div>
        <div className="route-hero-grid">
          <div>
            <div className="eyebrow eyebrow-light">
              <span /> Preparação de conteúdo
            </div>
            <h1>
              Escrever primeiro.
              <br />
              <em>Publicar depois.</em>
            </h1>
          </div>
          <p>
            Este é o ambiente de preparação do Blog da Vértice. Crie, edite,
            revise e guarde rascunhos neste navegador antes de conectar
            autenticação, banco e publicação real.
          </p>
        </div>
      </section>

      <main className="editorial-main">
        <section
          className="editorial-warning"
          aria-label="Avisos do ambiente editorial"
        >
          <CloudOff size={23} aria-hidden="true" />
          <div>
            <strong>
              Modo de preparação — sem login e sem publicação no servidor.
            </strong>
            <p>
              Os rascunhos são salvos somente neste navegador. Eles não aparecem
              no Blog público, não são compartilhados entre dispositivos e podem
              ser perdidos ao limpar os dados de navegação.
            </p>
          </div>
          <span>BACKEND PENDENTE</span>
        </section>

        <section className="editorial-workspace">
          <aside className="editorial-rail">
            <div className="editorial-rail-heading">
              <div className="eyebrow">
                <span /> Seu arquivo local
              </div>
              <h2>
                Rascunhos
                <br />
                <em>em preparação.</em>
              </h2>
            </div>
            <button
              className="editorial-new-button"
              type="button"
              onClick={createDraft}
            >
              <FilePlus2 size={17} /> Novo rascunho
            </button>
            <div className="editorial-counts">
              <div>
                <span>{drafts.length}</span>
                <small>rascunhos locais</small>
              </div>
              <div>
                <span>{blogPosts.length}</span>
                <small>artigos publicados</small>
              </div>
            </div>
            <div
              className="editorial-list"
              aria-label="Rascunhos deste navegador"
            >
              {drafts.length === 0 ? (
                <p className="editorial-empty">
                  Nenhum rascunho salvo neste navegador.
                </p>
              ) : (
                drafts.map(draft => (
                  <button
                    className={activeDraft.id === draft.id ? "is-active" : ""}
                    type="button"
                    key={draft.id}
                    onClick={() => selectDraft(draft)}
                  >
                    <span
                      className={`editorial-status editorial-status-${draft.status}`}
                    >
                      {draft.status === "pronto" ? "Pronto" : "Rascunho"}
                    </span>
                    <strong>{draft.title || "Sem título"}</strong>
                    <small>Atualizado {formatDate(draft.updatedAt)}</small>
                  </button>
                ))
              )}
            </div>
            <div className="editorial-security-note">
              <ShieldAlert size={17} />
              <p>
                Não inclua senhas, dados bancários, dados pessoais sensíveis,
                acessos ou informações confidenciais de clientes.
              </p>
            </div>
          </aside>

          <section className="editorial-editor" aria-label="Editor de artigo">
            <div className="editorial-editor-top">
              <div>
                <div className="eyebrow">
                  <span />{" "}
                  {savedActiveDraft ? "Editar rascunho" : "Novo rascunho"}
                </div>
                <h2>{activeDraft.title || "Comece pelo título."}</h2>
              </div>
              <div className="editorial-editor-state">
                {isDirty ? (
                  <>
                    <AlertTriangle size={16} /> Alterações não salvas
                  </>
                ) : (
                  <>
                    <CheckCircle2 size={16} />{" "}
                    {savedActiveDraft ? "Salvo localmente" : "Ainda não salvo"}
                  </>
                )}
              </div>
            </div>

            {(notice || storageError) && (
              <div
                className={`editorial-notice ${storageError ? "is-error" : ""}`}
                role={storageError ? "alert" : "status"}
              >
                {storageError ? (
                  <AlertTriangle size={17} />
                ) : (
                  <Check size={17} />
                )}
                <p>{storageError || notice}</p>
              </div>
            )}

            <form
              className="editorial-form"
              onSubmit={event => {
                event.preventDefault();
                saveDraft("rascunho");
              }}
            >
              <label className="editorial-form-full">
                Título do artigo *
                <input
                  value={activeDraft.title}
                  onChange={event => updateTitle(event.target.value)}
                  placeholder="Ex.: Governança de IA: da política à decisão operacional."
                />
              </label>
              <label>
                URL do artigo (slug) *
                <input
                  value={activeDraft.slug}
                  onChange={event => updateDraft("slug", event.target.value)}
                  placeholder="governanca-de-ia-da-politica-a-decisao"
                />
              </label>
              <label>
                Tempo estimado de leitura
                <input
                  value={activeDraft.readTime}
                  onChange={event =>
                    updateDraft("readTime", event.target.value)
                  }
                  placeholder="5 min de leitura"
                />
              </label>
              <label>
                Categoria
                <select
                  value={activeDraft.category}
                  onChange={event =>
                    updateDraft("category", event.target.value)
                  }
                >
                  {editableCategories.map(category => (
                    <option key={category}>{category}</option>
                  ))}
                </select>
              </label>
              <label>
                Frente relacionada
                <select
                  value={activeDraft.serviceId}
                  onChange={event =>
                    updateDraft("serviceId", event.target.value)
                  }
                >
                  {serviceCatalog.map(service => (
                    <option key={service.id} value={service.id}>
                      {service.short}
                    </option>
                  ))}
                </select>
              </label>
              <label className="editorial-form-full">
                Resumo de abertura *
                <textarea
                  rows={3}
                  value={activeDraft.excerpt}
                  onChange={event => updateDraft("excerpt", event.target.value)}
                  placeholder="Uma frase que explica a decisão, o risco ou a oportunidade tratada no artigo."
                />
              </label>
              <label className="editorial-form-full">
                Conteúdo do artigo *
                <textarea
                  className="editorial-body-field"
                  rows={14}
                  value={activeDraft.body}
                  onChange={event => updateDraft("body", event.target.value)}
                  placeholder="Escreva em parágrafos. Separe cada parágrafo por uma linha em branco."
                />
                <small>
                  Use uma linha em branco para separar os parágrafos na prévia.
                  Estruturas avançadas e publicação pública serão conectadas ao
                  backend na próxima etapa.
                </small>
              </label>
              <label className="editorial-form-full">
                Fontes oficiais (opcional)
                <textarea
                  rows={4}
                  value={activeDraft.sources}
                  onChange={event => updateDraft("sources", event.target.value)}
                  placeholder="Nome da fonte | https://exemplo.gov.br/fonte&#10;Outra fonte | https://exemplo.org/referencia"
                />
                <small>
                  Inclua uma fonte por linha, no formato: Nome da fonte | URL.
                </small>
              </label>
              <div className="editorial-form-warning editorial-form-full">
                <ShieldAlert size={17} />
                <p>
                  Este painel é para conteúdo editorial. Não inclua informações
                  confidenciais de clientes, segredos de negócio, credenciais,
                  dados pessoais ou pareceres jurídicos não revisados.
                </p>
              </div>
              <div className="editorial-actions editorial-form-full">
                <button
                  className="editorial-secondary-button"
                  type="button"
                  onClick={() => setPreviewOpen(open => !open)}
                >
                  <Eye size={16} />{" "}
                  {previewOpen ? "Fechar prévia" : "Abrir prévia"}
                </button>
                <button
                  className="editorial-secondary-button"
                  type="button"
                  onClick={() => saveDraft("rascunho")}
                >
                  <Save size={16} /> Salvar rascunho
                </button>
                <button
                  className="primary-cta"
                  type="button"
                  onClick={() => saveDraft("pronto")}
                >
                  <CheckCircle2 size={17} /> Marcar como pronto
                </button>
                {savedActiveDraft && (
                  <button
                    className="editorial-delete-button"
                    type="button"
                    onClick={deleteDraft}
                  >
                    <Trash2 size={16} /> Excluir
                  </button>
                )}
              </div>
            </form>
          </section>
        </section>

        {previewOpen && (
          <section
            className="editorial-preview"
            aria-label="Prévia local do artigo"
          >
            <div className="editorial-preview-label">
              <Eye size={16} /> Prévia local — não publicada
            </div>
            <div className="editorial-preview-article">
              <div className="blog-meta">
                <span>{activeDraft.category}</span>
                <span>{formatDate(activeDraft.updatedAt)}</span>
                <span>{activeDraft.readTime}</span>
              </div>
              <h2>{activeDraft.title || "Título do artigo"}</h2>
              <p className="article-deck">
                {activeDraft.excerpt || "O resumo do artigo aparecerá aqui."}
              </p>
              {paragraphs.length > 0 ? (
                paragraphs.map((paragraph, index) => (
                  <p key={`${paragraph}-${index}`}>{paragraph}</p>
                ))
              ) : (
                <p className="editorial-preview-empty">
                  Escreva o conteúdo para visualizar os parágrafos do artigo.
                </p>
              )}
              {sources.length > 0 && (
                <div className="article-sources">
                  <span>Fontes oficiais informadas</span>
                  <ul>
                    {sources.map((source, index) => (
                      <li key={`${source.label}-${index}`}>
                        {source.href ? (
                          <a
                            href={source.href}
                            target="_blank"
                            rel="noreferrer"
                          >
                            {source.label || source.href}
                          </a>
                        ) : (
                          source.label
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </section>
        )}

        <section className="editorial-next-stage">
          <FileText size={20} />
          <p>
            <strong>Próxima etapa planejada:</strong> conectar login,
            permissões, banco de dados e publicação no Blog público. Até lá, use
            este painel para organizar rascunhos e revisões, não como
            repositório definitivo.
          </p>
        </section>
      </main>
    </SiteChrome>
  );
}
