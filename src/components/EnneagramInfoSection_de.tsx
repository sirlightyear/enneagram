import React, { useState } from 'react';
import { ChevronDown, ChevronUp, BookOpen, TrendingUp, TrendingDown, AlertCircle, Heart } from 'lucide-react';
import { triadInfo, stressGrowthLines, getTriadForType, basicFearsInfo, basicDesiresInfo } from '../data/enneagramInfo';

interface EnneagramInfoSectionProps {
  primaryType: string;
}

const EnneagramInfoSection: React.FC<EnneagramInfoSectionProps> = ({ primaryType }) => {
  const [showBasicFear, setShowBasicFear] = useState(false);
  const [showBasicDesire, setShowBasicDesire] = useState(false);
  const [showTriads, setShowTriads] = useState(false);
  const [showStressGrowth, setShowStressGrowth] = useState(false);

  const userTriad = getTriadForType(primaryType);
  const stressGrowthInfo = stressGrowthLines.lines[primaryType as keyof typeof stressGrowthLines.lines];
  const userFearInfo = basicFearsInfo.fears[primaryType as keyof typeof basicFearsInfo.fears];
  const userDesireInfo = basicDesiresInfo.desires[primaryType as keyof typeof basicDesiresInfo.desires];

  return (
    <div className="space-y-6 mb-8">
      {/* Basic Fear Section */}
      {userFearInfo && (
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <button
            onClick={() => setShowBasicFear(!showBasicFear)}
            className="w-full p-6 flex items-center justify-between hover:bg-gray-50 transition-colors"
          >
            <div className="flex items-center">
              <AlertCircle className="w-6 h-6 text-red-600 mr-3" />
              <div className="text-left">
                <h3 className="text-xl font-semibold text-gray-800">
                  Deine Basisfurcht - Was treibt dich an?
                </h3>
                <p className="text-sm text-gray-600 mt-1">
                  Verstehe die tiefliegende Angst hinter deinem Typ
                </p>
              </div>
            </div>
            {showBasicFear ? (
              <ChevronUp className="w-6 h-6 text-gray-400" />
            ) : (
              <ChevronDown className="w-6 h-6 text-gray-400" />
            )}
          </button>

          {showBasicFear && (
            <div className="p-6 pt-0 border-t border-gray-100">
              <p className="text-gray-700 mb-4">{basicFearsInfo.description}</p>

              <div className="bg-red-50 rounded-lg p-6 border-2 border-red-200">
                <div className="flex items-start mb-4">
                  <span className="text-4xl mr-4">{userFearInfo.icon}</span>
                  <div>
                    <h4 className="text-lg font-semibold text-red-800 mb-2">
                      {userFearInfo.name}
                    </h4>
                    <p className="text-red-900 font-medium mb-3">
                      <strong>Basisfurcht:</strong> {userFearInfo.fear}
                    </p>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-4 border border-red-200">
                  <p className="text-gray-700 leading-relaxed">
                    {userFearInfo.description}
                  </p>
                </div>
              </div>

              <div className="mt-6 p-4 bg-gray-50 rounded-lg border border-gray-200">
                <p className="text-sm text-gray-600">
                  <strong>Quelle:</strong> {basicFearsInfo.source}
                </p>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Basic Desire Section */}
      {userDesireInfo && (
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <button
            onClick={() => setShowBasicDesire(!showBasicDesire)}
            className="w-full p-6 flex items-center justify-between hover:bg-gray-50 transition-colors"
          >
            <div className="flex items-center">
              <Heart className="w-6 h-6 text-pink-600 mr-3" />
              <div className="text-left">
                <h3 className="text-xl font-semibold text-gray-800">
                  Dein Basiswunsch - Wonach strebst du?
                </h3>
                <p className="text-sm text-gray-600 mt-1">
                  Verstehe das Verlangen, das dein Verhalten prägt
                </p>
              </div>
            </div>
            {showBasicDesire ? (
              <ChevronUp className="w-6 h-6 text-gray-400" />
            ) : (
              <ChevronDown className="w-6 h-6 text-gray-400" />
            )}
          </button>

          {showBasicDesire && (
            <div className="p-6 pt-0 border-t border-gray-100">
              <p className="text-gray-700 mb-4">{basicDesiresInfo.description}</p>

              <div className="bg-pink-50 rounded-lg p-6 border-2 border-pink-200 mb-6">
                <div className="flex items-start mb-4">
                  <span className="text-4xl mr-4">{userDesireInfo.icon}</span>
                  <div>
                    <h4 className="text-lg font-semibold text-pink-800 mb-2">
                      {userDesireInfo.name}
                    </h4>
                    <p className="text-pink-900 font-medium mb-3">
                      <strong>Basiswunsch:</strong> {userDesireInfo.desire}
                    </p>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-4 border border-pink-200">
                  <p className="text-gray-700">
                    <strong>Die Dynamik:</strong> {userDesireInfo.dynamic}
                  </p>
                </div>
              </div>

              <div className="bg-yellow-50 rounded-lg p-5 border-2 border-yellow-200">
                <h5 className="font-semibold text-yellow-800 mb-2 flex items-center">
                  <span className="mr-2">🌀</span>
                  Die Psychologische Falle
                </h5>
                <p className="text-yellow-800 text-sm">
                  {basicDesiresInfo.dynamicExplanation}
                </p>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Triader Section */}
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <button
          onClick={() => setShowTriads(!showTriads)}
          className="w-full p-6 flex items-center justify-between hover:bg-gray-50 transition-colors"
        >
          <div className="flex items-center">
            <BookOpen className="w-6 h-6 text-indigo-600 mr-3" />
            <div className="text-left">
              <h3 className="text-xl font-semibold text-gray-800">
                Verstehe die drei Triaden im Enneagramm
              </h3>
              <p className="text-sm text-gray-600 mt-1">
                {userTriad && `Du gehörst zur ${triadInfo.triads[userTriad].title}`}
              </p>
            </div>
          </div>
          {showTriads ? (
            <ChevronUp className="w-6 h-6 text-gray-400" />
          ) : (
            <ChevronDown className="w-6 h-6 text-gray-400" />
          )}
        </button>

        {showTriads && (
          <div className="p-6 pt-0 border-t border-gray-100">
            <p className="text-gray-700 mb-6">{triadInfo.description}</p>

            <div className="grid md:grid-cols-3 gap-4">
              {Object.entries(triadInfo.triads).map(([key, triad]) => {
                const isUserTriad = key === userTriad;
                return (
                  <div
                    key={key}
                    className={`rounded-lg p-5 border-2 ${
                      isUserTriad
                        ? 'border-indigo-500 bg-indigo-50'
                        : 'border-gray-200 bg-gray-50'
                    }`}
                  >
                    <div className="text-center mb-3">
                      <div className="text-3xl mb-2">{triad.icon}</div>
                      <h4 className="font-semibold text-gray-800 mb-1">
                        {triad.title}
                      </h4>
                      {isUserTriad && (
                        <span className="inline-block px-2 py-1 bg-indigo-600 text-white text-xs rounded-full font-semibold">
                          DEINE TRIADE
                        </span>
                      )}
                    </div>

                    <div className="text-sm text-gray-600 mb-3">
                      <strong>Typen:</strong> {triad.types.join(', ')}
                    </div>

                    <p className="text-sm text-gray-700 mb-3">{triad.description}</p>

                    <div className="space-y-2">
                      {triad.characteristics.map((char, idx) => (
                        <div key={idx} className="flex items-start text-sm">
                          <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full mt-2 mr-2 flex-shrink-0" />
                          <span className="text-gray-700">{char}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>

      {/* Stress and Growth Lines Section */}
      {stressGrowthInfo && (
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <button
            onClick={() => setShowStressGrowth(!showStressGrowth)}
            className="w-full p-6 flex items-center justify-between hover:bg-gray-50 transition-colors"
          >
            <div className="flex items-center">
              <div className="flex items-center mr-3">
                <TrendingDown className="w-5 h-5 text-red-500 mr-1" />
                <TrendingUp className="w-5 h-5 text-green-500" />
              </div>
              <div className="text-left">
                <h3 className="text-xl font-semibold text-gray-800">
                  Deine Stress- und Wachstumsrichtungen
                </h3>
                <p className="text-sm text-gray-600 mt-1">
                  Erfahre, wie du dich unter Druck und in Wohlbefinden entwickelst
                </p>
              </div>
            </div>
            {showStressGrowth ? (
              <ChevronUp className="w-6 h-6 text-gray-400" />
            ) : (
              <ChevronDown className="w-6 h-6 text-gray-400" />
            )}
          </button>

          {showStressGrowth && (
            <div className="p-6 pt-0 border-t border-gray-100">
              <p className="text-gray-700 mb-6">{stressGrowthLines.description}</p>

              <div className="grid md:grid-cols-2 gap-6">
                {/* Stress Direction */}
                <div className="bg-red-50 rounded-lg p-6 border-2 border-red-200">
                  <div className="flex items-center mb-4">
                    <TrendingDown className="w-6 h-6 text-red-600 mr-2" />
                    <h4 className="text-lg font-semibold text-red-800">
                      Unter Stress → {stressGrowthInfo.stress.movesTo}
                    </h4>
                  </div>

                  <p className="text-red-700 mb-4">
                    {stressGrowthInfo.stress.description}
                  </p>

                  <div className="bg-red-100 rounded-lg p-4">
                    <p className="text-sm font-semibold text-red-800 mb-2">
                      ⚠️ Warnung:
                    </p>
                    <p className="text-sm text-red-700">
                      {stressGrowthInfo.stress.warning}
                    </p>
                  </div>
                </div>

                {/* Growth Direction */}
                <div className="bg-green-50 rounded-lg p-6 border-2 border-green-200">
                  <div className="flex items-center mb-4">
                    <TrendingUp className="w-6 h-6 text-green-600 mr-2" />
                    <h4 className="text-lg font-semibold text-green-800">
                      Im Wachstum → {stressGrowthInfo.growth.movesTo}
                    </h4>
                  </div>

                  <p className="text-green-700 mb-4">
                    {stressGrowthInfo.growth.description}
                  </p>

                  <div className="bg-green-100 rounded-lg p-4">
                    <p className="text-sm font-semibold text-green-800 mb-2">
                      ✨ Chance:
                    </p>
                    <p className="text-sm text-green-700">
                      {stressGrowthInfo.growth.opportunity}
                    </p>
                  </div>
                </div>
              </div>

              {/* Visual Connection Diagram */}
              <div className="mt-6 p-6 bg-gray-50 rounded-lg">
                <h5 className="font-semibold text-gray-800 mb-3 text-center">
                  Deine Verbindungen
                </h5>
                <div className="flex items-center justify-center gap-4">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center border-2 border-red-300 mb-2">
                      <span className="font-bold text-red-700">
                        {stressGrowthInfo.stress.movesTo.replace('Type ', '')}
                      </span>
                    </div>
                    <span className="text-xs text-red-600 font-medium">Stress</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <div className="w-12 h-0.5 bg-red-300" />
                    <div className="text-center">
                      <div className="w-20 h-20 bg-indigo-600 rounded-full flex items-center justify-center border-4 border-indigo-300 mb-2">
                        <span className="font-bold text-white text-lg">
                          {primaryType.replace('Type ', '')}
                        </span>
                      </div>
                      <span className="text-xs text-indigo-600 font-bold">DU</span>
                    </div>
                    <div className="w-12 h-0.5 bg-green-300" />
                  </div>

                  <div className="text-center">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center border-2 border-green-300 mb-2">
                      <span className="font-bold text-green-700">
                        {stressGrowthInfo.growth.movesTo.replace('Type ', '')}
                      </span>
                    </div>
                    <span className="text-xs text-green-600 font-medium">Wachstum</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default EnneagramInfoSection;
