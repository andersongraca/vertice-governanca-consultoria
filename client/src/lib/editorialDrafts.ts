export type EditorialDraftStatus = "rascunho" | "pronto";

export type EditorialDraft = {
  id: string;
  title: string;
  slug: string;
  category: string;
  serviceId: string;
  excerpt: string;
  readTime: string;
  body: string;
  sources: string;
  status: EditorialDraftStatus;
  createdAt: string;
  updatedAt: string;
};

const STORAGE_KEY = "vertice-editorial-drafts-v1";

export function createEmptyDraft(): EditorialDraft {
  const now = new Date().toISOString();
  return {
    id: crypto.randomUUID(),
    title: "",
    slug: "",
    category: "Governança",
    serviceId: "gestao-servicos",
    excerpt: "",
    readTime: "5 min de leitura",
    body: "",
    sources: "",
    status: "rascunho",
    createdAt: now,
    updatedAt: now,
  };
}

export function loadEditorialDrafts(): EditorialDraft[] {
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (!stored) return [];
    const parsed: unknown = JSON.parse(stored);
    if (!Array.isArray(parsed)) return [];
    return parsed.filter(isEditorialDraft);
  } catch {
    return [];
  }
}

export function saveEditorialDrafts(drafts: EditorialDraft[]): boolean {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(drafts));
    return true;
  } catch {
    return false;
  }
}

export function removeEditorialDraft(
  id: string,
  drafts: EditorialDraft[]
): EditorialDraft[] {
  return drafts.filter(draft => draft.id !== id);
}

export function slugify(value: string) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function isEditorialDraft(value: unknown): value is EditorialDraft {
  if (!value || typeof value !== "object") return false;
  const draft = value as Partial<EditorialDraft>;
  return (
    typeof draft.id === "string" &&
    typeof draft.title === "string" &&
    typeof draft.slug === "string" &&
    typeof draft.category === "string" &&
    typeof draft.serviceId === "string" &&
    typeof draft.excerpt === "string" &&
    typeof draft.readTime === "string" &&
    typeof draft.body === "string" &&
    typeof draft.sources === "string" &&
    (draft.status === "rascunho" || draft.status === "pronto") &&
    typeof draft.createdAt === "string" &&
    typeof draft.updatedAt === "string"
  );
}
