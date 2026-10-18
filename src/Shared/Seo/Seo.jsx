import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { company } from "../../data/company";

export const SITE_NAME = company.name;
export const TAGLINE = company.tagline;

const pages = {
  "/": {
    title: `${SITE_NAME} | Danao City Hardware Store`,
    description: `${company.tagline} ${company.addressOneLine}`,
    path: "/",
  },
  "/about": {
    title: `About | ${SITE_NAME}`,
    description: company.about,
    path: "/about",
  },
  "/contact": {
    title: `Contact | ${SITE_NAME}`,
    description: `${company.addressOneLine}. ${company.phoneDisplay}. ${company.email}.`,
    path: "/contact",
  },
};

const policies = {
  generalPrivacy: { title: "Privacy Policy", description: `Privacy policy for ${SITE_NAME}.` },
  cookiePolicy: { title: "Cookie Policy", description: `Cookie policy for the ${SITE_NAME} website.` },
  termsGeneral: { title: "Terms & Conditions", description: `Terms for using the ${SITE_NAME} website.` },
  returns: { title: "Orders & Returns", description: `Order and return notes for ${SITE_NAME}.` },
  codeOfConduct: { title: "Store Conduct", description: `Conduct notes for ${SITE_NAME}.` },
};

const upsertMeta = (attr, key, content) => {
  let el = document.head.querySelector(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
};

const upsertLink = (rel, href) => {
  let el = document.head.querySelector(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
};

const PageSeo = () => {
  const { pathname, search } = useLocation();

  useEffect(() => {
    const policy = new URLSearchParams(search).get("policy");
    const isPolicy = pathname === "/terms";
    const policyMeta = policies[policy] || policies.generalPrivacy;
    const page = isPolicy
      ? {
          title: `${policyMeta.title} | ${SITE_NAME}`,
          description: policyMeta.description,
          path: `/terms?policy=${policy && policies[policy] ? policy : "generalPrivacy"}`,
        }
      : pages[pathname];

    const origin = window.location.origin;
    const isKnown = Boolean(page);
    const title = isKnown ? page.title : `Page not found | ${SITE_NAME}`;
    const description = isKnown ? page.description : `This page is not part of the ${SITE_NAME} website.`;
    const path = isKnown ? page.path : pathname;
    const url = `${origin}${path}`;

    document.title = title;
    upsertMeta("name", "description", description);
    upsertMeta("name", "robots", isKnown ? "index, follow" : "noindex, follow");
    upsertMeta("property", "og:site_name", SITE_NAME);
    upsertMeta("property", "og:title", title);
    upsertMeta("property", "og:description", description);
    upsertMeta("property", "og:url", url);
    upsertMeta("property", "og:image", `${origin}/images/jet-logo.jpg`);
    upsertMeta("name", "twitter:title", title);
    upsertMeta("name", "twitter:description", description);
    upsertMeta("name", "twitter:image", `${origin}/images/jet-logo.jpg`);
    upsertLink("canonical", url);
  }, [pathname, search]);

  return null;
};

export default PageSeo;
