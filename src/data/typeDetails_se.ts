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
 
'Type 1': {
  type: 'Type 1',
  title: 'Reformatorn / Perfektionisten',
  worldview: 'Världen borde vara mer rättvis och ordnad, men det är den inte alltid. Därför skapar jag mina egna regler och standarder för hur saker ska göras.',
  focus: 'Fokuserar på att göra det som är rätt, förbättra saker och undvika misstag. Har ett skarpt öga för vad som kan bli bättre.',
  basicFear: 'Att vara felaktig, korrupt, ond eller moraliskt defekt.',
  basicDesire: 'Att vara god, rättfärdig och att göra det som är rätt.',
  innerDialogue: '"Det är inte tillräckligt bra." "Det borde inte göras på det sättet." "Om jag inte gör det ordentligt, kommer ingen annan att göra det."',
  qualities: ['Principfast', 'Organiserad', 'Pålitlig', 'Ansvarsfull', 'Idealistisk', 'Etisk'],
  passion: 'Förbittring/Vrede – uttrycks ofta som irritation eller kritik när saker inte lever upp till deras interna standarder.',
  blindSpots: [
    'Kan vara överdrivet kritisk mot sig själv och andra',
    'Har svårt att acceptera "tillräckligt bra"',
    'Kan missa helheten i jakten på detaljer'
  ],
  thoughtPatterns: [
    'Jämför verkligheten med ideal',
    'Fokuserar på brister och tillkortakommanden',
    'Tänker i termer av "bör" och "måste"'
  ],
  strivesFor: 'Att göra det rätta, leva upp till höga standarder och skapa ordning.',
  attractedTo: 'Kvalitet, struktur, etik och människor med starka principer.',
  dislikes: 'Slarv, orättvisa, ineffektivitet och kaos.',
  appearance: 'Verkar kontrollerad, välorganiserad och professionell. Omgivning och utseende är ofta prydliga och ordentliga.',
  personalStrengths: [
    'Höga standarder och kvalitetsmedvetenhet',
    'Stark arbetsmoral och ansvarskänsla',
    'Förmåga att förbättra och optimera',
    'Etiskt och principfast förhållningssätt'
  ],
  learning: 'Lär sig bäst genom struktur, tydliga ramar och möjligheten att förfina färdigheter.',
  motivatedBy: 'Att göra skillnad, förbättra saker och bli erkänd för kvalitet.',
  communication: 'Precis och strukturerad. Kan verka kritisk eller predikande, särskilt när något inte uppfyller förväntningarna.',
  relationships: {
    generalApproach: 'Söker partners med liknande värderingar och standarder. Kan vara kritisk men också mycket lojal.',
    workApproach: 'Arbetar noggrant och metodiskt. Ställer höga krav på sig själv och andra. Levererar stabilt och pålitligt.',
    teamPlayer: 'Bidrar med struktur och kvalitetskontroll. Kan vara kritisk men säkerställer höga standarder.',
    conflictPoints: [
      'Är frustrerad över andras slarv eller brist på ansvar',
      'Kan verka dömande eller självgod',
      'Har svårt att acceptera olika sätt att göra saker på'
    ],
    conflictHandling: 'Undviker ofta direkt konfrontation men kan bygga upp irritation. Söker det "rätta" svaret snarare än kompromiss.',
    developmentChallenge: 'Att acceptera ofullkomlighet och släppa behovet av kontroll.'
  },
  ifYouAreThisType: [
    'Kom ihåg att "tillräckligt bra" ibland är tillräckligt bra',
    'Öva på att ge positiv feedback – inte bara kritik',
    'Tillåt dig själv att slappna av och ta pauser',
    'Acceptera att andra har andra standarder än du',
    'Fokusera på framsteg snarare än perfektion'
  ],
  ifYouWorkWithThisType: [
    'Erkänn deras ansträngning och höga standarder',
    'Var förberedd och precis i din kommunikation',
    'Ge dem tid och utrymme att göra saker ordentligt',
    'Undvik slarv och ytlighet',
    'Hjälp dem se det positiva i vad de redan uppnått'
  ],
  underStress: {
   
movesToType: 'Type 4',
  description: 'Under press blir Typ 1 mer emotionell och självkritisk. De kan känna sig missförstådda och dra sig tillbaka i melankoli och frustration. En känsla av maktlöshet uppstår och de kan bli bitska och explosiva i sina uttryck, särskilt när omgivningen inte lever upp till deras interna standarder.'

  },
  whenSecure: {
    
movesToType: 'Type 7',
  description: 'När Typ 1 känner sig trygg och säker, släpper de behovet av kontroll och öppnar sig för spontanitet och glädje. De blir lekfullare, mer optimistiska och öppna för nya upplevelser, och kan njuta av livet utan att behöva förbättra eller korrigera allt.'
  },
  notToBeConfusedWith: [
    {
      type: 'Type 6 – Loyalisten',
      difference: 'Båda kan verka ansvarsfulla, men Typ 1 agerar utifrån inre principer, medan Typ 6 söker säkerhet och stöd i gemenskapen.'
    },
    {
      type: 'Type 5 – Utredaren',
      difference: 'Typ 1 drivs av etik och förbättring, medan Typ 5 är mer nyfiken och neutral i sitt tillvägagångssätt.'
    },
    {
      type: 'Type 8 – Utmanaren',
      difference: 'Typ 1 kämpar för det som är rätt och ordning, medan Typ 8 kämpar för frihet och kontroll. Deras energi kan krocka.'
    }
  ]
},


 
'Type 2': {
  type: 'Type 2',
  title: 'Hjälparen',
  worldview: 'Världen är full av människor som behöver omsorg och stöd. Jag känner mig värdefull när jag kan göra skillnad för andra.',
  focus: 'Fokuserar på andras behov och känslor. Har en stark intuition för hur de kan hjälpa och skapa kontakt.',
  basicFear: 'Att vara oälskad, förbisedd eller irrelevant för andra.',
  basicDesire: 'Att känna sig älskad och uppskattad. Att vara viktig och nödvändig i andras liv.',
  innerDialogue: '"Vad behöver du?" "Hur kan jag göra dig glad?" "Jag hoppas de uppskattar mig."',
  qualities: ['Omtänksam', 'Empatisk', 'Generös', 'Stödjande', 'Varm', 'Intuitiv'],
  passion: 'Stolthet – en känsla av att vara oumbärlig och den som gör skillnad.',
  blindSpots: [
    'Glömmer bort sina egna behov och gränser',
    'Kan använda hjälpsamhet för att få uppmärksamhet',
    'Har svårt att säga nej och sätta tydliga gränser'
  ],
  thoughtPatterns: [
    'Tänker på hur andra mår',
    'Överväger hur de kan hjälpa till',
    'Oroas för relationer och att bli värderad'
  ],
  strivesFor: 'Att bli älskad och betydelsefull. Att skapa värme och närvaro omkring sig.',
  attractedTo: 'Människor som behöver stöd, nära relationer och känslomässig anknytning.',
  dislikes: 'Kyla, egoism, att bli ignorerad eller tagen för given.',
  appearance: 'Vänlig och välkomnande. Kläder sig ofta för att behaga eller skapa kontakt.',
  personalStrengths: [
    'Stark empati och känslomässig förståelse',
    'Förmåga att skapa trygga och varma relationer',
    'Generositet och vilja att hjälpa',
    'Intuitiv känsla för andras behov'
  ],
  learning: 'Lär sig bäst genom relationer och praktisk erfarenhet i stödjande miljöer.',
  motivatedBy: 'Tacksamhet, erkännande och möjligheten att göra skillnad för andra.',
  communication: 'Varm och personlig. Frågar om andras välbefinnande och visar omsorg.',
  relationships: {
    generalApproach: 'Ger mycket av sig själva och söker relationer där deras omsorg uppskattas.',
    workApproach: 'Skapar välbefinnande och goda relationer i teamet. Fokuserar på det mänskliga elementet.',
    teamPlayer: 'Den som ser till att alla mår bra. Stöder och uppmuntrar kollegor.',
    conflictPoints: [
      'Känner sig förbisedd eller inte uppskattad',
      'Kan bli manipulativ för att få uppmärksamhet',
      'Ignorerar sina egna behov och gränser'
    ],
    conflictHandling: 'Undviker direkt konfrontation, men kan reagera passivt-aggressivt om de inte blir värderade.',
    developmentChallenge: 'Att lära sig uttrycka sina egna behov och sätta hälsosamma gränser.'
  },
  ifYouAreThisType: [
    'Kom ihåg att ta hand om dig själv – inte bara andra',
    'Öva på att be om hjälp och visa sårbarhet',
    'Sätt gränser för hur mycket du ger',
    'Erkänn ditt värde oberoende av din hjälpsamhet',
    'Var ärlig om dina känslor och behov'
  ],
  ifYouWorkWithThisType: [
    'Visa tacksamhet för deras stöd och omsorg',
    'Fråga om deras välbefinnande – inte bara vad de gör för andra',
    'Erkänn deras bidrag till teamets välmående',
    'Hjälp dem prioritera sig själva',
    'Var personlig och varm i kommunikationen'
  ],
  underStress: {
    
movesToType: 'Type 8',
  description: 'När Typ 2 är stressad, kan de bli mer kontrollerande och arga. De kräver erkännande och kan reagera aggressivt, särskilt om de känner sig förbisedda eller inte uppskattade. Deras hjälpsamhet blir ett sätt att uppnå makt och uppmärksamhet.'

  },
  whenSecure: {
  
movesToType: 'Type 4',
  description: 'I säkra miljöer får Typ 2 bättre kontakt med sina egna känslor och behov. De blir mer autentiska och kreativa, och uttrycker sig med djup och äkthet, utan att vara beroende av andras validering.'
 },
  notToBeConfusedWith: [
    {
      type: 'Type 6 – Loyalisten',
      difference: 'Båda är omtänksamma och relationella, men Typ 2 söker känslomässig närhet, medan Typ 6 söker trygghet och stabilitet i gemenskapen.'
    },
    {
      type: 'Type 9 – Fredsmäklaren',
      difference: 'Båda kan verka varma och välkomnande, men Typ 2 är aktivt sökande och hjälpsam, medan Typ 9 är mer passiv och undvikande.'
    },
    {
      type: 'Type 4 – Individualisten',
      difference: 'Båda har starka känslor, men Typ 2 fokuserar på andras behov, medan Typ 4 fokuserar på sina egna känslor och identitet.'
    }
  ]
},



'Type 3': {
  type: 'Type 3',
  title: 'Presteraren',
  worldview: 'Världen belönar dem som lyckas och åstadkommer resultat. Jag känner mig värdefull när jag uppnår något och blir erkänd för det.',
  focus: 'Fokuserar på mål, effektivitet och hur de framstår. Vill vara bäst och se bra ut medan de gör det.',
  basicFear: 'Att vara värdelös om de inte presterar. Rädsla för misslyckande och att bli förbisedd.',
  basicDesire: 'Att känna sig värdefull och bli erkänd för sina prestationer och förmågor.',
  innerDialogue: '"Vad behöver jag uppnå idag?" "Hur ser det här ut?" "Jag måste vara bäst."',
  qualities: ['Målinriktad', 'Energisk', 'Pragmatisk', 'Självsäker', 'Anpassningsbar', 'Ambitiös'],
  passion: 'Bedrägeri – både mot sig själva och andra om vem de egentligen är bakom fasaden.',
  blindSpots: [
    'Kan tappa kontakten med sina egna känslor',
    'Fokuserar på image framför substans',
    'Har svårt att acceptera misstag och sårbarhet'
  ],
  thoughtPatterns: [
    'Tänker i termer av mål och resultat',
    'Överväger vad som kommer att imponera på andra',
    'Fokuserar på att vara effektiv och framgångsrik'
  ],
  strivesFor: 'Framgång, erkännande och att vara bäst.',
  attractedTo: 'Projekt med prestige, synliga resultat och människor som kan stärka deras image.',
  dislikes: 'Misslyckande, ineffektivitet och att bli ignorerad eller sedd som medelmåttig.',
  appearance: 'Professionell och välklädd. Verkar självsäker och kompetent – ofta med en polerad yttre.',
  personalStrengths: [
    'Stark drivkraft och målinriktning',
    'Förmåga att inspirera och motivera',
    'Pragmatisk problemlösning',
    'Flexibilitet och anpassningsförmåga'
  ],
  learning: 'Lär sig bäst genom praktisk erfarenhet, tävling och mätbara resultat.',
  motivatedBy: 'Framgång, erkännande och möjligheten att sticka ut.',
  communication: 'Direkt och målinriktad. Kan vara inspirerande men också fokusera på resultat framför känslor.',
  relationships: {
    generalApproach: 'Söker partners som stöder deras ambitioner och delar deras fokus på framgång.',
    workApproach: 'Trivs i konkurrenskraftiga och resultatinriktade miljöer. Får saker att hända.',
    teamPlayer: 'Driver teamet framåt och inspirerar till hög prestation.',
    conflictPoints: [
      'Kan prioritera resultat framför relationer',
      'Har svårt att visa sårbarhet',
      'Blir otålig med långsamma eller ineffektiva processer'
    ],
    conflictHandling: 'Fokuserar på lösningar och framsteg. Undviker ofta känslomässiga aspekter.',
    developmentChallenge: 'Att lära sig värdera sig själva för vem de är – inte bara för vad de åstadkommer.'
  },
  ifYouAreThisType: [
    'Ta dig tid att känna dina känslor och behov',
    'Värdera processen – inte bara resultatet',
    'Dela dina osäkerheter med betrodda personer',
    'Kom ihåg att misstag är en del av lärandet',
    'Prioritera äkta och nära relationer'
  ],
  ifYouWorkWithThisType: [
    'Erkänn deras prestationer och ansträngning',
    'Var effektiv och målinriktad i din kommunikation',
    'Ge dem synliga och utmanande uppgifter',
    'Stöd deras ambitioner – men påminn dem om balans',
    'Hjälp dem se värdet i det som inte kan mätas'
  ],
  underStress: {
   
movesToType: 'Type 9',
  description: 'Under stress tappar Typ 3 motivation och blir passiv. De drar sig tillbaka från uppgifter och undviker utmaningar, och kan verka oengagerade och känslomässigt frånkopplade.'
  },
  whenSecure: {
 
movesToType: 'Type 6',
  description: 'När Typ 3 känner sig trygg, blir de mer teamorienterade och lojala. De fokuserar på att hjälpa andra att lyckas och släpper behovet av att ständigt imponera.'
  },
  notToBeConfusedWith: [
    {
      type: 'Type 1 – Reformatorn',
      difference: 'Båda är ambitiösa och målinriktade, men Typ 1 agerar utifrån inre principer och etik, medan Typ 3 fokuserar på yttre framgång och erkännande.'
    },
    {
      type: 'Type 7 – Entusiasten',
      difference: 'Båda är energiska och handlingskraftiga, men Typ 3 planerar och optimerar, medan Typ 7 söker upplevelser och undviker begränsningar.'
    },
    {
      type: 'Type 8 – Utmanaren',
      difference: 'Båda är starka och beslutsamma, men Typ 3 söker erkännande och image, medan Typ 8 söker kontroll och rättvisa.'
    }
  ]
},



'Type 4': {
  type: 'Type 4',
  title: 'Individualisten',
  worldview: 'Jag känner mig annorlunda och saknar något som andra har. Jag söker djup, mening och äkthet i allt jag gör.',
  focus: 'Fokuserar på känslor, identitet och vad som saknas. Vill vara unik och förstådd.',
  basicFear: 'Att sakna identitet eller personlig betydelse. Rädsla för att vara vanlig och ointressant.',
  basicDesire: 'Att hitta sig själv och bli värderad för sin äkthet och unika vara.',
  innerDialogue: '"Vad saknar jag?" "Förstår de mig?" "Jag är annorlunda än alla andra."',
  qualities: ['Kreativ', 'Känslig', 'Introspektiv', 'Autentisk', 'Empatisk', 'Estetisk'],
  passion: 'Avund – en känsla av att andra har något de själva saknar och längtar efter.',
  blindSpots: [
    'Fokuserar för mycket på det negativa eller det som saknas',
    'Kan bli självupptagen och känslomässigt dramatisk',
    'Har svårt att uppskatta det vanliga och vardagliga'
  ],
  thoughtPatterns: [
    'Jämför sig med andra',
    'Känner sig annorlunda och utanför',
    'Söker efter djupare mening och äkthet'
  ],
  strivesFor: 'Att vara autentisk, unik och känna sig djupt kopplad till något meningsfullt.',
  attractedTo: 'Skönhet, djup, kreativitet och människor som förstår deras känslor.',
  dislikes: 'Ytlighet, konformitet, att bli missförstådd eller ignorerad.',
  appearance: 'Uttrycker sin individualitet genom personlig stil och estetik. Verkar ofta konstnärlig eller alternativ.',
  personalStrengths: [
    'Djup känslomässig förståelse',
    'Kreativitet och estetisk känsla',
    'Autenticitet och ärlighet',
    'Förmåga att se skönhet i det svåra och komplexa'
  ],
  learning: 'Lär sig bäst genom kreativt uttryck, personliga kopplingar och känslomässigt engagemang.',
  motivatedBy: 'Möjligheten att uttrycka sig autentiskt, skapa något unikt och bli förstådd.',
  communication: 'Känslomässig, personlig och ofta poetisk. Söker djup och mening i samtal.',
  relationships: {
    generalApproach: 'Söker djupa och autentiska kopplingar med människor som kan hantera deras komplexitet.',
    workApproach: 'Trivs i kreativa och fria miljöer där de kan uttrycka sin individualitet.',
    teamPlayer: 'Bidrar med kreativitet och känslomässigt djup. Kan vara lynnig och dra sig tillbaka i konflikt.',
    conflictPoints: [
      'Kan vara känslomässigt intensiv och dramatisk',
      'Har svårt med rutiner och struktur',
      'Drabbas av tillbakadragande om de känner sig missförstådda'
    ],
    conflictHandling: 'Reagerar emotionellt eller drar sig tillbaka. Söker förståelse och djup kontakt.',
    developmentChallenge: 'Att acceptera det vanliga och hitta skönhet i vardagen.'
  },
  ifYouAreThisType: [
    'Öva på att se det positiva i ditt liv',
    'Acceptera att alla har svåra perioder – du är inte ensam',
    'Sök skönhet i det vanliga och vardagliga',
    'Dela dina känslor på ett konstruktivt sätt',
    'Värdera stabilitet och rutiner som ett stöd'
  ],
  ifYouWorkWithThisType: [
    'Erkänn deras kreativitet och unika perspektiv',
    'Var autentisk och ärlig i din kommunikation',
    'Ge dem utrymme för känslomässigt uttryck',
    'Undvik ytliga samtal och snabba lösningar',
    'Stöd deras kreativa och personliga projekt'
  ],
  underStress: {
   
 movesToType: 'Type 2',
  description: 'När Typ 4 är stressad, blir de klängiga och söker uppmärksamhet och validering. De kan tappa bort sig själva i relationen och försöka få andra att uppfylla deras känslomässiga behov.'
  },
  whenSecure: {

  movesToType: 'Type 1',
  description: 'I säkra miljöer blir Typ 4 mer strukturerad och disciplinerad. De omsätter sin kreativitet i konkreta resultat och får en starkare känsla av syfte och riktning.'
  },
  notToBeConfusedWith: [
    {
      type: 'Type 5 – Utredaren',
      difference: 'Båda är introspektiva och djupa, men Typ 4 är emotionellt driven och söker kontakt, medan Typ 5 är mer rationell och söker distans.'
    },
    {
      type: 'Type 6 – Loyalisten',
      difference: 'Båda kan vara känslomässigt intensiva, men Typ 4 söker äkthet och djup, medan Typ 6 söker säkerhet och stabilitet.'
    },
    {
      type: 'Type 9 – Fredsmäklaren',
      difference: 'Båda kan dra sig tillbaka, men Typ 4 gör det med känslor och längtan, medan Typ 9 gör det för att undvika konflikt och oro.'
    }
  ]
},

'Type 5': {
  type: 'Type 5',
  title: 'Utredaren / Iakttagaren',
  worldview: 'Världen kan vara överväldigande och krävande. Jag behöver förstå saker och skydda min energi innan jag engagerar mig.',
  focus: 'Fokuserar på att observera, analysera och bevara resurser – både mentalt och känslomässigt.',
  basicFear: 'Att bli invaderad, överväldigad eller gjord inkompetent.',
  basicDesire: 'Att vara kompetent och att förstå världen på ett djupt och meningsfullt sätt.',
  innerDialogue: '"Jag behöver mer information." "Tänk om jag inte klarar det?" "Jag behöver tid att tänka."',
  qualities: ['Analytisk', 'Oberoende', 'Nyfiken', 'Objektiv', 'Privat', 'Insiktsfull'],
  passion: 'Girighet (Avarice) – en längtan efter att samla kunskap och skydda sina egna resurser.',
  blindSpots: [
    'Kan isolera sig och bli känslomässigt distanserad',
    'Har svårt att agera utan full förståelse',
    'Kan verka oengagerad eller frånvarande'
  ],
  thoughtPatterns: [
    'Analyserar och kategoriserar information',
    'Tänker på hur man sparar energi',
    'Söker efter mönster och djupare förståelse'
  ],
  strivesFor: 'Kompetens, insikt och oberoende.',
  attractedTo: 'Komplexa system, djup kunskap och människor som respekterar deras behov av utrymme.',
  dislikes: 'Ytlighet, känslomässig invasion och tryck på snabba åtgärder.',
  appearance: 'Reserverad och observant. Kläder sig ofta neutralt och praktiskt.',
  personalStrengths: [
    'Djupt analytiskt tänkande',
    'Objektivitet och opartiskhet',
    'Självständighet och förmåga att arbeta ensam',
    'Förmåga att se helheten och tänka långsiktigt'
  ],
  learning: 'Lär sig bäst genom självstudier, observation och tid för kontemplation.',
  motivatedBy: 'Möjligheten att förstå komplexa ämnen och arbeta ostört.',
  communication: 'Precis och faktabaserad. Delar kunskap när de känner sig trygga och kompetenta.',
  relationships: {
    generalApproach: 'Föredrar få, djupa relationer med människor som respekterar deras behov av ensamhet.',
    workApproach: 'Trivs med komplexa uppgifter och arbetar bäst självständigt.',
    teamPlayer: 'Bidrar med expertis och objektivitet. Kan vara tyst och reserverad.',
    conflictPoints: [
      'Kan verka känslomässigt kall eller ointresserad',
      'Har svårt att dela känslor och behov',
      'Drar sig ofta tillbaka under tryck eller känslomässig konfrontation'
    ],
    conflictHandling: 'Drar sig tillbaka för att tänka. Föredrar skriftlig eller indirekt kommunikation.',
    developmentChallenge: 'Att engagera sig känslomässigt och dela tankar och känslor med andra.'
  },
  ifYouAreThisType: [
    'Öva på att dela dina tankar och känslor – även om det känns ovant',
    'Sätt gränser istället för att bara dra dig tillbaka',
    'Engagera dig i små sociala aktiviteter',
    'Kom ihåg att handling inte kräver perfekt förståelse',
    'Värdera dina känslor som viktig information – inte bara distraktioner'
  ],
  ifYouWorkWithThisType: [
    'Respektera deras behov av tid och utrymme',
    'Ge dem information i förväg och undvik press',
    'Värdera deras kunskap och analytiska förmåga',
    'Kommunicera tydligt och precist – undvik känslomässigt tryck',
    'Skapa trygga förhållanden för samarbete utan att inkräkta'
  ],
  underStress: {
 
  movesToType: 'Type 7',
  description: 'Under press blir Typ 5 rastlös och sprider ut sig för mycket. De tappar fokus och agerar impulsivt, ofta utan sin vanliga reflektion och analys.'
  },
  whenSecure: {

 movesToType: 'Type 8',
  description: 'När Typ 5 känner sig trygg, blir de mer självsäkra och beslutsamma. De vågar ta ansvar och kliva fram med sin kunskap och sina beslut.'
  },
  notToBeConfusedWith: [
    {
      type: 'Type 4 – Individualisten',
      difference: 'Båda är introspektiva, men Typ 4 är emotionellt driven och söker kontakt, medan Typ 5 är rationell och söker distans.'
    },
    {
      type: 'Type 9 – Fredsmäklaren',
      difference: 'Båda kan verka tysta och tillbakadragna, men Typ 5 drar sig tillbaka för att tänka, medan Typ 9 gör det för att undvika konflikt.'
    },
    {
      type: 'Type 1 – Reformatorn',
      difference: 'Båda har principer, men Typ 1 agerar utifrån etik och korrekthet, medan Typ 5 ser principer som mentala konstruktioner som kan undersökas och utmanas.'
    }
  ]
},

 
'Type 6': {
  type: 'Type 6',
  title: 'Loyalisten',
  worldview: 'Världen känns oförutsägbar och osäker. Jag behöver stöd och tydliga ramar för att känna mig trygg.',
  focus: 'Fokuserar på säkerhet, tillit och vem som kan lita på. Är medveten om potentiella problem och risker.',
  basicFear: 'Att stå ensam utan stöd eller vägledning. Rädsla för att göra misstag och bli förrådd.',
  basicDesire: 'Att känna sig trygg och stöttad. Att ha någon eller något att luta sig mot.',
  innerDialogue: '"Tänk om något går fel?" "Kan jag lita på dem?" "Vad ska jag göra?"',
  qualities: ['Lojal', 'Ansvarsfull', 'Försiktig', 'Samarbetsvillig', 'Pålitlig', 'Engagerad'],
  passion: 'Rädsla – en ständig inre oro och ängslan som kan leda till tvivel och överkontroll.',
  blindSpots: [
    'Kan oroa sig i onödan och se problem innan de uppstår',
    'Har svårt att lita på sina egna beslut',
    'Kan projicera sina egna skräckscenarier på andra'
  ],
  thoughtPatterns: [
    'Tänker i värsta fall-scenarier',
    'Söker trygghet och stöd',
    'Analyserar människors motiv och intentioner'
  ],
  strivesFor: 'Säkerhet, stabilitet och lojalitet.',
  attractedTo: 'Tydliga strukturer, pålitliga människor och trygga gemenskaper.',
  dislikes: 'Osäkerhet, svek, oförutsägbarhet och att vara ensam med ansvar.',
  appearance: 'Ofta vaksam och lätt bekymrad. Kläder sig praktiskt och lämpligt.',
  personalStrengths: [
    'Stark lojalitet och ansvarskänsla',
    'Förmåga att förutse problem och risker',
    'Bra på samarbete och att stötta andra',
    'Engagerad och principfast'
  ],
  learning: 'Lär sig bäst i trygga och strukturerade miljöer med tydlig feedback.',
  motivatedBy: 'Erkännande av sin lojalitet och möjligheten att bidra till gemenskapen.',
  communication: 'Frågande och försiktig. Söker bekräftelse och klarhet.',
  relationships: {
    generalApproach: 'Söker stabila och lojala relationer där det finns ömsesidigt stöd.',
    workApproach: 'Trivs i strukturerade miljöer med tydliga förväntningar och ledarskap.',
    teamPlayer: 'Mycket engagerad och lojal. Arbetar hårt för teamets framgång.',
    conflictPoints: [
      'Kan vara överdrivet orolig och pessimistisk',
      'Har svårt att fatta beslut ensam',
      'Kan bli defensiv och misstänksam under press'
    ],
    conflictHandling: 'Söker stöd och klargörande. Kan reagera antingen undergivet eller upproriskt.',
    developmentChallenge: 'Att lita mer på sig själva och sina egna bedömningar.'
  },
  ifYouAreThisType: [
    'Öva på att lita på dina egna beslut',
    'Fokusera på vad som går bra – inte bara vad som kan gå fel',
    'Ta små steg mot större oberoende',
    'Sök ärlig och konstruktiv feedback',
    'Kom ihåg att de flesta människor vill dig väl'
  ],
  ifYouWorkWithThisType: [
    'Var tydlig och konsekvent i din kommunikation',
    'Ge dem trygghet och tydliga ramar',
    'Erkänn deras lojalitet och ansträngning',
    'Hjälp dem se sina styrkor',
    'Ha tålamod med deras oro och behov av klargörande'
  ],
  underStress: {
 
  movesToType: 'Type 3',
  description: 'Under stress blir Typ 6 mer tävlingsinriktad och fokuserar på att bevisa sitt värde. De kan verka överdrivet prestationsinriktade och tappar kontakten med sin inre kompass.'
  },
  whenSecure: {

 movesToType: 'Type 9',
  description: 'I trygga relationer blir Typ 6 mer avslappnad och tillitsfull. De släpper oron och finner frid i nuet, med större tro på sig själva och andra.'
  },
  notToBeConfusedWith: [
    {
      type: 'Type 1 – Reformatorn',
      difference: 'Båda har starka principer, men Typ 1 agerar utifrån inre etik, medan Typ 6 söker säkerhet och stöd i gemenskapen.'
    },
    {
      type: 'Type 2 – Hjälparen',
      difference: 'Båda är relationella, men Typ 2 söker känslomässig närhet, medan Typ 6 söker stabilitet och lojalitet.'
    },
    {
      type: 'Type 5 – Utredaren',
      difference: 'Båda kan vara försiktiga och analytiska, men Typ 5 drar sig tillbaka för att tänka, medan Typ 6 söker stöd och klargörande.'
    }
  ]
},

'Type 7': {
  type: 'Type 7',
  title: 'Entusiasten / Äventyraren',
  worldview: 'Världen är full av möjligheter och upplevelser, och livet ska vara roligt och spännande. Jag undviker smärta genom att fokusera på det positiva och planera nya äventyr.',
  focus: 'Fokuserar på framtiden, möjligheter och allt det roliga som kan hända. Undviker begränsningar och svåra känslor.',
  basicFear: 'Att bli fast i smärta, tristess eller brist. Rädsla för att missa något (FOMO).',
  basicDesire: 'Att vara lycklig och fri. Att få sina behov tillgodosedda och leva ett rikt och spännande liv.',
  innerDialogue: '"Vad kul kan jag hitta på?" "Det finns så många möjligheter!" "Jag vill inte missa något."',
  qualities: ['Optimistisk', 'Spontan', 'Mångsidig', 'Äventyrlig', 'Energisk', 'Inspirerande'],
  passion: 'Frosseri (Gluttony) – en längtan efter att få så många upplevelser och intryck som möjligt.',
  blindSpots: [
    'Undviker svåra känslor och smärta',
    'Har svårt att binda sig',
    'Kan verka ytlig eller ansvarslös'
  ],
  thoughtPatterns: [
    'Tänker på framtida möjligheter',
    'Planerar roliga aktiviteter',
    'Undviker negativa tankar och känslor'
  ],
  strivesFor: 'Frihet, variation och glädje.',
  attractedTo: 'Nya upplevelser, kreativa människor och spännande idéer.',
  dislikes: 'Begränsningar, rutiner, negativitet och tristess.',
  appearance: 'Energisk och leende. Kläder sig ofta färgstarkt och kreativt.',
  personalStrengths: [
    'Positiv och inspirerande livssyn',
    'Kreativitet och förmåga att se möjligheter',
    'Flexibilitet och anpassningsförmåga',
    'Förmåga att sprida energi och glädje'
  ],
  learning: 'Lär sig bäst genom variation, praktiska övningar och kreativa utmaningar.',
  motivatedBy: 'Frihet, nya upplevelser och möjligheten att inspirera och engagera andra.',
  communication: 'Entusiastisk och energisk. Hoppar ofta mellan ämnen och fokuserar på det positiva.',
  relationships: {
    generalApproach: 'Söker partners som delar deras lust för äventyr och livsglädje.',
    workApproach: 'Trivs i dynamiska och kreativa miljöer. Behöver variation och frihet.',
    teamPlayer: 'Bidrar med energi och idéer. Kan ha svårt att behålla fokus och slutföra uppgifter.',
    conflictPoints: [
      'Undviker svåra samtal och känslor',
      'Kan verka ansvarslös eller flyktig',
      'Har svårt att hantera struktur och detaljer'
    ],
    conflictHandling: 'Försöker göra konflikten positiv eller undviker den helt.',
    developmentChallenge: 'Att lära sig vara närvarande med svåra känslor och binda sig djupt.'
  },
  ifYouAreThisType: [
    'Öva på att vara närvarande med svåra känslor',
    'Fokusera på att slutföra projekt',
    'Sätt gränser för hur mycket du tar dig an',
    'Värdera djup framför bredd',
    'Lär dig säga nej till vissa möjligheter'
  ],
  ifYouWorkWithThisType: [
    'Ge dem variation och kreativa utmaningar',
    'Var positiv och entusiastisk',
    'Hjälp dem fokusera och prioritera',
    'Undvik för många begränsningar',
    'Värdera deras energi och optimism'
  ],
  underStress: {
  
  movesToType: 'Type 1',
  description: 'Under stress blir Typ 7 kritisk och perfektionistisk. De fokuserar på fel och brister och tappar sin positiva inställning, och kan bli frustrerade över begränsningar och ansvar.'
  },
  whenSecure: {

  movesToType: 'Type 5',
  description: 'När Typ 7 känner sig trygg, blir de mer fokuserade och analytiska. De går djupare och arbetar grundligt, och släpper behovet av ständig stimulans.'
  },
  notToBeConfusedWith: [
    {
      type: 'Type 3 – Presteraren',
      difference: 'Båda är energiska och handlingskraftiga, men Typ 3 söker erkännande och framgång, medan Typ 7 söker upplevelser och frihet.'
    },
    {
      type: 'Type 9 – Fredsmäklaren',
      difference: 'Båda kan verka avslappnade och positiva, men Typ 9 undviker konflikt genom att anpassa sig, medan Typ 7 undviker smärta genom att distrahera sig.'
    },
    {
      type: 'Type 4 – Individualisten',
      difference: 'Båda söker djup och mening, men Typ 4 går in i känslorna, medan Typ 7 försöker undvika dem och stanna i ljuset.'
    }
  ]
},


 
'Type 8': {
  type: 'Type 8',
  title: 'Utmanaren / Beskyddaren',
  worldview: 'Världen är tuff och orättvis. Jag måste vara stark och ta kommandot – både för mig själv och för dem jag bryr mig om.',
  focus: 'Fokuserar på kontroll, rättvisa och skydd. Vill säkerställa att ingen blir utnyttjad eller förrådd.',
  basicFear: 'Att bli kontrollerad, förrådd eller skadad. Rädsla för att förlora makt och vara sårbar.',
  basicDesire: 'Att vara självständig och att ha kontroll över sitt eget liv och öde.',
  innerDialogue: '"Jag måste vara stark." "Vem försöker kontrollera mig?" "Jag kommer att skydda dem jag bryr mig om."',
  qualities: ['Stark', 'Direkt', 'Självsäker', 'Beskyddande', 'Rättvis', 'Beslutsam'],
  passion: 'Lust – en överdriven längtan efter intensitet, kontroll och dominans.',
  blindSpots: [
    'Kan vara överdrivet dominant och kontrollerande',
    'Har svårt att visa sårbarhet',
    'Kan verka skrämmande eller hotfull'
  ],
  thoughtPatterns: [
    'Tänker i termer av makt och kontroll',
    'Är inriktad på vad som är orättvist',
    'Utformar strategier för att skydda sig eller vara assertiv'
  ],
  strivesFor: 'Oberoende, kontroll och rättvisa.',
  attractedTo: 'Utmaningar, makt och människor som respekterar deras styrka.',
  dislikes: 'Svaghet, svek, orättvisa och manipulation.',
  appearance: 'Kraftfull och bestämd. Verkar ofta auktoritär och självsäker.',
  personalStrengths: [
    'Styrka och beslutsamhet',
    'Förmåga att snabbt fatta beslut och agera',
    'Lojalitet och skyddsinstinkt',
    'Direkthet och ärlighet'
  ],
  learning: 'Lär sig bäst genom direkt erfarenhet, utmaningar och att ta ledningen.',
  motivatedBy: 'Makt, kontroll, rättvisa och möjligheten att skydda dem de älskar.',
  communication: 'Direkt, konfronterande och passionerad. Säger vad de tycker utan omsvep.',
  relationships: {
    generalApproach: 'Söker partners som utmanar och respekterar deras styrka. Mycket lojal och beskyddande.',
    workApproach: 'Gillar ledarskap och att ta ansvar. Kan hantera konflikter direkt.',
    teamPlayer: 'Ledaren som står upp för teamet. Kan ha dominerande tendenser.',
    conflictPoints: [
      'Kan vara aggressiv och konfronterande',
      'Har svårt att se andras perspektiv',
      'Kan skrämma eller köra över andra'
    ],
    conflictHandling: 'Tar upp konflikter direkt, ofta med intensitet och bestämdhet.',
    developmentChallenge: 'Att lära sig acceptera sin egen sårbarhet och lita på andra.'
  },
  ifYouAreThisType: [
    'Tillåt dig själv att visa sårbarhet',
    'Lyssna på andras perspektiv',
    'Kanalisera din energi till positiva ändamål',
    'Acceptera att kontroll är en illusion',
    'Låt andra veta hur mycket du uppskattar dem'
  ],
  ifYouWorkWithThisType: [
    'Var direkt och ärlig i din kommunikation',
    'Respektera deras styrka, men låt dig inte skrämmas',
    'Ge dem ansvar, men med tydliga gränser',
    'Var lojal och pålitlig',
    'Stå fast vid dina egna övertygelser'
  ],
  underStress: {
   
movesToType: 'Type 5',
  description: 'Under stress drar Typ 8 sig tillbaka och isolerar sig. De tar avstånd och blir mer eftertänksamma och reserverade istället för att hävda sig.'
  },
  whenSecure: {

movesToType: 'Type 2',
  description: 'När Typ 8 känner sig trygg, blir de mer öppna och omtänksamma. De använder sin styrka för att generöst hjälpa andra och blir mer sårbara i sina relationer.'
  },
  notToBeConfusedWith: [
    {
      type: 'Type 3 – Presteraren',
      difference: 'Båda är energiska, men Typ 8 söker kontroll, medan Typ 3 söker erkännande.'
    },
    {
      type: 'Type 1 – Reformatorn',
      difference: 'Båda är principfasta, men Typ 8 agerar utifrån personlig rättvisa, medan Typ 1 agerar utifrån universell etik.'
    },
    {
      type: 'Type 9 – Fredsmäklaren',
      difference: 'Båda är i Kroppstriaden, men Typ 8 är aggressiv, medan Typ 9 är passiv-aggressiv och söker harmoni.'
    }
  ]
},

// --- TYP 9: Fredsmäklaren ---
'Type 9': {
  type: 'Type 9',
  title: 'Fredsmäklaren',
  worldview: 'Världen är bäst när den är harmonisk och konfliktfri. Jag känner mig trygg när jag kan bevara inre frid och smälta samman med andra.',
  focus: 'Fokuserar på att upprätthålla harmoni och undvika konflikt. Är mån om att se alla perspektiv och anpassa sig.',
  basicFear: 'För förlust och separation. Rädsla för att förlora sin koppling till andra eller bli fragmenterad.',
  basicDesire: 'Att ha inre stabilitet och sinnesfrid – att vara i harmoni med sig själv och världen.',
  innerDialogue: '"Det är inte så viktigt." "Jag vill inte bråka." "Jag kan väl bara hänga med på det."',
  qualities: ['Harmonisk', 'Accepterande', 'Tålmodig', 'Mild', 'Lugnande', 'Stödjande'],
  passion: 'Lättja (Sloth) – en självbelåtenhet gentemot sig själv, sina egna behov och sin egen handlingskraft.',
  blindSpots: [
    'Kan ignorera sina egna behov och åsikter',
    'Har en tendens att undvika konflikt och sopa saker under mattan',
    'Kan bli passivt aggressiv när de känner sig förbisedda'
  ],
  thoughtPatterns: [
    'Tänker på gemensam grund och de olika perspektiven',
    'Minimerar problem och farhågor',
    'Letar efter sätt att undvika konflikt'
  ],
  strivesFor: 'Inre frid, harmoni och anslutning.',
  attractedTo: 'Stabila miljöer, avslappnade människor och rutiner.',
  dislikes: 'Konflikt, påtryckningar, plötsliga förändringar och att bli separerad.',
  appearance: 'Avslappnad och tillgänglig. Försummar ofta sitt eget utseende eller organisation eftersom fokus ligger på andra.',
  personalStrengths: [
    'Förmåga att skapa och medla harmoni',
    'Tolerans och acceptans',
    'Tålamod och uthållighet',
    'Förmåga att se många perspektiv'
  ],
  learning: 'Lär sig bäst i en avslappnad atmosfär och när de är inkluderade och uppmuntrade.',
  motivatedBy: 'Harmoni, erkännande av deras ansträngningar och möjligheten att bidra positivt.',
  communication: 'Lugn och accepterande. Kan vara vag för att undvika konflikt.',
  relationships: {
    generalApproach: 'Söker stabila och harmoniska relationer där det inte finns oenighet.',
    workApproach: 'Goda lagspelare som skapar en fredlig atmosfär. Kan skjuta upp och fokusera på mindre viktiga uppgifter.',
    teamPlayer: 'Medlaren som ser till att alla är bekväma. Stöder andras beslut.',
    conflictPoints: [
      'Ignorerar sina egna frustrationer och behov',
      'Drar sig tillbaka istället för att konfrontera',
      'Kan utveckla envishet när de pressas'
    ],
    conflictHandling: 'Undviker konfrontation men kan passivt göra motstånd. Prioriterar att bevara friden.',
    developmentChallenge: 'Att lära sig hävda sig och hitta sin egen röst.'
  },
  ifYouAreThisType: [
    'Hitta din egen röst och åsikt',
    'Gör dina prioriteringar tydliga – inte bara andras',
    'Acceptera konflikt som en nödvändig del av livet',
    'Bli medveten om vad du verkligen behöver',
    'Agera beslutsamt och undvik prokrastinering'
  ],
  ifYouWorkWithThisType: [
    'Var direkt och undvik vaga förväntningar',
    'Uppmuntra dem att uttrycka sin åsikt',
    'Skapa en avslappnad arbetsatmosfär',
    'Ge dem mjuka men tydliga deadlines',
    'Ha tålamod om de behöver tid att tänka'
  ],
  underStress: {
    movesToType: 'Type 6',
    description: 'Under stress blir Typ 9 orolig och misstänksam. De kan oroa sig och bli överdrivet försiktiga, och tappar sin inre frid.'
  },
  whenSecure: {
    movesToType: 'Type 3',
    description: 'När Typ 9 känner sig trygg, blir de mer aktiva, självsäkra och målinriktade. De erkänner sitt värde och använder sin energi för att sträva efter sina egna mål.'
  },
  notToBeConfusedWith: [
    {
      type: 'Type 2 – Hjälparen',
      difference: 'Båda är varma, men Typ 2 söker aktivt kontakt, medan Typ 9 är passiv och reserverad.'
    },
    {
      type: 'Type 5 – Utredaren',
      difference: 'Båda kan vara tillbakadragna, men Typ 9 gör det för att bevara harmoni, medan Typ 5 gör det för att spara resurser och kontemplera.'
    },
    {
      type: 'Type 4 – Individualisten',
      difference: 'Båda kan dra sig tillbaka känslomässigt, men Typ 9 gör det för att bibehålla stabilitet, medan Typ 4 gör det för att differentiera sig från världen.'
    }
  ]
}
};
