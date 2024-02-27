import { createContext } from "react";

// types
import { IThemeContext } from "../types";

// themes
import { defaultTheme } from "../theme";

const context: IThemeContext = {
  theme: defaultTheme
}

export const ThemeContext = createContext(context);