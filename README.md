# Nightjar Gift promo site (ST-017-PromoSite)

One-page website for the **Nightjar Gift Project**: a wooden bird with a micro:bit V2 inside.
Press the button on top, whistle within the minute, and the bird sings back. Powered by 2 × AAA batteries.
Made by two students of the STHDF lecture, FIIT STU, Bratislava, 2026/27.

Built with [Astro](https://astro.build) (static output) and [three.js](https://threejs.org) for the 3D model.
No tracking, no external requests: fonts are self-hosted.

The page (`/en/`, `/sk/`) has these sections: About (with why micro:bit), How it works, Documentation
(links to KNIFE-018, 021 and 014), 3D model, Roadmap and Order (limited orders by email).
The old sub-pages (`/bird/`, `/electronics/`, `/parts/`, `/roadmap/`, `/preorder/`, `/about/`, with or
without the language prefix) redirect to the home page.

## Languages

- Pages live in `src/pages/[lang]/` and are built for `en` and `sk`. All copy is in `src/i18n/en.js` and
  `src/i18n/sk.js`. They must have the same shape, which `npm run check:i18n` checks (`npm run build` runs it first).
  Links, section ids and image names stay in `src/data/site.js`.
- The root `/` is a redirect page: the choice made with the header switcher wins, otherwise Czech or Slovak
  browsers go to `/sk/` and everyone else to `/en/`.

## Run

```bash
npm install
npm run dev
npm run build      # i18n check + astro build -> dist/
npm run preview
```

Needs Node 20+. Deployed at <https://nightjar.gift>; documentation (KNIFES) lives at <https://knifes.nightjar.gift>.
Optional build variables: `SITE_URL` (canonical/OG URLs) and `BASE_PATH` (deploy under a sub-path).

## Where things live

| What | Where |
|---|---|
| Links, order email, menu, documentation cards, roadmap states | `src/data/site.js` |
| All visible text (both languages) | `src/i18n/en.js`, `src/i18n/sk.js` |
| The page | `src/pages/[lang]/index.astro` |
| 3D viewer | `src/components/ModelViewer.astro` (lazy-loaded) |
| Logo | `logo/` (sources); the header uses `public/img/logo/`: black in the light theme, white in the dark one |
| Photos | `public/img/proto-*.webp`, `cnc-smartlab.webp`, cropped from the November 2026 presentation; `og.png` is a screenshot of the hero |
| 3D model | `public/models/*.stl` from `ST-017-MotherboardCNC/bird-enclosure-models/stl_v5` (micro:bit V2, 2 × AAA): `nightjar.stl` is `nightjar_v5_assembled.stl` decimated by `scripts/decimate_stl.py` (cell 1.8 mm), `nightjar_button.stl` is the button peg (cell 0.6 mm), `nightjar_internals.stl` is copied as is (shown in "Inside") |
| Bird silhouette | `src/assets/nightjar-silhouette.svg`, traced from the model by `scripts/silhouette.py` |
| Sound | `public/audio/lelek_churr.mp3` (synthesised sample) |
