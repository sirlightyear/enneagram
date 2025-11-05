import React, { useState } from 'react';
import { Brain, Users, Heart, ArrowRight, ChevronDown, ChevronUp, CheckCircle2 } from 'lucide-react';

interface IntroPageProps {
  onStart: () => void;
}

const IntroPage: React.FC<IntroPageProps> = ({ onStart }) => {
  const [showKrusoDetails, setShowKrusoDetails] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50">
      <div className="py-6 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Kruso Logo - diskret placeret (dezent platziert) */}
          <div className="flex justify-center">         
            <img src="/KrusoPeople4.png" alt="Kruso Kompass" className="w-15 h-auto" />
          </div>
          
          {/* Hero Section */}
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Enneagram Persönlichkeitstest
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-6">
              Verstehen Sie sich selbst und Ihre Kollegen besser
            </p>
            <div className="flex flex-wrap items-center justify-center gap-2 text-sm md:text-base text-gray-600">
              <CheckCircle2 className="w-5 h-5 text-green-500" />
              <span>10-15 Minuten</span>
              <span className="text-gray-400">•</span>
              <CheckCircle2 className="w-5 h-5 text-green-500" />
              <span>9 Persönlichkeitstypen</span>
              <span className="text-gray-400">•</span>
              <CheckCircle2 className="w-5 h-5 text-green-500" />
              <span>Detaillierte Analyse</span>
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
                <h2 className="text-xl font-bold text-gray-800">Warum verwenden wir das Enneagramm bei Kruso?</h2>
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
                  Bei Kruso legen wir großen Wert auf gute Zusammenarbeit – sowohl intern zwischen Kollegen
                  als auch in unseren Partnerschaften mit Kunden. Wir wissen, dass ein besseres gegenseitiges
                  Verständnis uns zu einem stärkeren Team zusammenschweißt.
                </p>

                <p>
                  Wenn wir die Persönlichkeiten, Arbeitsstile und Motivationen des anderen kennen, arbeiten
                  wir nicht nur effektiver zusammen – wir schaffen auch ein Umfeld, das von Respekt, Empathie
                  und gegenseitiger Unterstützung geprägt ist. Das macht uns besser darin, komplexe Aufgaben
                  zu lösen, Herausforderungen zu meistern und außergewöhnliche Ergebnisse für unsere Kunden
                  zu liefern.
                </p>

                <div className="flex items-center bg-indigo-50 p-4 rounded-lg">
                  <Heart className="w-6 h-6 text-indigo-600 mr-3 flex-shrink-0" />
                  <p className="text-indigo-800 font-medium mb-0">
                    Dieser Persönlichkeitstest ist ein Werkzeug, um sich selbst und seine Kollegen besser
                    zu verstehen, damit wir gemeinsam noch bessere Ergebnisse erzielen können.
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Enneagram intro - Always visible */}
          <div className="bg-white rounded-xl shadow-lg mb-6 p-6">
            <div className="flex items-center mb-4">
              <Brain className="w-6 h-6 text-indigo-600 mr-3" />
              <h2 className="text-xl font-bold text-gray-800">Über das Enneagramm</h2>
            </div>
            <p className="text-gray-700 mb-4">
              Das Enneagramm ist ein wirkungsvolles System zum Verständnis von Persönlichkeit und Motivation.
              Es beschreibt neun verschiedene Persönlichkeitstypen, jeder mit seiner einzigartigen Sicht
              auf die Welt, seinen Antrieben und seinen Herausforderungen.
            </p>

            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded">
              <h3 className="font-semibold text-gray-800 mb-3 flex items-center">
                <CheckCircle2 className="w-5 h-5 text-yellow-600 mr-2" />
                So nehmen Sie am Test teil:
              </h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-yellow-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span><strong>Lesen und beantworten Sie den Test selbst</strong> – ohne andere um Rat zu fragen</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-yellow-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span><strong>Überlegen Sie nicht zu lange</strong> – hören Sie auf Ihr unmittelbares Bauchgefühl</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-yellow-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span><strong>Antworten Sie, wie Sie SIND</strong> – nicht, wer Sie gerne sein möchten. Man kann nicht falsch antworten</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-yellow-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span><strong>Denken Sie an Ihr Leben als Ganzes</strong> – nicht nur an Ihren Arbeitskontext. Sie sind sowohl Ihr Arbeits- als auch Ihr Privatleben</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-yellow-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span><strong>Seien Sie ehrlich</strong> und denken Sie daran, wie Sie die meiste Zeit Ihres Lebens sind/waren – auch wenn Sie sich weiterentwickelt haben</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-yellow-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span><strong>Wählen Sie einen Zeitpunkt</strong>, an dem Sie den Test ungestört durchführen können</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="text-center bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Bereit zum Starten?</h3>
            <p className="text-gray-600 mb-6">Entdecken Sie Ihren Persönlichkeitstyp in 10-15 Minuten</p>
            <button
              onClick={onStart}
              className="inline-flex items-center px-8 py-4 bg-indigo-600 text-white font-semibold text-lg rounded-lg hover:bg-indigo-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Test starten
              <ArrowRight className="w-6 h-6 ml-2" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroPage;
