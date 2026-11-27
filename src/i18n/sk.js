// Slovenský text. Rovnaká štruktúra ako en.js (scripts/check-i18n.mjs zlyhá, ak sa rozídu).
// Odkazy, identifikátory sekcií a názvy obrázkov sú v src/data/site.js.
export default {
  lang: 'sk',
  htmlLang: 'sk',
  ogLocale: 'sk_SK',

  site: {
    name: 'Nightjar Gift', // brand in titles and metadata
    brand: 'Nightjar Gift', // brand in the footer and breadcrumbs
    brandTail: '',
    tagline: 'Drevený vták, ktorý odpovedá spevom na pískanie.',
    description:
      'Projekt Nightjar Gift: drevený vták s micro:bitom vo vnútri. Stlačte tlačidlo navrchu, zapískajte a vták vám zaspieva. Obmedzené objednávky e-mailom.',
    course: 'STHDF',
    updated: '27. novembra 2026',
  },

  ui: {
    skip: 'Preskočiť na obsah',
    mainNav: 'Hlavná navigácia',
    homeAria: 'Nightjar Gift, domov',
    theme: 'Prepnúť svetlú a tmavú tému',
    toLight: 'Prepnúť na svetlú tému',
    toDark: 'Prepnúť na tmavú tému',
    lightTitle: 'Svetlá téma',
    darkTitle: 'Tmavá téma',
    menu: 'Menu',
    language: 'Jazyk',
    langName: { en: 'English', sk: 'Slovenčina' },
    status: { done: 'Hotovo', wip: 'Prebieha' },
    birdAria: 'Silueta lelka zboku',
    hero: {
      eyebrowSuffix: 'lelek lesný',
      title: 'Zapískajte mu a <em>zaspieva vám.</em>',
      lead: 'Dobrý deň a vitajte pri našom projekte Nightjar Gift: drevenom vtákovi s ovládačom micro:bit, ktorý počúva vaše pískanie a odpovedá vám spevom.',
      hold: 'Podržte a vypočujte si ukážku',
      singing: 'Spieva…',
      order: 'Objednať e-mailom',
      how: 'Ako to funguje',
    },
    model: {
      aria: 'Interaktívny 3D model lelka. Ťahaním otáčate, kolieskom myši alebo štipnutím približujete.',
      noscriptAlt: 'Drôtený model vtáka',
      loading: 'Načítava sa 3D model…',
      noWebgl: '3D zobrazenie vyžaduje WebGL.',
      failed: 'Nepodarilo sa načítať 3D model.',
      group: 'Zobrazenie modelu',
      wood: 'Drevo',
      blueprint: 'Vnútro',
      spin: 'Otáčať',
      tip: 'Ťahaním otáčajte · kolieskom približujte',
    },
    footer: {
      about: 'Drevený vták, ktorý odpovedá spevom na pískanie. Vytvorili ho dvaja študenti predmetu STHDF na FIIT STU v Bratislave.',
      docs: 'Dokumentácia (KNIFES)',
      orders: 'Objednávky',
      legal: '© {year} · {id} · {course}, {academicYear}. Text a dokumentácia sú pod licenciou {licence}.',
      updated: 'Naposledy aktualizované {updated}.',
      top: 'Späť hore ↑',
    },
  },

  nav: [
    { label: 'O projekte' },
    { label: 'Ako to funguje' },
    { label: 'Dokumentácia' },
    { label: '3D model' },
    { label: 'Plán' },
    { label: 'Objednávka' },
  ],

  docs: [
    {
      title: 'Prototyp s ESP32-S3 na nepájivom poli',
      text: 'Ako sme zostavili prvý prototyp obvodu na nepájivom poli s ovládačom ESP32-S3.',
      alt: 'Prototyp s ESP32-S3 na nepájivom poli',
    },
    {
      title: 'micro:bit V2 a jeho firmvér',
      text: 'Ako vo vtákovi používame ovládač micro:bit V2 a ako doň nahrať firmvér.',
      alt: 'Prototyp s micro:bitom V2',
    },
    {
      title: 'Vyrezávanie vtáka na CNC',
      text: 'Ako CNC stroj vyreže výsledného vtáka z kusa dreva.',
      alt: 'CNC stroj, na ktorom sa vták vyrezáva',
    },
  ],

  roadmap: [
    {
      when: 'September – november 2026',
      title: 'Elektronika, súčiastky, prvé 3D modely, konzultácie k CNC',
      text: 'Navrhli sme elektroniku a zaobstarali súčiastky. Prvé verzie 3D modelu vznikli presne pre pôvodné súčiastky a prácu na CNC sme konzultovali.',
    },
    {
      when: 'Prvá polovica decembra 2026',
      title: 'Zostavenie v 3D tlačenom vtákovi a záverečná prezentácia',
      text: 'Elektroniku sme zostavili vo vnútri 3D tlačeného modelu vtáka a projekt sme odprezentovali.',
    },
    {
      when: 'December 2026',
      title: 'Vyrezávanie na CNC',
      text: 'Vyrezanie vtáka z dreva na CNC je posledný krok a skončí v decembri 2026.',
    },
  ],

  p: {
    home: {
      about: {
        eyebrow: 'O projekte',
        title: 'Projekt Nightjar Gift',
        text: [
          'Projekt Nightjar Gift vytvorili dvaja študenti predmetu STHDF v rámci štúdia na FIIT STU v Bratislave.',
          'Výsledkom je drevený vták s ovládačom micro:bit vo vnútri. Počúva pískanie, a keď ho začuje, vták zaspieva.',
        ],
      },
      how: {
        eyebrow: 'Ako to funguje',
        title: 'Stlačte, zapískajte, počúvajte',
        steps: [
          { title: 'Stlačte tlačidlo', text: 'Stlačte tlačidlo navrchu vtáka. Otvorí sa jednominútové okno, počas ktorého vták počúva.' },
          { title: 'Zapískajte', text: 'Počas tejto minúty na vtáka zapískajte a on vám zaspieva.' },
          { title: 'Ďalším stlačením predĺžite čas', text: 'Opätovným stlačením tlačidla kedykoľvek obnovíte okno na celú minútu.' },
          { title: 'Sám sa vypne', text: 'Keď minúta uplynie bez stlačenia tlačidla, vták sa vypne. Tlačidlom ho môžete kedykoľvek znova zapnúť, kým majú batérie energiu.' },
        ],
        battery: 'Napájanie: 2 × batéria AAA, ktoré si majiteľ vymení sám.',
      },
      why: {
        eyebrow: 'Prečo micro:bit',
        title: 'Lacnejší a ľahšie dostupný',
        text: 'Ovládač micro:bit sme zvolili, pretože je lacnejší a logisticky ľahšie dostupný ako ESP32 z predchádzajúceho prototypu. Ten potreboval súčiastky z troch rôznych e-shopov, a preto bolo ich zaobstaranie logisticky náročné.',
      },
      docs: {
        eyebrow: 'Dokumentácia',
        title: 'Celý postup je zdokumentovaný',
        lead: 'Každý krok je popísaný v našej dokumentácii (KNIFES).',
        read: 'Čítať',
        all: 'Celá dokumentácia',
      },
      model: {
        eyebrow: '3D model',
        title: 'Pozrite si vtáka',
        lead: 'Náhľad 3D modelu vtáka. Prepnite na „Vnútro“ a uvidíte, kde je uložená elektronika.',
      },
      roadmap: {
        eyebrow: 'Plán',
        title: 'Kde projekt stojí',
      },
      order: {
        eyebrow: 'Objednávka',
        title: 'Obmedzené objednávky e-mailom',
        lead: 'Momentálne prijímame len obmedzený počet objednávok e-mailom. Ďakujeme veľmi pekne za váš záujem.',
        button: 'Napíšte nám',
        subject: 'Objednávka lelka',
      },
    },

    notFound: {
      title: 'Stránka sa nenašla',
      crumb: '404',
      eyebrow: 'Stratený vo vresovisku',
      heading: 'Nič tu nie je, <em>len noc.</em>',
      lead: 'Táto stránka neexistuje. Vráťte sa na začiatok.',
      back: 'Späť k vtákovi',
    },
  },
};
