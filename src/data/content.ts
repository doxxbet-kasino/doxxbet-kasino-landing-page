/**
 * Všetky texty stránky. Nastavenia webu (logo, kontakt…) sú v site.ts.
 */

export const seo = {
  titulok: 'Vyhraj ročnú rentu | DOXXbet Casino Zelená Voda',
  popis:
    'Staňte sa členom DOXXbet, získajte hráčsku kartu a zapojte sa do žrebovania o ročnú rentu.',
};

export const hero = {
  nadpisRiadok1: 'Vyhraj',
  nadpisRiadok2: 'ročnú rentu',
  textPred: 'Staňte sa členom DOXXbet,',
  textPo: ' získajte hráčsku kartu a zapojte sa do žrebovania o ročnú rentu.',
  cta: 'Vstúpiť do hry',
};

export const registracia = {
  nadpisPred: 'Hráčsku kartu vybavíte',
  nadpisAkcent: 'priamo u nás',
  popis: 'Registrácia prebieha na prevádzke. Náš personál vám pomôže so všetkým potrebným, aby ste mohli začať zbierať výhody hneď pri prvej návšteve.',
  kroky: [
    {
      cislo: '01',
      titulok: 'Príďte na prevádzku',
      text: 'Navštívte DOXXbet Casino Zelená Voda — sme otvorení nonstop.',
    },
    {
      cislo: '02',
      titulok: 'Zaregistrujte sa',
      text: 'Personál vám vysvetlí registráciu a vydá vašu osobnú hráčsku kartu.',
    },
    {
      cislo: '03',
      titulok: 'Zbierajte výhody',
      text: 'Využite welcome bonus, cashback, promo tikety a postupujte na vyššie úrovne.',
    },
  ],
  cta: 'Naplánovať návštevu',
};

export const balicky = {
  nadpisPred: 'Vyber si svoj štartovací balík',
  nadpisPo: 'a získavaj výhody pri každej návšteve',
  popis: 'Každý bonus je rozdelený do 10 častí. Vyber si balík a pozri si kompletný rozpis.',
  polozky: [
    {
      suma: '125 €',
      obrazok: '/images/balik-125-tabulka.webp',
      alt: 'Rozpis promo tiketov pre štartovací balík 125 €',
    },
    {
      suma: '500 €',
      obrazok: '/images/balik-500-tabulka.webp',
      alt: 'Rozpis promo tiketov pre štartovací balík 500 €',
    },
    {
      suma: '1 000 €',
      obrazok: '/images/balik-1000-tabulka.webp',
      alt: 'Rozpis promo tiketov pre štartovací balík 1 000 €',
    },
  ],
};

export const vyhody = {
  nadpisPred: 'S hráčskou kartou',
  nadpisAkcent: 'získavate viac',
  cta: 'Zaregistrovať sa na prevádzke',
  polozky: [
    {
      ikona: '/images/icon-cashback.png',
      titulok: 'CASHBACK',
      text: 'Časť pretočených stávok získavaš naspäť vo forme cashbacku. Čím vyšší level dosiahneš, tým lepší pomer cashbacku máš.',
    },
    {
      ikona: '/images/icon-urovne.png',
      titulok: '4 ÚROVNE VÝHOD',
      text: 'Black, Silver, Gold a Diamond. Každá úroveň prináša lepšie občerstvenie zdarma a vyššie bonusy.',
    },
    {
      ikona: '/images/icon-tiket.png',
      titulok: 'PROMO TIKETY',
      text: 'Vložíš sumu a kasíno ti pridá bonus navyše. Napr. vložíš 10 € a hráš za 20 €. Plus mystery boxy, trezory a koleso šťastia.',
    },
  ],
};

export const urovne = {
  nadpisPred: 'Stúpaj vyššie.',
  nadpisAkcent: 'Získavaj viac.',
  popis: 'Každý level prináša lepšie výhody a odomyká exkluzívny servis.',
  kroky: [
    { rimske: 'I', podmienka: 'Bez podmienky' },
    { rimske: 'II', podmienka: 'Po získaní 250 bodov' },
    { rimske: 'III', podmienka: 'Po získaní 1 500 bodov' },
    { rimske: 'IV', podmienka: 'Po získaní 5 000 bodov' },
  ],
  karty: [
    {
      nazov: 'Black',
      obcerstvenie: 'Grapos nealko + káva zdarma',
      vyhody:
        'Štartovacia úroveň pre všetkých registrovaných členov. Welcome bonus, základný cashback a prístup k Promo Tiketom.',
    },
    {
      nazov: 'Silver',
      obcerstvenie:
        'Grapos nealko + káva zdarma, na výber: Pilsner, víno, Nicolaus vodka, Borec borovička, Captain Morgan',
      vyhody: 'Zvýšený cashback, lepšie Promo Tikety a exkluzívne akcie dostupné len pre Silver členov.',
    },
    {
      nazov: 'Gold',
      obcerstvenie:
        'Grapos nealko + káva zdarma, na výber: Pilsner, víno, Nicolaus vodka, Borec borovička, Captain Morgan + 1× Marlboro',
      vyhody: 'Prémiový cashback, najvyššie Promo Tikety a prioritný servis. Pre tých, čo to myslia vážne.',
    },
    {
      nazov: 'Diamond',
      obcerstvenie: 'Nealko, káva, alkohol All Inclusive + 2× Marlboro',
      vyhody:
        'Najvyšší level. Maximálny cashback, exkluzívne benefity, osobný prístup a kompletné prémiové občerstvenie.',
    },
  ],
};

export const prvykrat = {
  nadpis: 'Bez obáv!',
  akcent: 'Ešte nemáte hráčsku kartu?',
  text: 'Stačí prísť na prevádzku. Náš personál vám vysvetlí registráciu, vybaví hráčsku kartu a prevedie vás prvými výhodami vernostného programu.',
};

export const podmienky = {
  nadpis: 'Podmienky programu',
  akcent: 'Transparentné',
  polozky: [
    {
      otazka: 'Základné podmienky vernostného programu',
      odpoved:
        'Akcia platí od 1. 3. 2026 do odvolania pre všetkých zákazníkov DOXXbet Casina Zelená Voda, ktorí sa zaregistrujú do vernostného programu. Pre čerpanie výhod a zbieranie bodov musí byť klient zaregistrovaný a zároveň overený voči RVO. Táto akcia sa riadi herným plánom DOXXbet Casina. DOXXbet Casino Zelená Voda si vyhradzuje právo upraviť podmienky vernostného programu alebo vylúčiť hráčov pri podozrení na zneužitie a zároveň zamedziť vstup do kasína.',
    },
    {
      otazka: 'Podmienky vernostnej karty',
      odpoved:
        'Vernostná karta je neprenosná a viazaná na meno hráča. Prvý výber z vernostnej karty je stanovený na 50 €, každý ďalší výber musí byť v hodnote minimálne 10 €. Výber je vždy vo forme promo tiketu — získaný promo kredit je potrebné minimálne 1× pretočiť. Pri strate karty je možné ju operatívne nahradiť.',
    },
    {
      otazka: 'Podmienky cashbacku',
      odpoved:
        'Pre vyplatenie cashbacku musí hráč potvrdiť výber PIN kódom zaslaným cez SMS. Prvý výber cashbacku je minimálne 50 bodov, každý ďalší výber je min. 10 bodov. Výber cashbacku je možný len v násobkoch desiatich.',
    },
    {
      otazka: 'Podmienky promo tiketov',
      odpoved:
        'Promo tikety podliehajú vloženiu danej sumy od hráča, ktorú kasíno dorovná. Napríklad: 10 €/20 € promo tiket znamená, že vložíš 10 € a kasíno ti pridá 10 €, spolu tak máš promo tiket v hodnote 20 €. Promo tikety možno použiť iba na výherné prístroje a videolotérie. Kredit promo tiketu je potrebné minimálne 1× pretočiť. Podmienkou získania je predloženie občianskeho preukazu a podpísanie pokladničného dokladu.',
    },
  ],
};

export const kontakt = {
  nadpisPred: 'Príďte sa zaregistrovať',
  nadpisAkcent: 'ešte dnes',
  text: 'Hráčsku kartu aj welcome bonus vybavíte priamo na prevádzke DOXXbet Casino Zelená Voda.',
  ctaMapa: 'Zobraziť trasu',
};

export const footer = {
  text: 'Vstup od 18 rokov. Hrajte zodpovedne.',
};
