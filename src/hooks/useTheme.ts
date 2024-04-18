import { useContext } from "react";

// themes
import { theme } from "../theme";

// contexts
import { ThemeContext } from "../context";

// types
import { IThemeContext } from "../types";

export function useTheme () {
  const { theme: currTheme }: IThemeContext = useContext(ThemeContext);

  return theme[currTheme];
}