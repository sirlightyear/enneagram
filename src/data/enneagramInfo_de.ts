export const triadInfo = {
  title: "Die drei Triaden - Handeln, Fühlen und Denken",
  description: "Das Enneagramm ist in drei Zentren oder Triaden unterteilt, die beschreiben, wie verschiedene Typen die Welt primär erleben und auf sie reagieren.",

  triads: {
    body: {
      title: "Handlungs-Triade (Körperzentrum)",
      types: ["Type 8", "Type 9", "Type 1"],
      description: "Typen in der Handlungs-Triade reagieren primär durch Instinkt und Körperempfindungen. Sie beschäftigen sich mit Kontrolle, Autonomie und der Beeinflussung ihrer Umgebung.",
      color: "red",
      icon: "👊",
      characteristics: [
        "Reagieren zuerst durch Bauchgefühl und Instinkte",
        "Fokus auf Macht, Kontrolle und Grenzen",
        "Drücken oft Wut oder Ärger aus",
        "Haben das Bedürfnis, sich autonom zu fühlen und Einfluss zu haben"
      ]
    },

    heart: {
      title: "Gefühls-Triade (Herzzentrum)",
      types: ["Type 2", "Type 3", "Type 4"],
      description: "Typen im Gefühlszentrum reagieren primär durch Emotionen und Beziehungen. Sie beschäftigen sich mit Identität, Image und damit, wie sie von anderen gesehen werden.",
      color: "green",
      icon: "❤️",
      characteristics: [
        "Reagieren zuerst durch Gefühle und Emotionen",
        "Fokus auf Image, Identität und Anerkennung",
        "Drücken oft Scham oder das Gefühl der Unzulänglichkeit aus",
        "Haben das Bedürfnis, sich wertgeschätzt und von anderen gesehen zu fühlen"
      ]
    },

    head: {
      title: "Gedanken-Triade (Kopfzentrum)",
      types: ["Type 5", "Type 6", "Type 7"],
      description: "Typen in der Gedanken-Triade reagieren primär durch Analyse und mentale Verarbeitung. Sie beschäftigen sich mit Sicherheit, Planung und dem Verstehen der Welt.",
      color: "blue",
      icon: "🧠",
      characteristics: [
        "Reagieren zuerst durch Gedanken und Analyse",
        "Fokus auf Sicherheit, Wissen und Zukunftsplanung",
        "Drücken oft Angst oder Besorgnis aus",
        "Haben das Bedürfnis, sich vorbereitet und sicher zu fühlen"
      ]
    }
  }
};

export const stressGrowthLines = {
  title: "Stress und Wachstum - Deine Entwicklungslinien",
  description: "Jeder Typ hat zwei Linien, die Richtungen für Stress (Reibung) und Wachstum (Befreiung) anzeigen. Diese Linien sind wichtig für die persönliche Entwicklung.",

  lines: {
    "Type 1": {
      stress: {
        movesTo: "Type 4",
        description: "Unter Stress können 1er emotionaler, selbstbezogener und kritischer werden – ähnlich wie Typ 4. Sie können ihre Objektivität verlieren und in Selbstmitleid gefangen werden.",
        warning: "Achte darauf, dass Perfektionismus nicht zu Selbstkritik und Depression wird."
      },
      growth: {
        movesTo: "Type 7",
        description: "Im Wachstum lernen 1er, spontaner, optimistischer und akzeptierender zu sein – ähnlich wie Typ 7. Sie finden Freude am Prozess und nicht nur am Ergebnis.",
        opportunity: "Umarme Spontaneität und erlaube dir, Spaß ohne Schuldgefühle zu haben."
      }
    },

    "Type 2": {
      stress: {
        movesTo: "Type 8",
        description: "Unter Stress können 2er aggressiv, dominant und konfrontativ werden – ähnlich wie Typ 8. Sie können diejenigen 'bestrafen', denen sie geholfen haben, wenn sie sich nicht wertgeschätzt fühlen.",
        warning: "Achte darauf, dass deine Hilfsbereitschaft nicht zu Kontrolle und Manipulation wird."
      },
      growth: {
        movesTo: "Type 4",
        description: "Im Wachstum lernen 2er, mehr in Kontakt mit ihren eigenen Gefühlen und Bedürfnissen zu sein – ähnlich wie Typ 4. Sie finden ihre eigene Identität außerhalb der Anerkennung anderer.",
        opportunity: "Erlaube dir, deine eigenen Bedürfnisse ehrlich zu fühlen und auszudrücken."
      }
    },

    "Type 3": {
      stress: {
        movesTo: "Type 9",
        description: "Unter Stress können 3er passiv, desinteressiert werden und ihren Antrieb verlieren – ähnlich wie Typ 9. Sie können in Gleichgültigkeit verfallen und Konflikte vermeiden.",
        warning: "Achte darauf, dass deine Geschäftigkeit nicht zu Leere und Orientierungslosigkeit wird."
      },
      growth: {
        movesTo: "Type 6",
        description: "Im Wachstum lernen 3er, loyaler, verantwortungsbewusster und mit der Gemeinschaft verbunden zu sein – ähnlich wie Typ 6. Sie schätzen tiefere Beziehungen mehr als ihr Image.",
        opportunity: "Finde Sicherheit darin, authentisch zu sein, anstatt ein Image aufrechtzuerhalten."
      }
    },

    "Type 4": {
      stress: {
        movesTo: "Type 2",
        description: "Unter Stress können 4er klammernd, abhängig und übermäßig hilfsbereit werden – ähnlich wie Typ 2. Sie können den Kontakt zu ihrem authentischen Selbst verlieren.",
        warning: "Achte darauf, dass dein Suchen nach Verbindung nicht zur Abhängigkeit wird."
      },
      growth: {
        movesTo: "Type 1",
        description: "Im Wachstum lernen 4er, disziplinierter, objektiver und handlungsorientierter zu sein – ähnlich wie Typ 1. Sie finden Balance zwischen Emotionen und Struktur.",
        opportunity: "Nutze deine Kreativität konstruktiv mit Disziplin und Struktur."
      }
    },

    "Type 5": {
      stress: {
        movesTo: "Type 7",
        description: "Unter Stress können 5er zerstreut, impulsiv und überstimuliert werden – ähnlich wie Typ 7. Sie können von Projekt zu Projekt springen, ohne in die Tiefe zu gehen.",
        warning: "Achte darauf, dass dein Rückzug nicht zur Flucht vor der Realität wird."
      },
      growth: {
        movesTo: "Type 8",
        description: "Im Wachstum lernen 5er, selbstbewusster, tatkräftiger und teilnahmsvoller zu sein – ähnlich wie Typ 8. Sie treten hervor und teilen ihr Wissen aktiv.",
        opportunity: "Teile dein Wissen großzügig und nimm deinen Platz in der Welt ein."
      }
    },

    "Type 6": {
      stress: {
        movesTo: "Type 3",
        description: "Unter Stress können 6er konkurrenzbetont, arbeitssüchtig und imagebewusst werden – ähnlich wie Typ 3. Sie können den Kontakt zu ihren authentischen Sorgen verlieren.",
        warning: "Achte darauf, dass dein Suchen nach Sicherheit nicht zu übermäßiger Geschäftigkeit wird."
      },
      growth: {
        movesTo: "Type 9",
        description: "Im Wachstum lernen 6er, ruhiger, vertrauensvoller und akzeptierender zu sein – ähnlich wie Typ 9. Sie finden inneren Frieden und vertrauen dem Prozess.",
        opportunity: "Vertraue dir selbst und der Welt – nicht alles muss kontrolliert werden."
      }
    },

    "Type 7": {
      stress: {
        movesTo: "Type 1",
        description: "Unter Stress können 7er kritisch, perfektionistisch und starr werden – ähnlich wie Typ 1. Sie können ihre Spontaneität verlieren und urteilend werden.",
        warning: "Achte darauf, dass dein Optimismus keine unverarbeiteten schmerzhaften Gefühle verbirgt."
      },
      growth: {
        movesTo: "Type 5",
        description: "Im Wachstum lernen 7er, fokussierter, tiefgehender und präsenter zu sein – ähnlich wie Typ 5. Sie finden Zufriedenheit in der Tiefe statt in der Breite.",
        opportunity: "Tauche tief ein, anstatt nur an der Oberfläche des Lebens zu kratzen."
      }
    },

    "Type 8": {
      stress: {
        movesTo: "Type 5",
        description: "Unter Stress können 8er isoliert, abweisend und übermäßig privat werden – ähnlich wie Typ 5. Sie ziehen sich vom Kontakt zurück und werden verschlossen.",
        warning: "Achte darauf, dass deine Stärke nicht zur Isolation von anderen wird."
      },
      growth: {
        movesTo: "Type 2",
        description: "Im Wachstum lernen 8er, empathischer, verletzlicher und fürsorglicher zu sein – ähnlich wie Typ 2. Sie öffnen ihre Herzen und zeigen Sanftheit.",
        opportunity: "Zeige deine Sanftheit und Verletzlichkeit – das ist wahre Stärke."
      }
    },

    "Type 9": {
      stress: {
        movesTo: "Type 6",
        description: "Unter Stress können 9er besorgt, ängstlich und unentschlossen werden – ähnlich wie Typ 6. Sie können ihre innere Ruhe verlieren und von Zweifeln überwältigt werden.",
        warning: "Achte darauf, dass deine Friedfertigkeit nicht zur Konfliktvermeidung wird."
      },
      growth: {
        movesTo: "Type 3",
        description: "Im Wachstum lernen 9er, tatkräftiger, zielgerichteter und selbstbewusster zu sein – ähnlich wie Typ 3. Sie finden ihre eigene Stimme und ergreifen Maßnahmen.",
        opportunity: "Stelle dich selbst an erste Stelle und ergreife aktive Maßnahmen für deine Ziele."
      }
    }
  }
};

export const basicFearsInfo = {
  title: "Grundängste - Was treibt deinen Typ an?",
  description: "Jeder Enneagramm-Typ hat eine tief verwurzelte Grundangst, die sein Weltbild und Verhalten prägt. Das Verstehen dieser Angst ist der Schlüssel zur persönlichen Entwicklung.",
  source: "The Wisdom of the Enneagram - Don Richard Riso & Russ Hudson",

  fears: {
    "Type 1": {
      icon: "🔢",
      name: "Der Perfektionist",
      fear: "Schlecht, korrupt, böse oder fehlerhaft zu sein.",
      description: "Der Perfektionist fürchtet zutiefst, moralisch falsch oder unvollkommen zu sein. Um dies auszugleichen, versuchen sie, tugendhaft, verantwortungsbewusst und ethisch zu sein. Sie projizieren ihre Angst oft nach außen, indem sie Fehler bei anderen aufzeigen und auf hohen Standards bestehen."
    },
    "Type 2": {
      icon: "💞",
      name: "Der Helfer",
      fear: "Unbeliebt oder unerwünscht zu sein.",
      description: "Der Helfer befürchtet, dass sie nicht liebenswert sind, es sei denn, sie machen sich unentbehrlich. Sie versuchen daher, Liebe durch die Erfüllung der Bedürfnisse anderer zu erlangen, können aber am Ende andere von sich abhängig machen und sich verbittert fühlen, wenn sie die gewünschte Gegenliebe nicht erhalten."
    },
    "Type 3": {
      icon: "🏆",
      name: "Der Erfolgstyp",
      fear: "Wertlos oder ohne inneren Wert zu sein.",
      description: "Der Erfolgstyp befürchtet, nur dann etwas wert zu sein, wenn er Leistung erbringt und Erfolg hat. Sie suchen daher ständig nach Anerkennung und Bewunderung, riskieren aber, den Kontakt zu ihrem authentischen Selbst zu verlieren und sich hinter der Fassade leer zu fühlen."
    },
    "Type 4": {
      icon: "🎭",
      name: "Der Individualist",
      fear: "Ohne Identität oder persönliche Bedeutung zu sein.",
      description: "Der Individualist befürchtet, gewöhnlich oder unsichtbar zu sein. Sie streben daher danach, einzigartig und authentisch zu sein, können sich aber gleichzeitig missverstanden und isoliert fühlen. Sie können andere herabsetzen, um ihre eigene Besonderheit zu behaupten."
    },
    "Type 5": {
      icon: "🧠",
      name: "Der Beobachter",
      fear: "Unbrauchbar, inkompetent oder hilflos zu sein.",
      description: "Der Beobachter fürchtet, von der Welt überwältigt zu werden, und zieht sich daher zurück, um die Kontrolle zu behalten. Sie suchen Wissen und Verständnis als einen Weg, sich kompetent zu fühlen, können aber emotional distanziert wirken."
    },
    "Type 6": {
      icon: "🛡️",
      name: "Der Skeptiker",
      fear: "Ohne Unterstützung und Führung zu sein.",
      description: "Der Skeptiker fürchtet, allein und ohne Sicherheit dazustehen. Sie suchen Sicherheit durch Loyalität und Vorbereitung, können aber misstrauisch und übermäßig von Autoritäten abhängig werden. Ironischerweise kann ihr Suchen nach Sicherheit zum Gegenteil führen."
    },
    "Type 7": {
      icon: "🎉",
      name: "Der Abenteurer",
      fear: "Von Schmerz oder Entbehrung gefangen zu sein.",
      description: "Der Abenteurer fürchtet emotionalen Schmerz und Langeweile. Sie suchen ständig nach neuen Erfahrungen und Freuden, um Unbehagen zu vermeiden. Dies kann zu Oberflächlichkeit und mangelnder Fähigkeit zur Verbindlichkeit führen, was letztendlich die Leere schaffen kann, die sie zu vermeiden versuchen."
    },
    "Type 8": {
      icon: "💪",
      name: "Der Herausforderer",
      fear: "Kontrolliert oder verletzt zu werden von anderen.",
      description: "Der Herausforderer fürchtet Verletzlichkeit und Schwäche. Sie suchen Macht und Kontrolle, um sich selbst zu schützen, können aber dominant und einschüchternd wirken. Ihre Angst, kontrolliert zu werden, kann sie dazu bringen, andere zu kontrollieren."
    },
    "Type 9": {
      icon: "☮️",
      name: "Der Friedensstifter",
      fear: "Verbindung zu verlieren oder fragmentiert zu werden.",
      description: "Der Friedensstifter fürchtet Konflikt und Trennung. Sie suchen Harmonie und vermeiden Konfrontation, können sich aber selbst verlieren beim Versuch, den Frieden zu bewahren. Ihre Strategie des 'Auscheckens' kann andere dazu bringen, sich übersehen oder abgewiesen zu fühlen."
    }
  }
};

export const basicDesiresInfo = {
  title: "Grundwünsche - Was sucht dein Typ?",
  description: "Die Grundwünsche entstehen als Kompensation für die Grundangst. Sie fungieren als innere Triebkraft, aber das Verfolgen des Wunsches durch die Strategien des Egos kann paradoxerweise die Angst verstärken.",

  dynamicExplanation: "Je mehr wir versuchen, unseren Grundwunsch durch die Strategien des Egos zu erreichen, desto mehr aktivieren wir unsere Angst – weil diese Strategien unsere tiefsten Bedürfnisse nicht befriedigen können.\n\nMit anderen Worten: Wir alle haben etwas, wonach wir uns sehnen – wie das Gefühl, geliebt, sicher oder wertvoll zu sein. Aber wenn wir versuchen, es zu bekommen, indem wir eine bestimmte Rolle spielen oder uns auf eine bestimmte Weise bemühen, dann funktioniert es nicht ganz. Und je mehr wir es versuchen, desto ängstlicher werden wir, das nicht zu bekommen, was wir wirklich brauchen.",

  desires: {
    "Type 1": {
      icon: "🔢",
      name: "Der Perfektionist",
      desire: "Gut, tugendhaft und in Ordnung zu sein – moralisch korrekt und integer zu sein.",
      dynamic: "Sucht Perfektion, um Schuld und Scham zu vermeiden"
    },
    "Type 2": {
      icon: "💞",
      name: "Der Helfer",
      desire: "Sich geliebt zu fühlen – begehrt und geschätzt zu werden für das, wer man ist.",
      dynamic: "Gibt, um geliebt zu werden, kann sich aber selbst verlieren"
    },
    "Type 3": {
      icon: "🏆",
      name: "Der Erfolgstyp",
      desire: "Sich wertvoll zu fühlen – erfolgreich und anerkannt zu sein.",
      dynamic: "Leistet, um sich wertvoll zu fühlen, verliert aber an Authentizität"
    },
    "Type 4": {
      icon: "🎭",
      name: "Der Individualist",
      desire: "Sich selbst und seine Bedeutung zu finden – einzigartig und authentisch zu sein.",
      dynamic: "Sucht Besonderheit, fühlt sich aber oft missverstanden"
    },
    "Type 5": {
      icon: "🧠",
      name: "Der Beobachter",
      desire: "Kompetent und fähig zu sein – die Welt zu verstehen und zu meistern.",
      dynamic: "Zieht sich zurück, um Kontrolle und Wissen zu bewahren"
    },
    "Type 6": {
      icon: "🛡️",
      name: "Der Skeptiker",
      desire: "Sich sicher und unterstützt zu fühlen – Sicherheit und Führung zu haben.",
      dynamic: "Sucht Sicherheit, erzeugt aber oft Unsicherheit"
    },
    "Type 7": {
      icon: "🎉",
      name: "Der Abenteurer",
      desire: "Zufrieden und glücklich zu sein – Freude zu erleben und Schmerz zu vermeiden.",
      dynamic: "Vermeidet Schmerz durch Ablenkung und Oberflächlichkeit"
    },
    "Type 8": {
      icon: "💪",
      name: "Der Herausforderer",
      desire: "Unabhängig und in Kontrolle zu sein – sich selbst und die Seinen zu schützen.",
      dynamic: "Dominiert, um Verletzlichkeit zu vermeiden"
    },
    "Type 9": {
      icon: "☮️",
      name: "Der Friedensstifter",
      desire: "Innere Stabilität und Seelenfrieden zu haben – sich verbunden zu fühlen.",
      dynamic: "Vermeidet Konflikte, verliert sich aber selbst"
    }
  }
};

export const getTriadForType = (type: string): keyof typeof triadInfo.triads | null => {
  if (["Type 8", "Type 9", "Type 1"].includes(type)) return "body";
  if (["Type 2", "Type 3", "Type 4"].includes(type)) return "heart";
  if (["Type 5", "Type 6", "Type 7"].includes(type)) return "head";
  return null;
};
