// Language plumbing: which languages exist, how a page asks for its text and how URLs map between them.
import en from './en.js';
import sk from './sk.js';
import { site, links, nav, docs, roadmap, knifePost, url, BASE } from '../data/site.js';

export const langs = ['en', 'sk'];
export const defaultLang = 'en';
const dicts = { en, sk };

export const isLang = (l) => langs.includes(l);

/** Language of the page being rendered (pages live under src/pages/[lang]/). */
export function getLang(astro) {
  const l = astro.params?.lang ?? astro.currentLocale;
  return isLang(l) ? l : defaultLang;
}

/** Replace {name} placeholders. */
export const fill = (s, vars = {}) => s.replace(/\{(\w+)\}/g, (m, k) => (k in vars ? vars[k] : m));

/** Absolute site path inside a language, e.g. href('sk', '/#order'). */
export const href = (lang, path = '/') => url(`/${lang}${path}`);

/** The same page in another language (path only; the #hash is added in the browser). */
export function switchPath(pathname, to) {
  const rel = pathname.startsWith(BASE) ? pathname.slice(BASE.length) : pathname;
  const rest = rel.replace(/^\/(en|sk)(?=\/|$)/, '') || '/';
  return url(`/${to}${rest.startsWith('/') ? rest : '/' + rest}`);
}

const zip = (base, text) => base.map((b, i) => ({ ...b, ...text[i] }));
const cache = {};

/** Everything a page needs for one language: base data merged with the translated copy. */
export function content(lang) {
  if (cache[lang]) return cache[lang];
  const d = dicts[lang];
  const c = {
    lang,
    d,
    ui: d.ui,
    p: d.p,
    site: { ...site, ...d.site },
    links,
    nav: zip(nav, d.nav),
    docs: zip(docs, d.docs).map((x) => ({ ...x, href: knifePost(lang, x.knife) })),
    roadmap: zip(roadmap, d.roadmap),
  };
  cache[lang] = c;
  return c;
}
