/**
 * Nastavenia projektu — jediné miesto, kde sa mení identita webu.
 * Texty sekcií sa upravujú v content.ts.
 */
export const site = {
  /** Názov firmy — používa sa v title, og:site_name a JSON-LD */
  nazovFirmy: 'DOXXbet Casino Zelená Voda',

  /** Jazyk stránky a og:locale */
  jazyk: 'sk',
  ogLocale: 'sk_SK',

  /**
   * Google Tag Manager ID (napr. 'GTM-XXXXXXX').
   * Ak zostane prázdny reťazec, GTM sa do stránky vôbec nevloží.
   */
  gtmId: '',

  /**
   * Google Analytics 4 measurement ID (napr. 'G-XXXXXXXXXX').
   * Ak zostane prázdny reťazec, GA4 sa do stránky vôbec nevloží.
   */
  ga4Id: 'G-LWWT8Z21BV',

  logo: {
    src: '/images/logo.webp',
    alt: 'DOXXbet Casino – logo',
    width: 129,
    height: 70,
  },

  favicon: '/images/favicon.png',

  /** Obrázok pre og:image (zdieľanie na sociálnych sieťach) */
  ogImage: {
    src: '/images/hero-bg.webp',
    width: 1920,
    height: 1280,
  },

  kontakt: {
    email: 'casinozelenavoda@gmail.com',
    telefony: ['+421 917 839 408'],
    /** Telefón v medzinárodnom formáte pre JSON-LD */
    telefonJsonLd: '+421917839408',
    adresa: 'Zelená Voda, 916 38 Beckov',
    otvaracieHodiny: 'Otvorené NONSTOP',
    mapaUrl: 'https://maps.app.goo.gl/RvDG5NYDWNGNo8Qw8',
  },

  /**
   * Údaje pre štruktúrované dáta (JSON-LD) na hlavnej stránke.
   * Typ firmy: https://schema.org/LocalBusiness a podtypy
   */
  jsonLd: {
    typFirmy: 'Casino',
    adresa: {
      ulica: 'Zelená Voda',
      mesto: 'Beckov',
      psc: '916 38',
      krajina: 'SK',
    },
    oblastPosobenia: 'Slovensko',
  },
};
