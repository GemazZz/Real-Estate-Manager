export interface FilterProps {
  region?: string;
  price?: [number, number];
  square?: [number, number];
  bedroomCount?: number;
}
export interface FilterBtnProps {
  region?: string;
  price?: [number, number];
  square?: [number, number];
  bedroomCount?: number;
  func: () => void;
}
