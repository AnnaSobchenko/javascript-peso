// import the original type declarations
import "i18next";
// import all namespaces (for the default language, only)
import main from "locales/en/main.json";

declare module "i18next" {
  // Extend CustomTypeOptions
  interface CustomTypeOptions {
    // custom namespace type, if you changed it
    defaultNS: "main";
    // custom resources type
    resources: {
      main: typeof main;
    };
    // other
  }
}
