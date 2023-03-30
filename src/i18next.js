
import i18next from "i18next";

import { initReactI18next } from "react-i18next";

i18next.use(initReactI18next).init({
    ns: ['common', 'About'],
    lng: "fr",
    resources: {
        
        en: {
            About: {
                about: "about"
            },
        },

        fr: {
            About: {
                about: "A propos de"
            },
        },
        /*
        en: {
            translation: {
                about: "About",
            },
        },
        fr: {
            translation: {
                about: "A propos de",
            },
        }*/
    },
});

console.log(i18next.getResourceBundle('en', 'translation'));

export default i18next;