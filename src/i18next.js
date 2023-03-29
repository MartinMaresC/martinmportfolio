import i18next from "i18next";

import { initReactI18next } from "react-i18next";

i18next.use(initReactI18next).init({
    ns: ['common'],
    resources: {
        en: {
            translation: {
                about: "About",
            },
        },
        fr: {
            translation: {
                about: "A propos de",
            },
        }
    },

    translations: "fr",
});

export default i18next;