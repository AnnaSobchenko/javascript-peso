export const fallbackLng =
  (typeof window !== "undefined" && localStorage.getItem("lng")) || "en";
export const languages = ["en", "ua"];
export const defaultNS = "translation";

export function getOptions(
  lng = fallbackLng,
  ns: string | string[] = defaultNS
) {
  // console.log("lng getOptions:>> ", lng, new Date());
  return {
    // debug: true,
    supportedLngs: languages,
    fallbackLng,
    lng,
    fallbackNS: defaultNS,
    defaultNS,
    ns,
  };
}
