// English copy. Slovak lives in sk.js with exactly the same shape (scripts/check-i18n.mjs
// fails the build if the two drift apart). Placeholders look like {name}; see fill() in index.js.
// Links, section ids and image names are in src/data/site.js.
export default {
  lang: 'en',
  htmlLang: 'en',
  ogLocale: 'en_GB',

  site: {
    name: 'Nightjar Gift', // brand in titles and metadata
    brand: 'Nightjar Gift', // brand in the footer and breadcrumbs
    brandTail: '', // optional light-weight text directly after the brand in the footer
    tagline: 'A wooden bird that sings back when you whistle.',
    description:
      'Nightjar Gift Project: a wooden bird with a micro:bit inside. Press the button on top, whistle, and the bird sings back. Limited orders by email.',
    course: 'STHDF',
    updated: '27 November 2026',
  },

  ui: {
    skip: 'Skip to content',
    mainNav: 'Main',
    homeAria: 'Nightjar Gift, home',
    theme: 'Toggle light and dark theme',
    toLight: 'Switch to light theme',
    toDark: 'Switch to dark theme',
    lightTitle: 'Light theme',
    darkTitle: 'Dark theme',
    menu: 'Menu',
    language: 'Language',
    langName: { en: 'English', sk: 'Slovenčina' },
    status: { done: 'Done', wip: 'In progress' },
    birdAria: 'Silhouette of the nightjar, seen from the side',
    hero: {
      eyebrowSuffix: 'lelek lesný',
      title: 'Whistle to it, and it <em>sings back.</em>',
      lead: 'Hello, and welcome to our Nightjar Gift Project: a wooden bird with a micro:bit controller inside that listens for your whistle and sings back to you.',
      hold: 'Hold to hear a sample',
      singing: 'Singing…',
      order: 'Order by email',
      how: 'How it works',
    },
    model: {
      aria: 'Interactive 3D model of the nightjar. Drag to rotate, scroll or pinch to zoom.',
      noscriptAlt: 'Wireframe of the bird',
      loading: 'Loading the 3D model…',
      noWebgl: 'The 3D view needs WebGL.',
      failed: 'Could not load the 3D model.',
      group: 'Model display',
      wood: 'Wood',
      blueprint: 'Inside',
      spin: 'Spin',
      tip: 'Drag to turn · scroll to zoom',
    },
    footer: {
      about: 'A wooden bird that sings back when you whistle. Made by two students of the STHDF lecture, FIIT STU, Bratislava.',
      docs: 'Documentation (KNIFES)',
      orders: 'Orders',
      legal: '© {year} · {id} · {course}, {academicYear}. Text and documentation under {licence}.',
      updated: 'Last updated {updated}.',
      top: 'Back to top ↑',
    },
  },

  nav: [
    { label: 'About' },
    { label: 'How it works' },
    { label: 'Documentation' },
    { label: '3D model' },
    { label: 'Roadmap' },
    { label: 'Order' },
  ],

  docs: [
    {
      title: 'ESP32-S3 breadboard prototype',
      text: 'How the first prototype of the circuit was set up on a breadboard with an ESP32-S3 controller.',
      alt: 'The ESP32-S3 prototype on a breadboard',
    },
    {
      title: 'micro:bit V2 and its firmware',
      text: 'How the micro:bit V2 controller is used in the bird and how the firmware is uploaded to it.',
      alt: 'The micro:bit V2 prototype',
    },
    {
      title: 'Carving the bird on a CNC',
      text: 'How a CNC machine carves the final bird into a piece of wood.',
      alt: 'The CNC machine used to carve the bird',
    },
  ],

  roadmap: [
    {
      when: 'September – November 2026',
      title: 'Electronics, parts, first 3D models, CNC consultations',
      text: 'The electronics were designed and the parts obtained. The first versions of the 3D model were made to fit the original components, and the CNC work was consulted.',
    },
    {
      when: 'First half of December 2026',
      title: 'Assembly in a 3D-printed bird and the final presentation',
      text: 'The electronics were assembled inside a 3D-printed model of the bird, and the project was presented.',
    },
    {
      when: 'December 2026',
      title: 'CNC carving',
      text: 'Carving the bird into wood on a CNC is the last step and concludes in December 2026.',
    },
  ],

  p: {
    home: {
      about: {
        eyebrow: 'About',
        title: 'The Nightjar Gift Project',
        text: [
          'The Nightjar Gift Project was developed by two students of the STHDF lecture as part of their studies at FIIT STU in Bratislava, Slovakia.',
          'The result is a wooden bird with a micro:bit controller inside. It listens for whistles, and when it hears one, the bird sings.',
        ],
      },
      how: {
        eyebrow: 'How it works',
        title: 'Press, whistle, listen',
        steps: [
          { title: 'Press the button', text: 'Press the button on top of the bird. This opens a one-minute window in which the bird listens.' },
          { title: 'Whistle', text: 'Whistle at the bird during that minute, and it sings back to you.' },
          { title: 'Press again for more time', text: 'Press the button again at any time to restart the window to a whole minute.' },
          { title: 'It powers off by itself', text: 'When a minute passes without a button press, the bird powers off. Press the button to turn it on again at any time, as long as the batteries still hold charge.' },
        ],
        battery: 'Power: 2 × AAA batteries, replaceable by the owner.',
      },
      why: {
        eyebrow: 'Why micro:bit',
        title: 'Cheaper and easier to get',
        text: 'We chose the micro:bit controller because it is cheaper and logistically easier to obtain than the ESP32 used in the earlier prototype. That prototype needed parts from three separate e-shops, which made getting them a logistical challenge.',
      },
      docs: {
        eyebrow: 'Documentation',
        title: 'The whole process is documented',
        lead: 'Each step is written up in our documentation (KNIFES).',
        read: 'Read',
        all: 'All documentation',
      },
      model: {
        eyebrow: '3D model',
        title: 'Have a look at the bird',
        lead: 'A preview of the 3D model of the bird. Switch to “Inside” to see where the electronics sit.',
      },
      roadmap: {
        eyebrow: 'Roadmap',
        title: 'Where the project stands',
      },
      order: {
        eyebrow: 'Order',
        title: 'Limited orders by email',
        lead: 'We currently only take limited orders by email. Thank you very much for your interest.',
        button: 'Email us',
        subject: 'Nightjar order',
      },
    },

    notFound: {
      title: 'Not found',
      crumb: '404',
      eyebrow: 'Lost in the heath',
      heading: 'Nothing here <em>but the night.</em>',
      lead: 'That page does not exist. Go back to the start.',
      back: 'Back to the bird',
    },
  },
};
