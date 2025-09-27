import { useLanguage } from '../contexts/LanguageContext'

export const useTranslation = () => {
  const { t, currentLanguage, getCurrentLanguage } = useLanguage()

  return {
    t,
    currentLanguage,
    getCurrentLanguage
  }
}

export default useTranslation
