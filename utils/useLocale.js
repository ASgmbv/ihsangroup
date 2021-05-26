import { useRouter } from "next/router";
import * as en from "../locales/en";
import * as ru from "../locales/ru";
import * as kg from "../locales/kg";

export const useLocale = (page) => {
   const router = useRouter();
   const { locale } = router;

   let language;

   switch (locale) {
      case "en": {
         language = en;
         break;
      }
      case "ru": {
         language = ru;
         break;
      }
      case "kg": {
         language = kg;
         break;
      }
      default: {
         language = ru;
         break;
      }
   }

   return [language[page], locale];
};
