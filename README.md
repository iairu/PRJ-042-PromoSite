# NightJar.Gift promo site (ST-017-PromoSite)

Presentation website for **NightJar** (LeLeK in Slovak), a CNC-carved wooden nightjar that listens while you hold the button on its back and sings when you whistle. By Ondrej Špánik and Aymeric Portal, FIIT STU, SMVIT/STHDF 2026/27.
Built with [Astro](https://astro.build) (static output), [three.js](https://threejs.org) for the 3D model and
[Pagefind](https://pagefind.app) for full-text search. No tracking, no external requests: fonts are self-hosted.

Pages: Home, The Bird, Electronics, Parts, Roadmap, Pre-order (disabled), About, in English (`/en/`) and Slovak (`/sk/`). Press **Ctrl+K** (or **/**) anywhere to search.

## Project state (November 2026 presentation)

- **3D print:** body printed at 1.2x real size, with a USB charging and data hole, power button peg, and speaker and microphone holes.
- **ESP32-S3 setup:** Seeed XIAO ESP32-S3, microphone, amplifier, resistors, speaker and button on a breadboard. More expensive due to logistics.
- **micro:bit V2 setup:** uses the on-board microphone, speaker, power button, USB and battery connector; other components unused. Logistically cheaper, and the path the bird follows.
- **Carving:** done by SmartLab employees on their CNC, from our own spruce (OBI/Hornbach). Planned finish: walnut thin-layer glaze with linseed oil and wax.

## Languages

- Pages live in `src/pages/[lang]/` and are built for `en` and `sk`; all copy is in `src/i18n/en.js` and `src/i18n/sk.js` (same shape, checked by `npm run check:i18n`, which `npm run build` runs first). Prices, numbers, links and image names are language-neutral and stay in `src/data/site.js`.
- The root `/` and the old un-prefixed URLs (`/parts/`, ...) are redirect pages: the choice made with the header switcher wins, otherwise a browser whose first language is Czech or Slovak goes to `/sk/` and everyone else to `/en/`. The switcher keeps the `#section`.
- Name: **NightJar.Gift** (short: NightJar) in English; **LeLeK (NightJar.Gift)** in Slovak. Change `site.name`, `brand` and `brandSub` in the language files.
- Adding a language: copy `en.js`, translate, register it in `src/i18n/index.js` (`dicts`, `langs`) and in the `[lang]` pages' `getStaticPaths` and `Redirect.astro`.

## Run

```bash
npm install
npm run dev        # dev server; Ctrl+K lists pages and sections only
npm run build      # astro build, heading anchors, Pagefind index -> dist/
npm run preview    # serve dist/ with full-text search
```

Needs Node 20+. Deployed at <https://nightjar.gift>; documentation (KNIFES) lives at <https://knifes.nightjar.gift>. Optional build variables: `SITE_URL` (canonical/OG URLs, default nightjar.gift) and `BASE_PATH` (deploy under a sub-path).
`dist/` is plain static files and can go to any host (Vercel, Netlify, GitHub Pages, nginx).

## Where things live

| What | Where |
|---|---|
| Numbers, prices, links, milestone dates, menu structure | `src/data/site.js` |
| All visible text (both languages) | `src/i18n/en.js`, `src/i18n/sk.js` |
| Pre-order switch | `PREORDER_OPEN` in `src/data/site.js` (form is rendered disabled) |
| Pages | `src/pages/*.astro` |
| Search palette | `src/components/Search.astro` |
| 3D viewer | `src/components/ModelViewer.astro` (lazy-loaded) |
| Images | `public/img/*.webp` (breadboard, schematic, PCBs from `ST-017-MOTHERBOARD/docs`; wireframes cropped from `enclosure/Nightjar_build_guide.pdf`) |
| Logo | `logo/` (sources, black and white); the header uses the copies in `public/img/logo/`: black in the light theme, white in the dark one |
| Prototype and workshop photos | `public/img/proto-*.webp`, `print-features.webp`, `cnc-smartlab.webp`, cropped from the November 2026 presentation |
| 3D model | `public/models/*.stl`: `nightjar.stl` decimated from `enclosure/stl_v2/nightjar_v2_assembled.stl` by `scripts/decimate_stl.py` (cell 1.8 mm); `nightjar_button.stl` and `nightjar_internals.stl` (shown in Blueprint) copied as is |
| Bird silhouette | `src/assets/nightjar-silhouette.svg`, traced from the model by `scripts/silhouette.py` |
| Sound | `public/audio/lelek_churr.mp3` (synthesised placeholder from the board repo) |

## Updating content

Prices and statuses come from `ST-017-MOTHERBOARD/docs/v7_parts.md`, `v8_parts.md` and `wood-selection/`. When those change,
edit `src/data/site.js` (`bom`, `fuse`, `wood`, `milestones`, `statusStates`) for numbers and the language files for wording, and rebuild. Keep the "prototype in progress" wording until a wooden bird exists.
