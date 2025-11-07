import React, { useState } from 'react';
import { ArrowLeft, Heart, Brain, Users, AlertTriangle, Target, MessageCircle, Lightbulb, TrendingUp, Shield, Zap, ChevronDown, ChevronUp } from 'lucide-react';
import { TypeDetail } from '../data/typeDetails_en';
import { WingResult } from '../types/wings';
import { type1WingQuestions } from '../data/wingQuestions/wingQuestions1';
import { type2WingQuestions } from '../data/wingQuestions/wingQuestions2';
import { type3WingQuestions } from '../data/wingQuestions/wingQuestions3';
import { type4WingQuestions } from '../data/wingQuestions/wingQuestions4';
import { type5WingQuestions } from '../data/wingQuestions/wingQuestions5';
import { type6WingQuestions } from '../data/wingQuestions/wingQuestions6';
import { type7WingQuestions } from '../data/wingQuestions/wingQuestions7';
import { type8WingQuestions } from '../data/wingQuestions/wingQuestions8';
import { type9WingQuestions } from '../data/wingQuestions/wingQuestions9';

interface TypeDetailPageProps {
  typeDetail: TypeDetail;
  onBack: () => void;
  onStartWingTest?: () => void;
  wingResult?: {
    result: WingResult;
    testData: any;
  } | null;
}

const TypeDetailPage: React.FC<TypeDetailPageProps> = ({ typeDetail, onBack, onStartWingTest, wingResult }) => {
  const [showExamples, setShowExamples] = useState(false);

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-100 via-amber-50 to-fuchsia-200 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Kruso Logo */}
        <div className="flex justify-end mb-2">
<img src="/KrusoPeople4.png" alt="Kruso Compass" className="w-15 h-auto" />
{/*<img src="/Kruso.svg" alt="Kruso" className="h-6 opacity-60" />*/}
        </div>

        {/* Back button */}
        <button
          onClick={onBack}
          className="inline-flex items-center text-indigo-600 hover:text-indigo-800 mb-6"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          **Back to Results**
        </button>

        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            {typeDetail.type}: {typeDetail.title}
          </h1>
          <p className="text-gray-600 text-lg">Detailed Description of the Personality Type</p>
        </div>

        {/* Verdenssyn (Worldview) */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-6">
          <div className="flex items-center mb-4">
            <Brain className="w-6 h-6 text-indigo-600 mr-3" />
            <h2 className="text-xl font-semibold text-gray-800">Worldview</h2>
          </div>
          <p className="text-gray-700 leading-relaxed">{typeDetail.worldview}</p>
        </div>

        {/* Grundlæggende information (Basic Information) */}
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center mb-4">
              <Target className="w-5 h-5 text-red-600 mr-2" />
              <h3 className="text-lg font-semibold text-gray-800">Basic Fear</h3>
            </div>
            <p className="text-gray-700">{typeDetail.basicFear}</p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center mb-4">
              <Heart className="w-5 h-5 text-green-600 mr-2" />
              <h3 className="text-lg font-semibold text-gray-800">Basic Desire</h3>
            </div>
            <p className="text-gray-700">{typeDetail.basicDesire}</p>
          </div>
        </div>

        {/* Fokus og indre dialog (Focus and Inner Dialogue) */}
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center mb-4">
              <Zap className="w-5 h-5 text-yellow-600 mr-2" />
              <h3 className="text-lg font-semibold text-gray-800">Focus</h3>
            </div>
            <p className="text-gray-700">{typeDetail.focus}</p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center mb-4">
              <MessageCircle className="w-5 h-5 text-blue-600 mr-2" />
              <h3 className="text-lg font-semibold text-gray-800">Inner Dialogue</h3>
            </div>
            <p className="text-gray-700 italic">"{typeDetail.innerDialogue}"</p>
          </div>
        </div>

        {/* Kvaliteter og styrker (Qualities and Strengths) */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-6">
          <div className="flex items-center mb-4">
            <TrendingUp className="w-6 h-6 text-green-600 mr-3" />
            <h2 className="text-xl font-semibold text-gray-800">Qualities and Strengths</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium text-gray-800 mb-3">Key Qualities</h4>
              <div className="flex flex-wrap gap-2">
                {typeDetail.qualities.map((quality, index) => (
                  <span
                    key={index}
                    className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm"
                  >
                    {quality}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-medium text-gray-800 mb-3">Personal Strengths</h4>
              <ul className="space-y-1">
                {typeDetail.personalStrengths.map((strength, index) => (
                  <li key={index} className="text-gray-700 text-sm flex items-start">
                    <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                    {strength}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Udfordringer (Challenges) */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-6">
          <div className="flex items-center mb-4">
            <AlertTriangle className="w-6 h-6 text-orange-600 mr-3" />
            <h2 className="text-xl font-semibold text-gray-800">Challenges and Blind Spots</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium text-gray-800 mb-3">Blind Spots</h4>
              <ul className="space-y-2">
                {typeDetail.blindSpots.map((spot, index) => (
                  <li key={index} className="text-gray-700 text-sm flex items-start">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                    {spot}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-gray-800 mb-3">Passion/Vice</h4>
              <p className="text-gray-700 text-sm">{typeDetail.passion}</p>
            </div>
          </div>
        </div>

        {/* Motivation og læring (Motivation and Learning) */}
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center mb-4">
              <Lightbulb className="w-5 h-5 text-yellow-600 mr-2" />
              <h3 className="text-lg font-semibold text-gray-800">Motivated by</h3>
            </div>
            <p className="text-gray-700">{typeDetail.motivatedBy}</p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center mb-4">
              <Brain className="w-5 h-5 text-purple-600 mr-2" />
              <h3 className="text-lg font-semibold text-gray-800">Learning</h3>
            </div>
            <p className="text-gray-700">{typeDetail.learning}</p>
          </div>
        </div>

        {/* Relationer (Relationships) */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-6">
          <div className="flex items-center mb-6">
            <Users className="w-6 h-6 text-blue-600 mr-3" />
            <h2 className="text-xl font-semibold text-gray-800">Relationships and Collaboration</h2>
          </div>
          
          <div className="space-y-6">
            <div>
              <h4 className="font-medium text-gray-800 mb-2">General Approach to Relationships</h4>
              <p className="text-gray-700 text-sm">{typeDetail.relationships.generalApproach}</p>
            </div>
            
            <div>
              <h4 className="font-medium text-gray-800 mb-2">Approach to Work</h4>
              <p className="text-gray-700 text-sm">{typeDetail.relationships.workApproach}</p>
            </div>
            
            <div>
              <h4 className="font-medium text-gray-800 mb-2">As a Team Player</h4>
              <p className="text-gray-700 text-sm">{typeDetail.relationships.teamPlayer}</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-medium text-gray-800 mb-2">Conflict Points</h4>
                <ul className="space-y-1">
                  {typeDetail.relationships.conflictPoints.map((point, index) => (
                    <li key={index} className="text-gray-700 text-sm flex items-start">
                      <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h4 className="font-medium text-gray-800 mb-2">Conflict Management</h4>
                <p className="text-gray-700 text-sm">{typeDetail.relationships.conflictHandling}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Hvis du er denne type / Hvis du arbejder med denne type (If You Are This Type / If You Work With This Type) */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-indigo-50 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-indigo-800 mb-4">
              If you are a {typeDetail.type}
            </h3>
            {wingResult ? (
              <div>
                <div className="mb-4 p-3 bg-white rounded-lg border border-indigo-200">
                  <h4 className="font-semibold text-indigo-800 mb-2">
                    With your {wingResult.testData.descriptions[wingResult.result.isBalanced ? 'balanced' : wingResult.result.primaryWing]?.title.split(' - ')[1]} profile (that is who you are):
                  </h4>
                  <p className="text-indigo-700 text-sm mb-3">
                    {wingResult.testData.descriptions[wingResult.result.isBalanced ? 'balanced' : wingResult.result.primaryWing]?.description}
                  </p>
                </div>
                <ul className="space-y-2">
                  {getWingSpecificAdvice(typeDetail.type, wingResult.result.isBalanced ? 'balanced' : wingResult.result.primaryWing, 'self').map((tip, index) => (
                    <li key={index} className="text-indigo-700 text-sm flex items-start">
                      <span className="w-2 h-2 bg-indigo-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                      {tip}
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              <ul className="space-y-2">
                {typeDetail.ifYouAreThisType.map((tip, index) => (
                  <li key={index} className="text-indigo-700 text-sm flex items-start">
                    <span className="w-2 h-2 bg-indigo-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                    {tip}
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className="bg-green-50 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-green-800 mb-4">
              If you work with a {typeDetail.type}
            </h3>
            {wingResult ? (
              <div>
                <div className="mb-4 p-3 bg-white rounded-lg border border-green-200">
                  <h4 className="font-semibold text-green-800 mb-2">
                    When they have the {wingResult.testData.descriptions[wingResult.result.isBalanced ? 'balanced' : wingResult.result.primaryWing]?.title.split(' - ')[1]} profile (this is how they are):
                  </h4>
                  <p className="text-green-700 text-sm mb-3">
                    This person combines the {typeDetail.type}'s core traits with {getWingInfluenceDescription(typeDetail.type, wingResult.result.isBalanced ? 'balanced' : wingResult.result.primaryWing)}.
                  </p>
                </div>
                <ul className="space-y-2">
                  {getWingSpecificAdvice(typeDetail.type, wingResult.result.isBalanced ? 'balanced' : wingResult.result.primaryWing, 'colleague').map((tip, index) => (
                    <li key={index} className="text-green-700 text-sm flex items-start">
                      <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                      {tip}
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              <ul className="space-y-2">
                {typeDetail.ifYouWorkWithThisType.map((tip, index) => (
                  <li key={index} className="text-green-700 text-sm flex items-start">
                    <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                    {tip}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        {/* Under stress og når tryg (Under Stress and When Secure) */}
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div className="bg-red-50 rounded-xl p-6">
            <div className="flex items-center mb-4">
              <AlertTriangle className="w-5 h-5 text-red-600 mr-2" />
              <h3 className="text-lg font-semibold text-red-800">Under Stress</h3>
            </div>
            <p className="text-red-700 text-sm mb-2">
              Moves towards **{typeDetail.underStress.movesToType}**
            </p>
            <p className="text-red-700 text-sm">{typeDetail.underStress.description}</p>
          </div>

          <div className="bg-green-50 rounded-xl p-6">
            <div className="flex items-center mb-4">
              <Shield className="w-5 h-5 text-green-600 mr-2" />
              <h3 className="text-lg font-semibold text-green-800">When Secure</h3>
            </div>
            <p className="text-green-700 text-sm mb-2">
              Moves towards **{typeDetail.whenSecure.movesToType}**
            </p>
            <p className="text-green-700 text-sm">{typeDetail.whenSecure.description}</p>
          </div>
        </div>

        {/* Udviklingsudfordring (Development Challenge) */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <div className="flex items-center mb-4">
            <TrendingUp className="w-6 h-6 text-purple-600 mr-3" />
            <h2 className="text-xl font-semibold text-gray-800">Development Challenge</h2>
          </div>
          <p className="text-gray-700">{typeDetail.relationships.developmentChallenge}</p>
        </div>

        {/* Wing test invitation if no wing results */}
        {!wingResult && onStartWingTest && (
          <div className="bg-blue-50 rounded-xl shadow-lg p-8 mb-8 border border-blue-200">
            <div className="text-center mb-6">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                <span className="text-2xl">🪶</span>
              </div>
              <h3 className="text-xl font-semibold text-blue-800 mb-2">
                Do you want to know even more about {typeDetail.type}?
              </h3>
              <p className="text-blue-700">
                If you think you are this type, you can explore your Enneagram wings for an even more precise personality profile
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-6 mb-6 border border-blue-200">
              <button
                onClick={() => setShowExamples(!showExamples)}
                className="w-full flex items-center justify-between mb-3 text-left"
              >
                <h4 className="font-semibold text-blue-800">🪶 What are Enneagram Wings?</h4>
                {showExamples ? (
                  <ChevronUp className="w-5 h-5 text-blue-600" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-blue-600" />
                )}
              </button>

              {showExamples && (
                <>
                  <p className="text-blue-700 text-sm mb-4">
                    {typeDetail.type}, like the other types, has two "neighbors" on the Enneagram circle, called **Wings**.
                    These wings blend with the core type, creating a more nuanced and precise description of the type's personality. If you suspect you might be a {typeDetail.type}, you can answer 10 specific questions for this type.
                  </p>
                  <p className="text-blue-700 text-sm mb-4">
                    {getWingExplanationForType(typeDetail.type)}
                  </p>
                  <div className="bg-blue-50 rounded-lg p-4">
                    <h5 className="font-semibold text-blue-800 mb-2">What can you expect?</h5>
                    <ul className="space-y-1 text-sm text-blue-700">
                      <li>• 10 specific questions for {typeDetail.type} that compare how the type uses the two wings</li>
                      <li>• A detailed description of the dominant wing</li>
                      <li>• Understanding of how the wings nuance the {typeDetail.type}'s personality</li>
                      <li>• Only takes 3-5 minutes to complete</li>
                    </ul>
                  </div>
                </>
              )}
            </div>
            
            <div className="text-center">
              <button
                onClick={onStartWingTest}
                className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white font-semibold text-lg rounded-lg hover:bg-blue-700 transition-colors duration-200 shadow-lg hover:shadow-xl"
              >
                Yes, discover the Enneagram wings for {typeDetail.type}!
                <span className="ml-2">✨</span>
              </button>
            </div>
          </div>
        )}

        {/* Back button */}
        <div className="text-center">
          <button
            onClick={onBack}
            className="inline-flex items-center px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-colors duration-200"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Results
          </button>
        </div>
      </div>
    </div>
  );
};

// Helper function to get wing-specific advice
const getWingSpecificAdvice = (type: string, wing: string, perspective: 'self' | 'colleague'): string[] => {
  const advice: Record<string, Record<string, Record<string, string[]>>> = {
    'Type 1': {
      'w9': {
        'self': [
          'Use your diplomatic approach to create positive change without creating unnecessary conflict',
          'Remember that your calm, methodical style is a strength - you don\'t need to be aggressive to be effective',
          'Set boundaries on how much you will compromise your principles to avoid conflict',
          'Practice expressing your standards in a way that invites collaboration',
          'Take your time with decisions, but avoid procrastination when action is necessary'
        ],
        'colleague': [
          'Appreciate their diplomatic approach to improvements - they create change without drama',
          'Give them time to think about decisions instead of pushing them for quick answers',
          'Acknowledge their ability to find compromises that satisfy all parties',
          'Be patient with their methodical working style - the quality is worth it',
          'Encourage them to share their views, even when they disagree'
        ]
      },
      'w2': {
        'self': [
          'Use your natural helpfulness to make improvements more acceptable to others',
          'Remember to balance your care for others with your own needs for perfection',
          'Learn to give constructive feedback in a way that feels supportive rather than critical',
          'Acknowledge that your motivation to help comes from a good place, but set boundaries',
          'Use your empathy to understand why people make mistakes before correcting them'
        ],
        'colleague': [
          'Appreciate their desire to help you improve your work',
          'Be open to their guidance - they genuinely want to see you succeed',
          'Acknowledge their efforts and thank them for their help and support',
          'Understand that their criticism comes from a place of care, not attack',
          'Give them opportunities to be mentors and teachers - it energizes them'
        ]
      },
      'balanced': {
        'self': [
          'Learn to read situations and choose between a diplomatic and a direct approach',
          'Use your flexibility as a strength - you can adapt to different needs',
          'Be mindful of being consistent in your reactions so others can understand you',
          'Balance your need to work alone with the value of teamwork',
          'Accept that different situations require different approaches to perfection'
        ],
        'colleague': [
          'Understand that they may react differently in different situations - it is not inconsistency',
          'Appreciate their ability to adapt their approach according to what the situation requires',
          'Give them space for both independent work and team collaboration',
          'Be patient when they need time to choose the right strategy',
          'Acknowledge both their diplomatic and their more direct contributions'
        ]
      }
    }
    // Add more types as needed...
  };
  
  return advice[type]?.[wing]?.[perspective] || [];
};

// Helper function to describe wing influence
const getWingInfluenceDescription = (type: string, wing: string): string => {
  const descriptions: Record<string, Record<string, string>> = {
    'Type 1': {
      'w9': 'a more diplomatic and peaceful approach to perfection',
      'w2': 'a more helpful and relationship-oriented approach to improvements',
      'balanced': 'a flexible approach that shifts between diplomacy and helpfulness'
    }
    // Add more types as needed...
  };
  
  return descriptions[type]?.[wing] || 'their unique wing combination';
};

// Helper function to explain wings for each type
const getWingExplanationForType = (type: string): string => {
  const explanations: Record<string, string> = {
    'Type 1': 'As a Perfectionist, you can either be more diplomatic and peaceful (influenced by Type 9) or more helpful and relationship-oriented (influenced by Type 2).',
    'Type 2': 'As a Helper, you can either be more principled and structured (influenced by Type 1) or more ambitious and achievement-oriented (influenced by Type 3).',
    'Type 3': 'As an Achiever, you can either be more helpful and charming (influenced by Type 2) or more creative and individualistic (influenced by Type 4).',
    'Type 4': 'As an Individualist, you can either be more ambitious and outgoing (influenced by Type 3) or more withdrawn and analytical (influenced by Type 5).',
    'Type 5': 'As an Investigator, you can either be more creative and emotional (influenced by Type 4) or more loyal and security-oriented (influenced by Type 6).',
    'Type 6': 'As a Loyalist, you can either be more analytical and withdrawn (influenced by Type 5) or more optimistic and adventurous (influenced by Type 7).',
    'Type 7': 'As an Enthusiast, you can either be more loyal and responsible (influenced by Type 6) or more powerful and assertive (influenced by Type 8).',
    'Type 8': 'As a Challenger, you can either be more energetic and optimistic (influenced by Type 7) or more peaceful and diplomatic (influenced by Type 9).',
    'Type 9': 'As a Peacemaker, you can either be more powerful and assertive (influenced by Type 8) or more principled and structured (influenced by Type 1).'
  };
  return explanations[type] || '';
};

export default TypeDetailPage;
