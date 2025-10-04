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
}

export const typeDetails: Record<string, TypeDetail> = {
 
'Type 1': {
  type: 'Type 1',
  title: 'Perfektionisten',
  worldview: 'Verden burde være mere retfærdig og ordentlig, men er det ikke altid. Derfor skaber jeg mine egne regler og standarder for, hvordan ting bør gøres.',
  focus: 'Fokuserer på at gøre det rigtige, forbedre ting og undgå fejl. Har et skarpt øje for, hvad der kan gøres bedre.',
  basicFear: 'At være forkert, uduelig eller moralsk defekt.',
  basicDesire: 'At være god, ordentlig og gøre det rigtige.',
  innerDialogue: '"Det er ikke godt nok." "Sådan burde det ikke gøres." "Hvis jeg ikke gør det ordentligt, gør ingen det."',
  qualities: ['Principfast', 'Organiseret', 'Pålidelig', 'Ansvarlig', 'Idealistisk', 'Etisk'],
  passion: 'Undertrykt vrede – ofte udtrykt som irritation eller kritik, når ting ikke lever op til egne standarder.',
  blindSpots: [
    'Kan være for kritisk over for sig selv og andre',
    'Har svært ved at acceptere "godt nok"',
    'Kan overse helheden i jagten på detaljer'
  ],
  thoughtPatterns: [
    'Sammenligner med idealer',
    'Fokuserer på fejl og mangler',
    'Tænker i "burde" og "skal"'
  ],
  strivesFor: 'At gøre det rigtige, leve op til høje standarder og skabe orden.',
  attractedTo: 'Kvalitet, struktur, etik og mennesker med stærke principper.',
  dislikes: 'Sjusk, uretfærdighed, ineffektivitet og kaos.',
  appearance: 'Fremstår kontrolleret, velorganiseret og professionel. Omgivelser og fremtoning er ofte pæne og ordentlige.',
  personalStrengths: [
    'Høje standarder og kvalitetsbevidsthed',
    'Stærk arbejdsmoral og ansvarsfølelse',
    'Evne til at forbedre og optimere',
    'Etisk og principiel tilgang'
  ],
  learning: 'Lærer bedst gennem struktur, klare rammer og mulighed for at forfine færdigheder.',
  motivatedBy: 'At gøre en forskel, forbedre ting og blive anerkendt for kvalitet.',
  communication: 'Præcis og struktureret. Kan virke kritisk eller belærende, især når noget ikke lever op til forventningerne.',
  relationships: {
    generalApproach: 'Søger partnere med samme værdier og standarder. Kan være kritiske, men også meget loyale.',
    workApproach: 'Arbejder grundigt og metodisk. Sætter høje krav til sig selv og andre. Leverer stabilt og pålideligt.',
    teamPlayer: 'Bidrager med struktur og kvalitetskontrol. Kan være kritisk, men sikrer høj standard.',
    conflictPoints: [
      'Frustreres over andres sjusk eller manglende ansvar',
      'Kan virke dømmende eller bedrevidende',
      'Har svært ved at acceptere forskellige måder at gøre tingene på'
    ],
    conflictHandling: 'Undgår ofte direkte konfrontation, men kan opbygge irritation. Søger det "rigtige" svar frem for kompromis.',
    developmentChallenge: 'At acceptere ufuldkommenhed og give slip på behovet for kontrol.'
  },
  ifYouAreThisType: [
    'Husk at "godt nok" nogle gange er godt nok',
    'Øv dig i at give positiv feedback – ikke kun kritik',
    'Tillad dig selv at slappe af og tage pauser',
    'Accepter at andre har andre standarder end dine',
    'Fokuser på fremgang frem for perfektion'
  ],
  ifYouWorkWithThisType: [
    'Anerkend deres indsats og høje standarder',
    'Vær forberedt og præcis i din kommunikation',
    'Giv dem tid og plads til at gøre tingene ordentligt',
    'Undgå sjusk og overfladiskhed',
    'Hjælp dem med at se det positive i det, de allerede har opnået'
  ],
  underStress: {
   
movesToType: 'Type 4',
  description: 'Under pres bliver Type 1 mere følelsesladet og selvkritisk. De kan føle sig misforstået og trække sig ind i sig selv med melankoli og frustration. Der opstår en følelse af afmagt, og de kan blive kantede og eksplosive i deres udtryk, især når omgivelserne ikke lever op til deres indre standarder.'

  },
  whenSecure: {
    
movesToType: 'Type 7',
  description: 'Når Type 1 føler sig tryg og sikker, slipper de behovet for kontrol og åbner op for spontanitet og glæde. De bliver mere legende, optimistiske og åbne for nye oplevelser, og kan nyde livet uden at skulle forbedre eller rette på alt.'
  },
  notToBeConfusedWith: [
    {
      type: 'Type 6 – Loyalisten',
      difference: 'Begge kan virke ansvarlige, men Type 1 handler ud fra indre principper, mens Type 6 søger tryghed og støtte i fællesskabet.'
    },
    {
      type: 'Type 5 – Iagttageren',
      difference: 'Type 1 er drevet af etik og forbedring, mens Type 5 er mere nysgerrig og neutral i sin tilgang.'
    },
    {
      type: 'Type 8 – Beskytteren',
      difference: 'Type 1 kæmper for det rigtige og orden, mens Type 8 kæmper for frihed og kontrol. Deres energi kan kollidere.'
    }
  ]
},


 
'Type 2': {
  type: 'Type 2',
  title: 'Hjælperen',
  worldview: 'Verden er fuld af mennesker, der har brug for omsorg og støtte. Jeg føler mig værdifuld, når jeg kan gøre en forskel for andre.',
  focus: 'Fokuserer på andres behov og følelser. Har en stærk intuition for, hvordan de kan hjælpe og skabe forbindelse.',
  basicFear: 'At være uelsket, overset eller ikke have betydning for andre.',
  basicDesire: 'At føle sig elsket og værdsat. At være vigtig og nødvendig i andres liv.',
  innerDialogue: '"Hvad har du brug for?" "Hvordan kan jeg gøre dig glad?" "Jeg håber, de sætter pris på mig."',
  qualities: ['Omsorgsfuld', 'Empatisk', 'Generøs', 'Støttende', 'Varm', 'Intuitiv'],
  passion: 'Stolthed – en følelse af at være uundværlig og den, der gør en forskel.',
  blindSpots: [
    'Glemmer egne behov og grænser',
    'Kan bruge hjælpsomhed til at få opmærksomhed',
    'Har svært ved at sige nej og sætte klare grænser'
  ],
  thoughtPatterns: [
    'Tænker på hvordan andre har det',
    'Overvejer hvordan de kan hjælpe',
    'Bekymrer sig om relationer og om at være værdsat'
  ],
  strivesFor: 'At være elsket og betydningsfuld. At skabe varme og nærvær omkring sig.',
  attractedTo: 'Mennesker der har brug for støtte, nære relationer og følelsesmæssig kontakt.',
  dislikes: 'Kulde, egoisme, at blive ignoreret eller taget for givet.',
  appearance: 'Venlig og imødekommende. Klæder sig ofte for at behage eller skabe kontakt.',
  personalStrengths: [
    'Stærk empati og følelsesmæssig forståelse',
    'Evne til at skabe trygge og varme relationer',
    'Generøsitet og vilje til at hjælpe',
    'Intuitiv fornemmelse for andres behov'
  ],
  learning: 'Lærer bedst gennem relationer og praktisk erfaring i støttende omgivelser.',
  motivatedBy: 'Taknemmelighed, anerkendelse og muligheden for at gøre en forskel for andre.',
  communication: 'Varm og personlig. Spørger ind til andres velbefindende og viser omsorg.',
  relationships: {
    generalApproach: 'Giver meget af sig selv og søger relationer, hvor deres omsorg bliver værdsat.',
    workApproach: 'Skaber trivsel og gode relationer i teamet. Fokuserer på det menneskelige.',
    teamPlayer: 'Den der sørger for, at alle har det godt. Støtter og opmuntrer kolleger.',
    conflictPoints: [
      'Føler sig overset eller uværdsat',
      'Kan blive manipulerende for at få opmærksomhed',
      'Ignorerer egne behov og grænser'
    ],
    conflictHandling: 'Undgår direkte konfrontation, men kan reagere passivt-aggressivt hvis ikke værdsat.',
    developmentChallenge: 'At lære at udtrykke egne behov og sætte sunde grænser.'
  },
  ifYouAreThisType: [
    'Husk at tage vare på dig selv – ikke kun andre',
    'Øv dig i at bede om hjælp og vise sårbarhed',
    'Sæt grænser for hvor meget du giver',
    'Anerkend din værdi uafhængigt af din hjælpsomhed',
    'Vær ærlig om dine følelser og behov'
  ],
  ifYouWorkWithThisType: [
    'Vis taknemmelighed for deres støtte og omsorg',
    'Spørg ind til deres velbefindende – ikke kun hvad de gør for andre',
    'Anerkend deres bidrag til teamets trivsel',
    'Hjælp dem med at prioritere sig selv',
    'Vær personlig og varm i kommunikationen'
  ],
  underStress: {
    
movesToType: 'Type 8',
  description: 'Når Type 2 er presset, kan de blive mere kontrollerende og vredladne. De kræver anerkendelse og kan reagere aggressivt, især hvis de føler sig overset eller uværdsat. Deres hjælpsomhed bliver en måde at få magt og opmærksomhed på.'

  },
  whenSecure: {
  
movesToType: 'Type 4',
  description: 'I trygge omgivelser får Type 2 bedre kontakt til egne følelser og behov. De bliver mere autentiske og kreative, og udtrykker sig med dybde og ægthed, uden at være afhængige af andres bekræftelse.'
 },
  notToBeConfusedWith: [
    {
      type: 'Type 6 – Loyalisten',
      difference: 'Begge er omsorgsfulde og relationelle, men Type 2 søger følelsesmæssig nærhed, mens Type 6 søger tryghed og stabilitet i fællesskabet.'
    },
    {
      type: 'Type 9 – Fredselskeren',
      difference: 'Begge kan virke varme og imødekommende, men Type 2 er aktivt opsøgende og hjælpsom, mens Type 9 er mere passiv og undvigende.'
    },
    {
      type: 'Type 4 – Individualisten',
      difference: 'Begge har stærke følelser, men Type 2 fokuserer på andres behov, mens Type 4 fokuserer på egne følelser og identitet.'
    }
  ]
},



'Type 3': {
  type: 'Type 3',
  title: 'Præstationsorienterede',
  worldview: 'Verden belønner dem, der lykkes og skaber resultater. Jeg føler mig værdifuld, når jeg opnår noget og bliver anerkendt for det.',
  focus: 'Fokuserer på mål, effektivitet og hvordan de fremstår. Vil gerne være den bedste og se godt ud, mens de gør det.',
  basicFear: 'At være uden værdi, hvis de ikke præsterer. Frygter at fejle og blive overset.',
  basicDesire: 'At føle sig værdifuld og blive anerkendt for sine præstationer og evner.',
  innerDialogue: '"Hvad skal jeg opnå i dag?" "Hvordan ser det ud?" "Jeg skal være den bedste."',
  qualities: ['Målrettet', 'Energisk', 'Pragmatisk', 'Selvsikker', 'Tilpasningsdygtig', 'Ambitiøs'],
  passion: 'Selvbedrag – både over for sig selv og andre om, hvem de virkelig er bag facaden.',
  blindSpots: [
    'Kan miste kontakten til egne følelser',
    'Fokuserer på image frem for indhold',
    'Har svært ved at acceptere fejl og sårbarhed'
  ],
  thoughtPatterns: [
    'Tænker i mål og resultater',
    'Overvejer hvad der vil imponere andre',
    'Fokuserer på at være effektiv og succesfuld'
  ],
  strivesFor: 'Succes, anerkendelse og at være den bedste.',
  attractedTo: 'Projekter med prestige, synlige resultater og mennesker der kan styrke deres image.',
  dislikes: 'Fiasko, ineffektivitet og at blive ignoreret eller set som middelmådig.',
  appearance: 'Professionel og velklædt. Fremstår selvsikker og kompetent – ofte med et poleret ydre.',
  personalStrengths: [
    'Stærk drivkraft og målrettethed',
    'Evne til at inspirere og motivere',
    'Pragmatisk problemløsning',
    'Fleksibilitet og tilpasningsevne'
  ],
  learning: 'Lærer bedst gennem praktisk erfaring, konkurrence og målbare resultater.',
  motivatedBy: 'Succes, anerkendelse og muligheden for at skille sig ud.',
  communication: 'Direkte og målrettet. Kan være inspirerende, men også fokuseret på resultater frem for følelser.',
  relationships: {
    generalApproach: 'Søger partnere der støtter deres ambitioner og deler deres fokus på succes.',
    workApproach: 'Trives i konkurrence og resultatorienterede miljøer. Får ting til at ske.',
    teamPlayer: 'Driver teamet fremad og inspirerer til høj præstation.',
    conflictPoints: [
      'Kan prioritere resultater over relationer',
      'Har svært ved at vise sårbarhed',
      'Bliver utålmodig med langsomme eller ineffektive processer'
    ],
    conflictHandling: 'Fokuserer på løsninger og fremdrift. Undgår ofte følelsesmæssige aspekter.',
    developmentChallenge: 'At lære at værdsætte sig selv for den, de er – ikke kun for det, de opnår.'
  },
  ifYouAreThisType: [
    'Tag tid til at mærke dine følelser og behov',
    'Værdsæt processen – ikke kun resultatet',
    'Del dine usikkerheder med betroede personer',
    'Husk at fejl er en del af læring',
    'Prioritér ægte og nære relationer'
  ],
  ifYouWorkWithThisType: [
    'Anerkend deres præstationer og indsats',
    'Vær effektiv og målrettet i din kommunikation',
    'Giv dem synlige og udfordrende opgaver',
    'Støt deres ambitioner – men mind dem om balancen',
    'Hjælp dem med at se værdien i det, der ikke kan måles'
  ],
  underStress: {
   
movesToType: 'Type 9',
  description: 'Under stress mister Type 3 motivation og bliver passiv. De trækker sig fra opgaver og undgår udfordringer, og kan fremstå uengagerede og følelsesmæssigt frakoblede.'
  },
  whenSecure: {
 
movesToType: 'Type 6',
  description: 'Når Type 3 føler sig sikker, bliver de mere teamorienterede og loyale. De fokuserer på at hjælpe andre med at lykkes og slipper behovet for konstant at imponere.'
  },
  notToBeConfusedWith: [
    {
      type: 'Type 1 – Perfektionisten',
      difference: 'Begge er ambitiøse og målrettede, men Type 1 handler ud fra indre principper og etik, mens Type 3 fokuserer på ydre succes og anerkendelse.'
    },
    {
      type: 'Type 7 – Eventyreren',
      difference: 'Begge er energiske og handlingsorienterede, men Type 3 planlægger og optimerer, mens Type 7 søger oplevelser og undgår begrænsninger.'
    },
    {
      type: 'Type 8 – Beskytteren',
      difference: 'Begge er stærke og handlekraftige, men Type 3 søger anerkendelse og image, mens Type 8 søger kontrol og retfærdighed.'
    }
  ]
},



'Type 4': {
  type: 'Type 4',
  title: 'Individualisten',
  worldview: 'Jeg føler mig anderledes og mangler noget, som andre har. Jeg søger dybde, mening og autenticitet i alt, hvad jeg gør.',
  focus: 'Fokuserer på følelser, identitet og det, der mangler. Ønsker at være unik og forstået.',
  basicFear: 'At være uden identitet eller betydning. Frygter at være almindelig og uinteressant.',
  basicDesire: 'At finde sig selv og blive værdsat for sin autenticitet og unikke væsen.',
  innerDialogue: '"Hvad mangler jeg?" "Forstår de mig?" "Jeg er anderledes end alle andre."',
  qualities: ['Kreativ', 'Følsom', 'Introspektiv', 'Autentisk', 'Empatisk', 'Æstetisk'],
  passion: 'Misundelse – en følelse af, at andre har noget, de selv mangler, og som de længes efter.',
  blindSpots: [
    'Fokuserer for meget på det negative eller det, der mangler',
    'Kan blive selvoptaget og følelsesmæssigt dramatisk',
    'Har svært ved at værdsætte det almindelige og hverdagsagtige'
  ],
  thoughtPatterns: [
    'Sammenligner sig med andre',
    'Føler sig anderledes og udenfor',
    'Søger efter dybere mening og ægthed'
  ],
  strivesFor: 'At være autentisk, unik og føle sig dybt forbundet med noget meningsfuldt.',
  attractedTo: 'Skønhed, dybde, kreativitet og mennesker der forstår deres følelser.',
  dislikes: 'Overfladiskhed, konformitet, at blive misforstået eller ignoreret.',
  appearance: 'Udtrykker sin individualitet gennem personlig stil og æstetik. Fremstår ofte kunstnerisk eller alternativ.',
  personalStrengths: [
    'Dyb følelsesmæssig forståelse',
    'Kreativitet og æstetisk sans',
    'Autenticitet og ærlighed',
    'Evne til at se skønhed i det svære og komplekse'
  ],
  learning: 'Lærer bedst gennem kreative udtryk, personlige forbindelser og følelsesmæssig engagement.',
  motivatedBy: 'Muligheden for at udtrykke sig autentisk, skabe noget unikt og blive forstået.',
  communication: 'Følelsesladet, personlig og ofte poetisk. Søger dybde og mening i samtaler.',
  relationships: {
    generalApproach: 'Søger dybe og autentiske forbindelser med mennesker, der kan rumme deres kompleksitet.',
    workApproach: 'Trives i kreative og frie miljøer, hvor de kan udtrykke deres individualitet.',
    teamPlayer: 'Bidrager med kreativitet og følelsesmæssig dybde. Kan være humørpræget og trække sig ved konflikt.',
    conflictPoints: [
      'Kan være følelsesmæssigt intense og dramatiske',
      'Har svært ved rutiner og struktur',
      'Trækker sig tilbage, hvis de føler sig misforstået'
    ],
    conflictHandling: 'Reagerer følelsesmæssigt eller trækker sig. Søger forståelse og dyb kontakt.',
    developmentChallenge: 'At acceptere det almindelige og finde skønhed i hverdagen.'
  },
  ifYouAreThisType: [
    'Øv dig i at se det positive i dit liv',
    'Accepter at alle har svære perioder – du er ikke alene',
    'Find skønhed i det almindelige og hverdagsagtige',
    'Del dine følelser på en konstruktiv måde',
    'Værdsæt stabilitet og rutiner som en støtte'
  ],
  ifYouWorkWithThisType: [
    'Anerkend deres kreativitet og unikke perspektiv',
    'Vær autentisk og ærlig i din kommunikation',
    'Giv dem plads til følelsesmæssigt udtryk',
    'Undgå overfladiske samtaler og hurtige løsninger',
    'Støt deres kreative og personlige projekter'
  ],
  underStress: {
   
 movesToType: 'Type 2',
  description: 'Når Type 4 er presset, bliver de klamrende og søger opmærksomhed og bekræftelse. De kan miste sig selv i relationen og forsøge at få andre til at opfylde deres følelsesmæssige behov.'
  },
  whenSecure: {

  movesToType: 'Type 1',
  description: 'I trygge rammer bliver Type 4 mere struktureret og disciplineret. De omsætter deres kreativitet til konkrete resultater og får en stærkere følelse af formål og retning.'
  },
  notToBeConfusedWith: [
    {
      type: 'Type 5 – Iagttageren',
      difference: 'Begge er introspektive og dybe, men Type 4 er følelsesdrevet og søger kontakt, mens Type 5 er mere rationel og søger afstand.'
    },
    {
      type: 'Type 6 – Loyalisten',
      difference: 'Begge kan være følelsesmæssigt intense, men Type 4 søger autenticitet og dybde, mens Type 6 søger tryghed og stabilitet.'
    },
    {
      type: 'Type 9 – Fredselskeren',
      difference: 'Begge kan trække sig ind i sig selv, men Type 4 gør det med følelser og længsel, mens Type 9 gør det for at undgå konflikt og uro.'
    }
  ]
},

'Type 5': {
  type: 'Type 5',
  title: 'Undersøgeren',
  worldview: 'Verden kan være overvældende og krævende. Jeg har brug for at forstå tingene og beskytte min energi, før jeg engagerer mig.',
  focus: 'Fokuserer på at observere, analysere og bevare ressourcer – både mentalt og følelsesmæssigt.',
  basicFear: 'At blive invaderet, overvældet eller stå uden kompetence.',
  basicDesire: 'At være kompetent og forstå verden på et dybt og meningsfuldt niveau.',
  innerDialogue: '"Jeg har brug for mere information." "Hvad hvis jeg ikke kan klare det?" "Jeg har brug for tid til at tænke."',
  qualities: ['Analytisk', 'Selvstændig', 'Nysgerrig', 'Objektiv', 'Privat', 'Perceptiv'],
  passion: 'Griskhed – en trang til at samle viden og beskytte egne ressourcer.',
  blindSpots: [
    'Kan isolere sig og blive følelsesmæssigt distanceret',
    'Har svært ved at handle uden fuld forståelse',
    'Kan virke uengageret eller fraværende'
  ],
  thoughtPatterns: [
    'Analyserer og kategoriserer information',
    'Tænker på hvordan de kan bevare energi',
    'Søger efter mønstre og dybere forståelse'
  ],
  strivesFor: 'Kompetence, indsigt og uafhængighed.',
  attractedTo: 'Komplekse systemer, dyb viden og mennesker der respekterer deres behov for rum.',
  dislikes: 'Overfladiskhed, følelsesmæssig invasion og pres for hurtig handling.',
  appearance: 'Tilbagetrukken og observerende. Klæder sig ofte neutralt og praktisk.',
  personalStrengths: [
    'Dyb analytisk tænkning',
    'Objektivitet og upartiskhed',
    'Selvstændighed og evne til at arbejde alene',
    'Evne til at se det store billede og tænke langsigtet'
  ],
  learning: 'Lærer bedst gennem selvstudium, observation og tid til fordybelse.',
  motivatedBy: 'Muligheden for at forstå komplekse emner og arbejde uforstyrret.',
  communication: 'Præcis og faktuel. Deler viden, når de føler sig trygge og kompetente.',
  relationships: {
    generalApproach: 'Foretrækker få, dybe relationer med mennesker der respekterer deres behov for alenetid.',
    workApproach: 'Trives med komplekse opgaver og arbejder bedst selvstændigt.',
    teamPlayer: 'Bidrager med ekspertise og objektivitet. Kan være stille og reserveret.',
    conflictPoints: [
      'Kan virke følelseskold eller uinteresseret',
      'Har svært ved at dele følelser og behov',
      'Trækker sig ofte ved pres eller følelsesmæssig konfrontation'
    ],
    conflictHandling: 'Trækker sig for at tænke. Foretrækker skriftlig eller indirekte kommunikation.',
    developmentChallenge: 'At engagere sig følelsesmæssigt og dele tanker og følelser med andre.'
  },
  ifYouAreThisType: [
    'Øv dig i at dele dine tanker og følelser – også selvom det føles uvant',
    'Sæt grænser i stedet for bare at trække dig',
    'Engager dig i små sociale aktiviteter',
    'Husk at handling ikke kræver perfekt forståelse',
    'Værdsæt dine følelser som vigtig information – ikke bare forstyrrelser'
  ],
  ifYouWorkWithThisType: [
    'Respekter deres behov for tid og rum',
    'Giv dem information på forhånd og undgå pres',
    'Værdsæt deres viden og analytiske evner',
    'Kommunikér klart og præcist – undgå følelsesladet pres',
    'Skab trygge rammer for samarbejde uden at invadere'
  ],
  underStress: {
 
  movesToType: 'Type 7',
  description: 'Under pres bliver Type 5 rastløs og spreder sig for tyndt. De mister fokus og handler impulsivt, ofte uden den sædvanlige refleksion og analyse.'
  },
  whenSecure: {

 movesToType: 'Type 8',
  description: 'Når Type 5 føler sig sikker, bliver de mere selvsikre og handlekraftige. De tør tage ansvar og stå frem med deres viden og beslutninger.'
  },
  notToBeConfusedWith: [
    {
      type: 'Type 4 – Individualisten',
      difference: 'Begge er introspektive, men Type 4 er følelsesdrevet og søger kontakt, mens Type 5 er rationel og søger afstand.'
    },
    {
      type: 'Type 9 – Fredselskeren',
      difference: 'Begge kan virke stille og tilbagetrukne, men Type 5 trækker sig for at tænke, mens Type 9 gør det for at undgå konflikt.'
    },
    {
      type: 'Type 1 – Perfektionisten',
      difference: 'Begge har principper, men Type 1 handler ud fra etik og korrekthed, mens Type 5 ser principper som mentale konstruktioner, der kan undersøges og udfordres.'
    }
  ]
},

 
'Type 6': {
  type: 'Type 6',
  title: 'Loyalisten',
  worldview: 'Verden føles uforudsigelig og usikker. Jeg har brug for støtte og klare rammer for at føle mig tryg.',
  focus: 'Fokuserer på sikkerhed, tillid og hvem der er til at stole på. Er opmærksom på potentielle problemer og risici.',
  basicFear: 'At stå alene uden støtte eller vejledning. Frygter at tage fejl og blive svigtet.',
  basicDesire: 'At føle sig tryg og støttet. At have nogen eller noget at læne sig op ad.',
  innerDialogue: '"Hvad hvis noget går galt?" "Kan jeg stole på dem?" "Hvad skal jeg gøre?"',
  qualities: ['Loyal', 'Ansvarlig', 'Forsigtig', 'Samarbejdsvillig', 'Pålidelig', 'Engageret'],
  passion: 'Frygt – en konstant indre uro og bekymring, der kan føre til tvivl og overkontrol.',
  blindSpots: [
    'Kan bekymre sig unødigt og se problemer, før de opstår',
    'Har svært ved at stole på egne beslutninger',
    'Kan overføre egne frygtscenarier til andre'
  ],
  thoughtPatterns: [
    'Tænker i worst-case scenarier',
    'Søger tryghed og støtte',
    'Analyserer folks motiver og intentioner'
  ],
  strivesFor: 'Sikkerhed, stabilitet og loyalitet.',
  attractedTo: 'Klare strukturer, pålidelige mennesker og trygge fællesskaber.',
  dislikes: 'Usikkerhed, svigt, uforudsigelighed og at stå alene med ansvar.',
  appearance: 'Ofte årvågen og lidt bekymret. Klæder sig praktisk og passende.',
  personalStrengths: [
    'Stærk loyalitet og ansvarsfølelse',
    'Evne til at forudse problemer og risici',
    'God til samarbejde og at støtte andre',
    'Engageret og principfast'
  ],
  learning: 'Lærer bedst i trygge og strukturerede rammer med tydelig feedback.',
  motivatedBy: 'Anerkendelse af deres loyalitet og muligheden for at bidrage til fællesskabet.',
  communication: 'Spørgende og forsigtig. Søger bekræftelse og klarhed.',
  relationships: {
    generalApproach: 'Søger stabile og loyale relationer, hvor der er gensidig støtte.',
    workApproach: 'Trives i strukturerede miljøer med klare forventninger og ledelse.',
    teamPlayer: 'Meget engageret og loyal. Arbejder hårdt for teamets succes.',
    conflictPoints: [
      'Kan være overbekymret og pessimistisk',
      'Har svært ved at tage beslutninger alene',
      'Kan blive defensiv og mistroisk under pres'
    ],
    conflictHandling: 'Søger støtte og afklaring. Kan reagere enten underdanigt eller oprørsk.',
    developmentChallenge: 'At stole mere på sig selv og sine egne vurderinger.'
  },
  ifYouAreThisType: [
    'Øv dig i at stole på dine egne beslutninger',
    'Fokuser på det, der går godt – ikke kun det, der kan gå galt',
    'Tag små skridt mod mere selvstændighed',
    'Søg ærlig og konstruktiv feedback',
    'Husk at de fleste mennesker vil dig det godt'
  ],
  ifYouWorkWithThisType: [
    'Vær tydelig og konsekvent i din kommunikation',
    'Giv dem tryghed og klare rammer',
    'Anerkend deres loyalitet og indsats',
    'Hjælp dem med at se deres styrker',
    'Vær tålmodig med deres bekymringer og behov for afklaring'
  ],
  underStress: {
 
  movesToType: 'Type 3',
  description: 'Når Type 6 er presset, bliver de mere konkurrenceprægede og fokuserede på at bevise deres værdi. De kan fremstå overdrevent præstationsorienterede og miste kontakten til deres indre kompas.'
  },
  whenSecure: {

 movesToType: 'Type 9',
  description: 'I trygge relationer bliver Type 6 mere afslappet og tillidsfuld. De slipper bekymringerne og finder ro i nuet, med større tro på sig selv og andre.'
  },
  notToBeConfusedWith: [
    {
      type: 'Type 1 – Perfektionisten',
      difference: 'Begge har stærke principper, men Type 1 handler ud fra indre etik, mens Type 6 søger tryghed og støtte i fællesskabet.'
    },
    {
      type: 'Type 2 – Hjælperen',
      difference: 'Begge er relationelle, men Type 2 søger følelsesmæssig nærhed, mens Type 6 søger stabilitet og loyalitet.'
    },
    {
      type: 'Type 5 – Undersøgeren',
      difference: 'Begge kan være forsigtige og analyserende, men Type 5 trækker sig for at tænke, mens Type 6 søger støtte og afklaring.'
    }
  ]
},

'Type 7': {
  type: 'Type 7',
  title: 'Entusiasten',
  worldview: 'Verden er fuld af muligheder og oplevelser, og livet skal være sjovt og spændende. Jeg undgår smerte ved at fokusere på det positive og planlægge nye eventyr.',
  focus: 'Fokuserer på fremtiden, muligheder og alt det sjove, der kan ske. Undgår begrænsninger og svære følelser.',
  basicFear: 'At være fanget i smerte, kedsomhed eller begrænsning. Frygter at gå glip af noget.',
  basicDesire: 'At være glad og fri. At få opfyldt sine behov og leve et rigt og spændende liv.',
  innerDialogue: '"Hvad kan jeg lave sjovt?" "Der er så mange muligheder!" "Jeg vil ikke gå glip af noget."',
  qualities: ['Optimistisk', 'Spontan', 'Alsidig', 'Eventyrlysten', 'Energisk', 'Inspirerende'],
  passion: 'Grådighed – en trang til at få så mange oplevelser og indtryk som muligt.',
  blindSpots: [
    'Undgår svære følelser og smerte',
    'Har svært ved at forpligte sig',
    'Kan virke overfladisk eller uansvarlig'
  ],
  thoughtPatterns: [
    'Tænker på fremtidige muligheder',
    'Planlægger sjove aktiviteter',
    'Undgår negative tanker og følelser'
  ],
  strivesFor: 'Frihed, variation og glæde.',
  attractedTo: 'Nye oplevelser, kreative mennesker og spændende idéer.',
  dislikes: 'Begrænsninger, rutiner, negativitet og kedsomhed.',
  appearance: 'Energisk og smilende. Klæder sig ofte farverigt og kreativt.',
  personalStrengths: [
    'Positiv og inspirerende tilgang til livet',
    'Kreativitet og evne til at se muligheder',
    'Fleksibilitet og tilpasningsevne',
    'Evne til at sprede energi og glæde'
  ],
  learning: 'Lærer bedst gennem variation, praktiske øvelser og kreative udfordringer.',
  motivatedBy: 'Frihed, nye oplevelser og muligheden for at inspirere og engagere andre.',
  communication: 'Entusiastisk og energisk. Springer ofte mellem emner og fokuserer på det positive.',
  relationships: {
    generalApproach: 'Søger partnere der deler deres lyst til eventyr og livsglæde.',
    workApproach: 'Trives i dynamiske og kreative miljøer. Har brug for variation og frihed.',
    teamPlayer: 'Bidrager med energi og idéer. Kan have svært ved at holde fokus og følge op.',
    conflictPoints: [
      'Undgår svære samtaler og følelser',
      'Kan virke uansvarlig eller flyvsk',
      'Har svært ved at forholde sig til struktur og detaljer'
    ],
    conflictHandling: 'Forsøger at gøre konflikten positiv eller undgår den helt.',
    developmentChallenge: 'At lære at være til stede med svære følelser og forpligte sig dybt.'
  },
  ifYouAreThisType: [
    'Øv dig i at være til stede med svære følelser',
    'Fokuser på at færdiggøre projekter',
    'Sæt grænser for hvor meget du påtager dig',
    'Værdsæt dybde frem for bredde',
    'Lær at sige nej til nogle muligheder'
  ],
  ifYouWorkWithThisType: [
    'Giv dem variation og kreative udfordringer',
    'Vær positiv og entusiastisk',
    'Hjælp dem med at fokusere og prioritere',
    'Undgå for mange begrænsninger',
    'Værdsæt deres energi og optimisme'
  ],
  underStress: {
  
  movesToType: 'Type 1',
  description: 'Under stress bliver Type 7 kritisk og perfektionistisk. De fokuserer på fejl og mister deres positive tilgang, og kan blive frustrerede over begrænsninger og ansvar.'
  },
  whenSecure: {

  movesToType: 'Type 5',
  description: 'Når Type 7 føler sig sikker, bliver de mere fokuserede og analytiske. De fordyber sig og arbejder i dybden, og slipper behovet for konstant stimulation.'
  },
  notToBeConfusedWith: [
    {
      type: 'Type 3 – Præstationsorienterede',
      difference: 'Begge er energiske og handlingsorienterede, men Type 3 søger anerkendelse og succes, mens Type 7 søger oplevelser og frihed.'
    },
    {
      type: 'Type 9 – Fredselskeren',
      difference: 'Begge kan virke afslappede og positive, men Type 9 undgår konflikt ved at tilpasse sig, mens Type 7 undgår smerte ved at distrahere sig selv.'
    },
    {
      type: 'Type 4 – Individualisten',
      difference: 'Begge søger dybde og mening, men Type 4 går ind i følelserne, mens Type 7 forsøger at undgå dem og holde sig i det lyse.'
    }
  ]
},


 
'Type 8': {
  type: 'Type 8',
  title: 'Udfordreren',
  worldview: 'Verden er hård og uretfærdig. Jeg må være stærk og tage ansvar – både for mig selv og dem, jeg holder af.',
  focus: 'Fokuserer på kontrol, retfærdighed og beskyttelse. Vil gerne sikre, at ingen bliver udnyttet eller svigtet.',
  basicFear: 'At blive kontrolleret, svigtet eller såret. Frygter at miste magten og blive sårbar.',
  basicDesire: 'At være selvstændig og have kontrol over eget liv og skæbne.',
  innerDialogue: '"Jeg skal være stærk." "Hvem prøver at kontrollere mig?" "Jeg beskytter dem jeg holder af."',
  qualities: ['Stærk', 'Direkte', 'Selvsikker', 'Beskyttende', 'Retfærdig', 'Handlekraftig'],
  passion: 'Vellyst – en overdreven trang til intensitet, kontrol og dominans.',
  blindSpots: [
    'Kan være for dominerende og kontrollerende',
    'Har svært ved at vise sårbarhed',
    'Kan virke skræmmende eller intimiderende'
  ],
  thoughtPatterns: [
    'Tænker i magt og kontrol',
    'Vurderer folks styrke og troværdighed',
    'Fokuserer på retfærdighed og fairness'
  ],
  strivesFor: 'Selvbestemmelse, retfærdighed og beskyttelse af de svage.',
  attractedTo: 'Stærke mennesker, klare værdier og muligheder for at gøre en forskel.',
  dislikes: 'Svaghed, uretfærdighed, manipulation og at blive kontrolleret.',
  appearance: 'Stærk og selvsikker fremtoning. Ofte direkte øjenkontakt og fysisk tilstedeværelse.',
  personalStrengths: [
    'Naturligt lederskab og mod',
    'Evne til at handle under pres',
    'Beskyttelse af andre og kamp for retfærdighed',
    'Stor viljestyrke og beslutsomhed'
  ],
  learning: 'Lærer bedst gennem praktisk erfaring, udfordringer og mulighed for at tage ansvar.',
  motivatedBy: 'Respekt, indflydelse og muligheden for at skabe forandring.',
  communication: 'Direkte og uden omsvøb. Kan virke konfronterende, men også tydelig og ærlig.',
  relationships: {
    generalApproach: 'Søger stærke og loyale partnere, som de kan beskytte og respektere.',
    workApproach: 'Trives i lederroller og situationer, hvor de kan tage ansvar og skabe resultater.',
    teamPlayer: 'Driver teamet fremad og beskytter det. Kan være dominerende, men også støttende.',
    conflictPoints: [
      'Kan være for kontrollerende og krævende',
      'Har svært ved at vise sårbarhed',
      'Reagerer aggressivt, når de føler sig truet'
    ],
    conflictHandling: 'Konfronterer direkte og kæmper for deres synspunkt. Har svært ved at trække sig.',
    developmentChallenge: 'At lære at vise sårbarhed og stole på andre uden at miste styrke.'
  },
  ifYouAreThisType: [
    'Øv dig i at vise din sårbare side – det gør dig ikke svag',
    'Lyt mere og tal mindre',
    'Anerkend andres styrker og bidrag',
    'Lær at delegere og slip lidt af kontrollen',
    'Vær opmærksom på, hvordan din energi påvirker andre'
  ],
  ifYouWorkWithThisType: [
    'Vær direkte og ærlig – de respekterer det',
    'Respekter deres behov for kontrol og ansvar',
    'Stå fast og vær tydelig i dine holdninger',
    'Anerkend deres beskyttende rolle i teamet',
    'Giv dem udfordringer og plads til at tage ansvar'
  ],
  underStress: {

  movesToType: 'Type 5',
  description: 'Når Type 8 er presset, trækker de sig tilbage og bliver mistænksomme. De lukker af og bliver hemmelighedsfulde, og kan virke kolde og utilnærmelige.'
  },
  whenSecure: {
 
  movesToType: 'Type 2',
  description: 'I trygge relationer bliver Type 8 mere omsorgsfuld og støttende. De tør vise sårbarhed og hjælper andre uden betingelser, med en mere blød og kærlig tilgang.'
  },
  notToBeConfusedWith: [
    {
      type: 'Type 1 – Perfektionisten',
      difference: 'Begge har stærke principper, men Type 1 handler ud fra indre etik og regler, mens Type 8 handler ud fra vilje og retfærdighed i det ydre.'
    },
    {
      type: 'Type 3 – Præstationsorienterede',
      difference: 'Begge er handlekraftige, men Type 3 søger anerkendelse og succes, mens Type 8 søger kontrol og indflydelse.'
    },
    {
      type: 'Type 5 – Undersøgeren',
      difference: 'Begge kan være reserverede, men Type 5 trækker sig for at tænke, mens Type 8 trækker sig for at beskytte sig selv og bevare magten.'
    }
  ]
},



'Type 9': {
  type: 'Type 9',
  title: 'Fredsmageren',
  worldview: 'Verden er bedst, når der er ro og harmoni. Jeg undgår konflikter og spændinger for at bevare freden – både indeni og omkring mig.',
  focus: 'Fokuserer på at undgå uro, skabe komfort og holde fred. Har en tendens til at tilpasse sig og undgå konfrontation.',
  basicFear: 'At miste forbindelsen til andre eller blive skubbet ud. Frygter separation og splid.',
  basicDesire: 'At være i fred med sig selv og andre. At leve i harmoni og undgå konflikt.',
  innerDialogue: '"Lad os bare holde fred." "Det er nok ikke så vigtigt." "Jeg vil ikke skabe problemer."',
  qualities: ['Fredelig', 'Støttende', 'Accepterende', 'Diplomatisk', 'Stabil', 'Behagelig'],
  passion: 'Dovenskab – især i forhold til egne behov og prioriteter. En tendens til at "slumre" gennem livet.',
  blindSpots: [
    'Ignorerer egne behov og ønsker',
    'Undgår svære beslutninger og konfrontationer',
    'Kan være passiv-aggressiv og stædig'
  ],
  thoughtPatterns: [
    'Undgår konfliktfyldte tanker',
    'Fokuserer på andres behov frem for egne',
    'Minimerer problemer og ubehag'
  ],
  strivesFor: 'Indre og ydre fred, stabilitet og harmoni.',
  attractedTo: 'Rolige mennesker, stabile miljøer og situationer uden drama.',
  dislikes: 'Konflikter, pres, krav og følelsesmæssig uro.',
  appearance: 'Afslappet og imødekommende. Fremstår venlig og ikke-truende.',
  personalStrengths: [
    'Evne til at skabe ro og harmoni',
    'Diplomatiske og balancerede',
    'Stabile og pålidelige',
    'Ser alle sider af en sag og skaber forståelse'
  ],
  learning: 'Lærer bedst i trygge og støttende miljøer uden konkurrence.',
  motivatedBy: 'Fred, stabilitet og anerkendelse af deres bidrag til fællesskabet.',
  communication: 'Støttende og diplomatisk. Undgår kontroverser og taler helst om det behagelige.',
  relationships: {
    generalApproach: 'Søger stabile og fredelige relationer uden for meget drama.',
    workApproach: 'Trives i samarbejdende miljøer, hvor de kan støtte og skabe ro.',
    teamPlayer: 'Skaber harmoni og støtter teamet. Kan have svært ved at tage lederskab eller træffe beslutninger.',
    conflictPoints: [
      'Undgår svære samtaler og beslutninger',
      'Kan være passiv-aggressiv',
      'Har svært ved at sætte grænser og stå ved egne behov'
    ],
    conflictHandling: 'Undgår eller minimerer konflikter. Trækker sig ofte tilbage og håber, det går over.',
    developmentChallenge: 'At lære at prioritere egne behov og tage initiativ – også når det skaber uro.'
  },
  ifYouAreThisType: [
    'Øv dig i at udtrykke dine egne ønsker og behov',
    'Sæt grænser og sig fra, når det er nødvendigt',
    'Tag initiativ til det, der betyder noget for dig',
    'Anerkend at konflikt kan være sundt og udviklende',
    'Prioritér dig selv – ikke kun andres komfort'
  ],
  ifYouWorkWithThisType: [
    'Vær tålmodig og støttende',
    'Hjælp dem med at udtrykke deres meninger',
    'Undgå at presse dem til hurtige beslutninger',
    'Værdsæt deres evne til at skabe ro og balance',
    'Opmuntr dem til at tage initiativ og stå ved sig selv'
  ],
  underStress: {
 
  movesToType: 'Type 6',
  description: 'Under pres bliver Type 9 bekymret og reaktiv. De søger sikkerhed og støtte hos andre og kan blive passive-aggressive og defensive. Deres ellers positive livsfilosofi krakelerer og afslører tvivl og pessimisme.'
  },
  whenSecure: {

  movesToType: 'Type 3',
  description: 'Når Type 9 føler sig sikker, bliver de mere målrettede og energiske. De tager initiativ og fokuserer på egne mål, og slipper behovet for at undgå uro.'
  },
  notToBeConfusedWith: [
    {
      type: 'Type 2 – Hjælperen',
      difference: 'Begge er støttende og relationelle, men Type 2 søger følelsesmæssig nærhed, mens Type 9 søger ro og undgår følelsesmæssig intensitet.'
    },
    {
      type: 'Type 5 – Undersøgeren',
      difference: 'Begge kan virke tilbagetrukne, men Type 5 trækker sig for at tænke, mens Type 9 trækker sig for at undgå uro og konflikt.'
    },
    {
      type: 'Type 4 – Individualisten',
      difference: 'Begge har et rigt indre liv, men Type 4 går ind i følelserne og søger dybde, mens Type 9 undgår følelsesmæssig intensitet og holder sig til det behagelige.'
    }
  ]
}

};