export const triadInfo = {
  title: "De drie Triaden - Actie, Gevoel en Denken",
  description: "Het Enneagram is verdeeld in drie centra of triaden die beschrijven hoe verschillende types de wereld primair ervaren en erop reageren.",

  triads: {
    body: {
      title: "Actie-Triade (Lichaamscentrum)",
      types: ["Type 8", "Type 9", "Type 1"],
      description: "Types in de Actie-Triade reageren primair door instinct en lichaamsgewaarwordingen. Ze zijn bezig met controle, autonomie en het beïnvloeden van hun omgeving.",
      color: "red",
      icon: "👊",
      characteristics: [
        "Reageert eerst via onderbuikgevoelens en instincten",
        "Focust op macht, controle en grenzen",
        "Drukt vaak woede of irritatie uit",
        "Heeft de behoefte zich autonoom te voelen en invloed te hebben"
      ]
    },

    heart: {
      title: "Gevoels-Triade (Hartcentrum)",
      types: ["Type 2", "Type 3", "Type 4"],
      description: "Types in de Gevoels-Triade reageren primair door emoties en relaties. Ze zijn bezig met identiteit, imago en hoe ze door anderen worden gezien.",
      color: "green",
      icon: "❤️",
      characteristics: [
        "Reageert eerst via gevoelens en emoties",
        "Focust op imago, identiteit en erkenning",
        "Drukt vaak schaamte of gevoelens van ontoereikendheid uit",
        "Heeft de behoefte zich gewaardeerd en gezien te voelen door anderen"
      ]
    },

    head: {
      title: "Denk-Triade (Hoofdcentrum)",
      types: ["Type 5", "Type 6", "Type 7"],
      description: "Types in de Denk-Triade reageren primair door analyse en mentale verwerking. Ze zijn bezig met veiligheid, planning en het begrijpen van de wereld.",
      color: "blue",
      icon: "🧠",
      characteristics: [
        "Reageert eerst via gedachten en analyse",
        "Focust op veiligheid, kennis en toekomstplannen",
        "Drukt vaak angst of bezorgdheid uit",
        "Heeft de behoefte zich voorbereid en veilig te voelen"
      ]
    }
  }
};

export const stressGrowthLines = {
  title: "Stress en Groei - Jouw ontwikkelingslijnen",
  description: "Elk type heeft twee lijnen die richtingen voor Stress (Wrijving) en Groei (Bevrijding) aangeven. Deze lijnen zijn belangrijk voor persoonlijke ontwikkeling.",

  lines: {
    "Type 1": {
      stress: {
        movesTo: "Type 4",
        description: "Onder stress kunnen 1'en emotioneler, meer op zichzelf gericht en kritischer worden – net als Type 4. Ze kunnen hun objectiviteit verliezen en verstrikt raken in zelfmedelijden.",
        warning: "Pas op dat perfectionisme niet omslaat in zelfkritiek en depressie."
      },
      growth: {
        movesTo: "Type 7",
        description: "In groei leren 1'en spontaner, optimistischer en accepterender te zijn – net als Type 7. Ze vinden plezier in het proces en niet alleen in het resultaat.",
        opportunity: "Omarm spontaniteit en sta jezelf toe om plezier te hebben zonder schuldgevoelens."
      }
    },

    "Type 2": {
      stress: {
        movesTo: "Type 8",
        description: "Onder stress kunnen 2'en agressief, dominant en confronterend worden – net als Type 8. Ze kunnen degenen die ze hebben geholpen 'straffen' wanneer ze zich niet gewaardeerd voelen.",
        warning: "Pas op dat je behulpzaamheid niet omslaat in controle en manipulatie."
      },
      growth: {
        movesTo: "Type 4",
        description: "In groei leren 2'en meer in contact te zijn met hun eigen gevoelens en behoeften – net als Type 4. Ze vinden hun eigen identiteit buiten de goedkeuring van anderen.",
        opportunity: "Sta jezelf toe om je eigen behoeften eerlijk te voelen en uit te drukken."
      }
    },

    "Type 3": {
      stress: {
        movesTo: "Type 9",
        description: "Onder stress kunnen 3'en passief, ongeïnteresseerd worden en hun drive verliezen – net als Type 9. Ze kunnen in onverschilligheid vervallen en conflicten vermijden.",
        warning: "Pas op dat je drukte niet omslaat in leegte en gebrek aan richting."
      },
      growth: {
        movesTo: "Type 6",
        description: "In groei leren 3'en loyaler, verantwoordelijker en verbonden met de gemeenschap te zijn – net als Type 6. Ze waarderen diepere relaties boven imago.",
        opportunity: "Vind veiligheid in authentiek zijn in plaats van een imago in stand te houden."
      }
    },

    "Type 4": {
      stress: {
        movesTo: "Type 2",
        description: "Onder stress kunnen 4'en vastklampend, afhankelijk en over-behulpzaam worden – net als Type 2. Ze kunnen het contact met hun authentieke zelf verliezen.",
        warning: "Pas op dat je zoektocht naar verbinding niet omslaat in afhankelijkheid."
      },
      growth: {
        movesTo: "Type 1",
        description: "In groei leren 4'en gedisciplineerder, objectiever en actie-gerichter te zijn – net als Type 1. Ze vinden balans tussen emoties en structuur.",
        opportunity: "Gebruik je creativiteit constructief met discipline en structuur."
      }
    },

    "Type 5": {
      stress: {
        movesTo: "Type 7",
        description: "Onder stress kunnen 5'en verstrooid, impulsief en overprikkeld worden – net als Type 7. Ze kunnen van project naar project springen zonder de diepte in te gaan.",
        warning: "Pas op dat je terugtrekking geen vlucht uit de realiteit wordt."
      },
      growth: {
        movesTo: "Type 8",
        description: "In groei leren 5'en zelfverzekerder, daadkrachtiger en deelnemender te zijn – net als Type 8. Ze treden naar voren en delen hun kennis actief.",
        opportunity: "Deel je kennis genereus en neem je ruimte in de wereld in."
      }
    },

    "Type 6": {
      stress: {
        movesTo: "Type 3",
        description: "Onder stress kunnen 6'en competitief, workaholics en imago-bewust worden – net als Type 3. Ze kunnen het contact met hun authentieke zorgen verliezen.",
        warning: "Pas op dat je zoektocht naar veiligheid niet omslaat in overmatige drukte."
      },
      growth: {
        movesTo: "Type 9",
        description: "In groei leren 6'en rustiger, meer vertrouwend en accepterend te zijn – net als Type 9. Ze vinden innerlijke rust en vertrouwen het proces.",
        opportunity: "Vertrouw op jezelf en de wereld – niet alles hoeft gecontroleerd te worden."
      }
    },

    "Type 7": {
      stress: {
        movesTo: "Type 1",
        description: "Onder stress kunnen 7'en kritisch, perfectionistisch en rigide worden – net als Type 1. Ze kunnen hun spontaniteit verliezen en veroordelend worden.",
        warning: "Pas op dat je optimisme geen onverwerkte pijnlijke gevoelens verbergt."
      },
      growth: {
        movesTo: "Type 5",
        description: "In groei leren 7'en meer gefocust, diepgaander en meer aanwezig te zijn – net als Type 5. Ze vinden voldoening in diepte in plaats van in breedte.",
        opportunity: "Duik diep in plaats van over de oppervlakte van het leven te scheren."
      }
    },

    "Type 8": {
      stress: {
        movesTo: "Type 5",
        description: "Onder stress kunnen 8'en geïsoleerd, afwijzend en overmatig privé worden – net als Type 5. Ze trekken zich terug uit contact en worden gesloten.",
        warning: "Pas op dat je kracht niet omslaat in isolatie van anderen."
      },
      growth: {
        movesTo: "Type 2",
        description: "In groei leren 8'en empathischer, kwetsbaarder en zorgzamer te zijn – net als Type 2. Ze openen hun harten en tonen zachtheid.",
        opportunity: "Toon je zachtheid en kwetsbaarheid – dat is ware kracht."
      }
    },

    "Type 9": {
      stress: {
        movesTo: "Type 6",
        description: "Onder stress kunnen 9'en bezorgd, angstig en besluiteloos worden – net als Type 6. Ze kunnen hun innerlijke rust verliezen en overweldigd worden door twijfel.",
        warning: "Pas op dat je vredelievendheid niet omslaat in conflictvermijding."
      },
      growth: {
        movesTo: "Type 3",
        description: "In groei leren 9'en daadkrachtiger, doelgerichter en zelfverzekerder te zijn – net als Type 3. Ze vinden hun eigen stem en ondernemen actie.",
        opportunity: "Zet jezelf op de eerste plaats en onderneem actieve stappen naar je doelen."
      }
    }
  }
};

export const basicFearsInfo = {
  title: "Basisangsten - Wat drijft jouw type?",
  description: "Elk Enneagram-type heeft een diepgewortelde basisangst die hun wereldbeeld en gedrag vormt. Het begrijpen van deze angst is de sleutel tot persoonlijke ontwikkeling.",
  source: "The Wisdom of the Enneagram - Don Richard Riso & Russ Hudson",

  fears: {
    "Type 1": {
      icon: "🔢",
      name: "De Perfectionist",
      fear: "Slecht, corrupt, kwaadaardig of gebrekkig te zijn.",
      description: "De Perfectionist vreest ten diepste moreel fout of onvolmaakt te zijn. Om dit te compenseren, streven ze ernaar deugdzaam, verantwoordelijk en ethisch te zijn. Ze projecteren hun angst vaak naar buiten door fouten bij anderen aan te wijzen en aan te dringen op hoge standaarden."
    },
    "Type 2": {
      icon: "💞",
      name: "De Helper",
      fear: "Ongeliefd of ongewenst te zijn.",
      description: "De Helper vreest dat ze niet de moeite waard zijn om van te houden, tenzij ze zichzelf onmisbaar maken. Ze proberen daarom liefde te verkrijgen door aan de behoeften van anderen te voldoen, maar kunnen uiteindelijk anderen van hen afhankelijk maken en zich verbitterd voelen als ze de gewenste wederliefde niet ontvangen."
    },
    "Type 3": {
      icon: "🏆",
      name: "De Presteerder",
      fear: "Waardeloos of zonder intrinsieke waarde te zijn.",
      description: "De Presteerder vreest dat ze alleen iets waard zijn als ze presteren en succes behalen. Ze zoeken daarom constant naar erkenning en bewondering, maar lopen het risico het contact met hun authentieke zelf te verliezen en zich leeg te voelen achter de façade."
    },
    "Type 4": {
      icon: "🎭",
      name: "De Individualist",
      fear: "Zonder identiteit of persoonlijke betekenis te zijn.",
      description: "De Individualist vreest gewoon of onzichtbaar te zijn. Ze streven ernaar uniek en authentiek te zijn, maar kunnen zich tegelijkertijd misverstaan en geïsoleerd voelen. Ze kunnen anderen kleineren om hun eigen uniciteit te bevestigen."
    },
    "Type 5": {
      icon: "🧠",
      name: "De Waarnemer",
      fear: "Nutteloos, incompetent of hulpeloos te zijn.",
      description: "De Waarnemer vreest overweldigd te worden door de wereld en trekt zich daarom terug om controle te behouden. Ze zoeken kennis en begrip als een manier om zich competent te voelen, maar kunnen emotioneel afstandelijk overkomen."
    },
    "Type 6": {
      icon: "🛡️",
      name: "De Loyalist",
      fear: "Zonder steun en begeleiding te zijn.",
      description: "De Loyalist vreest alleen te staan en zonder veiligheid. Ze zoeken zekerheid door loyaliteit en voorbereiding, maar kunnen wantrouwig en overafhankelijk van autoriteiten worden. Ironisch genoeg kan hun zoektocht naar veiligheid tot het tegenovergestelde leiden."
    },
    "Type 7": {
      icon: "🎉",
      name: "De Avonturier",
      fear: "Gevangen te raken in pijn of gemis.",
      description: "De Avonturier vreest emotionele pijn en verveling. Ze zoeken constant nieuwe ervaringen en geneugten om ongemak te vermijden. Dit kan leiden tot oppervlakkigheid en een onvermogen om zich te binden, wat uiteindelijk de leegte kan creëren die ze proberen te vermijden."
    },
    "Type 8": {
      icon: "💪",
      name: "De Uitdager",
      fear: "Gecontroleerd of gekwetst te worden door anderen.",
      description: "De Uitdager vreest kwetsbaarheid en zwakte. Ze zoeken macht en controle om zichzelf te beschermen, maar kunnen dominant en intimiderend overkomen. Hun angst om gecontroleerd te worden, kan ertoe leiden dat ze anderen controleren."
    },
    "Type 9": {
      icon: "☮️",
      name: "De Vredestichter",
      fear: "Verbinding te verliezen of gefragmenteerd te worden.",
      description: "De Vredestichter vreest conflict en scheiding. Ze zoeken harmonie en vermijden confrontatie, maar kunnen zichzelf verliezen in de poging de vrede te bewaren. Hun strategie van 'uitchecken' kan anderen het gevoel geven dat ze over het hoofd worden gezien of afgewezen."
    }
  }
};

export const basicDesiresInfo = {
  title: "Basisverlangens - Wat zoekt jouw type?",
  description: "De basisverlangens ontstaan als een compensatie voor de basisangst. Ze fungeren als een innerlijke drijfveer, maar het nastreven van het verlangen via de strategieën van het ego kan paradoxaal genoeg de angst versterken.",

  dynamicExplanation: "Hoe meer we proberen ons basisverlangen te bereiken via de strategieën van het ego, hoe meer we onze angst activeren – omdat deze strategieën niet aan onze diepste behoeften kunnen voldoen.\n\nMet andere woorden: We verlangen allemaal naar iets – zoals ons geliefd, veilig of waardevol voelen. Maar wanneer we proberen dit te bereiken door een bepaalde rol te spelen of op een bepaalde manier ons best te doen, werkt het niet helemaal. En hoe meer we proberen, hoe banger we worden om niet te krijgen wat we echt nodig hebben.",

  desires: {
    "Type 1": {
      icon: "🔢",
      name: "De Perfectionist",
      desire: "Goed, deugdzaam en in orde te zijn – moreel correct en geïntegreerd te zijn.",
      dynamic: "Zoekt perfectie om schuld en schaamte te vermijden"
    },
    "Type 2": {
      icon: "💞",
      name: "De Helper",
      desire: "Zich geliefd te voelen – gewenst en gewaardeerd te worden om wie men is.",
      dynamic: "Geeft om geliefd te worden, maar kan zichzelf verliezen"
    },
    "Type 3": {
      icon: "🏆",
      name: "De Presteerder",
      desire: "Zich waardevol te voelen – succesvol en erkend te zijn.",
      dynamic: "Presteert om zich waardevol te voelen, maar verliest authenticiteit"
    },
    "Type 4": {
      icon: "🎭",
      name: "De Individualist",
      desire: "Zichzelf en zijn betekenis te vinden – uniek en authentiek te zijn.",
      dynamic: "Zoekt uniciteit, maar voelt zich vaak misverstaan"
    },
    "Type 5": {
      icon: "🧠",
      name: "De Waarnemer",
      desire: "Competent en capabel te zijn – de wereld te begrijpen en te beheersen.",
      dynamic: "Trekt zich terug om controle en kennis te behouden"
    },
    "Type 6": {
      icon: "🛡️",
      name: "De Loyalist",
      desire: "Zich veilig en ondersteund te voelen – zekerheid en begeleiding te hebben.",
      dynamic: "Zoekt veiligheid, maar creëert vaak onzekerheid"
    },
    "Type 7": {
      icon: "🎉",
      name: "De Avonturier",
      desire: "Tevreden en gelukkig te zijn – vreugde te ervaren en pijn te vermijden.",
      dynamic: "Vermijdt pijn door afleiding en oppervlakkigheid"
    },
    "Type 8": {
      icon: "💪",
      name: "De Uitdager",
      desire: "Onafhankelijk en in controle te zijn – zichzelf en de zijnen te beschermen.",
      dynamic: "Domineert om kwetsbaarheid te vermijden"
    },
    "Type 9": {
      icon: "☮️",
      name: "De Vredestichter",
      desire: "Innerlijke stabiliteit en gemoedsrust te hebben – zich verbonden te voelen.",
      dynamic: "Vermijdt conflicten, maar verliest zichzelf"
    }
  }
};

export const getTriadForType = (type: string): keyof typeof triadInfo.triads | null => {
  if (["Type 8", "Type 9", "Type 1"].includes(type)) return "body";
  if (["Type 2", "Type 3", "Type 4"].includes(type)) return "heart";
  if (["Type 5", "Type 6", "Type 7"].includes(type)) return "head";
  return null;
};
