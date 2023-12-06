"use client"
import React, { createContext, useContext, useEffect, useState } from 'react'

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
    const [lang, setLang] = useState('en');

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const storedLang = localStorage.getItem('selectedLanguage');
            if (storedLang) {
                setLang(storedLang);
            }
        }
    }, []);

    const changeLang = (newLang) => {
        if (typeof window !== 'undefined') {
            localStorage.setItem('selectedLanguage', newLang);
            setLang(newLang);
        }
    };

    return (
        <LanguageContext.Provider value={{ lang, changeLang }}>
            {children}
        </LanguageContext.Provider>
    )
}
export const useLanguage = () => {
    return useContext(LanguageContext);
}
