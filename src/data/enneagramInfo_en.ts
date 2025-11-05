export const triadInfo = {
  title: "The Three Triads - Action, Feeling, and Thinking",
  description: "The Enneagram is divided into three centers or triads that describe how different types primarily experience and react to the world.",

  triads: {
    body: {
      title: "Action Triad (Body Center)",
      types: ["Type 8", "Type 9", "Type 1"],
      description: "Types in the Action Triad react primarily through instinct and body sensations. They are concerned with control, autonomy, and influencing their environment.",
      color: "red",
      icon: "👊",
      characteristics: [
        "Reacts first through gut feelings and instincts",
        "Focuses on power, control, and boundaries",
        "Often expresses anger or irritation",
        "Needs to feel autonomous and have influence"
      ]
    },

    heart: {
      title: "Feeling Triad (Heart Center)",
      types: ["Type 2", "Type 3", "Type 4"],
      description: "Types in the Feeling Triad react primarily through emotions and relationships. They are concerned with identity, image, and how they are seen by others.",
      color: "green",
      icon: "❤️",
      characteristics: [
        "Reacts first through feelings and emotions",
        "Focuses on image, identity, and recognition",
        "Often expresses shame or feelings of inadequacy",
        "Needs to feel valued and seen by others"
      ]
    },

    head: {
      title: "Thinking Triad (Head Center)",
      types: ["Type 5", "Type 6", "Type 7"],
      description: "Types in the Thinking Triad react primarily through analysis and mental processing. They are concerned with security, planning, and understanding the world.",
      color: "blue",
      icon: "🧠",
      characteristics: [
        "Reacts first through thoughts and analysis",
        "Focuses on security, knowledge, and future plans",
        "Often expresses fear or anxiety",
        "Needs to feel prepared and secure"
      ]
    }
  }
};

export const stressGrowthLines = {
  title: "Stress and Growth - Your Lines of Development",
  description: "Each type has two lines that show directions for Stress (Friction) and Growth (Liberation). These lines are important for personal development.",

  lines: {
    "Type 1": {
      stress: {
        movesTo: "Type 4",
        description: "Under stress, 1s can become more emotional, self-absorbed, and critical – like Type 4. They can lose their objectivity and become caught in self-pity.",
        warning: "Beware of perfectionism turning into self-criticism and depression."
      },
      growth: {
        movesTo: "Type 7",
        description: "In growth, 1s learn to be more spontaneous, optimistic, and accepting – like Type 7. They find joy in the process and not just in the result.",
        opportunity: "Embrace spontaneity and allow yourself to have fun without guilt."
      }
    },

    "Type 2": {
      stress: {
        movesTo: "Type 8",
        description: "Under stress, 2s can become aggressive, dominant, and confrontational – like Type 8. They may 'punish' those they have helped when they feel unappreciated.",
        warning: "Beware of your helpfulness turning into control and manipulation."
      },
      growth: {
        movesTo: "Type 4",
        description: "In growth, 2s learn to be more in touch with their own feelings and needs – like Type 4. They find their own identity outside of others' approval.",
        opportunity: "Allow yourself to feel and express your own needs honestly."
      }
    },

    "Type 3": {
      stress: {
        movesTo: "Type 9",
        description: "Under stress, 3s can become passive, disengaged, and lose their drive – like Type 9. They may fall into indifference and avoid conflicts.",
        warning: "Beware of your busyness turning into emptiness and lack of direction."
      },
      growth: {
        movesTo: "Type 6",
        description: "In growth, 3s learn to be more loyal, responsible, and connected to the community – like Type 6. They value deeper relationships over image.",
        opportunity: "Find security in being authentic rather than maintaining an image."
      }
    },

    "Type 4": {
      stress: {
        movesTo: "Type 2",
        description: "Under stress, 4s can become clinging, dependent, and over-helpful – like Type 2. They can lose contact with their authentic self.",
        warning: "Beware of your search for connection turning into dependency."
      },
      growth: {
        movesTo: "Type 1",
        description: "In growth, 4s learn to be more disciplined, objective, and action-oriented – like Type 1. They find balance between emotions and structure.",
        opportunity: "Use your creativity constructively with discipline and structure."
      }
    },

    "Type 5": {
      stress: {
        movesTo: "Type 7",
        description: "Under stress, 5s can become scattered, impulsive, and overstimulated – like Type 7. They may jump from project to project without going into depth.",
        warning: "Beware of your withdrawal turning into escape from reality."
      },
      growth: {
        movesTo: "Type 8",
        description: "In growth, 5s learn to be more self-assured, assertive, and participatory – like Type 8. They step forward and share their knowledge actively.",
        opportunity: "Share your knowledge generously and take up space in the world."
      }
    },

    "Type 6": {
      stress: {
        movesTo: "Type 3",
        description: "Under stress, 6s can become competitive, workaholics, and image-conscious – like Type 3. They may lose contact with their authentic concerns.",
        warning: "Beware of your search for security turning into excessive busyness."
      },
      growth: {
        movesTo: "Type 9",
        description: "In growth, 6s learn to be calmer, more trusting, and accepting – like Type 9. They find inner peace and trust the process.",
        opportunity: "Trust yourself and the world – not everything needs to be controlled."
      }
    },

    "Type 7": {
      stress: {
        movesTo: "Type 1",
        description: "Under stress, 7s can become critical, perfectionistic, and rigid – like Type 1. They can lose their spontaneity and become judgmental.",
        warning: "Beware of your optimism hiding unprocessed painful emotions."
      },
      growth: {
        movesTo: "Type 5",
        description: "In growth, 7s learn to be more focused, in-depth, and present – like Type 5. They find satisfaction in depth rather than breadth.",
        opportunity: "Dive deeply instead of skimming the surface of life."
      }
    },

    "Type 8": {
      stress: {
        movesTo: "Type 5",
        description: "Under stress, 8s can become isolated, dismissive, and overly private – like Type 5. They withdraw from contact and become closed off.",
        warning: "Beware of your strength turning into isolation from others."
      },
      growth: {
        movesTo: "Type 2",
        description: "In growth, 8s learn to be more empathetic, vulnerable, and caring – like Type 2. They open their hearts and show softness.",
        opportunity: "Show your softness and vulnerability – that is true strength."
      }
    },

    "Type 9": {
      stress: {
        movesTo: "Type 6",
        description: "Under stress, 9s can become anxious, worried, and indecisive – like Type 6. They may lose their inner peace and become overwhelmed by doubt.",
        warning: "Beware of your peacefulness turning into conflict avoidance."
      },
      growth: {
        movesTo: "Type 3",
        description: "In growth, 9s learn to be more assertive, goal-oriented, and self-confident – like Type 3. They find their own voice and take action.",
        opportunity: "Put yourself first and take active steps toward your goals."
      }
    }
  }
};

export const basicFearsInfo = {
  title: "Basic Fears - What Drives Your Type?",
  description: "Every Enneagram type has a deeply rooted basic fear that shapes their worldview and behavior. Understanding this fear is the key to personal development.",
  source: "The Wisdom of the Enneagram - Don Richard Riso & Russ Hudson",

  fears: {
    "Type 1": {
      icon: "🔢",
      name: "The Perfectionist",
      fear: "Being bad, corrupt, evil, or defective.",
      description: "The Perfectionist deeply fears being morally wrong or imperfect. To compensate, they strive to be virtuous, responsible, and ethical. They often project their fear outward by pointing out flaws in others and insisting on high standards."
    },
    "Type 2": {
      icon: "💞",
      name: "The Helper",
      fear: "Being unloved or unwanted.",
      description: "The Helper fears they are not worthy of love unless they make themselves indispensable. They therefore attempt to gain love by fulfilling the needs of others, but may end up making others dependent on them and feeling bitter if they do not receive the desired love in return."
    },
    "Type 3": {
      icon: "🏆",
      name: "The Achiever",
      fear: "Being worthless or without inherent value.",
      description: "The Achiever fears that they are only valuable if they perform and achieve success. They therefore constantly seek recognition and admiration, but risk losing contact with their authentic self and feeling empty behind the facade."
    },
    "Type 4": {
      icon: "🎭",
      name: "The Individualist",
      fear: "Being without identity or personal significance.",
      description: "The Individualist fears being ordinary or invisible. They seek to be unique and authentic, but can simultaneously feel misunderstood and isolated. They may come to belittle others to assert their own distinctiveness."
    },
    "Type 5": {
      icon: "🧠",
      name: "The Investigator",
      fear: "Being useless, incompetent, or helpless.",
      description: "The Investigator fears being overwhelmed by the world and therefore withdraws to maintain control. They seek knowledge and understanding as a way to feel competent, but may appear emotionally distant."
    },
    "Type 6": {
      icon: "🛡️",
      name: "The Loyalist",
      fear: "Being without support and guidance.",
      description: "The Loyalist fears standing alone and without security. They seek safety through loyalty and preparation, but can become suspicious and over-reliant on authorities. Ironically, their search for security can lead to the opposite."
    },
    "Type 7": {
      icon: "🎉",
      name: "The Enthusiast",
      fear: "Being trapped in pain or deprivation.",
      description: "The Enthusiast fears emotional pain and boredom. They constantly seek new experiences and pleasures to avoid discomfort. This can lead to superficiality and an inability to commit, which can ultimately create the emptiness they are trying to avoid."
    },
    "Type 8": {
      icon: "💪",
      name: "The Challenger",
      fear: "Being controlled or harmed by others.",
      description: "The Challenger fears vulnerability and weakness. They seek power and control to protect themselves, but may appear dominant and intimidating. Their fear of being controlled can cause them to control others."
    },
    "Type 9": {
      icon: "☮️",
      name: "The Peacemaker",
      fear: "Losing connection or being fragmented.",
      description: "The Peacemaker fears conflict and separation. They seek harmony and avoid confrontation, but may lose themselves in the attempt to maintain peace. Their strategy of 'checking out' can make others feel overlooked or dismissed."
    }
  }
};

export const basicDesiresInfo = {
  title: "Basic Desires - What Does Your Type Seek?",
  description: "The basic desires emerge as a compensation for the basic fear. They function as an inner driving force, but pursuing the desire through the ego's strategies can paradoxically reinforce the fear.",

  dynamicExplanation: "The more we try to achieve our basic desire through the ego's strategies, the more we activate our fear - because these strategies cannot satisfy our deepest needs.\n\nIn other words: We all have something we long for – like feeling loved, safe, or valuable. But when we try to get it by playing a specific role or striving in a specific way, it doesn't quite work. And the more we try, the more afraid we become of not getting what we truly need.",

  desires: {
    "Type 1": {
      icon: "🔢",
      name: "The Perfectionist",
      desire: "To be good, virtuous, and 'in order' – to be morally correct and integrated.",
      dynamic: "Seeks perfection to avoid guilt and shame"
    },
    "Type 2": {
      icon: "💞",
      name: "The Helper",
      desire: "To feel loved – to be wanted and appreciated for who one is.",
      dynamic: "Gives to be loved, but may lose oneself"
    },
    "Type 3": {
      icon: "🏆",
      name: "The Achiever",
      desire: "To feel valuable – to be successful and recognized.",
      dynamic: "Performs to feel valuable, but loses authenticity"
    },
    "Type 4": {
      icon: "🎭",
      name: "The Individualist",
      desire: "To find oneself and one's significance – to be unique and authentic.",
      dynamic: "Seeks distinctiveness, but often feels misunderstood"
    },
    "Type 5": {
      icon: "🧠",
      name: "The Investigator",
      desire: "To be competent and capable – to understand and master the world.",
      dynamic: "Withdraws to maintain control and knowledge"
    },
    "Type 6": {
      icon: "🛡️",
      name: "The Loyalist",
      desire: "To feel secure and supported – to have safety and guidance.",
      dynamic: "Seeks security, but often creates insecurity"
    },
    "Type 7": {
      icon: "🎉",
      name: "The Enthusiast",
      desire: "To be content and happy – to experience joy and avoid pain.",
      dynamic: "Avoids pain through distraction and superficiality"
    },
    "Type 8": {
      icon: "💪",
      name: "The Challenger",
      desire: "To be independent and in control – to protect oneself and one's own.",
      dynamic: "Dominates to avoid vulnerability"
    },
    "Type 9": {
      icon: "☮️",
      name: "The Peacemaker",
      desire: "To have inner stability and peace of mind – to feel connected.",
      dynamic: "Avoids conflict, but loses oneself"
    }
  }
};

export const getTriadForType = (type: string): keyof typeof triadInfo.triads | null => {
  if (["Type 8", "Type 9", "Type 1"].includes(type)) return "body";
  if (["Type 2", "Type 3", "Type 4"].includes(type)) return "heart";
  if (["Type 5", "Type 6", "Type 7"].includes(type)) return "head";
  return null;
};
