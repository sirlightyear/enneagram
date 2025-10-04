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

export const getTriadForType = (type: string): keyof typeof triadInfo.triads | null => {
  if (["Type 8", "Type 9", "Type 1"].includes(type)) return "body";
  if (["Type 2", "Type 3", "Type 4"].includes(type)) return "heart";
  if (["Type 5", "Type 6", "Type 7"].includes(type)) return "head";
  return null;
};
