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
  title: 'The Reformer',
  worldview: 'The world should be fairer and more orderly, but it is not always. Therefore, I create my own rules and standards for how things ought to be done.',
  focus: 'Focuses on doing what is right, improving things, and avoiding mistakes. Has a sharp eye for what could be better.',
  basicFear: 'Of being wrong, corrupt, evil, or morally defective.',
  basicDesire: 'To be good, righteous, and to do what is right.',
  innerDialogue: '"It’s not good enough." "It shouldn’t be done that way." "If I don\'t do it properly, no one will."',
  qualities: ['Principled', 'Organized', 'Reliable', 'Responsible', 'Idealistic', 'Ethical'],
  passion: 'Resentment/Anger – often expressed as irritation or criticism when things do not meet their internal standards.',
  blindSpots: [
    'Can be overly critical of themselves and others',
    'Struggles to accept "good enough"',
    'May overlook the big picture in the pursuit of details'
  ],
  thoughtPatterns: [
    'Compares reality with ideals',
    'Focuses on flaws and shortcomings',
    'Thinks in terms of "should" and "must"'
  ],
  strivesFor: 'To do the right thing, live up to high standards, and create order.',
  attractedTo: 'Quality, structure, ethics, and people with strong principles.',
  dislikes: 'Sloppiness, injustice, inefficiency, and chaos.',
  appearance: 'Appears controlled, well-organized, and professional. Surroundings and appearance are often neat and tidy.',
  personalStrengths: [
    'High standards and quality consciousness',
    'Strong work ethic and sense of responsibility',
    'Ability to improve and optimize',
    'Ethical and principled approach'
  ],
  learning: 'Learns best through structure, clear boundaries, and the opportunity to refine skills.',
  motivatedBy: 'Making a difference, improving things, and being recognized for quality.',
  communication: 'Precise and structured. Can appear critical or lecturing, especially when something does not meet expectations.',
  relationships: {
    generalApproach: 'Seeks partners with similar values and standards. Can be critical but also very loyal.',
    workApproach: 'Works thoroughly and methodically. Sets high demands on themselves and others. Delivers stable and reliably.',
    teamPlayer: 'Contributes structure and quality control. Can be critical but ensures high standards.',
    conflictPoints: [
      'Frustrated by the sloppiness or lack of responsibility in others',
      'Can appear judgmental or self-righteous',
      'Has difficulty accepting different ways of doing things'
    ],
    conflictHandling: 'Often avoids direct confrontation but can build up irritation. Seeks the "right" answer rather than compromise.',
    developmentChallenge: 'To accept imperfection and let go of the need for control.'
  },
  ifYouAreThisType: [
    'Remember that "good enough" is sometimes good enough',
    'Practice giving positive feedback – not just criticism',
    'Allow yourself to relax and take breaks',
    'Accept that others have different standards than yours',
    'Focus on progress rather than perfection'
  ],
  ifYouWorkWithThisType: [
    'Acknowledge their effort and high standards',
    'Be prepared and precise in your communication',
    'Give them time and space to do things properly',
    'Avoid sloppiness and superficiality',
    'Help them see the positive in what they have already achieved'
  ],
  underStress: {
   
movesToType: 'Type 4',
  description: 'Under pressure, Type 1 becomes more emotional and self-critical. They may feel misunderstood and withdraw into melancholy and frustration. A sense of powerlessness arises, and they can become edgy and explosive in their expression, especially when the environment does not meet their internal standards.'

  },
  whenSecure: {
    
movesToType: 'Type 7',
  description: 'When Type 1 feels safe and secure, they release the need for control and open up to spontaneity and joy. They become more playful, optimistic, and open to new experiences, and can enjoy life without having to improve or correct everything.'
  },
  notToBeConfusedWith: [
    {
      type: 'Type 6 – The Loyalist',
      difference: 'Both can seem responsible, but Type 1 acts from internal principles, while Type 6 seeks safety and support in the community.'
    },
    {
      type: 'Type 5 – The Investigator',
      difference: 'Type 1 is driven by ethics and improvement, while Type 5 is more curious and neutral in their approach.'
    },
    {
      type: 'Type 8 – The Challenger',
      difference: 'Type 1 fights for what is right and order, while Type 8 fights for freedom and control. Their energy can collide.'
    }
  ]
},


 
'Type 2': {
  type: 'Type 2',
  title: 'The Helper',
  worldview: 'The world is full of people who need care and support. I feel valuable when I can make a difference for others.',
  focus: 'Focuses on the needs and feelings of others. Has a strong intuition for how they can help and connect.',
  basicFear: 'Of being unloved, overlooked, or irrelevant to others.',
  basicDesire: 'To feel loved and appreciated. To be important and necessary in the lives of others.',
  innerDialogue: '"What do you need?" "How can I make you happy?" "I hope they appreciate me."',
  qualities: ['Caring', 'Empathetic', 'Generous', 'Supportive', 'Warm', 'Intuitive'],
  passion: 'Pride – a feeling of being indispensable and the one who makes a difference.',
  blindSpots: [
    'Forgets their own needs and boundaries',
    'Can use helpfulness to gain attention',
    'Struggles to say no and set clear limits'
  ],
  thoughtPatterns: [
    'Thinks about how others are feeling',
    'Considers how they can help',
    'Worries about relationships and being valued'
  ],
  strivesFor: 'To be loved and significant. To create warmth and presence around them.',
  attractedTo: 'People who need support, close relationships, and emotional connection.',
  dislikes: 'Coldness, selfishness, being ignored, or taken for granted.',
  appearance: 'Friendly and welcoming. Often dresses to please or make contact.',
  personalStrengths: [
    'Strong empathy and emotional understanding',
    'Ability to create safe and warm relationships',
    'Generosity and willingness to help',
    'Intuitive sense of others\' needs'
  ],
  learning: 'Learns best through relationships and practical experience in supportive environments.',
  motivatedBy: 'Gratitude, recognition, and the opportunity to make a difference for others.',
  communication: 'Warm and personal. Asks about others\' well-being and shows care.',
  relationships: {
    generalApproach: 'Gives a lot of themselves and seeks relationships where their care is appreciated.',
    workApproach: 'Creates well-being and good relationships in the team. Focuses on the human element.',
    teamPlayer: 'The one who ensures everyone is well. Supports and encourages colleagues.',
    conflictPoints: [
      'Feels overlooked or unappreciated',
      'Can become manipulative to gain attention',
      'Ignores their own needs and boundaries'
    ],
    conflictHandling: 'Avoids direct confrontation, but can react passively-aggressively if not valued.',
    developmentChallenge: 'To learn to express their own needs and set healthy boundaries.'
  },
  ifYouAreThisType: [
    'Remember to take care of yourself – not just others',
    'Practice asking for help and showing vulnerability',
    'Set limits on how much you give',
    'Recognize your worth independently of your helpfulness',
    'Be honest about your feelings and needs'
  ],
  ifYouWorkWithThisType: [
    'Show gratitude for their support and care',
    'Ask about their well-being – not just what they do for others',
    'Acknowledge their contribution to the team\'s well-being',
    'Help them prioritize themselves',
    'Be personal and warm in communication'
  ],
  underStress: {
    
movesToType: 'Type 8',
  description: 'When Type 2 is stressed, they can become more controlling and angry. They demand recognition and can react aggressively, especially if they feel overlooked or unappreciated. Their helpfulness becomes a way to gain power and attention.'

  },
  whenSecure: {
  
movesToType: 'Type 4',
  description: 'In safe environments, Type 2 gains better contact with their own feelings and needs. They become more authentic and creative, and express themselves with depth and genuineness, without depending on others\' validation.'
 },
  notToBeConfusedWith: [
    {
      type: 'Type 6 – The Loyalist',
      difference: 'Both are caring and relational, but Type 2 seeks emotional closeness, while Type 6 seeks security and stability in the community.'
    },
    {
      type: 'Type 9 – The Peacemaker',
      difference: 'Both can seem warm and welcoming, but Type 2 is actively seeking and helpful, while Type 9 is more passive and avoidant.'
    },
    {
      type: 'Type 4 – The Individualist',
      difference: 'Both have strong feelings, but Type 2 focuses on the needs of others, while Type 4 focuses on their own feelings and identity.'
    }
  ]
},



'Type 3': {
  type: 'Type 3',
  title: 'The Achiever',
  worldview: 'The world rewards those who succeed and produce results. I feel valuable when I achieve something and am recognized for it.',
  focus: 'Focuses on goals, efficiency, and how they appear. Wants to be the best and look good while doing it.',
  basicFear: 'Of being worthless if they don\'t perform. Fears failure and being overlooked.',
  basicDesire: 'To feel valuable and be recognized for their achievements and abilities.',
  innerDialogue: '"What do I need to achieve today?" "How does this look?" "I must be the best."',
  qualities: ['Goal-oriented', 'Energetic', 'Pragmatic', 'Self-assured', 'Adaptable', 'Ambitious'],
  passion: 'Deceit – both toward themselves and others about who they really are behind the facade.',
  blindSpots: [
    'Can lose contact with their own feelings',
    'Focuses on image over substance',
    'Struggles to accept mistakes and vulnerability'
  ],
  thoughtPatterns: [
    'Thinks in terms of goals and results',
    'Considers what will impress others',
    'Focuses on being efficient and successful'
  ],
  strivesFor: 'Success, recognition, and being the best.',
  attractedTo: 'Projects with prestige, visible results, and people who can strengthen their image.',
  dislikes: 'Failure, inefficiency, and being ignored or seen as mediocre.',
  appearance: 'Professional and well-dressed. Appears confident and competent – often with a polished exterior.',
  personalStrengths: [
    'Strong drive and goal orientation',
    'Ability to inspire and motivate',
    'Pragmatic problem-solving',
    'Flexibility and adaptability'
  ],
  learning: 'Learns best through practical experience, competition, and measurable results.',
  motivatedBy: 'Success, recognition, and the opportunity to stand out.',
  communication: 'Direct and goal-oriented. Can be inspiring but also focused on results over feelings.',
  relationships: {
    generalApproach: 'Seeks partners who support their ambitions and share their focus on success.',
    workApproach: 'Thrives in competitive and results-oriented environments. Makes things happen.',
    teamPlayer: 'Drives the team forward and inspires high performance.',
    conflictPoints: [
      'Can prioritize results over relationships',
      'Has difficulty showing vulnerability',
      'Becomes impatient with slow or inefficient processes'
    ],
    conflictHandling: 'Focuses on solutions and progress. Often avoids emotional aspects.',
    developmentChallenge: 'To learn to value themselves for who they are – not just for what they achieve.'
  },
  ifYouAreThisType: [
    'Take time to feel your emotions and needs',
    'Value the process – not just the result',
    'Share your insecurities with trusted people',
    'Remember that mistakes are part of learning',
    'Prioritize genuine and close relationships'
  ],
  ifYouWorkWithThisType: [
    'Acknowledge their achievements and effort',
    'Be efficient and goal-oriented in your communication',
    'Give them visible and challenging tasks',
    'Support their ambitions – but remind them of balance',
    'Help them see the value in what cannot be measured'
  ],
  underStress: {
   
movesToType: 'Type 9',
  description: 'Under stress, Type 3 loses motivation and becomes passive. They withdraw from tasks and avoid challenges, and can appear disengaged and emotionally disconnected.'
  },
  whenSecure: {
 
movesToType: 'Type 6',
  description: 'When Type 3 feels secure, they become more team-oriented and loyal. They focus on helping others succeed and release the need to constantly impress.'
  },
  notToBeConfusedWith: [
    {
      type: 'Type 1 – The Reformer',
      difference: 'Both are ambitious and goal-oriented, but Type 1 acts from internal principles and ethics, while Type 3 focuses on external success and recognition.'
    },
    {
      type: 'Type 7 – The Enthusiast',
      difference: 'Both are energetic and action-oriented, but Type 3 plans and optimizes, while Type 7 seeks experiences and avoids limitations.'
    },
    {
      type: 'Type 8 – The Challenger',
      difference: 'Both are strong and decisive, but Type 3 seeks recognition and image, while Type 8 seeks control and justice.'
    }
  ]
},



'Type 4': {
  type: 'Type 4',
  title: 'The Individualist',
  worldview: 'I feel different and lack something that others have. I seek depth, meaning, and authenticity in everything I do.',
  focus: 'Focuses on feelings, identity, and what is missing. Wants to be unique and understood.',
  basicFear: 'Of having no identity or personal significance. Fears being ordinary and uninteresting.',
  basicDesire: 'To find oneself and be valued for their authenticity and unique being.',
  innerDialogue: '"What am I missing?" "Do they understand me?" "I am different from everyone else."',
  qualities: ['Creative', 'Sensitive', 'Introspective', 'Authentic', 'Empathetic', 'Aesthetic'],
  passion: 'Envy – a feeling that others have something they themselves lack and long for.',
  blindSpots: [
    'Focuses too much on the negative or what is missing',
    'Can become self-absorbed and emotionally dramatic',
    'Has difficulty appreciating the ordinary and everyday'
  ],
  thoughtPatterns: [
    'Compares themselves to others',
    'Feels different and excluded',
    'Searches for deeper meaning and genuineness'
  ],
  strivesFor: 'To be authentic, unique, and feel deeply connected to something meaningful.',
  attractedTo: 'Beauty, depth, creativity, and people who understand their feelings.',
  dislikes: 'Superficiality, conformity, being misunderstood, or ignored.',
  appearance: 'Expresses their individuality through personal style and aesthetics. Often appears artistic or alternative.',
  personalStrengths: [
    'Deep emotional understanding',
    'Creativity and aesthetic sense',
    'Authenticity and honesty',
    'Ability to see beauty in the difficult and complex'
  ],
  learning: 'Learns best through creative expression, personal connections, and emotional engagement.',
  motivatedBy: 'The opportunity to express themselves authentically, create something unique, and be understood.',
  communication: 'Emotional, personal, and often poetic. Seeks depth and meaning in conversations.',
  relationships: {
    generalApproach: 'Seeks deep and authentic connections with people who can hold their complexity.',
    workApproach: 'Thrives in creative and free environments where they can express their individuality.',
    teamPlayer: 'Contributes creativity and emotional depth. Can be moody and withdraw in conflict.',
    conflictPoints: [
      'Can be emotionally intense and dramatic',
      'Has difficulty with routines and structure',
      'Withdraws if they feel misunderstood'
    ],
    conflictHandling: 'Reacts emotionally or withdraws. Seeks understanding and deep contact.',
    developmentChallenge: 'To accept the ordinary and find beauty in the everyday.'
  },
  ifYouAreThisType: [
    'Practice seeing the positive in your life',
    'Accept that everyone has difficult periods – you are not alone',
    'Find beauty in the ordinary and everyday',
    'Share your feelings in a constructive way',
    'Value stability and routines as a support'
  ],
  ifYouWorkWithThisType: [
    'Acknowledge their creativity and unique perspective',
    'Be authentic and honest in your communication',
    'Give them space for emotional expression',
    'Avoid superficial conversations and quick fixes',
    'Support their creative and personal projects'
  ],
  underStress: {
   
 movesToType: 'Type 2',
  description: 'When Type 4 is stressed, they become clingy and seek attention and validation. They can lose themselves in the relationship and try to get others to fulfill their emotional needs.'
  },
  whenSecure: {

  movesToType: 'Type 1',
  description: 'In safe environments, Type 4 becomes more structured and disciplined. They translate their creativity into concrete results and gain a stronger sense of purpose and direction.'
  },
  notToBeConfusedWith: [
    {
      type: 'Type 5 – The Investigator',
      difference: 'Both are introspective and deep, but Type 4 is emotionally driven and seeks contact, while Type 5 is more rational and seeks distance.'
    },
    {
      type: 'Type 6 – The Loyalist',
      difference: 'Both can be emotionally intense, but Type 4 seeks authenticity and depth, while Type 6 seeks security and stability.'
    },
    {
      type: 'Type 9 – The Peacemaker',
      difference: 'Both can withdraw into themselves, but Type 4 does so with feelings and longing, while Type 9 does so to avoid conflict and turmoil.'
    }
  ]
},

'Type 5': {
  type: 'Type 5',
  title: 'The Investigator',
  worldview: 'The world can be overwhelming and demanding. I need to understand things and protect my energy before I engage.',
  focus: 'Focuses on observing, analyzing, and conserving resources – both mentally and emotionally.',
  basicFear: 'Of being invaded, overwhelmed, or rendered incompetent.',
  basicDesire: 'To be competent and to understand the world on a deep and meaningful level.',
  innerDialogue: '"I need more information." "What if I can\'t handle it?" "I need time to think."',
  qualities: ['Analytical', 'Independent', 'Curious', 'Objective', 'Private', 'Perceptive'],
  passion: 'Avarice (Greed) – a craving to accumulate knowledge and protect their own resources.',
  blindSpots: [
    'Can isolate themselves and become emotionally distant',
    'Has difficulty acting without full understanding',
    'Can appear unengaged or absent'
  ],
  thoughtPatterns: [
    'Analyzes and categorizes information',
    'Thinks about how to conserve energy',
    'Searches for patterns and deeper understanding'
  ],
  strivesFor: 'Competence, insight, and independence.',
  attractedTo: 'Complex systems, deep knowledge, and people who respect their need for space.',
  dislikes: 'Superficiality, emotional invasion, and pressure for quick action.',
  appearance: 'Reserved and observant. Often dresses neutrally and practically.',
  personalStrengths: [
    'Deep analytical thinking',
    'Objectivity and impartiality',
    'Self-reliance and ability to work alone',
    'Ability to see the big picture and think long-term'
  ],
  learning: 'Learns best through self-study, observation, and time for contemplation.',
  motivatedBy: 'The opportunity to understand complex subjects and work undisturbed.',
  communication: 'Precise and factual. Shares knowledge when they feel safe and competent.',
  relationships: {
    generalApproach: 'Prefers few, deep relationships with people who respect their need for solitude.',
    workApproach: 'Thrives with complex tasks and works best independently.',
    teamPlayer: 'Contributes expertise and objectivity. Can be quiet and reserved.',
    conflictPoints: [
      'Can seem emotionally cold or uninterested',
      'Has difficulty sharing feelings and needs',
      'Often withdraws under pressure or emotional confrontation'
    ],
    conflictHandling: 'Withdraws to think. Prefers written or indirect communication.',
    developmentChallenge: 'To engage emotionally and share thoughts and feelings with others.'
  },
  ifYouAreThisType: [
    'Practice sharing your thoughts and feelings – even if it feels unfamiliar',
    'Set boundaries instead of just withdrawing',
    'Engage in small social activities',
    'Remember that action does not require perfect understanding',
    'Value your feelings as important information – not just distractions'
  ],
  ifYouWorkWithThisType: [
    'Respect their need for time and space',
    'Give them information beforehand and avoid pressure',
    'Value their knowledge and analytical skills',
    'Communicate clearly and precisely – avoid emotional pressure',
    'Create safe conditions for collaboration without invading'
  ],
  underStress: {
 
  movesToType: 'Type 7',
  description: 'Under pressure, Type 5 becomes restless and spreads themselves too thin. They lose focus and act impulsively, often without their usual reflection and analysis.'
  },
  whenSecure: {

 movesToType: 'Type 8',
  description: 'When Type 5 feels secure, they become more self-assured and decisive. They dare to take responsibility and step forward with their knowledge and decisions.'
  },
  notToBeConfusedWith: [
    {
      type: 'Type 4 – The Individualist',
      difference: 'Both are introspective, but Type 4 is emotionally driven and seeks contact, while Type 5 is rational and seeks distance.'
    },
    {
      type: 'Type 9 – The Peacemaker',
      difference: 'Both can seem quiet and withdrawn, but Type 5 withdraws to think, while Type 9 does so to avoid conflict.'
    },
    {
      type: 'Type 1 – The Reformer',
      difference: 'Both have principles, but Type 1 acts from ethics and correctness, while Type 5 sees principles as mental constructs that can be examined and challenged.'
    }
  ]
},

 
'Type 6': {
  type: 'Type 6',
  title: 'The Loyalist',
  worldview: 'The world feels unpredictable and insecure. I need support and clear frameworks to feel safe.',
  focus: 'Focuses on safety, trust, and who can be relied upon. Is aware of potential problems and risks.',
  basicFear: 'Of standing alone without support or guidance. Fears making mistakes and being betrayed.',
  basicDesire: 'To feel secure and supported. To have someone or something to lean on.',
  innerDialogue: '"What if something goes wrong?" "Can I trust them?" "What should I do?"',
  qualities: ['Loyal', 'Responsible', 'Cautious', 'Cooperative', 'Reliable', 'Committed'],
  passion: 'Fear – a constant inner restlessness and worry that can lead to doubt and overcontrol.',
  blindSpots: [
    'Can worry unnecessarily and see problems before they arise',
    'Has difficulty trusting their own decisions',
    'Can project their own fear scenarios onto others'
  ],
  thoughtPatterns: [
    'Thinks in worst-case scenarios',
    'Seeks safety and support',
    'Analyzes people\'s motives and intentions'
  ],
  strivesFor: 'Security, stability, and loyalty.',
  attractedTo: 'Clear structures, reliable people, and safe communities.',
  dislikes: 'Uncertainty, betrayal, unpredictability, and being alone with responsibility.',
  appearance: 'Often vigilant and slightly worried. Dresses practically and appropriately.',
  personalStrengths: [
    'Strong loyalty and sense of responsibility',
    'Ability to foresee problems and risks',
    'Good at collaboration and supporting others',
    'Committed and principled'
  ],
  learning: 'Learns best in safe and structured environments with clear feedback.',
  motivatedBy: 'Recognition of their loyalty and the opportunity to contribute to the community.',
  communication: 'Questioning and cautious. Seeks confirmation and clarity.',
  relationships: {
    generalApproach: 'Seeks stable and loyal relationships where there is mutual support.',
    workApproach: 'Thrives in structured environments with clear expectations and leadership.',
    teamPlayer: 'Very committed and loyal. Works hard for the team\'s success.',
    conflictPoints: [
      'Can be overly worried and pessimistic',
      'Has difficulty making decisions alone',
      'Can become defensive and suspicious under pressure'
    ],
    conflictHandling: 'Seeks support and clarification. Can react either submissively or rebelliously.',
    developmentChallenge: 'To trust themselves and their own assessments more.'
  },
  ifYouAreThisType: [
    'Practice trusting your own decisions',
    'Focus on what is going well – not just what could go wrong',
    'Take small steps toward greater independence',
    'Seek honest and constructive feedback',
    'Remember that most people wish you well'
  ],
  ifYouWorkWithThisType: [
    'Be clear and consistent in your communication',
    'Give them security and clear frameworks',
    'Acknowledge their loyalty and effort',
    'Help them see their strengths',
    'Be patient with their worries and need for clarification'
  ],
  underStress: {
 
  movesToType: 'Type 3',
  description: 'Under stress, Type 6 becomes more competitive and focused on proving their worth. They can appear overly performance-oriented and lose touch with their inner compass.'
  },
  whenSecure: {

 movesToType: 'Type 9',
  description: 'In safe relationships, Type 6 becomes more relaxed and trusting. They release worries and find peace in the present moment, with greater belief in themselves and others.'
  },
  notToBeConfusedWith: [
    {
      type: 'Type 1 – The Reformer',
      difference: 'Both have strong principles, but Type 1 acts from internal ethics, while Type 6 seeks security and support in the community.'
    },
    {
      type: 'Type 2 – The Helper',
      difference: 'Both are relational, but Type 2 seeks emotional closeness, while Type 6 seeks stability and loyalty.'
    },
    {
      type: 'Type 5 – The Investigator',
      difference: 'Both can be cautious and analytical, but Type 5 withdraws to think, while Type 6 seeks support and clarification.'
    }
  ]
},

'Type 7': {
  type: 'Type 7',
  title: 'The Enthusiast',
  worldview: 'The world is full of opportunities and experiences, and life should be fun and exciting. I avoid pain by focusing on the positive and planning new adventures.',
  focus: 'Focuses on the future, possibilities, and all the fun that can happen. Avoids limitations and difficult feelings.',
  basicFear: 'Of being trapped in pain, boredom, or deprivation. Fears missing out on something.',
  basicDesire: 'To be happy and free. To have their needs met and live a rich and exciting life.',
  innerDialogue: '"What fun can I do?" "There are so many possibilities!" "I don\'t want to miss anything."',
  qualities: ['Optimistic', 'Spontaneous', 'Versatile', 'Adventurous', 'Energetic', 'Inspiring'],
  passion: 'Gluttony – a craving to have as many experiences and impressions as possible.',
  blindSpots: [
    'Avoids difficult feelings and pain',
    'Has difficulty committing',
    'Can seem superficial or irresponsible'
  ],
  thoughtPatterns: [
    'Thinks about future possibilities',
    'Plans fun activities',
    'Avoids negative thoughts and feelings'
  ],
  strivesFor: 'Freedom, variety, and joy.',
  attractedTo: 'New experiences, creative people, and exciting ideas.',
  dislikes: 'Limitations, routines, negativity, and boredom.',
  appearance: 'Energetic and smiling. Often dresses colorfully and creatively.',
  personalStrengths: [
    'Positive and inspiring approach to life',
    'Creativity and ability to see possibilities',
    'Flexibility and adaptability',
    'Ability to spread energy and joy'
  ],
  learning: 'Learns best through variety, practical exercises, and creative challenges.',
  motivatedBy: 'Freedom, new experiences, and the opportunity to inspire and engage others.',
  communication: 'Enthusiastic and energetic. Often jumps between topics and focuses on the positive.',
  relationships: {
    generalApproach: 'Seeks partners who share their desire for adventure and zest for life.',
    workApproach: 'Thrives in dynamic and creative environments. Needs variety and freedom.',
    teamPlayer: 'Contributes energy and ideas. Can struggle to maintain focus and follow through.',
    conflictPoints: [
      'Avoids difficult conversations and feelings',
      'Can seem irresponsible or flighty',
      'Has difficulty dealing with structure and details'
    ],
    conflictHandling: 'Tries to make the conflict positive or avoids it entirely.',
    developmentChallenge: 'To learn to be present with difficult feelings and commit deeply.'
  },
  ifYouAreThisType: [
    'Practice being present with difficult feelings',
    'Focus on completing projects',
    'Set limits on how much you take on',
    'Value depth over breadth',
    'Learn to say no to some opportunities'
  ],
  ifYouWorkWithThisType: [
    'Give them variety and creative challenges',
    'Be positive and enthusiastic',
    'Help them focus and prioritize',
    'Avoid too many limitations',
    'Value their energy and optimism'
  ],
  underStress: {
  
  movesToType: 'Type 1',
  description: 'Under stress, Type 7 becomes critical and perfectionistic. They focus on faults and lose their positive approach, and can become frustrated with limitations and responsibilities.'
  },
  whenSecure: {

  movesToType: 'Type 5',
  description: 'When Type 7 feels secure, they become more focused and analytical. They delve deeper and work in depth, releasing the need for constant stimulation.'
  },
  notToBeConfusedWith: [
    {
      type: 'Type 3 – The Achiever',
      difference: 'Both are energetic and action-oriented, but Type 3 seeks recognition and success, while Type 7 seeks experiences and freedom.'
    },
    {
      type: 'Type 9 – The Peacemaker',
      difference: 'Both can seem relaxed and positive, but Type 9 avoids conflict by adapting, while Type 7 avoids pain by distracting themselves.'
    },
    {
      type: 'Type 4 – The Individualist',
      difference: 'Both seek depth and meaning, but Type 4 enters into feelings, while Type 7 tries to avoid them and stay in the light.'
    }
  ]
},


 
'Type 8': {
  type: 'Type 8',
  title: 'The Challenger',
  worldview: 'The world is tough and unfair. I must be strong and take charge – both for myself and for those I care about.',
  focus: 'Focuses on control, justice, and protection. Wants to ensure that no one is exploited or betrayed.',
  basicFear: 'Of being controlled, betrayed, or harmed. Fears losing power and being vulnerable.',
  basicDesire: 'To be self-reliant and to have control over their own life and destiny.',
  innerDialogue: '"I must be strong." "Who is trying to control me?" "I will protect those I care about."',
  qualities: ['Strong', 'Direct', 'Confident', 'Protective', 'Just', 'Decisive'],
  passion: 'Lust – an excessive craving for intensity, control, and dominance.',
  blindSpots: [
    'Can be overly dominant and controlling',
    'Has difficulty showing vulnerability',
    'Can seem frightening or intimidating'
  ],
  thoughtPatterns: [
    'Thinks in terms of power and control'
  ],
  strivesFor: 'Independence, control, and justice.',
  attractedTo: 'Challenges, power, and people who respect their strength.',
  dislikes: 'Weakness, betrayal, injustice, and manipulation.',
  appearance: 'Forceful and determined. Often appears authoritative and confident.',
  personalStrengths: [
    'Strength and determination',
    'Ability to make decisions quickly and act',
    'Loyalty and protective instinct',
    'Directness and honesty'
  ],
  learning: 'Learns best through direct experience, challenges, and taking charge.',
  motivatedBy: 'Power, control, justice, and the opportunity to protect those they love.',
  communication: 'Direct, confrontational, and passionate. Says what they think without beating around the bush.',
  relationships: {
    generalApproach: 'Seeks partners who challenge and respect their strength. Very loyal and protective.',
    workApproach: 'Enjoys leadership and taking responsibility. Can handle conflicts directly.',
    teamPlayer: 'The leader who stands up for the team. May have dominant tendencies.',
    conflictPoints: [
      'Can be aggressive and confrontational',
      'Has difficulty seeing others\' perspectives',
      'Can intimidate or override others'
    ],
    conflictHandling: 'Addresses conflicts directly, often with intensity and assertiveness.',
    developmentChallenge: 'To learn to accept their own vulnerability and trust others.'
  },
  ifYouAreThisType: [
    'Allow yourself to show vulnerability',
    'Listen to the perspectives of others',
    'Channel your energy into positive causes',
    'Accept that control is an illusion',
    'Let others know how much you appreciate them'
  ],
  ifYouWorkWithThisType: [
    'Be direct and honest in your communication',
    'Respect their strength, but don\'t be intimidated',
    'Give them responsibility, but with clear boundaries',
    'Be loyal and reliable',
    'Stand by your own convictions'
  ],
  underStress: {
   
movesToType: 'Type 5',
  description: 'Under stress, Type 8 withdraws and isolates themselves. They retreat and become more thoughtful and reserved instead of asserting themselves.'
  },
  whenSecure: {

movesToType: 'Type 2',
  description: 'When Type 8 feels secure, they become more open and caring. They use their strength to generously help others and become more vulnerable in their relationships.'
  },
  notToBeConfusedWith: [
    {
      type: 'Type 3 – The Achiever',
      difference: 'Both are energetic, but Type 8 seeks control, while Type 3 seeks recognition.'
    },
    {
      type: 'Type 1 – The Reformer',
      difference: 'Both are principled, but Type 8 acts from personal justice, while Type 1 acts from universal ethics.'
    },
    {
      type: 'Type 9 – The Peacemaker',
      difference: 'Both are in the Body Triad, but Type 8 is aggressive, while Type 9 is passive-aggressive and seeks harmony.'
    }
  ]
},

// --- TYP 9: The Peacemaker ---
'Type 9': {
  type: 'Type 9',
  title: 'The Peacemaker',
  worldview: 'The world is best when it is harmonious and conflict-free. I feel safe when I can maintain inner peace and merge with others.',
  focus: 'Focuses on maintaining harmony and avoiding conflict. Is concerned with seeing all perspectives and adapting.',
  basicFear: 'Of loss and separation. Fears losing their connection to others or being fragmented.',
  basicDesire: 'To have inner stability and peace of mind – to be in harmony with themselves and the world.',
  innerDialogue: '"It\'s not that important." "I don\'t want a fight." "I should just go along with it."',
  qualities: ['Harmonious', 'Accepting', 'Patient', 'Gentle', 'Reassuring', 'Supportive'],
  passion: 'Sloth – a complacency regarding themselves, their own needs, and their own agency.',
  blindSpots: [
    'Can ignore their own needs and opinions',
    'Tends to avoid conflict and sweep things under the rug',
    'Can become passively aggressive when feeling overlooked'
  ],
  thoughtPatterns: [
    'Thinks about common ground and the different perspectives',
    'Minimizes problems and fears',
    'Looks for ways to avoid conflict'
  ],
  strivesFor: 'Inner peace, harmony, and connection.',
  attractedTo: 'Stable environments, relaxed people, and routines.',
  dislikes: 'Conflict, pressure, sudden changes, and being separated.',
  appearance: 'Relaxed and approachable. Often neglects their own appearance or organization because the focus is on others.',
  personalStrengths: [
    'Ability to create and mediate harmony',
    'Tolerance and acceptance',
    'Patience and endurance',
    'Ability to see many perspectives'
  ],
  learning: 'Learns best in a relaxed atmosphere and when they are included and encouraged.',
  motivatedBy: 'Harmony, recognition of their efforts, and the opportunity to make a positive contribution.',
  communication: 'Calm and accepting. Can be vague to avoid conflict.',
  relationships: {
    generalApproach: 'Seeks stable and harmonious relationships where there are no disagreements.',
    workApproach: 'Good team players who create a peaceful atmosphere. Can procrastinate and focus on less important tasks.',
    teamPlayer: 'The mediator who ensures everyone is comfortable. Supports the decisions of others.',
    conflictPoints: [
      'Ignores their own frustrations and needs',
      'Withdraws rather than confronting',
      'Can develop stubbornness when pressured'
    ],
    conflictHandling: 'Avoids confrontation but can passively resist. Prioritizes maintaining the peace.',
    developmentChallenge: 'To learn to assert themselves and find their own voice.'
  },
  ifYouAreThisType: [
    'Find your own voice and opinion',
    'Make your priorities clear – not just those of others',
    'Accept conflict as a necessary part of life',
    'Become aware of what you really need',
    'Act decisively and avoid procrastination'
  ],
  ifYouWorkWithThisType: [
    'Be direct and avoid vague expectations',
    'Encourage them to express their opinion',
    'Create a relaxed work atmosphere',
    'Give them gentle but clear deadlines',
    'Be patient if they need time to think'
  ],
  underStress: {
    movesToType: 'Type 6',
    description: 'Under stress, Type 9 becomes anxious and suspicious. They may worry and become overly cautious, losing their inner peace.'
  },
  whenSecure: {
    movesToType: 'Type 3',
    description: 'When Type 9 feels secure, they become more active, self-assured, and goal-oriented. They recognize their worth and use their energy to pursue their own goals.'
  },
  notToBeConfusedWith: [
    {
      type: 'Type 2 – The Helper',
      difference: 'Both are warm, but Type 2 actively seeks connection, while Type 9 is passive and reserved.'
    },
    {
      type: 'Type 5 – The Investigator',
      difference: 'Both can be withdrawn, but Type 9 does so to maintain harmony, while Type 5 does so to conserve resources and contemplate.'
    },
    {
      type: 'Type 4 – The Individualist',
      difference: 'Both can withdraw emotionally, but Type 9 does so to maintain stability, while Type 4 does so to differentiate themselves from the world.'
    }
  ]
}
};
