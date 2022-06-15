import { createContext } from "react";
import { translations } from "./translations.jsx";

export const LanguageContext = createContext(translations.english);
