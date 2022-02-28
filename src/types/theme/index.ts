import type { ThemeTokens } from "@stitches/react/types/stitches";

export type ThemesKeys = "dark" | "light";
export type ThemeProperties = {
  colors: {
    primaryColor: string;
    secondaryColor: string;
    accentColor: string;
  };
};
export type Theme = {
  theme: string & {
    className: string;
    selector: string;
  } & ThemeTokens<ThemeProperties, "">;
  switchTheme: () => void;
  isDarkMode: boolean;
};
