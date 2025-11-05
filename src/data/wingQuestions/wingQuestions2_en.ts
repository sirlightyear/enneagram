export const type2WingQuestions: WingTestData = {
  type: 'Type 2',
  wingA: 'w1',
  wingB: 'w3',
  questions: [
    {
      question: "When I help others:",
      optionA: {
        text: "I ensure I do it the right way – respecting rules, ethics, and what is best in the long term. It is important to me that the help is thorough and morally sound.",
        wing: "w1",
        description: "Uses Type 1's focus on correctness and principles in their helpfulness."
      },
      optionB: {
        text: "I adapt my help to what works best in the situation. The most important thing for me is that it creates results and makes a real difference for the other person.",
        wing: "w3",
        description: "Uses Type 3's pragmatic and result-oriented approach to helping."
      }
    },
    {
      question: "My motivation for helping comes from:",
      optionA: {
        text: "An inner desire to do what is right and be a good person. I feel responsible for acting ethically and helping in a way that is morally correct.",
        wing: "w1",
        description: "Type 1's principled approach to helpfulness – driven by ethics and responsibility."
      },
      optionB: {
        text: "A desire to be valued and acknowledged for my support. I feel motivated when my help is seen and appreciated by others.",
        wing: "w3",
        description: "Type 3's need for recognition and visibility in their helpfulness."
      }
    },
    {
      question: "When people do not accept my help:",
      optionA: {
        text: "I get irritated because I feel they are ignoring the right choice. It frustrates me when people won't do what is best for them.",
        wing: "w1",
        description: "Type 1's frustration over incorrect choices and lack of responsiveness to principles."
      },
      optionB: {
        text: "I feel rejected and unappreciated. It hurts when my effort is not acknowledged or accepted with gratitude.",
        wing: "w3",
        description: "Type 3's sensitivity to rejection and need to feel significant."
      }
    },
    {
      question: "My approach to solving others' problems:",
      optionA: {
        text: "I try to find the most correct and principled solution – something that is sustainable and ethically defensible.",
        wing: "w1",
        description: "Type 1's focus on the right answer and moral integrity in problem-solving."
      },
      optionB: {
        text: "I focus on what will work best for them here and now. I adapt the solution to their needs and situation.",
        wing: "w3",
        description: "Type 3's pragmatic and flexible approach to helping effectively."
      }
    },
    {
      question: "When I give advice:",
      optionA: {
        text: "I focus on what is right and wrong. I want to help people make ethically sound decisions.",
        wing: "w1",
        description: "Type 1's moral guidance and desire to promote the good and correct."
      },
      optionB: {
        text: "I focus on what will help them succeed. I want to see them flourish and achieve their goals.",
        wing: "w3",
        description: "Type 3's success-oriented advice that helps people perform and develop."
      }
    },
    {
      question: "My helpfulness manifests as:",
      optionA: {
        text: "Structured and organized support. I plan my help and ensure that everything is done thoroughly and correctly.",
        wing: "w1",
        description: "Type 1's systematic and orderly approach to helping others."
      },
      optionB: {
        text: "Energetic and motivating support. I bring enthusiasm and commitment into my help and inspire others to take action.",
        wing: "w3",
        description: "Type 3's inspiring and dynamic way of supporting others."
      }
    },
    {
      question: "When I see people doing things wrong:",
      optionA: {
        text: "I correct them and show the right way. I feel a responsibility to help them do better.",
        wing: "w1",
        description: "Type 1's corrective nature and need to promote what is right."
      },
      optionB: {
        text: "I help them find a solution that works for them. The most important thing is that they move forward and succeed.",
        wing: "w3",
        description: "Type 3's solution-oriented approach, where efficiency and momentum are the focus."
      }
    },
    {
      question: "My criticism of others is often about:",
      optionA: {
        text: "That they fail to meet the right standards. I want people to do their best and act responsibly.",
        wing: "w1",
        description: "Type 1's focus on ethics, quality, and accountability in their assessment of others."
      },
      optionB: {
        text: "That they fail to utilise their potential. I see what they could achieve and get frustrated when they don't seize the opportunity.",
        wing: "w3",
        description: "Type 3's focus on performance and development – and disappointment when it is not realised."
      }
    },
    {
      question: "When I organise help for others:",
      optionA: {
        text: "I ensure that everything is done correctly and thoroughly. I want to ensure that the help is responsible and well-considered.",
        wing: "w1",
        description: "Type 1's thoroughness and sense of order in their helpfulness."
      },
      optionB: {
        text: "I ensure that it looks good and works effectively. I want to create results and make a good impression.",
        wing: "w3",
        description: "Type 3's focus on image, efficiency, and visible success in their support."
      }
    },
    {
      question: "My biggest frustration is when:",
      optionA: {
        text: "People don't do things properly, even though I've helped them. It feels like my effort is wasted.",
        wing: "w1",
        description: "Type 1's frustration over lack of quality and respect for effort."
      },
      optionB: {
        text: "My help is not acknowledged or appreciated. I feel invisible, even though I've made a great effort.",
        wing: "w3",
        description: "Type 3's need for recognition and the feeling of being overlooked."
      }
    }
  ],
  descriptions: {
    w1: {
      title: "Type 2w1 - The Principled Helper",
      description: "You combine Type 2's helpful nature with Type 1's focus on doing things right. You help others in a structured and responsible way.",
      characteristics: [
        "helps others in the right and ethical way",
        "has high standards for how help should be provided",
        "feels responsible for guiding others correctly",
        "combines care with principled integrity",
        "gets frustrated when people don't do the right thing"
      ]
    },
    w3: {
      title: "Type 2w3 - The Ambitious Helper",
      description: "You combine Type 2's caring nature with Type 3's focus on success and recognition. You help others and want to be seen for your efforts.",
      characteristics: [
        "helps others with energy and enthusiasm",
        "desires recognition for your helpfulness",
        "adapts your help to what works best",
        "motivates others to reach their goals",
        "uses your helpfulness to create visible results"
      ]
    },
    balanced: {
      title: "Type 2 - Balanced Wings",
      description: "You flexibly use both Type 1's principled approach and Type 3's result-oriented methods in your helpfulness.",
      characteristics: [
        "adapts your helping style to the situation",
        "can be both a structured guide and an inspiring motivator",
        "balances ethics with effectiveness in your care",
        "shifts between correcting and inspiring",
        "combines principles with pragmatic action"
      ]
    }
  }
};
