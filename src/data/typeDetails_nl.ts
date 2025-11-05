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
  title: 'De Hervormer / Perfectionist',
  worldview: 'De wereld zou rechtvaardiger en ordelijker moeten zijn, maar dat is het niet altijd. Daarom creëer ik mijn eigen regels en standaarden voor hoe dingen gedaan zouden moeten worden.',
  focus: 'Richt zich op het doen van wat juist is, het verbeteren van zaken, en het vermijden van fouten. Heeft een scherp oog voor wat beter kan.',
  basicFear: 'Om verkeerd, corrupt, slecht, of moreel gebrekkig te zijn.',
  basicDesire: 'Om goed, rechtschapen, en het juiste te doen.',
  innerDialogue: '"Het is niet goed genoeg." "Het zou niet zo moeten gaan." "Als ik het niet goed doe, doet niemand het."',
  qualities: ['Principieel', 'Georganiseerd', 'Betrouwbaar', 'Verantwoordelijk', 'Idealistisch', 'Ethisch'],
  passion: 'Wrok/Boosheid – wordt vaak geuit als irritatie of kritiek wanneer dingen niet aan hun interne normen voldoen.',
  blindSpots: [
    'Kan overmatig kritisch zijn op zichzelf en anderen',
    'Heeft moeite met het accepteren van "goed genoeg"',
    'Kan in de jacht op details het grotere geheel over het hoofd zien'
  ],
  thoughtPatterns: [
    'Vergelijkt de realiteit met idealen',
    'Focust op gebreken en tekortkomingen',
    'Denkt in termen van "zou moeten" en "moet"'
  ],
  strivesFor: 'Om het juiste te doen, aan hoge standaarden te voldoen, en orde te scheppen.',
  attractedTo: 'Kwaliteit, structuur, ethiek, en mensen met sterke principes.',
  dislikes: 'Slordigheid, onrechtvaardigheid, inefficiëntie, en chaos.',
  appearance: 'Lijkt beheerst, goed georganiseerd, en professioneel. Omgeving en uiterlijk zijn vaak netjes en verzorgd.',
  personalStrengths: [
    'Hoge standaarden en kwaliteitsbewustzijn',
    'Sterke werkethiek en verantwoordelijkheidsgevoel',
    'Vermogen om te verbeteren en te optimaliseren',
    'Ethische en principiële aanpak'
  ],
  learning: 'Leert het best via structuur, duidelijke kaders, en de mogelijkheid om vaardigheden te verfijnen.',
  motivatedBy: 'Een verschil maken, zaken verbeteren, en erkenning krijgen voor kwaliteit.',
  communication: 'Precies en gestructureerd. Kan kritisch of belerend overkomen, vooral als iets niet voldoet aan de verwachtingen.',
  relationships: {
    generalApproach: 'Zoekt partners met vergelijkbare waarden en standaarden. Kan kritisch, maar ook zeer loyaal zijn.',
    workApproach: 'Werkt grondig en methodisch. Stelt hoge eisen aan zichzelf en anderen. Levert stabiel en betrouwbaar werk.',
    teamPlayer: 'Brengt structuur en kwaliteitscontrole in. Kan kritisch zijn, maar zorgt voor hoge standaarden.',
    conflictPoints: [
      'Is gefrustreerd door de slordigheid of het gebrek aan verantwoordelijkheid bij anderen',
      'Kan veroordelend of zelfingenomen overkomen',
      'Heeft moeite met het accepteren van andere manieren van doen'
    ],
    conflictHandling: 'Vermijdt vaak directe confrontatie maar kan irritatie opbouwen. Zoekt naar het "juiste" antwoord in plaats van compromis.',
    developmentChallenge: 'Onvolmaaktheid accepteren en de behoefte aan controle loslaten.'
  },
  ifYouAreThisType: [
    'Onthoud dat "goed genoeg" soms goed genoeg is',
    'Oefen met het geven van positieve feedback – niet alleen kritiek',
    'Sta jezelf toe om te ontspannen en pauzes te nemen',
    'Accepteer dat anderen andere standaarden hebben dan jij',
    'Focus op vooruitgang in plaats van perfectie'
  ],
  ifYouWorkWithThisType: [
    'Erken hun inspanning en hoge standaarden',
    'Wees voorbereid en nauwkeurig in je communicatie',
    'Geef ze de tijd en ruimte om dingen goed te doen',
    'Vermijd slordigheid en oppervlakkigheid',
    'Help hen het positieve te zien in wat ze al bereikt hebben'
  ],
  underStress: {
   
movesToType: 'Type 4',
  description: 'Onder druk wordt Type 1 emotioneler en zelfkritisch. Ze kunnen zich onbegrepen voelen en zich terugtrekken in melancholie en frustratie. Er ontstaat een gevoel van machteloosheid en ze kunnen snibbig en explosief zijn in hun uitingen, vooral wanneer de omgeving niet voldoet aan hun interne normen.'

  },
  whenSecure: {
    
movesToType: 'Type 7',
  description: 'Wanneer Type 1 zich veilig en zeker voelt, laten ze de behoefte aan controle los en openen ze zich voor spontaniteit en vreugde. Ze worden speelser, optimistischer, en staan open voor nieuwe ervaringen, en kunnen van het leven genieten zonder alles te hoeven verbeteren of corrigeren.'
  },
  notToBeConfusedWith: [
    {
      type: 'Type 6 – De Loyalist',
      difference: 'Beiden kunnen verantwoordelijk overkomen, maar Type 1 handelt vanuit interne principes, terwijl Type 6 veiligheid en steun zoekt in de gemeenschap.'
    },
    {
      type: 'Type 5 – De Waarnemer',
      difference: 'Type 1 wordt gedreven door ethiek en verbetering, terwijl Type 5 meer nieuwsgierig en neutraal is in hun benadering.'
    },
    {
      type: 'Type 8 – De Uitdager',
      difference: 'Type 1 vecht voor wat juist en orde is, terwijl Type 8 vecht voor vrijheid en controle. Hun energie kan botsen.'
    }
  ]
},


 
'Type 2': {
  type: 'Type 2',
  title: 'De Gever / Helper',
  worldview: 'De wereld zit vol met mensen die zorg en steun nodig hebben. Ik voel me waardevol als ik een verschil kan maken voor anderen.',
  focus: 'Richt zich op de behoeften en gevoelens van anderen. Heeft een sterke intuïtie voor hoe ze kunnen helpen en verbinding kunnen maken.',
  basicFear: 'Om onbemind, over het hoofd gezien, of irrelevant voor anderen te zijn.',
  basicDesire: 'Om geliefd en gewaardeerd te worden. Om belangrijk en nodig te zijn in het leven van anderen.',
  innerDialogue: '"Wat heb je nodig?" "Hoe kan ik jou gelukkig maken?" "Ik hoop dat ze me waarderen."',
  qualities: ['Zorgzaam', 'Empathisch', 'Grootmoedig', 'Ondersteunend', 'Warm', 'Intuïtief'],
  passion: 'Trots – een gevoel onmisbaar te zijn en degene te zijn die het verschil maakt.',
  blindSpots: [
    'Vergeet hun eigen behoeften en grenzen',
    'Kan hulpvaardigheid gebruiken om aandacht te krijgen',
    'Heeft moeite met nee zeggen en duidelijke grenzen stellen'
  ],
  thoughtPatterns: [
    'Denkt aan hoe anderen zich voelen',
    'Bedenkt hoe ze kunnen helpen',
    'Maakt zich zorgen over relaties en het gewaardeerd worden'
  ],
  strivesFor: 'Om geliefd en significant te zijn. Om warmte en aanwezigheid om zich heen te creëren.',
  attractedTo: 'Mensen die steun nodig hebben, nauwe relaties, en emotionele connectie.',
  dislikes: 'Kou, egoïsme, genegeerd worden, of als vanzelfsprekend beschouwd worden.',
  appearance: 'Vriendelijk en uitnodigend. Kleedt zich vaak om te behagen of contact te maken.',
  personalStrengths: [
    'Sterk inlevingsvermogen en emotioneel begrip',
    'Vermogen om veilige en warme relaties te creëren',
    'Grootmoedigheid en de wil om te helpen',
    'Intuïtief gevoel voor de behoeften van anderen'
  ],
  learning: 'Leert het best door relaties en praktische ervaring in ondersteunende omgevingen.',
  motivatedBy: 'Dankbaarheid, erkenning, en de mogelijkheid om een verschil te maken voor anderen.',
  communication: 'Warm en persoonlijk. Vraagt naar het welzijn van anderen en toont zorg.',
  relationships: {
    generalApproach: 'Geeft veel van zichzelf en zoekt relaties waarin hun zorg wordt gewaardeerd.',
    workApproach: 'Creëert welzijn en goede relaties in het team. Focust op het menselijke element.',
    teamPlayer: 'Degene die zorgt dat iedereen het goed heeft. Ondersteunt en moedigt collega\'s aan.',
    conflictPoints: [
      'Voelt zich over het hoofd gezien of niet gewaardeerd',
      'Kan manipulatief worden om aandacht te krijgen',
      'Negeert hun eigen behoeften en grenzen'
    ],
    conflictHandling: 'Vermijdt directe confrontatie, maar kan passief-agressief reageren als ze zich niet gewaardeerd voelen.',
    developmentChallenge: 'Leren hun eigen behoeften te uiten en gezonde grenzen te stellen.'
  },
  ifYouAreThisType: [
    'Onthoud om ook voor jezelf te zorgen – niet alleen voor anderen',
    'Oefen met het vragen om hulp en het tonen van kwetsbaarheid',
    'Stel grenzen aan hoeveel je geeft',
    'Erken je waarde los van je hulpvaardigheid',
    'Wees eerlijk over je gevoelens en behoeften'
  ],
  ifYouWorkWithThisType: [
    'Toon dankbaarheid voor hun steun en zorg',
    'Vraag naar hun welzijn – niet alleen wat ze voor anderen doen',
    'Erken hun bijdrage aan het welzijn van het team',
    'Help hen zichzelf te prioriteren',
    'Wees persoonlijk en warm in communicatie'
  ],
  underStress: {
    
movesToType: 'Type 8',
  description: 'Wanneer Type 2 gestrest is, kunnen ze controlerender en bozer worden. Ze eisen erkenning en kunnen agressief reageren, vooral als ze zich over het hoofd gezien of niet gewaardeerd voelen. Hun hulpvaardigheid wordt een manier om macht en aandacht te krijgen.'

  },
  whenSecure: {
  
movesToType: 'Type 4',
  description: 'In veilige omgevingen krijgt Type 2 beter contact met hun eigen gevoelens en behoeften. Ze worden authentieker en creatiever, en uiten zich met diepgang en echtheid, zonder afhankelijk te zijn van validatie door anderen.'
 },
  notToBeConfusedWith: [
    {
      type: 'Type 6 – De Loyalist',
      difference: 'Beiden zijn zorgzaam en relationeel, maar Type 2 zoekt emotionele nabijheid, terwijl Type 6 veiligheid en stabiliteit zoekt in de gemeenschap.'
    },
    {
      type: 'Type 9 – De Bemiddelaar',
      difference: 'Beiden kunnen warm en uitnodigend overkomen, maar Type 2 is actief zoekend en behulpzaam, terwijl Type 9 meer passief en vermijdend is.'
    },
    {
      type: 'Type 4 – De Individualist',
      difference: 'Beiden hebben sterke gevoelens, maar Type 2 focust op de behoeften van anderen, terwijl Type 4 focust op hun eigen gevoelens en identiteit.'
    }
  ]
},



'Type 3': {
  type: 'Type 3',
  title: 'De Presteerder',
  worldview: 'De wereld beloont degenen die slagen en resultaten boeken. Ik voel me waardevol als ik iets bereik en daarvoor erkenning krijg.',
  focus: 'Richt zich op doelen, efficiëntie, en hoe ze overkomen. Wil de beste zijn en er goed uitzien terwijl ze dat doen.',
  basicFear: 'Om waardeloos te zijn als ze niet presteren. Is bang voor falen en over het hoofd gezien te worden.',
  basicDesire: 'Om zich waardevol te voelen en erkend te worden voor hun prestaties en capaciteiten.',
  innerDialogue: '"Wat moet ik vandaag bereiken?" "Hoe ziet dit eruit?" "Ik moet de beste zijn."',
  qualities: ['Doelgericht', 'Energiek', 'Pragmatisch', 'Zelfverzekerd', 'Aanpasbaar', 'Ambitieus'],
  passion: 'Bedrog – zowel naar zichzelf als naar anderen over wie ze werkelijk zijn achter de façade.',
  blindSpots: [
    'Kan contact met de eigen gevoelens verliezen',
    'Focust op imago in plaats van op inhoud',
    'Heeft moeite met het accepteren van fouten en kwetsbaarheid'
  ],
  thoughtPatterns: [
    'Denkt in termen van doelen en resultaten',
    'Bedenkt wat indruk zal maken op anderen',
    'Focust op efficiënt en succesvol zijn'
  ],
  strivesFor: 'Succes, erkenning, en de beste zijn.',
  attractedTo: 'Projecten met prestige, zichtbare resultaten, en mensen die hun imago kunnen versterken.',
  dislikes: 'Falen, inefficiëntie, en genegeerd of als middelmatig beschouwd worden.',
  appearance: 'Professioneel en goed gekleed. Komt zelfverzekerd en competent over – vaak met een gepolijste buitenkant.',
  personalStrengths: [
    'Sterke drive en doelgerichtheid',
    'Vermogen om te inspireren en motiveren',
    'Pragmatisch in probleemoplossing',
    'Flexibiliteit en aanpassingsvermogen'
  ],
  learning: 'Leert het best via praktische ervaring, concurrentie, en meetbare resultaten.',
  motivatedBy: 'Succes, erkenning, en de mogelijkheid om zich te onderscheiden.',
  communication: 'Direct en doelgericht. Kan inspirerend zijn, maar ook gericht op resultaten boven gevoelens.',
  relationships: {
    generalApproach: 'Zoekt partners die hun ambities ondersteunen en hun focus op succes delen.',
    workApproach: 'Gedijt in competitieve en resultaatgerichte omgevingen. Laat dingen gebeuren.',
    teamPlayer: 'Drijft het team vooruit en inspireert tot hoge prestaties.',
    conflictPoints: [
      'Kan resultaten boven relaties stellen',
      'Heeft moeite met het tonen van kwetsbaarheid',
      'Wordt ongeduldig met trage of inefficiënte processen'
    ],
    conflictHandling: 'Focust op oplossingen en vooruitgang. Vermijdt vaak emotionele aspecten.',
    developmentChallenge: 'Leren zichzelf te waarderen om wie ze zijn – niet alleen om wat ze bereiken.'
  },
  ifYouAreThisType: [
    'Neem de tijd om je emoties en behoeften te voelen',
    'Waardeer het proces – niet alleen het resultaat',
    'Deel je onzekerheden met vertrouwde personen',
    'Onthoud dat fouten maken deel uitmaakt van het leerproces',
    'Prioriteer oprechte en nauwe relaties'
  ],
  ifYouWorkWithThisType: [
    'Erken hun prestaties en inspanning',
    'Wees efficiënt en doelgericht in je communicatie',
    'Geef ze zichtbare en uitdagende taken',
    'Ondersteun hun ambities – maar herinner hen aan balans',
    'Help hen de waarde te zien in wat niet gemeten kan worden'
  ],
  underStress: {
   
movesToType: 'Type 9',
  description: 'Onder stress verliest Type 3 motivatie en wordt passief. Ze trekken zich terug uit taken en vermijden uitdagingen, en kunnen ongeïnteresseerd en emotioneel afgesloten overkomen.'
  },
  whenSecure: {
 
movesToType: 'Type 6',
  description: 'Wanneer Type 3 zich veilig voelt, worden ze meer teamgericht en loyaal. Ze richten zich op het helpen van anderen om te slagen en laten de behoefte los om constant indruk te maken.'
  },
  notToBeConfusedWith: [
    {
      type: 'Type 1 – De Hervormer',
      difference: 'Beiden zijn ambitieus en doelgericht, maar Type 1 handelt vanuit interne principes en ethiek, terwijl Type 3 focust op extern succes en erkenning.'
    },
    {
      type: 'Type 7 – De Enthousiasteling',
      difference: 'Beiden zijn energiek en actiegericht, maar Type 3 plant en optimaliseert, terwijl Type 7 ervaringen zoekt en beperkingen vermijdt.'
    },
    {
      type: 'Type 8 – De Uitdager',
      difference: 'Beiden zijn sterk en besluitvaardig, maar Type 3 zoekt erkenning en imago, terwijl Type 8 controle en rechtvaardigheid zoekt.'
    }
  ]
},



'Type 4': {
  type: 'Type 4',
  title: 'De Individualist',
  worldview: 'Ik voel me anders en mis iets wat anderen hebben. Ik zoek diepgang, betekenis, en authenticiteit in alles wat ik doe.',
  focus: 'Focust op gevoelens, identiteit, en wat er ontbreekt. Wil uniek en begrepen zijn.',
  basicFear: 'Van geen identiteit of persoonlijke betekenis te hebben. Is bang om gewoon en oninteressant te zijn.',
  basicDesire: 'Om zichzelf te vinden en gewaardeerd te worden om hun echtheid en unieke wezen.',
  innerDialogue: '"Wat mis ik?" "Begrijpen ze me wel?" "Ik ben anders dan alle anderen."',
  qualities: ['Creatief', 'Gevoelig', 'Introspectief', 'Authentiek', 'Empathisch', 'Esthetisch'],
  passion: 'Afgunst – een gevoel dat anderen iets hebben wat zij zelf missen en naar verlangen.',
  blindSpots: [
    'Focust te veel op het negatieve of wat er ontbreekt',
    'Kan zelfingenomen en emotioneel dramatisch worden',
    'Heeft moeite met het waarderen van het gewone en alledaagse'
  ],
  thoughtPatterns: [
    'Vergelijkt zichzelf met anderen',
    'Voelt zich anders en buitengesloten',
    'Zoekt naar diepere betekenis en echtheid'
  ],
  strivesFor: 'Om authentiek, uniek te zijn, en zich diep verbonden te voelen met iets betekenisvols.',
  attractedTo: 'Schoonheid, diepgang, creativiteit, en mensen die hun gevoelens begrijpen.',
  dislikes: 'Oppervlakkigheid, conformiteit, verkeerd begrepen worden, of genegeerd worden.',
  appearance: 'Uit hun individualiteit via persoonlijke stijl en esthetiek. Komt vaak artistiek of alternatief over.',
  personalStrengths: [
    'Diep emotioneel begrip',
    'Creativiteit en esthetisch gevoel',
    'Authenticiteit en eerlijkheid',
    'Vermogen om schoonheid te zien in het moeilijke en complexe'
  ],
  learning: 'Leert het best door creatieve expressie, persoonlijke connecties, en emotionele betrokkenheid.',
  motivatedBy: 'De mogelijkheid om zichzelf authentiek te uiten, iets unieks te creëren, en begrepen te worden.',
  communication: 'Emotioneel, persoonlijk, en vaak poëtisch. Zoekt diepgang en betekenis in gesprekken.',
  relationships: {
    generalApproach: 'Zoekt diepe en authentieke connecties met mensen die hun complexiteit aankunnen.',
    workApproach: 'Gedijt in creatieve en vrije omgevingen waar ze hun individualiteit kunnen uiten.',
    teamPlayer: 'Draagt creativiteit en emotionele diepgang bij. Kan humeurig zijn en zich terugtrekken bij conflicten.',
    conflictPoints: [
      'Kan emotioneel intens en dramatisch zijn',
      'Heeft moeite met routines en structuur',
      'Trekt zich terug als ze zich onbegrepen voelen'
    ],
    conflictHandling: 'Reageert emotioneel of trekt zich terug. Zoekt naar begrip en diep contact.',
    developmentChallenge: 'Het gewone accepteren en schoonheid vinden in het alledaagse.'
  },
  ifYouAreThisType: [
    'Oefen met het zien van het positieve in je leven',
    'Accepteer dat iedereen moeilijke periodes heeft – je bent niet alleen',
    'Zoek schoonheid in het gewone en alledaagse',
    'Deel je gevoelens op een constructieve manier',
    'Waardeer stabiliteit en routines als een steun'
  ],
  ifYouWorkWithThisType: [
    'Erken hun creativiteit en unieke perspectief',
    'Wees authentiek en eerlijk in je communicatie',
    'Geef ze ruimte voor emotionele expressie',
    'Vermijd oppervlakkige gesprekken en snelle oplossingen',
    'Ondersteun hun creatieve en persoonlijke projecten'
  ],
  underStress: {
   
 movesToType: 'Type 2',
  description: 'Wanneer Type 4 gestrest is, worden ze aanklampend en zoeken ze aandacht en bevestiging. Ze kunnen zichzelf verliezen in de relatie en proberen anderen hun emotionele behoeften te laten vervullen.'
  },
  whenSecure: {

  movesToType: 'Type 1',
  description: 'In veilige omgevingen wordt Type 4 gestructureerder en gedisciplineerder. Ze vertalen hun creativiteit naar concrete resultaten en krijgen een sterker gevoel van doel en richting.'
  },
  notToBeConfusedWith: [
    {
      type: 'Type 5 – De Waarnemer',
      difference: 'Beiden zijn introspectief en diep, maar Type 4 is emotioneel gedreven en zoekt contact, terwijl Type 5 meer rationeel is en afstand zoekt.'
    },
    {
      type: 'Type 6 – De Loyalist',
      difference: 'Beiden kunnen emotioneel intens zijn, maar Type 4 zoekt authenticiteit en diepgang, terwijl Type 6 veiligheid en stabiliteit zoekt.'
    },
    {
      type: 'Type 9 – De Bemiddelaar',
      difference: 'Beiden kunnen zich terugtrekken, maar Type 4 doet dit met gevoelens en verlangen, terwijl Type 9 dit doet om conflict en onrust te vermijden.'
    }
  ]
},

'Type 5': {
  type: 'Type 5',
  title: 'De Waarnemer / Onderzoeker',
  worldview: 'De wereld kan overweldigend en veeleisend zijn. Ik moet dingen begrijpen en mijn energie beschermen voordat ik me engageer.',
  focus: 'Richt zich op observeren, analyseren, en het behoud van middelen – zowel mentaal als emotioneel.',
  basicFear: 'Om binnengedrongen, overweldigd, of incompetent te worden.',
  basicDesire: 'Om competent te zijn en de wereld op een diepgaand en betekenisvol niveau te begrijpen.',
  innerDialogue: '"Ik heb meer informatie nodig." "Wat als ik het niet aankan?" "Ik heb tijd nodig om na te denken."',
  qualities: ['Analytisch', 'Onafhankelijk', 'Nieuwsgierig', 'Objectief', 'Prive', 'Inzichtelijk'],
  passion: 'Gierigheid (Avarice) – een hunkering om kennis te vergaren en hun eigen middelen te beschermen.',
  blindSpots: [
    'Kan zichzelf isoleren en emotioneel afstandelijk worden',
    'Heeft moeite met actie ondernemen zonder volledig begrip',
    'Kan ongeïnteresseerd of afwezig overkomen'
  ],
  thoughtPatterns: [
    'Analyseert en categoriseert informatie',
    'Bedenkt hoe energie bespaard kan worden',
    'Zoekt naar patronen en dieper inzicht'
  ],
  strivesFor: 'Competentie, inzicht, en onafhankelijkheid.',
  attractedTo: 'Complexe systemen, diepe kennis, en mensen die hun behoefte aan ruimte respecteren.',
  dislikes: 'Oppervlakkigheid, emotionele inbreuk, en druk voor snelle actie.',
  appearance: 'Gereserveerd en observerend. Kleedt zich vaak neutraal en praktisch.',
  personalStrengths: [
    'Diep analytisch denkvermogen',
    'Objectiviteit en onpartijdigheid',
    'Zelfredzaamheid en vermogen om alleen te werken',
    'Vermogen om het grotere geheel te zien en op lange termijn te denken'
  ],
  learning: 'Leert het best door zelfstudie, observatie, en tijd voor contemplatie.',
  motivatedBy: 'De mogelijkheid om complexe onderwerpen te begrijpen en ongestoord te werken.',
  communication: 'Precies en feitelijk. Deelt kennis wanneer ze zich veilig en competent voelen.',
  relationships: {
    generalApproach: 'Verkiest weinige, diepe relaties met mensen die hun behoefte aan eenzaamheid respecteren.',
    workApproach: 'Gedijt bij complexe taken en werkt het best onafhankelijk.',
    teamPlayer: 'Brengt expertise en objectiviteit in. Kan stil en gereserveerd zijn.',
    conflictPoints: [
      'Kan emotioneel koud of ongeïnteresseerd overkomen',
      'Heeft moeite met het delen van gevoelens en behoeften',
      'Trekt zich vaak terug onder druk of emotionele confrontatie'
    ],
    conflictHandling: 'Trekt zich terug om na te denken. Verkiest schriftelijke of indirecte communicatie.',
    developmentChallenge: 'Zich emotioneel engageren en gedachten en gevoelens delen met anderen.'
  },
  ifYouAreThisType: [
    'Oefen met het delen van je gedachten en gevoelens – zelfs als het onwennig voelt',
    'Stel grenzen in plaats van je alleen maar terug te trekken',
    'Engageer je in kleine sociale activiteiten',
    'Onthoud dat actie geen perfect begrip vereist',
    'Waardeer je gevoelens als belangrijke informatie – niet slechts als afleidingen'
  ],
  ifYouWorkWithThisType: [
    'Respecteer hun behoefte aan tijd en ruimte',
    'Geef ze informatie van tevoren en vermijd druk',
    'Waardeer hun kennis en analytische vaardigheden',
    'Communiceer helder en precies – vermijd emotionele druk',
    'Creëer veilige omstandigheden voor samenwerking zonder binnen te dringen'
  ],
  underStress: {
 
  movesToType: 'Type 7',
  description: 'Onder druk wordt Type 5 rusteloos en versnippert zichzelf. Ze verliezen focus en handelen impulsief, vaak zonder hun gebruikelijke reflectie en analyse.'
  },
  whenSecure: {

 movesToType: 'Type 8',
  description: 'Wanneer Type 5 zich veilig voelt, worden ze zelfverzekerder en besluitvaardiger. Ze durven verantwoordelijkheid te nemen en treden naar voren met hun kennis en beslissingen.'
  },
  notToBeConfusedWith: [
    {
      type: 'Type 4 – De Individualist',
      difference: 'Beiden zijn introspectief, maar Type 4 is emotioneel gedreven en zoekt contact, terwijl Type 5 rationeel is en afstand zoekt.'
    },
    {
      type: 'Type 9 – De Bemiddelaar',
      difference: 'Beiden kunnen stil en teruggetrokken lijken, maar Type 5 trekt zich terug om te denken, terwijl Type 9 dit doet om conflict te vermijden.'
    },
    {
      type: 'Type 1 – De Hervormer',
      difference: 'Beiden hebben principes, maar Type 1 handelt vanuit ethiek en correctheid, terwijl Type 5 principes ziet als mentale constructies die onderzocht en uitgedaagd kunnen worden.'
    }
  ]
},

 
'Type 6': {
  type: 'Type 6',
  title: 'De Loyalist',
  worldview: 'De wereld voelt onvoorspelbaar en onveilig. Ik heb steun en duidelijke kaders nodig om me veilig te voelen.',
  focus: 'Richt zich op veiligheid, vertrouwen, en wie betrouwbaar is. Is zich bewust van potentiële problemen en risico\'s.',
  basicFear: 'Om er alleen voor te staan zonder steun of leiding. Is bang om fouten te maken en verraden te worden.',
  basicDesire: 'Om zich veilig en gesteund te voelen. Om iemand of iets te hebben om op te leunen.',
  innerDialogue: '"Wat als er iets misgaat?" "Kan ik hen vertrouwen?" "Wat moet ik doen?"',
  qualities: ['Loyaal', 'Verantwoordelijk', 'Voorzichtig', 'Coöperatief', 'Betrouwbaar', 'Toegewijd'],
  passion: 'Angst – een constante innerlijke onrust en bezorgdheid die kan leiden tot twijfel en overcontrole.',
  blindSpots: [
    'Kan onnodig piekeren en problemen zien voordat ze ontstaan',
    'Heeft moeite met het vertrouwen op hun eigen beslissingen',
    'Kan hun eigen angstscenario\'s op anderen projecteren'
  ],
  thoughtPatterns: [
    'Denkt in worstcasescenario\'s',
    'Zoekt veiligheid en steun',
    'Analyseert motieven en intenties van mensen'
  ],
  strivesFor: 'Veiligheid, stabiliteit, en loyaliteit.',
  attractedTo: 'Duidelijke structuren, betrouwbare mensen, en veilige gemeenschappen.',
  dislikes: 'Onzekerheid, verraad, onvoorspelbaarheid, en alleen zijn met verantwoordelijkheid.',
  appearance: 'Vaak waakzaam en enigszins bezorgd. Kleedt zich praktisch en passend.',
  personalStrengths: [
    'Sterke loyaliteit en verantwoordelijkheidsgevoel',
    'Vermogen om problemen en risico\'s te voorzien',
    'Goed in samenwerking en het ondersteunen van anderen',
    'Toegewijd en principieel'
  ],
  learning: 'Leert het best in veilige en gestructureerde omgevingen met duidelijke feedback.',
  motivatedBy: 'Erkenning van hun loyaliteit en de mogelijkheid om bij te dragen aan de gemeenschap.',
  communication: 'Vragend en voorzichtig. Zoekt bevestiging en duidelijkheid.',
  relationships: {
    generalApproach: 'Zoekt stabiele en loyale relaties waarin er wederzijdse steun is.',
    workApproach: 'Gedijt in gestructureerde omgevingen met duidelijke verwachtingen en leiding.',
    teamPlayer: 'Zeer toegewijd en loyaal. Werkt hard voor het succes van het team.',
    conflictPoints: [
      'Kan overmatig bezorgd en pessimistisch zijn',
      'Heeft moeite met het alleen nemen van beslissingen',
      'Kan defensief en achterdochtig worden onder druk'
    ],
    conflictHandling: 'Zoekt steun en verduidelijking. Kan zowel onderdanig als opstandig reageren.',
    developmentChallenge: 'Meer op zichzelf en hun eigen oordelen leren vertrouwen.'
  },
  ifYouAreThisType: [
    'Oefen met het vertrouwen op je eigen beslissingen',
    'Focus op wat goed gaat – niet alleen op wat mis kan gaan',
    'Neem kleine stappen naar meer onafhankelijkheid',
    'Zoek eerlijke en constructieve feedback',
    'Onthoud dat de meeste mensen het beste met je voor hebben'
  ],
  ifYouWorkWithThisType: [
    'Wees helder en consistent in je communicatie',
    'Geef ze zekerheid en duidelijke kaders',
    'Erken hun loyaliteit en inspanning',
    'Help hen hun sterke punten te zien',
    'Wees geduldig met hun zorgen en behoefte aan verduidelijking'
  ],
  underStress: {
 
  movesToType: 'Type 3',
  description: 'Onder stress wordt Type 6 competitiever en richt zich op het bewijzen van hun waarde. Ze kunnen overmatig prestatiegericht overkomen en verliezen contact met hun innerlijke kompas.'
  },
  whenSecure: {

 movesToType: 'Type 9',
  description: 'In veilige relaties wordt Type 6 meer ontspannen en vertrouwend. Ze laten zorgen los en vinden rust in het huidige moment, met meer geloof in zichzelf en anderen.'
  },
  notToBeConfusedWith: [
    {
      type: 'Type 1 – De Hervormer',
      difference: 'Beiden hebben sterke principes, maar Type 1 handelt vanuit interne ethiek, terwijl Type 6 veiligheid en steun zoekt in de gemeenschap.'
    },
    {
      type: 'Type 2 – De Gever',
      difference: 'Beiden zijn relationeel, maar Type 2 zoekt emotionele nabijheid, terwijl Type 6 stabiliteit en loyaliteit zoekt.'
    },
    {
      type: 'Type 5 – De Waarnemer',
      difference: 'Beiden kunnen voorzichtig en analytisch zijn, maar Type 5 trekt zich terug om na te denken, terwijl Type 6 steun en verduidelijking zoekt.'
    }
  ]
},

'Type 7': {
  type: 'Type 7',
  title: 'De Enthousiasteling / Avonturier',
  worldview: 'De wereld zit vol met mogelijkheden en ervaringen, en het leven moet leuk en opwindend zijn. Ik vermijd pijn door me te focussen op het positieve en nieuwe avonturen te plannen.',
  focus: 'Focust op de toekomst, mogelijkheden, en al het leuke dat kan gebeuren. Vermijdt beperkingen en moeilijke gevoelens.',
  basicFear: 'Om gevangen te zitten in pijn, verveling, of gemis. Is bang om iets te missen (FOMO).',
  basicDesire: 'Om gelukkig en vrij te zijn. Om hun behoeften bevredigd te zien en een rijk, opwindend leven te leiden.',
  innerDialogue: '"Wat voor leuks kan ik doen?" "Er zijn zoveel mogelijkheden!" "Ik wil niets missen."',
  qualities: ['Optimistisch', 'Spontaan', 'Veelzijdig', 'Avontuurlijk', 'Energiek', 'Inspirerend'],
  passion: 'Gulzigheid (Gluttony) – een hunkering om zoveel mogelijk ervaringen en indrukken te hebben.',
  blindSpots: [
    'Vermijdt moeilijke gevoelens en pijn',
    'Heeft moeite met toewijding',
    'Kan oppervlakkig of onverantwoordelijk overkomen'
  ],
  thoughtPatterns: [
    'Denkt aan toekomstige mogelijkheden',
    'Plant leuke activiteiten',
    'Vermijdt negatieve gedachten en gevoelens'
  ],
  strivesFor: 'Vrijheid, variatie, en vreugde.',
  attractedTo: 'Nieuwe ervaringen, creatieve mensen, en opwindende ideeën.',
  dislikes: 'Beperkingen, routines, negativiteit, en verveling.',
  appearance: 'Energiek en glimlachend. Kleedt zich vaak kleurrijk en creatief.',
  personalStrengths: [
    'Positieve en inspirerende levenshouding',
    'Creativiteit en het vermogen om mogelijkheden te zien',
    'Flexibiliteit en aanpassingsvermogen',
    'Vermogen om energie en vreugde te verspreiden'
  ],
  learning: 'Leert het best door variatie, praktische oefeningen, en creatieve uitdagingen.',
  motivatedBy: 'Vrijheid, nieuwe ervaringen, en de mogelijkheid om anderen te inspireren en te betrekken.',
  communication: 'Enthousiast en energiek. Springt vaak tussen onderwerpen en focust op het positieve.',
  relationships: {
    generalApproach: 'Zoekt partners die hun verlangen naar avontuur en levenslust delen.',
    workApproach: 'Gedijt in dynamische en creatieve omgevingen. Heeft variatie en vrijheid nodig.',
    teamPlayer: 'Brengt energie en ideeën in. Kan moeite hebben met focus behouden en zaken afmaken.',
    conflictPoints: [
      'Vermijdt moeilijke gesprekken en gevoelens',
      'Kan onverantwoordelijk of wispelturig overkomen',
      'Heeft moeite met structuur en details'
    ],
    conflictHandling: 'Probeert het conflict positief te maken of vermijdt het volledig.',
    developmentChallenge: 'Leren aanwezig te zijn met moeilijke gevoelens en diepgaand te verbinden.'
  },
  ifYouAreThisType: [
    'Oefen met aanwezig zijn bij moeilijke gevoelens',
    'Focus op het afronden van projecten',
    'Stel grenzen aan hoeveel je aanneemt',
    'Waardeer diepgang boven breedte',
    'Leer nee te zeggen tegen sommige mogelijkheden'
  ],
  ifYouWorkWithThisType: [
    'Geef ze variatie en creatieve uitdagingen',
    'Wees positief en enthousiast',
    'Help hen te focussen en te prioriteren',
    'Vermijd te veel beperkingen',
    'Waardeer hun energie en optimisme'
  ],
  underStress: {
  
  movesToType: 'Type 1',
  description: 'Onder stress wordt Type 7 kritisch en perfectionistisch. Ze focussen op fouten en verliezen hun positieve insteek, en kunnen gefrustreerd raken door beperkingen en verantwoordelijkheden.'
  },
  whenSecure: {

  movesToType: 'Type 5',
  description: 'Wanneer Type 7 zich veilig voelt, worden ze meer gefocust en analytisch. Ze gaan dieper in op zaken en werken grondig, en laten de behoefte aan constante stimulatie los.'
  },
  notToBeConfusedWith: [
    {
      type: 'Type 3 – De Presteerder',
      difference: 'Beiden zijn energiek en actiegericht, maar Type 3 zoekt erkenning en succes, terwijl Type 7 ervaringen en vrijheid zoekt.'
    },
    {
      type: 'Type 9 – De Bemiddelaar',
      difference: 'Beiden kunnen ontspannen en positief lijken, maar Type 9 vermijdt conflict door zich aan te passen, terwijl Type 7 pijn vermijdt door zichzelf af te leiden.'
    },
    {
      type: 'Type 4 – De Individualist',
      difference: 'Beiden zoeken diepgang en betekenis, maar Type 4 gaat de gevoelens aan, terwijl Type 7 ze probeert te vermijden en in het lichte te blijven.'
    }
  ]
},


 
'Type 8': {
  type: 'Type 8',
  title: 'De Uitdager / Baas',
  worldview: 'De wereld is hard en oneerlijk. Ik moet sterk zijn en de leiding nemen – zowel voor mezelf als voor degenen om wie ik geef.',
  focus: 'Richt zich op controle, rechtvaardigheid, en bescherming. Wil ervoor zorgen dat niemand wordt uitgebuit of verraden.',
  basicFear: 'Om gecontroleerd, verraden, of geschaad te worden. Is bang om macht te verliezen en kwetsbaar te zijn.',
  basicDesire: 'Om zelfredzaam te zijn en controle te hebben over hun eigen leven en lot.',
  innerDialogue: '"Ik moet sterk zijn." "Wie probeert mij te controleren?" "Ik bescherm degenen om wie ik geef."',
  qualities: ['Krachtig', 'Direct', 'Zelfverzekerd', 'Beschermend', 'Rechtvaardig', 'Besluitvaardig'],
  passion: 'Wellust – een buitensporige hunkering naar intensiteit, controle, en dominantie.',
  blindSpots: [
    'Kan overmatig dominant en controlerend zijn',
    'Heeft moeite met het tonen van kwetsbaarheid',
    'Kan beangstigend of intimiderend overkomen'
  ],
  thoughtPatterns: [
    'Denkt in termen van macht en controle',
    'Is gericht op wat oneerlijk is',
    'Vormt strategieën om zich te beschermen of assertief te zijn'
  ],
  strivesFor: 'Onafhankelijkheid, controle, en rechtvaardigheid.',
  attractedTo: 'Uitdagingen, macht, en mensen die hun kracht respecteren.',
  dislikes: 'Zwakheid, verraad, onrechtvaardigheid, en manipulatie.',
  appearance: 'Forcerend en vastberaden. Komt vaak gezaghebbend en zelfverzekerd over.',
  personalStrengths: [
    'Kracht en vastberadenheid',
    'Vermogen om snel beslissingen te nemen en te handelen',
    'Loyaliteit en beschermend instinct',
    'Directheid en eerlijkheid'
  ],
  learning: 'Leert het best door directe ervaring, uitdagingen, en het nemen van de leiding.',
  motivatedBy: 'Macht, controle, rechtvaardigheid, en de mogelijkheid om degenen van wie ze houden te beschermen.',
  communication: 'Direct, confronterend, en gepassioneerd. Zegt wat ze denken zonder omwegen.',
  relationships: {
    generalApproach: 'Zoekt partners die hen uitdagen en hun kracht respecteren. Zeer loyaal en beschermend.',
    workApproach: 'Houdt van leiding geven en verantwoordelijkheid nemen. Kan conflicten direct aanpakken.',
    teamPlayer: 'De leider die opkomt voor het team. Kan dominante neigingen hebben.',
    conflictPoints: [
      'Kan agressief en confronterend zijn',
      'Heeft moeite met het zien van de perspectieven van anderen',
      'Kan anderen intimideren of overstemmen'
    ],
    conflictHandling: 'Pakt conflicten direct aan, vaak met intensiteit en assertiviteit.',
    developmentChallenge: 'Leren hun eigen kwetsbaarheid te accepteren en anderen te vertrouwen.'
  },
  ifYouAreThisType: [
    'Sta jezelf toe om kwetsbaarheid te tonen',
    'Luister naar de perspectieven van anderen',
    'Kanaliseer je energie in positieve doelen',
    'Accepteer dat controle een illusie is',
    'Laat anderen weten hoezeer je hen waardeert'
  ],
  ifYouWorkWithThisType: [
    'Wees direct en eerlijk in je communicatie',
    'Respecteer hun kracht, maar laat je niet intimideren',
    'Geef ze verantwoordelijkheid, maar met duidelijke grenzen',
    'Wees loyaal en betrouwbaar',
    'Sta achter je eigen overtuigingen'
  ],
  underStress: {
   
movesToType: 'Type 5',
  description: 'Onder stress trekt Type 8 zich terug en isoleert zichzelf. Ze nemen afstand en worden bedachtzamer en gereserveerder in plaats van zichzelf te doen gelden.'
  },
  whenSecure: {

movesToType: 'Type 2',
  description: 'Wanneer Type 8 zich veilig voelt, worden ze opener en zorgzamer. Ze gebruiken hun kracht om anderen genereus te helpen en worden kwetsbaarder in hun relaties.'
  },
  notToBeConfusedWith: [
    {
      type: 'Type 3 – De Presteerder',
      difference: 'Beiden zijn energiek, maar Type 8 zoekt controle, terwijl Type 3 erkenning zoekt.'
    },
    {
      type: 'Type 1 – De Hervormer',
      difference: 'Beiden zijn principieel, maar Type 8 handelt vanuit persoonlijke rechtvaardigheid, terwijl Type 1 handelt vanuit universele ethiek.'
    },
    {
      type: 'Type 9 – De Bemiddelaar',
      difference: 'Beiden zitten in de Buik Triade, maar Type 8 is agressief, terwijl Type 9 passief-agressief is en harmonie zoekt.'
    }
  ]
},

// --- TYP 9: De Bemiddelaar ---
'Type 9': {
  type: 'Type 9',
  title: 'De Bemiddelaar / Vredestichter',
  worldview: 'De wereld is het best als het harmonieus en conflictvrij is. Ik voel me veilig als ik innerlijke rust kan bewaren en kan opgaan in anderen.',
  focus: 'Richt zich op het handhaven van harmonie en het vermijden van conflict. Is bezig met het zien van alle perspectieven en zich aanpassen.',
  basicFear: 'Van verlies en scheiding. Is bang om de verbinding met anderen te verliezen of gefragmenteerd te worden.',
  basicDesire: 'Om innerlijke stabiliteit en gemoedsrust te hebben – in harmonie te zijn met zichzelf en de wereld.',
  innerDialogue: '"Het is niet zo belangrijk." "Ik wil geen ruzie." "Ik ga wel gewoon mee."',
  qualities: ['Harmonieus', 'Accepterend', 'Geduldig', 'Zachtmoedig', 'Geruststellend', 'Ondersteunend'],
  passion: 'Luiheid (Sloth) – een zelfgenoegzaamheid ten opzichte van zichzelf, hun eigen behoeften, en hun eigen daadkracht.',
  blindSpots: [
    'Kan hun eigen behoeften en meningen negeren',
    'Heeft de neiging om conflict te vermijden en zaken onder het tapijt te vegen',
    'Kan passief agressief worden wanneer ze zich over het hoofd gezien voelen'
  ],
  thoughtPatterns: [
    'Denkt aan gemeenschappelijke grond en de verschillende perspectieven',
    'Minimaliseert problemen en angsten',
    'Zoekt naar manieren om conflict te vermijden'
  ],
  strivesFor: 'Innerlijke rust, harmonie, en verbinding.',
  attractedTo: 'Stabiele omgevingen, ontspannen mensen, en routines.',
  dislikes: 'Conflict, druk, plotselinge veranderingen, en gescheiden zijn.',
  appearance: 'Ontspannen en benaderbaar. Verwaarloost vaak het eigen uiterlijk of de organisatie omdat de focus op anderen ligt.',
  personalStrengths: [
    'Vermogen om harmonie te creëren en te bemiddelen',
    'Tolerantie en acceptatie',
    'Geduld en uithoudingsvermogen',
    'Vermogen om vele perspectieven te zien'
  ],
  learning: 'Leert het best in een ontspannen sfeer en wanneer ze worden opgenomen en aangemoedigd.',
  motivatedBy: 'Harmonie, erkenning van hun inspanningen, en de mogelijkheid om een positieve bijdrage te leveren.',
  communication: 'Rustig en accepterend. Kan vaag zijn om conflict te vermijden.',
  relationships: {
    generalApproach: 'Zoekt stabiele en harmonieuze relaties waarin geen onenigheid is.',
    workApproach: 'Goede teamspelers die een vredige sfeer creëren. Kan uitstellen en focussen op minder belangrijke taken.',
    teamPlayer: 'De bemiddelaar die zorgt dat iedereen zich comfortabel voelt. Ondersteunt de beslissingen van anderen.',
    conflictPoints: [
      'Negeert hun eigen frustraties en behoeften',
      'Trekt zich terug in plaats van te confronteren',
      'Kan koppigheid ontwikkelen wanneer er druk wordt uitgeoefend'
    ],
    conflictHandling: 'Vermijdt confrontatie, maar kan passief weerstand bieden. Prioriteert het handhaven van de vrede.',
    developmentChallenge: 'Leren zichzelf te doen gelden en hun eigen stem te vinden.'
  },
  ifYouAreThisType: [
    'Vind je eigen stem en mening',
    'Maak je prioriteiten duidelijk – niet alleen die van anderen',
    'Accepteer conflict als een noodzakelijk onderdeel van het leven',
    'Word je bewust van wat je echt nodig hebt',
    'Handel besluitvaardig en vermijd uitstelgedrag'
  ],
  ifYouWorkWithThisType: [
    'Wees direct en vermijd vage verwachtingen',
    'Moedig hen aan hun mening te uiten',
    'Creëer een ontspannen werksfeer',
    'Geef ze zachte maar duidelijke deadlines',
    'Wees geduldig als ze tijd nodig hebben om na te denken'
  ],
  underStress: {
    movesToType: 'Type 6',
    description: 'Onder stress wordt Type 9 angstig en achterdochtig. Ze kunnen zich zorgen maken en overmatig voorzichtig worden, en verliezen hun innerlijke rust.'
  },
  whenSecure: {
    movesToType: 'Type 3',
    description: 'Wanneer Type 9 zich veilig voelt, worden ze actiever, zelfverzekerder, en doelgerichter. Ze erkennen hun waarde en gebruiken hun energie om hun eigen doelen na te streven.'
  },
  notToBeConfusedWith: [
    {
      type: 'Type 2 – De Gever',
      difference: 'Beiden zijn warm, maar Type 2 zoekt actief connectie, terwijl Type 9 passief en gereserveerd is.'
    },
    {
      type: 'Type 5 – De Waarnemer',
      difference: 'Beiden kunnen teruggetrokken zijn, maar Type 9 doet dit om harmonie te behouden, terwijl Type 5 dit doet om middelen te sparen en te contempleren.'
    },
    {
      type: 'Type 4 – De Individualist',
      difference: 'Beiden kunnen emotioneel terugtrekken, maar Type 9 doet dit om stabiliteit te behouden, terwijl Type 4 dit doet om zichzelf te onderscheiden van de wereld.'
    }
  ]
}
};
