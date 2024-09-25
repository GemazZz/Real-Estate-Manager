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

export interface Region {
  id: number;
  name: string;
  checked?: boolean;
}
