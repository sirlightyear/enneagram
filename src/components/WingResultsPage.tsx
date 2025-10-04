import React from 'react';
import { ArrowLeft, Award, BarChart3 } from 'lucide-react';
import { WingResult } from '../types/wings';

interface WingResultsPageProps {
  wingResult: WingResult;
  wingTestData: any;
  primaryType: string;
  onBack: () => void;
  onFinish: () => void;
}

const WingResultsPage: React.FC<WingResultsPageProps> = ({ 
  wingResult, 
  wingTestData, 
  primaryType, 
  onBack, 
  onFinish 
}) => {
  const getResultDescription = () => {
    if (wingResult.isBalanced) {
      return wingTestData.descriptions.balanced;
    }
    return wingTestData.descriptions[wingResult.primaryWing];
  };

  const resultDescription = getResultDescription();

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Kruso Logo */}
        <div className="flex justify-end mb-2">
          <img src="/KrusoPeople4.png" alt="Kruso Compass" className="w-15 h-auto" />
        </div>

        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-indigo-100 rounded-full mb-4">
            <Award className="w-8 h-8 text-indigo-600" />
          </div>
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Dine Enneagram-vinger</h1>
          <p className="text-gray-600">En dybere forståelse af din {primaryType}</p>
        </div>

        {/* Main Result */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold text-indigo-600 mb-4">
              {resultDescription.title}
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              {resultDescription.description}
            </p>
          </div>
        </div>

        {/* Characteristics */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h3 className="text-xl font-semibold text-gray-800 mb-6">Karakteristika for din type</h3>
          <div className="grid gap-3">
            {resultDescription.characteristics.map((characteristic, index) => (
              <div key={index} className="flex items-start">
                <span className="w-2 h-2 bg-indigo-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span className="text-gray-700">{characteristic}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Score Breakdown */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <div className="flex items-center mb-6">
            <BarChart3 className="w-6 h-6 text-indigo-600 mr-2" />
            <h3 className="text-xl font-semibold text-gray-800">Dine vinge-scores</h3>
          </div>
          
          <div className="space-y-4">
            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="font-medium text-gray-800">
                  {primaryType}{wingResult.primaryWing}
                </span>
                <span className="text-indigo-600 font-semibold">
                  {wingResult.primaryScore} svar
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div
                  className="bg-indigo-600 h-3 rounded-full transition-all duration-500"
                  style={{ 
                    width: `${(wingResult.primaryScore / (wingResult.primaryScore + wingResult.secondaryScore)) * 100}%` 
                  }}
                />
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="font-medium text-gray-800">
                  {primaryType}{wingResult.secondaryWing}
                </span>
                <span className="text-gray-600 font-semibold">
                  {wingResult.secondaryScore} svar
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div
                  className="bg-gray-400 h-3 rounded-full transition-all duration-500"
                  style={{ 
                    width: `${(wingResult.secondaryScore / (wingResult.primaryScore + wingResult.secondaryScore)) * 100}%` 
                  }}
                />
              </div>
            </div>
          </div>

          {wingResult.isBalanced && (
            <div className="mt-4 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
              <p className="text-yellow-800 text-sm">
                <strong>Balancerede vinger:</strong> Dine scores er meget tætte, hvilket betyder 
                at du bruger begge vinger fleksibelt afhængigt af situationen.
              </p>
            </div>
          )}
        </div>

        {/* Action buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={onBack}
            className="inline-flex items-center justify-center px-6 py-3 bg-gray-200 text-gray-700 font-medium rounded-lg hover:bg-gray-300 transition-colors duration-200"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Tilbage til hovedresultater
          </button>
          
          <button
            onClick={onFinish}
            className="inline-flex items-center justify-center px-8 py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition-colors duration-200"
          >
            Afslut test
          </button>
        </div>
      </div>
    </div>
  );
};

export default WingResultsPage;