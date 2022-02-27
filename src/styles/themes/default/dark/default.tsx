import { createTheme } from "@/styles/themes/default";
import type { ThemesKeys, ThemeProperties } from "@/types/theme";

const dark = createTheme<ThemesKeys, ThemeProperties>("dark", {
  colors: {
    primaryColor: "#292B2B",
    secondaryColor: "#604436",
    accentColor: "#C79273",
  },
});

export { dark };
