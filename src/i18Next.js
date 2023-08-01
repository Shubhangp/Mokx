import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
    resources: {
        en: {
            translation: {
                "namaste": "Namaste! I’m Arya, your AI Vedic help. I'm here to provide insights from Vedas for daily life concerns. Whether you seek guidance on mantras, general life advice, or specific Vedic interpretations, I'm here to assist you.",
                "curiosityGuide": "Let your curiosity guide you; wishing you blessings and enlightenment 🕉️"
            }
        },
        hi: {
            translation: {
                "namaste": "नमस्ते! मैं आर्य हूं, आपकी एआई वैदिक सहायता। मैं यहां दैनिक जीवन की चिंताओं के लिए वेदों से अंतर्दृष्टि प्रदान करने के लिए हूं। चाहे आप मंत्रों, सामान्य जीवन सलाह, या विशिष्ट वैदिक व्याख्याओं पर मार्गदर्शन चाहते हों, मैं आपकी सहायता के लिए यहां हूं।",
                "curiosityGuide": "अपनी जिज्ञासा को आपका मार्गदर्शन करने दें; आपके आशीर्वाद और ज्ञान की कामना 🕉️"
            }
        }
    },
    lng: "en",
})

export default i18n;