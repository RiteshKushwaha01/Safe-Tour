import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Globe, ChevronDown } from 'lucide-react';

const LanguageSelector: React.FC = () => {
  const [selectedLang, setSelectedLang] = useState('en');
  const [isOpen, setIsOpen] = useState(false);

  const languages = [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'hi', name: 'हिंदी (Hindi)', flag: '🇮🇳' },
    { code: 'es', name: 'Español', flag: '🇪🇸' },
    { code: 'fr', name: 'Français', flag: '🇫🇷' },
    { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
    { code: 'ja', name: '日本語', flag: '🇯🇵' },
    { code: 'zh', name: '中文', flag: '🇨🇳' },
    { code: 'ru', name: 'Русский', flag: '🇷🇺' }
  ];

  const selectedLanguage = languages.find(lang => lang.code === selectedLang);

  const demoTexts = {
    en: {
      welcome: 'Welcome to SafeTour',
      emergency: 'Emergency Help Available',
      location: 'Your location is being monitored for safety'
    },
    hi: {
      welcome: 'सेफटूर में आपका स्वागत है',
      emergency: 'आपातकालीन सहायता उपलब्ध',
      location: 'आपकी सुरक्षा के लिए आपके स्थान की निगरानी की जा रही है'
    },
    es: {
      welcome: 'Bienvenido a SafeTour',
      emergency: 'Ayuda de emergencia disponible',
      location: 'Su ubicación está siendo monitoreada por seguridad'
    },
    fr: {
      welcome: 'Bienvenue sur SafeTour',
      emergency: 'Aide d\'urgence disponible',
      location: 'Votre emplacement est surveillé pour la sécurité'
    },
    de: {
      welcome: 'Willkommen bei SafeTour',
      emergency: 'Notfallhilfe verfügbar',
      location: 'Ihr Standort wird aus Sicherheitsgründen überwacht'
    },
    ja: {
      welcome: 'SafeTourへようこそ',
      emergency: '緊急時のヘルプが利用可能',
      location: 'あなたの位置は安全のために監視されています'
    },
    zh: {
      welcome: '欢迎来到SafeTour',
      emergency: '紧急帮助可用',
      location: '您的位置正在被监控以确保安全'
    },
    ru: {
      welcome: 'Добро пожаловать в SafeTour',
      emergency: 'Экстренная помощь доступна',
      location: 'Ваше местоположение отслеживается для безопасности'
    }
  };

  const currentTexts = demoTexts[selectedLang as keyof typeof demoTexts] || demoTexts.en;

  return (
    <div className="max-w-2xl mx-auto">
      {/* Language Selector */}
      <div className="relative mb-8">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-3 flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200"
        >
          <div className="flex items-center space-x-3">
            <Globe className="w-5 h-5 text-blue-600" />
            <span className="text-2xl">{selectedLanguage?.flag}</span>
            <span className="font-medium text-gray-900 dark:text-white">
              {selectedLanguage?.name}
            </span>
          </div>
          <ChevronDown className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
        </button>

        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-full left-0 right-0 mt-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-xl z-10 max-h-64 overflow-y-auto"
          >
            {languages.map((language) => (
              <button
                key={language.code}
                onClick={() => {
                  setSelectedLang(language.code);
                  setIsOpen(false);
                }}
                className="w-full px-4 py-3 text-left hover:bg-gray-50 dark:hover:bg-gray-700 flex items-center space-x-3 transition-colors duration-200"
              >
                <span className="text-2xl">{language.flag}</span>
                <span className="font-medium text-gray-900 dark:text-white">
                  {language.name}
                </span>
              </button>
            ))}
          </motion.div>
        )}
  </div>

      {/* Demo Interface */}
      <motion.div
        key={selectedLang}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-gradient-to-br from-blue-500 to-purple-600 p-8 rounded-2xl text-white"
      >
        <h3 className="text-2xl font-bold mb-6">{currentTexts.welcome}</h3>
        
        <div className="space-y-4">
          <div className="bg-white/20 backdrop-blur rounded-lg p-4">
            <div className="flex items-center space-x-2 mb-2">
              <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
              <span className="font-medium">{currentTexts.emergency}</span>
            </div>
          </div>
          
          <div className="bg-white/20 backdrop-blur rounded-lg p-4">
            <div className="flex items-center space-x-2 mb-2">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span className="font-medium">{currentTexts.location}</span>
            </div>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-4">
          <button className="bg-white/20 hover:bg-white/30 p-3 rounded-lg transition-colors text-center">
            <Phone className="w-6 h-6 mx-auto mb-2" />
            <div className="text-sm">
              {selectedLang === 'hi' ? 'कॉल करें' : 
               selectedLang === 'es' ? 'Llamar' :
               selectedLang === 'fr' ? 'Appeler' :
               selectedLang === 'de' ? 'Anrufen' :
               selectedLang === 'ja' ? '電話' :
               selectedLang === 'zh' ? '呼叫' :
               selectedLang === 'ru' ? 'Звонок' : 'Call Help'}
            </div>
          </button>
          <button className="bg-white/20 hover:bg-white/30 p-3 rounded-lg transition-colors text-center">
            <MapPin className="w-6 h-6 mx-auto mb-2" />
            <div className="text-sm">
              {selectedLang === 'hi' ? 'स्थान साझा करें' : 
               selectedLang === 'es' ? 'Compartir ubicación' :
               selectedLang === 'fr' ? 'Partager la position' :
               selectedLang === 'de' ? 'Standort teilen' :
               selectedLang === 'ja' ? '位置共有' :
               selectedLang === 'zh' ? '分享位置' :
               selectedLang === 'ru' ? 'Поделиться местоположением' : 'Share Location'}
            </div>
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default LanguageSelector;