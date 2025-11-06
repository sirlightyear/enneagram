import React from 'react';
import { ArrowRight, Info } from 'lucide-react';

interface WingTestIntroProps {
  primaryType: string;
  onStart: () => void;
  onSkip: () => void;
}

const WingTestIntro: React.FC<WingTestIntroProps> = ({ primaryType, onStart, onSkip }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50 py-8 px-4">
      <div className="max-w-3xl mx-auto">
        {/* Kruso Logo */}
        <div className="flex justify-end mb-2">
        <img src="/KrusoPeople4.png" alt="Kruso Compass" className="w-15 h-auto" />
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-indigo-100 rounded-full mb-4">
              <Info className="w-8 h-8 text-indigo-600" />
            </div>
            <h1 className="text-3xl font-bold text-gray-800 mb-2">Do you want to know more about your {primaryType}?</h1>
            <p className="text-gray-600 text-lg">Discover your Enneagram Wings for an even deeper understanding</p>
          </div>

          <div className="bg-indigo-50 rounded-lg p-6 mb-8">
            <h2 className="text-xl font-semibold text-indigo-800 mb-4">What are Enneagram Wings?</h2>
            <div className="space-y-4 text-indigo-700">
              <p>
                In the Enneagram, each type has two neighboring types – called **Wings**. Your wing is **not an extra type**
                that you also are, but a **nuance** that colors your core type. Most people have one dominant wing, but we have
                access to both wings.
              </p>
              <p>
                One wing may be more developed than the other, but with awareness and personal growth, we can integrate qualities
                from both sides. Therefore, it is not about 'finding your wing' as something fixed, but about **discovering how your wings
                influence your personality** – and how you can work with them.
              </p>
              
              <div className="bg-white rounded-lg p-4 border border-indigo-200">
                <h3 className="font-semibold text-indigo-800 mb-2">For your {primaryType}:</h3>
                <p className="text-sm mb-3">
                  {getWingExplanation(primaryType)}
                </p>
                <div className="grid md:grid-cols-2 gap-3 text-sm">
                  <div className="bg-indigo-50 p-3 rounded">
                    <strong>{getWingNames(primaryType).wingA}</strong>
                    <p className="text-xs mt-1">{getWingShortDescription(primaryType, 'A')}</p>
                  </div>
                  <div className="bg-indigo-50 p-3 rounded">
                    <strong>{getWingNames(primaryType).wingB}</strong>
                    <p className="text-xs mt-1">{getWingShortDescription(primaryType, 'B')}</p>
                  </div>
                </div>
              </div>
              
              <p>
                As a {primaryType}, you may be influenced by both neighboring types, but typically
                one wing will be more dominant than the other.
              </p>

              <div className="bg-white rounded-lg p-4 border border-indigo-200">
                <h3 className="font-semibold text-indigo-800 mb-2">What can you expect?</h3>
                <ul className="space-y-1 text-sm">
                  <li>• 10 questions comparing how you utilize your two wings</li>
                  <li>• A detailed description of your dominant wing</li>
                  <li>• Understanding of how the wings nuance your {primaryType} personality</li>
                  <li>• Takes only 3-5 minutes to complete</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={onStart}
              className="inline-flex items-center justify-center px-8 py-4 bg-indigo-600 text-white font-semibold text-lg rounded-lg hover:bg-indigo-700 transition-colors duration-200 shadow-lg hover:shadow-xl"
            >
              Yes, let's discover my wings!
              <ArrowRight className="w-6 h-6 ml-2" />
            </button>
            
            <button
              onClick={onSkip}
              className="inline-flex items-center justify-center px-8 py-4 bg-gray-200 text-gray-700 font-semibold text-lg rounded-lg hover:bg-gray-300 transition-colors duration-200"
            >
              No thanks, I'm done
            </button>
          </div>

          <p className="text-center text-gray-500 text-sm mt-6">
            You can always return and take the wing test later
          </p>
        </div>
      </div>
    </div>
  );
};

// Helper functions to explain wings for each type
const getWingExplanation = (type: string): string => {
  const explanations: Record<string, string> = {
    'Type 1': 'As a Perfectionist, you can be either more diplomatic and peaceful (influenced by Type 9) or more helpful and relationship-oriented (influenced by Type 2).',
    'Type 2': 'As a Helper, you can be either more principled and structured (influenced by Type 1) or more ambitious and achievement-oriented (influenced by Type 3).',
    'Type 3': 'As an Achiever, you can be either more helpful and charming (influenced by Type 2) or more creative and individualistic (influenced by Type 4).',
    'Type 4': 'As an Individualist, you can be either more ambitious and outgoing (influenced by Type 3) or more withdrawn and analytical (influenced by Type 5).',
    'Type 5': 'As an Investigator, you can be either more creative and emotional (influenced by Type 4) or more loyal and security-oriented (influenced by Type 6).',
    'Type 6': 'As a Loyalist, you can be either more analytical and withdrawn (influenced by Type 5) or more optimistic and adventurous (influenced by Type 7).',
    'Type 7': 'As an Enthusiast, you can be either more loyal and responsible (influenced by Type 6) or more powerful and assertive (influenced by Type 8).',
    'Type 8': 'As a Challenger, you can be either more energetic and optimistic (influenced by Type 7) or more peaceful and diplomatic (influenced by Type 9).',
    'Type 9': 'As a Peacemaker, you can be either more powerful and assertive (influenced by Type 8) or more principled and structured (influenced by Type 1).'
  };
  return explanations[type] || '';
};

const getWingNames = (type: string) => {
  const wings: Record<string, {wingA: string, wingB: string}> = {
    'Type 1': {wingA: 'Type 1w9 - The Idealistic Peacemaker', wingB: 'Type 1w2 - The Helpful Perfectionist'},
    'Type 2': {wingA: 'Type 2w1 - The Principled Helper', wingB: 'Type 2w3 - The Ambitious Helper'},
    'Type 3': {wingA: 'Type 3w2 - The Charming Performer', wingB: 'Type 3w4 - The Professional Individualist'},
    'Type 4': {wingA: 'Type 4w3 - The Aristocratic Individualist', wingB: 'Type 4w5 - The Bohemian Individualist'},
    'Type 5': {wingA: 'Type 5w4 - The Iconoclastic Thinker', wingB: 'Type 5w6 - The Problem-Solving Thinker'},
    'Type 6': {wingA: 'Type 6w5 - The Cautious Loyalist', wingB: 'Type 6w7 - The Buddy Loyalist'},
    'Type 7': {wingA: 'Type 7w6 - The Buddy Enthusiast', wingB: 'Type 7w8 - The Realistic Enthusiast'},
    'Type 8': {wingA: 'Type 8w7 - The Aggressive Enthusiast', wingB: 'Type 8w9 - The Bear-like Challenger'},
    'Type 9': {wingA: 'Type 9w8 - The Referee', wingB: 'Type 9w1 - The Dreamer'}
  };
  return wings[type] || {wingA: '', wingB: ''};
};

const getWingShortDescription = (type: string, wing: 'A' | 'B'): string => {
  const descriptions: Record<string, {A: string, B: string}> = {
    'Type 1': {A: 'More diplomatic and peaceful approach to perfection', B: 'More helpful and relationship-oriented perfectionist'},
    'Type 2': {A: 'Helper with high principles and structure', B: 'Helper with ambition and focus on success'},
    'Type 3': {A: 'Charming performer who helps others', B: 'Creative performer with a focus on authenticity'},
    'Type 4': {A: 'Outgoing individualist with ambitions', B: 'Withdrawn individualist with depth'},
    'Type 5': {A: 'Creative thinker with emotional depth', B: 'Practical thinker with a focus on security'},
    'Type 6': {A: 'Cautious loyalist with an analytical approach', B: 'Optimistic loyalist with a love for adventure'},
    'Type 7': {A: 'Responsible enthusiast with loyalty', B: 'Powerful enthusiast with assertiveness'},
    'Type 8': {A: 'Energetic challenger with optimism', B: 'Calm challenger with a diplomatic approach'},
    'Type 9': {A: 'Powerful peacemaker with assertiveness', B: 'Principled peacemaker with structure'}
  };
  return descriptions[type]?.[wing] || '';
};
export default WingTestIntro;
