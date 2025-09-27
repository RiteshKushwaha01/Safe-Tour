import React, { createContext, useContext, useState, useEffect } from 'react'

export interface Language {
  code: string
  name: string
  nativeName: string
  flag: string
}

export const languages: Language[] = [
  { code: 'en', name: 'English', nativeName: 'English', flag: '🇺🇸' },
  { code: 'hi', name: 'Hindi', nativeName: 'हिन्दी', flag: '🇮🇳' },
  { code: 'bengali', name: 'Bengali', nativeName: 'বাংলা', flag: '🇧🇩' },
  { code: 'marathi', name: 'Marathi', nativeName: 'मराठी', flag: '🇮🇳' },
  { code: 'tamil', name: 'Tamil', nativeName: 'தமிழ்', flag: '🇮🇳' },
  { code: 'telugu', name: 'Telugu', nativeName: 'తెలుగు', flag: '🇮🇳' }
]

interface LanguageContextType {
  currentLanguage: string
  setLanguage: (languageCode: string) => void
  t: (key: string) => string
  getCurrentLanguage: () => Language
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}

interface LanguageProviderProps {
  children: React.ReactNode
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState<string>('en')
  const [translations, setTranslations] = useState<Record<string, any>>({})

  // Load translations for the current language
  useEffect(() => {
    const loadTranslations = async () => {
      try {
        const translationModule = await import(`../translations/${currentLanguage}.json`)
        setTranslations(translationModule.default)
      } catch (error) {
        console.warn(`Failed to load translations for ${currentLanguage}, falling back to English`)
        try {
          const fallbackModule = await import('../translations/en.json')
          setTranslations(fallbackModule.default)
        } catch (fallbackError) {
          console.error('Failed to load fallback translations')
        }
      }
    }

    loadTranslations()
  }, [currentLanguage])

  // Load saved language from localStorage
  useEffect(() => {
    const savedLanguage = localStorage.getItem('selectedLanguage')
    if (savedLanguage && languages.find(lang => lang.code === savedLanguage)) {
      setCurrentLanguage(savedLanguage)
    }
  }, [])

  const setLanguage = (languageCode: string) => {
    setCurrentLanguage(languageCode)
    localStorage.setItem('selectedLanguage', languageCode)
  }

  const t = (key: string): string => {
    const keys = key.split('.')
    let value: any = translations

    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k]
      } else {
        return key // Return key if translation not found
      }
    }

    return typeof value === 'string' ? value : key
  }

  const getCurrentLanguage = (): Language => {
    return languages.find(lang => lang.code === currentLanguage) || languages[0]
  }

  const value: LanguageContextType = {
    currentLanguage,
    setLanguage,
    t,
    getCurrentLanguage
  }

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  )
}
