export interface IHeaderProps {
  active: boolean;
  lng: string;
  onClick: () => void;
}

export interface LanguageFCComponentsProps {
  lng: string;
}
export interface CountdownTimerProps {
  days: string;
  hours: string;
  minutes: string;
  seconds: string;
}