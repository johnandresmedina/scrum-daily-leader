import { addLocaleData as addLocalData } from 'react-intl';
import locale_en from 'react-intl/locale-data/en';
import locale_es from 'react-intl/locale-data/es';

import en from './en.json';
import es from './es.json';

const messages = {
    en: en,
    es: es,
};

const addLocaleData = () => {
    addLocalData([...locale_en, ...locale_es]);
};

const getCurrentLanguage = () => {
    return navigator.language.split(/[-_]/)[0];
};

const getLanguageConfig = () => {
    const currentLanguage = getCurrentLanguage();

    return {
        locale: currentLanguage,
        messages: messages[currentLanguage],
    };
};

export { addLocaleData, getLanguageConfig };
