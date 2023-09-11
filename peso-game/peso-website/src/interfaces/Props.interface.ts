export interface LanguageFCComponentsProps {
  lang: string;
}
export interface TextFCComponentsProps {
  lng: string;
  textTr: {
    [key: string]: any;
  };
}
export interface HeroTextFCComponentsProps {
  textTr: {
    [key: string]: any;
  };
}
export interface NewsTextFCComponentsProps {
  textTr: {
    id: {
      name: string;
      text: string;
    };
  };
}

export interface LngTextFCComponentsProps {
  lang: string;
  textTr: {
    [key: string]: any;
  };
}
export interface NavBarFCComponentsProps {
  lang: string;
  textTr: {
    [key: string]: any;
  };
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface NavItemFCComponentsProps {
  text: string;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  href: string;
  pathName: string;
}

export interface CountdownTimerProps {
  days: string;
  hours: string;
  minutes: string;
  seconds: string;
}
export interface FormData {
  name: string;
  email: string;
  message: string;
}

export interface ShipList {
  id: number;
  name: string;
  img: string;
}

export interface LanguageShipComponentsProps {
  lang: string;
  id: string;
}

export interface MainBtn {
  text: string;
  onClick: () => void;
}

export interface LanguageShipComponentsPropsId {
  lang: string;
   textTr: {
    [key: string]: any;
  };
  id: string;
  
}

export interface ShipData {
 
  id: string;
  nameEn: string;
  nameUa: string;
  textEn: string;
  textUa: string;
  img: string;
  model: {
    url: string;
  };
  options: {
    points: string;
    speed: string;
    armor: string;
    cannons: string;
    harpoons: string;
    weapons: string;
    sight: string;
    ability: string;
  };
}
