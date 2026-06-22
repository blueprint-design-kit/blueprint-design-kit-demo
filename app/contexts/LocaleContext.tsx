'use client';

import { createContext, useContext } from 'react';
import { useParams } from 'next/navigation';

const LocaleContext = createContext('en-US');

export const LocaleProvider = ({ children }) => {
    const { locale } = useParams();
    const value = locale ? String(locale) : 'en-US';
    return (
        <LocaleContext.Provider value={value}>
            {children}
        </LocaleContext.Provider>
    );
};

export const useLocale = () => useContext(LocaleContext);
