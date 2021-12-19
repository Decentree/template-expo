import * as Localization from "expo-localization";
import i18n from "i18n-js";

import cs from "./cs.json";
import en from "./en.json";

i18n.translations = {
  en,
  cs,
};
i18n.locale = Localization.locale;
i18n.fallbacks = true;

export default i18n;
