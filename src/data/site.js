// Language-neutral data for the Nightjar Gift promo site: links, section ids and the structure of
// lists. Everything a visitor reads lives in src/i18n/<lang>.js and is merged with this file by
// content(lang) in src/i18n/index.js.
//
// Sources: the project summary written for the site (November 2026), the November 2026
// presentation and the KNIFES documentation (knifes.nightjar.gift).

export const BASE = import.meta.env.BASE_URL.replace(/\/$/, '');
/** Prefix an absolute site path with the configured base. */
export const url = (p = '/') => (/^(https?:|mailto:|#)/.test(p) ? p : `${BASE}${p}`);

export const site = {
  latin: 'Caprimulgus europaeus',
  studentId: 'ST-017',
  year: '2026/2027',
  licence: 'CC BY-NC-SA 4.0',
};

export const links = {
  email: 'spanik11@gmail.com', // orders
  docs: 'https://knifes.nightjar.gift',
  github: 'https://github.com/iairu',
};

// Header menu: sections of the home page, in page order. Labels come from the language file.
export const nav = [
  { id: 'about' },
  { id: 'how' },
  { id: 'docs' },
  { id: 'model' },
  { id: 'roadmap' },
  { id: 'order', pill: true },
];

// One KNIFE post in the docs; each post is its own page (sk is the docs' default locale; the en
// locale adds its own /en prefix in front of the en/ docs folder)
export const knifePost = (lang, n) => `${links.docs}${lang === 'en' ? '/en/en' : '/sk'}/knifes/knife-${String(n).padStart(3, '0')}/`;

// Documentation cards: KNIFE post and photo (title and text in the language file)
export const docs = [
  { knife: 18, img: 'proto-esp32', w: 1725, h: 1296 },
  { knife: 21, img: 'proto-microbit', w: 1684, h: 1122 },
  { knife: 14, img: 'cnc-smartlab', w: 1769, h: 1296 },
];

// Roadmap: done | wip, in the same order as the rows in the language file
export const roadmap = [{ state: 'done' }, { state: 'done' }, { state: 'wip' }];
