export const triadInfo = {
  title: "De tre Triaderna - Handling, Känsla och Tanke",
  description: "Enneagrammet är uppdelat i tre centra eller triader som beskriver hur olika typer primärt upplever och reagerar på världen.",

  triads: {
    body: {
      title: "Handlingstriaden (Kroppscentret)",
      types: ["Type 8", "Type 9", "Type 1"],
      description: "Typer i Handlingstriaden reagerar primärt genom instinkt och kroppsförnimmelser. De är upptagna av kontroll, autonomi och att påverka sin omgivning.",
      color: "red",
      icon: "👊",
      characteristics: [
        "Reagerar först genom magkänsla och instinkter",
        "Fokuserar på makt, kontroll och gränser",
        "Uttrycker ofta ilska eller irritation",
        "Behöver känna sig autonoma och ha inflytande"
      ]
    },

    heart: {
      title: "Känslotriaden (Hjärtcentret)",
      types: ["Type 2", "Type 3", "Type 4"],
      description: "Typer i Känslotriaden reagerar primärt genom känslor och relationer. De är upptagna av identitet, image och hur de ses av andra.",
      color: "green",
      icon: "❤️",
      characteristics: [
        "Reagerar först genom känslor och emotioner",
        "Fokuserar på image, identitet och erkännande",
        "Uttrycker ofta skam eller känsla av otillräcklighet",
        "Behöver känna sig värderade och sedda av andra"
      ]
    },

    head: {
      title: "Tanketriaden (Huvudcentret)",
      types: ["Type 5", "Type 6", "Type 7"],
      description: "Typer i Tanketriaden reagerar primärt genom analys och mental bearbetning. De är upptagna av säkerhet, planering och att förstå världen.",
      color: "blue",
      icon: "🧠",
      characteristics: [
        "Reagerar först genom tankar och analys",
        "Fokuserar på säkerhet, kunskap och framtidsplaner",
        "Uttrycker ofta rädsla eller oro",
        "Behöver känna sig förberedda och trygga"
      ]
    }
  }
};

export const stressGrowthLines = {
  title: "Stress och tillväxt - Dina utvecklingslinjer",
  description: "Varje typ har två linjer som visar riktningar för Stress (Friktion) och Tillväxt (Befrielse). Dessa linjer är viktiga för personlig utveckling.",

  lines: {
    "Type 1": {
      stress: {
        movesTo: "Type 4",
        description: "Under stress kan 1:or bli mer känslosamma, självupptagna och kritiska – liksom Typ 4. De kan förlora sin objektivitet och fastna i självömkan.",
        warning: "Akta dig för att perfektionism övergår i självkritik och depression."
      },
      growth: {
        movesTo: "Type 7",
        description: "I tillväxt lär sig 1:or att vara mer spontana, optimistiska och accepterande – liksom Typ 7. De hittar glädje i processen och inte bara i resultatet.",
        opportunity: "Omfamna spontanitet och tillåt dig själv att ha roligt utan skuld."
      }
    },

    "Type 2": {
      stress: {
        movesTo: "Type 8",
        description: "Under stress kan 2:or bli aggressiva, dominerande och konfronterande – liksom Typ 8. De kan 'straffa' dem de har hjälpt när de känner sig ovärderade.",
        warning: "Akta dig för att din hjälpsamhet övergår i kontroll och manipulation."
      },
      growth: {
        movesTo: "Type 4",
        description: "I tillväxt lär sig 2:or att vara mer i kontakt med sina egna känslor och behov – liksom Typ 4. De hittar sin egen identitet utanför andras erkännande.",
        opportunity: "Tillåt dig själv att känna och uttrycka dina egna behov ärligt."
      }
    },

    "Type 3": {
      stress: {
        movesTo: "Type 9",
        description: "Under stress kan 3:or bli passiva, ointresserade och förlora sin drivkraft – liksom Typ 9. De kan falla in i likgiltighet och undvika konflikter.",
        warning: "Akta dig för att din jäktighet övergår i tomhet och brist på riktning."
      },
      growth: {
        movesTo: "Type 6",
        description: "I tillväxt lär sig 3:or att vara mer lojala, ansvarsfulla och anslutna till gemenskapen – liksom Typ 6. De värderar djupare relationer framför image.",
        opportunity: "Hitta trygghet i att vara autentisk istället för att upprätthålla en image."
      }
    },

    "Type 4": {
      stress: {
        movesTo: "Type 2",
        description: "Under stress kan 4:or bli klängiga, beroende och överdrivet hjälpsamma – liksom Typ 2. De kan tappa kontakten med sitt autentiska jag.",
        warning: "Akta dig för att ditt sökande efter anslutning övergår i beroende."
      },
      growth: {
        movesTo: "Type 1",
        description: "I tillväxt lär sig 4:or att vara mer disciplinerade, objektiva och handlingsinriktade – liksom Typ 1. De hittar balans mellan känslor och struktur.",
        opportunity: "Använd din kreativitet konstruktivt med disciplin och struktur."
      }
    },

    "Type 5": {
      stress: {
        movesTo: "Type 7",
        description: "Under stress kan 5:or bli spridda, impulsiva och överstimulerade – liksom Typ 7. De kan hoppa från projekt till projekt utan att gå på djupet.",
        warning: "Akta dig för att din tillbakadragenhet övergår i flykt från verkligheten."
      },
      growth: {
        movesTo: "Type 8",
        description: "I tillväxt lär sig 5:or att vara mer självsäkra, handlingskraftiga och deltagande – liksom Typ 8. De kliver fram och delar aktivt med sig av sin kunskap.",
        opportunity: "Dela generöst med dig av din kunskap och ta plats i världen."
      }
    },

    "Type 6": {
      stress: {
        movesTo: "Type 3",
        description: "Under stress kan 6:or bli tävlingsinriktade, arbetsnarkomaner och image-medvetna – liksom Typ 3. De kan tappa kontakten med sina autentiska bekymmer.",
        warning: "Akta dig för att ditt sökande efter säkerhet övergår i överdriven jäktighet."
      },
      growth: {
        movesTo: "Type 9",
        description: "I tillväxt lär sig 6:or att vara lugnare, mer tillitsfulla och accepterande – liksom Typ 9. De hittar inre frid och litar på processen.",
        opportunity: "Lita på dig själv och världen – allt behöver inte kontrolleras."
      }
    },

    "Type 7": {
      stress: {
        movesTo: "Type 1",
        description: "Under stress kan 7:or bli kritiska, perfektionistiska och rigida – liksom Typ 1. De kan förlora sin spontanitet och bli dömande.",
        warning: "Akta dig för att din optimism döljer obearbetade smärtsamma känslor."
      },
      growth: {
        movesTo: "Type 5",
        description: "I tillväxt lär sig 7:or att vara mer fokuserade, djupgående och närvarande – liksom Typ 5. De hittar tillfredsställelse i djup snarare än bredd.",
        opportunity: "Dyk djupt istället för att skumma på livets yta."
      }
    },

    "Type 8": {
      stress: {
        movesTo: "Type 5",
        description: "Under stress kan 8:or bli isolerade, avvisande och överdrivet privata – liksom Typ 5. De drar sig undan kontakt och blir slutna.",
        warning: "Akta dig för att din styrka övergår i isolering från andra."
      },
      growth: {
        movesTo: "Type 2",
        description: "I tillväxt lär sig 8:or att vara mer empatiska, sårbara och omtänksamma – liksom Typ 2. De öppnar sina hjärtan och visar mjukhet.",
        opportunity: "Visa din mjukhet och sårbarhet – det är sann styrka."
      }
    },

    "Type 9": {
      stress: {
        movesTo: "Type 6",
        description: "Under stress kan 9:or bli oroliga, ångestfyllda och obeslutsamma – liksom Typ 6. De kan förlora sin inre ro och bli överväldigade av tvivel.",
        warning: "Akta dig för att din fridfullhet övergår i konfliktundvikande."
      },
      growth: {
        movesTo: "Type 3",
        description: "I tillväxt lär sig 9:or att vara mer handlingskraftiga, målinriktade och självsäkra – liksom Typ 3. De hittar sin egen röst och vidtar åtgärder.",
        opportunity: "Sätt dig själv först och vidta aktiva åtgärder mot dina mål."
      }
    }
  }
};

export const basicFearsInfo = {
  title: "Grundläggande Rädslor - Vad driver din typ?",
  description: "Varje Enneagramtyp har en djupt rotad grundläggande rädsla som formar deras världsbild och beteende. Att förstå denna rädsla är nyckeln till personlig utveckling.",
  source: "The Wisdom of the Enneagram - Don Richard Riso & Russ Hudson",

  fears: {
    "Type 1": {
      icon: "🔢",
      name: "Perfektionisten",
      fear: "Att vara dålig, korrupt, ond eller bristfällig.",
      description: "Perfektionisten fruktar djupt att vara moraliskt felaktig eller ofullkomlig. För att kompensera strävar de efter att vara dygdiga, ansvarsfulla och etiska. De projicerar ofta sin rädsla utåt genom att påpeka brister hos andra och insistera på höga standarder."
    },
    "Type 2": {
      icon: "💞",
      name: "Hjälparen",
      fear: "Att vara oälskad eller oönskad.",
      description: "Hjälparen fruktar att de inte är värda att älska om de inte gör sig oumbärliga. De försöker därför uppnå kärlek genom att tillgodose andras behov, men kan sluta med att göra andra beroende av dem och känna sig bittra om de inte får den önskade kärleken tillbaka."
    },
    "Type 3": {
      icon: "🏆",
      name: "Presteraren",
      fear: "Att vara värdelös eller utan inneboende värde.",
      description: "Presteraren fruktar att de bara är värda något om de presterar och uppnår framgång. De söker därför ständigt erkännande och beundran, men riskerar att förlora kontakten med sitt autentiska jag och känna sig tomma bakom fasaden."
    },
    "Type 4": {
      icon: "🎭",
      name: "Individualisten",
      fear: "Att vara utan identitet eller personlig betydelse.",
      description: "Individualisten fruktar att vara vanlig eller osynlig. De strävar efter att vara unika och autentiska, men kan samtidigt känna sig missförstådda och isolerade. De kan komma att nedvärdera andra för att hävda sin egen särart."
    },
    "Type 5": {
      icon: "🧠",
      name: "Iakttagaren",
      fear: "Att vara oanvändbar, inkompetent eller hjälplös.",
      description: "Iakttagaren fruktar att bli överväldigad av världen och drar sig därför tillbaka för att behålla kontrollen. De söker kunskap och förståelse som ett sätt att känna sig kompetenta, men kan verka känslomässigt distanserade."
    },
    "Type 6": {
      icon: "🛡️",
      name: "Skeptikern",
      fear: "Att vara utan stöd och vägledning.",
      description: "Skeptikern fruktar att stå ensam och utan säkerhet. De söker trygghet genom lojalitet och förberedelse, men kan bli misstänksamma och överberoende av auktoriteter. Ironiskt nog kan deras sökande efter säkerhet leda till motsatsen."
    },
    "Type 7": {
      icon: "🎉",
      name: "Äventyraren",
      fear: "Att bli fångad i smärta eller saknad.",
      description: "Äventyraren fruktar känslomässig smärta och tristess. De söker ständigt nya upplevelser och glädjeämnen för att undvika obehag. Detta kan leda till ytlighet och en oförmåga att förbinda sig, vilket i slutändan kan skapa den tomhet de försöker undvika."
    },
    "Type 8": {
      icon: "💪",
      name: "Utmanaren",
      fear: "Att bli kontrollerad eller skadad av andra.",
      description: "Utmanaren fruktar sårbarhet och svaghet. De söker makt och kontroll för att skydda sig själva, men kan framstå som dominerande och skrämmande. Deras rädsla för att bli kontrollerade kan få dem att kontrollera andra."
    },
    "Type 9": {
      icon: "☮️",
      name: "Fredsälskaren",
      fear: "Att förlora anslutning eller bli fragmenterad.",
      description: "Fredsälskaren fruktar konflikt och separation. De söker harmoni och undviker konfrontation, men kan förlora sig själva i försöket att bevara freden. Deras strategi att 'checka ut' kan få andra att känna sig förbisedda eller avvisade."
    }
  }
};

export const basicDesiresInfo = {
  title: "Grundläggande Önskningar - Vad söker din typ?",
  description: "De grundläggande önskningarna uppstår som en kompensation för den grundläggande rädslan. De fungerar som en inre drivkraft, men att eftersträva önskan genom egots strategier kan paradoxalt nog förstärka rädslan.",

  dynamicExplanation: "Ju mer vi försöker uppnå vår grundläggande önskan genom egots strategier, desto mer aktiverar vi vår rädsla – eftersom dessa strategier inte kan tillfredsställa våra djupaste behov.\n\nMed andra ord: Vi har alla något vi längtar efter – som att känna oss älskade, trygga eller värdefulla. Men när vi försöker få det genom att spela en viss roll eller anstränga oss på ett visst sätt, så fungerar det inte riktigt. Och ju mer vi försöker, desto räddare blir vi för att inte få det vi verkligen behöver.",

  desires: {
    "Type 1": {
      icon: "🔢",
      name: "Perfektionisten",
      desire: "Att vara god, dygdig och i ordning – att vara moraliskt korrekt och integrerad.",
      dynamic: "Söker perfektion för att undvika skuld och skam"
    },
    "Type 2": {
      icon: "💞",
      name: "Hjälparen",
      desire: "Att känna sig älskad – att vara önskad och uppskattad för den man är.",
      dynamic: "Ger för att bli älskad, men kan förlora sig själv"
    },
    "Type 3": {
      icon: "🏆",
      name: "Presteraren",
      desire: "Att känna sig värdefull – att vara framgångsrik och erkänd.",
      dynamic: "Presterar för att känna sig värdefull, men förlorar autenticitet"
    },
    "Type 4": {
      icon: "🎭",
      name: "Individualisten",
      desire: "Att hitta sig själv och sin betydelse – att vara unik och autentisk.",
      dynamic: "Söker särart, men känner sig ofta missförstådd"
    },
    "Type 5": {
      icon: "🧠",
      name: "Iakttagaren",
      desire: "Att vara kompetent och kapabel – att förstå och bemästra världen.",
      dynamic: "Drar sig tillbaka för att bevara kontroll och kunskap"
    },
    "Type 6": {
      icon: "🛡️",
      name: "Skeptikern",
      desire: "Att känna sig trygg och stöttad – att ha säkerhet och vägledning.",
      dynamic: "Söker säkerhet, men skapar ofta osäkerhet"
    },
    "Type 7": {
      icon: "🎉",
      name: "Äventyraren",
      desire: "Att vara tillfreds och lycklig – att uppleva glädje och undvika smärta.",
      dynamic: "Undviker smärta genom distraktion och ytlighet"
    },
    "Type 8": {
      icon: "💪",
      name: "Utmanaren",
      desire: "Att vara självständig och i kontroll – att skydda sig själv och sina egna.",
      dynamic: "Dominerar för att undvika sårbarhet"
    },
    "Type 9": {
      icon: "☮️",
      name: "Fredsälskaren",
      desire: "Att ha inre stabilitet och sinnesfrid – att känna sig ansluten.",
      dynamic: "Undviker konflikter, men förlorar sig själv"
    }
  }
};

export const getTriadForType = (type: string): keyof typeof triadInfo.triads | null => {
  if (["Type 8", "Type 9", "Type 1"].includes(type)) return "body";
  if (["Type 2", "Type 3", "Type 4"].includes(type)) return "heart";
  if (["Type 5", "Type 6", "Type 7"].includes(type)) return "head";
  return null;
};
