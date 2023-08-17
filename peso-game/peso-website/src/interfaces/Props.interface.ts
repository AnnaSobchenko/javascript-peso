export interface LanguageFCComponentsProps {
  lng: string;
}
export interface NavBarFCComponentsProps {
  lng: string;
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
  lng: string;
  id: string;
  
}
