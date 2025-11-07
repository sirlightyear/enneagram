import React from 'react';
import { ArrowRight, Info } from 'lucide-react';

interface WingTestIntroProps {
  primaryType: string;
  onStart: () => void;
  onSkip: () => void;
}

const WingTestIntro: React.FC<WingTestIntroProps> = ({ primaryType, onStart, onSkip }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-cyan-50 to-purple-100 py-8 px-4">
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
            <h1 className="text-3xl font-bold text-gray-800 mb-2">Vill du veta mer om din {primaryType}?</h1>
            <p className="text-gray-600 text-lg">Upptäck dina Enneagram-vingar för en ännu djupare förståelse</p>
          </div>

          <div className="bg-indigo-50 rounded-lg p-6 mb-8">
            <h2 className="text-xl font-semibold text-indigo-800 mb-4">Vad är Enneagram-vingar?</h2>
            <div className="space-y-4 text-indigo-700">
              <p>
                Inom Enneagrammet har varje typ två granntyper – kallade **vingar**. Din vinge är **inte en extra typ**
                som du också är, utan en **nyans** som färgar din grundtyp. De flesta människor har en dominerande vinge, men vi har
                tillgång till båda vingarna.
              </p>
              <p>
                Den ena vingen kan vara mer utvecklad än den andra, men med medvetenhet och personlig utveckling kan vi integrera kvaliteter
                från båda sidor. Därför handlar det inte om att 'hitta sin vinge' som något fast, utan om att **upptäcka hur dina vingar
                påverkar din personlighet** – och hur du kan arbeta med dem.
              </p>
              
              <div className="bg-white rounded-lg p-4 border border-indigo-200">
                <h3 className="font-semibold text-indigo-800 mb-2">För din {primaryType}:</h3>
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
                Som {primaryType} kan du vara påverkad av båda granntyperna, men typiskt
                kommer den ena vingen att vara mer dominant än den andra.
              </p>

              <div className="bg-white rounded-lg p-4 border border-indigo-200">
                <h3 className="font-semibold text-indigo-800 mb-2">Vad kan du förvänta dig?</h3>
                <ul className="space-y-1 text-sm">
                  <li>• 10 frågor som jämför hur du använder dina två vingar</li>
                  <li>• En detaljerad beskrivning av din dominerande vinge</li>
                  <li>• Förståelse för hur vingarna nyanserar din {primaryType} personlighet</li>
                  <li>• Tar bara 3-5 minuter att genomföra</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={onStart}
              className="inline-flex items-center justify-center px-8 py-4 bg-indigo-600 text-white font-semibold text-lg rounded-lg hover:bg-indigo-700 transition-colors duration-200 shadow-lg hover:shadow-xl"
            >
              Ja, låt oss upptäcka mina vingar!
              <ArrowRight className="w-6 h-6 ml-2" />
            </button>
            
            <button
              onClick={onSkip}
              className="inline-flex items-center justify-center px-8 py-4 bg-gray-200 text-gray-700 font-semibold text-lg rounded-lg hover:bg-gray-300 transition-colors duration-200"
            >
              Nej tack, jag är färdig
            </button>
          </div>

          <p className="text-center text-gray-500 text-sm mt-6">
            Du kan alltid återvända och göra vingtestet senare
          </p>
        </div>
      </div>
    </div>
  );
};

// Helper functions to explain wings for each type (dansk til svensk oversættelse)
const getWingExplanation = (type: string): string => {
  const explanations: Record<string, string> = {
    'Type 1': 'Som Perfektionist kan du antingen vara mer diplomatisk och fredlig (påverkad av Typ 9) eller mer hjälpsam och relationsorienterad (påverkad av Typ 2).',
    'Type 2': 'Som Hjälpare kan du antingen vara mer principfast och strukturerad (påverkad av Typ 1) eller mer ambitiös och prestationsorienterad (påverkad av Typ 3).',
    'Type 3': 'Som Prestationsorienterad kan du antingen vara mer hjälpsam och charmig (påverkad av Typ 2) eller mer kreativ och individualistisk (påverkad av Typ 4).',
    'Type 4': 'Som Individualist kan du antingen vara mer ambitiös och utåtriktad (påverkad av Typ 3) eller mer tillbakadragen och analytisk (påverkad av Typ 5).',
    'Type 5': 'Som Utredare kan du antingen vara mer kreativ och känslomässig (påverkad av Typ 4) eller mer lojal och säkerhetsorienterad (påverkad av Typ 6).',
    'Type 6': 'Som Lojalist kan du antingen vara mer analytisk och tillbakadragen (påverkad av Typ 5) eller mer optimistisk och äventyrlig (påverkad av Typ 7).',
    'Type 7': 'Som Entusiast kan du antingen vara mer lojal och ansvarig (påverkad av Typ 6) eller mer kraftfull och självsäker (påverkad av Typ 8).',
    'Type 8': 'Som Utmanare kan du antingen vara mer energisk och optimistisk (påverkad av Typ 7) eller mer fredlig och diplomatisk (påverkad av Typ 9).',
    'Type 9': 'Som Fredsmäklare kan du antingen vara mer kraftfull och självsäker (påverkad av Typ 8) eller mer principfast och strukturerad (påverkad av Typ 1).'
  };
  return explanations[type] || '';
};

const getWingNames = (type: string) => {
  const wings: Record<string, {wingA: string, wingB: string}> = {
    'Type 1': {wingA: 'Typ 1w9 - Den Idealistiska Fredsmäklaren', wingB: 'Typ 1w2 - Den Hjälpsamma Perfektionisten'},
    'Type 2': {wingA: 'Typ 2w1 - Den Principfasta Hjälparen', wingB: 'Typ 2w3 - Den Ambitiösa Hjälparen'},
    'Type 3': {wingA: 'Typ 3w2 - Den Charmiga Presteraren', wingB: 'Typ 3w4 - Den Professionella Individualisten'},
    'Type 4': {wingA: 'Typ 4w3 - Den Aristokratiska Individualisten', wingB: 'Typ 4w5 - Den Bohémiska Individualisten'},
    'Type 5': {wingA: 'Typ 5w4 - Den Ikonoklastiska Tänkaren', wingB: 'Typ 5w6 - Den Problemlösande Tänkaren'},
    'Type 6': {wingA: 'Typ 6w5 - Den Försiktiga Lojalisten', wingB: 'Typ 6w7 - Den Kamratliga Lojalisten'},
    'Type 7': {wingA: 'Typ 7w6 - Den Kamratliga Entusiasten', wingB: 'Typ 7w8 - Den Realistiska Entusiasten'},
    'Type 8': {wingA: 'Typ 8w7 - Den Aggressiva Entusiasten', wingB: 'Typ 8w9 - Den Bergfasta Utmanaren'},
    'Type 9': {wingA: 'Typ 9w8 - Domaren', wingB: 'Typ 9w1 - Drömmaren'}
  };
  return wings[type] || {wingA: '', wingB: ''};
};

const getWingShortDescription = (type: string, wing: 'A' | 'B'): string => {
  const descriptions: Record<string, {A: string, B: string}> = {
    'Type 1': {A: 'Mer diplomatisk och fredlig inställning till perfektion', B: 'Mer hjälpsam och relationsorienterad perfektionist'},
    'Type 2': {A: 'Hjälpare med höga principer och struktur', B: 'Hjälpare med ambition och fokus på framgång'},
    'Type 3': {A: 'Charmig presterare som hjälper andra', B: 'Kreativ presterare med fokus på autenticitet'},
    'Type 4': {A: 'Utåtriktad individualist med ambitioner', B: 'Tillbakadragen individualist med djup'},
    'Type 5': {A: 'Kreativ tänkare med känslomässigt djup', B: 'Praktisk tänkare med fokus på säkerhet'},
    'Type 6': {A: 'Försiktig lojalist med analytisk inställning', B: 'Optimistisk lojalist med äventyrslystnad'},
    'Type 7': {A: 'Ansvarig entusiast med lojalitet', B: 'Kraftfull entusiast med självsäkerhet'},
    'Type 8': {A: 'Energisk utmanare med optimism', B: 'Lugn utmanare med diplomatisk inställning'},
    'Type 9': {A: 'Kraftfull fredsmäklare med självsäkerhet', B: 'Principfast fredsmäklare med struktur'}
  };
  return descriptions[type]?.[wing] || '';
};
export default WingTestIntro;
