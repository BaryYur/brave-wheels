export type ThemeType = {
  palette: object;
  gradient: string;
}

export type Theme = "dark" | "light";

export interface IThemeContext {
  theme: Theme;
}

export type Bike = {
  id: string;
  name: string;
  bicycleType: string;
  materialType: string;
  frameType: string;
  sale: boolean;
  price: number;
  wheelSize: number;
  color: string;
  description: string;
  brand: string;
  weight: number;
  brakeType: string;
  guarantee: number;
  quantity: number;
  images: string[];
  localQuantity?: number;
}

export type FilterTypes = {
  search: string;
  bicycleType: string[];
  minPrice: string;
  maxPrice: string;
  materialType: string[];
  wheelSize: string[];
  frameType: string[];
}