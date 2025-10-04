export const triadInfo = {
  title: "De tre triader - Handling, Følelse og Tanke",
  description: "Enneagrammet er opdelt i tre centre eller triader, der beskriver hvordan forskellige typer primært oplever og reagerer på verden.",

  triads: {
    body: {
      title: "Handlingstriaden (Kropscenter)",
      types: ["Type 8", "Type 9", "Type 1"],
      description: "Typer i handlingstriaden reagerer primært gennem instinkt og kropsfornemmelser. De er optaget af kontrol, autonomi og at påvirke deres omgivelser.",
      color: "red",
      icon: "👊",
      characteristics: [
        "Reagerer først gennem mavefornemmelser og instinkter",
        "Fokuserer på magt, kontrol og grænser",
        "Udtrykker ofte vrede eller irritation",
        "Har brug for at føle sig autonome og have indflydelse"
      ]
    },

    heart: {
      title: "Følelsestri aden (Hjertecenter)",
      types: ["Type 2", "Type 3", "Type 4"],
      description: "Typer i følelsescentriaden reagerer primært gennem følelser og relationer. De er optaget af identitet, image og hvordan de bliver set af andre.",
      color: "green",
      icon: "❤️",
      characteristics: [
        "Reagerer først gennem følelser og emotioner",
        "Fokuserer på image, identitet og anerkendelse",
        "Udtrykker ofte skam eller følelse af utilstrækkelighed",
        "Har brug for at føle sig værdsat og set af andre"
      ]
    },

    head: {
      title: "Tanketriaden (Hovedcenter)",
      types: ["Type 5", "Type 6", "Type 7"],
      description: "Typer i tanketriaden reagerer primært gennem analyse og mental forarbejdning. De er optaget af sikkerhed, planlægning og at forstå verden.",
      color: "blue",
      icon: "🧠",
      characteristics: [
        "Reagerer først gennem tanker og analyse",
        "Fokuserer på sikkerhed, viden og fremtidsplaner",
        "Udtrykker ofte frygt eller bekymring",
        "Har brug for at føle sig forberedte og sikre"
      ]
    }
  }
};

export const stressGrowthLines = {
  title: "Stress og vækst - Dine udviklingslinjer",
  description: "Hver type har to linjer der viser retninger for stress (Friktion) og vækst (Frigørelse). Disse linjer er vigtige for personlig udvikling.",

  lines: {
    "Type 1": {
      stress: {
        movesTo: "Type 4",
        description: "Under stress kan 1'ere blive mere følelsesmæssige, selvopslugte og kritiske - ligesom Type 4. De kan miste deres objektivitet og blive fanget i selvmedlidenhed.",
        warning: "Pas på perfektionisme der bliver til selvkritik og depression."
      },
      growth: {
        movesTo: "Type 7",
        description: "I vækst lærer 1'ere at være mere spontane, optimistiske og accepterende - ligesom Type 7. De finder glæde i processen og ikke kun i resultatet.",
        opportunity: "Omfavn spontanitet og tillad dig selv at have det sjovt uden skyld."
      }
    },

    "Type 2": {
      stress: {
        movesTo: "Type 8",
        description: "Under stress kan 2'ere blive aggressive, dominerende og konfronterende - ligesom Type 8. De kan 'straffe' dem de har hjulpet når de føler sig uvæ rdsatte.",
        warning: "Pas på at din hjælpsomhed ikke bliver til kontrol og manipulation."
      },
      growth: {
        movesTo: "Type 4",
        description: "I vækst lærer 2'ere at være mere i kontakt med egne følelser og behov - ligesom Type 4. De finder deres egen identitet uden for andres anerkendelse.",
        opportunity: "Tillad dig selv at mærke og udtrykke dine egne behov ærligt."
      }
    },

    "Type 3": {
      stress: {
        movesTo: "Type 9",
        description: "Under stress kan 3'ere blive passive, uengagerede og miste deres drivkraft - ligesom Type 9. De kan falde ind i ligegyldighed og undgå konflikter.",
        warning: "Pas på at din travlhed ikke bliver til tomhed og mangel på retning."
      },
      growth: {
        movesTo: "Type 6",
        description: "I vækst lærer 3'ere at være mere loyal, ansvarlig og forbundet til fællesskabet - ligesom Type 6. De værdsætter dybere relationer over image.",
        opportunity: "Find tryghed i at være autentisk frem for at opretholde et image."
      }
    },

    "Type 4": {
      stress: {
        movesTo: "Type 2",
        description: "Under stress kan 4'ere blive klamrende, afhængige og over-hjælpsomme - ligesom Type 2. De kan miste kontakten til deres autentiske selv.",
        warning: "Pas på at din søgen efter forbindelse ikke bliver til afhængighed."
      },
      growth: {
        movesTo: "Type 1",
        description: "I vækst lærer 4'ere at være mere disciplinerede, objektive og handlingsorienterede - ligesom Type 1. De finder balance mellem følelser og struktur.",
        opportunity: "Brug din kreativitet konstruktivt med disciplin og struktur."
      }
    },

    "Type 5": {
      stress: {
        movesTo: "Type 7",
        description: "Under stress kan 5'ere blive spredte, impulsive og overstimulerede - ligesom Type 7. De kan springe fra projekt til projekt uden at gå i dybden.",
        warning: "Pas på at din tilbagetrækning ikke bliver til flugt fra virkeligheden."
      },
      growth: {
        movesTo: "Type 8",
        description: "I vækst lærer 5'ere at være mere selvsikre, handlekraftige og deltagende - ligesom Type 8. De træder frem og deler deres viden aktivt.",
        opportunity: "Del generøst af din viden og tag plads i verden."
      }
    },

    "Type 6": {
      stress: {
        movesTo: "Type 3",
        description: "Under stress kan 6'ere blive konkurrenceprægede, arbejdsnarkomane og imagebevidste - ligesom Type 3. De kan miste kontakten til deres autentiske bekymringer.",
        warning: "Pas på at din søgen efter sikkerhed ikke bliver til overdreven travlhed."
      },
      growth: {
        movesTo: "Type 9",
        description: "I vækst lærer 6'ere at være mere rolige, tillidsfulde og accepterende - ligesom Type 9. De finder indre fred og stoler på processen.",
        opportunity: "Stol på dig selv og verden - ikke alt skal kontrolleres."
      }
    },

    "Type 7": {
      stress: {
        movesTo: "Type 1",
        description: "Under stress kan 7'ere blive kritiske, perfektionistiske og rigide - ligesom Type 1. De kan miste deres spontanitet og blive dømm ende.",
        warning: "Pas på at din optimisme ikke skjuler ubearbejdede smertefulde følelser."
      },
      growth: {
        movesTo: "Type 5",
        description: "I vækst lærer 7'ere at være mere fokuserede, dybdegående og nærværende - ligesom Type 5. De finder tilfredshed i dybde frem for bredde.",
        opportunity: "Dyk dybt ned i stedet for at skimme overfladen af livet."
      }
    },

    "Type 8": {
      stress: {
        movesTo: "Type 5",
        description: "Under stress kan 8'ere blive isolerede, afvisende og overdrevent private - ligesom Type 5. De trækker sig fra kontakt og bliver lukkede.",
        warning: "Pas på at din styrke ikke bliver til isolation fra andre."
      },
      growth: {
        movesTo: "Type 2",
        description: "I vækst lærer 8'ere at være mere empatiske, sårbare og omsorgsfulde - ligesom Type 2. De åbner deres hjerter og viser blødhed.",
        opportunity: "Vis din blødhed og sårbarhed - det er sand styrke."
      }
    },

    "Type 9": {
      stress: {
        movesTo: "Type 6",
        description: "Under stress kan 9'ere blive bekymrede, angste og indecisive - ligesom Type 6. De kan miste deres indre ro og blive overvældede af tvivl.",
        warning: "Pas på at din fredsommelighed ikke bliver til konfliktundgåelse."
      },
      growth: {
        movesTo: "Type 3",
        description: "I vækst lærer 9'ere at være mere handlekraftige, målrettede og selvsikre - ligesom Type 3. De finder deres egen stemme og tager action.",
        opportunity: "Sæt dig selv først og tag aktiv handling mod dine mål."
      }
    }
  }
};

export const basicFearsInfo = {
  title: "Basisfrygter - Hvad driver din type?",
  description: "Hver Enneagramtype har en dybtliggende basisfrygt, der former deres verdenssyn og adfærd. At forstå denne frygt er nøglen til personlig udvikling.",
  source: "The Wisdom of the Enneagram - Don Richard Riso & Russ Hudson",

  fears: {
    "Type 1": {
      icon: "🔢",
      name: "Perfektionisten",
      fear: "At være dårlig, korrupt, ond eller defekt.",
      description: "Perfektionisten frygter dybt at være moralsk forkert eller ufuldkommen. For at kompensere forsøger de at være dydige, ansvarlige og etiske. De projicerer ofte deres frygt udad ved at påpege fejl hos andre og insistere på høje standarder."
    },
    "Type 2": {
      icon: "💞",
      name: "Hjælperen",
      fear: "At være uelsket eller uønsket.",
      description: "Hjælperen frygter, at de ikke er værd at elske, medmindre de gør sig uundværlige. De forsøger derfor at opnå kærlighed gennem at opfylde andres behov, men kan ende med at gøre andre afhængige af dem og føle sig bitre, hvis de ikke får den ønskede kærlighed tilbage."
    },
    "Type 3": {
      icon: "🏆",
      name: "Udretteren",
      fear: "At være værdiløs eller uden iboende værdi.",
      description: "Udretteren frygter, at de kun er noget værd, hvis de præsterer og opnår succes. De søger derfor konstant anerkendelse og beundring, men risikerer at miste kontakten til deres autentiske selv og føle sig tomme bag facaden."
    },
    "Type 4": {
      icon: "🎭",
      name: "Individualisten",
      fear: "At være uden identitet eller personlig betydning.",
      description: "Individualisten frygter at være almindelig eller usynlig. De søger derfor at være unikke og autentiske, men kan samtidig føle sig misforståede og isolerede. De kan komme til at nedgøre andre for at hævde deres egen særegenhed."
    },
    "Type 5": {
      icon: "🧠",
      name: "Iagttageren",
      fear: "At være ubrugelig, inkompetent eller hjælpeløs.",
      description: "Iagttageren frygter at blive overvældet af verden og trækker sig derfor tilbage for at bevare kontrol. De søger viden og forståelse som en måde at føle sig kompetente på, men kan virke følelsesmæssigt distancerede."
    },
    "Type 6": {
      icon: "🛡️",
      name: "Skeptikeren",
      fear: "At være uden støtte og vejledning.",
      description: "Skeptikeren frygter at stå alene og uden sikkerhed. De søger tryghed gennem loyalitet og forberedelse, men kan blive mistroiske og overafhængige af autoriteter. Ironisk nok kan deres søgen efter sikkerhed føre til det modsatte."
    },
    "Type 7": {
      icon: "🎉",
      name: "Eventyreren",
      fear: "At blive fanget i smerte eller afsavn.",
      description: "Eventyreren frygter følelsesmæssig smerte og kedsomhed. De søger konstant nye oplevelser og glæder for at undgå ubehag. Dette kan føre til overfladiskhed og manglende evne til at forpligte sig, hvilket i sidste ende kan skabe den tomhed, de forsøger at undgå."
    },
    "Type 8": {
      icon: "💪",
      name: "Frontkæmperen",
      fear: "At blive kontrolleret eller såret af andre.",
      description: "Frontkæmperen frygter sårbarhed og svaghed. De søger magt og kontrol for at beskytte sig selv, men kan fremstå dominerende og skræmmende. Deres frygt for at blive kontrolleret kan få dem til at kontrollere andre."
    },
    "Type 9": {
      icon: "☮️",
      name: "Fredselskeren",
      fear: "At miste forbindelse eller blive fragmenteret.",
      description: "Fredselskeren frygter konflikt og adskillelse. De søger harmoni og undgår konfrontation, men kan miste sig selv i forsøget på at bevare freden. Deres strategi med at 'tjekke ud' kan få andre til at føle sig overset eller afvist."
    }
  }
};

export const basicDesiresInfo = {
  title: "Basisønsker - Hvad søger din type?",
  description: "Basisønskerne opstår som en kompensation for basisfrygten. De fungerer som en indre drivkraft, men at forfølge ønsket gennem egoets strategier kan paradoksalt nok forstærke frygten.",

  dynamicExplanation: "Jo mere vi prøver at opnå vores basisønske gennem egoets strategier, jo mere aktiverer vi vores frygt - fordi disse strategier ikke kan tilfredsstille vores dybeste behov.",

  desires: {
    "Type 1": {
      icon: "🔢",
      name: "Perfektionisten",
      desire: "At være god, dydig og i orden – at være moralsk korrekt og integreret.",
      dynamic: "Søger perfektion for at undgå skyld og skam"
    },
    "Type 2": {
      icon: "💞",
      name: "Hjælperen",
      desire: "At føle sig elsket – at være ønsket og værdsat for den, man er.",
      dynamic: "Giver for at blive elsket, men kan miste sig selv"
    },
    "Type 3": {
      icon: "🏆",
      name: "Udretteren",
      desire: "At føle sig værdifuld – at være succesfuld og anerkendt.",
      dynamic: "Præsterer for at føle sig værdifuld, men mister autenticitet"
    },
    "Type 4": {
      icon: "🎭",
      name: "Individualisten",
      desire: "At finde sig selv og sin betydning – at være unik og autentisk.",
      dynamic: "Søger særpræg, men føler sig ofte misforstået"
    },
    "Type 5": {
      icon: "🧠",
      name: "Iagttageren",
      desire: "At være kompetent og i stand – at forstå og mestre verden.",
      dynamic: "Trækker sig tilbage for at bevare kontrol og viden"
    },
    "Type 6": {
      icon: "🛡️",
      name: "Skeptikeren",
      desire: "At føle sig tryg og støttet – at have sikkerhed og vejledning.",
      dynamic: "Søger sikkerhed, men skaber ofte usikkerhed"
    },
    "Type 7": {
      icon: "🎉",
      name: "Eventyreren",
      desire: "At være tilfreds og lykkelig – at opleve glæde og undgå smerte.",
      dynamic: "Undgår smerte gennem distraktion og overfladiskhed"
    },
    "Type 8": {
      icon: "💪",
      name: "Frontkæmperen",
      desire: "At være selvstændig og i kontrol – at beskytte sig selv og sine egne.",
      dynamic: "Dominerer for at undgå sårbarhed"
    },
    "Type 9": {
      icon: "☮️",
      name: "Fredselskeren",
      desire: "At have indre stabilitet og fred i sindet – at føle sig forbundet.",
      dynamic: "Undgår konflikt, men mister sig selv"
    }
  }
};

export const getTriadForType = (type: string): keyof typeof triadInfo.triads | null => {
  if (["Type 8", "Type 9", "Type 1"].includes(type)) return "body";
  if (["Type 2", "Type 3", "Type 4"].includes(type)) return "heart";
  if (["Type 5", "Type 6", "Type 7"].includes(type)) return "head";
  return null;
};
