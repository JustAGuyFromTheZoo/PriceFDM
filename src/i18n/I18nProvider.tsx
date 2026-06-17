import React, { createContext, useContext } from 'react';
import type { AppLanguage } from '../types';
import { translations, type TranslationKeys } from './translations';

interface I18nContext {
  t: TranslationKeys;
  lang: AppLanguage;
}

const Context = createContext<I18nContext>({
  t: translations.ru,
  lang: 'ru',
});

interface Props {
  lang: AppLanguage;
  children: React.ReactNode;
}

export const I18nProvider: React.FC<Props> = ({ lang, children }) => (
  <Context.Provider value={{ t: translations[lang], lang }}>
    {children}
  </Context.Provider>
);

export function useTranslation(): I18nContext {
  return useContext(Context);
}
