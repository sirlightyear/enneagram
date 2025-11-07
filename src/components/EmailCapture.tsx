import React, { useState } from 'react';
import { Mail, Send, AlertCircle } from 'lucide-react';
import { TestResult } from '../types/enneagram';
import TestLogger from '../utils/logger';
import { enneagramQuestions } from '../data/questions';

interface EmailCaptureProps {
  results: TestResult[];
  onEmailSubmitted: (email: string) => void;
  responses?: any[];
  wingResults?: any;
  wingResponses?: any[];
}

const EmailCapture: React.FC<EmailCaptureProps> = ({ 
  results, 
  onEmailSubmitted, 
  responses = [], 
  wingResults, 
  wingResponses = [] 
}) => {
  const [email, setEmail] = useState('');
  const [isValid, setIsValid] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
    setIsValid(newEmail === '' || validateEmail(newEmail));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateEmail(email)) {
      setIsValid(false);
      return;
    }

    setIsSubmitting(true);
    
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Log test completion med alle detaljer
    const logger = TestLogger.getInstance();
    await logger.logTestCompletion(
      email,
      results,
      responses,
      enneagramQuestions,
      wingResults,
      wingResponses,
      wingResults?.testData?.questions
    );
    
    onEmailSubmitted(email);
  };

  const topResult = results[0];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-cyan-50 to-purple-100 py-8 px-4">

      <div className="max-w-2xl mx-auto">
        {/* Kruso Logo */}
        <div className="flex justify-end mb-2">
          <img src="/Kruso.svg" alt="Kruso" className="h-6 opacity-60" />
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-indigo-100 rounded-full mb-4">
              <Mail className="w-8 h-8 text-indigo-600" />
            </div>
            <h1 className="text-2xl font-bold text-gray-800 mb-2">Test gennemført!</h1>
            <p className="text-gray-600">
              Din primære type er <strong>{topResult.type}</strong> med {topResult.percentage}% match
            </p>
          </div>

          <div className="bg-indigo-50 rounded-lg p-6 mb-8">
            <h3 className="font-semibold text-indigo-800 mb-3">Få dine resultater på email</h3>
            <p className="text-indigo-700 text-sm mb-4">
              Vi sender dig en detaljeret rapport med alle dine resultater, beskrivelser af alle 
              personlighedstyper og tips til hvordan du kan bruge denne viden i dit arbejdsliv.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Din email-adresse
              </label>
              <div className="relative">
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={handleEmailChange}
                  placeholder="din@email.dk"
                  className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-colors ${
                    !isValid 
                      ? 'border-red-300 focus:border-red-500' 
                      : 'border-gray-300 focus:border-indigo-500'
                  }`}
                  required
                />
                {!isValid && (
                  <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                    <AlertCircle className="w-5 h-5 text-red-500" />
                  </div>
                )}
              </div>
              {!isValid && (
                <p className="mt-2 text-sm text-red-600">
                  Indtast venligst en gyldig email-adresse
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={!email || !isValid || isSubmitting}
              className={`w-full flex items-center justify-center px-6 py-3 rounded-lg font-medium transition-colors ${
                email && isValid && !isSubmitting
                  ? 'bg-indigo-600 text-white hover:bg-indigo-700'
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              }`}
            >
              {isSubmitting ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                  Sender...
                </>
              ) : (
                <>
                  <Send className="w-4 h-4 mr-2" />
                  Send resultater og se detaljeret rapport
                </>
              )}
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-xs text-gray-500">
              Vi respekterer dit privatliv og sender kun relevante informationer om personlighedstyper
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmailCapture;