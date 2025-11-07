import LanguageSelector from './LanguageSelector';
import React, { useState } from 'react';
import { Brain, Users, Heart, ArrowRight, ChevronDown, ChevronUp, CheckCircle2 } from 'lucide-react';

interface IntroPageProps {
  language: string;
  onLanguageChange: (language: string) => void;
  onStart: () => void;
}

const IntroPage: React.FC<IntroPageProps> = ({ onStart, language, onLanguageChange }) => {
  const [showKrusoDetails, setShowKrusoDetails] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-cyan-50 to-purple-100">
      <div className="py-6 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Language Selector */}
          <div className="flex justify-end mb-4">
            <LanguageSelector currentLanguage={language} onLanguageChange={onLanguageChange} />
          </div>

          {/* Kruso Logo - discretely placed */}
          <div className="flex justify-center">         
            <img src="/KrusoPeople4.png" alt="Kruso Compass" className="w-15 h-auto" />
          </div>
          
          {/* Hero Section */}
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Enneagram Personality Test
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-6">
              Understand yourself and your colleagues better
            </p>
            <div className="flex flex-wrap items-center justify-center gap-2 text-sm md:text-base text-gray-600">
              <CheckCircle2 className="w-5 h-5 text-green-500" />
              <span>10-15 Minutes</span>
              <span className="text-gray-400">•</span>
              <CheckCircle2 className="w-5 h-5 text-green-500" />
              <span>9 Personality Types</span>
              <span className="text-gray-400">•</span>
              <CheckCircle2 className="w-5 h-5 text-green-500" />
              <span>Detailed Analysis</span>
            </div>
          </div>

          {/* Kruso intro - Collapsible */}
          <div className="bg-white rounded-xl shadow-lg mb-4 overflow-hidden">
            <button
              onClick={() => setShowKrusoDetails(!showKrusoDetails)}
              className="w-full flex items-center justify-between p-6 hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-center">
                <Users className="w-6 h-6 text-indigo-600 mr-3" />
                <h2 className="text-xl font-bold text-gray-800">Why do we use the Enneagram at Kruso?</h2>
              </div>
              {showKrusoDetails ? (
                <ChevronUp className="w-5 h-5 text-gray-400" />
              ) : (
                <ChevronDown className="w-5 h-5 text-gray-400" />
              )}
            </button>

            {showKrusoDetails && (
              <div className="px-6 pb-6 text-gray-700 space-y-4 border-t border-gray-100 pt-4">
                <p>
                  At Kruso, we pride ourselves on excellent collaboration – both internally among colleagues and in our
                  partnerships with clients. We know that when we understand each other better, it binds us together as
                  a stronger team.
                </p>

                <p>
                  When we know each other's personalities, work styles, and motivations, we don't just
                  work together more efficiently – we also create an environment characterized by respect, empathy, and mutual support.
                  This makes us better at solving complex tasks, navigating challenges, and delivering exceptional
                  results for our clients.
                </p>

                <div className="flex items-center bg-indigo-50 p-4 rounded-lg">
                  <Heart className="w-6 h-6 text-indigo-600 mr-3 flex-shrink-0" />
                  <p className="text-indigo-800 font-medium mb-0">
                    This personality test is a tool to understand yourself and your colleagues better,
                    so that we can collectively achieve even better results.
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Enneagram intro - Always visible */}
          <div className="bg-white rounded-xl shadow-lg mb-6 p-6">
            <div className="flex items-center mb-4">
              <Brain className="w-6 h-6 text-indigo-600 mr-3" />
              <h2 className="text-xl font-bold text-gray-800">About the Enneagram</h2>
            </div>
            <p className="text-gray-700 mb-4">
              The Enneagram is a powerful system for understanding personality and motivation. It describes
              nine different personality types, each with their unique way of viewing the world, their core drive,
              and their challenges.
            </p>

            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded">
              <h3 className="font-semibold text-gray-800 mb-3 flex items-center">
                <CheckCircle2 className="w-5 h-5 text-yellow-600 mr-2" />
                How to take the test:
              </h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-yellow-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span><strong>Read and answer the test yourself</strong> – without asking others for advice</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-yellow-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span><strong>Don't overthink it</strong> – listen to your immediate gut feeling</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-yellow-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span><strong>Answer based on who you ARE</strong> – not who you wish to be. There are no wrong answers</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-yellow-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span><strong>Consider your life as a whole</strong> – not just your work context. You are both your work and private life</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-yellow-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span><strong>Be honest</strong> and think about how you are/have been for most of your life – even if you've been through self-development</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-yellow-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span><strong>Choose a time</strong> when you can complete the test without distraction</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="text-center bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Ready to start?</h3>
            <p className="text-gray-600 mb-6">Discover your personality type in 10-15 minutes</p>
            <button
              onClick={onStart}
              className="inline-flex items-center px-8 py-4 bg-indigo-600 text-white font-semibold text-lg rounded-lg hover:bg-indigo-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Start the Test
              <ArrowRight className="w-6 h-6 ml-2" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroPage;
