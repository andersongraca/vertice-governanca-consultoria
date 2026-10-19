import { useEffect } from "react";

const PUBLIC_ORIGIN =
  "https://andersongraca.github.io/vertice-governanca-consultoria";

function upsertMeta(name: string, content: string, property = false) {
  const attribute = property ? "property" : "name";
  let element = document.head.querySelector<HTMLMetaElement>(
    `meta[${attribute}="${name}"]`
  );
  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attribute, name);
    document.head.appendChild(element);
  }
  element.content = content;
}

function upsertLink(rel: string, href: string) {
  let element = document.head.querySelector<HTMLLinkElement>(
    `link[rel="${rel}"]`
  );
  if (!element) {
    element = document.createElement("link");
    element.rel = rel;
    document.head.appendChild(element);
  }
  element.href = href;
}

type PageMetaProps = {
  title: string;
  description: string;
  path?: string;
  type?: "website" | "article";
};

export default function PageMeta({
  title,
  description,
  path = "/",
  type = "website",
}: PageMetaProps) {
  useEffect(() => {
    const canonicalUrl = `${PUBLIC_ORIGIN}${path === "/" ? "/" : path}`;
    document.title = title;
    upsertMeta("description", description);
    upsertMeta("og:type", type, true);
    upsertMeta("og:title", title, true);
    upsertMeta("og:description", description, true);
    upsertMeta("og:url", canonicalUrl, true);
    upsertMeta("og:site_name", "Vértice Governança de TI", true);
    upsertMeta("og:image", `${PUBLIC_ORIGIN}/favicon.svg`, true);
    upsertMeta("twitter:card", "summary", false);
    upsertMeta("twitter:title", title, false);
    upsertMeta("twitter:description", description, false);
    upsertMeta("twitter:image", `${PUBLIC_ORIGIN}/favicon.svg`, false);
    upsertLink("canonical", canonicalUrl);
  }, [description, path, title, type]);

  return null;
}
