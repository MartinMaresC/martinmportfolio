
import i18next from "i18next";

import { initReactI18next } from "react-i18next";

import fr from './Translations/fr.json';
import en from './Translations/en.json';


i18next.use(initReactI18next).init({
    ns: ['common', 'About', 'Navbar', 'Textabout', 'Contact'],
    lng: localStorage.getItem("lng") || "en",
    resources: {
        
        en: {
            About: en,
            Navbar: en,
            Textabout: en,
            Contact: en
        },

        fr: {
            About: fr,
            Navbar: fr,
            Textabout: fr,
            Contact: fr
        },
    },
});

console.log(i18next.getResourceBundle('en', 'translation'));

export default i18next;