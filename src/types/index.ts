export type ThemeType = {
  palette: object;
  gradient: string;
}

export type Theme = "dark" | "light";

export interface IThemeContext {
  theme: Theme;
}