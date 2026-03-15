import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { translations, Lang, T } from '../i18n/translations';

interface LanguageContextType {
    lang: Lang;
    t: T;
    toggleLang: () => void;
}

const LanguageContext = createContext<LanguageContextType | null>(null);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
    const [lang, setLang] = useState<Lang>(() => {
        // Persist last chosen language
        return (localStorage.getItem('portfolio-lang') as Lang) ?? 'fr';
    });

    useEffect(() => {
        localStorage.setItem('portfolio-lang', lang);
        document.documentElement.setAttribute('lang', lang);
    }, [lang]);

    const toggleLang = () => setLang((l) => (l === 'fr' ? 'en' : 'fr'));
    const t = translations[lang] as T;

    return (
        <LanguageContext.Provider value={{ lang, toggleLang, t }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLang = (): LanguageContextType => {
    const ctx = useContext(LanguageContext);
    if (!ctx) throw new Error('useLang must be used inside <LanguageProvider>');
    return ctx;
};
