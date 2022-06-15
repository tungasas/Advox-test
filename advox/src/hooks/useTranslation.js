import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import { translations } from "../context/LanguageContext/translations";

function getDescendantProp(obj, desc) {
  let arr = desc.split(".");
  while (arr.length) {
    obj = obj[arr.shift()];
  }
  return obj;
}

export function useTranslation() {
  const { language } = useContext(LanguageContext);

  const t = (contentID) => {
    // return translations[language][contentID];
    return getDescendantProp(translations[language], contentID);
  };

  return { t };
}
