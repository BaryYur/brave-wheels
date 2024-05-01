import { palette } from "./palette";

import { Theme } from "../types";

export const defaultTheme: Theme = "light";

export const breakpoints = {
  bigScreen: 1276,
  laptop: 1000,
  smallLaptop: 992,
  tablet: 768,
  phone: 480,
  smallPhone: 360,
};

const light = {
  palette,
  gradient:
    "radial-gradient(38.29% 234.6% at 52.08% 56.11%, #554D47 0%, #1D1B19 100%)",
  breakpoints: breakpoints,
};

const dark = {
  palette,
};

export const theme = {
  light,
  dark,
};
