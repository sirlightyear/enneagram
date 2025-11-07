import React from 'react';

interface LanguageSelectorProps {
  currentLanguage: string;
  onLanguageChange: (language: string) => void;
}

const languages = [
  { code: 'da', name: 'Dansk', flagCode: 'dk' },
  { code: 'en', name: 'English', flagCode: 'gb' },
  { code: 'de', name: 'Deutsch', flagCode: 'de' },
  { code: 'se', name: 'Svenska', flagCode: 'se' },
  { code: 'nl', name: 'Nederlands', flagCode: 'nl' },
  { code: 'uk', name: 'Українська', flagCode: 'ua' }
];

const LanguageSelector: React.FC<LanguageSelectorProps> = ({ currentLanguage, onLanguageChange }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const currentLang = languages.find(l => l.code === currentLanguage) || languages[0];

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
      >
        <span className={'fi fi-' + currentLang.flagCode} style={{ width: '24px', height: '18px', fontSize: '20px' }}></span>
        <span className="text-sm font-medium text-gray-700">{currentLang.name}</span>
      </button>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-10"
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute top-full mt-2 right-0 bg-white rounded-lg shadow-xl border border-gray-200 py-2 min-w-[180px] z-20">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => {
                  onLanguageChange(lang.code);
                  setIsOpen(false);
                }}
                className={'w-full px-4 py-2 text-left hover:bg-gray-50 flex items-center gap-3 ' + (currentLanguage === lang.code ? 'bg-blue-50' : '')}
              >
                <span className={'fi fi-' + lang.flagCode} style={{ width: '24px', height: '18px', fontSize: '20px' }}></span>
                <span className="text-sm font-medium text-gray-700">{lang.name}</span>
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default LanguageSelector;
