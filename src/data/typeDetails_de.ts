export interface TypeDetail {
  type: string;
  title: string;
  worldview: string;
  focus: string;
  basicFear: string;
  basicDesire: string;
  innerDialogue: string;
  qualities: string[];
  passion: string;
  blindSpots: string[];
  thoughtPatterns: string[];
  strivesFor: string;
  attractedTo: string;
  dislikes: string;
  appearance: string;
  personalStrengths: string[];
  learning: string;
  motivatedBy: string;
  communication: string;
  relationships: {
    generalApproach: string;
    workApproach: string;
    teamPlayer: string;
    conflictPoints: string[];
    conflictHandling: string;
    developmentChallenge: string;
  };
  ifYouAreThisType: string[];
  ifYouWorkWithThisType: string[];
  underStress: {
    movesToType: string;
    description: string;
  };
  whenSecure: {
    movesToType: string;
    description: string;
  };
  notToBeConfusedWith?: {
    type: string;
    difference: string;
  }[];
}

export const typeDetails: Record<string, TypeDetail> = {
  // --- TYP 1: Der Perfektionist ---
  'Type 1': {
    type: 'Type 1',
    title: 'Der Perfektionist',
    worldview: 'Die Welt sollte gerechter und ordentlicher sein, ist es aber nicht immer. Daher schaffe ich meine eigenen Regeln und Standards dafür, wie Dinge getan werden sollten.',
    focus: 'Konzentriert sich darauf, das Richtige zu tun, Dinge zu verbessern und Fehler zu vermeiden. Hat ein scharfes Auge dafür, was besser gemacht werden kann.',
    basicFear: 'Falsch, unfähig oder moralisch fehlerhaft zu sein.',
    basicDesire: 'Gut, ordentlich zu sein und das Richtige zu tun.',
    innerDialogue: '"Das ist nicht gut genug." "So sollte es nicht gemacht werden." "Wenn ich es nicht richtig mache, macht es niemand."',
    qualities: ['Prinzipientreu', 'Organisiert', 'Zuverlässig', 'Verantwortungsbewusst', 'Idealistisch', 'Ethisch'],
    passion: 'Unterdrückte Wut – oft ausgedrückt als Irritation oder Kritik, wenn Dinge den eigenen Standards nicht entsprechen.',
    blindSpots: [
      'Kann zu kritisch gegenüber sich selbst und anderen sein',
      'Hat Schwierigkeiten, "gut genug" zu akzeptieren',
      'Kann auf der Jagd nach Details das große Ganze übersehen'
    ],
    thoughtPatterns: [
      'Vergleicht mit Idealen',
      'Fokussiert sich auf Fehler und Mängel',
      'Denkt in "sollte" und "muss"'
    ],
    strivesFor: 'Das Richtige tun, hohe Standards erfüllen und Ordnung schaffen.',
    attractedTo: 'Qualität, Struktur, Ethik und Menschen mit starken Prinzipien.',
    dislikes: 'Schlamperei, Ungerechtigkeit, Ineffizienz und Chaos.',
    appearance: 'Wirkt kontrolliert, gut organisiert und professionell. Umgebung und Auftreten sind oft gepflegt und ordentlich.',
    personalStrengths: [
      'Hohe Standards und Qualitätsbewusstsein',
      'Starke Arbeitsmoral und Verantwortungsgefühl',
      'Fähigkeit zur Verbesserung und Optimierung',
      'Ethischer und prinzipieller Ansatz'
    ],
    learning: 'Lernt am besten durch Struktur, klare Rahmenbedingungen und die Möglichkeit, Fähigkeiten zu verfeinern.',
    motivatedBy: 'Einen Unterschied machen, Dinge verbessern und für Qualität anerkannt werden.',
    communication: 'Präzise und strukturiert. Kann kritisch oder belehrend wirken, besonders wenn etwas die Erwartungen nicht erfüllt.',
    relationships: {
      generalApproach: 'Sucht Partner mit gleichen Werten und Standards. Kann kritisch, aber auch sehr loyal sein.',
      workApproach: 'Arbeitet gründlich und methodisch. Stellt hohe Anforderungen an sich selbst und andere. Liefert stabil und zuverlässig.',
      teamPlayer: 'Trägt mit Struktur und Qualitätskontrolle bei. Kann kritisch sein, sichert aber einen hohen Standard.',
      conflictPoints: [
        'Frustriert über die Schlamperei oder mangelnde Verantwortung anderer',
        'Kann urteilend oder besserwisserisch wirken',
        'Hat Schwierigkeiten, unterschiedliche Vorgehensweisen zu akzeptieren'
      ],
      conflictHandling: 'Vermeidet oft direkte Konfrontation, kann aber Irritation aufbauen. Sucht die "richtige" Antwort statt eines Kompromisses.',
      developmentChallenge: 'Unvollkommenheit akzeptieren und das Bedürfnis nach Kontrolle loslassen.'
    },
    ifYouAreThisType: [
      'Denken Sie daran, dass "gut genug" manchmal gut genug ist',
      'Üben Sie sich darin, positives Feedback zu geben – nicht nur Kritik',
      'Erlauben Sie sich, sich zu entspannen und Pausen zu machen',
      'Akzeptieren Sie, dass andere andere Standards haben als Sie',
      'Konzentrieren Sie sich auf Fortschritt statt Perfektion'
    ],
    ifYouWorkWithThisType: [
      'Erkennen Sie ihren Einsatz und ihre hohen Standards an',
      'Seien Sie vorbereitet und präzise in Ihrer Kommunikation',
      'Geben Sie ihnen Zeit und Raum, Dinge ordentlich zu erledigen',
      'Vermeiden Sie Schlamperei und Oberflächlichkeit',
      'Helfen Sie ihnen, das Positive in dem zu sehen, was sie bereits erreicht haben'
    ],
    underStress: {
      movesToType: 'Type 4',
      description: 'Unter Druck wird Typ 1 emotionaler und selbstkritischer. Sie können sich missverstanden fühlen und sich in Melancholie und Frustration zurückziehen. Es entsteht ein Gefühl der Ohnmacht, und sie können in ihrem Ausdruck schroff und explosiv werden, besonders wenn die Umgebung ihren inneren Standards nicht entspricht.'
    },
    whenSecure: {
      movesToType: 'Type 7',
      description: 'Wenn Typ 1 sich sicher und geborgen fühlt, lässt er das Bedürfnis nach Kontrolle los und öffnet sich für Spontaneität und Freude. Er wird spielerischer, optimistischer und offener für neue Erfahrungen und kann das Leben genießen, ohne alles verbessern oder korrigieren zu müssen.'
    },
    notToBeConfusedWith: [
      {
        type: 'Type 6 – Der Loyalist',
        difference: 'Beide können verantwortungsbewusst wirken, aber Typ 1 handelt aus inneren Prinzipien, während Typ 6 Sicherheit und Unterstützung in der Gemeinschaft sucht.'
      },
      {
        type: 'Type 5 – Der Beobachter',
        difference: 'Typ 1 wird von Ethik und Verbesserung angetrieben, während Typ 5 in seinem Ansatz neugieriger und neutraler ist.'
      },
      {
        type: 'Type 8 – Der Beschützer',
        difference: 'Typ 1 kämpft für das Richtige und die Ordnung, während Typ 8 für Freiheit und Kontrolle kämpft. Ihre Energien können kollidieren.'
      }
    ]
  },

  // --- TYP 2: Der Helfer ---
  'Type 2': {
    type: 'Type 2',
    title: 'Der Helfer',
    worldview: 'Die Welt ist voll von Menschen, die Fürsorge und Unterstützung brauchen. Ich fühle mich wertvoll, wenn ich für andere einen Unterschied machen kann.',
    focus: 'Konzentriert sich auf die Bedürfnisse und Gefühle anderer. Hat eine starke Intuition dafür, wie sie helfen und eine Verbindung herstellen können.',
    basicFear: 'Ungeliebt, übersehen oder für andere unwichtig zu sein.',
    basicDesire: 'Sich geliebt und geschätzt zu fühlen. Wichtig und notwendig im Leben anderer zu sein.',
    innerDialogue: '"Was brauchst du?" "Wie kann ich dich glücklich machen?" "Ich hoffe, sie schätzen mich."',
    qualities: ['Fürsorglich', 'Empathisch', 'Großzügig', 'Unterstützend', 'Warmherzig', 'Intuitiv'],
    passion: 'Stolz – ein Gefühl der Unentbehrlichkeit und derjenige zu sein, der einen Unterschied macht.',
    blindSpots: [
      'Vergisst eigene Bedürfnisse und Grenzen',
      'Kann Hilfsbereitschaft nutzen, um Aufmerksamkeit zu bekommen',
      'Hat Schwierigkeiten, Nein zu sagen und klare Grenzen zu setzen'
    ],
    thoughtPatterns: [
      'Denkt darüber nach, wie es anderen geht',
      'Überlegt, wie sie helfen können',
      'Macht sich Sorgen um Beziehungen und darum, geschätzt zu werden'
    ],
    strivesFor: 'Geliebt und bedeutungsvoll zu sein. Wärme und Präsenz um sich herum zu schaffen.',
    attractedTo: 'Menschen, die Unterstützung brauchen, enge Beziehungen und emotionale Verbindung.',
    dislikes: 'Kälte, Egoismus, ignoriert oder für selbstverständlich gehalten zu werden.',
    appearance: 'Freundlich und zugänglich. Kleidet sich oft, um zu gefallen oder Kontakt herzustellen.',
    personalStrengths: [
      'Starke Empathie und emotionales Verständnis',
      'Fähigkeit, sichere und warme Beziehungen aufzubauen',
      'Großzügigkeit und Hilfsbereitschaft',
      'Intuitives Gespür für die Bedürfnisse anderer'
    ],
    learning: 'Lernt am besten durch Beziehungen und praktische Erfahrungen in unterstützenden Umgebungen.',
    motivatedBy: 'Dankbarkeit, Anerkennung und die Möglichkeit, für andere einen Unterschied zu machen.',
    communication: 'Warmherzig und persönlich. Fragt nach dem Wohlbefinden anderer und zeigt Fürsorge.',
    relationships: {
      generalApproach: 'Gibt viel von sich und sucht Beziehungen, in denen ihre Fürsorge geschätzt wird.',
      workApproach: 'Schafft Wohlbefinden und gute Beziehungen im Team. Konzentriert sich auf das Menschliche.',
      teamPlayer: 'Derjenige, der dafür sorgt, dass sich alle wohlfühlen. Unterstützt und ermutigt Kollegen.',
      conflictPoints: [
        'Fühlt sich übersehen oder nicht gewürdigt',
        'Kann manipulativ werden, um Aufmerksamkeit zu bekommen',
        'Ignoriert eigene Bedürfnisse und Grenzen'
      ],
      conflictHandling: 'Vermeidet direkte Konfrontation, kann aber passiv-aggressiv reagieren, wenn sie nicht geschätzt wird.',
      developmentChallenge: 'Lernen, eigene Bedürfnisse auszudrücken und gesunde Grenzen zu setzen.'
    },
    ifYouAreThisType: [
      'Denken Sie daran, sich um sich selbst zu kümmern – nicht nur um andere',
      'Üben Sie sich darin, um Hilfe zu bitten und Verletzlichkeit zu zeigen',
      'Setzen Sie Grenzen dafür, wie viel Sie geben',
      'Erkennen Sie Ihren Wert unabhängig von Ihrer Hilfsbereitschaft an',
      'Seien Sie ehrlich über Ihre Gefühle und Bedürfnisse'
    ],
    ifYouWorkWithThisType: [
      'Zeigen Sie Dankbarkeit für ihre Unterstützung und Fürsorge',
      'Fragen Sie nach ihrem Wohlbefinden – nicht nur danach, was sie für andere tun',
      'Erkennen Sie ihren Beitrag zum Wohlbefinden des Teams an',
      'Helfen Sie ihnen, sich selbst zu priorisieren',
      'Seien Sie persönlich und warmherzig in der Kommunikation'
    ],
    underStress: {
      movesToType: 'Type 8',
      description: 'Wenn Typ 2 unter Druck steht, kann er kontrollierender und wütender werden. Er fordert Anerkennung und kann aggressiv reagieren, besonders wenn er sich übersehen oder nicht gewürdigt fühlt. Ihre Hilfsbereitschaft wird zu einer Möglichkeit, Macht und Aufmerksamkeit zu erlangen.'
    },
    whenSecure: {
      movesToType: 'Type 4',
      description: 'In sicheren Umgebungen bekommt Typ 2 besseren Kontakt zu eigenen Gefühlen und Bedürfnissen. Er wird authentischer und kreativer und drückt sich mit Tiefe und Echtheit aus, ohne von der Bestätigung anderer abhängig zu sein.'
    },
    notToBeConfusedWith: [
      {
        type: 'Type 6 – Der Loyalist',
        difference: 'Beide sind fürsorglich und beziehungsorientiert, aber Typ 2 sucht emotionale Nähe, während Typ 6 Sicherheit und Stabilität in der Gemeinschaft sucht.'
      },
      {
        type: 'Type 9 – Der Friedensstifter',
        difference: 'Beide können warmherzig und zugänglich wirken, aber Typ 2 sucht aktiv Kontakt und ist hilfsbereit, während Typ 9 passiver und ausweichender ist.'
      },
      {
        type: 'Type 4 – Der Individualist',
        difference: 'Beide haben starke Gefühle, aber Typ 2 konzentriert sich auf die Bedürfnisse anderer, während Typ 4 sich auf eigene Gefühle und Identität konzentriert.'
      }
    ]
  },

  // --- TYP 3: Der Erfolgreiche ---
  'Type 3': {
    type: 'Type 3',
    title: 'Der Leistungsorientierte',
    worldview: 'Die Welt belohnt diejenigen, die Erfolg haben und Ergebnisse erzielen. Ich fühle mich wertvoll, wenn ich etwas erreiche und dafür anerkannt werde.',
    focus: 'Konzentriert sich auf Ziele, Effizienz und das eigene Erscheinungsbild. Will der Beste sein und dabei gut aussehen.',
    basicFear: 'Wertlos zu sein, wenn sie nicht leisten. Angst vor Versagen und Übersehenwerden.',
    basicDesire: 'Sich wertvoll zu fühlen und für die eigenen Leistungen und Fähigkeiten anerkannt zu werden.',
    innerDialogue: '"Was muss ich heute erreichen?" "Wie sieht das aus?" "Ich muss der Beste sein."',
    qualities: ['Zielstrebig', 'Energisch', 'Pragmatisch', 'Selbstbewusst', 'Anpassungsfähig', 'Ehrgeizig'],
    passion: 'Selbsttäuschung – sowohl sich selbst als auch anderen gegenüber, wer sie wirklich hinter der Fassade sind.',
    blindSpots: [
      'Kann den Kontakt zu eigenen Gefühlen verlieren',
      'Konzentriert sich auf das Image statt auf den Inhalt',
      'Hat Schwierigkeiten, Fehler und Verletzlichkeit zu akzeptieren'
    ],
    thoughtPatterns: [
      'Denkt in Zielen und Ergebnissen',
      'Überlegt, was andere beeindrucken wird',
      'Konzentriert sich darauf, effizient und erfolgreich zu sein'
    ],
    strivesFor: 'Erfolg, Anerkennung und der Beste zu sein.',
    attractedTo: 'Projekte mit Prestige, sichtbare Ergebnisse und Menschen, die ihr Image stärken können.',
    dislikes: 'Misserfolg, Ineffizienz und ignoriert oder als mittelmäßig angesehen zu werden.',
    appearance: 'Professionell und gut gekleidet. Wirkt selbstbewusst und kompetent – oft mit einem polierten Äußeren.',
    personalStrengths: [
      'Starker Antrieb und Zielstrebigkeit',
      'Fähigkeit, zu inspirieren und zu motivieren',
      'Pragmatische Problemlösung',
      'Flexibilität und Anpassungsfähigkeit'
    ],
    learning: 'Lernt am besten durch praktische Erfahrung, Wettbewerb und messbare Ergebnisse.',
    motivatedBy: 'Erfolg, Anerkennung und die Möglichkeit, sich hervorzuheben.',
    communication: 'Direkt und zielorientiert. Kann inspirierend sein, konzentriert sich aber auch auf Ergebnisse statt auf Gefühle.',
    relationships: {
      generalApproach: 'Sucht Partner, die ihre Ambitionen unterstützen und ihren Fokus auf Erfolg teilen.',
      workApproach: 'Gedeiht in Wettbewerbs- und ergebnisorientierten Umgebungen. Bringt Dinge ins Rollen.',
      teamPlayer: 'Treiber des Teams und inspiriert zu hoher Leistung.',
      conflictPoints: [
        'Kann Ergebnisse über Beziehungen stellen',
        'Hat Schwierigkeiten, Verletzlichkeit zu zeigen',
        'Wird ungeduldig mit langsamen oder ineffizienten Prozessen'
      ],
      conflictHandling: 'Konzentriert sich auf Lösungen und Fortschritt. Vermeidet oft emotionale Aspekte.',
      developmentChallenge: 'Lernen, sich selbst für das zu schätzen, was sie sind – nicht nur für das, was sie erreichen.'
    },
    ifYouAreThisType: [
      'Nehmen Sie sich Zeit, um Ihre Gefühle und Bedürfnisse wahrzunehmen',
      'Schätzen Sie den Prozess – nicht nur das Ergebnis',
      'Teilen Sie Ihre Unsicherheiten mit Vertrauenspersonen',
      'Denken Sie daran, dass Fehler Teil des Lernens sind',
      'Priorisieren Sie echte und enge Beziehungen'
    ],
    ifYouWorkWithThisType: [
      'Erkennen Sie ihre Leistungen und ihren Einsatz an',
      'Seien Sie effektiv und zielorientiert in Ihrer Kommunikation',
      'Geben Sie ihnen sichtbare und herausfordernde Aufgaben',
      'Unterstützen Sie ihre Ambitionen – aber erinnern Sie sie an die Balance',
      'Helfen Sie ihnen, den Wert in dem zu sehen, was nicht messbar ist'
    ],
    underStress: {
      movesToType: 'Type 9',
      description: 'Unter Stress verliert Typ 3 die Motivation und wird passiv. Er zieht sich von Aufgaben zurück und meidet Herausforderungen und kann unbeteiligt und emotional abgekoppelt wirken.'
    },
    whenSecure: {
      movesToType: 'Type 6',
      description: 'Wenn Typ 3 sich sicher fühlt, wird er teamorientierter und loyaler. Er konzentriert sich darauf, anderen zum Erfolg zu verhelfen, und lässt das Bedürfnis los, ständig beeindrucken zu müssen.'
    },
    notToBeConfusedWith: [
      {
        type: 'Type 1 – Der Perfektionist',
        difference: 'Beide sind ehrgeizig und zielstrebig, aber Typ 1 handelt aus inneren Prinzipien und Ethik, während Typ 3 sich auf äußeren Erfolg und Anerkennung konzentriert.'
      },
      {
        type: 'Type 7 – Der Enthusiast',
        difference: 'Beide sind energisch und handlungsorientiert, aber Typ 3 plant und optimiert, während Typ 7 Erlebnisse sucht und Einschränkungen meidet.'
      },
      {
        type: 'Type 8 – Der Beschützer',
        difference: 'Beide sind stark und tatkräftig, aber Typ 3 sucht Anerkennung und Image, während Typ 8 Kontrolle und Gerechtigkeit sucht.'
      }
    ]
  },

  // --- TYP 4: Der Individualist ---
  'Type 4': {
    type: 'Type 4',
    title: 'Der Individualist',
    worldview: 'Ich fühle mich anders und mir fehlt etwas, das andere haben. Ich suche Tiefe, Sinn und Authentizität in allem, was ich tue.',
    focus: 'Konzentriert sich auf Gefühle, Identität und das, was fehlt. Möchte einzigartig und verstanden sein.',
    basicFear: 'Ohne Identität oder Bedeutung zu sein. Angst, gewöhnlich und uninteressant zu sein.',
    basicDesire: 'Sich selbst zu finden und für die eigene Authentizität und das einzigartige Wesen geschätzt zu werden.',
    innerDialogue: '"Was fehlt mir?" "Verstehen sie mich?" "Ich bin anders als alle anderen."',
    qualities: ['Kreativ', 'Sensibel', 'Introspektiv', 'Authentisch', 'Empathisch', 'Ästhetisch'],
    passion: 'Neid – ein Gefühl, dass andere etwas haben, das ihnen selbst fehlt und nach dem sie sich sehnen.',
    blindSpots: [
      'Konzentriert sich zu sehr auf das Negative oder das, was fehlt',
      'Kann selbstbezogen und emotional dramatisch werden',
      'Hat Schwierigkeiten, das Gewöhnliche und Alltägliche wertzuschätzen'
    ],
    thoughtPatterns: [
      'Vergleicht sich mit anderen',
      'Fühlt sich anders und ausgeschlossen',
      'Sucht nach tieferem Sinn und Echtheit'
    ],
    strivesFor: 'Authentisch, einzigartig zu sein und sich tief mit etwas Sinnvollem verbunden zu fühlen.',
    attractedTo: 'Schönheit, Tiefe, Kreativität und Menschen, die ihre Gefühle verstehen.',
    dislikes: 'Oberflächlichkeit, Konformität, missverstanden oder ignoriert zu werden.',
    appearance: 'Drückt seine Individualität durch persönlichen Stil und Ästhetik aus. Wirkt oft künstlerisch oder alternativ.',
    personalStrengths: [
      'Tiefes emotionales Verständnis',
      'Kreativität und ästhetisches Gespür',
      'Authentizität und Ehrlichkeit',
      'Fähigkeit, Schönheit im Schwierigen und Komplexen zu sehen'
    ],
    learning: 'Lernt am besten durch kreativen Ausdruck, persönliche Verbindungen und emotionales Engagement.',
    motivatedBy: 'Die Möglichkeit, sich authentisch auszudrücken, etwas Einzigartiges zu schaffen und verstanden zu werden.',
    communication: 'Emotional, persönlich und oft poetisch. Sucht Tiefe und Sinn in Gesprächen.',
    relationships: {
      generalApproach: 'Sucht tiefe und authentische Verbindungen mit Menschen, die ihre Komplexität aufnehmen können.',
      workApproach: 'Gedeiht in kreativen und freien Umgebungen, in denen sie ihre Individualität ausdrücken können.',
      teamPlayer: 'Trägt mit Kreativität und emotionaler Tiefe bei. Kann launisch sein und sich bei Konflikten zurückziehen.',
      conflictPoints: [
        'Kann emotional intensiv und dramatisch sein',
        'Hat Schwierigkeiten mit Routinen und Struktur',
        'Zieht sich zurück, wenn er sich missverstanden fühlt'
      ],
      conflictHandling: 'Reagiert emotional oder zieht sich zurück. Sucht Verständnis und tiefen Kontakt.',
      developmentChallenge: 'Das Gewöhnliche akzeptieren und Schönheit im Alltag finden.'
    },
    ifYouAreThisType: [
      'Üben Sie sich darin, das Positive in Ihrem Leben zu sehen',
      'Akzeptieren Sie, dass alle schwierige Phasen haben – Sie sind nicht allein',
      'Finden Sie Schönheit im Gewöhnlichen und Alltäglichen',
      'Teilen Sie Ihre Gefühle auf konstruktive Weise',
      'Schätzen Sie Stabilität und Routinen als Unterstützung'
    ],
    ifYouWorkWithThisType: [
      'Erkennen Sie ihre Kreativität und einzigartige Perspektive an',
      'Seien Sie authentisch und ehrlich in Ihrer Kommunikation',
      'Geben Sie ihnen Raum für emotionalen Ausdruck',
      'Vermeiden Sie oberflächliche Gespräche und schnelle Lösungen',
      'Unterstützen Sie ihre kreativen und persönlichen Projekte'
    ],
    underStress: {
      movesToType: 'Type 2',
      description: 'Wenn Typ 4 unter Druck steht, wird er klammernd und sucht Aufmerksamkeit und Bestätigung. Er kann sich in der Beziehung verlieren und versuchen, andere dazu zu bringen, seine emotionalen Bedürfnisse zu erfüllen.'
    },
    whenSecure: {
      movesToType: 'Type 1',
      description: 'In sicheren Rahmenbedingungen wird Typ 4 strukturierter und disziplinierter. Er setzt seine Kreativität in konkrete Ergebnisse um und bekommt ein stärkeres Gefühl für Zweck und Richtung.'
    },
    notToBeConfusedWith: [
      {
        type: 'Type 5 – Der Beobachter',
        difference: 'Beide sind introspektiv und tiefgründig, aber Typ 4 ist gefühlsgesteuert und sucht Kontakt, während Typ 5 rationaler ist und Distanz sucht.'
      },
      {
        type: 'Type 6 – Der Loyalist',
        difference: 'Beide können emotional intensiv sein, aber Typ 4 sucht Authentizität und Tiefe, während Typ 6 Sicherheit und Stabilität sucht.'
      },
      {
        type: 'Type 9 – Der Friedensstifter',
        difference: 'Beide können sich in sich zurückziehen, aber Typ 4 tut dies mit Gefühlen und Sehnsucht, während Typ 9 dies tut, um Konflikte und Unruhe zu vermeiden.'
      }
    ]
  },
  
  // --- TYP 5: Der Forscher ---
  'Type 5': {
    type: 'Type 5',
    title: 'Der Forscher',
    worldview: 'Die Welt kann überwältigend und fordernd sein. Ich muss die Dinge verstehen und meine Energie schützen, bevor ich mich engagiere.',
    focus: 'Konzentriert sich auf Beobachten, Analysieren und das Bewahren von Ressourcen – sowohl mental als auch emotional.',
    basicFear: 'Überfallen, überwältigt oder ohne Kompetenz dazustehen.',
    basicDesire: 'Kompetent zu sein und die Welt auf einer tiefen und bedeutungsvollen Ebene zu verstehen.',
    innerDialogue: '"Ich brauche mehr Informationen." "Was, wenn ich es nicht schaffe?" "Ich brauche Zeit zum Nachdenken."',
    qualities: ['Analytisch', 'Selbstständig', 'Neugierig', 'Objektiv', 'Privat', 'Wahrnehmend'],
    passion: 'Geiz – ein Drang, Wissen anzuhäufen und eigene Ressourcen zu schützen.',
    blindSpots: [
      'Kann sich isolieren und emotional distanziert werden',
      'Hat Schwierigkeiten zu handeln, ohne volles Verständnis',
      'Kann unbeteiligt oder abwesend wirken'
    ],
    thoughtPatterns: [
      'Analysiert und kategorisiert Informationen',
      'Denkt darüber nach, wie sie Energie bewahren können',
      'Sucht nach Mustern und tieferem Verständnis'
    ],
    strivesFor: 'Kompetenz, Einsicht und Unabhängigkeit.',
    attractedTo: 'Komplexe Systeme, tiefes Wissen und Menschen, die ihr Bedürfnis nach Raum respektieren.',
    dislikes: 'Oberflächlichkeit, emotionale Übergriffe und Druck zu schnellem Handeln.',
    appearance: 'Zurückhaltend und beobachtend. Kleidet sich oft neutral und praktisch.',
    personalStrengths: [
      'Tiefes analytisches Denken',
      'Objektivität und Unparteilichkeit',
      'Selbstständigkeit und Fähigkeit, alleine zu arbeiten',
      'Fähigkeit, das große Ganze zu sehen und langfristig zu denken'
    ],
    learning: 'Lernt am besten durch Selbststudium, Beobachtung und Zeit zur Vertiefung.',
    motivatedBy: 'Die Möglichkeit, komplexe Themen zu verstehen und ungestört zu arbeiten.',
    communication: 'Präzise und faktenbasiert. Teilt Wissen, wenn sie sich sicher und kompetent fühlen.',
    relationships: {
      generalApproach: 'Bevorzugt wenige, tiefe Beziehungen mit Menschen, die ihr Bedürfnis nach Alleinzeit respektieren.',
      workApproach: 'Gedeiht bei komplexen Aufgaben und arbeitet am besten selbstständig.',
      teamPlayer: 'Trägt mit Expertise und Objektivität bei. Kann ruhig und zurückhaltend sein.',
      conflictPoints: [
        'Kann emotionslos oder uninteressiert wirken',
        'Hat Schwierigkeiten, Gefühle und Bedürfnisse zu teilen',
        'Zieht sich oft bei Druck oder emotionaler Konfrontation zurück'
      ],
      conflictHandling: 'Zieht sich zurück, um nachzudenken. Bevorzugt schriftliche oder indirekte Kommunikation.',
      developmentChallenge: 'Sich emotional zu engagieren und Gedanken und Gefühle mit anderen zu teilen.'
    },
    ifYouAreThisType: [
      'Üben Sie sich darin, Ihre Gedanken und Gefühle zu teilen – auch wenn es sich ungewohnt anfühlt',
      'Setzen Sie Grenzen, anstatt sich nur zurückzuziehen',
      'Engagieren Sie sich in kleinen sozialen Aktivitäten',
      'Denken Sie daran, dass Handeln kein perfektes Verständnis erfordert',
      'Schätzen Sie Ihre Gefühle als wichtige Informationen – nicht nur als Störungen'
    ],
    ifYouWorkWithThisType: [
      'Respektieren Sie ihr Bedürfnis nach Zeit und Raum',
      'Geben Sie ihnen Informationen im Voraus und vermeiden Sie Druck',
      'Schätzen Sie ihr Wissen und ihre analytischen Fähigkeiten',
      'Kommunizieren Sie klar und präzise – vermeiden Sie emotionalen Druck',
      'Schaffen Sie sichere Rahmenbedingungen für die Zusammenarbeit, ohne einzudringen'
    ],
    underStress: {
      movesToType: 'Type 7',
      description: 'Unter Stress wird Typ 5 unruhig und verzettelt sich. Er verliert den Fokus und handelt impulsiv, oft ohne die übliche Reflexion und Analyse.'
    },
    whenSecure: {
      movesToType: 'Type 8',
      description: 'Wenn Typ 5 sich sicher fühlt, wird er selbstbewusster und tatkräftiger. Er wagt es, Verantwortung zu übernehmen und mit seinem Wissen und seinen Entscheidungen hervorzutreten.'
    },
    notToBeConfusedWith: [
      {
        type: 'Type 4 – Der Individualist',
        difference: 'Beide sind introspektiv, aber Typ 4 ist gefühlsgesteuert und sucht Kontakt, während Typ 5 rational ist und Distanz sucht.'
      },
      {
        type: 'Type 9 – Der Friedensstifter',
        difference: 'Beide können ruhig und zurückgezogen wirken, aber Typ 5 zieht sich zurück, um nachzudenken, während Typ 9 dies tut, um Konflikte zu vermeiden.'
      },
      {
        type: 'Type 1 – Der Perfektionist',
        difference: 'Beide haben Prinzipien, aber Typ 1 handelt aus Ethik und Korrektheit, während Typ 5 Prinzipien als mentale Konstrukte betrachtet, die untersucht und in Frage gestellt werden können.'
      }
    ]
  },

  // --- TYP 6: Der Loyalist ---
  'Type 6': {
    type: 'Type 6',
    title: 'Der Loyalist',
    worldview: 'Die Welt fühlt sich unvorhersehbar und unsicher an. Ich brauche Unterstützung und klare Rahmenbedingungen, um mich sicher zu fühlen.',
    focus: 'Konzentriert sich auf Sicherheit, Vertrauen und darauf, wem man vertrauen kann. Ist sich potenzieller Probleme und Risiken bewusst.',
    basicFear: 'Alleine ohne Unterstützung oder Anleitung dazustehen. Angst, Fehler zu machen und im Stich gelassen zu werden.',
    basicDesire: 'Sich sicher und unterstützt zu fühlen. Jemanden oder etwas zu haben, an das man sich anlehnen kann.',
    innerDialogue: '"Was ist, wenn etwas schiefgeht?" "Kann ich ihnen vertrauen?" "Was soll ich tun?"',
    qualities: ['Loyal', 'Verantwortlich', 'Vorsichtig', 'Kooperativ', 'Zuverlässig', 'Engagiert'],
    passion: 'Angst – eine ständige innere Unruhe und Besorgnis, die zu Zweifel und Überkontrolle führen kann.',
    blindSpots: [
      'Kann sich unnötig sorgen und Probleme sehen, bevor sie entstehen',
      'Hat Schwierigkeiten, eigenen Entscheidungen zu vertrauen',
      'Kann eigene Angst-Szenarien auf andere übertragen'
    ],
    thoughtPatterns: [
      'Denkt in Worst-Case-Szenarien',
      'Sucht Sicherheit und Unterstützung',
      'Analysiert die Motive und Absichten von Menschen'
    ],
    strivesFor: 'Sicherheit, Stabilität und Loyalität.',
    attractedTo: 'Klare Strukturen, zuverlässige Menschen und sichere Gemeinschaften.',
    dislikes: 'Unsicherheit, Verrat, Unvorhersehbarkeit und alleine mit Verantwortung dazustehen.',
    appearance: 'Oft wachsam und leicht besorgt. Kleidet sich praktisch und angemessen.',
    personalStrengths: [
      'Starke Loyalität und Verantwortungsgefühl',
      'Fähigkeit, Probleme und Risiken vorauszusehen',
      'Gut in der Zusammenarbeit und darin, andere zu unterstützen',
      'Engagiert und prinzipientreu'
    ],
    learning: 'Lernt am besten in sicheren und strukturierten Rahmenbedingungen mit klarem Feedback.',
    motivatedBy: 'Anerkennung ihrer Loyalität und die Möglichkeit, zur Gemeinschaft beizutragen.',
    communication: 'Fragend und vorsichtig. Sucht Bestätigung und Klarheit.',
    relationships: {
      generalApproach: 'Sucht stabile und loyale Beziehungen, in denen gegenseitige Unterstützung herrscht.',
      workApproach: 'Gedeiht in strukturierten Umgebungen mit klaren Erwartungen und Führung.',
      teamPlayer: 'Sehr engagiert und loyal. Arbeitet hart für den Erfolg des Teams.',
      conflictPoints: [
        'Kann übermäßig besorgt und pessimistisch sein',
        'Hat Schwierigkeiten, alleine Entscheidungen zu treffen',
        'Kann unter Druck defensiv und misstrauisch werden'
      ],
      conflictHandling: 'Sucht Unterstützung und Klärung. Kann entweder unterwürfig oder rebellisch reagieren.',
      developmentChallenge: 'Mehr Vertrauen in sich selbst und die eigenen Urteile zu fassen.'
    },
    ifYouAreThisType: [
      'Üben Sie sich darin, Ihren eigenen Entscheidungen zu vertrauen',
      'Konzentrieren Sie sich auf das, was gut läuft – nicht nur auf das, was schiefgehen könnte',
      'Machen Sie kleine Schritte in Richtung mehr Unabhängigkeit',
      'Suchen Sie ehrliches und konstruktives Feedback',
      'Denken Sie daran, dass die meisten Menschen Ihnen Gutes wollen'
    ],
    ifYouWorkWithThisType: [
      'Seien Sie klar und konsequent in Ihrer Kommunikation',
      'Geben Sie ihnen Sicherheit und klare Rahmenbedingungen',
      'Erkennen Sie ihre Loyalität und ihren Einsatz an',
      'Helfen Sie ihnen, ihre Stärken zu sehen',
      'Seien Sie geduldig mit ihren Sorgen und ihrem Bedürfnis nach Klärung'
    ],
    underStress: {
      movesToType: 'Type 3',
      description: 'Unter Stress wird Typ 6 wettbewerbsorientierter und konzentriert sich darauf, ihren Wert zu beweisen. Sie können übermäßig leistungsorientiert wirken und den Kontakt zu ihrem inneren Kompass verlieren.'
    },
    whenSecure: {
      movesToType: 'Type 9',
      description: 'In sicheren Beziehungen wird Typ 6 entspannter und vertrauensvoller. Sie lassen die Sorgen los und finden Ruhe im Augenblick, mit größerem Vertrauen in sich selbst und andere.'
    },
    notToBeConfusedWith: [
      {
        type: 'Type 1 – Der Perfektionist',
        difference: 'Beide haben starke Prinzipien, aber Typ 1 handelt aus innerer Ethik, während Typ 6 Sicherheit und Unterstützung in der Gemeinschaft sucht.'
      },
      {
        type: 'Type 2 – Der Helfer',
        difference: 'Beide sind beziehungsorientiert, aber Typ 2 sucht emotionale Nähe, während Typ 6 Stabilität und Loyalität sucht.'
      },
      {
        type: 'Type 5 – Der Forscher',
        difference: 'Beide können vorsichtig und analytisch sein, aber Typ 5 zieht sich zurück, um nachzudenken, während Typ 6 Unterstützung und Klärung sucht.'
      }
    ]
  },

  // --- TYP 7: Der Enthusiast ---
  'Type 7': {
    type: 'Type 7',
    title: 'Der Enthusiast',
    worldview: 'Die Welt ist voller Möglichkeiten und Erlebnisse, und das Leben sollte lustig und aufregend sein. Ich vermeide Schmerz, indem ich mich auf das Positive konzentriere und neue Abenteuer plane.',
    focus: 'Konzentriert sich auf die Zukunft, Möglichkeiten und all das Lustige, das passieren kann. Meidet Einschränkungen und schwierige Gefühle.',
    basicFear: 'In Schmerz, Langeweile oder Einschränkung gefangen zu sein. Angst, etwas zu verpassen.',
    basicDesire: 'Glücklich und frei zu sein. Seine Bedürfnisse erfüllt zu bekommen und ein reiches und aufregendes Leben zu führen.',
    innerDialogue: '"Was kann ich Lustiges machen?" "Es gibt so viele Möglichkeiten!" "Ich will nichts verpassen."',
    qualities: ['Optimistisch', 'Spontan', 'Vielseitig', 'Abenteuerlustig', 'Energisch', 'Inspirierend'],
    passion: 'Völlerei – ein übermäßiger Drang, so viele Erlebnisse und Eindrücke wie möglich zu bekommen.',
    blindSpots: [
      'Meidet schwierige Gefühle und Schmerz',
      'Hat Schwierigkeiten, sich zu verpflichten',
      'Kann oberflächlich oder unverantwortlich wirken'
    ],
    thoughtPatterns: [
      'Denkt an zukünftige Möglichkeiten',
      'Plant lustige Aktivitäten',
      'Vermeidet negative Gedanken und Gefühle'
    ],
    strivesFor: 'Freiheit, Abwechslung und Freude.',
    attractedTo: 'Neue Erlebnisse, kreative Menschen und spannende Ideen.',
    dislikes: 'Einschränkungen, Routinen, Negativität und Langeweile.',
    appearance: 'Energisch und lächelnd. Kleidet sich oft farbenfroh und kreativ.',
    personalStrengths: [
      'Positive und inspirierende Lebenseinstellung',
      'Kreativität und die Fähigkeit, Möglichkeiten zu sehen',
      'Flexibilität und Anpassungsfähigkeit',
      'Fähigkeit, Energie und Freude zu verbreiten'
    ],
    learning: 'Lernt am besten durch Abwechslung, praktische Übungen und kreative Herausforderungen.',
    motivatedBy: 'Freiheit, neue Erlebnisse und die Möglichkeit, andere zu inspirieren und zu engagieren.',
    communication: 'Enthusiastisch und energisch. Springt oft zwischen Themen und konzentriert sich auf das Positive.',
    relationships: {
      generalApproach: 'Sucht Partner, die ihre Lust auf Abenteuer und Lebensfreude teilen.',
      workApproach: 'Gedeiht in dynamischen und kreativen Umgebungen. Braucht Abwechslung und Freiheit.',
      teamPlayer: 'Trägt mit Energie und Ideen bei. Kann Schwierigkeiten haben, den Fokus zu behalten und nachzuverfolgen.',
      conflictPoints: [
        'Meidet schwierige Gespräche und Gefühle',
        'Kann unverantwortlich oder leichtfertig wirken',
        'Hat Schwierigkeiten, sich auf Struktur und Details einzulassen'
      ],
      conflictHandling: 'Versucht, den Konflikt positiv zu gestalten oder meidet ihn ganz.',
      developmentChallenge: 'Lernen, bei schwierigen Gefühlen präsent zu sein und sich tief zu verpflichten.'
    },
    ifYouAreThisType: [
      'Üben Sie sich darin, bei schwierigen Gefühlen präsent zu sein',
      'Konzentrieren Sie sich darauf, Projekte abzuschließen',
      'Setzen Sie Grenzen dafür, wie viel Sie sich vornehmen',
      'Schätzen Sie Tiefe statt Breite',
      'Lernen Sie, zu einigen Möglichkeiten Nein zu sagen'
    ],
    ifYouWorkWithThisType: [
      'Geben Sie ihnen Abwechslung und kreative Herausforderungen',
      'Seien Sie positiv und enthusiastisch',
      'Helfen Sie ihnen, sich zu konzentrieren und Prioritäten zu setzen',
      'Vermeiden Sie zu viele Einschränkungen',
      'Schätzen Sie ihre Energie und ihren Optimismus'
    ],
    underStress: {
      movesToType: 'Type 1',
      description: 'Unter Stress wird Typ 7 kritisch und perfektionistisch. Er konzentriert sich auf Fehler, verliert seine positive Einstellung und kann frustriert über Einschränkungen und Verantwortung werden.'
    },
    whenSecure: {
      movesToType: 'Type 5',
      description: 'Wenn Typ 7 sich sicher fühlt, wird er fokussierter und analytischer. Er vertieft sich und arbeitet in die Tiefe und lässt das Bedürfnis nach ständiger Stimulation los.'
    },
    notToBeConfusedWith: [
      {
        type: 'Type 3 – Der Leistungsorientierte',
        difference: 'Beide sind energisch und handlungsorientiert, aber Typ 3 sucht Anerkennung und Erfolg, während Typ 7 Erlebnisse und Freiheit sucht.'
      },
      {
        type: 'Type 9 – Der Friedensstifter',
        difference: 'Beide können entspannt und positiv wirken, aber Typ 9 meidet Konflikte, indem er sich anpasst, während Typ 7 Schmerz meidet, indem er sich ablenkt.'
      },
      {
        type: 'Type 4 – Der Individualist',
        difference: 'Beide suchen Tiefe und Sinn, aber Typ 4 taucht in die Gefühle ein, während Typ 7 versucht, sie zu vermeiden und sich im Positiven zu halten.'
      }
    ]
  },

  // --- TYP 8: Der Herausforderer ---
  'Type 8': {
    type: 'Type 8',
    title: 'Der Herausforderer',
    worldview: 'Die Welt ist hart und ungerecht. Ich muss stark sein und Verantwortung übernehmen – sowohl für mich selbst als auch für diejenigen, die mir wichtig sind.',
    focus: 'Konzentriert sich auf Kontrolle, Gerechtigkeit und Schutz. Will sicherstellen, dass niemand ausgenutzt oder im Stich gelassen wird.',
    basicFear: 'Kontrolliert, verraten oder verletzt zu werden. Angst, die Macht zu verlieren und verletzlich zu sein.',
    basicDesire: 'Unabhängig zu sein und Kontrolle über das eigene Leben und Schicksal zu haben.',
    innerDialogue: '"Ich muss stark sein." "Wer versucht, mich zu kontrollieren?" "Ich beschütze diejenigen, die mir wichtig sind."',
    qualities: ['Stark', 'Direkt', 'Selbstbewusst', 'Beschützend', 'Gerecht', 'Tatkräftig'],
    passion: 'Wollust – ein übermäßiger Drang nach Intensität, Kontrolle und Dominanz.',
    blindSpots: [
      'Kann zu dominant und kontrollierend sein',
      'Hat Schwierigkeiten, Verletzlichkeit zu zeigen',
      'Kann beängstigend oder einschüchternd wirken'
    ],
    thoughtPatterns: [
      'Denkt in Macht und Kontrolle'
    ],
    strivesFor: 'Unabhängigkeit, Kontrolle und Gerechtigkeit.',
    attractedTo: 'Herausforderungen, Macht und Menschen, die ihre Stärke respektieren.',
    dislikes: 'Schwäche, Verrat, Ungerechtigkeit und Manipulation.',
    appearance: 'Kräftig und entschlossen. Wirkt oft autoritär und selbstsicher.',
    personalStrengths: [
      'Stärke und Entschlossenheit',
      'Fähigkeit, schnell Entscheidungen zu treffen und zu handeln',
      'Loyalität und Beschützerinstinkt',
      'Geradlinigkeit und Ehrlichkeit'
    ],
    learning: 'Lernt am besten durch direkte Erfahrung, Herausforderungen und Übernahme von Verantwortung.',
    motivatedBy: 'Macht, Kontrolle, Gerechtigkeit und die Möglichkeit, diejenigen zu schützen, die sie lieben.',
    communication: 'Direkt, konfrontativ und leidenschaftlich. Sagt, was sie denken, ohne Umschweife.',
    relationships: {
      generalApproach: 'Sucht Partner, die ihre Stärke herausfordern und respektieren. Sehr loyal und beschützend.',
      workApproach: 'Übernimmt gerne Führung und Verantwortung. Kann Konflikte direkt angehen.',
      teamPlayer: 'Der Anführer, der sich für das Team einsetzt. Kann dominante Tendenzen haben.',
      conflictPoints: [
        'Kann aggressiv und konfrontativ sein',
        'Hat Schwierigkeiten, die Perspektive anderer zu sehen',
        'Kann andere einschüchtern oder überrollen'
      ],
      conflictHandling: 'Geht Konflikten direkt an, oft mit Intensität und Durchsetzungskraft.',
      developmentChallenge: 'Lernen, die eigene Verletzlichkeit zu akzeptieren und anderen zu vertrauen.'
    },
    ifYouAreThisType: [
      'Erlauben Sie sich, Verletzlichkeit zu zeigen',
      'Hören Sie auf die Perspektiven anderer',
      'Lenken Sie Ihre Energie in positive Anliegen',
      'Akzeptieren Sie, dass Kontrolle eine Illusion ist',
      'Lassen Sie andere wissen, wie sehr Sie sie schätzen'
    ],
    ifYouWorkWithThisType: [
      'Seien Sie direkt und ehrlich in Ihrer Kommunikation',
      'Respektieren Sie ihre Stärke, aber lassen Sie sich nicht einschüchtern',
      'Geben Sie ihnen Verantwortung, aber mit klaren Grenzen',
      'Seien Sie loyal und verlässlich',
      'Stehen Sie zu Ihren eigenen Überzeugungen'
    ],
    underStress: {
      movesToType: 'Type 5',
      description: 'Unter Stress zieht sich Typ 8 zurück und isoliert sich. Sie kapseln sich ab und werden nachdenklicher und reservierter, anstatt sich zu behaupten.'
    },
    whenSecure: {
      movesToType: 'Type 2',
      description: 'Wenn Typ 8 sich sicher fühlt, wird er offener und fürsorglicher. Er nutzt seine Stärke, um anderen großzügig zu helfen und wird verletzlicher in seinen Beziehungen.'
    },
    notToBeConfusedWith: [
      {
        type: 'Type 3 – Der Leistungsorientierte',
        difference: 'Beide sind energisch, aber Typ 8 sucht Kontrolle, während Typ 3 Anerkennung sucht.'
      },
      {
        type: 'Type 1 – Der Perfektionist',
        difference: 'Beide sind prinzipientreu, aber Typ 8 handelt aus persönlicher Gerechtigkeit, während Typ 1 aus universeller Ethik handelt.'
      },
      {
        type: 'Type 9 – Der Friedensstifter',
        difference: 'Beide sind im Körperzentrum, aber Typ 8 ist aggressiv, während Typ 9 passiv-aggressiv ist und Harmonie sucht.'
      }
    ]
  },

  // --- TYP 9: Der Friedensstifter ---
  'Type 9': {
    type: 'Type 9',
    title: 'Der Friedensstifter',
    worldview: 'Die Welt ist am besten, wenn es harmonisch und konfliktfrei ist. Ich fühle mich sicher, wenn ich inneren Frieden bewahren und mit anderen verschmelzen kann.',
    focus: 'Konzentriert sich auf die Aufrechterhaltung der Harmonie und die Vermeidung von Konflikten. Ist darauf bedacht, alle Perspektiven zu sehen und sich anzupassen.',
    basicFear: 'Verlust und Trennung. Angst, seine Verbindung zu anderen zu verlieren oder fragmentiert zu sein.',
    basicDesire: 'Inneren Frieden und Stabilität zu haben – in Harmonie mit sich selbst und der Welt zu sein.',
    innerDialogue: '"Das ist nicht so wichtig." "Ich will keinen Streit." "Ich sollte mich einfach anpassen."',
    qualities: ['Harmonisch', 'Annehmend', 'Geduldig', 'Freundlich', 'Beruhigend', 'Unterstützend'],
    passion: 'Faulheit – eine Trägheit in Bezug auf sich selbst, die eigenen Bedürfnisse und die eigene Handlungsfähigkeit.',
    blindSpots: [
      'Kann eigene Bedürfnisse und Meinungen ignorieren',
      'Tendiert dazu, Konflikte zu vermeiden und Dinge unter den Teppich zu kehren',
      'Kann passiv-aggressiv werden, wenn sie sich übergangen fühlen'
    ],
    thoughtPatterns: [
      'Denkt an das Gemeinsame und die verschiedenen Perspektiven',
      'Minimiert Probleme und Ängste',
      'Sucht Wege, um Konflikte zu vermeiden'
    ],
    strivesFor: 'Inneren Frieden, Harmonie und Verbundenheit.',
    attractedTo: 'Stabile Umgebungen, entspannte Menschen und Routinen.',
    dislikes: 'Konflikte, Druck, plötzliche Veränderungen und getrennt zu sein.',
    appearance: 'Entspannt und zugänglich. Klappt oft Dinge nicht ganz mit der Kleidung oder dem Aussehen, da die Konzentration auf andere liegt.',
    personalStrengths: [
      'Fähigkeit, Harmonie zu schaffen und zu vermitteln',
      'Toleranz und Akzeptanz',
      'Geduld und Ausdauer',
      'Fähigkeit, viele Perspektiven zu sehen'
    ],
    learning: 'Lernt am besten in entspannter Atmosphäre und wenn sie einbezogen und ermutigt werden.',
    motivatedBy: 'Harmonie, Anerkennung ihrer Anstrengungen und die Möglichkeit, einen positiven Beitrag zu leisten.',
    communication: 'Ruhig und annehmend. Kann vage sein, um Konflikte zu vermeiden.',
    relationships: {
      generalApproach: 'Sucht stabile und harmonische Beziehungen, in denen es keine Meinungsverschiedenheiten gibt.',
      workApproach: 'Gute Teamplayer, die eine friedliche Atmosphäre schaffen. Können Prokrastinieren und sich auf weniger wichtige Aufgaben konzentrieren.',
      teamPlayer: 'Der Vermittler, der dafür sorgt, dass sich alle wohlfühlen. Unterstützt die Entscheidungen anderer.',
      conflictPoints: [
        'Ignoriert eigene Frustrationen und Bedürfnisse',
        'Zieht sich zurück, anstatt zu konfrontieren',
        'Kann Sturheit entwickeln, wenn sie unter Druck gesetzt werden'
      ],
      conflictHandling: 'Vermeidet Konfrontation, kann aber passiv Widerstand leisten. Priorisiert die Aufrechterhaltung des Friedens.',
      developmentChallenge: 'Lernen, sich selbst zu behaupten und die eigene Stimme zu finden.'
    },
    ifYouAreThisType: [
      'Finden Sie Ihre eigene Stimme und Meinung',
      'Machen Sie Ihre Prioritäten klar – nicht nur die der anderen',
      'Nehmen Sie Konflikte als notwendigen Teil des Lebens an',
      'Machen Sie sich bewusst, was Sie wirklich brauchen',
      'Handeln Sie aktiv und vermeiden Sie Prokrastination'
    ],
    ifYouWorkWithThisType: [
      'Seien Sie direkt und vermeiden Sie vage Erwartungen',
      'Ermutigen Sie sie, ihre Meinung zu äußern',
      'Schaffen Sie eine entspannte Arbeitsatmosphäre',
      'Geben Sie ihnen sanfte, aber klare Fristen',
      'Seien Sie geduldig, wenn sie Zeit zum Nachdenken brauchen'
    ],
    underStress: {
      movesToType: 'Type 6',
      description: 'Unter Stress wird Typ 9 ängstlich und misstrauisch. Sie können sich Sorgen machen und übermäßig vorsichtig werden und ihren inneren Frieden verlieren.'
    },
    whenSecure: {
      movesToType: 'Type 3',
      description: 'Wenn Typ 9 sich sicher fühlt, wird er aktiver, selbstbewusster und zielgerichteter. Sie erkennen ihren Wert und nutzen ihre Energie, um ihre eigenen Ziele zu verfolgen.'
    },
    notToBeConfusedWith: [
      {
        type: 'Type 2 – Der Helfer',
        difference: 'Beide sind warmherzig, aber Typ 2 sucht aktiv Kontakt, während Typ 9 passiv und zurückhaltend ist.'
      },
      {
        type: 'Type 5 – Der Forscher',
        difference: 'Beide können zurückgezogen sein, aber Typ 9 tut dies, um Harmonie zu bewahren, während Typ 5 dies tut, um Ressourcen zu schonen und nachzudenken.'
      },
      {
        type: 'Type 4 – Der Individualist',
        difference: 'Beide können sich emotional zurückziehen, aber Typ 9 tut dies, um Stabilität zu bewahren, während Typ 4 dies tut, um sich von der Welt zu unterscheiden.'
      }
    ]
  },
};
